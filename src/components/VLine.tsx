import Image from "next/image";
import clsx from "clsx";

export default function VLine({ side }: { side: "left" | "right" }) {
  return (
    <>
      <div
        className={clsx("v-line-block", {
          "left-4": side === "left",
          "right-4": side === "right",
        })}
      ></div>
      <div className="relative w-[141px] h-full">
        <Image
          src="/pat-2.png"
          alt="Image decoration"
          width={141}
          height={141}
          className={clsx("absolute", {
            "-bottom-[67px] left-[3px]": side === "left",
            "-bottom-[67px] right-[3px]": side === "right",
          })}
        />
      </div>
    </>
  );
}
