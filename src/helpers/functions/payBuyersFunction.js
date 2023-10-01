export const payBuyersArray = (arrayToArrange) => {
    const byPayBuyers = [];

    arrayToArrange.forEach((buyer) => {
      const index = byPayBuyers.findIndex(
        (payBuyer) => payBuyer.pay === buyer.pay
      );
      if (index !== -1) {
        byPayBuyers[index] = {
          ...byPayBuyers[index],
          people: [
            ...byPayBuyers[index].people,
            {
              name: buyer.name,
              surname: buyer.surname,
              ID: buyer.ID,
            },
          ],
          total: byPayBuyers[index].total + parseInt(buyer.price),
        };
        return byPayBuyers;
      } else {
        byPayBuyers.push({
          pay: buyer.pay,
          people: [{ name: buyer.name, surname: buyer.surname, ID: buyer.ID }],
          total: parseInt(buyer.price),
        });
      }
    });
    return byPayBuyers;
  };