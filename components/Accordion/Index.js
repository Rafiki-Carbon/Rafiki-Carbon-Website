import { useState } from "react";

export default function Accordion({ title, answer }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="px-4 md:px-0">
      <div className="cursor-pointer" onClick={() => setIsActive(!isActive)}>
        <div className="flex shadow-md md:shadow-none flex-wrap border my-4 md:my-12 p-4 md:p-6 md:gap-4 rounded-md bg-white">
          <div className="text-xl md:text-2xl font-semibold">{title}</div>
          <div className="font-semibold text-2xl h-8 md:h-12">
            {isActive ? "▲" : "▼"}
          </div>
        </div>
      </div>
      {isActive && (
        <div className="text-sm md:text-base p-2 md:p-4">{answer}</div>
      )}
    </div>
  );
}
