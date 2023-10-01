import { useSelector } from "react-redux";
import BackButton from "../../components/UI/BackButton/BackButton";
import {
  BuyerByIDInput,
  BuyerByIdLabel,
  BuyerContainer,
  BuyerIDPayContainer,
  BuyerItem,
  BuyerNameContainer,
  BuyersList,
  BuyersPayContainer,
  PayTitleContainer,
} from "./BuyersStyles";
import { useState } from "react";
import { payBuyersArray } from "../../helpers/functions/payBuyersFunction";
import Modal from "../../components/UI/Modal/Modal";

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
        <Modal top={"20%"} width={"90%"} left={"30%"} Toggle={Toggle}>
          <BuyersList>
            {buyers
              .filter((buyer) => buyer.pay === payID)
              .map((buyer) => (
                <BuyerItem
                  key={crypto.randomUUID()}
                  background={"rgba(0,0,0,0.9)"}
                >
                  <BuyerNameContainer>
                    <h3>
                      {buyer.surname} {buyer.name}
                    </h3>
                  </BuyerNameContainer>
                  <BuyerIDPayContainer>
                    <p>DNI: {buyer.ID}</p>
                    <p>Monto: {buyer.price}</p>
                  </BuyerIDPayContainer>
                </BuyerItem>
              ))}
          </BuyersList>
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
        <BuyersList>
          {/* buyers */}
          {check
            ? byPayBuyers.map((payBuyer) => (
                <BuyerItem
                  key={crypto.randomUUID()}
                  onClick={() => expandPayID(payBuyer.pay)}
                  background={"transparent"}
                >
                  <PayTitleContainer>
                    <p>Total: ${payBuyer.total}</p>
                    <p>Nro Comprobante: {payBuyer.pay}</p>
                  </PayTitleContainer>
                  <BuyersPayContainer>
                    <p>Cantidad de personas: {payBuyer.people.length}</p>
                  </BuyersPayContainer>
                </BuyerItem>
              ))
            : buyers.map((buyer) => (
                <BuyerItem key={crypto.randomUUID()} background={"transparent"}>
                  <BuyerNameContainer>
                    <h3>
                      {buyer.surname} {buyer.name}
                    </h3>
                    <h3>${buyer.price}</h3>
                  </BuyerNameContainer>
                  <BuyerIDPayContainer>
                    <p>DNI: {buyer.ID}</p>
                    <p>Nro Comprobante: {buyer.pay}</p>
                  </BuyerIDPayContainer>
                </BuyerItem>
              ))}
        </BuyersList>
      </BuyerContainer>
    </>
  );
};

export default Buyers;
