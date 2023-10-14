import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  &:not(:nth-child(1)):not(:nth-child(2)):not(:nth-last-child(2)):not(
      :last-child
    ) {
    grid-column: 1 / span 2;
  }
`;
export const Label = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: #ffffff;
`;

type InputType = {
  hasError: boolean;
};

export const Input = styled.input<InputType>`
  width: 100%;
  border-radius: 6px;
  border: 0px;
  padding: 12px;
  font-weight: 600;
  ${({ hasError }: InputType) => hasError && "border:1px solid red"}
`;

export const ErrorMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
export const ErrorMessage = styled.div`
  color: #ca3838;
  font-weight: 400;
  font-size: 10px;
`;
