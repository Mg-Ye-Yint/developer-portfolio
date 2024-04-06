import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import "../styles/globals.css";
import "@fontsource/kanit";
import { BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Event Questions",
    description:
      "A web app where audiences can ask questions and the host can answer for events. (I wrote some parts of frontends and the others are written by another developer).",
    image: "/event-questions.png",
    link: "https://event-question.netlify.app",
  },
  {
    name: "E Ticket Web App",
    description:
      "A ticketing web application powered by API. (I wrote some parts of frontends and the others are written by another developer).",
    image: "/eticket.png",
    link: "https://eticket-web-app.netlify.app",
  },
  {
    name: "Note Taker",
    description: "A web app where you can take notes.",
    image: "/note-taker.png",
    link: "https://ye-yint-thway-note-taker.netlify.app",
  },
  {
    name: "Quote Generator",
    description: "A web app that generates quotes by categories.",
    image: "/quote-generator.png",
    link: "https://ye-yint-thway-quote-generator.netlify.app",
  },
  {
    name: "Lucky Draw App",
    description: "A web app where you can set lucky draw items and win.",
    image: "/lucky-draw.png",
    link: "https://ye-yint-thway-lucky-draw-app.netlify.app",
  },
  {
    name: "Financial Manager",
    description: "A web app that can calculate the income and outcome.",
    image: "/expense-tracker.png",
    link: "https://ye-yint-thway-financial-manager.netlify.app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-2 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-white border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6 text-red-700">
                      {project.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-white font-semibold">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {/* <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link> */}
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
