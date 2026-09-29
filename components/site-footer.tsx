import Image from "next/image";

const social = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/SanitationDistrictNo.1",
  },
  { label: "X (Twitter)", href: "https://twitter.com/sanitationdist1" },
  { label: "Instagram", href: "https://www.instagram.com/sanitationdist1/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sd1/" },
];

const projectLinks = [
  { label: "Project Overview", href: "#overview" },
  { label: "Options Summary", href: "#options" },
  {
    label: "Full Report (PDF)",
    href: "/central-boone-county-conveyance-report.pdf",
  },
  { label: "Frequently Asked Questions", href: "#faq" },
];

const siteLinks = [
  { label: "sd1.org Home", href: "https://www.sd1.org" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Cookie Policy", href: "/cookies" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-[17px] font-semibold text-white">
      {children}
      <span
        aria-hidden
        className="mt-1.5 block h-[3px] w-[50px] rounded bg-sd1-leaf/70"
      />
    </h2>
  );
}

function LinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2.5 font-medium">
      {items.map((l) => (
        <li key={l.label}>
          <a href={l.href} className="underline-offset-4 hover:underline">
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Mirrors the sd1.org footer: textured navy, seal logo, green-barred column heads. */
export function SiteFooter() {
  return (
    <footer className="mt-auto text-white">
      <div className="bg-sd1-texture">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div>
            <Image
              src="/sd1-logo-reverse.png"
              alt="Sanitation District No. 1 of Northern Kentucky"
              width={194}
              height={206}
              className="h-[206px] w-auto"
            />
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm font-medium">
              {social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="underline-offset-4 hover:underline"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterHeading>Contact Us</FooterHeading>
            <address className="font-medium leading-relaxed not-italic">
              Sanitation District No. 1
              <br />
              of Northern Kentucky
              <br />
              1045 Eaton Drive
              <br />
              Fort Wright, KY 41017
              <br />
              <br />
              Phone:{" "}
              <a
                href="tel:+18595787450"
                className="underline-offset-4 hover:underline"
              >
                859-578-7450
              </a>
              <br />
              <a
                href="mailto:info@sd1.org"
                className="underline-offset-4 hover:underline"
              >
                info@sd1.org
              </a>
            </address>
          </div>
          <div>
            <FooterHeading>This Project</FooterHeading>
            <LinkList items={projectLinks} />
          </div>
          <div>
            <FooterHeading>Site Links</FooterHeading>
            <LinkList items={siteLinks} />
          </div>
        </div>
      </div>
      <div className="bg-sd1-mist py-5 text-center text-sm font-medium text-sd1-navy">
        © {new Date().getFullYear()} Sanitation District No. 1 of Northern
        Kentucky
      </div>
    </footer>
  );
}
