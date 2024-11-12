import { ServiceCard, Dots } from "@/components";
import { ServiceData } from "@/interfaces";

const services: ServiceData[] = [
  {
    title: "Why choose me",
    description:
      "Like other skilled full stack developers, I have experience with C#, PHP, JavaScript, HTML, CSS and all the other usual techie acronyms.",
    icon: "",
  },
  {
    title: "What I do",
    description:
      "I'm a web developer: I write applications and start online services.",
    icon: "",
  },
  {
    title: "My mission",
    description:
      "I want to do my favorite thing. I like to create something new which can be useful to others.",
    icon: "",
  },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-10 col-span-10 col-start-2">
      {services.map((service) => (
        <ServiceCard key={service.title} data={service} />
      ))}
      <div className="col-span-2 col-start-5 text-center">
        <Dots count={services.length} />
      </div>
    </div>
  );
}
