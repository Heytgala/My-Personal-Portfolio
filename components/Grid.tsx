import React from 'react';
import { gridItems } from '@/data';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

const Grid = () => {
    return (
         <section id="About" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
            {/* Content section with animations */}
            <h1>About Me</h1>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left max-w-5xl w-full p-6 md:p-8">
                {/* Spacer between image and text */}
                <div className="hidden md:block md:w-8"></div> {/* Adjust width for space */}

                {/* Text section with dynamic animations */}
                
            </div>
        </section>
        
    )
}

export default Grid