// framer motion
import { motion } from "framer-motion";

// next image
import Image from "next/image";

// variants
import { fadeIn } from "../variants";

export default function Team() {
  return (
    <div className="md:grid xl:grid ">
        <div className="font-extrabold text-[#0072BB] text-lg xl:text-4xl text-center">
            The Team
        </div>
        <div className="font-bold my-4 text-[#808080] text-lg xl:text-2xl text-center">
            Discover our Founders
        </div>
      <div>
    </div> 
    <div className="md:grid xl:grid grid-cols-2 gap-24 mx-12 my-10">
        <div className="md:grid xl:grid grid-cols-1"> 
            <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            >
            <Image
            className="border-solid border-8 border-[#98FF98] object-cover"
            src={"/PASPORT 52 1.png"}
            width={430}
            height={430}
            alt=""
            priority={true}
            />
            </motion.div>

            <div
            className="font-semibold font-[600] my-4 text-[24px] xl:leading-relaxed text-left"
            >
                Munene Brian, CEO  
            </div>
            
            <div
            className="font-[400] text-[18px] xl:leading-relaxed text-left"
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
            eu massa sit amet nulla fringilla efficitur. Sed eget metus sit amet 
            tortor fermentum interdum id eget justo. Aenean lacinia, libero ac 
            hendrerit volutpat, urna libero ullamcorper libero, in tincidunt  
            lectus lorem eu odio. Vestibulum malesuada purus in purus 
            finibus sollicitudin. Fusce id augue velit.
            </div>
            {/* linkedin button  */}
            <div className="mt-8">
              <motion.button
                className="bg-[#98FF98] font-[600] text-[20px] text-dark px-8 py-2 rounded-lg"
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
               LinkedIn 
              </motion.button>
            </div>

        </div>
        <div className="md:grid xl:grid grid-cols-1"> 
            <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            >
            <Image
            className="ml-24 border-solid border-8 border-[#AFEEEE] object-cover"
            src={"/PASSPORT 51 1 (1).png"}
            width={430}
            height={430}
            alt=""
            priority={true}
            />
            </motion.div>

            <div
            className="font-[600] text-[24px] my-4 xl:leading-relaxed text-right"
            >
                Job Karani, CTO 
            </div>
            
            <div
            className="font-[400] text-[18px] xl:leading-relaxed text-right"
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus 
            eu massa sit amet nulla fringilla efficitur. Sed eget metus sit amet 
            tortor fermentum interdum id eget justo. Aenean lacinia, libero ac 
            hendrerit volutpat, urna libero ullamcorper libero, in tincidunt  
            lectus lorem eu odio. Vestibulum malesuada purus in purus  
            finibus sollicitudin. Fusce id augue velit.
            </div>
            {/* linkedin button  */}
            <div className="mt-8 text-right">
              <motion.button
                className="bg-[#AFEEEE] font-[600] text-[20px] text-dark px-8 py-2 rounded-lg"
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                LinkedIn 
              </motion.button>
            </div>
        </div>
        
        </div>
    </div>
  );
}
