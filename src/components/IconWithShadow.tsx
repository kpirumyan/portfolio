import { IconType } from "react-icons";

export default function IconWithShadow({ icon }: { icon: IconType }) {
  const Icon = icon;
  return (
    <div className="icon-with-shadow">
      <Icon size={20} className="text-tertiary" />
    </div>
  );
}
