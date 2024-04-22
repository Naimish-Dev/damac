import React from "react";

const Ideal = () => {
  return (
    <div className="my-8">
      <h2 className="text-center font-semibold text-4xl mb-4">
        CHOOSE YOUR IDEAL HOME FROM
      </h2>

      <div className="grid grid-cols-1 justify-center sm:grid-cols-2 gap-4 items-center ">
        <img
          src="/assets/WhatsApp Image 2024-04-23 at 00.19.19_ce13a4a9.jpg"
          className="h-[320px] aspect-square object-cover "
        />
        <img
          src="/assets/WhatsApp1.jpg"
          className="h-[320px] aspect-square object-cover"
        />
      </div>
    </div>
  );
};

export default Ideal;
