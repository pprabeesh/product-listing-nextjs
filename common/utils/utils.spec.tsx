import { formatCents, sortResults } from "./index";
import { MOCK_RESULTS } from "../../components/listing/listing.constants";

describe("formatCents", () => {
  it("returns formatted price ", async () => {
    expect(formatCents(1200)).toBe("A$12.00");
    expect(formatCents(23456)).toBe("A$234.56");
    expect(formatCents(0)).toBe("A$0.00");
    expect(formatCents(20)).toBe("A$0.20");
    expect(formatCents(300)).toBe("A$3.00");
  });
});

describe("sortResults", () => {
  it("returns sorted results with high to low ", async () => {
    expect(sortResults(MOCK_RESULTS, "high")).toStrictEqual([
      {
        id: "test2",
        imageUrl: "MockUrl2",
        name: "MockProduct",
        quantityAvailable: 2,
        retailPrice: 3000,
        salePrice: 64000,
      },
      {
        id: "test1",
        imageUrl: "MockUrl1",
        name: "MockProduct",
        quantityAvailable: 2,
        retailPrice: 3000,
        salePrice: 54000,
      },
      {
        id: "test3",
        imageUrl: "MockUrl3",
        name: "MockProduct",
        quantityAvailable: 2,
        retailPrice: 3000,
        salePrice: 3000,
      },
    ]);
  });

  it("returns sorted results with low to high ", async () => {
    expect(sortResults(MOCK_RESULTS, "low")).toStrictEqual([
      {
        id: "test3",
        imageUrl: "MockUrl3",
        name: "MockProduct",
        quantityAvailable: 2,
        retailPrice: 3000,
        salePrice: 3000,
      },

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
    ]);
  });
});
