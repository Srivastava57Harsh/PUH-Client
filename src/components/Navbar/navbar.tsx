import React, { useState } from "react";
import "./navbar.css";
import Dropdown from "../Dropdown/dropdown";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.svg" alt="logo" />
          &nbsp;
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
            <img
              src="dropdown.svg"
              alt="boundary"
              className="dropdown-arrow"
              onClick={toggleDropdown}
            />
          </ul>
        </nav>

        <img src="hamburger.svg" alt="logo" className="hamburger" />
      </header>
      {isOpen && <Dropdown />}
    </>
  );
};

export default Navbar;
