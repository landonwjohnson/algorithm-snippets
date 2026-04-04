import type { JSX } from "react";
import { ConcatenationVisualizer } from "@/components/visualizers/ConcatenationVisualizer";
import { RelativeRanksVisualizer } from "@/components/visualizers/RelativeRanksVisualizer";
import { TwoSumVisualizer } from "@/components/visualizers/TwoSumVisualizer";

export type VisualizerComponent = () => JSX.Element;

export const visualizerRegistry: Record<string, VisualizerComponent> = {
  "concatenation-of-array": ConcatenationVisualizer,
  "relative-ranks": RelativeRanksVisualizer,
  "two-sum": TwoSumVisualizer
};
