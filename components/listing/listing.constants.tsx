import { SearchResults, MetaData } from "./listing.types";

export const SEARCH_URL: string =
  "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json";

export const CORS_PROXY: string = "https://cors-anywhere.herokuapp.com/";

export const ERROR_MESSAGE: string =
  "Uh Oh! Something unexpected happened. Try Again.";

export const LOADING_MESSAGE: string = "Loading ...";

export const INITIAL_METADATA: MetaData = {
  query: "",
  total: null,
  page: null,
  pages: null,
};

export const MOCK_METADATA: MetaData = {
  query: "best results",
  total: 123,
  page: 1,
  pages: 2,
};

export const MOCK_RESULTS: SearchResults = [
  {
    id: "test1",
    imageUrl: "MockUrl1",
    name: "MockProduct",
    quantityAvailable: 2,
    retailPrice: 3000,
    salePrice: 54000,
  },
  {
    id: "test2",
    imageUrl: "MockUrl2",
    name: "MockProduct",
    quantityAvailable: 2,
    retailPrice: 3000,
    salePrice: 64000,
  },
  {
    id: "test3",
    imageUrl: "MockUrl3",
    name: "MockProduct",
    quantityAvailable: 2,
    retailPrice: 3000,
    salePrice: 3000,
  },
];
