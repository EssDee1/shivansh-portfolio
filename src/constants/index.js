import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    aftereffects,
    canva,
    photoshop,
    premiere,
    nextjs,
    meta,
    starbucks,
    tesla,
    shopify,
    sedsnp,
    hamrogpt,
    mattrab,
    sedssxc,
    pie,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Video Editor",
        icon: mobile,
    },
    {
        title: "Graphics Designer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "nextjs",
        icon: nextjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "aftereffects",
        icon: aftereffects,
    },
    {
        name: "canva",
        icon: canva,
    },
    {
        name: "photoshop",
        icon: photoshop,
    },
    {
        name: "premiere",
        icon: premiere,
    }
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "HamroGPT",
        icon: hamrogpt,
        iconBg: "#383E56",
        date: "June 2023 - Present",
        points: [
            "Developing a program called HamroGPT as a part of Incubate Nepal",
            "Focused on meeting the demands of Nepalese people in the world of AI",
            "Working on the frontend of the website using React.js and Tailwind CSS",
            "Working closely with the backend team to integrate the frontend with the backend",
        ],
    },
    {
        title: "Project Manager",
        company_name: "SEDS Nepal",
        icon: sedsnp,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Managing and initiating projects for the organization",
            "Working closely with the team to ensure the projects are completed on time",
            "Also working as the global relations manager within the organization",
            "Helping as a bridge between SEDS Nepal and other SEDS Member Countries"
        ],
    },
    {
        title: "Social Media Manager",
        company_name: "SEDS SXC",
        icon: sedssxc,
        iconBg: "#383E56",
        date: "July 2023 - April 2023",
        points: [
            "Managed the social media accounts of the organization",
            "Created content for the organization's social media accounts",
            "Worked closely with the core team to ensure the content was up to date",
            "Helped the organization grow its social media presence"
        ],
    },
    {
        title: "Volunteer Teacher",
        company_name: "Partnership in Education",
        icon: pie,
        iconBg: "#E6DEDD",
        date: "July 2022 - Feb 2023",
        points: [
            "Taught subjects like Science, Maths and CS to students from grade 8 to 10",
            "Helped children of underprivileged families get a better education",
            "Worked in the organization of various events within the program",
            "Made a positive impact on the community"
        ],
    },
    {
        title: "Computer Admin",
        company_name: "Ask Mattrab",
        icon: mattrab,
        iconBg: "#383E56",
        date: "Oct 2022 - April 2023",
        points: [
            "Helped transform online learning in Nepal.",
            "Prepared notes, MCQs, Quizzes for students.",
            "Edited questions and answers posted by creators",
            "Reflected my expertise in computer science and related fields"
        ]
    }
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "ShareGPT",
        description: "An open-source AI Prompting tool for modern world to discover, create and share creative prompts",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/EssDee1/ShareGPT",
        live_demo_link: "https://share-gpt-essdee1.vercel.app/"
    },
    {
        name: "Shivver",
        description:
            "A social media platform for making friends and sharing your thoughts with the world.",
        tags: [
            {
                name: "nodejs",
                color: "blue-text-gradient",
            },
            {
                name: "redux",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/EssDee1/Shivver-Client",
        live_demo_link: "https://shivver.netlify.app/"
    },
    {
        name: "HamroGPT",
        description:
            "A suite of AI powered applications designed specifically to meet the needs of Nepali Audience",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "django",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/hamrogpt",
        live_demo_link: "https://waitlist.hamrogpt.org/"

    },
];

export { services, technologies, experiences, testimonials, projects };