'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import type { Place, PlaceCategory } from '../types/places';
import { CATEGORY_CONFIG } from '../types/places';

export interface MapViewHandle {
  flyTo: (lat: number, lon: number) => void;
  focusPlace: (index: number) => void;
  focusHome: () => void;
}

interface HomeLocation {
  lat: number;
  lon: number;
  name: string;
  locality?: string;
}

interface MapViewProps {
  places: Place[];
  center: { lat: number; lon: number };
  bbox: [number, number, number, number];
  category: PlaceCategory;
  homeLocation?: HomeLocation | null;
  onMarkerClick?: (index: number) => void;
}

const MapView = forwardRef<MapViewHandle, MapViewProps>(function MapView(
  { places, center, bbox, category, homeLocation, onMarkerClick },
  ref
) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const layerGroupRef = useRef<any>(null);
  const leafletRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const homeMarkerRef = useRef<any>(null);

  const focusMarker = (index: number) => {
    const map = mapInstanceRef.current;
    const marker = markersRef.current[index];

    if (!map || !marker) {
      return;
    }

    const latLng = marker.getLatLng();
    map.flyTo([latLng.lat, latLng.lng], 16, { animate: true, duration: 0.8 });
    marker.openPopup();
  };

  useImperativeHandle(ref, () => ({
    flyTo: (lat: number, lon: number) => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.flyTo([lat, lon], 14, { animate: true, duration: 0.8 });
      }
    },
    focusPlace: (index: number) => {
      focusMarker(index);
    },
    focusHome: () => {
      const map = mapInstanceRef.current;
      const marker = homeMarkerRef.current;

      if (!map || !marker) {
        return;
      }

      const latLng = marker.getLatLng();
      map.flyTo([latLng.lat, latLng.lng], 15, { animate: true, duration: 0.8 });
      marker.openPopup();
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
    markersRef.current = [];
    homeMarkerRef.current = null;
    const categoryMeta = CATEGORY_CONFIG[category];

    if (homeLocation) {
      const homeIcon = L.divIcon({
        className: 'custom-home-marker',
        html: '<div style="background:#2c4c3b;width:38px;height:38px;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:#ffffff;font-size:16px;border:3px solid #ffffff;box-shadow:0 6px 16px rgba(15,23,42,0.28)">HOME</div>',
        iconSize: [38, 38],
        iconAnchor: [19, 19],
      });

      const homeDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${homeLocation.lat},${homeLocation.lon}`)}`;
      const homeOsmUrl = `https://www.openstreetmap.org/?mlat=${encodeURIComponent(String(homeLocation.lat))}&mlon=${encodeURIComponent(String(homeLocation.lon))}&zoom=17`;
      const homeMarker = L.marker([homeLocation.lat, homeLocation.lon], { icon: homeIcon }).addTo(layerGroup);
      const homePopup = [
        '<div style="min-width:220px;color:#1f2937;font-family:system-ui,sans-serif">',
        '<div style="display:inline-flex;align-items:center;padding:3px 10px;border-radius:9999px;background:#dbe8e0;color:#2c4c3b;font-size:11px;font-weight:700;margin-bottom:10px">HOME</div>',
        `<div style="font-weight:700;font-size:14px;margin-bottom:8px">${escapeHtml(homeLocation.name)}</div>`,
        `<div style="font-size:12px;line-height:1.5;color:#6b7280;margin-bottom:12px">${escapeHtml(homeLocation.locality || 'Selected housing locality')}</div>`,
        '<div style="display:flex;gap:12px;flex-wrap:wrap;font-size:12px">',
        `<a href="${homeDirectionsUrl}" target="_blank" rel="noopener noreferrer" style="color:#2563eb;text-decoration:none;font-weight:600">Get Directions</a>`,
        `<a href="${homeOsmUrl}" target="_blank" rel="noopener noreferrer" style="color:#2563eb;text-decoration:none;font-weight:600">View on Map</a>`,
        '</div>',
        '</div>',
      ].join('');

      homeMarker.bindPopup(homePopup);
      homeMarkerRef.current = homeMarker;
    }

    places.forEach((place, index) => {
      const icon = L.divIcon({
        className: 'custom-place-marker',
        html: `<div style="background:${categoryMeta.color};width:32px;height:32px;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:#111827;font-size:16px;border:2px solid #ffffff;box-shadow:0 4px 10px rgba(0,0,0,0.2)">${categoryMeta.emoji}</div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      });

      const marker = L.marker([place.lat, place.lon], { icon }).addTo(layerGroup);
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${place.lat},${place.lon}`)}`;
      const osmUrl = `https://www.openstreetmap.org/?mlat=${encodeURIComponent(String(place.lat))}&mlon=${encodeURIComponent(String(place.lon))}&zoom=17`;
      const address = place.address || 'Address unavailable';
      const popupHtml = [
        '<div style="min-width:220px;color:#1f2937;font-family:system-ui,sans-serif">',
        `<div style="font-weight:700;font-size:14px;margin-bottom:8px">${escapeHtml(place.name)}</div>`,
        `<div style="display:inline-flex;align-items:center;padding:3px 10px;border-radius:9999px;background:${categoryMeta.color};color:#111827;font-size:11px;font-weight:700;margin-bottom:10px;text-transform:capitalize">${escapeHtml(formatLabel(place.type))}</div>`,
        `<div style="font-size:12px;line-height:1.5;color:#6b7280;margin-bottom:12px">${escapeHtml(address)}</div>`,
        '<div style="display:flex;gap:12px;flex-wrap:wrap;font-size:12px">',
        `<a href="${directionsUrl}" target="_blank" rel="noopener noreferrer" style="color:#2563eb;text-decoration:none;font-weight:600">Get Directions</a>`,
        `<a href="${osmUrl}" target="_blank" rel="noopener noreferrer" style="color:#2563eb;text-decoration:none;font-weight:600">View on Map</a>`,
        '</div>',
        '</div>',
      ].join('');

      marker.bindPopup(popupHtml);
      marker.on('click', () => {
        onMarkerClick?.(index);
      });
      markersRef.current.push(marker);
    });

    if (places.length > 0 || homeLocation) {
      const bounds = L.latLngBounds([
        [bbox[0], bbox[1]],
        [bbox[2], bbox[3]],
      ]);
      if (homeLocation) {
        bounds.extend([homeLocation.lat, homeLocation.lon]);
      }
      map.fitBounds(bounds, { padding: [20, 20] });
    } else {
      map.setView([center.lat, center.lon], 11);
    }
  }, [bbox, center.lat, center.lon, category, homeLocation, onMarkerClick, places]);

  return (
    <div
      ref={mapContainerRef}
      style={{ height: 420, width: '100%', borderRadius: 12, overflow: 'hidden', border: '1px solid #EAE6DF' }}
    />
  );
});

function formatLabel(value: string): string {
  return value
    .split(/[_\s-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default MapView;
