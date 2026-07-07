import { BRAND } from "@/config/brand";
import { telHref, whatsappHref } from "@/lib/format";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Visit Store", href: "#visit-store" },
  { label: "Contact", href: "#contact" },
];

/**
 * Footer (Document 2 §12): brand, tagline, quick links, contact and social
 * icons. Minimal, no unnecessary content.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-16">
      <div className="container-lux grid grid-cols-1 gap-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl text-ivory">{BRAND.businessName}</p>
          <p className="mt-3 max-w-xs font-sans text-body text-muted">{BRAND.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <p className="font-sans text-caption uppercase tracking-[0.14em] text-muted">Quick Links</p>
          <ul className="mt-4 flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-body text-ivory transition-colors duration-300 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-sans text-caption uppercase tracking-[0.14em] text-muted">Contact</p>
          <ul className="mt-4 flex flex-col gap-3 font-sans text-body text-ivory">
            <li>
              <a href={telHref(BRAND.phone)} className="transition-colors duration-300 hover:text-gold">
                {BRAND.phone}
              </a>
            </li>
            <li className="max-w-xs text-muted">{BRAND.address}</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${BRAND.businessName} on Instagram`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <svg
                viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={BRAND.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${BRAND.businessName} on Facebook`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-7.02h2.36l.35-2.74h-2.71V9.49c0-.79.22-1.33 1.35-1.33h1.44V5.71a19.3 19.3 0 0 0-2.1-.11c-2.08 0-3.5 1.27-3.5 3.6v2.01H8.32v2.74h2.36V21h2.82Z" />
              </svg>
            </a>
            <a
              href={whatsappHref(BRAND.phone, BRAND.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${BRAND.businessName} on WhatsApp`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2a9.9 9.9 0 0 0-8.46 15.02L2 22l5.1-1.34A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 0 1 0 16.2 8 8 0 0 1-4.08-1.12l-.29-.17-3.03.8.81-2.95-.19-.3A8.1 8.1 0 0 1 12.04 3.8Zm-2.4 4.3c-.18 0-.47.07-.72.34-.24.27-.94.92-.94 2.24 0 1.32.96 2.6 1.1 2.78.13.18 1.88 2.87 4.55 3.92 2.22.87 2.67.7 3.15.66.48-.05 1.55-.63 1.77-1.24.22-.61.22-1.14.15-1.25-.07-.11-.24-.18-.5-.31-.27-.14-1.56-.77-1.8-.86-.24-.09-.42-.13-.6.14-.17.27-.68.86-.83 1.03-.15.18-.31.2-.57.07-.27-.14-1.12-.41-2.14-1.32-.79-.7-1.32-1.57-1.48-1.84-.15-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.6-1.46-.83-2-.22-.53-.44-.46-.6-.46l-.51-.01Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container-lux mt-12 border-t border-border pt-8">
        <p className="font-sans text-caption text-muted">
          © {year} {BRAND.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
