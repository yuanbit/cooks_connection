
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is your cancellation policy?",
    answer: "Our standard cancellation policy allows for full refunds up to 30 days before the event. Cancellations within 30 days may be eligible for partial refunds based on the circumstances."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 6 months in advance for large events and 3-4 months for smaller gatherings to ensure availability of your preferred date and venue."
  },
  {
    question: "Do you provide catering services?",
    answer: "Yes, we offer full-service catering through our network of professional chefs and culinary teams. We can accommodate various dietary requirements and cuisines."
  },
  {
    question: "What is the capacity of your venues?",
    answer: "Our venues can accommodate different group sizes. The Downtown location can host up to 300 guests, the Garden Estate up to 200, and our Waterfront venue up to 150 guests."
  }
];

export function FAQSection() {
  return (
    <section className="py-32 bg-secondary/50">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="font-heading text-3xl md:text-5xl mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our venues and services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
