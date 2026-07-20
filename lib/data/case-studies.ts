export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  title_ta: string;
  client_type: "B2C" | "B2B" | "B2G";
  client_type_label: string;
  client_type_label_ta: string;
  location: string;
  year: number;
  guest_count: number;
  timeline: string;
  outcome: string;
  outcome_ta: string;
  brief: string;
  brief_ta: string;
  challenge: string;
  challenge_ta: string;
  what_we_did: string;
  what_we_did_ta: string;
  result: string;
  result_ta: string;
  hero_image_url: string;
  gallery_images: string[];
  published: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-001",
    slug: "grand-jasmine-wedding-chennai",
    title: "A Grand Tamil Wedding — 500 Guests, Chennai",
    title_ta: "பிரம்மாண்ட தமிழ் திருமணம் — 500 விருந்தினர், சென்னை",
    client_type: "B2C",
    client_type_label: "Wedding Family",
    client_type_label_ta: "திருமண குடும்பம்",
    location: "Marimalai Nagar, Chennai",
    year: 2024,
    guest_count: 500,
    timeline: "3-day setup",
    outcome: "Referred 4 new bookings",
    outcome_ta: "4 புதிய முன்பதிவுகளை பரிந்துரைத்தனர்",
    brief:
      "The family wanted a full traditional Tamil mandap — jasmine malai ceiling, brass vilakku lamps, banana trunk pillars, and a gold and red colour palette for 500 guests at a heritage hall.",
    brief_ta:
      "குடும்பம் ஒரு முழு பாரம்பரிய தமிழ் மண்டபம் விரும்பியது — மல்லிகை மாலை மேற்கூரை, பித்தளை விளக்குகள், வாழை தண்டு தூண்கள், 500 விருந்தினர்களுக்கு தங்கம் மற்றும் சிவப்பு வண்ண திட்டம்.",
    challenge:
      "The venue had low ceilings and no rigging points — our team engineered a freestanding structure to achieve the full jasmine malai ceiling effect without damaging the hall.",
    challenge_ta:
      "அரங்கில் தாழ்வான கூரை இருந்தது — எங்கள் குழு அரங்கை பாதிக்காமல் மல்லிகை மாலை மேற்கூரை விளைவை அடைய ஒரு தனி கட்டமைப்பை வடிவமைத்தது.",
    what_we_did:
      "A 12-member team worked across 3 days to install over 800kg of jasmine malai, 24 brass vilakku lamps, carved wooden pillars rented from Madurai, and a gold-draped stage canopy. Lighting was warm amber throughout to match the candlelit brief.",
    what_we_did_ta:
      "12 உறுப்பினர் குழு 3 நாட்களில் 800kg மல்லிகை மாலை, 24 பித்தளை விளக்குகள், மதுரையிலிருந்து வாடகைக்கு எடுக்கப்பட்ட செதுக்கல் தூண்கள் மற்றும் தங்க மேடை விதானம் நிறுவியது.",
    result:
      "The couple's family called it the most beautiful wedding they had seen in the hall's 20-year history. Four referrals came in within two weeks of the event.",
    result_ta:
      "மண்டபத்தின் 20 ஆண்டு வரலாற்றில் கண்ட அழகான திருமணம் என்று குடும்பம் கூறியது. நிகழ்வுக்கு இரண்டு வாரங்களுக்குள் நான்கு பரிந்துரைகள் வந்தன.",
    hero_image_url: "/images/case-studies/cs-001-hero.jpg",
    gallery_images: [
      "/images/case-studies/cs-001-a.jpg",
      "/images/case-studies/cs-001-b.jpg",
      "/images/case-studies/cs-001-c.jpg",
      "/images/case-studies/cs-001-d.jpg",
    ],
    published: true,
  },
  {
    id: "cs-002",
    slug: "mandapam-partnership-dindigul",
    title: "Exclusive Mandapam Partnership — Dindigul",
    title_ta: "மண்டபம் பங்காண்மை — திண்டுக்கல்",
    client_type: "B2B",
    client_type_label: "Mandapam Owner",
    client_type_label_ta: "மண்டப உரிமையாளர்",
    location: "Dindigul",
    year: 2024,
    guest_count: 300,
    timeline: "1-day setup per event",
    outcome: "Exclusive Saturday contract renewed",
    outcome_ta: "சனிக்கிழமை பிரத்யேக ஒப்பந்தம் புதுப்பிக்கப்பட்டது",
    brief:
      "A premier mandapam in Dindigul needed a reliable decoration partner for their Saturday bookings — consistent quality, fast setup, and a team that understood the hall's layout.",
    brief_ta:
      "திண்டுக்கலில் உள்ள ஒரு சிறந்த மண்டபத்திற்கு சனிக்கிழமை முன்பதிவுகளுக்கு நம்பகமான அலங்கார கூட்டாளி தேவைப்பட்டது — சீரான தரம், விரைவான அமைவு.",
    challenge:
      "The hall has back-to-back bookings every weekend. Our team had to complete full setup in under 6 hours without disrupting the previous event's teardown crew.",
    challenge_ta:
      "அரங்கில் ஒவ்வொரு வார இறுதியிலும் தொடர் முன்பதிவுகள் உள்ளன. எங்கள் குழு 6 மணி நேரத்திற்குள் முழு அமைவை முடிக்க வேண்டியிருந்தது.",
    what_we_did:
      "We standardised a setup kit specifically for this hall — pre-measured drapes, a modular mandap frame, and a dedicated 8-member team assigned every Saturday. Quality checks at 4 hours and 1 hour before the event.",
    what_we_did_ta:
      "இந்த அரங்கிற்கு குறிப்பாக ஒரு அமைவு கிட்டை நிலைநிறுத்தினோம் — முன் அளவிடப்பட்ட திரைகள், தொகுக்கக்கூடிய மண்டப சட்டம், ஒவ்வொரு சனிக்கிழமையும் ஒதுக்கப்பட்ட 8 உறுப்பினர் குழு.",
    result:
      "The mandapam owner renewed the exclusive contract for the second year. VIM Events now handles 100% of their Saturday decoration bookings.",
    result_ta:
      "மண்டப உரிமையாளர் இரண்டாவது ஆண்டிற்கு பிரத்யேக ஒப்பந்தத்தை புதுப்பித்தார். VIM Events இப்போது அவர்களின் 100% சனிக்கிழமை அலங்கார முன்பதிவுகளை கையாளுகிறது.",
    hero_image_url: "/images/case-studies/cs-002-hero.jpg",
    gallery_images: [
      "/images/case-studies/cs-002-a.jpg",
      "/images/case-studies/cs-002-b.jpg",
      "/images/case-studies/cs-002-c.jpg",
      "/images/case-studies/cs-002-d.jpg",
    ],
    published: true,
  },
  {
    id: "cs-003",
    slug: "chennai-dms-government-event",
    title: "Government Event — Chennai DMS",
    title_ta: "அரசு நிகழ்வு — சென்னை DMS",
    client_type: "B2G",
    client_type_label: "Government Authority",
    client_type_label_ta: "அரசு அதிகாரம்",
    location: "Chennai",
    year: 2024,
    guest_count: 400,
    timeline: "2-day setup",
    outcome: "Shortlisted for next government tender",
    outcome_ta: "அடுத்த அரசு டெண்டருக்கு தேர்வு செய்யப்பட்டது",
    brief:
      "Chennai District Management Services required a dignified, formal decoration setup for an official government function — traditional aesthetic, no flashy elements, within strict budget guidelines.",
    brief_ta:
      "சென்னை மாவட்ட மேலாண்மை சேவைகளுக்கு அதிகாரப்பூர்வ அரசு நிகழ்விற்கு கண்ணியமான, முறையான அலங்காரம் தேவைப்பட்டது — பாரம்பரிய தோற்றம், கட்டுப்பட்ட பட்ஜெட்.",
    challenge:
      "Government events require formal approval for every element — fabrics, colours, lighting. Our team prepared a complete decoration brief with material samples 2 weeks in advance for sign-off.",
    challenge_ta:
      "அரசு நிகழ்வுகளுக்கு ஒவ்வொரு கூறுக்கும் முறையான ஒப்புதல் தேவை. எங்கள் குழு 2 வாரங்கள் முன்பே முழு அலங்கார சுருக்கத்தை தயார் செய்தது.",
    what_we_did:
      "Traditional setup with saffron and white colour palette, government insignia placement, brass lamp arrangements at key entry points, and floral garlands for the dais. All materials pre-approved and documented.",
    what_we_did_ta:
      "குங்குமப்பூ மற்றும் வெள்ளை வண்ண திட்டம், அரசு சின்னங்கள், பித்தளை விளக்குகள், மேடைக்கான மலர் மாலைகள். அனைத்து பொருட்களும் முன் அனுமதிக்கப்பட்டன.",
    result:
      "Event completed without a single protocol deviation. VIM Events has been shortlisted as a preferred vendor for the next government district function.",
    result_ta:
      "ஒரு நெறிமுறை விலகல் இல்லாமல் நிகழ்வு நிறைவடைந்தது. VIM Events அடுத்த அரசு மாவட்ட நிகழ்விற்கு விரும்பிய விற்பனையாளராக தேர்வு செய்யப்பட்டுள்ளது.",
    hero_image_url: "/images/case-studies/cs-003-hero.jpg",
    gallery_images: [
      "/images/case-studies/cs-003-a.jpg",
      "/images/case-studies/cs-003-b.jpg",
      "/images/case-studies/cs-003-c.jpg",
      "/images/case-studies/cs-003-d.jpg",
    ],
    // Unpublished: this describes a tender VIM is bidding for, not a
    // completed project — presenting it as a finished case study would be
    // misleading to a tender officer who might see this page. Flip back
    // to true if the tender is won and this becomes a legitimate case
    // study.
    published: false,
  },
];

export function getCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.published);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug && cs.published);
}
