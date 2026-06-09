import { useMemo, useState } from 'react';

import bridal01 from '../../assets/bridal01.jpg';
import bridal02 from '../../assets/bridal02.jpg';
import bridal03 from '../../assets/bridal03.jpg';
import bridal04 from '../../assets/bridal04.jpg';
import bridal05 from '../../assets/bridal05.webp';
import bridal06 from '../../assets/bridal06.webp';
import bridal07 from '../../assets/bridal07.webp';

import engagement01 from '../../assets/engagement01.jpg';
import engagement02 from '../../assets/engagement02.jpg';
import engagement03 from '../../assets/engagement03.jpg';
import engagement04 from '../../assets/engagement04.jpg';

import editorial01 from '../../assets/editorial01.jpg';
import editorial02 from '../../assets/editorial02.webp';
import editorial03 from '../../assets/editorial03.jpg';
import editorial04 from '../../assets/editorial04.jpg';

type GalleryCategory = 'all' | 'bridal' | 'engagement' | 'editorial';

interface GalleryItem {
  id: number;
  category: Exclude<GalleryCategory, 'all'>;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  instagramUrl?: string;
  orientation: 'portrait' | 'square' | 'wide';
}

const galleryItems: GalleryItem[] = [
  { id: 1, category: 'bridal', title: 'Bridal Portrait', eyebrow: 'Classic Bridal', description: 'Flawless traditional bridal beauty.', image: bridal01, orientation: 'portrait' },
  { id: 2, category: 'bridal', title: 'Signature Bridal', eyebrow: 'Soft Glam', description: 'Luminous skin and subtle definition.', image: bridal02, orientation: 'portrait' },
  { id: 3, category: 'bridal', title: 'Ethereal Bride', eyebrow: 'Destination Bride', description: 'Fresh, dewy finish.', image: bridal03, orientation: 'portrait' },
  { id: 4, category: 'bridal', title: 'Royal Heritage', eyebrow: 'Bridal Style', description: 'Ornate detailing for a ceremony look.', image: bridal04, orientation: 'portrait' },
  { id: 5, category: 'bridal', title: 'Modern Bride', eyebrow: 'Contemporary', description: 'A contemporary take on traditional bridal beauty.', image: bridal05, orientation: 'portrait' },
  { id: 6, category: 'bridal', title: 'Timeless Beauty', eyebrow: 'Classic Bridal', description: 'A timeless look that captures natural beauty.', image: bridal06, orientation: 'portrait' },
  { id: 7, category: 'bridal', title: 'Soft Glow', eyebrow: 'Bridal Glam', description: 'Perfect lighting and soft shadows.', image: bridal07, orientation: 'portrait' },

  { id: 8, category: 'engagement', title: 'Radiant Glow', eyebrow: 'Engagement Look', description: 'Fresh, dewy finish perfect for daytime celebrations.', image: engagement01, orientation: 'portrait' },
  { id: 9, category: 'engagement', title: 'Soft Elegance', eyebrow: 'Sagan Ceremony', description: 'Subtle elegance for engagement parties.', image: engagement02, orientation: 'portrait' },
  { id: 10, category: 'engagement', title: 'Evening Glam', eyebrow: 'Cocktail Look', description: 'Striking evening engagement makeup.', image: engagement03, orientation: 'portrait' },
  { id: 11, category: 'engagement', title: 'Natural Beauty', eyebrow: 'Roka Ceremony', description: 'Emphasizing natural features.', image: engagement04, orientation: 'portrait' },

  { id: 12, category: 'editorial', title: 'High Fashion', eyebrow: 'Campaign', description: 'Bold editorial fashion look.', image: editorial01, orientation: 'portrait' },
  { id: 13, category: 'editorial', title: 'Gilded Muse', eyebrow: 'Editorial Beauty', description: 'Metallic accents and sculpted skin.', image: editorial02, orientation: 'portrait' },
  { id: 14, category: 'editorial', title: 'Avant Garde', eyebrow: 'Creative', description: 'Pushing boundaries with creative styling.', image: editorial03, orientation: 'portrait' },
  { id: 15, category: 'editorial', title: 'Sculpted Frame', eyebrow: 'Portraiture', description: 'Clean lines and sharp contrasts.', image: editorial04, orientation: 'portrait' },
];

const filters: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'engagement', label: 'Engagement' },
  { id: 'editorial', label: 'Editorial' }
];

export function ImageGallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('all');

  const visibleItems = useMemo(() => {
    return activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (filter: GalleryCategory) => {
    setActiveFilter(filter);
  };

  return (
    <div className="editorial-gallery">
      <div className="editorial-gallery-filters" aria-label="Portfolio categories">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            className={activeFilter === filter.id ? 'active' : ''}
            onClick={() => handleFilterChange(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="marquee-gallery-container">
        <div className="marquee-track">
          {[...visibleItems, ...visibleItems].map((item, index) => (
            <div key={`${item.id}-${index}`} className="insta-card">
              <img src={item.image} alt={item.title} loading="lazy" className="insta-img" />
              <div className="insta-overlay" />
              <div className="insta-copy">
                <small>{item.eyebrow}</small>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
