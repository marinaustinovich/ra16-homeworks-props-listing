import React, { useMemo } from "react";

import Offer from "../Offer/Offer";
import { ItemType } from "../../types";
import { processForRenderItems } from "../../utils";

type Props = {
  items: ItemType[];
};

export const Listing = ({ items }: Props) => {
  const processedItems = useMemo(() => processForRenderItems(items), [items]);

  return (
    <div className="item-list">
      {processedItems.map((item) => (
        <Offer key={item.listing_id} item={item} />
      ))}
    </div>
  );
};
