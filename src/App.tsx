import { useState, useEffect } from 'react';
import { 
  Heart, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  X, 
  Menu, 
  Clock, 
  CheckCircle,
  Gem,
  Award
} from 'lucide-react';
import { Component as PricingSection, type PricingPlan, type ServicePlanId } from './components/ui/pricing-section';
import TestimonialsEditorial, { type EditorialTestimonial } from './components/ui/editorial-testimonial';

// Import assets
import bridalMakeupImg from './assets/bridal_makeup.png';
import engagementMakeupImg from './assets/engagement_makeup.png';
import editorialMakeupImg from './assets/editorial_makeup.png';
import heroImage from './assets/bbb.jpg';

import { ImageGallery } from './components/ui/image-gallery';

// Type definitions

interface Addon {
  id: string;
  name: string;
  price: number;
  description: string;
}

function App() {
  // Navigation scrolled state
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active section for menu highlighting
  const [activeSection, setActiveSection] = useState('home');

  // Estimator States
  const [selectedService, setSelectedService] = useState<ServicePlanId>('bridal');
  const [guestsCount, setGuestsCount] = useState<number>(0);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  


  // Booking Form Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    venue: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      id: 'party',
      name: 'Celebrity Party Glam',
      price: basePrices.party,
      description: 'A refined high-finish look for cocktails, receptions, and family events where you want presence without heaviness.',
      features: [
        'Lightweight high-finish glow',
        'Smoky or elegant soft eyes',
        'Modern blowout or waves',
        '12-hour setting glaze'
      ],
      actionLabel: 'Select Party Glam',
      icon: Gem
    }
  ];

  const addonsList: Addon[] = [
    { id: 'hair', name: 'HD Hair Styling Upgrade', price: 3000, description: 'Premium luxury styling, extensions setting, and hair accessory placement.' },
    { id: 'lashes', name: 'Premium Mink Eyelashes', price: 1500, description: 'Handcrafted premium reusable volume lashes for maximum impact.' },
    { id: 'draping', name: 'Saree / Dupatta Draping', price: 2000, description: 'Elegant standard or celebrity-style heavy pleating and secure pin-up.' }
  ];



  const testimonials: EditorialTestimonial[] = [
    {
      id: 1,
      author: 'Dr. Aarushi Sen',
      role: 'Bridal Client (Dehradun)',
      company: 'Royal Crimson Bride',
      quote: 'Tanya made my skin look like skin, only completely flawless and glowing. The makeup lasted from the morning ceremony through reception without a single crease.',
      image: bridalMakeupImg
    },
    {
      id: 2,
      author: 'Riya Malhotra',
      role: 'Engagement Client (Mussoorie)',
      company: 'Sundowner Sagan',
      quote: 'She understood my vision of minimal but elegant instantly. The soft-glam dewy finish photographed beautifully in the Mussoorie light.',
      image: engagementMakeupImg
    },
    {
      id: 3,
      author: 'Megha Thapa',
      role: 'Celebrity Guest Makeup',
      company: 'Reception Glam',
      quote: 'Her attention to detail is unmatched. She sets up a calm luxury vanity at the venue and makes sensitive skin look and feel amazing.',
      image: editorialMakeupImg
    }
  ];

  const premiumBrands = [
    'Dior Beauty', 'Chanel', 'Huda Beauty', 'MAC Cosmetics', 
    'Fenty Beauty', 'Estée Lauder', 'Anastasia Beverly Hills', 'NARS'
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

  // Calculate live estimate
  const getEstimatedCost = () => {
    let total = basePrices[selectedService];
    
    // Addons
    selectedAddons.forEach(addonId => {
      const addon = addonsList.find(a => a.id === addonId);
      if (addon) total += addon.price;
    });

    // Guests
    total += guestsCount * 5000;

    return total;
  };

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  // Form Submit handler
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
  };

  const closeSuccessModal = () => {
    setIsSubmitted(false);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      venue: '',
      message: ''
    });
  };

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
      <section 
        id="home" 
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-subtitle">Brioura by Tanya Kashyap</span>
          <h1 className="hero-title">
            <span className="gold-gradient-text">Radiant Bridal Artistry</span>
          </h1>
          <p className="hero-description">
            Bespoke luxury bridal, engagement, and celebrity makeup services designed 
            to celebrate your unique elegance. Based in Dehradun, available for venue travel nationwide.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">
              Book Your Date
            </a>
            <a href="#gallery" className="btn-secondary">
              View Portfolio
            </a>
          </div>
        </div>
        <button 
          className="hero-scroll-btn"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Scroll to explore
          <span className="scroll-indicator-dot" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content-left">
              <span className="section-label">The Artist</span>
              <h2 className="about-title">Tanya Kashyap</h2>
              <p className="about-desc">
                Welcome to Brioura. I believe that professional makeup should not mask your beauty, 
                but gracefully curate and amplify it. With years of experience catering to high-end 
                bridal and celebrity clients across India, I specialize in crafting flawless, dewy, 
                and glowing-from-within aesthetics.
              </p>
              
              <div className="about-philosophy">
                "Real skin textures, enhanced contours, and soft-focus eyes that photograph timelessly."
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
                  src={engagementMakeupImg} 
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

      {/* Services & Estimator Section */}
      <section id="services" className="section-padding services-section">
        <div className="container">
          <PricingSection
            selectedPlan={selectedService}
            plans={servicePlans}
            onSelectPlan={setSelectedService}
          />

          {/* Interactive Estimator Panel */}
          <div className="estimator-panel">
            <h3 className="estimator-title">Interactive Rate Calculator</h3>
            
            <div className="estimator-grid">
              <div className="estimator-options">
                
                {/* Package Select */}
                <div>
                  <h4 className="estimator-group-title">1. Select Luxury Package</h4>
                  <div className="service-selector-grid">
                    <div 
                      className={`selector-option ${selectedService === 'bridal' ? 'active' : ''}`}
                      onClick={() => setSelectedService('bridal')}
                    >
                      <div className="selector-option-name">Bridal</div>
                      <div className="selector-option-price">₹25,000</div>
                    </div>
                    <div 
                      className={`selector-option ${selectedService === 'engagement' ? 'active' : ''}`}
                      onClick={() => setSelectedService('engagement')}
                    >
                      <div className="selector-option-name">Engagement</div>
                      <div className="selector-option-price">₹18,000</div>
                    </div>
                    <div 
                      className={`selector-option ${selectedService === 'party' ? 'active' : ''}`}
                      onClick={() => setSelectedService('party')}
                    >
                      <div className="selector-option-name">Party Glam</div>
                      <div className="selector-option-price">₹12,000</div>
                    </div>
                  </div>
                </div>

                {/* Addons */}
                <div>
                  <h4 className="estimator-group-title">2. Enhance Your Package (Add-ons)</h4>
                  <div className="addon-list">
                    {addonsList.map(addon => (
                      <div 
                        key={addon.id} 
                        className={`addon-item ${selectedAddons.includes(addon.id) ? 'active' : ''}`}
                        onClick={() => toggleAddon(addon.id)}
                      >
                        <div className="addon-checkbox-label">
                          <input 
                            type="checkbox" 
                            className="addon-checkbox"
                            checked={selectedAddons.includes(addon.id)}
                            readOnly
                          />
                          <div>
                            <div>{addon.name}</div>
                            <span style={{ fontSize: '0.78rem', color: 'var(--text-light-secondary)' }}>
                              {addon.description}
                            </span>
                          </div>
                        </div>
                        <div className="addon-price">+₹{addon.price.toLocaleString('en-IN')}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guest Multiplier Slider */}
                <div>
                  <h4 className="estimator-group-title">3. Guest / Bridesmaid Makeups</h4>
                  <div className="guest-slider-container">
                    <div className="guest-slider-header">
                      <span className="guest-slider-label">Helper / Family Makeup count</span>
                      <span className="guest-slider-value">{guestsCount} Guests (+₹{(guestsCount * 5000).toLocaleString('en-IN')})</span>
                    </div>
                    <input 
                      type="range" 
                      min="0" 
                      max="10" 
                      value={guestsCount}
                      onChange={(e) => setGuestsCount(parseInt(e.target.value))}
                      className="range-slider"
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginTop: '0.5rem', color: 'var(--text-light-secondary)' }}>
                      <span>0 Guests</span>
                      <span>5 Guests</span>
                      <span>10 Guests</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimate Summary Panel */}
              <div className="estimator-summary">
                <h4 className="summary-title">Estimate Summary</h4>
                
                <div className="summary-row">
                  <span>Base Luxury Package</span>
                  <span>₹{basePrices[selectedService].toLocaleString('en-IN')}</span>
                </div>

                {selectedAddons.map(addonId => {
                  const addon = addonsList.find(a => a.id === addonId);
                  return addon ? (
                    <div className="summary-row" key={addonId}>
                      <span>{addon.name}</span>
                      <span>+₹{addon.price.toLocaleString('en-IN')}</span>
                    </div>
                  ) : null;
                })}

                {guestsCount > 0 && (
                  <div className="summary-row">
                    <span>Bridesmaid Makeups ({guestsCount}x)</span>
                    <span>+₹{(guestsCount * 5000).toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="summary-row total">
                  <span>Estimated Investment</span>
                  <span className="price-val">₹{getEstimatedCost().toLocaleString('en-IN')}</span>
                </div>

                <p className="summary-note">
                  *Estimates exclude travel charges if venue lies outside Dehradun. 
                  A 50% deposit is required to secure the slot.
                </p>

                <button 
                  className="btn-summary-action"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                      // Pre-fill booking message with estimate details
                      setFormData(prev => ({
                        ...prev,
                        message: `Hi Tanya, I would like to book a slots for: \n- Service: ${selectedService.toUpperCase()} Package\n- Addons: ${selectedAddons.map(id => addonsList.find(a=>a.id===id)?.name).join(', ') || 'None'}\n- Additional Guests: ${guestsCount}\n- Estimated Price: ₹${getEstimatedCost().toLocaleString('en-IN')}`
                      }));
                    }
                  }}
                >
                  Send Booking Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding gallery-section overflow-hidden">
        <div className="container">
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Curated Portfolio</span>
          <h2 className="gallery-title" style={{ color: 'var(--text-dark-primary)', marginBottom: '1.5rem' }}>Signature Works</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-light-secondary)', fontSize: '0.95rem', marginBottom: '4rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            A visual showcase of bespoke bridal, editorial, and celebrity makeup creations designed by Tanya Kashyap.
          </p>

          <ImageGallery />
        </div>
      </section>

      {/* Inside the Kit / Premium Brands */}
      <section className="kit-section">
        <div className="container">
          <h3 className="kit-title">Only Premium In The Kit</h3>
          <p className="kit-subtitle">
            I prioritize your skin health above all. The Brioura standard strictly requires premium, 
            internationally renowned brands ensuring smooth blends that last hours under bright photo flash.
          </p>
          <div className="brand-logos-grid">
            {premiumBrands.map(brand => (
              <div className="brand-item" key={brand}>
                {brand}
              </div>
            ))}
          </div>
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
      <section id="contact" className="section-padding contact-section">
        <div className="container">
          <span className="section-label" style={{ display: 'block', textAlign: 'center' }}>Connect</span>
          <h2 className="contact-title">Inquire Availability</h2>

          <div className="contact-layout">
            <div className="contact-info-panel">
              <div>
                <h3 className="info-panel-title">Let's Create Magic</h3>
                <p className="info-panel-desc">
                  Dates book fast—especially during peak wedding season. Fill out the form 
                  with your event details, and my team will coordinate a session for you.
                </p>
              </div>

              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <div className="detail-icon-container">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="detail-label">Studio Location</span>
                    <p className="detail-val">Rajpur Road, Dehradun, Uttarakhand, India</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon-container">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="detail-label">Direct Contact</span>
                    <p className="detail-val">
                      <a href="tel:+919876543210">+91 98765 43210</a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon-container">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="detail-label">General Email</span>
                    <p className="detail-val">
                      <a href="mailto:hello@brioura.com">inquiries@brioura.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="social-connect-box">
                <h4 className="social-connect-title">Follow Tanya's Journey</h4>
                <div className="social-icon-row">
                  <a 
                    href="https://www.instagram.com/briourabytanyakashyap/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-round-btn"
                    aria-label="Instagram Link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="booking-form-card">
              <form onSubmit={handleFormSubmit}>
                <div className="booking-form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="client-name">Full Name *</label>
                    <input 
                      type="text" 
                      id="client-name"
                      required
                      placeholder="e.g. Priyanjali Sharma"
                      className="form-input"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="client-phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="client-phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="form-input"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="client-email">Email Address</label>
                    <input 
                      type="email" 
                      id="client-email"
                      placeholder="e.g. sharma.priya@gmail.com"
                      className="form-input"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="event-date">Event Date *</label>
                    <input 
                      type="date" 
                      id="event-date"
                      required
                      className="form-input"
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>

                  <div className="form-group form-group-full">
                    <label className="form-label" htmlFor="venue-location">Venue / Hotel Address *</label>
                    <input 
                      type="text" 
                      id="venue-location"
                      required
                      placeholder="e.g. JW Marriott Mussoorie, Dehradun"
                      className="form-input"
                      value={formData.venue}
                      onChange={e => setFormData({...formData, venue: e.target.value})}
                    />
                  </div>

                  <div className="form-group form-group-full">
                    <label className="form-label" htmlFor="inquiry-message">Inquiry Details / Estimate Breakdown</label>
                    <textarea 
                      id="inquiry-message"
                      rows={5}
                      placeholder="List details like preferred makeup style, draping requests, helper numbers, or wedding themes..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <div className="form-group-full">
                    <button type="submit" className="btn-form-submit">
                      Send Date Inquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal Dialogue */}
      {isSubmitted && (
        <div className="success-overlay" onClick={closeSuccessModal}>
          <div className="success-modal" onClick={e => e.stopPropagation()}>
            <div className="success-icon-box">
              <CheckCircle size={52} />
            </div>
            <h3 className="success-title">Request Received</h3>
            <p className="success-msg">
              Thank you, <strong>{formData.name}</strong>! Your inquiry for <strong>{formData.date || 'your wedding date'}</strong> at <strong>{formData.venue}</strong> has been cataloged.
              <br /><br />
              Tanya's coordination desk will check schedule sheets and contact you via phone (<strong>{formData.phone}</strong>) within 24 hours to review your pricing and secure your 50% reservation deposit.
            </p>
            <button className="success-close-btn" onClick={closeSuccessModal}>
              Acknowledge
            </button>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h2 className="footer-logo">
                Brioura<span>.</span>
              </h2>
              <p className="footer-tagline">
                Luxury bridal, engagement, and high-fashion editorial makeup artistry. 
                Creating timeless, radiant look catalogs since 2021.
              </p>
            </div>

            <div className="footer-links-col">
              <span className="footer-col-title">Browse</span>
              <ul className="footer-links-list">
                <li className="footer-link-item"><a href="#home">Home</a></li>
                <li className="footer-link-item"><a href="#about">About Tanya</a></li>
                <li className="footer-link-item"><a href="#services">Services</a></li>
                <li className="footer-link-item"><a href="#gallery">Portfolio</a></li>
                <li className="footer-link-item"><a href="#testimonials">Reviews</a></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <span className="footer-col-title">Connect With Us</span>
              <div className="footer-contact-info">
                <div className="footer-contact-row">
                  <MapPin size={18} className="footer-contact-icon" />
                  <span className="footer-contact-text">Rajpur Road, Dehradun, UK, India</span>
                </div>
                <div className="footer-contact-row">
                  <Phone size={18} className="footer-contact-icon" />
                  <span className="footer-contact-text">
                    <a href="tel:+919876543210">+91 98765 43210</a>
                  </span>
                </div>
                <div className="footer-contact-row">
                  <Mail size={18} className="footer-contact-icon" />
                  <span className="footer-contact-text">
                    <a href="mailto:hello@brioura.com">inquiries@brioura.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Brioura by Tanya Kashyap. All Rights Reserved.</p>
            <p>Designed with Elegance for Tanya Kashyap</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
