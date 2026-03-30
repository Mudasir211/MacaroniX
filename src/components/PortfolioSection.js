"use client";
import { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { FaTimes } from "react-icons/fa";

const ALL_TAG = "All";

const projectsData = [
  {
    id: 1,
    title: "Corporate Website",
    category: "Web",
    img: "https://source.unsplash.com/1200x800/?corporate,website",
    short: "Modern corporate site focused on conversion & performance.",
    details:
      "Designed and built a fast, accessible website with a modular CMS and analytics-first approach. Result: +42% in qualified leads within 3 months.",
    tags: ["Web", "Design"],
  },
  {
    id: 2,
    title: "Brand Film — Pulse",
    category: "Video",
    img: "https://source.unsplash.com/1200x800/?video,studio",
    short: "Brand film and motion package for product launch.",
    details:
      "Full-service production: storyboarding, filming, motion, and color grading. Delivered a 60s hero film and 15/30s cutdowns for social.",
    tags: ["Video", "Campaign"],
  },
  {
    id: 3,
    title: "Logo & Identity",
    category: "Design",
    img: "https://source.unsplash.com/1200x800/?logo,branding",
    short: "Identity system and brand guidelines for a fintech startup.",
    details:
      "Created a scalable identity, component library, and brand book. Enabled cohesive product and marketing experiences across channels.",
    tags: ["Design", "Branding"],
  },
  {
    id: 4,
    title: "Performance Marketing Campaign",
    category: "Marketing",
    img: "https://source.unsplash.com/1200x800/?marketing,campaign",
    short: "Full-funnel acquisition for e-commerce scale-up.",
    details:
      "Strategy + creative + media buying. Optimized ads and landing funnels — ROAS improved by 3.8x in 8 weeks.",
    tags: ["Marketing", "Campaign"],
  },
  {
    id: 5,
    title: "Product Landing Page",
    category: "Web",
    img: "https://source.unsplash.com/1200x800/?landing,page",
    short: "High-converting product landing that communicates value quickly.",
    details:
      "A/B tested copy and micro-animations; improved conversion by 28% vs previous design.",
    tags: ["Web", "UX"],
  },
  {
    id: 6,
    title: "Social Video Series",
    category: "Video",
    img: "https://source.unsplash.com/1200x800/?social,video",
    short: "Bite-sized videos for organic and paid social.",
    details:
      "Idea-to-execution for an ongoing content series — templates and editing pipeline for fast monthly releases.",
    tags: ["Video", "Social"],
  },
];

export default function PortfolioSection() {
  const [filter, setFilter] = useState(ALL_TAG);
  const [modal, setModal] = useState(null); // project object or null

  const tags = useMemo(() => {
    const s = new Set([ALL_TAG]);
    projectsData.forEach((p) => s.add(p.category));
    return Array.from(s);
  }, []);

  const filtered = useMemo(
    () =>
      filter === ALL_TAG
        ? projectsData
        : projectsData.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section
      id="portfolio"
      className="py-24 px-6 md:px-20 bg-[#ffffff] text-center text-[#000000]"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4" style={{ color: "#3ab7f0" }}>
          Our Work
        </h2>
        <p className="mb-8 text-gray-700 max-w-2xl mx-auto">
          A selection of projects showcasing our approach — strategic, creative,
          and performance-led.
        </p>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                filter === t
                  ? "shadow-[0_0_18px_rgba(58,183,240,0.35)]"
                  : "bg-[#f3f7fb]"
              }`}
              style={{
                border:
                  filter === t ? "1px solid #3ab7f0" : "1px solid transparent",
                color: filter === t ? "#000000" : "#333333",
                background: filter === t ? "#def6ff" : "#ffffff",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3800, disableOnInteraction: true }}
            spaceBetween={24}
            slidesPerView={1}
            effect="coverflow"
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 120,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {filtered.map((p) => (
              <SwiperSlide key={p.id}>
                <div
                  className="rounded-2xl overflow-hidden border border-[#3ab7f0] hover:shadow-[0_0_30px_rgba(58,183,240,0.35)] transition cursor-pointer bg-[#ffffff]"
                  onClick={() => setModal(p)}
                >
                  <div className="w-full h-56 md:h-48 lg:h-56 relative overflow-hidden bg-gray-100">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 text-left">
                    <div className="text-sm text-[#3ab7f0] font-semibold mb-1">
                      {p.category}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                    <p className="text-gray-600 text-sm">{p.short}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2 py-1 rounded-full"
                          style={{
                            background: "#f3fbff",
                            color: "#004f6f",
                            border: "1px solid #def6ff",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Modal / Lightbox */}
        {modal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.6)" }}
            role="dialog"
            aria-modal="true"
          >
            <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/90 hover:bg-white"
                aria-label="Close"
              >
                <FaTimes color="#000" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="w-full h-64 md:h-auto">
                  <img
                    src={modal.img}
                    alt={modal.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#3ab7f0] font-semibold mb-2">
                    {modal.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{modal.title}</h3>
                  <p className="text-gray-700 mb-4">{modal.details}</p>

                  <div className="flex flex-wrap gap-3 mb-4">
                    {modal.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-2 rounded-full"
                        style={{
                          background: "#f3fbff",
                          color: "#004f6f",
                          border: "1px solid #def6ff",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="#contact"
                      className="inline-block px-4 py-2 rounded-full font-semibold"
                      style={{
                        background: "#3ab7f0",
                        color: "#000000",
                      }}
                    >
                      Discuss a Project
                    </a>
                    <button
                      onClick={() => {
                        // demo: open same contact anchor
                        const el = document.querySelector("#contact");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                        setModal(null);
                      }}
                      className="inline-block px-4 py-2 rounded-full border border-[#3ab7f0] font-medium"
                      style={{ color: "#3ab7f0" }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* small footnote */}
        <p className="mt-6 text-sm text-gray-600">
          Want to see a full case study? Click any project to view details or
          reach out for a tailored portfolio.
        </p>
      </div>
    </section>
  );
}
