import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { FaStar } from "react-icons/fa";


export default function Hook({ forwardedRef }:{
  forwardedRef: (el: HTMLElement) => void,
}): JSX.Element {

  const hookSection = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: hookSection.current,
      start: "top 800px",
      animation: gsap
        .timeline()
        .to(
          text.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 0.9, delay:0.2, stagger:2 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [hookSection]);

    return (
      <section id="hook" ref={hookSection} className="h-screen w-full flex justify-center items-center">
        <div className="flex">
          <FaStar color="yellow" size={32} />
        </div>
        <div>
          <div className="text-4xl lg:text-6xl tracking-tighter px-10 lg:px-40">
            <div ref={text} className="w-full text-slate-500 font-medium opacity-0">
              <h1> I create, design, and code projects with
              <span className="italic text-slate-300"> intention.</span>
              </h1>
              <h2>
                I&apos;m committed to crafting user experiences and delivering full stack applications from scratch to production.
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }