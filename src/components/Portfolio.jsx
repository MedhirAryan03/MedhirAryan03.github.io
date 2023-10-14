import React from "react";
import api from "../assets/portfolio/api.jpg";
import apod from "../assets/portfolio/apod.jpg";
import iptracker from "../assets/portfolio/iptracker.jpg";
import nftportal from "../assets/portfolio/nftportal.jpg";
import webpostman from "../assets/portfolio/webpostman.jpg";
import waveportal from "../assets/portfolio/waveportal.jpg";

const Portfolio = () => {

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <p>
        1) Designed one of the two robots used in the
National DD Robocon.
I coded the drive of the bot controlled by the
Cytron Motor driver ,shooting of the bot using
leadscrew and pneumatics, picking mechanism of
the bot using a BTS motor driver , all connected to
a central microcontroller Arduino Mega which was
processing the data
The Bot performed well in the nationals
</p>
<p>2)</p>
<p>Designed a fully autonomous Line Follower using
the QTR-8RC reflectance sensor array.
The bot is also equipped with N20 motors
controlled by TB6612FNG motor driver all
connected to a central microcontroller Arduino
Nano
    </p>
    <p>3)</p>
    <p>A Voice Assistant in python for extracting data
from the internet and sending Emails verball</p>
       </div>
    </div>
  );
};

export default Portfolio;
