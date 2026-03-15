# Technical Writing Standards -- CHEN 4470 Quick Reference
> For the final design report (Word document)

## Voice & Tense Rules

- Use passive voice throughout. "It was found..." not "We found..."
- No first person ("I," "we," "me," "our").
- Do not address the reader ("you should...") or use "one can see..."
- Write as a recommendation: "It is recommended that a 10 m3 reactor be used," NOT "A 10 m3 reactor was installed."
- No active verbs for inanimate objects: "This report contains the optimization..." NOT "This report optimizes..."

## Report Structure & Section Order

1. **Cover Memorandum** -- Summarizes bottom line. Stands alone (no figures, tables, or internal references). Signed by all team members. Use "TO" not "ATTN"; include at least one key result.
2. **Title Page** -- Title, contributor names, course number/name, date.
3. **Abstract** -- Own page. Stands alone (no refs to body figures/tables/equations). Must be informative ("Capital investment is $100M") not descriptive ("see Section 4"). Write last.
4. **Contents** -- Page titled "Contents" (not "Table of Contents"). All pages numbered.
5. **Introduction** -- Project goals, brief summary of approach. No results or conclusions here.
6. **Results** -- What was found (no explanations). Required: labeled/dated PFD (no simulator PFDs), stream tables (T, P, phase, flowrates), mfg cost summary, investment summary (by equipment), equipment specs. Narrative prose must connect all figures/tables.
7. **Discussion** -- How results were obtained, what they mean. Choices, alternatives, optimizations. Not a calculation log.
8. **Conclusions** -- Nothing new. Reiterate key conclusions concisely.
9. **Recommendations** -- Further action/study. No "pie in the sky." Do not list incomplete work.
10. **References** -- Consistent citation format required (Author (date) or bracketed [1] — follow instructor preference). No uncited refs. Cite figure sources (omission = plagiarism). Active web links with date viewed.
11. **Appendix** -- Calculations, programs, full simulator report. Own contents page required. Pages numbered.

## Figures & Tables

- Numbered sequentially by first citation order. Uncited = do not include.
- Cite by number ("Figure 3"), never by location ("above"/"below"). Capitalize as proper names.
- **Figure captions at bottom.** Nothing at top (remove software titles). Descriptive: "Determination of Optimum Pipe Diameter" not "Cost vs. Diameter."
- **Table titles at top.** Columns labeled with units. Decimal-aligned.
- Only two categories exist: "figures" and "tables." Never write "graph," "sketch," or "chart."
- Place near citation. Do not duplicate: pick figure OR table, not both.
- Scatter plots for quantitative x-axis; bar charts for categorical; pie charts for parts-of-whole (show total, label %).
- Avoid 3-D charts. Axis labels = variable name + units ("Manufacturing Cost ($/y)"). Round ranges. Include origin.

## Equations & Units

- Centered equation, right-justified number in parentheses.
- Introduce with sentence ending in colon, then display. Never cite an equation number before it appears.
- Capitalize "Equation 1" as a proper name.
- No multiplication symbols: PV = nRT (no *, dot, or x). No ^ for exponents. No E-notation.
- Define all terms after the equation or in a nomenclature section.
- Use numerals + symbols in text: 5 deg C, $25 million/y. Leading zeroes required (0.25 not .25).
- 3-4 sig figs max for costs. No scientific notation for dollars.

## Common Mistakes to Avoid

1. Descriptive abstract ("Section 4 contains...") instead of informative ("Capital cost is $12M").
2. Results or conclusions in the Introduction.
3. Figures/tables without narrative explanation.
4. Simulator PFDs instead of properly drawn, labeled, dated PFDs.
5. Referencing figures by location ("see above") instead of by number.
6. Title at top of figure; caption just repeating axis labels.
7. First person, addressing reader, or active verbs on inanimate objects.
8. Writing as if plant is built ("was installed") instead of as recommendation.
9. Listing incomplete work as recommendations.
10. Over-reporting sig figs; using *, ^, or E-notation.
11. Uncited figures from external sources.

## Formatting Requirements

- Equation editor for all equations and symbols (no plaintext math).
- Pages numbered top-right or top-center. Sections numbered.
- One editor per group ensures consistent numbering, fonts, style across sections.
- Landscape figures/tables: top faces binding edge.
- Spell-check then manual proofread (spell-check misses "too" vs. "two").
- Commas after introductory phrases/conjunctive adverbs. Semicolons before conjunctive adverbs joining clauses.
- Hyphenate compound adjectives: "high-pressure steam" (but "steam of high pressure").

## Professional Tone

- Write as consultant to client or engineer to supervisor — NOT as student.
- Avoid school language: "class", "semester", "assignment", "students", "project", "textbook".
- "Data" is plural ("the data indicate...").
- No journeying/diarying ("first we did this, then we tried...").
- Do not teach the reader or complain about difficulties.
- Communication counts for ~45% of the project grade.

## Course-Specific Standards

- Report = recommendation document, not description of built plant.
- Key results intentionally repeat across cover memo, abstract, and conclusions (different readers read different sections).
- Assume reader is a ChE unfamiliar with your project specifics.
- No one reads cover-to-cover; each section must serve its reader independently.
- Appendix needs a clear contents page for locating specific calculations.
- Results section order: PFD first, then stream table, then equipment specs/utilities, then economics.
- Discussion: explain why results are the "best" case — topological and parametric optimization justification.
