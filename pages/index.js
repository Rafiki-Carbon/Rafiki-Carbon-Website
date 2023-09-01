// Components
import GetStarted from "@/components/GetStarted";
import Faqs from "@/components/Faqs";
import Home from "@/components/Home";
import Pillars from "@/components/Pillars";
import Explore from "@/components/Explore";
import Team from "@/components/Team";
import Sustainable from "@/components/Sustainable";
import Product from "@/components/Product";

export default function Index() {
  return (
    <div className="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <Home />
      <Pillars />
      <Product/>
      <GetStarted />
      <Sustainable/>
      <Team/>
      {/* <Faqs /> */}
      <Explore />
    </div>
  );
}
