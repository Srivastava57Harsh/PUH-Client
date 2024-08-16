import React, { useEffect, useRef, useState } from "react";
import "./pillarcarousel.css";

const PillarCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
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
          <img src="down4.svg" alt="Restorative sleep" />
          <h4>Restorative sleep</h4>
          <p>
            Consistent restorative sleep is essential for <br />
            physical and mental health.
          </p>
        </div>
        <div>
          <img src="down5.svg" alt="Restorative sleep" />
          <h4>Restorative sleep</h4>
          <p>
            Consistent restorative sleep is essential for <br />
            physical and mental health.
          </p>
        </div>
        <div>
          <img src="down6.svg" alt="Restorative sleep" />
          <h4>Restorative sleep</h4>
          <p>
            Consistent restorative sleep is essential for <br />
            physical and mental health.
          </p>
        </div>
      </div>
    </>
  );
};

export default PillarCarousel;
