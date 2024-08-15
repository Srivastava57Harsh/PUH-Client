import React from "react";
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

  return (
    <div className="app">
      <header className="header">
        <div className="logo">ProVital</div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">List your practice</a>
            </li>
            <li>
              <a href="#">For Employers</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <a href="#">Speakers</a>
            </li>
            <li>
              <a href="#">Doctors</a>
            </li>
            <li>
              <a href="#">Login / Signup</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <aside className="images-column">
          <Slider {...settingsTopToBottom}>
            <div>
              <img src="image1.svg" alt="Image 1" />
            </div>
            <div>
              <img src="image2.svg" alt="Image 2" />
            </div>
          </Slider>
          <Slider {...settingsBottomToTop}>
            <div>
              <img src="image3.svg" alt="Image 3" />
            </div>
            <div>
              <img src="image4.svg" alt="Image 4" />
            </div>
          </Slider>
        </aside>

        <section className="content">
          <h1>
            Book an appointment with <span>lifestyle medicine</span> experts
          </h1>
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

      <section className="pillars">
        <h2>How It Works</h2>
        <h3>Lifestyle as medicine: The six pillars</h3>
        <div className="pillar-tabs">
          <button>Nutrition</button>
          <button>Physical activity</button>
          <button>Restorative sleep</button>
          <button>Stress management</button>
          <button>Social connection</button>
          <button>Substance abuse</button>
        </div>
        <div className="pillar-content">
          <div>
            <img src="down1.svg" alt="Nutrition" />
            <h4>Nutrition</h4>
            <p>
              Evidence supports the use of a whole food, plant-predominant diet
              to prevent, treat, and reverse chronic illnesses.
            </p>
          </div>
          <div>
            <img src="down2.svg" alt="Physical activity" />
            <h4>Physical activity</h4>
            <p>
              Regular physical activity is key to managing weight, improving
              mental health, and reducing risks of chronic diseases.
            </p>
          </div>
          <div>
            <img src="down3.svg" alt="Restorative sleep" />
            <h4>Restorative sleep</h4>
            <p>
              Consistent restorative sleep is essential for physical and mental
              health.
            </p>
          </div>
          <div>
            <img src="down4.svg" alt="Restorative sleep" />
            <h4>Restorative sleep</h4>
            <p>
              Consistent restorative sleep is essential for physical and mental
              health.
            </p>
          </div>
          <div>
            <img src="down5.svg" alt="Restorative sleep" />
            <h4>Restorative sleep</h4>
            <p>
              Consistent restorative sleep is essential for physical and mental
              health.
            </p>
          </div>
          <div>
            <img src="down6.svg" alt="Restorative sleep" />
            <h4>Restorative sleep</h4>
            <p>
              Consistent restorative sleep is essential for physical and mental
              health.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
