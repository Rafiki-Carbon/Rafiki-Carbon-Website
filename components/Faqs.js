import { Questions } from "@/data/Questions";
import { useState } from "react";
import Accordion from "./Accordion/Index";

export default function Faqs() {

  const [data] = useState([...Questions.questions]);

  return (
    <div className="pills px-4 md:px-0" id="faq">
      <div className="pillar text-center text-2xl md:text-4xl my-8 font-bold text-[#0072BB] mt-16">
        FAQs
      </div>
      <main className="mb-16 md:mb-32">
        {data && data.map((info, index) => (
          <Accordion 
            key={index}
            title={info.title} 
            answer={info.answer}
          />
        ))}
      </main>
    </div>
  );
}
