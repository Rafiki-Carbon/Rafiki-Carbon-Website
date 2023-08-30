// Components
import Footer from "./Footer";
import Navbar from "./Navbar";

export const metadata = {
  title: "Rafiki Carbon",
  description: "Reliable carbon credits.",
};

const Layout = ({ children }) => {
  return (
    <div className={"bg-[#C2FFD9] min-h-screen w-screen"}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
