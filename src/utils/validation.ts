export function formatBDT(amount: number): string {
  return '৳' + Number(amount).toLocaleString('en-IN');
}

export function isFutureOrTodayDate(dateStr: string): boolean {
  if (!dateStr) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const selected = new Date(dateStr + 'T00:00:00');
  return selected >= today;
}
