import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const App: React.FC = () => {
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
      <header className="header">
        <div className="logo">
          <img src="logo.svg" alt="logo" />
          &nbsp;
          {/* ProVital */}
          <img src="title.svg" alt="title" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">List your practice</a>
            </li>
            <img src="boundary.svg" alt="boundary" className="boundary" />
            <li>
              <a href="#">For Employers</a>
            </li>
            <img src="boundary.svg" alt="boundary" className="boundary" />
            <li>
              <a href="#">Courses</a>
            </li>
            <img src="boundary.svg" alt="boundary" className="boundary" />
            <li>
              <a href="#">Books</a>
            </li>
            <img src="boundary.svg" alt="boundary" className="boundary" />
            <li>
              <a href="#">Speakers</a>
            </li>
            <img src="boundary.svg" alt="boundary" className="boundary" />
            <li>
              <a href="#">Doctors</a>
            </li>
            <img src="boundary.svg" alt="boundary" className="boundary" />
            <li>
              <a href="#">Login / Signup</a>
            </li>
            <img src="dropdown.svg" alt="boundary" className="boundary" />
          </ul>
        </nav>
      </header>

      <div className="app">
        <main className="main">
          <div className="images-column">
            <div className="carousel-one">
              <Slider {...settingsBottomToTop}>
                <div>
                  <img src="image1.svg" alt="Image 1" />
                </div>
                <div>
                  <img src="image2.svg" alt="Image 2" />
                </div>
              </Slider>
            </div>
            <div className="carousel-two">
              <Slider {...settingsTopToBottom}>
                <div>
                  <img src="image3.svg" alt="Image 3" />
                </div>
                <div>
                  <img src="image4.svg" alt="Image 4" />
                </div>
              </Slider>
            </div>
          </div>

          <section className="content">
            <img src="herotext.svg" alt="herotext" className="herotext" />
            {/* <h1>
              Book an appointment with <br />
              <span>lifestyle medicine</span> experts
            </h1> */}
            <p>Optimize your lifestyle and reverse chronic diseases.</p>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Condition, procedure, specialty..."
              />
              <input type="text" placeholder="City, state, or zipcode" />
              <input type="text" placeholder="Insurance carrier" />
              <button>Find now</button>
            </div>
          </section>
        </main>

        <img src="ribbon.png" alt="ribbon" className="ribbon" />

        <section className="pillars">
          {/* <h2>How It Works</h2> */}
          <img src="howitworks.svg" className="how" />
          <br />
          <img src="lifestyle.svg" className="lifestyle" />
          {/* <h3>Lifestyle as medicine: The six pillars</h3> */}
          <div className="pillar-tabs">
            <button>Nutrition</button>
            <button>Physical activity</button>
            <button>Restorative sleep</button>
            <button>Stress management</button>
            <button>Social connection</button>
            <button>Substance abuse</button>
          </div>

          {/* Horizontal Carousel Section */}
          <div className="pillar-content" ref={carouselRef}>
            <div>
              <img src="down1.svg" alt="Nutrition" />
              <h4>Nutrition</h4>
              <p>
                Evidence supports the use of a whole food,
                <br /> plant-predominant diet to prevent, treat, and reverse
                chronic illnesses.
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
        </section>
      </div>
    </>
  );
};

export default App;
