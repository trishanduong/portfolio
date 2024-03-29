import { useLayoutEffect, useRef } from "react"

import Project from "./components/Project"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

type ProjectDataType = {
  projectName: string;
  secondHeading: string,
  desc: string;
  techStack: string[];
  images: string[]; 
  link: string;
  github: string;
};

const ProjectData = [
  {
    projectName: 'PetPals 🐾',
    secondHeading: 'Fullstack application with Real-Time Messenging',
    desc: 'The ultimate doggy playdate app - chat with fellow dog owners and set up the perfect playdate!',
    techStack: ['React', 'Next.js', 'tRPC', 'Prisma', 'PostgreSQL', 'Typescript', 'Tailwind CSS', 'NextAuth', 'Pusher'],
    images:['/projects/petpals/landing.png', '/projects/petpals/chat.png', '/projects/petpals/swipe.png', '/projects/petpals/aboutme.png', '/projects/petpals/editprofile.png'],
    link:'https://petpal-xi.vercel.app/',
    github:'https://github.com/trishanduong/petpal',
  },
  {
    projectName: 'OverVue 10.0',
    secondHeading: 'An Open Source Product I worked on alongside a wonderful team of engineers 😊',
    desc: 'An intuitive Vue prototyping tool that enables developers to seamlessly build & visualize Vue.js applications.',
    techStack: ['Vue.js', 'Vuetensils', 'Vue Router', 'Pinia', 'Jest', 'Electron', 'Quasar'],
    images:['/projects/overvue/OvervueLanding.png', 'https://media.giphy.com/media/ZulevY0tBZnUOCDpY7/giphy.gif', 'https://live.staticflickr.com/65535/53169434723_70b6cf748c_b.jpg','https://media.giphy.com/media/ptfGbJdSUODKZXY6XO/giphy.gif'],
    link:'https://www.overvue.org/',
    github: 'https://github.com/open-source-labs/OverVue'
  },
  {
    projectName: 'Class One Donuts 🍩',
    secondHeading: 'Responsive Frontend website for a local business',
    desc: 'I primarily focused on creating a landing website that was minimalistic yet fun, introducing light animations using GSAP. Most of my time was spent trying to improve performance, SEO, and the accessibility of this website.',
    techStack: ['React.js', 'Typescript', 'TailwindCSS', 'Vite', 'gsap'],
    images:['/projects/classonedonuts/landing.png', 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHB2enRhZ3lxOWM1NDI2d2djZmN0ODFwNzF0MXRxbGhqd2R3ZXFsbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bNULtw7OLa17dG2OEc/giphy.gif', '/projects/classonedonuts/contact.png'],
    link:'https://classonedonuts.netlify.app',
    github:'https://github.com/trishanduong/classonedonuts',
  },
  
]


const Projects = () => {
  const title = useRef(null);
  const projects = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: title.current,
      start: "top 700px",
      animation: gsap
        .timeline()
        .to(title.current, {opacity: 1, y: 0, duration: 0.5, delay:0.2, ease: "power4.out"})
        .to(projects.current, {opacity: 1, y: 0, duration: 0.5, delay:0.2, ease: "power4.out"}),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, []);

  return (
    <section id="projects" className="">
      <div className="relative flex flex-col gap-10 justify-center items-center w-screen">
        <h1 ref={ title } className="text-center text-7xl font-semibold tracking-tight text-amber-400 pt-10 opacity-0"> my favorite projects </h1>
          { 
            ProjectData.length > 0 && (
              ProjectData.map((project, index) => (
                <Project key={index} {...project} />
              )
            )
          )
          }
      </div>
    </section>
  )
}

export default Projects;