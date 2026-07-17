export type GalleryItem = {
  id: string;
  title: string;
  title_ta: string;
  description: string;
  description_ta: string;
  event_type: "wedding" | "corporate" | "temple" | "reception";
  year: number;
  image_url: string;
  width: number;
  height: number;
  is_featured: boolean;
  sort_order: number;
};

export const galleryItems: GalleryItem[] = [
  // Wedding items (10 entries)
  {
    id: "w-001",
    title: "Grand Jasmine Mandap",
    title_ta: "பிரம்மாண்ட மல்லிகை மண்டபம்",
    description:
      "Full jasmine malai ceiling with brass vilakku lamps and carved wooden pillars",
    description_ta:
      "மல்லிகை மாலை மேற்கூரை, பித்தளை விளக்குகள் மற்றும் செதுக்கல் தூண்கள்",
    event_type: "wedding",
    year: 2024,
    image_url: "/images/gallery/w-001.jpg",
    width: 1200,
    height: 800,
    is_featured: true,
    sort_order: 1,
  },
  {
    id: "w-002",
    title: "Rose Petal Entrance Arch",
    title_ta: "ரோஜா இதழ் நுழைவு வாயில்",
    description:
      "Layered rose petal arch with marigold garlands — 8 feet high",
    description_ta:
      "ரோஜா இதழ் வாயில், மேரிகோல்ட் மாலைகள் — 8 அடி உயரம்",
    event_type: "wedding",
    year: 2024,
    image_url: "/images/gallery/w-002.jpg",
    width: 900,
    height: 1200,
    is_featured: false,
    sort_order: 2,
  },
  {
    id: "w-003",
    title: "Chandelier Mandap — 500 Guests",
    title_ta: "சாண்டிலியர் மண்டபம் — 500 விருந்தினர்",
    description:
      "Three-tier chandelier rig with gold drapes and lotus centrepieces",
    description_ta:
      "மூன்று அடுக்கு சாண்டிலியர், தங்க திரைகள் மற்றும் தாமரை மையக் கலை",
    event_type: "wedding",
    year: 2023,
    image_url: "/images/gallery/w-003.jpg",
    width: 1200,
    height: 900,
    is_featured: true,
    sort_order: 3,
  },
  {
    id: "w-004",
    title: "Pink Lotus Stage",
    title_ta: "இளஞ்சிவப்பு தாமரை மேடை",
    description:
      "Handcrafted lotus backdrop with pink and white floral arrangement",
    description_ta:
      "கையால் செய்யப்பட்ட தாமரை பின்னணி, இளஞ்சிவப்பு மற்றும் வெள்ளை மலர் அலங்காரம்",
    event_type: "wedding",
    year: 2024,
    image_url: "/images/gallery/w-004.jpg",
    width: 1200,
    height: 800,
    is_featured: false,
    sort_order: 4,
  },
  {
    id: "w-005",
    title: "Traditional Tamil Mandap",
    title_ta: "பாரம்பரிய தமிழ் மண்டபம்",
    description:
      "Full traditional setup with banana trunk pillars and mango leaf torans",
    description_ta:
      "வாழை தண்டு தூண்கள் மற்றும் மாவிலை தோரணங்களுடன் முழு பாரம்பரிய அலங்காரம்",
    event_type: "wedding",
    year: 2023,
    image_url: "/images/gallery/w-005.jpg",
    width: 900,
    height: 1100,
    is_featured: false,
    sort_order: 5,
  },
  {
    id: "w-006",
    title: "Red Rose Mandap",
    title_ta: "சிவப்பு ரோஜா மண்டபம்",
    description: "Floor-to-ceiling red rose setup with gold accent pillars",
    description_ta:
      "தரை முதல் மேற்கூரை வரை சிவப்பு ரோஜா அலங்காரம், தங்க தூண்கள்",
    event_type: "wedding",
    year: 2024,
    image_url: "/images/gallery/w-006.jpg",
    width: 1200,
    height: 800,
    is_featured: false,
    sort_order: 6,
  },
  {
    id: "w-007",
    title: "White and Gold Reception",
    title_ta: "வெள்ளை மற்றும் தங்க வரவேற்பு",
    description:
      "Elegant white drape reception hall with gold table centrepieces",
    description_ta:
      "வெள்ளை திரை வரவேற்பு அரங்கு, தங்க மேஜை மையக் கலை",
    event_type: "reception",
    year: 2024,
    image_url: "/images/gallery/w-007.jpg",
    width: 1200,
    height: 900,
    is_featured: false,
    sort_order: 7,
  },
  {
    id: "w-008",
    title: "Outdoor Garden Wedding",
    title_ta: "வெளிப்புற தோட்ட திருமணம்",
    description:
      "Open air mandap with natural greenery and evening candlelight",
    description_ta:
      "திறந்தவெளி மண்டபம், இயற்கை பசுமை மற்றும் மெழுகுவர்த்தி வெளிச்சம்",
    event_type: "wedding",
    year: 2023,
    image_url: "/images/gallery/w-008.jpg",
    width: 1200,
    height: 800,
    is_featured: false,
    sort_order: 8,
  },
  // Corporate items (4 entries)
  {
    id: "c-001",
    title: "Corporate Annual Gala",
    title_ta: "கார்ப்பரேட் ஆண்டு விழா",
    description:
      "Branded stage with backlit logo panel, 300 guests, Dindigul",
    description_ta:
      "வணிக மேடை, விளக்கு நிறைந்த லோகோ பேனல், 300 விருந்தினர், திண்டுக்கல்",
    event_type: "corporate",
    year: 2024,
    image_url: "/images/gallery/c-001.jpg",
    width: 1200,
    height: 800,
    is_featured: true,
    sort_order: 9,
  },
  {
    id: "c-002",
    title: "Product Launch Event",
    title_ta: "தயாரிப்பு அறிமுக நிகழ்வு",
    description:
      "Stage and floral setup for corporate product launch, Chennai",
    description_ta:
      "கார்ப்பரேட் தயாரிப்பு அறிமுகத்திற்கான மேடை மற்றும் மலர் அலங்காரம்",
    event_type: "corporate",
    year: 2023,
    image_url: "/images/gallery/c-002.jpg",
    width: 1200,
    height: 900,
    is_featured: false,
    sort_order: 10,
  },
  // Temple items (3 entries)
  {
    id: "t-001",
    title: "Temple Festival Décor",
    title_ta: "கோயில் திருவிழா அலங்காரம்",
    description:
      "3-day festival setup with traditional flower garlands and lighting",
    description_ta:
      "3 நாள் திருவிழா அலங்காரம், பாரம்பரிய மலர் மாலைகள் மற்றும் விளக்குகள்",
    event_type: "temple",
    year: 2024,
    image_url: "/images/gallery/t-001.jpg",
    width: 1200,
    height: 800,
    is_featured: true,
    sort_order: 11,
  },
  {
    id: "t-002",
    title: "Chariot Festival Decoration",
    title_ta: "தேர் திருவிழா அலங்காரம்",
    description:
      "Full floral decoration for annual chariot festival procession",
    description_ta:
      "ஆண்டு தேர் திருவிழா ஊர்வலத்திற்கான முழு மலர் அலங்காரம்",
    event_type: "temple",
    year: 2023,
    image_url: "/images/gallery/t-002.jpg",
    width: 900,
    height: 1200,
    is_featured: false,
    sort_order: 12,
  },
];

export function getGalleryItems(
  filter?: GalleryItem["event_type"]
): GalleryItem[] {
  if (!filter) {
    return [...galleryItems].sort((a, b) => a.sort_order - b.sort_order);
  }
  return galleryItems
    .filter((i) => i.event_type === filter)
    .sort((a, b) => a.sort_order - b.sort_order);
}
