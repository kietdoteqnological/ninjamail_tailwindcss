import EmailSendSection from "../components/EmailSendSection";
import Footer from "../components/Footer";
import GetStartedSection from "../components/GetStartedSection";
import MainHeadingSection from "../components/MainHeadingSection";
import NavBar from "../components/NavBar";
import ProvementSection from "../components/ProvementSection";
import ReachCustomerSection from "../components/ReachCustomerSection";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col relative">
      <NavBar />

      <MainHeadingSection />
      <ReachCustomerSection />
      <ProvementSection />
      <div className="w-full h-screen bg-slanted-green absolute z-[0] top-[20%] md:top-[27%] xl:top-[30.5%]" />
      <EmailSendSection />
      <GetStartedSection />
      <Footer />
    </div>
  );
}
