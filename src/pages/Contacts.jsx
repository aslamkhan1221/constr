import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contacts = () => {
  return (
    <div className="fade-in">
      <div className="page-header bg-fixed" style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url('/images/Interiorgallery.jpg')" }}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get In Touch For Your Next Project</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '4rem' }}>
            <div>
              <span className="hero-tag">Reach Out</span>
              <h2 className="section-title">Let's Discuss Your Dream Project</h2>
              <p className="mb-4" style={{ color: 'var(--text-light)', fontSize: '1.125rem' }}>
                We offer free initial consultations to discuss your project requirements, provide expert advice, and help you understand how we can bring your vision to life.
              </p>
              
              <div style={{ display: 'grid', gap: '2rem', marginTop: '3rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--primary)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Office Address</h4>
                    <p style={{ color: 'var(--text-light)' }}>Azam Colony Yeldari Road, Jintur<br/>Dist Parbhani, Maharashtra</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--primary)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Phone Numbers</h4>
                    <p style={{ color: 'var(--text-light)' }}>Er Abdul Ahad: +91 7058851237<br/>Er Musaib Khan: +91 8390365418<br/>Er Rafe: +91 8668204533</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--primary)', padding: '1rem', borderRadius: '50%', height: 'fit-content' }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Email Address</h4>
                    <p style={{ color: 'var(--text-light)' }}>ssconstra@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card glass">
              <h3 className="mb-3">Send us a message</h3>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'grid', gap: '1.5rem' }}>
                <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontWeight: '500', fontSize: '0.875rem' }}>First Name</label>
                    <input type="text" placeholder="John" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', fontFamily: 'inherit' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontWeight: '500', fontSize: '0.875rem' }}>Last Name</label>
                    <input type="text" placeholder="Doe" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', fontFamily: 'inherit' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: '500', fontSize: '0.875rem' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', fontFamily: 'inherit' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: '500', fontSize: '0.875rem' }}>Service Required</label>
                  <select style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', fontFamily: 'inherit', background: 'white' }}>
                    <option>Residential Construction</option>
                    <option>Commercial Construction</option>
                    <option>NA Approval</option>
                    <option>Architecture & Design</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontWeight: '500', fontSize: '0.875rem' }}>Message</label>
                  <textarea rows="4" placeholder="Tell us about your project..." style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                </div>
                <button className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
