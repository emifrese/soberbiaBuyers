import BuyerIDPayContainer from "./BuyerIDPayContainer";
import BuyerItem from "./BuyerItem";
import BuyerNameContainer from "./BuyerNameContainer";
import BuyersPayContainer from "./BuyersPayContainer";
import PayTitleContainer from "./PayTitleContainer";

const BuyersList = ({ buyers, payID, check }) => {
  console.log(check);
  if (check === null) {
    return (
      <BuyersList>
        {buyers
          .filter((buyer) => buyer.pay === payID)
          .map((buyer) => (
            <BuyerItem key={crypto.randomUUID()} background={"rgba(0,0,0,0.9)"}>
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
    );
  } else {
    console.log(buyers)
    return check
      ? buyers.map((payBuyer) => (
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
      : buyers.map((buyer) => {
          console.log(buyer)
          return <BuyerItem key={crypto.randomUUID()} background={"transparent"}>
            <BuyerNameContainer name={buyer.name} surname={buyer.surname} price={buyer.price}/>
            <BuyerIDPayContainer ID={buyer.ID} pay={buyer.pay}/>
          </BuyerItem>
  });
  }
};

export default BuyersList;
