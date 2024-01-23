import { useLayoutEffect, useRef } from "react";
import Link from "next/link";

import CarouselComponent from "./Carousel";
import Tag from "./Tag";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


interface ProjectProps {
  projectName: string,
  secondHeading: string,
  desc: string,
  techStack: string[],
  link: string,
  images: string[],
  github: string,
};

const Project:React.FC<ProjectProps> = ({
   projectName,
   secondHeading,
   desc,
   techStack,
   link,
   images,
   github,
}) => {
  const project = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: project.current,
      start: "top 700px",
      animation: gsap
        .timeline()
        .to(project.current, {opacity: 1, y: 0, duration: 0.5, delay:0.2, ease: "power4.out"}),
      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, []);

  return (
    <div ref={project} className="w-4/5 p-5 rounded-lg flex backdrop-blur-sm h-1/2 items-center opacity-0">
      <div className="w-100vh lg:w-1/2 p-3">
        <h1 className="DM.className text-slate-500 text-5xl font-bold tracking-tight p-3">{projectName}</h1>
        <p className="p-5 text-xl text-slate-400 italic border-b border-opacity-10 border-slate-100 ">{secondHeading}</p>
        <p className="p-5 text-xl text-slate-200">{desc}</p>
        <div className="flex p-2 flex-wrap justify-center">
            {techStack.map((tech, index)=>(
              <div className="p-2" key={index}>
                <Tag tech={tech} />
              </div>
            ))}
        </div>
        <div className="w-full lg:hidden">
          {images && <CarouselComponent images={images} />}
        </div>
        <div className="flex items-center justify-center">
          <Link href={link} className="font-bold text-slate-800 m-3 px-10 py-2 rounded-lg bg-amber-300 hover:bg-amber-400" >
            Visit!
          </Link>
          <Link href={github} className="font-bold text-slate-700 m-3 px-10 py-2 rounded-lg bg-slate-300 hover:bg-slate-400" >
            Github Repo
          </Link>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        {images && <CarouselComponent images={images} />}
      </div>
    </div>
  )
}


export default Project;