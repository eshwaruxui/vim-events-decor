"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { localize } from "@/lib/localize";
import { BRAND, WHATSAPP_URL } from "@/lib/constants";
import { getServiceCategories, getServiceItemById } from "@/lib/data/services";
import type { GalleryItem } from "@/lib/data/gallery";

const EVENT_TYPES: GalleryItem["event_type"][] = [
  "wedding",
  "corporate",
  "temple",
  "reception",
];

const EVENT_TYPE_KEY = {
  wedding: "gallery.filterWedding",
  corporate: "gallery.filterCorporate",
  temple: "gallery.filterTemple",
  reception: "gallery.filterReception",
} as const;

const categories = getServiceCategories();

export function ContactForm() {
  const { language, t } = useLanguage();
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") ?? "";
  const prefilledService = serviceParam ? getServiceItemById(serviceParam) : undefined;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [serviceId, setServiceId] = useState(prefilledService ? serviceParam : "");
  const [message, setMessage] = useState("");

  const prefilledServiceTitle = prefilledService
    ? localize(language, prefilledService.title, prefilledService.title_ta)
    : null;

  const selectedServiceTitle = useMemo(() => {
    const service = getServiceItemById(serviceId);
    return service ? localize(language, service.title, service.title_ta) : "";
  }, [serviceId, language]);

  function buildMessageBody() {
    const eventTypeLabel = eventType
      ? t(EVENT_TYPE_KEY[eventType as GalleryItem["event_type"]])
      : "";
    const lines = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      eventDate ? `Event Date: ${eventDate}` : null,
      eventTypeLabel ? `Event Type: ${eventTypeLabel}` : null,
      selectedServiceTitle ? `Service of Interest: ${selectedServiceTitle}` : null,
      message ? `Message: ${message}` : null,
    ].filter((line): line is string => line !== null);
    return lines.join("\n");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = `Event Enquiry — ${name}`;
    const mailto = `mailto:${BRAND.email.bookings}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(buildMessageBody())}`;
    window.location.href = mailto;
  }

  const whatsappHref = name || phone || message
    ? `https://wa.me/${BRAND.whatsapp.number}?text=${encodeURIComponent(
        `Hi, I'd like to enquire about an event.\n\n${buildMessageBody()}`
      )}`
    : WHATSAPP_URL;

  return (
    <div className="mx-auto max-w-xl px-4 pb-20 sm:px-6">
      {prefilledServiceTitle && (
        <p className="mb-6 rounded-lg border border-gold/40 bg-gold/10 px-4 py-3 text-center font-body text-sm text-maroon">
          {t("contact.enquiringAbout")} <strong>{prefilledServiceTitle}</strong>
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field label={t("contact.name")} required>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-maroon/20 bg-white px-3 py-2 font-body text-sm text-ink focus:border-maroon focus:outline-none"
          />
        </Field>

        <Field label={t("contact.phone")} required>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border border-maroon/20 bg-white px-3 py-2 font-body text-sm text-ink focus:border-maroon focus:outline-none"
          />
        </Field>

        <Field label={t("contact.email")}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-maroon/20 bg-white px-3 py-2 font-body text-sm text-ink focus:border-maroon focus:outline-none"
          />
        </Field>

        <Field label={t("contact.eventDate")}>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="w-full rounded-lg border border-maroon/20 bg-white px-3 py-2 font-body text-sm text-ink focus:border-maroon focus:outline-none"
          />
        </Field>

        <Field label={t("contact.eventType")}>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full rounded-lg border border-maroon/20 bg-white px-3 py-2 font-body text-sm text-ink focus:border-maroon focus:outline-none"
          >
            <option value="">{t("contact.selectEventType")}</option>
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {t(EVENT_TYPE_KEY[type])}
              </option>
            ))}
          </select>
        </Field>

        <Field label={t("contact.serviceOfInterest")}>
          <select
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
            className="w-full rounded-lg border border-maroon/20 bg-white px-3 py-2 font-body text-sm text-ink focus:border-maroon focus:outline-none"
          >
            <option value="">—</option>
            {categories.map((category) => (
              <optgroup
                key={category.id}
                label={localize(language, category.category, category.category_ta)}
              >
                {category.services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {localize(language, service.title, service.title_ta)}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </Field>

        <Field label={t("contact.message")}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("contact.messagePlaceholder")}
            rows={4}
            className="w-full rounded-lg border border-maroon/20 bg-white px-3 py-2 font-body text-sm text-ink focus:border-maroon focus:outline-none"
          />
        </Field>

        <button
          type="submit"
          className="mt-2 rounded-xl bg-maroon px-6 py-3 font-body text-sm text-cream transition-colors hover:bg-maroon-light"
        >
          {t("contact.submit")}
        </button>
      </form>

      <div className="mt-6 text-center">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-maroon hover:underline"
        >
          {t("contact.orWhatsApp")}
        </a>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-body text-[13px] font-medium text-ink">
        {label}
        {required && <span className="text-maroon"> *</span>}
      </span>
      {children}
    </label>
  );
}
