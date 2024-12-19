import {
  TConvertInput as ConvertInput,
  TConvertResponse as ConvertResponse,
} from "./convert";

declare global {
  type TConvertInput = ConvertInput;
  type TConvertResponse = ConvertResponse;

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
