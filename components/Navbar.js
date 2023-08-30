import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
   
   
  return (
    <div
      
      className=" w-full "
    >
      <div className="m-auto flex justify-between items-center  text-white">
       <div className="">
       <Link href="/" className="font-bold text-4xl text-[#000000] ">
        <Image
          src={"./rafiki-logo.svg"}
          width={220}
          height={60}
          alt=""
          priority={true}
        />  
        </Link>
       </div>
        <div className=''>
        <ul  className="hidden sm:flex text-[#000000]">
          <li className="p-4">
            <Link href="/">Approach</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Team</Link>
          </li>
          <li className="p-4">
            <Link href="/work">FAQs</Link>
          </li>
          <li className="px-10 py-4 border-2 rounded-[20px] border-[#008080]">
            <Link href="/contact">Get Started</Link>
          </li>
        </ul>

        </div>
        {/* Mobile button */}
        {/* <div className="sm:hidden block z-10">
          {nav ? (
            <AiOutlineClose
              className="text-4xl"
              onClick={toggleNav}
              style={{ color: textColor }}
            />
          ) : (
            <AiOutlineMenu
              className="text-4xl"
              onClick={toggleNav}
              style={{ color: textColor }}
            />
          )}
        </div>
        {/* Mobile menu */}
        {/* <div
          className={
            nav
              ? 'sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-black text-white duration-300 ease-in-out'
              : 'sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-white duration-300 ease-in-out'
          }
        >
          <ul onClick={toggleNav}>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/#gallery">Gallery</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/work">Work</Link>
            </li>
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div> */} 
      </div>
    </div>
  );
}
