"use client";
import { motion } from "framer-motion";
import { FaPalette, FaVideo, FaRocket, FaLaptopCode } from "react-icons/fa";

const pillars = [
  {
    icon: <FaPalette size={40} className="text-[#3ab7f0]" />,
    title: "CREATIVE",
    subtitle: "Where ideas become VISUAL",
    desc: "We shape imagination into design that speaks your brand’s language.",
  },
  {
    icon: <FaVideo size={40} className="text-[#3ab7f0]" />,
    title: "MEDIA",
    subtitle: "Where stories come ALIVE",
    desc: "From reels to brand films, we turn visuals into experiences that engage.",
  },
  {
    icon: <FaRocket size={40} className="text-[#3ab7f0]" />,
    title: "DIGITAL",
    subtitle: "Where brands are ELEVATED",
    desc: "We fuel growth with data-driven marketing and innovative campaigns.",
  },
  {
    icon: <FaLaptopCode size={40} className="text-[#3ab7f0]" />,
    title: "TECH",
    subtitle: "Where ideas are CODED",
    desc: "We craft modern, high-performing web experiences that convert.",
  },
];

export default function PillarsSection() {
  return (
    <section
      id="pillars"
      className="py-24 px-6 md:px-20 text-center text-white"
      style={{ backgroundColor: "#000000" }}
    >
      <h2 className="text-4xl font-bold mb-4 text-[#3ab7f0]">Pillars of MacaroniX</h2>
      <p className="text-gray-300 mb-16 max-w-2xl mx-auto">
        The foundation of our creativity and innovation — every idea, strategy, and
        design we create stems from these four core pillars.
      </p>

      <div className="flex flex-wrap justify-center gap-10">
        {pillars.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] hover:bg-[#101010] transition-all border border-[#3ab7f0]/40 rounded-2xl p-8 w-[90%] sm:w-[45%] md:w-[40%] lg:w-[22%] shadow-[0_0_20px_rgba(58,183,240,0.2)] hover:shadow-[0_0_35px_rgba(58,183,240,0.6)]"
          >
            <div className="flex justify-center mb-4">{p.icon}</div>
            <h3 className="text-2xl font-semibold tracking-wide mb-2">{p.title}</h3>
            <p className="text-[#3ab7f0] font-semibold mb-3">{p.subtitle}</p>
            <p className="text-gray-400 text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
