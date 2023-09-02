import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="md:grid lg:grid xl:grid grid-cols-2 px-16 xl:py-16">
      <div className="flex items-center justify-center">
        <div>
          <div className="hidden md:block">
            <Image
              className="object-cover"
              src={"/footer-logo.svg"}
              width={140}
              height={120}
              alt=""
              priority={true}
            />
          </div>
          <div className="text-medium font-medium px-4">
            Connecting Renewable and ESG-conscious Corporations through
            Renewable Energy Certificates for a sustainable future.
          </div>
        </div>
      </div>
      <div>
        <div className="text-xl font-medium pb-5">Become an Early Adopter</div>
        <div className="">
          {/* Input fields */}
          <div className="md:grid grid-cols-2 gap-4">
            <div className="sm:mt-4">
              <div className="text-sm">Full name*</div>
              <input
                className="outline-none text-sm rounded px-4 py-3 focus:border focus:border-[#0072BB] w-full"
                type="text"
                placeholder="Jane Doe"
              />
            </div>
            <div className="sm:mt-4">
              <div className="text-sm">Email Address*</div>
              <input
                className="outline-none text-sm rounded px-4 py-3 focus:border focus:border-[#0072BB] w-full"
                type="email"
                placeholder="janedoe@gmail.com"
              />
            </div>
          </div>
          <div className="xl:grid grid-cols-2 gap-4 xl:mt-4">
            <div className="sm:mt-4">
              <div className="text-sm">Phone Number*</div>
              <input
                className="outline-none text-sm rounded px-4 py-3 focus:border focus:border-[#0072BB] w-full"
                type="text"
                placeholder="+254 7** *** ***"
              />
            </div>
            <div className="sm:mt-4">
              <div className="text-sm">Country*</div>
              <input
                className="outline-none text-sm rounded px-4 py-3 focus:border focus:border-[#0072BB] w-full"
                type="text"
                placeholder="eg. Kenya"
              />
            </div>
          </div>
          <div className="xl:grid grid-cols-2 gap-4 xl:mt-4">
            <div className="sm:mt-4">
              <div className="text-sm">Role*</div>
              <input
                className="outline-none text-sm rounded px-4 py-3 focus:border focus:border-[#0072BB] w-full"
                type="text"
                placeholder="e.g Project Developer/Investor"
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="px-8 py-3 rounded-lg text-white bg-teal-800 hover:bg-teal-700 focus:outline-none">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
