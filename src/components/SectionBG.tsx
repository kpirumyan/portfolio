import { caveat } from "@/app/fonts";

export default function SectionBG({ text }: { text: string }) {
  return (
    <div className={`bg-title ${caveat.className}`}>
      <span>{text}</span>
    </div>
  );
}
