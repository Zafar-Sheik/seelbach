// components/Features.tsx
import { Gem, Globe2, Handshake, ShieldCheck } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

export default function Features() {
  const features = [
    {
      icon: <Gem size={32} strokeWidth={1.5} />,
      title: "Premium Erlebnisse",
      description:
        "Kuratierte Reisen mit exklusivem Zugang und Luxus-Ausstattung",
    },
    {
      icon: <Globe2 size={32} strokeWidth={1.5} />,
      title: "Weltweite Ziele",
      description: "Versteckte Juwelen & weltbekannte Wahrzeichen",
    },
    {
      icon: <Handshake size={32} strokeWidth={1.5} />,
      title: "Persönlicher Service",
      description: "Dedizierte Reiseberater für individuelle Planung",
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      title: "Kompletter Schutz",
      description: "Umfassende Versicherung & 24/7 Support",
    },
  ];

  return (
    <section id="leistungen" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <SectionHeader
          title="WARUM SEELBACH WÄHLEN"
          subtitle="Luxus trifft auf Authentizität – Reisen, die tief berühren."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6 transition hover:-translate-y-1">
      <div className="w-16 h-16 mx-auto bg-[#F9DD3F] border-2 border-[#DB1C08] rounded-full flex items-center justify-center text-[#DB1C08]">
        {icon}
      </div>

      <h3 className="mt-4 font-header text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
