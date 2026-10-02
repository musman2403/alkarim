import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-main-grid">
          {/* Brand Info Column */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-logo" onClick={scrollToTop}>
              <div className="footer-logo-badge">
                <img src="/logo.jpg" alt="Al Karim Logo" className="footer-logo-img" />
              </div>
              <div>
                <div className="footer-logo-title">AL KARIM</div>
                <div className="footer-logo-subtitle">ENTERPRISES</div>
              </div>
            </Link>
            <p className="footer-brand-bio">
              Modernized offset & digital printing solutions in Lahore. High-precision commercial stationery, packaging boxes, catalogues, and bespoke finishing.
            </p>
            <div className="footer-badge-pill">
              <span className="footer-badge-dot"></span>
              Workshop in Township, Lahore
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/" className="footer-nav-link" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-link-icon" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-nav-link" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-link-icon" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-nav-link" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-link-icon" /> Print Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="footer-nav-link" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-link-icon" /> Work Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-nav-link" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-link-icon" /> Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/services" className="footer-nav-link" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-link-icon" /> Business Stationery
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-nav-link" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-link-icon" /> Books & Magazines
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-nav-link" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-link-icon" /> Packaging & Boxes
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-nav-link" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-link-icon" /> Marketing Brochures
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-nav-link" onClick={scrollToTop}>
                  <ChevronRight size={14} className="footer-link-icon" /> Custom Die-Cutting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-heading">Contact Details</h4>
            
            <div className="footer-contact-item">
              <div className="footer-contact-icon-box">
                <MapPin size={18} />
              </div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">Location</span>
                <p>296, Block 5, Sector A2, Township, Lahore</p>
              </div>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon-box">
                <Phone size={18} />
              </div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">Mobile (Direct / WhatsApp)</span>
                <div className="footer-phone-links">
                  <a href="tel:03228435577">0322-8435577</a>
                  <span className="footer-bullet">•</span>
                  <a href="tel:03328435577">0332-8435577</a>
                </div>
              </div>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon-box">
                <Phone size={18} />
              </div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">Landline Office</span>
                <div className="footer-phone-links">
                  <a href="tel:04235116991">042-35116991</a>
                  <span className="footer-bullet">•</span>
                  <a href="tel:04235233134">35233134</a>
                </div>
              </div>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon-box">
                <Mail size={18} />
              </div>
              <div className="footer-contact-text">
                <span className="footer-contact-label">Email</span>
                <a href="mailto:alkarim30@yahoo.com" className="footer-email-link">
                  alkarim30@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} <strong>Al Karim Enterprises</strong>. All Rights Reserved.
          </p>
          <div className="footer-bottom-meta">
            <span className="footer-contact-person">
              Contact: <strong>Mian Zahid Mahmood</strong>
            </span>
            <button type="button" onClick={scrollToTop} className="footer-back-to-top" aria-label="Back to top">
              Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
