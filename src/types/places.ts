export type PlaceCategory = "healthcare" | "education" | "tourism" | "hotels" | "restaurants";

export interface Place {
  id: string;
  name: string;
  lat: number;
  lon: number;
  type: string;
  address: string;
}

export interface PlacesResponse {
  center: {
    lat: number;
    lon: number;
  };
  bbox: [number, number, number, number];
  places: Place[];
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
  "education",
  "tourism",
  "hotels",
  "restaurants",
];
