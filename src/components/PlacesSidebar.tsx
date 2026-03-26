'use client';

import { useEffect, useRef } from 'react';
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
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    cardRefs.current[selectedIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [selectedIndex]);

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
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${place.lat},${place.lon}`)}`;

        return (
          <div
            key={place.id}
            ref={(element) => {
              cardRefs.current[index] = element;
            }}
            role="button"
            tabIndex={0}
            onClick={() => onPlaceClick(index, place)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onPlaceClick(index, place);
              }
            }}
            style={{
              width: '100%',
              textAlign: 'left',
              border: `1px solid ${isSelected ? meta.color : '#EFE8DE'}`,
              background: isSelected ? `${meta.color}24` : '#FFFEFC',
              borderRadius: 12,
              padding: 12,
              marginBottom: 10,
              cursor: 'pointer',
              boxShadow: isSelected ? `0 0 0 2px ${meta.color}33, 0 8px 20px rgba(15, 23, 42, 0.08)` : '0 2px 6px rgba(15, 23, 42, 0.04)',
              transition: 'border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease',
              outline: 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 6 }}>
              <div style={{ color: '#4A3B2A', fontWeight: 600, fontSize: 14, lineHeight: 1.4 }}>{place.name}</div>
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
            <div style={{ color: '#8B7355', fontSize: 12, lineHeight: 1.5, marginBottom: 10 }}>
              {place.address || 'Address unavailable'}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <div style={{ color: isSelected ? '#4A3B2A' : '#8B7355', fontSize: 11, fontWeight: 600 }}>
                {typeof place.distanceKm === 'number'
                  ? `${place.distanceKm.toFixed(1)} km away`
                  : isSelected
                    ? 'Selected on map'
                    : 'Click to focus on map'}
              </div>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  window.open(directionsUrl, '_blank', 'noopener,noreferrer');
                }}
                style={{
                  border: `1px solid ${meta.color}`,
                  background: '#FFFFFF',
                  color: '#4A3B2A',
                  borderRadius: 9999,
                  padding: '6px 10px',
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Directions
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
