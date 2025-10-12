"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Sent Successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-20 text-white bg-[#000000] relative overflow-hidden"
    >
      {/* subtle gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0073b633]/40 to-[#3ab7f033]/40 blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3ab7f0]">
            Let’s Build Something Amazing
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Whether you’re a startup dreaming big or an established brand ready for transformation — 
            we’re here to listen, create, and help you thrive in the digital world.
            <br />Get in touch through any of the channels below or drop us a message directly.
          </p>
        </motion.div>

        {/* Main Contact Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 bg-[#0a0a0a] p-8 rounded-2xl border border-[#3ab7f0]/40 shadow-[0_0_25px_rgba(58,183,240,0.15)]"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-[#ffffff] text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#3ab7f0]"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              type="email"
              className="w-full p-3 rounded-md bg-[#ffffff] text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#3ab7f0]"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 rounded-md bg-[#ffffff] text-[#000000] focus:outline-none focus:ring-2 focus:ring-[#3ab7f0]"
              required
            />
            <button
              type="submit"
              className="mt-4 w-full bg-[#3ab7f0] text-[#000000] px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(58,183,240,0.5)] transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6 text-center md:text-left"
          >
            <h3 className="text-2xl font-semibold text-[#3ab7f0]">
              Prefer Direct Contact?
            </h3>
            <p className="text-gray-300 leading-relaxed">
              You can reach us anytime — our team loves hearing new ideas and
              bringing visions to life.
            </p>

            <div className="space-y-2">
              <p>
                📧{" "}
                <Link
                  href="mailto:info@macaronix.com"
                  className="text-[#3ab7f0] hover:underline"
                >
                  info@macaronix.com
                </Link>
              </p>
              <p>
                💬{" "}
                <Link
                  href="https://wa.me/1234567890"
                  target="_blank"
                  className="text-[#3ab7f0] hover:underline"
                >
                  Chat on WhatsApp
                </Link>
              </p>
            </div>

            <div className="flex justify-center md:justify-start space-x-5 mt-6">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="p-3 rounded-full bg-[#3ab7f0]/10 hover:bg-[#3ab7f0]/30 transition"
              >
                <FaInstagram size={20} className="text-[#3ab7f0]" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="p-3 rounded-full bg-[#3ab7f0]/10 hover:bg-[#3ab7f0]/30 transition"
              >
                <FaLinkedinIn size={20} className="text-[#3ab7f0]" />
              </Link>
              <Link
                href="mailto:info@macaronix.com"
                className="p-3 rounded-full bg-[#3ab7f0]/10 hover:bg-[#3ab7f0]/30 transition"
              >
                <FaEnvelope size={20} className="text-[#3ab7f0]" />
              </Link>
              <Link
                href="https://wa.me/1234567890"
                target="_blank"
                className="p-3 rounded-full bg-[#3ab7f0]/10 hover:bg-[#3ab7f0]/30 transition"
              >
                <FaWhatsapp size={20} className="text-[#3ab7f0]" />
              </Link>
            </div>

            <p className="text-gray-500 mt-8 italic">
              “Every collaboration begins with a conversation — let’s start
              yours today.”
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
