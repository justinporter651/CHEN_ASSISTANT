Working with Model Analysis
See Also

Search the Knowledge Center for information on:

Model Analysis Tools: Find Optimums with Sensitivity and Optimization Features

Use model analysis tools to analyze and manipulate data from a simulation model you have developed.

Use these tools

To do this

Sensitivity

Examine the sensitivity of a process to key variables

Optimization

Maximize or minimize a user-specified objective function by manipulating flowsheet variables

Constraint

Specify equality and inequality constraints for optimization problems

Data Fit

Fit Aspen Plus simulation models to plant or laboratory data

Working with Sensitivity
See Also

Working with Model Analysis

Use the Sensitivity forms to examine the sensitivity of a process to key variables. Sensitivity blocks are used to generate tables and/or plots of simulation results as functions of feed stream or block input variables. The tabulated results can be:

Any flowsheet variables you designate

Functions of flowsheet variables

Sensitivity blocks provide information in addition to the base-case results but have no effect on the base-case simulation itself.

Sensitivity blocks with more than one varied variable generate a row in the sensitivity table for each combination of values. If you are interested in the sensitivity to more than one variable, with each varied independently, use a separate sensitivity block for each varied variable or use the Series option on the Vary sheet.

This sensitivity block operates only in sequential-modular simulations. To do sensitivity analysis in equation-oriented (EO) calculations, use the EO Sensitivity block under the EO Configuration folder.

Use this form

To do this

Input

To specify property methods and models for your simulation

Results

To view the results of the sensitivity analysis and to analyze the variation of the selected process results with changes to key process variables

Sensitivity Input Form
See Also

Working with Sensitivity

Search the Knowledge Center for information on:

Model Analysis Tools: Find Optimums with Sensitivity and Optimization Features

Use the Sensitivity | Input form to specify property methods and models for your simulation.

Use this sheet

To do this

Vary

Identify the input variables to manipulate in order to generate the table

Define

Identify the flowsheet variables that are to be tabulated, or used to compute the tabulation results

Tabulate

Define what you want Aspen Plus to tabulate

Options

Specify unit operation models, convergence blocks, and streams to be reinitialized, as well as select diagnostics level and report options

Cases

Specify variable values for each case, when the Cases option is used.

Fortran

Enter Fortran statements to be used in computing the tabulated results and varied variable range

Declarations

Enter Fortran declarations to be used in computing the tabulated results and varied variable range

Comments

View or specify the description and comments for an object

This sensitivity block operates only in sequential-modular simulations. To do sensitivity analysis in equation-oriented (EO) calculations, use the EO Sensitivity block under the EO Configuration folder.

Sensitivity Input Vary Sheet
See Also

Input Form Help

Search Variables Form

Troubleshooting Accessed Variables

Use this sheet to identify the flowsheet variables that are to be varied to generate the table. Only block input and process feed stream variables may be varied.

The Variable column is automatically filled in with sequential numbers which identify the varied variables. In each row of the table, choose a variable in one of these ways:

Click the row and use the Manipulated variable section of Edit selected variable to define the variable. You can select a variable by clicking image\search.gif beside the Variable field.

ClosedEdit selected variable
Copy an input variable from the form where it is specified, or from another variable definition sheet, and paste into the Manipulated variables grid.
If you open two windows, drag and drop variables from other forms directly into the Manipulated variables grid. See also Variables Which Cannot Be Accessed.
You can use the arrows at the right side of the grid to reorder a selected variable, and the buttons below the grid to create a New row to define a new variable, Delete the selected variable, and Copy and Paste variables.

Click Send to Multi-Case to export this sensitivity analysis to Aspen Multi-Case. The Export Configuration dialog box appears.

Note: Variables for which Manipulated variable limits is set to List of values are not supported.

Choose from these options for how to export to Aspen Multi-Case.

In the Create Multi-Case Scenario group, choose one of these options:

Case Study: Case Study scenarios let you perform a "what if" analysis in order to monitor the steady state response of key variables to changes in your process.

Reduced Order Model - Planning: Reduced Order Model projects generate the data to create reduced order models in AI Model builder, facilitating the creation of surrogate models for rigorous HYSYS or Aspen Plus models. For Planning models, you select the applicable independent and dependent variables.

Reduced Order Model - Unified: Aspen Unified scenarios facilitate integration between Aspen Multi-Case and Aspen Unified. Aspen Unified integrates planning and scheduling activities into a single dynamic environment. It brings together planning, scheduling, dynamic optimization and operations accounting into a common unified environment where assets and data can be shared where needed to build fit-for-purpose models to produce consistent decisions.

Then click Export. Aspen Multi-Case opens in your web browser, displaying the progress of scenario creation. When it completes, the scenario is ready to run in Aspen Multi-Case.

Select the Save to Multi-Case Json File option to create a .json file that stores the configuration of the Sensitivity Analysis. If you import this file into an Aspen Multi-Case Case Study project by clicking Create from Simulator, all independent and dependent variables from the Sensitivity Analysis are imported, and the new scenario is ready to run.

Also select each variable in the Manipulated variables grid to specify its limits in the Manipulated variable limits section of Edit selected variable. For each variable, you can specify a list of values, a range of equally spaced values, or a range of logarithmically spaced values. You can also specify labels (up to four lines) to be attached to the specified varied variables on the Results sheet using the Report labels section.

Note: Variables changed by a Sensitivity will remain at their last values at the start of the next run if you do not reinitialize the problem; this may be different than the base case values if you do not run the base case last. If you modify the problem so that these variables are no longer changed, the old changed variables will retain their last values from the Sensitivity (rather than values previously specified on other forms) until otherwise changed or reinitialized.

Note: When using any restricted databases, you cannot access any physical property parameters.

Number of Results

One row of the results table is generated for each possible combination of varied variable values. The number of possible combinations for the standard sensitivity calculation can be surprisingly large, resulting in excessive computer time and storage requirements. For example, 10 points for each of five varied variables would result in 100,000 evaluations of the sensitivity block loop and approximately 2,000 pages of report output.

There are two options, either of which can be used to perform a smaller number of calculations on a wide range of variable values. On this sheet, if you select Case Study, then instead of specifying variable values here, use the Cases sheet to specify the values for each variable for each case run. This option lets you tabulate data in the usual manner of a Sensitivity block for an arbitrary set of cases involving many variables. Alternatively, you can select the Series checkbox on the Options sheet to vary each variable individually through its specified values while holding all other variables at their base case values.

Units

Flowsheet variables are in the units specified in the Edit selected variable section and in the Units column of the Manipulated variables grid. When a new variable is specified, these units are selected from the global units set. Changing the global units or the units in the referenced block afterward does not affect these units, to ensure that values specified in the Sensitivity remain valid.

Temporarily Excluding the Sensitivity

You can clear the Active checkbox to temporarily remove this sensitivity analysis from the problem without permanently deleting it.

Sensitivity Input Define Sheet
See Also

Input Form Help

Accessing Flowsheet Variables

Troubleshooting Accessed Variables

Use this sheet to identify the flowsheet variables that are to be tabulated or used to compute the tabulated results.

To use a sensitivity block, on this form you must first identify the flowsheet variable to be tabulated or to be used in a Fortran expression.

In the Variable column, enter a name to identify each variable on other Sensitivity sheets. This name must be a valid Fortran variable name, with additional naming restrictions. See Using the Define Sheet to Identify Flowsheet Variables for details.

Tip: If you open two windows, you can drag and drop variables from other forms directly into the Sampled variables grid. Aspen Plus will choose a name for these variables, but you can click the name in the Variable column and type a new name to rename them. You can also copy and paste variables from other variable definition sheets. See also Variables Which Cannot Be Accessed.

Select a variable's name to define it or modify its definition in the Edit selected variable section.

ClosedEdit selected variable
You can sample any number of flowsheet variables.

Flowsheet variables are in the units specified in the Edit selected variable section and in the Definition column of the Sampled variables grid. When a new variable is specified, these units are selected from the global units set. Changing the global units or the units in the referenced block afterward does not affect these units, to ensure that values specified in the Sensitivity remain valid.

This sensitivity block operates only in sequential-modular simulations. To do sensitivity analysis in equation-oriented (EO) calculations, use the EO Sensitivity block under the EO Configuration folder.

Note: When using any restricted databases, you cannot access any physical property parameters.

Sensitivity Input Tabulate Table Format Dialog Box
See Also

Sheet Help

Use this dialog box to supply column headings for the tabulated results. The column numbers correspond to the tabulated variables or expressions on the Tabulate sheet. The four rows of Column labels and two rows of Unit labels correspond to labels that appear above this column in the report. If the tabulated results expression is a single Fortran variable defined on the Define sheet, the Unit labels lines are generated automatically by Aspen Plus, so you need not enter them.

Sensitivity Input Optional Diagnostics Dialog Box
See Also

Sheet Help

Use this dialog box to adjust the diagnostic message level for the Simulation and for Fortran-defined variables. Use the top side of each slider to specify the level of message displayed in the control panel, and the bottom side to specify the level of message in the history file.

Simulation

Level

Description

0

Only terminal error messages are listed.

1

Level 0 and severe error messages are listed.

2

Level 1 and error messages are listed.

3

Level 2 and warnings are listed.

4

Level 3 and brief diagnostic information are listed.

5+

Level 4 and additional diagnostics for analyzing convergence and simulation problems are listed. The amount of information listed increases with each increasing level.

Fortran Defined Variables

Level

Description

0-4

Nothing is listed.

5

Values for all accessed variables before block execution are listed.

6

Level 5 messages and values for all accessed variables after block execution are listed.

Sensitivity Input Optional Report Options Dialog Box
See Also

Sheet Help

Use this dialog box to select these options for the ASCII report file:

Number of significant figures (5 or 7)

Number of columns (80 or 132)

Also specify whether to sort the results by the varied variable (only available when there is only one varied variable). This allows the results to be plotted if they are run out of order, either because of when the base case is run or because a list of values was specified which is not in order.

Sensitivity Input Cases Sheet
See Also

Sheet Help

Use this sheet to specify the values for each variable in each case when the Cases option is selected on the Vary sheet.

For this option, each row in the grid on this sheet represents the specifications for one case to be run. If any values are unspecified, the base case values for those variables are used. The total number of runs will be the number of rows in this grid, plus one if the base case is specified to be run on the Optional sheet.

Sensitivity Input Fortran Sheet
See Also

Input Form Help

Rules for In-Line Fortran

Use this sheet to enter Fortran statements to be used in computing the tabulated results and varied variable range. Fortran statements are needed only if functions involved are too complex to be represented on the Vary and Tabulate forms. Use Fortran variables defined on the Define sheet.

Do not enter Fortran declarations on this sheet. These statements must be entered on the Declaration sheet.

Sensitivity Input Declarations Sheet
See Also

Input Form Help

Rules for In-Line Fortran

Use this sheet to include Fortran declarations such as:

COMMON definitions

DIMENSION definitions

EQUIVALENCE definitions

Data type definitions (INTEGER, REAL, and CHARACTER)

Do not declare variables on this form if you have already defined them on the Define sheet. The type (integer, real) and dimension of a variable are determined by the value it references.

Any Fortran variable whose value needs to be retained from one iteration of a sensitivity block to the next should be included in a COMMON. Similarly, any Fortran variable used by more than one sensitivity block should also be placed in a COMMON.

Any declaration that you enter in one sensitivity block automatically applies to all other sensitivity blocks (any one COMMON should be declared in only one sensitivity block). You can use both blank and labeled COMMONs. Fortran variables defined on the Define sheet cannot be placed in a COMMON.

You cannot use the Fortran declarations IMPLICIT and SUBROUTINE.

Sensitivity Results Form
See Also

Working with Sensitivity

Use this form to view the results of your sensitivity analysis and to analyze the variation of your selected process results with changes to key process variables.

Use this sheet

To do this

Summary

View the results of the sensitivity analysis

Define Variable

View the values of defined variables

Status

View the convergence status and warning or error messages generated by an object

Sensitivity Results Summary Sheet
See Also

Results Form Help

Use this sheet to view the results of your sensitivity analysis and to analyze the variation of your selected process results with changes to key process variables.

Tabulated results for a sensitivity block are in the units defined on the Input | Define sheet.

You can generate plots of this data using the plot gallery in the Home tab of the ribbon, including 3D plots of the variation of one tabulated variable against two different varied variables if there are at least two varied variables.

Note: To copy all the data from this sheet quickly, without copying the information needed to establish live links, click the empty cell in the upper left corner, to the left of the column headings.

Sensitivity Results Define Variable Sheet
See Also

Results Form Help

Use this sheet to view these results for each defined variable in this block:

Variable name

Base-case value

Units of the variable value

Note: To copy all the data from this sheet quickly, without copying the information needed to establish live links, click the empty cell in the upper left corner, to the left of the column headings.

Working with Optimization
See Also

Working with Model Analysis

Working with Constraint

Use Optimization to maximize or minimize a user-specified objective function by manipulating flowsheet variables. Equality or inequality constraints may be imposed on the optimization. The optimization objective may be any function of flowsheet variables computed using Fortran expressions or in-line Fortran statements.

Optimization problems are solved iteratively. By default, Aspen Plus automatically generates and sequences a convergence block for the optimization problem, or you can enter your own convergence specifications on Convergence forms. Use the SQP and Complex methods to converge optimization problems.

Use this form

To do this

Input

Specify parameters for the optimization

Results

View results of defined variables

Optimization Input Form
See Also

Working with Optimization

Search the Knowledge Center for information on:

Model Analysis Tools: Find Optimums with Sensitivity and Optimization Features

Use these sheets to specify parameters for the optimization:

Use this sheet

To do this

Define

Identify the flowsheet variables used in the objective function or manipulated variable limits.

Objective & Constraints

Specify an objective function and identify constraints associated with the optimization. Constraints are defined on the Constraint form.

Vary

Identify the manipulated variables and variable limits.

Fortran

Enter executable Fortran statements.

Declarations

Enter Fortran declarations.

Comments

View or specify the description and comments for an object

Optimization Input Define Sheet
See Also

Input Form Help

Accessing Flowsheet Variables

Troubleshooting Accessed Variables

Use this sheet to identify the flowsheet variables used in the objective function or manipulated variable limits.

In the Variable column, enter a name to identify each variable on other Optimization sheets. This name must be a valid Fortran variable name, with additional naming restrictions. See Using the Define Sheet to Identify Flowsheet Variables for details.

Tip: If you open two windows, you can drag and drop variables from other forms directly into the Sampled variables grid. Aspen Plus will choose a name for these variables, but you can click the name in the Variable column and type a new name to rename them. You can also copy and paste variables from other variable definition sheets. See also Variables Which Cannot Be Accessed.

Select a variable's name to define it or modify its definition in the Edit selected variable section.

ClosedEdit selected variable
You can sample any number of flowsheet variables.

Flowsheet variables are in the units specified in the Edit selected variable section and in the Definition column of the Sampled variables grid. When a new variable is specified, these units are selected from the global units set. Changing the global units or the units in the referenced block afterward does not affect these units, to ensure that values specified in the objective function remain valid.

Note: When using any restricted databases, you cannot access any physical property parameters.

Optimization Input Objective & Constraints Sheet
See Also

Optimization Form Help

Use this sheet to specify an objective function and constraints to be included in the optimization. You can select whether the optimization should minimize or maximize the objective function.

Optimization Input Vary Sheet
See Also

Input Form Help

Search Variables Form

Troubleshooting Accessed Variables

Use this sheet to identify the manipulated flowsheet variables and specify their upper and lower limits and other parameters. The limits for manipulated variables can be constants or functions of flowsheet variables.

To create a manipulated variable:

Click New, or
In the Variable field under Manipulated Variable, select <New> from the list, or
Drag and drop or copy a variable from another input form into the table on this sheet. In this case, the entire definition of the variable will be copied with it.
Manipulated variables are always assigned sequential numbers starting from 1. You cannot edit these numbers directly, but you can reorder the variables using the arrow buttons at the right side of the grid.

Click any variable in the grid or select it in the Variable list to edit its definition in the Manipulated variable section in the same way as other accessed variables: Choose the type and the object the variable is associated with, then choose the variable for that object. Click image\search.gif to search for a variable using the Search Variables form. If you select a variable which is an element of a vector or array, specify one or more IDs to identify the specific variable.

If the variable has units, you can choose the units in the grid or at the bottom of the Manipulated variable section. When a new variable is specified, these units are selected from the global units set. Changing the global units or the units in the referenced block afterward does not affect these units, to ensure that values specified in the limits and objective function remain valid.

For each manipulated variable, in the grid or in the Manipulated variable limits section, you can specify:

Upper and lower limits which restrict the values the optimization solver can assign.

A step size (not applicable to the BOBYQA solver) for the first step. This is normally specified as a fraction of the variable range (upper limit – lower limit), but see below if using SQP.

A maximum step size, used only by SQP, and applied only for a limited number of initial iterations. The maximum step size is always defined as a fraction of the variable range (upper limit – lower limit).

Note: If the optimization is solved by SQP, values in the SQP block can affect the step size and maximum step size:

The SQP Input Optimization sheet allows you to override the values of the step size and maximum step size (available only if you define an SQP block to converge this optimization).

On the Options Methods SQP sheet (for optimizations converged by system-generated convergence blocks) or on the SQP Input Parameters sheet (if you define an SQP block to converge this optimization) you can specify how many initial iterations the maximum step size is applied.

On the Advanced Parameters Dialog Box of the same sheet, you can specify the Interpretation Method which applies only to the step size.

Range: A fraction of the variable range (upper limit – lower limit)
Variable: A fraction of the variable value
Value: The absolute value of the step size in the units of the variable
In the grid only, you can clear the Active checkboxes to remove one or more manipulated variables from the problem without clearing their specifications from the form.

Use the Report Labels fields to enter a label that will appear in the report to describe this variable.

Note: Variables manipulated by an Optimization will remain at their last values at the start of the next run if you do not reinitialize the problem. If you modify the problem so that these variables are no longer manipulated, the old manipulated variables will retain their last values from the Optimization (rather than values previously specified on other forms) until otherwise changed or reinitialized.

Note: When using any restricted databases, you cannot access any physical property parameters.

Optimization Input Fortran Sheet
See Also

Input Form Help

Rules for In-Line Fortran

Use this sheet to enter optional Fortran statements to compute the manipulated variable range and objective function. Fortran statements are needed only if the functions involved are too complex to be represented on the Vary or Objective & Constraints sheet. Do not enter Fortran declarations on this sheet. These statements must be entered on the Declaration sheet.

Optimization Input Declarations Sheet
See Also

Input Form Help

Rules for In-Line Fortran

Use this sheet to enter Fortran declarations, such as:

COMMON declarations

DIMENSION statements

Data type declarations (INTEGER and REAL)

Do not declare variables on this sheet if you defined them on the Define sheet. The data type and dimension of a defined variable are determined by the value referenced.

Any Fortran variable whose value needs to be retained from one iteration of an optimization to the next should be included in a COMMON.

Optimization Results Form
This form contains the following sheets:

Use this sheet

To do this

Summary

Objective function value and iteration count

Manipulated Variables

Final values of manipulated variables

Constraints	Error and convergence status of constraints
Iterations

Profiles of constraints, manipulated variables, objective function, and other statistics at each iteration

Status

View the convergence status and warning or error messages generated by an object

Optimization Results Summary Sheet
See Also

Optimization Results Form

Use this sheet to view the objective function value and these iteration count results:

Objective function value

Number of iterations on last outer loop
For each sampled variable, the definition, units, initial value, and final value

Optimization Results Manipulated Variables Sheet
See Also

Optimization Results Form

Use this sheet to view the following results for each manipulated variable:

Manipulated variable definition
Lower bound
Upper bound
Status (indicates if variable is at bound)
Previous value
Final value
Units

Optimization Results Constraints Sheet
See Also

Optimization Results Form

Use this sheet to view the error and convergence status of each constraint.

Optimization Results Iterations Sheet
See Also

Optimization Results Form

Use this sheet to view profiles of the following variables at each iteration:

Objective function

Solver parameters:

For SQP:

The name of the optimized item with the greatest constraint violation, if any. This may be a constraint, a tear stream (indicated with * before the name), or a tear variable (indicated with # before the name).

The maximum constraint violation (CMAX) for active constraints, if any.

The Kuhn-Tucker error

The Lagrangian function

For BOBYQA:

The constraint penalty

The penalty prefactor

The Lagrangian function

For Complex, no additional parameters are shown.

The value of each constraint (the tolerance appears in the column heading) if constraints are included
The value of each manipulated variable

Working with Constraint
See Also

Working with Model Analysis

Working with Optimization

Use Constraint to specify equality and inequality constraints for optimization problems. Equality constraints are the same as design specifications in non-optimization problems. Each constraint you define is identified by an ID you supply. You use the Constraint IDs that you define to identify constraints on the Optimization form.

You do not have to define constraints on this form before using the Optimization form. Wherever you are prompted for a Constraint ID, you can enter an existing ID or a new ID. If you enter a new ID, however, you must define the constraints on the Constraint forms before you run the simulation.

Use this form

To do this

Input

Specify parameters for the constraint

Results

View results of defined variables

Constraint Input Form
See Also

Working with Constraint

Use these sheets to specify parameters for the constraint:

Use this sheet:

To do this:

Define

Identify the flowsheet variables used in the constraint definition

Spec

Specify the constraint and its tolerance

Fortran

Enter executable Fortran statements

Declarations

Include Fortran declarations

Comments

View or specify the description and comments for an object

Constraint Input Define Sheet
See Also

Input Form Help

Accessing Flowsheet Variables

Troubleshooting Accessed Variables

Search Variables Form

Use this sheet to identify the flowsheet variables used in the constraint expressions.

In the Variable column, enter a name to identify each variable on other Constraint sheets. This name must be a valid Fortran variable name, with additional naming restrictions. See Using the Define Sheet to Identify Flowsheet Variables for details.

Tip: If you open two windows, you can drag and drop variables from other forms directly into the Sampled variables grid. Aspen Plus will choose a name for these variables, but you can click the name in the Variable column and type a new name to rename them. You can also copy and paste variables from other variable definition sheets. See also Variables Which Cannot Be Accessed.

Select a variable's name to define it or modify its definition in the Edit selected variable section.

ClosedEdit selected variable
You can sample any number of flowsheet variables.

Flowsheet variables are in the units specified in the Edit selected variable section and in the Definition column of the Sampled variables grid. When a new variable is specified, these units are selected from the global units set. Changing the global units or the units in the referenced block afterward does not affect these units, to ensure that values specified in the constraint remain valid.

You can select a desired variable by clicking image\search.gif to access the Search Variables form.

Note: When using any restricted databases, you cannot access any physical property parameters.

Constraint Input Spec Sheet
See Also

Input Form Help

Specifying the Constraint Expression

Use this sheet to specify the constraint as a function of the sampled variables and supply a tolerance on the constraint. Constraint functions are defined as follows:

For equality constraints:

–Tolerance ≤ Specification – Expression ≤ Tolerance

For less than or equal to constraints:

Specification – Expression ≤ Tolerance

For greater than or equal to constraints:

Specification – Expression ≥ Tolerance

Constraint Input Fortran Sheet
See Also

Input Form Help

Rules for In-Line Fortran

Use this sheet to enter optional Fortran statements to compute constraint functions and constraint tolerance. Fortran statements are needed only if the functions involved are too complex to be represented on the Spec sheet. Do not enter Fortran declarations on this sheet. These statements must be entered on the Constraint Declaration sheet.

Constraint Input Declarations Sheet
See Also

Input Form Help

Rules for In-Line Fortran

Use this sheet to enter Fortran declarations, such as:

COMMON declarations

DIMENSION statements

Data type declarations (INTEGER and REAL)

Do not declare variables on this sheet if you defined them on the Define sheet. The data type and dimension of a defined variable are determined by the value referenced.

Any Fortran variable whose value needs to be retained from one iteration of a constraint to the next should be included in a COMMON.

Constraint Results Form
This form contains the following sheets:

Use this sheet

To do this

Results

View results

Status

View the convergence status and warning or error messages generated by an object

Working with Data Fit
See Also

Working with Model Analysis

Defining a Data Fit Problem

Ensuring Well-Formulated Data Fit Problems

Sequencing Data Fit

Troubleshooting Data Fit Convergence Problems

Data Fit Numerical Formulation

Use Data Fit blocks to fit Aspen Plus simulation models to plant or laboratory data. You provide one or more sets of measured data for input and results variables of a simulation model. Data Fit adjusts (or estimates) input parameters to make the best fit of the model to the data. If you want Data Fit to reconcile measured data for input variables to match the fitted model, it can do this simultaneously.

Data Fit minimizes the weighted sum of squares for the differences between the measured data and the model prediction. In statistical terms, Data Fit performs either ordinary least squares or maximum likelihood (errors-in-variables) estimation.

Use this form

To

Data Set Point-Data

Fit one or more steady-state experiments or operating points
Fit initial charge and final products of a batch reactor, but not intermediate time points
Fit feeds and products of a plug flow reactor, but not points along the length of the reactor

Data Set Profile-Data

Fit time series data for a batch reactor
Fit measurements along the length of a plug flow reactor

Regression Input

Define a regression case

Regression Results

View the results of a regression

References

1. Gay, D., "Algorithm 717. Subroutines for Maximum Likelihood and Quasi-Likelihood Estimation of Parameters in Nonlinear Regression Models", ACM Trans. on Math Software, Vol. 19, No. 1., (March 1993), pp. 109-130.

2. Dennis, J., Gay, D. & Welsh, R., "Algorithm 573, NL2SOL-An Adaptive Nonlinear Least-Squares Algorithm", ACM Trans. Math Software, Vol. 7, No. 3, (Sept. 1981), pp. 369-383.

3. Dennis, J., Gay, D. & Welsh, R. "An Adaptive Nonlinear Least-Squares Algorithm", ACM Trans. Math. Software, Vol. 7, No. 3 (Sept. 1981), pp. 348-368.

For additional reading:

Gay, D., "Algorithm 611. Subroutines for Unconstrained Minimization using a Model/Trust-Region Approach", ACM Trans. Math Software, Vol. 9, No. 4 (Dec. 1983), pp. 369-383.

Luecke, R. & Britt, H. "The Estimation of Parameters in a Non-linear, Implicit Model", Technometrics, Vol. 15, No. 2, 1973.

Kim, J., Liebman, M., & Edgar, T., "Robust Error-in-Variables Estimation using Non-linear Programming Techniques", AIChE, Vol. 36, No. 7, 1990.

Mah, R. S. H., "Chemical Process Structures & Information Flows", Butterworth, Stoneham, MA 1990.