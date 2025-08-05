import React from "react";
import heroBg from "../../../public/assets/Photos/Hero.jpg";
import TextType from "../Shared/TextType";
import ShinyText from "../Shared/ShinyText";

const Hero = () => {
  return (
    <div
      className="min-h-screen w-full bg-fixed bg-center bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 min-h-full w-full bg-black opacity-50"></div>
      <div className="w-full min-h-screen flex flex-col justify-center items-center relative">
        {/* Headline */}
        <div>
          <TextType
            text={[
              "Welcome to BookVerse!",
              "Discover a world of books!",
              "Start reading now!",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
            className="text-5xl font-pilCrowRounded font-semibold tracking-wide"
          />
        </div>
        {/* Subheadline */}
        <div className="text-xl font-pilCrowRounded font-medium tracking-wider mt-4">
          Your one-stop destination for all things book-related!
        </div>
        {/* Call to Action */}
        <div className="mt-8">
          <button className="px-4 py-2 bg-gray-600/70 rounded-xl hover:bg-gray-700/70 transition-colors duration-300 font-semibold cursor-pointer">
            <ShinyText
              text="Explore Now!"
              speed={2}
              classname="text-lg font-bold"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
