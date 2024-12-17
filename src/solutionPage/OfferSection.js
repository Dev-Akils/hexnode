import React, { useState } from "react";
import { offerSection } from "../solutionPage/Data";
import { FaAngleRight } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const OfferSection = () => {
  const [active, setActiveTab] = useState(offerSection[0]?.id || "");

  
  const handleShow = (id) => {
    setActiveTab(id);
  };

  return (
    <section className="container mx-auto w-full my-6">
      <div className="justify-center items-center text-center my-4 w-full">
        <h2 className="font-bold text-[rgb(2,10,25)] text-[40px] leading-[52px]">
          What additional possibilities does the Kiosk mode offer?
        </h2>
      </div>

      <div className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-full">
        {/* Left Section: Images */}
        <div className="w-full p-12 ">
          {offerSection.map((item) => (
            <div key={item.id}>
              {active === item.id && (
                <div className="relative  w-full p-5  rounded-2xl overflow-hidden ">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full rounded-lg"
                  />
                  <p className="absolute  flex items-center bg-[#EAF7F9] p-4 font-semibold text-[rgb(2,10,25)] text-[18px] leading-[26px] top-1/2 left-[67%] transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-md">
                 
                  <span className="text-green-400 px-2"><FaCheckCircle  /></span>{item.absolute}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section: Titles and Details */}
        <div className="w-full p-12">
          {offerSection.map((item) => (
            <div key={item.id} onClick={() => handleShow(item.id)} className="cursor-pointer  border-b border-gray-200">
              {/* Title */}
              <p
                
                className="font-bold text-[rgb(5,6,7)] text-[26px] leading-[40px] sm:my-7 md:my-5 my-2"
              >
                {item.title}
              </p>

              {/* Details */}
              {active === item.id && (
                <div className="mt-2">
                  <p className="font-light text-[rgb(51,51,51)] text-[18px] leading-[28px] mt-2">
                    {item.paragraph}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold  items-center text-[rgb(221,7,53)] text-[18px] leading-[23px] mt-2 flex"
                  >
                    {item.link}
                   <FaAngleRight />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
