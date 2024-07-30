'use client'; // Ensure the component is client-side

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { Spotlight } from './ui/Spotlight';

const roles = ['Full Stack Developer', 'Software Developer', 'Machine Learning Developer'];

const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 1000); // Change role every 2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative">
            <div>
                {/* Your Spotlight components */}
                <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            {/* Radial gradient overlay */}
            <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 pointer-events-none">
                <div className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-white mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)"></div>
            </div>

            {/* Content section */}
            <div className="flex relative my-20 z-10 w-full justify-center">
                <div className="w-full max-w-5xl flex flex-col md:flex-row items-center md:items-center">
                    {/* Image section */}
                    <div className="w-32 h-32 md:w-80 md:h-80 mb-4 md:mb-0 md:mr-8 overflow-hidden rounded-full flex items-center justify-center">
                        <img src="/Heyt.png" className="object-cover w-full h-full" alt="Heyt Gala" />
                    </div>

                    {/* Text section */}
                    <div className="w-full md:w-2/3 flex flex-col items-center md:items-start">
                        <p className="text-center md:text-left text-4xl font-bold mb-2">
                            Hi, I am <span className="text-blue-600">Heyt Gala</span>
                        </p>
                        <p className="text-center md:text-left text-3xl lg:text-2xl font-semibold mb-4">
                            {roles[currentRole]}
                        </p>
                        <p className="text-center md:text-left text-xl lg:text-base mb-8">
                            I am Software Developer/Full Stack Developer. I am currently working at Leap of Faith Technologies (LLC) as a Software Development Intern.
                        </p>
                        <div className="flex flex-row items-center justify-center gap-4 mb-6">
                            <a href="https://github.com/Heytgala" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 border rounded-full text-gray-1000 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
                                <FaGithub size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/heyt-gala/" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 border rounded-full text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="/Resume.pdf" download className="flex items-center px-4 py-2 border rounded-full text-green-600 border-green-600 hover:bg-green-600 hover:text-white transition-colors">
                                <FaDownload size={24} />
                                <span className="ml-2">Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
