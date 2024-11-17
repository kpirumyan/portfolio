import { ContactsInfoData } from "@/interfaces";
import { FaMailBulk } from "react-icons/fa";
import IconWithShadow from "@/components/IconWithShadow";
import { caveat } from "@/app/fonts";

const info: ContactsInfoData[] = [
  {
    title: "Address",
    value: "Marr str.5, Yerevan, Armenia",
    icon: FaMailBulk,
  },
  {
    title: "Freelance",
    value: "Available Right Now",
    icon: FaMailBulk,
  },
  {
    title: "Email",
    value: "k.pirumyan@gmail.com",
    icon: FaMailBulk,
  },
  {
    title: "Phone",
    value: "+(374) 93 640046",
    icon: FaMailBulk,
  },
];

export default function ContactsInfo() {
  return (
    <>
      {info.map(({ title, value, icon }) => (
        <div key={title} className="flex items-center gap-20 mb-10">
          <IconWithShadow icon={icon} />
          <div>
            <div className={`py-2.5 text-3xl font-bold ${caveat.className}`}>
              {title}
            </div>
            <div className="text-tertiary">{value}</div>
          </div>
        </div>
      ))}
    </>
  );
}
