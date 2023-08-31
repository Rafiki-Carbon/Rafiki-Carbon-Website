// Components
import GetStarted from "@/components/GetStarted";
import Faqs from "@/components/Faqs";
import Home from "@/components/Home";
import Pillars from "@/components/Pillars";
import Explore from "@/components/Explore";
import Team from "@/components/Team";

export default function Index() {
  return (
    <div className="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <Home />
      <Pillars />
      <GetStarted />
      <Team/>
      <Faqs />
      <Explore />
    </div>
  );
}
