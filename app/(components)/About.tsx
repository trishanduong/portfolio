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
      start: "top 700px",
      animation: gsap
        .timeline()
        .to(title.current, {opacity: 1, y: 0, duration: 0.5, delay:0.2, ease: "power4.out"})
        .to([img.current, body.current], {
          opacity: 1, y: 0, duration: 1, delay:0.2, ease: "power4"}),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, [aboutSection]);

  return (
    <section id="about" ref={aboutSection} aria-label="about me" className=" h-100vh w-screen">
      <div className="relative">
        <h1 ref={title} className="DM.className text-center text-7xl font-semibold tracking-tight text-amber-400 opacity-0">
          about me
          </h1>
        <div className="mt-10 flex flex-col items-start lg:flex-row lg:gap-10 p-7">
          <div ref={img} className="top-28 w-full flex flex-col justify-center items-center overflow-hidden rounded-sm lg:p-10 lg:w-1/2 opacity-0">
            <Image
              className="h-auto p-1 bg-white rounded-md object-cover object-center lg:aspect-auto"
              src="/profileImg.jpeg"
              width={400}
              height={400}
              alt="portrait image"/>
          </div>
          <div className="top-20 text-2xl pt-10 lg:top-28 lg:w-1/2 ">
            <div className="space-y-4 text-slate-300 lg:text-3xl">
              <p ref={body} className="pl-10 translate-y-10 tracking-tight opacity-0 backdrop-blur-sm lg:pl-0 lg:pr-32">
                Hello! My name is Trisha.👋
                <br></br>
                <br></br>
                {`I'm a software engineer based in Los Angeles, California.`}
                <br></br>
                <br></br>{`As someone with a background in healthcare, I've always been passionate about helping others. This fostered a love for coding and creating sophisticated applications that highlight how technology changes lives. `}
                <br></br>
                <br></br>
                When I am not coding, you can find me enjoying a matcha latte 🍵, watching Studio Ghibli and Disney films,  arts and crafts 🎨,  or writing articles on{" "}
                <Link
                  className="underline text-slate-500 font-semibold duration-300 ease-in-out hover:text-secondary-700"
                  href="https://medium.com/@trishanduong" >
                  Medium. 
                </Link>
                {` ✍️`}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
