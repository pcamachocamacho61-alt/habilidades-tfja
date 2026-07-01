import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseExperience } from "@/components/course-experience";
import { getToolRoute } from "@/data/tool-routes";

type StepPageProps = {
  params: Promise<{
    toolId: string;
    levelId: string;
    stepId: string;
  }>;
};

export default async function StepPage({ params }: StepPageProps) {
  const { toolId, levelId, stepId } = await params;
  const route = getToolRoute(toolId, levelId);

  if (!route) {
    notFound();
  }

  const step = route.steps.find((item) => item.id === stepId);

  if (!step) {
    notFound();
  }

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
          currentStep={step}
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
