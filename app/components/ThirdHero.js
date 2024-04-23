import React from "react";
import { FaHotel, FaRegBuilding, FaRegMoneyBillAlt } from "react-icons/fa";
import { PiNotebookLight } from "react-icons/pi";

const ThirdHero = () => {
  return (
    <div className="py-16 px-2 bg-gray-100" id="overview">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto h-full">
        <img
          src="/assets/WhatsApp Image 2024-04-23 at 00.43.27_d6f8b92d.jpg"
          className="aspect-square h-[500px] mx-auto"
        />

        <div className="px-2 pt-4 md:pt-0">
          <div className="text-3xl font-bold mb-4 text-center ">
            YOUR <span className="text-[#BD8C1B]">DREAM DUBAI</span> LIFESTYLE
            IS CALLING
          </div>
          <div className="mb-4">
            <p className="break-words mb-2 text-md">
              Are you ready to live the dream Dubai lifestyle? At DAMAC
              Properties, we offer luxury villas in lifestyle communities,
              waterfront apartments in Dubai Marina, and Hollywood-inspired
              hotel rooms close to the Burj Area. Our exciting investment
              opportunities guarantee returns of up to 8% on selected projects.
            </p>
            <p className="break-words mb-2 text-md">
              Whether you're looking for a stunning new home, a luxurious hotel
              experience, or a world-class investment opportunity, DAMAC
              Properties is the brand to trust. Our commitment to quality and
              track record of delivering exceptional properties make us the
              ideal partner for anyone looking to invest in Dubai's thriving
              real estate market.
            </p>
          </div>

          <div className="grid grid-cols-2 text-center lg:grid-cols-4 gap-2 justify-between ">
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="text-[#BD8C1B] text-4xl ">
                <PiNotebookLight />
              </span>

              <h5> Golden Visa Assistance</h5>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <span className="text-[#BD8C1B] text-4xl">
                <FaRegBuilding />
              </span>
              <h5> Free Property Management</h5>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="text-[#BD8C1B] text-4xl">
                <FaHotel />
              </span>
              <h5>Free Luxury Hotel Stays</h5>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="text-[#BD8C1B] text-4xl">
                <FaRegMoneyBillAlt />
              </span>
              <h5>Crypto-currency accepted</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdHero;
