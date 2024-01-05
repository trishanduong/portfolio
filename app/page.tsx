'use client'

import { useRef, useLayoutEffect} from 'react';

import gsap from 'gsap';

import Image from 'next/image';
import NavBar from './(components)/Nav';
import Hero from './(components)/Hero';

export default function Home() {
  const comp = useRef(null) //reference for the root level element
  const driftyLanterns = useRef(null);
  const sectionRefs = useRef([]); 

  // useLayoutEffect(() => {
  //   //create a gsap context to record all GSAP animations set up during context execution (for cleanup)
  //   const ctx = gsap.context(() => {
  //     //define GSAP timeline to create a sequence of animations
  //     const t1 = gsap.timeline();
  //     t1
  //       .to(['.driftyLantern'], {
  //         y:"-=400",
  //         rotate:-25,
  //         opacity: 0,
  //         duration:3,
  //         stagger:0.3,
  //       })
  //       .fromTo("#intro",{scale:1, opacity:0},{y:'-=50', opacity:1, duration:0.8})
  //       // .fromTo('.opacityLantern', {opacity:0, duration:0.3,},{opacity:1, duration:2, repeat: -1, yoyo:true, repeatDelay:0.5})
  //   }, [comp, driftyLanterns]); //pass comp as context object so all animation affects children of comp component

  //   //when the effect is unmounted/cleaned, revert the animation set up by GSAP context -> allow animation to not be persisted
  //   return () => {}
  // }, []); //fires off after all DOM mutations are complete

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-950 bg-[url('/starry.png')]">
      <NavBar />
      {/* Make the parent of the lanterns with relative*/}
      <div ref={comp} className='relative flex justify-center flex-col'>
        <div id="intro">
          <h1 id="name" className='font-extrabold text-amber-400 text-center text-9xl z-90 DM.className'>Trisha Duong</h1>
          <h2 className='text-stone-600 text-center text-4xl'>Software Engineer.</h2>
        </div>
        {/* Takes the lanterns out of the normal document flow and positions them relative to the nearest parent with a relative position. */}
        <div ref={driftyLanterns} className='relative w-full'>
          <div className='driftyLantern absolute bottom-0 left-80 transform z-0'>
              <Image 
              src="/lantern.svg"
              alt="paper lantern 1"
              width={150}
              height={200}
              />
          </div>
          <div className='driftyLantern absolute left-0 z-0'>
              <Image 
                  src="/lantern.svg"
                  alt="paper lantern 2"
                  width={300}
                  height={200}
              />
          </div>
          <div className='driftyLantern absolute bottom-0 z-0'>
            <Image 
              src="/lantern.svg"
              alt="paper lantern 3"
              width={100}
              height={200}
            />
          </div>
          {/* <Hero /> */}
        </div>
      </div>
    </main>
  )
}
