import Image from "next/image"
export default function Faqs() {

    return (
     <div className=" mx-auto w-[100%] mt-4">
        <div className="flex flex-col justify-center items-center " >
        <div className="text-center">
                <h1 className="text-[#0072BB] font-[40px] mt-2">Frequently Asked Question</h1>
          </div>
        <div class="md:w-[540px] w-[320px] mt-4 flex flex-row border bg-[#FFFFFF] justify-between items-center px-4 py-2 ">
          <div class="">
            <h6>How do I signup?</h6>
          </div>
          <div>
          <Image
              src={"./chevron-down.svg"}
              width={20}
              height={60}
              alt=""
              priority={true}
            />
          </div>
        </div>
        <div class="md:w-[540px] w-[320px] mt-4 flex flex-row border bg-[#FFFFFF] justify-between items-center px-4 py-2 ">
          <div class="">
            <h6>How do I signup?</h6>
          </div>
          <div>
          <Image
              src={"./chevron-down.svg"}
              width={20}
              height={60}
              alt=""
              priority={true}
            />
          </div>
        </div>
        <div class="md:w-[540px] w-[320px] mt-4 flex flex-row border bg-[#FFFFFF] justify-between items-center px-4 py-2 ">
          <div class="">
            <h6>How do I signup?</h6>
          </div>
          <div>
          <Image
              src={"./chevron-down.svg"}
              width={20}
              height={60}
              alt=""
              priority={true}
            />
          </div>
        </div>
        <div class="md:w-[540px] w-[320px] mt-4 flex flex-row border bg-[#FFFFFF] justify-between items-center px-4 py-2 ">
          <div class="">
            <h6>How do I signup?</h6>
          </div>
          <div>
          <Image
              src={"./chevron-down.svg"}
              width={20}
              height={60}
              alt=""
              priority={true}
            />
          </div>
        </div>
        <div class="md:w-[540px] w-[320px] mt-4 flex flex-row border bg-[#FFFFFF] justify-between items-center px-4 py-2 ">
          <div class="">
            <h6>How do I signup?</h6>
          </div>
          <div>
          <Image
              src={"./chevron-down.svg"}
              width={20}
              height={60}
              alt=""
              priority={true}
            />
          </div>
        </div>
           
        
                
            </div>
            
        </div>
    
    )
  }