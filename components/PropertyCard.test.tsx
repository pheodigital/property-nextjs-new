import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "./PropertyCard";

const mockProperty = {
  images: ["/test-image.jpg"],
  type: "Apartment",
  name: "Test Property",
  rates: {
    monthly: 3000,
    weekly: 800,
    nightly: 150,
  },
  beds: 2,
  baths: 2,
  square_feet: 1200,
  location: {
    city: "Test City",
    state: "Test State",
  },
  _id: "12345",
};

describe("PropertyCard", () => {
  it("renders property details correctly", () => {
    const { getByText, getByAltText } = render(
      <PropertyCard property={mockProperty} />
    );

    expect(getByAltText("")).toBeInTheDocument();
    expect(getByText("Apartment")).toBeInTheDocument();
    expect(getByText("Test Property")).toBeInTheDocument();
    expect(getByText("$3,000/mo")).toBeInTheDocument();
    // expect(getByText("2")).toBeInTheDocument();
    // expect(getByText("2")).toBeInTheDocument();
    expect(getByText("1200 sqft")).toBeInTheDocument();
    expect(getByText("Test City, Test State")).toBeInTheDocument();
    expect(getByText("Details")).toBeInTheDocument();
  });

  it("displays the correct rate", () => {
    const { getByText, rerender } = render(
      <PropertyCard property={mockProperty} />
    );

    expect(getByText("$3,000/mo")).toBeInTheDocument();

    rerender(
      <PropertyCard property={{ ...mockProperty, rates: { weekly: 800 } }} />
    );
    expect(getByText("$800/wk")).toBeInTheDocument();

    rerender(
      <PropertyCard property={{ ...mockProperty, rates: { nightly: 150 } }} />
    );
    expect(getByText("$150/night")).toBeInTheDocument();
  });
});
