import React, { useState, useEffect } from "react";
import CustomButton from "./Custombutton";
import {Link} from 'react-router-dom';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "border bg-white " : "bg-black text-white"
      } hover:bg-white hover:text-black`}
    >
      <div className="container mx-auto flex items-center  justify-between py-4 md:px-28 px-10">
        <div className="text-[30px] font-bold">
        <Link to="https://www.hexnode.com/">
        hexnode
        </Link>
        </div>
        <div className="flex space-x-6">
          <Link to="https://www.hexnode.com/mobile-device-management/cloud/signup/">
            <CustomButton
              label="14 DAY FREE TRIAL"
              onClick={() => console.log("Button clicked!")}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
