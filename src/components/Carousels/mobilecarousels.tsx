import React, { useEffect, useRef } from "react";
import "./mobilecarousel.css";

const MobileCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startAutoScroll = () => {
      if (carouselRef.current) {
        scrollIntervalRef.current = setInterval(() => {
          carouselRef.current!.scrollLeft -= 1;

          if (carouselRef.current!.scrollLeft <= 0) {
            carouselRef.current!.scrollLeft =
              carouselRef.current!.scrollWidth / 2;
          }
        }, 10);
      }
    };

    startAutoScroll();

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="mobile-carousel" ref={carouselRef}>
      <img src="image1.svg" alt="Nutrition" />
      <img src="image2.svg" alt="Nutrition" />
      <img src="image3.svg" alt="Nutrition" />
      <img src="image4.svg" alt="Nutrition" />
      <img src="image5.svg" alt="Nutrition" />
      <img src="image6.svg" alt="Nutrition" />
      <img src="image7.svg" alt="Nutrition" />
      <img src="image8.svg" alt="Nutrition" />

      {/* I AM DUPLICATING THE CONTENT FOR LOOP CONTINUATION  */}

      <img src="image1.svg" alt="Nutrition" />
      <img src="image2.svg" alt="Nutrition" />
      <img src="image3.svg" alt="Nutrition" />
      <img src="image4.svg" alt="Nutrition" />
      <img src="image5.svg" alt="Nutrition" />
      <img src="image6.svg" alt="Nutrition" />
      <img src="image7.svg" alt="Nutrition" />
      <img src="image8.svg" alt="Nutrition" />
    </div>
  );
};

export default MobileCarousel;
