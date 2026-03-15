# Manufacturing Cost Estimation -- CHEN 4470 Quick Reference
> CO2-to-methanol plant (300,000 MT/yr)

## Cost of Manufacturing (COM) Structure

COM = DMC + FMC + GE (Direct Mfg Costs + Fixed Mfg Costs + General Expenses)

Five inputs needed: **FCI** (fixed capital investment), **COL** (operating labor), **CUT** (utilities), **CWT** (waste treatment), **CRM** (raw materials).

### Master COM Equations (Turton et al., midpoint factors)

- **COM** = 0.280*FCI + 2.73*COL + 1.23*(CUT + CWT + CRM)
- **COMd** (no depreciation) = 0.180*FCI + 2.73*COL + 1.23*(CUT + CWT + CRM)

Use COMd when depreciation is handled separately in cash-flow analysis. The 0.10*FCI difference is the depreciation term.

## Direct Manufacturing Costs

DMC = CRM + CWT + CUT + 1.33*COL + 0.069*FCI + 0.03*COM

| Item | Factor | Range |
|---|---|---|
| Supervisory/clerical labor | 0.18*COL | 0.10-0.25 |
| Maintenance and repairs | 0.06*FCI | 0.02-0.10 |
| Operating supplies | 0.009*FCI | -- |
| Laboratory charges | 0.15*COL | 0.10-0.20 |
| Patents and royalties | 0.03*COM | 0-0.06 |

Direct costs typically dominate (~76% of COM), driven mainly by raw materials, utilities, and waste treatment.

## Fixed Manufacturing Costs

FMC = 0.708*COL + 0.068*FCI + depreciation

| Item | Factor | Range |
|---|---|---|
| Depreciation | 0.10*FCI | Approximation; use MACRS in cash-flow |
| Local taxes and insurance | 0.032*FCI | 0.014-0.05 |
| Plant overhead | 0.708*COL + 0.036*FCI | -- |

Fixed costs are incurred even when the plant is idle.

## General Expenses

GE = 0.177*COL + 0.009*FCI + 0.16*COM

| Item | Factor | Range |
|---|---|---|
| Administration | 0.177*COL + 0.009*FCI | -- |
| Distribution and selling | 0.11*COM | 0.02-0.20 |
| Research and development | 0.05*COM | -- |

## Raw Material Costs

CRM = sum of (mass_flowrate_i x unit_price_i x operating_hours/yr). Obtain flowrates from the PFD mass balance.

For CO2-to-methanol: key costs are CO2 feedstock (may carry credit), hydrogen (often dominant), and catalyst (amortized). Use course-provided prices or cite source and year.

## Utility Costs

Key prices from Turton Table 8.3 (circa 2016, natural gas baseline):

| Utility | $/GJ | Common Unit |
|---|---|---|
| LP steam (5 barg, 160C) w/ power credit | 2.03 | $4.22/1000 kg |
| LP steam w/o power credit | 4.54 | $9.45/1000 kg |
| MP steam (10 barg, 184C) w/ power credit | 2.78 | $5.56/1000 kg |
| MP steam w/o power credit | 4.77 | $9.54/1000 kg |
| HP steam (41 barg, 254C) | 5.66 | $9.61/1000 kg |
| Cooling water (30C to 40-45C) | 0.378 | $15.7/1000 m3 |
| Electricity | 18.72 | $0.0674/kWh |
| Process water | -- | $0.177/1000 kg |
| Boiler feed water (115C, 1.7 bar) | -- | $14.5/1000 kg |
| Refrigeration 5C / -20C / -50C | 4.77 / 8.49 / 14.12 | $/GJ cooling duty |

CW return max 45C (scaling). Process exotherm steam credit: $3.51/GJ (90% boiler eff). Refrigeration cost rises sharply at lower T.

## Operating Labor Estimation

1. **Count Nnp** (nonparticulate processing steps): compressors, exchangers, heaters/furnaces, reactors, towers. Exclude pumps and vessels.
2. **Operators per shift:** NOL = (6.29 + 0.23*Nnp)^0.5 (when P=0, i.e., no solids handling)
3. **Total operators:** 4.5 * NOL, rounded up. The 4.5x factor: 1095 shifts/yr needed / 245 shifts per operator per yr.
4. **COL** = total_operators x annual_salary. Reference: ~$66,910/yr (2016 Gulf Coast). Adjust with CEPCI or BLS data.

## COM Calculation Method

1. Determine FCI from Aspen APEA or CAPCOST (escalated with CEPCI)
2. Estimate COL via the Nnp method
3. Calculate CRM from PFD mass balance + commodity prices
4. Calculate CUT from PFD energy balance + utility prices
5. Estimate CWT: nonhazardous $36/tonne, hazardous $200-2000/tonne, wastewater $41-56/1000 m3
6. Apply COM or COMd equation
7. Report in $/yr and $/tonne of product

## Common Mistakes

1. **COM vs COMd confusion** -- using COM in cash-flow analysis double-counts depreciation
2. **Forgetting the 4.5x operator multiplier** -- NOL is per-shift, not total headcount
3. **Counting pumps/vessels in Nnp** -- they are excluded from the labor correlation
4. **Wrong steam pressure** -- match to process temperature needs; LP is much cheaper than HP
5. **Ignoring steam power credit** -- turbine let-down cuts steam cost nearly in half vs. throttling
6. **Not inflation-adjusting** -- Turton costs are 2016 basis; scale with CEPCI
7. **No sensitivity analysis** -- factors are midpoint estimates; vary key inputs +/-20-30%

## Course-Specific Requirements

- Report costs in $/yr and $/tonne of product
- FCI from Aspen APEA or CAPCOST, escalated with CEPCI to project year
- Use course-provided raw material/product prices; otherwise cite source and year
- For NPV/IRR analysis: use COMd and handle depreciation via MACRS separately
- Include sensitivity analysis on raw material price, utility cost, and FCI uncertainty
- CO2-to-methanol specifics: hydrogen cost often dominates; account for electricity if using electrolysis; credit steam from exothermic methanol synthesis
