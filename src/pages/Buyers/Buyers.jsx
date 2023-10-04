import { useSelector } from "react-redux";
import BackButton from "../../components/UI/BackButton/BackButton";
import {
  BuyerByIDInput,
  BuyerByIdLabel,
  BuyerContainer,
} from "./BuyersStyles";
import { useState } from "react";
import { payBuyersArray } from "../../helpers/functions/payBuyersFunction";
import Modal from "../../components/UI/Modal/Modal";
import BuyersList from "../../components/Buyers/BuyersList";

const Buyers = () => {
  const [check, setCheck] = useState(false);
  const [modal, setModal] = useState(false);
  const [payID, setPayID] = useState(null);
  const { buyers } = useSelector((state) => state.buyers);

  const byPayBuyers = payBuyersArray(buyers);

  const expandPayID = (ID) => {
    setModal(true);
    setPayID(ID);
  };

  const Toggle = () => {
    setModal((state) => !state);
  };

  const checkboxHandler = () => {
    setCheck((state) => !state);
  };
  return (
    <>
      {modal && (
        <Modal top={"10%"} width={"90%"} left={"30%"} height={"70%"} Toggle={Toggle}>
          <BuyersList buyers={buyers} payID={payID} check={null} modal={modal}></BuyersList>
        </Modal>
      )}
      <BackButton />
      <BuyerContainer>
        <BuyerByIdLabel>
          Agrupar por pago
          <BuyerByIDInput
            type="checkbox"
            checked={check}
            onChange={checkboxHandler}
          />
        </BuyerByIdLabel>
        <BuyersList buyers={check ? byPayBuyers : buyers} payID={payID} expandPayID={expandPayID} check={check}/>
      </BuyerContainer>
    </>
  );
};

export default Buyers;
