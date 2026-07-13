"use client";

const logos = [
  { name: "Bigby's", src: "/bigbyLogo.png" },
  { name: "KiddyLearno", src: "/kiddylearnoLogo.png" },
  { name: "Mini India", src: "/minindiaLogo.png" },
  { name: "Natura", src: "/naturaLogo.png" },
];

export default function ClientLogos() {
  return (
    <section className="relative py-4 md:py-8 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-8">
       
        <p className="mt-3 text-gray-500 text-sm md:text-base">
          Brands we've built, grown, and launched for
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* edge fades so logos scroll in/out smoothly instead of clipping abruptly */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10"
          style={{
            background: "linear-gradient(90deg, #ffffff, transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10"
          style={{
            background: "linear-gradient(270deg, #ffffff, transparent)",
          }}
        />

        <div className="marquee-track flex items-center w-max">
          {/* render the logo set twice back-to-back so the loop is seamless */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-8 md:mx-12 shrink-0"
              style={{ height: 58, width: 90 }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marquee-scroll 22s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}