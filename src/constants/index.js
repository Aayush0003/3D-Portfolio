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
  java,
  python,
  Cplus,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  OnlineGrocery,
  IphoneClone,
  threejs,
  midwest,
  UNL,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
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
    name: "Java",
    icon: java,
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
    name: "Python",
    icon: python,
  },
  {
    name: "Cplus",
    icon: Cplus,
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
    title: "Sotware Developer Intern",
    company_name: "Midwest Holdings via Senior Design",
    icon: midwest,
    iconBg: "#383E56",
    date: "August 2025 - Present",
    points: [
      "Building a mobile-responsive Progressive Web App (PWA) using Django and Django Templates for customer and agent interaction.",
      "Enabling customers to view policy details, track transactions, and submit support tickets for technical assistance through an intuitive interface.",
      "Collaborating in Agile sprints to design, implement, and enhance policy management views and support ticket features.",
    ],
  },
  {
    title: "It Assistant",
    company_name: "University of Nebraska-Lincoln",
    icon: UNL,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Collaborating in Agile sprints to design, implement, and enhance policy management views and support ticket features.",
      "Managed laptop checkouts, reformatting, and delivered responsible technical support both in person and remotely",
      "Utilized ticketing systems to track, prioritize, and resolve technical issues efficiently while maintaining detailed documentation."
      
    ],
  },
  {
    title: "Soccer Official",
    company_name: "University of Nebraska-Lincoln",
    icon: UNL,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Jan 2024",
    points: [
      "Officiated competitive and recreational soccer matches while enforcing game rules and ensuring fair play.",
      "Maintained focus and quick decision-making in fast-paced, high-pressure environments.",
      "Collaborated with other officials to ensure consistent and accurate enforcement of match regulations.",
      
    ],
  },
  
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
    name: "Grocery Store Website",
    description:
      "Web-based platform that enables users to browse, purchase, and manage grocery orders online, integrating customer checkout, inventory management, and logistics for a seamless shopping experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET Core",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: OnlineGrocery,
    source_code_link: "https://github.com/Aayush0003/GroceryWebsite",
  },
  {
    name: "Farmart Sales Management System",
    description:
      "Desktop-based system designed to streamline sales operations and inventory tracking for retail businesses, enhancing data reliability, reporting accuracy, and customer service efficiency through secure design and database integration.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "SDLC",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Aayush0003/Far-Mart-Java-Project",
  },
  {
    name: "iPhone 15 Pro Website Clone",
    description:
      "Interactive web experience replicating Apple’s iPhone 15 Pro product page, featuring smooth scroll animations and 3D model rendering.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "GSAP",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: IphoneClone,
    source_code_link: "https://github.com/Aayush0003/IPhoneWebsite",
  },
];

export { services, technologies, experiences, testimonials, projects };