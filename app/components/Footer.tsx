// components/Footer.tsx
export default function Footer() {
  return (
    <footer id="kontakt" className="bg-black text-white py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <CompanyInfo />
        <QuickLinks />
        <ContactInfo />
      </div>

      <div className="text-center text-gray-500 text-xs mt-12 border-t border-gray-800 pt-6">
        © 2025 Seelbach Tours — Reisen mit Seele
      </div>
    </footer>
  );
}

function CompanyInfo() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#F9DD3F] border-2 border-[#DB1C08] rounded-full flex items-center justify-center font-bold text-black">
          <span className="text-xl">ST</span>
        </div>
        <div>
          <h3 className="font-header text-2xl font-bold">Seelbach Tours</h3>
          <p className="text-[#F9DD3F] text-sm font-medium">Reisen mit Seele</p>
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-4">
        Unvergessliche Reiseerlebnisse seit 2008.
      </p>
      <div className="flex items-center gap-4 mt-6">
        <a href="#" className="text-gray-400 hover:text-[#F9DD3F] transition">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-[#F9DD3F] transition">
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
        {/* GitHub icon removed as requested */}
      </div>
    </div>
  );
}

function QuickLinks() {
  const links = [
    { label: "Startseite", href: "/" },
    { label: "Destinationen", href: "/destinations" },
    { label: "Über uns", href: "/about" },
    { label: "Kontakt", href: "/contact" },
  ];

  return (
    <div>
      <h4 className="font-header text-lg text-[#F9DD3F] font-bold mb-4">
        Schnelllinks
      </h4>
      <ul className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-[#F9DD3F] transition block py-1">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactInfo() {
  return (
    <div>
      <h4 className="font-header text-lg text-[#F9DD3F] font-bold mb-4">
        Kontakt
      </h4>
      <ul className="space-y-3 text-gray-300 text-sm">
        <li className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-[#F9DD3F] shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          <div>
            <p className="font-medium">Telefon</p>
            <p>+49 123 456 789</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-[#F9DD3F] shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <div>
            <p className="font-medium">Email</p>
            <p>info@seelbachtours.com</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <svg
            className="w-5 h-5 text-[#F9DD3F] shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <div>
            <p className="font-medium">Adresse</p>
            <p>
              Cape Town 123
              <br />
              10115, Cape Town
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
