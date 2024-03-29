
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type NavBarProps = {
  openModal: () => void;
};

const NavBar: React.FC<NavBarProps> = ({ openModal }) => {
  
  const nav = useRef(null);
  const logo = useRef(null);

  return (
    <header
      className="fixed flex w-full items-center justify-between bg-secondary-100 px-5 py-3 z-50 bg-black bg-opacity-20 "
      ref={nav}
    >
      <Link href="#hero" aria-label="Logo" className="z-50 ">
        <Image
          ref={logo}
          src="/logo.svg"
          alt="trish logo"
          className="invert"
          width={100}
          height={24}
          priority
        />
      </Link>
      <nav className="space-x-7 text-body-3 sm:block text-white font-semibold">
        <Link href="#about" className="hidden group relative hover:text-slate-300  md:inline-block">
          <span>ABOUT</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link href="#projects" className="hidden group relative hover:text-slate-300 md:inline-block">
          <span>PROJECTS</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <button className="hidden group relative hover:text-slate-300 md:inline-block"  onClick={ openModal }>
          <span>RESUME</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </button>
        <Link
          className="group relative p-3 bg-slate-800 rounded-full hover:bg-slate-600 hover:text-slate-900"
          href="#contactme"
        >
          <span>CONTACT</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;