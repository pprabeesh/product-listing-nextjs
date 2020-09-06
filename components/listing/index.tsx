import React, { useState, useEffect } from "react";
import {
  SEARCH_URL,
  CORS_PROXY,
  ERROR_MESSAGE,
  LOADING_MESSAGE,
  INITIAL_METADATA,
} from "./listing.constants";
import { StyledListingContainer, StyledMetadata } from "./listing.styled";
import { SearchResults, MetaData, ListingProps } from "./listing.types";
import { sortResults } from "../../common/utils";
import { Product } from "../product";

export const Listing = ({ sortOrder }: ListingProps) => {
  const [searchResults, setSearchResults] = useState<SearchResults>([]);
  const [metaData, setMetaData] = useState<MetaData>(INITIAL_METADATA);
  const [error, setError] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    // CORS PROXY USED ONLY FOR LOCALHOST
    fetch(CORS_PROXY + SEARCH_URL)
      .then((response) => response.json())
      .then(({ metadata, results }) => {
        setSearchResults(sortResults([...results], sortOrder));
        setMetaData({ ...metadata });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  useEffect(() => {
    setSearchResults(sortResults([...searchResults], sortOrder));
  }, [sortOrder]);

  if (loading) {
    return <> {LOADING_MESSAGE} </>;
  }

  if (error) {
    return <> {ERROR_MESSAGE} </>;
  }

  const { query, total, page, pages } = metaData;

  return (
    <>
      <StyledMetadata>{`${total} results for "${query}" - Page ${page} of ${pages}`}</StyledMetadata>
      <StyledListingContainer>
        {searchResults.map((result) => (
          <Product {...result} key={result.id} />
        ))}
      </StyledListingContainer>
    </>
  );
};
