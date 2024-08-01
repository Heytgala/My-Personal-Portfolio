export const navItems = [
    { name: "Home", link: "#Home" },
    { name: "About", link: "#About" },
    { name: "Projects", link: "#Projects" },
    { name: "Experience", link: "#Experience" },
    { name: "Contact", link: "#Contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communicationx",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a JS Animation library",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "3D Solar System Planets to Explore",
        des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
        img: "/p1.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
        id: 2,
        title: "Yoom - Video Conferencing App",
        des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        img: "/p2.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
        id: 3,
        title: "AI Image SaaS - Canva Application",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
        id: 4,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p4.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://github.com/adrianhajdin/iphone",
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
    },
    {
        quote:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        name: "Michael Johnson",
        title: "Director of AlphaStream Technologies",
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
        desc: ["Developed and executed efficient ETL processes using Python, transforming and loading JSON data into PostgreSQL, resulting in a 30% improvement in data processing time.",
            "Engineered APIs with IMO NLP tools to extract lexical codes for medications and patient problems, leading to enhanced accuracy in clinical data processing and analysis.",
            "Streamlined IEMR clinical data management through Atlas and Athena, reducing data retrieval times by 25%.",
            "Ensured high - performance data storage and retrieval via expert database management with PostgreSQL, increasing overall system reliability."
            ],
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Worley (Graduate Digital Solutions Consultant)",
        desc: [
            "Developed diverse applications using ASP.NET MVC, C#, jQuery, HTML, and CSS.",
            "Enhanced database performance and efficiency by optimizing query execution time in MySQL Server Management Studio.",
            "Led projects with Automation Anywhere (AA) for enhanced automation.",
            "Uploaded projects efficiently on the Visual Studio TFS server, ensuring smooth collaboration."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Worley (Graduate Digital Solutions Consultant Intern)",
        desc: [
            "Streamlined HR and Piping Department tasks efficiently through UiPath automation.",
            "Crafted diverse website portals employing ASP.NET MVC, C#, jQuery, HTML, and CSS.",
            "Engineered database management processes by implementing advanced SQL techniques, enhancing overall efficiency and reliability."
        ],
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
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
        id: 5,
        title: "Illinois Institute of Technology Chicago (Graduate Teaching Assistant)",
        desc: [
            "Provided one-on-one tutoring and office hours to support student learning, address individual challenges, and enhance their understanding.",
            "Coordinated with other teaching assistants to ensure consistency in grading standards.",
            "Graded assignments, and exams, ensuring a fair assessment of student performance.",
            "Gained in-depth knowledge of advanced probabilistic graphical models and inference techniques through direct engagement with course material and research activities."
        ],
        className: "md:col-span-2",
        thumbnail: "e-learning.png",
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
