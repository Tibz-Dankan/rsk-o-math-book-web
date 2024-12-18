import { TConvertInput as ConvertInput } from "./convert";

declare global {
  type TConvertInput = ConvertInput;

  type ApiResponse<T> = {
    data: T;
    status: string;
    error?: string;
    message?: string;
  };

  type TBase = {
    name: string;
    number: number;
  };
}

export {};
