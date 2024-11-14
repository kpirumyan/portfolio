import { Card } from "@/components";
import { ServiceData } from "@/interfaces";
import { FaGear, FaLaptop, FaThumbsUp } from "react-icons/fa6";

const services: ServiceData[] = [
  {
    title: "Why choose me",
    description:
      "Like other skilled full stack developers, I have experience with C#, PHP, JavaScript, HTML, CSS and all the other usual techie acronyms.",
    icon: FaGear,
  },
  {
    title: "What I do",
    description:
      "I'm a web developer: I write applications and start online services.",
    icon: FaLaptop,
  },
  {
    title: "My mission",
    description:
      "I want to do my favorite thing. I like to create something new which can be useful to others.",
    icon: FaThumbsUp,
  },
];

export default function Cards() {
  return (
    <div className="grid grid-cols-3 col-span-10 col-start-2 gap-8  mb-20">
      {services.map((service) => (
        <Card key={service.title} {...service} decorSide="center" />
      ))}
    </div>
  );
}
