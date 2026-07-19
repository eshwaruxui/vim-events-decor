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
  // Wedding items (12 entries)
  // NOTE: titles/descriptions below were drafted by re-describing what is
  // actually visible in each photo (the old copy referenced jasmine,
  // lotus, banana-trunk pillars etc. that don't appear in the real images).
  // Tamil text is a draft machine/AI translation — needs native review
  // before shipping. Year is a placeholder (unknown shoot date) for
  // w-009..w-012 — confirm with client.
  {
    id: "w-001",
    title: "Golden Carved Arch Mandap",
    title_ta: "தங்க செதுக்கல் வளைவு மண்டபம் (வரைவு)",
    description:
      "Ornate gold-panelled stage with a carved floral archway, rose bouquets in brass urns, and a red-and-white floral aisle border",
    description_ta:
      "தங்க பேனல் மேடை, செதுக்கல் மலர் வளைவு, பித்தளை குடங்களில் ரோஜா மலர்கள் (வரைவு மொழிபெயர்ப்பு)",
    event_type: "wedding",
    year: 2024,
    image_url: "/images/gallery/landscape/w-001-land.jpg",
    width: 1867,
    height: 1245,
    is_featured: true,
    sort_order: 1,
  },
  {
    id: "w-002",
    title: "Amber Drape Rose Arch",
    title_ta: "அம்பர் திரை ரோஜா வளைவு (வரைவு)",
    description:
      "Copper fairy-lit drape backdrop framed by a peach and cream rose arch, with a mixed gerbera flower bed at the stage edge",
    description_ta:
      "செம்பு நிற திரை பின்னணி, பீச் மற்றும் கிரீம் ரோஜா வளைவு, மேடை விளிம்பில் கெர்பரா மலர் படுக்கை (வரைவு மொழிபெயர்ப்பு)",
    event_type: "wedding",
    year: 2024,
    image_url: "/images/gallery/landscape/w-002-land1.jpg",
    width: 1867,
    height: 1245,
    is_featured: false,
    sort_order: 2,
  },
  {
    id: "w-003",
    title: "Art Deco Pastel Backdrop",
    title_ta: "ஆர்ட் டெகோ பாஸ்டல் பின்னணி (வரைவு)",
    description:
      "Pink and peach art-deco panelled backdrop with a floral monogram wreath, cream loveseat, and a white daisy border",
    description_ta:
      "இளஞ்சிவப்பு, பீச் ஆர்ட் டெகோ பேனல் பின்னணி, மலர் மோனோகிராம் மாலை, வெள்ளை டெய்சி எல்லை (வரைவு மொழிபெயர்ப்பு)",
    event_type: "wedding",
    year: 2023,
    image_url: "/images/gallery/landscape/w-003-land.jpg",
    width: 1867,
    height: 1245,
    is_featured: true,
    sort_order: 3,
  },
  {
    id: "w-004",
    title: "Red Rose Archway Stage",
    title_ta: "சிவப்பு ரோஜா வளைவு மேடை (வரைவு)",
    description:
      "Fairy-lit arches trailing red roses over a gold-carved chaise, set on a green motif carpet with a red-and-white floral edge",
    description_ta:
      "விளக்கு அலங்கார வளைவுகள், சிவப்பு ரோஜாக்கள், தங்க செதுக்கல் இருக்கை, பச்சை கம்பள தரை (வரைவு மொழிபெயர்ப்பு)",
    event_type: "wedding",
    year: 2024,
    image_url: "/images/gallery/landscape/w-004-land.jpg",
    width: 1867,
    height: 1245,
    is_featured: false,
    sort_order: 4,
  },
  {
    id: "w-005",
    title: "Marble Panel Monogram Stage",
    title_ta: "மார்பிள் பேனல் மோனோகிராம் மேடை (வரைவு)",
    description:
      "Cream-and-gold marble-effect panels behind a floral monogram wreath, flanked by floral columns and a cream loveseat",
    description_ta:
      "கிரீம்-தங்க மார்பிள் பேனல்கள், மலர் மோனோகிராம் மாலை, மலர் தூண்கள் (வரைவு மொழிபெயர்ப்பு)",
    event_type: "wedding",
    year: 2023,
    image_url: "/images/gallery/landscape/w-005-land.jpg",
    width: 1867,
    height: 1245,
    is_featured: false,
    sort_order: 5,
  },
  {
    id: "w-006",
    title: "White Floral Arch Stage",
    title_ta: "வெள்ளை மலர் வளைவு மேடை (வரைவு)",
    description:
      "White draped backdrop with a floral arch monogram, cream tufted loveseat, and a soft blue-and-cream flower bed",
    description_ta:
      "வெள்ளை திரை பின்னணி, மலர் வளைவு மோனோகிராம், மென் நீலம்-கிரீம் மலர் படுக்கை (வரைவு மொழிபெயர்ப்பு)",
    event_type: "wedding",
    year: 2024,
    image_url: "/images/gallery/landscape/w-006-land.jpg",
    width: 1867,
    height: 1245,
    is_featured: false,
    sort_order: 6,
  },
  {
    id: "w-007",
    title: "Burgundy Jali Panel Stage",
    title_ta: "பர்கண்டி ஜாலி பேனல் மேடை (வரைவு)",
    description:
      "Burgundy dried-floral fringe ceiling over gold jali-cut wall panels, red-and-white floral wall accents, and a carved wooden sofa",
    description_ta:
      "பர்கண்டி உலர் மலர் மேற்கூரை, தங்க ஜாலி பேனல்கள், சிவப்பு-வெள்ளை மலர் சுவர் (வரைவு மொழிபெயர்ப்பு)",
    event_type: "wedding",
    year: 2024,
    image_url: "/images/gallery/landscape/w-007-land.jpg",
    width: 1867,
    height: 1245,
    is_featured: false,
    sort_order: 7,
  },
  {
    id: "w-008",
    title: "Tropical Leaf Fan Backdrop",
    title_ta: "வெப்பமண்டல இலை விசிறி பின்னணி (வரைவு)",
    description:
      "A dramatic fan of tropical green leaves lit with string lights behind a carved wooden bench, framed by cream drapes and a white flower border",
    description_ta:
      "வெப்பமண்டல பச்சை இலை விசிறி பின்னணி, செதுக்கல் மர இருக்கை, வெள்ளை மலர் எல்லை (வரைவு மொழிபெயர்ப்பு)",
    event_type: "wedding",
    year: 2023,
    image_url: "/images/gallery/landscape/w-008-land1.jpg",
    width: 1867,
    height: 1245,
    is_featured: false,
    sort_order: 8,
  },
  {
    id: "w-009",
    title: "Green Wall Floral Scallop Stage",
    title_ta: "பச்சை சுவர் மலர் வளைவு மேடை (வரைவு)",
    description:
      "A living green wall backdrop with crystal chandeliers, cream-lavender floral scalloped arches, and a plum velvet loveseat",
    description_ta:
      "பச்சை சுவர் பின்னணி, படிக சரவிளக்குகள், கிரீம்-லாவெண்டர் மலர் வளைவுகள் (வரைவு மொழிபெயர்ப்பு — உறுதிப்படுத்தப்படவில்லை)",
    event_type: "wedding",
    year: 2025,
    image_url: "/images/gallery/landscape/w-009-land1.jpg",
    width: 1867,
    height: 1245,
    is_featured: false,
    sort_order: 13,
  },
  {
    id: "w-010",
    title: "Red Rose Monogram Stage",
    title_ta: "சிவப்பு ரோஜா மோனோகிராம் மேடை (வரைவு)",
    description:
      "Red and white rose-covered archways framing a couple's monogram medallion, gold drapes, and a cream loveseat",
    description_ta:
      "சிவப்பு-வெள்ளை ரோஜா வளைவுகள், தம்பதியர் மோனோகிராம், தங்க திரைகள் (வரைவு மொழிபெயர்ப்பு — உறுதிப்படுத்தப்படவில்லை)",
    event_type: "wedding",
    year: 2025,
    image_url: "/images/gallery/landscape/w-010-land1.jpg",
    width: 1867,
    height: 1245,
    is_featured: false,
    sort_order: 14,
  },
  {
    id: "w-011",
    title: "Floral Light Arch Backdrop",
    title_ta: "மலர் ஒளி வளைவு பின்னணி (வரைவு)",
    description:
      "Pastel pink and lavender floral arches paired with illuminated light rings, framing a cream loveseat",
    description_ta:
      "இளஞ்சிவப்பு, லாவெண்டர் மலர் வளைவுகள், ஒளி வளையங்கள் (வரைவு மொழிபெயர்ப்பு — உறுதிப்படுத்தப்படவில்லை)",
    event_type: "wedding",
    year: 2025,
    image_url: "/images/gallery/wide/w-011-wide1.jpg",
    width: 2077,
    height: 1170,
    is_featured: false,
    sort_order: 15,
  },
  {
    id: "w-012",
    title: "Floral Entrance Walkway",
    title_ta: "மலர் நுழைவு நடைபாதை (வரைவு)",
    description:
      "A flower-strand ceiling and lit archway lead down a plum carpet aisle, lined with white floral urns, toward the mandap beyond",
    description_ta:
      "மலர் இழை மேற்கூரை, ஒளி வளைவு, ஊதா கம்பள பாதை, வெள்ளை மலர் குடங்கள் (வரைவு மொழிபெயர்ப்பு — உறுதிப்படுத்தப்படவில்லை)",
    event_type: "wedding",
    year: 2025,
    image_url: "/images/gallery/wide/w-012-wide1.jpg",
    width: 2080,
    height: 1170,
    is_featured: false,
    sort_order: 16,
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
  // Temple items (3 entries) — displayed as "Spiritual" (event_type stays "temple")
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
