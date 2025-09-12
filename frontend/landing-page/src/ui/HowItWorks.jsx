const howItWorksData = [
  {
    name: "Track Your Daily Activities with Ease",
    desc: "Start by telling ECOTRACK how you live — your commute type, electricity use, lifestyle choices, and more. Whether you drive, fly, cook, or shop, our intuitive tracker lets you log your daily activities effortlessly. Behind the scenes, ECOTRACK calculates your carbon emissions based on global sustainability standards.",
    img: "../howitworksone.jpg",
  },
  {
    name: "Understand Your Impact Instantly",
    desc: "Get a clear breakdown of where your emissions are coming from — transport, energy, food, shopping, and more. Our real-time dashboard displays your total carbon footprint, giving you visual insights into how your choices affect the planet. The more you log, the smarter your data becomes — helping you make informed, low-carbon decisions.",
    img: "../howitworkstwo.png",
  },
  {
    name: "Get Personalized Eco & Health Tips",
    desc: "Based on your lifestyle, ECOTRACK sends you daily eco-friendly tips and small, achievable challenges that reduce your emissions. From switching off unused devices to choosing greener travel options, you'll learn how to live lighter — one day at a time. You can also set personal goals and track your progress as you grow into a more sustainable version of yourself.",
    img: "../howitworksthree.png",
  },
  {
    name: "Support Global SDGs By Tracking",
    desc: "Every tap on ECOTRACK contributes to the bigger picture — the United Nations Sustainable Development Goals. You're directly supporting climate action (Goal 13), responsible consumption (Goal 12), and sustainable cities (Goal 11). Real change starts with you — and ECOTRACK makes that journey powerful and personal.",
    img: "../howitworksfour.jpg",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-16 lg:gap-24">
          {howItWorksData.map((el, i) => (
            <div key={i} className="w-full">
              <div
                className={`flex flex-col lg:flex-row ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-start lg:items-center justify-between gap-6 lg:gap-8 mb-8 lg:mb-12`}
              >
                <div className="flex-shrink-0">
                  <h1 className="text-6xl font-display-one sm:text-8xl lg:text-[176px] font-bold text-[#CACACA] leading-none select-none">
                    0{i + 1}
                  </h1>
                </div>

                <div className="flex-1">
                  <h3
                    className={`text-[30px] font-display-two sm:text-3xl lg:text-[64px] font-bold text-[#1F1F1F] leading-[100%] ${
                      i % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    {el.name}
                  </h3>
                </div>
              </div>

              <div className="mb-8 lg:mb-12">
                <p className="text-[18px] font-display-one sm:text-lg lg:text-[24px] font-medium text-gray-700 leading-relaxed max-w-full">
                  {el.desc}
                </p>
              </div>

              <div className="w-full">
                <div
                  className="w-full h-48 sm:h-64 lg:h-[333px] rounded-xl lg:rounded-[12px] bg-cover bg-center bg-no-repeat shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ backgroundImage: `url(${el.img})` }}
                  // role="img"
                  aria-label={`Illustration for step ${i + 1}: ${el.name}`}
                >
                  <div className="w-full h-full bg-black/10 rounded-xl lg:rounded-[12px] hover:bg-black/5 transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
