import { getErrorMessageByPropertyName } from "@/utils/schemaValidator";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  size?: "large" | "small";
  placeholder?: string;
};

const FormTextArea = ({
  name,
  label,
  rows,
  value,
  size,
  placeholder,
}: TextAreaProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className={`flex flex-col  w-full`}>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            size={size}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
      <small className="text-red-500">{errorMessage}</small>
    </div>
  );
};

export default FormTextArea;
