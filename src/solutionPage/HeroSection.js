import React, { useState } from "react";
import herosection from "../assets/hexnode-kiosk.webp";
import CustomButton from "../Components/Custombutton";
import { InfoGrid } from "../solutionPage/Data";

import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
function HeroSection() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <section className="container mx-auto w-full bg-black ">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-16 lg:py-10">
          <div className="flex items-center justify-center w-full h-screen flex-col-reverse lg:flex-row">
            <div className="w-full md:w-1/2 sm:w-1/2 lg:w-1/2 text-center md:px-14">
              <h2 className="font-bold text-white text-[40px] leading-[53px] text-start">
                Turn your devices into kiosks in a few minutes with Hexnode UEM
              </h2>
              <form
                className="flex flex-col sm:flex-row gap-4 w-full max-w-md mt-5"
                onSubmit={handleSubmit}
              >
                {/* Input Field */}
                <input
                  type="email"
                  placeholder="Your Work Email"
                  onChange={(e) => setEmail(e.target.value)} // Corrected syntax
                  required
                  className="flex-1 px-4 py-3 rounded text-black shadow focus:outline-none "
                />

                {/* Submit Button */}
                <CustomButton
                  label="GET STARTED NOW!"
                  onClick={() => console.log("Button clicked!")}
                  className="px-6 py-3  transition"
                />
              </form>
            </div>

            <div className="w-full md:w-1/2 sm:w-1/2 lg:w-1/2 md:px-10">
              <img
                src={herosection}
                alt="Hero Section"
                className="w-full  rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-[#1A1C2B]">
          <Grid
            container
            spacing={3}
            style={{
              backgroundColor: "#1A1C2B",
              padding: "20px",
              width: "100%",
            }}
          >
            {InfoGrid.map((info) => (
              <Grid item xs={12} sm={6} md={4} key={info.id}>
                <div
                  style={{
                    padding: "20px",
                    textAlign: "start",
                    borderRight: info.isBordered
                      ? "2px solid rgba(255, 255, 255, 0.2)"
                      : "none",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-10px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <Link
                    to={info.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={info.imageSrc}
                      alt={info.altText}
                      style={{ paddingBottom: "20px" }}
                    />
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "22px",
                        fontWeight: "normal",
                        color: "rgba(255, 255, 255, 0.6)",
                      }}
                    >
                      {info.description}
                    </p>
                  </Link>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
