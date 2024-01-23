'use client'

import { useRef } from 'react';

import Hero2 from './(components)/Hero2';
import NavBar from './(components)/Nav';
import Hook from './(components)/Hook';
import About from './(components)/About';
import TechStack from './(components)/TechStack';
import Projects from './(components)/Projects';
import Background from './(components)/components/Background';
import ContactMe from './(components)/Contact';


export default function Home() {
  const sectionRefs = useRef<HTMLElement[]>([]); 
  const parallel = useRef(null);
  
  return (
    <main>
      <div className='relative'>
        <div className="absolute top-0 left-0 h-screen w-screen object-cover z-0 pointer-events-none" >
          <Background  />
        </div>
        <NavBar sectionRefs={sectionRefs.current}/>
        <Hero2 forwardedRef={(el) => (sectionRefs.current[0] = el)} />
        <Hook forwardedRef={(el) => (sectionRefs.current[1] = el)} />
        <About />
        {/* <TechStack /> */}
        <Projects />
        <ContactMe />
      </div>
    </main>
  )
}


