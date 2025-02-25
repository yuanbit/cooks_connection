import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  { question: "What types of events can be hosted?", answer: "We love hosting events that bring people together along with great food - from corporate off-sites to food workshops, team-building activities, conferences, seminars, private parties, and more." },
  { question: "How many guests can you accommodate?", answer: "We can host up to 50 guests if it's an event where they're mostly standing and upto 35 guests if they all need to be seated." },
  { question: "What is your cancellation policy?", answer: "Hosts can cancel their bookings upto 1 week before their event or move it to a future date. Please reach out to us to get more specific information on how cancellations work." },
  { question: "How far in advance do I need to book?", answer: "We have some of our potential guests booking even a year ahead. So, the short answer is: as far in advance as possible to secure your desired date and ensure availability." }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="font-heading text-3xl md:text-5xl mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">Find answers to common questions about our venues and services.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg bg-white shadow-md">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium focus:outline-none transition-all"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                {openIndex === index ? <ChevronUp className="h-5 w-5 text-gray-600" /> : <ChevronDown className="h-5 w-5 text-gray-600" />}
              </button>
              <div className={`transition-all overflow-hidden ${openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"}`}>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
