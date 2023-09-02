import Link from "next/link";

export default function GetStarted() {
    return (
      <div className="pills start px-4 md:px-0 mx-auto border rounded-lg justify-center items-center p-4 border-2 border-[#2F8A8A] mx-11 my-4 md:my-8">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h1 className="text-[#000] text-xl md:text-2xl font-semibold my-2">
              Get Started Today
            </h1>
            <h2 className="text-[#808080] text-sm md:text-base font-normal my-2">
              Join our marketplace and gain access to multiple carbon solution features
            </h2>
          </div>
          <div className="flex justify-center items-center my-4">
            <button className="text-white rounded-lg bg-[#008080] px-8 py-2 text-sm md:text-base">
                <Link href="/contact">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
  