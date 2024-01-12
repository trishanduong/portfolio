import { useRef } from "react"

import Project from "./components/Project"

import ProjectData from "./data/projectData"

export default function Projects(){
  const title = useRef(null);

  return (
    <section id="projects" className="h-screen pt-10 pb-10 text-white">
      <h1 ref={title} className="DM.className text-center text-7xl font-semibold tracking-tight text-amber-400 m-5 py-30"> projects </h1>
      <div className="relative flex justify-center items-center ">
        {
          ProjectData.map((project, index) => (
            <Project key={index} {...project} />
          ))
        }
      </div>
    </section>
  )
}