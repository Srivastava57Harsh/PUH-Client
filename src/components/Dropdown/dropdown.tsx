import React, { useState } from "react";
import "./dropdown.css";

const Dropdown: React.FC = () => {
  return (
    <div className="dropdown">
      <div className="dropdown-menu active">
        <div className="dropdown-item">
          <strong>Doctor</strong>
          <div>
            <a href="#" className="link">
              Login
            </a>
            <a href="#" className="link">
              Sign up
            </a>
          </div>
        </div>
        <div className="dropdown-item">
          <strong>Patients</strong>
          <div>
            <a href="#" className="link">
              Login
            </a>
            <a href="#" className="link">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
