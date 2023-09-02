import Link from "next/link";

export default function Explore() {
    return (
      <div className="pills start px-4 md:px-0 mx-auto w-full rounded-lg border justify-center items-center p-4 border-2 border-[#2F8A8A] my-12 mx-11 md:my-24">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h2 className="text-[#000] my-4 font-semibold text-xl md:text-2xl mx-4 md:mx-8">
              Unveil a Greener Horizon with Rafiki Carbon:
              Empowering Sustainability and Redefining Impact!
            </h2>
          </div>
          <div className="flex justify-center items-center my-4">
            <button className="text-white rounded-lg bg-[#008080] px-8 py-2 my-2 text-sm md:text-base">
            <Link href="/contact">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
