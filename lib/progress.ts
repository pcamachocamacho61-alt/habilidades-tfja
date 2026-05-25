export function getProgressByCompletedIds(
  totalItems: number,
  completedIds: string[]
): number {
  if (totalItems === 0) {
    return 0;
  }

  return Math.round((completedIds.length / totalItems) * 100);
}