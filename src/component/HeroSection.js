import React from "react";
import Vert5 from "../assets/Vert5.jpg";
import Hor1 from "../assets/Hor1.jpg";
import "./HeroSection.css";
import Button from "./Button";

function HeroSection() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-6 h-auto">
        <div className="col-span-1 md:col-span-2 w-full  bg-red-500 overflow-hidden">
          <img
            className="object-cover h-96  w-full object-top	"
            src={Vert5}
            alt="hair"
          ></img>
        </div>
        <div className="col-span-1 md:col-span-4 w-full  h-96  bg-red-900 overflow-hidden">
          <img
            className="object-cover h-96 w-full object-top	"
            src={Hor1}
            alt="hair2"
          ></img>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 h-auto">
        <div className="logo-container col-span-1 md:col-span-4 w-full h-48  bg-background-primary overflow-hidden flex items-center justify-start">
          <h1 className=" text-12xl font-extralight">SHI.RO</h1>
        </div>
        <div className="col-span-1 md:col-span-2 w-full bg-background-primary overflow-hidden flex justify-between p-2">
          <div className="flex flex-col justify-end">
            <span>Nurturing Roots.</span>
            <span>Enriching Lives.</span>
            <span>根を育て、生活を豊かに</span>
          </div>
          <div className="button-wrapper flex items-end justify-end">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
