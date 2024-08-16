import React, { useState } from "react";
import "./pillarcontent.css";

const PillarContent: React.FC = () => {
  return (
    <>
      <img src="howitworks.svg" className="how" />
      <br />
      <img src="lifestyle.svg" className="lifestyle" />
      <div className="pillar-tabs">
        <button>Nutrition</button>
        <button>Physical activity</button>
        <button>Restorative sleep</button>
        <button>Stress management</button>
        <button>Social connection</button>
        <button>Substance abuse</button>
      </div>
    </>
  );
};

export default PillarContent;
