import { mobile, backend, creator, web, javascript, typescript, html, css, reactjs, redux, tailwind, nodejs, mongodb, git, figma, docker, starbucks, tesla, shopify, threejs, aidoc, invflow, ireadlib } from "../assets";

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
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "resume",
    title: "Resume",
  },
];


const services = [
  {
    title: "Website Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphics Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Intern",
    company_name: "Spectranet Limited",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2022 - January 2023",
    points: [
      "Collaborated with network engineers in fixing 20+ network problems and this caused a reduction of network downtime.",
      "Analyzed detailed network data and resolved over 12 security threats which had the potential to compromise the security.",
      "Implemented a virtual LAN solution for clients that boosts network performance.",
    ],
  },
  {
    title: "Backend Developer Intern",
    company_name: "Xpertech Solutions Limited",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      " Developed a REST API using Express and MongoDB to store, retrieve and manage data.",
      "Developed a full-stack web application using React, Express, and MongoDB.",
      "Responsible for implementing the core logic of an application on the server side.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "immer",
    icon: shopify,
    iconBg: "#383E56",
    date: "September 2023 - Febraury 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
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
    name: "InventoryFlow",
    description:
      "An inventory management system designed to streamline inventory tracking and management processes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "flowbite",
        color: "green-text-gradient",
      },
    ],
    image: invflow,
    github_link: "https://github.com/daniel-idowu-01/inventoryflow",
    live_link: "https://inventoryflow.netlify.app/"
  },
  {
    name: "AI-Doc",
    description:
      "An AI-powered symptom and diagnosis guidance web application that helps users manage their health.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
    ],
    image: aidoc,
    github_link: "https://github.com/daniel-idowu-01/AI-Doc",
    live_link: "https://ai-doc.netlify.app/"
  },
  {
    name: "iReadLib",
    description:
      "A fullstack e-library for users to get recommendations on books and purchase favorite books.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "swiperjs",
        color: "blue-text-gradient",
      },
      {
        name: "flowbite",
        color: "green-text-gradient",
      }
    ],
    image: ireadlib,
    github_link: "https://github.com/daniel-idowu-01/ireadlib",
    live_link: "https://ireadlib.netlify.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };