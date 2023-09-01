"use client";

import { useState } from "react";
import Link from "next/link";
import useMediaQuery from "./hooks/MediaQuery";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");

  return (
    <nav className={` z-40 w-full `}>
      <div className="">
        {isAboveSmallScreens ? (
          <div
            className="flex justify-between items-center text-sm mx-auto max-w-[90%]
font-semibold"
          >
            <div className="flex items-center">
              <Link href="/" className="font-bold text-4xl text-[#000000] ">
                <Image
                  src={"./rafiki-logo.svg"}
                  width={220}
                  height={60}
                  priority={true}
                  alt=""
                />
              </Link>
            </div>
            <div className="text-[#000000] flex flex-row gap-4 items-center">
              <Link href="#approach">Approach</Link>
              <Link href="#team">Team</Link>
              <Link href="#faq">FAQs</Link>
              <Link href="#blog">Blog</Link>
              <button className="px-3 py-2 flex items-center border rounded-[20px] border-[#008080]">
                <Link href="/">Get Started</Link>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-end px-4">
            <button
              className="rounded-full bg-red p-2 "
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <FaBars className="text-white h-6 w-6" />
            </button>
          </div>
        )}

        {/* mobile pop up */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed left-0 bottom-0 h-full w-[300px] bg-green-600">
            {/* icon */}
            <div className="flex justify-end p-8">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <FaTimes className="text-white h-6 w-6" />
              </button>
            </div>

            {/* menu */}

            <div className="flex flex-col ml-[3%] text-2xl text-deep-blue mt-[-15px]">
              <div className="">
                <Link href="/" className="font-bold text-4xl text-[#000000] ">
                  <Image
                    src={"./rafiki-logo.svg"}
                    width={200}
                    height={60}
                    priority={true}
                    alt=""
                  />
                </Link>
              </div>
              <div className="text-[#000000] gap-2 items-center flex flex-col">
                <Link href="#approach">Approach</Link>
                <Link href="#team">Team</Link>
                <Link href="#faq">FAQs</Link>
                <Link href="#blog">Blog</Link>
                <button className="px-3 py-2 flex items-center border rounded-[20px] border-[#008080]">
                  <Link href="/getStarted">Get Started</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
