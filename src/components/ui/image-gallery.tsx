import { useMemo, useState } from 'react';

import bridalMakeupImg from '../../assets/bridal_makeup.png';
import engagementMakeupImg from '../../assets/engagement_makeup.png';
import editorialMakeupImg from '../../assets/editorial_makeup.png';
import studioKitImg from '../../assets/studio_kit.png';

type GalleryCategory = 'all' | 'bridal' | 'engagement' | 'editorial' | 'atelier';

interface GalleryItem {
  id: number;
  category: Exclude<GalleryCategory, 'all'>;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  orientation: 'portrait' | 'square' | 'wide';
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'bridal',
    title: 'Royal Crimson Heritage',
    eyebrow: 'Signature Bridal',
    description: 'Classic red lip, luminous skin, and ornate eye detailing for a ceremony look that photographs like heirloom portraiture.',
    image: bridalMakeupImg,
    orientation: 'portrait'
  },
  {
    id: 2,
    category: 'engagement',
    title: 'Dewy Pastel Sagan',
    eyebrow: 'Engagement Glow',
    description: 'A soft champagne finish with feathered lashes, rose contour, and a polished skin-first base.',
    image: engagementMakeupImg,
    orientation: 'wide'
  },
  {
    id: 3,
    category: 'editorial',
    title: 'Gilded Golden Muse',
    eyebrow: 'Editorial Beauty',
    description: 'Sculpted skin and metallic gold accents created for a high-fashion, camera-ready beauty moment.',
    image: editorialMakeupImg,
    orientation: 'portrait'
  },
  {
    id: 4,
    category: 'atelier',
    title: 'The Brioura Atelier',
    eyebrow: 'Luxury Kit',
    description: 'A calm, sanitized vanity setup with premium products, soft lighting, and everything prepared before the bride arrives.',
    image: studioKitImg,
    orientation: 'square'
  },
  {
    id: 5,
    category: 'bridal',
    title: 'Hillside Wedding Finish',
    eyebrow: 'Destination Bride',
    description: 'Long-wear bridal artistry built for natural hill-station light, humidity, and hours of ceremonies.',
    image: bridalMakeupImg,
    orientation: 'wide'
  },
  {
    id: 6,
    category: 'editorial',
    title: 'Metallic Sculpt Campaign',
    eyebrow: 'Fashion Detail',
    description: 'A precise beauty study focused on gold reflection, soft structure, and clean editorial restraint.',
    image: editorialMakeupImg,
    orientation: 'square'
  }
];

const filters: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'engagement', label: 'Engagement' },
  { id: 'editorial', label: 'Editorial' },
  { id: 'atelier', label: 'Atelier' }
];

export function ImageGallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>('all');
  const [featuredId, setFeaturedId] = useState(galleryItems[0].id);

  const visibleItems = useMemo(() => {
    return activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const featured = visibleItems.find((item) => item.id === featuredId) ?? visibleItems[0] ?? galleryItems[0];

  const handleFilterChange = (filter: GalleryCategory) => {
    setActiveFilter(filter);
    const nextItem = filter === 'all' ? galleryItems[0] : galleryItems.find((item) => item.category === filter);
    if (nextItem) {
      setFeaturedId(nextItem.id);
    }
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

      <div className="editorial-gallery-feature">
        <div className="editorial-gallery-feature-image">
          <img src={featured.image} alt={featured.title} />
        </div>
        <div className="editorial-gallery-feature-copy">
          <span>{featured.eyebrow}</span>
          <h3>{featured.title}</h3>
          <p>{featured.description}</p>
        </div>
      </div>

      <div className="editorial-gallery-grid">
        {visibleItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`editorial-gallery-card ${item.orientation} ${item.id === featured.id ? 'selected' : ''}`}
            onClick={() => setFeaturedId(item.id)}
          >
            <img src={item.image} alt={item.title} loading="lazy" />
            <span className="editorial-gallery-card-shade" />
            <span className="editorial-gallery-card-copy">
              <small>{item.eyebrow}</small>
              <strong>{item.title}</strong>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
