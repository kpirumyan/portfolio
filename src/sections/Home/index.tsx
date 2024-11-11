import Info from "./Info";
import MainImage from "./MainImage";
import { caveat } from "@/app/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="grid grid-cols-12 mt-8">
        <div className="relative col-span-1">
          <div className="v-line-block"></div>
          <div className="relative w-[141px] h-full">
            <Image
              src="/pat-2.png"
              alt="Image decoration"
              width={141}
              height={141}
              className="absolute -bottom-[67px] left-[3px]"
            />
          </div>
        </div>

        <div className="mt-24 col-start-2 col-span-6">
          <Info />
          <div className="mt-10">
            <a href={"/"} target="_blank" className="btn">
              Download CV
            </a>
            <a href={"/"} target="_blank" className="btn-link">
              My Skills
            </a>
          </div>
        </div>
        <div className="mx-auto w-full col-start-8 col-span-5">
          <MainImage />
        </div>
      </div>

      <div className={`bg-title ${caveat.className}`}>
        <span>Web Developer</span>
      </div>
    </div>
  );
}
