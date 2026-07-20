export type Service = {
  id: string;
  category: string;
  category_ta: string;
  category_icon: string;
  services: ServiceItem[];
};

export type ServiceItem = {
  id: string;
  title: string;
  title_ta: string;
  description: string;
  description_ta: string;
  is_featured: boolean;
  is_addon: boolean;
};

export const serviceCategories: Service[] = [
  {
    id: "wedding",
    category: "Wedding & Celebration",
    category_ta: "திருமண & கொண்டாட்ட சேவைகள்",
    category_icon: "✦",
    services: [
      {
        id: "wedding-stage",
        title: "Wedding Stage & Mandap Design",
        title_ta: "கல்யாண மேடை & மண்டப வடிவமைப்பு",
        description:
          "Full mandap construction and decoration — jasmine malai ceilings, carved pillars, drapes, and traditional Tamil aesthetics tailored to your vision.",
        description_ta:
          "முழு மண்டப கட்டமைப்பு மற்றும் அலங்காரம் — மல்லிகை மாலை மேற்கூரை, செதுக்கல் தூண்கள், திரைகள், உங்கள் கனவுக்கு ஏற்ற பாரம்பரிய தமிழ் அழகியல்.",
        is_featured: true,
        is_addon: false,
      },
      {
        id: "reception-hall",
        title: "Reception Hall Decoration",
        title_ta: "வரவேற்பு அரங்கு அலங்காரம்",
        description:
          "Elegant reception setups — from intimate 100-guest gatherings to grand 1,000-guest celebrations across Tamil Nadu.",
        description_ta:
          "நேர்த்தியான வரவேற்பு அமைப்புகள் — 100 விருந்தினர் நெருங்கிய கூட்டங்கள் முதல் 1,000 பேர் பிரம்மாண்ட கொண்டாட்டங்கள் வரை.",
        is_featured: true,
        is_addon: false,
      },
      {
        id: "engagement",
        title: "Engagement Ceremony",
        title_ta: "நிச்சயதார்த்த நிகழ்வு",
        description:
          "Beautifully decorated engagement setups — floral arches, couple seating, and elegant backdrops that frame the moment perfectly.",
        description_ta:
          "அழகாக அலங்கரிக்கப்பட்ட நிச்சயதார்த்த அமைப்புகள் — மலர் வாயில்கள், தம்பதி இருக்கை, தருணத்தை படம் பிடிக்கும் நேர்த்தியான பின்னணிகள்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "mehendi",
        title: "Mehendi Evening",
        title_ta: "மெஹந்தி மாலை நிகழ்வு",
        description:
          "Colourful, festive mehendi setups with vibrant floral arrangements and intimate seating that celebrate the joy before the big day.",
        description_ta:
          "வண்ணமயமான, பண்டிகை மெஹந்தி அமைப்புகள் — கொண்டாட்டமான மலர் அலங்காரங்கள், பெரிய நாளுக்கு முன் மகிழ்ச்சியை கொண்டாடும் இனிமையான இருக்கை அமைப்பு.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "haldi",
        title: "Haldi Ceremony",
        title_ta: "மஞ்சள் நீராட்டு நிகழ்வு",
        description:
          "Bright, cheerful Haldi setups with marigold-heavy arrangements, floral backdrops, and a joyful palette perfect for the pre-wedding ritual.",
        description_ta:
          "பிரகாசமான, மகிழ்ச்சியான Haldi அமைப்புகள் — மேரிகோல்ட் அலங்காரங்கள், மலர் பின்னணி, திருமணத்திற்கு முந்தைய சடங்கிற்கு சரியான மகிழ்ச்சியான நிறத் திட்டம்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "anniversary",
        title: "Wedding Anniversary",
        title_ta: "திருமண ஆண்டு விழா",
        description:
          "Romantic, intimate anniversary setups — from silver and golden jubilee grand celebrations to private dinners adorned with fresh florals.",
        description_ta:
          "காதலான, நெருங்கிய ஆண்டு விழா அமைப்புகள் — வெள்ளி மற்றும் தங்க விழா பிரம்மாண்ட கொண்டாட்டங்கள் முதல் புதிய மலர்களால் அலங்கரிக்கப்பட்ட தனிப்பட்ட இரவு உணவு வரை.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "sangeet",
        title: "Sangeet Function",
        title_ta: "சங்கீத் நிகழ்வு",
        description:
          "Vibrant Sangeet setups with performance-ready stage, ambient lighting, and festive décor that sets the mood for music and dance.",
        description_ta:
          "துடிப்பான சங்கீத் அமைப்புகள் — செயல்திறன் மேடை, சூழல் விளக்கு, இசை மற்றும் நடனத்திற்கான மனநிலையை அமைக்கும் பண்டிகை அலங்காரம்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "church",
        title: "Church & Christian Celebrations",
        title_ta: "சர்ச் & கிறிஸ்தவ கொண்டாட்டங்கள்",
        description:
          "Graceful decoration for Christian weddings, Christmas celebrations, and church events — floral arrangements and stage setups that honour the sanctity of the occasion.",
        description_ta:
          "கிறிஸ்தவ திருமணங்கள், கிறிஸ்மஸ் கொண்டாட்டங்கள் மற்றும் சர்ச் நிகழ்வுகளுக்கான நேர்த்தியான அலங்காரம் — நிகழ்வின் புனிதத்தை மதிக்கும் மலர் அலங்காரங்கள்.",
        is_featured: false,
        is_addon: false,
      },
    ],
  },
  {
    id: "florals",
    category: "Floral Arrangements",
    category_ta: "மலர் அலங்காரம்",
    category_icon: "✿",
    services: [
      {
        id: "jasmine-ceiling",
        title: "Jasmine Malai Ceiling",
        title_ta: "மல்லிகை மாலை மேற்கூரை",
        description:
          "Our signature — ceiling installations using fresh jasmine malai that fill the hall with fragrance and tradition. Engineered for halls of any ceiling height.",
        description_ta:
          "எங்கள் கையொப்பம் — கூரை installation-கள் புதிய மல்லிகை மாலை பயன்படுத்தி அரங்கை மணமும் மரபும் நிரப்பும். எந்த கூரை உயரம் கொண்ட அரங்கிற்கும் வடிவமைக்கப்பட்டது.",
        is_featured: true,
        is_addon: false,
      },
      {
        id: "fresh-flowers",
        title: "Fresh Flower Arrangements",
        title_ta: "புதிய மலர் அலங்காரங்கள்",
        description:
          "Bespoke fresh flower arrangements for every surface — stage, dining, entrance, and ceremony spaces. Sourced fresh and arranged on-site.",
        description_ta:
          "ஒவ்வொரு இடத்திற்கும் தனிப்பயன் புதிய மலர் அலங்காரங்கள் — மேடை, உணவு, நுழைவு மற்றும் சடங்கு இடங்கள்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "floral-arch",
        title: "Floral Archways & Entrance Gates",
        title_ta: "மலர் வாயில்கள் & நுழைவு வாயில்கள்",
        description:
          "Grand entrance arches and walkway decorations in rose, marigold, jasmine, or mixed flowers — the first impression that stays.",
        description_ta:
          "ரோஜா, மேரிகோல்ட், மல்லிகை அல்லது கலந்த மலர்களில் பிரம்மாண்ட நுழைவு வாயில்கள் — நீடிக்கும் முதல் தோற்றம்.",
        is_featured: true,
        is_addon: false,
      },
      {
        id: "centrepieces",
        title: "Table Centrepieces",
        title_ta: "மேஜை மையக் கலை",
        description:
          "Handcrafted table centrepieces — from minimalist bud vases to full floral towers that anchor the dining experience.",
        description_ta:
          "கையால் செய்யப்பட்ட மேஜை மையக் கலை — எளிமையான மலர் குடுவைகள் முதல் உணவு அனுபவத்தை நிறுத்தும் மலர் கோபுரங்கள் வரை.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "bridal-car",
        title: "Bridal Car Decoration",
        title_ta: "திருமண கார் அலங்காரம்",
        description:
          "Fresh flower car decoration for the bride and groom — coordinated with the wedding palette and ready before the ceremony begins.",
        description_ta:
          "மணமகன் மணமகளுக்கு புதிய மலர் கார் அலங்காரம் — திருமண வண்ணத் திட்டத்துடன் ஒருங்கிணைக்கப்பட்டு சடங்கு தொடங்குவதற்கு முன் தயார்.",
        is_featured: false,
        is_addon: true,
      },
      {
        id: "garlands",
        title: "Garlands (Malai) — In-House",
        title_ta: "மாலைகள் — நேரடி தயாரிப்பு",
        description:
          "All garlands crafted in-house by our team — jasmine, rose, marigold, and mixed varieties. Fresh, fragrant, and made for Tamil Nadu celebrations.",
        description_ta:
          "அனைத்து மாலைகளும் எங்கள் குழுவால் நேரடியாக தயாரிக்கப்படுகின்றன — மல்லிகை, ரோஜா, மேரிகோல்ட், கலந்த வகைகள். புதிய, மணமான, தமிழ்நாடு கொண்டாட்டங்களுக்காக செய்யப்பட்டது.",
        is_featured: false,
        is_addon: false,
      },
    ],
  },
  {
    id: "stage",
    category: "Stage & Structure",
    category_ta: "மேடை & கட்டமைப்பு",
    category_icon: "⬡",
    services: [
      {
        id: "mandap-structure",
        title: "Mandap Construction & Decoration",
        title_ta: "மண்டப கட்டமைப்பு & அலங்காரம்",
        description:
          "Full mandap construction using modular frames, carved wooden pillars (available for rent), and complete floral and fabric decoration.",
        description_ta:
          "தொகுக்கக்கூடிய சட்டங்கள், செதுக்கல் மர தூண்கள் (வாடகைக்கு கிடைக்கும்) மற்றும் முழுமையான மலர் மற்றும் துணி அலங்காரம் பயன்படுத்தி முழு மண்டப கட்டமைப்பு.",
        is_featured: true,
        is_addon: false,
      },
      {
        id: "backdrop",
        title: "Backdrop Design & Installation",
        title_ta: "பின்னணி வடிவமைப்பு & நிறுவல்",
        description:
          "Custom backdrops in fabric, flowers, or mixed media — designed to complement your décor theme and photograph beautifully.",
        description_ta:
          "துணி, மலர்கள் அல்லது கலந்த ஊடகத்தில் தனிப்பயன் பின்னணிகள் — உங்கள் அலங்கார கருப்பொருளை நிறைவு செய்ய வடிவமைக்கப்பட்டது.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "pillar-decoration",
        title: "Pillar & Column Decoration",
        title_ta: "தூண் & கம்பம் அலங்காரம்",
        description:
          "Floor-to-ceiling pillar wrapping in fabric, flowers, or both — transforming ordinary hall columns into decorative features.",
        description_ta:
          "துணி, மலர்கள் அல்லது இரண்டிலும் தரை முதல் மேற்கூரை வரை தூண் சுற்று — சாதாரண அரங்கு தூண்களை அலங்கார அம்சங்களாக மாற்றுகிறது.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "canopy",
        title: "Canopy & Drape Setup",
        title_ta: "விதானம் & திரை அமைப்பு",
        description:
          "Ceiling canopy and drape installations in silk, net, or organza — creating an intimate atmosphere within any hall size.",
        description_ta:
          "பட்டு, வலை அல்லது ஆர்கன்ஸாவில் கூரை விதானம் மற்றும் திரை நிறுவல்கள் — எந்த அரங்கு அளவிலும் நெருங்கிய சூழலை உருவாக்குகிறது.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "couple-seating",
        title: "Couple Seating & Throne Setup",
        title_ta: "தம்பதி இருக்கை & சிம்மாசன அமைப்பு",
        description:
          "Royal couple seating arrangements — from traditional wooden thrones to contemporary designer chairs, decorated to match the wedding theme.",
        description_ta:
          "அரச தம்பதி இருக்கை ஏற்பாடுகள் — பாரம்பரிய மர சிம்மாசனங்கள் முதல் திருமண கருப்பொருளுக்கு பொருந்தும் வகையில் அலங்கரிக்கப்பட்ட நவீன வடிவமைப்பு நாற்காலிகள் வரை.",
        is_featured: false,
        is_addon: false,
      },
    ],
  },
  {
    id: "lighting",
    category: "Lighting & Sound",
    category_ta: "விளக்கு & ஒலி",
    category_icon: "◈",
    services: [
      {
        id: "chandelier",
        title: "Chandelier Rigging",
        title_ta: "சாண்டிலியர் நிறுவல்",
        description:
          "Single, double, or triple-tier chandelier installations — engineered for halls with or without dedicated rigging points.",
        description_ta:
          "ஒற்றை, இரட்டை அல்லது மூன்று அடுக்கு சாண்டிலியர் நிறுவல்கள் — நிறுவல் புள்ளிகள் உள்ள அல்லது இல்லாத அரங்குகளுக்கு வடிவமைக்கப்பட்டது.",
        is_featured: true,
        is_addon: false,
      },
      {
        id: "ambient-lighting",
        title: "Ambient & Mood Lighting",
        title_ta: "சூழல் & மனநிலை விளக்கு",
        description:
          "Warm amber, soft white, or coloured ambient lighting that transforms your venue atmosphere. Paired with sound as a complete package.",
        description_ta:
          "உங்கள் இடத்தின் சூழலை மாற்றும் வெப்பமான அம்பர், மென்மையான வெள்ளை அல்லது வண்ண சூழல் விளக்கு. ஒரு முழுமையான package-ஆக ஒலியுடன் இணைக்கப்பட்டது.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "fairy-lights",
        title: "Fairy Light Installations",
        title_ta: "விழா விளக்கு நிறுவல்கள்",
        description:
          "Curtain fairy lights, ceiling canopies of warm white LEDs — adding a magical, dreamy quality to any event space.",
        description_ta:
          "திரை விழா விளக்குகள், வெப்பமான வெள்ளை LEDs-இன் கூரை விதானங்கள் — எந்த நிகழ்வு இடத்திலும் மாயாஜால, கனவு தரமான தரம் சேர்க்கின்றன.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "stage-spotlights",
        title: "Stage Spotlights",
        title_ta: "மேடை ஸ்பாட்லைட்கள்",
        description:
          "Professional stage lighting — spotlights, wash lights, and LED uplighting that make the couple and the stage look their absolute best.",
        description_ta:
          "தொழில்முறை மேடை விளக்கு — ஸ்பாட்லைட்கள், வாஷ் விளக்குகள் மற்றும் LED uplighting தம்பதியும் மேடையும் சிறப்பாக தெரிய செய்கின்றன.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "outdoor-lighting",
        title: "Outdoor Event Lighting",
        title_ta: "வெளிப்புற நிகழ்வு விளக்கு",
        description:
          "Full outdoor lighting setups for garden, farmhouse, and tent events — including pathway lighting, perimeter lights, and stage rigs.",
        description_ta:
          "தோட்டம், பண்ணை மற்றும் கூடார நிகழ்வுகளுக்கான முழு வெளிப்புற விளக்கு அமைப்புகள் — பாதை விளக்கு, சுற்றளவு விளக்குகள் மற்றும் மேடை rigs உட்பட.",
        is_featured: false,
        is_addon: false,
      },
    ],
  },
  {
    id: "sacred",
    category: "Spiritual",
    category_ta: "ஆன்மிகம்",
    category_icon: "☸",
    services: [
      {
        id: "temple-festival",
        title: "Temple Festival Decoration",
        title_ta: "கோயில் திருவிழா அலங்காரம்",
        description:
          "Traditional festival decoration for Hindu temples — full floral arrangements, vilakku setups, and entrance decorations for annual and special festivals.",
        description_ta:
          "இந்து கோயில்களுக்கான பாரம்பரிய திருவிழா அலங்காரம் — முழு மலர் அலங்காரங்கள், விளக்கு அமைப்புகள், ஆண்டு மற்றும் சிறப்பு திருவிழாக்களுக்கான நுழைவு அலங்காரங்கள்.",
        is_featured: true,
        is_addon: false,
      },
      {
        id: "chariot-festival",
        title: "Chariot Festival Setup",
        title_ta: "தேர் திருவிழா அலங்காரம்",
        description:
          "Elaborate chariot (thaer) and procession decoration — garlands, floral arches, and traditional arrangements for the full procession route.",
        description_ta:
          "விரிவான தேர் மற்றும் ஊர்வல அலங்காரம் — மாலைகள், மலர் வாயில்கள், முழு ஊர்வல பாதைக்கான பாரம்பரிய ஏற்பாடுகள்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "deity-alankaram",
        title: "Deity Alankaram",
        title_ta: "தெய்வ அலங்காரம்",
        description:
          "Devotional floral decoration for deities — fresh flowers, garlands, and traditional arrangements done with care and reverence.",
        description_ta:
          "தெய்வங்களுக்கான பக்திமயமான மலர் அலங்காரம் — புதிய மலர்கள், மாலைகள், அக்கறையுடனும் மரியாதையுடனும் செய்யப்பட்ட பாரம்பரிய ஏற்பாடுகள்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "government-events",
        title: "Government & Trust Events",
        title_ta: "அரசு & அறக்கட்டளை நிகழ்வுகள்",
        description:
          "Formal decoration for government functions and temple trust events — dignified, protocol-compliant setups with pre-approval documentation.",
        description_ta:
          "அரசு செயல்பாடுகள் மற்றும் கோயில் அறக்கட்டளை நிகழ்வுகளுக்கான முறையான அலங்காரம் — கண்ணியமான, நெறிமுறை-இணக்கமான அமைப்புகள்.",
        is_featured: false,
        is_addon: false,
      },
    ],
  },
  {
    id: "life-events",
    category: "Life Celebrations",
    category_ta: "வாழ்க்கை கொண்டாட்டங்கள்",
    category_icon: "◇",
    services: [
      {
        id: "puberty-ceremony",
        title: "Puberty Ceremony (Manjal Neerattu)",
        title_ta: "பூப்புனித நீராட்டு விழா",
        description:
          "Traditional Tamil puberty ceremony decoration — jasmine, marigold, and banana stem arrangements with vibrant colour palettes.",
        description_ta:
          "பாரம்பரிய தமிழ் பூப்புனித நீராட்டு விழா அலங்காரம் — மல்லிகை, மேரிகோல்ட் மற்றும் வாழை தண்டு ஏற்பாடுகள்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "ear-piercing",
        title: "Ear Piercing Ceremony",
        title_ta: "காது குத்து நிகழ்வு",
        description:
          "Intimate, joyful decoration for ear piercing ceremonies — fresh flowers and traditional elements for this family milestone.",
        description_ta:
          "காது குத்து நிகழ்வுகளுக்கான நெருங்கிய, மகிழ்ச்சியான அலங்காரம் — இந்த குடும்ப மைல்கல்லுக்கு புதிய மலர்கள் மற்றும் பாரம்பரிய கூறுகள்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "upanayanam",
        title: "Upanayanam",
        title_ta: "உபநயனம்",
        description:
          "Sacred and traditional Upanayanam decoration — mangala torans, banana trunk pillars, and floral arrangements that honour the occasion's spiritual significance.",
        description_ta:
          "புனிதமான மற்றும் பாரம்பரிய உபநயன அலங்காரம் — மங்கல தோரணங்கள், வாழை தண்டு தூண்கள், நிகழ்வின் ஆன்மிக முக்கியத்துவத்தை மதிக்கும் மலர் ஏற்பாடுகள்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "gruhapravesam",
        title: "Gruhapravesam (Housewarming)",
        title_ta: "கிரகப்பிரவேசம்",
        description:
          "Auspicious housewarming decoration — entrance torans, banana trunk pillars, kolam-inspired floral patterns, and traditional elements for the new beginning.",
        description_ta:
          "மங்களகரமான கிரகப்பிரவேச அலங்காரம் — நுழைவு தோரணங்கள், வாழை தண்டு தூண்கள், புதிய தொடக்கத்திற்கான பாரம்பரிய கூறுகள்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "birthday",
        title: "Birthday Celebrations",
        title_ta: "பிறந்தநாள் கொண்டாட்டங்கள்",
        description:
          "From first birthdays to milestone anniversaries — themed decoration, balloon setups, floral backdrops, and stage arrangements for every age.",
        description_ta:
          "முதல் பிறந்தநாள் முதல் மைல்கல் நினைவு நாட்கள் வரை — கருப்பொருள் அலங்காரம், பலூன் அமைப்புகள், மலர் பின்னணிகள்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "naming-ceremony",
        title: "Naming Ceremony (Naamakaran)",
        title_ta: "நாமகரணம்",
        description:
          "Gentle, beautiful decoration for naming ceremonies — soft florals, traditional cradle setups, and welcoming arrangements for the newest family member.",
        description_ta:
          "நாமகரண நிகழ்வுகளுக்கான மென்மையான, அழகான அலங்காரம் — மென்மையான மலர்கள், பாரம்பரிய தொட்டில் அமைப்புகள்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "cradle",
        title: "Cradle Ceremony (Thottil)",
        title_ta: "தொட்டில் நிகழ்வு",
        description:
          "Traditional cradle ceremony decoration — decorated thottil with fresh jasmine, rose petals, and a festive setup for the baby's first celebration.",
        description_ta:
          "பாரம்பரிய தொட்டில் நிகழ்வு அலங்காரம் — புதிய மல்லிகை, ரோஜா இதழ்களுடன் அலங்கரிக்கப்பட்ட தொட்டில்.",
        is_featured: false,
        is_addon: false,
      },
    ],
  },
  {
    id: "corporate",
    category: "Corporate & Institutional",
    category_ta: "கார்ப்பரேட் & நிறுவன நிகழ்வுகள்",
    category_icon: "▣",
    services: [
      {
        id: "corporate-stage",
        title: "Corporate Event Stage Setup",
        title_ta: "கார்ப்பரேட் நிகழ்வு மேடை அமைப்பு",
        description:
          "Professional stage setups for corporate events — branded backdrops, podium decoration, and lighting that reflects your brand identity.",
        description_ta:
          "கார்ப்பரேட் நிகழ்வுகளுக்கான தொழில்முறை மேடை அமைப்புகள் — branded பின்னணிகள், மேடை அலங்காரம், உங்கள் brand அடையாளத்தை பிரதிபலிக்கும் விளக்கு.",
        is_featured: true,
        is_addon: false,
      },
      {
        id: "government-function",
        title: "Government Function Decoration",
        title_ta: "அரசு செயல்பாட்டு அலங்காரம்",
        description:
          "Dignified, protocol-compliant decoration for government functions — pre-approved material samples, formal colour palettes, and documentation at every step.",
        description_ta:
          "அரசு செயல்பாடுகளுக்கான கண்ணியமான, நெறிமுறை-இணக்கமான அலங்காரம் — முன் அனுமதிக்கப்பட்ட பொருள் மாதிரிகள், முறையான வண்ணத் திட்டங்கள்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "award-ceremony",
        title: "Award Ceremony Setup",
        title_ta: "விருது விழா அமைப்பு",
        description:
          "Grand, prestigious award ceremony décor — trophy display setups, stage arrangements, red carpet décor, and ambient lighting.",
        description_ta:
          "பிரம்மாண்ட, மதிப்புமிக்க விருது விழா அலங்காரம் — trophy display அமைப்புகள், மேடை ஏற்பாடுகள், red carpet அலங்காரம்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "conference",
        title: "Conference & Seminar Decoration",
        title_ta: "மாநாடு & கருத்தரங்கு அலங்காரம்",
        description:
          "Elegant yet functional decoration for conferences and seminars — stage backdrops, floral centrepieces for tables, and entrance arrangements.",
        description_ta:
          "மாநாடுகள் மற்றும் கருத்தரங்குகளுக்கான நேர்த்தியான மற்றும் செயல்பாட்டு அலங்காரம் — மேடை பின்னணிகள், மேஜை மலர் மையக் கலை.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "product-launch",
        title: "Product Launch Events",
        title_ta: "தயாரிப்பு அறிமுக நிகழ்வுகள்",
        description:
          "High-impact stage and décor setups for product launches — dramatic reveal backdrops, branded elements, and lighting designed for maximum visual impact.",
        description_ta:
          "தயாரிப்பு அறிமுகங்களுக்கான உயர்-தாக்கம் மேடை மற்றும் அலங்கார அமைப்புகள் — நாடகீய பின்னணிகள், branded கூறுகள்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "annual-day",
        title: "Annual Day & Institutional Events",
        title_ta: "ஆண்டு நாள் & நிறுவன நிகழ்வுகள்",
        description:
          "School, college, and institution annual day decoration — stage setup, entrance decoration, and theme-based arrangements for large gatherings.",
        description_ta:
          "பள்ளி, கல்லூரி மற்றும் நிறுவன ஆண்டு நாள் அலங்காரம் — மேடை அமைப்பு, நுழைவு அலங்காரம், பெரிய கூட்டங்களுக்கான கருப்பொருள் ஏற்பாடுகள்.",
        is_featured: false,
        is_addon: false,
      },
    ],
  },
  {
    id: "premium",
    category: "Premium Services",
    category_ta: "சிறப்பு சேவைகள்",
    category_icon: "◆",
    services: [
      {
        id: "full-event-styling",
        title: "Full Event Styling",
        title_ta: "முழு நிகழ்வு styling",
        description:
          "End-to-end décor direction — from concept and mood board to final execution. One team, one vision, one perfect day.",
        description_ta:
          "கருத்தாக்கம் மற்றும் mood board முதல் இறுதி செயல்படுத்தல் வரை — ஒரு குழு, ஒரு தொலைநோக்கு, ஒரு சரியான நாள்.",
        is_featured: true,
        is_addon: false,
      },
      {
        id: "theme-wedding",
        title: "Theme Weddings",
        title_ta: "கருப்பொருள் திருமணங்கள்",
        description:
          "Custom theme weddings — from royal Chettinad to contemporary minimalist. Every element curated to tell your story.",
        description_ta:
          "தனிப்பயன் கருப்பொருள் திருமணங்கள் — அரச Chettinad முதல் நவீன minimalist வரை. உங்கள் கதையை சொல்ல ஒவ்வொரு கூறும் தொகுக்கப்பட்டது.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "outdoor-wedding",
        title: "Outdoor & Farmhouse Weddings",
        title_ta: "வெளிப்புற & பண்ணை திருமணங்கள்",
        description:
          "Full outdoor wedding setups — tent and pandal structures, outdoor lighting rigs, floral installations, and weather-proof execution.",
        description_ta:
          "முழு வெளிப்புற திருமண அமைப்புகள் — கூடார மற்றும் பந்தல் கட்டமைப்புகள், வெளிப்புற விளக்கு rigs, மலர் நிறுவல்கள்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "multiday",
        title: "Multi-Day Event Packages",
        title_ta: "பல நாள் நிகழ்வு packages",
        description:
          "3 to 5-day event decoration packages — coordinated across multiple functions with consistent aesthetic and dedicated team from start to finish.",
        description_ta:
          "3 முதல் 5 நாள் நிகழ்வு அலங்கார packages — பல செயல்பாடுகளில் ஒரே அழகியல் மற்றும் தொடக்கம் முதல் முடிவு வரை அர்ப்பணிப்பான குழுவுடன் ஒருங்கிணைக்கப்பட்டது.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "emergency-setup",
        title: "Emergency & Last-Minute Setup",
        title_ta: "அவசர & கடைசி நிமிட அமைப்பு",
        description:
          "Short-notice event decoration when you need it most — VIM Events has executed full mandap setups in under 6 hours. Call us first.",
        description_ta:
          "உங்களுக்கு மிகவும் தேவைப்படும் போது குறுகிய அறிவிப்பு நிகழ்வு அலங்காரம் — VIM Events 6 மணி நேரத்திற்குள் முழு மண்டப அமைப்புகளை செயல்படுத்தியுள்ளது.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "home-decoration",
        title: "Festival Home Decoration",
        title_ta: "திருவிழா வீட்டு அலங்காரம்",
        description:
          "Home decoration for Diwali, Pongal, and other Tamil festivals — entrance torans, flower rangolis, vilakku setups, and festive arrangements.",
        description_ta:
          "தீபாவளி, பொங்கல் மற்றும் பிற தமிழ் திருவிழாக்களுக்கான வீட்டு அலங்காரம் — நுழைவு தோரணங்கள், மலர் ரங்கோலிகள், விளக்கு அமைப்புகள்.",
        is_featured: false,
        is_addon: false,
      },
      {
        id: "photo-booth",
        title: "Photo Booth Setup",
        title_ta: "Photo Booth அமைப்பு",
        description:
          "Themed photo booth setups — floral walls, prop arrangements, and creative backdrops that guests love to photograph.",
        description_ta:
          "கருப்பொருள் photo booth அமைப்புகள் — மலர் சுவர்கள், prop ஏற்பாடுகள், விருந்தினர்கள் புகைப்படம் எடுக்க விரும்பும் படைப்பாற்றல் பின்னணிகள்.",
        is_featured: false,
        is_addon: true,
      },
    ],
  },
];

export function getServiceCategories(): Service[] {
  return serviceCategories;
}

export function getServiceCategory(id: string): Service | undefined {
  return serviceCategories.find((c) => c.id === id);
}

export function getServiceItemById(id: string): ServiceItem | undefined {
  for (const category of serviceCategories) {
    const match = category.services.find((service) => service.id === id);
    if (match) return match;
  }
  return undefined;
}
