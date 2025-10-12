"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message Sent Successfully 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-white pb-0.5 pt-16 text-black">
      {/* Hero */}
      <div style={{
        backgroundImage:
          "linear-gradient(to bottom right,  #0073b659, #3ab7f059), url('/Hero.jpg')",
        color: "#ffffff",
      }} className="py-20 px-6 md:px-20 text-center bg-gradient-to-r from-[#3ab7f0] to-[#0073b6] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Let’s Build Something Extraordinary
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-white/90"
        >
          Whether you’re a startup with a big idea or an established brand
          looking to elevate your digital game — we’d love to hear from you.
        </motion.p>
      </div>

      {/* Contact Methods */}
      <div className="py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: <FaEnvelope size={30} />,
              title: "Email Us",
              desc: "For general inquiries and collaborations.",
              link: "mailto:hello@macaronix.com",
              label: "hello@macaronix.com",
            },
            {
              icon: <FaWhatsapp size={30} />,
              title: "Chat on WhatsApp",
              desc: "Quick responses, real conversations.",
              link: "https://wa.me/911234567890",
              label: "+91 12345 67890",
            },
            {
              icon: <FaPhoneAlt size={30} />,
              title: "Call Us",
              desc: "Mon – Sat | 10 AM to 7 PM IST",
              link: "tel:+911234567890",
              label: "+91 12345 67890",
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-[#f9f9f9] rounded-2xl shadow-md border border-[#3ab7f0]/10 p-6 hover:shadow-[0_0_20px_rgba(58,183,240,0.3)] transition"
            >
              <div className="flex justify-center mb-3 text-[#3ab7f0]">{c.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{c.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{c.desc}</p>
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-[#3ab7f0] font-semibold hover:underline">
                {c.label}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Message Form */}
      <div className="py-16 px-6 md:px-20 bg-[#f6fbff] text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
          style={{ color: "#3ab7f0" }}
        >
          Send Us a Message
        </motion.h3>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          Fill out the form below and we’ll get back to you within 24 hours.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-[#3ab7f0]/10 space-y-4"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3ab7f0]"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            type="email"
            className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3ab7f0]"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3ab7f0]"
            required
          />
          <button
            type="submit"
            className="mt-2 bg-[#3ab7f0] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0073b6] transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Location / Map */}
      <div className="py-16 px-6 md:px-20 bg-[#ffffff] text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
          style={{ color: "#3ab7f0" }}
        >
          Visit Our Studio
        </motion.h3>
        <p className="text-gray-600 mb-6">
          221B Creative Street, Sector 9, New Delhi, India
        </p>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-[#3ab7f0]/20 max-w-4xl mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093643!2d144.9537353153195!3d-37.8162797420217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727b3b8d1b7b8!2sCreative%20Studio!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Social Media CTA */}
      <div className="py-16 px-6 md:px-20 bg-gradient-to-r from-[#0073b6] to-[#3ab7f0] text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Connect with Us</h3>
        <p className="text-white/90 mb-6">
          Follow us for daily insights, behind-the-scenes, and creative inspiration.
        </p>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://instagram.com/macaronix" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:scale-110 transition" />
          </a>
          <a href="https://linkedin.com/company/macaronix" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:scale-110 transition" />
          </a>
          <a href="mailto:hello@macaronix.com">
            <FaEnvelope className="hover:scale-110 transition" />
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-6 md:px-20 bg-[#f9f9f9]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6" style={{ color: "#3ab7f0" }}>
            Got Questions?
          </h3>

          <div className="space-y-4">
            <details className="bg-white rounded-lg p-4 border border-[#e6f6ff]">
              <summary className="font-semibold cursor-pointer">
                How soon will I get a response?
              </summary>
              <p className="mt-2 text-gray-700 text-sm">
                We usually reply within 24 hours during business days.
              </p>
            </details>

            <details className="bg-white rounded-lg p-4 border border-[#e6f6ff]">
              <summary className="font-semibold cursor-pointer">
                Can I schedule a call before starting?
              </summary>
              <p className="mt-2 text-gray-700 text-sm">
                Absolutely! Drop us a line and we’ll set up a discovery call to
                discuss your goals.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 text-center bg-black text-white">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h3>
        <p className="text-white/80 mb-8">
          Tell us your vision — we’ll make it happen with design, marketing, and tech that works.
        </p>
        <a
          href="mailto:hello@macaronix.com"
          className="inline-block bg-[#3ab7f0] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#0073b6] transition"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
