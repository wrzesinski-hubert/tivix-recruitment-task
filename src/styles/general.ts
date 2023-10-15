import { Link } from "react-router-dom";
import styled from "styled-components";

type TitleType = {
  color?: string;
};

export const Title = styled.h1<TitleType>`
  font-size: 46px;
  text-align: center;
  color: ${({ color }: TitleType) => color || `#ffffff`};
  text-transform: uppercase;
  font-weight: 900;
`;

type StyledLinkType = {
  $isDisabled?: boolean;
};

export const StyledLink = styled(Link)<StyledLinkType>`
  text-decoration: none;
  ${({ $isDisabled }: StyledLinkType) => $isDisabled && "pointer-events: none;"}
`;
