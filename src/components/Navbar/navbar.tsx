import React, { useState, useEffect } from "react";
import "./navbar.css";
import MobileMenu from "../Menu/menu";
import Dropdown from "../Dropdown/dropdown";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMain, setIsOpenMain] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownMain = () => {
    setIsOpenMain(!isOpenMain);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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
              alt="dropdown"
              className="dropdown-arrow"
              onClick={toggleDropdownMain}
            />
          </ul>
        </nav>

        <img
          src={isOpen ? "cross.svg" : "hamburger.svg"}
          alt={isOpen ? "Close Menu" : "Open Menu"}
          className="hamburger"
          onClick={toggleDropdown}
        />
      </header>
      {isOpenMain && <Dropdown />}
      {isOpen && <MobileMenu closeMenu={toggleDropdown} />}
    </>
  );
};

export default Navbar;
