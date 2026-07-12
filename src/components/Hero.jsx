"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// Rotating quotes shown at the base of the hero — each tied to a service MacaroniX offers
const quotes = [
  "Blending human creativity with futuristic technology, MacaroniX redefines how brands live and grow online.",
  "A website is a first impression that never sleeps — we build ones worth remembering.",
  "Great automation doesn't replace your team, it gives them their time back.",
  "The best ad isn't the loudest one, it's the one that speaks to the right person.",
  "Design is the quiet difference between a brand people notice and one they trust.",
  "Rankings follow relevance — we build sites search engines and people both believe in.",
];

export default function Hero() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

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
          {/* "Shaping the Future of" — base text plus a sweeping light overlay */}
          <span className="relative inline-flex flex-wrap justify-center gap-x-4">
            {headingWords.map((w, i) => (
              <motion.span key={i} variants={word}>
                {w}
              </motion.span>
            ))}

            {/* Sweeping glow overlay: same words, gradient-clipped, animated left-right-left */}
            <motion.span
              aria-hidden
              className="absolute inset-0 flex flex-wrap justify-center gap-x-4 pointer-events-none select-none"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, transparent 25%, rgba(255,255,255,0.85) 45%, #3ab7f0 50%, rgba(255,255,255,0.85) 55%, transparent 75%)",
                backgroundSize: "300% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                filter: "drop-shadow(0 0 14px rgba(58,183,240,0.75))",
                willChange: "background-position",
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                backgroundPosition: ["220% 0%", "-80% 0%", "220% 0%"],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 1.6 },
                backgroundPosition: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.6,
                },
              }}
            >
              {headingWords.map((w, i) => (
                <span key={i}>{w}</span>
              ))}
            </motion.span>
          </span>

          {/* "Digital Presence" — same sweeping-light treatment, offset so the two lights
              don't move in lockstep with the "Shaping the Future of" sweep above */}
          <span className="relative inline-flex">
            <motion.span variants={word} style={{ color: "#000000" }}>
              Digital Presence
            </motion.span>

            <motion.span
              aria-hidden
              className="absolute inset-0 pointer-events-none select-none"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, transparent 25%, rgba(255,255,255,0.9) 45%, #3ab7f0 50%, rgba(255,255,255,0.9) 55%, transparent 75%)",
                backgroundSize: "300% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                filter: "drop-shadow(0 0 14px rgba(58,183,240,0.75))",
                willChange: "background-position",
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                backgroundPosition: ["-80% 0%", "220% 0%", "-80% 0%"],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 3.4 },
                backgroundPosition: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3.4,
                },
              }}
            >
              Digital Presence
            </motion.span>
          </span>
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

      {/* Bottom tagline — rotating quotes, styled as a quote, cross-fading with a soft blur/slide */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="relative z-10 mt-12 px-8 sm:px-10 max-w-3xl mx-auto"
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaQuoteLeft className="mx-auto mb-3 text-white/40" size={22} />
        </motion.div>

        <div className="relative min-h-[3.5rem] sm:min-h-[4.5rem] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={quoteIndex}
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="italic font-medium text-sm sm:text-base md:text-2xl text-white/85 leading-relaxed"
            >
              {quotes[quoteIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* progress dots so the rotation feels intentional, not accidental */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {quotes.map((_, i) => (
            <button
              key={i}
              aria-label={`Show quote ${i + 1}`}
              onClick={() => setQuoteIndex(i)}
              className="relative h-1.5 rounded-full overflow-hidden bg-white/20 transition-all duration-300"
              style={{ width: i === quoteIndex ? 22 : 6 }}
            >
              {i === quoteIndex && (
                <motion.span
                  key={quoteIndex}
                  className="absolute inset-0 bg-white/90"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 4.5, ease: "linear" }}
                  style={{ originX: 0 }}
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}