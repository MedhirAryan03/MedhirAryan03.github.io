import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
       I am a student at SRMIST and I am currently working in the field of Robotics , Web Dev and Machine Learning
        </p>

        <br />

        <p className="text-xl">
        Apart from Coding,I am experienced in public
speaking as I have attended a lot of MUNs and
Debates including Oxford global MUN and KIIT
MUN.<br /> <br />
        Winner of National level Bits quark line follower competition 2023.
        </p>
      </div>
    </div>
  );
};

export default About;
