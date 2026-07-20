export type GalleryImageType = "wide" | "land" | "port" | "sq";

export type GalleryImage = {
  url: string;
  type: GalleryImageType;
  width: number;
  height: number;
};

export type GalleryItem = {
  id: string;
  title: string;
  title_ta: string;
  description: string;
  description_ta: string;
  event_type: "wedding" | "corporate" | "temple" | "reception";
  year: number;
  images: GalleryImage[]; // all crops for this event, in display/lightbox order
  coverIndex: number; // index into images[] used as the masonry thumbnail (landscape crop, or wide if no landscape exists)
  is_featured: boolean;
  sort_order: number;
};

export const galleryItems: GalleryItem[] = [
  // Reception items (12 entries)
  // NOTE: client moved/renamed these from public/images/gallery/{wide,
  // landscape,portrait,square}/w-0xx-*.jpg into a single
  // public/images/gallery/reception/r-0xx-*.jpg — confirmed byte-identical
  // to the previously committed w-0xx files, i.e. this is a category
  // correction (wedding -> reception), not new photos. Titles/descriptions
  // were drafted by re-describing what is actually visible in each photo
  // (the original mock copy referenced jasmine, lotus, banana-trunk
  // pillars etc. that don't appear in the real images). Tamil text is a
  // draft machine/AI translation — needs native review before shipping.
  // Year is a placeholder (unknown shoot date) for r-009..r-012 — confirm
  // with client.
  // r-009's wide crop is inferred: the only unclaimed file in the folder
  // is "r-09-wide1.jpg" (typo'd id, missing leading zero) — assumed to
  // belong to r-009 since no other event is missing a wide crop this way.
  // Flag for client confirmation.
  //
  // Masonry cover mix (deterministic, hand-picked per photo content, not
  // Math.random()): r-002, r-003, r-005, r-006 use a portrait or square
  // crop as coverIndex instead of the landscape default, for visual
  // rhythm in the grid — 2 square, 2 portrait, rest landscape. "wide" is
  // never used as a cover EXCEPT r-011 and r-012, which have no
  // land/port/sq crop at all (only wide exists) — unavoidable, flagged
  // rather than silently left as-is. r-008/009/010 also stay landscape
  // because no portrait/square crop exists for them either.
  {
    id: "r-001",
    title: "Golden Carved Arch Mandap",
    title_ta: "தங்க செதுக்கல் வளைவு மண்டபம் (வரைவு)",
    description:
      "Ornate gold-panelled stage with a carved floral archway, rose bouquets in brass urns, and a red-and-white floral aisle border",
    description_ta:
      "தங்க பேனல் மேடை, செதுக்கல் மலர் வளைவு, பித்தளை குடங்களில் ரோஜா மலர்கள் (வரைவு மொழிபெயர்ப்பு)",
    event_type: "reception",
    year: 2024,
    images: [
      { url: "/images/gallery/reception/r-001-wide.jpg", type: "wide", width: 2080, height: 1170 },
      { url: "/images/gallery/reception/r-001-land.jpg", type: "land", width: 1867, height: 1245 },
      { url: "/images/gallery/reception/r-001-port1.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-001-port2.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-001-port3.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-001-sq1.jpg", type: "sq", width: 1080, height: 1080 },
      { url: "/images/gallery/reception/r-001-sq2.jpg", type: "sq", width: 1080, height: 1080 },
    ],
    coverIndex: 1,
    is_featured: true,
    sort_order: 1,
  },
  {
    id: "r-002",
    title: "Amber Drape Rose Arch",
    title_ta: "அம்பர் திரை ரோஜா வளைவு (வரைவு)",
    description:
      "Copper fairy-lit drape backdrop framed by a peach and cream rose arch, with a mixed gerbera flower bed at the stage edge",
    description_ta:
      "செம்பு நிற திரை பின்னணி, பீச் மற்றும் கிரீம் ரோஜா வளைவு, மேடை விளிம்பில் கெர்பரா மலர் படுக்கை (வரைவு மொழிபெயர்ப்பு)",
    event_type: "reception",
    year: 2024,
    images: [
      { url: "/images/gallery/reception/r-002-wide.jpg", type: "wide", width: 2080, height: 1170 },
      { url: "/images/gallery/reception/r-002-land1.jpg", type: "land", width: 1867, height: 1245 },
      { url: "/images/gallery/reception/r-002-land2.jpg", type: "land", width: 1867, height: 1245 },
      { url: "/images/gallery/reception/r-002-port1.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-002-port2.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-002-port3.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-002-sq1.jpg", type: "sq", width: 1080, height: 1080 },
      { url: "/images/gallery/reception/r-002-sq2.jpg", type: "sq", width: 1080, height: 1080 },
      { url: "/images/gallery/reception/r-002-sq4.jpg", type: "sq", width: 1080, height: 1080 },
    ],
    // Cover set to the portrait detail crop (index 3 = port1) rather than
    // the landscape (index 1) as part of a deliberate masonry aspect-ratio
    // mix — see NOTE at the top of this file's reception block.
    coverIndex: 3,
    is_featured: false,
    sort_order: 2,
  },
  {
    id: "r-003",
    title: "Art Deco Pastel Backdrop",
    title_ta: "ஆர்ட் டெகோ பாஸ்டல் பின்னணி (வரைவு)",
    description:
      "Pink and peach art-deco panelled backdrop with a floral monogram wreath, cream loveseat, and a white daisy border",
    description_ta:
      "இளஞ்சிவப்பு, பீச் ஆர்ட் டெகோ பேனல் பின்னணி, மலர் மோனோகிராம் மாலை, வெள்ளை டெய்சி எல்லை (வரைவு மொழிபெயர்ப்பு)",
    event_type: "reception",
    year: 2023,
    images: [
      { url: "/images/gallery/reception/r-003-wide.jpg", type: "wide", width: 2080, height: 1170 },
      { url: "/images/gallery/reception/r-003-land.jpg", type: "land", width: 1867, height: 1245 },
      { url: "/images/gallery/reception/r-003-port1.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-003-port2.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-003-port3.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-003-sq1.jpg", type: "sq", width: 1080, height: 1080 },
      { url: "/images/gallery/reception/r-003-sq2.jpg", type: "sq", width: 1080, height: 1080 },
      { url: "/images/gallery/reception/r-003-sq3.jpg", type: "sq", width: 1080, height: 1080 },
    ],
    // Cover set to the square crop (index 5 = sq1) for masonry variety —
    // see NOTE at the top of this file's reception block.
    coverIndex: 5,
    is_featured: true,
    sort_order: 3,
  },
  {
    id: "r-004",
    title: "Red Rose Archway Stage",
    title_ta: "சிவப்பு ரோஜா வளைவு மேடை (வரைவு)",
    description:
      "Fairy-lit arches trailing red roses over a gold-carved chaise, set on a green motif carpet with a red-and-white floral edge",
    description_ta:
      "விளக்கு அலங்கார வளைவுகள், சிவப்பு ரோஜாக்கள், தங்க செதுக்கல் இருக்கை, பச்சை கம்பள தரை (வரைவு மொழிபெயர்ப்பு)",
    event_type: "reception",
    year: 2024,
    images: [
      { url: "/images/gallery/reception/r-004-wide2-1.jpg", type: "wide", width: 2080, height: 1170 },
      { url: "/images/gallery/reception/r-004-wide2.jpg", type: "wide", width: 2080, height: 1170 },
      { url: "/images/gallery/reception/r-004-land.jpg", type: "land", width: 1867, height: 1245 },
      { url: "/images/gallery/reception/r-004-port1.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-004-port2.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-004-sq1.jpg", type: "sq", width: 1080, height: 1080 },
      { url: "/images/gallery/reception/r-004-sq2.jpg", type: "sq", width: 1080, height: 1080 },
      { url: "/images/gallery/reception/r-004-sq3.jpg", type: "sq", width: 1080, height: 1080 },
    ],
    coverIndex: 2,
    is_featured: false,
    sort_order: 4,
  },
  {
    id: "r-005",
    title: "Marble Panel Monogram Stage",
    title_ta: "மார்பிள் பேனல் மோனோகிராம் மேடை (வரைவு)",
    description:
      "Cream-and-gold marble-effect panels behind a floral monogram wreath, flanked by floral columns and a cream loveseat",
    description_ta:
      "கிரீம்-தங்க மார்பிள் பேனல்கள், மலர் மோனோகிராம் மாலை, மலர் தூண்கள் (வரைவு மொழிபெயர்ப்பு)",
    event_type: "reception",
    year: 2023,
    images: [
      { url: "/images/gallery/reception/r-005-wide.jpg", type: "wide", width: 2080, height: 1170 },
      { url: "/images/gallery/reception/r-005-land.jpg", type: "land", width: 1867, height: 1245 },
      { url: "/images/gallery/reception/r-005-port1.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-005-port2.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-005-port3.jpg", type: "port", width: 1067, height: 1592 },
    ],
    // Cover set to the portrait detail crop (index 2 = port1) for masonry
    // variety — see NOTE at the top of this file's reception block.
    coverIndex: 2,
    is_featured: false,
    sort_order: 5,
  },
  {
    id: "r-006",
    title: "White Floral Arch Stage",
    title_ta: "வெள்ளை மலர் வளைவு மேடை (வரைவு)",
    description:
      "White draped backdrop with a floral arch monogram, cream tufted loveseat, and a soft blue-and-cream flower bed",
    description_ta:
      "வெள்ளை திரை பின்னணி, மலர் வளைவு மோனோகிராம், மென் நீலம்-கிரீம் மலர் படுக்கை (வரைவு மொழிபெயர்ப்பு)",
    event_type: "reception",
    year: 2024,
    images: [
      { url: "/images/gallery/reception/r-006-wide.jpg", type: "wide", width: 2080, height: 1170 },
      { url: "/images/gallery/reception/r-006-land.jpg", type: "land", width: 1867, height: 1245 },
      { url: "/images/gallery/reception/r-006-port1.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-006-port2.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-006-sq1.jpg", type: "sq", width: 1080, height: 1080 },
      { url: "/images/gallery/reception/r-006-sq2.jpg", type: "sq", width: 1080, height: 1080 },
      { url: "/images/gallery/reception/r-006-sq3.jpg", type: "sq", width: 1080, height: 1080 },
      { url: "/images/gallery/reception/r-006-sq4.jpg", type: "sq", width: 1080, height: 1080 },
    ],
    // Cover set to the square crop (index 4 = sq1) for masonry variety —
    // see NOTE at the top of this file's reception block.
    coverIndex: 4,
    is_featured: false,
    sort_order: 6,
  },
  {
    id: "r-007",
    title: "Burgundy Jali Panel Stage",
    title_ta: "பர்கண்டி ஜாலி பேனல் மேடை (வரைவு)",
    description:
      "Burgundy dried-floral fringe ceiling over gold jali-cut wall panels, red-and-white floral wall accents, and a carved wooden sofa",
    description_ta:
      "பர்கண்டி உலர் மலர் மேற்கூரை, தங்க ஜாலி பேனல்கள், சிவப்பு-வெள்ளை மலர் சுவர் (வரைவு மொழிபெயர்ப்பு)",
    event_type: "reception",
    year: 2024,
    images: [
      { url: "/images/gallery/reception/r-007-wide1.jpg", type: "wide", width: 2078, height: 1170 },
      { url: "/images/gallery/reception/r-007-land.jpg", type: "land", width: 1867, height: 1245 },
      { url: "/images/gallery/reception/r-007-port1.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-007-port2.jpg", type: "port", width: 1067, height: 1600 },
      { url: "/images/gallery/reception/r-007-sq1.jpg", type: "sq", width: 1080, height: 1080 },
      { url: "/images/gallery/reception/r-007-sq2.jpg", type: "sq", width: 1080, height: 1080 },
    ],
    coverIndex: 1,
    is_featured: false,
    sort_order: 7,
  },
  {
    id: "r-008",
    title: "Tropical Leaf Fan Backdrop",
    title_ta: "வெப்பமண்டல இலை விசிறி பின்னணி (வரைவு)",
    description:
      "A dramatic fan of tropical green leaves lit with string lights behind a carved wooden bench, framed by cream drapes and a white flower border",
    description_ta:
      "வெப்பமண்டல பச்சை இலை விசிறி பின்னணி, செதுக்கல் மர இருக்கை, வெள்ளை மலர் எல்லை (வரைவு மொழிபெயர்ப்பு)",
    event_type: "reception",
    year: 2023,
    images: [
      { url: "/images/gallery/reception/r-008-wide1.jpg", type: "wide", width: 2080, height: 1170 },
      { url: "/images/gallery/reception/r-008-land1.jpg", type: "land", width: 1867, height: 1245 },
      { url: "/images/gallery/reception/r-008-land2.jpg", type: "land", width: 1867, height: 1245 },
    ],
    coverIndex: 1,
    is_featured: false,
    sort_order: 8,
  },
  {
    id: "r-009",
    title: "Green Wall Floral Scallop Stage",
    title_ta: "பச்சை சுவர் மலர் வளைவு மேடை (வரைவு)",
    description:
      "A living green wall backdrop with crystal chandeliers, cream-lavender floral scalloped arches, and a plum velvet loveseat",
    description_ta:
      "பச்சை சுவர் பின்னணி, படிக சரவிளக்குகள், கிரீம்-லாவெண்டர் மலர் வளைவுகள் (வரைவு மொழிபெயர்ப்பு — உறுதிப்படுத்தப்படவில்லை)",
    event_type: "reception",
    year: 2025,
    images: [
      // ASSUMED: "r-09-wide1.jpg" (typo'd filename) — see NOTE above.
      { url: "/images/gallery/reception/r-09-wide1.jpg", type: "wide", width: 2080, height: 1168 },
      { url: "/images/gallery/reception/r-009-land1.jpg", type: "land", width: 1867, height: 1245 },
    ],
    coverIndex: 1,
    is_featured: false,
    sort_order: 9,
  },
  {
    id: "r-010",
    title: "Red Rose Monogram Stage",
    title_ta: "சிவப்பு ரோஜா மோனோகிராம் மேடை (வரைவு)",
    description:
      "Red and white rose-covered archways framing a couple's monogram medallion, gold drapes, and a cream loveseat",
    description_ta:
      "சிவப்பு-வெள்ளை ரோஜா வளைவுகள், தம்பதியர் மோனோகிராம், தங்க திரைகள் (வரைவு மொழிபெயர்ப்பு — உறுதிப்படுத்தப்படவில்லை)",
    event_type: "reception",
    year: 2025,
    images: [
      { url: "/images/gallery/reception/r-010-wide1.jpg", type: "wide", width: 2080, height: 1170 },
      { url: "/images/gallery/reception/r-010-land1.jpg", type: "land", width: 1867, height: 1245 },
    ],
    coverIndex: 1,
    is_featured: false,
    sort_order: 10,
  },
  {
    id: "r-011",
    title: "Floral Light Arch Backdrop",
    title_ta: "மலர் ஒளி வளைவு பின்னணி (வரைவு)",
    description:
      "Pastel pink and lavender floral arches paired with illuminated light rings, framing a cream loveseat",
    description_ta:
      "இளஞ்சிவப்பு, லாவெண்டர் மலர் வளைவுகள், ஒளி வளையங்கள் (வரைவு மொழிபெயர்ப்பு — உறுதிப்படுத்தப்படவில்லை)",
    event_type: "reception",
    year: 2025,
    images: [
      // No landscape crop exists for this event — wide is the only shot, so it doubles as cover.
      { url: "/images/gallery/reception/r-011-wide1.jpg", type: "wide", width: 2077, height: 1170 },
    ],
    coverIndex: 0,
    is_featured: false,
    sort_order: 11,
  },
  {
    id: "r-012",
    title: "Floral Entrance Walkway",
    title_ta: "மலர் நுழைவு நடைபாதை (வரைவு)",
    description:
      "A flower-strand ceiling and lit archway lead down a plum carpet aisle, lined with white floral urns, toward the mandap beyond",
    description_ta:
      "மலர் இழை மேற்கூரை, ஒளி வளைவு, ஊதா கம்பள பாதை, வெள்ளை மலர் குடங்கள் (வரைவு மொழிபெயர்ப்பு — உறுதிப்படுத்தப்படவில்லை)",
    event_type: "reception",
    year: 2025,
    images: [
      // No landscape crop exists for this event — first wide doubles as cover.
      { url: "/images/gallery/reception/r-012-wide1.jpg", type: "wide", width: 2080, height: 1170 },
      { url: "/images/gallery/reception/r-012-wide2.jpg", type: "wide", width: 2080, height: 1170 },
    ],
    coverIndex: 0,
    is_featured: false,
    sort_order: 12,
  },
  // Wedding items (8 entries)
  // COVER MIX LIMITATION: unlike reception, this folder has zero
  // portrait or square crops across all 8 events (only "land"/"wide"
  // exist) — confirm by checking every images[] array below. There is no
  // material here to create a portrait/square cover for any wedding
  // card; all 8 covers stay landscape (the only non-wide option). Flag
  // for the client if portrait/square crops for these events exist but
  // weren't included in the export.
  // NOTE: sourced from public/images/gallery/wedding/w-0xx-*.jpg — a
  // separate, distinct file set from the reception folder (no id overlap;
  // this "wedding" folder is confirmed correctly categorized per client,
  // unlike the earlier reception-mislabeled-as-wedding set). Three files
  // (w-003-wide1, w-004-wide1, w-004-wide2) are named "wideN" but their
  // actual pixel dimensions (1333x889) match the "land" pattern used
  // throughout this dataset, not the true "wide" pattern (2080x1170) —
  // tagged by real aspect ratio here, not filename, so lightbox
  // ordering/cover-selection stays correct. Also worth a glance: w-002,
  // w-004, and w-006 show carved deity/idol statues rather than a
  // couple's mandap seating — plausibly a shrine corner that's part of
  // the venue decor (common at Tamil weddings), included here as
  // instructed. Titles/descriptions are drafts describing what's visible;
  // Tamil text is a draft machine/AI translation needing native review;
  // year is a placeholder pending client confirmation. Appended at the
  // end (sort_order 17-24) rather than reordered to the front, to avoid
  // touching the working reception/corporate/temple sort_order values.
  {
    id: "w-001",
    title: "Pink Lotus Garden Mandap",
    title_ta: "இளஞ்சிவப்பு தாமரை தோட்ட மண்டபம் (வரைவு)",
    description:
      "Oversized pink lotus cutouts on a blush drape backdrop, gold carved pillars, scalloped floral garland canopy, and red velvet thrones",
    description_ta:
      "இளஞ்சிவப்பு தாமரை அலங்காரம், தங்க தூண்கள், மாலை விதானம், சிவப்பு வெல்வெட் இருக்கைகள் (வரைவு மொழிபெயர்ப்பு)",
    event_type: "wedding",
    year: 2025,
    images: [
      { url: "/images/gallery/wedding/w-001-wide.jpg", type: "wide", width: 2080, height: 1170 },
      { url: "/images/gallery/wedding/w-001-land1.jpg", type: "land", width: 1333, height: 889 },
      { url: "/images/gallery/wedding/w-001-land2.jpg", type: "land", width: 1333, height: 889 },
      { url: "/images/gallery/wedding/w-001-land3.jpg", type: "land", width: 1333, height: 889 },
    ],
    coverIndex: 1,
    is_featured: true,
    sort_order: 17,
  },
  {
    id: "w-002",
    title: "Golden Deity Shrine",
    title_ta: "தங்க தெய்வ மண்டபம் (வரைவு)",
    description:
      "Carved bronze deity idols framed by a red-and-white garland canopy, set against a gold jali-cut screen",
    description_ta:
      "செதுக்கல் வெண்கல தெய்வ சிலைகள், சிவப்பு-வெள்ளை மாலை விதானம், தங்க ஜாலி திரை (வரைவு மொழிபெயர்ப்பு)",
    event_type: "wedding",
    year: 2025,
    images: [
      { url: "/images/gallery/wedding/w-002-wide1.jpg", type: "wide", width: 2080, height: 1170 },
      { url: "/images/gallery/wedding/w-002-wide2.jpg", type: "wide", width: 2080, height: 1170 },
      { url: "/images/gallery/wedding/w-002-land.jpg", type: "land", width: 1333, height: 889 },
    ],
    coverIndex: 2,
    is_featured: false,
    sort_order: 18,
  },
  {
    id: "w-003",
    title: "Golden Pillar Entrance Mandap",
    title_ta: "தங்க தூண் நுழைவு மண்டபம் (வரைவு)",
    description:
      "Ornate gold carved pillars under a fresh flower canopy, with decorative brass emblem pieces flanking a red carpet aisle",
    description_ta:
      "தங்க செதுக்கல் தூண்கள், மலர் விதானம், பித்தளை அலங்கார பொருட்கள், சிவப்பு கம்பள பாதை (வரைவு மொழிபெயர்ப்பு)",
    event_type: "wedding",
    year: 2025,
    images: [
      { url: "/images/gallery/wedding/w-003-wide.jpg", type: "wide", width: 2080, height: 1170 },
      // NOTE: filename says "wide1" but actual dims (1333x889) match "land" — tagged by real aspect ratio.
      { url: "/images/gallery/wedding/w-003-wide1.jpg", type: "land", width: 1333, height: 889 },
    ],
    coverIndex: 1,
    is_featured: false,
    sort_order: 19,
  },
  {
    id: "w-004",
    title: "Wood Pillar Deity Mandap",
    title_ta: "மர தூண் தெய்வ மண்டபம் (வரைவு)",
    description:
      "Dark carved wood pillars flanking a deity idol stage, with red-and-white garland swags and brass Nandi figures at the base",
    description_ta:
      "கருங்கல் மர தூண்கள், தெய்வ சிலை மேடை, சிவப்பு-வெள்ளை மாலைகள் (வரைவு மொழிபெயர்ப்பு)",
    event_type: "wedding",
    year: 2025,
    images: [
      // NOTE: filenames say "wide1"/"wide2" but actual dims (1333x889) match "land" — tagged by real aspect ratio.
      { url: "/images/gallery/wedding/w-004-wide1.jpg", type: "land", width: 1333, height: 889 },
      { url: "/images/gallery/wedding/w-004-wide2.jpg", type: "land", width: 1333, height: 889 },
    ],
    coverIndex: 0,
    is_featured: false,
    sort_order: 20,
  },
  {
    id: "w-005",
    title: "Rose and Marigold Canopy",
    title_ta: "ரோஜா மேரிகோல்ட் விதானம் (வரைவு)",
    description:
      "Red rose scalloped canopy with white bead trim, red-pink-white lotus fan backdrop, and garlanded gold pillars",
    description_ta:
      "சிவப்பு ரோஜா விதானம், சிவப்பு-இளஞ்சிவப்பு-வெள்ளை தாமரை பின்னணி, மாலை தங்க தூண்கள் (வரைவு மொழிபெயர்ப்பு)",
    event_type: "wedding",
    year: 2025,
    images: [
      { url: "/images/gallery/wedding/w-005-wide.jpg", type: "wide", width: 2080, height: 1170 },
      { url: "/images/gallery/wedding/w-005-land.jpg", type: "land", width: 1333, height: 889 },
    ],
    coverIndex: 1,
    is_featured: true,
    sort_order: 21,
  },
  {
    id: "w-006",
    title: "Grand Nandi Pillar Mandap",
    title_ta: "நந்தி தூண் மண்டபம் (வரைவு)",
    description:
      "Massive dark wood pillars framing a deity stage, brass Nandi statues at the base, and a lavender floral backdrop",
    description_ta:
      "பெரிய மர தூண்கள், தெய்வ மேடை, பித்தளை நந்தி சிலைகள், மலர் பின்னணி (வரைவு மொழிபெயர்ப்பு)",
    event_type: "wedding",
    year: 2025,
    images: [
      { url: "/images/gallery/wedding/w-006-land.jpg", type: "land", width: 1333, height: 889 },
    ],
    coverIndex: 0,
    is_featured: false,
    sort_order: 22,
  },
  {
    id: "w-007",
    title: "Red Rose Arch Entrance",
    title_ta: "சிவப்பு ரோஜா வளைவு நுழைவு (வரைவு)",
    description:
      "A red rose-covered entrance arch with white-and-red garland trim leading down a red carpet toward a golden deity shrine",
    description_ta:
      "சிவப்பு ரோஜா நுழைவு வளைவு, வெள்ளை-சிவப்பு மாலை, சிவப்பு கம்பள பாதை (வரைவு மொழிபெயர்ப்பு)",
    event_type: "wedding",
    year: 2025,
    images: [
      { url: "/images/gallery/wedding/w-007-land.jpg", type: "land", width: 1333, height: 889 },
    ],
    coverIndex: 0,
    is_featured: false,
    sort_order: 23,
  },
  {
    id: "w-008",
    title: "Traditional Banana Pillar Mandap",
    title_ta: "பாரம்பரிய வாழை தூண் மண்டபம் (வரைவு)",
    description:
      "Traditional banana-stem pillar bases with white, red, and yellow garland trim under a fresh flower canopy",
    description_ta:
      "வாழை தண்டு தூண் அடிப்படை, வெள்ளை-சிவப்பு-மஞ்சள் மாலை, மலர் விதானம் (வரைவு மொழிபெயர்ப்பு)",
    event_type: "wedding",
    year: 2025,
    images: [
      { url: "/images/gallery/wedding/w-008-land.jpg", type: "land", width: 1333, height: 889 },
    ],
    coverIndex: 0,
    is_featured: false,
    sort_order: 24,
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
    images: [
      { url: "/images/gallery/c-001.jpg", type: "land", width: 1200, height: 800 },
    ],
    coverIndex: 0,
    is_featured: true,
    sort_order: 13,
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
    images: [
      { url: "/images/gallery/c-002.jpg", type: "land", width: 1200, height: 900 },
    ],
    coverIndex: 0,
    is_featured: false,
    sort_order: 14,
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
    images: [
      { url: "/images/gallery/t-001.jpg", type: "land", width: 1200, height: 800 },
    ],
    coverIndex: 0,
    is_featured: true,
    sort_order: 15,
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
    images: [
      { url: "/images/gallery/t-002.jpg", type: "port", width: 900, height: 1200 },
    ],
    coverIndex: 0,
    is_featured: false,
    sort_order: 16,
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
