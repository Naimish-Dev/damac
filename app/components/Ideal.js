import React from "react";

const Ideal = () => {
  return (
    <div className=" py-16 px-2 bg-gray-100" id="amenities">
      <h2 className="text-center font-semibold text-4xl mb-6">
        Welcome to the Epitome of
        <br />
        <span className="text-[#BD8C1B]">Luxury Living</span>
      </h2>

      <div className="grid grid-cols-1 text-center justify-center md:grid-cols-2 lg:grid-cols-4 gap-4 items-center ">
        <div>
          <img
            src="/assets/WhatsApp Image 2024-04-23 at 00.19.19_ce13a4a9.jpg"
            className="w-full  aspect-square object-cover mx-auto "
          />
          <p className="bg-black bg-opacity-10 p-2 font-semibold">
            {" "}
            Lagoonfront living: Direct access
            <br /> from your home
          </p>
        </div>

        <div>
          <img
            src="/assets/thirds-second img.jpg"
            className="w-full  aspect-square object-cover mx-auto "
          />
          <p className="bg-black bg-opacity-10 p-2 font-semibold">
            {" "}
            Join the Expansive UAE Community:
            <br /> Over 7000 Townhouses Await
          </p>
        </div>

        <div>
          <img
            src="/assets/WhatsApp1.jpg"
            className="w-full  aspect-square object-cover  mx-auto "
          />
          <p className="bg-black bg-opacity-10 p-2 font-semibold">
            Stroll Along Serene Lagoon <br /> Pathways
          </p>
        </div>

        <div>
          <img
            src="/assets/forths.jpg"
            className="w-full aspect-square object-cover  mx-auto "
          />
          <p className="bg-black bg-opacity-10 p-2 font-semibold">
            Experience Your Dream Home <br />
            Reality Here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ideal;
