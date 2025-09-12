import Features from "../ui/Features";
import Footer from "../ui/Footer";
import Hero from "../ui/Hero";
import HowItWorks from "../ui/HowItWorks";
import JoinUs from "../ui/JoinUs";
import Navbar from "../ui/Navbar";
import TestimonialCards from "../ui/TestimonialCards";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <TestimonialCards />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Home;
