import React, { useState } from "react";
import { Header } from "../header";
import { Listing } from "../listing";
import { INITIAL_SORT_OPTION } from "./results.constants";
import { StyledResultsContainer } from "./results.styled";

export const Results = () => {
  const [sortOrder, setSortOrder] = useState<string>(INITIAL_SORT_OPTION);
  return (
    <StyledResultsContainer>
      <Header setSortOrder={setSortOrder} />
      <Listing sortOrder={sortOrder} />
    </StyledResultsContainer>
  );
};
