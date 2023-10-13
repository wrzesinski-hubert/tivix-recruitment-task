import { Input, InputWrapper, Label } from "./styles";

function InputWithLabelComponent({ label }: { label: string }) {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <Input />
    </InputWrapper>
  );
}

export default InputWithLabelComponent;
