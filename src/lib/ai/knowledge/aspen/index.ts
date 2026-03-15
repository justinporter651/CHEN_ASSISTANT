import { readFileSync } from "fs";
import { join } from "path";

export interface KnowledgeTopic {
  id: string;
  file: string;
  keywords: string[];
  description: string;
}

/**
 * Registry of distilled Aspen Plus knowledge files.
 * Each topic has keywords used for matching against user messages.
 */
export const ASPEN_TOPICS: KnowledgeTopic[] = [
  {
    id: "radfrac-columns",
    file: "radfrac-columns.md",
    keywords: [
      "radfrac", "column", "distillation", "separation", "tray", "packing",
      "reflux", "stages", "flooding", "reboiler", "condenser", "bottoms",
      "distillate", "recovery", "purity", "T-201", "feed stage",
    ],
    description: "RadFrac column setup, design specs, sizing, convergence",
  },
  {
    id: "reactors-kinetics",
    file: "reactors-kinetics.md",
    keywords: [
      "reactor", "rplug", "rcstr", "kinetics", "reaction", "catalyst",
      "packed bed", "ergun", "pressure drop", "conversion", "selectivity",
      "R-201", "temperature profile", "power law", "arrhenius",
    ],
    description: "Reactor setup, kinetics entry, pressure drop, catalyst",
  },
  {
    id: "convergence-troubleshooting",
    file: "convergence-troubleshooting.md",
    keywords: [
      "convergence", "converge", "error", "won't converge", "not converging",
      "tear stream", "wegstein", "broyden", "recycle", "tolerance",
      "diverge", "oscillat", "max iterations", "sequential",
    ],
    description: "Convergence strategies, tear streams, error diagnosis",
  },
  {
    id: "heat-exchangers",
    file: "heat-exchangers.md",
    keywords: [
      "heat exchanger", "heatx", "heater", "cooler", "lmtd", "u-value",
      "utility", "steam", "cooling water", "shell and tube", "double pipe",
      "zoned", "phase change", "E-201", "E-202", "E-203", "duty",
    ],
    description: "HeatX vs Heater, U-values, zoned analysis, utilities",
  },
  {
    id: "compressors-pumps",
    file: "compressors-pumps.md",
    keywords: [
      "compressor", "pump", "mcompr", "compr", "multistage", "intercool",
      "isentropic", "polytropic", "efficiency", "discharge", "suction",
      "C-201", "C-202", "C-203", "C-204", "C-205", "C-206", "P-201",
    ],
    description: "Compressor and pump setup, multistage compression",
  },
  {
    id: "design-specs-sensitivity",
    file: "design-specs-sensitivity.md",
    keywords: [
      "design spec", "sensitivity", "optimization", "vary", "define",
      "tabulate", "objective", "constraint", "flowsheet variable",
      "sensitivity analysis", "optimize", "parametric",
    ],
    description: "Design specs, sensitivity analysis, optimization blocks",
  },
  {
    id: "flowsheet-setup",
    file: "flowsheet-setup.md",
    keywords: [
      "flowsheet", "setup", "stream", "block", "connect", "feed",
      "unit system", "run control", "material stream", "heat stream",
      "work stream", "new simulation", "getting started",
    ],
    description: "Flowsheet creation, stream connections, run controls",
  },
  {
    id: "property-methods",
    file: "property-methods.md",
    keywords: [
      "property method", "thermodynamic", "srk", "peng robinson", "nrtl",
      "uniquac", "psrk", "component", "databank", "henry", "binary",
      "interaction parameter", "eos", "activity coefficient",
    ],
    description: "Property method selection, components, databanks",
  },
];

const knowledgeDir = join(__dirname, ".");

/**
 * Load the content of a knowledge file by topic ID.
 * Returns empty string if file doesn't exist.
 */
export function loadTopicContent(topicId: string): string {
  const topic = ASPEN_TOPICS.find((t) => t.id === topicId);
  if (!topic) return "";

  try {
    return readFileSync(join(knowledgeDir, topic.file), "utf-8");
  } catch {
    console.warn(`Knowledge file not found: ${topic.file}`);
    return "";
  }
}
