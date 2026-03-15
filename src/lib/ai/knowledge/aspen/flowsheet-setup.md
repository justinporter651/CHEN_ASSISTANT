# Flowsheet Setup — Aspen Plus Quick Reference
> CO2-to-methanol context: Building the CO2 hydrogenation process flowsheet

## When to Use This
- Student is starting a new Aspen Plus simulation and needs to place blocks and connect streams.
- Student asks about material, heat, or work streams and when to use each.
- Student needs help with feed specification, unit system selection, or run controls.
- Student encounters "Flowsheet Not Complete" errors before running.

## Block Placement & Connection

### Placing blocks on the flowsheet
1. Open the **Model Palette** and click the appropriate category tab (Reactors, Separators, Exchangers, Pressure Changers, Mixers/Splitters).
2. Drag the desired model icon onto the Main Flowsheet window (single-block mode) or click the icon then click the flowsheet (multi-block insert mode). Press the **Select Mode** button (upper-left of Model Palette) to exit insert mode.
3. Blocks snap to a grid if Snap to Grid is enabled in Flowsheet Display Options.

### CO2-to-methanol block topology (typical)
| Tag    | Model   | Purpose                                |
|--------|---------|----------------------------------------|
| C-201+ | MCompr  | Multi-stage compression of feed CO2/H2 |
| R-201  | RPlug   | Packed-bed catalytic reactor            |
| E-20x  | Heater/HeatX | Pre-heat, inter-cool, product cool |
| T-201  | RadFrac | Methanol-water separation column        |
| V-201  | Flash2  | Vapor-liquid knockout drum              |
| P-201  | Pump    | Liquid product pump                     |

Place blocks left-to-right following the process flow: compression, preheat, reaction, cooling, flash separation, distillation, and product handling.

### Connecting streams to blocks
1. Click the **stream icon** on the left side of the Model Palette (default: Material).
2. **Red ports** = required connections; **blue ports** = optional. Hover over a port to see its label tooltip.
3. Click a highlighted port to connect one end, then click another port (or blank area for a feed/product) to connect the other end.
4. Press ESC or right-click to cancel a partial connection.

Tip: Use drag-and-drop for faster wiring — click-hold the stream icon, drag to the first port, release, then click the second port.

## Stream Types (Material, Heat, Work)

| Type     | Appearance | Use case |
|----------|-----------|----------|
| Material | Solid line | Carries mass, composition, T, P data between blocks |
| Heat     | Dashed line | Transfers duty (e.g., reactor heat to a reboiler, or specifying heater/cooler duty) |
| Work     | Dashed line | Transfers mechanical power (e.g., turbine shaft work to a compressor) |

To switch stream type: click the **down arrow** next to the stream icon in the Model Palette and choose Material, Heat, or Work.

**Important:** Heat streams report source-side temperatures and duty but do *not* check feasibility at the destination. You must verify that the temperature driving force is physically reasonable.

### CO2-to-methanol stream guidance
- All process connections between blocks use **Material** streams.
- Use **Heat** streams only when explicitly linking duties (e.g., connecting reactor duty to a heat recovery block).
- Use **Work** streams to connect compressor/turbine shaft power if modeling mechanical coupling.

## Feed Specification

Feed streams require complete thermodynamic specification on the **Stream | Input | Mixed** sheet:
1. **State variables** — pick two: Temperature + Pressure (most common), or T + Vapor Fraction, etc.
2. **Composition** — specify component flows or fractions (mole or mass basis).
3. **Flow rate** — total or component-by-component.

### CO2-to-methanol feed conditions (typical starting point)
| Parameter       | Fresh CO2 feed  | Fresh H2 feed   |
|-----------------|-----------------|------------------|
| Temperature     | 25-40 C         | 25-40 C          |
| Pressure        | 1-5 bar         | 1-5 bar          |
| Composition     | Pure or 95%+ CO2| Pure or 99%+ H2  |
| H2:CO2 ratio    | —               | Stoichiometric 3:1 (experiment with higher) |

The **Flow Basis** defaults to the setting on the **Setup | Specifications | Global** sheet. Changing it on a stream dialog overrides only that stream.

## Unit System Selection

Set units early — they affect every input form and results display.

Navigate to **Setup | Specifications | Global** sheet:
- **MET** — Metric (C, bar, kg/hr, kmol/hr). Common for experiment-scale work.
- **SI** — Strict SI (K, Pa, kg/s, mol/s). Consistent but Pa can be unwieldy for process pressures.
- **ENG** — US Engineering (F, psi, lb/hr, lbmol/hr). Used in many US-based industrial settings.

**Course recommendation:** Use **MET** unless your instructor specifies otherwise. Metric units align with experiment data and literature kinetics for CO2 hydrogenation (activation energies in kJ/mol, pressures in bar).

You can also create custom unit sets or override individual fields, but keeping a single consistent set avoids conversion errors.

## Run Controls & Convergence Order

### Running the simulation
- **F5** or click **Run** on the Home tab ribbon. Aspen Plus checks completeness first.
- Use **Reinitialize** (Home | Run group) to clear all results before a fresh run.
- Use **Step** to execute one block at a time — useful for debugging a complex flowsheet.

### Convergence and execution sequence
Aspen Plus uses **sequential-modular** solving: it calculates blocks one at a time in a determined order. When recycle loops exist, Aspen Plus automatically:
1. Identifies **tear streams** — streams it must guess, then iterate to convergence.
2. Creates **convergence blocks** (default method: **Wegstein**) around recycle loops.
3. Executes blocks in dependency order, iterating the tear streams until tolerance is met.

Check the **Control Panel** output at the start of a run for messages like:
```
Block $OLVER02 (Method: WEGSTEIN) has been defined to converge streams: 3
```
This tells you which streams are tear streams and which convergence method is used.

### CO2-to-methanol recycle convergence
The vapor recycle from the flash drum (V-201) back to the reactor feed is the primary tear stream. Tips:
- **Initialize the tear stream** with reasonable estimates (experiment with values close to expected recycle composition). Use Stream Reconciliation after a successful run to save converged values for subsequent runs.
- If oscillating, tighten Wegstein bounds or switch to **Broyden** (Convergence | Options).
- Keep the default max iterations (30) initially; increase only if convergence is progressing but slow.

## Common Problems & Fixes

| Symptom | Likely cause | Fix |
|---------|-------------|-----|
| "Flowsheet Not Complete" status | Missing required stream connections (red ports unconnected) | Click the status indicator to see which blocks need streams |
| Block skipped or not calculated | Upstream feed stream has no specification | Complete the Stream Input form for every feed |
| Simulation won't start | Property method or components not specified | Complete Setup and Properties sections (check navigation pane for incomplete icons) |
| Wrong units in results | Unit set changed mid-session or inconsistent | Set units on Setup Global sheet before entering any data |
| Tear stream not converging | Poor initial estimates or stiff recycle | Provide tear stream estimates; reconcile after a good run |
| Heat stream infeasible | Temperature crossover at destination | Check that source duty temperatures are compatible with destination conditions |

## Course-Specific Requirements
- **Name blocks and streams descriptively** using the course tag convention (R-201, T-201, E-201, etc.) rather than default numeric IDs. Rename via right-click or the Options dialog.
- Reserved names **TOP** and **DATA** cannot be used for blocks or streams.
- Lock the flowsheet (right-click flowsheet background) after topology is finalized to prevent accidental edits.
- Always verify completeness (status bar, bottom-right) before running. Address every red-port warning.
- Save a baseline .bkp file before making major topology changes.
