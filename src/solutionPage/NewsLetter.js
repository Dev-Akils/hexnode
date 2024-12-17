import React from "react";
import CustomButton from "../Components/Custombutton";
import {Link} from 'react-router-dom';

function NewsLetter() {
  return (
    <section className="p-4 sm:p-6 md:p-8 lg:p-12 bg-black text-center">
      <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10">
        <h2 className="font-bold text-[rgb(255,255,255)] text-[42px] leading-[55px]">
          Sign up and try Hexnode free for 14 days!
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-2 w-full">
        {/* Input Field */}
        <div className="">
          <input
            type="email"
            placeholder="Your Work Email"
            className="w-full sm:w-72 md:w-80 lg:w-96 p-4 rounded-lg focus:outline-none text-gray-700 bg-gray-100 placeholder-gray-500 shadow-md hover:shadow-xl transition-shadow duration-300"
          />
        </div>

        {/* Button */}
        <div className="mt-2 md:mt-0">
          <CustomButton
            label="GET STARTED NOW!"
            onClick={() => console.log("Button clicked!")}
            className="w-full md:w-auto px-6 py-3 bg-[#DD0735] text-white rounded-lg hover:bg-[#C5052F] transition-all duration-300"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center text-white">
        <p className="text-sm">
          No credit cards required.{" "}
          <Link to="https://www.hexnode.com/mobile-device-management/request-demo/">
      <span className="text-[#DD0735] font-semibold cursor-pointer hover:underline">
            Request a demo
          </span>
          </Link>
        </p>
      </div>
    </section>
  );
}

export default NewsLetter;
