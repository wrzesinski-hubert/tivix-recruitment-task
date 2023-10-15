import { ChoosingPageWrapper, FiguresWrapper, LoadingWrapper } from "./styles";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { Title, StyledLink } from "../../styles/general";
import SingleFigureComponent from "../../components/SingleFigure/SingleFigureComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setMinifig } from "../../store/reducers/miniFigsReducer";
import PacmanLoader from "react-spinners/PacmanLoader";

function ChoosingPage() {
  const dispatch = useDispatch();

  const arrayOfRandomMinifigs = useSelector(
    (state: RootState) => state.randomMinifigs
  );
  const selectedMinifig = useSelector(
    (state: RootState) => state.selectedMinifig
  );
  const loading = useSelector((state: RootState) => state.loadingMinifigs);
  const isButtonDisabled = selectedMinifig === undefined;

  return (
    <ChoosingPageWrapper>
      <Title>choose your minifig</Title>
      <FiguresWrapper>
        {loading ? (
          <LoadingWrapper>
            <PacmanLoader color="#fff" loading={loading} /> Fetching your
            minifigs...
          </LoadingWrapper>
        ) : (
          arrayOfRandomMinifigs.map(
            ({ set_num, name, set_img_url, set_url }) => (
              <SingleFigureComponent
                onClick={() => {
                  dispatch(
                    setMinifig({
                      name: name,
                      set_num: set_num,
                      set_img_url: set_img_url,
                    })
                  );
                }}
                key={set_num}
                id={set_num}
                name={name}
                img={set_img_url}
                url={set_url}
                isSelected={selectedMinifig?.set_num === set_num}
              />
            )
          )
        )}
      </FiguresWrapper>
      <StyledLink to="/shipping" isDisabled={isButtonDisabled}>
        <ButtonComponent isDisabled={isButtonDisabled}>
          proceed to shipment
        </ButtonComponent>
      </StyledLink>
    </ChoosingPageWrapper>
  );
}

export default ChoosingPage;
