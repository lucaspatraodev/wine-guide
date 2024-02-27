import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import MainContent from "../components/MainContent";
import MoreAboutSection from "../components/MoreAboutSection";
import SignatureSection from "../components/SignatureSection";
import Footer from "../components/Footer";
import WineTypesSection from "../components/WineTypesSection";

function Home() {
  return (
    <div className="w-screen">
      <Header />
      <MainContent />
      <SignatureSection />
      <AboutSection />
      <WineTypesSection />
      <MoreAboutSection />
      <Footer />
    </div>
  );
}

export default Home;
