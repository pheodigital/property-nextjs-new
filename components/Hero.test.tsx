import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "./Hero";

describe("Hero Component", () => {
  test("renders the Hero component", () => {
    render(<Hero />);
    expect(screen.getByText("Find The Perfect Rental")).toBeInTheDocument();
    expect(
      screen.getByText("Discover the perfect property that suits your needs.")
    ).toBeInTheDocument();
  });

  test("renders the input fields and button", () => {
    render(<Hero />);
    expect(
      screen.getByPlaceholderText("Enter Location or Keyword")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Property Type")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  test("allows user to type in the location input", () => {
    render(<Hero />);
    const locationInput = screen.getByPlaceholderText(
      "Enter Location or Keyword"
    );
    fireEvent.change(locationInput, { target: { value: "New York" } });
    expect(locationInput).toHaveValue("New York");
  });

  test("allows user to select a property type", () => {
    render(<Hero />);
    const propertyTypeSelect = screen.getByLabelText("Property Type");
    fireEvent.change(propertyTypeSelect, { target: { value: "Apartment" } });
    expect(propertyTypeSelect).toHaveValue("Apartment");
  });

  test("submits the form", () => {
    render(<Hero />);
    const locationInput = screen.getByPlaceholderText(
      "Enter Location or Keyword"
    );
    const propertyTypeSelect = screen.getByLabelText("Property Type");
    const searchButton = screen.getByRole("button", { name: /search/i });

    fireEvent.change(locationInput, { target: { value: "New York" } });
    fireEvent.change(propertyTypeSelect, { target: { value: "Apartment" } });
    fireEvent.click(searchButton);

    // Add assertions for form submission if needed
  });
});
