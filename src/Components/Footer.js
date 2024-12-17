import React from "react";
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row md:flex-row xl:flex-row lg:flex-row justify-between text-center w-full mx-auto container p-5 my-2">
      <div className="font-normal text-[rgb(0,0,0)] text-[16px] leading-[24px] ">
        <p><Link to="https://www.hexnode.com/legal/terms-of-use/">
        Terms of Use-</Link>
        <Link to="https://www.hexnode.com/legal/privacy-policy/">
         Privacy- </Link>
         <Link to="https://www.hexnode.com/legal/cookies-policy/">
         Cookies</Link>
         </p>
      </div>
      <div className="font-normal text-[rgb(0,0,0)] text-[16px] leading-[24px]">
        <p>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
