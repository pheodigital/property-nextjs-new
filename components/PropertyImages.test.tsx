import React from "react";
import { render } from "@testing-library/react";
import PropertyImages from "./PropertyImages";

describe("PropertyImages Component", () => {
  it("renders a single image correctly", () => {
    const images = ["https://via.placeholder.com/1800x400"];
    const { container } = render(<PropertyImages images={images} />);
    const img = container.querySelector("img");
    expect(img).toHaveAttribute("src", images[0]);
    expect(img).toHaveClass("object-cover h-[400px] mx-auto rounded-xl");
  });

  it("renders multiple images correctly", () => {
    const images = [
      "https://via.placeholder.com/1800x400",
      "https://via.placeholder.com/1800x400",
      "https://via.placeholder.com/1800x400",
    ];
    const { container } = render(<PropertyImages images={images} />);
    const imgElements = container.querySelectorAll("img");
    expect(imgElements.length).toBe(3);
    expect(imgElements[2].parentElement).toHaveClass("col-span-2");
  });

  it("renders two images correctly", () => {
    const images = [
      "https://via.placeholder.com/1800x400",
      "https://via.placeholder.com/1800x400",
    ];
    const { container } = render(<PropertyImages images={images} />);
    const imgElements = container.querySelectorAll("img");
    expect(imgElements.length).toBe(2);
    imgElements.forEach((img) => {
      expect(img.parentElement).toHaveClass("col-span-1");
    });
  });
});
