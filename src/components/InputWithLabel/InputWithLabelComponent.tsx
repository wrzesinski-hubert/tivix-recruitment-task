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
  inputValidationRules,
  setAreAnyErrors,
}: {
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
}) {
  const [inputStates, setInputStates] = useState<{
    value: string;
    isTouched: boolean;
    isValid: boolean;
    errors: string[];
  }>({
    value: "",
    isTouched: false,
    isValid: false,
    errors: [],
  });

  useEffect(() => {
    inputValidationRules?.map((rule) => {
      if (!rule.rule(inputStates.value)) {
        setAreAnyErrors(
          (
            prev: {
              name: string;
              hasErrors: boolean;
            }[]
          ) => {
            const newArray = [...prev];
            const index = newArray.findIndex(
              (element) => element.name === label
            );
            newArray[index].hasErrors = true;
            return newArray;
          }
        );
        setInputStates((prev) => {
          return {
            ...prev,
            errors: [...prev.errors, rule.message],
            isValid: false,
          };
        });
      } else {
        setInputStates({ ...inputStates, errors: [], isValid: true });
        setAreAnyErrors(
          (
            prev: {
              name: string;
              hasErrors: boolean;
            }[]
          ) => {
            const newArray = [...prev];
            const index = newArray.findIndex(
              (element) => element.name === label
            );
            newArray[index].hasErrors = false;
            return newArray;
          }
        );
      }
    });
  }, [inputStates.value]);

  const unique = (value: string, index: number, self: string[]) => {
    return self.indexOf(value) === index;
  };
  return (
    <InputWrapper>
      <Label>
        {label}
        {inputStates.isTouched && !inputStates.isValid && (
          <ErrorMessageWrapper>
            {inputStates.errors.filter(unique).map((message, index) => (
              <ErrorMessage key={index}>*{message}</ErrorMessage>
            ))}
          </ErrorMessageWrapper>
        )}
      </Label>
      <Input
        hasError={inputStates.isTouched && !inputStates.isValid}
        onChange={(e) =>
          setInputStates({ ...inputStates, value: e.target.value })
        }
        onBlur={() => setInputStates({ ...inputStates, isTouched: true })}
        value={inputStates.value}
      />
    </InputWrapper>
  );
}

export default InputWithLabelComponent;
