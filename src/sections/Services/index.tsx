import { ServiceCards, VLine } from "@/components";

export default function Services() {
  return (
    <div className="container grid grid-cols-12 justify-items-center">
      <div className=" col-span-4 col-start-5">
        <div className="uppercase">What I do</div>
        <div>
          <span className="text-primary uppercase">My</span> Services
        </div>
      </div>
      <ServiceCards />
      <div className="relative col-span-1 col-start-12">
        <VLine side={"right"} />
      </div>
    </div>
  );
}
