// Components
import Footer from "./Footer";
import Navbar from "./Navbar";

export const metadata = {
  title: "Rafiki Carbon",
  description: "Reliable carbon credits.",
};

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Navbar />
      <div className="px-16">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
