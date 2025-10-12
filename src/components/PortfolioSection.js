"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Corporate Website",
      img: "https://source.unsplash.com/600x400/?website",
    },
    { title: "Brand Video", img: "https://source.unsplash.com/600x400/?video" },
    {
      title: "Logo Design",
      img: "https://source.unsplash.com/600x400/?design",
    },
    {
      title: "Marketing Campaign",
      img: "https://source.unsplash.com/600x400/?marketing",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 px-6 md:px-20 bg-[#ffffff] text-center text-[#000000]"
    >
      <h2 className="text-4xl font-bold mb-12" style={{ color: "#3ab7f0" }}>
        Our Work
      </h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      >
        {projects.map((p, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-2xl overflow-hidden border border-[#3ab7f0] bg-[#ffffff] hover:shadow-[0_0_25px_rgba(58,183,240,0.5)] transition">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
