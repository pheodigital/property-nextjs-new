import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PropertyEditForm from "./PropertyEditForm";

const mockProperty = {
  _id: "1",
  type: "Apartment",
  name: "Beautiful Apartment In Miami",
  description: "A lovely apartment in the heart of Miami.",
  location: {
    street: "123 Main St",
    city: "Miami",
    state: "FL",
    zipcode: "33101",
  },
  beds: 2,
  baths: 2,
  square_feet: 1000,
  amenities: ["Wifi", "Full kitchen"],
  rates: {
    weekly: 700,
    monthly: 2500,
    nightly: 100,
  },
  seller_info: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  },
};

describe("PropertyEditForm", () => {
  it("renders the form with property details", () => {
    render(<PropertyEditForm property={mockProperty} />);

    expect(screen.getByLabelText(/Property Type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Listing Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Beds/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Baths/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Square Feet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Amenities/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Rates/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Seller Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Seller Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Seller Phone/i)).toBeInTheDocument();
  });

  it("allows the user to update property details", () => {
    render(<PropertyEditForm property={mockProperty} />);

    fireEvent.change(screen.getByLabelText(/Property Type/i), {
      target: { value: "House" },
    });
    fireEvent.change(screen.getByLabelText(/Listing Name/i), {
      target: { value: "Updated Apartment In Miami" },
    });
    fireEvent.change(screen.getByLabelText(/Description/i), {
      target: { value: "An updated description." },
    });
    fireEvent.change(screen.getByLabelText(/City/i), {
      target: { value: "Orlando" },
    });
    fireEvent.change(screen.getByLabelText(/Beds/i), {
      target: { value: 3 },
    });
    fireEvent.change(screen.getByLabelText(/Baths/i), {
      target: { value: 3 },
    });
    fireEvent.change(screen.getByLabelText(/Square Feet/i), {
      target: { value: 1200 },
    });

    expect(
      (screen.getByLabelText(/Property Type/i) as HTMLInputElement).value
    ).toBe("House");
    expect(
      (screen.getByLabelText(/Listing Name/i) as HTMLInputElement).value
    ).toBe("Updated Apartment In Miami");
    expect(
      (screen.getByLabelText(/Description/i) as HTMLInputElement).value
    ).toBe("An updated description.");
    expect((screen.getByLabelText(/City/i) as HTMLInputElement).value).toBe(
      "Orlando"
    );
    expect((screen.getByLabelText(/Beds/i) as HTMLInputElement).value).toBe(
      "3"
    );
    expect((screen.getByLabelText(/Baths/i) as HTMLInputElement).value).toBe(
      "3"
    );
    expect(
      (screen.getByLabelText(/Square Feet/i) as HTMLInputElement).value
    ).toBe("1200");
  });
});
