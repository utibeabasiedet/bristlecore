"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from '../public/assets/BCORE light.png'
// import Logo2 from '../public/assets/BCORE dark.png'
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white h-[11vh] shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className=" hidden md:block ">
          <span className="text-2xl font-bold ">
            <Image src={Logo} height='150' width={200} alt='img' />
          </span>
        </Link>
        <Link href="/" className="md:hidden ">
          <span className="text-2xl font-bold ">
            <Image src={Logo} height='90' width={130} alt='img' />
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-primary">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-primary">About</Link>
          <Link href="/services" className="text-gray-700 hover:text-primary">Services</Link>
          <Link href="/events" className="text-gray-700 hover:text-primary">Events</Link>
          <Link href="/projects" className="text-gray-700 hover:text-primary">Projects</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[11vh] w-full bg-white border-t border-gray-200">
          <div className="flex flex-col p-4 space-y-4">
            <Link href="/" className="text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" className="text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/events" className="text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>Events</Link>
            <Link href="/projects" className="text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>Projects</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
