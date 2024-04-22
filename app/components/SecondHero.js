import React from "react";

const SecondHero = ({ setIsModel }) => {
  return (
    <div className="py-10">
      <div className=" w-full md:w-[90%] lg:w-[80%] flex flex-col sm:flex-row gap-y-6 mx-auto justify-between">
        <h2 className="text-3xl font-bold">
          Starting from AED
          <br /> 2.1 million
        </h2>
        <h2 className="text-3xl font-bold">
          Easy Payment
          <br />
          Plan
        </h2>
        <h2 className="text-3xl font-bold">
          Ready to
          <br />
          Move
        </h2>
      </div>
      <div
        onClick={() => {
          setIsModel(true);
        }}
        className=" w-full md:w-[90%] lg:w-[80%] mx-auto my-2"
      >
        Ask for Prices →
      </div>
    </div>
  );
};

export default SecondHero;
