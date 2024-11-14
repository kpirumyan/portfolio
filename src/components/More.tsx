import { MoreItem } from "@/components";
import { MoreItemData } from "@/interfaces";
import { FaUser, FaRProject, FaHeart, FaPencil } from "react-icons/fa6";

const more: MoreItemData[] = [
  { title: "Clients", value: 15, icon: FaUser },
  { title: "Experience", value: 7, icon: FaRProject },
  { title: "Projects", value: 28, icon: FaHeart },
  { title: "Line Of Code", value: 34755, icon: FaPencil },
];

export default function More() {
  return (
    <div className="grid grid-cols-4">
      {more.map((m) => (
        <MoreItem key={m.title} {...m} />
      ))}
    </div>
  );
}
