import { motion } from "framer-motion";
import Socials from "./Socials";
import Image from "next/image";
import { fadeIn } from "../variants";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex w-full flex-col-reverse md:flex-row w-full md:py-8 lg:py-12 xl:py-16"
      id="home"
    >
      <div className="w-full md:w-1/2  px-4 md:px-8">
        <motion.div
          className="home-text font-medium text-xl md:text-4xl xl:text-5xl"
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          Fostering sustainability by linking{" "}
          <span className="text-[#0072BB]">renewables</span>,{" "}
          <span className="text-[#0072BB]">
            trading Renewable Energy Certificates
          </span>
          , and{" "}
          <span className="text-[#0072BB]">transparent carbon solutions</span>.
        </motion.div>
        <motion.div
          className="btn-start top mt-12 "
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Socials />
        </motion.div>
        <div className="top mt-12">
          <motion.button
            className="bg-[#008080] text-white px-6 md:px-8 py-2 rounded-lg"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Link href="/contact">Get Started</Link>
          </motion.button>
        </div>
      </div>

      <div className="w-full md:w-1/2 px-4 md:px-8 md:leading-8 mt-1 md:mt-0">
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hide-on-mobile"
        >
          <Image
            className="object-cover mx-12"
            src={"/HOMEIMAGE-removebg-preview.png"}
            width={500}
            height={100}
            alt=""
            priority={true}
          />
        </motion.div>
      </div>
    </div>
  );
}
