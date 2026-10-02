import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, CheckCircle, RefreshCw } from 'lucide-react';
import heroImg from '../assets/contact_intro_1790914727718.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    quantity: '',
    size: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      quantity: '',
      size: '',
      details: ''
    });
    setSubmitted(false);
  };

  return (
    <div>
      {/* 01 — Contact Hero */}
      <div className="page-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <h1 className="animate-fade-up">Let's Talk About Your Printing Requirement.</h1>
        <p className="animate-fade-up animate-delay-1">
          Tell us what you need printed and we'll help you discuss the right solution.
        </p>
      </div>

      <section className="section" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Cards */}
            <div className="animate-fade-up">
              <div className="contact-cards-stack">
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4>Call</h4>
                    <div className="contact-phone-list">
                      <a href="tel:03228435577">0322-8435577</a>
                      <a href="tel:03328435577">0332-8435577</a>
                    </div>
                    <h5>Landline</h5>
                    <div className="contact-phone-list">
                      <a href="tel:04235116991">042-35116991</a>
                      <a href="tel:04235233134">35233134</a>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:alkareem30@yahoo.com" className="contact-email-link">
                      alkareem30@yahoo.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4>Visit</h4>
                    <p>296, Block 5, Sector A2,<br/>Township, Lahore</p>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="whatsapp-card">
                  <h4>Prefer WhatsApp?</h4>
                  <p>Send us your printing requirement directly.</p>
                  <a href="https://wa.me/923228435577" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                    <MessageCircle size={18} /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="contact-form animate-fade-up animate-delay-1">
              <h3>Request a Quote</h3>
              
              {submitted ? (
                <div className="form-success">
                  <CheckCircle size={44} />
                  <h4>Inquiry Received!</h4>
                  <p>
                    Thank you, <strong>{formData.name || 'valued client'}</strong>. Your printing request has been submitted to Al Kareem Enterprises. Mian Zahid Mahmood and our prepress team will contact you shortly at <strong>{formData.phone || formData.email}</strong> with a detailed estimate.
                  </p>
                  <div className="form-success-actions">
                    <a 
                      href={`https://wa.me/923228435577?text=Hi%20Al%20Karim%20Enterprises,%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(formData.service || 'printing')}.`}
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn btn-whatsapp"
                    >
                      <MessageCircle size={16} /> Also Send on WhatsApp
                    </a>
                    <button 
                      type="button" 
                      onClick={resetForm} 
                      className="btn btn-secondary"
                    >
                      <RefreshCw size={15} /> Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Name</label>
                      <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="service">What do you need printed?</label>
                    <select id="service" name="service" className="form-control" value={formData.service} onChange={handleChange} required>
                      <option value="">Select...</option>
                      <option value="business_cards">Business Cards</option>
                      <option value="stationery">Stationery (Letterheads, etc)</option>
                      <option value="marketing">Marketing Materials</option>
                      <option value="packaging">Packaging</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="quantity">Quantity</label>
                      <input type="text" id="quantity" name="quantity" className="form-control" value={formData.quantity} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="size">Required Size</label>
                      <input type="text" id="size" name="size" className="form-control" placeholder="e.g. A4, 3.5x2 inch" value={formData.size} onChange={handleChange} />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="details">Message / Requirements</label>
                    <textarea id="details" name="details" className="form-control" value={formData.details} onChange={handleChange} required></textarea>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="artwork">Upload Artwork (optional)</label>
                    <input type="file" id="artwork" name="artwork" className="form-control form-control-file" />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg btn-block"
                  >
                    <Send size={17} /> {isSubmitting ? 'Submitting Inquiry...' : 'Request a Quote'}
                  </button>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </section>

      {/* 05 — Location */}
      <section className="map-section">
        <div className="container" style={{ paddingBottom: 0 }}>
          <h2 className="section-title">Find Al Kareem Enterprises</h2>
        </div>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13612.339462886475!2d74.29658!3d31.46682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190143e0e88235%3A0xc6e4dfeb5178696c!2sTownship%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709848520000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Al Kareem Enterprises Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
