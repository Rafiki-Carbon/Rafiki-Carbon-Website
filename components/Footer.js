// next image
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="py-8 px-16 md:hidden lg:hidden xl:hidden">
        <div className="flex items-center justify-center">
          <div>
            <div className="grid grid-cols-3">
              <div>
                <div>Pillars</div>
                <div>FAQs</div>
              </div>
              <div>
                <div>Solutions</div>
                <div>Blog</div>
              </div>
              <div>
                <div>Team</div>
                <div>Contact</div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-center">
                All rights reserved. &copy; {year} Rafiki Carbon
              </p>
            </div>
            <div className="block mx-auto mt-4">
              <Image
                src={"./footer-logo.svg"}
                width={180}
                height={180}
                alt=""
                priority={true}
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Larger screens */}
      <footer className="py-4 px-16 flex justify-between items-center">
        <div className="hidden sm:block">
          <div className="grid grid-cols-3 w-full items-center w-screen">
            <div className="grid grid-cols-3">
              <div>
                <div>Pillars</div>
                <div>FAQs</div>
              </div>
              <div>
                <div>Solutions</div>
                <div>Blog</div>
              </div>
              <div>
                <div>Team</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <p className="text-center">
                All rights reserved. &copy; {year} Rafiki Carbon
              </p>
            </div>
            <div className="block mx-auto">
              <Image
                src={"./footer-logo.svg"}
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
