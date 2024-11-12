import { ServiceCards, VLine } from "@/components";
import { caveat, jost } from "@/app/fonts";

export default function Services() {
  return (
    <div className="container grid grid-cols-12 justify-items-center text-black">
      <div className=" col-span-4 col-start-5 mb-16 font-bold">
        <h2 className="uppercase text-5xl tracking-wider mb-2">What I do</h2>
        <div className={`text-center text-3xl ${caveat.className}`}>
          <span
            className={`text-primary uppercase text-sm font-sm mr-2 ${jost.className}`}
          >
            My
          </span>{" "}
          Services
        </div>
      </div>
      <ServiceCards />
      <div className="relative col-span-1 col-start-12">
        <VLine side={"right"} />
      </div>
    </div>
  );
}
