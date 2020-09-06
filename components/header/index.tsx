import React from "react";
import { StyledHeader, StyledSelect, StyledLogo } from "./header.styled";
import { HeaderProps } from "./header.types";

import {
  LOGO_URL,
  LOGO_ALT_TEXT,
  SELECT_FIELD_NAME,
  FILTER_OPTIONS,
} from "./header.constants";

export const Header = ({ setSortOrder }: HeaderProps) => (
  <StyledHeader>
    <StyledLogo src={LOGO_URL} alt={LOGO_ALT_TEXT} />
    <StyledSelect
      name={SELECT_FIELD_NAME}
      onChange={(event) => setSortOrder(event.target.value)}
    >
      {FILTER_OPTIONS.map(({ key, value }, index) => (
        <option key={`${index}_${key}`} value={key}>
          {value}
        </option>
      ))}
    </StyledSelect>
  </StyledHeader>
);
