import React from 'react';
import { gridItems } from '@/data';
import { BentoGrid, BentoGridItem } from './ui/BentoGrid';

const technologies = [
    { name: 'React.js', logo: '/reactjs.png' },
    { name: 'Next.js', logo: '/next.png' },
    { name: 'TypeScript', logo: '/typescript.png' },
    { name: 'Python', logo: '/python.jpeg' },
    { name: 'Java', logo: '/java.png' },
    { name: 'JavaScript', logo: '/javascript.png' },
    { name: 'Node.js', logo: '/nodejs.png' },
    { name: 'MySQL', logo: '/mysql.png' },
    { name: 'PostgreSQL', logo: '/postgresql.png' },
    { name: 'MongoDB', logo: '/mongodb.jpeg'},
    { name: 'HTML', logo: '/html.png' },
    { name: 'CSS', logo: '/css.png' },
    { name: 'Tailwind CSS', logo: '/tailwindcss.png' },
    { name: 'GIT', logo: '/git.png' },
    { name: 'VS Code', logo: '/vscode.png' },
];

const Grid = () => {
    return (
        <section id="About" className="min-h-screen pt-20 relative overflow-hidden">
            {/* Content section with animations */}
            <h1 className="heading">
                About<span className="text-purple"> Me</span>
            </h1>
            <div>
                <h2 className="text-3xl text-cyan-400 p-12">A bit about me</h2>
                <p className="text-xl px-12">As a proactive Computer Science student at Illinois Institute of Technology, I possess a strong foundation in software development with skills in C, Java, Python, HTML, CSS, JavaScript, React.js, Node.js, and SQL. My experience includes internships where I engineered web applications, enhanced user experiences, and optimized systems, resulting in significant operational improvements. I&apos;ve led projects like a food delivery app and a smart home e-commerce site, integrating advanced APIs and data processing techniques. I hold an Azure Fundamentals certification and am passionate about leveraging technology to solve real-world problems. My dedication and versatile skill set make me a valuable asset to any development team.</p>
                <h2 className="text-3xl text-cyan-400 p-12">Technologies and Tools</h2>
                <p className="text-xl px-12">Crafting user-centric, high-performance applications and websites across smartphones, tablets, and desktops with a blend of modern technologies and trusted open-source solutions.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 py-12 px-12">
                    {technologies.map((tech) => (
                        <a key={tech.name} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
                            <img src={tech.logo} alt={`${tech.name} logo`} className="w-16 h-16 object-contain" />
                            <p className="text-center">{tech.name}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
        
    )
}

export default Grid