import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import heroImg from '../assets/gallery_intro_1790914666284.jpg';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const categories = ['All', 'Business Cards', 'Stationery', 'Marketing Materials', 'Packaging', 'Cards & Invitations', 'Other'];
  
  const portfolio = [
    { id: 1, title: 'Corporate Business Cards', category: 'Business Cards', type: 'Matte Finish / Spot UV', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800', size: 'large' },
    { id: 2, title: 'Annual Report 2025', category: 'Marketing Materials', type: 'Perfect Binding', image: 'https://images.unsplash.com/photo-1544497486-13a86c679fc4?auto=format&fit=crop&q=80&w=800', size: 'normal' },
    { id: 3, title: 'Luxury Retail Boxes', category: 'Packaging', type: 'Foil Stamping', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&q=80&w=800', size: 'normal' },
    { id: 4, title: 'Executive Letterheads', category: 'Stationery', type: 'Textured Paper', image: 'https://images.unsplash.com/photo-1621831830026-613d71249b6b?auto=format&fit=crop&q=80&w=800', size: 'normal' },
    { id: 5, title: 'Gala Dinner Invites', category: 'Cards & Invitations', type: 'Die-cut / Embossing', image: 'https://images.unsplash.com/photo-1517457210515-56f4d2f34846?auto=format&fit=crop&q=80&w=800', size: 'large' },
    { id: 6, title: 'Trade Show Flyers', category: 'Marketing Materials', type: 'Glossy Finish', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800', size: 'normal' },
    { id: 7, title: 'Restaurant Takeout Bags', category: 'Packaging', type: 'Kraft Paper Print', image: 'https://images.unsplash.com/photo-1577900232427-18219b9166a0?auto=format&fit=crop&q=80&w=800', size: 'normal' },
  ];
  
  const filteredPortfolio = filter === 'All' 
    ? portfolio 
    : portfolio.filter(item => item.category === filter);

  return (
    <div>
      {/* 01 — Gallery Hero */}
      <div className="page-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <h1 className="animate-fade-up">Our Work, Printed for the Real World.</h1>
        <p className="animate-fade-up animate-delay-1">
          Explore selected printing work and finished materials from Al Karim Enterprises.
        </p>
      </div>

      <section className="section" style={{ backgroundColor: 'var(--sheet)' }}>
        <div className="container">
          {/* 02 — Category Filter */}
          <div className="gallery-filters">
            {categories.map((cat, index) => (
              <button 
                key={index}
                type="button"
                className={`gallery-filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* 03 — Main Gallery */}
          <div className="gallery-grid">
            {filteredPortfolio.map((item) => (
              <div 
                key={item.id} 
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title}`}
                className={`gallery-item ${item.size}`} 
                onClick={() => setSelectedImage(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedImage(item);
                  }
                }}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <span className="gallery-item-category">{item.category}</span>
                  <span className="gallery-item-meta">{item.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Featured Project */}
      <section className="section" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="container">
          <div className="about-content-grid">
            <div>
              <span className="section-eyebrow">Featured Project</span>
              <h2 className="section-title section-title--left">Premium Corporate Identity Kit</h2>
              <hr className="rule-line" />
              
              <div className="service-options-grid">
                <div>
                  <span className="service-option-name">The Project</span>
                  <span className="service-option-desc">Complete rebrand rollout including cards, letterheads, and folders.</span>
                </div>
                <div>
                  <span className="service-option-name">Material</span>
                  <span className="service-option-desc">350gsm Matte Art Card & 120gsm Alabaster</span>
                </div>
                <div>
                  <span className="service-option-name">Finishing</span>
                  <span className="service-option-desc">Velvet lamination with raised spot UV logo.</span>
                </div>
                <div>
                  <span className="service-option-name">Final Result</span>
                  <span className="service-option-desc">A cohesive, highly professional brand presence.</span>
                </div>
              </div>
            </div>
            
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
              <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200" alt="Featured Project" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 05 — CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Want Your Project to Be Next?</h2>
          <p className="cta-text">Let's bring your print vision to life with precision and care.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Start a Printing Project</Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="lightbox-close"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} className="lightbox-img" />
            <div className="lightbox-caption">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.type}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
