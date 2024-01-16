import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { AntPhoneInput } from "./AntPhoneInput/AntPhoneInput";
import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";

interface FormAntPhoneProps {
  name: string;
  label?: string;
  size?: "large" | "small";
}

const FormPhoneInput: React.FC<FormAntPhoneProps> = ({ name, label, size }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label ? <span>{label}</span> : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <AntPhoneInput
              {...field}
              size={size}
              value={field.value}
              onChange={field.onChange}
            />
          );
        }}
      />
      <small className="text-red-500">{errorMessage}</small>
    </>
  );
};

export default FormPhoneInput;
