
import { useRef, useLayoutEffect, useEffect} from 'react';
import Image from 'next/image';

import gsap from 'gsap';

import { FaStar } from "react-icons/fa";


export default function Hero2({ forwardedRef }:{
  forwardedRef: (el: HTMLElement) => void,
}): JSX.Element  {
  const comp = useRef(null); //reference for the root level element
  const driftyLanterns = useRef(null);
  const scroll = useRef(null);

  useLayoutEffect(() => {
    //create a gsap context to record all GSAP animations set up during context execution (for cleanup)
    const ctx = gsap.context(() => {
      //define GSAP timeline to create a sequence of animations
      const t1 = gsap.timeline();
      
      t1.fromTo(".intro",{scale:1, opacity:0},{y:'-=50', opacity:1, duration:0.4, stagger:0.3 });
     
        gsap.to(".mainchar", {y:"+=25", repeat:-1, yoyo:true, duration:2 });
        gsap.to('.star', {rotate:360, repeat:-1, yoyo:true, duration:5 })
        gsap.to('.star1', {rotate:-360, repeat:-1, yoyo:true, duration:5 })

    }, [comp, driftyLanterns]); //pass comp as context object so all animation affects children of comp component

    //when the effect is unmounted/cleaned, revert the animation set up by GSAP context -> allow animation to not be persisted
    return () => {}
  }, []); //fires off after all DOM mutations are complete;

  return (
    <section id="hero" ref={comp} className='m-0 p-0 w-screen'>
        {/* Make the parent of the lanterns with relative, overflow-hidden*/}
      <div className='relative h-screen w-screen flex flex-col justify-center items-center overflow-hidden overflow-z-auto'>
        <div className='w-screen translate-y-28'>
          <h1 className='intro relative font-extrabold text-slate-50 tracking-tighter text-center text-6xl opacity-0 lg:text-8xl DM.className z-[10]'>trisha duong. </h1>
          <h2 className='intro relative text-amber-300 tracking-tighter text-center text-4xl opacity-0 z-[10]'>software engineer</h2>
          <div className='star flex justify-center items-center'>
            <FaStar size={32} color="#fcd34d" />
          </div>
        </div>
        <div>
          <div className='star absolute left-48 top-36'>
            <FaStar size={48} color="#fef3c7" />
          </div>
          <div className='star1 absolute left-28 bottom-48'>
            <FaStar size={48} color="#fcd34d" />
          </div>
          <div className='star1 absolute right-28 bottom-0'>
            <FaStar size={48} color="#fef3c7" />
          </div>
          <div className='star absolute left-16 bottom-12'>
            <FaStar size={20} color="#fef3c7" />
          </div>
          <div className='star1 absolute lg:right-36 bottom-1/2'>
            <FaStar size={40} color="#fcd34d" />
          </div>
          <div className='star absolute right-16 top-0'>
            <FaStar size={45} color="#fcd34d" />
          </div>
        </div>
          <div className='z-20'>
            <Image 
              className='hidden mainchar lg:block lg:left-64 lg:right-1/2 lg:z-60 lg:bottom-1/4 lg:pointer-events-none' 
              src="/newtheme/char.webp"
              alt="Female silhouette in boat"
              width={300}
              height={300}
              priority
            />
            <Image 
              className='lg:hidden mainchar z-1000  pointer-events-none'
              src="/newtheme/char.webp"
              alt="Female silhouette in boat"
              width={250}
              height={250}
              priority
            />
          </div>
      </div>
    </section>
  )
}