import Image from "next/image";

export default function Sustainable() {
  return (
    <div className="pills px-4 md:px-0 flex flex-col justify-center items-center my-16 md:my-32">
      <div>
        <h1 className="pillar text-center text-2xl md:text-4xl font-bold text-[#0072BB] my-4">Our Impact: The SDGs We Tackle</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 mt-4">
        <div className="w-full md:w-[200px]">
          <Image
            className="object-cover"
            src={"./sdg1.svg"}
            width={200}
            height={320}
            alt=""
            priority={true}
          />
        </div>
        <div className="w-full md:w-[200px]">
          <Image
            className="object-cover"
            src={"./sdg2.svg"}
            width={200}
            height={320}
            alt=""
            priority={true}
          />
        </div>
        <div className="w-full md:w-[200px]">
          <Image
            className="object-cover"
            src={"./sdg3.svg"}
            width={200}
            height={320}
            alt=""
            priority={true}
          />
        </div>
      </div>
    </div>
  )
}
