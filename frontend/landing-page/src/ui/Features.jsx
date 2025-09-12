import AppStoreButtons from "./AppStoreButtons";

const appFeatures = [
  {
    feat: "Track your carbon footprint effortlessly",
  },
  {
    feat: "Get eco-friendly tips tailored to your lifestyle",
  },
  {
    feat: "Join thousands of users taking action",
  },
  {
    feat: "Make every commute, meal, and purchase count",
  },
];

const Features = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-[#EBF7EA]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1">
            <div className="space-y-6 mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-[64px] font-display-two font-bold leading-tight text-black">
                Ready to track and transform?
              </h1>

              <p className="text-lg sm:text-xl lg:text-[30px] font-display-one font-semibold leading-tight text-black">
                Start your eco journey today with ECOTRACK.
              </p>

              <div className="space-y-4 mt-8">
                {appFeatures.map((el, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <img
                        src="/featicon.svg"
                        alt="Feature icon"
                        className="w-6 h-6 sm:w-8 sm:h-8"
                      />
                    </div>
                    <p className="text-base sm:text-lg lg:text-xl font-medium text-gray-700 leading-relaxed">
                      {el.feat}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-green-200">
              <h3 className="text-xl sm:text-2xl lg:text-[30px] font-bold text-gray-900 leading-tight">
                Take climate action. One tap at a time.
              </h3>
              <p className="text-base sm:text-lg font-medium text-gray-600 mb-6">
                You don't need to be perfect. You just need to start.
              </p>

              <AppStoreButtons />
            </div>
          </div>

          <div className="hidden lg:block flex-1 max-w-lg lg:max-w-none">
            <div className="relative">
              <img
                className="w-full h-auto max-w-[500px] lg:max-w-[833px] mx-auto"
                src="/phone-brand.png"
                alt="EcoTrack mobile app interface showing carbon tracking features"
              />

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#3CB42B] rounded-full opacity-10 -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#3CB42B] rounded-full opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
