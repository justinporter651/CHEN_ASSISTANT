# Capital Cost Estimation -- CHEN 4470 Quick Reference
> CO2-to-methanol plant (300,000 MT/yr) | Turton Ch. 7

## Total Capital Investment (TCI) Structure

```
TCI = Fixed Capital Investment (FCI) + Working Capital
```

- **FCI:** All costs to build the plant -- equals Total Module Cost (brownfield) or Grassroots Cost (new plant). Everything except land is depreciable.
- **Working Capital:** Funds to start up and float early operations (salaries, raw material inventory). Fully recoverable; not depreciable. Estimate as 15-20% of FCI or 4-6 months of raw materials + utilities.

## Equipment Purchase Cost Methods

**Capacity scaling:** `C_a = C_b * (A_a / A_b)^n`
- n = cost exponent (HX 0.59, compressor 0.84, tank 0.30, blower 0.60)
- **Six-tenths rule:** default n = 0.6 when unknown. Doubling capacity raises cost ~52%.
- More reliable for whole-plant scaling than single equipment.

**Appendix A correlations** (base conditions = CS, ambient P):
```
log10(C_p^0) = K1 + K2*log10(A) + K3*[log10(A)]^2
```
- K1, K2, K3 from Table A.1. All costs at CEPCI = 397 (2001) -- must update.

## Bare Module Cost (CBM) Method

Core of the Guthrie equipment module technique. CBM = sum of direct + indirect costs per unit.

```
C_BM = C_p^0 * F_BM
```

**Base-case F_BM^0** (CS, ambient P) includes: equipment cost (1.0), materials (alpha_M), labor (alpha_L), freight/insurance/taxes (alpha_FIT), overhead (alpha_O), engineering (alpha_E).

```
F_BM^0 = (1 + alpha_M)(1 + alpha_L + alpha_FIT + alpha_O + alpha_E)
```

Example: floating-head shell-and-tube HX F_BM^0 = 3.29.

**Non-base-case** (different MOC or pressure) -- for HX, pumps, vessels:
```
F_BM = B1 + B2 * F_M * F_P
```
- B1, B2 from Table A.4 (e.g., floating-head HX: B1 = 1.63, B2 = 1.66)
- Other equipment: F_BM from Table A.6 / Figure A.19

## Pressure & Material Factors

### Pressure Factor (F_P)

**Process vessels** (cost ~ shell weight):
```
F_P,vessel = max{(PD/(2*S*E - P) + CA) / t_min, 1}
```
- S = 944 bar (CS), CA = 0.00315 m, t_min = 0.0063 m. Vacuum: F_P = 1.25.
- F_P grows rapidly at high pressure; approaches infinity as P -> 1.67SE.

**Other equipment** (HX, pumps, etc.) -- much smaller F_P at same pressure:
```
log10(F_P) = C1 + C2*log10(P) + C3*[log10(P)]^2
```
- C1, C2, C3 from Table A.2. Trays/packing/drives: F_P = 1.
- HX tubes already withstand high P at standard BWG sizes, so F_P is small.

### Material Factor (F_M)

- Tables A.3, A.6 and Figures A.18-A.19. CS = 1.0 (base). SS HX ~ 2.73.
- F_M is NOT the raw material price ratio -- manufacturing costs (labor, overhead) do not scale proportionally with material cost.

## Lang Factors / Module Factors

Quick whole-plant estimate: `C_TM = F_Lang * SUM(C_p,i)`

| Plant Type | F_Lang |
|-----------|--------|
| Fluid processing | 4.74 |
| Solid-fluid | 3.63 |
| Solid processing | 3.10 |

- Purchased equipment is always < 1/3 of total capital. Lang method cannot differentiate MOC/pressure across equipment -- use bare module method for project-level work.

## Total Module Cost -> Total Grassroots Cost

**Total Module Cost (brownfield expansion):**
```
C_TM = 1.18 * SUM(C_BM,i)
```
- 1.18 = contingency (15%) + fee (3%). Site/utilities/buildings already exist.

**Total Grassroots Cost (new standalone plant):**
```
C_GR = C_TM + 0.50 * SUM(C_BM,i^0)
```
- 0.50 * base-case bare module costs covers site development, auxiliary buildings, off-sites, utilities infrastructure.

## CEPCI Cost Indexing

```
C_2 = C_1 * (CEPCI_2 / CEPCI_1)
```

| Year | CEPCI | Year | CEPCI |
|------|-------|------|-------|
| 2001 | 397 (App. A base) | 2013 | 567 |
| 2007 | 525 | 2016 | 542 |
| 2010 | 551 | 2019 | 607.5 |
| 2022 | 816 | 2024 | ~800 |

Composite weights: equipment/machinery 61%, erection labor 22%, buildings 7%, engineering 10%. Always state which CEPCI value and year you used.

## Common Mistakes

1. **Forgetting CEPCI update.** All Appendix A data are 2001 dollars (397). Every C_p^0 must be scaled.
2. **Using Lang for detailed estimates.** Cannot capture MOC/pressure variation -- use bare module.
3. **Grassroots vs. brownfield confusion.** C_GR for new plant; C_TM for expansion.
4. **Applying vessel F_P to other equipment.** Vessel F_P >> HX F_P at same pressure.
5. **Extrapolating outside correlation range.** Each Table A.1 entry has a valid capacity range.
6. **Treating F_M as material price ratio.** It reflects total manufacturing cost, not just raw material.
7. **Omitting working capital.** TCI = FCI + working capital (15-20% of FCI).
8. **Missing equipment.** Most common cause of underestimation -- additional equipment is discovered as design matures.

## Course-Specific Requirements

- Projects use study/preliminary estimates (Class 3-4), accuracy ~ +40% / -25%.
- Use Appendix A correlations + bare module factors (not Lang) for individual equipment.
- Report: C_p^0, F_BM, C_BM per equipment item; then C_TM or C_GR; CEPCI year.
- **CO2-to-methanol:** high-pressure reactors (50-80 bar), likely SS or specialty alloys, significant compressor costs. Watch vessel F_P and MOC for CO2/methanol/water service.
- **Economy of scale:** use six-tenths rule for capacity comparisons, never linear scaling.
