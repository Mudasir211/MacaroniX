"use client";
import { motion } from "framer-motion";
import { FaLightbulb, FaRocket, FaUsers, FaHeart, FaGlobe } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section  style={{
        backgroundImage:
          "linear-gradient(to bottom right,  #0073b659, #3ab7f059), url('/Hero.jpg')",
        color: "#ffffff",
      }} className="relative flex flex-col items-center justify-center text-center py-52 px-6 md:px-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 text-[#3ab7f0]"
        >
          About <span className="text-white">MacaroniX</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 max-w-2xl text-lg"
        >
          Blending human creativity with futuristic technology — we redefine how
          brands live, grow, and connect online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute inset-0 bg-gradient-to-b from-[#3ab7f0]/10 via-transparent to-black pointer-events-none"
        />
      </section>

      {/* STORY SECTION */}
      <section className="py-24 px-6 md:px-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-[#3ab7f0]"
          >
            Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Born from the idea that design, strategy, and technology should not
            live in silos — MacaroniX emerged as a digital-first agency dedicated
            to creating experiences that move people and build brands. We’re a
            team of designers, developers, storytellers, and innovators who
            believe in pushing boundaries while staying true to the brand’s soul.
          </motion.p>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="py-24 px-6 md:px-20 bg-[#070707] text-center">
        <h2 className="text-4xl font-bold text-[#3ab7f0] mb-16">What We Stand For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              icon: <FaLightbulb size={40} className="text-[#3ab7f0]" />,
              title: "Innovation",
              desc: "We merge imagination with intelligence — bringing fresh ideas to life through design and code.",
            },
            {
              icon: <FaUsers size={40} className="text-[#3ab7f0]" />,
              title: "Collaboration",
              desc: "We believe in teamwork — within our crew and with our clients — because great things are built together.",
            },
            {
              icon: <FaRocket size={40} className="text-[#3ab7f0]" />,
              title: "Impact",
              desc: "Every project we craft aims to make brands grow, resonate, and leave a mark that lasts.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-[#0f0f0f] p-8 rounded-2xl border border-[#3ab7f0]/40 shadow-[0_0_20px_rgba(58,183,240,0.2)] hover:shadow-[0_0_40px_rgba(58,183,240,0.6)] transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM / CULTURE SECTION */}
      <section className="py-24 px-6 md:px-20 bg-[#0a0a0a] text-center">
        <h2 className="text-4xl font-bold text-[#3ab7f0] mb-10">Our Culture</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-16">
          At MacaroniX, we don’t just build projects — we build people, ideas,
          and long-lasting collaborations. Our studio thrives on curiosity,
          creative chaos, and the desire to constantly learn, adapt, and evolve.
        </p>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-[#101010] border border-[#3ab7f0]/30 rounded-2xl p-10 max-w-4xl mx-auto shadow-[0_0_25px_rgba(58,183,240,0.2)]"
        >
          <p className="text-xl text-gray-200 italic leading-relaxed">
            “We are not just a digital agency — we’re the fusion of art and code,
            of storytelling and systems, of dreams and data. That’s the
            MacaroniX way.”
          </p>
          <p className="text-[#3ab7f0] font-semibold mt-6">— Team MacaroniX</p>
        </motion.div>
      </section>

      {/* GLOBAL VISION */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-b from-[#0a0a0a] to-black text-center">
        <div className="max-w-5xl mx-auto">
          <FaGlobe className="text-[#3ab7f0] mx-auto mb-4" size={45} />
          <h2 className="text-4xl font-bold mb-4 text-[#3ab7f0]">Our Vision</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            To empower brands globally through digital craftsmanship — uniting
            creativity and technology to build meaningful online identities that
            inspire and engage audiences everywhere.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 md:px-20 text-center bg-[#3ab7f0] text-black">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Ready to Create Something Extraordinary?
        </motion.h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-black/80">
          Whether you’re launching a new brand, redesigning your digital presence,
          or scaling your online business — MacaroniX is your creative partner.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-black text-[#3ab7f0] px-8 py-4 rounded-full font-semibold hover:bg-[#111] transition"
        >
          Let’s Talk
        </motion.a>
      </section>
    </main>
  );
}
