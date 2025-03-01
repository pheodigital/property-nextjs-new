import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomeProperties from "./HomeProperties";
import Property from "../models/Property";
import connectDB from "../config/database";

// Mock the database connection and Property model
jest.mock("../config/database");
jest.mock("../models/Property");

describe("HomeProperties Component", () => {
  beforeEach(async () => {
    (connectDB as jest.Mock).mockResolvedValueOnce(undefined);
    (Property.find as jest.Mock) = jest.fn();
  });

  it('should render "Recent Properties" heading', async () => {
    (Property.find as jest.Mock).mockResolvedValueOnce([
      { _id: "1", title: "Property 1", createdAt: new Date() },
      { _id: "2", title: "Property 2", createdAt: new Date() },
      { _id: "3", title: "Property 3", createdAt: new Date() },
    ]);

    render(<HomeProperties />);

    const heading = await screen.findByText("Recent Properties");
    expect(heading).toBeInTheDocument();
  });

  it("should render property cards when properties are available", async () => {
    (Property.find as jest.Mock).mockResolvedValueOnce([
      { _id: "1", title: "Property 1", createdAt: new Date() },
      { _id: "2", title: "Property 2", createdAt: new Date() },
      { _id: "3", title: "Property 3", createdAt: new Date() },
    ]);

    render(<HomeProperties />);

    const propertyCards = await screen.findAllByText(/Property \d/);
    expect(propertyCards).toHaveLength(3);
  });

  it('should render "No Properties Found" when no properties are available', async () => {
    (Property.find as jest.Mock).mockResolvedValueOnce([]);

    render(<HomeProperties />);

    const noPropertiesMessage = await screen.findByText("No Properties Found");
    expect(noPropertiesMessage).toBeInTheDocument();
  });

  it('should render "View All Properties" link', async () => {
    (Property.find as jest.Mock).mockResolvedValueOnce([
      { _id: "1", title: "Property 1", createdAt: new Date() },
      { _id: "2", title: "Property 2", createdAt: new Date() },
      { _id: "3", title: "Property 3", createdAt: new Date() },
    ]);

    render(<HomeProperties />);

    const viewAllLink = await screen.findByText("View All Properties");
    expect(viewAllLink).toBeInTheDocument();
  });
});
