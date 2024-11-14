import { HistoryItemData } from "@/interfaces";
import { HistoryItem } from "@/components";

export default function History({
  data,
  name,
}: {
  data: HistoryItemData[];
  name: string;
}) {
  return (
    <div className="p-10">
      <h3 className="text-center pb-8 border-b-2 border-black">{name}</h3>

      {data.map((history) => (
        <HistoryItem key={history.title} {...history} />
      ))}
    </div>
  );
}
