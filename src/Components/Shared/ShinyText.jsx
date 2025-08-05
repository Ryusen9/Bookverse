import React from "react";
import "./ShinyText.css";

const ShinyText = ({ classname = "", speed = 5, text = "" }) => {
  return (
    <div
      className={`relative inline-block ${classname}`}
      style={{ animationDuration: `${speed}s` }}
      onMouseEnter={(e) => {
        const shine = e.currentTarget.querySelector(".shine");
        if (shine) shine.style.animationPlayState = "running";
      }}
      onMouseLeave={(e) => {
        const shine = e.currentTarget.querySelector(".shine");
        if (shine) shine.style.animationPlayState = "paused";
      }}
    >
      {/* Base Text */}
      <span className="text-gray-400">{text}</span>

      {/* Shimmer Overlay */}
      <span
        className="shine absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 60%)",
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: `shine ${speed}s linear infinite`,
          animationPlayState: "paused",
          pointerEvents: "none",
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default ShinyText;