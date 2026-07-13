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
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const ALL_TAG = "All";

const projectsData = [
  {
    id: 1,
    title: "Natura — Herbal & Organic Store",
    category: "Web",
    img: "/natura.jpg",
    link: "https://www.naturapk.store/",
    short:
      "Full-stack Next.js storefront for herbal & organic wellness products.",
    details:
      "Built end-to-end in Next.js with a MongoDB backend — product catalog, cart, and checkout, plus category browsing, bestseller highlights, and a customer review gallery to build trust before purchase.",
    tags: ["Web", "E-commerce", "Next.js"],
  },
  {
    id: 2,
    title: "HVAC & Plumbing — Territory Expansion Ad",
    category: "Video",
    img: "/vidpic1.png",
    link: "/vid1.mp4",
    short:
      "Vertical talking-head ad for a plumbing & HVAC tech expanding into new territory.",
    details:
      "Shot on location in a client's mechanical room, with the technician speaking straight to camera about the tools that keep his jobs running smoothly. We edited in animated on-screen cards for ServiceTitan and Housecall Pro right as he mentions them, timed to the dialogue so the software call-outs land exactly when he's talking about them — a simple but effective way to build credibility fast in a home-services niche.",
    tags: ["Video", "Local Business"],
  },
  {
    id: 3,
    title: "Mudasir Ahmed — Developer Portfolio",
    category: "Web",
    img: "/mudasir.png",
    link: "https://mudasir-ahmed-portfolio.vercel.app/",
    short: "Case-study portfolio site for a fullstack Next.js developer.",
    details:
      "A clean, component-driven Next.js portfolio covering skills, experience, and live project case studies — including direct links through to each shipped project — built to double as a hiring and freelance pitch tool.",
    tags: ["Web", "Portfolio", "Next.js"],
  },
  {
    id: 4,
    title: "Bigby's — Fashion Storefront",
    category: "Web",
    img: "/bigbys.png",
    link: "https://vite-build-bigby-s.vercel.app/",
    short: "Modern fashion e-commerce UI built on the MERN stack.",
    details:
      "A React and Redux Toolkit storefront backed by Express and MongoDB — product browsing, cart state management, and a full checkout flow built as a complete MERN reference project.",
    tags: ["Web", "E-commerce", "MERN"],
  },
  {
    id: 5,
    title: "KiddyLearno — Kids Tutoring Platform",
    category: "Web",
    img: "/kiddylearno.jpg",
    link: "https://www.kiddylearno.online/",
    short: "Online tutoring platform for kids in Grades 1–8, built in Next.js.",
    details:
      "A playful, trust-first site for a live tutoring service — subject breakdowns, pricing, trial booking, and parent testimonials, styled to feel safe and welcoming to both parents and young students.",
    tags: ["Web", "Education", "Next.js"],
  },
  {
    id: 6,
    title: "Streetwear Drop — Product Reveal",
    category: "Video",
    img: "/vidpic2.png",
    link: "/vid2.mp4",
    short: "Moody, back-turned product reveal for a streetwear graphic tee.",
    details:
      "Filmed in a saturated blue-lit studio, the model turns his back to camera to slowly reveal a bold graphic print across the shirt. We leaned into the lighting and a slow reveal pace to give the drop a cinematic, almost music-video feel — built for a brand that wants its merch to look collectible, not just wearable.",
    tags: ["Video", "Fashion", "Social"],
  },
  {
    id: 7,
    title: "Grok Build — Product Launch",
    category: "Video",
    img: "/vidpic3.png",
    link: "/vid3.mp4",
    short: "Framed announcement edit for the Grok Build coding agent CLI.",
    details:
      "A relaxed, at-home talking-head clip announcing a new coding agent tool, which we placed inside a rounded, bordered frame over a deep blue backdrop with a bold 'Grok Build — Just Dropped' title card. The framing device turns a simple phone-shot announcement into something that reads as a polished product launch rather than a casual update.",
    tags: ["Video", "Tech", "Launch"],
  },
  {
    id: 8,
    title: "Skin Analysis — Dermatology Clinic",
    category: "Video",
    img: "/vidpic4.png",
    link: "/vid4.mp4",
    short:
      "In-clinic walkthrough of a dermatology studio's skin-analysis machine.",
    details:
      "Filmed inside the clinic next to the actual imaging device, with the host walking viewers through what the skin analysis covers while gesturing to the equipment behind her. Bold, high-contrast captions ('come check out my skin analysis') are timed to key phrases, turning a simple facility tour into a piece built to drive bookings for the scan itself.",
    tags: ["Video", "Healthcare", "Social"],
  },
  {
    id: 9,
    title: "Appliance Repair — Marketing Comeback",
    category: "Video",
    img: "/vidpic5.png",
    link: "/vid5.mp4",
    short:
      "Founder story ad for an appliance repair business, told in his own words.",
    details:
      "A direct-to-camera piece with the founder speaking candidly about having to learn marketing himself after an earlier business setback. A cracked-glass style graphic frames a photo collage of his repair work, labeled 'Appliance Repair Business,' visually tying his personal comeback story to the brand he built from it — an honest, founder-led approach that's proving more effective than a polished corporate ad.",
    tags: ["Video", "Local Business", "Story"],
  },
];

export default function PortfolioSection({
  initialFilter = ALL_TAG,
  compact = false,
}) {
  const [filter, setFilter] = useState(initialFilter);
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
      className={`${
        compact ? "py-16 md:py-20" : "py-24"
      } px-6 md:px-20 bg-[#ffffff] text-center text-[#000000]`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`${compact ? "text-3xl" : "text-4xl"} font-bold mb-4`}
          style={{ color: "#3ab7f0" }}
        >
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

        {/* Swiper Carousel — extra horizontal padding keeps the prev/next arrows
            clear of the first & last cards so they don't intercept clicks */}
        <div className="relative px-9 sm:px-11 md:px-12">
          <style jsx global>{`
            #portfolio .swiper-button-prev,
            #portfolio .swiper-button-next {
              width: 34px;
              height: 34px;
              color: #0073b6;
              background: #ffffff;
              border-radius: 9999px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
              top: 45%;
            }
            #portfolio .swiper-button-prev {
              left: 0;
            }
            #portfolio .swiper-button-next {
              right: 0;
            }
            #portfolio .swiper-button-prev::after,
            #portfolio .swiper-button-next::after {
              font-size: 14px;
              font-weight: 700;
            }
            #portfolio .swiper-slide {
              z-index: 1;
            }
          `}</style>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            navigation
            pagination={{ clickable: true }}
            loop={filtered.length > 3}
            centeredSlides
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
                  className="relative z-10 rounded-2xl overflow-hidden border border-[#3ab7f0] hover:shadow-[0_0_30px_rgba(58,183,240,0.35)] transition cursor-pointer bg-[#ffffff]"
                  onClick={() => setModal(p)}
                >
                  <div className="w-full h-56 md:h-48 lg:h-56 relative overflow-hidden bg-gray-100">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                    {p.link && (
                      <span
                        className="absolute top-3 right-3 flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(255,255,255,0.92)",
                          color: "#004f6f",
                        }}
                      >
                        <FaExternalLinkAlt size={9} />{" "}
                        {p.category === "Video" ? "Watch" : "Live"}
                      </span>
                    )}
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
            className="fixed inset-0 z-50 flex items-center justify-center p-6 overflow-y-auto"
            style={{ background: "rgba(0,0,0,0.6)" }}
            role="dialog"
            aria-modal="true"
          >
            <div className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/90 hover:bg-white"
                aria-label="Close"
              >
                <FaTimes color="#000" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div
                  className="w-full h-80 md:h-[600px] flex items-center justify-center"
                  style={{ background: "#0b0f14" }}
                >
                  {modal.category === "Video" ? (
                    <video
                      key={modal.link}
                      src={modal.link}
                      poster={modal.img}
                      controls
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <img
                      src={modal.img}
                      alt={modal.title}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
                <div className="p-6 md:h-[600px] md:overflow-y-auto flex flex-col justify-center">
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

                  <div className="flex flex-wrap gap-3">
                    {modal.link && modal.category !== "Video" && (
                      <a
                        href={modal.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold"
                        style={{
                          background: "#3ab7f0",
                          color: "#000000",
                        }}
                      >
                        Visit Live Site <FaExternalLinkAlt size={11} />
                      </a>
                    )}
                    {modal.link && modal.category === "Video" && (
                      <a
                        href={modal.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold"
                        style={{
                          background: "#3ab7f0",
                          color: "#000000",
                        }}
                      >
                        Open Full Video <FaExternalLinkAlt size={11} />
                      </a>
                    )}
                    <a
                      href="#contact"
                      className="inline-block px-4 py-2 rounded-full font-semibold"
                      style={{
                        background: "#f3fbff",
                        color: "#004f6f",
                        border: "1px solid #def6ff",
                      }}
                    >
                      Discuss a Project
                    </a>
                    <button
                      onClick={() => {
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
