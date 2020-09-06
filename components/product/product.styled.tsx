import styled from "styled-components";

export const StyledProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid grey;
  margin: 1% 0;

  @media (min-width: 800px) {
    /* tablet */
    max-width: calc(50% - 2em);
  }

  @media (min-width: 1200px) {
    /* desktop */
    max-width: calc(33% - 2em);
  }
`;

export const StyledProductImageContainer = styled.div`
  background-color: lightGrey;
`;

export const StyledProductImage = styled.img`
  width: 100%;
  height: 10em;
  object-fit: contain;
`;

export const StyledProductName = styled.div`
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
  padding-top: 2%;
  max-width: 90%;
`;

export const StyledMessage = styled.div`
  position: relative;
  bottom: 10%;
  left: 75%;
  color: red;
`;

export const StyledRetailPrice = styled.div`
  text-decoration: line-through;
  margin: 0 auto;
  padding-top: 5%;
  max-width: 90%;
  min-height: 2em;
`;

export const StyledPrice = styled.div`
  font-size: 2em;
  margin: 0 auto;
  padding: 2% 0;
  max-width: 90%;
`;
