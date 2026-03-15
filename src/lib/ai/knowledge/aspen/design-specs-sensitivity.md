# Design Specs & Sensitivity — Aspen Plus Quick Reference
> CO2-to-methanol context: Reactor T optimization, column recovery specs, reflux ratio sensitivity

## When to Use This

| Tool | Purpose | Affects base case? |
|---|---|---|
| **Design Spec** | Hit a target value by adjusting one variable (Spec/Vary pair) | Yes |
| **Sensitivity** | Sweep a variable and tabulate results (what-if) | No |
| **Optimization** | Minimize/maximize an objective function | Yes |

Choose **Design Spec** when you know the target (e.g., 99 % methanol recovery). Choose **Sensitivity** when you want to explore a range first. Choose **Optimization** when you need to extremize an objective (e.g., maximize yield subject to constraints).

## Design Spec Setup (Spec/Vary Pairs)

A Design Spec is a flowsheet-level convergence loop: Aspen varies one input until a calculated expression equals a target.

**Steps (Navigation: Flowsheet > Design Spec > New)**

1. **Define sheet** — name variables that reference flowsheet results (stream mole fractions, block duties, etc.). Each gets a Fortran-style name (e.g., `RECOV`, `PURITY`).
2. **Spec sheet** — write the specification:
   - *Spec expression*: Fortran expression using defined variables (e.g., `RECOV`).
   - *Target*: the desired value.
   - *Tolerance*: convergence band (e.g., 0.0001).
3. **Vary sheet** — pick one manipulated input variable and set upper/lower bounds.

### Example: Column Recovery Design Spec
| Field | Entry |
|---|---|
| Define `RECOV` | Mole flow of MeOH in distillate stream / mole flow of MeOH in column feed |
| Spec | `RECOV` = 0.99 |
| Tolerance | 0.001 |
| Vary | Reflux ratio on block T-201, bounds 1.0–10.0 |

### Example: Reactor Outlet Temperature Spec
| Field | Entry |
|---|---|
| Define `TOUT` | Stream variable > Temperature of reactor outlet stream |
| Spec | `TOUT` = 250 (C) |
| Vary | Cooling duty on reactor R-201, bounds -1e7 to 0 W |

### RadFrac Built-In Design Specs
RadFrac has its own Design Specifications / Vary forms (under the block, not the flowsheet). You can specify purity, recovery, temperature on a stage, flow ratio, or property-set values directly. Manipulated variables include reflux ratio, distillate rate, bottoms rate, reboiler duty, side-draw rates, and feed-stream flow rates. Number of stages, pressure profile, and feed locations cannot be manipulated.

## Sensitivity Analysis Setup (Define/Vary/Tabulate)

Sensitivity blocks generate tables and/or plots without changing the base case.

**Steps (Navigation: Model Analysis Tools > Sensitivity > New)**

1. **Define sheet** — name the flowsheet variables you want to monitor (e.g., `MEOHPROD` = MeOH mass flow in product stream, `DUTY` = condenser duty).
2. **Vary sheet** — pick the input variable to sweep and set range:
   - Choose range type: equally spaced, log-spaced, or explicit list.
   - Example: Reactor inlet temperature from 200 to 300 C in 11 points.
   - Multiple varied variables create a full factorial grid — be cautious of combinatorial explosion (5 variables x 10 points = 100 000 runs).
3. **Tabulate sheet** — enter Fortran expressions or simply the defined variable names to appear in the results table.

### Example: Reflux Ratio Sensitivity
| Sheet | Entry |
|---|---|
| Define `PURITY` | Mole frac of MeOH in distillate |
| Define `DUTY` | Condenser duty of T-201 |
| Vary | Reflux ratio on T-201, range 1.5 to 8.0, 14 points |
| Tabulate | `PURITY`, `DUTY` |

### Example: Reactor Temperature Sweep
| Sheet | Entry |
|---|---|
| Define `YIELD` | MeOH mole flow out / CO2 mole flow in |
| Define `SEL` | MeOH mole flow out / (MeOH + byproduct mole flow out) |
| Vary | Reactor temperature (R-201 feed temperature), 200–300 C, 21 points |
| Tabulate | `YIELD`, `SEL` |

**Tip:** Use the Series option on the Options sheet to vary each variable independently instead of full factorial when you have multiple varied variables.

## Optimization Block

Use Optimization to minimize or maximize an objective function by manipulating flowsheet variables. Equality/inequality constraints can be imposed.

**Steps (Navigation: Model Analysis Tools > Optimization > New)**

1. **Define sheet** — name flowsheet variables needed for the objective function or constraints.
2. **Objective & Constraints sheet** — enter the objective expression and select Minimize or Maximize. Reference constraint IDs defined separately on the Constraint form.
3. **Vary sheet** — list manipulated variables with upper/lower bounds and step sizes.

### Example: Maximize Methanol Yield
| Sheet | Entry |
|---|---|
| Define `YIELD` | MeOH mass flow in product / total feed mass flow |
| Define `DUTY` | Total utility cost (heater + compressor duties) |
| Objective | Maximize `YIELD` |
| Vary | Reactor inlet T (200–300 C), Reflux ratio (2–8) |
| Constraint | `DUTY` <= 5e6 W |

**Solver choices:** SQP (default, gradient-based — best for smooth problems), Complex (derivative-free), BOBYQA (derivative-free, bound-constrained). For CO2-to-methanol flowsheets, SQP usually works well.

**Constraints** are defined in a separate Constraint block (Model Analysis Tools > Constraint). Each constraint has its own Define and Spec sheets, analogous to a Design Spec. Reference the constraint ID on the Optimization Objective & Constraints sheet.

## Referencing Flowsheet Variables

All three tools (Design Spec, Sensitivity, Optimization) access flowsheet variables the same way on the Define sheet:

1. **Type** — choose category: Stream-Var, Block-Var, or use the search icon.
2. **Stream or Block** — select the specific stream/block ID.
3. **Variable** — pick from the list (e.g., MOLE-FLOW, TEMP, DUTY, MOLE-FRAC).
4. **Component / Substream / Phase** — fill in IDs if the variable is a vector (e.g., component = MEOH, substream = MIXED).
5. **Units** — set on definition; locked after creation (does not change with global unit changes).

**Drag-and-drop shortcut:** Open two windows, drag a variable from a stream or block form directly into the Define grid.

**Common variable references for CO2-to-methanol:**
- Stream mole fraction: Stream-Var > MOLE-FRAC > component MEOH
- Stream temperature: Stream-Var > TEMP
- Block duty: Block-Var > NET-DUTY (reactor) or COND-DUTY / REB-DUTY (RadFrac)
- Component mass flow: Stream-Var > MASS-FLOW > component MEOH

## Common Problems & Fixes

| Problem | Cause | Fix |
|---|---|---|
| Design Spec won't converge | Vary bounds too narrow or target unreachable | Widen bounds; run Sensitivity first to confirm the target is feasible |
| Sensitivity takes very long | Too many varied variables creating huge factorial | Use Series option or reduce points; keep to 1–2 varied variables |
| Optimization oscillates | Poor initial guess or step size too large | Tighten bounds; set a smaller step size (fraction of range ~0.05); try BOBYQA |
| "Variable not accessible" error | Trying to vary an output or calculated variable | Only block inputs and feed stream variables can be manipulated |
| Varied values persist after run | Sensitivity/Optimization leaves variables at last value | Reinitialize before next run (Control Panel > Reinitialize) |
| RadFrac design spec not converging | Manipulated variable at bound | Check bounds on Vary form; ensure specification is achievable (run rating mode first) |

## Course-Specific Requirements

- **Project Milestone 2–3:** Use a Design Spec to set product purity (>= 99 mol% MeOH in distillate) by varying reflux ratio or distillate rate.
- **Sensitivity plots are expected** in reports: always include labeled axes, units, and a brief interpretation. Export the Sensitivity Results table to Excel for plotting.
- **Optimization is optional** but earns credit — frame it as "reactor temperature optimization to maximize single-pass conversion subject to equilibrium constraints."
- When documenting Design Specs, state the Spec/Vary pair explicitly: "DS-1 targets 99 % MeOH recovery by varying reflux ratio (bounds 2–8)."
- Always run the base case successfully before adding Design Specs or Optimization blocks.
