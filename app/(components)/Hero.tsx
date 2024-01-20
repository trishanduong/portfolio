import { useRef, useLayoutEffect, useEffect} from 'react';
import Image from 'next/image';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Background from './components/Background';

export default function Hero({ forwardedRef }:{
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
      
      t1
        //.to('.driftingLantern1', {y:"-=400", rotate:25, opacity: 0})
        .fromTo(".intro",{scale:1, opacity:0},{y:'-=50', opacity:1, duration:0.4, stagger:0.3})
        // .to(['.driftyLantern'], {
        //   y:"-=400",
        //   rotate:25,
        //   opacity: 0,
        //   duration:3,
        //   stagger:0.3,
        // })
        // .to('.moon', {rotate:45, repeat:-1, yoyo:true, duration:5})
      
        gsap.to(".mainchar", {x:"+=50", repeat:-1, yoyo:true, duration:2})
    }, [comp, driftyLanterns]); //pass comp as context object so all animation affects children of comp component

    //when the effect is unmounted/cleaned, revert the animation set up by GSAP context -> allow animation to not be persisted
    return () => {}
  }, []); //fires off after all DOM mutations are complete;

  return (
    <div id="hero" ref={comp} className='m-0 p-0 w-screen'>
        {/* Make the parent of the lanterns with relative, overflow-hidden*/}
      <div className='relative h-screen w-screen flex flex-col justify-center items-center overflow-hidden overflow-z-auto'>
        <div className='w-screen'>
          <h1 className='intro relative font-extrabold text-slate-50 tracking-tighter text-center text-6xl lg:text-8xl DM.className z-[10]'>trisha duong. </h1>
          <h2 className='intro relative text-amber-400 tracking-tighter text-center text-4xl z-[10]'>software engineer</h2>
        </div>
        <div>
        {/* <div className="absolute top-0 left-0 h-screen w-screen object-cover z-0 pointer-events-none" >
          <Background  />
        </div> */}
        </div>
          <Image 
            className='absolute left-0 top-36 h-screen w-screen object-cover lg:object-fill z-10 pointer-events-none'
            src="/landing/water1.png"
            alt="Water"
            width={1920}
            height={1080}
          />
          <Image 
            ref={scroll}
            className='moon absolute bottom-0 lg:top-96'
            src="/landing/moon.png" width={500} height={1080} alt="Rotating moon" />
          <div className='z-20'>
            <Image 
              className='hidden mainchar lg:block lg:left-64 lg:right-1/2 lg:z-60 lg:bottom-1/4 lg:pointer-events-none' //h-screen w-screen object-cover lg:object-fill
              src="/landing/character1.png"
              alt="Female silhouette in boat"
              width={300}
              height={200}
              priority
            />
            <Image 
              className='lg:hidden mainchar absolute top-4/5 right-1/2 z-1000  pointer-events-none' //h-screen w-screen object-cover lg:object-fill
              src="/landing/character1.png"
              alt="Female silhouette in boat"
              width={200}
              height={200}
              priority
            />
          </div>
          {/* <Image src="/landing/mainlantern.png" className='driftingLantern1 absolute z-30 top-64' width={1000} height={1080} alt="primary lantern floating over trisha duong" /> */}
          {/* <h1 z-20 className='absolute text-slate-300 z-40 DM.className tracking-tighter bottom-0 '> {`I create, design, and code projects with intention. I'm committed to crafting user experiences and delivering full stack applications from scratch to production.`}</h1> */}
          {/* Takes the lanterns out of the normal document flow and positions them relative to the nearest parent with a relative position. */}
          {/* <div ref={driftyLanterns} className='relative w-full pointer-events-none'>
            <div className='driftyLantern absolute right-0'>
              <div className='driftyLantern absolute bottom-0 left-0 transform z-0 blur'>
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
            <div className='driftyLantern absolute left-36 bottom-0 lg:bottom-20 item-center z-0 lg:z-30 lg:right-1/2'>
              <Image 
                src="/lantern.svg"
                alt="paper lantern 4"
                width={100}
                height={200}
              />
            </div>
          </div> */}
      </div>
    </div>
  )
}