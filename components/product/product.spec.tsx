import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MOCK_PRODUCT, SOLD_OUT } from "./product.constants";
import { Product } from "./index";

describe("Product", () => {
  it("renders product image", async () => {
    await act(async () => {
      render(<Product {...MOCK_PRODUCT} />);
    });
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders product name", async () => {
    await act(async () => {
      render(<Product {...MOCK_PRODUCT} />);
    });
    expect(screen.getByText(MOCK_PRODUCT.name)).toBeInTheDocument();
  });

  it("does not render product sold out message", async () => {
    await act(async () => {
      render(<Product {...MOCK_PRODUCT} />);
    });
    expect(screen.queryByText(SOLD_OUT)).toBeNull();
  });

  it("renders product sold out message", async () => {
    await act(async () => {
      render(<Product {...{ ...MOCK_PRODUCT, quantityAvailable: 0 }} />);
    });
    expect(screen.queryByText(SOLD_OUT)).toBeInTheDocument();
  });

  it("renders formatted retail price", async () => {
    await act(async () => {
      render(<Product {...MOCK_PRODUCT} />);
    });
    expect(screen.getByText("A$30.00")).toBeInTheDocument();
  });

  it("renders formatted sale price", async () => {
    await act(async () => {
      render(<Product {...MOCK_PRODUCT} />);
    });
    expect(screen.getByText("A$540.00")).toBeInTheDocument();
  });
});
