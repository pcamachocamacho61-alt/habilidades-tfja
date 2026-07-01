/**
 * Calcula el porcentaje de avance con base en los elementos
 * obligatorios completados.
 *
 * Cada paso, checkpoint y evaluación final cuentan como
 * un elemento obligatorio de la ruta.
 */
export function getProgressByCompletedIds(
  totalItems: number,
  completedIds: string[]
): number {
  if (totalItems <= 0) {
    return 0;
  }

  /*
   * Elimina identificadores repetidos para impedir
   * que un elemento incremente el avance más de una vez.
   */
  const uniqueCompletedIds = new Set(completedIds);

  const completedItems = Math.min(
    uniqueCompletedIds.size,
    totalItems
  );

  const progress = Math.round(
    (completedItems / totalItems) * 100
  );

  /*
   * Garantiza que el resultado se mantenga entre 0 y 100.
   */
  return Math.min(100, Math.max(0, progress));
}