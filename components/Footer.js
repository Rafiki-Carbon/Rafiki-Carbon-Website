// next image
import Image from "next/image";
import Socials from "./Socials";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="py-8 px-16 md:hidden lg:hidden xl:hidden">
        <div className="flex items-center justify-center">
          <div>
            <div className="grid grid-cols-3">
              <div>
                <div>Home</div>
                <div>FAQs</div>
              </div>
              <div>
                <div>Approach</div>
                <div>Blog</div>
              </div>
              <div>
                <div>Team</div>
                <div>Contact</div>
              </div>
            </div>
            <div className="my-8 block">
              <div
              className="text-center"
              >
                <Socials />
              </div>
              <p className="text-center">
                All rights reserved. &copy; {year} Rafiki Carbon
              </p>
            </div>
            <div className="block mx-auto my-4">
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
          <div className="grid grid-cols-3 items-center w-screen">
            <div className="grid grid-cols-3">
              <div>
                <div>Home</div>
                <div>FAQs</div>
              </div>
              <div>
                <div>Approach</div>
                <div>Blog</div>
              </div>
              <div>
                <div>Team</div>
                <div>Contact</div>
              </div>
            </div>
            <div className="justify-center items-center">
              {/* <div className="text-center">
                <Socials />
              </div> */}
              <p className="text-center">
                All rights reserved. &copy; {year} Rafiki Carbon
              </p>
            </div>
            <div className="block mx-auto">
              <Image
                className="object-cover"
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
