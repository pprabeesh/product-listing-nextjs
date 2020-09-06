import React from "react";
import { Product as ProductType } from "../../common/types";
import {
  StyledProductContainer,
  StyledProductImageContainer,
  StyledProductImage,
  StyledProductName,
  StyledMessage,
  StyledRetailPrice,
  StyledPrice,
} from "./product.styled";
import { SOLD_OUT } from "./product.constants";
import { formatCents } from "../../common/utils";

export const Product = ({
  id,
  imageUrl,
  name,
  quantityAvailable,
  retailPrice,
  salePrice,
}: ProductType) => (
  <StyledProductContainer id={id}>
    <StyledProductImageContainer>
      <StyledProductImage src={imageUrl} />
    </StyledProductImageContainer>
    {!quantityAvailable && <StyledMessage>{SOLD_OUT}</StyledMessage>}
    <StyledProductName>{name}</StyledProductName>
    <StyledRetailPrice>
      {retailPrice ? formatCents(retailPrice) : ""}
    </StyledRetailPrice>
    <StyledPrice>{formatCents(salePrice)}</StyledPrice>
  </StyledProductContainer>
);
