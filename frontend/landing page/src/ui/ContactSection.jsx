// import React from 'react'   

// const ContactSection = () => {
//   return (

//       <div className="mx-4 my-4 flex flex-col md:flex-row justify-between items-start p-4 gap-4 lg:p-10">
//         {/* left part */}
//         <div className="pt-5 md:w-1/2 flex flex-col justify-center items-start lg:px-5">
//           <h3 className="font-bold text-4xl mb-4 lg:text-6xl lg:py-3">
//             We'd Love to Hear From You
//           </h3>

//           <p className="mb-4 lg:py-5 ">
//             Whether you have a question, feedback, partnership <br />
//             idea, or just want to say hi - <br />
//             the{" "}
//             <span className="mt-4 text-green-600 font-medium">
//               ECOTRACK
//             </span>{" "}
//             team is here for you.
//           </p>

//           <p>
//             Join us in rewriting the climate story - one person, one action at a
//             time.
//           </p>

//           <p className="mt-4 text-green-600 font-medium text-sm">
//             Download <span>ECOTRACK</span> App
//           </p>
//         </div>

//         {/* right part */}
//         <div className="bg-gray-50 p-4 rounded shadow-md  lg:w-1/2 w-full lg:px-5">
//           <div className="flex flex-col mb-4 gap-1">
//             <p className="text-2xl font-bold">Send us a message</p>

//             <p className="">We'll get back to you within 24 - 48 hours.</p>
//           </div>

//           {/* <div className="form"> */}
//           <form className="flex flex-col gap-4">
//             <div className="flex flex-col md:flex-row gap-4 lg:flex-row ">
//               <input
//                 type="text"
//                 placeholder="Enter first name"
//                 className="p-2 border border-gray-300 rounded bg-white lg:w-full"
//               />
//               <input
//                 type="text"
//                 placeholder="Enter last name"
//                 className="p-2 border border-gray-300 rounde bg-white lg:w-full"
//               />
//             </div>
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="p-2 border border-gray-300 rounded bg-white"
//             />
//             <textarea
//               placeholder="Your Message"
//               className="p-2 border border-gray-300 rounded h-32 bg-white"
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-green-600 text-white p-2 rounded hover:bg-green-700 transition duration-300  lg:w-50 lg:mx-45 px-4 py-2"
//             >
//               Send Message
//             </button>
//           </form>
//           {/* </div> */}
//         </div>
//       </div>
//   )
// }

// export default ContactSection


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_bvm02sk',       // Replace with your EmailJS service ID
      'template_i0jd2cf',      // Replace with your EmailJS template ID
      form.current,
      'uUU5BfzvMaKHoTR1S'        // Replace with your EmailJS public key
    ).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        form.current.reset(); // Optional: clear the form
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <div className="mx-4 my-4 flex flex-col md:flex-row justify-between items-start p-4 gap-4 lg:p-10">
      {/* left part */}
      <div className="pt-5 md:w-1/2 flex flex-col justify-center items-start lg:px-5">
        <h3 className="font-bold text-4xl mb-4 lg:text-6xl lg:py-3">
          We'd Love to Hear From You
        </h3>
        <p className="mb-4 lg:py-5">
          Whether you have a question, feedback, partnership <br />
          idea, or just want to say hi - <br />
          the{" "}
          <span className="mt-4 text-green-600 font-medium">
            ECOTRACK
          </span>{" "}
          team is here for you.
        </p>
        <p>
          Join us in rewriting the climate story - one person, one action at a time.
        </p>
        <p className="mt-4 text-green-600 font-medium text-sm">
          Download <span>ECOTRACK</span> App
        </p>
      </div>

      {/* right part */}
      <div className="bg-gray-50 p-4 rounded shadow-md lg:w-1/2 w-full lg:px-5">
        <div className="flex flex-col mb-4 gap-1">
          <p className="text-2xl font-bold">Send us a message</p>
          <p>We'll get back to you within 24 - 48 hours.</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 lg:flex-row ">
            <input
              type="text"
              name="first_name"
              placeholder="Enter first name"
              required
              className="p-2 border border-gray-300 rounded bg-white lg:w-full"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Enter last name"
              required
              className="p-2 border border-gray-300 rounded bg-white lg:w-full"
            />
          </div>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-2 border border-gray-300 rounded bg-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-2 border border-gray-300 rounded h-32 bg-white"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white rounded hover:bg-green-700 transition duration-300 px-4 py-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;


// template_i0jd2cf

// service_bvm02sk

// uUU5BfzvMaKHoTR1S