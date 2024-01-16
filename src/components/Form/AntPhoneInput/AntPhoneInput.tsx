import { Button, Input, InputRef, Space } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { CountrySelector, usePhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface AntPhoneProps {
  value: string;
  onChange: (phone: string, country: string) => void;
  size?: "large" | "small";
}

export const AntPhoneInput: React.FC<AntPhoneProps> = ({
  value,
  onChange,
  size,
}) => {
  const phoneInput = usePhoneInput({
    defaultCountry: "bd",
    value,
    onChange: (data) => {
      onChange(data.phone, data.country?.iso2 || "");
    },
  });

  const inputRef = useRef<InputRef>(null);
  const [cursorPosition, setCursorPosition] = useState<number | null>(null);

  useEffect(() => {
    if (inputRef.current?.input && cursorPosition !== null) {
      inputRef.current.input.setSelectionRange(cursorPosition, cursorPosition);
    }
  }, [cursorPosition]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const previousValue = phoneInput.phone;
    phoneInput.handlePhoneValueChange(e);
    const lengthDifference = phoneInput.phone.length - previousValue.length;
    setCursorPosition((prevCursorPosition) => {
      return prevCursorPosition !== null
        ? prevCursorPosition + lengthDifference
        : null;
    });
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Space.Compact className="w-full">
        <CountrySelector
          selectedCountry={phoneInput.country.iso2}
          onSelect={(country) => phoneInput.setCountry(country.iso2)}
          renderButtonWrapper={({ children, rootProps }) => (
            <Button
              {...rootProps}
              style={{
                padding: "4px",
                height: "100%",
                zIndex: 1, // fix focus overlap
              }}
            >
              {children}
            </Button>
          )}
          dropdownStyleProps={{
            style: {
              top: "35px",
            },
          }}
        />
        <Input
          placeholder="Phone number"
          type="tel"
          size={size}
          value={phoneInput.phone}
          onChange={handleInputChange}
          ref={inputRef}
        />
      </Space.Compact>
    </div>
  );
};
