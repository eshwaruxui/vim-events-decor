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
  | "footer.since"
  | "gallery.title"
  | "gallery.subtitle"
  | "gallery.filterAll"
  | "gallery.filterWedding"
  | "gallery.filterCorporate"
  | "gallery.filterTemple"
  | "gallery.filterReception"
  | "gallery.loadMore"
  | "gallery.noResults"
  | "gallery.photoCount"
  | "gallery.lightboxClose"
  | "gallery.lightboxPrev"
  | "gallery.lightboxNext"
  | "caseStudies.title"
  | "caseStudies.subtitle"
  | "caseStudies.readMore"
  | "caseStudies.back"
  | "caseStudies.clientType"
  | "caseStudies.location"
  | "caseStudies.scale"
  | "caseStudies.timeline"
  | "caseStudies.outcome"
  | "caseStudies.theBrief"
  | "caseStudies.theChallenge"
  | "caseStudies.whatWeDid"
  | "caseStudies.theResult"
  | "caseStudies.eventGallery"
  | "caseStudies.ctaTitle"
  | "caseStudies.ctaWhatsApp"
  | "caseStudies.ctaEnquiry"
  | "caseStudies.notFound"
  | "caseStudies.guestCount"
  | "services.title"
  | "services.subtitle"
  | "services.featuredBadge"
  | "services.addonBadge"
  | "services.enquireButton"
  | "services.allServices"
  | "services.viewGallery"
  | "services.ctaTitle"
  | "services.ctaSubtitle"
  | "services.ctaWhatsApp"
  | "services.ctaEnquiry"
  | "contact.title"
  | "contact.subtitle"
  | "contact.enquiringAbout"
  | "contact.name"
  | "contact.phone"
  | "contact.email"
  | "contact.eventDate"
  | "contact.eventType"
  | "contact.selectEventType"
  | "contact.serviceOfInterest"
  | "contact.message"
  | "contact.messagePlaceholder"
  | "contact.submit"
  | "contact.orWhatsApp";

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
    "footer.since": "Since 1993",
    "gallery.title": "Our Work",
    "gallery.subtitle": "30 years of celebrations across Tamil Nadu",
    "gallery.filterAll": "All",
    "gallery.filterWedding": "Wedding",
    "gallery.filterCorporate": "Corporate",
    "gallery.filterTemple": "Temple",
    "gallery.filterReception": "Reception",
    "gallery.loadMore": "Load more",
    "gallery.noResults": "No works in this category yet",
    "gallery.photoCount": "photos",
    "gallery.lightboxClose": "Close",
    "gallery.lightboxPrev": "Previous",
    "gallery.lightboxNext": "Next",
    "caseStudies.title": "Case Studies",
    "caseStudies.subtitle": "How we bring complex briefs to life",
    "caseStudies.readMore": "Read case study",
    "caseStudies.back": "← All case studies",
    "caseStudies.clientType": "Client type",
    "caseStudies.location": "Location",
    "caseStudies.scale": "Scale",
    "caseStudies.timeline": "Timeline",
    "caseStudies.outcome": "Outcome",
    "caseStudies.theBrief": "The Brief",
    "caseStudies.theChallenge": "The Challenge",
    "caseStudies.whatWeDid": "What We Did",
    "caseStudies.theResult": "The Result",
    "caseStudies.eventGallery": "Gallery from this event",
    "caseStudies.ctaTitle": "Planning an event?",
    "caseStudies.ctaWhatsApp": "Chat on WhatsApp",
    "caseStudies.ctaEnquiry": "Send an enquiry",
    "caseStudies.notFound": "Case study not found",
    "caseStudies.guestCount": "guests",
    "services.title": "Our Services",
    "services.subtitle":
      "From weddings to sacred spaces — we bring 30 years of craft to every occasion",
    "services.featuredBadge": "Featured",
    "services.addonBadge": "Add-on",
    "services.enquireButton": "Enquire about this service",
    "services.allServices": "All Services",
    "services.viewGallery": "View related work",
    "services.ctaTitle": "Ready to plan your event?",
    "services.ctaSubtitle":
      "Tell us about your occasion and we'll craft something beautiful.",
    "services.ctaWhatsApp": "Chat on WhatsApp",
    "services.ctaEnquiry": "Send an enquiry",
    "contact.title": "Get in Touch",
    "contact.subtitle":
      "Tell us about your celebration and we'll get back to you within a day.",
    "contact.enquiringAbout": "Enquiring about:",
    "contact.name": "Name",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.eventDate": "Event Date",
    "contact.eventType": "Event Type",
    "contact.selectEventType": "Select event type",
    "contact.serviceOfInterest": "Service of Interest",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell us more about your event…",
    "contact.submit": "Send Enquiry",
    "contact.orWhatsApp": "Prefer WhatsApp? Message us directly.",
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
    "footer.since": "1993 முதல்",
    "gallery.title": "எங்க வேலை",
    "gallery.subtitle": "30 வருஷமா தமிழ்நாடு முழுக்க கொண்டாட்டங்கள்",
    "gallery.filterAll": "எல்லாம்",
    "gallery.filterWedding": "திருமணம்",
    "gallery.filterCorporate": "கார்ப்பரேட்",
    "gallery.filterTemple": "கோயில்",
    "gallery.filterReception": "வரவேற்பு",
    "gallery.loadMore": "இன்னும் காட்டு",
    "gallery.noResults": "இந்த கேட்டகிரில இன்னும் வேலை இல்ல",
    "gallery.photoCount": "போட்டோஸ்",
    "gallery.lightboxClose": "மூடு",
    "gallery.lightboxPrev": "முந்தையது",
    "gallery.lightboxNext": "அடுத்தது",
    "caseStudies.title": "கேஸ் ஸ்டடீஸ்",
    "caseStudies.subtitle": "கடினமான பணிகளை நாங்க எப்படி நிறைவேத்துறோம்",
    "caseStudies.readMore": "கேஸ் ஸ்டடி படிங்க",
    "caseStudies.back": "← எல்லா கேஸ் ஸ்டடீஸும்",
    "caseStudies.clientType": "கிளையன்ட் வகை",
    "caseStudies.location": "இடம்",
    "caseStudies.scale": "அளவு",
    "caseStudies.timeline": "நேர அட்டவணை",
    "caseStudies.outcome": "முடிவு",
    "caseStudies.theBrief": "விவரம்",
    "caseStudies.theChallenge": "சவால்",
    "caseStudies.whatWeDid": "நாங்க என்ன பண்ணோம்",
    "caseStudies.theResult": "விளைவு",
    "caseStudies.eventGallery": "இந்த நிகழ்விலிருந்து போட்டோஸ்",
    "caseStudies.ctaTitle": "நிகழ்வு பிளான் பண்றீங்களா?",
    "caseStudies.ctaWhatsApp": "வாட்ஸ்அப்பில் சேட் பண்ணுங்க",
    "caseStudies.ctaEnquiry": "என்க்வயரி அனுப்புங்க",
    "caseStudies.notFound": "கேஸ் ஸ்டடி கிடைக்கல",
    "caseStudies.guestCount": "விருந்தினர்கள்",
    "services.title": "எங்க சேவைகள்",
    "services.subtitle":
      "திருமணம் முதல் புனித இடங்கள் வரை — 30 வருஷ அனுபவத்தை ஒவ்வொரு நிகழ்விற்கும் கொண்டு வர்றோம்",
    "services.featuredBadge": "சிறப்பு",
    "services.addonBadge": "கூடுதல்",
    "services.enquireButton": "இந்த சேவை பத்தி என்க்வயரி பண்ணுங்க",
    "services.allServices": "எல்லா சேவைகளும்",
    "services.viewGallery": "தொடர்புடைய வேலைகளை பாருங்க",
    "services.ctaTitle": "உங்க நிகழ்வை பிளான் பண்ண ரெடியா?",
    "services.ctaSubtitle":
      "உங்க நிகழ்வு பத்தி சொல்லுங்க, நாங்க அழகா செஞ்சு தர்றோம்.",
    "services.ctaWhatsApp": "வாட்ஸ்அப்பில் சேட் பண்ணுங்க",
    "services.ctaEnquiry": "என்க்வயரி அனுப்புங்க",
    "contact.title": "தொடர்பு கொள்ளுங்க",
    "contact.subtitle":
      "உங்க கொண்டாட்டம் பத்தி சொல்லுங்க, ஒரு நாளுக்குள் நாங்க திரும்பி பேசுறோம்.",
    "contact.enquiringAbout": "இது பத்தி என்க்வயரி:",
    "contact.name": "பெயர்",
    "contact.phone": "போன் நம்பர்",
    "contact.email": "மின்னஞ்சல்",
    "contact.eventDate": "நிகழ்வு தேதி",
    "contact.eventType": "நிகழ்வு வகை",
    "contact.selectEventType": "நிகழ்வு வகையை தேர்ந்தெடுங்க",
    "contact.serviceOfInterest": "தேவையான சேவை",
    "contact.message": "செய்தி",
    "contact.messagePlaceholder": "உங்க நிகழ்வு பத்தி இன்னும் கொஞ்சம் சொல்லுங்க…",
    "contact.submit": "என்க்வயரி அனுப்புங்க",
    "contact.orWhatsApp": "வாட்ஸ்அப்ல பேச விரும்புறீங்களா? நேரடியா மெசேஜ் பண்ணுங்க.",
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
    "footer.since": "1993 ஆம் ஆண்டு முதல்",
    "gallery.title": "எமது பணிகள்",
    "gallery.subtitle": "முப்பதாண்டுகளாக தமிழ்நாடு முழுவதும் கொண்டாட்டங்கள்",
    "gallery.filterAll": "அனைத்தும்",
    "gallery.filterWedding": "திருமணம்",
    "gallery.filterCorporate": "நிறுவனம்",
    "gallery.filterTemple": "கோயில்",
    "gallery.filterReception": "வரவேற்பு",
    "gallery.loadMore": "மேலும் காண்க",
    "gallery.noResults": "இப்பிரிவில் இதுவரை பணிகள் இல்லை",
    "gallery.photoCount": "புகைப்படங்கள்",
    "gallery.lightboxClose": "மூடுக",
    "gallery.lightboxPrev": "முந்தையது",
    "gallery.lightboxNext": "அடுத்தது",
    "caseStudies.title": "நிகழ்வுச் செய்திகள்",
    "caseStudies.subtitle": "சிக்கலான கோரிக்கைகளை நாங்கள் எவ்வாறு நிறைவேற்றுகிறோம்",
    "caseStudies.readMore": "முழுமையாகப் படிக்க",
    "caseStudies.back": "← அனைத்து நிகழ்வுச் செய்திகளும்",
    "caseStudies.clientType": "வாடிக்கையாளர் வகை",
    "caseStudies.location": "இடம்",
    "caseStudies.scale": "அளவு",
    "caseStudies.timeline": "காலஅட்டவணை",
    "caseStudies.outcome": "விளைவு",
    "caseStudies.theBrief": "கோரிக்கை",
    "caseStudies.theChallenge": "சவால்",
    "caseStudies.whatWeDid": "நாங்கள் செய்தது",
    "caseStudies.theResult": "முடிவு",
    "caseStudies.eventGallery": "இந்நிகழ்வின் படத்தொகுப்பு",
    "caseStudies.ctaTitle": "நிகழ்வொன்று திட்டமிடுகிறீர்களா?",
    "caseStudies.ctaWhatsApp": "வாட்ஸ்-அப்பில் உரையாடுக",
    "caseStudies.ctaEnquiry": "விசாரணை அனுப்பவும்",
    "caseStudies.notFound": "நிகழ்வுச் செய்தி கிடைக்கவில்லை",
    "caseStudies.guestCount": "விருந்தினர்",
    "services.title": "எமது சேவைகள்",
    "services.subtitle":
      "திருமணங்கள் முதல் புனித தலங்கள் வரை — முப்பதாண்டு கைவினைத்திறனை ஒவ்வொரு நிகழ்விற்கும் அளிக்கின்றோம்",
    "services.featuredBadge": "சிறப்புச் சேவை",
    "services.addonBadge": "மேலதிகம்",
    "services.enquireButton": "இச்சேவை குறித்து விசாரிக்க",
    "services.allServices": "அனைத்து சேவைகளும்",
    "services.viewGallery": "தொடர்புடைய படைப்புகளைக் காண்க",
    "services.ctaTitle": "உங்கள் நிகழ்வைத் திட்டமிடத் தயாரா?",
    "services.ctaSubtitle":
      "உங்கள் நிகழ்வு குறித்து கூறுங்கள், அழகியதாக வடிவமைத்துத் தருகின்றோம்.",
    "services.ctaWhatsApp": "வாட்ஸ்-அப்பில் உரையாடுக",
    "services.ctaEnquiry": "விசாரணை அனுப்பவும்",
    "contact.title": "தொடர்பு கொள்ளுங்கள்",
    "contact.subtitle":
      "உங்கள் கொண்டாட்டம் குறித்து கூறுங்கள், ஒரு நாளுக்குள் பதிலளிப்போம்.",
    "contact.enquiringAbout": "இது குறித்த விசாரணை:",
    "contact.name": "பெயர்",
    "contact.phone": "தொலைபேசி எண்",
    "contact.email": "மின்னஞ்சல்",
    "contact.eventDate": "நிகழ்வு தேதி",
    "contact.eventType": "நிகழ்வு வகை",
    "contact.selectEventType": "நிகழ்வு வகையைத் தேர்ந்தெடுக்கவும்",
    "contact.serviceOfInterest": "தேவையான சேவை",
    "contact.message": "செய்தி",
    "contact.messagePlaceholder": "உங்கள் நிகழ்வு குறித்து மேலும் கூறுங்கள்…",
    "contact.submit": "விசாரணை அனுப்பவும்",
    "contact.orWhatsApp":
      "வாட்ஸ்-அப்பில் பேச விரும்புகிறீர்களா? நேரடியாகத் தொடர்பு கொள்ளுங்கள்.",
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
    "footer.since": "1993 லேர்ந்து",
    "gallery.title": "Our Work",
    "gallery.subtitle": "30 years-ஆ தமிழ்நாடு முழுக்க celebrations",
    "gallery.filterAll": "All",
    "gallery.filterWedding": "Wedding",
    "gallery.filterCorporate": "Corporate",
    "gallery.filterTemple": "Temple",
    "gallery.filterReception": "Reception",
    "gallery.loadMore": "இன்னும் Load பண்ணுங்க",
    "gallery.noResults": "இந்த category-ல இன்னும் work எதுவும் இல்ல",
    "gallery.photoCount": "photos",
    "gallery.lightboxClose": "Close பண்ணு",
    "gallery.lightboxPrev": "Previous",
    "gallery.lightboxNext": "Next",
    "caseStudies.title": "Case Studies",
    "caseStudies.subtitle": "Complex briefs-ஐ நாங்க எப்படி life-க்கு கொண்டு வர்றோம்",
    "caseStudies.readMore": "Case study படிங்க",
    "caseStudies.back": "← All case studies",
    "caseStudies.clientType": "Client type",
    "caseStudies.location": "Location",
    "caseStudies.scale": "Scale",
    "caseStudies.timeline": "Timeline",
    "caseStudies.outcome": "Outcome",
    "caseStudies.theBrief": "The Brief",
    "caseStudies.theChallenge": "The Challenge",
    "caseStudies.whatWeDid": "நாங்க என்ன பண்ணோம்",
    "caseStudies.theResult": "The Result",
    "caseStudies.eventGallery": "இந்த event-ல இருந்து Gallery",
    "caseStudies.ctaTitle": "Event plan பண்றீங்களா?",
    "caseStudies.ctaWhatsApp": "WhatsApp-ல Chat பண்ணுங்க",
    "caseStudies.ctaEnquiry": "Enquiry அனுப்புங்க",
    "caseStudies.notFound": "Case study கிடைக்கல",
    "caseStudies.guestCount": "guests",
    "services.title": "Our Services",
    "services.subtitle":
      "Weddings முதல் sacred spaces வரை — 30 years craft-ஐ ஒவ்வொரு occasion-க்கும் கொண்டு வர்றோம்",
    "services.featuredBadge": "Featured",
    "services.addonBadge": "Add-on",
    "services.enquireButton": "இந்த service பத்தி Enquiry பண்ணுங்க",
    "services.allServices": "All Services",
    "services.viewGallery": "Related work பாருங்க",
    "services.ctaTitle": "Event plan பண்ண ready-ஆ?",
    "services.ctaSubtitle":
      "உங்க occasion பத்தி சொல்லுங்க, நாங்க அழகா செஞ்சு தர்றோம்.",
    "services.ctaWhatsApp": "WhatsApp-ல Chat பண்ணுங்க",
    "services.ctaEnquiry": "Enquiry அனுப்புங்க",
    "contact.title": "Get in Touch",
    "contact.subtitle":
      "உங்க celebration பத்தி சொல்லுங்க, ஒரு நாளுக்குள் நாங்க back பண்றோம்.",
    "contact.enquiringAbout": "இது பத்தி Enquiry:",
    "contact.name": "Name",
    "contact.phone": "Phone Number",
    "contact.email": "Email",
    "contact.eventDate": "Event Date",
    "contact.eventType": "Event Type",
    "contact.selectEventType": "Event type-ஐ select பண்ணுங்க",
    "contact.serviceOfInterest": "Service of Interest",
    "contact.message": "Message",
    "contact.messagePlaceholder": "உங்க event பத்தி இன்னும் கொஞ்சம் சொல்லுங்க…",
    "contact.submit": "Enquiry அனுப்புங்க",
    "contact.orWhatsApp": "WhatsApp-ல பேச விரும்புறீங்களா? Direct-ஆ message பண்ணுங்க.",
  },
};
