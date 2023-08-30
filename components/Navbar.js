import Link from 'next/link';
import logo from '../public/assets/rafikilogo.svg';


export default function Navbar() {
   
   
  return (
    <div
      
      className="fixed bg-[#C2FFD9] left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/" className="font-bold text-4xl text-[#000000] ">
            {logo}
          
        </Link>
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
          <li className="px-6 py-4 border-2 rounded-[20px] border-red-200">
            <Link href="/contact">Get Started</Link>
          </li>
        </ul>

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
