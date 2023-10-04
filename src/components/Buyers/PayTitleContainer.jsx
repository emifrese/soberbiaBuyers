import { PayTitle } from "./PayTitleContainerStyles";

const PayTitleContainer = ({ total, pay }) => {
  return (
    <PayTitle>
      <p>Total: ${total}</p>
      <p>Nro Comprobante: {pay}</p>
    </PayTitle>
  );
};

export default PayTitleContainer;
