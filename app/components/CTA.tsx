// components/CTA.tsx
export default function CTA() {
  return (
    <section className="py-20 px-4 bg-linear-to-r from-black to-[#DB1C08] text-white text-center">
      <h2 className="font-header text-3xl md:text-5xl font-bold">
        BEREIT FÜR IHRE REISE?
      </h2>

      <p className="mt-3 text-lg text-gray-200 max-w-lg mx-auto">
        Kontaktieren Sie uns und wir gestalten Ihre perfekte Reise.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-[#F9DD3F] text-black px-12 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition">
          Jetzt starten
        </button>

        <button className="border-2 border-white px-12 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition">
          Kontakt aufnehmen
        </button>
      </div>
    </section>
  );
}
