import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Flutter" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "MongoDB" },
  { skill: "Remix" },
  { skill: "Vite" },
  { skill: "Git" },
  { skill: "Figma" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="pb-12 md:pt-16 md:pb-18">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-white border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 text-justify font-semibold">
            <p>
              I studied Computer Science and Technology at University of
              Computer Studies, Yangon at 2019 but I have dropped out and I am
              currently studying Computer Science at University of People
              (Online) since 2023.
            </p>
            <br />
            <p>
              I also studied from other sources such as youtube and udemy.
              Currently I can write static pages, frontend designs and deploying
              apis.
            </p>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6 text-red-700">
              Tech Stacks
            </h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-blue-300 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
