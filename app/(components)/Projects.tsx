import { useRef } from "react"

import Project from "./components/Project"

// import ProjectData from "./data/projectData"

type ProjectDataType = {
  projectName: string;
  desc: string;
  techStack: string[];
  images: string[]; 
  link: string;
};

const ProjectData = [
  {
    projectName: 'PetPals 🐾',
    desc: 'The ultimate doggy playdate app - chat with fellow dog owners and set up the perfect playdate!',
    techStack: ['React', 'Next.js', 'tRPC', 'Prisma', 'Typescript', 'Tailwind CSS', 'NextAuth'],
    images:['/projects/petpals/landing.png', '/projects/petpals/chat.png', '/projects/petpals/swipe.png', '/projects/petpals/aboutme.png', '/projects/petpals/editprofile.png'],
    link:'https://petpal-xi.vercel.app/'
  },
  {
    projectName: 'OverVue - Open Source Product',
    desc: 'An intuitive Vue prototyping tool that enables developers to seamlessly build & visualize Vue.js applications.',
    techStack: ['Vue.js', 'Vuetensils', 'Vue Router', 'Pinia', 'Jest', 'Electron', 'Quasar'],
    images:['/projects/overvue/OvervueLanding.png', 'https://media.giphy.com/media/ZulevY0tBZnUOCDpY7/giphy.gif', 'https://live.staticflickr.com/65535/53169434723_70b6cf748c_b.jpg','https://media.giphy.com/media/ptfGbJdSUODKZXY6XO/giphy.gif'],
    link:'https://www.overvue.org/'
  }
]


const Projects = () => {
  const title = useRef(null);

  return (
    <section id="projects" className="">
      <h1 ref={title} className="text-center text-7xl font-semibold tracking-tight text-amber-400 m-5 z-90"> projects </h1>
      <div className="relative flex flex-col gap-10 justify-center items-center w-screen">
        { ProjectData.length > 0 && (
            ProjectData.map((project, index) => (
              <Project key={index} {...project} />
            ))
         )
        }
      </div>
    </section>
  )
}

export default Projects;