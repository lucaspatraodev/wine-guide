import Header from "../components/Header";
import FormContact from "../components/FormContact";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="max-w-screen">
      <Header />
      <main className="pt-20">
        <FormContact />
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
