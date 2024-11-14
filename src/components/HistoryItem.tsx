import { HistoryItemData } from "@/interfaces";
import { caveat } from "@/app/fonts";

export default function HistoryItem({
  title,
  subtitle,
  text,
  date,
}: HistoryItemData) {
  return (
    <div className="history-item-title">
      <h4 className=" p-8 cursor-pointer">{title}</h4>
      <div className="px-8 leading-10 font-bold">
        <span className={`text-3xl ${caveat.className}`}>{subtitle}</span>
        <span className="float-right text-sm leading-10 tracking-wider">
          {date.from} -{" "}
          {date.to || <span className="text-primary uppercase">Present</span>}
        </span>
      </div>
      <div className="px-8 py-4">{text}</div>
    </div>
  );
}
