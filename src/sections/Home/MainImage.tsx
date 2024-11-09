import Image from "next/image";

export default function MainImage() {
  return (
    <div className="relative h-[42.5rem]">
      <span className="absolute w-full h-full z-10 overflow-hidden rounded-b-[340px]">
        <Image
          src="/main-img.png"
          alt="Karen Pirumyan"
          width={360}
          height={400}
          className="absolute left-[20%] bottom-0"
        />
      </span>
      <span className="absolute bottom-0 w-full pt-[100%] bg-primary rounded-full"></span>
    </div>
  );
}
