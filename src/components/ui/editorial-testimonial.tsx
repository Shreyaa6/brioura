import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  if (testimonials.length === 0) {
    return null;
  }

  const handleChange = (index: number) => {
    if (index === active || isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActive(index);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const handlePrev = () => {
    const newIndex = active === 0 ? testimonials.length - 1 : active - 1;
    handleChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = active === testimonials.length - 1 ? 0 : active + 1;
    handleChange(newIndex);
  };

  const current = testimonials[active];

  return (
    <div className="editorial-testimonial">
      <div className="editorial-testimonial-layout">
        <span className="editorial-testimonial-index">
          {String(active + 1).padStart(2, '0')}
        </span>

        <div className="editorial-testimonial-content">
          <blockquote className={`editorial-testimonial-quote ${isTransitioning ? 'transitioning' : ''}`}>
            {current.quote}
          </blockquote>

          <div className={`editorial-testimonial-author-block ${isTransitioning ? 'transitioning' : ''}`}>
            <div className="editorial-testimonial-avatar">
              <img src={current.image} alt={current.author} />
            </div>
            <div>
              <p className="editorial-testimonial-author">{current.author}</p>
              <p className="editorial-testimonial-meta">
                {current.role}
                <span>/</span>
                <strong>{current.company}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="editorial-testimonial-nav">
        <div className="editorial-testimonial-progress">
          <div className="editorial-testimonial-lines">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => handleChange(index)}
                className={index === active ? 'active' : ''}
                aria-label={`Show testimonial ${index + 1}`}
                aria-pressed={index === active}
              >
                <span />
              </button>
            ))}
          </div>
          <span className="editorial-testimonial-count">
            {String(active + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>

        <div className="editorial-testimonial-arrows">
          <button type="button" onClick={handlePrev} aria-label="Previous review">
            <ChevronLeft size={20} />
          </button>
          <button type="button" onClick={handleNext} aria-label="Next review">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
