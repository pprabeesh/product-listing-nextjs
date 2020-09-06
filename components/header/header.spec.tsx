import { render, screen, fireEvent, getByRole } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Header } from "./index";
import { LOGO_ALT_TEXT, FILTER_OPTIONS } from "./header.constants";

describe("Header", () => {
  const setSortOrderMock = jest.fn();
  it("renders logo with alt text", () => {
    act(() => {
      render(<Header setSortOrder={setSortOrderMock} />);
    });
    expect(screen.getByAltText(LOGO_ALT_TEXT)).toBeInTheDocument();
  });
  it("renders dropdown", () => {
    act(() => {
      render(<Header setSortOrder={setSortOrderMock} />);
    });
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });
  it("renders filter options", () => {
    act(() => {
      render(<Header setSortOrder={setSortOrderMock} />);
    });
    FILTER_OPTIONS.map(({ value }) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });
  it("call setSortOrderMock on change", () => {
    act(() => {
      render(<Header setSortOrder={setSortOrderMock} />);
      fireEvent.change(screen.getByRole("combobox"), {
        target: { value: "low" },
      });
    });
    expect(setSortOrderMock).toBeCalled();
  });
});
