import Image from "next/image";
import {
  BookOpen,
  ClipboardList,
  Droplets,
  MapPinned,
  MessageCircleQuestion,
  Scale,
  ShieldPlus,
  SquareChevronRight,
  TrendingDown,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { Faq } from "@/components/faq";
import { OptionsTable } from "@/components/options-table";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const REPORT_PDF = "/central-boone-county-conveyance-report.pdf";

const quickLinks: {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}[] = [
  { label: "Project Overview", href: "#overview", icon: ClipboardList },
  { label: "Options Summary", href: "#options", icon: Scale },
  {
    label: "Read the Full Report",
    href: REPORT_PDF,
    icon: BookOpen,
    external: true,
  },
  { label: "FAQs", href: "#faq", icon: MessageCircleQuestion },
];

const stats: { value: string; unit?: string; caption: string }[] = [
  {
    value: "1.2M",
    unit: "gallons",
    caption:
      "of sewer overflows into Woolper Creek eliminated in a typical year",
  },
  {
    value: "$39.5M",
    caption: "projected total project cost",
  },
  {
    value: "$10.6M",
    caption: "federal funding directed by Boone County Fiscal Court",
  },
  {
    value: "<$30M",
    caption: "SD1’s net cost after ARPA funding",
  },
];

/** sd1.org quick-link button: white ring, navy band, pale disc, green line icon. */
function RingLink({
  label,
  href,
  icon: Icon,
  external,
}: (typeof quickLinks)[number]) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      className="group flex flex-col items-center gap-2 rounded-lg p-1 text-center focus-visible:ring-4 focus-visible:ring-sd1-sky/60 focus-visible:outline-none"
    >
      <span className="grid size-[64px] place-items-center rounded-full border-4 border-white p-2 md:size-[96px] md:border-[5px] md:p-3">
        <span className="grid size-full place-items-center rounded-full bg-sd1-mist transition-colors group-hover:bg-sd1-leaf">
          <Icon
            aria-hidden
            strokeWidth={1.6}
            className="size-6 text-sd1-leaf transition-colors group-hover:text-white md:size-8"
          />
        </span>
      </span>
      <span className="text-xs leading-tight font-semibold text-white sm:text-sm md:text-base">
        {label}
        {external && (
          <span className="sr-only"> (PDF, opens in a new tab)</span>
        )}
      </span>
      <span
        aria-hidden
        className="h-1 w-[40px] rounded bg-sd1-leaf md:w-[50px]"
      />
    </a>
  );
}

/** Small version of the sd1.org ring icon, used on content cards. */
function RingIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="grid size-[76px] shrink-0 place-items-center rounded-full bg-sd1-navy p-[7px] ring-4 ring-white shadow-md">
      <span className="grid size-full place-items-center rounded-full bg-sd1-mist">
        <Icon aria-hidden strokeWidth={1.6} className="size-8 text-sd1-leaf" />
      </span>
    </span>
  );
}

/** Green 50×4 bar that sits under sd1.org headings. */
function Bar({ center }: { center?: boolean }) {
  return (
    <span
      aria-hidden
      className={`mt-3 block h-1 w-[50px] rounded bg-sd1-leaf ${center ? "mx-auto" : ""}`}
    />
  );
}

/** Oswald display heading used on sd1.org section bands ("NEWS & HIGHLIGHTS"). */
function DisplayHeading({
  id,
  title,
  sub,
  tone = "dark",
}: {
  id: string;
  title: string;
  sub?: string;
  tone?: "light" | "dark";
}) {
  const color = tone === "light" ? "text-white" : "text-sd1-navy";
  return (
    <div className="text-center">
      <h2
        id={id}
        className={`scroll-mt-28 font-display text-4xl font-bold tracking-wide uppercase md:text-5xl ${color}`}
      >
        {title}
      </h2>
      {sub && <p className={`mt-1 font-medium ${color}`}>{sub}</p>}
    </div>
  );
}

/** Content card in sd1.org news-card style: ring icon, blue Poppins title, green rule. */
function InfoCard({
  id,
  icon,
  title,
  children,
}: {
  id: string;
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className="relative flex flex-col rounded-[10px] border-t-4 border-sd1-leaf bg-white px-6 pt-14 pb-8 shadow-[0_3px_10px_rgba(8,41,75,0.15)] md:px-9"
    >
      <div className="absolute -top-10 left-6 md:left-9">
        <RingIcon icon={icon} />
      </div>
      <h2
        id={id}
        className="scroll-mt-28 text-xl leading-snug font-semibold text-sd1-blue md:text-2xl"
      >
        {title}
      </h2>
      <Bar />
      <div className="mt-5 space-y-4 leading-relaxed text-sd1-ink">
        {children}
      </div>
    </section>
  );
}

/** Button modeled on sd1.org "View All News": blue block, rounded-md, boxed chevron. */
function SiteButton({
  href,
  children,
  newTab,
}: {
  href: string;
  children: React.ReactNode;
  newTab?: boolean;
}) {
  return (
    <a
      href={href}
      {...(newTab ? { target: "_blank", rel: "noopener" } : {})}
      className="inline-flex items-center gap-3 rounded-md bg-sd1-blue px-4 py-3 font-semibold text-white transition-colors hover:bg-sd1-royal focus-visible:ring-4 focus-visible:ring-sd1-sky/60 focus-visible:outline-none"
    >
      <SquareChevronRight
        aria-hidden
        className="size-7 text-sd1-leaf"
        strokeWidth={1.6}
      />
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded bg-sd1-navy px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="flex-1">
        {/* Hero photo + overlapping navy panel (sd1.org) — header + hero = 100vh */}
        <section
          aria-labelledby="page-title"
          className="flex h-[calc(100svh-72px)] min-h-[480px] flex-col md:h-[calc(100svh-92px)]"
        >
          {/* Image takes whatever height is left; object-cover = widest view that still fills */}
          <div className="relative min-h-0 flex-1">
            <Image
              src="/hero-sd1-facility.jpg"
              alt="Aerial view of a wastewater treatment facility beside the Ohio River, surrounded by fields and woods"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_62%]"
            />
          </div>

          <div className="relative z-10 mx-3 -mt-10 shrink-0 rounded-[10px] bg-sd1-navy px-4 pt-6 pb-4 shadow-lg md:mx-5 md:-mt-16 md:px-10 md:pt-8 md:pb-5">
            <div className="mx-auto max-w-5xl text-center text-white">
              <p className="text-sm font-medium tracking-wide uppercase md:text-xl">
                Central Boone County Conveyance
              </p>
              <h1
                id="page-title"
                className="mt-1 font-display text-3xl leading-[1.05] font-bold uppercase sm:text-4xl md:text-6xl"
              >
                The Solution for the Long Term
              </h1>
              <span
                aria-hidden
                className="mx-auto mt-3 block h-1 w-full max-w-xs rounded bg-sd1-leaf md:mt-4 md:h-1.5 md:max-w-md"
              />
            </div>
            <nav
              aria-label="Jump to"
              className="mx-auto mt-4 max-w-5xl md:mt-6"
            >
              <ul className="grid grid-cols-4">
                {quickLinks.map((q) => (
                  <li key={q.label}>
                    <RingLink {...q} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        {/* Project overview + by the numbers */}
        <section
          aria-labelledby="overview"
          className="px-5 pt-16 pb-16 md:pt-24 md:pb-24"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                id="overview"
                className="scroll-mt-28 font-display text-4xl font-bold tracking-wide text-sd1-navy uppercase md:text-5xl"
              >
                Project Overview
              </h2>
              <Bar />
              <p className="mt-8 text-xl leading-relaxed font-medium text-sd1-navy md:text-[1.35rem]">
                Sanitation District No. 1 (SD1) is moving forward with a major
                sewer improvement project in Central Boone County designed to
                address recurring sanitary sewer overflows, improve the
                reliability of the region’s wastewater system, expand public
                sewer service to underserved areas and meet the community’s
                long-term needs.
              </p>
              <p className="mt-5 leading-relaxed text-sd1-ink md:text-[17px]">
                Planning for the project began several years ago as SD1
                evaluated multiple alternatives for addressing capacity
                limitations in the area. After considering construction costs,
                long-term operation and maintenance, environmental impacts and
                future sewer needs, SD1 selected a solution that relies more
                heavily on gravity sewer service and ultimately eliminates the
                Bullittsville Pump Station. The project is being completed in
                phases and will connect more of Central Boone County to SD1’s
                Western Regional Water Reclamation Facility.
              </p>
            </div>

            <div>
              <h2 className="sr-only">By the numbers</h2>
              <ul className="grid grid-cols-2 gap-4 md:gap-5">
                {stats.map((s) => (
                  <li
                    key={s.value}
                    className="flex h-full min-h-[190px] flex-col rounded-[10px] bg-sd1-navy p-5 text-white shadow-[0_3px_10px_rgba(8,41,75,0.25)] md:min-h-[210px] md:p-7"
                  >
                    <span className="font-display text-4xl leading-none font-bold md:text-6xl">
                      {s.value}
                      {s.unit && (
                        <span className="ml-1.5 font-display text-xl font-medium lowercase md:ml-2 md:text-3xl">
                          {s.unit}
                        </span>
                      )}
                    </span>
                    <span
                      aria-hidden
                      className="mt-4 block h-1 w-[50px] rounded bg-sd1-leaf"
                    />
                    <span className="mt-4 text-sm leading-snug font-medium text-white/85 md:text-base">
                      {s.caption}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Executive summary band (report callout, full width) */}
        <section
          aria-labelledby="best-value"
          className="bg-sd1-report px-5 py-14 md:py-20"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold tracking-[0.12em] text-sd1-blue uppercase">
              Executive Summary
            </p>
            <h2
              id="best-value"
              className="mt-3 scroll-mt-28 text-3xl leading-tight font-semibold text-sd1-navy md:text-[2.5rem]"
            >
              Option B2 offers the best long-term value for Boone County
            </h2>
            <Bar center />
            <p className="mt-6 text-lg leading-relaxed text-sd1-ink md:text-xl">
              SD1 selected B2 because it addresses existing sewer overflows
              while creating a system that is more reliable and less expensive
              to operate and maintain over time. It uses more gravity to move
              wastewater, eliminates the Bullittsville Pump Station and provides
              more opportunities to extend sewer service while reducing the
              number of pump stations and equalization tanks.
            </p>
          </div>
        </section>

        {/* Public health band */}
        <section
          aria-labelledby="public-health"
          className="bg-white px-5 py-16 md:py-20"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
            <div className="flex flex-col items-center text-center md:w-[300px]">
              <RingIcon icon={ShieldPlus} />
              <h2
                id="public-health"
                className="mt-6 scroll-mt-28 font-display text-4xl leading-[1.05] font-bold tracking-wide text-sd1-navy uppercase md:text-5xl"
              >
                Protecting Public Health
              </h2>
              <Bar center />
            </div>
            <div className="space-y-5 leading-relaxed text-sd1-ink md:text-[17px]">
              <p className="text-xl leading-relaxed font-medium text-sd1-navy md:text-[1.35rem]">
                Public sewer systems are designed to protect public health by
                conveying and treating wastewater.
              </p>
              <p>
                The project will expand public sewer service to underserved
                areas of Boone County. Residents along the corridor will have
                the option to connect to the public sewer system and discontinue
                use of private septic systems, which can contribute to
                groundwater and surface water pollution when they fail or are
                not properly maintained.
              </p>
              <p>
                Once completed, the project is also designed to eliminate
                approximately 1.2 million gallons of sanitary sewer overflows
                into Woolper Creek in a typical year.
              </p>
            </div>
          </div>
        </section>

        {/* Overflows + gravity cards */}
        <div className="px-5 pt-24 pb-16 md:pt-28 md:pb-24">
          <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-8 lg:gap-10">
            <InfoCard
              id="overflows"
              icon={Droplets}
              title="The project will reduce sewer overflows and improve system capacity and reliability"
            >
              <p>
                The project is designed to eliminate approximately 1.2 million
                gallons of sanitary sewer overflows into Woolper Creek in a
                typical year once completed.
              </p>
              <p>
                It also addresses the limitations of the existing Bullittsville
                and Taylorsport pump stations and force mains, which Boone
                County identified as its highest-priority sanitary sewer need.
              </p>
              <p>
                Rather than adding pump stations one after another as needs
                arise—the pattern that left the Hebron KY 237 corridor with a
                chain of interconnected pump stations, bottlenecks and ongoing
                maintenance demands—B2 moves wastewater by gravity and
                eliminates the Bullittsville Pump Station.
              </p>
              <p>
                All three options could address the overflows. SD1’s decision
                focused on what would not only reduce sewer overflows, but
                provide the best long-term value for ratepayers, and the
                greatest flexibility to extend sewer service across the county.
              </p>
            </InfoCard>
            <InfoCard
              id="gravity"
              icon={TrendingDown}
              title="Using gravity to reduce long-term operating costs"
            >
              <p>
                Gravity sewers let wastewater flow downhill naturally. Pump
                stations use electricity and mechanical equipment, which require
                regular maintenance and are more prone to fail.
              </p>
              <p>
                B2’s lower-elevation sewer allows more surrounding areas to
                connect by gravity, reduces the need for additional pumping and
                storage facilities, and eliminates the Bullittsville Pump
                Station.
              </p>
              <p>
                That means fewer facilities for SD1 customers to pay to operate,
                maintain and replace over time. B2 will still use the Central
                Boone County Pump Station. The result is lower long-term costs
                for ratepayers and more reliable service.
              </p>
            </InfoCard>
          </div>
        </div>

        {/* Options summary on the sd1.org textured band */}
        <section
          aria-labelledby="options"
          className="bg-sd1-texture px-5 py-16 md:py-24"
        >
          <DisplayHeading
            id="options"
            title="Options Summary"
            sub="How alternatives A3, B2 and B3 compare"
            tone="light"
          />
          <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[10px] bg-white shadow-[0_3px_10px_rgba(0,0,0,0.35)]">
            <OptionsTable />
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed font-medium text-white md:text-xl">
            The decision wasn’t simply which option could address today’s
            overflow problem. It was which option would provide the strongest
            wastewater system and greatest long-term value over the decades
            ahead.
          </p>
        </section>

        {/* Maintenance + coverage cards */}
        <div className="px-5 pt-24 pb-16 md:pt-28 md:pb-24">
          <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:gap-8 lg:gap-10">
            <InfoCard
              id="maintenance"
              icon={Wrench}
              title="Minimizing the Long-Term Maintenance Costs"
            >
              <p>
                Sewer costs continue long after construction. Pump stations
                require electricity, frequent inspections, repairs and eventual
                equipment replacement.
              </p>
              <p>
                B2 reduces those ongoing responsibilities by eliminating the
                Bullittsville Pump Station and avoiding additional wastewater
                storage facilities. Gravity sewers still require maintenance,
                but relying less on mechanical equipment helps control long-term
                costs for customers.
              </p>
              <p>
                The report projects a total project cost of approximately $39.5
                million. Approximately $10.6 million in federal ARPA funding,
                directed to the project by Boone County Fiscal Court, brings
                SD1’s net cost below $30 million.
              </p>
            </InfoCard>
            <InfoCard
              id="coverage"
              icon={MapPinned}
              title="More Comprehensive Sewer Coverage for the County"
            >
              <p>
                B2 supports a broader approach to sewer service across Central
                Boone County. Its lower elevation allows more currently unserved
                areas to potentially connect by gravity as future needs arise.
              </p>
              <p>
                For residents in those areas, that means the option to connect
                to the public sewer system and discontinue use of private septic
                systems.
              </p>
              <p>
                Extending service by gravity also helps avoid repeatedly adding
                individual pump stations as new needs arise. Future connections
                would still require additional planning and infrastructure.
              </p>
            </InfoCard>
          </div>
        </div>

        {/* Bottom line (report callout, full-width split band) */}
        <section aria-labelledby="benefit" className="px-5 pb-16 md:pb-24">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[10px] shadow-[0_3px_10px_rgba(8,41,75,0.15)] lg:grid-cols-[2fr_3fr]">
            <div className="flex flex-col justify-center bg-sd1-blue px-7 py-10 text-white md:px-12">
              <p className="text-sm font-bold tracking-[0.12em] text-white/80 uppercase">
                Bottom Line
              </p>
              <h2
                id="benefit"
                className="mt-2 scroll-mt-28 font-display text-4xl leading-[1.05] font-bold uppercase md:text-5xl"
              >
                A Long-Term Benefit for Boone County
              </h2>
              <Bar />
            </div>
            <div className="flex items-center bg-sd1-report px-7 py-10 md:px-12">
              <p className="text-lg leading-relaxed text-sd1-ink">
                All three options address the sewer overflow problem. However,
                B2 also creates a lower-elevation gravity system that can
                potentially bring public sewer service to more areas by gravity
                rather than through additional pump stations. Compared with A3
                and B3, it eliminates the Bullittsville Pump Station and avoids
                additional pumping and storage facilities, reducing the
                equipment SD1 must operate and maintain over time. The project
                will help protect public health, improve sewer system
                reliability and provide flexibility to meet future needs while
                helping control long-term costs for customers.
              </p>
            </div>
          </div>
        </section>

        {/* Full report — sd1.org textured band + news-card treatment */}
        <section
          id="report"
          aria-labelledby="report-title"
          className="scroll-mt-24 bg-sd1-texture px-5 py-16 md:py-24"
        >
          <DisplayHeading
            id="report-title"
            title="Read the Full Report"
            sub="Alternatives evaluation and the selection of B2, prepared for the SD1 Board of Directors"
            tone="light"
          />
          <div className="mx-auto mt-10 flex max-w-4xl flex-col overflow-hidden rounded-[10px] bg-sd1-mist shadow-[0_3px_10px_rgba(0,0,0,0.35)] sm:flex-row">
            <a
              href={REPORT_PDF}
              target="_blank"
              rel="noopener"
              className="shrink-0 border-b-4 border-sd1-leaf bg-white sm:w-[260px] sm:border-r-4 sm:border-b-0"
            >
              <Image
                src="/report-cover.jpg"
                alt="Report cover: Central Boone County Sewer Project — Alternatives Evaluation and Selection of B.2"
                width={612}
                height={792}
                className="h-full w-full object-cover object-top"
              />
            </a>
            <div className="flex flex-col justify-center gap-4 p-6 md:p-9">
              <p className="text-sm font-semibold text-sd1-green">
                September 2026 · PDF, 13 pages
              </p>
              <h3 className="text-2xl leading-tight font-semibold text-sd1-blue md:text-[1.75rem]">
                Central Boone County Sewer Project: Alternatives Evaluation and
                Selection of B.2
              </h3>
              <p className="text-sd1-ink">
                Prepared by Sanitation District No. 1 of Northern Kentucky.
              </p>
              <div className="flex flex-wrap items-center gap-5 pt-2">
                <SiteButton href={REPORT_PDF} newTab>
                  Read the Full Report
                  <span className="sr-only"> (PDF, opens in a new tab)</span>
                </SiteButton>
                <a
                  href={REPORT_PDF}
                  download
                  className="group font-semibold text-sd1-blue"
                >
                  Download PDF (2.3 MB)
                  <span
                    aria-hidden
                    className="mt-0.5 block h-1 w-[35px] rounded bg-sd1-leaf transition-all group-hover:w-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          aria-labelledby="faq-title"
          className="scroll-mt-24 px-5 py-16 md:py-24"
        >
          <DisplayHeading
            id="faq-title"
            title="Frequently Asked Questions"
            sub="Answers to common questions about the selection of B2"
          />
          <div className="mx-auto mt-10 max-w-5xl">
            <Faq />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
