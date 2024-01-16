"use client";

import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";
import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type SelectOption = {
  value: string;
  label: string;
};

interface ISelect {
  options: SelectOption[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  label?: string;
  defaultValue?: SelectOption;
  placeholder?: string;
}

const FormSelect = ({
  name,
  size,
  options,
  value,
  label,
  defaultValue,
  placeholder,
}: ISelect) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          return (
            <Select
              size={size}
              placeholder={placeholder ? placeholder : "Please select"}
              value={field.value}
              onChange={field.onChange}
              options={options}
              className="w-full"
            />
          );
        }}
      />
      <small className="text-red-500">{errorMessage}</small>
    </div>
  );
};

export default FormSelect;
