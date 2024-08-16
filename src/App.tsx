import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/navbar";
import SearchBar from "./components/Searchbar/searchbar";
import Hero from "./components/Hero/hero";
import Ribbon from "./components/Ribbon/ribbon";
import Pillars from "./components/Pillars/pillars";
import "./App.css";
import MobileCarousel from "./components/Carousels/mobilecarousels";
import Loader from "./components/Loader/loader";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="app">
          <Navbar />
          <Hero />
          <SearchBar />
          <Ribbon />
          <MobileCarousel />
          <Pillars />
        </div>
      )}
    </>
  );
};

export default App;
