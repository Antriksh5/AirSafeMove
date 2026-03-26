export type PlaceCategory =
  | "healthcare"
  | "clinics"
  | "hospitals"
  | "medicals"
  | "education"
  | "tourism"
  | "hotels"
  | "restaurants";

export interface Place {
  id: string;
  name: string;
  lat: number;
  lon: number;
  type: string;
  address: string;
  distanceKm?: number;
}

export interface PlacesResponse {
  center: {
    lat: number;
    lon: number;
  };
  bbox: [number, number, number, number];
  places: Place[];
}

export interface GeocodeResponse {
  lat: number;
  lon: number;
  label: string;
}

export interface CategoryConfig {
  color: string;
  emoji: string;
  tags: string[];
  label: string;
}

export const CATEGORY_CONFIG: Record<PlaceCategory, CategoryConfig> = {
  healthcare: {
    color: "#f472b6",
    emoji: "🏥",
    tags: ["amenity=hospital", "amenity=clinic", "amenity=pharmacy", "amenity=doctors"],
    label: "Healthcare",
  },
  clinics: {
    color: "#f9a8d4",
    emoji: "🩺",
    tags: ["amenity=clinic", "amenity=doctors"],
    label: "Clinics",
  },
  hospitals: {
    color: "#fb7185",
    emoji: "🏥",
    tags: ["amenity=hospital"],
    label: "Hospitals",
  },
  medicals: {
    color: "#fdba74",
    emoji: "💊",
    tags: ["amenity=pharmacy"],
    label: "Medicals",
  },
  education: {
    color: "#a78bfa",
    emoji: "🎓",
    tags: ["amenity=school", "amenity=college", "amenity=university", "amenity=library"],
    label: "Education",
  },
  tourism: {
    color: "#34d399",
    emoji: "🏛️",
    tags: ["tourism=attraction", "tourism=museum", "historic=monument", "leisure=park"],
    label: "Tourism",
  },
  hotels: {
    color: "#fbbf24",
    emoji: "🏨",
    tags: ["tourism=hotel", "tourism=guest_house", "tourism=hostel"],
    label: "Hotels",
  },
  restaurants: {
    color: "#fb923c",
    emoji: "🍽️",
    tags: ["amenity=restaurant", "amenity=cafe", "amenity=fast_food"],
    label: "Restaurants",
  },
};

export const PLACE_CATEGORIES: PlaceCategory[] = [
  "healthcare",
  "clinics",
  "hospitals",
  "medicals",
  "education",
  "tourism",
  "hotels",
  "restaurants",
];
