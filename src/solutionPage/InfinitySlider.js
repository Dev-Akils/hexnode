import React from "react";
import costco from "../assets/costco.svg";
import saic from "../assets/saic.svg";
import hilton from "../assets/hilton.svg";
import group1 from "../assets/group1-automotive.webp";
import lowes from "../assets/lowes.svg";
import polories from "../assets/polaris.svg";
import gorilla from "../assets/gorillas.svg";
import wolt from "../assets/wolt.svg";
import marriot from "../assets/marriott-intl.svg";
import merck from "../assets/merck.svg";

function InfinitySlider() {
  const sliders = [
    {
      id: 1,
      image: costco,
    },
    {
      id: 2,
      image: saic,
    },
    {
      id: 3,
      image: hilton,
    },
    {
      id: 4,
      image: group1,
    },
    {
      id: 5,
      image: lowes,
    },
    {
      id: 6,
      image: polories,
    },
    {
      id: 7,
      image: gorilla,
    },
    {
      id: 8,
      image: wolt,
    },
    {
      id: 9,
      image: marriot,
    },
    {
      id: 10,
      image: merck,
    },
  ];
  return (
    <section className="overflow-hidden whitespace-nowrap relative w-full bg-gray-100">
      <div className="overflow-hidden w-full">
      <div
      className="animate-infiniteSlide inline-flex whitespace-nowrap hover:animate-none transition-all duration-500 ease-in-out">
          {sliders.map((e) => (
            <img src={e.image} alt="alt" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfinitySlider;
