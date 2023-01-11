/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

const info = [
  { title: "Minimalist House", location: "Cheraga" },
  { title: "Family House", location: "Oued Semar" },
  { title: "Modern House", location: "El Harrach" },
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div id="#home" className="container min-h-[calc(100vh-5rem)] flex flex-col justify-center lg:flex-row lg:items-center">
      <div className="max-w-xl">
        <h1 className="mt-14 text-primary text-5xl font-extrabold">
          Discover a place you’ll love to live
        </h1>
        <p className="my-5 text-gray-600">
          How much will it cost the target audience is makes and famles aged
          zero and up, for i'll pay you in a week we don't need to pay upfront i
          hope you understand yet i'll know it when i see it there are more
          projects lined up charge extra the next time,
        </p>
      </div>
      <div className="flex gap-2  lg:flex-1">
        {info.map(({ title, location }, index) => (
          <div
            onClick={() => setActiveIndex(index)}
            key={title}
            className={`relative cursor-pointer bg-hero${
              index + 1
            } h-80 bg-center bg-cover rounded-lg overflow-hidden p-2 flex items-end text-white flex-1 transition-all  ${
              activeIndex === index && "flex-grow-[4]"
            }`}
          >
            {activeIndex === index ? (
              <>
                <p className="z-10">
                  {title} <br /> <span>{location}</span>
                </p>
                <span className="vertical_gradient"></span>
              </>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
