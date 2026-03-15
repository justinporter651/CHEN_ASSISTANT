# Heat Exchangers — Aspen Plus Quick Reference
> CO2-to-methanol context: E-201 through E-209, reactor feed/effluent exchangers

## When to Use This
Consult when placing heat exchangers, choosing Heater vs HeatX, troubleshooting temperature crossings, or sizing exchangers with phase change. Key for CO2-to-methanol: reactor effluent cooling (partial condensation) and feed/effluent heat integration.

## HeatX vs Heater Selection

| Scenario | Block | Why |
|---|---|---|
| Target outlet T/P/vapor fraction; utility details unimportant | **Heater** | One-sided energy balance, minimal input |
| Two process streams exchanging heat | **HeatX** | Enforces energy balance on both sides; calculates area and LMTD |
| Utility heater/cooler needing UA or area | **HeatX** with utility | Replace one side with a utility on Setup > Specifications |
| Early flowsheet, recycle not yet converged | **Heater** stand-in | Swap to HeatX after recycle stabilizes |

**Rule of thumb:** Start with Heater blocks, upgrade to HeatX once the flowsheet converges.

## Step-by-Step Setup (HeatX Shortcut)

1. Place HeatX from Model Palette > Exchangers. Connect hot-in, hot-out, cold-in, cold-out.
2. Setup > Specifications: Calculation type = **Shortcut**, Flow direction = **Countercurrent**.
3. Provide exactly **one specification**: outlet T, vapor fraction, temp approach, duty, or area.
4. Enter pressure drops per side (or leave at 0).
5. Setup > U Methods: set overall U (constant value). Typical: gas-liquid ~150, liquid-liquid ~300, condensing ~500 BTU/hr-ft2-F.
6. After running, check TQ Curves (Results > TQ Curves) for temperature crossings.
7. For utility service: replace one side's streams with a utility on Setup > Specifications.

## Key Parameters

| Parameter | Location | Notes |
|---|---|---|
| Calculation type | Setup > Specifications | Shortcut, Detailed (legacy), Rigorous (EDR) |
| Flow direction | Setup > Specifications | Countercurrent, Cocurrent, Multiple passes |
| Overall U | Setup > U Methods | Constant, phase-specific, or power-law |
| LMTD correction F | Setup > LMTD | Constant for single-pass; calculated for multipass |
| TQ curve points | TQ Curves > Setup | Default 10; extra points added at dew/bubble transitions |

## Zone Analysis (Phase-Change Service)

When either stream undergoes a phase change, HeatX divides the exchanger into zones at each dew/bubble point and computes a flash table per side.

- Enable via **phase-specific U values** on Setup > U Methods. Each zone gets its own U.
- Flash table reports cumulative duty, temperature, vapor fraction, and pressure per point.
- Catches **internal temperature crossings** that inlet/outlet checks miss -- common when condensing a mixture against subcooled liquid.

## Common Problems & Fixes

| Symptom | Cause | Fix |
|---|---|---|
| "Temperature/duty curves cross at X degrees" | Internal T crossing (infeasible) | Reduce duty/area; increase flow; review TQ plot for pinch |
| Unexpectedly large area | U too low or temp approach too small | Use realistic U for phase pair; min approach >= 10 C |
| Block won't converge (rigorous mode) | Geometry over-constrains; poor estimates | Start with Shortcut, then switch to Rigorous |
| Zero or negative LMTD | Outlet temps violate feasibility | Verify hot-out > cold-in (countercurrent) |
| "LMTD correction factor below minimum" | Multipass exchanger near temp cross | Add shells in series or use countercurrent |
| HeatX destabilizes recycle loop | Rigorous block oscillates | Use Heater stand-in until recycle converges |

## Shortcut vs Rigorous

| Method | Needs | Best For |
|---|---|---|
| **Shortcut** | Streams + 1 spec + U | Class projects, preliminary design |
| **Rigorous** (EDR) | Full geometry via EDR input file | Final equipment rating, procurement |

For CHEN 4470, **Shortcut is almost always sufficient.**

## Course-Specific Requirements

- Justify your U-value choice. Typical ranges (BTU/hr-ft2-F): gas-gas 10-50, gas-liquid 50-300, liquid-liquid 150-1000, condensing 300-1500.
- Always check TQ curves for phase-change exchangers.
- Report **area**, **duty**, and **LMTD** for each exchanger in your design summary.
- For feed/effluent heat integration, verify minimum approach >= 10 C.
- Document U-value assumptions and sources in the design report.
