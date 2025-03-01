import React from "react";
import { render } from "@testing-library/react";
import PropertyDetails from "./PropertyDetails";

const mockProperty = {
  type: "Apartment",
  name: "Luxury Apartment",
  location: {
    street: "123 Main St",
    city: "Metropolis",
    state: "NY",
  },
  rates: {
    nightly: 150,
    weekly: 1000,
    monthly: 3000,
  },
  beds: 3,
  baths: 2,
  square_feet: 1500,
  description: "A beautiful luxury apartment in the heart of the city.",
  amenities: ["Pool", "Gym", "WiFi"],
};

describe("PropertyDetails", () => {
  it("renders property type, name, and location", () => {
    const { getByText } = render(<PropertyDetails property={mockProperty} />);
    expect(getByText("Apartment")).toBeInTheDocument();
    expect(getByText("Luxury Apartment")).toBeInTheDocument();
    expect(getByText("123 Main St, Metropolis NY")).toBeInTheDocument();
  });

  it("renders rates correctly", () => {
    const { getByText } = render(<PropertyDetails property={mockProperty} />);
    expect(getByText("$150")).toBeInTheDocument();
    expect(getByText("$1,000")).toBeInTheDocument();
    expect(getByText("$3,000")).toBeInTheDocument();
  });

  it("renders property details correctly", () => {
    const { getByText } = render(<PropertyDetails property={mockProperty} />);
    expect(getByText("3 Beds")).toBeInTheDocument();
    expect(getByText("2 Baths")).toBeInTheDocument();
    expect(getByText("1500 sqft")).toBeInTheDocument();
    expect(
      getByText("A beautiful luxury apartment in the heart of the city.")
    ).toBeInTheDocument();
  });

  it("renders amenities correctly", () => {
    const { getByText } = render(<PropertyDetails property={mockProperty} />);
    expect(getByText("Pool")).toBeInTheDocument();
    expect(getByText("Gym")).toBeInTheDocument();
    expect(getByText("WiFi")).toBeInTheDocument();
  });
});
