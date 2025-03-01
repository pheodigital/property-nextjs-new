import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PropertyAddForm from "./PropertyAddForm";

describe("PropertyAddForm", () => {
  it("renders the form with all fields", () => {
    render(<PropertyAddForm />);

    expect(screen.getByText("Add Property")).toBeInTheDocument();
    expect(screen.getByLabelText("Property Type")).toBeInTheDocument();
    expect(screen.getByLabelText("Listing Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
    expect(screen.getByLabelText("Location")).toBeInTheDocument();
    expect(screen.getByLabelText("Beds")).toBeInTheDocument();
    expect(screen.getByLabelText("Baths")).toBeInTheDocument();
    expect(screen.getByLabelText("Square Feet")).toBeInTheDocument();
    expect(screen.getByText("Amenities")).toBeInTheDocument();
    expect(
      screen.getByText("Rates (Leave blank if not applicable)")
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Seller Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Seller Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Seller Phone")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Images (Select up to 4 images)")
    ).toBeInTheDocument();
    expect(screen.getByText("Add Property")).toBeInTheDocument();
  });

  it("submits the form with valid data", () => {
    render(<PropertyAddForm />);

    fireEvent.change(screen.getByLabelText("Property Type"), {
      target: { value: "House" },
    });
    fireEvent.change(screen.getByLabelText("Listing Name"), {
      target: { value: "Beautiful House" },
    });
    fireEvent.change(screen.getByLabelText("Description"), {
      target: { value: "A lovely house with a garden" },
    });
    fireEvent.change(screen.getByPlaceholderText("Street"), {
      target: { value: "123 Main St" },
    });
    fireEvent.change(screen.getByPlaceholderText("City"), {
      target: { value: "Miami" },
    });
    fireEvent.change(screen.getByPlaceholderText("State"), {
      target: { value: "FL" },
    });
    fireEvent.change(screen.getByPlaceholderText("Zipcode"), {
      target: { value: "33101" },
    });
    fireEvent.change(screen.getByLabelText("Beds"), { target: { value: 3 } });
    fireEvent.change(screen.getByLabelText("Baths"), { target: { value: 2 } });
    fireEvent.change(screen.getByLabelText("Square Feet"), {
      target: { value: 1500 },
    });
    fireEvent.change(screen.getByLabelText("Seller Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Seller Email"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Seller Phone"), {
      target: { value: "123-456-7890" },
    });

    fireEvent.click(screen.getByText("Add Property"));

    // Add assertions to check if the form submission was successful
  });
});
