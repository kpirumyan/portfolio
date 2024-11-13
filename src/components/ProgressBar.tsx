export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="realtive h-0.5 bg-black/10">
      <div
        className={`block relative w-0 h-0.5 bg-black`}
        style={{ width: `${value}%` }}
      >
        <span className="border-2 border-black bg-primary rounded-full shadow-3 absolute right-0 -top-3 w-6 h-6"></span>
      </div>
    </div>
  );
}
