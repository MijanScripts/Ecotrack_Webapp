// import React from 'react'



// const OurMission = () => {
//   return (
//     <div>
//       <section>
//         <h1>Our Mission</h1>
//         <p>
//             ECOTRACK was created with one goal in mind:
//         </p>
//         <p>
//             To make climate action accessible to everyone, everywhere.
//         </p>
//         <div>
//             here is the images
//         </div>
//         <p>
//             We believe that everyday choices - <span>how we move, eat, live</span> -shape the future of our planet.
//         </p>
//         <p>
//             But most people don't have the tools to measure or understand their impact.
//         </p>
//       </section>
//     </div>
//   )
// }

// export default OurMission


// import React from 'react';

// const imageData = [
//   {
//     src: '/images/climate-action.jpg',
//     alt: 'Taking climate action',
//   },
//   {
//     src: '/images/sustainable-living.jpg',
//     alt: 'Sustainable living choices',
//   },
//   {
//     src: '/images/global-impact.jpg',
//     alt: 'Global environmental impact',
//   },
// ];

// const OurMission = () => {
//   return (
//     <div className="p-4">
//       <section className="max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold mb-4">Our Mission</h1>
//         <p className="mb-2">
//           ECOTRACK was created with one goal in mind:
//         </p>
//         <p className="mb-4">
//           To make climate action accessible to everyone, everywhere.
//         </p>

//         {/* Responsive image grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
//           {imageData.map((img, index) => (
//             <img
//               key={index}
//               src={img.src}
//               alt={img.alt}
//               className="w-full h-48 object-cover rounded-lg shadow-md"
//             />
//           ))}
//         </div>

//         <p className="mb-2">
//           We believe that everyday choices - <span className="font-semibold">how we move, eat, live</span> - shape the future of our planet.
//         </p>
//         <p>
//           But most people don't have the tools to measure or understand their impact.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default OurMission;





import React from 'react';




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

const OurMission = () => {
  return (
    // <div className="px-4 py-12 bg-gray-100">
      <section className="relative z-10 max-w-7xl mx-auto lg:mx-24 lg:px-24 rounded bg-gray-100 px-4 py-12">
        <h1 className="text-3xl font-bold mb-4 text-center">Our Mission</h1>
        <p className="mb-2 text-center">
          ECOTRACK was created with one goal in mind:
        </p>
        <p className="mb-6 text-center text-green-600">
          To make climate action accessible to everyone, everywhere.
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-6 mb-6">
          {imageData.map((img, index) => (
            <div key={index} className="w-full h-64  relative rounded-lg overflow-hidden shadow-md">
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
    // </div>
  );
};

export default OurMission;
