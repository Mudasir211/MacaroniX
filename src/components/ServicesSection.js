"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaChartLine,
  FaUsers,
  FaArrowRight,
  FaRobot,
  FaBullhorn,
  FaMagic,
  FaDatabase,
  FaMobileAlt,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

const services = [
  // ── TOP 4 ──
  {
    icon: <FaLaptopCode size={26} />,
    title: "Web Dev & Design",
    desc: "Fast, responsive, and conversion-focused websites, designed to look as good as they perform.",
    href: "/services/web",
  },
  {
    icon: <FaUsers size={26} />,
    title: "Social Media Marketing",
    desc: "Grow your presence with creative, data-driven content that keeps people coming back.",
    href: "/services/social",
  },
  {
    icon: <FaRobot size={26} />,
    title: "AI Automation",
    desc: "Custom automations and AI-powered workflows that cut manual work and free your team.",
    href: "/services/ai-automation",
  },
  {
    icon: <FaBullhorn size={26} />,
    title: "Ads Management",
    desc: "Paid campaigns across every major platform, focused on ROI, not vanity metrics.",
    href: "/services/ads",
  },

  // ── REST ──
  {
    icon: <FaMagic size={26} />,
    title: "Agentic AI Solutions",
    desc: "Custom AI agents that plan, reason, and execute multi-step tasks autonomously.",
    href: "/services/agentic-ai",
  },
  {
    icon: <FaDatabase size={26} />,
    title: "Custom Software & ERP",
    desc: "Custom ERP and internal tools built around your exact workflow, not a template.",
    href: "/services/erp",
  },
  {
    icon: <FaMobileAlt size={26} />,
    title: "Mobile App Development",
    desc: "Native and cross-platform apps built for performance, retention, and real results.",
    href: "/services/mobile",
  },
  {
    icon: <FaShoppingCart size={26} />,
    title: "E-Commerce",
    desc: "High-converting online stores with seamless checkout and smart product discovery.",
    href: "/services/ecommerce",
  },
  {
    icon: <FaChartLine size={26} />,
    title: "Digital Marketing",
    desc: "Full-funnel strategies across SEO, email, and analytics built to generate real ROI.",
    href: "/services/digital-marketing",
  },
  {
    icon: <FaLaptopCode size={26} />,
    title: "UI / UX Design",
    desc: "Sleek, user-friendly interfaces engineered for engagement and ease.",
    href: "/services/uiux",
  },
  {
    icon: <FaPaintBrush size={26} />,
    title: "Graphic Design",
    desc: "Bold, on-brand graphics for social, print, and digital that grab attention.",
    href: "/services/graphic",
  },
  {
    icon: <FaSearch size={26} />,
    title: "SEO Services",
    desc: "Technical, on-page, and content SEO that builds sustainable organic traffic.",
    href: "/services/seo",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const cardWidthClasses = "w-full sm:w-[45%] md:w-[28%] lg:w-[22%]";

function ServiceCard({ s, variants }) {
  return (
    <motion.div variants={variants} className={cardWidthClasses}>
      <Link href={s.href} className="block h-full group">
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative h-full flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-white border border-[#e6f4fc] shadow-[0_4px_20px_rgba(58,183,240,0.08)] overflow-hidden"
        >
          {/* gradient accent bar that grows on hover */}
          <span
            className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-2/3 rounded-full transition-all duration-500 ease-out"
            style={{
              background: "linear-gradient(90deg, #0073b6, #3ab7f0)",
            }}
          />

          {/* soft glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(58,183,240,0.10), transparent 70%)",
            }}
          />

          {/* icon badge */}
          <div
            className="relative mb-5 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{
              background: "linear-gradient(135deg, #0073b6, #3ab7f0)",
            }}
          >
            {s.icon}
          </div>

          <h3 className="relative text-lg md:text-xl font-bold mb-2 text-[#0b1b2b]">
            {s.title}
          </h3>
          <p className="relative text-gray-600 text-sm leading-relaxed mb-5">
            {s.desc}
          </p>

          {/* Learn more — reveals on hover */}
          <div className="relative mt-auto flex items-center gap-2 text-sm font-semibold text-[#0073b6] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            Learn more
            <FaArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const extraServices = services.slice(4);

  return (
    <section
      id="services"
      className="relative py-20 md:py-28 px-3 md:px-20 bg-[#f9fbfd] text-center text-[#000000] overflow-hidden"
    >
      {/* decorative background blobs, echoing the hero */}
      <div
        aria-hidden
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #3ab7f0, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #0073b6, transparent 70%)",
        }}
      />
      {/* subtle dot-grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0073b6 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase"
          style={{
            color: "#0073b6",
            background: "rgba(58,183,240,0.1)",
          }}
        >
          What We Do
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0b1b2b]"
        >
          Our <span style={{ color: "#3ab7f0" }}>Expertise</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-gray-600 px-6 mb-14 max-w-2xl mx-auto text-base md:text-lg"
        >
          MacaroniX — a full-service digital agency where creativity meets
          technology, built to move your brand forward.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {services.slice(0, 4).map((s, i) => (
            <ServiceCard key={i} s={s} variants={cardVariants} />
          ))}

          <AnimatePresence>
            {showAll &&
              extraServices.map((s, i) => (
                <motion.div
                  key={i + 4}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  className={cardWidthClasses}
                >
                  <Link href={s.href} className="block h-full group">
                    <div className="relative h-full flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-white border border-[#e6f4fc] shadow-[0_4px_20px_rgba(58,183,240,0.08)] overflow-hidden">
                      <span
                        className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-2/3 rounded-full transition-all duration-500 ease-out"
                        style={{
                          background:
                            "linear-gradient(90deg, #0073b6, #3ab7f0)",
                        }}
                      />
                      <div
                        className="relative mb-5 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          background:
                            "linear-gradient(135deg, #0073b6, #3ab7f0)",
                        }}
                      >
                        {s.icon}
                      </div>
                      <h3 className="relative text-lg md:text-xl font-bold mb-2 text-[#0b1b2b]">
                        {s.title}
                      </h3>
                      <p className="relative text-gray-600 text-sm leading-relaxed mb-5">
                        {s.desc}
                      </p>
                      <div className="relative mt-auto flex items-center gap-2 text-sm font-semibold text-[#0073b6] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Learn more
                        <FaArrowRight
                          size={12}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

        <motion.button
          onClick={() => setShowAll((prev) => !prev)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 inline-flex items-center gap-2 px-9 py-3.5 rounded-full font-bold text-white shadow-lg hover:shadow-xl transition-shadow"
          style={{
            background: "linear-gradient(135deg, #0073b6, #3ab7f0)",
          }}
        >
          {showAll ? "Show Less" : "Show All Services"}
        </motion.button>
      </div>
    </section>
  );
}
