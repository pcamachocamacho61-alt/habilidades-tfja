import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseExperience } from "@/components/course-experience";
import { onedriveDescubreSteps } from "@/data/onedrive-descubre";

type StepPageProps = {
  params: Promise<{
    toolId: string;
    levelId: string;
    stepId: string;
  }>;
};

export default async function StepPage({ params }: StepPageProps) {
  const { toolId, levelId, stepId } = await params;

  if (toolId !== "onedrive" || levelId !== "descubre") {
    notFound();
  }

  const step = onedriveDescubreSteps.find((item) => item.id === stepId);

  if (!step) {
    notFound();
  }

  return (
    <section>
      <Link
        href="/herramientas-digitales/onedrive"
        className="text-sm font-bold text-[#0b376d] hover:underline"
      >
        ← Regresar a OneDrive
      </Link>

      <div className="mt-6">
        <CourseExperience
          steps={onedriveDescubreSteps}
          currentStep={step}
        />
      </div>
    </section>
  );
}