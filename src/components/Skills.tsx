import { SkillData } from "@/interfaces";
import { Skill } from "@/components";

const skills: SkillData[] = [
  {
    name: "Javascript",
    value: 55,
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
    name: "Test",
    value: 85,
  },
];

export default function Skills() {
  return (
    <div className="grid grid-cols-3">
      {skills.map((skill) => (
        <Skill key={skill.name} data={skill} />
      ))}
    </div>
  );
}
