import Image from "next/image";
import clsx from "clsx";
import decorImg2 from "@/images/pat-2.png";

export default function VLine({ side }: { side: "left" | "right" }) {
  return (
    <>
      <div
        className={clsx("v-line-block", side === "left" ? "left-4" : "right-4")}
      ></div>
      <div
        className={clsx(
          "absolute w-[141px] h-full",
          side === "left" ? "left-0" : "right-0",
        )}
      >
        <Image
          src={decorImg2}
          alt="Decoration image"
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
