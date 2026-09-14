import Info from "./Info";
import { SectionBG, VLine } from "@/components";

export default function Home() {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-12 mt-8 text-center lg:text-left">
        <div className="relative col-span-1 row-span-2 hidden lg:block">
          <VLine side={"left"} />
        </div>
        <div className="mt-24 lg:col-start-2 lg:col-span-6">
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
        {/*
        <div className="mx-auto w-full lg:col-start-8 lg:col-span-5">
          <MainImage />
        </div>*/}
        <div className="lg:col-span-10 lg:col-start-2 relative justify-self-center">
          <SectionBG text="Web Developer" />
        </div>
      </div>
    </div>
  );
}
