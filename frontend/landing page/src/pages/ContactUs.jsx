import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import ContactHero from "../ui/ContactHero";
import ContactSection from "../ui/ContactSection";
// import ContactLink from "../ui/ContactLink";
// import JoinUs from "../ui/JoinUs";
import Join from "../ui/Join";

const ContactUs = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      {/* <div className="img-text">
        <img
          src="../../public/HeroSec.png"
          alt="HeroSec.png"
          className="w-full h-[400px] object-cover"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold mb-24 text-green-600 mb-24 text-fixed ">
            Contact <span className="text-white">ECOTRACK</span>
          </h1>
        </div>
      </div> */}
      <ContactHero />
      <ContactSection />
      {/* <JoinUs /> */}
      {/* <ContactLink /> */}
      <Join />

     
      <Footer />
    </div>
  );
};

export default ContactUs;
