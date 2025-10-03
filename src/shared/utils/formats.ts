export const formatBurned = (value?: string | number): string => {
  if (value == null) return "0";
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return "0";

  return num.toLocaleString("en-US", { maximumFractionDigits: 0 });
};


export const formatPrice= (value?: string | number): string => {
  if (value == null) return "$0.00";
  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return "$0.00";

  if (num >= 1_000_000_000) return `$${(num / 1_000_000_000).toFixed(2)}B`;
  if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(2)}M`;
  if (num >= 1_000) return `$${(num / 1_000).toFixed(2)}K`;

  if (num < 0.01) return `$${num.toFixed(6)}`;

  return `$${num.toFixed(2)}`;
};


export const formatPercentage = (value?: number, decimals = 2): string => {
  if (value == null || isNaN(value)) return "0%";
  return `${value.toFixed(decimals)}%`;
};


export const formatPriceChange = (value?: string | number, decimals = 2): string => {
  if (value == null) return "0%";

  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return "0%";

  const sign = num > 0 ? "+" : "";
  return `${sign}${num.toFixed(decimals)}%`;
};


export const formatTwoDecimals = (value?: string | number): string => {
  if (value == null) return "0.00";

  const num = typeof value === "string" ? parseFloat(value) : value;
  if (isNaN(num)) return "0.00";

  return num.toFixed(2);
};