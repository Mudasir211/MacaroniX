import Link from "next/link";
import Image from "next/image";

const items = [
  {
    title: "Design & Branding",
    href: "/brand-identity-design",
    image: "/images/focus-design.svg",
  },
  {
    title: "Performance Marketing",
    href: "/services/performance-marketing",
    image: "/images/focus-performance.svg",
  },
  {
    title: "Web Design",
    href: "/services/web-design",
    image: "/images/focus-web.svg",
  },
  {
    title: "SEO & PR",
    href: "/services/seo-pr",
    image: "/images/focus-seo.svg",
  },
];

export default function FocusAreas() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {items.map((it) => (
        <Link
          key={it.title}
          href={it.href}
          className="block bg-[rgb(255,255,255)] border border-[rgb(238,238,238)] rounded-lg p-6 shadow-sm hover:shadow-[6px_6px_9px_rgba(0,0,0,0.2)] transition-shadow h-full"
        >
          <div className="h-24 flex items-center justify-center mb-4">
            <Image src={it.image} width={80} height={80} alt={it.title} />
          </div>
          <h3 className="text-center text-lg font-medium text-[rgb(51,51,51)]">
            {it.title}
          </h3>
        </Link>
      ))}
    </div>
  );
}
