import { useEffect } from "react";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { Title, StyledLink } from "../../styles/general";
import { TitlePageWrapper } from "./styles";
import { fetchRandomMinifigs } from "../../utils/utils";
import { useDispatch } from "react-redux";
import {
  setLoadingMinifigs,
  setRandomMinifigs,
} from "../../store/reducers/miniFigsReducer";
const AMOUNT_OF_FIGURES = 3;

function TitlePage() {
  const dispatch = useDispatch();

  async function fetchData() {
    try {
      dispatch(setLoadingMinifigs(true));
      const data = await fetchRandomMinifigs(AMOUNT_OF_FIGURES);
      dispatch(setRandomMinifigs(data));
      dispatch(setLoadingMinifigs(false));
    } catch (error) {
      console.error("Error fetching minifigs:", error);
    }
  }
  return (
    <TitlePageWrapper>
      <Title> Lego minifigs mystery box</Title>
      <StyledLink to="/choosing" onClick={() => fetchData()}>
        <ButtonComponent>LET'S GO</ButtonComponent>
      </StyledLink>
    </TitlePageWrapper>
  );
}

export default TitlePage;
