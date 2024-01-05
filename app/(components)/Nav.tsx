
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {

  return (
    <header
      className="fixed top-0 flex w-full items-center justify-between bg-secondary-100 px-5 py-3"
    >
      <Link href="#hero" aria-label="Logo" className="z-50">
        <Image
          src="/logo.svg"
          alt="trish logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </Link>
      <nav className="space-x-7 text-body-3 sm:block text-white font-semibold">
        <Link href="#about" className="group relative md:inline-block">
          <span>ABOUT</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link href="#works" className="group relative md:inline-block">
          <span>PROJECTS</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full"></span>
        </Link>
        <Link
          className="button group relative hover:bg-transparent"
          href="#contact"
        >
          <span className="relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full"></span>
            <span>CONTACT</span>
          </span>
        </Link>
      </nav>
    </header>
  );
}