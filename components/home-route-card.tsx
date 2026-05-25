import Image from "next/image";
import Link from "next/link";

type HomeRouteCardProps = {
  title: string;
  description: string;
  href: string;
  label: string;
  variant: "blue" | "bronze";
  iconSrc: string;
};

export function HomeRouteCard({
  title,
  description,
  href,
  label,
  variant,
  iconSrc,
}: HomeRouteCardProps) {
  const accent =
    variant === "blue"
      ? "border-b-blue-500 text-blue-700"
      : "border-b-[#c78b3a] text-[#a66f24]";

  return (
    <Link
      href={href}
      className={`group flex min-h-[310px] flex-col justify-between rounded-[28px] border border-white/80 border-b-4 ${accent} bg-white/80 p-8 text-center shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.16)]`}
    >
      <div>
        <div className="mx-auto mb-7 flex h-24 w-24 items-center justify-center">
          <Image
            src={iconSrc}
            alt={title}
            width={96}
            height={96}
            className="h-24 w-24 object-contain"
          />
        </div>

        <h2 className="text-3xl font-bold leading-tight text-[#061b3a]">
          {title}
        </h2>

        <p className="mx-auto mt-5 max-w-xs text-base leading-7 text-slate-600">
          {description}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className={`text-left text-sm font-semibold ${accent}`}>
          {label}
        </span>

        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-3xl text-blue-700 shadow-lg transition group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}