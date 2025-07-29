import AppStoreButtons from "./AppStoreButtons";

const date = new Date();

const Footer = () => {
  return (
    <footer className="w-full bg-[#000000]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-row items-center justify-between">
          <div className="">
            <div className="">
              <img src="ecotrackfooter.svg" alt="eco track logo" />
            </div>
            <div className="">
              <button>Download Now</button>
            </div>

            <div className="">
              <h1 className="text-[#3CB42B] mb-5">Download Now</h1>

              <ul className="text-white flex lg:flex-row flex-col space-y-6 gap-[10px]">
                <li>About Us</li>
                <li>Features</li>
                <li>News</li>
                <li>FAQs</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div className="text-[#D1D5DB] mt-5">
              <p>© {date.getFullYear()}. All rights reserved</p>
            </div>
          </div>

          <div className="">
            <h1 className="text-[24px] font-semibold leading-[100%] text-white">
              Get the App
            </h1>
            <div className="flex flex-col items-center justify-center">
              <AppStoreButtons />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
