const AppStoreButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4  rounded-lg">
      <a
        href="#"
        className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-200 min-w-[200px]"
      >
        <div className="flex-shrink-0">
          <img src="/mage_playstore.svg" alt="" />
        </div>

        <div className="text-left">
          <div className="text-[14px] font-display-one">Download App on</div>
          <div className="text-[16px] font-display-one">Play Store</div>
        </div>
      </a>

      <a
        href="#"
        className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors duration-200 min-w-[200px]"
      >
        <div className="flex-shrink-0">
          <img src="mdi_apple.svg" alt="" />
        </div>

        <div className="text-left">
          <div className="text-[14px] font-display-one">Download App on</div>
          <div className="text-[16px] font-display-one">Apple Store</div>
        </div>
      </a>
    </div>
  );
};

export default AppStoreButtons;
