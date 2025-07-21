import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedMentors from "../components/FeaturedMentors";
import Categories from "../components/Categories";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedMentors />
      <Categories />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
