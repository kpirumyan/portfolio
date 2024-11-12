import { ServiceData } from "@/interfaces";
import Image from "next/image";
import clsx from "clsx";

export default function Card({
  data: { title, icon, description },
  decorSide,
}: {
  data: ServiceData;
  decorSide: "left" | "right" | "center";
}) {
  const Icon = icon;
  return (
    <div className="relative rounded-2xl bg-white overflow-hidden min-h-72 p-8">
      <div className="text-center text-5xl w-12 mx-auto mb-6">
        <Icon />
      </div>
      <h3 className="text-center text-2xl font-bold mb-4">{title}</h3>
      <div className="min-h-[225px] opacity-80 text-tertiary">
        {description}
      </div>
      <div
        className={clsx("absolute", {
          "-left-[27px] -bottom-[27px]": decorSide === "left",
          "-right-[27px] -bottom-[27px]": decorSide === "right",
          "left-[97px] -bottom-[80px]": decorSide === "center",
        })}
      >
        <Image
          src="/pat-2.png"
          alt="Image decoration"
          width={141}
          height={141}
          className=""
        />
      </div>
    </div>
  );
}
