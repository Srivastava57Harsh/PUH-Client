import React from "react";
import Navbar from "./components/Navbar/navbar";
import SearchBar from "./components/Searchbar/searchbar";
import Hero from "./components/Hero/hero";
import Ribbon from "./components/Ribbon/ribbon";
import Pillars from "./components/Pillars/pillars";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <SearchBar />
      <Ribbon />
      <Pillars />
    </div>
  );
};

export default App;
