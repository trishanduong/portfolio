import { useRef, useLayoutEffect} from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function Hero(){
  const opacityLanterns = useRef(null);

  useLayoutEffect(() => {
    //create a gsap context to record all GSAP animations set up during context execution (for cleanup)
    const ctx = gsap.context(() => {
      //define GSAP timeline to create a sequence of animations
      const t1 = gsap.timeline();
      t1.fromTo('.opacityLantern', {opacity:0, rotate:-25},{y:'-=800',opacity:0.4, rotate:25, duration:3, repeat: -1, repeatDelay:3})
    }, [opacityLanterns]); //pass comp as context object so all animation affects children of comp component
  });

  return (
    <div ref={opacityLanterns}>
      <div className='relative'>
        <div className='opacityLantern absolute right-0 blur-sm'>
          <Image 
            src="/lantern.svg"
            alt="paper lantern 3"
            width={300}
            height={200}
            />
        </div>
        <div className='opacityLantern absolute left-[-300] blur-sm'>
          <Image 
            src="/lantern.svg"
            alt="paper lantern 3"
            width={100}
            height={200}
            />
        </div>
      </div>
      <div className='opacityLantern left-0 blur-sm'>
          <Image 
            src="/lantern.svg"
            alt="paper lantern 3"
            width={100}
            height={200}
            />
        </div>
    </div>
  )
}