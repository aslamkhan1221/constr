import React from 'react';
import { Home, Building, FileCheck, Wrench, PenTool, TreePine, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home size={32} />,
      title: "Residential Buildings",
      desc: "Custom homes and residential developments built to your specifications, Planning, Designing and Approvals from Authority."
    },
    {
      icon: <Building size={32} />,
      title: "Commercial Construction",
      desc: "Office buildings, Hospitals, Shops, warehouses, Educational Institute and Hotels built with top-quality materials."
    },
    {
      icon: <FileCheck size={32} />,
      title: "NA Approval",
      desc: "Comprehensive plotting and NA Approval services to make your development process seamless."
    },
    {
      icon: <Wrench size={32} />,
      title: "Renovation",
      desc: "Modernize and upgrade existing structures with our renovation services for Public and Residential Buildings."
    },
    {
      icon: <PenTool size={32} />,
      title: "Architecture & Design",
      desc: "Professional architectural design and planning services tailored to meet innovative industry standards."
    },
    {
      icon: <TreePine size={32} />,
      title: "Landscape",
      desc: "Garden Designing, Green Spaces, Maintenance, Amenities Open Spaces and Parks designed beautifully."
    }
  ];

  return (
    <div className="fade-in">
      <div className="page-header bg-fixed" style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url('/images/Commersial.jpg')" }}>
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive Construction Solutions tailored to your needs</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="hero-tag">What We Do</span>
            <h2 className="section-title">Specialized Construction Services</h2>
            <p className="section-subtitle">We offer a full spectrum of construction, architecture, and landscaping services executed with precision and innovative techniques.</p>
          </div>
          
          <div className="grid grid-3 mt-4">
            {services.map((service, idx) => (
              <div className={`card fade-in delay-${(idx % 4 + 1) * 100}`} key={idx}>
                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', background: 'rgba(245,158,11,0.1)', width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                  {service.icon}
                </div>
                <h3 className="mb-2" style={{ fontSize: '1.25rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>{service.desc}</p>
                <a href="/contacts" style={{ color: 'var(--secondary)', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                  Enquire Now <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
