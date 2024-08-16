import React from "react";
import "./menu.css";

interface MobileMenuProps {
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  return (
    <div className="mobile-menu">
      <div className="login-section">
        <div className="login-option">
          <span>Doctor</span>
          <div>
            <a href="#" onClick={closeMenu}>
              Login
            </a>
            <a href="#" onClick={closeMenu}>
              Sign up
            </a>
          </div>
        </div>
        <div className="login-option">
          <span>Patients</span>
          <div>
            <a href="#" onClick={closeMenu}>
              Login
            </a>
            <a href="#" onClick={closeMenu}>
              Sign up
            </a>
          </div>
        </div>
      </div>
      <ul className="menu-options">
        <li onClick={closeMenu}>
          <span>Doctors</span>
          <span className="arrow">→</span>
        </li>
        <li onClick={closeMenu}>
          <span>List your practice</span>
          <span className="arrow">→</span>
        </li>
        <li onClick={closeMenu}>
          <span>For Employers</span>
          <span className="arrow">→</span>
        </li>
        <li onClick={closeMenu}>
          <span>Courses</span>
          <span className="arrow">→</span>
        </li>
        <li onClick={closeMenu}>
          <span>Books</span>
          <span className="arrow">→</span>
        </li>
        <li onClick={closeMenu}>
          <span>Speakers</span>
          <span className="arrow">→</span>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
