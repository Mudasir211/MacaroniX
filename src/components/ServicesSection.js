"use client";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaVideo,
  FaPaintBrush,
  FaChartLine,
  FaCamera,
  FaUsers,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPaintBrush size={35} style={{ color: "#3ab7f0" }} />,
    title: "Design & Branding",
    desc: "Bold visuals and identity design that define your brand.",
  },
  {
    icon: <FaUsers size={35} style={{ color: "#3ab7f0" }} />,
    title: "Social Media Management",
    desc: "Grow your presence with creative, data-driven content.",
  },
  {
    icon: <FaLaptopCode size={35} style={{ color: "#3ab7f0" }} />,
    title: "UI / UX Design",
    desc: "Sleek, user-friendly interfaces built for engagement.",
  },
  {
    icon: <FaLaptopCode size={35} style={{ color: "#3ab7f0" }} />,
    title: "Website Development",
    desc: "Fast, responsive, and conversion-focused websites.",
  },
  {
    icon: <FaChartLine size={35} style={{ color: "#3ab7f0" }} />,
    title: "Digital Marketing",
    desc: "Smart strategies that attract, engage, and convert.",
  },
  {
    icon: <FaCamera size={35} style={{ color: "#3ab7f0" }} />,
    title: "Photo & Video",
    desc: "Compelling visuals that tell your brand’s story.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-12 px-3 md:px-20 bg-[#f9f9f9] text-center text-[#000000]"
    >
      <h2 className="text-4xl font-bold mb-4" style={{ color: "#3ab7f0" }}>
        Our Expertise
      </h2>
      <p className="text-gray-600 px-6 mb-12 max-w-2xl mx-auto">
        MacaroniX — a full-service Digital Marketing agency where creativity
        meets technology. We transform ideas into powerful digital experiences.
      </p>

      {/* Flex layout for proper centering */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-8 max-w-7xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-[#ffffff] md:p-6 p-4 rounded-2xl border border-[#3ab7f0] shadow-[0_0_10px_rgba(58,183,240,0.15)] hover:shadow-[0_0_20px_rgba(58,183,240,0.5)] transition flex flex-col items-center text-center w-[45%] sm:w-[40%] md:w-[28%] lg:w-[22%]"
          >
            <div className="mb-4 flex justify-center">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
            <p className="text-gray-700 text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
