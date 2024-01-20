'use client';

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form"
import toast from 'react-hot-toast';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";


const ContactMe = () => {
  const {
    register,
    handleSubmit,
    watch,
    
    formState: { errors },
  } = useForm<FieldValues>();
  const [success, setSuccess] = useState(false);
  const heading = useRef(null);
  const body = useRef(null);
  const contactSection = useRef(null);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: contactSection.current,
      start:"top 300px",

      animation: gsap
        .timeline()
        .to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0)
        .to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();

  }, [contactSection])

  const onSubmit: SubmitHandler<FieldValues>= async (data) => {
    const formData = new FormData();

    // Convert data object to FormData
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over")
        throw new Error(`response status: ${response.status}`);
      };
      toast.success('Thanks for reaching out. I will get back to you as soon as possible! 😁');
      setSuccess(true);
    } catch (err) {
        console.error(err);
        toast.error('Something went wrong, please try again!');

      };
  }

  return (
    <section ref={contactSection} id="contactme"  aria-label="contact me" >
      <div className="relative">
        <h1 ref={heading} className="text-center text-7xl font-semibold tracking-tight text-amber-400 pt-10 opacity-0" >Contact Me</h1>
        <div ref={body} className="p-24 md:p-12 opacity-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-3">
                <h1 className="text-4xl font-bold mb-4 DM.className text-slate-500 tracking-tight">Got a question or proposal, or want to say hello?</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <input id="form-name" {...register("form-name")} type="text" placeholder="Your name" className="w-full p-2 text-xl border-gray-300 peer block text-white appearance-none border-0 border-b bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0" />
                  
                  <input id="form-email" {...register("form-email")} type="email" placeholder="Your email" className="w-full p-2 text-xl border-gray-300 peer block text-white appearance-none border-0 border-b bg-transparent px-0 py-2.5 focus:outline-none ring-slate-500 focus:ring-0" />
                  
                  <textarea id="form-message" {...register("form-message")} placeholder="Your message" className="w-full p-2 text-xl border-gray-300 peer block text-white appearance-none border-0 border-b bg-transparent px-0 py-2.5 focus:outline-none focus:ring-0" rows={4}></textarea>
                <button type="submit" className="bg-slate-800 text-slate-200 py-2 px-4 rounded-full text-xl hover:bg-slate-700">Send Message</button>
                { success &&
                (<div className="text-slate-100 font-medium text-xl">{`Thanks for reaching out. I will get back to you as soon as possible! 😁`} </div>)}
              </form>
              </div>
              
              {/* Right Section for Contact Details and Links */}
              <div className="">
                <h2 className="text-2xl font-bold mb-4 text-slate-500 ">Email</h2>
                <p className="mb-4 text-xl text-slate-300">trishanduong@gmail.com</p>
                <h2 className="text-2xl font-bold mb-4 text-slate-500 ">My Digital Spaces</h2>
                <ul className="space-y-2 text-slate-300 text-xl">
                  <li className="p-1">         
                    <Link href="https://github.com/trishanduong">
                      <div className="flex ">
                        <IoLogoGithub size={24} className="m-1" />
                        <p>Github</p>
                      </div>
                      </Link>
                  </li>
                  <li className="p-1">
                    <Link href="https://www.linkedin.com/in/trishaduong/">
                      <div className="flex">
                        <IoLogoLinkedin size={24} className="m-1" />
                        <p>Linkedin</p>
                      </div>
                    </Link>
                  </li>
                </ul>
                <div className="mt-6">
                  <h2 className="text-2xl font-bold mb-4 text-slate-500 ">Location</h2>
                  <p className="text-slate-300 text-xl">Los Angeles, California</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
};

export default ContactMe;