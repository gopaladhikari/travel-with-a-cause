import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About/About";
import TravelMore from "./Components/Travel and More/TravelMore";
import Contact from "./Components/Contact/Contact";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/corporate-sustainable" element={"Corporate page"} />
          <Route path="/spirit-of-tasmania" element={"Sipirt page"} />
          <Route path="/pass-park" element={"Pass park"} />
          <Route path="/travel-and-more" element={<TravelMore />} />
          <Route path="/about-page" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
