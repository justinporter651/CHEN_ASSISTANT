import type { AgentType } from "@/lib/ai/types";

export interface TaskDefinition {
  id: string;
  title: string;
  description: string;
  category: string;
  agentType: AgentType;
  dependencies: string[];
}

// ============================================================
// Deliverable tasks for CO2-to-Methanol process design (Unit 200)
// Each maps to a specialist agent and has explicit dependencies.
// Equipment tags reference the team's PFD (Figure 1).
// ============================================================

export const TASK_GRAPH: TaskDefinition[] = [
  // -- FOUNDATIONS (4) ----------------------------------------
  {
    id: "thermo-method",
    title: "Select and justify thermodynamic method",
    description:
      "Choose a thermodynamic model (SRK, NRTL, PSRK, SR-POLAR, etc.) for the CO2/H2/methanol/water system. The method must handle both the high-pressure gas-phase reactor section and the liquid-phase methanol-water distillation. Reference Carlson (1996), Hill (2011), or Choudhari (2021). Document your choice and why alternatives were rejected.",
    category: "foundations",
    agentType: "thermo",
    dependencies: [],
  },
  {
    id: "thermo-validate",
    title: "Validate VLE predictions against experimental data",
    description:
      "Compare Aspen-predicted VLE to experimental data for key binary pairs: methanol-water, CO2-methanol, CO2-H2. Generate T-xy and/or P-xy plots at process-relevant conditions (reactor T/P and column T/P — not just ambient). Validate both the gas-phase and liquid-phase halves of the model. Source data from DECHEMA or NIST TDE.",
    category: "foundations",
    agentType: "thermo",
    dependencies: ["thermo-method"],
  },
  {
    id: "background-research",
    title: "Research methanol production background",
    description:
      "Research and document: methanol uses and markets, CO2 hydrogenation chemistry (CO2 + 3H2 -> CH3OH + H2O, plus reverse WGS), green hydrogen production, conventional vs. CO2-based methanol routes, and raw material specifications. This feeds the Introduction and Appendix 2.",
    category: "foundations",
    agentType: "writer",
    dependencies: [],
  },
  {
    id: "sds-summaries",
    title: "Write SDS summaries for all chemicals",
    description:
      "Write brief safety discussions of each chemical in the process: CO2, H2, methanol, water, and CO. For each, include molecular weight, boiling/melting/flash points, autoignition temperature, flammability limits (LEL/UEL), NFPA ratings, TWA/STEL exposure limits, and key hazards. These are summaries, not full SDSs.",
    category: "foundations",
    agentType: "safety",
    dependencies: [],
  },

  // -- REACTOR DESIGN (3) ------------------------------------
  {
    id: "reactor-design",
    title: "Compare and select reactor configuration (topological optimization)",
    description:
      "Compare at least two reactor types or configurations for CO2 hydrogenation to methanol (e.g., adiabatic PFR with intercooling, shell-and-tube PFR with coolant, multi-reactor cascade). No isothermal packed-bed reactors allowed. Determine the maximum allowable T and P (catalyst deactivation, decomposition, runaway). Justify the chosen configuration using NPV as the objective function.",
    category: "reactor",
    agentType: "design",
    dependencies: ["thermo-method"],
  },
  {
    id: "reactor-optimization",
    title: "Optimize R-201 operating conditions (parametric optimization)",
    description:
      "Parametrically optimize R-201: temperature (200-300 C), pressure (50-100 bar), length/volume, and catalyst loading. Calculate pressure drop via Ergun equation (void fraction 0.5, particle density 1775 kg/m3, diameter 5.4 mm). Use Aspen sensitivity analysis with NPV as the objective function. Present optimization results as plots. Also size the reactor feed preheater E-205 (HPS) and effluent cooler E-206 (CW) — reactions must be quenched after leaving the reactor.",
    category: "reactor",
    agentType: "aspen",
    dependencies: ["reactor-design"],
  },
  {
    id: "feed-compression",
    title: "Design CO2 compression train and H2 feed compression",
    description:
      "Design the 4-stage CO2 compression train: E-201 (feed vaporizer, LPS), C-201 through C-204 (compressors, 80% efficiency each), and intercoolers E-202 through E-204 (CW). Also design H2 feed compressor C-205. Determine compression ratios per stage, intercooler duties, and verify the combined feed reaches reactor inlet conditions. Apply 35 kPa pressure drop per HX side.",
    category: "reactor",
    agentType: "aspen",
    dependencies: ["thermo-method"],
  },

  // -- SEPARATION SYSTEM (3) ---------------------------------
  {
    id: "flash-separation",
    title: "Design flash separation and gas recycle system",
    description:
      "Design the two-stage flash separation: V-201 (recycle flash vessel, vertical, H/D 3:1-5:1) and V-202 (off-gas flash vessel). Design the gas recycle loop with C-206 (recycle compressor) feeding unreacted gases back to the reactor. Determine recycle ratio, purge fraction, and makeup flows. Size vessels for 5-10 min liquid holdup x2 for vapor space. No magic flash vessels — use valve + heat exchanger for each pressure drop. Provide good initial guesses on tear streams for Aspen convergence.",
    category: "separation",
    agentType: "design",
    dependencies: ["reactor-optimization"],
  },
  {
    id: "separation-comparison",
    title: "Compare separation sequence alternatives (topological)",
    description:
      "Compare at least two separation configurations for methanol purification (e.g., single-column vs. double-column, different flash arrangements, varying recycle structures). Evaluate each alternative using NPV as the objective function. Document the configurations considered, the assumptions made for each, and present an NPV comparison table. This is a topological optimization — you are comparing different flowsheet structures, not tuning parameters within one.",
    category: "separation",
    agentType: "design",
    dependencies: ["reactor-optimization"],
  },
  {
    id: "column-design",
    title: "Design and optimize product column T-201 (parametric optimization)",
    description:
      "Set up and optimize the methanol distillation column T-201 in Aspen (Radfrac). Target 99.85 wt% methanol distillate. Use 2 design spec/vary pairs with component RECOVERY (not purity). Parametrically optimize: number of stages, feed stage, reflux ratio. Size for 75-80% flooding using O'Connell tray efficiency (max H/D = 20:1). Calculate pressure drop from tray hydraulics. Size all column auxiliaries: E-207 (reboiler, LPS), E-208 (overhead condenser, CW), V-203 (reflux drum, horizontal, D/H 3:1-5:1), P-201 A/B (reflux pump, 70% eff, min power = 110% liquid head), C-207 (distillate compressor), and E-209 (product condenser, CW).",
    category: "separation",
    agentType: "aspen",
    dependencies: ["flash-separation", "separation-comparison"],
  },

  // -- HEAT EXCHANGE & UTILITIES (2) -------------------------
  {
    id: "hx-sizing-utilities",
    title: "Size all heat exchangers and assign utilities",
    description:
      "Size every heat exchanger (E-201 through E-209) using prescribed U-values: overall U = 1/(1/h_hot + 1/h_cold). HX < 10 m2 -> double-pipe; >= 10 m2 -> shell-and-tube (1-2 config). If phase change occurs, use zoned analysis. Apply 35 kPa pressure drop per side (single phase), negligible on phase-change side. Assign the correct utility to each: LPS ($2.03/GJ), MPS ($2.78/GJ), HPS ($5.66/GJ), or CW (30 C in, 40 C out). Itemize utility type and duty by equipment.",
    category: "heat-exchange",
    agentType: "design",
    dependencies: ["reactor-optimization", "column-design"],
  },
  {
    id: "heat-integration",
    title: "Analyze heat integration opportunities",
    description:
      "Identify heat integration opportunities: preheating reactor feed with reactor effluent, using column condenser heat, generating steam from the exothermic reactor. Both heat recovery between process streams and steam production count. Update the simulation if adding new process-to-process exchangers. Document what was considered and what was implemented, with NPV justification.",
    category: "heat-exchange",
    agentType: "design",
    dependencies: ["hx-sizing-utilities"],
  },

  // -- EQUIPMENT FINALIZATION (2) -----------------------------
  {
    id: "pipe-class-materials",
    title: "Assign pipe class and materials of construction",
    description:
      "Assign ASME B16.5 pipe class ratings (Class 150-2500) to every process stream based on T and P — including unnumbered streams within T-201 (reboiler return, condenser outlet, reflux). Select materials of construction for all equipment: carbon steel default unless conditions require upgrade. Consider hydrogen embrittlement at high T/P for R-201 and upstream equipment. Specify minimum and maximum design T and P for every piece of equipment (normal operation, startup, shutdown, and upset).",
    category: "equipment",
    agentType: "safety",
    dependencies: ["reactor-optimization", "column-design", "flash-separation"],
  },
  {
    id: "simulation-verification",
    title: "Verify simulation convergence, mass balance, and energy balance",
    description:
      "Verify the complete Aspen simulation converges without errors or warnings. Check all recycle loops (especially C-206 recycle), design specs, and calculator blocks. Verify mass balance closure (< 0.1% error) and energy balance closure. Confirm the production rate is within \u00B10.5% of the 300,000 MT/yr target. If anything doesn't close or meet spec, identify the problem blocks/streams and fix them. This is the gate before economics — the simulation must be solid.",
    category: "verification",
    agentType: "aspen",
    dependencies: [
      "feed-compression",
      "reactor-optimization",
      "flash-separation",
      "column-design",
      "heat-integration",
    ],
  },

  // -- ECONOMICS (3) -----------------------------------------
  {
    id: "equipment-utility-costing",
    title: "Cost all equipment in Capcost and itemize utility costs",
    description:
      "Use Capcost to determine equipment purchase costs for all major equipment (R-201, T-201, C-201-C-207, E-201-E-209, V-201-V-203, P-201). Capcost is required for the final design (Aspen Economics is OK for alternative comparisons). Calculate annual utility costs itemized by equipment: each reboiler, condenser, heater, and cooler with its utility type, duty, and annual cost. Stream factor = 0.92. Catalyst cost = $10/kg, replaced every 2 years.",
    category: "economics",
    agentType: "economics",
    dependencies: ["simulation-verification"],
  },
  {
    id: "npv-cash-flow",
    title: "Build cash flow table, calculate NPV, and create diagrams",
    description:
      "Build the year-by-year cash flow table: Revenue (methanol at $800/MT), Raw Materials (H2 at $2/kg, CO2 credit $85/MT), Utilities, Labor, Maintenance, Operating costs -> Gross Profit -> Depreciation (5-yr MACRS) -> Taxes (27.5%) -> Net Income -> Cash Flow. FCI disbursement 60%/40% over 2 years. Working capital = 1-month raw materials + 10% FCI (recovered in final year). Calculate NPV at 15% hurdle rate. Calculate supplementary measures: DCFRoR, DPBP, ROR, PBP. Create both undiscounted and discounted cumulative cash flow diagrams.",
    category: "economics",
    agentType: "economics",
    dependencies: ["equipment-utility-costing"],
  },
  {
    id: "sensitivity-breakeven",
    title: "Run Monte Carlo and break-even CO2 credit analysis",
    description:
      "Select 3+ parameters with largest impact on profitability (e.g., methanol price, H2 price, FCI, CO2 credit). Justify the range for each. Run Monte Carlo sensitivity analysis and present NPV probability distributions. Separately, find the break-even CO2 credit value ($/MT) where NPV = 0 — present as a plot of NPV vs. CO2 credit. These analyses show how robust (or fragile) the project economics are.",
    category: "economics",
    agentType: "economics",
    dependencies: ["npv-cash-flow"],
  },

  // -- SAFETY (4) --------------------------------------------
  {
    id: "process-safety-table",
    title: "Complete Process Safety Data Summary table",
    description:
      "Fill out the Process Safety Data Summary spreadsheet for all chemicals (CO2, H2, methanol, water, CO). Include: molecular weight, boiling/melting/flash points, autoignition temperature, flammability limits, NFPA ratings, exposure limits. Use the template from 06 Process safety resources/.",
    category: "safety",
    agentType: "safety",
    dependencies: ["sds-summaries"],
  },
  {
    id: "hazop-reactor",
    title: "HAZOP analysis on reactor system",
    description:
      "Conduct a HAZOP on the reactor system: R-201, E-205 (feed preheater), E-206 (effluent cooler), and C-206 (recycle compressor). For each node, apply guide words (NO, MORE, LESS, AS WELL AS, PART OF, REVERSE, OTHER THAN) to parameters (Flow, T, P, Level, Composition, Phase). Document causes, consequences, existing safeguards, and recommendations with severity/likelihood. This must be improved from the CHEN 4460 version.",
    category: "safety",
    agentType: "safety",
    dependencies: ["reactor-optimization", "pipe-class-materials"],
  },
  {
    id: "hazop-column",
    title: "HAZOP analysis on product column system",
    description:
      "Conduct a HAZOP on the product column system: T-201, E-207 (reboiler), E-208 (condenser), V-203 (reflux drum), and P-201 (reflux pump). Apply all guide words to all process parameters. Document causes, consequences, safeguards, and recommendations. This must be improved from the CHEN 4460 version.",
    category: "safety",
    agentType: "safety",
    dependencies: ["column-design", "pipe-class-materials"],
  },
  {
    id: "safety-review",
    title: "Inherently safer design review",
    description:
      "Review the entire process through inherently safer design principles: Minimize (reduce hazardous inventory), Substitute (less hazardous materials), Moderate (less severe T/P), Simplify (reduce complexity). Document what choices were made and why. Reference the HAZOP findings to show how safety was addressed in the design.",
    category: "safety",
    agentType: "safety",
    dependencies: ["hazop-reactor", "hazop-column"],
  },

  // -- REPORT SECTIONS (6) -----------------------------------
  {
    id: "report-intro",
    title: "Write introduction and process description",
    description:
      "Write the introduction (objectives, background, reaction chemistry, constraints, assumptions) and the process description (walk the reader through the PFD from CO2/H2 feed to methanol product, describing each unit operation and key conditions). Reference stream numbers and equipment tags. Use present tense, passive voice, no first person, recommendation framing.",
    category: "report",
    agentType: "writer",
    dependencies: ["background-research"],
  },
  {
    id: "pfd-stream-tables",
    title: "Finalize PFD and compile stream tables",
    description:
      "Finalize the Process Flow Diagram (white background, no template overlay, all equipment and stream numbers). Generate stream tables from Aspen with all process streams: T, P, total flow, component flows/compositions, phase. Format with table heading at top, aligned columns, consistent units/decimals. Call out the PFD figure and stream tables in text before they appear.",
    category: "report",
    agentType: "writer",
    dependencies: ["simulation-verification"],
  },
  {
    id: "report-specs-tables",
    title: "Compile equipment, utility, and pipe class tables",
    description:
      "Create three tables for the Results section: (1) Equipment specifications — tag, type, size/capacity, material, min/max design T and P, purchase cost for all equipment. (2) Utility specifications — equipment tag, utility type, duty, flow rate, annual cost for every HX/reboiler/condenser. (3) Pipe class — stream number, fluid, T, P, ASME B16.5 class, material for all streams including within T-201.",
    category: "report",
    agentType: "writer",
    dependencies: ["equipment-utility-costing", "pipe-class-materials"],
  },
  {
    id: "report-economics",
    title: "Write economic results section",
    description:
      "Write the economic results section presenting: NPV at 15% hurdle rate, cash flow table, cash flow diagrams (discounted + undiscounted), Monte Carlo sensitivity results with probability distributions, break-even CO2 credit analysis, and supplementary measures (DCFRoR, DPBP, ROR, PBP). No new calculations here — present and explain the results already computed. All figures called out before they appear, captions at bottom.",
    category: "report",
    agentType: "writer",
    dependencies: ["sensitivity-breakeven"],
  },
  {
    id: "report-discussion-conclusions",
    title: "Write discussion, conclusions, and recommendations",
    description:
      "Write the Discussion (justify all optimization choices — topological and parametric — with NPV comparisons; explain trade-offs; NO new results, only interpretation). Write Conclusions (nothing new — reiterate key findings concisely). Write Recommendations (reasoned next steps based on results — not wishes or incomplete work). These sections make the argument for why your final design is the best choice.",
    category: "report",
    agentType: "writer",
    dependencies: [
      "report-intro",
      "pfd-stream-tables",
      "report-specs-tables",
      "report-economics",
    ],
  },
  {
    id: "report-abstract",
    title: "Write abstract (must stand alone)",
    description:
      "Write the abstract last — it summarizes everything. Must stand alone so a reader understands the project from this alone. Include: objective, process overview, key numerical results (NPV, production rate, purity), main conclusions, and recommendation. Typically one concise paragraph.",
    category: "report",
    agentType: "writer",
    dependencies: ["report-discussion-conclusions"],
  },

  // -- APPENDICES (5) ----------------------------------------
  {
    id: "appendix-aspen",
    title: "Prepare Aspen report (Appendix 1)",
    description:
      "Generate the Aspen report in the prescribed format: full simulation input summary, block results, and stream results. Follow the specific format required by the instructor.",
    category: "appendices",
    agentType: "aspen",
    dependencies: ["simulation-verification"],
  },
  {
    id: "appendix-background-assumptions",
    title: "Write background and assumptions (Appendix 2 & 3)",
    description:
      "Write Appendix 2: background on methanol (product), CO2 and H2 (raw materials), production methods (CO2 hydrogenation vs. syngas route), uses and markets. Write Appendix 3: comprehensive table of all assumptions, constraints, and ChE standards applied, with discussion of how each was implemented in the design.",
    category: "appendices",
    agentType: "writer",
    dependencies: ["background-research", "simulation-verification"],
  },
  {
    id: "appendix-safety",
    title: "Compile safety appendix (Appendix 4)",
    description:
      "Assemble Appendix 4: SDS summaries for all chemicals, completed Process Safety Data Summary table, reactor HAZOP, and product column HAZOP. Ensure HAZOPs are improved from the 4460 versions. Organize with clear sub-headings.",
    category: "appendices",
    agentType: "safety",
    dependencies: ["safety-review", "process-safety-table"],
  },
  {
    id: "appendix-waste-societal",
    title: "Write waste/environmental and societal (Appendix 5 & 6)",
    description:
      "Write Appendix 5: waste stream identification (waste gas from V-201, waste water from T-201 bottoms), treatment/disposal methods, environmental impact, emissions estimates. Waste costs from current sources (NOT Table 8.3). Write Appendix 6: broader societal impact — public health, safety, welfare, global/cultural/social/environmental/economic dimensions of green methanol production.",
    category: "appendices",
    agentType: "writer",
    dependencies: ["simulation-verification"],
  },
  {
    id: "appendix-thermo",
    title: "Write thermo method justification (Appendix 7)",
    description:
      "Write Appendix 7: document the thermodynamic method selected, justification for choosing it over alternatives, and comparison to experimental VLE data. Include T-xy and/or P-xy plots for key binary pairs. Discuss both the liquid-phase and gas-phase halves of the model.",
    category: "appendices",
    agentType: "thermo",
    dependencies: ["thermo-validate"],
  },

  // -- PRESENTATIONS (3) -------------------------------------
  {
    id: "oral-slides",
    title: "Create oral presentation slides",
    description:
      "Create the oral presentation: title slide, outline slide (with 1-sentence abstract per section — not just headings), content slides, conclusions/recommendations, and backup slides for Q&A. PFD on a white background. All 4 team members speak approximately equal time. Slides should be brief — the speaker amplifies content verbally.",
    category: "presentations",
    agentType: "presentation",
    dependencies: ["report-discussion-conclusions"],
  },
  {
    id: "poster-design",
    title: "Design poster for capstone session",
    description:
      "Design the poster for the capstone poster session (April 2) and in-class session (April 21-23). Apply the 5-foot rule: readable from 5 feet. Large sans-serif fonts, clear images, key results at eye level, annotated graphics. Prepare 3 minutes of remarks and a 10/60 overview (10 sentences in 60 seconds).",
    category: "presentations",
    agentType: "presentation",
    dependencies: ["report-discussion-conclusions"],
  },
  {
    id: "qa-preparation",
    title: "Prepare all members for Q&A",
    description:
      "Prepare all 4 team members to answer questions on any topic: Why this reactor? What drives economics? How was thermo validated? Main safety concerns? How was the design optimized? Write concise answers to common questions as a reference sheet. Practice delivering clear, direct, correct answers. If you don't know, say so honestly.",
    category: "presentations",
    agentType: "presentation",
    dependencies: ["oral-slides"],
  },
];

// Index for quick lookup
export const TASK_MAP = Object.fromEntries(
  TASK_GRAPH.map((t) => [t.id, t])
);

// Get all task IDs
export const ALL_TASK_IDS = TASK_GRAPH.map((t) => t.id);

// Get tasks by category
export function getTasksByCategory(categoryId: string): TaskDefinition[] {
  return TASK_GRAPH.filter((t) => t.category === categoryId);
}
