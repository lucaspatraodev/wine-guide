import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import MainContent from "../components/MainContent";
import MoreAboutSection from "../components/MoreAboutSection";
import SignatureSection from "../components/SignatureSection";
import Footer from "../components/Footer";
import WineTypesSection from "../components/WineTypesSection";
import { useRef } from "react";

function Home() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  return (
    <div className="w-screen">
      <Header />
      <MainContent onButtonClick={handleClick} />
      <SignatureSection />
      <AboutSection />
      <WineTypesSection />
      <MoreAboutSection ref={ref} />
      <Footer />
    </div>
  );
}

export default Home;
