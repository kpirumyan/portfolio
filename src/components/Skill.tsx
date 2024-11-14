import { ProgressBar } from "@/components";
import { SkillData } from "@/interfaces";

export default function Skill({ name, value, text }: SkillData) {
  return (
    <div className="p-5">
      <h4 className="mb-5 mx-7 leading-5 text-xl">
        {name}
        <span className="float-right text-base">
          {value}
          <span className="text-primary">%</span>
        </span>
      </h4>
      {text && <div>{text}</div>}
      <ProgressBar value={value} />
    </div>
  );
}
