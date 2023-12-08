type MainImageType = {
  listing_image_id: number;
  hex_code: string | null;
  red: number | null;
  green: number | null;
  blue: number | null;
  hue: number | null;
  saturation: number | null;
  brightness: number | null;
  is_black_and_white: boolean | null;
  creation_tsz: number | null;
  listing_id: number;
  rank: number | null;
  url_75x75: string;
  url_170x135: string;
  url_570xN: string;
  url_fullxfull: string;
  full_height: number | null;
  full_width: number | null;
};

export enum CurrencyCodeEnum {
  USD = "USD",
  EUR = "EUR",
}

export type ItemType = {
  listing_id?: string;
  url?: string;
  MainImage: MainImageType;
  title?: string;
  currency_code?: CurrencyCodeEnum;
  price?: string;
  quantity: number;
};
