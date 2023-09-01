// framer motion
import { motion } from "framer-motion";

// Component
import Socials from "./Socials";

// next image
import Image from "next/image";

// variants
import { fadeIn } from "../variants";

export default function Home() {
  return (
    <div className="flex  py-16 w-[100%]">
      <div 
      className="w-[50%] leading-8 "
      >
        {/* title */}
        <motion.div
          className="font-medium text-[50px]  xl:leading-relaxed"
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          Fostering sustainability by <br /> linking{" "}
          <span className="text-[#0072BB]">renewables</span>,{" "}
          <span className="text-[#0072BB]">
            trading <br /> Renewable Energy <br /> Certificates
          </span>
          , and <br />{" "}
          <span className="text-[#0072BB]">
            transparent carbon <br />
            solutions
          </span>{" "}
          .
        </motion.div>
        {/* socials */}
        <motion.div
          className="mt-8"
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Socials />
        </motion.div>
        {/* Get started Button */}
        <div className="mt-8">
          <motion.button
            className="bg-[#008080] text-white px-8 py-2 rounded-lg"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Get Started
          </motion.button>
        </div>
      </div>

    <div 
    className="w-[50%]"
    >
    <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Image
        className="object-cover"
          src={"./home_img.svg"}
          width={450}
          height={100}
          alt=""
          priority={true}
        />
      </motion.div>
    </div>
    </div>
  );
}
