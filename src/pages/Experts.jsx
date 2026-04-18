import React from 'react';
import { Mail } from 'lucide-react';

const Experts = () => {
  const team = [
    { name: "Er Musaib Khan", role: "Architectural Designer & Manager", desc: "7+ years of experience in architectural design and project management.", img: "/images/musaib.jpg" },
    { name: "Er Ahad Shaikh", role: "Green Building Expert", desc: "Specialized in sustainable construction and green building practices.", img: "/images/ahaddp.jpg" },
    { name: "Er Abdul Rafe", role: "Project Coordinator", desc: "Expert in managing large-scale construction projects and team coordination.", img: "/images/arafe.jpg" },
    { name: "Er Md Abrar Hussain", role: "Structural Engineer", desc: "7+ Experience in Elevated Storage Reservoir structural planning.", img: "/images/abrar.jpg" }
  ];

  const partners = [
    { name: "ARMAAN BUILDER'S & DEVELOPER'S", role: "Real Estate Developer" },
    { name: "LUCKY CONSTRUCTION", role: "Real Estate Developer" },
    { name: "Soheb Interiors", role: "Interior Designer" },
    { name: "Creative 3D", role: "Construction Technology" }
  ];

  return (
    <div className="fade-in">
      <div className="page-header bg-fixed" style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url('/images/office.jpg')" }}>
        <div className="container">
          <h1>Our Experts</h1>
          <p>Meet the visionary engineers driving our success</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="text-center mb-6">
            <span className="hero-tag">Professional Team</span>
            <h2 className="section-title">Engineers & Draftsman</h2>
          </div>
          
          <div className="grid grid-4" style={{ gap: '2rem' }}>
            {team.map((member, idx) => (
              <div className={`card text-center fade-in delay-${(idx % 4 + 1) * 100}`} key={idx} style={{ padding: '0', overflow: 'hidden' }}>
                <img src={member.img} alt={member.name} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                <div style={{ padding: '1.5rem', background: 'var(--white)' }}>
                  <h3 className="mb-1" style={{ fontSize: '1.25rem' }}>{member.name}</h3>
                  <span style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.875rem', display: 'block', marginBottom: '1rem' }}>{member.role}</span>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{member.desc}</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <a href="#" style={{ color: 'var(--secondary)', padding: '0.5rem', background: 'var(--bg-color)', borderRadius: '50%' }}><Mail size={16} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4" style={{ marginTop: '6rem' }}>
            <div className="text-center mb-4">
               <h2 className="section-title">Trusted Partners</h2>
            </div>
            <div className="grid grid-4">
               {partners.map((p, i) => (
                 <div className="card text-center glass" key={i}>
                    <h4 style={{ fontSize: '1.125rem' }} className="mb-1">{p.name}</h4>
                    <span style={{ color: 'var(--primary)', fontWeight: '500', fontSize: '0.875rem' }}>{p.role}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experts;
