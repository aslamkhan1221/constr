import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Experts from './pages/Experts';
import Contacts from './pages/Contacts';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
