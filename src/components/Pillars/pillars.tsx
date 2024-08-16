import React, { useState } from "react";
import "./pillars.css";
import PillarContent from "../Content/pillarcontent";
import PillarCarousel from "../Carousels/pillarcarousel";

const Pillars: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="pillars">
      <PillarContent activeTab={activeTab} setActiveTab={setActiveTab} />
      <PillarCarousel activeTab={activeTab} />
    </section>
  );
};

export default Pillars;
