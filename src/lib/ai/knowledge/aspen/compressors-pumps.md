# Compressors & Pumps — Aspen Plus Quick Reference
> CO2-to-methanol context: 4-stage CO2 train (C-201–C-204), H2 compressor (C-205), recycle compressor (C-206)

## When to Use This
Consult this reference when setting up compressor or pump blocks, choosing between Compr and MCompr, specifying efficiencies or discharge conditions, or troubleshooting compressor convergence. Especially relevant for the CO2 compression train (atmospheric to ~50 bar in 4 stages with intercooling) and the recycle gas compressor that overcomes reactor-loop pressure drop.

## Compressor Setup (block > tab > field)

### Choosing the Block
| Block | Use When |
|---|---|
| **Compr** | Single-stage compressor or turbine. Use for H2 compressor (C-205) or recycle compressor (C-206) where one stage suffices. |
| **MCompr** | Multistage compressor with intercooling. Use for the CO2 compression train (C-201–C-204) where intermediate cooling keeps temperatures manageable. |

### Compr Setup — Key Fields
1. **Setup > Specifications > Model**: Choose Isentropic, Polytropic (centrifugal), or Polytropic (positive displacement).
2. **Setup > Specifications > Discharge specification**: Discharge pressure, pressure ratio, or power. Pressure ratio = P_out / P_in (must be > 1 for compression).
3. **Setup > Specifications > Efficiency**: Isentropic or polytropic efficiency (default 0.72). Mechanical efficiency (default 1.0). Enter as fraction, not percentage.
4. **Setup > Calculation Options**: Select calculation method — Mollier-based (most rigorous for isentropic), ASME (rigorous for polytropic), GPSA (simpler), or piecewise integration.

### Compressor Types — When to Pick Each
| Type | Method | Best For |
|---|---|---|
| **Isentropic** | Mollier-based (default) | General-purpose; simplest; most common for student projects |
| **Polytropic (centrifugal)** | ASME or GPSA | Centrifugal compressors when vendor polytropic efficiency is known |
| **Polytropic (pos. displacement)** | GPSA or integration | Reciprocating compressors |

For CHEN 4470 projects, **isentropic** with the Mollier method is the standard choice unless your instructor specifies otherwise.

## Multistage Compression with Intercooling

### Why Multistage?
Compressing CO2 from ~1 bar to ~50 bar in a single stage produces extreme outlet temperatures (potentially > 300 °C), damaging equipment and wasting energy. Splitting across 4 stages with intercooling to ~40 °C between stages keeps discharge temperatures reasonable and reduces total work.

### MCompr Setup
1. **Setup > Specifications > Number of stages**: Set to 4 for the CO2 train.
2. **Setup > Specifications > Type**: Isentropic (recommended) or Polytropic for each stage.
3. **Setup > Specifications > Discharge specification**: Specify the final discharge pressure from the last stage. Use **equal pressure ratio** or **equal head** among intermediate stages (available in recent Aspen versions on the Setup sheet). Equal pressure ratio is the most common approach.
4. **Setup > Specifications > Efficiency**: Specify isentropic or polytropic efficiency per stage (default 0.72).
5. **Cooler specifications**: Specify intercooler outlet temperature (e.g., 40 °C) and cooler pressure drop (e.g., 0.1–0.5 bar per cooler). If cooler pressure drop >= stage outlet pressure, Aspen sets it to 0 and flags an error.

### Pressure Ratio Rule of Thumb
For N stages with inlet pressure P1 and final pressure P2, each stage has approximately equal pressure ratio:
```
r_stage = (P2 / P1)^(1/N)
```
Example: 1 bar to 50 bar in 4 stages → r ≈ 50^(1/4) ≈ 2.66 per stage.

## Pump Setup

### When to Use Pump vs. Heater for Pressure Change
- Use **Pump** when you need power requirement, efficiency, or NPSH calculations.
- Use **Heater** (or Valve) for simple pressure changes where energy details are not needed.

### Pump Setup — Key Fields
1. **Setup > Specifications > Pump type**: Pump (default) or Turbine.
2. **Setup > Specifications > Discharge specification**: Discharge pressure, pressure increase, pressure ratio, or power.
3. **Setup > Specifications > Efficiency**: Pump efficiency (enter as fraction). Default is typically 0.72–0.85 for centrifugal pumps in process design.
4. **Setup > Specifications > Driver type**: (optional) Electric motor, steam turbine, etc.

Pump handles single liquid phase by default. For two-phase or three-phase, change Valid Phases on Setup > Convergence, but accuracy depends on conditions.

### NPSH Check
NPSH_available = (P_inlet - P_vapor) / (ρg) + H_velocity + H_static. NPSH_available must exceed NPSH_required to avoid cavitation. Specify suction specific speed (Nss, typical 8500 US units) on Setup > Calculation Options to have Aspen estimate NPSH_required.

## Key Parameters

| Parameter | Block | Where to Set | Default | Notes |
|---|---|---|---|---|
| Isentropic efficiency | Compr / MCompr | Setup > Specifications | 0.72 | Enter as fraction (0.72 = 72%) |
| Polytropic efficiency | Compr / MCompr | Setup > Specifications | 0.72 | Use with polytropic type only |
| Mechanical efficiency | Compr / MCompr | Setup > Specifications | 1.0 | Accounts for bearing/seal losses |
| Discharge pressure | Compr / MCompr / Pump | Setup > Specifications | — | Most common discharge spec |
| Intercooler outlet T | MCompr | Setup > Specifications (cooler) | — | Typically 30–40 °C (cooling water limited) |
| Intercooler ΔP | MCompr | Setup > Specifications (cooler) | 0 | Set 0.1–0.5 bar for realism |
| Pump efficiency | Pump | Setup > Specifications | — | Use 0.72–0.85 for centrifugal pumps |
| Number of stages | MCompr | Setup > Specifications | — | 4 for CO2 train in this project |

## Common Problems & Fixes

| Symptom | Cause | Fix |
|---|---|---|
| Extremely high discharge temperature | Single-stage compression over too large a pressure ratio | Switch to MCompr with intercooling; limit per-stage ratio to ~3–4 |
| Compressor block does not converge | Liquid present in feed to compressor | Ensure feed is fully vaporized; check upstream flash or add a knockout drum |
| "Liquid fraction exceeds tolerance" warning | Condensation during compression (unlikely) or bad feed conditions | Check feed temperature and pressure; enable dew point checking on Setup > Calculation Options |
| Unrealistically low power | Efficiency set to 1.0 (default mechanical) but isentropic efficiency also defaulting high | Explicitly set isentropic efficiency to 0.72–0.80 |
| MCompr cooler pressure drop error | Cooler ΔP ≥ stage outlet pressure | Reduce cooler pressure drop or increase number of stages |
| Pump shows negative power | Block is operating as a turbine (outlet P < inlet P) | Check that discharge pressure > inlet pressure for a pump |
| NPSH warning | Suction pressure too close to bubble point | Increase suction pressure, subcool feed, or lower pump elevation |

## Course-Specific Requirements
- **CHEN 4470 expects** compressor and pump efficiencies to be explicitly specified (not left at defaults) and justified in your design report.
- Use **MCompr** for the 4-stage CO2 compression train with intercooling. Report per-stage pressure ratios, discharge temperatures, intercooler duties, and total shaft power.
- For the **recycle compressor** (C-206), a single Compr block is sufficient since the pressure ratio is small (overcoming loop ΔP only, typically 1.05–1.2).
- Include **NPSH checks** for pumps handling saturated or near-boiling liquids (e.g., methanol product pump, boiler feed water pump).
- Report **brake horsepower** (accounts for mechanical efficiency) rather than indicated horsepower when sizing drivers and estimating utility costs.
