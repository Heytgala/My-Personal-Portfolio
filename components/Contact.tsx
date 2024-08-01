﻿import React from "react";
import { MagicButton } from "./ui/MagicButton";
import { FaLocationArrow, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <footer className="w-full pt-20 pb-10" id="Contact">

            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Get in <span className="text-purple">Touch </span>
{/*                    Ready to take <span className="text-purple">your</span> digital presence to next level?
*/}                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today. If you want to know more About Me or My Work, or if you would like to have any advice, just drop me a message ! I&apos;m currently Open to Work.
                </p>
                <a href="mailto:heytgala26@gmail.com">
                    <MagicButton title="Write me an email" icon={<FaLocationArrow />} position="right"
                    />
                </a>
                <br/>
                <div className="flex flex-row items-center justify-center gap-4 mb-6">
                    <h2> Social :</h2>
                    <a href="https://github.com/Heytgala" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 border rounded-full text-gray-1000 border-gray-800 hover:bg-gray-800 hover:text-white transition-colors">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/heyt-gala/" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 border rounded-full text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
                <p className="md:text-base text-sm md:font-normal font-light">Built and Designed <span className="text-red">❤️</span> By Heyt Gala </p>
            </div>
        </footer>
    )
};

export default Contact;
