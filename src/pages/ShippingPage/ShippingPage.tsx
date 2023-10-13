import ButtonComponent from "../../components/Button/ButtonComponent";
import InputWithLabelComponent from "../../components/InputWithLabel/InputWithLabelComponent";
import { Title } from "../../styles/general";
import {
  FormWrapper,
  ShippingDetailsWrapper,
  ShippingPageWrapper,
  SummaryWrapper,
} from "./style";

function ShippingPage() {
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
        <div>test</div>
        <div>Harry Potter</div>
        <div>There are 4 parts in this minifig:</div>
        <div>test1</div>
        <div>test2</div>
        <div>test3</div>
        <div>test4</div>
        <ButtonComponent>submit</ButtonComponent>
      </SummaryWrapper>
    </ShippingPageWrapper>
  );
}

export default ShippingPage;
