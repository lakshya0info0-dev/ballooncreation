import { useId } from 'react';

const photos = import.meta.glob<string>('/src/assets/categories/*.webp', { eager: true, import: 'default' });
const categories = [
  'Birthday', 'Kids Birthday', 'Baby Shower', 'Welcome Baby', 'Naming Ceremony',
  'Anniversary', 'Proposal', 'Room Surprise', 'First Night', 'Bachelor Party',
  'Wedding', 'House Warming', 'Car Decoration', 'Pet Decoration', 'Farewell Party',
  'Corporate Events', 'Showroom Setup', 'Grand Opening', 'Exhibition Stall', 'Annual Day Function',
];

export function CategoryMarquee() {
  const headingId = useId();
  return (
    <section className="category-section" aria-labelledby={headingId}>
      <div className="page-width category-heading">
        <span className="eyebrow">EVERY OCCASION, BEAUTIFULLY YOURS</span>
        <h2 id={headingId}>A celebration for every story.</h2>
      </div>
      <div className="category-window" tabIndex={0} aria-label="Celebration categories">
        <div className="category-track">
          {[0, 1].map(copy => (
            <ul className="category-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {categories.map((name, index) => (
                <li className="category-item" key={name}>
                  <span className="category-orb">
                    <img src={photos[`/src/assets/categories/category-${String(index + 1).padStart(2, '0')}.webp`]} alt="" width={256} height={256} loading="lazy" decoding="async" />
                  </span>
                  <span className="category-label">{name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}