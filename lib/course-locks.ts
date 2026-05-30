import { LearningStep } from "@/types/learning";

export function isBlockCompleted(
  steps: LearningStep[],
  completedIds: string[],
  blockNumber: 1 | 2 | 3
) {
  const blockSteps = steps.filter((step) => step.block === blockNumber);

  return blockSteps.every((step) => completedIds.includes(step.id));
}

export function isStepLocked(
  step: LearningStep,
  steps: LearningStep[],
  completedIds: string[]
) {
  const blockOneCompleted = isBlockCompleted(steps, completedIds, 1);
  const blockTwoCompleted = isBlockCompleted(steps, completedIds, 2);

  if (step.block === 1) {
    return false;
  }

  if (step.block === 2) {
    return !blockOneCompleted;
  }

  if (step.block === 3) {
    return !blockTwoCompleted;
  }

  return false;
}