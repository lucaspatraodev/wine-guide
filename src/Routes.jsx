import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signature from "./pages/Signature";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signature" element={<Signature />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
