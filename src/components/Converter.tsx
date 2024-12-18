import React, { useState } from "react";
import { ethers } from "ethers";

export const Converter: React.FC = () => {
  const [walletToCharge, setWalletToCharge] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [inputBase, setInputBase] = useState("10");
  const [outputBase, setOutputBase] = useState("10");

  const [response, setResponse] = useState<null | {
    walletToCharge: string;
    inputNumber: string;
    inputBase: number;
    outputBase: number;
    outputNumber: string;
    outputHexadecimal: string;
  }>(null);

  const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;
  const RPC_URL = import.meta.env.VITE_RPC_URL;
  const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Contract ABI
    const ABI = [
      "function processConversion(address walletToCharge, string inputNumber, uint8 inputBase, uint8 outputBase) public pure returns (address, string, uint8, uint8, string, string)",
    ];

    try {
      const provider = new ethers.JsonRpcProvider(RPC_URL);
      const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

      const converterContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        ABI,
        wallet
      );

      const result = await converterContract.processConversion(
        walletToCharge,
        inputNumber,
        inputBase,
        outputBase
      );

      console.log("RPC Result:", result);

      setResponse(() => {
        return {
          walletToCharge: result[0],
          inputNumber: result[1],
          inputBase: result[2],
          outputBase: result[3],
          outputNumber: result[4],
          outputHexadecimal: result[5],
        };
      });

      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="converter">
      <h1>Number Base Converter</h1>
      <form onSubmit={handleSubmit} className="converter-form">
        {/* Wallet to Charge */}
        <div>
          <label>Wallet to Charge:</label>
          <input
            type="text"
            value={walletToCharge}
            onChange={(e) => setWalletToCharge(e.target.value)}
            required
            placeholder="Enter wallet address"
          />
        </div>

        {/* Input Number */}
        <div>
          <label>Input Number:</label>
          <input
            type="text"
            value={inputNumber}
            onChange={(e) => setInputNumber(e.target.value)}
            required
            placeholder="Enter the number to convert"
          />
        </div>

        {/* Input Base */}
        <div>
          <label>Input Base:</label>
          <select
            value={inputBase}
            onChange={(e) => setInputBase(e.target.value)}
            required
          >
            <option value="2">Binary</option>
            <option value="8">Octal</option>
            <option value="10">Decimal</option>
            <option value="16">Hexadecimal</option>
          </select>
        </div>

        {/* Output Base */}
        <div>
          <label>Output Base:</label>
          <select
            value={outputBase}
            onChange={(e) => setOutputBase(e.target.value)}
            required
          >
            <option value="2">Binary</option>
            <option value="8">Octal</option>
            <option value="10">Decimal</option>
            <option value="16">Hexadecimal</option>
          </select>
        </div>

        <button type="submit">Convert</button>
      </form>

      {/* Display the response */}
      {response && (
        <div className="response">
          <h2>Conversion Result:</h2>
          <p>
            <strong>Wallet to Charge:</strong> {response.walletToCharge}
          </p>
          <p>
            <strong>Input Number:</strong> {response.inputNumber}
          </p>
          <p>
            <strong>Input Base:</strong> {response.inputBase}
          </p>
          <p>
            <strong>Output Base:</strong> {response.outputBase}
          </p>
          <p>
            <strong>Output Number:</strong> {response.outputNumber}
          </p>
          <p>
            <strong>Output Hexadecimal:</strong> {response.outputHexadecimal}
          </p>
        </div>
      )}
    </div>
  );
};
