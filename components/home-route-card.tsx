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
      className={`group flex min-h-[288px] flex-col justify-between rounded-[25px] border border-white/80 border-b-4 ${accent} bg-white/80 p-6 text-center shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(15,23,42,0.16)]`}
    >
      <div>
        <div className="mx-auto mb-5 flex h-[92px] w-[92px] items-center justify-center">
          <Image
            src={iconSrc}
            alt={title}
            width={92}
            height={92}
            className="h-[92px] w-[92px] object-contain"
          />
        </div>

        <h2 className="text-[23px] font-bold leading-tight text-[#061b3a]">
          {title}
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-[15px] leading-6 text-slate-600">
          {description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className={`text-left text-[15px] font-semibold ${accent}`}>
          {label}
        </span>

        <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-2xl text-blue-700 shadow-lg transition group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
