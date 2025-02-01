import React from 'react';
import { gridItems } from '@/data';

const technologies = [
    { name: 'React.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' },
    { name: 'Next.js', logo: 'https://camo.githubusercontent.com/26d06a6572aa5d9ecdb699add71d40e57aefe8244c6306ba58a70aee6ad5123c/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6c696768745f6261636b67726f756e642e706e67' },
    { name: 'Type-Script', logo: 'https://raw.githubusercontent.com/rahul-jha98/github_readme_icons/main/language_and_tools/square/typescript/typescript.svg' },
    { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'Java', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    {name:'C', logo:'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg'},
    {name: 'C++', logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"},
    { name: 'JavaScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'MySQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'PostgreSQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg' },
    { name: 'Mongo DB', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' },
    {name:'Node.js', logo:'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white'},
    {name:'Express', logo:'/express.png'},
    { name: 'HTML', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' },
    { name: 'CSS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' },
    { name: 'Tailwind CSS', logo: '/tailwindcss.png' },
    { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'GCP', logo: 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg' },
    { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg' },
    { name: 'SQLite', logo: 'https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg' },
    { name: 'Postman', logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
    { name: 'Hadoop', logo: 'https://raw.githubusercontent.com/Thomas-George-T/Thomas-George-T/master/assets/hadoop.svg' },
    {name:'Spark', logo:'https://raw.githubusercontent.com/Thomas-George-T/Thomas-George-T/master/assets/apache_spark.svg'},
    { name: 'GIT', logo: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' },
    { name: 'VS Code', logo: '/vscode.png' },
    { name: 'Android Studio', logo:'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg'}
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
                <p className="text-xl px-12">I’m a passionate Software Engineer with a strong background in developing scalable and efficient solutions across various industries. With hands-on experience in Python, JavaScript, cloud platforms like AWS and GCP, and database technologies, I thrive on solving complex problems through innovative and data-driven approaches. I’ve successfully led projects improving data processing, performance optimization, and automation, consistently delivering results that boost efficiency and user engagement. Currently pursuing a Master's in Computer Science, I am driven by the opportunity to make an impact in the tech space through advanced technology and creative problem-solving. My dedication and versatile skill set make me a valuable asset to any development team.</p>
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