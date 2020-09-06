import {
  LOCALE,
  FORMAT_STYLE,
  CURRENCY_FORMAT,
  FRACTION_DIGITS,
  DOLLAR_DIVISOR,
} from "./utils.constants";

import { Product } from "../types";

export const formatCents = (cents: number): string =>
  new Intl.NumberFormat(LOCALE, {
    style: FORMAT_STYLE,
    currency: CURRENCY_FORMAT,
    minimumFractionDigits: FRACTION_DIGITS,
  }).format(cents / DOLLAR_DIVISOR);

export const sortResults = (
  products: Array<Product>,
  sortOrder: string
): Array<Product> => {
  products.sort((a: Product, b: Product) => a.salePrice - b.salePrice);
  return sortOrder === "high" ? products.reverse() : products;
};
