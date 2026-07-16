import type { Language } from "@/context/LanguageContext";

export type TranslationKey =
  | "nav.home"
  | "nav.gallery"
  | "nav.caseStudies"
  | "nav.services"
  | "nav.contact"
  | "hero.tagline"
  | "hero.pill"
  | "hero.body"
  | "cta.enquiry"
  | "cta.whatsapp"
  | "footer.credit"
  | "footer.since";

type Translations = Record<Language, Record<TranslationKey, string>>;

/**
 * ta          — everyday colloquial Chennai Tamil, the default Tamil mode
 * ta-native   — purer/traditional Tamil vocabulary, fewer English loanwords
 * ta-modern   — modern spoken Tamil as young Chennai actually talks, Tanglish mix
 */
export const translations: Translations = {
  en: {
    "nav.home": "Home",
    "nav.gallery": "Gallery",
    "nav.caseStudies": "Case Studies",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "hero.tagline": "Elegance in every emotion",
    "hero.pill": "Our website is on its way",
    "hero.body":
      "For over 30 years, we've had the honor of being part of life's most precious moments and celebrations across Tamil Nadu. With grace in our hearts and tradition in our roots, we continue to craft weddings that are beautiful, personal, and unforgettable. Thank you for trusting us with your happiness.",
    "cta.enquiry": "Send an Enquiry",
    "cta.whatsapp": "Chat on WhatsApp",
    "footer.credit": "Designed by Eswar Creatives",
    "footer.since": "Since 1995",
  },
  ta: {
    "nav.home": "முகப்பு",
    "nav.gallery": "கேலரி",
    "nav.caseStudies": "கேஸ் ஸ்டடீஸ்",
    "nav.services": "சேவைகள்",
    "nav.contact": "தொடர்பு",
    "hero.tagline": "ஒவ்வொரு உணர்விலும் அழகு",
    "hero.pill": "எங்க வெப்சைட் வர்றது இருக்கு",
    "hero.body":
      "30 வருஷத்துக்கும் மேலா, தமிழ்நாடு முழுக்க வாழ்க்கையின் அருமையான தருணங்களுக்கு நாங்க பங்காளியா இருந்திருக்கோம். அன்பும் பாரம்பரியமும் கலந்த அழகான, தனிப்பட்ட, மறக்க முடியாத திருமணங்களை நாங்க தொடர்ந்து செய்யறோம். உங்க சந்தோஷத்துல நம்பிக்கை வெச்சதுக்கு நன்றி.",
    "cta.enquiry": "என்க்வயரி அனுப்புங்க",
    "cta.whatsapp": "வாட்ஸ்அப்பில் சேட் பண்ணுங்க",
    "footer.credit": "வடிவமைப்பு Eswar Creatives",
    "footer.since": "1995 முதல்",
  },
  "ta-native": {
    "nav.home": "முகப்பு",
    "nav.gallery": "படத்தொகுப்பு",
    "nav.caseStudies": "நிகழ்வுச் செய்திகள்",
    "nav.services": "பணிகள்",
    "nav.contact": "தொடர்புகொள்ள",
    "hero.tagline": "உணர்வுகளில் ஒளிரும் அழகு",
    "hero.pill": "எமது இணையதளம் விரைவில் வருகிறது",
    "hero.body":
      "முப்பதாண்டுகளுக்கும் மேலாக, தமிழ்நாடு முழுவதும் வாழ்வின் புனிதத் தருணங்களில் பங்கேற்கும் பேறு பெற்றுள்ளோம். பண்பாட்டு மரபும் அன்பும் இணைந்த அழகிய, தனித்துவமான, மறக்கவியலா திருமணங்களைத் தொடர்ந்து படைக்கின்றோம். உங்கள் மகிழ்ச்சியில் நம்பிக்கை வைத்தமைக்கு நன்றி.",
    "cta.enquiry": "விசாரணை அனுப்பவும்",
    "cta.whatsapp": "வாட்ஸ்-அப்பில் உரையாடுக",
    "footer.credit": "வடிவமைத்தவர் Eswar Creatives",
    "footer.since": "1995 ஆம் ஆண்டு முதல்",
  },
  "ta-modern": {
    "nav.home": "Home",
    "nav.gallery": "Gallery",
    "nav.caseStudies": "Case Studies",
    "nav.services": "Services",
    "nav.contact": "Contact பண்ணுங்க",
    "hero.tagline": "Every emotion-ல ஒரு elegance",
    "hero.pill": "Website ரெடி ஆயிட்டு வரும்!",
    "hero.body":
      "30+ years ஆகுது நாங்க தமிழ்நாடு முழுக்க weddings பண்ணி, life-ல பெஸ்ட் moments-ல பங்கு எடுத்துக்கிட்டு இருக்கோம். Tradition-உம் love-உம் சேர்த்து, beautiful-ஆ, personal-ஆ, forever நினைவுல இருக்குற wedding events நாங்க பண்றோம். எங்க மேல நம்பிக்கை வெச்சதுக்கு romba thanks உங்களுக்கு!",
    "cta.enquiry": "Enquiry அனுப்புங்க",
    "cta.whatsapp": "WhatsApp-ல Chat பண்ணுங்க",
    "footer.credit": "Design பண்ணது Eswar Creatives",
    "footer.since": "1995 லேர்ந்து",
  },
};
