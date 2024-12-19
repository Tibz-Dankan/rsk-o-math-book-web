import { serverURL } from "../constants";

class ConvertAPI {
  post = async ({
    walletToCharge,
    inputBase,
    inputNumber,
    outputBase,
  }: TConvertInput) => {
    const response = await fetch(`${serverURL}/api/v1/rootstock-o-level-math`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        walletToCharge: walletToCharge,
        inputBase: inputBase,
        inputNumber: inputNumber,
        outputBase: outputBase,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    const data = await response.json();
    return data.data;
  };
}

export const convertAPI = new ConvertAPI();
