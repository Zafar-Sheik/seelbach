// components/ContactSection.tsx
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: ["info@seelbachtours.com", "buchung@seelbachtours.com"],
      action: "Email senden",
      color: "text-[#DB1C08] bg-[#DB1C08]/10",
      link: "mailto:info@seelbachtours.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Telefon",
      details: ["+49 123 456 789", "+49 123 456 790"],
      action: "Jetzt anrufen",
      color: "text-[#F9DD3F] bg-[#F9DD3F]/10",
      link: "tel:+49123456789",
    },
    {
      icon: <MapPin size={24} />,
      title: "Adresse",
      details: ["Cape Town 123", "10115 ", "Suid-Afrika"],
      action: "Auf Karte ansehen",
      color: "text-[#DB1C08] bg-[#DB1C08]/10",
      link: "https://maps.google.com/?q=Musterstraße+123+Berlin",
    },
    {
      icon: <Clock size={24} />,
      title: "Öffnungszeiten",
      details: ["Mo-Fr: 09:00 - 18:00", "Sa: 10:00 - 14:00", "So: Geschlossen"],
      action: "Termin vereinbaren",
      color: "text-[#F9DD3F] bg-[#F9DD3F]/10",
      link: "mailto:termin@seelbachtours.com",
    },
  ];

  return (
    <section id="kontakt" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader
          title="Kontaktieren Sie Uns"
          subtitle="Direkter Kontakt – persönlich und unkompliziert"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group">
              <div
                className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-5`}>
                {item.icon}
              </div>

              <h3 className="font-header text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>

              <div className="space-y-2 mb-6">
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#DB1C08] font-semibold text-sm hover:text-red-700 transition group-hover:gap-3">
                {item.action}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Simple CTA Banner */}
        <div className="mt-16 p-6 bg-linear-to-r from-[#DB1C08] to-[#F9DD3F] rounded-2xl text-center">
          <p className="text-white font-header text-lg font-semibold">
            Bereit für Ihr nächstes Abenteuer? Kontaktieren Sie uns noch heute.
          </p>
        </div>
      </div>
    </section>
  );
}
