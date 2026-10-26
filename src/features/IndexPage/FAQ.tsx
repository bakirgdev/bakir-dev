import Link from "next/link";
import { site } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn/components/ui/accordion";

const faqs = [
  {
    question: "What do you do?",
    answer:
      "Software engineering and everything around it: web apps, infrastructure and AI integrations. I usually own the whole lifecycle, from idea to revenue.",
  },
  {
    question: "Are you available for work?",
    answer: (
      <>
        Yes. I take on projects through my company,{" "}
        <a href={site.company.url}>{site.company.name}</a>, and I&apos;m open to
        any kind of engagement with fellow professionals.
      </>
    ),
  },
  {
    question: "How do I get in touch?",
    answer: (
      <>
        You can contact me via your preferred platform on the{" "}
        <Link href="/links">links</Link> page.
      </>
    ),
  },
];

export function FAQ() {
  return (
    <section aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="mb-10 text-center text-4xl font-bold tracking-tight"
      >
        FAQ
      </h2>

      <Accordion className="mx-auto max-w-prose">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={faq.question}
            value={faq.question}
            className="motion-preset-expand"
            style={{ animationDelay: `${i * 30}ms` }}
          >
            <AccordionTrigger className="text-base hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
