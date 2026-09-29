import { ChevronDown } from "lucide-react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { faqs, type FaqBlock } from "@/lib/faq";

function Block({ block }: { block: FaqBlock }) {
  if ("list" in block) {
    return (
      <ul className="mb-4 list-disc space-y-1 pl-6 marker:text-sd1-leaf">
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if ("label" in block) {
    return (
      <p>
        <strong className="font-semibold text-sd1-blue">{block.label}</strong>{" "}
        {block.p}
      </p>
    );
  }
  return <p>{block.p}</p>;
}

/** FAQ cards styled like sd1.org news cards: pale card, blue Poppins title, green rule. */
export function Faq() {
  return (
    <Accordion multiple className="gap-4">
      {faqs.map((item, i) => (
        <AccordionItem
          key={item.q}
          value={`faq-${i}`}
          className="group/item overflow-hidden rounded-[10px] bg-sd1-mist shadow-[0_3px_8px_rgba(0,0,0,0.25)] not-last:border-b-0"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between gap-5 px-5 py-5 text-left text-lg leading-snug font-semibold text-sd1-blue outline-none hover:text-sd1-navy focus-visible:ring-4 focus-visible:ring-sd1-sky/50 focus-visible:ring-inset md:px-7 md:text-xl">
              {item.q}
              <span
                aria-hidden
                className="grid size-9 shrink-0 place-items-center rounded-md bg-sd1-blue text-white transition-transform group-data-open/item:rotate-180"
              >
                <ChevronDown className="size-5" strokeWidth={2.5} />
              </span>
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className="px-5 pb-6 text-base leading-relaxed text-sd1-ink md:px-7">
            <div className="border-t-4 border-sd1-leaf pt-5">
              {item.a.map((block, j) => (
                <Block key={j} block={block} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
