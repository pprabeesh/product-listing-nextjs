import { Product } from "../../common/types";

export type SearchResults = Array<Product>;

export type MetaData = {
  query: string;
  total: number;
  page: number;
  pages: number;
};

export type ListingProps = {
  sortOrder: string;
};
