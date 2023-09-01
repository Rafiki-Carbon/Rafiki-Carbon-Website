import { useState } from "react";

export default function Accordion({
    title,
    answer
}) {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
        <div
        className="content-center"
        >
        <div onClick={() => setIsActive(!isActive)}>
            <div 
            className="flex shadow-[0px_4px_4px_0px_rgba(0, 0, 0, 0.25)] w-[963px] flex-wrap border my-12 p-[20px] gap-[120px] rounded-[9px] bg-[#fff] "
            >
            <div 
            className="text-[20px] font-[600]"
            >
            {title}
            </div>
            <div 
            className="font-[900] h-[24px]"
            >
            {isActive ? '^' : '˅'}
            </div>
            </div>
        </div>
        {isActive && 
            <div
            className="text-[14px] w-[963px]"
            >
            {answer}
            </div>}
        </div>
        </>
    )
}