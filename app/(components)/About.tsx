import { useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";


export default function About() {
  const title = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);
  const img = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 300px",
      animation: gsap
        .timeline()
        .to(img.current, {
          opacity: 1, y: 0, duration: 1, delay:0.2, ease: "power4.out"})
        .to(title.current, {opacity: 1, y: 0, duration: 0.5, delay:0.2, ease: "power4.out"})
        .to(
          body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25, delay:0.8 }, 0.2),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    <section id="about" ref={aboutSection} aria-label="about me" className="text-slate-100 h-screen">
      <h1 ref={title} className="DM.className text-center text-7xl font-semibold tracking-tight text-sky-950 opacity-0">about me</h1>
      <div className="mt-10 flex flex-col items-start lg:flex-row lg:gap-10 ">
        <div ref={img} className="top-28 w-full flex flex-col justify-center items-center overflow-hidden rounded-sm lg:sticky lg:w-1/2 opacity-0">
          <Image
            className="h-auto rounded-md object-cover object-center lg:aspect-auto p-4"
            src="/profileImg.jpeg"
            width={400}
            height={400}
            alt="portrait image"/>
        </div>
        <div className="top-20 text-3xl sm:sticky lg:top-32 lg:w-1/2 text-slate-700">
          <div className="w-full space-y-4 2xl:space-y-10">
            <p ref={body} className="pl-10 translate-y-10 tracking-tight text-white 2xl:text-4xl opacity-0 lg:pl-0 lg:pr-32">
              {`Hello! My name is Trisha, I'm a software engineer based in Los Angeles, California.`}
              <br></br>
              <br></br>I craft sophisticated full-stack applications, seamlessly blending responsiveness and accessibility. 
              My passion extends beyond just development; I also love to contribute to open-source projects and am constantly seeking innovative solutions to complex problems.
              <br></br>
              <br></br>
              When I am not developing, you can find me sipping on tea, watching Studio Ghibli films, or writing articles on{" "}
              <Link
                className="underline duration-300 ease-in-out hover:text-secondary-700"
                href="https://medium.com/@trishanduong"
              >
                Medium.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
