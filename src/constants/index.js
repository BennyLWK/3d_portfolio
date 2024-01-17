import { briefcase } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  tailwindcss,
  java,
  android,
  ios,
  csharp,
  gitlab,
  jenkins,
  trello,
  androidstudio,
  xcode,
  vscode,
  postman,
  ecommerce,
  todo,
  dashboard,
  machine,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Frontend",
  },

  {
    imageUrl: react,
    name: "React / React Native",
    type: "Frontend",
  },
  {
    imageUrl: android,
    name: "Android",
    type: "Frontend",
  },
  {
    imageUrl: ios,
    name: "iOS",
    type: "Frontend",
  },
  {
    imageUrl: csharp,
    name: "C#",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  // {
  //   imageUrl: typescript,
  //   name: "TypeScript",
  //   type: "Frontend",
  // },
];

export const tools = [
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: gitlab,
    name: "GitLab",
    type: "Version Control",
  },
  {
    imageUrl: jenkins,
    name: "Jenkins",
    type: "Automation Server",
  },
  {
    imageUrl: trello,
    name: "Trello",
    type: "Management Tool",
  },
  {
    imageUrl: vscode,
    name: "Visual Studio Code",
    type: "Code Editor",
  },
  {
    imageUrl: androidstudio,
    name: "Android Studio",
    type: "IDE",
  },
  {
    imageUrl: xcode,
    name: "Xcode",
    type: "IDE",
  },
  {
    imageUrl: postman,
    name: "Postman",
    type: "Software Tool",
  },
];

export const experiences = [
  {
    title: "Senior Mobile Developer",
    company_name: "Codetron",
    icon: briefcase,
    iconBg: "#accbe1",
    date: "May 2019 - Present",
    points: [
      "Developing and maintaining mobile applications using React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, project managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in deployment with Jenkins.",
    ],
  },
  {
    title: "Mobile Apps Developer",
    company_name: "SNSoft",
    icon: briefcase,
    iconBg: "#fbc3bc",
    date: "Nov 2018 - Apr 2019",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Software Developer",
    company_name: "Emerico",
    icon: briefcase,
    iconBg: "#b7e4c7",
    date: "Jul 2013 - Oct 2018",
    points: [
      "Coordinated with CTO to evaluate and improve software and hardware interfaces.",
      "Updated and fixed existing software and system applications.",
      "Designed and developed foward-thinking systems that meet user needs and improve productivity.",
      "Discussed project progress with customers, collected feedback on different stages and directly addressed concerns.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Smartag Solution",
    icon: briefcase,
    iconBg: "#a2d2ff",
    date: "Mar 2012 - Jul 2013",
    points: [
      "Worked closely with software development and testing team members to design and develop robust RFID solutions to meet client requirements for functionality, scalability and performance.",
      "Configured, installed, tuned RFID-based systems and monitored performance of the system.",
      "Researched and developed NFC application for Android phone.",
    ],
  },
  {
    title: "System Engineer",
    company_name: "Myreka Technologies",
    icon: briefcase,
    iconBg: "#E7EBDA",
    date: "Jul 2010 - Feb 2012",
    points: [
      "Determined test requirements and function to meet quality requirements and benchmarks in support of internal software developers.",
      "Developed software and testing protocols in agile testing environment, working effectively with development teams.",
    ],
  },
  {
    title: "Trainee",
    company_name: "DP Controls",
    icon: briefcase,
    iconBg: "#89AC76",
    date: "May 2009 - Oct 2009",
    points: [
      "Control panel wiring.",
      "Assist engineer at field job in small wiring modification.",
      "Assist in drafting Auto-CAD drawing for projects",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/BennyLWK",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/bennylwk",
  },
];

export const projects = [
  {
    iconUrl: ecommerce,
    theme: "btn-back-red",
    name: "Simple Ecommerce Application",
    description:
      "Developed a simple mobile application for e-commerce with react native.",
    link: "https://github.com/BennyLWK/EcommerceApp",
  },
  {
    iconUrl: todo,
    theme: "btn-back-green",
    name: "Simple Todo App",
    description:
      "Developed a simple mobile application for to do with react native..",
    link: "https://github.com/BennyLWK/TodoApp",
  },
  {
    iconUrl: dashboard,
    theme: "btn-back-blue",
    name: "Admin Dashboard",
    description: "A web application for admin to edit product.",
    link: "https://github.com/BennyLWK/admin-app",
  },
  {
    iconUrl: machine,
    theme: "btn-back-pink",
    name: "Vending Machine",
    description: "Built a simple demo for vending machine.",
    link: "https://github.com/BennyLWK/VendingMachine",
  },
];
