import React from "react";

const ThirdHero = () => {
  return (
    <div className="my-8">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 mx-auto h-full">
        <img
          src="/assets/WhatsApp Image 2024-04-23 at 00.43.27_d6f8b92d.jpg"
          className="aspect-square"
        />
        <div className="my-8">
          <div className="text-3xl font-bold">
            YOUR DREAM DUBAI LIFESTYLE IS CALLING
          </div>
          <p className="break-words mb-2">
            Are you ready to live the dream Dubai lifestyle? At DAMAC
            Properties, we offer luxury villas in lifestyle communities,
            waterfront apartments in Dubai Marina, and Hollywood-inspired hotel
            rooms close to the Burj Area. Our exciting investment opportunities
            guarantee returns of up to 8% on selected projects.
          </p>
          <p className="break-words mb-2">
            Whether you're looking for a stunning new home, a luxurious hotel
            experience, or a world-class investment opportunity, DAMAC
            Properties is the brand to trust. Our commitment to quality and
            track record of delivering exceptional properties make us the ideal
            partner for anyone looking to invest in Dubai's thriving real estate
            market.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 justify-between ">
            <div>
              <img
                src="/assets/icon/61467301-0-59988680-0-noun-Visa.svg"
                className="w-10 h-10"
              />
              <h5> Golden Visa Assistance</h5>
            </div>
            <div>
              <img
                src="/assets/icon/59376312-0-hotel.svg"
                className="w-10 h-10"
              />
              <h5> Free Property Management</h5>
            </div>
            <div className="break-words mb-2">
              <img
                src="/assets/icon/59376312-0-hotel.svg"
                className="w-10 h-10"
              />
              <h5>Free Luxury Hotel Stays</h5>
            </div>
            <div className="break-words mb-2">
              <img
                src="/assets/icon/59376312-0-hotel.svg"
                className="w-10 h-10"
              />
              <h5>Crypto-currency accepted</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdHero;
