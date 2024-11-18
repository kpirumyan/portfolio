import Info from "./Info";
import MainImage from "./MainImage";
import { SectionBG, VLine } from "@/components";

export default function Home() {
  return (
    <div className="container">
      <div className="grid grid-cols-12 mt-8">
        <div className="relative col-span-1 row-span-2">
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
        <div className="col-span-10 col-start-2 relative justify-self-center">
          <SectionBG text="Web Developer" />
        </div>
      </div>
    </div>
  );
}
