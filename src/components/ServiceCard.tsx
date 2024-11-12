import { ServiceData } from "@/interfaces";
import Image from "next/image";

export default function ServiceCard({
  data: { title, icon, description },
}: {
  data: ServiceData;
}) {
  return (
    <div className="col-span-3">
      <div className="text-center">{icon}</div>
      <div className="text-center">{title}</div>
      <div>{description}</div>
      <div>
        <Image
          src="/pat-2.png"
          alt="Image decoration"
          width={141}
          height={141}
          className=""
        />
      </div>
    </div>
  );
}
