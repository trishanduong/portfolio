import Image from "next/image";
import Tag from "./Tag";
import CarouselComponent from "./Carousel";
import Link from "next/link";


interface ProjectProps {
  projectName: string,
  desc: string,
  techStack: string[],
  link: string,
  images: string[],
};

const Project:React.FC<ProjectProps> = ({
   projectName,
   desc,
   techStack,
   link,
   images,
}) => {

  return (
    <div className="w-3/4 p-5 rounded-lg radialgradient flex backdrop-blur-sm bg-opacity-10 h-1/2 items-center">
      <div className="w-100vh lg:w-1/2 p-5 text-slate-200">
        <h1 className="DM.className text-slate-500 text-5xl font-bold tracking-tight border-b border-opacity-20 p-5 border-slate-200 ">{projectName}</h1>
        <p className="p-5 text-xl">{desc}</p>
        <div className="flex p-2 flex-wrap">
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
        <div className="w-full lg:hidden">
          {images && <CarouselComponent images={images} />}
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        {images && <CarouselComponent images={images} />}
      </div>
    </div>
  )
}


export default Project;