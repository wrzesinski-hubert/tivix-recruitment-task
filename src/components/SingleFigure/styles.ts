import styled from "styled-components";

type FigureWrapperType = {
  selected: boolean;
};

export const FigureWrapper = styled.div<FigureWrapperType>`
  width: 350px;
  height: 350px;
  box-shadow: ${({ selected }: FigureWrapperType) =>
    selected
      ? "0px 0px 10px 3px rgb(255 0 0);"
      : "2px 2px 3px 0px rgb(0 0 0 / 50%);"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #ffffff;
`;

type DescriptionType = {
  color: string;
};

export const Description = styled.div<DescriptionType>`
  color: ${({ color }: DescriptionType) => color};
`;
