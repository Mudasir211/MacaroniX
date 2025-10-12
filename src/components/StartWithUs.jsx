"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaComments, FaHandshake, FaRocket } from "react-icons/fa";
import Link from "next/link";

export default function StartWithUs() {
  return (
    <section className="py-24 px-6 md:px-20 bg-[#0a0a0a] text-center text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-6 text-[#3ab7f0]"
      >
        Start Your Journey With MacaroniX
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-gray-300 max-w-3xl mx-auto mb-12 text-lg leading-relaxed"
      >
        Every big idea starts with a conversation. Whether you’re building a
        brand, revamping your online presence, or seeking a creative growth
        partner — MacaroniX makes it effortless to begin. Connect, collaborate,
        and watch your vision come alive.
      </motion.p>

      {/* Step Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {[
          {
            icon: <FaEnvelope size={35} className="text-[#3ab7f0]" />,
            title: "Reach Out",
            desc: "Email us, WhatsApp us, or slide into our DMs. We’re always online — ready to listen and guide you.",
          },
          {
            icon: <FaComments size={35} className="text-[#3ab7f0]" />,
            title: "Let’s Talk",
            desc: "We’ll schedule a discovery chat to understand your goals, challenges, and aspirations.",
          },
          {
            icon: <FaHandshake size={35} className="text-[#3ab7f0]" />,
            title: "Plan & Proposal",
            desc: "Our team crafts a custom roadmap — tailored solutions that align with your brand and budget.",
          },
          {
            icon: <FaRocket size={35} className="text-[#3ab7f0]" />,
            title: "Launch & Grow",
            desc: "From strategy to execution, we bring your project to life — and scale it beyond expectations.",
          },
        ].map((step, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="bg-[#101010] p-8 rounded-2xl border border-[#3ab7f0]/30 shadow-[0_0_20px_rgba(58,183,240,0.15)] hover:shadow-[0_0_40px_rgba(58,183,240,0.4)] transition"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#3ab7f0]">{step.title}</h3>
            <p className="text-gray-400 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 max-w-3xl mx-auto text-gray-300 text-base leading-relaxed"
      >
        <p>
          You can email us at{" "}
          <Link
            href="mailto:info@macaronix.com"
            className="text-[#3ab7f0] hover:underline"
          >
            info@macaronix.com
          </Link>{" "}
          or reach us directly on{" "}
          <Link
            href="https://wa.me/1234567890"
            target="_blank"
            className="text-[#3ab7f0] hover:underline"
          >
            WhatsApp
          </Link>
          . You can also message us through our website contact form or DM us on
          social media — whatever feels easiest.
        </p>

        <p className="mt-4 text-gray-400 italic">
          We keep things simple, human, and transparent — because great projects
          begin with great communication.
        </p>
      </motion.div>
    </section>
  );
}
