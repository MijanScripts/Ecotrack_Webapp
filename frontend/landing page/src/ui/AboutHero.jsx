// const AboutHero = () => {


//     const imageData = [
//   {
//     src: '../public/howitworksthree.png',
//     alt: 'howitworksthree',
//   },
//   {
//     src: '../public/howitworkstwo.png',
//     alt: 'howitworkstwo',
//   },
//   {
//     src: '../public/howitworksone.jpg',
//     alt: 'howitworksone',
//   },
// ];

//   return (
//     <section className="relative">
//       <div className="relative h-50 lg:h-60 bg-gradient-to-b from-black/20 to-black/40">
//         <div
//           className="absolute inset-0 bg-[url('../public/HeroSec.png')] bg-no-repeat bg-cover bg-center lg:rounded-bl-[80px]"
//           style={{
//             backgroundImage: "url('/HeroSec.png')",
//           }}
//         />

//         <div className="absolute inset-0 bg-black/50 lg:rounded-bl-[80px]"></div>

//         <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-5xl mx-auto">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6 sm:mb-8">
//               {/* Track. <span className="text-[#3CB42B]">Reduce.</span> Thrive. */}
//               About <span className="text-green-600">ECOTRACK</span>
//             </h1>
//           </div>
//         </div>

//         <section className="relative z-10 max-w-7xl mx-auto lg:mx-24 bg-amber-600 px-4 py-12">
//         <h1 className="text-3xl font-bold mb-4 text-center">Our Mission</h1>
//         <p className="mb-2 text-center">
//           ECOTRACK was created with one goal in mind:
//         </p>
//         <p className="mb-6 text-center text-green-600">
//           To make climate action accessible to everyone, everywhere.
//         </p>

//         {/* Image Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//           {imageData.map((img, index) => (
//             <div key={index} className="w-full h-64 relative rounded-lg overflow-hidden shadow-md">
//               <img
//                 src={img.src}
//                 alt={img.alt}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         <p className="mb-2 text-center">
//           We believe that everyday choices - <span className="font-semibold text-green-600">how we move, eat, live</span> - shape the future of our planet.
//         </p>
//         <p className='text-center'>
//           But most people don't have the tools to measure or understand their impact.
//         </p>
//       </section>
//       </div>

      
//     </section>
//   );
// };

// export default AboutHero;

import React from 'react';
// import AboutCoreValues from './AboutCoreValues';

const imageData = [
  {
    src: '../public/howitworksthree.png',
    alt: 'howitworksthree',
  },
  {
    src: '../public/howitworkstwo.png',
    alt: 'howitworkstwo',
  },
  {
    src: '../public/howitworksone.jpg',
    alt: 'howitworksone',
  },
];


const AboutHero = () => {




  return (
    <div className=''>
    <section className="relative mb-96 ">
      <div className="relative h-50 lg:h-60 bg-gradient-to-b from-black/20 to-black/40">
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
              {/* Track. <span className="text-[#3CB42B]">Reduce.</span> Thrive. */}
              About <span className="text-green-600">ECOTRACK</span>
            </h1>
          </div>
        </div>


        <div className=''>
        <section className="absolute top-40 z-10 left-0 mx-5  lg:mx-[200px] lg:px-32 rounded border-none bg-white shadow-2xl shadow-gray-100 px-4 py-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Our Mission</h1>
        <p className="mb-2 text-center">
          ECOTRACK was created with one goal in mind:
        </p>
        <p className="mb-6 text-center text-green-600">
          To make climate action accessible to everyone, everywhere.
        </p>

        
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-6 mb-3">
          {imageData.map((img, index) => (
            <div key={index} className="w-full h-50   rounded-lg overflow-hidden shadow-md">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <p className="mb-2 text-center">
          We believe that everyday choices - <span className="font-semibold text-green-600">how we move, eat, live</span> - shape the future of our planet.
        </p>
        <p className='text-center'>
          But most people don't have the tools to measure or understand their impact.
        </p>
      </section>
      </div>
        
      </div>

    
    </section>

    {/* <AboutCoreValues /> */}
    </div>
  );
};

export default AboutHero;
