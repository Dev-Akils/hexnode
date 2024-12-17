import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  url: string;
  title: string;
  name: string;
  role: string;
  companyname: string;
}

interface SliderProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

export default function Slider({
  slides,
  autoPlayInterval = 5000,
}: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlayInterval, currentIndex]);

  return (
    <div className="relative h-[300px] w-full sm:w-[800px] sm:h-[300px] md:h-[300px] lg:h-[400px] flex justify-center items-center my-10">
      <div className="w-full h-full bg-gray-100 transition-all duration-500 ease-in-out rounded-lg flex flex-col sm:flex-col md:flex-row items-center md:items-start">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full flex-shrink-0">
          <img
            src={slides[currentIndex].url}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-6 md:p-8 space-y-4 text-left">
          <h2 className="font-bold text-[rgb(2,10,25)] text-[24px] sm:text-[28px] lg:text-[32px] leading-[32px] lg:leading-[40px]">
            {slides[currentIndex].title}
          </h2>
          <p className="font-bold text-[rgb(2,10,25)] text-[20px] sm:text-[22px] lg:text-[24px] leading-[33px] lg:leading-[36px]">
            {slides[currentIndex].name}
          </p>
          <p className="font-normal text-[rgb(2,10,25)] text-[14px] sm:text-[16px] lg:text-[18px] leading-[18px] lg:leading-[22px]">
            {slides[currentIndex].role}
          </p>
          <p className="font-normal text-[rgb(2,10,25)] text-[14px] sm:text-[16px] lg:text-[18px] leading-[18px] lg:leading-[22px]">
            {slides[currentIndex].companyname}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-7 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 focus:ring-2 focus:ring-white text-white p-2 rounded-full transition-all"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 focus:ring-2 focus:ring-white text-white p-2 rounded-full transition-all"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
