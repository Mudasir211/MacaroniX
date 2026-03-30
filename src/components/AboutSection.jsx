"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white text-black">
      {/* Intro / Header */}
      <div className="py-20 px-6 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: "#3ab7f0" }}
        >
          About <span style={{ color: "#000000" }}>MacaroniX</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-700"
        >
          We blend human-first creativity with modern technology to build digital
          experiences that drive growth, trust and long-term value for brands.
        </motion.p>
      </div>

      {/* Mission + Vision */}
      <div className="py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold" style={{ color: "#3ab7f0" }}>
              Our Mission
            </h3>
            <p className="text-gray-700">
              To empower businesses of all sizes with human-centric digital
              solutions — from strategy and brand to design, content and
              technology — that produce measurable impact.
            </p>

            <h3 className="text-2xl font-semibold mt-6" style={{ color: "#3ab7f0" }}>
              Our Vision
            </h3>
            <p className="text-gray-700">
              A world where digital experiences are both delightful and
              meaningful — where technology amplifies human connection, not
              replaces it.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden bg-[#f6fbff] p-6 border border-[#3ab7f0]/10"
          >
            {/* Placeholder image — replace /team-hero.jpg with your asset */}
            <div className="w-full h-56 relative rounded-md overflow-hidden">
              <Image
                src="/team-hero.jpg"
                alt="MacaroniX team"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <p className="mt-4 text-gray-700">
              Founded by designers and engineers, MacaroniX grew from a small studio
              into a multidisciplinary agency focused on growth and craft.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Values / Pillars */}
      <div className="py-12 px-6 md:px-20 bg-[#f9fbff]">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h3 className="text-3xl font-bold" style={{ color: "#3ab7f0" }}>
            What We Value
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Principles that guide our process and how we collaborate with clients.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Human-Centric", text: "Design for people — not patterns." },
            { title: "Data-Informed", text: "Strategy backed by measurable metrics." },
            { title: "Craftsmanship", text: "Attention to detail, every release." },
            { title: "Transparency", text: "Clear communication and fair pricing." },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-white p-6 rounded-xl border border-[#e6f6ff] text-left"
            >
              <h4 className="text-xl font-semibold mb-2" style={{ color: "#3ab7f0" }}>
                {v.title}
              </h4>
              <p className="text-gray-700 text-sm">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline / Process */}
      <div className="py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6" style={{ color: "#3ab7f0" }}>
            How We Work
          </h3>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            {[
              { step: "Discover", desc: "Discovery call, research & brief." },
              { step: "Plan", desc: "Strategy, roadmap & deliverables." },
              { step: "Create", desc: "Design, content & development." },
              { step: "Launch", desc: "QA, deploy, measure, iterate." },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex-1 bg-[#ffffff] rounded-xl p-6 border border-[#eaf8ff] shadow-[0_4px_18px_rgba(58,183,240,0.06)]"
              >
                <div className="text-sm text-[#3ab7f0] font-semibold mb-2">{s.step}</div>
                <p className="text-gray-700">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="py-12 px-6 md:px-20 bg-[#0b1220] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { num: "150+", label: "Projects Delivered" },
            { num: "90%", label: "Average Growth Rate" },
            { num: "50+", label: "Happy Clients" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="p-6"
            >
              <div className="text-4xl md:text-5xl font-extrabold" style={{ color: "#3ab7f0" }}>
                {s.num}
              </div>
              <div className="mt-2 text-gray-300">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Highlights */}
      <div className="py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h3 className="text-3xl font-bold" style={{ color: "#3ab7f0" }}>
            Meet the Team
          </h3>
          <p className="text-gray-600 mt-3">A small, full-stack team of creatives and engineers.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Mukarram Shafi", role: "Creative Director", img: "/team/aisha.jpg" },
            { name: "Mudsasir Ahmed", role: "Lead Developer", img: "/team/rohit.jpg" },
            { name: "Uzair Ahmed", role: "Video Editor", img: "/team/maya.jpg" },
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-white rounded-xl p-6 flex items-center gap-4 border border-[#eaf8ff]"
            >
              <div className="w-16 h-16 relative rounded-full overflow-hidden bg-gray-100">
                <Image src={m.img} alt={m.name} fill style={{ objectFit: "cover" }} />
              </div>
              <div className="text-left">
                <div className="text-lg font-semibold">{m.name}</div>
                <div className="text-sm text-gray-600">{m.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mini FAQ */}
      <div className="py-12 px-6 md:px-20 bg-[#f6fbff]">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-6" style={{ color: "#3ab7f0" }}>
            Frequently Asked
          </h3>

          <div className="space-y-4">
            <details className="bg-white rounded-lg p-4 border border-[#e6f6ff]">
              <summary className="font-semibold cursor-pointer">How long does a typical project take?</summary>
              <p className="mt-2 text-gray-700 text-sm">
                Project length varies — a simple site may take 3–6 weeks, while
                larger builds or campaigns can span months. We provide a timeline
                in every proposal.
              </p>
            </details>

            <details className="bg-white rounded-lg p-4 border border-[#e6f6ff]">
              <summary className="font-semibold cursor-pointer">Do you provide ongoing support?</summary>
              <p className="mt-2 text-gray-700 text-sm">
                Yes — we offer maintenance, content, and growth packages to keep
                your product performing and improving post-launch.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 px-6 md:px-20 text-center bg-gradient-to-r from-[#0073b6] to-[#3ab7f0] text-black">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to collaborate?</h3>
        <p className="max-w-2xl mx-auto text-black/80 mb-8">
          Tell us about your goals — we’ll build a plan that aligns with your vision and budget.
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-[#3ab7f0] px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
        >
          Start the Conversation
        </a>
      </div>
    </section>
  );
}
