export type TConvertInput = {
  walletToCharge: string;
  inputNumber: string;
  inputBase: string;
  outputBase: string;
};

export type TConvertResponse = {
  walletToCharge: string;
  inputNumber: string;
  inputBase: string;
  outputBase: string;
  outputHexadecimal: string;
  outputNumber: string;
};
