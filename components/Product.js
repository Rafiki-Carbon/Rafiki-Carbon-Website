import Image from "next/image"

export default function Product() {
    return (
      <div class="">

        <div class="text-center text-3xl font-bold pb-2.5" >Discover Our Expertise</div>

        <div class="text-center text-s text-gray-500  pb-11">Paving the way to a green future</div>

      <div class="flex w-full ml-11 gap-4 items-center">

        <div class="w-[500px] ">

        <Image
            // className="border-solid border-8 border-[#98FF98]"
            src={"/dASHBOARD REC 1.png"}
            width={450}
            height={700}
            alt=""
            priority={true}
         />

        </div>

        <div 
        className="w-[580px]">
          
          <div class="font-semibold text-lg pb-[15px] pl-[20px] pl-[70px]">Welcome to the Rafiki Carbon Marketplace</div>

          <div class="text-center w-[500px] text-[16px]">Where sustainable energy meets strong ESG commitments. Our dynamic platform empowers 
            corporations with predictability in REC acquisition for sustainable goals. Security is paramount, 
            ensuring genuine RECs through rigorous verification. Traceability is our hallmark, spotlighting every
             REC's origin and carbon impact. Transparency guides decisions, offering project insights and trust.
              Discover diverse RECs, 
            aligning availability with your sustainability journey within our ecosystem.</div>
        </div>

      </div>

<div class="flex w-full ml-11 gap-4 items-center pt-[150px]">

<div 
className="w-[580px]">
  
  <div class="font-semibold text-lg pb-[15px] pl-[70px]">Discover Rafiki Carbon's Pre-financing</div>

  <div class="text-center w-[500px] text-[16px]">Invest in renewable projects with confidence. Enjoy predictable 
returns, secure investments, traceable progress, transparent 
milestones, and diverse project opportunities for a sustainable future.</div>
</div>

<div class="w-[500px] ">

<Image
    // className="border-solid border-8 border-[#98FF98]"
    src={"/prefinance 1.png"}
    width={450}
    height={700}
    alt=""
    priority={true}
 />

</div>

</div>

<div class="flex w-full ml-11 gap-4 items-center pt-[150px]">

<div class="w-[500px] ">

<Image
    // className="border-solid border-8 border-[#98FF98]"
    src={"/match make 1.png"}
    width={450}
    height={700}
    alt=""
    priority={true}
 />

</div>

<div 
className="w-[580px]">
  
  <div class="font-semibold text-lg pb-[15px] pl-[20px] text-center w-[500px]">Seamless Synergy: Intelligent Match-Making for Confidence</div>

  <div class="text-center w-[500px] text-[16px]">Rafiki Carbon's Match-Making leverages advanced algorithms
   to forge partnerships. Predictability via precise compatibility, security through rigorous vetting, and 
   traceability for trusted transactions. Transparent selection empowers mission-driven collaborations. Diverse project options ensure impactful choices.</div>
</div>

</div>

<div class="flex w-full ml-11 gap-4 items-center pt-[150px] pb-[150px]">

<div 
className="w-[580px]">
  
  <div class="font-semibold text-lg pb-[15px] pl-[70px]">Achieve Seamless Carbon Neutrality</div>

  <div class="text-center w-[500px] text-[16px]">Our Carbon Accounting feature aligns seamlessly 
  with our guiding principles, delivering a comprehensive picture of progress. Experience predictability 
  in forecasting carbon offsets with RECs, bolstering emission reduction targets. Trust in robust security
   measures that ensure impeccable carbon offset accounting, vital for maintaining sustainability report
    integrity. Trace the journey from REC acquisition to emissions reduction, fostering accountability and 
    environmental impact awareness. Access transparency as a guiding star, providing open data access and 
    endorsing accountability in your sustainability journey. With unwavering availability of RECs, join us 
    in steering towards a greener horizon through Rafiki Carbon's harmonious
   blend of predictability, security, traceability, transparency, and availability.</div>
</div>

<div class="w-[500px] ">

<Image
    // className="border-solid border-8 border-[#98FF98]"
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