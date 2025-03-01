import React from "react";
import { render, screen } from "@testing-library/react";
import InfoBoxes from "./InfoBoxes";

describe("InfoBoxes Component", () => {
  it("renders the InfoBoxes component", () => {
    render(<InfoBoxes />);

    // Check if the headings are rendered
    expect(screen.getByText("For Renters")).toBeInTheDocument();
    expect(screen.getByText("For Property Owners")).toBeInTheDocument();

    // Check if the button texts are rendered
    expect(screen.getByText("Browse Properties")).toBeInTheDocument();
    expect(screen.getByText("Add Property")).toBeInTheDocument();

    // Check if the descriptions are rendered
    expect(
      screen.getByText(
        "Find your dream rental property. Bookmark properties and contact owners."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "List your properties and reach potential tenants. Rent as an Airbnb or long term."
      )
    ).toBeInTheDocument();
  });
});
