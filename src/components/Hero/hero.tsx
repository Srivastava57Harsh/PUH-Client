import React, { useState } from "react";
import "./hero.css";
import HeroCarousel from "../Carousels/herocarousel";
import HeroContent from "../Content/herocontent";

const Hero: React.FC = () => {
  return (
    <>
      <main className="main">
        <HeroCarousel />
        <HeroContent />
      </main>
    </>
  );
};

export default Hero;
