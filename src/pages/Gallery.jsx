import React from 'react';

const Gallery = () => {
  const galleries = [
    { title: "Modern Villa", category: "Residential Project", img: "/images/gallery4.jpg" },
    { title: "Waman Green", category: "Residential Project", img: "/images/Exteriorgallery.jpg" },
    { title: "Interior Design", category: "Interior Project", img: "/images/Interiorgallery.jpg" },
    { title: "Garden Design", category: "Landscape Project", img: "/images/Landscapegallery.jpg" },
    { title: "Office Achievements", category: "Office Movements", img: "/images/office.jpg" },
    { title: "Modern Interior", category: "Interior Design", img: "/images/interiorgallery2.jpg" },
  ];

  return (
    <div className="fade-in">
      <div className="page-header bg-fixed" style={{ backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95)), url('/images/gallery5.jpg')" }}>
        <div className="container">
          <h1>Photo Gallery</h1>
          <p>Our Projects Portfolio Visualized</p>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="text-center mb-6">
            <span className="hero-tag">Impressive Visuals</span>
            <h2 className="section-title">Showcasing Our Masterpieces</h2>
          </div>
          
          <div className="grid grid-3">
            {galleries.map((item, idx) => (
              <div className={`card fade-in delay-${(idx % 3 + 1) * 100}`} style={{ padding: '0', group: 'true' }} key={idx}>
                <div className="card-image-wrapper" style={{ position: 'relative' }}>
                  <img src={item.img} alt={item.title} className="card-image" style={{ height: '300px' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'linear-gradient(to top, rgba(15,23,42,0.9), transparent)', padding: '2rem 1.5rem 1.5rem', color: 'white' }}>
                    <h3 style={{ color: 'white', marginBottom: '0.25rem', fontSize: '1.25rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--primary)', fontWeight: '500', fontSize: '0.875rem', textTransform: 'uppercase' }}>{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
