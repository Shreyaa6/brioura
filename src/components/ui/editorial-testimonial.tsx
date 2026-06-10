export interface EditorialTestimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

interface TestimonialsEditorialProps {
  testimonials: EditorialTestimonial[];
}

export default function TestimonialsEditorial({ testimonials }: TestimonialsEditorialProps) {
  if (testimonials.length === 0) return null;

  const signatureFonts = [
    '"Dancing Script", cursive',
    '"Great Vibes", cursive',
    '"Pacifico", cursive',
    '"Satisfy", cursive',
    '"Caveat", cursive',
    '"Homemade Apple", cursive'
  ];

  return (
    <div className="horizontal-testimonials-wrapper" style={{ overflow: 'hidden', width: '100%' }}>
      <div className="horizontal-testimonials-track" style={{ 
        display: 'flex', 
        gap: '2rem', 
        paddingLeft: '2rem',
        paddingRight: '2rem',
        paddingBottom: '2rem',
        width: 'max-content',
        animation: 'testimonialMarquee 40s linear infinite'
      }}>
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={testimonial.id + '-' + index} className={`testimonial-horizontal-card float-anim-${(index % 3) + 1}`} style={{ 
            background: '#ffffff', 
            border: '1px solid rgba(0,0,0,0.03)',
            borderRadius: '1.25rem', 
            padding: '2rem 1.5rem', 
            minWidth: '260px',
            maxWidth: '300px',
            flexShrink: 0,
            boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
            display: 'flex', 
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.4s ease, background 0.4s ease'
          }}>
            <div style={{ position: 'absolute', top: '-10px', right: '20px', fontSize: '8rem', color: 'rgba(0,0,0,0.025)', fontFamily: 'serif', lineHeight: 1, pointerEvents: 'none' }}>
              "
            </div>
            
            <img src={testimonial.image} alt={testimonial.author} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.2rem', position: 'relative', zIndex: 1 }} />
            
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--text-dark-primary)', flex: 1, marginBottom: '2rem', lineHeight: 1.5, fontWeight: 400, position: 'relative', zIndex: 1 }}>
              "{testimonial.quote}"
            </p>
            
            <div style={{ marginTop: 'auto', position: 'relative', zIndex: 1 }}>
              <p style={{ fontFamily: signatureFonts[index % signatureFonts.length], fontSize: '1.15rem', color: 'var(--text-dark-primary)', margin: 0, lineHeight: 1, marginBottom: '0.2rem' }}>{testimonial.author}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-light-secondary)', margin: 0, fontFamily: 'var(--font-sans)' }}>{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
