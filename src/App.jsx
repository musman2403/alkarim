import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import EyeBlinkTransition from './components/EyeBlinkTransition';
import ScrollRevealHandler from './components/ScrollRevealHandler';

function App() {
  return (
    <Router>
      <EyeBlinkTransition />
      <ScrollToTop />
      <ScrollRevealHandler />
      <Navbar />
      <main className="main-content-flow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
