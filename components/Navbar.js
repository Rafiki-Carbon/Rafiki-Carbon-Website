import Link from "next/link";
import Image from "next/image";


export default function Navbar() {
  return (
    <div className=" w-full ">
      <div className=" mx-auto flex justify-between items-center w-[90%] text-white">
        <div className="">
          <Link href="/" className="font-bold text-4xl text-[#000000] ">
            <Image
              src={"./rafiki-logo.svg"}
              width={220}
              height={60}
              alt=""
              priority={true}
            />
          </Link>
        </div>
        <div className="">
          <ul className="hidden sm:flex text-[#000000] gap-4 items-center">
            <li className="">
              <Link href="/">Approach</Link>
            </li>
            <li className="">
              <Link href="/#team">Team</Link>
            </li>
            <li className="">
              <Link href="/FAQs">FAQs</Link>
            </li>
            <li className="px-3 py-2 flex items-center border rounded-[20px] border-[#008080]">
              <Link href="/getStarted">Get Started</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}