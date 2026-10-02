import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const closeMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/logo.jpg" alt="Al Kareem Logo" className="logo-img" />
          <div>
            <div className="logo-text">AL KAREEM</div>
            <div className="logo-subtext">ENTERPRISES</div>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link>
          <Link to="/services" className={`nav-link ${isActive('/services')}`}>Services</Link>
          <Link to="/gallery" className={`nav-link ${isActive('/gallery')}`}>Gallery</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
          <span className="nav-divider"></span>
          <Link to="/contact" className="btn btn-primary btn-sm nav-cta">Request a Quote</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-links">
              <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
              <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>About Us</Link>
              <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMenu}>Services</Link>
              <Link to="/gallery" className={`nav-link ${isActive('/gallery')}`} onClick={closeMenu}>Gallery</Link>
              <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>
              <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>Get a Quote</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
