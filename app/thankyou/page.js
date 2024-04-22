"use client";
import Link from "next/link";
import React from "react";

const ThankYou = () => {
  return (
    <div>
      <section className="min-h-[calc(100vh_-_102px)]  flex justify-center items-center dark:text-black ">
        <div className="container max-w-screen-xl px-2 mx-auto py-14 md:px-8">
          <div>
            <div className="py-4 pb-8">
              <h1 className=" text-black text-center text-3xl font-bold leading-[34px] tracking-[-0.15px] mb-3">
                Thank you for your interest.
              </h1>
              <p className="mb-5 text-lg font-medium text-center text-black ">
                Our sales executive will contact you shortly to provide all the
                necessary details.
              </p>

              <div className="text-sm font-semibold text-center text-black sm:text-base">
                Call us if you have any questions:
                <Link
                  className="mt-2 font-semibold text-center text-sm sm:text-base "
                  href={`tel:+971506945852`}
                >
                  &nbsp; +971506945852
                </Link>
              </div>
            </div>
            <div className="flex justify-center w-full my-5">
              <Link
                href="/"
                className="rounded-full px-8 py-3 bg-blue-800 text-white text-md font-medium leading-5 tracking-[0.21px]"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;
