import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Star, Building2, Users } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bannerImages = [
    '/images/backgroundprime.jpg',
    '/images/background1.jpg',
    '/images/background2.jpg',
    '/images/background3.jpg',
    '/images/background4.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerImages.length]);

  return (
    <div className="home-page fade-in">
      {/* Hero Section */}
      <section 
        className="hero"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.9)), url('${bannerImages[currentSlide]}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          transition: 'background-image 1s ease-in-out'
        }}
      >
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag fade-in delay-100">Welcome to SS Constructions</span>
            <h1 className="fade-in delay-200">Excellence in Construction with <span>modern</span> & traditional methods.</h1>
            <p className="fade-in delay-300">
              We turn ideas into reality by providing top-tier architectural, design, and construction solutions. Your dream spaces, built with precision.
            </p>
            <div className="hero-buttons fade-in delay-400">
              <Link to="/projects" className="btn btn-primary">
                Our Projects <ArrowRight size={20} />
              </Link>
              <Link to="/contacts" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                Get Free Consultance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ padding: '4rem 0 0 0' }}>
        <div className="container">
          <div className="grid grid-3">
            <div className="glass-dark" style={{ padding: '2rem', borderRadius: 'var(--radius)', textAlign: 'center', color: 'white' }}>
              <Building2 size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>493+</h3>
              <p style={{ color: 'var(--text-dark)' }}>Projects Completed</p>
            </div>
            <div className="glass-dark" style={{ padding: '2rem', borderRadius: 'var(--radius)', textAlign: 'center', color: 'white' }}>
              <Users size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>170+</h3>
              <p style={{ color: 'var(--text-dark)' }}>Happy Clients</p>
            </div>
            <div className="glass-dark" style={{ padding: '2rem', borderRadius: 'var(--radius)', textAlign: 'center', color: 'white' }}>
              <Star size={48} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>5+</h3>
              <p style={{ color: 'var(--text-dark)' }}>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <span className="hero-tag" style={{ border: 'none', background: 'rgba(245, 158, 11, 0.1)' }}>About Us</span>
              <h2 className="section-title" style={{ marginTop: '1rem' }}>Building Excellence Since Foundation</h2>
              <p className="mb-4" style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                At SS Construction, our mission is to deliver high-quality, innovative, and sustainable construction solutions. We are committed to precision, efficiency, and timely execution to exceed client expectations.
              </p>
              <ul className="mb-6" style={{ display: 'grid', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '500' }}>
                  <CheckCircle2 color="var(--primary)" /> Top-tier architectural design
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '500' }}>
                  <CheckCircle2 color="var(--primary)" /> Sustainable construction methods
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '500' }}>
                  <CheckCircle2 color="var(--primary)" /> Highly skilled professionals
                </li>
              </ul>
              <Link to="/about" className="btn btn-outline">Read More About Us</Link>
            </div>
            <div style={{ position: 'relative' }}>
              <div className="image-frame-overlap" style={{ borderRadius: 'var(--radius)' }}>
                <img src="/images/gallery4.jpg" alt="Construction Work" style={{ borderRadius: 'var(--radius)', position: 'relative', zIndex: '2' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-fixed" style={{ backgroundImage: 'url(/images/office.jpg)' }}>
        <div className="dark-overlay"></div>
        <div className="container content-relative">
          <div className="text-center">
            <span className="hero-tag">Client Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="grid grid-3 mt-4">
            <div className="card" style={{ background: 'var(--secondary-light)', border: 'none', color: 'var(--text-dark)' }}>
              <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="mb-4" style={{ fontStyle: 'italic', color: 'var(--text-dark)' }}>
                "Throughout my journey with SS Construction is an wonderful experience for life time. I remain convinced throughout the land marking, foundation, structure planning, building design..."
              </p>
              <div>
                <h4 style={{ color: 'var(--white)' }}>Mr. Khan</h4>
                <span style={{ fontSize: '0.875rem', color: 'var(--primary)' }}>Home Owner</span>
              </div>
            </div>
            
            <div className="card" style={{ background: 'var(--secondary-light)', border: 'none', color: 'var(--text-dark)' }}>
              <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="mb-4" style={{ fontStyle: 'italic', color: 'var(--text-dark)' }}>
                "I am extremely satisfied with the NA Approval services provided by SS Construction. Their expertise and professionalism made the entire process seamless."
              </p>
              <div>
                <h4 style={{ color: 'var(--white)' }}>Mr. Imran</h4>
                <span style={{ fontSize: '0.875rem', color: 'var(--primary)' }}>Business Owner</span>
              </div>
            </div>
            <div className="card" style={{ background: 'var(--secondary-light)', border: 'none', color: 'var(--text-dark)' }}>
              <div style={{ display: 'flex', gap: '0.2rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="mb-4" style={{ fontStyle: 'italic', color: 'var(--text-dark)' }}>
                "The quality of their work exceeded our expectations, especially in terms of design and construction precision. The most impressive aspect was their attention to detail."
              </p>
              <div>
                <h4 style={{ color: 'var(--white)' }}>Mr. Shehbaz Khan</h4>
                <span style={{ fontSize: '0.875rem', color: 'var(--primary)' }}>Client</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section text-center bg-fixed" style={{ backgroundImage: 'url(/images/FeatureExterior.jpg)' }}>
        <div className="amber-overlay"></div>
        <div className="container content-relative" style={{ color: 'white' }}>
          <h2 className="mb-2" style={{ color: 'white' }}>Ready to start your next project?</h2>
          <p className="mb-4" style={{ color: 'var(--text-dark)', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Get in touch with our experts today and discover how we can transform your vision into reality with precision and superior craftsmanship.
          </p>
          <Link to="/contacts" className="btn btn-primary" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)' }}>Contact Us Now <ChevronRight size={20} /></Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
