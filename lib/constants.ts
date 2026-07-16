export const BRAND = {
  name: "VIM Events & Décor",
  tagline: "Elegance in every emotion",
  phone: "+919841646441",
  email: {
    hello: "hello@vimeventsdecor.com",
    bookings: "bookings@vimeventsdecor.com",
  },
  whatsapp: {
    number: "919841646441",
    message:
      "Hi, I came across VIM Events & Décor and would like to know more about your services.",
  },
  colors: {
    maroon: "#7B1A1A",
    gold: "#C9A96E",
    cream: "#FAF8F5",
    bodyText: "#5a3a3a",
  },
  social: {
    instagram: "https://www.instagram.com/vim.events.decor",
  },
} as const;

export const WHATSAPP_URL = `https://wa.me/${BRAND.whatsapp.number}?text=${encodeURIComponent(
  BRAND.whatsapp.message
)}`;

export const ENQUIRY_MAILTO_URL = `mailto:${BRAND.email.hello}?subject=${encodeURIComponent(
  "Wedding Decoration Enquiry"
)}&body=${encodeURIComponent(
  "Hi VIM Events & Décor,\n\nI would like to enquire about your wedding decoration services.\n\nEvent Date:\nVenue:\nType of Event:\n\nPlease get in touch with me.\n\nThank you."
)}`;
