import React from "react";
import { FaQrcode } from "react-icons/fa";

const SecondHero = ({ setIsModel }) => {
  return (
    <div className="py-10 px-2">
      <div className="w-full md:w-[90%] flex flex-wrap flex-col sm:flex-row gap-y-6 mx-auto justify-between ">
        <div className="flex gap-2">
          <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
            <FaQrcode />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            From AED <span className="text-[#BD8C1B]">2.1 Million </span> <br />{" "}
            Onwards
          </h2>
        </div>

        <div className="flex gap-2 center">
          <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
            <FaQrcode />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            <span className="text-[#BD8C1B]">Flexible Payment </span>
            Options <br /> Available
          </h2>
        </div>

        <div className="flex gap-2">
          <div className="text-white bg-black p-2 h-fit flex items-center justify-center">
            <FaQrcode />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            <span className="text-[#BD8C1B]">Prime Location</span> Accessible{" "}
            <br />
            from Every Corner
          </h2>
        </div>
      </div>
      <div
        onClick={() => {
          setIsModel(true);
        }}
        className=" w-full md:w-[90%] lg:w-[80%] mt-8 mx-auto my-2 cursor-pointer"
      >
        More information about price →
      </div>
    </div>
  );
};

export default SecondHero;
