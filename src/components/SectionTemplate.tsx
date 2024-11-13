import { SectionBG, SectionHeader, VLine } from "@/components";
import clsx from "clsx";

export default function SectionTemplate({
  bgText,
  side,
  headerTitle,
  headerSecondaryTitle,
  headerPrefix,
  children,
}: {
  bgText: string;
  side: "left" | "right";
  headerTitle: string;
  headerSecondaryTitle: string;
  headerPrefix?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container grid grid-cols-12 text-black">
      <div
        className={clsx(
          "relative col-span-1 row-span-3",
          side === "right" && "col-start-12",
        )}
      >
        <VLine side={side} />
      </div>
      <div className="col-span-6 col-start-4 mb-16 font-bold">
        <SectionHeader
          title={headerTitle}
          section={headerSecondaryTitle}
          prefix={headerPrefix}
        />
      </div>
      <div className="col-span-10 col-start-2">{children}</div>
      <div className="col-span-12">
        <SectionBG text={bgText} />
      </div>
    </div>
  );
}
