import { useState, useEffect } from 'react';
import { 
  Heart, 
  Sparkles, 
  Star,
  Menu, 
  X, 
  Gem,
  Clock,
  Award,
} from 'lucide-react';
import { Component as PricingSection, type PricingPlan } from './components/ui/pricing-section';
import TestimonialsEditorial, { type EditorialTestimonial } from './components/ui/editorial-testimonial';

import bridal01 from './assets/bridal01.jpg';
import bridal02 from './assets/bridal02.jpg';
import bridal03 from './assets/bridal03.jpg';
import bridal04 from './assets/bridal04.jpg';
import engagement01 from './assets/engagement01.jpg';
import engagement02 from './assets/engagement02.jpg';
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
    },
    {
      id: 4,
      author: 'Shruti Desai',
      role: 'Editorial Shoot',
      company: 'Fashion Week',
      quote: 'Tanya brought such an edgy, elevated aesthetic to our runway show. Her speed and precision under pressure were incredible, and the looks were flawless.',
      image: bridal01
    },
    {
      id: 5,
      author: 'Priya Chahal',
      role: 'Sangeet Glam',
      company: 'Heritage Resort',
      quote: 'I have never felt more beautiful. She balanced a bold dramatic eye with the most seamless, skin-like base. It stayed perfect through hours of dancing.',
      image: engagement01
    },
    {
      id: 6,
      author: 'Ananya Verma',
      role: 'Destination Bride',
      company: 'Udaipur Palace',
      quote: 'Booking Brioura was the best decision of my wedding. She brings a calm, luxurious energy and her premium kit feels so gentle on the skin. Pure magic.',
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

          <a href="https://www.instagram.com/briourabytanyakashyap/" target="_blank" rel="noopener noreferrer" className="nav-cta">
            Enquire
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

      {/* About Section - Ultra Minimalist Avant-Garde */}
      <section id="about" style={{ padding: '10rem 2rem', background: '#f0ece6', position: 'relative', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
          
          <div className="about-avant-container">
            
            {/* The Arch Image */}
            <div className="about-avant-image-wrapper">
               <div className="about-avant-arch">
                 <img 
                   src={tanyaPortrait} 
                   alt="Tanya Kashyap" 
                   style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                 />
               </div>
               
               {/* Giant Overlapping Text */}
               <div className="about-avant-overlap">
                 <h2>
                   Tanya<br/><span style={{ color: 'var(--gold)', fontFamily: '"Dancing Script", cursive', fontSize: '0.85em', marginLeft: '1.5rem' }}>Kashyap</span>
                 </h2>
               </div>
            </div>

            {/* Ultra Minimal Text Block */}
            <div className="about-avant-bio">
               <p style={{ 
                 fontFamily: 'var(--font-sans)', 
                 fontSize: '0.7rem', 
                 textTransform: 'uppercase', 
                 letterSpacing: '0.3em', 
                 color: 'var(--text-dark-primary)', 
                 marginBottom: '2.5rem',
                 fontWeight: 600,
                 display: 'flex',
                 alignItems: 'center',
                 justifyContent: 'inherit',
                 gap: '1rem'
               }}>
                 <span style={{ width: '40px', height: '1px', background: 'var(--text-dark-primary)' }}></span>
                 The Artist
               </p>
               
               <p style={{ 
                 fontFamily: 'var(--font-serif)', 
                 fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', 
                 color: 'var(--text-dark-primary)', 
                 lineHeight: 1.3, 
                 marginBottom: '2rem' 
               }}>
                 "Artistry that doesn't mask, but <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>elevates</span>."
               </p>
               
               <p style={{ 
                 fontSize: '0.95rem', 
                 color: '#555555', 
                 lineHeight: 1.8, 
                 maxWidth: '400px' 
               }}>
                 Specializing in weightless, second-skin finishes for the modern bride. Every brushstroke is an intentional refinement of your natural architecture, ensuring you look breathtaking in person and timeless through the lens.
               </p>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section overflow-hidden" style={{ paddingTop: '4rem', paddingBottom: '0' }}>
        <div className="container">
          <div className="gallery-header text-center" style={{ marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)', fontWeight: 400, color: 'var(--text-dark-primary)', lineHeight: 1.1, margin: 0, fontFamily: 'var(--font-serif)', whiteSpace: 'nowrap' }}>
              A collection of <span style={{ fontFamily: '"Dancing Script", cursive', color: 'var(--gold)', fontSize: '1.2em' }}>memorable looks.</span>
            </h2>
          </div>
        </div>
        <ImageGallery />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section" style={{ background: '#f0ece6', padding: '6rem 0 7rem 0', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem', textAlign: 'left' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, color: 'var(--text-dark-primary)', lineHeight: 1.1, margin: 0, fontFamily: 'var(--font-sans)', letterSpacing: '-0.03em' }}>
              Don't take our word for it!<br/>Hear it from our brides.
            </h2>
          </div>
        </div>
        
        {/* Full-bleed wrapper for marquee */}
        <div style={{ width: '100%' }}>
          <TestimonialsEditorial testimonials={testimonials} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '5rem 2rem', background: '#fafafa', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <PricingSection plans={servicePlans} />
        </div>
      </section>

      {/* Booking / Contact Form Section */}
      <section id="contact" style={{ 
        position: 'relative', 
        display: 'flex', 
        minHeight: '70vh', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '6rem 2rem',
        backgroundImage: `url(${bridal01})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        
        {/* Dark overlay to ensure the image isn't too bright behind the glass */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }}></div>

        {/* Center Glass Modal */}
        <div style={{ 
          position: 'relative',
          zIndex: 10,
          maxWidth: '700px', 
          width: '100%',
          background: 'rgba(255, 255, 255, 0.75)', 
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          border: '1px solid rgba(255, 255, 255, 0.8)', 
          borderRadius: '1.5rem',
          padding: '5rem 3rem', 
          textAlign: 'center', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
        }}>
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--text-light-secondary)', display: 'block', marginBottom: '1.5rem' }}>
            Reserve Your Date
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 400, color: 'var(--text-dark-primary)', lineHeight: 1.1, margin: 0, fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>
            Ready to become a <br/><span style={{ fontFamily: '"Dancing Script", cursive', color: 'var(--primary)', fontSize: '1.3em', display: 'inline-block', transform: 'translateY(5px)' }}>Brioura Bride?</span>
          </h2>
          <p style={{ maxWidth: '450px', fontSize: '1.05rem', color: '#444444', lineHeight: 1.8, marginBottom: '3rem', fontFamily: 'var(--font-sans)' }}>
            My calendar fills up quickly during peak wedding season. Reach out directly on Instagram to consult on your vision and secure your booking.
          </p>

          <a 
            href="https://www.instagram.com/briourabytanyakashyap/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '1rem', 
              textDecoration: 'none', 
              padding: '1.2rem 3rem', 
              fontSize: '0.85rem', 
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              background: '#000000',
              color: '#ffffff',
              fontWeight: 600,
              transition: 'all 0.4s ease',
              border: '1px solid #000000',
              borderRadius: '0.2rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#000000';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#000000';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Connect on Instagram
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer" style={{ background: 'var(--primary)', color: 'var(--gold)', padding: '3rem 2rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <h2 style={{ fontSize: 'clamp(2.5rem, 10vw, 6rem)', fontFamily: 'var(--font-display)', fontWeight: 800, margin: 0, lineHeight: 0.8, letterSpacing: '0.02em', color: 'var(--gold)', opacity: 0.9 }}>
          BRIOURA
        </h2>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1rem', marginBottom: '2.5rem' }}>
          <Star className="footer-sparkle" size={12} color="var(--gold)" fill="var(--gold)" style={{ opacity: 0.8 }} />
          <p style={{ fontFamily: '"Dancing Script", cursive', fontSize: 'clamp(1.2rem, 3vw, 2rem)', color: '#ffffff', opacity: 0.8, margin: 0 }}>
            by Tanya Kashyap
          </p>
          <Star className="footer-sparkle" size={12} color="var(--gold)" fill="var(--gold)" style={{ animationDelay: '2s', opacity: 0.8 }} />
        </div>

        <div style={{ width: '100%', maxWidth: '400px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.3), transparent)', marginBottom: '2rem' }}></div>

        <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.15em' }}>
          <a href="#home" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.9 }}>Home</a>
          <a href="#about" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.9 }}>About</a>
          <a href="#services" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.9 }}>Services</a>
          <a href="#gallery" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.9 }}>Portfolio</a>
          <a href="#contact" style={{ color: '#ffffff', textDecoration: 'none', opacity: 0.9 }}>Contact</a>
        </div>
        
        <p style={{ fontSize: '0.7rem', color: '#ffffff', margin: 0, opacity: 0.5, letterSpacing: '0.05em' }}>
          &copy; {new Date().getFullYear()} Brioura. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
