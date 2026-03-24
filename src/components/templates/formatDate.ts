  export function formatDate(date: any) {
  if (!date) return "-";

  if (date instanceof Date) {
    return date.toLocaleDateString();
  }

  if (typeof date === "object" && "seconds" in date) {
    return new Date(date.seconds * 1000).toLocaleDateString();
  }

  return new Date(date).toLocaleDateString();
  }