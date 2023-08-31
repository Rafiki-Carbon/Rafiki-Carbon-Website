// Components
import GetStarted from "@/components/GetStarted";
import Faqs from "@/components/Faqs";
import Home from "@/components/Home";
import Pillars from "@/components/Pillars";

export default function Index() {
  return (
    <div className="scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
      <Home />
      <Pillars />
      <GetStarted />
      <Faqs />
    </div>
  );
}
