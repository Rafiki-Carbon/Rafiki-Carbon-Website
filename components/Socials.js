// next link
import Link from "next/link";

// icons
import {
  RiTwitterLine,
  RiInstagramLine,
  RiFacebookBoxLine,
  RiLinkedinLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-4 text-lg">
      <Link
        href={"https://www.instagram.com/rafikicarbon/"}
        className="hover:text-[#008080] transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://web.facebook.com/"}
        className="hover:text-[#008080] transition-all duration-300"
      >
        <RiFacebookBoxLine />
      </Link>
      <Link
        href={"https://twitter.com/"}
        className="hover:text-[#008080] transition-all duration-300"
      >
        <RiTwitterLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/company/rafikicarbon"}
        className="hover:text-[#008080] transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
