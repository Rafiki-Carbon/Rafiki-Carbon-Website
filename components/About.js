import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { fadeIn } from "../variants";

export default function About() {
  return (
    <div className="pills md:grid xl:grid" id="team">
      <div className="pillar font-bold text-[#0072BB] text-lg xl:text-4xl text-center">
        About Us
      </div>
      <div className="flex flex-col-reverse w-12/12 md:flex-row gap-4">
      <div className=" xl:w-6/12 md:w-12/12 md:grid xl:grid grid-cols-1 mx-4 md:mx-12 my-6">
        <div className="md:grid xl:grid grid-cols-1">
          <div className="text-[#008080] font-[600] my-4 text-[26px] xl:leading-relaxed text-center">
            Vision
          </div>

          <div className="font-[400] bg-[#98FF98] p-4 rounded-[15px] text-[18px] xl:leading-[33px] text-center">
          Fusing sustainability and innovation to harmonize progress with the planet, reshaping carbon offsetting&apos;s role through our transformative software.          </div>
          </div>
      </div>

      <div className="xl:w-6/12 md:w-12/12 md:grid xl:grid grid-cols-1 mx-4 md:mx-12 my-6">
        <div className="md:grid xl:grid grid-cols-1">
          <div className="text-[#008080] font-[600] my-4 text-[26px] xl:leading-relaxed text-center">
            Mission
          </div>

          <div className="font-[400] bg-[#98FF98] p-4 rounded-[15px] text-[18px] xl:leading-[33px] text-center">
          Innovating carbon offsetting by linking renewables and ESG corporations, turning intentions into actions through our platform. Empowering businesses to exceed sustainability goals, fostering impactful transactions for a greener world.          </div>
          </div>
      </div>
      </div>
    </div>
  );
}

