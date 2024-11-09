import Info from "./Info";
import Phrases from "./Phrases";
import MainImage from "./MainImage";

export default function Home() {
  return (
    <div className="grid grid-cols-5 mt-8">
      <div className="mt-24 col-span-3">
        <Info />
        <Phrases />
        <div className="mt-10">
          <a href={"/"} target="_blank" className="btn">
            Download CV
          </a>
          <a href={"/"} target="_blank" className="btn-link">
            My Skills
          </a>
        </div>
      </div>
      <div className="mx-auto w-full col-start-4 col-span-2">
        <MainImage />
      </div>
      {/*<Image /> - BG image */}
    </div>
  );
}
