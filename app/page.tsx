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

  useLayoutEffect(() => {
    //create a gsap context to record all GSAP animations set up during context execution (for cleanup)
    const ctx = gsap.context(() => {
      //define GSAP timeline to create a sequence of animations
      const t1 = gsap.timeline();
      t1
        .fromTo(".intro",{scale:1, opacity:0},{y:'-=100', opacity:1, duration:0.8, stagger:0.3})
        .to(['.driftyLantern'], {
          y:"-=400",
          rotate:25,
          opacity: 0,
          duration:3,
          stagger:0.3,
        })
        .to('.moon', {rotate:45, repeat:-1, yoyo:true, duration:5})
    }, [comp, driftyLanterns]); //pass comp as context object so all animation affects children of comp component

    //when the effect is unmounted/cleaned, revert the animation set up by GSAP context -> allow animation to not be persisted
    return () => {}
  }, []); //fires off after all DOM mutations are complete

  return (
    <main className="bg-slate-950">
      <NavBar />
      <div ref={comp} className='m-0 p-0'>
        {/* Make the parent of the lanterns with relative*/}
        <div className='relative h-screen w-screen overflow-hidden flex flex-col justify-center items-center'>
          <div>
            <h1 className='intro relative font-extrabold text-slate-50 tracking-tighter text-center text-6xl lg:text-8xl DM.className z-[10]'>trisha duong. </h1>
            <h2 className='intro relative text-amber-400 tracking-tighter text-center text-4xl z-[10]'>software engineer</h2>
          </div>
          <Image 
            className="absolute top-0 left-0 h-screen w-screen object-cover z-0"
            src="/landing/bg.png"
            width={1920}
            height={1080}
            alt="starry background"
          />
          <Image 
            className='absolute left-0 top-96 h-screen w-screen object-cover lg:object-fill z-10'
            src="/landing/water.png"
            alt="Water"
            width={1920}
            height={1080}
          />
          <Image 
            className='absolute left-0 h-screen w-screen object-cover lg:object-fill z-10 top-40'
            src="/landing/char1.png"
            alt="Female silhouette in boat"
            width={1000}
            height={600}
          />
          {/* Takes the lanterns out of the normal document flow and positions them relative to the nearest parent with a relative position. */}
          <div ref={driftyLanterns} className='relative w-full'>
            <div className="moon absolute left-0 top-[-48] pb-48 flex justify-center items-center lg:justify-around ">
              <Image src="/landing/moon.png" width={500} height={1080} alt="Rotating moon" />
            </div>
            <div className='driftyLantern absolute right-0'>
              <div className='driftyLantern absolute bottom-0 left-0 transform z-0'>
                  <Image 
                  src="/lantern.svg"
                  alt="paper lantern 1"
                  width={150}
                  height={200}
                  />
              </div>
              <Image 
                src="/lantern.svg"
                alt="paper lantern 2"
                width={50}
                height={200}
              />
            </div>
            <div className='driftyLantern absolute left-36 bottom-0 md:left-56 lg:bottom-20 item-center z-0 lg:inset-x-1/3'>
              <Image 
                src="/lantern.svg"
                alt="paper lantern 3"
                width={100}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
