// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { experience } from "../projectdata";

export default function Work() {
  return (
    <section id="work" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Professional Experience.
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Currently Working as Assistant System Engineer in TCS.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {experience.map((experience) => (
            <div className="rounded-lg px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 ">
              <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                Role : {experience.title}
              </h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">
                Client : {experience.clientName}
              </h1>
              <h3 className="leading-relaxed">
                Project : {experience.projectname}
              </h3>
              <p className="leading-relaxed">
              {experience.resposibility.map((resposibility) => (
                <div>
                <ul className="list-none hover:list-disc">
                  <li >
                    {resposibility}
                  </li>
                  </ul>
                </div>
              ))}
              </p>
            </div>


          ))}
        </div>
      </div>
    </section >
  );
}