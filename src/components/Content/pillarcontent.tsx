import React, { useState } from "react";
import "./pillarcontent.css";

const tabs = [
  "Nutrition",
  "Physical activity",
  "Restorative sleep",
  "Stress management",
  "Social connection",
  "Substance abuse",
];

const PillarContent: React.FC<{
  activeTab: number;
  setActiveTab: (index: number) => void;
}> = ({ activeTab, setActiveTab }) => {
  const handleLeftClick = () => {
    setActiveTab(activeTab > 0 ? activeTab - 1 : tabs.length - 1);
  };

  const handleRightClick = () => {
    setActiveTab(activeTab < tabs.length - 1 ? activeTab + 1 : 0);
  };

  return (
    <>
      <img src="howitworks.svg" className="how" alt="How it works" />
      <br />
      <div className="container">
        <img src="lifestyle.svg" className="lifestyle" alt="Lifestyle" />
        <div className="arrows">
          <img
            src="leftarrow.svg"
            className="arrow-image"
            alt="Left Arrow"
            onClick={handleLeftClick}
          />
          <img
            src="rightarrow.svg"
            className="arrow-image"
            alt="Right Arrow"
            onClick={handleRightClick}
          />
        </div>
      </div>
      <div className="pillar-tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={activeTab === index ? "active-tab" : ""}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
    </>
  );
};

export default PillarContent;
