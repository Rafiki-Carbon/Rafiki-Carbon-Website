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
    <div className="md:grid xl:grid grid-cols-2 py-16">
      <div>
        {/* title */}
        <motion.div
          className="font-medium text-lg xl:text-4xl xl:leading-relaxed"
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

      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Image
          src={"./home_img.svg"}
          width={450}
          height={60}
          alt=""
          priority={true}
        />
      </motion.div>
    </div>
  );
}
