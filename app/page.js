"use client";

import { Fragment, useEffect, useState } from "react";
import Hero from "./components/Hero";
import SecondHero from "./components/SecondHero";
import ContactImfo from "./components/ContactImfo";
import ThirdHero from "./components/ThirdHero";
import Parelex from "./components/Parelex";
import Ideal from "./components/Ideal";
import Chooses from "./components/Chooses";

export default function Home() {
  const [isModel, setIsModel] = useState(false);
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    const handleMouseMove = (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    };

    const handleClick = () => {
      cursor.classList.add("expand");
      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <Fragment>
      <div className="cursor"></div>

      <Hero setIsModel={setIsModel} isModel={isModel} />
      <SecondHero setIsModel={setIsModel} isModel={isModel} />
      <ThirdHero />
      <Parelex />
      <Ideal />
      <Chooses />
      <ContactImfo />
    </Fragment>
  );
}
