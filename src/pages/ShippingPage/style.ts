import styled from "styled-components";

export const ShippingPageWrapper = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  justify-content: center;
`;

export const ShippingDetailsWrapper = styled.div``;

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  row-gap: 20px;
  width: 500px;
`;

export const SummaryWrapper = styled.div`
  width: 550px;
  height: 100%;
  box-sizing: border-box;
  box-shadow: 2px 2px 3px 0px rgb(0 0 0 / 50%);
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  background-color: #ffffff;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: space-around;
`;

export const SinglePartWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: center;
`;

export const PartImage = styled.img`
  height: 60px;
`;

export const PartDescriptionWrapper = styled.div`
  width: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const PartDescriptionTitle = styled.div`
  color: #000000;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 500;
`;
export const PartDescriptioNumber = styled.div`
  color: #ff9a27;
  font-weight: 700;
`;

export const SummaryTitle = styled.h1`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 900;
  align-self: flex-start;
  margin-left: 15px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 500;
  gap: 10px;
`;
