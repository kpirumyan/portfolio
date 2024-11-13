import { caveat } from "@/app/fonts";

export default function SectionBG({ text }: { text: string }) {
  return (
    <div className={`bg-title text-center ${caveat.className}`}>
      <span>{text}</span>
    </div>
  );
}
