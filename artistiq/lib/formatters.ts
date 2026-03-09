export const formatCompact = (value: number): string =>
  new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value);

export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 1 }).format(value);

export const formatPercent = (value: number): string => `${value.toFixed(1)}%`;

export const formatDate = (input: string): string =>
  new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(new Date(input));

export const timeAgo = (minutes: number): string => `${minutes} min ago`;
