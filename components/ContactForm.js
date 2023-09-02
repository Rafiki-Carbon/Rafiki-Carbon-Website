import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="md:grid lg:grid xl:grid grid-cols-2 contact xl:py-16">
      <div className="flex items-center justify-center">
        <div>
          <div className="text-[40px] side font-medium px-4">
            Connecting <span className="text-[#0072BB]">Renewable</span> and <span className="text-[#0072BB]">ESG-conscious Corporations</span> through
            <span className="text-[#0072BB]">Renewable Energy Certificates</span> for a sustainable future.
          </div>
        </div>
      </div>
      <div className="form">
        <div className="text-[24px] head font-medium pb-5">Empower Sustainability. Get Started</div>
        <div className="">
          {/* Input fields */}
          <div className="md:grid grid-cols-2 gap-4">
            <div className="sm:mt-4 form-grp">
              <div className="text-sm">Full name*</div>
              <input
                className="outline-none text-sm rounded px-4 py-3 focus:border focus:border-[#0072BB] w-full"
                type="text"
                placeholder="Jane Doe"
              />
            </div>
            <div className="sm:mt-4 form-grp">
              <div className="text-sm">Email Address*</div>
              <input
                className="outline-none text-sm rounded px-4 py-3 focus:border focus:border-[#0072BB] w-full"
                type="email"
                placeholder="janedoe@gmail.com"
              />
            </div>
          </div>
          <div className="xl:grid grid-cols-2 gap-4 xl:mt-4">
            <div className="sm:mt-4 form-grp">
              <div className="text-sm">Phone Number*</div>
              <input
                className="outline-none text-sm rounded px-4 py-3 focus:border focus:border-[#0072BB] w-full"
                type="text"
                placeholder="+254 7** *** ***"
              />
            </div>
            <div className="sm:mt-4 form-grp">
              <div className="text-sm">Country*</div>
              <input
                className="outline-none text-sm rounded px-4 py-3 focus:border focus:border-[#0072BB] w-full"
                type="text"
                placeholder="eg. Kenya"
              />
            </div>
          </div>
          <div className="xl:grid grid-cols-2 gap-4 xl:mt-4">
            <div className="sm:mt-4 form-grp">
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
