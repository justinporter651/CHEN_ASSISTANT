# Reactors & Kinetics — Aspen Plus Quick Reference
> CO2-to-methanol context: Catalytic packed-bed reactor R-201

## When to Use This

Use **RPlug** when you have a packed-bed catalytic reactor and know the reaction kinetics.
RPlug assumes perfect radial mixing, no axial mixing, and integrates ODEs along reactor length z.
For the CO2-to-methanol process, two reactions run over a Cu/ZnO/Al2O3 catalyst:

- **Main:** CO2 + 3H2 -> CH3OH + H2O (methanol synthesis)
- **Side (RWGS):** CO2 + H2 -> CO + H2O (reverse water-gas shift)

Both are entered as power-law kinetic reactions in a single Reaction ID referenced by the RPlug block.

## Step-by-Step Setup

### 1. Define Reactions (Reactions folder, before the block)

| Navigation | Action |
|---|---|
| Reactions > New > General | Create a Reaction ID (e.g., R-MEOH). Choose **Powerlaw** type. |
| Reactions > R-MEOH > Stoichiometry | Enter each reaction. Specify stoichiometric coefficients (negative = reactant, positive = product). Add both the methanol synthesis and RWGS reactions. |
| Reactions > R-MEOH > Kinetic | For each reaction: enter pre-exponential factor (k0), activation energy (E), temperature exponent (n). Rate form: r = k0 * T^n * exp(-E/RT) * prod(Ci^ai). Set concentration basis (typically Molarity), reacting phase (Vapor for gas-phase catalytic). Enter component exponents on the Kinetic tab. |

### 2. Configure the RPlug Block

| Navigation (Block > Tab > Sheet) | What to Specify |
|---|---|
| R-201 > Setup > Configuration | Reactor type (see below), tube length, tube diameter, number of tubes. |
| R-201 > Setup > Reactions | Select the Reaction ID (R-MEOH). Set Valid phases = Vapor-Only (gas-phase catalytic). |
| R-201 > Setup > Pressure | Pressure drop method: select **Ergun equation** for packed beds. Enter bed voidage (epsilon), particle diameter (Dp), and particle shape factor (phi_s). |
| R-201 > Setup > Specifications | For non-adiabatic: enter U (overall heat transfer coeff, W/m2-K), coolant temperature. |
| R-201 > Convergence > Integration Loop | Adjust integration tolerance if needed (default is usually fine; tighten for accuracy). |

### 3. Choose Reactor Type

| Reactor Type | When to Use | Extra Input Required |
|---|---|---|
| Adiabatic | No heat exchange | None |
| Constant coolant temperature | Shell-side at fixed T (common for R-201) | Coolant T, U |
| Co-current thermal fluid | Coolant flows same direction | U (coolant stream connected) |
| Counter-current thermal fluid | Coolant flows opposite | U, coolant outlet T or vapor fraction |
| Specified temperature | Isothermal or known T-profile | Temperature or profile |

For CO2-to-methanol, **Reactor with constant coolant temperature** is typical (steam-cooled shell).

## Key Parameters

| Parameter | Typical Range (CO2-to-methanol) | Where to Enter |
|---|---|---|
| Tube length | 5-12 m | Setup > Configuration |
| Tube inner diameter | 25-50 mm (0.025-0.05 m) | Setup > Configuration |
| Number of tubes | 1000-5000 (scale-dependent) | Setup > Configuration |
| Catalyst particle diameter (Dp) | 3-6 mm | Setup > Pressure |
| Bed voidage (epsilon) | 0.35-0.45 | Setup > Pressure |
| Particle shape factor | 1.0 (spherical) | Setup > Pressure |
| Coolant temperature | 220-260 C | Setup > Specifications |
| U (heat transfer coeff) | 50-200 W/m2-K | Setup > Specifications |
| Operating pressure | 50-80 bar | Set via feed stream |
| Operating temperature | 200-280 C | Set via feed stream inlet T |

### Ergun Pressure Drop Parameters

Ergun equation: dP/dz = (150*mu*U*(1-eps)^2)/(Dp^2*phi_s^2*eps^3) + (1.75*rho*U^2*(1-eps))/(Dp*phi_s*eps^3)

Required inputs on Setup > Pressure sheet: bed voidage, particle diameter, shape factor. Fluid properties (mu, rho, U) are calculated internally.

## Common Problems & Fixes

| Symptom | Cause | Fix |
|---|---|---|
| Integration fails / "step size too small" | Rates of change are extreme; stiff system near equilibrium or with near-complete conversion | Switch Error Scaling Method to **Dynamic** on Convergence > Integration Loop. Loosen integration tolerance (e.g., 1e-4 to 1e-3). Reduce reactor length to confirm partial solution works. |
| Zero or near-zero conversion | Wrong units on kinetic parameters (k0, E); wrong concentration basis; reaction phase mismatch | Verify units of k0 match the concentration basis and holdup. Check E is in correct units (J/mol vs cal/mol vs kJ/mol). Confirm reacting phase = Vapor. |
| Nonsensical temperature profile (runaway or flat) | U too low (runaway) or too high (isothermal); wrong sign or missing heat of reaction | Check that Aspen is computing heat of reaction from enthalpy differences (default). Verify U and coolant T are realistic. |
| "Reaction experiment has no kinetic reactions" | Reaction ID not linked to block, or reaction type set to Equilibrium instead of Kinetic | On R-201 > Setup > Reactions, verify Reaction ID is selected. In Reactions folder, confirm type is Powerlaw (kinetic), not Equilibrium. |
| Block marked incomplete after file import | Stream class changed to CONVEN (lacks solid substreams) | Restore stream class to original value if solids are involved. |
| Pressure drop unrealistically high or low | Bed voidage or particle diameter wrong; units mismatch | Double-check Dp and epsilon values and units. Typical catalyst: Dp=3-6 mm, eps=0.35-0.45. |
| Equilibrium reactions cause convergence issues | Equilibrium reactions make the ODE system stiff | Reformulate equilibrium reactions as reversible kinetic reactions in a General reaction set. |
| Variables span many orders of magnitude | Feed has trace species or near-depleted reactants | Use Dynamic or Hybrid scaling. Set Minimum scale factor on Convergence sheet to avoid trace-species scaling issues. |

## Course-Specific Requirements

- **Property method:** Use SRK or RK-SOAVE for high-pressure gas-phase reactions (experiment with PR if SRK gives issues).
- **Reaction data:** Kinetic parameters (k0, E, component exponents) will be provided in the project handout. Enter them exactly as given, paying close attention to unit consistency.
- **Profiles to report:** Include temperature, pressure, and composition profiles along reactor length (Results > Profiles). These demonstrate experiment validity.
- **Sensitivity analysis:** Use Model Analysis Tools > Sensitivity to vary coolant temperature, tube length, or feed ratio (H2:CO2) and observe effect on conversion and selectivity.
- **Feed ratio:** Stoichiometric H2:CO2 = 3:1, but experiment with 3:1 to 4:1 for improved conversion.
- **Catalyst loading:** Not entered directly; RPlug uses tube geometry + voidage. Catalyst mass = (1 - epsilon) * rho_catalyst * V_tube * N_tubes.
- **Convergence tip:** If the recycle loop around the reactor does not converge, reconcile tear streams (copy stream results to input forms) to provide better initial estimates.
