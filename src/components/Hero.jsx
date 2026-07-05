"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaQuoteLeft } from "react-icons/fa";

const headingWords = ["Shaping", "the", "Future", "of"];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const word = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="flex pt-24 flex-col justify-center items-center text-center min-h-screen relative overflow-hidden text-white">
      {/* Animated background image — slow continuous Ken Burns zoom/pan (transform-only, GPU friendly) */}
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/Hero.jpg')",
          willChange: "transform",
        }}
        animate={{
          scale: [1, 1.1, 1.05, 1],
          x: [0, -12, 8, 0],
          y: [0, 8, -8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Constant animated gradient wash — moved via transform instead of backgroundPosition
          (backgroundPosition animation repaints every frame and causes mobile flicker) */}
      <motion.div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background:
            "linear-gradient(120deg, #0073b659, #3ab7f059, #00c6ff33, #0073b659)",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        animate={{
          x: ["0%", "-15%", "0%"],
          y: ["0%", "-10%", "0%"],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating gradient orbs — background ambience (lighter blur on mobile) */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-24 w-56 h-56 sm:w-96 sm:h-96 rounded-full blur-2xl sm:blur-3xl"
        style={{
          background: "radial-gradient(circle, #3ab7f0aa, transparent 70%)",
          willChange: "transform",
        }}
        animate={{
          x: [0, 30, -15, 0],
          y: [0, 20, -20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -right-24 w-64 h-64 sm:w-[28rem] sm:h-[28rem] rounded-full blur-2xl sm:blur-3xl"
        style={{
          background: "radial-gradient(circle, #0073b6aa, transparent 70%)",
          willChange: "transform",
        }}
        animate={{
          x: [0, -20, 15, 0],
          y: [0, -15, 15, 0],
          scale: [1, 1.08, 1, 1],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle floating particles — fewer on mobile */}
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          aria-hidden
          className={`absolute rounded-full bg-white/40 ${
            i >= 6 ? "hidden sm:block" : ""
          }`}
          style={{
            width: `${4 + (i % 3) * 2}px`,
            height: `${4 + (i % 3) * 2}px`,
            left: `${(i * 9 + 5) % 100}%`,
            top: `${(i * 17 + 10) % 100}%`,
            willChange: "transform",
          }}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="z-10 px-6">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl font-orbitron md:text-7xl font-extrabold leading-tight flex flex-wrap justify-center gap-x-4"
        >
          {headingWords.map((w, i) => (
            <motion.span key={i} variants={word}>
              {w}
            </motion.span>
          ))}
          <motion.span variants={word} style={{ color: "#000000" }}>
            Digital Presence
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90 font-medium"
        >
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
        </motion.p>

        <motion.a
          href="#services"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-[#3ab7f0] bg-[#ffffff] relative"
        >
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(58,183,240,0.45)",
                "0 0 0 14px rgba(58,183,240,0)",
              ],
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
          <span className="relative">Explore Services</span>
        </motion.a>
      </div>

      {/* Bottom tagline styled as a quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative z-10 mt-12 px-8 sm:px-10 max-w-3xl mx-auto"
      >
        <FaQuoteLeft
          className="mx-auto mb-3 text-white/40"
          size={22}
        />
        <p className="italic font-medium text-sm sm:text-base md:text-2xl text-white/85 leading-relaxed">
          Blending human creativity with futuristic technology, MacaroniX
          redefines how brands live and grow online.
        </p>
      </motion.div>
    </section>
  );
}