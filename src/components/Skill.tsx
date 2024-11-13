import { ProgressBar } from "@/components";

export default function Skill({
  data: { name, value, text },
}: {
  data: {
    name: string;
    value: number;
    text?: string;
  };
}) {
  return (
    <div className="">
      <h6>
        {name}
        <span>{value}%</span>
      </h6>
      {text && <div>{text}</div>}
      <ProgressBar value={value} />
    </div>
  );
}
