import { PortfolioCard } from "@/components";
import { PortfolioCardData } from "@/interfaces";
import projectImg from "@/images/project.jpeg";

const projects: PortfolioCardData[] = [
  {
    title: "Transcom",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Morbi ac felis. In turpis. Curabitur vestibulum aliquam leo. Donec id justo.",
    img: projectImg,
  },
  {
    title: "Pinnacle Sports",
    description:
      "Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Cras varius. Duis leo.",
    img: projectImg,
  },
  {
    title: "World bank",
    description:
      "In ac felis quis tortor malesuada pretium. Ut leo. Nullam tincidunt adipiscing enim.",
    img: projectImg,
  },
];

export default function PortfolioCards() {
  return (
    <div className="grid grid-cols-3 col-span-10 col-start-2 gap-8  mb-20">
      {projects.map((project) => (
        <PortfolioCard key={project.title} {...project} decorSide="right" />
      ))}
    </div>
  );
}
