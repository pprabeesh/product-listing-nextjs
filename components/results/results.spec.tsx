import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ERROR_MESSAGE } from "../listing/listing.constants";
import { Results } from "./index";

describe("Results", () => {
  it("renders header", async () => {
    await act(async () => {
      render(<Results />);
    });
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });
  it("renders searchlisting", async () => {
    await act(async () => {
      render(<Results />);
    });
    expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
  });
});
