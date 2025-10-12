"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      className="flex pt-24 flex-col justify-center items-center text-center min-h-screen relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(to bottom right,  #0073b659, #3ab7f059), url('/Hero.jpg')",
        color: "#ffffff",
      }}
    >
      <div className="z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-orbitron md:text-7xl font-extrabold leading-tight"
        >
          Shaping the Future of{" "}
          <span style={{ color: "#000000" }}>Digital Presence</span>
        </motion.h1>

        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90 font-medium">
          <Typewriter
            words={[
              "Web Development",
              "Graphic Design",
              "Video Editing",
              "Digital Marketing",
            ]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>

        <a
          href="#services"
          className="mt-10 inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-[#3ab7f0] bg-[#ffffff] shadow-md hover:scale-105 transition-transform"
        >
          Explore Services
        </a>
      </div>

      {/* Bottom-right tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className=" font-semibold mt-10   px-10 text-center text-sm sm:text-base md:text-2xl text-white/80  "
      >
        Blending human creativity with futuristic technology, MacaroniX redefines how brands live and grow online.
        
      </motion.p>
    </section>
  );
}
