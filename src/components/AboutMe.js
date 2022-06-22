
export default function AboutMe() {
    return (
        <section id="aboutme" className="bg-gray-800"> 
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto inline-block w-20 mb-4" viewBox="0 0 20 20" fill="gray">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            
            <p className="sm:text-4xl text-xl font-medium title-font pb-14 text-white">
                About Me
            </p>
            <p className="leading-relaxed text-gray-400  py-8">
               
                    <span className="text-2xl">const info = </span>
                    "Hi I'm a Software Engineer currently living in Indore, INDIA. 
                    <br/>
                    I'm a Tech Enthusiast and I like to build interactive Web apps.
                    <br/>
                    I have completed my Bachelor of Engineering (Computer Science) in the year 2020.
                    <br/>
                     
                    <span className="text-l font-medium">
                        After that I Joined TCS in JAN 2021 as an Assistant System Engineer Trainee 
                        <br/>And Currently working as a FRONT-END Developer"
                    </span><br/><br/>
                    {/* My passion for Technology, Apps and Video Games build the strong foundation of    */}
                    <span className="text-2xl">console.log(info); <span className="text-white font-bold animate-ping">|</span></span>

                </p>
            </div> 
        </div>
        </section>)
}