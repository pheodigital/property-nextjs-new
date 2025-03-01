import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the logo", () => {
    render(<Footer />);
    const logo = screen.getByRole("img", { name: "Logo" });
    expect(logo).toBeInTheDocument();
  });

  it("renders the navigation links", () => {
    render(<Footer />);
    const propertiesLink = screen.getByText("Properties");
    const termsLink = screen.getByText("Terms of Service");
    expect(propertiesLink).toBeInTheDocument();
    expect(termsLink).toBeInTheDocument();
  });

  it("renders the current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const yearText = screen.getByText(
      `© ${currentYear} PropertyPulse. All rights reserved.`
    );
    expect(yearText).toBeInTheDocument();
  });
});
