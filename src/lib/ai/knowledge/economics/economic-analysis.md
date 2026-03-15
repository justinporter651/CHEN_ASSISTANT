# Economic Analysis — CHEN 4470 Quick Reference
> CO2-to-methanol plant (300,000 MT/yr, 99.85 wt%)

## NPV Calculation Method

NPV discounts all after-tax cash flows to time zero: `NPV = sum[ CF_k / (1+i)^k ]` for k=0 to n.

- **i** = discount rate (hurdle rate), typically 10-15% for chemical projects
- **CF_k** = after-tax cash flow in year k (negative during construction, positive during operation)
- **Decision rule**: NPV > 0 means project exceeds minimum acceptable return

Steps:
1. Set project timeline (2-3 yr construction + 10-20 yr operation)
2. Calculate annual revenue R and cost of manufacturing excluding depreciation (COMd)
3. Determine yearly depreciation dk via MACRS schedule
4. Compute after-tax CF each year: CF = (R - COMd - d)(1 - t) + d
5. Include capital investments (negative CF) in construction years
6. Include working capital recovery and salvage value in final year
7. Discount each CF to time zero and sum

## Cash Flow Analysis

**Core formula**: `CF = (R - COMd - d)(1 - t) + d`
- R = revenue, COMd = manufacturing cost excl. depreciation, d = depreciation, t = tax rate

**Cash flow table columns**: Year | Capital Cost | R | COMd | d | Taxable Income | Taxes | Net Profit | CF | Discounted CF | Cumulative DCF

- Construction years: capital expenditures only (negative CF, no revenue)
- Year 1 of operation: may use partial capacity (50-80% startup)
- Final year: include working capital recovery and salvage value

## Time Value of Money Concepts

- **Present value**: P = F / (1 + i)^n — a dollar today is worth more than a dollar tomorrow
- **Future value**: F = P(1 + i)^n — compound interest grows investments exponentially
- **Annuity**: uniform series of equal payments A over n periods
- **Discount factors**: (P/F, i, n), (F/P, i, n), (P/A, i, n), (A/P, i, n)
- Always use **compound interest** for project evaluation

## Profitability Measures (NPV, IRR, Payback, ROI)

| Measure | Definition | Criterion |
|---------|-----------|-----------|
| **NPV** | Sum of discounted after-tax CFs | NPV > 0 |
| **IRR** | Discount rate where NPV = 0 | IRR > hurdle rate (10-15%) |
| **Payback** | Years to recover capital from cumulative CF | < 5 yr desired |
| **ROI** | Net profit / Total capital x 100% | ROI > hurdle rate |

- IRR: solve NPV(i) = 0 iteratively (Goal Seek); payback: read from cumulative CFD
- NPV is the most reliable metric; always report multiple measures

## Sensitivity Analysis & Monte Carlo

**Sensitivity (spider/tornado)**:
- Vary one parameter at a time +/-10-30%, hold others at base case
- Parameters: product price, raw material cost, capital cost, COMd, discount rate
- Spider plot: NPV vs. % change; steepest slope = most sensitive = highest risk
- Tornado diagram: rank parameters by NPV impact magnitude

**Monte Carlo**:
- Assign distributions (normal, triangular, uniform) to uncertain parameters
- Parameters: selling price, feedstock cost, capital cost, production rate
- Run 1000-10000 trials; output: NPV distribution, P(NPV>0), mean, P10/P90
- Tools: Crystal Ball, @RISK, or Python (numpy/scipy)

## Break-Even Analysis

- **Break-even product price**: minimum methanol selling price where NPV = 0 (price floor)
- **Break-even feedstock cost**: maximum CO2 price payable at NPV = 0
- **Break-even production rate**: minimum capacity utilization for NPV = 0
- Method: set NPV = 0, solve for single unknown (Goal Seek); compare to market prices

## Depreciation Methods

**MACRS 5-year recovery** (chemical process equipment, 9.5-yr class life):
Yr 1: 20%, Yr 2: 32%, Yr 3: 19.2%, Yr 4: 11.52%, Yr 5: 11.52%, Yr 6: 5.76%

- DDB switching to SL with half-year convention; salvage NOT subtracted under MACRS
- Depreciate FCIL (fixed capital minus land); land is never depreciated
- Total = 100% of FCIL over 6 calendar years

**Straight-line**: dk = (FCIL - S) / n, equal each year

## Key Assumptions & Parameters

| Parameter | Typical Value |
|-----------|--------------|
| Tax rate (t) | 25-40% (often 35% or 40%) |
| Discount rate (i) | 10-15% (cost of capital) |
| Plant life | 10-20 yr operation after 2-3 yr construction |
| Working capital | 15-20% of FCI (recovered in final year) |
| Salvage value | Often $0; if nonzero ~10% FCIL |
| Depreciation | MACRS 5-yr recovery |
| Inflation | Usually ignored (constant dollars) |
| Capacity factor | 90-95%; startup year 50-80% |

## Common Mistakes

1. **Forgetting working capital**: must appear as negative CF at startup and positive CF in final year
2. **Double-counting depreciation**: depreciation is NOT a cash outflow; it reduces taxes but is added back in the CF equation
3. **Wrong depreciation base**: MACRS depreciates FCIL (no salvage subtracted); straight-line uses (FCIL - S)
4. **Ignoring time value**: comparing undiscounted cash flows or using simple payback alone
5. **Tax on salvage**: if fully depreciated (BV=0), entire salvage value is taxable gain
6. **Misplacing cash flows**: capital costs during construction; revenue starts year 1 of operation
7. **Nominal vs. real inconsistency**: if CFs exclude inflation, discount rate must also exclude it
8. **Not discounting to same reference point**: all cash flows must be brought to time zero

## Course-Specific Requirements

- Report NPV, IRR, payback, and ROI for base case
- Cash flow table (Excel) covering all years: construction through plant end-of-life
- Spider/tornado plot with 4-5 key parameters; Monte Carlo with P(NPV>0)
- Break-even methanol selling price calculation
- MACRS depreciation (unless told otherwise); state all assumptions clearly
- Show sample calculations for at least one year; include cumulative discounted CFD
- Sensitivity/Monte Carlo results should drive final go/no-go recommendation
