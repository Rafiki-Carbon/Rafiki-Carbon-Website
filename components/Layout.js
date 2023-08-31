// Components
import Footer from "./Footer";
import Navbar from "./Navbar";

export const metadata = {
  title: "Rafiki Carbon",
  description: "Reliable carbon credits.",
};

const Layout = ({ children }) => {
  return (
    <div className={"page min-h-screen w-screen p-16 "}>
      <Navbar />
      {children}
      
      {/* <Footer /> */}
    </div>
   
  );
};

export default Layout;
