import Image from "next/image";
import Socials from "./Socials";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      {/* Mobile */}
      <footer className="py-8 footer md:hidden lg:hidden xl:hidden">
        <div className="flex items-center justify-center">
          <div>
            <div className="grid grid-cols-3">
              <div>
                <div><Link href="#home">Home</Link></div>
                <div><Link href="#faq">FAQs</Link></div>
              </div>
              <div>
                <div><Link href="#approach">Approach</Link></div>
                <div><Link href="#blog">Blog</Link></div>
              </div>
              <div>
                <div><Link href="#team">Team</Link></div>
                <div><Link href="/">Contact</Link></div>
              </div>
            </div>
            <div className="my-8 text-center">
              <p className="my-2">&copy; {year} Rafiki Carbon. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Larger screens */}
      <footer className="py-4 px-16 hidden md:block">
        <div className="flex justify-between items-center">
          <div className="grid grid-cols-3 items-center w-full">
            <div className="grid grid-cols-3">
              <div>
                <div><Link href="#home">Home</Link></div>
                <div><Link href="#faq">FAQs</Link></div>
              </div>
              <div>
                <div><Link href="#approach">Approach</Link></div>
                <div><Link href="#blog">Blog</Link></div>
              </div>
              <div>
                <div><Link href="#team">Team</Link></div>
                <div><Link href="/contact">Contact</Link></div>
              </div>
            </div>
            <div className="justify-center items-center">
              <p className="text-center">
                &copy; {year} Rafiki Carbon. All rights reserved.
              </p>
            </div>
            <div className="block mx-auto">
              <Image
                className="object-cover"
                src={"/footer-logo.svg"}
                width={180}
                height={180}
                alt=""
                priority={true}
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
