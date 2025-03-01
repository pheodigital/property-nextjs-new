import React from "react";
import { render } from "@testing-library/react";
import InfoBox from "./InfoBox";

describe("InfoBox Component", () => {
  it("renders the heading correctly", () => {
    const { getByText } = render(
      <InfoBox
        heading="Test Heading"
        buttonInfo={{
          link: "#",
          backgroundColor: "bg-blue-500",
          text: "Click Me",
        }}
      >
        Test Content
      </InfoBox>
    );
    expect(getByText("Test Heading")).toBeInTheDocument();
  });

  it("renders the children content correctly", () => {
    const { getByText } = render(
      <InfoBox
        heading="Test Heading"
        buttonInfo={{
          link: "#",
          backgroundColor: "bg-blue-500",
          text: "Click Me",
        }}
      >
        Test Content
      </InfoBox>
    );
    expect(getByText("Test Content")).toBeInTheDocument();
  });

  it("renders the button with correct text", () => {
    const { getByText } = render(
      <InfoBox
        heading="Test Heading"
        buttonInfo={{
          link: "#",
          backgroundColor: "bg-blue-500",
          text: "Click Me",
        }}
      >
        Test Content
      </InfoBox>
    );
    expect(getByText("Click Me")).toBeInTheDocument();
  });

  it("applies the correct background color", () => {
    const { container } = render(
      <InfoBox
        heading="Test Heading"
        backgroundColor="bg-red-500"
        buttonInfo={{
          link: "#",
          backgroundColor: "bg-blue-500",
          text: "Click Me",
        }}
      >
        Test Content
      </InfoBox>
    );
    expect(container.firstChild).toHaveClass("bg-red-500");
  });

  it("applies the correct text color", () => {
    const { getByText } = render(
      <InfoBox
        heading="Test Heading"
        textColor="text-red-500"
        buttonInfo={{
          link: "#",
          backgroundColor: "bg-blue-500",
          text: "Click Me",
        }}
      >
        Test Content
      </InfoBox>
    );
    expect(getByText("Test Heading")).toHaveClass("text-red-500");
  });
});
