import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const faqItems = [
  {
    group: "General",
    items: [
      {
        id: "item-1",
        question: "How long does shipping take?",
        answer:
          "Standard shipping takes 3-5 business days, depending on your location. Express shipping options are available at checkout for 1-2 business day delivery.",
      },
      {
        id: "item-2",
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. For enterprise customers, we also offer invoicing options.",
      },
      {
        id: "item-3",
        question: "Can I change or cancel my order?",
        answer:
          "You can modify or cancel your order within 1 hour of placing it. After this window, please contact our customer support team who will assist you with any changes.",
      },
    ],
  },
  {
    group: "Shipping",
    items: [
      {
        id: "item-1",
        question: "Do you ship internationally?",
        answer:
          "Standard shipping takes 3-5 business days, depending on your location. Express shipping options are available at checkout for 1-2 business day delivery.",
      },
      {
        id: "item-2",
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some specialty items may have different return terms, which will be noted on the product page.",
      },
      {
        id: "item-3",
        question: "Do you ship internationally?",
        answer:
          "Standard shipping takes 3-5 business days, depending on your location. Express shipping options are available at checkout for 1-2 business day delivery.",
      },
    ],
  },
]
export default function FAQs() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-1 md:px-6">
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          <div className="max-w-lg max-md:px-6 md:col-span-2">
            <h2 className="text-4xl font-semibold text-foreground tracking-tight">FAQs</h2>
            <p className="mt-4 text-lg text-balance text-muted-foreground">
              Your questions answered
            </p>
            <p className="mt-6 text-muted-foreground max-md:hidden">
              Can't find what you're looking for? Contact our{" "}
              <Link
                href="#"
                className="font-medium text-primary hover:underline"
              >
                customer support team
              </Link>
            </p>
          </div>

          <div className="space-y-12 md:col-span-3">
            {faqItems.map((item) => (
              <div className="space-y-4" key={item.group}>
                <h3 className="pl-6 text-lg font-semibold text-foreground">
                  {item.group}
                </h3>
                <Accordion className="-space-y-1">
                  {item.items.map((item) => (
                    <AccordionItem
                      key={item.id}
                      value={item.id}
                      className="peer rounded-xl px-6 py-1 data-open:border-none data-open:bg-card data-open:shadow-sm data-open:ring-1 data-open:shadow-black/6.5 data-open:ring-border"
                    >
                      <AccordionTrigger className="cursor-pointer text-base transition-none">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-base text-muted-foreground">
                          {item.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 px-6 text-muted-foreground md:hidden">
          Can't find what you're looking for? Contact our{" "}
          <Link href="#" className="font-medium text-primary hover:underline">
            customer support team
          </Link>
        </p>
      </div>
    </section>
  )
}
