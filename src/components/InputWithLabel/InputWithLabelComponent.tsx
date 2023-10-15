import { useEffect, useState } from "react";
import {
  ErrorMessage,
  Input,
  InputWrapper,
  Label,
  ErrorMessageWrapper,
} from "./styles";

function InputWithLabelComponent({
  label,
  type,
  inputValidationRules,
  setAreAnyErrors,
  handleInputValueChange,
}: {
  type?: string;
  label: string;
  inputValidationRules: {
    rule: (val: any) => boolean;
    message: string;
  }[];
  setAreAnyErrors: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        hasErrors: boolean;
      }[]
    >
  >;
  handleInputValueChange: (name: string, value: string) => void;
}) {
  const [inputStates, setInputStates] = useState<{
    value: string;
    isTouched: boolean;
    errors: string[];
  }>({
    value: "",
    isTouched: false,
    errors: [],
  });

  useEffect(() => {
    const newErrors: string[] = [];
    let isValid = true;

    inputValidationRules.forEach((rule) => {
      if (!rule.rule(inputStates.value)) {
        newErrors.push(rule.message);
        isValid = false;
      }
    });

    setAreAnyErrors((prev) => {
      const updatedErrors = prev.map((item) =>
        item.name === label ? { ...item, hasErrors: !isValid } : item
      );
      return updatedErrors;
    });

    setInputStates((prevState) => ({
      ...prevState,
      errors: newErrors,
    }));
  }, [inputStates.value]);

  const unique = (value: string, index: number, self: string[]) => {
    return self.indexOf(value) === index;
  };
  return (
    <InputWrapper>
      <Label>
        {label}
        {inputStates.isTouched && inputStates.errors.length > 0 && (
          <ErrorMessageWrapper>
            {inputStates.errors.filter(unique).map((message, index) => (
              <ErrorMessage key={index}>*{message}</ErrorMessage>
            ))}
          </ErrorMessageWrapper>
        )}
      </Label>
      <Input
        type={type}
        hasError={inputStates.isTouched && inputStates.errors.length > 0}
        onChange={(e) => {
          setInputStates({ ...inputStates, value: e.target.value });
          handleInputValueChange(label, e.target.value);
        }}
        onBlur={() => setInputStates({ ...inputStates, isTouched: true })}
        value={inputStates.value}
      />
    </InputWrapper>
  );
}

export default InputWithLabelComponent;
