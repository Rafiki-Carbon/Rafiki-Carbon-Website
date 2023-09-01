// Components
import Footer from "./Footer";
import Nav from "./Nav";
import Navbar from "./Navbar";

export const metadata = {
  title: "Rafiki Carbon",
  description: "Reliable carbon credits.",
};

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <Nav />
      <div className="px-16">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
