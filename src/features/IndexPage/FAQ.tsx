import Link from "next/link";
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
      "I specialize in creating digital products for individuals and businesses. I enjoy the most working on digital transformations and AI integrations.",
  },
  {
    question: "Are you available to work?",
    answer:
      "I'm always open to discussing new projects and opportunities. Feel free to reach out!",
  },
  {
    question: "How to get in touch?",
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
