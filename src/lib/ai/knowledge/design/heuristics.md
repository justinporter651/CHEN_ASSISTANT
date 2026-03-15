# Design Heuristics — CHEN 4470 Quick Reference
> Equipment sizing and selection rules of thumb (Turton Ch. 11 / Couper et al.)

## Vessels (Drums & Tanks)

| Parameter | Guideline |
|---|---|
| L/D ratio | 2.5–5.0 (optimum ~3) |
| Orientation | Liquid service → horizontal; gas-liquid separation → vertical |
| Liquid holdup | 5 min half-full for reflux drums & G/L separators; 5–10 min feeding another tower; 30 min feeding a furnace |
| Knockout drums | Hold ≥ 10× liquid volume per minute (before compressors) |
| Gas velocity (G/L sep.) | v = k√((ρ_L − ρ_G)/ρ_G); k = 0.11 w/ mesh, 0.035 without |
| Operating % of calc. velocity | 75% typical (range 30–100%) |
| L-L settling velocity | 0.085–0.127 cm/s |

**Pressure vessel design:** Design T = operating + 25 °C; Design P = operating + 10% or + 0.69–1.7 bar (whichever greater); vacuum = 1 barg + full vacuum. Corrosion allowance: 8.9 mm (corrosive), 3.8 mm (non-corrosive).

## Heat Exchangers

| Parameter | Guideline |
|---|---|
| LMTD correction (F) | F = 0.9 default; reconfigure if F < 0.85 |
| Min approach ΔT | 10 °C (process); 5 °C (refrigerants) |
| Tube side | Corrosive, fouling, scaling, high-P fluids |
| Shell side | Viscous and condensing fluids |
| Pressure drop | 0.1 bar (boiling); 0.2–0.62 bar (other) |
| CW inlet / outlet | 30 °C in, 45 °C max out |

**Estimating U values (W/m²·°C):**

| Service | U |
|---|---|
| Water-to-liquid | 850 |
| Condensers | 850 |
| Liquid-to-liquid | 280 |
| Liquid-to-gas | 60 |
| Gas-to-gas | 30 |
| Reboilers | 1140 |

Double-pipe competitive at 9.3–18.6 m². Air coolers: min approach 22 °C.

## Distillation Columns

| Parameter | Guideline |
|---|---|
| R/R_min (optimum) | 1.2–1.5 |
| N/N_min (optimum) | ~2.0 |
| Tray spacing | 0.5–0.6 m |
| Tray ΔP | ~0.007 bar per tray |
| Tray efficiency | 60–90% (distillation); 10–20% (absorption) |
| Max tower height | 53 m; L/D < 30 |
| Safety factors | +10% trays, +10% reflux pump |
| Operating pressure | Set by condenser (38–50 °C for CW) or max reboiler T |
| Flooding (packed) | Operate near 70% of flood |

Packed: HETS 0.4–0.56 m (1 in pall rings), 0.76–0.9 m (2 in). D_tower/D_packing > 15:1. Tray types: valve (cheapest), sieve, bubble cap (low-turndown only).

## Reactors

| Parameter | Guideline |
|---|---|
| CSTR proportions | L = D at low-moderate P |
| CSTR mixing power | 0.1–0.3 kW/m³; 3× with heat transfer |
| CSTR battery | 4–5 in series ≈ plug-flow |
| Catalyst size | 0.1 mm (fluidized), 1 mm (slurry), 2–5 mm (fixed bed) |
| Temp. rule | Rate doubles per 10 °C |

Batch for small/slow; PFR for high throughput + short residence + high heat transfer.

## Compressors & Pumps

**Compressors:**

| Parameter | Guideline |
|---|---|
| Fans | ΔP ≈ 3% (30 cm H₂O) |
| Blowers | ΔP < 2.75 bar |
| Compression ratio per stage | ~4 max (exit T ≤ 204 °C) |
| Multistage ratio | r = (P_n/P_1)^(1/n) per stage |
| Reciprocating η | 65% (r = 1.5), 75% (r = 2), 80–85% (r = 3–6) |
| Large centrifugal η | 76–78% |

**Pumps:**

| Type | Max head | Efficiency |
|---|---|---|
| Centrifugal (single) | 152 m | 45% @100 gpm → 80% @10k gpm |
| Centrifugal (multi) | 1675 m | same curve |
| Rotary | 15,200 m | 50–80% |
| Reciprocating | very high | 70–90% (scales with hp) |

NPSH: 1.2–6.1 m. Power: kW = 1.67 × Q(m³/min) × ΔP(bar) / η.

**Drivers:** Electric motors almost exclusively < 75 kW; η = 85–95%. Steam turbines competitive > 75 kW; η = 42–78%. Gas turbines η = 28–38%.

## Piping

| Service | Velocity | ΔP |
|---|---|---|
| Pump discharge (liquid) | (5 + D/3) ft/s | 2.0 psi/100 ft |
| Pump suction (liquid) | (1.3 + D/6) ft/s | 0.4 psi/100 ft |
| Gas / steam | 20D ft/s (~61 m/s) | 0.5 psi/100 ft |

- Preliminary: 30 m equivalent length between equipment. Control valves: min 0.69 bar drop.
- Globe valves for gas/control; gate valves elsewhere. Schedule 40 most common.

## Materials of Construction

| Material | Best for | Avoid |
|---|---|---|
| Carbon steel | Default; alkali; abrasion | Acids, strong alkali |
| Stainless steel | Most acids; low contamination | Chlorides; cost |
| Monel / Nickel | Chloride resistance | Oxidizing environments |
| Hastelloy | Severe corrosion | High cost |

## General Process Design Rules

- **Cooling water:** Supply 27–32 °C, return ≤ 45–52 °C
- **Steam levels:** LP 1–2 barg (121–135 °C); MP 10 barg (186 °C); HP 27.6 barg (231 °C)
- **Refrigerants:** Brine/glycol (−18 to −10 °C); NH₃/butane (−45 to −10 °C); ethane/propane (−100 to −45 °C); cascades below −62 °C

## Course-Specific Requirements

- These heuristics are for **checking** Aspen simulation results, not replacing them
- Flag any equipment parameter that deviates significantly from heuristic ranges
- For the CO₂-to-methanol process: pay special attention to high-pressure reactor design (compression ratios, MOC for CO₂/H₂/methanol service), heat integration across the exothermic reactor, and distillation column sizing for methanol-water separation
- Always report both calculated values and the applicable heuristic range when presenting equipment specifications
