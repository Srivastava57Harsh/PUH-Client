import React, { useState } from "react";
import "./pillars.css";
import PillarContent from "../Content/pillarcontent";
import PillarCarousel from "../Carousels/pillarcarousel";

const Pillars: React.FC = () => {
  return (
    <>
      <section className="pillars">
        <PillarContent />
        <PillarCarousel />
      </section>
    </>
  );
};

export default Pillars;
