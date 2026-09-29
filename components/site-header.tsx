import Image from "next/image";

const links = [
  { label: "Project Overview", href: "#overview" },
  { label: "Options Summary", href: "#options" },
  { label: "Full Report", href: "#report" },
  { label: "FAQs", href: "#faq" },
];

/** Mirrors sd1.org: pale bar, logo seal hanging below the bar, Poppins 600 nav. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 h-[72px] bg-sd1-mist shadow-[0_2px_6px_rgba(8,41,75,0.18)] md:h-[92px]">
      <div className="mx-auto flex h-full max-w-[1440px] items-start justify-between px-3 md:px-6">
        <a
          href="https://www.sd1.org"
          className="relative z-10 mt-1 shrink-0 rounded-full focus-visible:ring-4 focus-visible:ring-sd1-sky/60 focus-visible:outline-none md:mt-1.5"
        >
          <Image
            src="/sd1-logo.png"
            alt="Sanitation District No. 1 of Northern Kentucky — sd1.org home"
            width={308}
            height={120}
            priority
            className="h-[92px] w-auto md:h-[120px]"
          />
        </a>
        <nav
          aria-label="On this page"
          className="hidden h-full items-center lg:flex"
        >
          <ul className="flex items-center gap-10 font-semibold text-[17px] text-sd1-navy">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative py-2 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[3px] after:origin-left after:scale-x-0 after:rounded after:bg-sd1-leaf after:transition-transform hover:after:scale-x-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#faq"
          className="mt-4 rounded-md bg-sd1-blue px-4 py-2 text-sm font-semibold text-white md:mt-6 lg:hidden"
        >
          FAQs
        </a>
      </div>
    </header>
  );
}
