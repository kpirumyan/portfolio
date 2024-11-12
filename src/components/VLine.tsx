import Image from "next/image";
import clsx from "clsx";

export default function VLine({ side }: { side: "left" | "right" }) {
  return (
    <>
      <div
        className={clsx("v-line-block", side === "left" ? "left-4" : "right-4")}
      ></div>
      <div className="relative w-[141px] h-full">
        <Image
          src="/pat-2.png"
          alt="Image decoration"
          width={141}
          height={141}
          className={clsx(
            "absolute",
            side === "left"
              ? "-bottom-[67px] left-[3px]"
              : "-bottom-[67px] right-[3px]",
          )}
        />
      </div>
    </>
  );
}
