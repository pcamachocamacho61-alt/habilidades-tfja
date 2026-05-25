import Link from "next/link";
import { notFound } from "next/navigation";
import { CourseExperience } from "@/components/course-experience";
import { onedriveDescubreSteps } from "@/data/onedrive-descubre";

type LevelPageProps = {
  params: Promise<{
    toolId: string;
    levelId: string;
  }>;
};

export default async function LevelPage({ params }: LevelPageProps) {
  const { toolId, levelId } = await params;

  if (toolId !== "onedrive" || levelId !== "descubre") {
    notFound();
  }

  const firstStep = onedriveDescubreSteps[0];

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
          currentStep={firstStep}
        />
      </div>
    </section>
  );
}