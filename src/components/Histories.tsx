import { HistoryData } from "@/interfaces";
import { History } from "@/components";

const histories: HistoryData = {
  education: [
    {
      title: "Ed1",
      subtitle: "Sub1",
      date: { from: "2002", to: "2202" },
      text: "Text1",
    },
  ],
  experience: [
    {
      title: "Exp1",
      subtitle: "Sub1",
      date: { from: "2002" },
      text: "Text1",
    },
    {
      title: "Exp2",
      subtitle: "Sub2",
      date: { from: "2002", to: "2202" },
      text: "Text2",
    },
  ],
};

export default function Histories() {
  return (
    <div className="grid grid-cols-2">
      <History data={histories.education} name="Education" />
      <History data={histories.experience} name="Experience" />
    </div>
  );
}
