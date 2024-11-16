import { ServiceCardData } from "@/interfaces";
import Image from "next/image";
import clsx from "clsx";

export default function ServiceCard({
  title,
  icon,
  description,
  decorSide,
}: ServiceCardData & { decorSide: "left" | "right" | "center" }) {
  const Icon = icon;
  return (
    <div className="relative rounded-2xl bg-white overflow-hidden min-h-72 p-8">
      <div className="text-center text-5xl w-12 mx-auto mb-6">
        <Icon />
      </div>
      <h3 className="text-center mb-4">{title}</h3>
      <div className="min-h-[225px] text-tertiary">{description}</div>
      <div
        className={clsx("absolute", {
          "-left-[27px] -bottom-[27px]": decorSide === "left",
          "-right-[27px] -bottom-[27px]": decorSide === "right",
          "left-1/2 -bottom-[80px] -translate-x-1/2": decorSide === "center",
        })}
      >
        <Image
          src="/pat-2.png"
          alt="Image decoration"
          width={141}
          height={141}
        />
      </div>
    </div>
  );
}
