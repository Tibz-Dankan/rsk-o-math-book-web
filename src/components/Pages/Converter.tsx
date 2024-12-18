import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { Loader } from "../UI/Loaders/Loader";
import { InputField } from "../UI/InputField";
import { Button } from "../UI/Button";
import { convertAPI } from "../../API/convert";
import { InputSelect } from "../UI/InputSelect";
import { InputTextArea } from "../UI/InputTextArea";
import baseJson from "../../data/base.json";

export const Converter: React.FC = () => {
  const baseNumList = baseJson.bases;

  const { isPending, mutate } = useMutation({
    mutationFn: convertAPI.post,
    onSuccess: (response: any) => {
      console.log("response: ", response);
    },
    onError: (error: any) => {
      console.log("error message: ", error.message);
    },
  });

  const initialValues: TConvertInput = {
    walletToCharge: "",
    inputBase: "",
    inputNumber: "",
    outputBase: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      walletToCharge: Yup.string().max(45),
      inputBase: Yup.string().max(20).required("This field is required"),
      inputNumber: Yup.string().max(20).required("This field is required"),
      outputBase: Yup.string().max(20).required("This field is required"),
    }),

    onSubmit: async (values, helpers) => {
      const inputBaseObj = getBaseByName(values.inputBase);
      const outputBaseObj = getBaseByName(values.outputBase);
      const walletToChargeValue = values.walletToCharge
        ? values.walletToCharge
        : "0x0000000000000000000000000000000000000000";

      try {
        values.inputBase = inputBaseObj?.number.toString()!;
        values.outputBase = outputBaseObj?.number.toString()!;

        console.log("values:", values);

        mutate({
          inputBase: values.inputBase,
          inputNumber: values.inputNumber,
          outputBase: values.outputBase,
          walletToCharge: walletToChargeValue,
        });
      } catch (err: any) {
        helpers.setStatus({ success: false });
        helpers.setSubmitting(false);
        console.log("Error:", err);
      }
    },
  });

  const getBaseNames = (array: TBase[]) => {
    return array.map((item) => item.name);
  };

  const getBaseByName = (name: string) => {
    return baseNumList.find((item: TBase) => item.name === name);
  };

  const baseOptions = getBaseNames(baseNumList);

  return (
    <Fragment>
      <div className="flex flex-col items-center gap-4 min-h-[100vh]">
        <header
          className="w-full flex items-center justify-center border-b-[1px]
         border-gray-300 py-6"
        >
          <p className="text-gray-700 text-xl font-bold">
            Rootstock O'Level Math
          </p>
        </header>
        <main className="w-full flex flex-col items-center mt-8 space-y-8">
          <div className="w-[90%] sm:w-96s sm:w-[448px]">
            <p className="text-center">
              Convert numbers from one base to another using smart contract
              running on the
              <span className="mx-1 text-primary">Rootstock</span>blockchain
            </p>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-0 items-center w-[90%] sm:w-96s sm:w-[448px]
             p-8 bg-gray-200 rounded-md z-[1]"
          >
            <div className="w-full flex items-center justify-center gap-4">
              <InputSelect
                label="From Base"
                name="inputBase"
                options={baseOptions}
                formik={formik}
              />
              <InputSelect
                label="To Base"
                name="outputBase"
                formik={formik}
                options={baseOptions}
              />
            </div>
            <div className="w-full">
              <InputField
                type="text"
                label="Number To convert"
                name="inputNumber"
                placeholder="Number To convert"
                formik={formik}
              />
            </div>
            <div className="w-full">
              <InputTextArea
                label="Wallet Address(Optional)"
                name="walletToCharge"
                placeholder="Wallet Address compatible with RBTC to be charged for this operation"
                formik={formik}
              />
            </div>
            <Button
              label={
                <>
                  {!isPending && <span>Convert</span>}
                  {isPending && <Loader label="Processing..." className="" />}
                </>
              }
              type="submit"
              disabled={isPending}
              className="w-full mt-6 font-semibold"
            />
          </form>
        </main>
      </div>
    </Fragment>
  );
};
