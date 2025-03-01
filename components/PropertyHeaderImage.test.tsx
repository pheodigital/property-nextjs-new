import React from "react";
import { render } from "@testing-library/react";
import PropertyHeaderImage from "./PropertyHeaderImage";
import "@testing-library/jest-dom";

describe("PropertyHeaderImage", () => {
  it("renders the image with the correct src and alt attributes", () => {
    const imageSrc = "https://example.com/image.jpg";
    const { getByRole } = render(<PropertyHeaderImage image={imageSrc} />);

    const imgElement = getByRole("img");
    expect(imgElement).toHaveAttribute("src", imageSrc);
    expect(imgElement).toHaveAttribute("alt", "");
  });

  it("applies the correct class names to the image", () => {
    const imageSrc = "https://example.com/image.jpg";
    const { getByRole } = render(<PropertyHeaderImage image={imageSrc} />);

    const imgElement = getByRole("img");
    expect(imgElement).toHaveClass("object-cover h-[400px] w-full");
  });
});
