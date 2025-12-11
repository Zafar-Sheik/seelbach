// components/ui/SectionHeader.tsx
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <>
      <h2 className="text-center font-header text-3xl md:text-5xl font-bold">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-center text-gray-600 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </>
  );
}
