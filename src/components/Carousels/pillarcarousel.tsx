import React, { useEffect, useRef } from "react";
import "./pillarcarousel.css";

const PillarCarousel: React.FC<{ activeTab: number }> = ({ activeTab }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft =
        activeTab * (carouselRef.current.scrollWidth / 6);
    }
  }, [activeTab]);

  return (
    <div className="pillar-carousel" ref={carouselRef}>
      <div>
        <img src="down1.svg" alt="Nutrition" />
        <h4>Nutrition</h4>
        <p>
          Evidence supports the use of a whole food,
          <br /> plant-predominant diet to prevent, treat, and reverse chronic
          illnesses.
        </p>
      </div>
      <div>
        <img src="down2.svg" alt="Physical activity" />
        <h4>Physical activity</h4>
        <p>
          Regular physical activity is key to managing weight, <br />
          improving mental health, and reducing risks of chronic diseases.
        </p>
      </div>
      <div>
        <img src="down3.svg" alt="Restorative sleep" />
        <h4>Restorative sleep</h4>
        <p>
          Consistent restorative sleep is essential for <br />
          physical and mental health.
        </p>
      </div>
      <div>
        <img src="down4.svg" alt="Stress management" />
        <h4>Stress management</h4>
        <p>
          Effective stress management techniques <br />
          are essential for overall well-being.
        </p>
      </div>
      <div>
        <img src="down5.svg" alt="Social connection" />
        <h4>Social connection</h4>
        <p>
          Building strong social connections <br />
          is key to mental health.
        </p>
      </div>
      <div>
        <img src="down6.svg" alt="Substance abuse" />
        <h4>Substance abuse</h4>
        <p>
          Avoiding substance abuse is critical <br />
          for physical and mental health.
        </p>
      </div>
    </div>
  );
};

export default PillarCarousel;
