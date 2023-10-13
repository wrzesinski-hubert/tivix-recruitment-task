import ButtonComponent from "../../components/Button/ButtonComponent";
import { Title, StyledLink } from "../../styles/general";
import { TitlePageWrapper } from "./styles";

function TitlePage() {
  return (
    <TitlePageWrapper>
      <Title> Lego minifigs mystery box</Title>
      <StyledLink to="/choosing">
        <ButtonComponent>LET'S GO</ButtonComponent>
      </StyledLink>
    </TitlePageWrapper>
  );
}

export default TitlePage;
