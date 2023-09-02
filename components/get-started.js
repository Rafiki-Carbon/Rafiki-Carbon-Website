// import Image from "next/image";

// const GetStartedPage = () => {
//     return (
      
//       <div className="flex w-[100%]">
//         <div className="w-[50%] bg-[green] py-24">
//           <div className="mx-36">
//               <Image
//                 className="object-cover"
//                 src={"/footer-logo.svg"}
//                 width={300}
//                 height={180}
//                 alt=""
//                 priority={true}
//               />
//             </div>
//             <p className="text-center text-[32px] font-[600] px-4">
//               Connecting Renewable and ESG-conscious Corporations through Renewable Energy Certificates for a sustainable future. 
//             </p>
//         </div>

//         <div className="w-[50%] bg-[red] px-28 py-12">

//         <div className="text-center text-xl font-medium pb-5">Become an Early Adopter</div>
//         <div className="ml-22">
//           <div className="text-base pb-3">Full name</div>
//           <input
//             className="outline-none pl-5 text-sm border border-black rounded-[15px] w-96 h-16"
//             type="text"
//             placeholder="Full name"
//           />
//         </div>
//         <div className="ml-22">
//           <div className="text-base pb-3 pt-5">Contact Email</div>
//           <input
//             className="outline-none pl-5 text-sm border border-black rounded-[15px] w-96 h-16"
//             type="text"
//             placeholder="Email"
//           />
//         </div>
//         <div className="ml-22">
//           <div className="text-base pb-3 pt-5">Phone Number</div>
//           <input
//             className="outline-none pl-5 text-sm border border-black rounded-[15px] w-96 h-16"
//             type="text"
//             placeholder="Phone"
//           />
//         </div>
//         <div className="ml-22">
//           <div className="text-base pb-3 pt-5">Country</div>
//           <input
//             className="outline-none pl-5 text-sm border border-black rounded-[15px] w-96 h-16"
//             type="text"
//             placeholder="Country"
//           />
//         </div>
//         <div className="ml-22">
//           <div className="text-base pb-3 pt-5">Role</div>
//           <input
//             className="outline-none pl-5 text-sm border border-black rounded-[15px] w-96 h-16"
//             type="text"
//             placeholder="Project Developer/Investor"
//           />
//         </div>
//         <div className="flex justify-center items-center pt-10">
//           <button className="w-96 h-16 flex-shrink-0 rounded-[15px] text-white bg-teal-800 hover:bg-teal-700 focus:outline-none">
//             Get Early Access
//           </button>
//         </div>

//         </div>
//       </div>

//     )
//   }
  
//   export default GetStartedPage;
  
import Image from "next/image";

const GetStartedPage = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Column (Image) */}
      <div className="lg:w-1/2 bg-green py-24">
        <div className="mx-6 lg:mx-36">
          <Image
            className="object-cover"
            src={"/footer-logo.svg"}
            width={300}
            height={180}
            alt=""
            priority={true}
          />
        </div>
        <p className="text-center text-2xl font-semibold px-4">
          Connecting Renewable and ESG-conscious Corporations through Renewable Energy Certificates for a sustainable future.
        </p>
      </div>

      {/* Right Column (Form) */}
      <div className="lg:w-1/2 bg-red px-4 py-12">
        <div className="text-center text-xl font-medium pb-5">Become an Early Adopter</div>
        <div className="ml-4 lg:ml-22">
          {/* Input fields */}
            <div className="ml-22">
              <div className="text-base pb-3">Full name</div>
              <input
                className="outline-none pl-5 text-sm border border-black rounded-[15px] w-96 h-16"
                type="text"
                placeholder="Full name"
              />
            </div>
            <div className="ml-22">
              <div className="text-base pb-3 pt-5">Contact Email</div>
              <input
                className="outline-none pl-5 text-sm border border-black rounded-[15px] w-96 h-16"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="ml-22">
              <div className="text-base pb-3 pt-5">Phone Number</div>
              <input
                className="outline-none pl-5 text-sm border border-black rounded-[15px] w-96 h-16"
                type="text"
                placeholder="Phone"
              />
            </div>
            <div className="ml-22">
              <div className="text-base pb-3 pt-5">Country</div>
              <input
                className="outline-none pl-5 text-sm border border-black rounded-[15px] w-96 h-16"
                type="text"
                placeholder="Country"
              />
            </div>
            <div className="ml-22">
              <div className="text-base pb-3 pt-5">Role</div>
              <input
                className="outline-none pl-5 text-sm border border-black rounded-[15px] w-96 h-16"
                type="text"
                placeholder="Project Developer/Investor"
              />
            </div>
        </div>
        <div className="flex justify-center items-center pt-10">
          <button className="w-full lg:w-96 h-16 rounded-15 text-white bg-teal-800 hover:bg-teal-700 focus:outline-none">
            Get Early Access
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
