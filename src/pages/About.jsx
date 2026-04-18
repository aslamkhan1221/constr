import React from 'react';
import { Target, Flag, Award, Building2 } from 'lucide-react';

const About = () => {
  return (
    <div className="fade-in">
      <div className="page-header bg-fixed" style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url('/images/ResiBuilding.jpg')" }}>
        <div className="container">
          <h1>About Us</h1>
          <p>Discover the legacy and vision of SS Constructions</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <span className="hero-tag">Company Profile</span>
              <h2 className="section-title">A Marathwada-based Construction & Land Development Firm</h2>
              <p className="mb-4" style={{ color: 'var(--text-light)', fontSize: '1.125rem' }}>
                With over 5 years of industry expertise, SS Construction specializes in residential and commercial construction, land development, plotting, layout planning, architectural drafting, interior and exterior design, landscaping, and renovation.
              </p>
              <p className="mb-4" style={{ color: 'var(--text-light)', fontSize: '1.125rem' }}>
                Our strength lies in our diverse team of experienced engineers specializing in fields like civil engineering, structural engineering, architectural design, and landscape planning. At SS Construction, we are committed to quality, integrity, and excellence.
              </p>
              <div className="grid grid-2 mt-4">
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Award size={40} color="var(--primary)" />
                  <div>
                    <h4 style={{ fontSize: '1.25rem' }}>5+ Years</h4>
                    <span style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>Of Excellence</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Building2 size={40} color="var(--primary)" />
                  <div>
                    <h4 style={{ fontSize: '1.25rem' }}>493+</h4>
                    <span style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>Projects Done</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="glass card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--primary)', color: 'white', padding: '1rem', borderRadius: '50%' }}>
                  <Target size={32} />
                </div>
                <div>
                  <h3 className="mb-1">Our Mission</h3>
                  <p style={{ color: 'var(--text-light)' }}>
                    To deliver high-quality, innovative, and sustainable construction solutions. We are committed to precision, efficiency, and timely execution to exceed client expectations by integrating advanced technology.
                  </p>
                </div>
              </div>
              
              <div className="glass card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--secondary)', color: 'white', padding: '1rem', borderRadius: '50%' }}>
                  <Flag size={32} />
                </div>
                <div>
                  <h3 className="mb-1">Our Vision</h3>
                  <p style={{ color: 'var(--text-light)' }}>
                    To create innovative, sustainable, and high-quality spaces that enhance communities. We aim to be the premier architectural and construction firm turning visionary ideas into tangible reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
