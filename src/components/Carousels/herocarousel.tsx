import React, { useState } from "react";
import "./herocarousel.css";
import Slider from "react-slick";

const HeroCarousel: React.FC = () => {
  const settingsTopToBottom = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  const settingsBottomToTop = {
    ...settingsTopToBottom,
    rtl: true,
  };

  return (
    <>
      <div className="images-column">
        <div className="carousel-one">
          <Slider {...settingsBottomToTop}>
            <div>
              <img src="image1.svg" alt="Image 1" />
            </div>
            <div>
              <img src="image2.svg" alt="Image 2" />
            </div>
            <div>
              <img src="image3.svg" alt="Image 1" />
            </div>
            <div>
              <img src="image4.svg" alt="Image 2" />
            </div>
          </Slider>
        </div>
        <div className="carousel-two">
          <Slider {...settingsTopToBottom}>
            <div>
              <img src="image5.svg" alt="Image 1" />
            </div>
            <div>
              <img src="image6.svg" alt="Image 2" />
            </div>
            <div>
              <img src="image7.svg" alt="Image 1" />
            </div>
            <div>
              <img src="image8.svg" alt="Image 2" />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default HeroCarousel;
