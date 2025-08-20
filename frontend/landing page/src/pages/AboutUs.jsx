import React from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';
import Join from '../ui/Join';
import AboutHero from '../ui/AboutHero';
// import OurMission from '../ui/OurMission';
import AboutCoreValues from '../ui/AboutCoreValues';




const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      {/* <OurMission /> */}
      <AboutCoreValues />
      <Join />
      <Footer />
    </div>
  );
};

export default AboutUs;
