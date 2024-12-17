import React from "react";

const CustomButton = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded bg-[#DD0735] text-white hover:bg-red-600 transition ${className}`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
