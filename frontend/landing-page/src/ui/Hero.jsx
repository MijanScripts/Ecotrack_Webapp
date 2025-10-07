const Hero = () => {
  return (
    <section className="relative">
      <div className="relative h-screen bg-gradient-to-b from-black/20 to-black/40">
        <div
          className="absolute inset-0 bg-[url('../public/HeroSec.png')] bg-no-repeat bg-cover bg-center lg:rounded-bl-[80px]"
          style={{
            backgroundImage: "url('/HeroSec.png')",
          }}
        />

        <div className="absolute inset-0 bg-black/50 lg:rounded-bl-[80px]"></div>

        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 sm:mb-8">
              Track. <span className="text-[#3CB42B]">Reduce.</span> Thrive.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-relaxed text-center text-white max-w-4xl mx-auto px-4">
              Your personal guide to a low-carbon life — track your carbon
              footprint, learn sustainable habits, and protect the planet daily.
            </p>

            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-8 py-4 cursor-pointer bg-[#3CB42B] text-white font-semibold text-lg rounded-lg hover:bg-[#2ea024] transform hover:scale-105 transition-all duration-200 shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
