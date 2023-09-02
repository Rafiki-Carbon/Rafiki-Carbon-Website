import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="md:grid lg:grid xl:grid grid-cols-2 xl:py-16">
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
        <form
          action="https://getform.io/f/75acaace-e62e-4829-b41c-cbf3c896fda5"
          method="POST"
        >
          {/* Input fields */}
          <div className="md:grid grid-cols-2 gap-4">
            <div className="sm:mt-4">
              <div className="text-sm">Full name*</div>
              <input
                className="outline-none text-sm rounded px-4 py-3 focus:border focus:border-[#0072BB] w-full"
                type="text"
                placeholder="Jane Doe"
                name="full name"
              />
            </div>
            <div className="sm:mt-4">
              <div className="text-sm">Email Address*</div>
              <input
                className="outline-none text-sm rounded px-4 py-3 focus:border focus:border-[#0072BB] w-full"
                type="email"
                placeholder="janedoe@gmail.com"
                name="email"
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
                name="phone"
              />
            </div>
            <div className="sm:mt-4">
              <div className="text-sm">Country*</div>
              <input
                className="outline-none text-sm rounded px-4 py-3 focus:border focus:border-[#0072BB] w-full"
                type="text"
                placeholder="eg. Kenya"
                name="country"
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
                name="role"
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="px-8 py-3 rounded-lg text-white bg-teal-800 hover:bg-teal-700 focus:outline-none"
            >
              Get Early Access
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
