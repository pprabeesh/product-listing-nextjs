import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import fetchMock from "jest-fetch-mock";

import {
  ERROR_MESSAGE,
  MOCK_METADATA,
  MOCK_RESULTS,
} from "./listing.constants";
import { Listing } from "./index";
import { INITIAL_SORT_OPTION } from "../results/results.constants";

describe("Listing", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  it("renders with Error message ", async () => {
    await act(async () => {
      render(<Listing sortOrder={INITIAL_SORT_OPTION} />);
    });
    expect(screen.getByText(ERROR_MESSAGE)).toBeInTheDocument();
  });

  it("renders with metadata", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({ metadata: { ...MOCK_METADATA }, results: [] })
    );
    await act(async () => {
      render(<Listing sortOrder={INITIAL_SORT_OPTION} />);
    });
    expect(
      screen.getByText(/123 results for "best results" - Page 1 of 2/)
    ).toBeInTheDocument();
  });

  it("renders results ", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        metadata: { ...MOCK_METADATA },
        results: [...MOCK_RESULTS],
      })
    );
    await act(async () => {
      render(<Listing sortOrder={INITIAL_SORT_OPTION} />);
    });
    expect(screen.getAllByText(/MockProduct/)).toHaveLength(3);
  });
});
