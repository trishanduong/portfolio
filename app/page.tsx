'use client'

import { useRef, useLayoutEffect, useEffect} from 'react';
import Image from 'next/image';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NavBar from './(components)/Nav';
import Hook from './(components)/Hook';
import Hero from './(components)/Hero';

export default function Home() {
  const sectionRefs = useRef<HTMLElement[]>([]); 

  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    ScrollTrigger.create({
      trigger: sectionRefs.current,
      start: "top 550px",
      end: "bottom 550px",
      animation: gsap.to(sectionRefs.current, {
        opacity: 1,
        y: 0,
        ease: "power4.out",
        duration: 1,
      }),
      toggleActions: "play none none none",

    });
    ScrollTrigger.refresh()
  }, []);
  

  return (
    <main className='bg-black'>
      <NavBar sectionRefs={sectionRefs.current}/>
      <Hero forwardedRef={(el) => (sectionRefs.current[0] = el)} />{" "}
      <Hook forwardedRef={(el) => (sectionRefs.current[1] = el)} />
    </main>
  )
}


