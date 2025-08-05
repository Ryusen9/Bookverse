import React from "react";
import heroBg from "../../../public/assets/Photos/Hero.jpg";

const Hero = () => {
  return (
    <div
      className="min-h-screen w-full bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
    </div>
  );
};

export default Hero;
