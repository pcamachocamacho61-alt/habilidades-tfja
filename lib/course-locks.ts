import { LearningStep } from "@/types/learning";

export function isBlockCompleted(
  steps: LearningStep[],
  completedIds: string[],
  blockNumber: 1 | 2 | 3
): boolean {
  const uniqueCompletedIds = new Set(completedIds);
  const blockSteps = steps.filter((step) => step.block === blockNumber);

  return blockSteps.length > 0 && blockSteps.every((step) => uniqueCompletedIds.has(step.id));
}

export function arePreviousStepsCompleted(
  step: LearningStep,
  steps: LearningStep[],
  completedIds: string[]
): boolean {
  const currentIndex = steps.findIndex((item) => item.id === step.id);

  if (currentIndex === -1) return false;
  if (currentIndex === 0) return true;

  const uniqueCompletedIds = new Set(completedIds);
  return steps.slice(0, currentIndex).every((item) => uniqueCompletedIds.has(item.id));
}

export function isStepLocked(
  step: LearningStep,
  steps: LearningStep[],
  completedIds: string[]
): boolean {
  if (completedIds.includes(step.id)) return false;
  return !arePreviousStepsCompleted(step, steps, completedIds);
}
