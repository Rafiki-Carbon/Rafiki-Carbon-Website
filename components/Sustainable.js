import Image from "next/image"

export default function Sustainable() {
    return (
      <div className="flex flex-col justify-center items-center">
            <div>
            <h1 className="text-[40px] font-[600] text-[#0072BB]">Sustainable Development Goals</h1>
            </div>
            <div className="flex flex-row  justify-center items-center gap-10 mt-4">
                <Image
                src={"./sdg1.svg"}
                width={300}
                height={320}
                alt=""
                priority={true}
                />
                <Image
                src={"./sdg2.svg"}
                width={316}
                height={320}
                alt=""
                priority={true}
                />
                <Image
                src={"./sdg3.svg"}
                width={328}
                height={320}
                alt=""
                priority={true}
                />
            </div>
      </div>
    )
}