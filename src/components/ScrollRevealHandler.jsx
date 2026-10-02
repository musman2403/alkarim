import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollRevealHandler = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    const timer = setTimeout(() => {
      const targets = document.querySelectorAll(
        '.section, .page-hero, .stats-section, .amenities-section, .testimonials-section, .timeline-item, .card, .amenity-card, .testimonial-card'
      );

      targets.forEach((el) => {
        el.classList.add('reveal-element');
        observer.observe(el);
      });
    }, 60);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

export default ScrollRevealHandler;
