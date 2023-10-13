import ButtonComponent from "../../components/Button/ButtonComponent";
import InputWithLabelComponent from "../../components/InputWithLabel/InputWithLabelComponent";
import { Title } from "../../styles/general";
import {
  FormWrapper,
  PartDescriptioNumber,
  PartDescriptioTitle,
  PartDescriptionWrapper,
  PartImage,
  ShippingDetailsWrapper,
  ShippingPageWrapper,
  SinglePartWrapper,
  SummaryWrapper,
} from "./style";
import { useEffect, useState } from "react";
import { getPartsOfMinifig } from "../../utils/utils";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function ShippingPage() {
  const selectedMiniFig = useSelector(
    (state: RootState) => state.selectedMiniFig
  );
  const [partsList, setPartsList] = useState<
    { part: { part_img_url: string; part_num: string; name: string } }[]
  >([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPartsOfMinifig(
          selectedMiniFig ? selectedMiniFig.set_num : undefined
        );
        setPartsList(data);
      } catch (error) {
        console.error("Error fetching minifigs:", error);
      }
    }
    fetchData();
  }, [selectedMiniFig]);

  return (
    <ShippingPageWrapper>
      <ShippingDetailsWrapper>
        <Title>shipping details</Title>
        <FormWrapper>
          <InputWithLabelComponent label={"name"} />
          <InputWithLabelComponent label={"surname"} />
          <InputWithLabelComponent label={"phone number"} />
          <InputWithLabelComponent label={"email"} />
          <InputWithLabelComponent label={"date of birth"} />
          <InputWithLabelComponent label={"adress"} />
          <InputWithLabelComponent label={"city"} />
          <InputWithLabelComponent label={"state"} />
          <InputWithLabelComponent label={"zip code"} />
        </FormWrapper>
      </ShippingDetailsWrapper>
      <SummaryWrapper>
        <Title color="#000000">SUMMARY</Title>
        <div>Harry Potter</div>
        <img src={selectedMiniFig?.set_img_url} width={150}></img>
        <div>There are 4 parts in this minifig:</div>
        {partsList.map(({ part }) => (
          <SinglePartWrapper key={part.part_num}>
            <PartImage src={part.part_img_url} />
            <PartDescriptionWrapper>
              <PartDescriptioTitle>{part.name}</PartDescriptioTitle>
              <PartDescriptioNumber>{part.part_num}</PartDescriptioNumber>
            </PartDescriptionWrapper>
          </SinglePartWrapper>
        ))}
        <ButtonComponent>submit</ButtonComponent>
      </SummaryWrapper>
    </ShippingPageWrapper>
  );
}

export default ShippingPage;
