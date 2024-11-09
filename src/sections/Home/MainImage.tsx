import Image from "next/image";

export default function MainImage() {
  return (
    <div className="relative h-[42.5rem] tracking-wider">
      <span className="absolute w-full h-full z-10 overflow-hidden rounded-b-[340px] z-20">
        <Image
          src="/main-img.png"
          alt="Karen Pirumyan"
          width={360}
          height={400}
          className="absolute left-[20%] bottom-0"
        />
      </span>
      <span className="absolute bottom-0 w-full pt-[100%] bg-primary rounded-full z-10"></span>
      <Image
        src="/pat-1.png"
        alt="Image decoration"
        width={226}
        height={226}
        className="absolute top-0 right-0"
      />
      <Image
        src="/pat-1.png"
        alt="Image decoration"
        width={226}
        height={226}
        className="pat-2 absolute -left-40 bottom-0"
      />
      <Image
        src="/pat-2.png"
        alt="Image decoration"
        width={141}
        height={141}
        className="pat-2 absolute right-0 -bottom-16"
      />
      <div className="info-list absolute bottom-0 uppercase font-bold w-full">
        <ul>
          <li className="info-tile -left-32 -top-36">
            <span className="info-title--col text-4xl">
              7 <strong>+</strong>
            </span>
            <span className="info-title--col text-sm">
              Years of <span className="text-primary">Experience</span>
            </span>
          </li>
          <li className="info-tile right-10 -top-20">
            <span className="info-title--col text-4xl">28</span>
            <span className="info-title--col text-sm">
              Completed <span className="text-primary">Projects</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
