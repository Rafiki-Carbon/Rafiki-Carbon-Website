import Image from "next/image";

export default function Product() {
  return (
    <div className="px-4 md:px-0" id="approach">

      <div className="text-center text-4xl font-bold text-[#0072BB] pb-2.5">Discover Our Expertise</div>

      <div className="text-center text-lg text-[#808080] font-semibold pb-8 md:pb-11">Paving the way to a green future</div>

      <div className="flex flex-col-reverse md:flex-row w-full justify-center items-center gap-24 my-20">
        <div className="w-full md:w-[500px]">
          <Image
            className="object-cover"
            src={"/dASHBOARD REC 1.png"}
            width={450}
            height={700}
            alt=""
            priority={true}
          />
        </div>

        <div className="w-full md:w-[580px]">
          <div className="font-semibold text-xl md:text-2xl pb-2 md:pb-4 pl-4 md:pl-12">Welcome to the Rafiki Carbon Marketplace</div>
          <div className="text-lg text-center md:text-left px-4 md:px-12">Where sustainable energy meets strong ESG commitments. Our dynamic platform empowers 
            corporations with predictability in REC acquisition for sustainable goals. Security is paramount, 
            ensuring genuine RECs through rigorous verification. Traceability is our hallmark, spotlighting every
             REC&apos;s origin and carbon impact. Transparency guides decisions, offering project insights and trust.
              Discover diverse RECs, 
            aligning availability with your sustainability journey within our ecosystem.</div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row w-full justify-center items-center gap-24 my-20">
        <div className="w-full md:w-[580px]">
          <div className="font-semibold text-xl md:text-2xl pb-2 md:pb-4 pl-4 md:pl-12">Discover Rafiki Carbon&apos;s Pre-financing</div>
          <div className="text-lg text-center md:text-left px-4 md:px-12">Invest in renewable projects with confidence. Enjoy predictable 
          returns, secure investments, traceable progress, transparent 
          milestones, and diverse project opportunities for a sustainable future.</div>
        </div>

        <div className="w-full md:w-[500px]">
          <Image
            className="object-cover"
            src={"/prefinance 1.png"}
            width={450}
            height={700}
            alt=""
            priority={true}
          />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row w-full justify-center items-center gap-24 my-20">

        <div className="w-full md:w-[500px]">
          <Image
            className="object-cover"
            src={"/match make 1.png"}
            width={450}
            height={700}
            alt=""
            priority={true}
          />
        </div>

        <div className="w-full md:w-[580px]">
          <div className="font-semibold text-xl md:text-2xl pb-2 md:pb-4 pl-4 md:pl-12">Seamless Synergy: Intelligent Match-Making for Confidence</div>
          <div className="text-lg text-center md:text-left px-4 md:px-12">Rafiki Carbon&apos;s Match-Making leverages advanced algorithms
           to forge partnerships. Predictability via precise compatibility, security through rigorous vetting, and 
           traceability for trusted transactions. Transparent selection empowers mission-driven collaborations. Diverse project options ensure impactful choices.</div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row w-full justify-center items-center gap-24 my-20">
        <div className="w-full md:w-[580px]">
          <div className="font-semibold text-xl md:text-2xl pb-2 md:pb-4 pl-4 md:pl-12">Achieve Seamless Carbon Neutrality</div>
          <div className="text-lg text-center md:text-left px-4 md:px-12">Our Carbon Accounting feature aligns seamlessly 
          with our guiding principles, delivering a comprehensive picture of progress. Experience predictability 
          in forecasting carbon offsets with RECs, bolstering emission reduction targets. Trust in robust security
           measures that ensure impeccable carbon offset accounting, vital for maintaining sustainability report
            integrity. Trace the journey from REC acquisition to emissions reduction, fostering accountability and 
            environmental impact awareness. Access transparency as a guiding star, providing open data access and 
            endorsing accountability in your sustainability journey. With unwavering availability of RECs, join us 
            in steering towards a greener horizon through Rafiki Carbon&apos;s harmonious
           blend of predictability, security, traceability, transparency, and availability.</div>
        </div>

        <div className="w-full md:w-[500px]">
          <Image
            className="object-cover"
            src={"/emissions REC 1.png"}
            width={450}
            height={700}
            alt=""
            priority={true}
          />
        </div>
      </div>
    </div>
  )
}
