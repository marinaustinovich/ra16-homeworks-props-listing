import { ItemType } from "../types";

export const processEtsyItems = (items: ItemType[] ) => {
  return items.map((item) => ({
    listing_id: item.listing_id || "N/A",
    url: item.url || "#",
    MainImage: item.MainImage
      ? item.MainImage.url_570xN
      : "https://prikolist.club/wp-content/uploads/2019/11/Screenshot_2-12.jpg",
    title: item.title || "No description",
    currency_code: item.currency_code || "-",
    price: item.price || "-",
    quantity: item.quantity || 0,
  }));
};
