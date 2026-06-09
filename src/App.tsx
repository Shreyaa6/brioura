import { useState, useEffect } from 'react';
import { 
  Heart, 
  Sparkles, 
  Menu, 
  X, 
  Gem,
  Clock,
  Award,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import { Component as PricingSection, type PricingPlan } from './components/ui/pricing-section';
import TestimonialsEditorial, { type EditorialTestimonial } from './components/ui/editorial-testimonial';

import bridal01 from './assets/bridal01.jpg';
import engagement01 from './assets/engagement01.jpg';
import editorial01 from './assets/editorial01.jpg';
import heroImage from './assets/bbb.jpg';
import tanyaPortrait from './assets/tanya_portrait.png';

import { ImageGallery } from './components/ui/image-gallery';

// Type definitions



function App() {
  // Navigation scrolled state
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active section for menu highlighting
  const [activeSection, setActiveSection] = useState('home');


  



  // Constants
  const basePrices = {
    bridal: 25000,
    engagement: 18000,
    party: 12000
  };

  const servicePlans: PricingPlan[] = [
    {
      id: 'bridal',
      name: 'Celebrity Bridal',
      price: basePrices.bridal,
      description: 'A complete wedding-day beauty ritual with long-wear artistry, luxury prep, and calm suite-side coordination.',
      features: [
        'Premium HD or airbrush base',
        'Luxury lash and eye detailing',
        'Outfit draping and jewelry placement',
        'Luxury skin prep treatment'
      ],
      actionLabel: 'Select Bridal',
      icon: Heart
    },
    {
      id: 'engagement',
      name: 'Engagement / Sagan',
      price: basePrices.engagement,
      description: 'Soft-glam polish for rings, portraits, and evening celebrations with a luminous finish that photographs beautifully.',
      features: [
        'Soft-glam glowing base',
        'Customized signature eyes',
        'Hair design and floral styling',
        'Outfit draping and setting'
      ],
      actionLabel: 'Select Engagement',
      icon: Sparkles
    },
    {
      id: 'custom',
      name: 'Custom Curation',
      price: 'On Request',
      description: 'A fully bespoke beauty experience tailored to destination weddings, multi-day events, or editorial photoshoots.',
      features: [
        'Customized moodboards & consultations',
        'Multiple look transitions',
        'Bridal party styling coordination',
        'Exclusive luxury kit & dedicated time'
      ],
      actionLabel: 'Inquire Now',
      icon: Gem
    }
  ];



  const testimonials: EditorialTestimonial[] = [
    {
      id: 1,
      author: 'Dr. Aarushi Sen',
      role: 'Bridal Client (Dehradun)',
      company: 'Royal Crimson Bride',
      quote: 'Tanya made my skin look like skin, only completely flawless and glowing. The makeup lasted from the morning ceremony through reception without a single crease.',
      image: bridal01
    },
    {
      id: 2,
      author: 'Riya Malhotra',
      role: 'Engagement Client (Mussoorie)',
      company: 'Sundowner Sagan',
      quote: 'She understood my vision of minimal but elegant instantly. The soft-glam dewy finish photographed beautifully in the Mussoorie light.',
      image: engagement01
    },
    {
      id: 3,
      author: 'Megha Thapa',
      role: 'Celebrity Guest Makeup',
      company: 'Reception Glam',
      quote: 'Her attention to detail is unmatched. She sets up a calm luxury vanity at the venue and makes sensitive skin look and feel amazing.',
      image: editorial01
    }
  ];

  

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Highlight active navigation section
      const sections = ['home', 'about', 'services', 'gallery', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return (
    <>
      {/* Luxury Navigation Bar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-shell">
          <a href="#home" className="nav-wordmark" aria-label="Brioura Home">
            Brioura<span>.</span>
          </a>

          <div className="nav-menu">
            <a href="#home" className={`nav-menu-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#about" className={`nav-menu-link ${activeSection === 'about' ? 'active' : ''}`}>About</a>
            <a href="#services" className={`nav-menu-link ${activeSection === 'services' ? 'active' : ''}`}>Services</a>
            <a href="#gallery" className={`nav-menu-link ${activeSection === 'gallery' ? 'active' : ''}`}>Gallery</a>
            <a href="#testimonials" className={`nav-menu-link ${activeSection === 'testimonials' ? 'active' : ''}`}>Reviews</a>
          </div>

          <a href="#contact" className="nav-cta">
            Inquire
          </a>

          <button
            className="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{ marginRight: '0.2rem' }}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a 
          href="#home" 
          className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </a>
        <a 
          href="#about" 
          className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About Tanya
        </a>
        <a 
          href="#services" 
          className={`mobile-nav-link ${activeSection === 'services' ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Services & Rates
        </a>
        <a 
          href="#gallery" 
          className={`mobile-nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Signature Gallery
        </a>
        <a 
          href="#testimonials" 
          className={`mobile-nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Client Stories
        </a>
        <a 
          href="#contact" 
          className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Get in Touch
        </a>
        <a 
          href="#contact" 
          className="mobile-btn-book"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Book Appointment
        </a>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div 
          className="hero-bg" 
          style={{ backgroundImage: `url(${heroImage})` }} 
        />
        <div className="hero-overlay" />
        <div className="hero-content editorial-hero">
          <h1 className="editorial-title">
            {"BRIOURA".split('').map((char, index) => (
              <span key={index} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>{char}</span>
            ))}
          </h1>
          <p className="editorial-subtitle">by Tanya Kashyap</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content-left">
              <span className="section-label">The Artist</span>
              <h2 className="about-title">Tanya Kashyap</h2>
              <p className="about-desc">
                Welcome to Brioura. I believe that true luxury in artistry lies in revelation, not disguise. Specializing in high-end bridal and editorial aesthetics across India, my signature approach focuses on cultivating flawless, lit-from-within skin that breathes. Every brushstroke is an intentional refinement of your natural architecture, ensuring you look breathtaking in person and timeless through the lens.
              </p>
              
              <div className="about-philosophy">
                "Embracing real skin textures, sculpting weightless contours, and designing soft-focus eyes for an enduring, cinematic elegance."
              </div>

              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon-container">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 className="highlight-title">HD & Airbrush Specialist</h3>
                    <p className="highlight-desc">Seamless blending methods custom-built for high-definition photography.</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon-container">
                    <Gem size={20} />
                  </div>
                  <div>
                    <h3 className="highlight-title">Premium Kit Brands</h3>
                    <p className="highlight-desc">Using exclusively luxury, skin-healthy international cosmetic labels.</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon-container">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="highlight-title">16hr High Durability</h3>
                    <p className="highlight-desc">Waterproof, smudge-free techniques tailored to combat humectant hill air.</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon-container">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="highlight-title">Destination Travel</h3>
                    <p className="highlight-desc">Travel-ready setup globally, bringing the luxury vanity direct to your suite.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-image-right">
              <div className="about-image-wrapper">
                <img 
                  src={tanyaPortrait} 
                  alt="Tanya Kashyap - Luxury Makeup Artist" 
                  className="about-image"
                />
                <div className="about-image-badge">
                  <span className="badge-number">5+</span>
                  <span className="badge-text">Years of<br />Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding services-section">
        <div className="container">
          <PricingSection plans={servicePlans} />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section overflow-hidden" style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
        <div className="container">
          <h2 className="gallery-title" style={{ color: 'var(--text-dark-primary)', textAlign: 'center', marginBottom: '2rem' }}>My Works</h2>

          <ImageGallery />

                  </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding testimonials-section">
        <div className="container">
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Testimonials</span>
          <h2>Happy Brides</h2>
          <TestimonialsEditorial testimonials={testimonials} />
        </div>
      </section>

      {/* Booking / Contact Form Section */}
      <section id="contact" className="section-padding contact-section" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Connect</span>
          <h2 className="contact-title" style={{ marginBottom: '1rem' }}>Inquire Availability</h2>
          <p className="info-panel-desc" style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            Dates book fast—especially during peak wedding season. Reach out directly on Instagram to coordinate your session, review pricing, and secure your booking.
          </p>

          <a 
            href="https://www.instagram.com/briourabytanyakashyap/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-form-submit instagram-btn"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', textDecoration: 'none', padding: '1.2rem 3rem', fontSize: '1.1rem', width: 'auto' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Enquire Now on Instagram
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer" style={{ padding: '6rem 0 2rem', textAlign: 'center', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', marginBottom: '4rem', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em' }}>
            <a href="#home" style={{ color: 'var(--text-light-secondary)', textDecoration: 'none' }}>Home</a>
            <a href="#about" style={{ color: 'var(--text-light-secondary)', textDecoration: 'none' }}>About</a>
            <a href="#services" style={{ color: 'var(--text-light-secondary)', textDecoration: 'none' }}>Services</a>
            <a href="#gallery" style={{ color: 'var(--text-light-secondary)', textDecoration: 'none' }}>Portfolio</a>
            <a href="#contact" style={{ color: 'var(--text-light-secondary)', textDecoration: 'none' }}>Contact</a>
          </div>
          
          <div className="animated-footer-text">
            BRIOURA
          </div>
          
          <p style={{ fontSize: '0.8rem', color: 'var(--text-light-secondary)', marginTop: '2rem', opacity: 0.6 }}>
            &copy; {new Date().getFullYear()} Brioura by Tanya Kashyap. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
