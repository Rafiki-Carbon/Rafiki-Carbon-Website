import { motion } from "framer-motion";
import Socials from "./Socials";
import Image from "next/image";
import { fadeIn } from "../variants";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row py-16 w-full" id="home">
      <div className="w-full md:w-1/2  px-4 md:px-8">
        <motion.div
          className="font-medium text-xl md:text-4xl xl:text-5xl leading-relaxed"
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          Fostering sustainability by linking{" "}
          <span className="text-[#0072BB]">renewables</span>,{" "}
          <span className="text-[#0072BB]">trading Renewable Energy Certificates</span>, and{" "}
          <span className="text-[#0072BB]">transparent carbon solutions</span>.
        </motion.div>
        <motion.div
          className="mt-4 md:mt-8"
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Socials />
        </motion.div>
        <div className="mt-4 md:mt-8">
          <motion.button
            className="bg-[#008080] text-white px-6 md:px-8 py-2 rounded-lg"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Get Started
          </motion.button>
        </div>
      </div>

      <div className="w-full md:w-1/2 px-4 md:px-8 md:leading-8 mt-6 md:mt-0">
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Image
            className="object-cover"
            src={"/home_img.svg"}
            width={650}
            height={100}
            alt=""
            priority={true}
          />
        </motion.div>
      </div>
    </div>
  );
}
