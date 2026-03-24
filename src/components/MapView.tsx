'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import type { Place, PlaceCategory } from '../types/places';
import { CATEGORY_CONFIG } from '../types/places';

export interface MapViewHandle {
  flyTo: (lat: number, lon: number) => void;
}

interface MapViewProps {
  places: Place[];
  center: { lat: number; lon: number };
  bbox: [number, number, number, number];
  category: PlaceCategory;
  onMarkerClick?: (index: number) => void;
}

const MapView = forwardRef<MapViewHandle, MapViewProps>(function MapView(
  { places, center, bbox, category, onMarkerClick },
  ref
) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const layerGroupRef = useRef<any>(null);
  const leafletRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    flyTo: (lat: number, lon: number) => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.flyTo([lat, lon], 14, { animate: true, duration: 0.8 });
      }
    },
  }));

  useEffect(() => {
    let mounted = true;

    const initMap = async () => {
      if (!mounted || !mapContainerRef.current || mapInstanceRef.current) {
        return;
      }

      const L = await import('leaflet');
      leafletRef.current = L;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(mapContainerRef.current, {
        center: [center.lat, center.lon],
        zoom: 12,
        zoomControl: true,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      const layerGroup = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;
      layerGroupRef.current = layerGroup;
    };

    initMap();

    return () => {
      mounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        layerGroupRef.current = null;
      }
    };
  }, [center.lat, center.lon]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    const layerGroup = layerGroupRef.current;
    const L = leafletRef.current;

    if (!map || !layerGroup || !L) {
      return;
    }

    layerGroup.clearLayers();
    const categoryMeta = CATEGORY_CONFIG[category];

    places.forEach((place, index) => {
      const icon = L.divIcon({
        className: 'custom-place-marker',
        html: `<div style="background:${categoryMeta.color};width:32px;height:32px;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:#111827;font-size:16px;border:2px solid #ffffff;box-shadow:0 4px 10px rgba(0,0,0,0.2)">${categoryMeta.emoji}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      const marker = L.marker([place.lat, place.lon], { icon }).addTo(layerGroup);
      marker.bindPopup(
        `<div style="min-width:180px"><strong>${place.name}</strong><br/><span style="text-transform:capitalize">${place.type}</span>${
          place.address ? `<br/><small>${place.address}</small>` : ''
        }</div>`
      );
      marker.on('click', () => onMarkerClick?.(index));
    });

    if (places.length > 0) {
      const bounds = L.latLngBounds([
        [bbox[0], bbox[1]],
        [bbox[2], bbox[3]],
      ]);
      map.fitBounds(bounds, { padding: [20, 20] });
    } else {
      map.setView([center.lat, center.lon], 11);
    }
  }, [bbox, center.lat, center.lon, category, onMarkerClick, places]);

  return (
    <div
      ref={mapContainerRef}
      style={{ height: 420, width: '100%', borderRadius: 12, overflow: 'hidden', border: '1px solid #EAE6DF' }}
    />
  );
});

export default MapView;
