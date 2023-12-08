import { CurrencyCodeEnum } from "../types";

export type ProcessedCurrencyCodeData = {
  currencyCode?: CurrencyCodeEnum;
  price?: string;
};

const currencySymbols = {
  [CurrencyCodeEnum.USD]: "$",
  [CurrencyCodeEnum.EUR]: "€",
};

export const processedCurrencyCode = ({
  currencyCode,
  price,
}: ProcessedCurrencyCodeData) => {
  const symbol = currencyCode ? currencySymbols[currencyCode] : currencyCode;
  return `${symbol}${price}`;
};
