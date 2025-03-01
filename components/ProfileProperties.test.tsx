import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProfileProperties from "./ProfileProperties";
import { toast } from "react-toastify";
const mockDeleteProperty = require("@/app/actions/deleteProperty");

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
  },
}));

jest.mock("@/app/actions/deleteProperty", () => jest.fn());

describe("ProfileProperties", () => {
  const properties = [
    {
      _id: "1",
      name: "Property 1",
      location: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
      },
      images: ["/image1.jpg"],
    },
    {
      _id: "2",
      name: "Property 2",
      location: {
        street: "456 Elm St",
        city: "Othertown",
        state: "TX",
      },
      images: ["/image2.jpg"],
    },
  ];

  beforeEach(() => {
    mockDeleteProperty.mockClear();
  });

  it("renders properties", () => {
    render(<ProfileProperties properties={properties} />);

    properties.forEach((property) => {
      expect(screen.getByText(property.name)).toBeInTheDocument();
      expect(
        screen.getByText(
          `Address: ${property.location.street} ${property.location.city} ${property.location.state}`
        )
      ).toBeInTheDocument();
    });
  });

  it("deletes a property", async () => {
    render(<ProfileProperties properties={properties} />);

    window.confirm = jest.fn().mockImplementation(() => true);
    mockDeleteProperty.mockResolvedValueOnce({});

    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);

    expect(window.confirm).toHaveBeenCalledWith(
      "Are you sure you want to delete this property?"
    );
    expect(mockDeleteProperty).toHaveBeenCalledWith("1");

    await screen.findByText("Property Deleted");
    expect(toast.success).toHaveBeenCalledWith("Property Deleted");
  });

  it("does not delete a property if not confirmed", () => {
    render(<ProfileProperties properties={properties} />);

    window.confirm = jest.fn().mockImplementation(() => false);

    const deleteButtons = screen.getAllByText("Delete");
    fireEvent.click(deleteButtons[0]);

    expect(window.confirm).toHaveBeenCalledWith(
      "Are you sure you want to delete this property?"
    );
    expect(mockDeleteProperty).not.toHaveBeenCalled();
  });
});
