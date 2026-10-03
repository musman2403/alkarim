import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Printer, FileText, Image as ImageIcon, Briefcase, 
  ArrowRight, MapPin, Phone, Mail, Layers, Cpu, Scissors, 
  Sparkles, BookOpen, Box, ShieldCheck, Truck, Star
} from 'lucide-react';
import workshopIntroImg from '../assets/printing_press_intro.jpg';
import heroImg from '../assets/hero_press.jpg';
import imgBusinessCards from '../assets/business_cards_1790939576207.jpg';
import imgAnnualReport from '../assets/annual_report_1790939587446.jpg';
import imgLuxuryBoxes from '../assets/luxury_boxes_1790939601140.jpg';
import imgLetterhead from '../assets/letterhead_1790939614285.jpg';
import imgInvitations from '../assets/invitations_1790939630459.jpg';
import imgTakeoutBags from '../assets/takeout_bags_1790939664635.jpg';

const Home = () => {
  const movementItems = [
    "Offset & Digital Printing",
    "Commercial Packaging",
    "Business Stationery",
    "Die-Cutting & Embossing",
    "Township, Lahore",
    "Books & Catalogues",
    "Rapid Turnaround",
    "High-Precision Quality",
    "Mian Zahid Mahmood"
  ];

  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "5,000+", label: "Projects Delivered" },
    { number: "24/48h", label: "Rapid Turnaround" }
  ];

  const services = [
    {
      num: "01",
      icon: <Briefcase size={28} />,
      title: "Business Stationery",
      text: "Business cards, letterheads, envelopes and office materials.",
    },
    {
      num: "02",
      icon: <FileText size={28} />,
      title: "Marketing Materials",
      text: "Brochures, flyers, catalogues and promotional materials.",
    },
    {
      num: "03",
      icon: <ImageIcon size={28} />,
      title: "Cards & Invitations",
      text: "Professional and personalized printed cards.",
    },
    {
      num: "04",
      icon: <Printer size={28} />,
      title: "Custom Printing",
      text: "Print solutions tailored to specific requirements.",
    }
  ];

  const amenities = [
    {
      icon: <Layers size={24} />,
      title: "High-Volume Offset Presses",
      desc: "Commercial multi-color presses engineered for high-volume brochures, magazines, catalogues, and stationery with deep, consistent ink coverage.",
      tag: "German Precision"
    },
    {
      icon: <Cpu size={24} />,
      title: "Direct CTP Prepress Engine",
      desc: "Computer-to-Plate laser technology provides pin-point color registration, ultra-sharp vector line reproduction, and true-to-life proofs.",
      tag: "Micro-Tolerance"
    },
    {
      icon: <Scissors size={24} />,
      title: "Custom Die-Cutting & Creasing",
      desc: "Precision custom tooling for pharmaceutical cartons, retail packaging, folders, and bespoke event invitations with crisp, clean edges.",
      tag: "Bespoke Dies"
    },
    {
      icon: <Sparkles size={24} />,
      title: "Artisan Finishing & Foil Stamping",
      desc: "Elevate your business presence with soft-touch thermal lamination, spot UV gloss, metallic gold & silver foil stamping, and deep embossing.",
      tag: "Luxury Finish"
    },
    {
      icon: <BookOpen size={24} />,
      title: "Automated Bookbinding Suite",
      desc: "Complete in-house finishing department providing perfect binding, saddle stitching, wire-o, spiral binding, and triple-knife trimming.",
      tag: "In-House Binding"
    },
    {
      icon: <Box size={24} />,
      title: "Premium Board & Paper Vault",
      desc: "Climate-controlled storage of imported art cards, textured linen stocks, bleached kraft board, and high-opacity woodfree paper.",
      tag: "Stock Variety"
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Batch Color & Densitometer QC",
      desc: "Rigorous manual and digital inspection across every run ensures uniform Pantone balance and density from sheet 1 to sheet 50,000.",
      tag: "100% Quality Pass"
    },
    {
      icon: <Truck size={24} />,
      title: "Express Lahore Doorstep Dispatch",
      desc: "Prompt, moisture-proof packed deliveries directly to corporate offices, commercial hubs, and factories throughout Lahore.",
      tag: "Township Logistics"
    }
  ];

  const testimonials = [
    {
      name: "Tariq Mehmood",
      role: "Managing Director",
      company: "Apex Consumer Brands, Lahore",
      avatar: "TM",
      stars: 5,
      quote: "Al Karim Enterprises has been our exclusive printing partner for over 8 years. Their color consistency across our product catalogues and business stationery is unmatched. Mian Zahid always ensures orders are completed ahead of schedule.",
      project: "Corporate Catalogues & Custom Stationery"
    },
    {
      name: "Sara Kamran",
      role: "Creative Director",
      company: "Studio 9 Design & Media",
      avatar: "SK",
      stars: 5,
      quote: "Finding a printer in Lahore who genuinely understands intricate die-cuts, foil stamping, and premium art card textures used to be difficult until we partnered with Al Karim. The final finish on our luxury packaging was immaculate.",
      project: "Rigid Product Boxes & Foiled Invites"
    },
    {
      name: "Dr. Asad Ullah",
      role: "Head of Operations",
      company: "Horizon Healthcare Group",
      avatar: "AU",
      stars: 5,
      quote: "We required over 40,000 multi-page medical brochures and prescription booklets on an urgent deadline. Al Karim handled the entire run seamlessly without a single compromise on paper weight or print sharpness.",
      project: "Medical Booklets & Corporate Literature"
    }
  ];

  const steps = [
    { num: "01", title: "Tell Us What You Need", text: "Share your printing requirements." },
    { num: "02", title: "Confirm the Details", text: "Finalize specifications, quantity and design." },
    { num: "03", title: "We Print", text: "Your approved work goes into production." },
    { num: "04", title: "Ready for Delivery", text: "Receive your completed printed materials." }
  ];

  return (
    <div>
      {/* 01 — Hero */}
      <section className="hero">
        <div className="hero-bg">
          <img src={heroImg} alt="Al Karim Enterprises printing facility" />
        </div>
        <div className="container hero-container">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot"></span>
            Professional Printing · Lahore, Pakistan
          </div>
          <h1 className="hero-title">Printing That Gives Your Business a Professional Presence.</h1>
          <p className="hero-text">Quality printing solutions for business, marketing, stationery, and custom print requirements from Al Karim Enterprises, Lahore.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Request a Quote</Link>
            <Link to="/gallery" className="btn btn-secondary btn-lg">View Our Work</Link>
          </div>
          <div className="hero-location">
            <MapPin size={14} />
            Al Karim Enterprises
            <span className="hero-location-dot"></span>
            Township, Lahore
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="hero-scroll-line"></div>
        </div>
      </section>

      {/* Movement Bar after Hero */}
      <div className="movement-bar" aria-label="Al Karim highlights ticker">
        <div className="movement-track">
          {[...movementItems, ...movementItems].map((item, idx) => (
            <div key={idx} className="movement-item">
              <span>{item}</span>
              <span className="movement-bullet">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* 02 — Quick Introduction & Workshop Showcase */}
      <section className="section intro-showcase-section">
        <div className="container">
          <div className="intro-showcase-grid">
            {/* Left Content Column */}
            <div className="intro-content-col">
              <div className="intro-eyebrow">
                <Sparkles size={14} />
                <span>Premier Commercial Printing in Lahore</span>
              </div>
              
              <h2 className="intro-title">
                Printing You Can <span className="intro-title-highlight">Rely On.</span>
              </h2>
              
              <p className="intro-lead-text">
                Al Karim Enterprises provides dedicated commercial printing services to ensure your brand always looks its best. From everyday business stationery to bespoke high-volume packaging and marketing collateral, we manage every production run with precision and uncompromising standards.
              </p>

              <div className="intro-features-grid">
                <div className="intro-feature-card">
                  <div className="intro-feature-icon-wrap">
                    <CheckCircle size={17} />
                  </div>
                  <div>
                    <h4 className="intro-feature-heading">Quality-Focused Printing</h4>
                    <p className="intro-feature-desc">Computer-to-Plate (CTP) laser precision and calibrated Heidelberg offset presses.</p>
                  </div>
                </div>

                <div className="intro-feature-card">
                  <div className="intro-feature-icon-wrap">
                    <CheckCircle size={17} />
                  </div>
                  <div>
                    <h4 className="intro-feature-heading">Professional Finishing</h4>
                    <p className="intro-feature-desc">Precision die-cutting, spot UV coating, embossing, gold foil stamping, and binding.</p>
                  </div>
                </div>

                <div className="intro-feature-card">
                  <div className="intro-feature-icon-wrap">
                    <CheckCircle size={17} />
                  </div>
                  <div>
                    <h4 className="intro-feature-heading">Custom Print Solutions</h4>
                    <p className="intro-feature-desc">Tailored formulations for packaging cartons, corporate folders, and custom sizes.</p>
                  </div>
                </div>

                <div className="intro-feature-card">
                  <div className="intro-feature-icon-wrap">
                    <CheckCircle size={17} />
                  </div>
                  <div>
                    <h4 className="intro-feature-heading">Serving Clients in Lahore</h4>
                    <p className="intro-feature-desc">Township-based production facility delivering prompt turnaround across the region.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Media / Image Column */}
            <div className="intro-visual-col">
              <div className="intro-image-frame">
                <img 
                  src={workshopIntroImg} 
                  alt="Al Karim Enterprises Commercial Printing Press Facility in Lahore" 
                  className="intro-image"
                  loading="lazy"
                />
                
                {/* Floating Trust Badge: Facility Info */}
                <div className="intro-floating-badge top-badge">
                  <div className="badge-pulse-dot"></div>
                  <div>
                    <div className="badge-title">Heidelberg & CTP Facility</div>
                    <div className="badge-subtitle">Township, Sector A2, Lahore</div>
                  </div>
                </div>

                {/* Floating Trust Badge: Quality Guarantee */}
                <div className="intro-floating-badge bottom-badge">
                  <div className="badge-icon-box">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="badge-title">100% Quality Guaranteed</div>
                    <div className="badge-subtitle">Prepress, Proofing & Press Inspection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <React.Fragment key={idx}>
                <div className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
                {idx < stats.length - 1 && <div className="stat-divider"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — What We Print */}
      <section className="section" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="container">
          <h2 className="section-title">What We Print</h2>
          <p className="section-subtitle">Professional printing services for businesses of every scale — from startup stationery to enterprise-grade production runs.</p>
          <div className="cards-grid">
            {services.map((svc) => (
              <div key={svc.num} className="service-card">
                <div className="service-card-number">{svc.num}</div>
                <div className="service-card-icon">{svc.icon}</div>
                <h3 className="service-card-title">{svc.title}</h3>
                <p className="service-card-text">{svc.text}</p>
                <Link to="/services" className="link-arrow">
                  View Services <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Featured Work */}
      <section className="section">
        <div className="container">
          <div className="featured-work-header">
            <h2 className="section-title section-title--left">See the Difference in the Print.</h2>
            <Link to="/gallery" className="btn btn-secondary">Explore Full Gallery</Link>
          </div>
        </div>
        
        <div className="featured-work-scroll">
          {[
            imgBusinessCards,
            imgLetterhead,
            imgAnnualReport,
            imgLuxuryBoxes,
            imgTakeoutBags,
            imgInvitations
          ].map((src, i) => (
            <Link 
              key={i} 
              to="/gallery" 
              className="featured-work-item"
              title="Click to view work in Gallery"
            >
              <img src={src} alt="Featured print work" loading="lazy" />
            </Link>
          ))}
        </div>
      </section>

      {/* 04.5 — Amenities & Workshop Facilities */}
      <section className="amenities-section">
        <div className="container">
          <div className="section-badge-center">
            <span className="section-badge">
              <Sparkles size={13} /> Workshop Capabilities & Amenities
            </span>
          </div>
          <h2 className="section-title">Complete Printing Infrastructure Under One Roof.</h2>
          <p className="section-subtitle">
            From high-speed multi-color offset presses to artisan post-press finishing, our Township facility is engineered to deliver high-precision commercial printing.
          </p>

          <div className="amenities-grid">
            {amenities.map((item, idx) => (
              <div key={idx} className="amenity-card">
                <div className="amenity-icon-box">
                  {item.icon}
                </div>
                <h3 className="amenity-title">{item.title}</h3>
                <p className="amenity-desc">{item.desc}</p>
                <span className="amenity-tag">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Why Al Karim Enterprises */}
      <section className="section" style={{ backgroundColor: 'var(--sheet)' }}>
        <div className="container">
          <h2 className="section-title">Why Al Karim Enterprises</h2>
          <p className="section-subtitle">Built on a foundation of quality, reliability, and professional service over 25 years.</p>
          <div className="value-props-grid">
            <div className="value-prop">
              <div className="value-prop-icon">
                <CheckCircle size={22} />
              </div>
              <h4>Quality</h4>
              <p>Attention to print quality and finished presentation across every production run.</p>
            </div>
            <div className="value-prop">
              <div className="value-prop-icon">
                <ShieldCheck size={22} />
              </div>
              <h4>Reliability</h4>
              <p>Dependable service for routine and project-based printing with consistent results.</p>
            </div>
            <div className="value-prop">
              <div className="value-prop-icon">
                <Sparkles size={22} />
              </div>
              <h4>Professional Service</h4>
              <p>Clear communication from requirement to finished print, managed by experienced staff.</p>
            </div>
            <div className="value-prop">
              <div className="value-prop-icon">
                <Printer size={22} />
              </div>
              <h4>Custom Solutions</h4>
              <p>Printing tailored around your quantity, format and specific requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05.5 — Client Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-badge-center">
            <span className="section-badge">
              <Star size={13} /> Client Trust & Verification
            </span>
          </div>
          <h2 className="section-title">Trusted by Leading Businesses in Lahore.</h2>
          <p className="section-subtitle">
            Here is what corporate procurement leads, creative studios, and brand managers say about working with Al Karim Enterprises.
          </p>

          <div className="testimonials-grid">
            {testimonials.map((test, idx) => (
              <div key={idx} className="testimonial-card">
                <div>
                  <div className="testimonial-stars">
                    {[...Array(test.stars)].map((_, sIdx) => (
                      <Star key={sIdx} size={16} fill="#F59E0B" stroke="#F59E0B" />
                    ))}
                  </div>
                  <p className="testimonial-quote">"{test.quote}"</p>
                </div>
                <div>
                  <div className="testimonial-author-box">
                    <div className="testimonial-avatar">{test.avatar}</div>
                    <div>
                      <div className="testimonial-author-name">{test.name}</div>
                      <div className="testimonial-author-role">{test.role} · {test.company}</div>
                      <span className="testimonial-project-pill">Verified: {test.project}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — How It Works */}
      <section className="section" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">From initial enquiry to final delivery — a straightforward, transparent process.</p>
          <div className="process-grid">
            {steps.map((step) => (
              <div key={step.num} className="process-step">
                <div className="process-step-number">{step.num}</div>
                <h4 className="process-step-title">{step.title}</h4>
                <p className="process-step-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Strong CTA */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Have Something That Needs Printing?</h2>
          <p className="cta-text">
            Tell us what you need and let's discuss your next print project.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Request a Quote</Link>
            <a href="tel:03228435577" className="btn btn-white btn-lg">Call Us</a>
          </div>
        </div>
      </section>

      {/* 08 — Contact Preview */}
      <section className="section" style={{ padding: 0 }}>
        <div className="contact-preview">
          <div className="contact-preview-info">
            <h3>Contact Information</h3>
            <div className="contact-preview-list">
              <div className="contact-preview-item">
                <MapPin size={20} className="contact-preview-icon" />
                <div>
                  <strong>Address</strong>
                  <p>296, Block 5, Sector A2, Township, Lahore</p>
                </div>
              </div>
              <div className="contact-preview-item">
                <Phone size={20} className="contact-preview-icon" />
                <div>
                  <strong>Mobile</strong>
                  <p>
                    <a href="tel:03228435577">0322-8435577</a><br/>
                    <a href="tel:03328435577">0332-8435577</a>
                  </p>
                  <strong>Landline</strong>
                  <p>
                    <a href="tel:04235116991">042-35116991</a><br/>
                    <a href="tel:04235233134">35233134</a>
                  </p>
                </div>
              </div>
              <div className="contact-preview-item">
                <Mail size={20} className="contact-preview-icon" />
                <div>
                  <strong>Email</strong>
                  <p>
                    <a href="mailto:alkarim30@yahoo.com">alkarim30@yahoo.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-preview-map">
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
        </div>
      </section>

    </div>
  );
};

export default Home;
