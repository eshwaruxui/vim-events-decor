# VIM Events & Décor — Pre-merge Smoke Test

Run this checklist on staging.vim-events-decor.pages.dev before
every merge to main.

## Build
- [ ] npm run build completes with zero errors
- [ ] No TypeScript errors
- [ ] No missing image or asset 404s in console

## Coming Soon Page
- [ ] Page loads on desktop (Chrome)
- [ ] Page loads on mobile (375px viewport)
- [ ] VIM logo renders correctly
- [ ] Tagline "Elegance in every emotion" visible
- [ ] "Our website is on its way" pill visible
- [ ] Body copy renders in Jost 300
- [ ] Mandala corner decorations visible
- [ ] Gold divider visible

## CTAs
- [ ] "Send an Enquiry" opens mail client with pre-filled subject
      and body on mobile
- [ ] "Chat on WhatsApp" opens WhatsApp with pre-filled message
- [ ] WhatsApp float button visible on all pages
- [ ] WhatsApp float button not overlapping footer content

## Language Toggle
- [ ] Toggle visible in nav on all pages
- [ ] EN → Tamil switches all nav strings
- [ ] Tamil → Native Tamil switches to full Tamil script
- [ ] Tamil → Modern Tamil switches to code-switched Tamil
- [ ] Selection persists after page reload (localStorage)
- [ ] Selection persists after navigating between pages

## Navigation
- [ ] /gallery loads without error (placeholder page)
- [ ] /case-studies loads without error (placeholder page)
- [ ] /case-studies/[slug] loads without error
- [ ] /contact loads without error
- [ ] Nav links highlight correctly on active page

## Performance
- [ ] Lighthouse mobile score > 85
- [ ] No render-blocking resources
- [ ] Google Fonts loading correctly (Cormorant Garamond, Great
      Vibes, Jost)

## Cross-browser
- [ ] Chrome ✓
- [ ] Safari ✓
- [ ] Mobile Safari (iPhone) ✓
