"use client";
import { useState, useEffect } from "react";
import {
  Users,
  TrendingUp,
  Palette,
  Monitor,
  Code,
  Camera,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  BarChart2,
  MessageCircle,
  Share2,
  Target,
  Globe,
  Layers,
  Figma,
  Smartphone,
  Video,
  Image,
  Play,
  Award,
  Clock,
  DollarSign,
  RefreshCw,
  Bot,
  Sparkles,
  Database,
  ShoppingCart,
  Search,
  Megaphone,
} from "lucide-react";
import Link from "next/link";

const BRAND = "#3ab7f0";
const BRAND_DARK = "#0073b6";

const services = [
  // ── TOP 4 ──
  {
    id: "web",
    label: "Web Dev & Design",
    icon: Code,
    tagline: "Website Development & Design",
    headline: "Fast. Beautiful. Built to Convert.",
    sub: "Modern websites engineered for speed, SEO, and measurable business outcomes — designed to look as good as they perform.",
    color: BRAND,
    heroIcon: Globe,
    features: [
      {
        icon: Zap,
        title: "Performance-First",
        desc: "Core Web Vitals optimised from the first commit — under 2s load time, 90+ Lighthouse scores.",
      },
      {
        icon: Code,
        title: "Modern Stack",
        desc: "Next.js, React, and headless CMS solutions that scale with your business without re-platforming.",
      },
      {
        icon: Palette,
        title: "Design That Converts",
        desc: "Every layout, color, and CTA placement is chosen to guide visitors toward action, not just look nice.",
      },
      {
        icon: Globe,
        title: "SEO & Accessibility",
        desc: "Semantic HTML, structured data, WCAG 2.1 compliance — visible and usable by everyone.",
      },
    ],
    platforms: [
      "Next.js",
      "React",
      "WordPress",
      "Webflow",
      "Shopify",
      "Custom CMS",
    ],
    process: [
      {
        step: "01",
        title: "Scope",
        desc: "Requirements, tech stack decision, timeline.",
      },
      {
        step: "02",
        title: "Design",
        desc: "UI mockups, prototypes, client sign-off.",
      },
      {
        step: "03",
        title: "Build",
        desc: "Development, CMS setup, integrations, testing.",
      },
      {
        step: "04",
        title: "Launch",
        desc: "QA, deployment, analytics, ongoing support.",
      },
    ],
    stats: [
      { num: "<2s", label: "Target page load time" },
      { num: "90+", label: "Lighthouse score" },
      { num: "80+", label: "Sites shipped" },
    ],
    cta: "Build my website",
  },
  {
    id: "social",
    label: "Social Media Marketing",
    icon: Users,
    tagline: "Social Media Marketing",
    headline: "Turn Followers Into Loyal Fans",
    sub: "We manage, grow, and monetise your social presence so you can focus on running your business.",
    color: BRAND,
    heroIcon: Share2,
    features: [
      {
        icon: Target,
        title: "Strategy & Audit",
        desc: "We analyse your current presence, competitors, and audience to build a data-backed growth roadmap.",
      },
      {
        icon: MessageCircle,
        title: "Content Creation",
        desc: "Scroll-stopping posts, reels, and stories crafted specifically for each platform's algorithm.",
      },
      {
        icon: BarChart2,
        title: "Analytics & Reporting",
        desc: "Weekly/monthly dashboards so you always know what's working and where to invest next.",
      },
      {
        icon: Users,
        title: "Community Management",
        desc: "We respond, engage, and nurture your audience around the clock — building real relationships.",
      },
    ],
    platforms: [
      "Instagram",
      "TikTok",
      "LinkedIn",
      "Facebook",
      "X / Twitter",
      "YouTube",
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        desc: "Brand deep-dive, audience mapping, competitor audit.",
      },
      {
        step: "02",
        title: "Content Plan",
        desc: "Monthly calendar, creative direction, copy.",
      },
      {
        step: "03",
        title: "Publish & Engage",
        desc: "Scheduled posts, daily engagement, DM management.",
      },
      {
        step: "04",
        title: "Optimise",
        desc: "A/B testing, performance reports, strategy pivots.",
      },
    ],
    stats: [
      { num: "3×", label: "Average follower growth" },
      { num: "85%", label: "Engagement rate uplift" },
      { num: "50+", label: "Brands managed" },
    ],
    cta: "Let's grow your audience",
  },
  {
    id: "ai-automation",
    label: "AI Automation",
    icon: Bot,
    tagline: "AI Automation",
    headline: "Automate the Busywork, Scale What Matters",
    sub: "We build custom automations and AI-powered workflows that cut manual work and free your team to focus on growth.",
    color: BRAND,
    heroIcon: Bot,
    features: [
      {
        icon: Bot,
        title: "Workflow Automation",
        desc: "Connect your tools — CRM, email, support, sheets — so tasks run themselves instead of eating your day.",
      },
      {
        icon: Zap,
        title: "AI-Powered Chat & Support",
        desc: "Custom AI assistants that answer customer questions instantly, 24/7, without losing your brand voice.",
      },
      {
        icon: RefreshCw,
        title: "Data Sync & Reporting",
        desc: "Automated pipelines that keep your dashboards, invoices, and reports always up to date.",
      },
      {
        icon: Target,
        title: "Custom Integrations",
        desc: "Bespoke automations built around your exact stack — no generic templates, no wasted licenses.",
      },
    ],
    platforms: [
      "Zapier / Make",
      "OpenAI / Claude",
      "CRM Integrations",
      "Slack Bots",
      "Email Automation",
      "Custom APIs",
    ],
    process: [
      {
        step: "01",
        title: "Map",
        desc: "Identify repetitive tasks and bottlenecks worth automating.",
      },
      {
        step: "02",
        title: "Design",
        desc: "Workflow architecture, tool selection, edge-case handling.",
      },
      {
        step: "03",
        title: "Build",
        desc: "Automation development, AI prompt tuning, testing.",
      },
      {
        step: "04",
        title: "Monitor",
        desc: "Ongoing monitoring, refinement, and scaling as you grow.",
      },
    ],
    stats: [
      { num: "15+ hrs", label: "Saved per week (avg.)" },
      { num: "24/7", label: "Always-on automation" },
      { num: "30+", label: "Workflows automated" },
    ],
    cta: "Automate my business",
  },
  {
    id: "ads",
    label: "Ads Management",
    icon: Target,
    tagline: "Ads Management",
    headline: "Paid Campaigns That Actually Convert",
    sub: "We plan, launch, and optimise paid campaigns across every major platform — focused on ROI, not vanity metrics.",
    color: BRAND,
    heroIcon: Megaphone,
    features: [
      {
        icon: Target,
        title: "Campaign Strategy",
        desc: "Audience research, budget planning, and platform selection built around your actual sales goals.",
      },
      {
        icon: Megaphone,
        title: "Ad Creative & Copy",
        desc: "Scroll-stopping creative and copy tailored to each platform's format and audience behaviour.",
      },
      {
        icon: BarChart2,
        title: "Tracking & Attribution",
        desc: "Pixel setup, conversion tracking, and clean reporting so every dollar spent is accounted for.",
      },
      {
        icon: RefreshCw,
        title: "Continuous Optimisation",
        desc: "Daily bid and budget adjustments, A/B testing, and creative refreshes to keep CPA falling.",
      },
    ],
    platforms: [
      "Google Ads",
      "Meta Ads",
      "TikTok Ads",
      "LinkedIn Ads",
      "YouTube Ads",
      "Retargeting",
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        desc: "Current spend, funnel, and past campaign performance review.",
      },
      {
        step: "02",
        title: "Strategy",
        desc: "Channel mix, budget allocation, targeting, KPI definition.",
      },
      {
        step: "03",
        title: "Launch",
        desc: "Campaign setup, creative production, tracking pixels.",
      },
      {
        step: "04",
        title: "Scale",
        desc: "Continuous optimisation, scaling winners, cutting waste.",
      },
    ],
    stats: [
      { num: "3.8×", label: "Average ROAS" },
      { num: "42%", label: "Lead growth (avg.)" },
      { num: "8 wks", label: "To measurable results" },
    ],
    cta: "Launch a campaign",
  },

  // ── REST ──
  {
    id: "agentic-ai",
    label: "Agentic AI Solutions",
    icon: Sparkles,
    tagline: "Agentic AI Solutions",
    headline: "AI Agents That Work Like Your Best Employee",
    sub: "Custom AI agents that handle research, decisions, and multi-step tasks autonomously — not just chatbots that answer FAQs.",
    color: BRAND,
    heroIcon: Sparkles,
    features: [
      {
        icon: Sparkles,
        title: "Custom AI Agents",
        desc: "Purpose-built agents that plan, reason, and execute multi-step tasks specific to your business.",
      },
      {
        icon: Database,
        title: "Knowledge Integration",
        desc: "Agents connected to your own data, docs, and tools so answers are accurate and grounded.",
      },
      {
        icon: RefreshCw,
        title: "Multi-Step Workflows",
        desc: "Agents that chain actions together — research, draft, send, log — without human hand-holding.",
      },
      {
        icon: CheckCircle,
        title: "Human-in-the-Loop Controls",
        desc: "Approval steps and guardrails built in, so automation never runs fully unchecked.",
      },
    ],
    platforms: [
      "Claude / GPT Agents",
      "RAG Pipelines",
      "Tool Use / Function Calling",
      "Internal Dashboards",
      "Slack / Email Agents",
      "Custom APIs",
    ],
    process: [
      {
        step: "01",
        title: "Define",
        desc: "Identify the decisions and tasks worth delegating to an agent.",
      },
      {
        step: "02",
        title: "Architect",
        desc: "Agent design, tool access, knowledge sources, guardrails.",
      },
      {
        step: "03",
        title: "Build & Test",
        desc: "Development, prompt engineering, real-world test runs.",
      },
      {
        step: "04",
        title: "Deploy",
        desc: "Rollout, monitoring, and iteration based on real usage.",
      },
    ],
    stats: [
      { num: "10+", label: "Agent workflows shipped" },
      { num: "70%", label: "Faster task turnaround" },
      { num: "24/7", label: "Autonomous operation" },
    ],
    cta: "Explore AI agents",
  },
  {
    id: "erp",
    label: "Custom Software & ERP",
    icon: Database,
    tagline: "Custom Software & ERP Systems",
    headline: "Software Built Around How You Actually Work",
    sub: "Custom ERP and internal tools that replace spreadsheets and disconnected apps with one system built for your workflow.",
    color: BRAND,
    heroIcon: Database,
    features: [
      {
        icon: Database,
        title: "Custom ERP Development",
        desc: "Inventory, HR, finance, and operations modules built to match your exact processes.",
      },
      {
        icon: RefreshCw,
        title: "System Integrations",
        desc: "Connect existing tools, databases, and third-party APIs into one unified platform.",
      },
      {
        icon: Users,
        title: "Role-Based Access",
        desc: "Granular permissions so every team member sees exactly what they need — nothing more.",
      },
      {
        icon: BarChart2,
        title: "Reporting & Dashboards",
        desc: "Real-time business intelligence built directly into the system, not bolted on after.",
      },
    ],
    platforms: [
      "Custom Web Apps",
      "Inventory Systems",
      "HR & Payroll",
      "Finance Modules",
      "API Integrations",
      "Cloud Hosting",
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        desc: "Process mapping, pain-point identification, requirements.",
      },
      {
        step: "02",
        title: "Architecture",
        desc: "Database design, module planning, tech stack.",
      },
      {
        step: "03",
        title: "Development",
        desc: "Iterative builds with regular client review cycles.",
      },
      {
        step: "04",
        title: "Deployment",
        desc: "Migration, training, and ongoing maintenance support.",
      },
    ],
    stats: [
      { num: "20+", label: "Custom systems built" },
      { num: "40%", label: "Avg. process time saved" },
      { num: "99.9%", label: "Uptime target" },
    ],
    cta: "Build my system",
  },
  {
    id: "mobile",
    label: "Mobile App Development",
    icon: Smartphone,
    tagline: "Mobile App Development",
    headline: "Apps Your Users Open Every Day",
    sub: "Native and cross-platform mobile apps built for performance, retention, and real business results.",
    color: BRAND,
    heroIcon: Smartphone,
    features: [
      {
        icon: Smartphone,
        title: "Cross-Platform Builds",
        desc: "One codebase, native performance — shipped to iOS and Android without doubling the cost.",
      },
      {
        icon: Figma,
        title: "UX-Led Design",
        desc: "Every screen designed around real user behaviour, not just visual trends.",
      },
      {
        icon: Zap,
        title: "Performance Optimisation",
        desc: "Smooth animations, fast load times, and battery-efficient builds users actually keep.",
      },
      {
        icon: RefreshCw,
        title: "Post-Launch Support",
        desc: "Updates, bug fixes, and new features rolled out long after launch day.",
      },
    ],
    platforms: [
      "React Native",
      "Flutter",
      "iOS (Swift)",
      "Android (Kotlin)",
      "App Store",
      "Google Play",
    ],
    process: [
      {
        step: "01",
        title: "Plan",
        desc: "Feature scoping, platform choice, technical architecture.",
      },
      {
        step: "02",
        title: "Design",
        desc: "Wireframes, UI design, interactive prototype.",
      },
      {
        step: "03",
        title: "Develop",
        desc: "Sprint-based development with regular builds for testing.",
      },
      {
        step: "04",
        title: "Launch",
        desc: "App store submission, QA, and post-launch monitoring.",
      },
    ],
    stats: [
      { num: "25+", label: "Apps launched" },
      { num: "4.6★", label: "Avg. store rating" },
      { num: "2", label: "Platforms, one codebase" },
    ],
    cta: "Build my app",
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    icon: ShoppingCart,
    tagline: "E-Commerce",
    headline: "Storefronts Built to Sell",
    sub: "High-converting online stores with seamless checkout, smart product discovery, and infrastructure that scales with sales spikes.",
    color: BRAND,
    heroIcon: ShoppingCart,
    features: [
      {
        icon: ShoppingCart,
        title: "Store Setup & Design",
        desc: "Custom storefronts on Shopify or headless commerce, styled to match your brand exactly.",
      },
      {
        icon: Zap,
        title: "Checkout Optimisation",
        desc: "Fast, frictionless checkout flows that reduce cart abandonment and lift conversion.",
      },
      {
        icon: Database,
        title: "Inventory & Order Management",
        desc: "Systems that keep stock, orders, and fulfillment in sync automatically.",
      },
      {
        icon: BarChart2,
        title: "Sales Analytics",
        desc: "Clear dashboards on what's selling, what's not, and where to focus next.",
      },
    ],
    platforms: [
      "Shopify",
      "WooCommerce",
      "Headless Commerce",
      "Payment Gateways",
      "Inventory Tools",
      "Marketplace Sync",
    ],
    process: [
      {
        step: "01",
        title: "Scope",
        desc: "Product catalog, payment, and shipping requirements.",
      },
      {
        step: "02",
        title: "Design",
        desc: "Storefront design, product pages, checkout flow.",
      },
      {
        step: "03",
        title: "Build",
        desc: "Store setup, integrations, payment gateway config.",
      },
      {
        step: "04",
        title: "Launch",
        desc: "Testing, go-live, and post-launch optimisation.",
      },
    ],
    stats: [
      { num: "30+", label: "Stores launched" },
      { num: "22%", label: "Avg. cart conversion lift" },
      { num: "<1.5s", label: "Target checkout load" },
    ],
    cta: "Build my store",
  },
  {
    id: "digital-marketing",
    label: "Digital Marketing",
    icon: TrendingUp,
    tagline: "Digital Marketing",
    headline: "Performance That Pays for Itself",
    sub: "Full-funnel strategies across SEO, email, and analytics — built to generate real ROI, not just impressions.",
    color: BRAND,
    heroIcon: TrendingUp,
    features: [
      {
        icon: Globe,
        title: "SEO & Content",
        desc: "On-page, technical, and link-building strategies that push you to the top of search results.",
      },
      {
        icon: MessageCircle,
        title: "Email Marketing",
        desc: "Automated sequences and broadcasts that turn subscribers into repeat buyers.",
      },
      {
        icon: RefreshCw,
        title: "Conversion Rate Optimisation",
        desc: "A/B testing on landing pages and funnels to squeeze more value from existing traffic.",
      },
      {
        icon: BarChart2,
        title: "Analytics & Strategy",
        desc: "Clear, unified reporting across every channel so decisions are backed by data.",
      },
    ],
    platforms: [
      "SEO",
      "Email / Klaviyo",
      "Content Strategy",
      "Analytics",
      "CRO",
      "Landing Pages",
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        desc: "Current channels, funnel, and performance review.",
      },
      {
        step: "02",
        title: "Strategy",
        desc: "Channel mix, content calendar, KPI definition.",
      },
      {
        step: "03",
        title: "Execute",
        desc: "Content production, campaign launches, tracking setup.",
      },
      {
        step: "04",
        title: "Scale",
        desc: "Continuous optimisation based on real performance data.",
      },
    ],
    stats: [
      { num: "42%", label: "Avg. lead growth" },
      { num: "3×", label: "Organic traffic growth" },
      { num: "8 wks", label: "To measurable results" },
    ],
    cta: "Grow my traffic",
  },
  {
    id: "uiux",
    label: "UI / UX Design",
    icon: Monitor,
    tagline: "UI / UX Design",
    headline: "Interfaces People Actually Love",
    sub: "Research-led design that makes complex products feel effortless — reducing churn and lifting conversion.",
    color: BRAND,
    heroIcon: Figma,
    features: [
      {
        icon: Target,
        title: "User Research",
        desc: "Interviews, surveys, heatmaps, and usability sessions that uncover real pain points.",
      },
      {
        icon: Monitor,
        title: "Wireframing & Prototyping",
        desc: "From lo-fi sketches to high-fidelity interactive prototypes validated before a line of code is written.",
      },
      {
        icon: Smartphone,
        title: "Responsive Design",
        desc: "Pixel-perfect designs that work beautifully from mobile to ultra-wide screens.",
      },
      {
        icon: Layers,
        title: "Design Systems",
        desc: "Scalable Figma component libraries so your dev team ships faster and stays consistent.",
      },
    ],
    platforms: [
      "Figma",
      "Web Apps",
      "Mobile Apps",
      "SaaS Products",
      "E-commerce",
      "Dashboards",
    ],
    process: [
      {
        step: "01",
        title: "Discover",
        desc: "User research, journey mapping, heuristic audit.",
      },
      {
        step: "02",
        title: "Ideate",
        desc: "Information architecture, wireframes, flows.",
      },
      {
        step: "03",
        title: "Design",
        desc: "High-fidelity UI, animations, design system.",
      },
      {
        step: "04",
        title: "Validate",
        desc: "User testing, iteration, developer handoff.",
      },
    ],
    stats: [
      { num: "28%", label: "Avg. conversion uplift" },
      { num: "40%", label: "Reduced user drop-off" },
      { num: "60+", label: "Products designed" },
    ],
    cta: "Design my product",
  },
  {
    id: "graphic",
    label: "Graphic Design",
    icon: Palette,
    tagline: "Graphic Design",
    headline: "Visuals That Make People Stop Scrolling",
    sub: "Bold, on-brand graphics for social, print, and digital — designed to grab attention and hold it.",
    color: BRAND,
    heroIcon: Layers,
    features: [
      {
        icon: Palette,
        title: "Social Media Graphics",
        desc: "Post templates, carousels, and story designs consistent with your brand identity.",
      },
      {
        icon: Award,
        title: "Print & Marketing Collateral",
        desc: "Brochures, flyers, packaging, and presentation decks that look and feel premium.",
      },
      {
        icon: Layers,
        title: "Brand Visual Systems",
        desc: "Reusable design components so every new asset stays visually consistent.",
      },
      {
        icon: Figma,
        title: "Illustration & Iconography",
        desc: "Custom illustrations and icon sets that make your brand instantly recognizable.",
      },
    ],
    platforms: [
      "Social Templates",
      "Print Collateral",
      "Packaging",
      "Presentations",
      "Icons & Illustrations",
      "Brand Assets",
    ],
    process: [
      {
        step: "01",
        title: "Brief",
        desc: "Goals, audience, and existing brand guidelines review.",
      },
      {
        step: "02",
        title: "Concepts",
        desc: "Multiple creative directions presented for feedback.",
      },
      {
        step: "03",
        title: "Refinement",
        desc: "Chosen direction polished to pixel-perfect quality.",
      },
      {
        step: "04",
        title: "Delivery",
        desc: "All formats and sizes handed over, ready to use.",
      },
    ],
    stats: [
      { num: "500+", label: "Designs delivered" },
      { num: "100%", label: "Custom, on-brand work" },
      { num: "48 hr", label: "Avg. turnaround" },
    ],
    cta: "Start a design project",
  },
  {
    id: "seo",
    label: "SEO Services",
    icon: Search,
    tagline: "SEO Services",
    headline: "Rank Higher. Get Found. Grow Organically",
    sub: "Technical, on-page, and content SEO that builds long-term, sustainable organic traffic — no shortcuts, no penalties.",
    color: BRAND,
    heroIcon: Search,
    features: [
      {
        icon: Search,
        title: "Technical SEO Audit",
        desc: "Site speed, crawlability, indexing, and structure fixes that remove hidden ranking blockers.",
      },
      {
        icon: Globe,
        title: "On-Page Optimisation",
        desc: "Keyword mapping, meta content, and internal linking built around real search intent.",
      },
      {
        icon: MessageCircle,
        title: "Content Strategy",
        desc: "SEO-driven content plans that target the exact queries your customers are searching.",
      },
      {
        icon: BarChart2,
        title: "Rank Tracking & Reporting",
        desc: "Transparent monthly reports on rankings, traffic, and organic conversions.",
      },
    ],
    platforms: [
      "Technical SEO",
      "Keyword Research",
      "Content SEO",
      "Link Building",
      "Local SEO",
      "Analytics",
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        desc: "Full technical and content SEO health check.",
      },
      {
        step: "02",
        title: "Strategy",
        desc: "Keyword targeting, content plan, priority fixes.",
      },
      {
        step: "03",
        title: "Implement",
        desc: "Technical fixes, content publishing, link building.",
      },
      {
        step: "04",
        title: "Track & Refine",
        desc: "Ongoing monitoring and strategy adjustments.",
      },
    ],
    stats: [
      { num: "3×", label: "Avg. organic traffic growth" },
      { num: "top 3", label: "Avg. target ranking position" },
      { num: "6 mo", label: "To compounding results" },
    ],
    cta: "Improve my rankings",
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
  const [active, setActive] = useState(defaultService || "web");
  useEffect(() => {
    setActive(defaultService || "web");
  }, [defaultService]);
  const service = services.find((s) => s.id === active) || services[0];
  const visible = useAnimateIn(active);

  const fadeUp = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
  });

  const HeroIcon = service.heroIcon;
  const ServiceIcon = service.icon;

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        background: "#fff",
        minHeight: "100vh",
        color: "#000",
      }}
    >
      {/* ── Top Nav ── */}
      <nav
        style={{
          background: "#fff",
          borderBottom: "1px solid #e8f6fd",
          position: "sticky",
          top: 0,
          zIndex: 40,
          padding: "0 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 8,
            overflowX: "auto",
            height: 60,
            scrollbarWidth: "none",
          }}
        >
          <span
            style={{
              fontWeight: 700,
              color: BRAND,
              fontSize: 15,
              whiteSpace: "nowrap",
              marginRight: 8,
            }}
          >
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
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "6px 14px",
                  borderRadius: 999,
                  border: isActive
                    ? `1.5px solid ${BRAND}`
                    : "1.5px solid transparent",
                  background: isActive ? "#e8f6fd" : "transparent",
                  cursor: "pointer",
                  color: isActive ? BRAND_DARK : "#555",
                  fontWeight: isActive ? 600 : 400,
                  fontSize: 13,
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
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
      <section
        style={{
          background: "linear-gradient(135deg, #000 60%, #001f30)",
          padding: "80px 1.5rem 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            background: `radial-gradient(circle, ${BRAND}22 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 48,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: 280 }}>
            <div
              style={{
                ...fadeUp(0),
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#0d1a22",
                border: `1px solid ${BRAND}44`,
                borderRadius: 999,
                padding: "5px 14px",
                marginBottom: 24,
              }}
            >
              <ServiceIcon size={14} color={BRAND} />
              <span
                style={{
                  color: BRAND,
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                {service.tagline}
              </span>
            </div>
            <h1
              style={{
                ...fadeUp(80),
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              {service.headline}
            </h1>
            <p
              style={{
                ...fadeUp(160),
                color: "#aac8d8",
                fontSize: "1.05rem",
                lineHeight: 1.7,
                maxWidth: 520,
                marginBottom: 32,
              }}
            >
              {service.sub}
            </p>
            <div
              style={{
                ...fadeUp(240),
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: BRAND,
                  color: "#000",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "12px 24px",
                  borderRadius: 999,
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.85)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
              >
                {service.cta} <ArrowRight size={16} />
              </Link>
              <button
                onClick={() =>
                  document
                    .getElementById("features-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "transparent",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 14,
                  padding: "12px 24px",
                  borderRadius: 999,
                  border: "1px solid #ffffff33",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = BRAND)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#ffffff33")
                }
              >
                See how it works <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            style={{
              ...fadeUp(200),
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {service.stats.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "#0b1520",
                  border: `1px solid ${BRAND}33`,
                  borderRadius: 16,
                  padding: "24px 28px",
                  minWidth: 120,
                  textAlign: "center",
                }}
              >
                <div
                  style={{ fontSize: "1.8rem", fontWeight: 800, color: BRAND }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#7daabe",
                    marginTop: 4,
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section
        id="features-section"
        style={{ padding: "72px 1.5rem", background: "#fff" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              style={{
                ...fadeUp(0),
                display: "inline-block",
                background: "#e8f6fd",
                color: BRAND_DARK,
                borderRadius: 999,
                padding: "4px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.8,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              What's included
            </div>
            <h2
              style={{
                ...fadeUp(80),
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 800,
                color: "#000",
                margin: 0,
              }}
            >
              Everything You Need to Succeed
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {service.features.map((f, i) => {
              const FIcon = f.icon;
              return (
                <div
                  key={i}
                  style={{
                    ...fadeUp(i * 80),
                    background: "#fff",
                    border: "1px solid #e6f6ff",
                    borderRadius: 16,
                    padding: "28px 24px",
                    boxShadow: "0 4px 20px rgba(58,183,240,0.06)",
                    transition: "box-shadow 0.25s, transform 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 32px rgba(58,183,240,0.18)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(58,183,240,0.06)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      background: "#e8f6fd",
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 16,
                    }}
                  >
                    <FIcon size={22} color={BRAND} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#000",
                      marginBottom: 8,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#4a6478",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Platforms / Deliverables ── */}
      <section style={{ padding: "56px 1.5rem", background: "#f6fbff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h3
            style={{
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "#000",
              marginBottom: 24,
            }}
          >
            Platforms & Deliverables
          </h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              justifyContent: "center",
            }}
          >
            {service.platforms.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  border: `1px solid ${BRAND}33`,
                  borderRadius: 999,
                  padding: "7px 18px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: BRAND_DARK,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
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
            <div
              style={{
                display: "inline-block",
                background: "#0d1a22",
                color: BRAND,
                borderRadius: 999,
                padding: "4px 16px",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.8,
                textTransform: "uppercase",
                marginBottom: 16,
                border: `1px solid ${BRAND}33`,
              }}
            >
              Our process
            </div>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 800,
                color: "#fff",
                margin: 0,
              }}
            >
              How We Deliver Results
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            {service.process.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "#0a0a0a",
                  border: `1px solid ${BRAND}22`,
                  borderRadius: 16,
                  padding: "28px 24px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${BRAND}66`;
                  e.currentTarget.style.boxShadow = `0 0 28px ${BRAND}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${BRAND}22`;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    fontSize: "2.8rem",
                    fontWeight: 900,
                    color: `${BRAND}15`,
                    lineHeight: 1,
                    position: "absolute",
                    top: 12,
                    right: 18,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {p.step}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: BRAND,
                    letterSpacing: 1.2,
                    textTransform: "uppercase",
                    marginBottom: 10,
                  }}
                >
                  Step {p.step}
                </div>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: 8,
                  }}
                >
                  {p.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.87rem",
                    color: "#7daabe",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why MacaroniX ── */}
      <section style={{ padding: "72px 1.5rem", background: "#fff" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            gap: 48,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: 260 }}>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                fontWeight: 800,
                color: "#000",
                marginBottom: 16,
              }}
            >
              Why MacaroniX?
            </h2>
            <p style={{ color: "#4a6478", lineHeight: 1.75, marginBottom: 28 }}>
              We're not a faceless agency. We're a tight-knit team that treats
              your project as our own — with full transparency, no lock-in
              contracts, and results you can actually see.
            </p>
            {[
              {
                icon: Star,
                text: "Dedicated account manager, not a ticket queue",
              },
              { icon: BarChart2, text: "Weekly reporting — zero guesswork" },
              {
                icon: DollarSign,
                text: "Fair, clear pricing — no surprise invoices",
              },
              {
                icon: Clock,
                text: "Fast turnaround without sacrificing quality",
              },
            ].map((item, i) => {
              const IIcon = item.icon;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      background: "#e8f6fd",
                      borderRadius: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <IIcon size={16} color={BRAND} />
                  </div>
                  <span
                    style={{
                      fontSize: "0.93rem",
                      color: "#2a3d4a",
                      fontWeight: 500,
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
          <div
            style={{
              flex: "0 0 auto",
              width: "min(340px, 100%)",
              background: "linear-gradient(135deg, #000 0%, #001830 100%)",
              borderRadius: 20,
              padding: "40px 32px",
              textAlign: "center",
              border: `1px solid ${BRAND}33`,
              boxShadow: `0 0 40px ${BRAND}15`,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                background: `${BRAND}18`,
                border: `1px solid ${BRAND}44`,
                borderRadius: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
              }}
            >
              <HeroIcon size={28} color={BRAND} />
            </div>
            <h3
              style={{
                color: "#fff",
                fontSize: "1.25rem",
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              Ready to get started?
            </h3>
            <p
              style={{
                color: "#7daabe",
                fontSize: "0.88rem",
                lineHeight: 1.65,
                marginBottom: 28,
              }}
            >
              Tell us about your goals and we'll put together a custom proposal
              — free, with no obligation.
            </p>
            <Link
              href="/contact"
              style={{
                width: "100%",
                background: BRAND,
                color: "#000",
                fontWeight: 700,
                fontSize: 14,
                padding: "13px 0",
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.85)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
            >
              {service.cta} <ArrowRight size={15} />
            </Link>
            <p style={{ color: "#3a6070", fontSize: 11, marginTop: 14 }}>
              Free consultation · No lock-in contracts
            </p>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Banner ── */}
      <section
        style={{
          background: `linear-gradient(90deg, #0073b6 0%, ${BRAND} 100%)`,
          padding: "56px 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "#000",
              marginBottom: 12,
            }}
          >
            Let's Build Something Together
          </h2>
          <p
            style={{
              color: "#004f6f",
              fontSize: "1rem",
              marginBottom: 28,
              lineHeight: 1.65,
            }}
          >
            Every great brand started with a conversation. Ours takes 15 minutes
            and comes with zero pressure.
          </p>
          <Link
            href="/contact"
            style={{
              background: "#000",
              color: BRAND,
              fontWeight: 700,
              fontSize: 15,
              padding: "14px 36px",
              borderRadius: 999,
              border: "none",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 0.85)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 1)}
          >
            Start the conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── Footer note ── */}
      <div
        style={{
          background: "#fff",
          textAlign: "center",
          padding: "20px",
          borderTop: "1px solid #e8f6fd",
        }}
      >
        <p style={{ color: "#aaa", fontSize: 12, margin: 0 }}>
          © {new Date().getFullYear()} MacaroniX — Crafted for Digital
          Excellence
        </p>
      </div>
    </div>
  );
}
