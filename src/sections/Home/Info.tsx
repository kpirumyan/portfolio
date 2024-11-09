import { caveat, marhey } from "@/app/fonts";
import { SocialLinks } from "@/components";

export default function Info() {
  return (
    <>
      <div className="title font-bold text-black">
        <div className="uppercase">
          <span>
            Hello, <span className="text-primary">my name is</span>{" "}
          </span>
        </div>
        <h1
          className={`whitespace-nowrap text-7xl tracking-widest text-white text-shadow mt-8 mb-2 ${marhey.className}`}
        >
          <span className="text-primary ">Karen</span> Pirumyan
        </h1>
        <div>
          <span className="uppercase tracking-widest">I am </span>
          <span className={`text-3xl ml-2 ${caveat.className}`}>
            Web Developer
          </span>
        </div>
      </div>

      <div className="description opacity-80 text-lg max-w-xl font-normal mt-12">
        From Armenia, Yerevan. I have rich experience in web design, also I am
        good at Next.js. I love to talk with you about our unique.
      </div>

      <div className="mt-8">
        <SocialLinks />
      </div>
    </>
  );
}
