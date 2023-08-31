import { Questions } from "@/data/Questions";
import { useState } from "react";
import Accordion from "./Accordion/Index";

export default function Faqs() {

  const [data] = useState([...Questions.questions])


    return (
      <>
      <div
          className="text-center text-[30px] my-8 font-[700] text-[#0072BB]"
      >
          Frequently Asked Questions
      </div>
    <main 
      className="ml-28"
    >
      {
        data && data.map((info, index) => {
          return (
          <Accordion 
          key={index}
          title={info.title} 
          answer={info.answer
          }/>
        )
        })
        
      }
    </main>
      </>
    )
  }