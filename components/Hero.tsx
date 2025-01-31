'use client'; // Ensure the component is client-side

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt, FaMouse } from 'react-icons/fa';
import { motion } from 'framer-motion';

const roles = ['Full Stack Developer', 'Software Developer', 'Backend Developer', 'Frontend Developer'];

const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000); // Change role every 2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-black relative overflow-hidden pt-5 sm:pt-10">
            {/* Background with 3D effect */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-black-100 opacity-80"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            className="absolute inset-0 bg-[url('/tech.jpg')] bg-cover bg-no-repeat bg-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2, ease: 'easeInOut' }}
                        />
                    </div>
                </div>
            </div>

            {/* Content section with animations */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left max-w-5xl w-full p-6 sm:p-6">
                {/* Animated Image Section (Hidden on Mobile) */}
                <motion.div
                    className="w-full md:w-1/3 mb-6 md:mb-0 rounded-full border-4 border-gradient-to-r from-cyan-500 to-purple-500 shadow-lg flex items-center justify-center overflow-hidden hidden sm:flex"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                    <img src="/techguru.png" className="object-cover w-full h-full" alt="Person Coding" />
                </motion.div>

                {/* Spacer between image and text */}
                <div className="hidden md:block md:w-8"></div>

                {/* Text section with dynamic animations */}
                <motion.div
                    className="w-full md:w-2/3 flex flex-col items-center md:items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-wide">
                        Hi, I am <span className="text-cyan-400">Heyt Gala</span>
                    </p>
                    <p className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-6">
                        {roles[currentRole]}
                    </p>
                    <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
                        I am a passionate about learning & exploring new technologies. Currently, I&apos;m interning at Leap of Faith Technologies (LOF) as a Software Development Intern.
                    </p>
                    
                    {/* Social Media and Resume Links (Aligned on Same Line on Mobile) */}
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
                        <a
                            href="https://github.com/Heytgala"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 sm:px-6 sm:py-3 border border-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-80 transition-all duration-300 transform hover:scale-105"
                        >
                            <FaGithub size={24} className="mr-2 hidden sm:block" />
                            <span className="hidden sm:block">GitHub</span>
                            <FaGithub size={24} className="sm:hidden" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/heyt-gala/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 sm:px-6 sm:py-3 border border-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-80 transition-all duration-300 transform hover:scale-105"
                        >
                            <FaLinkedin size={24} className="mr-2 hidden sm:block" />
                            <span className="hidden sm:block">LinkedIn</span>
                            <FaLinkedin size={24} className="sm:hidden" />
                        </a>
                        <a
                            href="https://www.instagram.com/heyt._.26/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 sm:px-6 sm:py-3 border border-gradient-to-r from-pink-500 to-pink-600 rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:opacity-80 transition-all duration-300 transform hover:scale-105"
                        >
                            <FaInstagram size={24} className="mr-2 hidden sm:block" />
                            <span className="hidden sm:block">Instagram</span>
                            <FaInstagram size={24} className="sm:hidden" />
                        </a>
                        <a
                            href="/Resume.pdf"
                            download
                            className="flex items-center px-4 py-2 sm:px-6 sm:py-3 border border-gradient-to-r from-green-500 to-teal-500 rounded-full text-white bg-gradient-to-r from-green-500 to-teal-500 hover:opacity-80 transition-all duration-300 transform hover:scale-105"
                        >
                            <FaFileAlt size={24} className="mr-2 hidden sm:block" />
                            <span className="hidden sm:block">Resume</span>
                            <FaFileAlt size={24} className="sm:hidden" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll down mouse icon */}
            <div className="absolute bottom-20 flex justify-center w-full">
                <a href="#About" className="flex flex-col items-center cursor-pointer z-10">
                    <FaMouse size={30} className="text-white mb-2" />
                    <span className="text-white">Scroll for more</span>
                </a>
            </div>
        </section>
    );
}

export default Hero;
