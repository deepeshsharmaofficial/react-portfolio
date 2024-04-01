import {gtbitCollege, spsSchool2, jioSaavnProject, buyBusyProject, ComingSoon, DeepeshSharma, wavingHand, } from "../assets/images";

export const navLinks = [
    { id: "0", href: "/#home", label: "Home" },
    { id: "1", href: "/#about-us", label: "About Us" },
    { id: "2", href: "/#education", label: "Education" },
    { id: "3", href: "/#skills", label: "Skills" },
    { id: "4", href: "/#experience", label: "Experience" },
    { id: "5", href: "/#projects", label: "Projects" },
    { id: "6", href: "/#news", label: "News" },
    { id: "7", href: "/#contact-us", label: "Contact Us" },
];

export const hero = {
  name: "I'am Deepesh",
  profile: "I'am Full Stack Developer",
  icon: wavingHand
}

export const about = {
  name: "Deepesh Sharma",
  title: "Full Stack Developer",
  aboutImage: DeepeshSharma,
  about2: "I am a Full-Stack developer based in Pune, India. I'm an Information Technology undergraduate from SPPU, and my journey in web development began during my first year of college. I'm passionate about creating beautiful, functional, and user-friendly websites and applications, and I'm constantly pushing myself to learn and grow as a developer. Love building full-stack clones and side projects.",
  about: "I am a Full-Stack developer based in Pune, India. I am pursuing my B. Tech from GTBIT with an aggregate of 81.5% through the 7th Semester. I have also participated in HackCBS Hackathon. Although, we didn’t win, but we learned a lot from the experience and were able to showcase our skills and creativity."
  ,
  resume: "https://drive.google.com/file/d/1DGl0ZVObDkkCJKEDQ6Akr2u5lSUTYrj4/view?usp=sharing"
}

export const skills =[
    {
        name: "ReactJS",
        image: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        name: "ExpressJS",
        image: "https://img.icons8.com/fluency/48/000000/node-js.png"
    },
    {
        name: "NodeJS",
        image: "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
        name: "Redux",
        image: "https://img.icons8.com/color/48/000000/redux.png"
    },
    {
        name: "Firebase",
        image: "https://img.icons8.com/color/48/000000/firebase.png"
    },
    {
        name: "TailwindCSS",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
    },
    {
        name: "Bootstrap",
        image: "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
    {
        name: "HTML5",
        image: "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        name: "CSS3",
        image: "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        name: "JavaScript",
        image: "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
        name: "C++",
        image: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
    {
        name: "MongoDB",
        image: "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    {
        name: "Netlify",
        image: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
    },
    {
        name: "jQuery",
        image: "https://img.icons8.com/ios-filled/48/1169ae/jquery.png"
    },
    {
        name: "Git VCS",
        image: "https://img.icons8.com/color/48/000000/git.png"
    },
    {
        name: "GitHub",
        image: "https://img.icons8.com/glyph-neue/48/000000/github.png"
    },
    {
        name: "WordPress",
        image: "https://img.icons8.com/color/48/000000/wordpress.png"
    }    
]

export const projects = [
    {
        id: "0",  
        name: "BuyBusy React Ecommerce",
        techstack: "ReactJS, Firebase, Bootstrap",
        image: buyBusyProject,
        links: {
          visit: "https://buybusy-ecommerce-deepesh.netlify.app/",
          code: "https://github.com/deepeshsharmaofficial/buybusy-react-ecommerce",
          video: "https://www.linkedin.com/feed/update/urn:li:activity:7116099198432817152/",
        }
      },
      {
        id: "1",
        name: "Jio Savan Clone",
        techstack: "HTML, CSS, JavaScript",
        image: jioSaavnProject,
        links: {
          visit: "https://music-player-deepesh.netlify.app/",
          code: "https://github.com/deepeshsharmaofficial/music-player",
          video: "",
        }
      },
      {
        id: "2",
        name: "Thread Clone",
        techstack: "ReactJs, MongoDB, ExpressJS, NodeJS",
        image: ComingSoon,
        links: {
          visit: "",
          code: "",
          video: "",
        }
      },
      {
        id: "3",
        name: "Portfolio",
        techstack: "ReactJS, TailwindCSS",
        image: ComingSoon,
        links: {
          visit: "",
          code: "",
          video: "",
        }
      }
]

export const socialMedia = [
    {
        id: 0,
        icon: "FaLinkedin",
        link: "https://www.linkedin.com/in/deepeshsharmaofficial"
    },
    {
        id: 1,
        icon: "FaGithub",
        link: "https://github.com/deepeshsharmaofficial"
    },
    {
        id: 2,
        icon: "FaInstagram",
        link: "https://www.instagram.com/deepeshsharmaofficial"
    },
    { 
        id: 3,
        icon: "FaTwitter",
        link: "https://twitter.com/deepeshsharma48"
    }
];

export const experiences = [
    {
      id: "0",
      company: "Coding Ninjas",
      position: "Teaching Assistant",
      duration: "Nov 2023 - Feb 2024",
      desc: [
        "Taking doubt sessions.",
        "Debugging codes.",
        "Helping students in their assignments & various projects.",
        "Skills: ReactJS · Firebase · Redux"
      ]
    },
    {
      id: "1",
      company: "Freelancer",
      position: "Website Developer",
      duration: "May 2022– Present",
      desc: [
        "Worked with different brands to create good-looking, functional websites like Kymix, Bsybee Design, ServeLogy, and HighFlex.",
        "Turned client needs into website designs that match their brand and goals.",
        "Specialized in making different types of websites like Blogs, E-commerce, Landing Pages, and Personal Websites.",
        "Skills: wordpress · WooCommerce · Elementor"
      ]
    },
    {
      id: "2",
      company: "Sagarmatha Hacktoberfest",
      position: "Open Source Contributor",
      duration: "Oct 2022 - Oct 2022 · 1 month",
      desc: [
        " Actively participated in Hacktoberfest, an annual event promoting open source contributions.",
        "Worked on building the product from scratch and built multiple dashboards.",
        "Skills: HTML · CSS · JavaScript"
      ]
    }
]

export const educations = [
  {
    id: "0",
    institute: "Guru Tegh Bahadur Institute of Technology | GGSIPU",
    degree: "Bachelor Of Engineering in ECE",
    duration: "2020-2024 | Pursuing",
    image: gtbitCollege
  },
  {
    id: "1",
    institute: "M.S.D. Sanjeevani Public School | CBSE",
    degree: "12th | Science",
    duration: "2018-2020 | Completed",
    image: spsSchool2
  }
]