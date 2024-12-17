import React from "react";
import { platform } from "./Data";

function PlatformSupported() {
  
  return (
    <>
      <section className="p-4 sm:p-6 md:p-8 lg:p-12 ">
        <div className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 ">
          <h2 className="text-xl md:text-2xl lg:text-3xl flex justify-center font-bold text-center sm:text-left md:text-left lg:text-left">
            Platforms supported
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-center gap-6 p-4">
          {platform.map((e) => (
            <div
              key={e.id}
              className="flex justify-center items-center p-4  rounded-lg"
              style={{
              transition: "transform 0.3s ease-in-out", 
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-10px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
            
              <img
                src={e.image}
                alt="Description"
                className="w-52 h-52 object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PlatformSupported;
