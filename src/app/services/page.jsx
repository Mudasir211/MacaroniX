"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
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
  FaCheckCircle,
} from "react-icons/fa";

const displayFont = Space_Grotesk({ subsets: ["latin"], weight: ["500", "700"] });
const monoFont = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"] });

const services = [
  {
    code: "WEB",
    icon: <FaLaptopCode size={26} />,
    title: "Web Dev & Design",
    desc: "Fast, responsive, and conversion-focused websites, designed to look as good as they perform.",
    points: [
      "Modern Next.js / React builds with sub-2-second load times",
      "Mobile-first responsive design across every screen size",
      "SEO-friendly structure with clean, semantic markup",
      "Conversion-focused layouts, CTAs, and page flow",
      "Ongoing support, updates, and performance monitoring",
    ],
    href: "/services/web",
  },
  {
    code: "SOC",
    icon: <FaUsers size={26} />,
    title: "Social Media Marketing",
    desc: "Grow your presence with creative, data-driven content that keeps people coming back.",
    points: [
      "Platform-specific content strategy and posting calendar",
      "Scroll-stopping creative for reels, posts, and stories",
      "Daily community management and audience engagement",
      "Monthly performance reporting and growth tracking",
      "Competitor and trend analysis to stay ahead",
    ],
    href: "/services/social",
  },
  {
    code: "AUT",
    icon: <FaRobot size={26} />,
    title: "AI Automation",
    desc: "Custom automations and AI-powered workflows that cut manual work and free your team.",
    points: [
      "Workflow automation across your existing tools and CRM",
      "Custom AI chat assistants for 24/7 customer support",
      "Automated reporting and data-sync pipelines",
      "Bespoke integrations built around your exact stack",
      "Ongoing monitoring and refinement as you scale",
    ],
    href: "/services/ai-automation",
  },
  {
    code: "ADS",
    icon: <FaBullhorn size={26} />,
    title: "Ads Management",
    desc: "Paid campaigns across every major platform, focused on ROI, not vanity metrics.",
    points: [
      "Full campaign strategy across Google, Meta, and TikTok Ads",
      "Scroll-stopping ad creative and conversion-driven copy",
      "Proper pixel setup and conversion tracking from day one",
      "Daily bid and budget optimisation to lower CPA",
      "Transparent reporting tied to real ROAS, not clicks",
    ],
    href: "/services/ads",
  },
  {
    code: "AGT",
    icon: <FaMagic size={26} />,
    title: "Agentic AI Solutions",
    desc: "Custom AI agents that plan, reason, and execute multi-step tasks autonomously.",
    points: [
      "Purpose-built agents tailored to your specific workflows",
      "Integration with your own data, docs, and internal tools",
      "Multi-step task chains — research, draft, send, log",
      "Human-in-the-loop approval steps for full control",
      "Continuous iteration based on real usage patterns",
    ],
    href: "/services/agentic-ai",
  },
  {
    code: "ERP",
    icon: <FaDatabase size={26} />,
    title: "Custom Software & ERP",
    desc: "Custom ERP and internal tools built around your exact workflow, not a template.",
    points: [
      "Custom ERP modules for inventory, HR, and finance",
      "Seamless integration with your existing tools and APIs",
      "Role-based access so teams see only what they need",
      "Real-time dashboards and business intelligence built-in",
      "Scalable architecture that grows with your business",
    ],
    href: "/services/erp",
  },
  {
    code: "MOB",
    icon: <FaMobileAlt size={26} />,
    title: "Mobile App Development",
    desc: "Native and cross-platform apps built for performance, retention, and real results.",
    points: [
      "Cross-platform builds for iOS and Android from one codebase",
      "UX-led design based on real user behaviour",
      "Smooth performance with fast load and battery efficiency",
      "App Store and Google Play submission handled end-to-end",
      "Post-launch updates, fixes, and new feature rollouts",
    ],
    href: "/services/mobile",
  },
  {
    code: "COM",
    icon: <FaShoppingCart size={26} />,
    title: "E-Commerce",
    desc: "High-converting online stores with seamless checkout and smart product discovery.",
    points: [
      "Custom storefronts on Shopify or headless commerce",
      "Frictionless checkout flows to reduce cart abandonment",
      "Automated inventory and order management systems",
      "Payment gateway and marketplace integrations",
      "Sales analytics dashboards to track what's working",
    ],
    href: "/services/ecommerce",
  },
  {
    code: "MKT",
    icon: <FaChartLine size={26} />,
    title: "Digital Marketing",
    desc: "Full-funnel strategies across SEO, email, and analytics built to generate real ROI.",
    points: [
      "Technical and content SEO to grow organic traffic",
      "Automated email sequences that turn leads into buyers",
      "Conversion rate optimisation across landing pages",
      "Unified analytics and reporting across every channel",
      "Ongoing strategy adjustments based on real data",
    ],
    href: "/services/digital-marketing",
  },
  {
    code: "UX",
    icon: <FaLaptopCode size={26} />,
    title: "UI / UX Design",
    desc: "Sleek, user-friendly interfaces engineered for engagement and ease.",
    points: [
      "User research through interviews, surveys, and heatmaps",
      "Wireframes and interactive prototypes before development",
      "Pixel-perfect responsive design for every device",
      "Scalable Figma design systems for faster dev handoff",
      "Usability testing and iteration before final delivery",
    ],
    href: "/services/uiux",
  },
  {
    code: "GFX",
    icon: <FaPaintBrush size={26} />,
    title: "Graphic Design",
    desc: "Bold, on-brand graphics for social, print, and digital that grab attention.",
    points: [
      "Social media templates consistent with your brand identity",
      "Print collateral — brochures, packaging, presentations",
      "Reusable brand visual systems for future consistency",
      "Custom illustrations and icon sets",
      "Fast turnaround without compromising quality",
    ],
    href: "/services/graphic",
  },
  {
    code: "SEO",
    icon: <FaSearch size={26} />,
    title: "SEO Services",
    desc: "Technical, on-page, and content SEO that builds sustainable organic traffic.",
    points: [
      "Full technical SEO audit — speed, crawlability, structure",
      "Keyword mapping and on-page content optimisation",
      "Content strategy built around real search intent",
      "Link building to strengthen domain authority",
      "Transparent monthly rank and traffic reporting",
    ],
    href: "/services/seo",
  },
];

// Row container: fades/slides up as a whole when it enters the viewport
const rowVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.07 },
  },
};

// Individual point items: staggered in right after the row appears
const pointVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function ServiceRow({ s, index }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <motion.div
      variants={rowVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="group relative grid grid-cols-1 md:grid-cols-[1.05fr_1.4fr] items-start gap-8 md:gap-14 lg:gap-20 py-12 md:py-14 border-b border-dashed"
      style={{ borderColor: "#cfe6f6" }}
    >
      {/* Icon + title — centered on mobile, left-aligned from md up */}
      <div className="flex flex-col items-center md:items-start gap-4 md:gap-5 text-center md:text-left">
        <span
          className={`${monoFont.className} text-[11px] tracking-[0.2em]`}
          style={{ color: "#3ab7f0" }}
        >
          MX–{num} / {s.code}
        </span>

        <div className="relative">
          <div
            className="relative w-16 h-16 md:w-[70px] md:h-[70px] rounded-xl flex items-center justify-center bg-white shadow-sm transition-colors duration-300 group-hover:bg-[#0073b6]"
            style={{ border: "1.5px solid #0073b6", color: "#0073b6" }}
          >
            <span className="transition-colors duration-300 group-hover:text-white">
              {s.icon}
            </span>
            {/* schematic corner marks */}
            <span
              className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 border-t-2 border-l-2 rounded-tl-sm"
              style={{ borderColor: "#3ab7f0" }}
            />
            <span
              className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 border-b-2 border-r-2 rounded-br-sm"
              style={{ borderColor: "#3ab7f0" }}
            />
          </div>
        </div>

        <div>
          <h3
            className={`${displayFont.className} text-xl md:text-2xl font-bold text-[#0b1b2b] mb-1.5`}
          >
            {s.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xs md:max-w-sm">
            {s.desc}
          </p>
        </div>
      </div>

      {/* Points + CTA — centered on mobile, left-aligned from md up */}
      <div
        className="flex flex-col items-center md:items-start md:pl-10 md:border-l"
        style={{ borderColor: "#e6f4fc" }}
      >
        <ul className="space-y-3 mb-7 w-full max-w-sm md:max-w-none">
          {s.points.map((point, i) => (
            <motion.li
              key={i}
              variants={pointVariants}
              className="flex items-start gap-3 text-left"
            >
              <FaCheckCircle
                size={15}
                className="mt-0.5 shrink-0"
                style={{ color: "#3ab7f0" }}
              />
              <span className="text-sm md:text-[15px] text-gray-700 leading-relaxed">
                {point}
              </span>
            </motion.li>
          ))}
        </ul>

        <Link
          href={s.href}
          className="inline-flex items-center gap-2 text-sm font-semibold group/cta px-4 py-2 rounded-full border transition-colors duration-300 hover:text-white"
          style={{ color: "#0073b6", borderColor: "#0073b6" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#0073b6")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          See details
          <FaArrowRight
            size={12}
            className="transition-transform duration-300 group-hover/cta:translate-x-1"
          />
        </Link>
      </div>
    </motion.div>
  );
}

export default function AllServicesPage() {
  return (
    <section
      className="relative py-20 md:py-28 px-6 sm:px-12 md:px-24 lg:px-32 overflow-hidden"
      style={{
        backgroundColor: "#f9fbfd",
        backgroundImage:
          "radial-gradient(circle, rgba(0,115,182,0.09) 1px, transparent 1px)",
        backgroundSize: "26px 26px",
      }}
    >
      {/* single restrained glow, anchored behind the header only */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3ab7f0, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <span
            className={`${monoFont.className} inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-[11px] tracking-[0.25em] uppercase border`}
            style={{ color: "#0073b6", borderColor: "#bfe4f7", background: "rgba(58,183,240,0.08)" }}
          >
            Service Index · 01–12
          </span>
          <h1
            className={`${displayFont.className} text-4xl md:text-6xl font-bold text-[#0b1b2b] mb-5 tracking-tight`}
          >
            Everything we build,
            <br className="hidden md:block" /> end to end.
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Twelve disciplines, one team — from the first line of code to
            the campaign that fills your inbox. Explore each service below.
          </p>
        </motion.div>

        {/* Vertical service list */}
        <div>
          {services.map((s, i) => (
            <ServiceRow key={s.href} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}