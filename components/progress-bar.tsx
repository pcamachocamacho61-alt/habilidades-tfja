type ProgressBarProps = {
  value: number;
  variant?: "blue" | "bronze";
  label?: string;
};

export function ProgressBar({
  value,
  variant = "blue",
  label = "Avance",
}: ProgressBarProps) {
  const color = variant === "blue" ? "bg-[#0b376d]" : "bg-[#c78b3a]";
  const normalizedValue = Math.min(100, Math.max(0, Number.isFinite(value) ? value : 0));

  return (
    <div className="w-full">
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-slate-200"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={normalizedValue}
      >
        <div
          className={`h-full rounded-full transition-[width] duration-300 ${color}`}
          style={{ width: `${normalizedValue}%` }}
        />
      </div>
    </div>
  );
}
