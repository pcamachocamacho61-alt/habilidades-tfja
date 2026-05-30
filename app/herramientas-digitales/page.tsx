import { DigitalToolCard } from "@/components/digital-tool-card";
import { digitalTools } from "@/data/digital-tools";

export default function DigitalToolsPage() {
  return (
    <div className="relative overflow-hidden rounded-[32px] bg-white/35 p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_95%_30%,rgba(59,130,246,0.16),transparent_35%)]" />

      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-[#061b3a]">
          Explora, aprende y potencia tus habilidades
        </h2>

        <div className="mt-3 h-1 w-20 rounded-full bg-[#c78b3a]" />

        <p className="mt-4 text-sm font-semibold text-slate-600">
          Haz clic en un curso para comenzar o continuar tu aprendizaje.
        </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  {digitalTools.map((tool) => (
    <DigitalToolCard key={tool.id} tool={tool} />
  ))}
</div>
      </div>
    </div>
  );
}