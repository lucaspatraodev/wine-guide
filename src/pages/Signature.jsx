import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

function Signature() {
  return (
    <div className="max-w-screen">
      <Header />
      <main className="pt-12">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default Signature;
