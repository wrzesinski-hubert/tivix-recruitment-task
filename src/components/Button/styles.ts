import styled from "styled-components";

export const Button = styled.div`
  text-decoration: none;
  user-select: none;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #1b66d6;
  text-transform: uppercase;
  border-radius: 50px;
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 3px 0px rgb(0 0 0 / 50%);
  cursor: pointer;
  &:active {
    box-shadow: 3px 3px 5px 0px rgb(0 0 0 / 50%);
  }
`;