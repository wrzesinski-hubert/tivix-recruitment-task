import styled from "styled-components";

export const ChoosingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

export const FiguresWrapper = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
