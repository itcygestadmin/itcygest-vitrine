import './App.css';
import React from 'react'; // ✅ Ajout requis
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import References from './components/References';
import HeroSection from "./components/HeroSection";
import ProductCards from './components/ProductCards';
import Testimonials from './components/Testimonials';
import FeatureGrid from './components/FeatureGrid';
import Faq from './components/Faq';
import AboutUs from "./components/AboutUs";
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy'; // ou ./pages/PrivacyPolicy selon l'emplacement
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <HeroSection />
        <Switch>
          <Route exact path="/" render={() => (
            <>
              <ProductCards />
              <FeatureGrid />
              
            </>
          )} />
          <Route path="/faq" component={Faq} />
          <Route path="/services" component={Services} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/references" component={References} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/privacy" component={PrivacyPolicy} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
