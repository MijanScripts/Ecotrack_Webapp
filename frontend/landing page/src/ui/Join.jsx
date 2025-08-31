import React from 'react'
import AppStoreButtons from './AppStoreButtons';
// import Topographic from '../assets/Topographic.svg';

const Join = () => {
  return (
    <div>
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-[url(Topographic.svg)] bg-[#EBF7EA] bg-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="lg:text-[64px] sm:text-[30px] font-bold leading-[100%] font-display-two text-center text-black lg:mx-50 mx-10 text-2xl">
          Join us in rewriting the climate story
        </h1>
        <p className="font-display-one lg:text-[32px] sm:text-[20px] text-base font-medium">
          — one person, one action at a time.
        </p>
        <AppStoreButtons />
      </div>
    </section>
    </div>
  )
}

export default Join
