import { SkillData } from "@/interfaces";
import { Skill } from "@/components";

const skills: SkillData[] = [
  {
    name: "Javascript",
    value: 95,
  },
  {
    name: "PHP",
    value: 90,
  },
  {
    name: "C#",
    value: 85,
  },
  {
    name: "Drupal",
    value: 95,
  },
  {
    name: "Databases",
    value: 85,
  },
  {
    name: "Git",
    value: 95,
  },
  {
    name: "CSS, SASS",
    value: 95,
  },
];

export default function Skills() {
  return (
    <div className="grid grid-cols-3">
      {skills.map((skill) => (
        <Skill key={skill.name} {...skill} />
      ))}
    </div>
  );
}
