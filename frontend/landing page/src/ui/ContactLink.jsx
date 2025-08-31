import React from 'react'
import AppStoreButtons from './AppStoreButtons'

const ContactLink = () => {
  return (
    // <div>
      <section className="w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20 bg-[url(Topographic.svg)] bg-[#EBF7EA] bg-no-repeat bg-cover">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="lg:text-[64px] font-bold leading-[100%] font-display-two lg:text-center lg:text-2xl text-3xl text-center">
            Let's build a greener future together.
          </h1>
          {/* <p className="font-display-one lg:text-[32px] sm:text-[20px] text-base font-medium text-center">
          Your message matters - thank you for reaching out.
        </p> */}
          <p className="font-display-one lg:text-2x1 text-2xl text-center">
            Your message matters - thank you for reaching out.
          </p>
          <AppStoreButtons />
        </div>
      </section>
    // {/* </div> */}
  )
}

export default ContactLink
