import React, { useState } from "react";
import "./searchbar.css";

const SearchBar: React.FC = () => {
  return (
    <>
      <div className="search-bar">
        <input type="text" placeholder="Condition, procedure, specialty..." />
        <input type="text" placeholder="City, state, or zipcode" />
        <input type="text" placeholder="Insurance carrier" />
        <button>
          <img src="searchwhite.svg" className="how" />
          Find now
        </button>
      </div>
    </>
  );
};

export default SearchBar;
