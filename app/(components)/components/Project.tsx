import Image from "next/image";
import Tag from "./Tag";
import CarouselComponent from "./Carousel";
import Link from "next/link";


interface ProjectProps {
  projectName: string,
  desc: string,
  techStack: string[],
  link: string,
};

const Project:React.FC<ProjectProps> = ({
   projectName,
   desc,
   techStack,
   link,
}) => {

  return (
    <div className="w-3/4 h-80 p-5 rounded-lg radialgradient flex">
      <div className="w-100vh lg:w-1/2 p-5 text-slate-200">
        <h1 className="DM.className text-slate-500 text-5xl font-bold tracking-tight">{projectName}</h1>
        <p className="border-t border-slate-200 p-5">{desc}</p>
        <div className="flex p-2">
            {techStack.map((tech, index)=>(
            <div className="p-2" key={index}>
              <Tag tech={tech} />
            </div>
            ))}
        </div>
        
        <div className="flex items-center justify-center">
          <Link href={link} className="font-bold text-slate-800 m-3 px-10 py-2 rounded-lg bg-amber-300 " >
            Visit!
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2">
        <CarouselComponent />
      </div>
    </div>
  )
}


export default Project;