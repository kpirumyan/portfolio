import { caveat, marhey } from "@/app/fonts";

export default function Title() {
  return (
    <div className="font-bold text-black mt-28">
      <div className="uppercase">
        <span>Hello, </span>
        <span className="text-primary">my name is</span>
      </div>
      <h1
        className={`text-7xl tracking-widest text-white text-shadow mt-8 mb-2 ${marhey.className}`}
      >
        <span className="text-primary">Karen</span> Pirumyan
      </h1>
      <div>
        <span className="uppercase tracking-widest">I am </span>
        <strong className={`text-3xl ml-2 ${caveat.className}`}>
          Web Developer
        </strong>
      </div>
    </div>
  );
}
