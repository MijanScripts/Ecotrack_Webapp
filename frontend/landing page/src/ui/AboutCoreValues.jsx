// import React from 'react'

// const AboutCoreValues = () => {
//   return (
//     <div className=''>
//       <section className='flex flex-col  lg:flex-row items-center justify-between gap-12'>
//         <div className='flex flex-col justify-between mb-1 mt-96 lg:mt-20 lg:mx-24'>
//             <h1 className=' text-2xl font-bold '>That's why we build <span className='text-green-600'>ECOTRACK</span>:</h1>
//             <p className='text-gray-500'>
//                 A simple, powerful app that helps you track your carbon footprint, learn sustainable habits, and be a part of a global movement for change.
//             </p>

//             <p className='text-gray-500'>
//                 Backed by the passionate team, ECOTRACK is more than an app. <br />
//                 It's a commitment to building a greener, fairer, and more concise world.
//             </p>
//         </div>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-6 mb-6'>
//             <img src="../public/howitworkstwo.png" alt="howitworkstwo" />
//         </div>
//       </section>
//     </div>
//   )
// }

// export default AboutCoreValues

import React from "react";

const myFeatures = [
  {
    image: "../public/featicon.svg",
    alt: "featicon.svg",
    header: "Sustainability First",
    paragraph: "We design everything with the palnet in mind."
  },
  {
    image: "../public/featicon.svg",
    alt: "featicon.svg",
    header: "Education-Driven",
    paragraph: "We turn complex climate data into simple, everyday actions."
  },
  {
    image: "../public/featicon.svg",
    alt: "featicon.svg",
    header: "Community-Powered",
    paragraph: "We believe in collective action and peer inspiration."
  },
  {
    image: "../public/featicon.svg",
    alt: "featicon.svg",
    header: "Transparency Always",
    paragraph: "No greenwashing, Just real data and real results."
  }
];


const AboutCoreValues = () => {
  return (
    <div className="lg:px-[50px] px-3 py-8 lg:py-[100px] md:mt-[450px]  lg:mt-[30px] mt-[600px] ">
      <section className="flex flex-col lg:flex-row md:mx-12 items-center justify-between gap-8 mx-3 ">
        {/* Text Content */}
        <div className="flex-1 space-y-6 lg:mx-8">
          <h1 className="text-1xl font-bold mt-[400px] md:mt-[10px] lg:mt-[50px] text-3xl lg:text-6xl">
            That’s why we built <span className="text-green-600">ECOTRACK</span>
            :
          </h1>
          <p className="text-gray-400 lg:text-2xl">
            A simple, powerful app that helps you track your carbon footprint,
            learn sustainable habits, and be part of a global movement for
            change.
          </p>
          <p className="text-gray-400 lg:text-2xl">
            Backed by a passionate team, ECOTRACK is more than an app. <br />
            It’s a commitment to building a greener, fairer, and more conscious
            world.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center ">
          <img
            src="/howitworkstwo.png"
            alt="how it works"
            className="w-[450px] h-[300px] lg:h-[500px] md:h-[400px] md:w-full shadow-md object-cover rounded-tl-4xl rounded-br-4xl"
          />
        </div>
      </section>

      <div className="mt-8  items-center lg:my-12 md:mx-[50px] md:mt-12">
        <h2 className="text-center text-4xl font-bold space-x-1 mb-2">
              Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-8 md:gap-4 md:my-6">
        {myFeatures.map((i, index) => (
          <div key={index} className="flex items-start gap-3  px-1 ">
              <div className="">
                <h4 className="text-[20px] font-bold flex gap-2 ">
                  <span>
                    <img 
                      src={i.image}
                      alt={i.alt}
                      className="h-auto w-full mb-1"
                    />
                  </span>
                  {i.header}
                </h4>
                <p className="text-2x1 px-10 sm:text-lg lg:text-xl font-medium text-gray-700 leading-relaxed">
                  {i.paragraph}
                </p>
              </div>
            </div>
        ))}
        </div>
      </div>

    </div>
  );
};

export default AboutCoreValues;
