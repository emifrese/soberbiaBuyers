import { BuyerIDPay } from "./BuyerIDPayContainerStyles";

const BuyerIDPayContainer = ({ ID, pay }) => {
  return (
    <BuyerIDPay>
      <p>{ID}</p>
      <p>Monto: {pay}</p>
    </BuyerIDPay>
  );
};

export default BuyerIDPayContainer;
