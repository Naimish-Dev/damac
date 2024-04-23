"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import CustomModal from "./CustomModal";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { FaList } from "react-icons/fa";

const Hero = ({ setIsModel, isModel }) => {
  const CloseModelHandler = () => {
    setIsModel(false);
  };

  const mainSidebar = useRef();
  const openSidebarButton = useRef();

  const [isSidebarActive, setIsSidebarActive] = useState(false);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        setIsSidebarActive(false);
      }
    };

    const handleOutsideClick = (e) => {
      if (
        !mainSidebar.current.contains(e.target) &&
        !openSidebarButton.current.contains(e.target)
      ) {
        setIsSidebarActive(false);
      }
    };

    const windoscroll = () => {
      setIsSidebarActive(false);
    };

    window.addEventListener("keydown", handleEscapeKey);
    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("scroll", windoscroll);
    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("scroll", windoscroll);
    };
  }, []);
  const CloseSidebarActive = () => {
    setIsSidebarActive(false);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("Token");

    setTimeout(() => {
      if (!token) {
        setIsModel(true);
      }
    }, 1000);
  }, []);
  return (
    <Fragment>
      {isModel && (
        <CustomModal CloseModelHandler={CloseModelHandler}></CustomModal>
      )}

      <div
        className={`fixed bg-[rgba(0,0,0,0.3)] z-20  min-h-screen w-full top-0 transition-transform transform ease-in-out duration-300 lg:hidden ${
          isSidebarActive ? `translate-x-0` : "-translate-x-full"
        }`}
        id="sidebar"
      >
        <div
          ref={mainSidebar}
          id="main-sidebar"
          className="bg-black bg-opacity-50 text-white w-full min-h-screen h-full"
        >
          <div className="h-[calc(100vh_-_25px)]">
            <div className="text-white flex justify-between  text-3xl bg-black p-2 py-4">
              <Link href={"/"} className="text-center">
                <img
                  src="/assets/logo/63800434-0-damac-logo-white.svg"
                  className="h-8"
                />
              </Link>
              <div className="mt-2">
                <IoCloseSharp
                  onClick={CloseSidebarActive}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <ul className=" text-center h-full w-full flex flex-col justify-center items-center">
              <Link href={"../"}>
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#000000]">
                  Home
                </li>
              </Link>
              <Link href="../#overview">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#000000]">
                  Overview
                </li>
              </Link>
              <Link href="../#amenities ">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#000000]">
                  Amenities
                </li>
              </Link>
              <Link href="../#location">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#000000]">
                  Location
                </li>
              </Link>

              <span onClick={() => setIsModel(true)} className="cursor-pointer">
                <li className="my-2 p-2 font-bold rounded-sm  transition-all duration-300 hover:translate-x-2 hover:bg-white hover:text-[#000000]">
                  Contact us
                </li>
              </span>
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed z-10 top-0 left-0 w-screen text-white bg-gradient-to-b from-black/75  to-transparent py-4 px-2 bg-opacity-30">
        <div className="flex justify-between items-center ">
          <Link href={"/"} className="text-center">
            <img
              src="/assets/logo/63800434-0-damac-logo-white.svg"
              className="h-8"
            />
            <span className="text-[10px] text-white">LIVE THE LUXURY</span>
          </Link>
          <div className=" gap-4 font-medium hidden sm:flex mr-4">
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../"}
            >
              Home
            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#overview"}
            >
              Overview
            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#amenities "}
            >
              Amenities
            </Link>
            <Link
              className=" hover:font-bold transition-all duration-300"
              href={"../#location"}
            >
              Location
            </Link>

            <span
              className=" hover:font-bold transition-all duration-300 cursor-pointer"
              onClick={() => setIsModel(true)}
            >
              Contact us
            </span>
          </div>

          <button
            ref={openSidebarButton}
            className="px-4 text-2xl font-bold sm:hidden "
            id="open-sidebar"
            onClick={() => setIsSidebarActive(true)}
          >
            <FaList />
          </button>
        </div>
      </div>

      <div className="relative h-screen w-screen flex justify-center items-center">
        <img
          src="/assets/hero/64019568-0-Desktop-Banner.jpg"
          alt="hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-60">
          <div className="text-white text-center  ">
            <h2 className="text-2xl sm:text-3xl  font-bold w-[80%] mx-auto mb-2">
              Unveiling DAMAC's new master community near Damac Lagoons
            </h2>
            <p className="text-lg sm:text-xl font-medium ">
              Find your perfect home from <br /> AED 2.1 million
            </p>
            <div className="flex  flex-wrap justify-center gap-x-3 sm:gap-5">
              <button
                onClick={() => setIsModel(true)}
                className="uppercase mb-10 mt-5 px-3 py-3 w-fit mx-auto hover:scale-105 transition-all duration-300 ease-in-out text-gray-900 bg-[#DBDFD7] text-sm font-extrabold leading-5 tracking-[0.21px]"
              >
                Spark Your Interest Here
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
