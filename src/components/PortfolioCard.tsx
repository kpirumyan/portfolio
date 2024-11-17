import { PortfolioCardData } from "@/interfaces";
import Image from "next/image";
import clsx from "clsx";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import decorImg2 from "@/images/pat-2.png";

export default function PortfolioCard({
  title,
  img,
  description,
  decorSide,
}: PortfolioCardData & { decorSide: "left" | "right" | "center" }) {
  return (
    <div className="relative rounded-2xl bg-white overflow-hidden min-h-72 p-8">
      <Link href="/">
        <div className="h-60 mb-8">
          <Image
            src={img}
            alt="Project image"
            className="h-full object-cover rounded-2xl"
          />
        </div>

        <h3 className="mb-4">{title}</h3>
        <div className="min-h-[225px] text-tertiary">{description}</div>
        <div className="font-bold">
          <span>See project</span>
          <FaArrowRight className="text-primary ml-5 inline-block" />
        </div>
        <div
          className={clsx("absolute", {
            "-left-[27px] -bottom-[27px]": decorSide === "left",
            "-right-[27px] -bottom-[27px]": decorSide === "right",
            "left-1/2 -bottom-[80px] -translate-x-1/2": decorSide === "center",
          })}
        >
          <Image
            src={decorImg2}
            alt="Decoration Image"
            width={141}
            height={141}
          />
        </div>
      </Link>
    </div>
  );
}
