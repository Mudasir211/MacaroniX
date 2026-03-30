"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/90 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/Logo.png" alt="MacaroniX Logo" width={50} height={40} />
          <span className="font-bold text-2xl font-orbitron text-black">
            Macaroni <span className="text-[#3ab7f0]">X</span>
          </span>
        </Link>

        <div className="hidden md:flex gap-8 font-orbitron font-medium text-[#000000]">
            <Link className="hover:text-[#3ab7f0]" href="/">Home</Link>
          <Link href="/about" className="hover:text-[#3ab7f0]">About Us</Link>
          <Link href="/#services" className="hover:text-[#3ab7f0]">Services</Link>
          <Link href="/#portfolio" className="hover:text-[#3ab7f0]">Portfolio</Link>
          <Link href="/contact" className="hover:text-[#3ab7f0]">Contact Us</Link>
        </div>

        <div className="md:hidden text-[#000000]" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white font-orbitron font-bold flex flex-col px-6  [&>*]:border-b  [&>*]:border-[#3ab7f0] py-4 gap-4 text-[#000000]">
          <Link className="hover:text-[#3ab7f0]" href="/">Home</Link>
          <Link href="/about" className="hover:text-[#3ab7f0]">About Us</Link>
          <Link href="/#services" className="hover:text-[#3ab7f0]">Services</Link>
          <Link href="/#portfolio" className="hover:text-[#3ab7f0]">Portfolio</Link>
          <Link href="/contact" className="hover:text-[#3ab7f0]">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
