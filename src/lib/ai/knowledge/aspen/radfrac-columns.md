# RadFrac Columns -- Aspen Plus Quick Reference
> CO2-to-methanol context: Methanol-water separation column T-201

## When to Use This

RadFrac is the rigorous multistage vapor-liquid fractionation model in Aspen Plus. For the CO2-to-methanol capstone (300,000 MT/yr), the primary application is column T-201: separating methanol product from water in the reactor effluent after flash separation. The methanol-water system is nearly ideal (no azeotrope), making it a straightforward binary distillation -- but getting Aspen to converge and produce defensible sizing still requires careful setup.

Use RadFrac (not DSTWU or shortcut) whenever you need:
- Rigorous stage-by-stage profiles for heat integration
- Design specs to hit purity and recovery targets simultaneously
- Column internals sizing with hydraulic results
- Accurate condenser/reboiler duties for utility costing

## Step-by-Step Setup

### 1. Create the block
Simulation > Add block > Columns > RadFrac. Connect feed, distillate, and bottoms streams.

### 2. Configure (Setup > Configuration)
| Field | Recommended value | Notes |
|---|---|---|
| Calculation type | Equilibrium | Use rate-based only if needed for packed columns |
| Number of stages | Start with DSTWU estimate (typically 30-50 for MeOH-H2O) | Includes condenser (stg 1) and reboiler (last stg) |
| Condenser | Total | Liquid methanol product overhead |
| Reboiler | Kettle | Standard for this service |
| Valid phases | Vapor-Liquid | No second liquid phase expected |
| Convergence | Standard | Switch to Strongly non-ideal only if it fails |

### 3. Operating specifications (Setup > Configuration, bottom section)
Pick two from this list -- the remaining degrees of freedom are set by design specs:

| Specification | Typical starting point |
|---|---|
| Distillate-to-feed ratio (D:F) | Estimate from feed methanol mole fraction |
| Reflux ratio (molar) | 1.2-1.5x minimum (from DSTWU) |
| Bottoms rate | Use if you know the water flow |

**Best practice for recycle stability:** Specify D:F ratio (not absolute D), so the column scales with changing feed flow during flowsheet convergence.

### 4. Feed location (Setup > Streams)
- Place feed near the middle of the column as initial guess
- Optimize later using RadFrac > Analysis > NQ Curves or by running sensitivity on feed stage

### 5. Pressure profile (Setup > Pressure)
- Set condenser pressure (e.g., 1-2 atm for MeOH-H2O)
- Specify a per-stage pressure drop (typical: 0.007-0.01 bar/stage for trays)

## Key Parameters

| Parameter | Where to find it | What to specify |
|---|---|---|
| Number of stages | Setup > Configuration | From DSTWU or heuristic; iterate with NQ curves |
| Feed stage | Setup > Streams | Optimize with sensitivity analysis |
| Reflux ratio | Setup > Configuration | ~1.3x R_min from DSTWU |
| D:F ratio | Setup > Configuration | Moles MeOH in feed / total feed moles |
| Condenser pressure | Setup > Pressure | 1-2 atm typical for MeOH-H2O |
| Stage pressure drop | Setup > Pressure | 0.007 bar/stage (sieve trays) |
| Murphree efficiency | Efficiencies form | Use O'Connell correlation value (see below) |

## Design Specs: Hitting Purity and Recovery Simultaneously

You need two design specs plus two corresponding Vary variables. Common pairs for T-201:

**Design Spec 1 -- Methanol purity in distillate:**
- DesignSpecs > Specifications: Type = "Mass purity"
- Components sheet: select MEOH (numerator), all components (denominator)
- Target = 0.999 (99.9 wt%) or per project spec
- Feed/Product Streams: select distillate stream

**Design Spec 2 -- Methanol recovery:**
- Type = "Mass recovery"
- Components: MEOH
- Target = 0.995 (99.5%)
- Streams: distillate (product), all feeds (basis)

**Vary 1:** Reflux ratio (bounds: 1.0 to 10.0)
**Vary 2:** Distillate-to-feed ratio (bounds: 0.01 to 0.99)

The number of Vary variables must equal or exceed the number of active design specs. If convergence is difficult, widen the bounds or provide a better initial guess on the Configuration sheet.

## Column Internals Sizing (for 75-80% Flooding)

### Setup path
Column Internals (object manager) > Add New > Sections sheet

### Procedure
1. **Define sections:** Start stage = 2, end stage = N-1 (exclude condenser and reboiler). Use one section or split at the feed stage if traffic differs significantly above/below feed.
2. **Mode:** Interactive Sizing (Aspen calculates diameter automatically).
3. **Tray type:** Sieve or valve trays. Valve trays (e.g., Glitsch V-1) are common in chemical plants.
4. **Tray spacing:** 24 inches (0.61 m) is standard.
5. **Flooding target:** On the Design Parameters sheet, set "% Approach to maximum capacity" = 75-80%. The default is 80%. Aspen sizes the diameter to meet this criterion on the most loaded stage.
6. **Review results:** Check the Results and Hydraulic Plots forms for jet flood %, downcomer backup %, and weir loading across all stages.

### Key sizing outputs to report

| Result | Where | Target |
|---|---|---|
| Column diameter | Sections Results | Report in ft and m |
| % Jet flood | Hydraulic Plots / Results | 75-80% on limiting stage |
| % Downcomer backup | Results by stage | < 100% |
| Pressure drop/tray | Results by stage | Consistent with pressure profile |
| Number of trays | From stages x efficiency | Actual trays = stages / efficiency |

## O'Connell Tray Efficiency

RadFrac uses equilibrium stages by default. To convert to actual trays, apply the O'Connell correlation:

**Efficiency (%) = 50.3 x (alpha x mu)^(-0.226)**

Where alpha = relative volatility of key components, mu = feed liquid viscosity (cP).

For methanol-water at typical column conditions (alpha ~ 2-4, mu ~ 0.2-0.5 cP), expect efficiencies of 60-75%.

**How to apply in Aspen:**
- Efficiencies form > Vapor-Liquid sheet: enter Murphree efficiency (as fraction, e.g., 0.65) for all stages
- Or calculate externally and increase the number of equilibrium stages: actual trays = equilibrium stages / efficiency
- The second approach is simpler for sizing -- just report both equilibrium stages and actual trays

## Common Problems and Fixes

| Symptom | Likely cause | Fix |
|---|---|---|
| Block fails to converge after 25 iterations | Poor initial estimates or infeasible specs | Run DSTWU first for estimates; check that D:F is physically reasonable; increase max iterations to 50-75 on Convergence > Basic |
| Temperature or composition profile has a step change | Feed on wrong stage or too few stages | Move feed stage; add more stages in the pinch region |
| Design spec not met (large error) | Vary bounds too tight or conflicting specs | Widen Vary bounds; ensure purity and recovery targets are simultaneously achievable |
| Oscillating convergence (Err/Tol stuck) | Specs depend on absolute flow in a recycle loop | Switch to D:F ratio instead of absolute distillate rate |
| Column converges but recycle loop does not | Column tolerance too loose relative to loop | Tighten RadFrac error tolerance (Convergence > Basic) to 1e-5 or smaller; default loop tolerance is 1e-4 |
| Unexpected second liquid phase | Water-methanol should not split, but check | Ensure Valid Phases = Vapor-Liquid (not VLL) unless you have a real reason |
| Very large reboiler duty | Reflux ratio too high or pressure too low | Check that reflux ratio is reasonable (~1.3x minimum); increase column pressure to raise relative volatility |
| Internals sizing gives unreasonably large diameter | High vapor traffic from excessive reflux | Reduce reflux ratio; check that tray spacing is realistic (24 in.) |

## Convergence Tips

- **Start simple:** Get the column converging with reflux ratio + D:F before adding design specs.
- **Algorithm choice:** "Standard" works for most MeOH-H2O separations. Switch to "Strongly non-ideal" or "Azeotropic" only for difficult thermodynamics.
- **Damping:** If oscillating, increase damping on Convergence > Basic (try 1 or 2 levels higher).
- **Estimates:** If the column refuses to converge from scratch, provide temperature estimates on the Estimates form (condenser temp on stage 1, reboiler temp on last stage, linear interpolation between).
- **In recycle loops:** Specify D:F (not D) so the column does not fight the tear stream. Tighten the column error tolerance below the recycle convergence tolerance.
- **Max iterations:** Default is 25. For columns with design specs, increase to 50-100.

## Course-Specific Requirements

For CHEN 4470 deliverables, ensure you report:
1. **Number of equilibrium stages** and **actual trays** (with O'Connell efficiency stated)
2. **Feed tray location** (actual tray number)
3. **Reflux ratio** (actual, not minimum)
4. **Column diameter** at 75-80% flooding, with tray type stated
5. **Condenser and reboiler duties** (for utility cost estimation and heat integration)
6. **Distillate purity and recovery** achieved (from design spec results or stream results)
7. **Column pressure** (top and bottom)
8. **Temperature profile** (top, bottom, and feed stage) for heat integration analysis
