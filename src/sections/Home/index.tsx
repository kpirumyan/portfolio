import Info from "./Info";
import Phrases from "./Phrases";
import MainImage from "./MainImage";

export default function Home() {
  return (
    <>
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
      <MainImage />
      {/*<Image /> - BG image */}
    </>
  );
}
