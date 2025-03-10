import React from 'react';
import ToolsCarousel from "./Tool.js";
import Footer from "./Footer.js";

const About = () => {
  return (
    <div className="mt-4 md:mt-8 flex flex-col gap-6">
      <div className="py-4 md:py-8 w-11/12 md:w-6/12 mx-auto backdrop-blur-sm bg-black/30 rounded-2xl shadow-2xl px-6 border border-gray-800 relative overflow-hidden">
        <div className="text-custom-yellow p-2 md:p-4">
          <h2 className="text-xl md:text-2xl font-mono text-center md:text-right mb-4 md:mb-6">
            Who am I?
          </h2>
          <div className="relative mb-8">
            <div className="h-0.5 bg-custom-yellow/20 w-full">
              <div className="h-0.5 bg-custom-yellow w-1/2 absolute left-0"></div>
            </div>
          </div>
          <div className="space-y-3 md:space-y-4">
            <p className="font-mono text-sm md:text-base">
              I'm Bhaskar Jha, a tech enthusiast with a solid foundation in
              Computer Science. I have skills in MERN stack, Core Java, Golang,
              Python, SQL, AWS and I'm actively exploring the exciting domain of
              AI & ML.
            </p>
            <p className="font-mono text-sm md:text-base">
              I'm Seeking an SDE Internship to contribute to groundbreaking
              projects. Let's build something amazing together!
            </p>
            <p className="font-mono text-sm md:text-base">
              Feel free to reach out to me via email at
              bhaskarjha.info@gmail.com
            </p>
          </div>
        </div>

        <div className="py-2 flex items-center justify-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://beacons.ai/bhaxkar", "_blank");
            }}
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-medium text-custom-yellow border border-custom-yellow/30 rounded-full hover:border-custom-yellow transition-all duration-300"
          >
            <span className="absolute w-0 h-full bg-custom-yellow left-0 top-0 group-hover:w-full transition-all duration-300 ease-out"></span>
            <span className="relative flex items-center gap-2 group-hover:text-black transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clipRule="evenodd"
                />
              </svg>
              Find me online
            </span>
          </a>
        </div>
      </div>

      <ToolsCarousel />
    </div>
  );
};

export default About;