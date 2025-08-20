import React from "react";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import FAQSHero from "../ui/FaQHero";
import FaQs from "../ui/FaQs";
import Join from "../ui/Join";
// import JoinUs from "../ui/JoinUs";

const FAQS = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <FAQSHero />
      <FaQs />
      <Join />
      {/* <JoinUs /> */}
      <Footer />
    </div>
  );
};

export default FAQS;
