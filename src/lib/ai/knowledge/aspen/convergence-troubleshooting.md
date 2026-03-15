# Convergence & Troubleshooting -- Aspen Plus Quick Reference
> CO2-to-methanol context: Large recycle ratios, high-pressure loops

## When to Use This
Consult this reference when a simulation with recycle loops fails to converge, produces mass balance warnings, or stalls at high Err/Tol values. Especially relevant for CO2-to-methanol flowsheets where recycle-to-feed ratios are large (often 5:1 or higher), amplifying small tear-stream errors into significant mass balance discrepancies.

## Convergence Strategy

1. **Check error/warning messages first** -- look for block convergence failures, zero-flow warnings, and temperature crossovers in the Control Panel.
2. **Provide reasonable initial estimates** for tear streams (temperature, pressure, composition, flow). Reconcile tear streams after a successful run to seed future runs.
3. **Review property method** -- ensure it is appropriate for high-pressure VLE (e.g., RK-SOAVE or PC-SAFT for CO2/methanol/water systems).
4. **Use flow-rate-independent specs** -- specify split fraction (not absolute flow), D:F ratio (not distillate rate). This prevents cascading instability as flows shift iteration to iteration.
5. **Add Calculator blocks as feedforward controllers** -- e.g., compute makeup and purge rates from recycle stream composition to stabilize the loop.
6. **Confirm the calculation sequence** -- verify Aspen's automatic sequencing or set a manual sequence if needed.

## Tear Stream & Method Selection

### Choosing Tear Streams
- Prefer streams that **change the least** between iterations (relatively constant T, P, composition).
- Prefer streams with **fewer variables** (heat streams, single-phase vapor streams).
- Use a Mixer upstream of the recycle entry point to reduce the number of tear streams.

### Convergence Methods (Flowsheet Level)
| Method | When to Use |
|---|---|
| **Wegstein** (default) | Good first choice; accelerated successive substitution. Works for most loops. |
| **Direct substitution** | Simpler but slower. Use as a diagnostic if Wegstein oscillates. |
| **Broyden** | Quasi-Newton method; better for tightly coupled multi-loop systems. Use when Wegstein stalls or oscillates. |
| **Secant / BOBYQA** | For design-spec and optimization convergence blocks. |

### Tolerance Settings
- Default tear stream tolerance: 1e-4 (relative).
- **For large recycle ratios, tighten tear stream tolerances** (e.g., 1e-5 or 1e-6) on the Convergence | Tear | Specifications sheet. A relative error of 1e-4 on a large recycle flow becomes a large absolute error on the smaller net throughput.
- Blocks inside the loop must converge to **tighter tolerances than the loop itself**. Tighten global flash tolerance (Setup | Calculation Options | Flash Convergence) and RadFrac tolerances (Convergence | Basic) before relaxing the loop tolerance.
- If Err/Tol plateaus around 10 and stops improving, block tolerances are likely too loose relative to the loop tolerance.

## Common Error Messages

| Symptom / Message | Likely Cause | Fix |
|---|---|---|
| Flow rate increases by the same amount each iteration | A component has no exit path from the loop | Add a purge or vent; verify all products (including reaction byproducts) can leave |
| `ZERO FEED TO THE BLOCK. BLOCK BYPASSED` | Tear streams have no initial estimates | Provide initial T, P, flow, composition on the Stream Input form; usually OK if warning is only at iteration 1 |
| `STREAMS CROSSING THE LOOP ARE NOT IN MASS BALANCE` / `RELATIVELY LOOSE TEAR STREAM TOLERANCE` | Large recycle flow amplifies small relative error | Tighten tear stream tolerances (1e-5 or smaller) |
| `BLOCK (name) IS NOT IN MASS BALANCE` | A Calculator, Design Spec, or Transfer block modified a stream after the block ran | Ensure affected blocks are re-executed inside the convergence loop; check sequence |
| `CONVERGENCE BLOCK <name> WAS NEVER EXECUTED` | Initialization set to "Single Pass" (EO mode) | Change Initialization from Single Pass to Solve on the EO ribbon tab |
| `INFORMATION TEAR(S) WILL NOT BE CONVERGED` | Calculator block used in feedback mode creates an information tear | On Convergence | Options | Defaults | Sequencing, check "Tear Calculator export variables"; set variable flow to Import/Export on Calculator Define sheet |
| Err/Tol oscillates without decreasing | Wegstein acceleration overshooting | Switch to Direct substitution temporarily, or increase Wegstein damping (raise Qmin toward 0.5-0.9) |
| Pressure continuously decreasing in loop | All blocks specify pressure drop, none specify absolute pressure | Set absolute pressure in at least one block in the loop |

## Sequential Build-Up Approach

For complex flowsheets (typical of CO2-to-methanol with reactor, flash, distillation, and large recycle):

1. **Start without the recycle** -- break the loop, run open-loop to verify each unit individually.
2. **Connect simple recycle first** -- close the main recycle with a Mixer; use approximate initial estimates from the open-loop run.
3. **Add complexity incrementally** -- introduce heat integration, design specs, and additional recycle loops one at a time.
4. **Reconcile tear streams after each successful convergence** -- this seeds the next run with good initial values (Home | Run | Reconcile, or right-click stream).
5. **Avoid rigorous blocks in early iterations** -- use simple Heater/Flash2 stand-ins for RadFrac or rigorous HeatX until the recycle stabilizes, then swap in rigorous models.
6. **Lock converged sections** -- use flowsheet sections or deactivate blocks you are not debugging.

### Stream Reconciliation Tips
- After convergence, reconcile tear streams to copy results back to input forms.
- Identify tear streams via: Control Panel messages (`Block $OLVER02 (Method: WEGSTEIN) has been defined to converge streams: ...`) or Results Summary | Streams | Material filtered to tear streams.
- If operating conditions change drastically, **clear reconciled data** first -- stale initial estimates from a very different operating point can prevent convergence.

## Course-Specific Requirements

- Use **RK-SOAVE** (or instructor-specified method) for high-pressure gas-phase reactions and VLE in the methanol synthesis loop.
- Always verify the mass balance closes across the recycle envelope -- Aspen may report "converged" while the mass balance warning indicates the tolerance was too loose for meaningful results.
- When submitting, include a screenshot of the convergence status and Err/Tol history from the Control Panel to demonstrate convergence quality.
- Document any manually set tear stream tolerances or convergence method changes in your report.
