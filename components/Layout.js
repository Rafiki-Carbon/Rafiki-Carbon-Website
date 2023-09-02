// Components
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

export const metadata = {
  title: "Rafiki Carbon",
  description: "Reliable carbon credits.",
};

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Rafiki Carbon - Your Premier Choice for Carbon Credits</title>
        <meta
          name="Rafiki Carbon"
          content="Get affordable carbon credits from reliable suppliers"
        />
        <link rel="icon" href="./rafiki-logo.svg" />
      </Head>
      <div className="flex flex-col min-h-screen w-screen">
        <Navbar />
        <div className="">
          <main className="flex-grow">{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
