import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className=" w-full ">
      <div className="m-auto flex justify-between items-center  text-white">
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
          <ul className="hidden sm:flex text-[#000000]">
            <li className="p-4">
              <Link href="/">Approach</Link>
            </li>
            <li className="p-4">
              <Link href="/#team">Team</Link>
            </li>
            <li className="p-4">
              <Link href="/FAQs">FAQs</Link>
            </li>
            <li className="px-10 py-4 border-2 rounded-[20px] border-[#008080]">
              <Link href="/getStarted">Get Started</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
