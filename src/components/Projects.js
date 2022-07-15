// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../projectdata";

export default function Work() {
  return (
    <section id="personalprojects" className="text-gray-400 bg-gray-900 body-font pb-40">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Personal Projects.
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            
          </p>
        </div>
        
        <div className="flex flex-wrap lg:w-4/5  sm:w-1/2 sm:mx-auto">
          {projects.map((projects) => (
             <a
             href={projects.link}
             key={projects.id} 
             className="lg:w-1/2 w-full  sm:w-1/2 pb-8 mx-auto">

            <div className="rounded-lg relative border-4 border-gray-800 hover:bg-gray-900 ">
              <div className="hover:opacity-0">
              <img className="absolute t-0 h-48 w-96 rounded-lg" 
              src={projects.image} alt="project pic"/>
              </div>
              <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                {projects.title}
              </h2>
              <h1 className="title-font text-lg font-medium text-white">
                {projects.subtitle}
              </h1>
              <p className="leading-relaxed">
                {projects.description}
              </p>
            </div>
            </a>

          ))}
        </div>
      </div>
    </section >
  );
}