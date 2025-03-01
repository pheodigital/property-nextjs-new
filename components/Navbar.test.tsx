import { render, screen, fireEvent } from "@testing-library/react";
import { useSession } from "next-auth/react";
import Navbar from "./Navbar";

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
  signOut: jest.fn(),
  getProviders: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  usePathname: jest.fn().mockReturnValue("/"),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe("Navbar", () => {
  beforeEach(() => {
    (useSession as jest.Mock).mockReturnValue({ data: null });
  });

  it("renders the logo", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("PropertyPulse");
    expect(logo).toBeInTheDocument();
  });

  it("renders the navigation links", () => {
    render(<Navbar />);
    const homeLink = screen.getByText("Home");
    const propertiesLink = screen.getByText("Properties");
    expect(homeLink).toBeInTheDocument();
    expect(propertiesLink).toBeInTheDocument();
  });

  it("does not render 'Add Property' link when not authenticated", () => {
    render(<Navbar />);
    const addPropertyLink = screen.queryByText("Add Property");
    expect(addPropertyLink).not.toBeInTheDocument();
  });

  it("renders 'Add Property' link when authenticated", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { name: "Test User" } },
    });
    render(<Navbar />);
    const addPropertyLink = screen.getByText("Add Property");
    expect(addPropertyLink).toBeInTheDocument();
  });

  /* it("toggles mobile menu", () => {
    render(<Navbar />);
    const mobileMenuButton = screen.getByRole("button", {
      name: /open main menu/i,
    });
    fireEvent.click(mobileMenuButton);
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
  });

  it("renders login button when not authenticated", () => {
    render(<Navbar />);
    const loginButton = screen.getByText("Login or Register");
    expect(loginButton).toBeInTheDocument();
  }); */

  it("renders profile menu when authenticated", () => {
    (useSession as jest.Mock).mockReturnValue({
      data: { user: { name: "Test User", image: "/profile.png" } },
    });
    render(<Navbar />);
    const profileButton = screen.getByRole("button", {
      name: /open user menu/i,
    });
    fireEvent.click(profileButton);
    const profileLink = screen.getByText("Your Profile");
    expect(profileLink).toBeInTheDocument();
  });
});
