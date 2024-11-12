import Image from "next/image";

export default function VLine() {
  return (
    <>
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
    </>
  );
}
