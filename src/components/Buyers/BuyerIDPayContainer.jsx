import { BuyerIDPay } from "./BuyerIDPayContainerStyles";

const BuyerIDPayContainer = ({ ID, pay }) => {
  return (
    <BuyerIDPay>
      <p>{ID}</p>
      <p>Nro Comprobante: {pay}</p>
    </BuyerIDPay>
  );
};

export default BuyerIDPayContainer;
