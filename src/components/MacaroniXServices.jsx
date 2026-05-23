"use client";
import { useState, useEffect } from "react";
import {
  Users, TrendingUp, Palette, Monitor, Code, Camera,
  ChevronRight, ArrowRight, CheckCircle, Star, Zap,
  BarChart2, MessageCircle, Share2, Target, Globe,
  Layers, Figma, Smartphone, Video, Image, Play,
  Award, Clock, DollarSign, RefreshCw
} from "lucide-react";
import Link from "next/link";

const BRAND = "#3ab7f0";
const BRAND_DARK = "#0073b6";

const services = [
  {
    id: "social",
    label: "Social Media",
    icon: Users,
    tagline: "Social Media Management",
    headline: "Turn Followers Into Loyal Fans",
    sub: "We manage, grow, and monetise your social presence so you can focus on running your business.",
    color: "#3ab7f0",
    heroIcon: Share2,
    features: [
      { icon: Target, title: "Strategy & Audit", desc: "We analyse your current presence, competitors, and audience to build a data-backed growth roadmap." },
      { icon: MessageCircle, title: "Content Creation", desc: "Scroll-stopping posts, reels, and stories crafted specifically for each platform's algorithm." },
      { icon: BarChart2, title: "Analytics & Reporting", desc: "Weekly/monthly dashboards so you always know what's working and where to invest next." },
      { icon: Users, title: "Community Management", desc: "We respond, engage, and nurture your audience around the clock — building real relationships." },
    ],
    platforms: ["Instagram", "TikTok", "LinkedIn", "Facebook", "X / Twitter", "YouTube"],
    process: [
      { step: "01", title: "Discovery", desc: "Brand deep-dive, audience mapping, competitor audit." },
      { step: "02", title: "Content Plan", desc: "Monthly calendar, creative direction, copy." },
      { step: "03", title: "Publish & Engage", desc: "Scheduled posts, daily engagement, DM management." },
      { step: "04", title: "Optimise", desc: "A/B testing, performance reports, strategy pivots." },
    ],
    stats: [{ num: "3×", label: "Average follower growth" }, { num: "85%", label: "Engagement rate uplift" }, { num: "50+", label: "Brands managed" }],
    cta: "Let's grow your audience",
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    icon: TrendingUp,
    tagline: "Digital Marketing",
    headline: "Performance That Pays for Itself",
    sub: "Full-funnel strategies across paid media, SEO, email, and analytics — built to generate real ROI.",
    color: "#3ab7f0",
    heroIcon: TrendingUp,
    features: [
      { icon: Target, title: "Paid Media (PPC)", desc: "Google Ads, Meta Ads, and TikTok campaigns optimised for cost-per-acquisition, not just clicks." },
      { icon: Globe, title: "SEO & Content", desc: "On-page, technical, and link-building strategies that push you to the top of search results." },
      { icon: BarChart2, title: "Email Marketing", desc: "Automated sequences and broadcasts that turn subscribers into repeat buyers." },
      { icon: RefreshCw, title: "Conversion Rate Optimisation", desc: "A/B testing on landing pages and funnels to squeeze more value from existing traffic." },
    ],
    platforms: ["Google Ads", "Meta Ads", "TikTok Ads", "Email / Klaviyo", "SEO", "Analytics"],
    process: [
      { step: "01", title: "Audit", desc: "Current channels, spend, and funnel performance review." },
      { step: "02", title: "Strategy", desc: "Channel mix, budget allocation, KPI definition." },
      { step: "03", title: "Launch", desc: "Campaign setup, creative production, tracking pixels." },
      { step: "04", title: "Scale", desc: "Continuous optimisation, scaling winners, cutting waste." },
    ],
    stats: [{ num: "3.8×", label: "Average ROAS" }, { num: "42%", label: "Lead growth (avg.)" }, { num: "8 wks", label: "To measurable results" }],
    cta: "Start a campaign",
  },
  {
    id: "design",
    label: "Design & Branding",
    icon: Palette,
    tagline: "Design & Branding",
    headline: "Identity That Commands Attention",
    sub: "We create brand systems that look unmistakable across every touchpoint — from logo to brand book.",
    color: "#3ab7f0",
    heroIcon: Layers,
    features: [
      { icon: Palette, title: "Logo & Identity", desc: "Marks that are distinctive, scalable, and built to last — not template-based shortcuts." },
      { icon: Layers, title: "Brand Guidelines", desc: "Full brand books covering colour, typography, voice, imagery, and do's / don'ts." },
      { icon: Award, title: "Print & Collateral", desc: "Business cards, brochures, pitch decks, and packaging — all coherent to your brand DNA." },
      { icon: Figma, title: "Design Systems", desc: "Component libraries and style guides that keep product and marketing visually consistent." },
    ],
    platforms: ["Logo", "Typography", "Color Systems", "Brand Book", "Print", "Packaging"],
    process: [
      { step: "01", title: "Brief", desc: "Values, personality, audience, and competitor mapping." },
      { step: "02", title: "Concepts", desc: "Multiple creative directions presented for feedback." },
      { step: "03", title: "Refinement", desc: "Chosen direction polished to pixel-perfect quality." },
      { step: "04", title: "Delivery", desc: "All formats, sizes, and brand documentation handed over." },
    ],
    stats: [{ num: "150+", label: "Brands designed" }, { num: "100%", label: "Unique, custom work" }, { num: "2 wks", label: "Avg. logo turnaround" }],
    cta: "Build my brand",
  },
  {
    id: "uiux",
    label: "UI / UX Design",
    icon: Monitor,
    tagline: "UI / UX Design",
    headline: "Interfaces People Actually Love",
    sub: "Research-led design that makes complex products feel effortless — reducing churn and lifting conversion.",
    color: "#3ab7f0",
    heroIcon: Figma,
    features: [
      { icon: Target, title: "User Research", desc: "Interviews, surveys, heatmaps, and usability sessions that uncover real pain points." },
      { icon: Monitor, title: "Wireframing & Prototyping", desc: "From lo-fi sketches to high-fidelity interactive prototypes validated before a line of code is written." },
      { icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect designs that work beautifully from mobile to ultra-wide screens." },
      { icon: Layers, title: "Design Systems", desc: "Scalable Figma component libraries so your dev team ships faster and stays consistent." },
    ],
    platforms: ["Figma", "Web Apps", "Mobile Apps", "SaaS Products", "E-commerce", "Dashboards"],
    process: [
      { step: "01", title: "Discover", desc: "User research, journey mapping, heuristic audit." },
      { step: "02", title: "Ideate", desc: "Information architecture, wireframes, flows." },
      { step: "03", title: "Design", desc: "High-fidelity UI, animations, design system." },
      { step: "04", title: "Validate", desc: "User testing, iteration, developer handoff." },
    ],
    stats: [{ num: "28%", label: "Avg. conversion uplift" }, { num: "40%", label: "Reduced user drop-off" }, { num: "60+", label: "Products designed" }],
    cta: "Design my product",
  },
  {
    id: "web",
    label: "Web Development",
    icon: Code,
    tagline: "Website Development",
    headline: "Fast. Beautiful. Built to Convert.",
    sub: "Modern websites and web apps engineered for speed, SEO, and measurable business outcomes.",
    color: "#3ab7f0",
    heroIcon: Globe,
    features: [
      { icon: Zap, title: "Performance-First", desc: "Core Web Vitals optimised from the first commit — under 2s load time, 90+ Lighthouse scores." },
      { icon: Code, title: "Modern Stack", desc: "Next.js, React, and headless CMS solutions that scale with your business without re-platforming." },
      { icon: Target, title: "Conversion-Focused", desc: "CRO principles baked in — clear CTAs, fast forms, and A/B test-ready architecture." },
      { icon: Globe, title: "SEO & Accessibility", desc: "Semantic HTML, structured data, WCAG 2.1 compliance — visible and usable by everyone." },
    ],
    platforms: ["Next.js", "React", "WordPress", "Webflow", "Shopify", "Custom CMS"],
    process: [
      { step: "01", title: "Scope", desc: "Requirements, tech stack decision, timeline." },
      { step: "02", title: "Design", desc: "UI mockups, prototypes, client sign-off." },
      { step: "03", title: "Build", desc: "Development, CMS setup, integrations, testing." },
      { step: "04", title: "Launch", desc: "QA, deployment, analytics, ongoing support." },
    ],
    stats: [{ num: "<2s", label: "Target page load time" }, { num: "90+", label: "Lighthouse score" }, { num: "80+", label: "Sites shipped" }],
    cta: "Build my website",
  },
  {
    id: "media",
    label: "Photo & Video",
    icon: Camera,
    tagline: "Photo & Video Production",
    headline: "Visuals That Stop the Scroll",
    sub: "End-to-end content production — from concept and shoot to edit, grade, and delivery-ready files.",
    color: "#3ab7f0",
    heroIcon: Play,
    features: [
      { icon: Video, title: "Brand Films", desc: "Hero films, testimonials, and explainer videos that communicate your value in seconds." },
      { icon: Play, title: "Social Content", desc: "Reels, TikToks, and YouTube Shorts produced with platform-native storytelling techniques." },
      { icon: Image, title: "Photography", desc: "Product, lifestyle, and editorial photography with full post-production retouching." },
      { icon: Zap, title: "Motion Graphics", desc: "Animated logos, transitions, lower-thirds, and infographics that elevate any video." },
    ],
    platforms: ["Brand Films", "Reels / TikTok", "Product Photos", "Motion Graphics", "Podcast Video", "Event Coverage"],
    process: [
      { step: "01", title: "Concept", desc: "Brief, mood board, storyboard, shot list." },
      { step: "02", title: "Pre-Production", desc: "Location, casting, equipment, scheduling." },
      { step: "03", title: "Shoot", desc: "Direction, capture, on-set supervision." },
      { step: "04", title: "Post", desc: "Edit, colour grade, sound, delivery in all formats." },
    ],
    stats: [{ num: "200+", label: "Videos produced" }, { num: "60s", label: "Hero film sweet spot" }, { num: "24hr", label: "Turnaround for social cuts" }],
    cta: "Start a production",
  },
];

function useAnimateIn(dep) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, [dep]);
  return visible;
}

export default function ServicePages({ defaultService }) {
 
    const [active, setActive] = useState(defaultService);
     useEffect(() => {
    setActive(defaultService);
  }, [defaultService]);
  const service = services.find((s) => s.id === active);
  const visible = useAnimateIn(active);

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
  });

  const HeroIcon = service.heroIcon;
  const ServiceIcon = service.icon;

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#fff", minHeight: "100vh", color: "#000" }}>

      {/* ── Top Nav ── */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #e8f6fd", position: "sticky", top: 0, zIndex: 40, padding: "0 1.5rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 8, overflowX: "auto", height: 60, scrollbarWidth: "none" }}>
          <span style={{ fontWeight: 700, color: BRAND, fontSize: 15, whiteSpace: "nowrap", marginRight: 8 }}>
            Macaroni<span style={{ color: "#000" }}>X</span>
          </span>
          <span style={{ color: "#ccc", marginRight: 8 }}>|</span>
          {services.map((s) => {
            const Icon = s.icon;
            const isActive = s.id === active;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 6, padding: "6px 14px",
                  borderRadius: 999, border: isActive ? `1.5px solid ${BRAND}` : "1.5px solid transparent",
                  background: isActive ? "#e8f6fd" : "transparent", cursor: "pointer",
                  color: isActive ? BRAND_DARK : "#555", fontWeight: isActive ? 600 : 400,
                  fontSize: 13, whiteSpace: "nowrap", transition: "all 0.2s",
                }}
              >
                <Icon size={14} />
                {s.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── Hero ── */}
      <section style={{
        background: "linear-gradient(135deg, #000 60%, #001f30)",
        padding: "80px 1.5rem 60px",
        position: "relative", overflow: "hidden",
      }}>
        {/* decorative glow */}
        <div style={{
          position: "absolute", top: -80, right: -80, width: 400, height: 400,
          background: `radial-gradient(circle, ${BRAND}22 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ ...fadeUp(0), display: "inline-flex", alignItems: "center", gap: 8, background: "#0d1a22", border: `1px solid ${BRAND}44`, borderRadius: 999, padding: "5px 14px", marginBottom: 24 }}>
              <ServiceIcon size={14} color={BRAND} />
              <span style={{ color: BRAND, fontSize: 12, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>{service.tagline}</span>
            </div>
            <h1 style={{ ...fadeUp(80), fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              {service.headline}
            </h1>
            <p style={{ ...fadeUp(160), color: "#aac8d8", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 520, marginBottom: 32 }}>
              {service.sub}
            </p>
            <div style={{ ...fadeUp(240), display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{ display: "flex", alignItems: "center", gap: 8, background: BRAND, color: "#000", fontWeight: 700, fontSize: 14, padding: "12px 24px", borderRadius: 999, border: "none", cursor: "pointer", transition: "opacity 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = 0.85}
                onMouseLeave={e => e.currentTarget.style.opacity = 1}
              >
                {service.cta} <ArrowRight size={16} />
              </Link>
              <button
                onClick={() => document.getElementById("features-section").scrollIntoView({ behavior: "smooth" })}
                style={{ display: "flex", alignItems: "center", gap: 8, background: "transparent", color: "#fff", fontWeight: 600, fontSize: 14, padding: "12px 24px", borderRadius: 999, border: "1px solid #ffffff33", cursor: "pointer", transition: "border-color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = BRAND}
                onMouseLeave={e => e.currentTarget.style.borderColor = "#ffffff33"}
              >
                See how it works <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Stats panel */}
          <div style={{ ...fadeUp(200), display: "flex", gap: 12, flexWrap: "wrap" }}>
            {service.stats.map((s, i) => (
              <div key={i} style={{
                background: "#0b1520", border: `1px solid ${BRAND}33`, borderRadius: 16,
                padding: "24px 28px", minWidth: 120, textAlign: "center",
              }}>
                <div style={{ fontSize: "1.8rem", fontWeight: 800, color: BRAND }}>{s.num}</div>
                <div style={{ fontSize: 12, color: "#7daabe", marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features-section" style={{ padding: "72px 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ ...fadeUp(0), display: "inline-block", background: "#e8f6fd", color: BRAND_DARK, borderRadius: 999, padding: "4px 16px", fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 16 }}>
              What's included
            </div>
            <h2 style={{ ...fadeUp(80), fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#000", margin: 0 }}>
              Everything You Need to {service.tagline === "Photo & Video Production" ? "Create" : "Succeed"}
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {service.features.map((f, i) => {
              const FIcon = f.icon;
              return (
                <div
                  key={i}
                  style={{
                    ...fadeUp(i * 80),
                    background: "#fff", border: "1px solid #e6f6ff",
                    borderRadius: 16, padding: "28px 24px",
                    boxShadow: "0 4px 20px rgba(58,183,240,0.06)",
                    transition: "box-shadow 0.25s, transform 0.25s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 32px rgba(58,183,240,0.18)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(58,183,240,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ width: 48, height: 48, background: "#e8f6fd", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <FIcon size={22} color={BRAND} />
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#000", marginBottom: 8 }}>{f.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#4a6478", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Platforms / Deliverables ── */}
      <section style={{ padding: "56px 1.5rem", background: "#f6fbff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#000", marginBottom: 24 }}>
            Platforms & Deliverables
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {service.platforms.map((p, i) => (
              <div key={i} style={{
                background: "#fff", border: `1px solid ${BRAND}33`, borderRadius: 999,
                padding: "7px 18px", fontSize: 13, fontWeight: 600, color: BRAND_DARK,
                display: "flex", alignItems: "center", gap: 6,
              }}>
                <CheckCircle size={13} color={BRAND} />
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section style={{ padding: "72px 1.5rem", background: "#000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ display: "inline-block", background: "#0d1a22", color: BRAND, borderRadius: 999, padding: "4px 16px", fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 16, border: `1px solid ${BRAND}33` }}>
              Our process
            </div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#fff", margin: 0 }}>
              How We Deliver Results
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {service.process.map((p, i) => (
              <div key={i} style={{
                background: "#0a0a0a", border: `1px solid ${BRAND}22`, borderRadius: 16,
                padding: "28px 24px", position: "relative", overflow: "hidden",
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${BRAND}66`; e.currentTarget.style.boxShadow = `0 0 28px ${BRAND}22`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `${BRAND}22`; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ fontSize: "2.8rem", fontWeight: 900, color: `${BRAND}15`, lineHeight: 1, position: "absolute", top: 12, right: 18, fontVariantNumeric: "tabular-nums" }}>{p.step}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: BRAND, letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 10 }}>Step {p.step}</div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: 8 }}>{p.title}</h4>
                <p style={{ fontSize: "0.87rem", color: "#7daabe", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why MacaroniX ── */}
      <section style={{ padding: "72px 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#000", marginBottom: 16 }}>
              Why MacaroniX?
            </h2>
            <p style={{ color: "#4a6478", lineHeight: 1.75, marginBottom: 28 }}>
              We're not a faceless agency. We're a tight-knit team that treats your project as our own — with full transparency, no lock-in contracts, and results you can actually see.
            </p>
            {[
              { icon: Star, text: "Dedicated account manager, not a ticket queue" },
              { icon: BarChart2, text: "Weekly reporting — zero guesswork" },
              { icon: DollarSign, text: "Fair, clear pricing — no surprise invoices" },
              { icon: Clock, text: "Fast turnaround without sacrificing quality" },
            ].map((item, i) => {
              const IIcon = item.icon;
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, background: "#e8f6fd", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <IIcon size={16} color={BRAND} />
                  </div>
                  <span style={{ fontSize: "0.93rem", color: "#2a3d4a", fontWeight: 500 }}>{item.text}</span>
                </div>
              );
            })}
          </div>
          {/* CTA card */}
          <div style={{
            flex: "0 0 auto", width: "min(340px, 100%)",
            background: "linear-gradient(135deg, #000 0%, #001830 100%)",
            borderRadius: 20, padding: "40px 32px", textAlign: "center",
            border: `1px solid ${BRAND}33`,
            boxShadow: `0 0 40px ${BRAND}15`,
          }}>
            <div style={{ width: 64, height: 64, background: `${BRAND}18`, border: `1px solid ${BRAND}44`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <HeroIcon size={28} color={BRAND} />
            </div>
            <h3 style={{ color: "#fff", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12 }}>Ready to get started?</h3>
            <p style={{ color: "#7daabe", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: 28 }}>
              Tell us about your goals and we'll put together a custom proposal — free, with no obligation.
            </p>
            <Link
             href="/contact"
              style={{
                width: "100%", background: BRAND, color: "#000", fontWeight: 700,
                fontSize: 14, padding: "13px 0", borderRadius: 999, border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = 0.85}
              onMouseLeave={e => e.currentTarget.style.opacity = 1}
            >
              {service.cta} <ArrowRight size={15} />
            </Link>
            <p style={{ color: "#3a6070", fontSize: 11, marginTop: 14 }}>Free consultation · No lock-in contracts</p>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Banner ── */}
      <section style={{
        background: `linear-gradient(90deg, #0073b6 0%, ${BRAND} 100%)`,
        padding: "56px 1.5rem", textAlign: "center",
      }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#000", marginBottom: 12 }}>
            Let's Build Something Together
          </h2>
          <p style={{ color: "#004f6f", fontSize: "1rem", marginBottom: 28, lineHeight: 1.65 }}>
            Every great brand started with a conversation. Ours takes 15 minutes and comes with zero pressure.
          </p>
          <Link
          href="/contact"
            style={{
              background: "#000", color: BRAND, fontWeight: 700, fontSize: 15,
              padding: "14px 36px", borderRadius: 999, border: "none", cursor: "pointer",
              display: "inline-flex", alignItems: "center", gap: 8, transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = 0.85}
            onMouseLeave={e => e.currentTarget.style.opacity = 1}
          >
            Start the conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Footer note ── */}
      <div style={{ background: "#fff", textAlign: "center", padding: "20px", borderTop: "1px solid #e8f6fd" }}>
        <p style={{ color: "#aaa", fontSize: 12, margin: 0 }}>
          © {new Date().getFullYear()} MacaroniX — Crafted for Digital Excellence
        </p>
      </div>
    </div>
  );
}
