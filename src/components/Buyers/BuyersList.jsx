import BuyerIDPayContainer from "./BuyerIDPayContainer";
import BuyerItem from "./BuyerItem";
import BuyerNameContainer from "./BuyerNameContainer";
import { BuyersListUl } from "./BuyersListStyles";
import BuyersPayContainer from "./BuyersPayContainer";
import PayTitleContainer from "./PayTitleContainer";

const BuyersList = ({ buyers, payID, check, expandPayID, modal }) => {
  console.log(payID)
  if (payID && modal) {
    return (
      <BuyersListUl>
        {buyers
          .filter((buyer) => buyer.pay === payID)
          .map((buyer) => (
            <BuyerItem key={crypto.randomUUID()} background={"rgba(0,0,0,0.9)"}>
              <BuyerNameContainer name={buyer.name} surname={buyer.surname} price={buyer.price}/>
              <BuyerIDPayContainer ID={buyer.ID} pay={buyer.pay}/>
            </BuyerItem>
          ))}
      </BuyersListUl>
    );
  } else {
    return (
      <BuyersListUl>
        {check
          ? buyers.map((payBuyer) => (
              <BuyerItem
                key={crypto.randomUUID()}
                check={check}
                expandPayID={expandPayID}
                ID={payBuyer.pay}
                background={"transparent"}
              >
                <PayTitleContainer total={payBuyer.total} pay={payBuyer.pay} />
                <BuyersPayContainer length={payBuyer.people.length} />
              </BuyerItem>
            ))
          : buyers.map((buyer) => {
              return (
                <BuyerItem key={crypto.randomUUID()} background={"transparent"}>
                  <BuyerNameContainer
                    name={buyer.name}
                    surname={buyer.surname}
                    price={buyer.price}
                    check={check}
                  />
                  <BuyerIDPayContainer ID={buyer.ID} pay={buyer.pay} />
                </BuyerItem>
              );
            })}
      </BuyersListUl>
    );
  }
};

export default BuyersList;
