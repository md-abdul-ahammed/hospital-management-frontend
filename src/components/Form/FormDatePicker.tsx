"use client";

import { DatePicker, DatePickerProps, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";
import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";

interface IDatePicker {
  onChange?: (valueOne: Dayjs | null, valueTwo: string) => void;
  name: string;
  value?: Dayjs;
  size?: "large" | "small";
  label?: string;
  placeholder?: string;
  isWithoutPreviousDate?: boolean;
}

const FormDatePicker = ({
  name,
  label,
  onChange,
  size,
  isWithoutPreviousDate = false,
  placeholder,
}: IDatePicker) => {
  const {
    control,
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  const disabledDate: RangePickerProps["disabledDate"] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().startOf("day");
  };

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
    clearErrors(name);
  };

  return (
    <div>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            placeholder={placeholder}
            name={name}
            size={size}
            {...(isWithoutPreviousDate && { disabledDate })}
            value={field.value ? dayjs(field.value) : null}
            onChange={handleOnChange}
            className="w-full"
          />
        )}
      />
      <small className="text-red-500">{errorMessage}</small>
    </div>
  );
};

export default FormDatePicker;
