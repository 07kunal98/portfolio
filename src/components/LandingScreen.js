import React from "react";
import {CodeIcon} from '@heroicons/react/outline'

export default function LandingScreen() {
    return (
        <section id="about">
            <div className="container mx-auto flex w-full px-10 py-20 sm:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <CodeIcon className="w-10 h-10 text-gray-500" />
                    <h2 className="sm:text-2xl text-xl mb-4  font-medium text-gray-500">
                        <p className="text-3xl">Hi, I'm Kunal Solanki.</p>
                        <br className="lg:inline-block" />
                        And I'm a Software Engineer 
                        <br className="lg:inline-block" />
                        Specializing in building web apps.
                        <br className="lg:inline-block" />
                        Currently I'm working as a Front-End Developer for <a href="https://www.tcs.com" className="hover:text-gray-900 ">TCS
                        <span className="animate-ping"> | </span>
                        </a>
                        
                        <br className="hidden lg:inline-block" />
                    
                    </h2>
                    <CodeIcon className="w-11 h-10 text-gray-500"/>
                    <p className="mb-8 leading-relaxed">
                        
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#work"
                            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg">
                            View Work
                        </a>
                        <a
                            href="#personalprojects"
                            className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 hover:text-white rounded text-lg">
                            See My Projects
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <div className="object-cover object-center rounded">
                <img src={require('./img/programming.png')} alt="Coder icon "/>
                </div>
             </div>
            </div>
           
            
        </section>
    );
}