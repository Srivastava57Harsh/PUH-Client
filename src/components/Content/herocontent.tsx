import React, { useState } from "react";
import "./herocontent.css";

const HeroContent: React.FC = () => {
  return (
    <>
      <section className="content">
        <img src="herotext.svg" alt="herotext" className="herotext" />
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
      </section>
    </>
  );
};

export default HeroContent;
