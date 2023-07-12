import React from 'react';
import computerscreen from '../images/computerscreen.png';

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center py-12 pl-20 pr-20">
        <div className="text-center ">
          <h1 className="text-6xl font-sarpanch text-white typewriter leading-tight tracking-wide">
            DESIGN
          </h1>
          <h1 className="text-6xl font-sarpanch text-white typewriter leading-tight tracking-wide">
            CODE
          </h1>
          <h1 className="text-6xl font-sarpanch text-white typewriter leading-tight tracking-wide mt-2">
            LAUNCH
          </h1>
          <p className="text-2xl font-barlow-condensed text-white mt-8">
            We believe in harnessing the power of abstraction to bring your digital dreams to life.
          </p>
        </div>
        <div className="w-full md:w-1/2 max-w-[500px] mt-8">
          <img className="w-full h-auto rounded-[50px]" src={computerscreen} alt="abstract systems" />
        </div>
      </div>
      <div className="flex flex-col items-center mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 animate-bounce text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
        <p className="text-pink-500 mt-1">Scroll down</p>
      </div>
    </div>
  );
}
