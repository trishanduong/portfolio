import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";


const TechStack = () => {
    const techSection = useRef(null);
    const title = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        ScrollTrigger.create({
          trigger: techSection.current,
          start: "top 700px",
          animation: gsap
            .timeline()
            .to(title.current, {opacity: 1, y: 0, duration: 0.5, delay:0.2, ease: "power4.out"}),
            // .to([img.current], {
            //   opacity: 1, y: 0, duration: 1, delay:0.2, ease: "power4"}),
    
          toggleActions: "play none none none",
        });
        ScrollTrigger.refresh();
    
      }, []);
    return (
        <div ref={techSection} className="h-screen w-full">
            <h1 ref={title} className="DM.className text-center text-7xl font-semibold tracking-tight text-amber-400 opacity-0">my tech toolkit</h1>
            <div className="flex justify-around text-6xl text-amber-300 p-9">
              <div className="frontend ">
                <h1>Frontend </h1>
              </div>
              <div className="backend">
                <h1>Backend </h1>
              </div>
            </div>
        </div>
    )
};

export default TechStack;