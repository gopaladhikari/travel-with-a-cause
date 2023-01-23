import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About/About";
import TravelMore from "./Components/Travel and More/TravelMore";
import Contact from "./Components/Contact/Contact";
import PassPark from "./Components/Park Pass/PassPark";
import CorporateSustainable from "./Components/Corporate Sustainable/CorporateSustainable";
import "./App.css";
import SpiritOfTasmania from "./Components/Spirit of Tasmania/SpiritOfTasmania";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/travel-with-a-cause" element={<Home />} />
          <Route
            path="/travel-with-a-cause/corporate-sustainable"
            element={<CorporateSustainable />}
          />
          <Route
            path="/travel-with-a-cause/spirit-of-tasmania"
            element={<SpiritOfTasmania />}
          />
          <Route path="/travel-with-a-cause/pass-park" element={<PassPark />} />
          <Route
            path="/travel-with-a-cause/travel-and-more"
            element={<TravelMore />}
          />
          <Route path="/travel-with-a-cause/about-page" element={<About />} />
          <Route path="/travel-with-a-cause/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
