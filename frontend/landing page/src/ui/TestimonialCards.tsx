import { useState } from "react";

const testCards = [
  {
    icon: "./testimonialone.svg",
    name: "Gracei Mandel",
    location: "Abuja, Nigeria",
    testimonial:
      "I love how easy it is to track everything. The dashboard motivates me to keep going. I've reduced my footprint by 18% in just 2 months!",
  },
  {
    icon: "./testimonialtwo.svg",
    name: "Koffi Fredrick",
    location: "Accra, Ghana",
    testimonial:
      "The tips are simple but powerful. Now I unplug my devices at night, I eat more plant-based meals, and I've joined a weekly community challenge. It's fun!",
  },
  {
    icon: "./testimionialthree.svg",
    name: "Ada Joyce",
    location: "Lagos, Nigeria",
    testimonial:
      "I didn't realize how much my daily commute was affecting the environment. ECOTRACK helped me switch to public transport twice a week — and I've saved money too!",
  },
];

const TestimonialCards = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = testCards.length;

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold text-black">
            The ECOTRACK
            <br />
            Community Speaks
          </h1>
        </div>

        <div className="relative">
          <div className="block sm:hidden  space-y-6">
            {testCards.map((el, i) => (
              <div
                key={i}
                className="bg-white w-[387px] h-[428px] rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="mb-6">
                  <img src={el.icon} alt="" />
                </div>

                <blockquote className="text-[#4B4B4B] font-semibold lg:text-[20px] font-display-one leading-[100%] text-base mb-8">
                  "{el.testimonial}"
                </blockquote>

                <div>
                  <h3 className="font-bold font-font-display-two text-black text-[20px] mb-1">
                    {el.name}
                  </h3>
                  <p className="font-normal font-font-display-two text-black text-[20px] leading-[100%]">
                    {el.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden sm:flex items-center justify-center gap-6">
            {testCards.map((el, i) => (
              <div
                key={i}
                className="w-[387px] h-[428px] bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <div className="mb-6">
                  <img src={el.icon} alt="" />
                </div>

                <blockquote className="text-[#4B4B4B] font-medium text-[20px] leading-[100%] font-display-one mb-8">
                  "{el.testimonial}"
                </blockquote>

                <div>
                  <h3 className="font-bold font-font-display-two text-black text-[20px] mb-1">
                    {el.name}
                  </h3>
                  <p className="font-normal font-font-display-two text-black text-[20px] leading-[100%]">
                    {el.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCards;
