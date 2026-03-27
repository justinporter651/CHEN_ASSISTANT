# CHEN 4470 — Methanol Plant Design Assignment Breakdown

**Objective:** Design a facility producing 300,000 MT/yr of 99.85 wt% methanol via CO2 hydrogenation with green hydrogen, located at Theodore Industrial Park, Mobile County, AL.

**Reaction:** CO2 + 3H2 → CH3OH + H2O

---

## Phase 1: Foundations

| Deliverable | Workflow |
|---|---|
| Thermodynamic method selection | Evaluate SRK, PR, NRTL, PSRK, SR-POLAR. Must handle high-P gas (reactor) and liquid (separation). Validate against experimental VLE data (DECHEMA/NIST) at process conditions for key binaries: MeOH-H2O, CO2-MeOH, CO2-H2. |
| SDS summaries | Write brief summaries (not full SDSs) for CO2, H2, methanol, water, CO. |
| Background research | Methanol production methods, uses, markets; CO2 and H2 sourcing. |

---

## Phase 2: Reactor Design

| Deliverable | Workflow |
|---|---|
| Reactor selection (topological) | Compare ≥2 reactor types/configurations. **Not** isothermal packed-bed. Rank by NPV at 15% hurdle rate. |
| R-201 optimization (parametric) | Optimize T (200–300°C), P (50–100 bar), catalyst loading, dimensions. Use Aspen sensitivity analysis. Present NPV vs. each variable. Catalyst: $10/kg, replaced every 2 yr, void fraction 0.5, ρ=1775 kg/m³, d=5.4 mm. Pressure drop via Ergun. |
| Compression train | Design CO2 compression and H2 feed compression upstream of reactor. |

---

## Phase 3: Separation System

| Deliverable | Workflow |
|---|---|
| Separation config (topological) | Compare ≥2 configurations (e.g., single vs. double column, different flash/recycle arrangements). Rank by NPV. |
| Flash separation | Two-stage flash: V-201 (recycle) and V-202 (off-gas). No magic flash vessels — use valve + HX for pressure drops. Recycle compressor C-206 at 80% efficiency. |
| Product column T-201 (parametric) | Radfrac with trays (O'Connell efficiency), 75–80% flooding. 2 design spec/vary pairs using component recovery. Optimize stages, feed stage, reflux ratio. Max H/D = 20:1. Include reboiler, condenser, reflux drum, reflux pump (70% eff), distillate compressor, product condenser. |

---

## Phase 4: Heat Exchange & Utilities

| Deliverable | Workflow |
|---|---|
| HX sizing | <10 m² → double-pipe; ≥10 m² → shell-and-tube (1-2). Use prescribed U-values (condensing steam 6000, boiling water 7500, liquid organic 600, gas 60). ΔP: 35 kPa single-phase, negligible phase-change. |
| Heat integration | Evaluate process-to-process heat recovery and/or steam production opportunities. Compare alternatives by NPV. |
| Utility assignment | Assign LPS ($2.03/GJ), MPS ($2.78/GJ), HPS ($5.66/GJ), CW (30→40°C) to each exchanger. |

---

## Phase 5: Equipment Finalization

| Deliverable | Workflow |
|---|---|
| Pipe class & materials | Assign ASME B16.5 class and material for every process stream. Consider H2 embrittlement at high T/P. Default carbon steel unless conditions require upgrade. |
| Simulation verification | Converge with no errors/warnings. Mass balance closure <0.1%. Energy balance verified. Production rate within ±0.5% of target. |

---

## Phase 6: Economics

| Deliverable | Workflow |
|---|---|
| Equipment costing | Cost all equipment in Capcost. Itemize utility costs by equipment. |
| Cash flow & NPV | Revenue: MeOH at $800/MT. Raw materials: H2 $2/kg, CO2 credit $85/MT. 5-yr MACRS depreciation (20/32/19.2/11.52/11.52/5.76%). Tax: 27.5%. Working capital: 1-month raw materials + 10% FCI. FCI disbursement: 60% yr 1, 40% yr 2. Report DCFRoR, DPBP, ROR, PBP. |
| Sensitivity analysis | Monte Carlo on ≥3 parameters with justified ranges. Break-even CO2 credit analysis (find credit value where NPV = 0). |

---

## Phase 7: Safety

| Deliverable | Workflow |
|---|---|
| Process Safety Data Summary | Table covering all chemicals (CO2, H2, MeOH, H2O, CO). |
| HAZOP — Reactor system | R-201, E-205, E-206, C-206. Guide words (NO, MORE, LESS, AS WELL AS, PART OF, REVERSE, OTHER THAN) × parameters (Flow, T, P, Level, Composition, Phase). |
| HAZOP — Column system | T-201, E-207, E-208, V-203, P-201. Same guide word/parameter matrix. |
| Inherently safer design | Review using Minimize, Substitute, Moderate, Simplify principles. |

---

## Phase 8: Report Assembly

**Writing rules:** present tense, passive voice, no first person. Figures captioned at bottom, tables headed at top, all called out in text before appearing.

| Section | Key content |
|---|---|
| Cover memo | Signed by all members, includes key result |
| Abstract | Standalone — objective, key results, conclusions, recommendations. Write last. |
| Introduction | Objectives, background, chemistry, constraints, assumptions |
| Results | PFD (white background) → process description → stream tables → equipment table → utility table → pipe class table → NPV/economics |
| Discussion | Topological optimization (reactor + separation + heat integration, each with NPV table). Parametric optimization (sensitivity plots, optimal values). No new results. |
| Conclusions & Recommendations | Reiterate findings; reasoned next steps |

**Appendices (in order):**
1. Aspen report
2. Background on products/raw materials
3. Assumptions, constraints, ChE standards
4. Safety (SDS summaries, Process Safety Data Summary, both HAZOPs)
5. Waste & environmental
6. Societal implications
7. Thermo method justification with VLE validation
8. Additional as needed
9. References (last)

---

## Phase 9: Presentations

| Deliverable | Workflow |
|---|---|
| Oral presentation | All 4 members speak equal time. Brief slides — speaker amplifies verbally. Include backup slides for Q&A. PFD on white background. Prepare all members to answer any topic. |
| Poster | Readable from 5 ft (large sans-serif fonts). Key results at eye level. Logical left→right, top→bottom flow. Prepare 10 sentences / 60 seconds overview + 3 min remarks. Due for capstone session Apr 2, in-class Apr 21–23. |
| Q&A prep | All members prepared on: reactor choice rationale, economic drivers, thermo validation, safety concerns, optimization approach. |
