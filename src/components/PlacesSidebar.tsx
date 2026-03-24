'use client';

import type { Place, PlaceCategory } from '../types/places';
import { CATEGORY_CONFIG } from '../types/places';

interface PlacesSidebarProps {
  places: Place[];
  category: PlaceCategory;
  selectedIndex: number | null;
  onPlaceClick: (index: number, place: Place) => void;
}

export default function PlacesSidebar({ places, category, selectedIndex, onPlaceClick }: PlacesSidebarProps) {
  const meta = CATEGORY_CONFIG[category];

  return (
    <div
      style={{
        maxHeight: 420,
        overflowY: 'auto',
        border: '1px solid #EAE6DF',
        borderRadius: 12,
        background: '#FFFFFF',
        padding: 12,
      }}
    >
      {places.map((place, index) => {
        const isSelected = selectedIndex === index;

        return (
          <button
            key={place.id}
            type="button"
            onClick={() => onPlaceClick(index, place)}
            style={{
              width: '100%',
              textAlign: 'left',
              border: `1px solid ${isSelected ? meta.color : '#EFE8DE'}`,
              background: isSelected ? `${meta.color}1A` : '#FFFEFC',
              borderRadius: 10,
              padding: 12,
              marginBottom: 10,
              cursor: 'pointer',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <div style={{ color: '#4A3B2A', fontWeight: 600, fontSize: 14 }}>{place.name}</div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#1F2937',
                  background: meta.color,
                  borderRadius: 9999,
                  padding: '2px 8px',
                  textTransform: 'capitalize',
                }}
              >
                {place.type}
              </span>
            </div>
            <div style={{ color: '#8B7355', fontSize: 12 }}>{place.address || 'Address unavailable'}</div>
          </button>
        );
      })}
    </div>
  );
}
