import React from "react";

const Chooses = () => {
  return (
    <div>
      <div className="relative w-screen object-cover">
        <img src="/assets/townhouse.jpg" className="w-full" />
        <div className="absolute bottom-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-40 py-10">
          <div className="h-full w-full md:w-[90%] lg:w-[80%] flex  flex-col justify-between">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:justify-between sm:items-start px-4">
              <img
                src="/assets/logo/63800434-0-damac-logo-white.svg"
                className="w-[200px]"
              />

              <div className="text-white text-center sm:text-start">
                <h2 className="text-2xl sm:text-3xl  font-bold">
                  DAMAC is going to launch new master <br /> community
                  Near to DIP
                </h2>
                <p className="text-lg sm:text-xl font-medium ">
                  Find Your Perfect Home from <br /> Just AED 2.1 million
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsModel(true)}
              className="uppercase mb-10 mt-5 px-3 py-3 w-fit mx-auto hover:scale-105 transition-all duration-300 ease-in-out text-gray-900 bg-[#DBDFD7] text-sm font-extrabold leading-5 tracking-[0.21px]"
            >
              Show your Interest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chooses;
