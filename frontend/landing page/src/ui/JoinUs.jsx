import AppStoreButtons from "./AppStoreButtons";

const JoinUs = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-[url(Topographic.svg)] bg-[#EBF7EA] bg-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="lg:text-[64px] text-base sm:text-[30px] font-bold leading-[100%] font-display-two">
          Join us in rewriting the climate story
        </h1>
        <p className="font-display-one lg:text-[32px] sm:text-[20px] text-base font-medium">
          — one person, one action at a time.
        </p>
        <AppStoreButtons />
      </div>
    </section>
  );
};

export default JoinUs;
