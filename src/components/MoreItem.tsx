import { MoreItemData } from "@/interfaces";

export default function MoreItem({ title, value, icon }: MoreItemData) {
  const Icon = icon;
  return (
    <div className="">
      <div className="">
        <Icon />
      </div>
      <div className="">{title}</div>
      <div className="">{value}</div>
    </div>
  );
}
