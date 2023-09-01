import Image from "next/image"

export default function Sustainable() {
    return (
      <div className="flex flex-col justify-center items-center my-16">
            <div>
            <h1 className="text-[40px] font-[700] text-[#0072BB] my-4">Sustainable Development Goals</h1>
            </div>
            <div className="flex flex-row  justify-center items-center gap-60 mt-4">
                <Image
                className="object-cover"
                src={"./sdg1.svg"}
                width={200}
                height={320}
                alt=""
                priority={true}
                />
                <Image
                className="object-cover"
                src={"./sdg2.svg"}
                width={200}
                height={320}
                alt=""
                priority={true}
                />
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
    )
}