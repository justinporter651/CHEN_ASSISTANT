# Property Methods — Aspen Plus Quick Reference
> CO2-to-methanol context: SRK/PR for reactor loop, NRTL for methanol-water column

## When to Use This
Refer to this guide when setting up the Properties environment in Aspen Plus for the CO2 hydrogenation to methanol process. The process spans two thermodynamic regimes:
- **High-pressure reactor loop** (~50-100 bar): CO2, H2, CO, methanol, water over a Cu/ZnO/Al2O3 catalyst — use an equation-of-state method.
- **Low-pressure separation** (~1-5 bar): methanol-water distillation — use an activity-coefficient method.

## Method Selection Guide

| Flowsheet Section | Recommended Method | Why | Alternatives |
|---|---|---|---|
| Reactor loop (high P, gases + polar liquids) | **RKS-BM** or **PR-BM** | EOS handles high pressure and supercritical H2/CO2 natively; BM (Boston-Mathias) alpha improves accuracy for polar components | PENG-ROB, RK-SOAVE |
| Methanol-water distillation column | **NRTL** | Activity-coefficient method; good for polar, non-electrolyte liquid mixtures; handles methanol-water azeotropic behavior | UNIQUAC, WILSON |
| Entire flowsheet (single-method compromise) | **PSRK** | Predictive SRK combines an EOS with UNIFAC activity-coefficient mixing rules; handles both high-pressure gases and polar liquids in one method | PRWS, RKSWS, SR-POLAR |

### Choosing a single method vs. multiple methods
- **Single method (PSRK):** Simpler setup, adequate accuracy for experiment design and coursework. Good starting point.
- **Two methods via Flowsheet Sections:** Assign RKS-BM or PR-BM to the reactor section, NRTL to the separation section. More accurate but requires configuring flowsheet sections (Methods > Specifications > Flowsheet Sections sheet).

## Component Specification

Add all components on **Components > Specifications > Selection** sheet:

| Component ID | Formula | Alias | Type |
|---|---|---|---|
| CO2 | CO2 | CO2 | Conventional |
| H2 | H2 | H2 | Conventional |
| MEOH | CH3OH | METHANOL | Conventional |
| H2O | H2O | WATER | Conventional |
| CO | CO | CO | Conventional |
| N2 | N2 | N2 | Conventional (if inert is modeled) |

- Use **Component ID** names that are short and readable on flowsheet streams (e.g., MEOH not METHANOL).
- Aspen auto-fills the alias and name when an exact databank match is found for the Component ID.

## Databank Selection

The default databank search order works for this system. Verify on **Components > Specifications > Databanks** sheet:

1. **PURE39** (or latest PURE version) — primary source for common chemicals
2. **AQUEOUS** — useful if electrolyte chemistry is added later
3. **SOLIDS** — not needed for this process, can be left active without harm
4. **INORGANIC** — contains parameters for CO2, CO, H2

Keep the default order. No custom or COMBUSTION databanks are needed for the methanol synthesis system.

## Henry Components for Dissolved Gases

When using an **activity-coefficient method** (NRTL, UNIQUAC, WILSON) for sections containing dissolved gases, Henry's law must be applied for supercritical components in the liquid phase.

### Which components need Henry's law
Any component above its critical temperature at process conditions is supercritical and requires Henry's law treatment:
- **H2** (Tc = 33 K) — always supercritical at process temperatures
- **CO** (Tc = 133 K) — always supercritical at process temperatures
- **CO2** (Tc = 304 K) — supercritical above ~31 C; treat as Henry component in the distillation section

### How to set up Henry components
1. Go to **Components > Henry Comps** in the navigation pane.
2. Create a new Henry component set (e.g., ID = `HC-1`).
3. Add **H2**, **CO**, and **CO2** to the set.
4. On **Methods > Specifications > Global** (or Flowsheet Sections) sheet, select the Henry component set in the **Henry Components** dropdown.

### Key detail
EOS methods (RKS-BM, PR-BM, PSRK) do **not** require Henry component specification — they handle supercritical components natively through the equation of state. Henry components are only needed when using activity-coefficient methods like NRTL.

## Common Problems & Fixes

| Problem | Cause | Fix |
|---|---|---|
| Flash convergence errors near reactor conditions | Activity-coefficient method used at high pressure with supercritical gases | Switch reactor section to EOS method (RKS-BM/PR-BM), or define Henry components |
| Missing binary interaction parameters warning | NRTL/UNIQUAC needs BIPs for each pair | Check Methods > Parameters > Binary Interaction; use UNIFAC estimation if data unavailable (Methods > Estimation) |
| Unrealistic methanol-water separation | Wrong property method in distillation column | Ensure NRTL (not an EOS) is used for the column; verify MEOH-H2O BIPs are loaded from databank |
| "No Henry's law parameters" error | Henry components defined but Aspen lacks Henry parameters for the solvent pair | Run property estimation (Methods > Estimation) or use PSRK instead |
| Very slow convergence in recycle loop | Property method mismatch at section boundaries | Ensure stream property methods are consistent at section transitions |
| CO2 liquid-phase fugacity wrong | CO2 treated as condensable in activity-coefficient method without Henry's law | Add CO2 to Henry component list for the NRTL section |

## Course-Specific Requirements

- **Experiment 1 (reactor study):** A single PSRK or RKS-BM method is sufficient since the focus is on reaction conversion, not downstream separation accuracy.
- **Full process simulation:** Use flowsheet sections — EOS for reactor loop, NRTL for distillation — to get accurate VLE in both regimes.
- **Report expectation:** Justify your property method choice by referencing the system characteristics (high-pressure gases, polar liquid mixture, supercritical components).
- **Sensitivity check:** Run a property analysis (methanol-water Txy or Pxy diagram) to verify your method reproduces expected VLE behavior before building the full flowsheet.
