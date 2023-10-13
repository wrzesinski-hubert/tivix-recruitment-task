import { useState } from "react";
import { ChoosingPageWrapper, FiguresWrapper } from "./styles";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { Title, StyledLink } from "../../styles/general";
import SingleFigureComponent from "../../components/SingleFigure/SingleFigureComponent";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setMiniFig } from "../../store/reducers/miniFigsReducer";

function ChoosingPage() {
  const dispatch = useDispatch();

  const arrayOfRandomMinifigs = useSelector(
    (state: RootState) => state.randomMiniFigs
  );
  const selectedMiniFig = useSelector(
    (state: RootState) => state.selectedMiniFig
  );

  const isButtonDisabled = selectedMiniFig === undefined;

  return (
    <ChoosingPageWrapper>
      <Title>choose your minifig</Title>
      <FiguresWrapper>
        {arrayOfRandomMinifigs.map(
          ({ set_num, name, set_img_url, set_url }, index) => (
            <SingleFigureComponent
              onClick={() => {
                dispatch(
                  setMiniFig({ set_num: set_num, set_img_url: set_img_url })
                );
              }}
              key={set_num}
              id={set_num}
              name={name}
              img={set_img_url}
              url={set_url}
              isSelected={selectedMiniFig?.set_num === set_num}
            />
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
