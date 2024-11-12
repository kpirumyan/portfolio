import Info from "./Info";
import MainImage from "./MainImage";
import { caveat } from "@/app/fonts";
import { VLine } from "@/components";

export default function Home() {
  return (
    <div className="container">
      <div className="grid grid-cols-12 mt-8">
        <div className="relative col-span-1">
          <VLine side={"left"} />
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
