import Info from "./Info";
import Phrases from "./Phrases";
import { Button } from "@/components";
import MainImage from "./MainImage";

export default function Home() {
  return (
    <>
      <Info />
      <Phrases />
      <Button />
      <Button />
      <MainImage />
      {/*<Image /> - BG image */}
    </>
  );
}
