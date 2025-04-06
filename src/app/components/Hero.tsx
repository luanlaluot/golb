"use client";
import React, { useState } from "react";

const Hero = () => {
  const [bgImage, setBgImage] = useState("/images/banner.png");

  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        onError={() => {
          setBgImage("/images/no-image.png");
        }}
      >
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40" />
      </div>
      <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Utilization of Technology to Support Environmentally Friendly
          Agriculture
        </h1>
        <div className="flex w-full max-w-[280px] sm:max-w-md mx-auto sm:mx-0">
          <input
            type="text"
            placeholder="Search articles..."
            className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-l-lg border-0 focus:ring-2 focus:ring-green-500 w-full"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-r-lg transition-colors whitespace-nowrap text-sm sm:text-base">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
