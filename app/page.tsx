import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import Footer from "@/components/Footer";
import HomeProperties from "@/components/HomeProperties";

// Define the props type

// Functional Component with TypeScript
const HomePage: React.FC = () => {
  return (
    <>
      <h1>Home</h1>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
      <Footer />
    </>
  );
};

export default HomePage;
