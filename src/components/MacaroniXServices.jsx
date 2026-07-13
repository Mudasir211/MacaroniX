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
  ChevronDown,
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
  Quote,
} from "lucide-react";
import Link from "next/link";
import PortfolioSection from "./PortfolioSection";

const BRAND = "#3ab7f0";
const BRAND_DARK = "#0073b6";

// Which portfolio category best supports each service — used to pre-filter
// the embedded portfolio so visitors see the most relevant proof first.
// Falls back to "All" for services without a clean match.
const PORTFOLIO_FILTER_BY_SERVICE = {
  web: "Web",
  uiux: "Web",
  ecommerce: "Web",
  erp: "Web",
  mobile: "Web",
  "agentic-ai": "Web",
  "ai-automation": "Web",
  social: "Video",
  ads: "Video",
  "digital-marketing": "Video",
};

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
        desc: "Next.js, React, Node.js, and MongoDB — built fully from scratch, custom code end to end, no page builders or CMS locking you in.",
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
      {
        icon: RefreshCw,
        title: "Ongoing Support",
        desc: "Monthly updates, security patches, and uptime monitoring so your site never falls behind.",
      },
      {
        icon: BarChart2,
        title: "Analytics & Insights",
        desc: "Google Analytics and heatmap integration so you can see exactly how visitors behave.",
      },
    ],
    platforms: [
      "Next.js",
      "React",
      "Node.js / Express",
      "MongoDB",
      "Redux Toolkit",
      "REST / GraphQL APIs",
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
      { num: "10+", label: "Sites shipped" },
    ],
    faqs: [
      {
        q: "How long does a typical website take to build?",
        a: "Most projects launch in 4–8 weeks depending on scope, from a five-page brochure site to a full custom platform.",
      },
      {
        q: "Do you work with our existing brand guidelines?",
        a: "Yes — we design within your existing brand system, or help build one from scratch if you don't have one yet.",
      },
      {
        q: "What happens after launch?",
        a: "We offer ongoing maintenance plans covering updates, backups, and small content changes, so the site keeps performing.",
      },
    ],
    testimonial: {
      quote:
        "Our new site loads instantly and leads have nearly doubled since launch.",
      name: "Sarah Chen",
      role: "Founder",
      company: "Bloom Studio",
    },
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
      {
        icon: Star,
        title: "Influencer & UGC",
        desc: "We source and manage creator partnerships that bring authentic content and new audiences.",
      },
      {
        icon: Target,
        title: "Paid Social Boosting",
        desc: "Strategic ad spend behind top-performing organic content to accelerate reach.",
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
    screenshots: [
      {
        img: "/meta-ads-manager.jpg",
        caption: "A live Meta Ads Manager account we run — active campaigns, budgets, and cost per website enquiry.",
      },
      {
        img: "/social-ads-performance.jpg",
        caption: "Creative-level performance tracking so we know exactly which post or ad is earning its spend.",
      },
      {
        img: "/meta-roas-dashboard.jpg",
        caption: "Spend, reach, and ROAS tracked month over month across every placement.",
      },
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
      { num: "3×", label: "Target follower growth" },
      { num: "85%", label: "Target engagement uplift" },
      { num: "8+", label: "Brands managed" },
    ],
    faqs: [
      {
        q: "How many platforms do you manage at once?",
        a: "Most clients focus on 2–3 core platforms where their audience is most active, though we can scale to more.",
      },
      {
        q: "Who creates the content?",
        a: "Our in-house creative team handles shooting, editing, and copywriting — you just approve.",
      },
      {
        q: "How is success measured?",
        a: "We track growth, engagement rate, and — most importantly — leads and sales generated from social.",
      },
    ],
    testimonial: {
      quote:
        "Engagement tripled in three months and we finally have a content calendar that runs itself.",
      name: "Marcus Webb",
      role: "Marketing Director",
      company: "Fernwood Coffee",
    },
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
      {
        icon: CheckCircle,
        title: "Error Handling & Alerts",
        desc: "Automations that flag issues before they become problems, with built-in fallback logic.",
      },
      {
        icon: Users,
        title: "Team Training",
        desc: "We walk your team through every workflow so they can manage and tweak automations confidently.",
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
      { num: "15+ hrs", label: "Saved per week" },
      { num: "24/7", label: "Always-on automation" },
      { num: "10+", label: "Workflows automated" },
    ],
    faqs: [
      {
        q: "Which tools do you automate?",
        a: "Anything with an API — CRMs, spreadsheets, email platforms, Slack, and custom internal tools.",
      },
      {
        q: "Is my data secure?",
        a: "Yes — all integrations use secure, authenticated connections and we never store data we don't need to.",
      },
      {
        q: "What if our process changes later?",
        a: "Automations are built modularly, so workflows can be adjusted or extended without starting over.",
      },
    ],
    testimonial: {
      quote:
        "We got back 15 hours a week almost immediately — it felt like hiring a new employee.",
      name: "Priya Nair",
      role: "Operations Lead",
      company: "Northline Logistics",
    },
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
      {
        icon: Layers,
        title: "Creative Testing",
        desc: "Multiple ad variants tested simultaneously to find what truly resonates before scaling spend.",
      },
      {
        icon: Monitor,
        title: "Landing Page Alignment",
        desc: "We make sure the page behind every ad matches the promise, so clicks actually convert.",
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
      { num: "3.8×", label: "Target ROAS" },
      { num: "42%", label: "Target lead growth" },
      { num: "8 wks", label: "To measurable results" },
    ],
    faqs: [
      {
        q: "What's the minimum ad budget?",
        a: "We typically recommend starting from $1,500/month in ad spend to gather meaningful data, plus management fees.",
      },
      {
        q: "Which platforms do you recommend?",
        a: "It depends on your audience — we'll recommend the mix during the audit, not before.",
      },
      {
        q: "How soon will we see results?",
        a: "Early signal within 2–3 weeks; meaningful ROAS trends typically emerge by week 6–8.",
      },
    ],
    testimonial: {
      quote: "Our cost per lead dropped by 40% within the first month.",
      name: "Diego Alvarez",
      role: "CEO",
      company: "Alvarez Home Services",
    },
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
      {
        icon: Database,
        title: "Custom Tool Access",
        desc: "Agents can call your internal APIs, databases, and third-party tools securely and reliably.",
      },
      {
        icon: BarChart2,
        title: "Audit Trail & Logging",
        desc: "Every agent action is logged, so you always know what happened and why.",
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
      { num: "5+", label: "Agent workflows shipped" },
      { num: "70%", label: "Faster task turnaround" },
      { num: "24/7", label: "Autonomous operation" },
    ],
    faqs: [
      {
        q: "Is this different from a chatbot?",
        a: "Yes — agents plan and execute multi-step tasks across tools, not just answer questions.",
      },
      {
        q: "How much oversight do we have?",
        a: "As much as you want — from full autonomy to approval required at every step.",
      },
      {
        q: "What's a realistic first use case?",
        a: "Most clients start with one high-volume, well-defined workflow, like lead qualification or report generation.",
      },
    ],
    testimonial: {
      quote:
        "It handles research and first-draft replies that used to eat a whole afternoon.",
      name: "Elena Volkov",
      role: "Head of Ops",
      company: "Fintra Advisors",
    },
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
      {
        icon: RefreshCw,
        title: "Data Migration",
        desc: "We migrate your existing spreadsheets and legacy systems without losing historical data.",
      },
      {
        icon: CheckCircle,
        title: "Ongoing Maintenance",
        desc: "Bug fixes, updates, and new modules added as your business needs evolve.",
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
    examples: [
      {
        icon: Layers,
        title: "Listing Generator",
        desc: "Turns raw product or property data into ready-to-publish listings automatically, cutting hours of manual entry down to minutes.",
      },
      {
        icon: Image,
        title: "Pet Portraits Order Manager",
        desc: "Tracks custom art orders end to end — request, artist assignment, revisions, and delivery — in one shared dashboard.",
      },
      {
        icon: MessageCircle,
        title: "Meeting Minutes Recorder",
        desc: "Records and transcribes meetings automatically into organized, shareable summaries no one has to type up by hand.",
      },
      {
        icon: Users,
        title: "Employee Monitoring App",
        desc: "Tracks activity, time, and productivity across a distributed team, with clear reporting for managers.",
      },
      {
        icon: Monitor,
        title: "RDP Manager",
        desc: "A single dashboard for organizing, launching, and monitoring multiple remote desktop connections at once.",
      },
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
      { num: "6+", label: "Custom systems built" },
      { num: "40%", label: "Target process time saved" },
      { num: "99.9%", label: "Uptime target" },
    ],
    faqs: [
      {
        q: "Can this replace our current spreadsheets?",
        a: "Yes — that's usually the goal. We consolidate scattered tools into one connected system.",
      },
      {
        q: "How long does implementation take?",
        a: "Simple systems launch in 6–8 weeks; complex multi-module ERPs can take 3–6 months.",
      },
      {
        q: "Do you provide training?",
        a: "Yes, full onboarding and documentation are included for every team using the system.",
      },
    ],
    testimonial: {
      quote:
        "We finally have one source of truth instead of five disconnected spreadsheets.",
      name: "Tom Higgins",
      role: "COO",
      company: "Cascade Manufacturing",
    },
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
      {
        icon: Bot,
        title: "Push Notifications",
        desc: "Smart, targeted notifications that bring users back without feeling spammy.",
      },
      {
        icon: BarChart2,
        title: "Analytics Integration",
        desc: "Track installs, retention, and in-app behaviour from day one.",
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
      { num: "5+", label: "Apps launched" },
      { num: "4.5★+", label: "Target store rating" },
      { num: "2", label: "Platforms, one codebase" },
    ],
    faqs: [
      {
        q: "Native or cross-platform?",
        a: "We default to cross-platform for cost efficiency, and go native when performance demands it.",
      },
      {
        q: "Do you handle App Store submission?",
        a: "Yes, from account setup to review responses — we manage the entire submission process.",
      },
      {
        q: "What about updates after launch?",
        a: "We offer ongoing support plans for bug fixes, OS updates, and new feature releases.",
      },
    ],
    testimonial: {
      quote:
        "Launch went smoothly and our app has held a 4.7 star rating since day one.",
      name: "Aisha Rahman",
      role: "Product Lead",
      company: "Fitloop",
    },
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
        desc: "Fully custom storefronts built from scratch with Next.js and the MERN stack — no page-builder templates, styled to match your brand exactly.",
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
      {
        icon: Globe,
        title: "Multi-Channel Selling",
        desc: "Sync your store with Amazon, Instagram Shopping, and other marketplaces from one dashboard.",
      },
      {
        icon: MessageCircle,
        title: "Abandoned Cart Recovery",
        desc: "Automated email and SMS flows that bring shoppers back to complete checkout.",
      },
    ],
    platforms: [
      "Next.js",
      "MERN Stack",
      "Redux Toolkit",
      "Stripe / Payment APIs",
      "Custom Admin Dashboard",
      "Cloud Hosting",
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
      { num: "6+", label: "Stores launched" },
      { num: "22%", label: "Target cart conversion lift" },
      { num: "<1.5s", label: "Target checkout load" },
    ],
    faqs: [
      {
        q: "Do you build on Shopify or WooCommerce?",
        a: "No — everything we build is custom-coded from scratch with Next.js and the MERN stack, so you're never boxed in by a page builder's templates or paying monthly platform fees for features we can just build in.",
      },
      {
        q: "Can you migrate our existing store?",
        a: "Yes, including products, customers, and order history, with minimal downtime.",
      },
      {
        q: "Do you handle ongoing updates?",
        a: "We offer maintenance plans for new collections, seasonal changes, and performance monitoring.",
      },
    ],
    testimonial: {
      quote:
        "Checkout abandonment dropped noticeably in the first month after the redesign.",
      name: "Grace Lin",
      role: "Founder",
      company: "Willow & Ash",
    },
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
      {
        icon: MessageCircle,
        title: "Content Marketing",
        desc: "Blog posts, guides, and resources built to attract and convert organic traffic.",
      },
      {
        icon: RefreshCw,
        title: "Marketing Automation",
        desc: "Lead nurture sequences and lifecycle campaigns that run without manual effort.",
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
    screenshots: [
      {
        img: "/facebook-ads-dashboard.jpg",
        caption: "Consolidated paid social reporting — impressions, CPC, CPM, and CTR in one view.",
      },
      {
        img: "/traffic-revenue-dashboard.jpg",
        caption: "Multi-channel traffic and revenue breakdown across email, organic, and paid — so budget follows what actually works.",
      },
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
      { num: "42%", label: "Target lead growth" },
      { num: "3×", label: "Target organic traffic growth" },
      { num: "8 wks", label: "To measurable results" },
    ],
    faqs: [
      {
        q: "Do you handle both paid and organic?",
        a: "Yes — we build integrated strategies across SEO, content, email, and paid channels.",
      },
      {
        q: "How do you measure ROI?",
        a: "Every channel is tied to a shared dashboard tracking leads, cost per acquisition, and revenue.",
      },
      {
        q: "Is there a minimum contract length?",
        a: "We recommend a 3-month minimum to see meaningful results, month-to-month after that.",
      },
    ],
    testimonial: {
      quote:
        "Our organic traffic tripled and we finally know which channels actually drive revenue.",
      name: "Ben Okafor",
      role: "Marketing Manager",
      company: "Greenline Supply",
    },
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
      {
        icon: CheckCircle,
        title: "Accessibility Audits",
        desc: "WCAG-compliant design so your product is usable by everyone, not just some users.",
      },
      {
        icon: Code,
        title: "Developer Handoff",
        desc: "Clean specs, redlines, and component documentation that make engineering handoff painless.",
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
      { num: "28%", label: "Target conversion uplift" },
      { num: "40%", label: "Target drop-off reduction" },
      { num: "10+", label: "Products designed" },
    ],
    faqs: [
      {
        q: "Do you design or build, or both?",
        a: "We focus on design — research through developer handoff — and can partner with your dev team or ours.",
      },
      {
        q: "What if we already have a partial design system?",
        a: "We'll audit and extend what exists rather than starting from zero.",
      },
      {
        q: "How many rounds of revisions are included?",
        a: "Two structured revision rounds per phase, with async feedback in between.",
      },
    ],
    testimonial: {
      quote:
        "Our drop-off rate dropped by 40% after the redesign — the difference was night and day.",
      name: "Layla Haddad",
      role: "Head of Product",
      company: "Pulse Health",
    },
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
      {
        icon: Award,
        title: "Packaging Design",
        desc: "Shelf-ready packaging design that stands out and stays true to your brand.",
      },
      {
        icon: Clock,
        title: "Fast Revisions",
        desc: "Quick turnaround on edits so campaigns never get held up waiting on assets.",
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
      { num: "50+", label: "Designs delivered" },
      { num: "100%", label: "Custom, on-brand work" },
      { num: "48 hr", label: "Avg. turnaround" },
    ],
    faqs: [
      {
        q: "Do you offer full brand identity design?",
        a: "Yes — logo, color, type, and full visual systems for new or refreshed brands.",
      },
      {
        q: "What file formats do we receive?",
        a: "All working and export files — AI, PSD, PNG, PDF — sized for every platform you need.",
      },
      {
        q: "Can you match our existing brand guidelines?",
        a: "Absolutely, or help formalize guidelines if you don't have any documented yet.",
      },
    ],
    testimonial: {
      quote:
        "Every asset feels like it was made by the same team — because it finally is.",
      name: "Noah Kim",
      role: "Brand Manager",
      company: "Solace Skincare",
    },
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
      {
        icon: Globe,
        title: "Local SEO",
        desc: "Google Business Profile optimisation and local citations that win map-pack rankings.",
      },
      {
        icon: BarChart2,
        title: "Competitor Analysis",
        desc: "Ongoing tracking of competitor rankings and content gaps you can capitalize on.",
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
      { num: "3×", label: "Target organic traffic growth" },
      { num: "top 3", label: "Target ranking position" },
      { num: "6 mo", label: "To compounding results" },
    ],
    faqs: [
      {
        q: "How long until we see results?",
        a: "Early movement in 6–8 weeks; compounding, durable growth typically builds over 4–6 months.",
      },
      {
        q: "Do you guarantee first-page rankings?",
        a: "No one honestly can — we focus on sustainable growth, not shortcuts that risk penalties.",
      },
      {
        q: "Do you write the content too?",
        a: "Yes, our content team writes SEO-optimised pages and articles as part of the strategy.",
      },
    ],
    testimonial: {
      quote:
        "We went from page 3 to page 1 for our top keywords in under five months.",
      name: "Rachel Osei",
      role: "Owner",
      company: "Osei Law Group",
    },
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
  const [openFaq, setOpenFaq] = useState(0);
  useEffect(() => {
    setActive(defaultService || "web");
  }, [defaultService]);
  useEffect(() => {
    setOpenFaq(0);
  }, [active]);
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
                    ...fadeUp(i * 70),
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
   {/* ── Portfolio — always visible, pre-filtered to whatever's most relevant to this service ── */}
      <div style={{ borderTop: "1px solid #e8f6fd" }}>
        <PortfolioSection
          key={active}
          initialFilter={PORTFOLIO_FILTER_BY_SERVICE[service.id] || "All"}
          compact
        />
      </div>
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

      {/* ── Example Builds (only for services that define them, e.g. Custom Software & ERP) ── */}
      {service.examples && (
        <section style={{ padding: "72px 1.5rem", background: "#fff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div
                style={{
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
                Real builds
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                  fontWeight: 800,
                  color: "#000",
                  margin: 0,
                }}
              >
                Custom Software We've Shipped
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 20,
              }}
            >
              {service.examples.map((ex, i) => {
                const EIcon = ex.icon;
                return (
                  <div
                    key={i}
                    style={{
                      background: "#f6fbff",
                      border: "1px solid #e6f6ff",
                      borderRadius: 16,
                      padding: "28px 24px",
                      transition: "box-shadow 0.25s, transform 0.25s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 8px 32px rgba(58,183,240,0.18)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: "#fff",
                        border: `1px solid ${BRAND}33`,
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16,
                      }}
                    >
                      <EIcon size={20} color={BRAND} />
                    </div>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#000",
                        marginBottom: 8,
                      }}
                    >
                      {ex.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#4a6478",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {ex.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Screenshots / Results (only for services that define them, e.g. Social & Digital Marketing) ── */}
      {service.screenshots && (
        <section style={{ padding: "72px 1.5rem", background: "#f6fbff" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div
                style={{
                  display: "inline-block",
                  background: "#fff",
                  color: BRAND_DARK,
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
                Real numbers
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
                  fontWeight: 800,
                  color: "#000",
                  margin: 0,
                }}
              >
                Straight From Our Dashboards
              </h2>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {service.screenshots.map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: "#fff",
                    border: "1px solid #e6f6ff",
                    borderRadius: 16,
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(58,183,240,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 10",
                      background: "#0b1520",
                    }}
                  >
                    <img
                      src={s.img}
                      alt={s.caption}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      margin: 0,
                      padding: "16px 18px",
                      fontSize: "0.85rem",
                      color: "#4a6478",
                      lineHeight: 1.6,
                    }}
                  >
                    {s.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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

  

      {/* ── FAQ ── */}
      <section style={{ padding: "72px 1.5rem", background: "#fff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div
              style={{
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
              FAQ
            </div>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                fontWeight: 800,
                color: "#000",
                margin: 0,
              }}
            >
              Common Questions
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {service.faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  style={{
                    border: `1px solid ${isOpen ? BRAND : "#e6f6ff"}`,
                    borderRadius: 14,
                    overflow: "hidden",
                    transition: "border-color 0.2s",
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 16,
                      padding: "16px 20px",
                      background: isOpen ? "#e8f6fd" : "#fff",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 0.2s",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "#000",
                      }}
                    >
                      {f.q}
                    </span>
                    <ChevronDown
                      size={18}
                      color={isOpen ? BRAND_DARK : "#888"}
                      style={{
                        flexShrink: 0,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                      }}
                    />
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? 200 : 0,
                      opacity: isOpen ? 1 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.3s ease, opacity 0.25s ease",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        padding: "0 20px 18px",
                        fontSize: "0.9rem",
                        color: "#4a6478",
                        lineHeight: 1.65,
                      }}
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Why MacaroniX ── */}
      <section style={{ padding: "72px 1.5rem", background: "#f6fbff" }}>
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
                      background: "#fff",
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

    
    </div>
  );
}