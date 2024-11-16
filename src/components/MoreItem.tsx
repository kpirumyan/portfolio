import { MoreItemData } from "@/interfaces";

export default function MoreItem({ title, value, icon }: MoreItemData) {
  const Icon = icon;
  return (
    <div className="flex items-center flex-col gap-4 text-2xl font-bold rounded-2xl w-full p-4 bg-white">
      <div>
        <Icon />
      </div>
      <div className="text-primary uppercase text-lg">{title}</div>
      <div className="">{value}</div>
    </div>
  );
}
