import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseExperience } from "@/components/course-experience";
import { getToolRoute } from "@/data/tool-routes";

type LevelPageProps = {
  params: Promise<{
    toolId: string;
    levelId: string;
  }>;
};

export default async function LevelPage({ params }: LevelPageProps) {
  const { toolId, levelId } = await params;
  const route = getToolRoute(toolId, levelId);

  if (!route) {
    notFound();
  }

  const firstStep = route.steps[0];

  return (
    <section>
      <Link
        href={`/herramientas-digitales/${toolId}`}
        className="text-sm font-bold text-[#0b376d] hover:underline"
      >
        ← Regresar a {route.toolName}
      </Link>

      <div className="mt-6">
        <CourseExperience
          steps={route.steps}
          currentStep={firstStep}
          toolId={route.toolId}
          toolName={route.toolName}
          levelId={route.levelId}
          levelName={route.levelName}
          routeId={route.routeId}
          basePath={`/herramientas-digitales/${route.toolId}/${route.levelId}`}
        />
      </div>
    </section>
  );
}
