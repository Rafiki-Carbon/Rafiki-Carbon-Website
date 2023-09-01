import { Questions } from "@/data/Questions";
import { useState } from "react";
import Accordion from "./Accordion/Index";

export default function Faqs() {

  const [data] = useState([...Questions.questions]);

  return (
    <div className="px-4 md:px-0">
      <div className="text-center text-2xl md:text-4xl my-8 font-bold text-[#0072BB] mt-16">
        Frequently Asked Questions
      </div>
      <main className="mx-4 md:mx-12 mb-16 md:mb-32">
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
