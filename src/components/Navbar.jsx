import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, HardHat } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <HardHat size={32} color="var(--primary)" />
          SS <span>Constructions</span>
        </Link>
        
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Services</NavLink>
          <NavLink to="/projects" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/gallery" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Gallery</NavLink>
          <NavLink to="/experts" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Experts</NavLink>
          <NavLink to="/contacts" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Contacts</NavLink>
          
          <Link to="/contacts" className="btn btn-primary" onClick={closeMenu}>Get Quote</Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
