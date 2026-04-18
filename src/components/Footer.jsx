import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <HardHat size={28} color="var(--primary)" />
              SS <span>Constructions</span>
            </Link>
            <p className="mb-3" style={{color: 'var(--white)'}}>
              SS Construction is a Marathwada-based construction and land development firm with over 5 years of industry expertise, specializing in residential and commercial construction, architecture, and interior design.
            </p>

          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contacts">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services">Residential Construction</Link></li>
              <li><Link to="/services">Commercial Construction</Link></li>
              <li><Link to="/services">Renovation</Link></li>
              <li><Link to="/services">Architecture & Design</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul>
              <li>
                <MapPin className="icon" size={20} />
                <span>Azam Colony Yeldari Road,<br/>Jintur Dist Parbhani,<br/>Maharashtra</span>
              </li>
              <li>
                <Phone className="icon" size={20} />
                <span>
                  Er Abdul Ahad: +91 7058851237<br/>
                  Er Musaib Khan: +91 8390365418
                </span>
              </li>
              <li>
                <Mail className="icon" size={20} />
                <span>ssconstra@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SS Constructions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
