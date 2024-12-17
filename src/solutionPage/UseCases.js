import React, { useState } from "react";

import { useCasestabContent } from "../solutionPage/Data";
function UseCases() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-10 sm:py-12 lg:py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <h2 className=" font-bold text-[#020A19] text-[40px] leading-[52px] mb-6 text-center">
          Specific kiosk modes for unique use cases
        </h2>

        {/* Mobile View */}
        <div className="block md:hidden">
          <div className="flex flex-col space-y-2">
            {useCasestabContent.map((tab) => (
              <div key={tab.id} className="border-b">
                <button
                  className={`w-full  px-6 py-3 text-[18px] font-medium transition-all duration-300 
              ${
                activeTab === tab.id
                  ? "bg-black text-white"
                  : "text-gray-500 hover:text-black hover:bg-gray-200"
              }`}
                  onClick={() =>
                    setActiveTab(activeTab === tab.id ? null : tab.id)
                  }
                >
                  {tab.title}
                </button>
                {/* Content */}
                {activeTab === tab.id && (
                  <div className="px-6 py-4">
                    <h2 className="text-2xl font-bold mb-4">
                      {tab.subheading}
                    </h2>
                    <ul>
                      {tab.content.map((e, index) => (
                        <li
                          key={index}
                          className="font-normal text-[rgb(51,51,51)] text-[16px] leading-[24px] my-2"
                        >
                          <span className="px-3 text-green-500">✓</span>
                          {e}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-center mt-4">
                      <img
                        src={tab.image}
                        alt={tab.title}
                        className="rounded-lg w-full h-auto max-w-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tablet and Desktop View */}
      
        <div className="hidden md:block w-full">
          <div className="flex w-full">
            {useCasestabContent.map((tab) => (
              <button
            key={tab.id}
            className={`flex-1 border text-center px-6 py-3 text-[22px] leading-[24px] font-semibold transition-all duration-300 
         
            ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "text-gray-500 hover:text-black hover:bg-gray-200"
            }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {useCasestabContent.map((tab) => (
              <div
                key={tab.id}
                className={`${
                  activeTab === tab.id ? "flex" : "hidden"
                } flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6 gap-6`}
              >
                {/* Text Content */}
                <div className="w-full sm:w-1/2 md:w-1/2 justify-center items-center">
                  <p className="font-bold text-[rgb(2,10,25)] text-[28px] leading-[40px] my-2">
                    {tab.subheading}
                  </p>
                  <ul>
                    {tab.content.map((e, index) => (
                      <li
                        key={index}
                        className="font-normal text-[rgb(51,51,51)] text-[18px] leading-[28px] my-3"
                      >
                        <span className="px-3 text-green-500">✓</span>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Content */}
                <div className="flex-1 sm:w-1/2 md:w-1/2 w-full justify-center items-center">
                  <img
                    src={tab.image}
                    alt={tab.title}
                    className="rounded-lg w-full max-w-[500px] h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UseCases;
