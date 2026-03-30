import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-white border-t border-black">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-center md:text-left">
        {/* About Section */}
        <div className="px-8 md:px-12 py-16 bg-white text-black">
          <Link href="/" className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <Image src="/Logo.png" alt="MacaroniX Logo" width={50} height={40} />
            <span className="font-bold text-2xl font-orbitron text-black">
              Macaroni<span className="text-[#3ab7f0]">X</span>
            </span>
          </Link>
          <p className="leading-relaxed text-gray-700">
            Blending human creativity with futuristic technology, we redefine how
            brands live, grow, and thrive in the digital universe.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="px-8 md:px-12 py-16 bg-black text-white">
          <h4 className="text-xl font-semibold mb-4" style={{ color: "#3ab7f0" }}>
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/" className="hover:text-[#3ab7f0] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-[#3ab7f0] transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#3ab7f0] transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#3ab7f0] transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social Section */}
        <div className="px-8 md:px-12 py-16 text-black" style={{ backgroundColor: "#3ab7f0" }}>
          <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
          <p className="text-gray-800">info@macaronix.com</p>
          <p className="text-gray-800 mb-4">+1 (234) 567-8901</p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="mx-auto"
        style={{
          height: "1px",
          background: "black",
          width: "90%",
        }}
      />

      {/* Bottom Bar */}
      <div
        className="py-6 text-center text-sm tracking-wide"
        style={{
         background:"#ffffff",
          color:"black",
          
        }}
      >
        © {new Date().getFullYear()} MacaroniX — Crafted for Digital Excellence 
      </div>
    </footer>
  );
}