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
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  background-color: #ffffff;
  gap: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
  box-sizing: border-box;
`;

type DescriptionType = {
  color: string;
  clickable?: boolean;
};

export const Description = styled.div<DescriptionType>`
  color: ${({ color }: DescriptionType) => color};
  margin-left: 30px;
  margin-right: 30px;
  text-align: center;
`;

export const StyledAnchor = styled.a<DescriptionType>`
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  color: ${({ color }: DescriptionType) => color};
`;

export const Image = styled.img`
  height: 150px;
  text-align: center;
`;
