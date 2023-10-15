import ButtonComponent from "../../components/Button/ButtonComponent";
import InputWithLabelComponent from "../../components/InputWithLabel/InputWithLabelComponent";
import { Title } from "../../styles/general";
import {
  FormWrapper,
  ImageWrapper,
  PartDescriptioNumber,
  PartDescriptionTitle,
  PartDescriptionWrapper,
  PartImage,
  ShippingDetailsWrapper,
  ShippingPageWrapper,
  SinglePartWrapper,
  SummaryTitle,
  SummaryWrapper,
} from "./style";
import { useEffect, useState } from "react";
import { getPartsOfMinifig } from "../../utils/utils";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { inputsList } from "./inputsUtils";

function ShippingPage() {
  const selectedMinifig = useSelector(
    (state: RootState) => state.selectedMinifig
  );
  const [areAnyErrors, setAreAnyErrors] = useState(
    inputsList.map((input) => {
      return {
        name: input.label,
        hasErrors: true,
      };
    })
  );
  console.log(areAnyErrors);

  const [partsList, setPartsList] = useState<
    { part: { part_img_url: string; part_num: string; name: string } }[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPartsOfMinifig(
          selectedMinifig ? selectedMinifig.set_num : undefined
        );
        setPartsList(data);
      } catch (error) {
        console.error("Error fetching minifigs:", error);
      }
    }
    fetchData();
  }, [selectedMinifig]);

  return (
    <ShippingPageWrapper>
      <ShippingDetailsWrapper>
        <Title>shipping details</Title>
        <FormWrapper>
          {inputsList.map((input) => (
            <InputWithLabelComponent
              key={input.label}
              {...input}
              setAreAnyErrors={setAreAnyErrors}
            />
          ))}
        </FormWrapper>
      </ShippingDetailsWrapper>
      <SummaryWrapper>
        <SummaryTitle color="#000000">SUMMARY</SummaryTitle>
        <ImageWrapper>
          <img src={selectedMinifig?.set_img_url} width={150}></img>
          <div>{selectedMinifig?.name}</div>
        </ImageWrapper>
        <PartDescriptionTitle>
          There are {partsList.length} parts in this minifig:
        </PartDescriptionTitle>
        {partsList.map(({ part }) => (
          <SinglePartWrapper key={part.part_num}>
            <PartImage src={part.part_img_url} />
            <PartDescriptionWrapper>
              <PartDescriptionTitle>{part.name}</PartDescriptionTitle>
              <PartDescriptioNumber>{part.part_num}</PartDescriptioNumber>
            </PartDescriptionWrapper>
          </SinglePartWrapper>
        ))}
        <ButtonComponent
          isDisabled={areAnyErrors.some((item) => item.hasErrors)}
        >
          submit
        </ButtonComponent>
      </SummaryWrapper>
    </ShippingPageWrapper>
  );
}

export default ShippingPage;
