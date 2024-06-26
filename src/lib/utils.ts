import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { FormattedResult } from "../columns";
import { Quality, data } from "../data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Define a type for the Quality enum values
type QualityValue = "high" | "med" | "low";

const qualityMap: Record<Quality, QualityValue> = {
  [Quality.High]: "high",
  [Quality.Medium]: "med",
  [Quality.Low]: "low",
};

export const formatQuality = (quality: Quality): QualityValue => {
  return qualityMap[quality] || quality; // Return the mapped value or the original quality if not found
};

export const formattedData: FormattedResult[] = data.map((item) => ({
  ...item,
  sampleQuality: formatQuality(item.sampleQuality),
  scannedAt: item.scannedAt.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  score: item.score.toFixed(2),
  dateOfBirth: new Date(item.dateOfBirth).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
}));
