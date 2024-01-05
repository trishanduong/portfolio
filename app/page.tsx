'use client'

import { useRef } from 'react';

import Image from 'next/image';
import NavBar from './(components)/Nav';

export default function Home() {
  const sectionRefs = useRef([]); 

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-sky-950">
      <NavBar />
      {/* Make the parent of the lanterns with relative*/}
      <div className='relative flex justify-center flex-col'>
        <h1 className='font-extrabold text-sky-100 text-center text-9xl z-10 custom-gradient'>Trisha Duong</h1>
        <h2 className='text-stone-600 text-center text-4xl'>Software Engineer.</h2>
        {/* Takes the lanterns out of the normal document flow and positions them relative to the nearest parent with a relative position. */}
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'>
          <Image 
          src="/lantern.svg"
          alt="paper lantern 1"
          width={150}
          height={200}
          />
        </div>
      </div>
      <div className='absolute left-0 z-0'>
        <Image 
            src="/lantern.svg"
            alt="paper lantern 2"
            width={300}
            height={200}
        />
      </div>
      <div className='absolute bottom-32 right-0 z-0'>
        <Image 
          src="/lantern.svg"
          alt="paper lantern 3"
          width={100}
          height={200}
        />
      </div>
      <div className='absolute bottom-32 left-0 z-0 blur-sm'>
          <Image 
            src="/lantern.svg"
            alt="paper lantern 4"
            width={100}
            height={200}
          />
      </div>
    </main>
  )
}
