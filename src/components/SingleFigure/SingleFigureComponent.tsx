import { Description, FigureWrapper, Image, StyledAnchor } from "./styles";

function SingleFigureComponent({
  isSelected,
  name,
  img,
  url,
  id,
  onClick,
}: {
  isSelected: boolean;
  name: string;
  img: string;
  url?: string;
  id: string;
  onClick: () => void;
}) {
  return (
    <FigureWrapper selected={isSelected} onClick={onClick}>
      <Image src={img} alt={name} />
      <Description color={"#260c44f"}>{name}</Description>
      <Description color={"#ff9a27"}>
        <StyledAnchor href={url} target="_blank" color={"#ff9a27"}>
          Show Details
        </StyledAnchor>
      </Description>
    </FigureWrapper>
  );
}

export default SingleFigureComponent;
