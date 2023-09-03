import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeIn } from "../variants";

export default function Team() {
  return (
    <div className="pills md:grid xl:grid" id="team">
      <div className="pillar font-bold text-[#0072BB] text-lg xl:text-4xl text-center">
        The Team
      </div>
      <div className="pillar-sub font-bold my-4 text-[#808080] text-lg xl:text-2xl text-center">
        Discover our Founders
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-4">
      <div className=" reversed-1 md:grid xl:grid grid-cols-1 mx-4 md:mx-12 my-6">
        <div className="md:grid xl:grid grid-cols-1">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Image
              className="image object-cover"
              src={"/PASPORT 52 1.png"}
              width={330}
              height={430}
              alt=""
              priority={true}
            />
          </motion.div>

          <div className="font-semibold font-[600] my-4 text-[24px] xl:leading-relaxed text-center xl:text-left">
            Munene Brian, CEO
          </div>

          <div className="font-[400] text-[18px] xl:leading-relaxed text-center xl:text-left">
            Meet Munene, the visionary behind Rafiki Carbon, revolutionizing carbon offsetting. With a software engineering background, they blend expertise and unwavering commitment to drive environmental-tech change. Munene envisions harmonious collaboration between renewable projects and conscientious corporations, redefining sustainable contributions for a greener, thriving future.
          </div>
          
          <div className="linkedin mt-4 xl:text-left">
            <motion.button
              className=" bg-[#AFEEEE] font-[600] text-[18px] text-dark px-6 py-2 rounded-lg"
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <Link href="https://www.linkedin.com/in/brian-munene-njeru" target="_blank">LinkedIn</Link>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="reversed md:grid xl:grid grid-cols-1 mx-4 md:mx-12 my-6">
        <div className="md:grid xl:grid grid-cols-1">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <Image
              className=" image object-cover"
              src={"/PASSPORT 51 1 (1).png"}
              width={330}
              height={430}
              alt=""
              priority={true}
            />
          </motion.div>

          <div className="font-semibold font-[600] my-4 text-[24px] xl:leading-relaxed text-center xl:text-left">
            Job Karani, CTO 
          </div>

          <div className="font-[400] text-[18px] xl:leading-relaxed text-center xl:text-left">
            Meet Job, the inventive force behind Rafiki Carbon&apos;s advanced solutions. With software engineering expertise, Job&apos;s passion shines through in every detail, from algorithms to user interface. Committed to impactful sustainability, they unite expertise and core values to resonate globally and drive change.
          </div>
          
          <div className="linkedin mt-4 xl:text-left">
            <motion.button
              className=" bg-[#AFEEEE] font-[600] text-[18px] text-dark px-6 py-2 rounded-lg"
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <Link href="https://www.linkedin.com/in/job-nyambura/" target="_blank">LinkedIn</Link>
            </motion.button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

