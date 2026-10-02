import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Sparkles, Printer } from 'lucide-react';
import heroImg from '../assets/about_intro_1790914578119.jpg';

const About = () => {
  return (
    <div>
      {/* 01 — Page Hero */}
      <div className="page-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <h1 className="animate-fade-up">Built Around Quality Printing & Reliable Service.</h1>
        <p className="animate-fade-up animate-delay-1">
          An introduction to Al Kareem Enterprises.
        </p>
      </div>

      {/* 02 — Who We Are */}
      <section className="section" style={{ backgroundColor: 'var(--sheet)' }}>
        <div className="container">
          <div className="about-content-grid">
            <div className="about-text animate-fade-up">
              <h2 className="section-title section-title--left">Who We Are</h2>
              <hr className="rule-line" />
              <p>
                Al Kareem Enterprises is a dedicated printing service provider based in Township, Lahore. We handle a wide variety of commercial and personal printing work, specializing in business stationery, packaging, and marketing materials.
              </p>
              <p>
                Led by Mian Zahid Mahmood, our focus is simple: to supply our clients with printed materials that properly represent their standard of work. Whether you are a local business needing routine office stationery or an organization requiring custom print runs, we serve our clients with professionalism and care.
              </p>
              <p>
                What makes our approach different is our straightforward commitment to getting it right—from the paper choice to the final cut.
              </p>
            </div>
            
            {/* Business Card Visual */}
            <div className="animate-fade-up animate-delay-1">
              <div className="about-card-visual">
                <div className="about-biz-card">
                  <div className="about-biz-card-inner">
                    <div className="about-biz-card-logo">
                      <img src="/logo.jpg" alt="Al Kareem Logo" />
                    </div>
                    <div className="about-biz-card-info">
                      <h3>AL KAREEM</h3>
                      <p className="subtitle">ENTERPRISES</p>
                      <p className="contact-name">Mian Zahid Mahmood</p>
                      <p className="contact-phone">0322-8435577</p>
                      <p className="contact-phone">0332-8435577</p>
                    </div>
                  </div>
                </div>
                <h4 className="card-title">A local printing business with a professional standard.</h4>
                <p className="card-text">Our identity reflects exactly what we deliver: clean, crisp, and highly professional results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — What We Stand For */}
      <section className="section" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="container">
          <h2 className="section-title">What We Stand For</h2>
          <p className="section-subtitle">The principles that guide every print job we take on.</p>
          <div className="value-props-grid">
            <div className="value-prop">
              <div className="value-prop-icon">
                <CheckCircle size={22} />
              </div>
              <h4>Quality First</h4>
              <p>Every printed piece represents the customer. We ensure it's done right.</p>
            </div>
            <div className="value-prop">
              <div className="value-prop-icon">
                <Sparkles size={22} />
              </div>
              <h4>Attention to Detail</h4>
              <p>From layout checking to the final finishing cuts.</p>
            </div>
            <div className="value-prop">
              <div className="value-prop-icon">
                <ShieldCheck size={22} />
              </div>
              <h4>Reliable Service</h4>
              <p>Clear communication and dependable execution on deadlines.</p>
            </div>
            <div className="value-prop">
              <div className="value-prop-icon">
                <Printer size={22} />
              </div>
              <h4>Customer Requirements</h4>
              <p>Printing should match the customer's actual needs, without upselling.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 04 — Our Capabilities */}
      <section className="section" style={{ backgroundColor: 'var(--sheet)' }}>
        <div className="container">
          <h2 className="section-title">Our Capabilities</h2>
          <p className="section-subtitle">A comprehensive range of in-house printing and finishing services.</p>
          <div className="capabilities-grid">
            <div className="capability-item">
              <h4>Printing</h4>
              <p>High-quality offset and digital print capabilities.</p>
            </div>
            <div className="capability-item">
              <h4>Paper Options</h4>
              <p>A variety of stock weights, textures, and finishes.</p>
            </div>
            <div className="capability-item">
              <h4>Finishing</h4>
              <p>Lamination, die-cutting, embossing, and binding.</p>
            </div>
            <div className="capability-item">
              <h4>Custom Requirements</h4>
              <p>Unique sizing and specialized print combinations.</p>
            </div>
            <div className="capability-item">
              <h4>Bulk Orders</h4>
              <p>Equipped to handle high-volume commercial runs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — Final CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Looking for a Printing Partner?</h2>
          <p className="cta-text">Let's discuss how Al Kareem Enterprises can support your printing needs.</p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Contact Al Kareem Enterprises</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
