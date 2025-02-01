export const navItems = [
    { name: "Home", link: "#Home" },
    { name: "About", link: "#About" },
    { name: "Projects", link: "#Projects" },
    { name: "Experience", link: "#Experience" },
    { name: "Contact", link: "#Contact" },
];

export const projects = [
    {
        id: 1,
        title: "SmartHomes - Best place for HouseHold Appliances",
        des: " web-based enterprise application for an online SmartHome retailer, developed using Servlets, React, MySQL, MongoDB, and ElasticSearch. It follows MVC architecture and object-oriented design principles to provide a scalable and extensible solution.",
        img: "/p1.svg",
        iconLists: ["/vscode.png","/java.png", "/mysql.png", "/mongodb.jpeg", "/dock.svg"],
        link: "https://github.com/Heytgala/SmartHomes",
    },
    {
        id: 2,
        title: "Memories Capturer",
        des: "Best way to share memories with colleagues. A tool which has image recognition platform using MERN stack, processing and categorizing 100,000+ event images.",
        img: "/p2.svg",
        iconLists: ["/mongodb.jpeg", "/tail.svg", "/express.png", "/reactjs.png", "/nodejs.png"],
        link: "https://github.com/Heytgala/Memories-Capturer",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Leap of Faith Technologies (Software Development Intern)",
        desc: ["Engineered and executed efficient ETL processes using Python, transforming and loading JSON data into PostgreSQL, resulting in a 30% improvement in data processing time.",
            "Created APIs with IMO NLP tools to extract lexical codes for medications and patient problems, improving clinical data processing accuracy by 15% and increasing analysis speed by 20%.",
            "Streamlined IEMR clinical data management through Atlas and Athena, reducing data retrieval times by 25%.",
            "Optimized PostgreSQL database management, reducing query response time by 30% and increasing system reliability by 20%."
            ],
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Worley (Graduate Digital Solutions Consultant)",
        desc: [
            "Designed and implemented applications and user-friendly website portals using CI/CD pipeline, leveraging ASP.NET MVC, C#, jQuery, HTML, and CSS, which resulted in a 40% increase in user engagement and raising client satisfaction ratings.",
            "Enhanced MySQL database performance through query optimization, achieving a 50% reduction in data retrieval times, and automated HR and Piping Department processes with UiPath, boosting efficiency by 35%.",
            "Led automation with Automation Anywhere, boosting efficiency by 40%, enhanced team collaboration via Visual Studio TFS, and upgrading data integrity and reliability by 25% through advanced SQL."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },

    {
        id: 3,
        title: "C-BIA SOLUTIONS & SERVICES LLP (Web Developer Intern)",
        desc: [
            "Delivered a live project for a UK client on SharePoint Online, handling configuration, site creation, Document Library setup, Site Pages, and thorough testing.",
            "Developed custom web parts using Visual Code for enhanced project functionality.",
            "Integrated Excel Files seamlessly using Microsoft SQL Server Integration Services for efficient data flow."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
    {
        id: 4,
        title: "Illinois Institute of Technology Chicago (Graduate Teaching Assistant)",
        desc: [
            "Provided one-on-one tutoring and office hours to support student learning, address individual challenges, and enhance their understanding.",
            "Coordinated with other teaching assistants to ensure consistency in grading standards.",
            "Graded assignments, and exams, ensuring a fair assessment of student performance.",
            "Gained in-depth knowledge of advanced probabilistic graphical models, Google Cloud, Google Cloud Services and inference techniques through direct engagement with course material and research activities."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
];


export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
    },
];
