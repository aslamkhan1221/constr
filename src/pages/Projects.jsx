import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Waman Greens Landscape",
      category: "Landscape",
      desc: "Where Beauty meets nature!",
      img: "/images/featurewaman.jpg"
    },
    {
      title: "653400 SQ FT NA Plotting (Balsa Road)",
      category: "NA Plotting - Jintur",
      desc: "Premium residential plotting with NA approval completed successfully.",
      img: "/images/FeatureBalsa.jpg"
    },
    {
      title: "Interior and Exterior Designs",
      category: "Architectural Design",
      desc: "High-end interior and exterior solutions tailored for modern living.",
      img: "/images/FeatureExterior.jpg"
    }
  ];

  return (
    <div className="fade-in">
      <div className="page-header bg-fixed" style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url('/images/FeatureBalsa.jpg')" }}>
        <div className="container">
          <h1>Our Projects</h1>
          <p>Discover our recent architectural marvels and developments</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="hero-tag">Portfolio</span>
            <h2 className="section-title">Milestones That Define Our Excellence</h2>
            <p className="section-subtitle">A glimpse into our meticulously executed residential, commercial, and landscape projects.</p>
          </div>
          
          <div className="grid grid-3 mt-4">
            {projects.map((proj, idx) => (
              <div className={`card fade-in delay-${(idx % 3 + 1) * 100}`} style={{ padding: '0' }} key={idx}>
                <div className="card-image-wrapper">
                  <img src={proj.img} alt={proj.title} className="card-image" />
                </div>
                <div style={{ padding: '2rem' }}>
                  <span style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{proj.category}</span>
                  <h3 className="mb-2 mt-2" style={{ fontSize: '1.25rem' }}>{proj.title}</h3>
                  <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>{proj.desc}</p>
                  <a href="/gallery" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--secondary)' }}>
                    View Details <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
