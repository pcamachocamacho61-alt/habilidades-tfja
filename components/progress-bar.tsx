type ProgressBarProps = {
  value: number;
  variant?: "blue" | "bronze";
};

export function ProgressBar({ value, variant = "blue" }: ProgressBarProps) {
  const color = variant === "blue" ? "bg-[#0b376d]" : "bg-[#c78b3a]";

  return (
    <div className="w-full">
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}