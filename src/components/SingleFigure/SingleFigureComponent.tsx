import { Description, FigureWrapper } from "./styles";

function SingleFigureComponent({ isSelected }: { isSelected: boolean }) {
  return (
    <FigureWrapper selected={isSelected}>
      <Description color={"green"}>Albus Dumbledore</Description>
      <Description color={"red"}>Show Details</Description>
    </FigureWrapper>
  );
}

export default SingleFigureComponent;
