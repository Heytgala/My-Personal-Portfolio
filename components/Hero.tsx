'use client'; // Ensure the component is client-side

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt, FaMouse } from 'react-icons/fa';
import { motion } from 'framer-motion';

const roles = ['Full Stack Developer', 'Software Developer', 'Machine Learning Developer'];

const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000); // Change role every 2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-black relative overflow-hidden">
            {/* Background with 3D effect */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-black-100 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            className="absolute inset-0 bg-[url('/tech-background.svg')] bg-cover bg-no-repeat bg-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                        />
                    </div>
                </div>
            </div>

            {/* Content section with animations */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left max-w-5xl w-full p-6 md:p-8">
                {/* Image section with interactive effect */}
                <motion.div
                    className="w-full md:w-1/3 mb-6 md:mb-0 rounded-full border-4 border-gradient-to-r from-cyan-500 to-purple-500 shadow-lg flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <img src="/Heyt.png" className="object-cover w-full h-full" alt="Heyt Gala" />
                </motion.div>

                {/* Spacer between image and text */}
                <div className="hidden md:block md:w-8"></div> {/* Adjust width for space */}

                {/* Text section with dynamic animations */}
                <motion.div
                    className="w-full md:w-2/3 flex flex-col items-center md:items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wide">
                        Hi, I am <span className="text-cyan-400">Heyt Gala</span>
                    </p>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6">
                        {roles[currentRole]}
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
                        I am a passionate Software Developer and Full Stack Developer. Currently, I&apos;m interning at Leap of Faith Technologies (LLC) as a Software Development Intern.
                    </p>
                    <div className="flex flex-row items-center justify-center md:justify-start gap-4 mb-6">
                        <a
                            href="https://github.com/Heytgala"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-6 py-3 border border-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-80 transition-all duration-300 transform hover:scale-105"
                        >
                            <FaGithub size={24} className="mr-2" />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/heyt-gala/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-6 py-3 border border-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-80 transition-all duration-300 transform hover:scale-105"
                        >
                            <FaLinkedin size={24} className="mr-2" />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://www.instagram.com/heyt._.26/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-6 py-3 border border-gradient-to-r from-pink-500 to-pink-600 rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:opacity-80 transition-all duration-300 transform hover:scale-105"
                        >
                            <FaInstagram size={24} className="mr-2" />
                            <span>Instagram</span>
                        </a>
                    </div>
                    <div className="flex flex-row items-center justify-center md:justify-start mb-6">
                        <a
                            href="/Resume.pdf"
                            download
                            className="flex items-center px-6 py-3 border border-gradient-to-r from-green-500 to-teal-500 rounded-full text-white bg-gradient-to-r from-green-500 to-teal-500 hover:opacity-80 transition-all duration-300 transform hover:scale-105"
                        >
                            <FaFileAlt size={24} className="mr-2" />
                            <span>Resume</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll down mouse icon */}
            <div className="absolute bottom-10 flex justify-center w-full">
                <a href="#About" className="flex flex-col items-center cursor-pointer z-10">
                    <FaMouse size={30} className="text-white mb-2" />
                    <span className="text-white">Scroll for more</span>
                </a>
            </div>



        </section>
    );
}

export default Hero;
