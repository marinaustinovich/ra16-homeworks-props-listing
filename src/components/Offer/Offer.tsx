import React from "react";
import { ItemType } from "../../types";
import { processedCurrencyCode, processedQuantityLevel } from "../../utils";

type Props = {
  item: ItemType;
};

const Offer = ({ item }: Props) => {
  const { price, quantity, currency_code: currencyCode } = item;
  return (
    <div className="item" id={item.listing_id}>
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt={item.title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{item.title}</p>
        <p className="item-price">
          {processedCurrencyCode({ currencyCode, price })}
        </p>
        <p className={`item-quantity ${processedQuantityLevel(quantity)}`}>
          {item.quantity} left
        </p>
      </div>
    </div>
  );
};

export default Offer;
