import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "../variants";
import Link from "next/link";

export default function Partners() {
  return (
    <div className="pills md:grid xl:grid" id="team">
      <div className="pillar font-bold text-[#0072BB] text-lg xl:text-4xl text-center">
        Our Partners
      </div>
      <div className="flex w-12/12 md:block-row gap-4">
      <div className=" xl:w-6/12 md:w-12/12 md:grid xl:grid grid-cols-1 mx-4 md:mx-2 my-6">
        <div className="md:grid xl:grid grid-cols-1 xl:border-2 xl:border-[#2F8A8A] xl:rounded-lg xl:m-24 xl:flex xl:justify-items-center xl:items-center">
            <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=""
            >
            <Link href={'https://jacobsladder.africa/'} target="_blank">
                <Image
                    className="object-cover"
                    src={"/jla.png"}
                    width={100}
                    height={100}
                    alt=""
                    priority={true}
                />
            </Link>
            </motion.div>
        </div>
      </div>

      <div className="xl:w-6/12 md:w-12/12 md:grid xl:grid grid-cols-1 mx-4 md:mx-2 my-6">
        <div className="md:grid xl:grid grid-cols-1 xl:border-2 xl:border-[#2F8A8A] xl:rounded-lg sm:border-0 xl:m-24 xl:flex xl:justify-items-center  xl:items-center ">
            <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=""
            >
            <Link href={'https://peercarbon.earth/'} target="_blank">
                <Image
                    className="object-cover"
                    src={"/peerlogo.png"}
                    width={100}
                    height={200}
                    alt=""
                    priority={true}
                />
            </Link>
            </motion.div>
        </div>
      </div>
      </div>
    </div>
  );
}

