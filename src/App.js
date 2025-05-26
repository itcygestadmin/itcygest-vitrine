import './App.css';
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductCards from './components/ProductCards';
import Testimonials from './components/Testimonials';
import FeatureGrid from './components/FeatureGrid';
import Faq from './components/Faq';
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar /> {/* Ajout du menu ici */}
      <HeroSection/>
      <Routes>
          <Route
            path="/"
            element={
          <>
           
           <ProductCards/>
           <FeatureGrid/>
           
          </>
        }
        />
        <Route path="/faq" element={<Faq />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/aboutus" element={<AboutUs />} />
     </Routes>
      {/* Pied de page */}
      <footer  className="bg-gray-900 text-white text-center p-8 mt-12" id="contact">
        
        <a href="mailto:info@itcygest.com" className="contact-btn">Contact Us</a>
        <p>Email : info@itcygest.com</p>
        <p>Phone : +1 514 249 7972</p>
      </footer>
    </div>
    </Router>
  );
}

export default App;
