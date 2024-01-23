'use client'

import { useRef, useState } from 'react';

import Hero2 from './(components)/Hero2';
import NavBar from './(components)/Nav';
import Hook from './(components)/Hook';
import About from './(components)/About';
import TechStack from './(components)/TechStack';
import Projects from './(components)/Projects';
import Background from './(components)/components/Background';
import ContactMe from './(components)/Contact';
import ResumeModal from './(components)/components/Resume';

export default function Home() {
  const sectionRefs = useRef<HTMLElement[]>([]); 
  const [isModalOpen, setModalOpen] = useState(false);
  const resumeFileUrl = '/Jan24Resume.pdf';
  
  return (
    <main>
      <div className='relative'>
        <div className="absolute top-0 left-0 h-screen w-screen object-cover z-0 pointer-events-none" >
          <Background  />
        </div>
        <NavBar openModal={() => setModalOpen(true)} />
        <Hero2 forwardedRef={(el) => (sectionRefs.current[0] = el)} />
        <Hook forwardedRef={(el) => (sectionRefs.current[1] = el)} />
        <About />
        {/* <TechStack /> */}
        <Projects />
        <ContactMe openModal={() => setModalOpen(true)} />
        <ResumeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} fileUrl={resumeFileUrl} />
      </div>
    </main>
  )
}


