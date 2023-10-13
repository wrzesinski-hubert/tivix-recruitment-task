import { useState } from "react";
import SingleFigureComponent from "../../components/SingleFigure/SingleFigureComponent";
import { ChoosingPageWrapper, FiguresWrapper } from "./styles";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { Title, StyledLink } from "../../styles/general";

function ChoosingPage() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <ChoosingPageWrapper>
      <Title onClick={() => setIsSelected(!isSelected)}>
        choose your minifig
      </Title>
      <FiguresWrapper>
        <SingleFigureComponent isSelected={isSelected} />
        <SingleFigureComponent isSelected={isSelected} />
        <SingleFigureComponent isSelected={isSelected} />
      </FiguresWrapper>
      <StyledLink to="/shipping">
        <ButtonComponent>proceed to shipment</ButtonComponent>
      </StyledLink>
    </ChoosingPageWrapper>
  );
}

export default ChoosingPage;
