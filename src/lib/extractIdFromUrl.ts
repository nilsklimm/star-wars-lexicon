export const extractIdFromUrl = (url?: string): string | null =>
  url?.match(/\/api\/[^\/]+\/(\d+)\/?$/)?.[1] ?? null;
