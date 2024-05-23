import React from "react";
import "./Navbar.css";
import Person2Icon from "@mui/icons-material/Person2";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="bg-background-primary">
      <div className="nav-wrapper flex justify-between items-center p-2 px-5 leading-none">
        <div className="logo leading-none">SHI.RO</div>
        <div className="flex items-center gap-6">
          <ul className=" flex gap-6">
            <li id="services">
              <a href="#services">Services</a>
            </li>
            <li id="gallery">
              <a href="#gallery">Gallery</a>
            </li>
            <li id="about">
              <a href="#about">About</a>
            </li>
            <li id="contact">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <Person2Icon />
          <Button />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
