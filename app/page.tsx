'use client'

import { useRef, useLayoutEffect, useEffect} from 'react';
import Image from 'next/image';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NavBar from './(components)/Nav';
import Hook from './(components)/Hook';
import Hero from './(components)/Hero';
import About from './(components)/About';

export default function Home() {
  const sectionRefs = useRef<HTMLElement[]>([]); 
  const parallel = useRef(null);
  
  return (
    <main>
      <NavBar sectionRefs={sectionRefs.current}/>
      <Hero forwardedRef={(el) => (sectionRefs.current[0] = el)} />{" "}
      <Hook forwardedRef={(el) => (sectionRefs.current[1] = el)} />
      <About />
    </main>
  )
}


