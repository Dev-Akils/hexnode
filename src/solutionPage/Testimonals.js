import React from "react";
import Slider from "../solutionPage/Slider";
import InfinitySlider from "./InfinitySlider";
import justin from "../assets/justin-modrak.webp";
import dalibor from "../assets/dalibor-kruljac.webp";
import chris from "../assets/chris-robinson.webp";
const slides = [
  {
    url: justin,
    title: "Hexonode is of great value. Works great with Android and iOS!",
    name: "Justin Modrak",
    role: "Technology Coordinator",
    companyname: "East Troy Community School District",
  },
  {
    url: dalibor,
    title:
      "Most complete MDM solution I found, and I tested many of them including major names",
    name: "Dalibor Kruljac",
    role: "KAMELEYA LTD",
    companyname: "",
  },
  {
    url: chris,
    title: "It seemed to be in-line with everything we were looking at.",
    name: "Chris Robinson",
    role: "Executive Account Manager, NCS",
    companyname: "",
  },
];

function Testimonals() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="font-bold text-[rgb(2,10,25)] text-[40px] leading-[52px] mb-8 justify-center flex">
          Why should you choose Hexnode?
        </h1>
        <div className="justify-center items-center flex">
          <Slider slides={slides} autoPlayInterval={5000} />
        </div>
        <div className="relative w-full h-auto">
          {/* Left Blur Effect */}
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white/60 to-transparent backdrop-blur-sm z-10"></div>

          {/* Slider */}
          <InfinitySlider />

          {/* Right Blur Effect */}
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white/60 to-transparent backdrop-blur-sm z-10"></div>
        </div>
      </div>
    </div>
  );
}

export default Testimonals;
