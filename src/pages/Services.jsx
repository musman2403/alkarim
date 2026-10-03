import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, BookOpen, Printer, Star, ArrowRight } from 'lucide-react';
import heroImg from '../assets/services_intro_1790914621653.jpg';

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const toggleService = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  const services = [
    {
      title: "Business Printing",
      icon: <FileText size={28} />,
      items: ["Business Cards", "Letterheads", "Envelopes", "Office Stationery"],
      details: {
        intro: "Make every introduction count with professionally printed business cards and stationery designed to represent your brand.",
        options: [
          { name: "Standard cards", desc: "Clean, professional everyday networking cards." },
          { name: "Premium cards", desc: "Thick stock, textured or special finish cards." },
          { name: "Paper options", desc: "Matte, gloss, uncoated, and textured stocks." },
          { name: "Finishing options", desc: "Spot UV, foil stamping, embossing, die-cutting." }
        ],
        cta: "Request Business Printing Quote"
      }
    },
    {
      title: "Marketing Printing",
      icon: <Star size={28} />,
      items: ["Flyers", "Brochures", "Catalogues", "Promotional Materials"],
      details: {
        intro: "High-impact promotional prints that capture attention and communicate your message effectively.",
        options: [
          { name: "Flyers", desc: "Single-page promotional handouts." },
          { name: "Brochures", desc: "Bi-fold, tri-fold, and custom folded informational pieces." },
          { name: "Paper options", desc: "Glossy for photos, matte for readability." },
          { name: "Finishing options", desc: "Folding, scoring, lamination." }
        ],
        cta: "Request Marketing Printing Quote"
      }
    },
    {
      title: "Commercial Printing",
      icon: <BookOpen size={28} />,
      items: ["Books", "Magazines", "Reports", "Documents"],
      details: {
        intro: "Multi-page documents with crisp text and vivid imagery, bound professionally.",
        options: [
          { name: "Binding options", desc: "Perfect binding, saddle stitch, spiral binding." },
          { name: "Cover options", desc: "Heavyweight covers with matte/gloss lamination." },
          { name: "Inner pages", desc: "Various text weights depending on page count." },
          { name: "Volume", desc: "Short runs or large commercial volumes." }
        ],
        cta: "Request Commercial Printing Quote"
      }
    },
    {
      title: "Custom Printing",
      icon: <Printer size={28} />,
      items: ["Invitations", "Cards", "Stickers", "Custom Projects"],
      details: {
        intro: "Specialized printing techniques and materials for unique projects that need to stand out.",
        options: [
          { name: "Custom Shapes", desc: "Die-cut stickers and cards." },
          { name: "Specialty Materials", desc: "Textured boards, kraft paper, translucent stocks." },
          { name: "Event Printing", desc: "Wedding cards, corporate event invitations." },
          { name: "Unique Finishing", desc: "Foil, embossed, debossed." }
        ],
        cta: "Request Custom Printing Quote"
      }
    }
  ];

  return (
    <div>
      {/* 01 — Services Hero */}
      <div className="page-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <h1 className="animate-fade-up">Printing Services for Every Business Need.</h1>
        <p className="animate-fade-up animate-delay-1">
          From everyday business stationery to promotional and custom printing, explore the services available from Al Karim Enterprises.
        </p>
      </div>

      {/* 02 — Service Categories Accordions */}
      <section className="section" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="container">
          <div className="service-accordion">
            {services.map((service, index) => (
              <div key={index} className="service-accordion-item">
                <button
                  className="service-accordion-header"
                  aria-expanded={activeService === index}
                  onClick={() => toggleService(index)}
                >
                  <div className="service-accordion-header-left">
                    <div className="service-accordion-icon">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="service-accordion-title">{service.title}</h3>
                      <p className="service-accordion-items">{service.items.join(' · ')}</p>
                    </div>
                  </div>
                  <span className="service-accordion-toggle">
                    {activeService === index ? 'Hide Details' : 'View Details'}
                  </span>
                </button>
                
                {activeService === index && (
                  <div className="service-accordion-body">
                    <p className="service-accordion-body-intro">{service.details.intro}</p>
                    
                    <div className="service-options-grid">
                      {service.details.options.map((opt, i) => (
                        <div key={i}>
                          <span className="service-option-name">{opt.name}</span>
                          <span className="service-option-desc">{opt.desc}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link to="/contact" className="btn btn-primary">
                      {service.details.cta} <ArrowRight size={16} />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Printing Process */}
      <section className="section" style={{ backgroundColor: 'var(--sheet)' }}>
        <div className="container">
          <h2 className="section-title">The Printing Process</h2>
          <p className="section-subtitle">A simple, transparent workflow from enquiry to delivery.</p>
          <div className="process-flow">
            <div className="process-flow-step">Submit</div>
            <span className="process-flow-arrow">→</span>
            <div className="process-flow-step">Confirm</div>
            <span className="process-flow-arrow">→</span>
            <div className="process-flow-step">Print</div>
            <span className="process-flow-arrow">→</span>
            <div className="process-flow-step active">Collect</div>
          </div>
        </div>
      </section>

      {/* 05 — Custom Requirements */}
      <section className="section" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="container">
          <div className="custom-req-banner">
            <div className="custom-req-content">
              <h3 className="custom-req-title">Don't See Exactly What You Need?</h3>
              <p className="custom-req-text">
                Tell us what you're looking for. We'll discuss the required size, quantity, material and finishing.
              </p>
            </div>
            <Link to="/contact" className="btn btn-secondary">Discuss Your Requirement</Link>
          </div>
        </div>
      </section>

      {/* 06 — CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Get Your Printing Started?</h2>
          <p className="cta-text">Get in touch to discuss your project and receive a detailed quote.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Request a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
