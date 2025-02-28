import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
  title: "Property Pulse",
  description: "Find The Perfect Rental Property",
  keywords: "rental, property, real estate",
};

// Define the props type
interface MainLayoutProps {
  children: React.ReactNode;
}

// Functional Component with TypeScript
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
