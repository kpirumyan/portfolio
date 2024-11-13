import { caveat, jost } from "@/app/fonts";

export default function SectionHeader({
  title,
  section,
  prefix = "My",
}: {
  title: string;
  section: string;
  prefix?: string;
}) {
  return (
    <>
      <h2 className="uppercase text-center text-5xl tracking-wider mb-2">
        {title}
      </h2>
      <div className={`text-center text-3xl ${caveat.className}`}>
        <span
          className={`text-primary uppercase text-sm font-sm mr-2 ${jost.className}`}
        >
          {prefix}
        </span>
        {section}
      </div>
    </>
  );
}
