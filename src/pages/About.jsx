import Header from "../components/Header";
import Footer from "../components/Footer";
import DeveloperInfoSection from "../components/DeveloperInfoSection";

function About() {
  return (
    <div className="max-w-screen">
      <Header />
      <main className="pt-20">
        <DeveloperInfoSection />
      </main>
      <Footer />
    </div>
  );
}

export default About;
