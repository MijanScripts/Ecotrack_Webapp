import { useState } from 'react';

import { faqData } from '../data'; 
import { Link } from 'react-router-dom';

export default function FaQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col max-w-4xl mx-auto lg:max-w-300 px-4 py-10">

      <div className="space-y-6">
        {faqData.map((item, index) => (
          <div key={index} className="rounded-lg border border-gray-200">
            
            {/* Question section */}
            <button
              onClick={() => toggle(index)}
              className="w-full bg-gray-50 hover:bg-gray-100  duration-200  px-5 py-4 flex justify-between items-center text-black text-center"
            >
              <span className="text-1x1 font-medium text-black text-left">{item.question}</span>
              <span className="text-3xl text-gray-600">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>

            {/* Answer section (only visible when open) */}
            {openIndex === index && (
              <div className="bg-gray-10 px-5 py-4 text-gray-700 text-sm transition-all font-light duration-300 ease-in-out border-none">
                {item.answer}
              </div>
            )}

          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-black text-3xl font-stretch-100% font-bold mb-4">
          Still have a question?
        </p>
        <p>
          Reach us via our <span className="text-green-600" ><Link to={"/contact-us"}>Contact Us</Link></span> Page
        </p>
      </div>    
    </div>
  );
}
