import styled from "styled-components";

export const ShippingPageWrapper = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ShippingDetailsWrapper = styled.div``;

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  row-gap: 10px;
  width: 500px;
`;

export const SummaryWrapper = styled.div`
  width: 350px;
  height: 100%;
  box-sizing: border-box;
  box-shadow: 2px 2px 3px 0px rgb(0 0 0 / 50%);
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  background-color: #ffffff;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: space-around;
`;
