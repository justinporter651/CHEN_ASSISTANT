Working with RadFrac
See Also

Flowsheet Connectivity

Specifying RadFrac

Advanced Distillation Features

EO Usage Notes

Getting Started with Aspen Rate-Based Distillation

RadFrac is a rigorous model for simulating all types of multistage vapor-liquid fractionation operations. These operations include:

Ordinary distillation

Absorption

Reboiled absorption

Stripping

Reboiled stripping

Extractive and azeotropic distillation

RadFrac is suitable for:

Two-phase systems

Three-phase systems

Narrow and wide-boiling systems

Systems exhibiting strong liquid phase nonideality

RadFrac can detect and handle a free-water phase or other second liquid phase anywhere in the column. RadFrac can handle solids on every stage.

RadFrac can handle pumparounds leaving any stage and returning to the same stage or to a different stage.

RadFrac can model columns in which chemical reactions are occurring. Reactions can have fixed conversions, or they can be:

Equilibrium

Rate-controlled

Electrolytic

RadFrac can also model columns in which two liquid phases and chemical reactions occur simultaneously, using different reaction kinetics for the two liquid phases. In addition, RadFrac can model salt precipitation.

Although RadFrac assumes equilibrium stages, you can specify either Murphree or vaporization efficiencies. You can manipulate Murphree efficiencies to match plant performance.

You can use RadFrac to size and rate columns consisting of trays and/or packings. RadFrac can model both random and structured packings.

Use the following forms to enter specifications and view results for RadFrac:

In Folder

Use this form

To do this

Specifications

Setup

Specify basic column configuration and operating conditions

Specification Summary

View and edit column specifications

Design Specifications

Specify design specifications and view convergence results

Vary

Specify manipulated variables to satisfy design specifications and view final values

Efficiencies

Specify stage, component or sectional efficiencies

Properties

Specify physical property parameters for column sections

Reactions

Specify equilibrium, kinetic, and conversion reaction parameters

Block Options

Override global values for physical properties, simulation options, diagnostic message levels, and report options for this block

User Subroutines

Specify user subroutines for reaction kinetics, KLL calculations, tray sizing and rating, and packing sizing and rating

Configuration

Heaters and Coolers

Specify stage heating or cooling

Pumparounds

Specify pumparounds and view pumparound results

Pumparounds Hcurves

Specify pumparound heating or cooling curve tables and view tabular results

(This form appears inside the folder for each Pumparound.)

Decanters

Specify decanters and view decanter results

Condenser Hcurves

Specify condenser heating or cooling curve tables and view tabular results

Reboiler Hcurves

Specify reboiler heating or cooling curve tables and view tabular results

Column Internals

(these forms appear when using the new column analysis feature introduced in V9)

Sections

Specify tray and/or column sections which make up each column internals configuration

Sections Geometry

Specify geometry of column sections

Sections Results

View column internals results

Hydraulic Plots

View plots of hydraulic results

Column Hydraulic Results	Summary of hydraulic results for all sections of active column option
Sizing and Rating (these forms appear when using the legacy sizing and rating capability from versions before V9)

Tray Sizing

Specify sizing parameters for tray column sections, and view results

Tray Rating

Specify rating parameters for tray column sections, and view results

Packing Sizing

Specify sizing parameters for packed column sections, and view results

Packing Rating

Specify rating parameters for packed column sections, and view results

Rate-Based Modeling

Rate-based Setup

Global specifications for the rate-based calculation mode

Generalized Transport Correlations

Specify parameters for the generalized transfer correlations of Aspen Rate-Based Distillation

User Transport Subroutines

Specify user subroutines for correlations used in rate-based calculations for mass transfer coefficients, heat transfer coefficients, interfacial area, and holdup

Interface Profiles

View column profiles at the interface (rate-based calculations only)

Transfer Coefficients

View diffusion, mass transfer, and heat transfer coefficients

Dimensionless Numbers

View dimensionless numbers calculated by Aspen Rate-Based Distillation

Efficiencies and HETP

View efficiency results for rate-based calculations

Rate-based Report

Select report options related to Rate-based Distillation

Analysis

Analysis

Specify options for column targeting analysis

NQ Curves

Optimize the number of trays and feed location based on rigorous column calculations

Report

Specify block-specific report options

Convergence

Estimates

Specify initial estimates for stage temperatures, and vapor and liquid flows and compositions

Convergence

Specify convergence parameters for the column and feed flash calculations, and block-specific diagnostic message levels

Dynamics

Dynamics and Heat Transfer

Specify parameters for dynamic simulations

EO Modeling

EO Variables

Specify equation-oriented variable attribute changes for the current run only, or view all equation-oriented variable attributes for the block

EO Input

Specify equation-oriented variables

Spec Groups

Specify equation-oriented specification groups

Ports

Specify equation-oriented variables collected to form ports

Results

View key column results for the overall RadFrac column

Profiles

View and specify column profiles

Stream Results

View stream results

Summary

View and edit all scalar variables for this block.

 RadFrac Setup Form
See Also

Working with RadFrac

Getting Started with Aspen Rate-Based Distillation

Use this form to enter basic column configuration and operating conditions:

Use this sheet

To specify

Configuration

Calculation type, condenser and reboiler types, maximum number of phases, equilibrium stages, convergence methods, and operating conditions

Streams

Stages and feed convention for feed and product streams, including pseudo streams

Pressure

Stage pressures and pressure profile

Condenser

Condenser conditions

Reboiler

Thermosiphon reboiler configuration and conditions

3-Phase

Stages to test for liquid phase splitting and key components to identify the second liquid phase

Comments

View or specify the description and comments for an object

RadFrac Stage Wizard
Use the Stage Wizard to change the number of stages in the column while also updating stage numbers throughout the specifications for the block.

Enter the New number of stages. If this is more than the old number, you will be inserting stages into the column. If it is less, you will be deleting some stages.

On the next row, choose Above or Below in the box at the left. On the right, specify a stage number. The stages will be added or deleted above or below this stage, according to your choices.

Click OK. The specifications will be updated, if possible; otherwise an error message will appear explaining the reason why the change could not be made.

For example, if you change a column from 60 stages to 50, you will be deleting 10 stages. If you select Above and enter 20 on the second row, then you will be deleting the 10 stages above stage 20 (stages 10 through 19). All specifications outside this region will be updated (so a feed into stage 40 would be moved to stage 30).

There are some limitations to the Stage Wizard.

It can only be used on fully specified RadFrac or PetroFrac columns and only in the main column of PetroFrac.

You cannot delete stages with feed or product streams (including heat streams), decanters, heaters or coolers, etc.

If you delete stages which have other types of specifications, such as composition estimates or points in the specified pressure profile, the stage numbers will be deleted for those specifications but the specifications will remain, making the sheets incomplete. Visit those sheets to decide whether to update or delete the specifications.

If you have defined variables in Sensitivity, Optimization, or other operations outside the column model itself which refer to stage numbers in the column, these stage numbers will not be updated and may be out of range if you reduced the number of stages. Verify all such specifications after using the stage wizard.

RadFrac Feed Basis for Distillate/Bottoms Ratio Specification Dialog Box
See Also

Sheet Help

Use this dialog box to define the feed streams and components included in the specification basis.

RadFrac Setup Streams Sheet
See Also

Setup Form Help

Flowsheet Connectivity for RadFrac

Feed Stream Conventions

Use this sheet to enter inlet and outlet stream information, such as:

Inlet stream locations

Feed conventions for material streams

Product stream locations, phases, and flows

Pseudo stream types, locations, phases, conditions, and flows

You can specify product flows as molar flow ratios relative to the feed. This is normally the total of all feed streams but you can click Feed Basis to specify only certain streams or certain components or both.

Pseudo streams duplicate column internal streams and pumparounds as external streams, without actually drawing off material as with a side product. Pseudo stream specifications do not affect the column calculations.

You can connect the pseudo streams to other blocks. The source of the pseudo stream can be attached to any stage, thermosiphon reboiler, or pumparound. You must identify the phase for a stream that comes from a column stage. For a thermosiphon reboiler or pumparound, you must specify whether the pseudo stream is based on the inlet or outlet conditions.

The flow rate is optional for the pseudo stream. The default flow is the outlet flow rate from the stage, thermosiphon reboiler, or pumparound to which the pseudo stream is attached.

Because pseudo streams duplicate material, RadFrac will not maintain the overall material and energy balances if you use pseudo streams.

RadFrac Setup Pressure Sheet
See Also

Setup Form Help

Entering Profile Information and Interpolation in Column Models

Use this sheet to specify the column pressure profile. You can enter:

Pressure for the top stage, optionally for the second stage, and optionally pressure drop for the rest of the column

An explicit stage-by-stage profile

Pressure for the first stage and pressure drops for sections of the column

RadFrac Setup Condenser Sheet
See Also

Setup Form Help

Utilities

Use this sheet to specify condenser operating conditions. The specifications available depend on the type of condenser selected on the Configuration sheet.

Condenser specification

This section is only available for Partial-Vapor-Liquid condensers.

Choose to specify either temperature or distillate vapor fraction, and enter a value for the chosen specification. Distillate vapor fraction is defined as the ratio of vapor distillate flow to the total distillate flow.

Subcooling specification

Choose whether both the reflux and liquid distillate are subcooled, or only the reflux is subcooled. Specify either the degrees of subcooling or the reflux temperature.

If you specify degrees of subcooling, there are two types of each temperature unit available, for example, C and DELTA-C. These two types of temperature units are identical.

Utility specification

Choose a utility to provide cooling to the condenser.

RadFrac Setup Reboiler Sheet
See Also

Setup Form Help

Reboiler Configurations

Reboiler Handling

Utilities

Use this sheet to specify thermosiphon reboiler options, including:

Flow rate

Outlet condition (temperature, temperature change, or molar vapor fraction)

Outlet pressure

Reboiler return feed convention
Optional utility

Configuration

When Specify both flow and outlet condition is selected, you must enter an estimate for Reboiler Duty on the Configuration sheet.

When using reboiler integration with the Reboiler Wizard, the Flow rate and Outlet condition may be updated by the integration. See the Reboiler Wizard help for more information.

Note: The second configuration, Circulation with baffle, requires that the liquid flow leaving the thermosiphon reboiler be at least as much as the bottom product, or else the section from which this flow is drawn will dry up and the column will not converge.

RadFrac Reboiler Wizard
See Also

Sheet Help

Troubleshooting RadFrac Exchanger Integration

Use the Reboiler Wizard to configure a HeatX block and a Flash2 block to model the reboiler of this column. You may use existing blocks or create new ones.

How this works

The Reboiler Wizard creates a pseudo-stream containing a copy of the reboiler feed. The heat transfer and phase change is modeled within a HeatX block and a Flash2 block. One or two Calculator blocks (depending on your choices in the wizard) are then used to ensure the specifications and calculated values of the internal reboiler in the RadFrac column match those in the HeatX and Flash2 blocks. The Flash2 block always has 0 duty, and has 0 pressure change in Design and Rating modes and for the Kettle reboiler.

Note: If you want to change the configuration created with the Reboiler Wizard, we recommend that you use the wizard again, rather than editing the blocks. However, Aspen Plus does not prevent you from changing the configuration or connectivity of the streams and blocks created with the wizard, and if you do alter them and then try to use the wizard, the wizard may not reconnect them properly.

Pre-existing Specifications Required

If you select an existing HeatX block:

The Exchanger Type (Kettle reboiler or Thermosiphon) in the HeatX block must match that specified in RadFrac.

The Type in the Reboiler Wizard is set to the Calculation type in HeatX (which must be Shortcut or Shell&Tube).

The Mode in the Reboiler Wizard is set to the Type in HeatX (which must be Design, Rating, or Simulation).

For Rating and Design modes of the heat exchanger, you may specify the column as you normally would. The calculated duty is passed to HeatX, which rates or designs the heat exchanger.

In Simulation mode of the heat exchanger, the exchanger updates at least one column specification (as described below) for which you have entered a value. You must enter a value for at least one specification to be updated.

For the Kettle reboiler, this specification can only be Reboiler Duty, which you must select as one of the two Operating Specifications on the Configuration sheet.

Note: This configuration can be used to simulate a once-through reboiler, as shown in Reboiler Configurations.

For the Thermosiphon reboiler, Reboiler Duty, the thermosiphon Flow rate, and/or Outlet condition can be updated by the exchanger, as follows:

When Flow rate is entered on the Reboiler sheet, if the Circulation type option on the Reboiler Wizard is Calculated, then the heat exchanger updates the flow rate. The Calculated option is only available when the exchanger type (Type in the Reboiler Wizard) is Shell&Tube; the shortcut calculation cannot calculate flow rate.

When Outlet condition is entered on the Reboiler sheet, it will be updated by the exchanger.

When both Flow rate and Outlet condition are specified, you need to enter an estimate for Reboiler Duty on the Configuration sheet. In other cases, if Reboiler Duty is entered on the Configuration sheet, it is a specification and will be updated by the heat exchanger integration.

Note: If one of these column specifications is entered but is manipulated by another operation such as a Vary, it is no longer a specification, and cannot be properly updated by the heat exchanger integration.

If this operation is a Vary within the column, the property is treated as if unspecified.

If the operation is outside the column, the Reboiler Wizard cannot detect it. The outside operation will take precedence over the integration, making it not work as intended. You should avoid using such external operations with heat exchanger integration.

General specifications

Use this field

To

Reboiler Type

See the specified reboiler type, Kettle or Thermosiphon. This is specified on the Configuration sheet of RadFrac and cannot be changed here.

Pseudo Stream ID

View or change the name of the pseudostream providing flow to the HeatX block.

HeatX specifications

Use this field

To

Block ID

Specify a HeatX block on the flowsheet to use for this reboiler. You may enter a new block ID here to create a new block.

If you use an existing HeatX block, and its Type or Mode are not supported in the Reboiler Wizard, or the Reboiler Type doesn't match the column, you will not be allowed to select the block and a message will appear explaining why.

You cannot specify a block in another hierarchy level, but you can choose to move all the related blocks into a hierarchy under this level using Move to Hierarchy Block, below.

Type

Choose Shell&Tube to use the rigorous Shell&Tube program to model the heat exchanger or Shortcut to use Shortcut mode in HeatX. This type is applied to the Calculation type in the HeatX block.

Mode

Choose Design, Rating, or Simulation mode for the HeatX block. This mode is applied to the Type of the HeatX block.

Circulation type

Only available in Simulation mode for the Thermosiphon reboiler, when the thermosiphon Flow rate is specified on the Reboiler sheet and not otherwise manipulated.  When this is Calculated, the flow rate value specified on the Reboiler sheet is updated by the heat exchanger integration. The circulation type is applied to the Thermosiphon circulation of the cold stream in the HeatX block.

Shell&Tube input file

For the Shell&Tube type, specify name for a Shell&Tube input file, with full path and file extension. Click Browse to locate the file, or type or paste in the file name and path.

Flash, Calculator, Hierarchy specifications

Use this field

To

Flash Block ID

Specify a Flash2 block on the flowsheet to use for this reboiler. You may enter a new name to create a new Flash2 block.

You cannot specify a block in another hierarchy level, but you can choose to move all the related blocks into a hierarchy under this level using Move to Hierarchy Block, below.

1st Calculator Block ID

Specify the ID for the Calculator block. This Calculator block is used to equate the heat exchanger duty to the duty of the reboiler, except in Simulation mode. In that case it is used to equate the pressure of the Flash2 block to the pressure in the reboiler of the column.

2nd Calculator Block ID

Specify the ID for the 2nd Calculator block, used only in Simulation mode. This calculator block is used to converge on the reboiler duty, vapor fraction, and/or flow rate (depending on specifications), using the damping factor.

Damping Factor

In Simulation mode, when the reboiler duty, vapor fraction, and/or flow rate are not fixed, this damping factor is used to eliminate oscillations in the convergence to the these properties. Column specifications are set to oldval + damp x (calcval - oldval) where oldval is the column parameter value from the previous iteration, damp is the damping factor, and calcval is the calculated value for this specification in the last iteration of the heat exchanger.

Move to Hierarchy Block

Select the checkbox and specify a Hierarchy block under the current hierarchy level to move the column and its associated blocks into a Hierarchy block. If you specify a name that does not exist, a new hierarchy will be created with this name; if you specify an existing Hierarchy name, the Hierarchy block should be empty.

If you do not select this checkbox, the blocks remain in the current hierarchy level.

Maintain link to these blocks

Normally, the Reboiler Wizard maintains a link to the blocks selected, and you cannot change the specifications set by the Reboiler Wizard directly in those blocks. If you clear this check box, this link is not maintained, and you can change any specification afterward.

Caution: If you clear this checkbox and change specifications, you can cause the reboiler to be modeled incorrectly. Be sure you understand the changes you are making.

Caution: In this version, Aspen Plus cannot prevent you from deleting one of the linked blocks. You should clear the checkbox before deleting one of these blocks; otherwise you may experience unpredictable effects. When you delete a block, any Calculator blocks referencing it may be marked incomplete. You should delete those blocks as well.

When you click OK after completing the above specifications, Aspen Plus connects the streams, creates and specifies Calculator blocks, and updates the HeatX specifications based on your selections.

RadFrac Setup 3-Phase Sheet
See Also

Setup Form Help

Free-Water and Rigorous Three-Phase Calculations

Use this sheet to:

Specify the stages to test for the presence of two liquid phases. Specify one or more segments by specifying the starting and ending stages for each.

Identify key components for the second liquid phase

Select components from the Available Components list and click > to move them into the Key Components list, or click >> to move all components into the Key Components list, then select unwanted components and click < to remove them from the Key Components list.

You must choose Vapor-Liquid-Liquid, Vapor-Liquid-DirtyWaterAnyStage or Vapor-Liquid-FreeWaterAnyStage on the Configuration sheet in order to use this sheet.

RadFrac Specification Summary Form
See Also

Working with RadFrac

Operating Specifications Descriptions

Design Mode

Use the Specification Summary sheet on this form to view and edit column specifications.

The Primary Specifications section displays the two operating specifications from the Setup | Configuration sheet, as well as the Free water reflux ratio which applies to the water decanter in the condenser provided when free water or dirty water is specified only for the condenser on that sheet.

The Additional Specifications section displays additional design specifications. When you create or edit one of these specifications you will be taken to its form under Design Specifications.

The Adjusted Variables section displays variables which may be adjusted to meet additional specifications. These may be the variables specified as the Primary Specifications or certain other types of specifications such as side product flow rates and pumparound specifications. The number of these variables must be less than or equal to the number of Additional Specifications. When you create or edit one of these specifications you will be taken to its form under Vary.

You can activate or deactivate Additional Specifications and Adjusted Variables using the boxes in the Active column of these grids. The other details in these grids are available after the problem has been run.

The Additional Specifications and Adjusted Variables show a description for each design specification and varied variable. If you do not enter these descriptions, RadFrac creates them based on the entered specifications.

RadFrac Design Specifications Form
See Also

Working with RadFrac

Efficiencies

Design Mode

Use this form to enter design specifications.

The number of design specifications you enter must equal or exceed the number of variables you enter on the Vary form. You can select the design specification type on the Specifications sheet.

Use this sheet

To do this

Specifications

Enter specification type, specification ID, target value, stream type, and stream information

Components

Select components to be used in design specifications

Feed/Product Streams

Select feed and/or product streams to be used in design specifications

Options

Enter scale and weighting factors and base components/streams

Results

Display design specification results

In addition, the folder contains these sheets:

Use this sheet

To do this

Design Specifications

Manage Design Specification objects

Results

Display overall results for all design specifications

RadFrac Design Specifications (Folder) Results Sheet
See Also

Design Specifications Form Help

Use this sheet to view a comparison of specifications and their calculated values. For each design specification, these results are shown:

The ID of the design specification
The description of the design specification
The type of design specification
The units for the values
The specified target value
The final calculated value
The error (difference between these two values)
The convergence status

RadFrac Design Specifications Specifications Sheet
See Also

Design Specifications Form Help

Design Mode

Use this sheet to enter:

Description. If you do not enter a description, RadFrac creates one based on the entered specifications.
Specification type

Specification target value

Stream type and stream information, for some specification types
Choose the specification type from the dropdown list. The purity, recovery, flow, and flow ratio specifications can be in mole, mass, or standard liquid volume basis. Use the Components and Feed/Product Streams sheets to make additional specifications for some specification types.

Use this

To specify

(Basis) purity

Purity of product, internal, or decanter stream(s), calculated by:



Where:

x

=

Component fraction, on a mole, mass, or standard liquid volume basis

i

=

Component from the components list

j

=

Component from the base components list

The default for Base Components is all components ()

(Basis) recovery

Recovery of component (s) in product stream(s) based on feed stream(s)



Where:

f

=

Component flow rate, on a mole, mass, or standard liquid volume basis

i

=

Component from the components list

j

=

Product streams from the streams list

k

=

Feed Stream from the base streams list

The default for Base Streams is all feed streams.

(Basis) flow

Flow rate of product, internal, or decanter stream(s) for a group of components in a set of product streams, an internal stream, or a decanter stream. The default is all components.

(Basis) ratio

Ratio of flow of component(s) of an internal stream to flow of component (s) of internal, feed, or product stream(s)

For more information, see Component Flow Ratio Equations.

Stage temperature

Temperature on a specific stage

Property value

Property value of a product or internal stream (specified by Stage and the phase qualifier in the corresponding Property Set).

Property difference

Difference of two property values based on product or internal stream(s), calculated as Property - Base Property, where:

Property

=

Physical property of a product stream or of an internal stream (specified by Stage and the phase qualifier in the corresponding Property Set)

Base Property

=

Physical property of a product stream or of an internal stream (specified by Base Stage and the phase qualifier in the corresponding Property Set)

Property ratio

Ratio of two property values based on product or internal stream(s), calculated as Prop/Base Prop, where:

Prop

=

Physical property of a product stream or of an internal stream (specified by Stage and the phase qualifier in the corresponding Property Set)

Base Prop

=

Physical property of a product stream or of an internal stream (specified by Base Stage and the phase qualifier in the corresponding Property Set)

(Basis) distillate flow

Distillate flow rate


If Valid Phase option =

Does RadFrac include free-water distillate flow in distillate flow rate?

Vapor-Liquid-FreeWaterCondenser

No

Vapor-Liquid-FreeWaterAllStage

Yes

(Basis) bottoms flow

Bottoms product flow rate

RadFrac assumes there is always a liquid bottoms product. If a liquid bottoms product is not present in the column, set bottoms flow rate to zero.

(Basis) reflux flow

Reflux liquid flow rate from Stage 1 or condenser, excluding any distillate flow rate.


If Valid Phase option =

Does RadFrac include free-water reflux flow rate in reflux flow rate?

Vapor-Liquid-FreeWaterCondenser

No

Vapor-Liquid-FreeWaterAllstage

Yes

(Basis) boilup rate

Vapor flow rate from the bottom stage

(Basis) reflux ratio

Ratio of reflux flow rate to distillate flow rate


If Valid Phase option =

Does RadFrac include free-water reflux flow rate in reflux flow rate?

Vapor-Liquid-FreeWaterCondenser

No

Vapor-Liquid-FreeWaterAllstage

Yes

(Basis) boilup ratio

Ratio of boilup flow rate to bottoms flow rate

Condenser duty

Condenser or top stage heat duty. Specify a negative value for cooling and a positive value for heating.

Reboiler duty

Reboiler or bottom stage heat duty. Specify a negative value for cooling and a positive value for heating.

RadFrac Design Specifications Components Sheet
See Also

Design Specifications Form Help

Design Mode

Use this sheet to select components and base components for the purity or ratio specification. The available components and base components appear on the left side of the list. The selected components appear on the right side of the list. Use the Move buttons to select components.

RadFrac Design Specifications Feed/Product Streams Sheet
See Also

Design Specifications Form Help

Design Mode

Flowsheet Connectivity for RadFrac

Use this sheet to select the product streams and/or feed streams used in the design specification. The streams available appear on the left side of the list. The streams selected appear on the right side of the list. Use the Move buttons to select streams.

RadFrac Design Specifications Options Sheet
See Also

Design Specifications Form Help

Design Mode

Nested Design Specification Convergence

Use this sheet to specify scale and weighting factors. These scale and weighting factors are used in the Nested Design Specification Convergence for all algorithms except SUM-RATES. Use a scale factor to scale each design specification to the same order of magnitude. Lets you use a weighting factor to give weight to a purity specification. The higher the weight, the more importance the specification has.

RadFrac Design Specifications Results Sheet
See Also

Design Specifications Form Help

Design Mode

Use this sheet to view results of the design specification.

Result

Description

Type	Type of design specification
Target

Desired value of the specification

Calculated value

Calculated value of the specification

Error

Error between the calculated value of the specification and the desired value of the specification

Qualifiers	Other specifications used in this design specification, such as stages or components.

RadFrac Vary Form
See Also

Working with RadFrac

Efficiencies

Design Mode

Use this form to specify manipulated variables for the design mode. The number of manipulated variables must be less than or equal to the number of design specifications entered in the DesignSpecs forms.

Use this sheet

To specify

Specifications

Vary ID, type, bounds, step size

Components

Components for Murphree efficiency specification

Results

Description, results

In addition, the folder contains these sheets:

Use this sheet

To specify

Adjusted Variables

Manage Vary objects

Results

Compare and view adjusted variables

RadFrac Vary (Folder) Results Sheet
See Also

Vary Form Help

Use this sheet to view a comparison of specifications and their calculated values.

RadFrac Vary Specifications Sheet
See Also

Vary Form Help

Efficiencies

Design Mode

Use this sheet to specify vary Type and bounds. Optionally, specify the maximum step size for the variable to take during the solution. For some types, also specify a stage or range of stages, a stream, or a pumparound.

You can also specify a Description. If you do not enter a description, RadFrac creates one based on the entered specifications.

RadFrac Vary Components Sheet
See Also

Vary Form Help

Efficiencies

Design Mode

Use this sheet to select components that will undergo Murphree efficiency manipulation.

RadFrac Vary Results Sheet
See Also

Vary Form Help

Design Mode

Use this sheet to view the results of the vary specifications. The type of adjusted variable, its upper and lower bounds, and its final value are displayed.

RadFrac Efficiencies Form
See Also

Working with RadFrac

Efficiencies

Use this form to specify either vaporization or Murphree fractional efficiencies. You can specify the efficiencies on a stage or component basis.

Efficiencies specified on this form apply only to equilibrium-based calculations and in equilibrium-based initialization for rate-based calculations. Rate-based calculations do not use these efficiencies, but they may calculate efficiencies from the rate-based results as specified on the Rate-Based Report form.

Note: Murphree efficiencies are only meaningful on the last stage if there is an on-stage feed containing vapor entering that stage, as is typical of absorber columns. The vapor can come from a feed stream or an internal stream such as a pumparound. If Murphree efficiency is defined to be other than 1 on the last stage and there is no vapor feed, a warning will be issued.

Note: Some stage efficiency specifications on the last stage when a reboiler is present (even if there is a small vapor feed also) and some stage efficiency specifications on other stages with feeds can result in a problem which has no valid solution. We advise against using stage efficiency specifications in such situations; use them only with care that they lead to sensible solutions.

Use this sheet

To specify

Options

Method, efficiency type, and three-phase efficiency options

Vapor-Liquid

Efficiencies for vapor liquid pairs

Vapor-1st Liquid

Efficiencies for vapor and first liquid pair (three-phase systems)

Vapor-2nd Liquid

Efficiencies for vapor and second liquid pair (three-phase systems)

RadFrac Efficiencies Options Sheet
See Also

Efficiencies Form Help

Efficiencies Definitions

Use this sheet to select overall efficiencies options, vaporization, or Murphree efficiencies. You can define efficiencies on a stage or component basis. You can also specify stage efficiencies on a sectional basis, instead of a stage-by-stage basis. For three-phase systems, by default, RadFrac assumes that the efficiency used for vapor and the second liquid pair is the same as for vapor and the first liquid pair. You can specify different vaporization efficiencies for different pairs. You cannot specify different Murphree efficiencies for two different pairs.

Note: Use care when specifying efficiencies. Aspen Plus allows you to specify efficiencies for all components, which can cause the liquid phase to be sub-cooled or super-heated. For details, see Efficiencies in the RadFrac Reference.

Enter actual values of efficiencies, not percentages. For example a value of 1 corresponds to 100% efficiency.

Efficiencies specified on this form apply only to equilibrium-based calculations and in equilibrium-based initialization for rate-based calculations. Rate-based calculations do not use these efficiencies, but they may calculate efficiencies from the rate-based results as specified on the Rate-Based Report form.

Notes:

Murphree efficiencies are only meaningful on the last stage if there is an on-stage feed containing vapor entering that stage, as is typical of absorber columns. The vapor can come from a feed stream or an internal stream such as a pumparound. If Murphree efficiency is defined to be other than 1 on the last stage and there is no vapor feed, a warning will be issued.
Murphree efficiencies are used to account for imperfection in reaching phase equilibrium. They will not work well in reactive systems because the mass transfer due to kinetic or equilibrium reactions is not related to the phase equilibrium driving force, and should not be used in such systems. Murphree efficiencies can be used in apparent approach electrolyte systems where the only reactions are handled by the apparent approach and the column is only modeling phase equilibrium between apparent components.
Vaporization efficiency effectively changes the k-values for vapor-liquid equilibrium which are calculated by property models, altering the volatility of components. This changes the equilibrium condition (as opposed to Murphree efficiency, which changes the approach to equilibrium). Use these efficiencies with care.
Some stage efficiency specifications on the last stage when a reboiler is present (even if there is a small vapor feed also) and some stage efficiency specifications on other stages with feeds can result in a problem which has no valid solution. We advise against using stage efficiency specifications in such situations; use them only with care that they lead to sensible solutions.

RadFrac Efficiencies Vapor-Liquid Sheet
See Also

Efficiencies Form Help

Efficiencies

Entering Profile Information and Interpolation in Column Models

Use this sheet to specify efficiencies for adjusting vapor-liquid equilibrium. For three-phase systems, the same efficiency is used for vapor and first liquid, and vapor and second liquid pairs. You can specify the efficiency:

As a vaporization efficiency or a Murphree efficiency

On a stage or component basis

On a sectional basis instead of a stage-by-stage basis

Note: Use care when specifying efficiencies. Aspen Plus allows you to specify efficiencies for all components, which can cause the liquid phase to be sub-cooled or super-heated. For details, see Efficiencies in the RadFrac Reference.

Enter actual values of efficiencies, not percentages. For example a value of 1 corresponds to 100% efficiency.

Use the Options sheet to specify these efficiency options.

Efficiencies specified on this form apply only to equilibrium-based calculations and in equilibrium-based initialization for rate-based calculations. Rate-based calculations do not use these efficiencies, but they may calculate efficiencies from the rate-based results as specified on the Rate-Based Report form.

Notes:

Murphree efficiencies will not work well in reactive systems because the mass transfer due to kinetic or equilibrium reactions is not related to the phase equilibrium driving force, and should not be used in such systems.
Murphree efficiencies can be used in apparent approach electrolyte systems where the only reactions are handled by the apparent approach and the column is only modeling phase equilibrium between apparent components.
Murphree efficiencies are only meaningful on the last stage if there is an on-stage feed containing vapor entering that stage, as is typical of absorber columns. The vapor can come from a feed stream or an internal stream such as a pumparound. If Murphree efficiency is defined to be other than 1 on the last stage and there is no vapor feed, a warning will be issued.
Some stage efficiency specifications on the last stage when a reboiler is present (even if there is a small vapor feed also) and some stage efficiency specifications on other stages with feeds can result in a problem which has no valid solution. We advise against using stage efficiency specifications in such situations; use them only with care that they lead to sensible solutions.

RadFrac Efficiencies Vapor-1st Liquid Sheet
See Also

Efficiencies Form Help

Efficiencies

Entering Profile Information and Interpolation in Column Models

Use this sheet to specify vaporization efficiencies for adjusting vapor-first liquid equilibrium for Vapor-Liquid-Liquid systems. Separate efficiencies for two liquid phases are not allowed for free water or dirty water systems.

Only vaporization efficiency is allowed for adjusting vapor-first liquid equilibrium. Murphree efficiency is not allowed for this purpose.

You can specify the efficiency on a stage or component basis. Sectional basis is not allowed for this purpose.

Use the Options sheet to specify these efficiency options.

Note: Use care when specifying efficiencies. Aspen Plus allows you to specify efficiencies for all components, which can cause the liquid phase to be sub-cooled or super-heated. For details, see Efficiencies in the RadFrac Reference.

Enter actual values of efficiencies, not percentages. For example a value of 1 corresponds to 100% efficiency.

Efficiencies specified on this form apply only to equilibrium-based calculations and in equilibrium-based initialization for rate-based calculations. Rate-based calculations do not use these efficiencies, but they may calculate efficiencies from the rate-based results as specified on the Rate-Based Report form.

RadFrac Efficiencies Vapor-2nd Liquid Sheet
See Also

Efficiencies Form Help

Efficiencies

Entering Profile Information and Interpolation in Column Models

Use this sheet to specify vaporization efficiencies for adjusting vapor-second liquid equilibrium for Vapor-Liquid-Liquid systems. Separate efficiencies for two liquid phases are not allowed for free water or dirty water systems.

Only vaporization efficiency is allowed for adjusting vapor-second liquid equilibrium. Murphree efficiency is not allowed for this purpose.

You can specify the efficiency on a stage or component basis. Sectional basis is not allowed for this purpose.

Use the Options sheet to specify these efficiency options.

Note: Use care when specifying efficiencies. Aspen Plus allows you to specify efficiencies for all components, which can cause the liquid phase to be sub-cooled or super-heated. For details, see Efficiencies in the RadFrac Reference.

Enter actual values of efficiencies, not percentages. For example a value of 1 corresponds to 100% efficiency.

Efficiencies specified on this form apply only to equilibrium-based calculations and in equilibrium-based initialization for rate-based calculations. Rate-based calculations do not use these efficiencies, but they may calculate efficiencies from the rate-based results as specified on the Rate-Based Report form.

RadFrac Properties Property Sections Sheet
See Also

Properties Form Help

Organic Phase Properties

Use this sheet to specify property options for segments of the column, decanter, or thermosiphon reboiler.

In the Type field, choose specify which of these areas to specify properties for, and specify starting and ending stages for the segment, or the stage for the decanter. For three-phase calculations, you can specify a single property method for Vapor-liquid1-liquid2 equilibrium (VLLE) or separate property methods for:

Vapor-liquid1 equilibrium (VL1E)

Liquid1-liquid2 equilibrium (LLE)

For each defined section, you can specify the property method, Henry components group (if the method uses Henry's law and the simulation contains supercritical components), chemistry, free-water phase property method, and water solubility method for organic phase properties.

Aspen Plus can handle the presence and decanting of water as a second liquid phase in water-hydrocarbon systems or other water-organic systems. To enable the free-water option, on the Setup | Configuration sheet, from the Valid Phases field list, select either:

Vapor-Liquid-FreeWaterCondenser

Vapor-Liquid-FreeWaterAnyStage

You must also supply water decant streams whenever free water is to be decanted. Specify water decant streams on the Setup | Streams sheet.

Note: If you select a property method from an imported CAPE-OPEN property package, the Henry Components, Chemistry, Free-water phase properties, and Water solubility method fields are dimmed. The values for these options defined in the property package are used in this case.

RadFrac Properties KLL Correlations Sheet
See Also

Properties Form Help

Use this sheet to enter coefficients of the user-defined KLL expression for three-phase calculations. The built-in expression has the following form:

ln(KLL) = a + b / T + c ln(T) + dT

Where:

a,b,c,d

=

Coefficients

T

=

Temperature in degrees K

You must specify a correlation number for each set of coefficients.

RadFrac Properties KLL Sections Sheet
See Also

Properties Form Help

Use this sheet to specify sections of the column over which RadFrac will use user-defined KLL correlations to predict liquid-liquid equilibrium for three-phase systems.

Specify the correlation number and the corresponding stages of the column. You should have already defined the correlation numbers on the KLL Correlations sheet.

RadFrac Reactions Form
See Also

Working with RadFrac

Reactive Distillation

Use the sheets on this form to specify:

IDs of the reactions to be considered in one or more column sections

Liquid and vapor holdups and residence times for rate-controlled reactions

Component conversion

Use this sheet

To specify

Specifications

Column section, reaction ID and type, chemistry ID

Holdups

Column section, reaction ID, liquid and vapor holdup

Residence Times

Column section, reaction ID, liquid and vapor residence times

Conversion

Stage, reaction ID and number, key component, fractional conversion

RadFrac Reactions Specifications Sheet
See Also

Reactions Form Help

Reactive Distillation

Use this sheet to enter reaction or chemistry IDs for different sections of the column. Define each section by specifying the starting and the ending stage numbers. To specify reactions for a single stage, enter the same stage number for the starting and ending stages.

When using the rate-based calculation mode, any reactions specified for the Liquid 1 or Liquid 2 phases will be treated as involving the single Liquid phase.

Note: If you specify any Reaction ID on this sheet, and Simulation approach on the Block Options | Properties sheet is True species, the Chemistry ID specified on the Block Options | Properties sheet is ignored. In this case, all reactions of the chemistry to be considered should be included in the reaction set. The chemistry is still used during feed flash to calculate properties of the feed streams.

RadFrac Reactions Holdups Sheet
See Also

Reactions Form Help

Reactive Distillation

Differences in Specifications Between Rate-Based and Equilibrium Modes

Use this sheet to specify liquid and vapor holdups per stage for different sections of the column for kinetic rate-controlled reactions for use in equilibrium calculations.

Define each column section by specifying the starting and ending stage numbers. To specify holdups for a single stage, enter the same stage number for the starting and ending stages.

The holdup basis specified here determines the units of the pre-exponential factor (on the Reactions Reactive Distillation Kinetic sheet) of reactions in this column. Holdup basis is determined separately for each stage, where the basis for any stages with unspecified holdups is taken to be in a mole basis.

Important: Incorrect specification of the holdup basis will lead to incorrect interpretation of the pre-exponential factor units and thus incorrect results. See Holdup for Rate-Controlled Reactions for more information.

For rate-based calculations, these holdup values are not used except for initialization calculations. Instead, values or correlations specified on the Rate-Based | Holdups sheet of the Tray Rating or Packing Rating section are used. However, the holdup basis still determines the units used in the reaction expression.

RadFrac Reactions Residence Times Sheet
See Also

Reactions Form Help

Reactive Distillation

Use this sheet to specify liquid and vapor residence times per stage for different sections of the column for kinetic rate-controlled reactions.

Define each column section by specifying the starting and ending stage numbers. To specify residence times for a single stage, enter the same stage number for the starting and ending stages. RadFrac uses residence times to calculate stage holdups based on the liquid and vapor flow rates through the stage. If you specify residence time, the liquid holdup used in the rate law is calculated on a mole basis as liquid mole flow from stage x liquid residence time.

Important: The units of the pre-exponential factor (on the Reactions Reactive Distillation Kinetic sheet) of reactions with specified holdups depends on the correct specification of holdup basis on the Holdups sheet. Specifying a residence time implies a mole basis for the holdup. See Holdup for Rate-Controlled Reactions for more information.

RadFrac Reactions Conversion Sheet
See Also

Reactions Form Help

Reactive Distillation

Use this sheet to enter a fractional conversion of a reaction based on a key component. RadFrac uses this information to overwrite the conversion specified in the Reactions paragraph that is associated with the stage.

RadFrac Block Options Form
See Also

Working with RadFrac

Specifying RadFrac

Use the Block Options form to override global values for physical properties, simulation options, diagnostic message levels, and report options, and additional simulation options that apply only to RadFrac. Specifications made on this form apply only to this RadFrac block.

Use this sheet

To

Properties

Property options and electrolytes calculation options

Simulation Options

Convergence and algorithm options, and maximum number of stages for design, and simulation calculation options

Diagnostics

Diagnostic message levels

EO Options

Options for equations-oriented solutions

EO Var / Vec

Sequential-modular variables to expose as equation-oriented variables

Report Options

Information to include or suppress from the generated report

RadFrac Block Options Diagnostics Sheet
See Also

Block Options Form

Using the Diagnostic Sheet

Use this sheet to override defaults for simulation history, diagnostic message levels, and control panel diagnostic message levels for the block.

Use this

To specify

Simulation

Simulation error level

Property

Physical property error level

Stream

Stream diagnostics level

On screen

Control panel message level

Rate-based iteration	Level of messages from rate-based calculations
Initial and final profiles	Level of information from initial and final profiles in rate-based calculations.
If this level is at least 6, when additional discretization points within the film are used (film option Discrxn), profiles of properties at the discretization points are printed in the history file.

Note: Stream level 8 prints both inlets and outlets of a block (as opposed to only outlets) only when the Simulation level is 4 or more. This ensures that the block name header appears to distinguish the outlets of one block from the inlets of another.

RadFrac User Subroutines Form
See Also

Working with RadFrac

Use this form to specify user subroutines for:

Reactions

KLL calculations

Tray rating/sizing

Packing rating/sizing

You can supply these user subroutines if User is specified as one of the following:

Reaction ID on the Reactions Specifications sheet

KLL correlation on the Properties Property Sections sheet

Flooding calculation method on the Tray Sizing Design or Tray Rating Design/Pdrop sheet

Pressure drop calculation method on the Packing Rating Design/Pdrop or the Packing Sizing Pdrop sheet

See Aspen Plus User Models for instructions on writing this subroutine. Search for this document in the Knowledge Center.

Use this sheet

To specify

Reaction Kinetics

Kinetics subroutine parameters for reactive distillation calculations

KLL

KLL parameters for three-phase calculations

Tray Sizing/Rating

User subroutine parameters for tray sizing/rating calculations

Pack Sizing/Rating

User subroutine parameters for packing sizing/rating calculations

RadFrac User Subroutines Reaction Kinetics Sheet
See Also

User Subroutines Form Help

Use this sheet to specify kinetics subroutine parameters for reactive distillation calculations. You can also define integer and real vectors for transferring data into the subroutine and storing results. You must provide the subroutine name on the Reactions Specifications sheet.

When using Rate-Based Distillation, all user kinetics subroutines must return RATEL and RATEV, the individual reaction rates for each reaction in the liquid and vapor phases, respectively. See Aspen Plus User Models for details. Search for this document in the Knowledge Center.

RadFrac User Subroutines KLL Sheet
See Also

User Subroutines Form Help

Use this form to specify a user KLL subroutine for three-phase calculations. Specify:

Column segments for which the KLL subroutine is used instead of the property method

Integer and real vectors for transferring data into the subroutine and storing results

RadFrac User Subroutines Tray Sizing/Rating Sheet
See Also

User Subroutines Form Help

Use this sheet to specify:

Subroutine name

Length of the integer and real subroutine parameters

Values of parameter arrays for tray sizing and tray rating calculations

RadFrac User Subroutines PackSizing/Rating Sheet
See Also

User Subroutines Form Help

Use this sheet to specify:

Subroutine name

Length of the integer and real subroutine parameters

Values of parameter arrays for packing sizing and packing rating calculations

RadFrac Heaters and Coolers Form
See Also

Working with RadFrac

Heater and Cooler Specifications

This form contains the following sheets:

Use this sheet

To specify

Heat Streams

Stage numbers for inlet and outlet heat streams

Side Duties

Stages and duties for side heaters

Utility Exchangers

Stage, component, exchanger UA, and heat capacity

Heat Loss

Start, end stages of heat losses

RadFrac allows heating and cooling on stages using different mechanisms. RadFrac uses heat streams to perform heat integration between blocks. You can directly specify heat duties and heat losses on stages. For utility heat exchangers, RadFrac can calculate heat duty directly using the UA correlation.

RadFrac Heaters and Coolers Heat Streams Sheet
See Also

Heaters and Coolers Form Help

Heater and Cooler Specifications

Use this sheet to specify stage numbers for inlet and outlet heat streams. When heat integration with other unit operation models is required, the duty recovered from each block can become the heat source for another block through the use of heat streams. You can use the inlet heat stream to specify heat duty on any stage when no other heat duty is specified. You can use the outlet heat stream on any stage to store the net heat duty after RadFrac subtracts the heat duty from the inlet heat stream entering the same stage.

RadFrac Heaters and Coolers Side Duties Sheet
See Also

Heaters and Coolers Form Help

Heater and Cooler Specifications

Utilities

Use this sheet to specify side heater stage numbers and duties. Enter a positive value for heating and a negative value for cooling. You may optionally specify a utility to provide the heating or cooling.

On this sheet, you cannot specify heat duty for the top or bottom stage. Instead, use the Setup Configuration sheet to specify heat duties as operating conditions.

RadFrac Heaters and Coolers Utility Exchangers Sheet
See Also

Heaters and Coolers Form Help

Heater and Cooler Specifications

Use this sheet to specify utility heat exchangers. RadFrac calculates heat duty using the UA correlation for utility heat exchangers.

You can define interstage heaters/coolers when you want UA calculations. You can also define the heater/cooler by entering the duty directly on the Side Duties sheet. You must enter the stage location for the heater/cooler on this sheet.

You can request UA calculations for any stage, including the top and bottom stages.

You can specify heat capacity in mole, mass, or standard liquid volume basis.

RadFrac Heaters and Coolers Heat Loss Sheet
See Also

Heaters and Coolers Form Help

Heater and Cooler Specifications

Use this sheet to specify heat loss for the column. You can specify heat loss over a section of the column. RadFrac applies the value you specify for each column stage within the section.

RadFrac Pumparounds Form
See Also

Working with RadFrac

Pumparounds

Use this form to specify pumparounds and view results. This form contains the following sheets:

Use this sheet

To do this

Specifications

Specify source, destination, type, specification 1 and/or specification 2

Heat Streams

Specify inlet and outlet heat streams

Results

View pumparound results

In addition, the folder contains these sheets:

Use this sheet

To do this

Pumparounds

Manage Pumparound objects

Summary

View a summary of all pumparound inputs

Results

View overall pumparound results

RadFrac Pumparounds (Folder) Summary Sheet
See Also

Pumparounds Form Help

Pumparounds

Use this sheet to view pumparound specifications for all pumparounds. The specifications include:

Source stage of the pumparound

Return stage of the pumparound

Drawoff type (total or partial)

Type and value for specifications (one when drawoff type is total, two when drawoff type is partial)

For the Valid Phases, the default option is Source-Phase, the phases present at the draw stage.

RadFrac Pumparounds (Folder) Results Sheet
See Also

Pumparounds Form Help

Pumparounds

Use this sheet to view results for all pumparounds. The following table describes the results displayed.

Variable

Description

Draw stage

Source stage number

Return stage

Return stage number

Flow rate

Total flow rate

Temperature

Outlet temperature

Pressure

Outlet pressure

Vapor fraction

Outlet vapor fraction

Duty

Heat duty

RadFrac Pumparounds Specifications Sheet
See Also

Pumparounds Form Help

Pumparounds

Utilities

Use this sheet to enter all pumparound specifications, including an optional utility to provide heating or cooling. RadFrac can handle pumparounds from any stage to the same or any other stage.

The Return option controls how the pumped material is returned to the column.

For the Valid Phases, the default option is Source-Phase, the phases present at the draw stage.

RadFrac Pumparounds Heat Streams Sheet
See Also

Pumparounds Form Help

Pumparounds

Use this sheet to specify:

Inlet heat stream ID

Outlet heat stream ID

RadFrac uses this heat stream

To do this

Inlet

Specify heat duty for the pumparound

Outlet

Store the net computed heat duty after accounting for the inlet heat stream duty

RadFrac Pumparounds Results Sheet
See Also

Pumparounds Form Help

Pumparounds

Use this sheet to view the results of the current pumparound. The following table describes the results displayed.

Variable

Description

Draw stage

Source stage number

Return stage

Return stage number

Flow rate

Total flow rate

Temperature

Outlet temperature

Pressure

Outlet pressure

Vapor fraction

Outlet vapor fraction

Duty

Heat duty

RadFrac Decanters Form
See Also

Working with RadFrac

Solids Handling

Decanters

This form contains the following sheets:

Use this sheet

To do this

Specifications

Specify fractions returned, temperature, or degrees of subcooling

Options

Specify fractions returned to different stages, solids handling

Results

View results

Composition

View composition results profiles

In addition, the folder contains these sheets:

Use this sheet

To do this

Decanters

Manage Decanter objects

Summary

View a summary of decanter input specifications

Results

View and compare results of all decanter specifications

Composition

View overall composition profiles

You enter the stage number for the decanter as an ID, using the Object Manager.

RadFrac Decanters (Folder) Summary Sheet
See Also

Decanters Form Help

Decanters

Use this sheet to view decanter specifications, including:

Stage to which the decanter is attached

Fractions of first and second liquid phases returned to the column

Decanter temperature

RadFrac Decanters (Folder) Results Sheet
See Also

Decanters Form Help

Decanters

Use this sheet to view decanter results. The following table describes the results displayed.

Variable

Description

Draw stage

Stage location of decanter

Subcooled temperature

Subcooled temperature of decanter. If you do not specify decanter temperature or degree of subcooling, this value is the same as the stage temperature.

Pressure

Decanter pressure

Duty

Decanter duty

Total liquid flow

Total liquid flow rate leaving the decanter

1st liquid flow

Flow rate of the first liquid phase leaving the decanter

2nd liquid flow

Flow rate of the second liquid phase leaving the decanter

Liquid product flow

Total flow rate of product drawn from the decanter

1st liquid product flow

Flow rate of the first liquid phase product drawn from the decanter

2nd liquid product flow

Flow rate of the second liquid phase product drawn from the decanter

RadFrac Decanters (Folder) Composition Sheet
See Also

Decanters Form Help

Decanters

Use this sheet to view the mole fractions of the liquid phases leaving the decanter. Select one of the following liquid phases:

Total liquid

First liquid

Second liquid

RadFrac Decanters Specifications Sheet
See Also

Decanters Form Help

Solids Handling

Decanters

Utilities

Use this sheet to enter decanter specifications. The stage number for the decanter corresponds to the ID entered in the Object Manager.

For the decanter attached to

You must enter the return fraction for

The top stage

At least one of the two phases

Other stages

Both liquid phases

You can also specify the temperature or degree of subcooling for decanters. By default, RadFrac assumes the decanter temperature is the same as the stage temperature. If side product streams are decanter products, you cannot specify their flow rates. RadFrac calculates these flow rates from the return fraction specifications for the two liquid phases.

If you specify the temperature or degree of subcooling, you can also specify a utility to provide the cooling, except if the decanter is on stage 1 and there is a condenser. In that case, you should specify a utility for the condenser to provide this duty.

RadFrac Decanters Options Sheet
See Also

Decanters Form Help

Solids Handling

Decanters

Use this sheet to specify:

Split fractions of first and second liquid phases that are returned to different stages of the column

Solids handling options

By default, RadFrac introduces decanter return streams to the stage immediately below.

You can do this

By specifying

Direct the decanter return streams to any other stage

A return stage number

Split a return stream into any number of streams

Split fractions

Split fractions for any liquid phase (first or second) must add up to unity. RadFrac calculates the net fraction of each liquid phase returned to any specified stage as follows:

return fraction * split fraction

The return fraction is defined on the Specifications Sheet.

RadFrac returns solids to the column based on the second liquid phase return fraction when both are true:

RadFrac is handling solids on a stage-by-stage basis

Both liquid phases are present in the decanter

If the decanter contains only one liquid phase, RadFrac uses the return fraction of the existent phase to determine the solids returned to the column. You can decant all solids present in the decanter using the Option button.

RadFrac Decanters Results Sheet
See Also

Decanters Form Help

Solids Handling

Decanters

Use this sheet to view decanter results. The following table describes the results displayed.

Variable

Description

Draw stage

Stage location of decanter

Subcooled temperature

Subcooled temperature of decanter. If you do not specify decanter temperature or degree of subcooling, the decanter temperature is the same as the stage temperature.

Pressure

Decanter pressure

Duty

Decanter duty

Total liquid flow

Total liquid flow rate leaving the decanter

1st liquid flow

Flow rate of the first liquid phase leaving the decanter

2nd liquid flow

Flow rate of the second liquid phase leaving the decanter

Liquid product flow

Total flow rate of product drawn from the decanter

1st liquid product flow

Flow rate of the first liquid phase product drawn from the decanter

2nd liquid product flow

Flow rate of the second liquid phase product drawn from the decanter

RadFrac Decanters Composition Sheet
See Also

Decanters Form Help

Solids Handling

Decanters

Use this sheet to view the mole fractions of the liquid phases leaving the decanter. Select one of the following liquid phases:

Total liquid

First liquid

Second liquid

See Also

Working with RadFrac

Column Internals Overview

RadFrac Column Internals Object Manager
Use this form to specify tray and/or packing configurations for sizing and rating.

Each column internals object represents a complete configuration of trays and/or packing for the column along with specifications for sizing or rating. You can specify a combination or trays and packing in the same configuration.

Create multiple internals configurations when you wish to quickly evaluate the performance of column with different internals types. For example, you might wish to compare/evaluate the feasibility of using different tray types (Valve or Sieve) or compare the benefits of using a packed column versus a trayed column.

Use this

To

Add New	Create a new column configuration
Duplicate	Create a copy of the selected configuration. If no configuration is selected, this copies the first one.
The table displays the following information for each configuration:

Column

Description

Internals	Name of the internals configuration, up to 8 characters. Names are chosen automatically when you create configurations but you can change them.
Description	You can enter a description of up to 128 characters for the internals configuration.
Active	
If you create any column internals configurations, one of them must be chosen as active, the column design used to generate column results. You can change which configuration is used by clicking the button in this column. When an internals configuration is the active, it is used to calculate the results used in the flowsheet, and you can:

Perform rate-based calculations using these internals
Use pressure drops computed from these internals to calculate the pressures in the column
Reference the internals in Calculator, Design-Spec, Sensitivity, and Optimization blocks
Note: When you create the first configuration, or if you delete the active one when others are defined, the first configuration becomes active.

Delete	
Click the X to delete the configuration.

Each column internals object contains these forms:

Use this form

To

Sections

Divide the column into sections, specify data for individual sections, and view results for individual sections

Hydraulic Plots

View the hydraulic operating diagrams for this column

Column Hydraulic Results	View tabular results form the whole column
In the Column Design tab of the ribbon, when results are available you can click Reports to generate a PDF report for the column design, or Export to Vendor to generate files of the column design for vendor packages.

See Also

Working with RadFrac

Specifying Column Sections

Interactive Sizing and Rating Calculations

Geometry Sheet

Hydraulic Plots

Results Form

RadFrac Column Internals Sections Sections Sheet
Use this sheet to divide the column into sections. You may use one section for the entire column or split the column into multiple sections, but your sections must not overlap or leave gaps. A complete configuration of column internals must include all stages except the condenser and reboiler, if the column is equipped with these.

At the top of the form, the Column description lets you specify a description of up to 128 characters for the entire internals configuration; this is the same description that appears in the Column Internals form. Below this are the following buttons:

Use this button

To

Add New	Create a new section
Auto Section	
Let Aspen Plus design sections for you automatically. If you click the triangle at the right side of this button, you can choose whether the sections are designed based on feed and draw locations or column internal flows. Available only for configurations with no sections specified.

Duplicate	
Make a new section as a copy of the currently selected section. You will need to specify the starting and ending stages for the duplicated section, but all other specifications are copied.

Import Template	
Apply the settings from a previously exported XML file to one or more sections, or a new section. All specifications will be overwritten by the specifications from the template, except for the start and end stages.

Export Template	Save selected section as an XML file. Use this to copy a section to be used in another column or simulation.
View Internals Summary	
Display the Column Hydraulic Results form, a short summary of key hydraulic results including:

Overall pressure drop

Pressure drop across sump (if present)

Diameter of each section

Pressure drop in each section

Approach to flood in each section

Specifying Sections

For each section, specify:

The start and end stages

The mode: Interactive sizing or Rating

Type of internals in this section: Trayed or Packed

The type of trays or packing

The number of passes for trays with conventional downcomers, the number of downcomers for trays with lattice downcomers, or the packing vendor, material, and dimension for packing
For trays, the spacing between trays, or for packing, the height of packing in the section

The diameter of the section

All of these specifications except the start and end stages can also be made on the Geometry sheet for that section. You must always specify the start and end stages; most other values have defaults:

In Interactive Sizing mode, defaults are available for all fields except section packed height.
In Rating mode, defaults are available for all fields except diameter, section packed height (for packing), and downcomer widths and locations (for trays; these must be specified on the Geometry sheet).


Overall Column Configuration

A diagram displays the layout of the column with adjacent sections in alternating colors, showing the locations of feeds, products, pumparounds, and gaps and overlaps between sections. A message at the top right of the sheet indicates where any gaps are located. If the column sections are of different diameters, the sections are depicted with widths proportional to those diameters.

Above this diagram, a label indicates whether this column configuration is active (selected on the Column Internals form).

In large columns, when there are multiple feeds, draws, and/or pumparound returns on the same or near stages such that the arrows would overlap, you can hover the mouse over the arrow to see information about the connections there.

Pressure Drop Specifications

In Rating mode, in the active configuration, you can choose to calculate the pressure drops across the column while material and energy balances are being solved. Below the grid, select:

Don't update pressure drop: Do not calculate pressure drop. RadFrac uses the pressure specified on the Specifications | Setup | Pressure sheet for all stages.
Update pressure drop from top stage: The pressure specified for the condenser or top stage is used, and other stage pressures are calculated relative to it.
Update pressure drop from bottom stage: The pressure specified for the reboiler or bottom stage is used, and other stage pressures are calculated relative to it.
By default, the calculated pressure drop across each stage includes the contribution due to static vapor head, ρvgh where ρv is the vapor mass density, g is gravitational acceleration, and h is the tray spacing (for trays) or the packed height per stage (for packing). Uncheck Include static vapor head in pressure drop calculations to ignore this contribution.

Sump

RadFrac can optionally calculate the pressure drop across the sump. To do so, specify the diameter of the sump (which defaults to the diameter of the bottom stage) and either the liquid level in the sump or the residence time in the sump.

Other Forms

Each section has two forms on which you can make detailed specifications and view results:

Use this form

To

Geometry

Specify geometry of each column section (click View in the table of sections to open this form)

Results

View column internals results

The Hydraulic Plots form also displays plots of results for the entire column configuration, and the Column Hydraulic Results form displays tabular results for the whole column.

Import Template Dialog Box
See Also

Sections Sheet Help

Use this dialog box to import previously saved templates (XML files) for column sections.

In the Import from box, click  and select a template file.

Then either click Create new section from imported template, or click Import to section and check the boxes to indicate which existing sections should load the template. All specifications in the existing sections, except for the start and end stages, will be overwritten by the data from the template.

Click Import to complete the import.

Export as Template Dialog Box
See Also

Sections Sheet Help

Use this dialog box to save specifications for a column section as a template (XML file) which can be loaded into other column sections in this or another Aspen Plus file.

In the Export section field, select the section to export.

In the to File box, click  to select a folder for the exported file and type a file name.

Click Export to export the file.

See Also

Working with RadFrac

Specifying Column Sections

RadFrac Column Internals Sections Geometry Form
Use this form to specify the geometry of a column internals section. This form contains the following sheets (though some of them only appear when certain options are selected):

Use this sheet

To

Geometry

Specify tray or packing type and geometry

Picketed/Swept-Back Weirs	Specify weir options
Design Parameters

Specify maximum pressure drop, maximum approach to flood, and other parameters for rating

Packing Constants

Specify specific area and void fraction needed by many packing pressure drop/flood correlations, as well as parameters specific to the Stichlmair method of calculating pressure drop and liquid holdup in packing

Tray Geometry Summary

View a summary of the tray dimensions including areas

See Also

Geometry Form Help

Specifying Column Sections

Tray and Downcomer Area Calculations

Column Sizing Algorithm

RadFrac Column Internals Sections Geometry Geometry Sheet
Use this sheet to specify:

Section type: Trayed or Packed
Mode: Interactive sizing or Rating
Tray or packing geometry
Most fields have default values, though the availability and method of determining defaults depends on mode and section type.

At the top, information displayed includes the name of the section, its start and end stages, and whether the column configuration this section is part of is active (selected on the Column Internals form).

When you change units for a field on this sheet, the value is updated to display in the new units.

Interactive Sizing Mode

Defaults for geometry fields are calculated using the design criteria specified on the Design Parameters sheet. Sizing results are based on the stage or tray with the largest liquid volume flow rate; see the Results | By Stage/By Tray sheet to check these flows, if needed.

Trays

Diameter is calculated using the % Jet flood for design (default 80%), the Minimum downcomer area / Total tray area (default 0.1), and the Maximum downcomer loading calculated by the specified method. All of these are specified on the Design Parameters sheet. Note that weeping is not accounted for in the sizing calculation. See Tray and Downcomer Area Calculations for details about this calculation.
The number of passes is adjusted to satisfy the Maximum weir loading specified on the Design Parameters sheet. If you specified the diameter, this heuristic is used to determine if an increase in the number of passes is justified:
Columns of at least 5 foot diameter require at least 2 passes.
Columns of at least 8 foot diameter require at least 3 passes.
Columns of at least 10 foot diameter require 4 passes.
For multi-pass trays, the downcomer locations are adjusted based on an equal flow path length design.
The weir lengths shown are for trays with straight weirs. If you use swept-back weirs, see the Picketed/Swept-Back Weirs sheet for the lengths associated with these weirs.
Lattice downcomers are not supported in interactive sizing mode. Switch to Rating mode to model columns with these downcomers.
Packing

Diameter is calculated using the selected sizing criterion (either % Approach to maximum capacity (L/V) or Design capacity factor) specified on the Design Parameters sheet. The default is an approach to maximum capacity of 80%. This criterion is applied on each stage to determine a required diameter, and the largest diameter within each section is applied to the whole section.
Notes:

In Interactive Sizing mode, calculated defaults for values such as diameter will change when the vapor-liquid traffic in the column changes. If you overwrite calculated defaults for geometry parameters, those values will NOT change when vapor-liquid traffic in the column changes.
Interactive Sizing mode cannot be used if the column is specified as Rate-Based. To calculate the internals geometry for a Rate-Based Column, please do the following:
Set the Calculation Type to Equilibrium on the Setup | Configuration sheet
Create Column Internals and calculate geometry in Interactive Sizing mode.
Change the internals mode to Rating.
Change the Calculation Type to Rate-Based on the Setup | Configuration sheet.
When you switch from Interactive Sizing to Rating, the calculated values of Diameter, Downcomer Widths, and Downcomer Locations will be retained and appear as defaults (blue italics). If you clear or delete these values in Rating mode, the simulation will become incomplete. You can specify your own values, or switch back to Interactive Sizing and back to Rating again to populate these fields and make the simulation complete.
Rating Mode

Defaults are available for all fields except diameter and (for trays) the downcomer width and locations.

Note: In Rating mode, diameter and other geometry will NOT change when vapor-liquid traffic in the column changes. Deleting the diameter and other geometry-related fields will cause the simulation to become incomplete.

Trayed Sections

For each tray section, the following specifications are available:

Field	Description
Tray type	The tray types available include sieve trays, bubble cap trays, and valve trays with several different valve types. Custom trays are also available only for rating calculations. For custom trays, most of the inputs below are not available; instead, specify a set of parameters which are usually calculated from the geometry inputs and used to calculate column performance. See Custom Trays, below.
Downcomer arrangement	Conventional or lattice. Lattice downcomers are only supported for sieve trays.
Number of passes	You can choose anywhere from 1 to 4 passes. (Conventional downcomers only)
Number of downcomers	You can choose anywhere from 2 to 12 downcomers per tray. The default is 6. (Lattice downcomers only)
Hole diameter, Cap diameter	Diameter of sieve holes (sieve trays only, default 0.5 inches) or of bubble caps (bubble cap trays only). For valve trays, the valve size is determined by the manufacturer of the specific valve type chosen. For bubble cap trays, based on the cap diameter, Aspen Plus determines the other properties of the cap required for calculations. You do not need to specify information related to the slot size and shape.
Skirt height	Height above tray of the bottom of the cap (bubble cap trays only).
Leg length	Vertical distance a valve can move from fully closed to fully open (valve trays only, not for Flexitray S trays).
Valve thickness	Thickness of valve material, measured in sheet metal gauge. Available only for the valve trays where the thickness is not fixed. The 14, 16, and 18 variants of Flexitray A and T trays use this number as the valve thickness, and Flexitray S trays use the deck material and thickness.
Valve material	Material of construction of valve. The list includes the following abbreviations: CS = carbon steel, SS = stainless steel, NI = nickel, TI = titanium. Available for valve trays, except Flexitray S trays where the valves are made of the deck material.
Hole area/active area	
Ratio of hole area to active area, for sieve trays only.

Number of holes	Calculated by Aspen Plus for sieve trays. To achieve a desired number of holes, set the Hole area/active area to  where active area is the cross-sectional area of the column () minus the areas at the top and bottom of all downcomers (or just minus the top areas of downcomers if Active area under downcomer is checked). To compute downcomer areas for conventional downcomers, see Tray and Downcomer Area Calculations.
Number of caps per active area, Number of caps	Ratio of number of bubble caps to active area, or the total number of bubble caps on one tray. You can only specify one of these parameters; Aspen Plus will calculate the other. Bubble cap trays only.
Number of valves per active area, Number of valves	
Ratio of number of valves to active area, or the total number of valves on one tray. You can only specify one of these parameters; Aspen Plus will calculate the other. Valve trays only.

Note: For multi-pass trays where not all trays are the same, the number of holes, caps, or valves and the ratios based on them is an average of the different tray types. For well designed trays, the actual values should be similar enough to not make this a major source of error.

Deck thickness	Thickness of tray material. Choose a common gauge size, or select OTHER and specify the thickness in length units in the second box.
Balance downcomers based on	Choose the method for rebalancing downcomers (multi-pass trays with conventional downcomers only).
Rebalance downcomers	
Use Rebalance Downcomers to update the downcomer geometry and layout for multi-pass trays with conventional downcomers to ensure an equal liquid load (flow per unit area) across all downcomers. Rebalancing downcomers is only possible when results are available, as these calculations depend on those results, and only in interactive sizing mode. The Balance downcomers based on field lets you choose the basis for balancing downcomers.

Maximum loading: All downcomer width and locations are adjusted to ensure the top and bottom areas for all downcomers are equal and the loading for each downcomer equals the maximum loading. For sieve and bubble cap trays, the maximum downcomer loading is computed using the Maximum downcomer loading method specified on the Design Parameters sheet. For other tray types, a correlation provided by the vendor is used.
Side: Widths for the center and off-center downcomers are adjusted so that the top and bottom areas (and hence the loading) match that for the side downcomer.
Center: Widths for the side and off-center downcomers are adjusted so that the top and bottom areas (and hence the loading) match that for the center downcomer.
Note: Rebalancing downcomers overwrites all user-specified downcomer geometry for the adjusted downcomers.

Active area under downcomer	Normally, the area under the downcomer is not considered active area, and contains no sieve holes, bubble caps, or valves. If this box is checked then the area under the downcomers is considered active and contains holes, caps, or valves, as appropriate, and, for straight downcomers, the active area is the same as the net area. (Conventional downcomers only)
Weir Modifications	Choose the type of weir. Picketed weirs can be used to increase the effective weir loading, while swept-back weirs reduce weir loading. If you choose to use either kind of modified weirs, use the Picketed/Swept-Back Weirs sheet to specify their geometry. (Conventional downcomers only)
Diameter	Diameter of the column and of trays.
Downcomer widths and weir lengths and off-center downcomer location	
For conventional downcomers, there can be up to three kinds of downcomers (side, center, off-center) each possibly with different top and bottom widths, and up to four kinds of weir (as the off-center downcomer has inside and outside weirs of different lengths), depending on the number of tray passes. These fields collectively specify the position (and as a result, length) of each weir and the bottom of each downcomer.

For lattice downcomers, a single downcomer width can be specified which applies to all downcomers; the default is 12.7 cm.

Notes:

Bottom downcomer width is set equal to the top width by default (straight weirs) unless you specify a value for the bottom width.
For the side and center downcomers, downcomer top widths and weir lengths are mutually exclusive. Setting one of these for a given panel determines the other. To change from one type of specification to the other you must first clear the existing specification.
To specify the off-center downcomer, you must specify two of the downcomer top width, off-center downcomer location, off-center inside weir length, and off-center outside weir length; the remaining two of these will be calculated. These four fields are outlined in yellow when you click one of them, to point out their relationship.
The weir lengths shown are for trays with straight weirs. If you use swept-back weirs, see the Picketed/Swept-Back Weirs sheet for the lengths associated with these weirs.
Weir height	Height from the top of the tray to the top of the weirs. This is the same for all weirs.
Tray spacing	Total height from each tray in this section to the one below. The maximum allowed tray spacing is 5 m (16.404 ft) but we do not recommend spacing larger than 1 m because the correlations may not be reliable at larger tray spacing, and tray spacing larger than 2 m generates a warning when entered.
Downcomer clearance	Height from the top of the tray to the bottom of the downcomers from the tray above. This is the same for all downcomers. (Conventional downcomers only)
Liquid exit area / bottom downcomer area	The ratio of the area of the downcomer exit to the total bottom area of downcomers (for lattice downcomers only). These downcomers are only open over part of their bottom area to allow them to serve as liquid distributors and to avoid dropping liquid too close to the downcomers on the tray below. The default is 0.25.
Total downcomer height	The total height of the downcomers, including the weir height. (Lattice downcomers only)
Downcomer spacing	The distance between the mid-line of one downcomer and the mid-line of the next parallel downcomer. This must be small enough to allow all specified downcomers to fit across the tray diameter. (Lattice downcomers only)
Downcomer end gap	Distance along the mid-line of the downcomer from its end to the edge of the tray. Within this gap there is no downcomer. Default 7.62 cm. (Lattice downcomers only)
Custom Trays

When the custom tray type is selected, enter the following specifications:

Opening type: Sieve, Floating valve, or Fixed valve
Open area / Active area: The ratio of the total area of sieve or valve holes to the active area of the tray.
Active area / Cross area: The ratio of the active area (the part of the tray with holes or valves) to the entire cross-sectional area of the column
Liquid exit area / Cross area: The ratio of the area within the liquid exit path from a tray (bottom of a typical downcomer, summed over all downcomers from one tray) to the entire cross-sectional area of the column
Diameter, Tray spacing, Deck thickness: Same as for the usual tray specifications above.
If you check Has downcomers, then enter:

Total weir length: The sum of the lengths of all weirs on one tray
Weir height: Same as for the usual tray specifications above
Downcomer area / Cross area: The ratio of the total top area of all downcomers to the entire cross-sectional area of the column
Total downcomer height: The height of the downcomer
If you clear the Has downcomers box, specify the parameters A, B, and C in this formula for the clear liquid height (hcl), which is used to calculate pressure drop:



Where



Where ρL is the liquid mass density, usL is the liquid superficial velocity based on the cross-sectional area, d is the column section diameter, and μL is the liquid viscosity.

If you chose the Floating valve or Fixed valve opening type, also specify the Number of valves on one tray.

If you chose the Floating valve type, also specify the Valve material, Valve thickness, and Valve leg length.

Packed Sections



Specify packing geometry in three steps, as labeled in the diagram:

Choose the packing type. The options available in the Packing characteristics section update based on the selected packing type.

Specify the specific packing by choosing a Vendor, Material, and Dimension. Also specify the diameter of the packed section. If the packing factor for the selected packing is available in the database, it is filled in. For some vendors, it is locked and cannot be changed. If you choose a GPDC-based Pressure drop calculation method on the Design Parameters sheet, and Packing factor is missing for the selected packing, you must specify it.

If you have loaded a simulation from a past version, you can use Update Parameters to compare the packing parameters in the current version with those used when you saved your simulation.

Specify either the height of packing per stage or the height of the entire section. If you specify the height of the entire section, Aspen Plus divides that equally over the stages to determine the packed height per stage.

Update Packing Parameters Dialog Box
See Also

Packing Types and Packing Factors

Use this dialog box to selectively update packing parameters from past simulations to the values from the new packing database.

At the top of the dialog box are the packing specifications for the packed column section from which you launched this dialog box. Below this, the parameters for this packing appear in three columns. The Current Value column shows the value now used in your simulation, regardless of its source. The Database Value column shows the value in the selected database (usually the latest one; you can select the database on the Setup | Calculation Options | Calculations sheet), or blank if there is no value in the database for this parameter.

You can select the checkboxes in the Update column to indicate that you want to use the database value instead of the current value. For the Stichlmair C1, C2, and C3 parameters there is a single Update checkbox that applies to all three parameters. You can click Select All to automatically mark all checkboxes, Clear All to clear all of them, or Select Valid Database Values to automatically mark all checkboxes for parameters where the database has a value.

Select Save database values as user entered if you want to preserve the values you update as if you had entered them. If this option is not selected, values updated from the database are not saved with the simulation; if the selected database is Latest, this will cause the parameters to be automatically updated in a newer version of Aspen Plus.

When you click OK, the database values for parameters where you have marked Update overwrite the ones previously specified.

Note: In Aspen Plus 2006 and previous versions, the packing parameters were always saved with the simulation, and it is impossible to distinguish these from user-entered values.

Some vendors require these parameters to be confidential, and for those vendors this dialog box is not available.

RadFrac Column Internals Sections Geometry Picketed/Swept-Back Weirs Sheet
See Also

Geometry Form Help

Specifying Column Sections

Swept-Back Weir Calculations

When Picketed or Swept-back weirs are selected as Weir Modifications on the Geometry sheet, use this sheet to specify geometry parameters specific to those weir types. This sheet only appears in tray sections with picketed or swept-back weirs.

Picketed Weirs

Use picketed weirs increase the weir loading for 1-pass trays, or balance the weir loading for multi-pass trays. Picketed weirs have "pickets" which rise up above the top of the weir, effectively blocking part of the weir length. The picketing fraction represents the fraction of the weir length which is blocked in this way. The effective weir length which liquid flows over is reduced by the picketing fraction, which increases the weir loading.



In Rating mode, the default picketing fraction is 0 for all weirs.

In Interactive Sizing mode, the default picketing fraction is calculated in one of these ways:

For 1-pass trays, if the weir loading for the unpicketed weir is greater than the Minimum weir loading specified on the Design Parameters sheet, the default picketing fraction is 0. Otherwise, the default picketing fraction is calculated based on the extent of picketing required to raise the minimum weir loading to the specified weir loading:



For multi-pass trays, the default picketing fractions for center and off-center weirs are calculated based on the extent of picketing required to make the weir loading equal across all weirs. The side weir defaults to 0 picketing fraction.



The weir length and weir loading for each section are also shown, for reference.

Swept-Back Weirs

Use swept-back weirs to increase the effective length of the side weirs and decrease the weir loading.

Three different shapes for swept-back weirs are available, corresponding with designs offered in vendor programs SulCol, KG-Tower, and FRI. Choose one of these shapes, and then specify the geometry parameters in the diagram.

SulCol: Specify lengths A, B, and S, which define the size and shape of the swept-back portion of the weir.



In Interactive sizing mode, if the loading of the side weir exceeds the Maximum weir loading specified on the Design Parameters sheet, S is calculated to ensure that the effective weir loading of the swept back weir equals the maximum weir loading. This effective weir loading is calculated as:



The default for A is 2/3 of the width of the side downcomer, and the default for B is 2/3 of A.

KG-Tower: Specify the depth from the main part of the weir at the point where it is most swept back. The other geometry parameters are defined relative to this.



The default for this depth is calculated in the same way as the default for S in the Sulcol weir.

FRI: Specify the lengths of the three different segments of the weir.



The defaults are calculated in the same was as the default for S in the Sulcol weir.

The following results are displayed on this sheet:

The tray with maximum weir loading
The maximum weir loading for this tray
The maximum allowable weir loading (from the Design Parameters sheet)
Actual side weir length of swept-back weir
Effective (or projected) side weir length of the swept-back weir
The percentage of tray active area lost due to the swept-back weirs

See Also

Geometry Form Help

Flooding Calculations for Trays

Pressure Drop Calculations for Trays

Pressure Drop Calculations for Packing in Column Analysis

Column Sizing Algorithm

RadFrac Column Internals Sections Geometry Design Parameters Sheet
Use this sheet to specify design parameters in Rating mode for both tray and packing sections. The parameters available are different for tray and packing sections, but include pressure drop and flooding parameters in both cases.

Tray Parameters

Sizing Criterion

Parameter

Description

% jet flood and downcomer choke flood	Percentage of jet flooding limit and downcomer choke flooding limit used to compute diameter in Interactive Sizing mode.
Minimum downcomer area / Total tray area

Minimum fraction of total tray area occupied by downcomers. Used in Interactive Sizing mode.

Downcomer design basis	Choose whether the downcomers are designed to equalize the flow path length or the bubbling area for each pass on trays with 3 or more passes. (On 2 pass trays, the passes split in the middle of the column and both criteria are satisfied simultaneously.) For calculation details, see Tray and Downcomer Area Calculations.
Hydraulic plots / Limits

These parameters are only used in the user interface for determining the limits in hydraulic plots. They are not available in the engine and cannot be accessed by design specs, calculators, and the like.

Parameter

Description

Maximum acceptable pressure drop

Maximum acceptable amount of the flow-related contribution to pressure drop per stage. The final pressure drop reported for a stage also includes static vapor head losses. Default is 2500 Pa. This and other limits below determine the stability region on the hydraulic plot, and violations of the limits are indicated there.

Maximum percent jet flood

Maximum acceptable approach to jet flooding on any stage, in percent; 100 indicates the vapor velocity equals the velocity at which flooding is predicted to begin. Default is 100.

Maximum percent downcomer backup

Maximum acceptable height of aerated froth in any downcomer compared to the height of the downcomer (sum of tray spacing and weir height), in percent. Default is 100.

Maximum percent liquid entrainment

Maximum acceptable percentage of liquid entrained in the rising vapor as droplets. This limit is only applied where information is available from experiments on liquid entrainment as a function of tray hydraulics (currently bubble cap and sieve trays). Default is 10.

Minimum weir loading

Minimum acceptable volumetric flow rate of aerated liquid per unit length of weir, calculated on the basis of total liquid flow divided by total weir length. Default is 0.5 gal/min per inch.

Maximum weir loading

Maximum acceptable weir loading, calculated in the same way as for the minimum. Default is based on the tray spacing (Resetarits & Ogundeji, 2009):

Tray Spacing (in.)	Maximum Weir Loading (gal/min per inch)
12	3
15	5
18	8
21	10
24	13
Warning status (% to limit)

If the operating point approaches within this percentage of any limit, a warning is shown in the hydraulic plots.

Design factors

Parameter

Description

System foaming factor

Adjustment factor to the maximum density-corrected vapor load at flood, CSf, calculated from a jet flood correlation. Typical non-foaming systems should use a value of 1. Lower values indicate more foaming. See Foaming Calculations for typical values.

Aeration factor multiplier

Adjustment factor to the aeration parameter β used in the calculation of pressure drop through the aerated liquid on a tray. Adjust this parameter to get better agreement between calculated and measured tray pressure drops. Default is 1.

Over design factor

Multiplier to adjust the liquid flow leaving a tray and the vapor flow going to a tray. This parameter can be used to examine turnup/turndown behavior. Cannot be used if RadFrac updates the pressure drop during calculations.

Overall section efficiency	Efficiency as a ratio of the number of equilibrium stages in this section (the trays used in the model) to the number of real trays needed to achieve the same performance. This efficiency is used to convert the number of equilibrium stages to the number of real trays needed and thus obtain the pressure drop for the entire column. When this is specified, the reported section height is (total number of equilibrium stages in the section) × (tray spacing) / (overall section efficiency).
Override downcomer froth density	Aspen Plus normally calculates the relative downcomer froth density. Use this checkbox to override that calculation with your own value, and specify the value. This is a dimensionless value, a fraction of the liquid density.
Dry pressure drop multiplier	Multiplier to adjust the dry pressure drop. Default is 1.
Use legacy pressure drop correlation	When using Sulzer-Nutter float valve trays, Koch-Glitsch Ballast trays, and Koch-Glitsch Flexitrays (other than the fixed valve type S), if this box is checked then Column Analysis uses the pressure drop correlation for the selected tray type used in version V8.8 and in legacy sizing and rating. Otherwise, it uses a more recent correlation from Sulzer-Nutter or Koch-Glitsch.
Calculation methods

Parameter

Description

Weep

Method used to calculate weeping. For sieve trays, select between correlations suggested by Hsieh & McNulty (Hsieh) or Lockett (Lockett). Weeping on valve trays is calculated by modifications to the Hsieh & McNulty equation for sieve trays which these researchers suggested. Bubble cap trays do not weep significantly.

Jet flood

Method used to calculate jet flooding. This is not available for certain tray types where a method provided by the vendor is always used. If you select the User method, specify user subroutine on the Specifications | User Subroutines | Tray Sizing/Rating Sheet. Hydraulic plots will not be available when user jet flood calculations are used.

Maximum downcomer loading

Method used to calculate downcomer loading. For bubble cap and sieve trays, select between correlations suggested by Glitsch, Koch, or Nutter. For specific valve tray types, the correlation appropriate to the valve type is used.

Packing Parameters

Sizing criterion

Parameter

Description

% Approach to maximum capacity (L/V)	If selected, in interactive sizing mode this approach to maximum capacity is used to determine the diameter required for each stage and the largest of these diameters is applied to the section.
Design capacity factor	If selected, in interactive sizing mode this capacity factor is used to determine the diameter required for each stage and the largest of these diameters is applied to the section.
Design factors

Parameter

Description

Optional capacity factor at flooding

Aspen Plus calculates a value for the capacity factor at flooding. A value specified for this parameter overrides that calculated value.

System foaming factor

Specifies the degree of foaming which occurs. Typical non-foaming systems should use a value of 1. Lower values indicate more foaming. See Foaming Calculations for typical values.

Over design factor

Factor used to multiply column loadings to reflect expected minimum of maximum loadings. Cannot be used if RadFrac updates the pressure drop during calculations.

Hydraulic plot / Pressure drop

These parameters are only used in the user interface for determining the limits in hydraulic plots. They are not available in the engine and cannot be accessed by design specs, calculators, and the like.

Parameter

Description

Minimum liquid flow rate per unit area	
Determines the minimum liquid flow rate boundary on the hydraulic plot. The default depends on the type of packing, but can be overridden by specifying a value here. Defaults:

Sulzer gauze packing types (AYPLUS, BX, BXPLUS, CY, CYPLUS): 0.05 m3/m2h
Other Sulzer structured packing: 0.2 m3/m2h
Plastic structured packing: 0.5 gpm/ft2
Sheet metal, glass, ceramic, or carbon structured packing: 0.25 gpm/ft2
Wire gauze structured packing: 0.1 gpm/ft2
Plastic random packing: 1 gpm/ft2
Metal and other random packing: 0.5 gpm/ft2
Pressure drop at flood per unit packed height	Displays the calculated value of pressure drop at flooding per unit packed height. This value cannot be edited, but see below.
Allowable pressure drop per unit packed height	Limit on pressure drop per unit packed height. By default this is the pressure drop at flooding (see above). For the Walls, Stichlmair, and Robbins pressure drop methods, this cannot be changed above the pressure drop at flooding. For other methods, you can change this up to 3.99 inches of water per foot.
Minimum pressure drop per unit packed height	Lower limit on pressure drop per unit packed height. Determines a limit on the stability plot. Default: 0.05 in-water/ft.
Number of curves	Number of curves on the hydraulic plots for packed stages. There are always curves drawn at minimum and maximum allowable pressure drop; additional curves are roughly evenly spaced between these limits.
Warning status (% to limit)

If the operating point approaches within this percentage of any limit, a warning is shown in the hydraulic plots.

Pressure drop calculation method

Method used to calculate pressure drop. If you select the User method, specify user subroutine on the Specifications | User Subroutines | Pack Sizing/Rating Sheet. Hydraulic plots will not be available when user pressure drop calculations are used.

When the vendor is specified on the Geometry sheet as Montz, Raschig, or Sulzer, the default is a correlation provided by the vendor. For Sulzer, the only other correlation available is User. For Raschig and Montz, only the vendor correlation is available and the field is dimmed.

Non-vendor methods:

Billet-99
Eckert
GPDC-85
Robbins
SLE
Stichlmair
User (requires subroutine)
Wallis
If you choose a GPDC-based method and Packing factor is not available in the database for your chosen packing, then you must specify it on the Geometry sheet.

Hydraulic limits for column targeting

Parameter

Description

Flooding limit

Limit to jet flood velocity used when Column Targeting Hydraulic Analysis is enabled. For more information, see Column Targeting: Overview.

References

Resetarits, M.R. and Ogundeji, A.Y. "On Distillation Tray Weir Loading." AIChE Spring National Meeting, Tampa, FL (April 26-30, 2009).

See Also

Geometry Form Help

Pressure Drop Calculations for Packing in Column Analysis

Liquid Holdup Calculations for Packing

Stichlmair et al. (1989) Rate-Based Packing Holdup Correlation

RadFrac Column Internals Sections Geometry Packing Constants Sheet
This sheet only appears in packed sections.

Use this sheet to specify Specific surface area and Void fraction for packings. These parameters are used in many pressure drop/flood correlations for packings.

In addition, you can specify other parameters needed to calculate pressure drop and liquid holdup only when you specify the Stichlmair method on the Design Parameters or Sizing Parameters sheet.

These parameters apply only to sections with Packing. The databank contains defaults for these parameters for many packings, which are filled in automatically when available. Use this sheet to override the databank values or supply missing values.

For some vendors, these parameters are locked to confidential values.

See Also

Geometry Form Help

RadFrac Column Internals Sections Geometry Tray Geometry Summary Sheet
This sheet only appears in tray sections.

Use this sheet to view a summary of the dimensions of each tray, including the active area and area for each downcomer (for tray sections only). The first table displays properties which apply to entire trays, such as tray spacing and deck thickness. The second table displays downcomer properties which may be set differently for downcomers in different positions on multiple-pass trays. The third table displays weir properties which may be different for each weir on multiple-pass trays. The fourth table provides the flow path length and bubbling area of each panel (for conventional downcomers only).

For lattice downcomers and custom trays, the information is still split into tables for tray properties, downcomer properties, and weir properties, but the downcomer and weir properties are totals and common properties which apply to all downcomers and weirs; values for individual downcomers and weirs are not provided.

For details about these calculations, see Tray and Downcomer Area Calculations.

See Also

Working with RadFrac

Column Analysis Overview

Interactive Update of Results in Column Analysis

RadFrac Column Internals Sections Results Form
Use this form to view the results for a section. These results are updated interactively when you are specifying internals, for all sections, if possible. When you run the simulation, only the results for the sections in the internals set selected as active are updated by the engine, and other interactive results are cleared.

This form contains the following sheets:

Use this sheet

To view

Summary

Overall results

By Stage/By Tray

Results for each stage in the section

Messages	Messages about column behavior

See Also

Results Form Help

Column Analysis Overview

Interactive Update of Results in Column Analysis

RadFrac Column Internals Sections Results Summary Sheet
Use this sheet to view overall tray or packing rating results for a section. For detailed results for individual stages, see the By Stage/By Tray sheet. These results are updated interactively when you are specifying internals, for all sections, if possible. When you run the simulation, only the results for the sections in the internals set selected as active are updated by the engine, and other interactive results are cleared.

Note: If there are two liquid phases in a column, the total liquid flow rate (light and heavy liquids) is used in calculations. The transport properties are weighted averages of the light and heavy liquids for each liquid phase.

Note: Column Analysis always uses the Vapor To and Liquid From convention for column flows when calculating hydraulic results such as flooding and approach to system limit. In rate-based mode, RadFrac uses the Vapor From convention instead. The report file generated by the engine contains hydraulic results based on this convention which differ from those reported by Column Analysis.

Trayed Sections

The following results are shown for a trayed section:

Starting and ending stages of the section
Calculation mode (Rating or Sizing)
Tray type
Number of tray passes (for conventional downcomers) or number of downcomers (for lattice downcomers)
Tray spacing
Diameter of the section
Height of the section
Pressure drop across the section. Includes static vapor head if the option to do so is selected.
Head loss across the section, in inches of hot liquid
List of trays affected by weeping
The Limiting conditions table shows key results that can help to identify trays in the column that might be operating close to or outside acceptable limits. The following results are shown. For each condition, in addition to the value, the tray where the maximum occurs is listed. For loadings, the downcomer or weir where the maximum occurs is also listed.

Maximum % jet flood
Maximum % downcomer backup (aerated)
Maximum downcomer loading
Maximum % downcomer choke flood
Maximum weir loading
Maximum aerated height over weir
Maximum % approach to system limit
Maximum Cs based on bubbling (active) area
Packed Sections

The following results are shown for a packed section:

Starting and ending stages of the section
Diameter of the section
Packed height per stage
Total height of the section
Maximum % capacity (at constant L/V) in the section
Maximum % capacity (at constant L) in the section
Maximum capacity factor (Cs) in the section
Pressure drop across the section. Includes static vapor head if the option to do so is selected.
Average pressure drop / Height
Average pressure drop / Height (Frictional). This is the average pressure drop per unit packing height excluding the contribution from static vapor head.
Maximum stage liquid holdup, as calculated by the pressure drop correlation specified on the Column Internals | Sections | Geometry | Design Parameters sheet. If the pressure drop correlation doesn't calculate the liquid holdup, the Stichlmair correlation is used.
Maximum stage superficial velocity in the section
Maximum Fs
Maximum % approach to system limit
For information about the methods used to calculate some of these packing results, see Packed Columns.

Rate-Based design

For both trays and packing, the Calculated diameter appears if the column is Rate-Based (Calculation type on Specifications | Setup | Configuration sheet) and Design mode to calculate column diameter is checked on the Rate-Based Modeling | Rate-based Setup | Design sheet, showing the result of that design calculation.

See Also

Results Form Help

Column Analysis Overview

Interactive Update of Results in Column Analysis

RadFrac Column Internals Sections Results By Stage/By Tray Sheet
This is called the By Stage sheet for packed sections and the By Tray sheet for tray sections.

Use this sheet to view stage-by-stage results for tray and packing rating calculations. For each stage in this section, many results are shown. Use the View field to select which results are shown (selecting All shows all of these results). These results are updated interactively when you are specifying internals, for all sections, if possible. When you run the simulation, only the results for the sections in the internals set selected as active are updated by the engine, and other interactive results are cleared.

Note: If there are two liquid phases in a column, the total liquid flow rate (light and heavy liquids) is used in calculations. The transport properties are weighted averages of the light and heavy liquids for each liquid phase.

Hydraulic results

For trays, these results are shown.

Percent Jet flood

Total pressure drop: The sum of dry pressure drop, clear liquid height on the tray, and any residual pressure drop terms that might apply.

Percent Downcomer backup (Aerated): Downcomer backup (aerated liquid) divided by the total of tray spacing and weir height, expressed as a percentage

Dry pressure drop: Average pressure drop for a tray when the liquid flow is zero. This is reported in both pressure drop units and equivalent liquid head units.

Total pressure drop (Head loss): Same as Total pressure drop, reported in head units.
Downcomer backup: Average height of aerated liquid and of unaerated liquid in the downcomers.

Percent Downcomer backup (Unaerated): Downcomer backup (unaerated liquid) divided by the total of tray spacing and weir height, expressed as a percentage
Liquid mass rate/Column area

Liquid volume rate/Column area

Fs (net area): 

Fs (bubbling or active area): 

Cs (net area): 

Cs (bubbling or active area): 

Approach to system limit (as a percentage)

Height over weir (of aerated and unaerated liquid)

For each downcomer type (depending on number of tray passes; for conventional downcomers) or for the longest downcomer, the shortest downcomer, and the median of the downcomers (for lattice downcomers), the following results are given. For custom trays, the total downcomer volume, one average velocity, and one average for each other result based on the specified total downcomer area is given.

Exit velocity
Volume

Residence time

Velocity from top

Velocity from bottom (conventional downcomers only)

Downcomer choke flood (percent)
Average weir loading (lattice downcomers and custom trays only) or the weir loading for each weir type
For packed sections, the results are:

Packed height

Percent capacity (based on constant L/V ratio or constant liquid rate)

Pressure drop (includes static head if this option is selected)

Pressure drop per height (Frictional). Does not include static head contribution.
Liquid holdup, as calculated by the pressure drop correlation specified on the Column Internals | Sections | Geometry | Design Parameters sheet. If the pressure drop correlation doesn't calculate the liquid holdup, the Stichlmair correlation is used.

Liquid velocity

Fs

Cs

% Approach to system limit

Hydraulic results-Short

This provides a summary of just the key results for each tray/stage. The results include:

Percent jet flood (trays only)
Total pressure drop (trays only)
Percent downcomer backup (aerated) (trays only)
Percent capacity at constant L/V (packing only)
Pressure drop per height (Frictional) (packing only)
Liquid mass flow (liquid from stage, including any liquid draw from the stage)

Vapor mass flow (vapor to stage)

Liquid mass density

Vapor mass density

Liquid viscosity
Vapor viscosity
Surface tension
Downcomer choke flood (percent) for each downcomer type (for conventional downcomers) or for the longest downcomer, the shortest downcomer, and the median of the downcomers (for lattice downcomers), or for the average of downcomers (for custom trays)

Average weir loading (lattice downcomers and custom trays only) or the weir loading for each weir type.
State conditions

All liquid results apply to the liquid leaving a stage/tray and include any liquid draw from the stage/tray. All vapor results apply to vapor entering a stage/tray.

Liquid temperature

Vapor temperature

Liquid mass flow

Vapor mass flow

Liquid volume flow

Vapor volume flow

Physical properties

All liquid results apply to the liquid leaving a stage/tray. All vapor results apply to vapor entering a stage/tray.

Liquid molecular weight

Vapor molecular weight

Liquid mass density

Vapor mass density

Liquid viscosity

Vapor viscosity

Surface tension (for liquid leaving a stage/tray)

RadFrac Column Internals Sections Results Messages Sheet
See Also

Results Form Help

Column Analysis Overview

Interactive Update of Results in Column Analysis

This sheet displays messages related to column behavior. These messages appear next to an icon indicating the severity of the message:

Message: This indicates potentially useful information, such as general design guidelines which are violated, which do not necessarily indicate a problem.
Warning: This indicates a problem which may cause operational issues with the column.
Error: This indicates a problem which will almost certainly prevent proper operation of the column.
These results are updated interactively when you are specifying internals, for all sections, if possible. When you run the simulation, only the results for the sections in the internals set selected as active are updated by the engine, and other interactive results are cleared.

See Also

Working with RadFrac

Hydraulic Plots

Interactive Update of Results in Column Analysis

RadFrac Column Internals Hydraulic Plots Form
Use this form to view hydraulic operating diagrams for the column. These results are updated interactively when you are specifying internals, for all sections, if possible. They are not calculated by the engine. Hydraulic plots are not available for sections where jet flooding or pressure drop is calculated by a user subroutine.



Column Diagram

At the left, a column diagram appears. There are three different views of the column available through tabs at the top.

Stages depicts the sections in proportion to their diameter, and indicates the locations of feeds and products. You can hover the mouse over any of these arrows to see a tooltip indicating the connected stream(s).

Vapor depicts the stages as bars indicating the stable range for the vapor flow rate on each stage. This bar is colored blue if the flow rate is in the stable region, yellow if it is near a stability limit (within a range specified by Warning status (% to limit) on the Design Parameters sheet), and red if the flow is outside the stable region (using other limits defined on that sheet). A dot indicates the current operating point.



Liquid does the same for the liquid flow rates, including the colors.



On this diagram, five stages are surrounded by a box; small diagrams for each of these stages are shown at the bottom of the form in the Carousel. You can also click any stage to center the carousel on the stage and display the stability diagram for that stage.

Downcomer Loading and Weir Loading

If the selected stage is a tray, these diagrams appear below the column diagram. The Downcomer Loading diagram shows a bar chart of the downcomer loadings (for each downcomer in multiple-pass trays). Downcomer loading is volumetric flow per time per cross-sectional downcomer area. The limit of 100% downcomer choke flood is shown as a solid line across the plot, with any smaller limit (such as 80% in the example above) shown as a dashed line.

The Weir Loading shows a bar chart of the weir loadings (for each weir in multiple-pass trays). The minimum and maximum acceptable weir loadings, taken either from specified values or Aspen Plus defaults, are shown as horizontal lines across the bar chart. Weir loading is volumetric flow of liquid over the weir per time per length of weir. For 3 and 4 pass trays, the labels OCIn and OCOut stand for the off-center inside weir (the weir on the off-center downcomer for the panel toward the center of the column) and the off-center outside weir.

Stability Diagram

Trays



The tray stability diagram shows the actual liquid and vapor flow rates (Operating Point, shown with a small dot) for a particular tray, along with the boundaries of the stable operating region. The boundaries are based on limits specified on the Design Parameters sheet. These limits include:

Maximum % jet flood
Maximum % downcomer backup (aerated)
Maximum % entrainment
Weep point
Dump point
Maximum and minimum weir loading
Ultimate capacity
Packing



The packing stability diagram shows the vapor flow versus liquid flow curves for various values of the fractional pressure drop per unit packed height. The operating limits are determined by the curve at the maximum allowable pressure drop and the minimum liquid flow rate per unit area specified on the Design Parameters sheet.

General Usage

Click the arrows next to the stage number or a stage in the Column Diagram or Carousel to jump to another stage. Click the icon at the upper right to display a legend.

The Diagram group in the Hydraulic Plots tab of the ribbon has controls which affect this diagram:

When Draw all curves is checked, all the curves which could impact stability are shown, even those which are currently entirely outside of the stable region.
When Shade diagram is checked, the stable region is shaded.
When Label curves is checked, a label is shown identifying the meaning of each curve.
If the operating point is outside the stable region, when you move the mouse pointer over it, a message is displayed indicating the limit(s) which this operating point violates. Anywhere in the stability diagram, a tooltip indicates the liquid and vapor flow coordinates for the position of the pointer.

You can right-click the plot to:

Print the plot
Copy the plot to paste in another program
Reset the zoom level (the scroll wheel zooms the plot)
View warning and error messages
Add or remove scooters (draggable horizontal and vertical lines which indicate their coordinates near the axis)


Additional controls are available in the Hydraulic Plots tab of the ribbon, including the ability to change the axes from linear to log scales, and to select the basis for the vapor and liquid flows used on the axes. For the liquid, you can choose:

Mass flow

Volume flow

Mass flux based on total area (trays only)

Volume flux based on total area (trays only)

Superficial velocity CL (packing only)

For the volume, you can choose:

Mass flow

Volume flow

Superficial F-factor Fs (superficial velocity times the square root of density) (packing only)

Fs based on bubbling area (trays only)

Fs based on net area (trays only)

Fs based on column cross-sectional area

Density-corrected vapor superficial velocity Cs (packing only)

Cs based on bubbling area (trays only)

Cs based on net area (trays only)

For a description of the different areas for tray columns, see Tray and Downcomer Area Calculations.

Carousel

The section at the lower right displays small versions of the current large stage plot for multiple stages. Drag the scrollbar to view more stages. Click a stage to switch the other diagrams to show that stage. Stages where the operating point is near or beyond a stability limit are shown with a warning or error icon. You can click this icon to see details of the stability limits violated.

RadFrac Column Internals Column Hydraulic Results Form
See Also

Interactive Update of Results in Column Analysis

Use this form to review results over the entire column. These results are updated interactively when you are specifying internals, if possible. When you run the simulation, only the results for the internals set selected as active are updated by the engine, and other interactive results are cleared.

Summary

The summary table lists key information for the entire column being rated or sized:

Total number of trayed/packed stages excluding condenser and reboiler
Total height of the column (sum of all tray and packed section heights)
Total pressure drop across the trayed & packed sections. This includes the static head if the option to do so was selected. It does not include the pressure drop across the condenser, reboiler, and sump.
Total head loss. This is the total pressure drop expressed as a height of liquid head
The total number of trayed & packed sections
The total number of different diameters. This can be less than or equal to the number of sections.
Pressure drop across the sump
Total residence time
Sections

The sections table provides an overview of the various internals sections within the column. These results are displayed for each section:

Start and end stages of the section
Diameter
Height
Type of internals (tray or packing)
Tray or packing type (such as sieve or pall)
Pressure drop across the section (includes static head if this option is selected)
Largest percentage approach to flooding in the section (percent jet flood in trayed sections, percent capacity (constant L/V) in packed sections)
Limiting stage which determines the diameter of the section.
Click View to see the detailed results for any section.

Note: Column Analysis always uses the Vapor To and Liquid From convention for column flows when calculating hydraulic results such as flooding and approach to system limit. In rate-based mode, RadFrac uses the Vapor From convention instead. The report file generated by the engine contains hydraulic results based on this convention which differ from those reported by Column Analysis.

Column Analyzer Report Dialog Box
See Also

Interactive Update of Results in Column Analysis

Click Reports in the Column Design tab of the ribbon to open the Column Analyzer Report dialog box.

This dialog box lets you generate a report for a particular Column Internals option as an Adobe Acrobat (*.pdf) document. In the dialog box, you can specify:

Page header information. This information will be displayed at the top of each page in the report.
Page display options. Check Black and white tables if tables should be black and white only. If unchecked, gray shading is used in alternate rows similar to shading within Aspen Plus forms.
Report contents (column).
Check Profiles to include the profile of temperatures, pressures, flows, and transport properties along the column.
Check Column internals summary to include information similar to what is found on the Column Hydraulic Results form.
Select which column option to report.
Report contents (sections).
Check Geometry to report information from the tray/packing Geometry sheet.
Check Design parameters to report information from each section's Design Parameters sheet.
Check Results summary to report information from each section's Results | Summary sheet.
Check By Tray/Stage results to report information from each section's Results | By Stage/By Tray sheet.
Check Column operating plots to include the operating plots for each stage.
Once you have specified the desired options, click Generate report to create the report. A Save As dialog box will appear allowing you to specify the name and location of the report file.

Note: In localized versions of Aspen Plus, this report is generated in the configured local language. The Arial Unicode MS font (included as part of the standard Microsoft Office installation) may be required to view parts of the report in some languages.

Export to KG Tower
See Also

Interactive Update of Results in Column Analysis

When exporting to KG Tower, choose a section from the Select Section list, and select up to five stages from that section to export by checking the boxes next to them. (KG Tower only supports one set of trays or packing and up to five stages per case, so you will need to perform multiple exports to handle columns with multiple sections or if you need to model more stages in KG Tower.)

Click Export when you have completed choosing stages. Select the folder and name of the file and click Save. The data is written to a file in the vendor's format and the folder containing the file is opened.

RadFrac Tray Sizing Form
See Also

Working with RadFrac

Sizing and Rating for Trays and Packings: Overview

Use this form to specify tray sizing.

Note: This form is only available in Aspen Plus cases saved in version V8.8 or earlier, for which you chose not to upgrade to Column Analysis when opening the file.

RadFrac determines the column section diameter from:

Specified number of passes

Tray spacing

Flooding approach

Minimum downcomer area

Use this sheet

To do this

Specifications

Specify section definition and tray geometry

Design

Specify flooding parameters and design factors

Results

View results of tray sizing input

Profiles

View stage profile of column

From the Object Manager you can copy and paste Tray Sizing sections to duplicate them within this block or in other column models (RadFrac, MultiFrac, PetroFrac, including PetroFrac strippers), in the same or another Aspen Plus simulation. You can also copy and paste them into ASCII files you can transfer by means such as e-mail.

If section IDs of pasted sections conflict with existing ones in the column, the Reconcile Section IDs dialog box appears, allowing you to resolve the conflicts. After pasting sections, the block may become incomplete. You must make whatever changes are necessary to properly specify it.

RadFrac Tray Sizing Specifications Sheet
See Also

Tray Sizing Form Help

Single-Pass and Multi-Pass Trays

Modes of Operation for Trays

Use this sheet to specify column sizing, including trayed section definition and tray geometry. You define each column section by specifying the starting and ending stages.

The maximum allowed tray spacing is 2 m (6.562 ft) but we do not recommend spacing larger than 1 m because the correlations may not be reliable at larger tray spacing.

RadFrac Tray Sizing Design Sheet
See Also

Tray Sizing Form Help

Flooding Calculations for Trays

Foaming Calculations for Trays

Use this sheet to specify flooding parameters and design factors for the trayed section of the column.

RadFrac Tray Sizing Results Sheet
See Also

Tray Sizing Form Help

Single-Pass and Multi-Pass Trays

Use this sheet to view the column sizing results for the trayed section. The following table describes the results displayed.

Variable

Description

Section start stage

Starting stage number of trayed section

Section end stage

Ending stage number of trayed section

Stage with maximum diameter

Stage at maximum column diameter

Column diameter

Maximum column diameter

Following results for the stage with maximum column diameter:

Downcomer area/column area

Ratio of downcomer area to total cross sectional area

Side downcomer velocity

Maximum downcomer velocity

Flow path length

Distance across the tray between downcomer and outlet weir. Aspen Plus chooses a design with equal flow path length across each pass for multi-pass trays.

Side downcomer width

Width at top of side downcomer

Side weir length

Length of outlet weir of side downcomer

Center downcomer width

Width at top of center downcomer (2 or 4 pass trays only)

Center weir length

Length of outlet weir of center downcomer (2 or 4 pass trays only)

Off-center downcomer width

Width at top of off-center downcomer (3 or 4 pass trays only)

Off-center short weir length

Length of shorter outlet weir of off-center downcomer (3 or 4 pass trays only; the weir farther from the center of the tray)

Off-center long weir length

Length of longer outlet weir of off-center downcomer (3 or 4 pass trays only; the weir closer to the center of the tray)

Tray center to OCDC center

Distance from the center of the tray to the center of the off-center downcomer (3 or 4 pass trays only)

RadFrac Tray Sizing Profiles Sheet
See Also

Tray Sizing Form Help

Use this sheet to view profiles of tray sizing results. The following table describes the variables displayed.

Variable

Description

Stage

Stage number

Diameter

Column diameter calculated based on stage loading and specified flooding approach.

Total area

Total tray cross sectional area

Active area per panel

Tray active area per panel

Side downcomer area

Area of side downcomer

RadFrac Tray Rating
See Also

Working with RadFrac

Sizing and Rating for Trays and Packings: Overview

Getting Started with Aspen Rate-Based Distillation

Use Tray Rating to simulate the performance of trays with a specified geometry.

Note: This form is only available in Aspen Plus cases saved in version V8.8 or earlier, for which you chose not to upgrade to Column Analysis when opening the file.

Use this form

To do this

Setup

Specify the geometry of the tray

Rate-Based

Specify additional options for rate-based distillation, including mass transfer coefficient correlations

Results

View results of tray rating calculations

From the Object Manager you can copy and paste Tray Rating sections to duplicate them within this block or in other column models (RadFrac, MultiFrac, PetroFrac, including PetroFrac strippers), in the same or another Aspen Plus simulation. You can also copy and paste them into ASCII files you can transfer by means such as e-mail.

Pasted Tray Rating sections from RadFrac contain entries related to Aspen Rate-Based Distillation. When these sections are pasted into other column models these entries are ignored.

If section IDs of pasted sections conflict with existing ones in the column, the Reconcile Section IDs dialog box appears, allowing you to resolve the conflicts. After pasting sections, the block may become incomplete. You must make whatever changes are necessary to properly specify it.

RadFrac Tray Rating Setup Form
See Also

Working with RadFrac

Sizing and Rating for Trays and Packings: Overview

Getting Started with Aspen Rate-Based Distillation

Use this form to specify the geometry of the trays for rating:

Use this sheet

To specify

Specs

Sections, tray geometry, weir heights

Design / Pdrop

Design parameters, pressure drop options

Layout

Trayed sections, tray parameters

Downcomers

Downcomer geometry

RadFrac Tray Rating Setup Specs Sheet
See Also

Tray Rating Setup Form Help

Single-Pass and Multi-Pass Trays

Bubble Cap Tray Layout

Use this sheet to specify:

Tray type

Tray geometry, including parameters specific to the tray type such as cap diameter for bubble cap trays and number of valves per panel for valve trays

Tray design parameters, including tray deck thickness, tray spacing, and weir height

The maximum allowed tray spacing is 2 m (6.562 ft) but we do not recommend spacing larger than 1 m because the correlations may not be reliable at larger tray spacing.

RadFrac defaults the weir heights for different panels. The default for valve and sieve trays is 2 inches (50.8 mm). The default for bubble cap trays is a function of cap diameter, to provide adequate dynamic seal and minimum skirt clearance. For more information, see Bubble Cap Tray Layout.

RadFrac Tray Rating Setup Design / Pdrop Sheet
See Also

Tray Rating Setup Form Help

Flooding Calculations for Trays

Pressure Drop Calculations for Trays

Foaming Calculations for Trays

EO Usage Notes

Use this sheet to specify:

Flooding parameters

Design parameters

Pressure drop

Aeration factor multiplier. This parameter can be used to tune the pressure drop calculations.

RadFrac can update the column pressure with pressure drops calculated during tray rating. The Overall section efficiency is the ratio of the number of theoretical trays in this section (the trays used in the model) to the actual number of trays needed to achieve the same performance. This efficiency is used to convert the pressure drop per equilibrium stage to pressure drop per real tray and thus obtain the pressure drop for the entire column.

RadFrac Tray Rating Setup Layout Sheet
See Also

Tray Rating Setup Form Help

Bubble Cap Tray Layout

Single-Pass and Multi-Pass Trays

Use this sheet to specify the tray layout for different types of trays. Specify the tray type in the part of the sheet where sections are defined. See field help for more information about tray parameters.

RadFrac Tray Rating Setup Downcomers Sheet
See Also

Tray Rating Setup Form Help

Single-Pass and Multi-Pass Trays

Use this sheet to specify downcomer dimensions.

The default downcomer clearance is 0.5 inches (12.7 mm) less than the weir height on the side downcomer, to provide the minimum downcomer seal, and values on other panels to balance the downcomers. If you specify a value for one panel, you must specify values for all panels.

You can enter the width at the top and bottom of each downcomer.

If you specify the top width for any panel, you must specify a value for all panels. If you do not specify any value, RadFrac estimates the downcomer top width from the downcomer areas as follows.

Number of passes

Downcomer area/
tray cross sectional area

1

.10

2

.12

3

.15

4

.20

If you do not enter the bottom width, the default is a straight downcomer. But if you enter the bottom width for any panel, you must enter it for all panels.

RadFrac Tray Rating Rate-based Form
See Also

Working with RadFrac

Sizing and Rating for Trays and Packings: Overview

Rate-Based Distillation

Getting Started with Rate-based Distillation

Use this form to specify additional options for tray rating used in the rate-based calculations of RadFrac.

Use this sheet

To specify

Rate Based

Whether to perform rate-based calculations for this section, flow model, interfacial area scaling factor, and film parameters

Correlations

Methods for calculating mass transfer coefficient, heat transfer coefficient, and interfacial area

Holdups

Liquid and vapor holdup for kinetic reactions, holdup scaling factors, and method of calculating holdup

Design

Parameters for calculating column diameter

Optional

Additional discretization points in the film

RadFrac Tray Rating Rate-based Rate Based Sheet
See Also

RadFrac Tray Rating Rate-based Form

Rate-Based Distillation

Flow Models

Getting Started with Rate-based Distillation

Use this sheet to specify whether to perform rate-based calculations for this section, the flow model, average flow path factor, interfacial area scaling factor, and film parameters.

Field

Description

Rate-based calculations

Select this checkbox to enable rate-based calculations in this section. You must also select Rate Based for the Calculation Type on the RadFrac Setup Configuration sheet.

Flow Model

Determines how the bulk properties are calculated, relative to the inlet and outlet properties for each phase on each stage. See Flow Models for details on the options available.

Heat transfer factor

Scaling factor for heat transfer. The heat transfer predicted by the correlation is multiplied by this factor.

Interfacial area factor

Scaling factor for interfacial area. The interfacial area predicted by the correlation and reported on the Interface Profiles | Interfacial Area sheet is multiplied by this factor.

Liquid mass transfer coefficient factor

Scaling factor for liquid mass transfer. The liquid-phase mass-transfer coefficient predicted by the correlation is multiplied by this factor. This affects the overall liquid binary mass transfer coefficients reported on the Transfer Coefficients | Mass Transfer sheet.

Vapor mass transfer coefficient factor

Scaling factor for vapor mass transfer. The vapor-phase mass-transfer coefficient predicted by the correlation is multiplied by this factor. This affects the overall vapor binary mass transfer coefficients reported on the Transfer Coefficients | Mass Transfer sheet.

Average flow path factor

The average flow path length Z is calculated based on a weighted average of two different methods of calculating the length.


where

Z0 = The distance straight across the tray from the edge of the downcomer area to the weir

Z1 = The active bubbling area divided by the weir length

α = Average flow path factor specified on this sheet

Some mass transfer and interfacial area correlations use this average flow path length.

Film resistance

Specifies how Aspen Rate-Based Distillation calculates the film resistance for each phase. Options are:

Nofilm: No film resistance in this phase

Film: Diffusion resistance but no reactions in film in this phase

Filmrxn: Diffusion resistance with reactions in film in this phase

Discrxn: Diffusion resistance with reactions in film in this phase, and film is discretized. See Film Reactions for details.

In phases and stages without reactions, Filmrxn and Discrxn are treated the same as Film. In particular, this means that no discretization results will appear for phases or stages without reactions.

When you specify Discrxn for either phase, you must also specify the number of additional discretization points for that phase on the Optional sheet. The points are chosen by a built-in algorithm if you do not specify their locations.

Film non-ideality correction

Whether to apply the film non-ideality correction in each phase.

When this correction is applied, the matrix of thermodynamic factors with elements defined in equation 2.2.5 in Taylor and Krishna (1993) is evaluated and used in mass transfer equations. This yields more accurate results but is more computationally intensive.

When the correction is not applied, the identity matrix is used in place of the matrix of thermodynamic factors and there is no correction for non-ideality for the mass flux equations.

Reference

Ross Taylor and R. Krishna, Multicomponent Mass Transfer, 1993.

RadFrac Tray Rating Rate-based Correlations Sheet
See Also

RadFrac Tray Rating Rate-based Form

Rate-Based Distillation

Built-in Correlations

Use this sheet to specify methods for calculating mass transfer coefficient, heat transfer coefficient, and interfacial area.

Rate-based Distillation uses a rigorous multicomponent mass transfer theory (Krishna and Standart, 1976) with the binary mass transfer coefficients to evaluate multicomponent mass transfer coefficients and component mass transfer rates between vapor and liquid phases.

When you choose the generalized correlation, also choose a correlation ID specifying a particular generalized correaltion and specify the parameters for that correlation on the Generalized Transfer Correlations form.

Be aware that the mass transfer coefficient, interfacial area, and holdup correlations are related. If you choose the Zuiderweg (1982) correlation for mass transfer coefficient, also choose it for interfacial area and holdup.

Note: When one of the mass transfer correlations which also computes interfacial area is selected for mass transfer coefficient, that method is used for computing the interfacial area used in calculating mass transfer, because in these correlations, the mass transfer and interfacial area have been designed to work together and do so significantly better than mixing and matching the correlations. A different interfacial area correlation can be selected which will be used for calculating the interfacial area used in reaction calculations, if applicable.

The default interfacial area correlation depends on the type of trays used. The Zuiderweg correlation applies only to sieve trays.

Tray Type

Default Correlation

Others Available

Bubble-cap

Scheffe (1987)

Generalized
User

Sieve

Zuiderweg (1982)

Scheffe (1987)
Generalized
User

All valve tray types (includes Glitsch Ballast, Koch Flexitray, and Nutter Float Valve)

Scheffe (1987)

Generalized
User

The default mass transfer correlation depends on the type of trays used. Some correlations only apply to certain tray types.

Tray Type

Default Correlation

Others Available

Bubble-cap

AIChE (1958)

Hughmark (1971)
Gerster (1958)
Generalized
User

Sieve

Chan And Fair (1984)

Chan and Fair (RF)
Zuiderweg (1982)
Chen and Chuang (1993)
AIChE (1958)
Gerster (1958)
Generalized
User

All valve tray types (includes Glitsch Ballast, Koch Flexitray, and Nutter Float Valve)

Scheffe (1987)

AIChE (1958)
Gerster (1958)
Generalized
User

References

Krishna, R. and G.L. Standart, "A Multicomponent Film Model Incorporating an Exact Matrix Method of Solution to the Maxwell-Stefan Equations," AIChE J., 22, (1976) pp. 383-389.

RadFrac Tray Rating Rate-based Holdups Sheet
See Also

RadFrac Tray Rating Rate-based Form

Rate-Based Distillation

Rate-Based Holdup Correlations

Differences in Specifications Between Rate-Based and Equilibrium Modes

Use this sheet to specify liquid and vapor holdup for kinetic reactions, downcomer residence time, holdup scaling factors, the method of calculating holdup, and the vapor space factor.

Use the Residence time field in the Liquid section of this sheet for the downcomer residence time. This residence time is relevant for kinetic reactions in the liquid phase.

Vapor holdup on trays consists of two parts, vapor in the froth and vapor holdup above the froth. Vapor in the froth is calculated by the correlation. The Vapor space factor is the fraction of the vapor space above the froth on each tray which is included in that tray's vapor holdup.

Liquid holdup on trays is just the liquid volume on the active area. The liquid in the downcomer is ignored. A holdup factor can be used to account for the liquid holdup in the downcomer that is excluded in this holdup.

The specified holdup value or correlation on this sheet is used to calculate kinetic reaction rates for this section when it is solved in rate-based mode. If a holdup value is specified, that value is the holdup per stage. If a Holdup scale factor is specified, the holdup specified or calculated by a correlation is multiplied by the factor. For equilibrium-based calculations, and for equilibrium-based initialization of rate-based calculations, the holdups on the RadFrac |Reactions | Holdups sheet are used; these are not scaled by the scale factor.

The holdup basis specified on the RadFrac |Reactions | Holdups sheet determines the units of the pre-exponential factor (on the Reactions | Reactive Distillation | Kinetic sheet) of reactions in this column, even during rate-based calculations. A holdup specified here in a different basis is converted to the basis specified on the RadFrac |Reactions | Holdups sheet at each step of the integration based on the density and/or average molecular weight of the fluid at that time.

Important: Incorrect specification of the holdup basis will lead to incorrect interpretation of the pre-exponential factor units and thus incorrect results. See Holdup for Rate-Controlled Reactions for more information.

Correlations

The default holdup correlation for trays is Bennett (1983). The Percent-data and User methods are also available for all tray types.

The Zuiderweg (1982) and Stichlmair (1978) correlations apply only to sieve trays.

Be aware that the mass transfer coefficient, interfacial area, and holdup correlations are related. If you choose the Zuiderweg (1982) correlation for mass transfer coefficient, also choose it for interfacial area and holdup.

Liquid holdup on trays is just the liquid volume on the active area. The liquid in the downcomer is ignored. A holdup factor can be used to account for the liquid holdup in the downcomer that is excluded in this holdup.

RadFrac Tray Rating Rate-based Design Sheet
See Also

RadFrac Tray Rating Rate-based Form

Rate-Based Distillation

Use this sheet to specify a base stage and base approach to flooding. These values are used to perform a simple design calculation to estimate the column diameter, based on the approach to flooding on the indicated stage. This option should be used with care; the stage where flooding is most critical must be chosen, and there are additional restrictions, see Specifying the Rate-based Design Calculation.

RadFrac Tray Rating Rate-based Optional Sheet
See Also

RadFrac Tray Rating Rate-based Form

Rate-Based Distillation

Film Reactions

Use this sheet to specify additional discretization points in the film. These points are used when either the vapor film or liquid film are specified as Discrxn (discretized with reactions) on the Rate Based sheet, for phases and stages where reactions are specified. When you specify Discrxn for a phase, you must specify the number of additional discretization points for that phase to be 1 or more.

Locations of discretization points are specified on a scale from 0 (vapor-liquid interface) to 1 (edge of bulk vapor or liquid). Points at 0 and 1 are always included. The other points between 0 and 1 are the additional discretization points.

Specify locations for additional points in strictly increasing order. If you do not specify the locations of the points, or you do not specify all of them, or you specify values out of order, or the difference between two adjacent points is less than 10-6, then the default positions for the discretization points are used (based on the Film discretization ratio; see Film Reactions).

RadFrac Tray Rating Results Form
See Also

Working with RadFrac

Sizing and Rating for Trays and Packings: Overview

Use this form to view the results of tray rating calculations

Use this sheet

To do this

Results

View tray rating results

Profiles

View profiles of tray rating results

RadFrac Tray Rating Results Results Sheet
See Also

Tray Rating Results Form Help

Use this sheet to view key results of tray rating calculations. These results are displayed:

Variable

Description

Section start stage

Starting stage number of column section

Section end stage

Ending stage number of column section

Maximum flooding factor-stage

Stage with maximum fractional approach to jet flooding in the section

Maximum flooding factor-panel

Panel with maximum fractional approach to jet flooding in the section

Section pressure drop

Total pressure drop of the section

The following table describes the downcomer results.

Variable

Description

Maximum backup/ Tray spacing-stage

Stage with the maximum value for the ratio of downcomer backup to tray spacing in the section

Maximum backup / Tray spacing-location

Maximum value for the ratio of downcomer backup to tray spacing in the section

Maximum backup / Tray spacing-backup

Downcomer backup at the maximum value for the ratio of downcomer backup to tray spacing in the section

Maximum velocity / Design velocity-stage

Stage with maximum value for the ratio of actual downcomer velocity to the design downcomer velocity in the section

Maximum velocity / Design velocity-location

Maximum value for the ratio of actual downcomer velocity to the design downcomer velocity in the section

Maximum velocity / Design velocity-backup

Downcomer backup at the maximum value for the ratio of actual downcomer velocity to the design downcomer velocity in the section

RadFrac Tray Rating Results Profiles Sheet
See Also

Tray Rating Results Form Help

Use this sheet to view profiles of tray rating results for each panel. The following table describes the variables displayed.

Variable

Description

Stage

Stage number

Flooding factor

Fractional jet flooding approach factor

Downcomer velocity

Velocity of liquid in the downcomer

Downcomer backup

Height of liquid in the downcomer

Backup/tray space

Ratio of downcomer backup to tray spacing

Pressure drop

Stage pressure drop calculated from the tray pressure drop and the overall efficiency specified on the Specification form

Downcomer res. time

Residence time of liquid in the downcomer

RadFrac Packing Sizing Form
See Also

Working with RadFrac

Sizing and Rating for Trays and Packings:Overview

Use this form to specify packing sizing.

Note: This form is only available in Aspen Plus cases saved in version V8.8 or earlier, for which you chose not to upgrade to Column Analysis when opening the file.

This form contains the following sheets:

Use this sheet

To do this

Specifications

Specify sections, packing characteristics, height specification

Design

Specify sizing criterion, design factors

Pdrop

Specify pressure drop, pressure profile update option

Stichlmair

Specify packing parameters

Results

View results of column sizing calculations

Profiles

View stage profile of column sizing results

RadFrac determines the column section diameter from either the:

Approach to maximum capacity

Design capacity factor

You can impose maximum pressure drop (per unit height or for the section) as an additional constraint for diameter calculations. You can also request RadFrac to update the section pressure profile based on the calculated pressure drops.

From the Object Manager you can copy and paste Packing Sizing sections to duplicate them within this block or in other column models (RadFrac, MultiFrac, PetroFrac, including PetroFrac strippers), in the same or another Aspen Plus simulation. You can also copy and paste them into ASCII files you can transfer by means such as e-mail.

If section IDs of pasted sections conflict with existing ones in the column, the Reconcile Section IDs dialog box appears, allowing you to resolve the conflicts. After pasting sections, the block may become incomplete. You must make whatever changes are necessary to properly specify it.

RadFrac Packing Sizing Specifications Sheet
See Also

Packing Sizing Form Help

Packing Types and Packing Factors

Modes of Operation for Packing

Use this sheet to specify column sizing, including:

Packing section definition

Packing characteristics

Height

You define each packing section by specifying the starting and ending stage numbers. RadFrac retrieves packing characteristics from the databank based on the packing type you select. You can specify packing height as either HETP or sectional packed height.

For a table of all the combinations of packing type, vendor, material, and dimension available, see the Reference Tables in the Aspen Plus Input Language Guide, Chapter 16. Search for this document in the Knowledge Center.

Click Update Parameters to view updated parameters and select which ones to use in place of the currently specified values.

Certain packing types in the database do not have data. These are all sizes and materials of CMR packing from vendor MTL, and all sizes and materials of COIL, DIXON, GOODLOE, GRID, HELIX, I-BALL, LESCHIG, MCMAHON, MESH, and SIGMA packings from any vendor. If you select one of these packings, or if you select the USER packing type, enter the value for the Packing Factor on this sheet and the values for any parameters on the Stichlmair sheet which may be needed for the methods you specify.

For the Sulzer correlation, the parameters are internal to the model and cannot be changed.

Material STANDARD means the material the vendor considers standard. This is most commonly used with Sulzer packings, where it means METAL.

Note: In Aspen Plus 2006 and previous versions, the packing parameters were always saved with the simulation, and it is impossible to distinguish these from user-entered values.

RadFrac Packing Sizing Design Sheet
See Also

Packing Sizing Form Help

Maximum Capacity Calculations for Packing

Use this sheet to specify flooding parameters and design factors for the selected packing section. RadFrac determines the column section diameter from either the:

Fractional approach to maximum capacity. You can specify the capacity factor at flooding with this option.

Design capacity factor. You can specify the over-design factor with this option. This factor is a multiplier for column loading to reflect expected maximum or minimum loadings. If you select Update Section Pressure Profile on the Pdrop sheet, you cannot use this factor.

You can impose maximum pressure drop (per unit height or for the section) as an additional constraint for diameter calculations. Click the relevant field for more information.

You can also specify the system foaming factor. This is an adjustment factor to the maximum density-corrected vapor load at flood.

RadFrac Packing Sizing Pdrop Sheet
See Also

Packing Sizing Form Help

Pressure Drop Calculations for Packing

EO Usage Notes

Use this sheet to specify:

Pressure drop constraints in diameter calculations

Pressure drop calculation options

The column pressure profile can be fixed at initial values or updated during sizing calculations.

Note: Pressure Profile Update cannot be used in Packing Sizing or Packing Rating sections while also using efficiency specifications. Efficiency specifications on stages in such sections will be ignored with a warning.

RadFrac Packing Sizing Stichlmair Sheet
See Also

Packing Sizing Form Help

Liquid Holdup Calculations for Packing

Pressure Drop Calculations for Packing

Use this sheet to specify the column packing parameters needed to calculate pressure drop and liquid holdup using the Stichlmair method. The databank contains defaults for these parameters. Use this sheet to override the databank values.

RadFrac Packing Sizing Results Sheet
See Also

Packing Sizing Form Help

Use this sheet to view key results of column packing sizing calculations. The following table describes the results displayed.

Variable

Description

Section start stage

Starting stage of packed section of the column

Section ending stage

Ending stage of packed section of the column

Column diameter

Maximum column diameter

Maximum fractional capacity

See Maximum Capacity Calculations for Packing

Maximum capacity factor

See Maximum Capacity Calculations for Packing

Section pressure drop

Section pressure drop calculated from the pressure drop per unit height of packing, the number of theoretical stages in the section, and the HETP or packed height specified on the Specifications sheet

Average pressure drop / Height

Pressure drop calculated from the section pressure drop and packed height

Maximum stage liquid holdup

Maximum liquid holdup calculated for the section using the Stichlmair model

Max liquid superficial velocity

Largest liquid superficial velocity on any stage, calculated from liquid volumetric flow divided by column cross-sectional area

Surface area

Specific surface area of packing specified or retrieved from the databank (not available for Sulzer model)

Void fraction

Voidage of the packed bed specified or retrieved from the databank (not available for Sulzer model)

RadFrac Packing Sizing Profiles Sheet
See Also

Packing Sizing Form Help

Use this sheet to view profiles of packing sizing results. The following table describes the variables displayed.

Variable

Description

Stage

Stage number

Packed height

Packed height measured from the top of the section

Fractional capacity

SeeMaximum Capacity Calculations for Packing

HETP

Height equivalent of a theoretical plate, either specified on the Specifications sheet or calculated from the packed height specification

Pressure drop

Stage pressure drop per unit height of packing

Pres-drop / Height

Pressure drop per unit height of packing

Liquid holdup

Stage liquid holdup is calculated using the Stichlmair model. The calculations require three model parameters, surface area, and void fraction for the specified packing. If any of these parameters are missing, RadFrac will not calculate liquid holdup. The required parameters are available for many of the built-in packings in the packing databank. You can use the Stichlmair sheet to override the databank values or supply missing values.

Liquid velocity

Liquid superficial velocity, calculated from liquid volumetric flow divided by column cross-sectional area

RadFrac Packing Rating
See Also

Working with RadFrac

Sizing and Rating for Trays and Packings: Overview

Getting Started with Aspen Rate-Based Distillation

Use Packing Rating to simulate the performance of packing with a specified geometry.

Note: This form is only available in Aspen Plus cases saved in version V8.8 or earlier, for which you chose not to upgrade to Column Analysis when opening the file.

Use this form

To do this

Setup

Specify the geometry of the packing

Rate-Based

Specify additional options for rate-based distillation, including mass transfer coefficient correlations

Results

View results of packing rating calculations

From the Object Manager you can copy and paste Packing Rating sections to duplicate them within this block or in other column models (RadFrac, MultiFrac, PetroFrac, including PetroFrac strippers), in the same or another Aspen Plus simulation. You can also copy and paste them into ASCII files you can transfer by means such as e-mail.

Pasted Packing Rating sections from RadFrac contain entries related to Aspen Rate-Based Distillation. When these sections are pasted into other column models these entries are ignored.

If section IDs of pasted sections conflict with existing ones in the column, the Reconcile Section IDs dialog box appears, allowing you to resolve the conflicts. After pasting sections, the block may become incomplete. You must make whatever changes are necessary to properly specify it.

RadFrac Packing Rating Setup Form
See Also

Working with RadFrac

Packing Types and Packing Factors

Modes of Operation for Packing

Maximum Capacity Calculations for Packing

Pressure Drop Calculations for Packing

Liquid Holdup Calculations for Packing

Getting Started with Aspen Rate-Based Distillation

Use this form to specify geometry for packing rating calculations. You must specify column section diameter. RadFrac calculates:

Approach to maximum capacity

Pressure drop

You can request that RadFrac not update the pressure calculations for the section.

Use this sheet

To do this

Specifications

Specify section definition, packing characteristics, height

Design / Pdrop

Specify flooding, design factors, pressure drop, and calculation options

Stichlmair

Specify packing parameters

RadFrac Packing Rating Setup Specifications Sheet
See Also

Packing Rating Setup Form Help

Packing Types and Packing Factors

Modes of Operation for Packing

Use this sheet to enter column rating specifications, including:

Packing section definition

Packing characteristics

Height

You define each packing section by specifying the starting and ending stage numbers. RadFrac retrieves packing characteristics from the databank based on the packing type you select. You can specify the packing height as either packed height per stage or packed height for the entire section. In equilibrium mode, packed height per stage is equivalent to HETP.

When you specify a packing by type, vendor, material, and dimension, when possible the Packing size and Packing factor fields are filled in with data from a database of packing parameters. You can override these values by entering your own data.

For a table of all the combinations of packing type, vendor, material, and dimension available, see the Reference Tables in the Aspen Plus Input Language Guide, Chapter 16. Search for this document in the Knowledge Center.

Click Update Parameters to view updated parameters and select which ones to use in place of the currently specified values.

Certain packing types in the database do not have data. These are all sizes and materials of CMR packing from vendor MTL, and all sizes and materials of COIL, DIXON, GOODLOE, GRID, HELIX, I-BALL, LESCHIG, MCMAHON, MESH, and SIGMA packings from any vendor. If you select one of these packings, or if you select the USER packing type, enter the value for the Packing Factor on this sheet and the values for any parameters on the Stichlmair sheet which may be needed for the methods you specify.

For the Sulzer correlation, the parameters are internal to the model and cannot be changed.

Material STANDARD means the material the vendor considers standard. This is most commonly used with Sulzer packings, where it means METAL.

Note: In Aspen Plus 2006 and previous versions, the packing parameters were always saved with the simulation, and it is impossible to distinguish these from user-entered values.

RadFrac Packing Rating Setup Design / Pdrop Sheet
See Also

Packing Rating Setup Form Help

Pressure Drop Calculations for Packing

EO Usage Notes

Use this sheet to specify:

Design parameters

Pressure drop calculation options

The default pressure drop calculation method depends on the vendor for the specified packing. See Pressure Drop Calculations for Packing for details.

RadFrac can use different methods to update the pressure drop. RadFrac can update the pressure profile during rating calculations.

Note: Pressure Profile Update cannot be used in Packing Sizing or Packing Rating sections while also using efficiency specifications. Efficiency specifications on stages in such sections will be ignored with a warning.

The design parameters include:

The capacity factor at flooding. You can use this to override the internally calculated value.
The system foaming factor. This is an adjustment factor to the maximum density-corrected vapor load at flood.
The over-design factor. This factor is a multiplier for column loadings to reflect expected maximum or minimum loadings. If RadFrac updates the pressure during rating calculations, you cannot use Over-Design Factor.

RadFrac Packing Rating Setup Stichlmair Sheet
See Also

Packing Rating Setup Form Help

Pressure Drop Calculations for Packing

Liquid Holdup Calculations for Packing

Stichlmair et al. (1989) Rate-Based Liquid Holdup Correlation

Use this sheet to specify the column packing parameters needed to calculate pressure drop and liquid holdup using the Stichlmair method. The databank contains defaults for these parameters. Use this sheet to override the databank values or supply missing values.

When you specify a packing by type, vendor, material, and dimension on the Packing Rating | Setup | Specifications sheet, when possible the fields on this sheet are filled in with data from a database of packing parameters. You can override these values by entering your own data.

The bed geometry/topology and Stichlmair, Bravo, Fair parameters are used to calculate:

Pressure drop when you specify the Stichlmair method on the Packing Rating | Setup | Design / Pdrop sheet

Liquid holdup (in equilibrium mode) whenever a vendor procedure cannot be used

Liquid holdup (in rate-based mode) when the Stichlmair et al. (1989) correlation is selected on the Packing Rating | Rate-Based | Holdups sheet.

RadFrac Packing Rating Rate-based Form
See Also

Working with RadFrac

Sizing and Rating for Trays and Packings: Overview

Rate-Based Distillation

Getting Started with Rate-based Distillation

Use this form to specify additional options for packing rating used in the rate-based calculations of RadFrac.

Use this sheet

To specify

Rate Based

Whether to perform rate-based calculations for this section, flow model, interfacial area scaling factor, critical surface tension, and film parameters

Correlations

Methods for calculating mass transfer coefficient, heat transfer coefficient, and interfacial area, and parameters for the Billet and Schultes mass transfer correlation

Holdups

Liquid and vapor holdup for kinetic reactions, holdup scaling factors, and method of calculating holdup

Design

Parameters for calculating column diameter

Optional

Additional discretization points in the film

Bravo-Rocha-Fair

Additional parameters used with the Bravo-Rocha-Fair correlations

RadFrac Packing Rating Rate-based Rate Based Sheet
See Also

RadFrac Packing Rating Rate-based Form

Rate-Based Distillation

Flow Models

Getting Started with Rate-based Distillation

Use this sheet to specify whether to perform rate-based calculations for this section, the flow model, interfacial area scaling factor, and film parameters.

Field

Description

Rate-based calculations

Select this checkbox to enable rate-based calculations in this section. You must also select Rate Based for the Calculation Type on the RadFrac Setup Configuration sheet.

Flow Model

Determines how the bulk properties are calculated, relative to the inlet and outlet properties for each phase on each stage. See Flow Models for details on the options available.

Interfacial area factor

Scaling factor for interfacial area. The interfacial area predicted by the correlation and reported on the Interface Profiles | Interfacial Area sheet is multiplied by this factor.

Liquid mass transfer coefficient factor

Scaling factor for liquid mass transfer. The liquid-phase mass-transfer coefficient predicted by the correlation is multiplied by this factor. This affects the overall liquid binary mass transfer coefficients reported on the Transfer Coefficients | Mass Transfer sheet.

Vapor mass transfer coefficient factor

Scaling factor for vapor mass transfer. The vapor-phase mass-transfer coefficient predicted by the correlation is multiplied by this factor. This affects the overall vapor binary mass transfer coefficients reported on the Transfer Coefficients | Mass Transfer sheet.

Film resistance

Specifies how Aspen Rate-Based Distillation calculates the film resistance for each phase. The computational effort increases dramatically with each step you move down this list of options:

Nofilm: No film resistance in this phase. This is equivalent to doing an equilibrium calculation in this phase.

Film: Diffusion resistance but no reactions in film in this phase.

Filmrxn: Diffusion resistance with reactions in film in this phase. Use Filmrxn or Discrxn whenever there are reactions involving components present in both liquid and vapor.

Discrxn: Diffusion resistance with reactions in film in this phase, and film is discretized. Use Discrxn when film reactions cause dramatic changes in composition within the film. See Film Reactions for details.

In phases and stages without reactions, Filmrxn and Discrxn are treated the same as Film. In particular, this means that no discretization results will appear for phases or stages without reactions.

When you specify Discrxn for either phase, you must also specify the number of additional discretization points for that phase on the Optional sheet. The points are chosen by a built-in algorithm if you do not specify their locations.

Film non-ideality correction

Whether to apply the film non-ideality correction in each phase.

When this correction is applied, the matrix of thermodynamic factors with elements defined in equation 2.2.5 in Taylor and Krishna (1993) is evaluated and used in mass transfer equations. This yields more accurate results but is more computationally intensive.

When the correction is not applied, the identity matrix is used in place of the matrix of thermodynamic factors and there is no correction for non-ideality for the mass flux equations.

Reference

Ross Taylor and R. Krishna, Multicomponent Mass Transfer, 1993.
 

 RadFrac Packing Rating Rate-based Correlations Sheet
See Also

RadFrac Packing Rating Rate-based Form

Rate-Based Distillation

Built-in Correlations

Use this sheet to specify methods for calculating mass transfer coefficient, heat transfer coefficient, and interfacial area. Also specify the critical surface tension and the CL and CV parameters in the Billet and Schultes mass transfer correlation, if needed in your chosen correlations.

When you specify a packing by type, vendor, material, and dimension on the Pack Rating | Setup | Specifications sheet, when possible the Billet and Schultes CL and CV fields on this sheet are filled in with data from a database of packing parameters. All vendors have asked that this data remain confidential, so Confidential is displayed instead of the value. You can override these values by entering your own data.

The default mass transfer and interfacial area correlations depends on the type of packing used. Some correlations apply only to some packing types. The mass transfer and interfacial area correlations are related. Choose the same correlation for both.

Note: When one of the mass transfer correlations which also computes interfacial area is selected for mass transfer coefficient, that method is used for computing the interfacial area used in calculating mass transfer, because in these correlations, the mass transfer and interfacial area have been designed to work together and do so significantly better than mixing and matching the correlations. A different interfacial area correlation can be selected which will be used for calculating the interfacial area used in reaction calculations, if applicable.

Packing Type

Default Correlation

Others Available

Random

Onda (1968)

Bravo and Fair (1982)

Billet (1993)

Generalized

User

Structured

Bravo et al. (1985)

Bravo et al. (1992)

Billet (1993)

Generalized

User

Aspen Rate-Based Distillation uses a rigorous multicomponent mass transfer theory (Krishna and Standart, 1976) with the binary mass transfer coefficients to evaluate multicomponent mass transfer coefficients and component mass transfer rates between vapor and liquid phases.

When you choose the generalized correlation, also choose a correlation ID specifying a particular generalized correaltion and specify the parameters for that correlation on the Generalized Transfer Correlations form.

References

Krishna, R. and G.L. Standart, "A Multicomponent Film Model Incorporating an Exact Matrix Method of Solution to the Maxwell-Stefan Equations," AIChE J., 22, (1976) pp. 383-389.

RadFrac Packing Rating Rate-based Holdups Sheet
See Also

RadFrac Packing Rating Rate-based Form

Rate-Based Distillation

Differences in Specifications Between Rate-Based and Equilibrium Modes

Use this sheet to specify liquid and vapor holdup for kinetic reactions, holdup scaling factors, and method of calculating holdup. If you choose the Percent-Data method of calculating holdup, also specify the % of free volume for each phase with kinetic reactions.

The specified holdup value or correlation on this sheet is used for this section when it is solved in rate-based mode, in either case scaled by the Holdup Scale Factor specified here. For equilibrium-based calculations, and for equilibrium-based initialization of rate-based calculations, the holdups on the RadFrac |Reactions | Holdups sheet are used; these are not scaled by this factor. RadFrac also calculates a hydraulic holdup for rating the packing. This hydraulic holdup, shown on the RadFrac | Packing Rating | Results | Profiles sheet, is also not scaled.

The default holdup correlation for packing is Stichlmair (1989), unless the packing vendor is Raschig. The Billet (1993), Percent-data, and User methods are also available for all packing types. The Bravo et al. (1992) correlation is available for structured packing only. When specifying Raschig packings, leave the holdup correlation unspecified to use the default vendor correlation, or specify a user correlation.

The holdup basis specified on the RadFrac |Reactions | Holdups sheet determines the units of the pre-exponential factor (on the Reactions | Reactive Distillation | Kinetic sheet) of reactions in this column, even during rate-based calculations. A holdup specified here in a different basis is converted to the basis specified on the RadFrac |Reactions | Holdups sheet at each step of the integration based on the density and/or average molecular weight of the fluid at that time.

Important: Incorrect specification of the holdup basis will lead to incorrect interpretation of the pre-exponential factor units and thus incorrect results. See Holdup for Rate-Controlled Reactions for more information.

If you choose the Stichlmair et al. (1989) method, you can specify its parameters on the Packing Rating | Setup | Stichlmair sheet. If you choose the Bravo et al. (1992) method, you must specify parameters on the Packing Rating | Rate-based | Bravo-Rocha-Fair sheet when the parameters are not available in the packing databank for the selected packing. For more information on the holdup correlations, see Rate-Based Holdup Correlations.

RadFrac Packing Rating Rate-based Design Sheet
See Also

RadFrac Packing Rating Rate-based Form

Rate-Based Distillation

Use this sheet to specify a base stage and base approach to flooding. These values are used to perform a simple design calculation to estimate the column diameter, based on the approach to flooding on the indicated stage. This option should be used with care; the stage where flooding is most critical must be chosen, and there are additional restrictions; see Specifying the Rate-based Design Calculation.

RadFrac Analysis Form
See Also

Working with RadFrac

Column Targeting: Overview

Use this form to specify options for the column targeting feature.

Use this sheet

To specify

Analysis Options

Column targeting properties to be included in the profile

Targeting Options

Method for selecting light and heavy key components for column targeting calculations

Targeting Specifications

Parameters for the method selected in the Targeting Options sheet

RadFrac Analysis Analysis Options Sheet
See Also

Analysis Form Help

Column Targeting: Overview

Use this sheet to select column targeting properties to be included in column profiles.

RadFrac Analysis Targeting Options Sheet
See Also

Analysis Form Help

Column Targeting: Overview

Use this sheet to choose a method for selecting light and heavy key components for column targeting calculations. The following table describes the options available.

Option

Description

User defined

Allows you to specify the light and heavy key components.

Based on component split-fractions

Selects the light and heavy key components on the basis of component split-fractions in column product streams. This method is best suited for sharp or near-sharp splits.

Based on component K-values

Selects the light and heavy key components on the basis of component K-values. This method is best suited for sloppy splits.

Based on column composition profiles

Selects the light and heavy key components on the basis of composition profiles. In principle, this method is similar to the K-value based method. It is best suited for sloppy splits and it is, in general, inferior to the K-value based method.

RadFrac Analysis Targeting Specifications Sheet
See Also

Analysis Form Help

Column Targeting: Overview

Use this sheet to specify the parameters for the key component selection method chosen in the Analysis | Targeting Options sheet.

When the user-defined method is selected, you can specify the light and heavy key components for different column sections on this sheet.

When the split-fractions-based method is selected, you can use this sheet to specify the tolerances on component mole-fractions and K-values, the minimum value for component split-fractions, and the components to be excluded from key selection.

When the K-value-based method is chosen, you can use this sheet to specify the tolerances on component mole-fractions and K-values and the components to be excluded from key selection.

When the composition-profile-based method is selected, you can use this sheet to specify the tolerance on component mole-fractions, the stage span for examining the composition profiles, and the components to be excluded from key selection.

RadFrac NQ Curves
See Also

Working with RadFrac

About NQ Curves

Use NQ Curves to optimize the number of trays and feed locations in a RadFrac column using rigorous column simulation. NQ Curves plot heat load vs. number of stages with one chosen feed at its optimum location. These curves can be extended to plot other variables related to heat load such as reflux ratio. NQ curves analysis performs an intelligent search, varying the number of stages in a column, optimizing the location of one feed stream at each step, and adjusting the locations of other feed and side-draw streams according to rules you specify. In order to find the optimum location of the feed, the column needs to be constrained by purity or recovery specifications instead of flow related specifications. These specifications related to both top and bottom products as well as pumparounds.

In the usual configuration, the heat load continues to decrease as the number of stages increases, but after a point, the improvement becomes negligible. NQ Curves stops calculating at this point and uses this as the final number of stages, or continues to the maximum number of stages you specify.

Note: To enable NQ Curves, you must create one RadFrac purity, recovery, or stage temperature Design Specification for each product stream (except decanters) and each pumparound, and you must use equilibrium calculations.

Note: With a partial condenser, both product streams from the condenser are counted in computing the number of design specifications required, but the additional design specification can be any specification; the distillate vapor fraction does not need to be varied.

Use this form

To do this

NQ Curves Setup

Specify the NQ Curves analysis

NQ Curves Results

Review results of NQ Curves analysis and generate plots

RadFrac NQ Curves Setup Specifications Sheet
See Also

NQ Curves Setup Form Help

About NQ Curves

Use this sheet to make general specifications about NQ Curves. These specifications are:

Limits on the total number of stages to use in the NQ Curves analysis

Step size: The increment in number of stages between NQ Curves runs

Which feed stream to optimize for feed location, and how many stages this stream must remain away from the top and bottom of the column

Minimum reflux ratio

Type of objective function: Condenser duty only, reboiler duty only, condenser and reboiler duty, or reflux ratio on specified basis. and relative weighting of condenser and reboiler duty. When both duties are used (Qreb-Qcond), specify the cost ratio of the two duties for the objective function, which is:



Note: To enable NQ Curves, you must create one RadFrac purity, recovery, or stage temperature Design Specification for each product stream (except decanters) and each pumparound, and you must use equilibrium calculations.

RadFrac NQ Curves Setup Feed / Product Sheet
See Also

NQ Curves Setup Form Help

About NQ Curves

Use this sheet to specify conventions for handling feed and product streams other than the optimized feed and any products from the top and bottom of the column. There are five possible conventions:

Relative to feed: Adjust the stage number to maintain its proportional position in the section of the column between the optimized feed and the top or bottom of the column.

Relative: Adjust the stage number to maintain its proportional position in the entire column.

From top: Preserve the absolute number of stages from the top of the column.

From bottom: Preserve the absolute number of stages from the bottom of the column.

From feed: Preserve the absolute number of stages above or below the optimized feed stream.

Note: To enable NQ Curves, you must create one RadFrac purity, recovery, or stage temperature Design Specification for each product stream (except decanters) and each pumparound, and you must use equilibrium calculations.

RadFrac NQ Curves Setup PA / Decanter Sheet
See Also

NQ Curves Setup Form Help

About NQ Curves

Use this sheet to specify conventions for handling the locations of pumparounds and decanters during the NQ Curves analysis.

Relative to feed: Adjust the stage number to maintain its proportional position in the section of the column between the optimized feed and the top or bottom of the column.

Relative: Adjust the stage number to maintain its proportional position in the entire column.

From top: Preserve the absolute number of stages from the top of the column.

From bottom: Preserve the absolute number of stages from the bottom of the column.

From feed: Preserve the absolute number of stages above or below the optimized feed stream.

Note: To enable NQ Curves, you must create one RadFrac purity, recovery, or stage temperature Design Specification for each product stream (except decanters) and each pumparound, and you must use equilibrium calculations.

RadFrac Estimates Form
See Also

Working with RadFrac

This form contains the following sheets:

Use this sheet

To specify initial estimates for

Temperature

Stage temperatures

Flows

Stage vapor and liquid flows

Liquid Composition

Stage liquid compositions

Vapor Composition

Stage vapor compositions

Click Generate Estimates on any of these sheets to use the Generate Estimates From Available Results dialog box to generate estimates for stages for:

Temperature

Liquid and vapor mole flows

Liquid and vapor component mole fractions

RadFrac Estimates Temperature Sheet
See Also

Estimates Form Help

Entering Profile Information and Interpolation in Column Models

Use this sheet to provide initial temperature estimates for stages in the column. If you do not enter an estimate, RadFrac generates an initial profile based on the Initialization option you selected on the Convergence form. You can provide an estimate for any number of stages.

When results are available, you can click Generate Estimates to generate these estimates from the available results.

If you enter

Then RadFrac

Only one value

Applies that value for all stages

More than one value

Generates profiles by linear interpolation between given values

RadFrac Estimates Flows Sheet
See Also

Estimates Form Help

Entering Profile Information and Interpolation in Column Models

Use this sheet to specify initial flow rate estimates for vapor and liquid column flows. Estimates are used only when Algorithm = Sum-Rates (Convergence | Basic sheet) or Absorber = Yes (Convergence | Advanced sheet). Estimates for stages not entered are interpolated or extrapolated. If you do not enter an estimate, RadFrac generates an initial profile based on the Initialization option you selected on the Convergence form. You can provide an estimate for any number of stages. If you specify estimates for the vapor/liquid ratio, do not specify estimates for the individual phases.

When results are available, you can click Generate Estimates to generate these estimates from the available results.

If you enter

Then RadFrac

Only one value

Applies that value for all stages

More than one value

RadFrac generates profiles by linear interpolation between given values

RadFrac Estimates Flows Sheet
See Also

Estimates Form Help

Entering Profile Information and Interpolation in Column Models

Use this sheet to specify initial flow rate estimates for vapor and liquid column flows. Estimates are used only when Algorithm = Sum-Rates (Convergence | Basic sheet) or Absorber = Yes (Convergence | Advanced sheet). Estimates for stages not entered are interpolated or extrapolated. If you do not enter an estimate, RadFrac generates an initial profile based on the Initialization option you selected on the Convergence form. You can provide an estimate for any number of stages. If you specify estimates for the vapor/liquid ratio, do not specify estimates for the individual phases.

When results are available, you can click Generate Estimates to generate these estimates from the available results.

If you enter

Then RadFrac

Only one value

Applies that value for all stages

More than one value

RadFrac generates profiles by linear interpolation between given values

RadFrac Estimates Vapor Composition Sheet
See Also

Estimates Form Help

Entering Profile Information and Interpolation in Column Models

Use this sheet to specify initial estimates for vapor mole fractions of components on each stage of the column. RadFrac assigns the same value to unspecified component mole fractions, yielding an overall sum of one, if both the following conditions exist:

Some component mole fractions are not specified

The sum of the specified mole fractions is less than one

If the sum of the specified component mole fractions is greater than one, then the:

Unspecified component mole fractions are set to zero

Specified component mole fractions are normalized to one

RadFrac interpolates profiles for stages that have no specifications.

If you do not enter an estimate, RadFrac generates an initial profile based on the Initialization option you selected on the Convergence form. You can provide an estimate for any number of stages.

When results are available, you can click Generate Estimates to generate these estimates from the available results.

If you enter

Then RadFrac

Only one value

Applies that value for all stages

More than one value

Generates profiles by linear interpolation between given values

RadFrac Estimates Liquid Composition Sheet
See Also

Estimates Form Help

Entering Profile Information and Interpolation in Column Models

Use this sheet to specify initial estimates of liquid mole fractions of components on each stage of the column. RadFrac assigns the same value to the unspecified component mole fractions, yielding an overall sum of one, if both the following conditions exist:

Some component mole fractions are not specified

The sum of the specified mole fractions is less than one

If the sum of the specified component mole fractions is greater than one, then:

Unspecified component mole fractions are set to zero

Specified component mole fractions are normalized to one

RadFrac interpolates profiles for stages that have no specifications.

If you do not enter an estimate, RadFrac generates an initial profile based on the Initialization option you selected on the Convergence form. You can provide an estimate for any number of stages.

When results are available, you can click Generate Estimates to generate these estimates from the available results.

If you enter

Then RadFrac

Only one value

Applies that value for all stages

More than one value

Generates profiles by linear interpolation between given values

RadFrac Generate Estimates From Available Results Dialog Box
See Also

Estimates Form

Use this dialog box to generate estimates for stages for:

Temperature

Liquid and vapor mole flows

Liquid and vapor component mole fractions

These estimates are intended to aid convergence.

Note: In rate-based problems, the estimates are used in the equilibrium-based initialization, not in the actual rate-based calculations. As a result, you should generate results only from an equilibrium-mode solution, even if you intend to use them with rate-based calculations. Estimates generated from rate-based solutions may even hinder convergence in some cases.

RadFrac will not generate values if any of these conditions exist:

The number of stages for columns change

The component set changes

User-defined pseudocomponents are present in results

If you select

Then RadFrac

Generate Estimates for Temperature

Generates estimates of temperature (Estimates will normally be rounded to a tenth of a degree.)

Generate Estimates for Liquid and Vapor Mole Flows

Generates estimates of liquid and vapor mole flows (Estimates will normally be generated to 4 significant figures.)

Generate Estimates for Liquid and Vapor Component Mole Fractions

Generates estimates of component mole fractions (Estimates will normally be generated to 5 significant figures.)

Generate Estimates Currently Specified Stages

Updates estimates that have already been specified.

Generate Estimates for All Stages for Temperatures and Flows; Feed and Product Locations for Compositions

Generates estimates for all temperatures and flows. Generate estimates for compositions at feed and product stage locations.

Generate Estimates for All Stages

Generates estimates for all available values.

Keep All Available Digits

Does not round data when generating estimates.

RadFrac Convergence Form
See Also

Working with RadFrac

Solution Strategies

Solids Handling

Algorithms

Use this form to enter convergence specifications and parameters for use in equilibrium-based mode and in the initialization for rate-based calculations. During rate-based calculations, different convergence options specified on the Rate-Based Setup form are used.

Use this sheet

To specify

Basic

Basic convergence options and methods that are commonly used

Algorithm

Parameters specific to different algorithm options

Advanced

Convergence parameters for advanced users

Diagnostics

Printout level to History file

RadFrac Convergence Basic Sheet
See Also

Convergence Form Help

Solution Strategies

Solids Handling

Algorithms

Use this sheet to specify basic convergence parameters and overall methods. These specifications are used in equilibrium-based mode and in the initialization for rate-based calculations. During rate-based calculations, different convergence options specified on the Rate-Based Setup form are used.

Algorithm

Maximum iterations for convergence. For inside-out methods, this value corresponds to the maximum number of outside loop iterations. For the Newton algorithm, this value corresponds to the maximum number of Newton iterations.

Error tolerance

For inside-out methods, this value corresponds to the tolerance for outside loop convergence, default 1.e-4. For the Newton algotrithm, convergence tolerance is given as 1.d-3 times the specified value. For Newton's method, you can overwrite this value by specifying the Tolilmin parameter on the Advanced sheet.

Initialization option

Damping level
Liquid-liquid phase split algorithm

Solids handling method:

When you select

RadFrac

Overall

Removes solids from all feeds and combines them with liquid bottoms to satisfy overall mass and energy balance. Do not include solids in flow specifications for the column.

Stage

Handles solids rigorously in stage-by-stage mass and energy balance. You should include solids in flow specifications for the column.

Salt precipitation handling method:

When you select

RadFrac

Include

Electrolyte salt precipitation is handled rigorously in stage-by-stage mass and energy balance calculations. Since salt precipitation is handled rigorously, salt precipitation does not generate a warning. This is the default.

Ignore-Check

Electrolyte salt precipitation is ignored during stage-by-stage mass and energy balance calculations. A warning is issued if the fractional approach to salt saturation in the block results exceeds Max-Salt-Sat specified on the Advanced sheet.

Ignore-Flash

Electrolyte salt precipitation is ignored during stage-by-stage mass and energy balance calculations. At the end of the run, the liquid phase is flashed rigorously, allowing salts to participate in the chemistry, and a warning is issued if any actual salt precipitation occurs.

This option requires more calculations than Ignore-Check but it is more accurate and avoid false warnings that Ignore-Check might issue when you have complex chemistry with multiple hydrates.

Ignore

Electrolyte salt precipitation is ignored during simulation calculations and results calculations. Due to rigorous stream flash calculations, the product streams may still contain salts.

Note: This method is only supported with the true component approach and should not be used for the apparent component approach.

RadFrac Convergence Algorithm Sheet
See Also

Convergence Form Help

Solution Strategies

Algorithms

Use this sheet to enter convergence parameters associated with different algorithms.

Sum-rates

ClosedJacobian method
ClosedUpdate threshold
Newton

ClosedMaximum size
ClosedStorage factor
ClosedMax. No. of active components (Use with caution)
Nonideal

ClosedGamma model
ClosedGamma model parameter at infinite dilution
ClosedGamma model parameter at molefraction=0.5
3phase

Mole fraction threshold for 2nd liquid key component

ClosedGamma model for 2nd liquid
ClosedMaximum liquid-liquid phase split iterations
ClosedMaximum initialization passes

RadFrac Results Summary Sheet
See Also

Results Form Help

Use this sheet to view the column performance summary, divided into sections focused on the condenser and reboiler. Use Basis to view flow rates and flow ratios on a mole, mass or standard liquid volume basis. The results on standard liquid volume basis appear only when at least one of the column specifications is in standard liquid volume basis or Pseudocomponents are present in the feeds. This logic can be overridden by turning on the standard volume profile switch on in Report PropertyOptions sheet.

Condenser/Top stage performance

Variable

Description

Temperature

Top stage or condenser saturation temperature.

Subcooled temperature

If you specified a subcooled condenser, the subcooled temperature of the liquid distillate stream.

Heat duty

Condenser heat duty minus heat loss from the first stage.

If you specify a subcooled condenser or reflux, the reported value includes only the duty required to bring the condenser feed to saturation.

Subcooled duty

Heat duty required to bring the liquid distillate and/or reflux from saturation to the specified subcooled condition.

Distillate rate

Distillate flow rate on mole, mass or standard liquid volume basis.

Reflux rate

Reflux flow rate on mole, mass or standard liquid volume basis. Reflux is defined as the stage 1 liquid, excluding any distillate product.

Reflux ratio

Reflux ratio on mole, mass or standard liquid volume basis. Reflux is defined as the stage 1 liquid, excluding any distillate product. The ratio is reflux rate divided by distillate rate.

Free water distillate rate

Free water distillate flow rate on mole, mass or standard liquid volume basis

Free water reflux ratio

Free water reflux ratio on mole, mass or standard liquid volume basis

Distillate to feed ratio	The ratio of the distillate flow rate to the feed flow rate on mole, mass or standard liquid volume basis
Reboiler / Bottom stage performance

Variable

Description

Temperature

Reboiler/bottom stage temperature. If a kettle reboiler is present, the reported value corresponds to the reboiler temperature.

Heat duty

Reboiler heat duty minus heat loss from the last stage.

 

Bottoms rate

Bottoms flow rate on mole, mass or standard liquid volume basis.

Boilup Rate

Boilup flow rate on mole, mass or standard liquid volume basis. Boilup is defined as the bottoms stage vapor flow, excluding any vapor product.

Boilup Ratio

Boilup flow ratio on mole, mass or standard liquid volume basis. Boilup is defined as the bottoms stage vapor flow, excluding any vapor product. The ratio is boilup rate divided by bottoms rate.

Bottoms to feed ratio	The ratio of the bottoms flow rate to the feed flow rate on mole, mass or standard liquid volume basis

RadFrac Results Reboiler Sheet
See Also

Results Form Help

Use this sheet to view key results of thermosiphon reboiler specifications.

RadFrac Results Split Fraction Sheet
See Also

Results Form Help

Use this sheet to view results of component split in the column.

RadFrac Results Utilities Sheet
See Also

Results Form Help

Use this sheet to view the heating or cooling duty for RadFrac provided by utilities to the condenser, reboiler, pumparounds, and decanters. For each utility, the location where that utility is used is listed, along with the amount of utility used, the cost, the duty provided, and CO2 equivalents emitted by the utility.

Note: If there is a decanter on stage 1, the condenser utility also provides the duty required by the decanter.

RadFrac Results Stage Utilities Sheet
See Also

Results Form Help

Use this sheet to view the heating or cooling duty for RadFrac provided by utilities on stages. For each utility, the stages where that utility is used are listed, along with the amount of utility used at each location, the cost, the duty provided, and CO2 equivalents emitted by the utility.

Working with Sep2
See Also

Flowsheet Connectivity

Specifying Sep2

EO Usage Notes

Sep2 separates inlet stream components into two outlet streams. Sep2 is similar to Sep, but offers a wider variety of specifications. Sep2 allows purity (mole-fraction) specifications for components.

You can use Sep2 in place of a rigorous separation model, such as distillation or absorption. Sep2 saves computation time when details of the separation are unknown or unimportant.

If the composition and conditions of all outlet streams of the block you are modeling are identical, you can use FSplit instead of Sep2.

Use the following forms to enter specifications and view results for Sep2:

Use this form

To do this

Input

Enter split specifications, flash specifications, and convergence parameters for the mixed inlet and each outlet stream

Block Options

Override global values for physical properties, simulation options, diagnostic message levels, and report options for this block

EO Modeling

EO Variables

Specify equation-oriented variable attribute changes for the current run only, or view all equation-oriented variable attributes for the block

EO Input

Specify equation-oriented variables

Spec Groups

Specify equation-oriented specification groups

Ports

Specify equation-oriented variables collected to form ports

Results

View Sep2 simulation results

Stream Results

View stream results

Summary

View and edit all scalar variables for this block.

Sep2 Input Specifications Sheet
See Also

Input Form Help

Specifying Sep2

EO Usage Notes

Use this sheet to specify split fractions, flow rates, mole fractions, or mass fractions for components in outlet streams. The number of specifications for each substream must equal the number of components in each substream.

Sep2 treats each substream separately. For any substream you cannot:

Specify the total flow of both outlet streams

Enter more than one flow or frac specification for each component

Enter both a mole-frac and a mass-frac specification for a component in a stream

Enter as many mole-frac and mass-frac specifications on one stream as the number of components
Enter, in one stream, mole-frac or mass-frac specifications summing to more than one.
Use the Feed Flash Sheet to specify optional inlet conditions. If you do not specify the pressure, it defaults to the minimum pressure of the inlet streams.

For nonisothermal separations, supply flash specifications for each outlet stream on the Outlet Flash Sheet.

Sep2 Input Feed Flash Sheet
See Also

Input Form Help

Inlet Pressure

Use this sheet to specify inlet flash conditions. If you do not specify the pressure, it will default to the minimum pressure of the inlet streams.

If an outlet stream pressure is different from the block pressure or if you want to specify an outlet stream temperature, use the Outlet Flash Sheet.

Sep2 Input Outlet Flash Sheet
See Also

Input Form Help

Outlet Stream Conditions

Use this sheet to specify the conditions of the outlet streams. The default is a temperature-pressure flash using inlet pressure and temperature (or the result of the feed flash if there is more than one inlet stream).

Sep2 Input Utility Sheet
See Also

Input Form Help

Utilities

Use this sheet to specify a utility to provide the heating or cooling required by Sep2.

Working with Flash2
See Also

Flowsheet Connectivity for Flash2

Specifying Flash2

EO Usage Notes

Use Flash2 to model flashes, evaporators, knock-out drums, and other single-stage separators. Flash2 performs vapor-liquid or vapor-liquid-liquid equilibrium calculations. When you specify the outlet conditions, Flash2 determines the thermal and phase conditions of a mixture of one or more inlet streams.

Use the following forms to enter specifications and view results for Flash2.

Use this form

To do this

Input

Enter flash specifications, flash convergence parameters, and entrainment specifications

Hcurves

Specify heating or cooling curve tables and view tabular results

Dynamic

Specify parameters for dynamic simulations

Block Options

Override global values for physical properties, simulation options, diagnostic message levels, and report options for this block

EO Modeling

EO Variables

Specify equation-oriented variable attribute changes for the current run only, or view all equation-oriented variable attributes for the block

EO Input

Specify equation-oriented variables

Spec Groups

Specify equation-oriented specification groups

Ports

Specify equation-oriented variables collected to form ports

Results

View Flash2 simulation results

Stream Results

View stream results

Summary

View and edit all scalar variables for this block.

 Flash2 Input Form
See Also

Working with Flash2

Use the sheets on this form to enter operating conditions.

Use this sheet

To specify

Specifications

Flash2 conditions and valid phases

Flash Options

Temperature and pressure estimates and flash convergence

Entrainment

Liquid and solid entrainment in the vapor stream

PSD

Outlet particle size distribution

Utility

A utility stream to provide the heating or cooling for this block.

Comments

View or specify the description and comments for an object

Flash2 Input Specifications Sheet
See Also

Input Form Help

Specifying Flash2

Free Water and Dirty Water Calculations

Use this sheet to specify:

Flash conditions

Valid phases

You must specify two of the following conditions for the flash calculation:

Temperature

Pressure (as either outlet pressure or pressure drop)

Duty

Vapor fraction

You may specify any combination of these except duty and vapor fraction. Use the Flash Type fields to select which properties to specify, and the fields below them to enter the values.

Flash2 Input Flash Options Sheet
See Also

Input Form Help

Use this sheet to provide the following specifications for flash calculations:

Temperature and/or pressure estimates

Maximum number of iterations

Error tolerance

Flash2 Input Entrainment Sheet
See Also

Input Form Help

Use this sheet to specify liquid and solid entrainment in the vapor stream. You can specify a single liquid entrainment fraction which applies to all substreams. For each defined substream you can specify a separate solid entrainment fraction.

Entrainment is defined as the fraction E/(F+E) where E represents the entrained flow of the phase (liquid or a solid substream) in the vapor stream and F represents the flow of that phase in the liquid/solid stream.

Flash2 Input PSD Sheet
See Also

Input Form Help

Distribution Functions

Use this sheet to specify the outlet particle size distribution (PSD) when solids are created or changed by chemistry.

You can choose one of these options:

Keep PSD. The particle size distribution of each outlet substream which has participated in reactions is set equal to the PSD of the corresponding inlets. The number of particles will generally change with this option. This is the default.

Calculate PSD from particle growth model. The total number of particles in each substream is kept constant. The particles shrink or grow depending on the mass loss or gain or density change of a substream due to reactions or temperature change. There are several options for how the growth or shrinkage is allocated to particles of different sizes; see Particle Growth Models for details.

Note: For Flash2 only, the constant number of particles feature is limited. It can only be used when all solids end up in the same outlet stream. If solids entrainment is not 0 or 1, using this option will result in an error.

User specified (Overall). Specify a PSD using a distribution function or fractions for each PSD interval. The specified PSD is applied to all substreams, even inert ones.

User specified (Substream ID). Specify a PSD for each substream, using a distribution function or fractions for each PSD interval. To keep the PSD unchanged for a substream, specify a bypass fraction of 1 for that substream.

Flash2 Input Utility Sheet
See Also

Input Form Help

Utilities

Use this sheet to specify a utility to provide the heating or cooling required by Flash2.

Flash2 Results Form
See Also

Working with Flash2

Use the sheets on this form to view results for the block

Use this sheet

To view

Summary

Overall block operating results

Balance

Mass and energy balance around the block

Phase Equilibrium

Equilibrium feed, liquid/vapor mole fractions and K-values values

Utility Usage

Utility usage for this block.

Status

View the convergence status and warning or error messages generated by an object

Flash2 Results Summary Sheet
See Also

Results Form Help

Use this sheet to view block operating results.

Field

Description

Outlet temperature

Displays calculated or specified outlet temperature for the block. This is also the temperature of the stream leaving this block.

Outlet pressure

Displays calculated or specified pressure for the block. This is also the pressure of the stream leaving this block.

Fluid phase vapor fraction (mole)

Displays the calculated or specified molar vapor fraction of the product (excluding all solids). If the vapor fraction is 0, there is a liquid product only. If the vapor fraction is 1, there is a vapor product only. If the vapor fraction is > 0 and < 1, there is a mixed vapor and liquid product.

Fluid phase vapor fraction (mass)	Displays the calculated or specified mass vapor fraction of the product (excluding all solids).
Heat duty

Displays calculated or specified heat duty for the block.

Net duty

Calculated heat duty minus duty from an inlet heat stream. When heat duty is specified for the block, net duty is reported as zero.

1st liquid / Total liquid

Displays the molar ratio of the first liquid phase to the total liquid mixture. This is only useful when three-phase flash or free water calculations are performed. This ratio indicates the relative size of both liquid phases and is only reported if liquid is present (vapor fraction < 1). If the ratio is 0 or 1, no phase split is predicted and there is only a single liquid phase.

Pressure Drop	Displays the calculated or specified pressure drop for the block. If there are multiple inlet streams at different pressures, this is the lowest pressure of an inlet stream minus the outlet pressure.

Flash2 Results Phase Equilibrium Sheet
See Also

Results Form Help

Use this sheet to view results of the composite feed and the corresponding equilibrium liquid/vapor mole fractions and K-values when two-phase or three-phase flash calculations are performed.

Field

Description

F

Displays molar composition of the feed. If there is more than one feed, this is the composite feed molar fraction.

X

Displays equilibrium liquid mole fraction of the composite feed at outlet conditions when two-phase flash calculations are performed.

X1

Displays the equilibrium liquid mole fraction of the composite feed at outlet conditions, for the 1st liquid phase when three-phase flash calculations are performed. If there is only one liquid phase the overall liquid phase composition is reported here. If there is no liquid phase, this will be the vapor composition.

X2

Displays the equilibrium liquid mole fraction of the composite feed at outlet conditions, for the 2nd liquid phase when three-phase flash calculations are performed. If there is only one liquid phase the overall liquid phase composition is reported here. If there is no liquid phase, this will be the vapor composition.

Y

Displays equilibrium vapor mole fraction of the composite feed at outlet conditions.

K

Displays the vapor-liquid equilibrium K-value (Y/X) of the composite feed at outlet conditions when two-phase flash calculations are performed.

K1

Displays the vapor-liquid equilibrium K-value (Y/X1) of the composite feed at outlet conditions when three-phase flash calculations are performed. It is based on the 1st liquid phase or total liquid if only one phase.

K2

Displays the vapor-liquid equilibrium K-value (Y/X2) of the composite feed at outlet conditions, when three-phase flash calculations are performed. It is based on the 2nd liquid phase if present.

Flash2 Results Utility Usage Sheet
See Also

Results Form Help

Use this sheet to view the heating or cooling duty for Flash2 provided by a utility, the utility ID, the utility usage, utility cost, and CO2 equivalents emitted by the utility.

Working with Compr
See Also

Flowsheet Connectivity

Specifying Compr

EO Usage Notes

Use Compr to model a compressor or turbine. For a compressor, the following types are available:

A polytropic centrifugal compressor

A polytropic positive displacement compressor

An isentropic compressor

For a turbine, only the isentropic and polytropic types are allowed.

Use Compr to change stream pressure when energy-related information, such as power requirement, is needed or known.

Compr can handle single-phase as well as two- and three-phase calculations.

You can use Compr to rate a single stage of a compressor or a single wheel of a compressor, by specifying the related performance curves. Compr allows you to specify either:

Dimensional curves, such as head versus flow or power versus flow

Dimensionless curves, such as head coefficient versus flow coefficient

Compr can also account for deviation from design condition if performance curves are used and design conditions are specified.

Compr can also calculate compressor shaft speed.

Use the following forms to enter specifications and view results for Compr:

Use this form

To do this

Setup

Identify compressor specifications, calculation options, convergence parameters, and valid phases

Performance Curves

Specify parameters and enter data for the performance curves

User Subroutine

Enter performance curve subroutine parameters and name

Dynamic

Specify parameters for dynamic simulations

Block Options

Override global values for physical properties, simulation options, diagnostic message levels, and report options for this block

EO Modeling

EO Variables

Examine or temporarily change attributes of EO variables for this block

EO Input

Configure EO variables for this block

Spec Groups

Define EO Spec Groups for this block

Ports

Add, configure, rename, or delete ports for this block

Results

View summary of Compr results, material and energy balance results, and performance curve summary

Stream Results

Display stream results

 Compr Setup Form
See Also

Working with Compr

Use the sheets on the Setup form to identify compressor specifications and calculation options.

Use this sheet

To specify

Specifications

Compressor model, type, outlet specifications, and efficiencies

Calculation Options

Desired calculation options, and GPSA method options

Power Loss

Parameters for calculating power loss

Convergence

Convergence parameters for flash and entropy calculations

Integration Parameters

Parameters when using the compressor models with piecewise integration

Utility

A utility stream to provide the heating or cooling for this block

Comments

View or specify the description and comments for an object

Compr Setup Specifications Sheet
See Also

Setup Form Help

Specifying Compr

Compressor Background

Use this sheet to choose the model type (which includes the calculation method; the Isentropic type uses the Mollier-based method).

To use the Compr block as a turbine, select compressor model Turbine. The positive displacement model is not available for turbines.

Also use this sheet to specify the discharge conditions of the Compr block or use performance curves to determine the discharge conditions. Several different types of discharge specifications are possible. A pressure ratio specification is always outlet pressure divided by inlet pressure. This should be greater than 1 for a compressor and less than 1 for a turbine. If you choose to use performance curves, use the Performance Curves form to enter the curves.

Efficiencies

For isentropic compressors and turbines, you can enter the isentropic efficiency. (Default 0.72)

For polytropic and positive displacement types, you can enter polytropic efficiency. (Default 0.72)

For all types of compressors and turbines you can enter the mechanical efficiency. (Default 1)

Compr Setup Calculation Options Sheet
See Also

Setup Form Help

EO Usage Notes

Use this sheet to specify whether to:

Use performance curve(s) to determine shaft speed

Specify discharge temperature and calculate efficiency (and if so, also enter the temperature value). This option is not available for isentropic types.

Also use this sheet to specify:

Specify calculation method for inlet heat capacity ratio

Rigorous: Use the same method as in the Property Set for Cv (default)

Approximate: Use the assumption Cv = Cp - R

Positive displacement clearance fraction value (Default = 0.5), when the Type on the Specifications sheet is a positive displacement type. As the clearance fraction increases, the volumetric efficiency of the compressor decreases.

GPSA properties method (whether Aspen Plus calculates properties for the GPSA method at suction conditions or at the average of suction and discharge conditions), only if the Type on the Specifications sheet specifies the GPSA method.

Diameter and velocity head multiplier (K-Factor) of the suction nozzle. These are used in calculating the pressure loss as the suction nozzle.

Stream dew point checking option

NONE: Do not check stream dew point.

INFORMATION: An information message is given if the stream is below dew point.

WARNING: A warning message is given if the stream is below dew point.

ERROR: An error message is given if the stream is below dew point.

Stream dew point checking tolerance (liquid fraction level which generates message)

Compr Setup Power Loss Sheet
See Also

Setup Form Help

Use this sheet to specify parameters for calculating power loss.

Compr Setup Convergence Sheet
See Also

Setup Form Help

Use this sheet to enter convergence parameters for flash and entropy balance.

For the composition flash, you can specify the phases to consider and the maximum number of iterations and the convergence tolerance. For vapor-only flashes, you can specify the VL-check, which gives an error if vapor and liquid exist, or the VLW check, which gives an error if vapor, organic liquid, and water exist.

For the entropy balance, you can specify the type of constant entropy flash performed and the maximum iterations and tolerance for this flash.

Compr Setup Integration Parameters Sheet
See Also

Setup Form Help

Integration Method

Use this sheet to specify the integration method and integration parameters when the Polytropic using piecewise integration or the Positive displacement using piecewise integration compressor type is selected on the Specifications sheet.

For either integration method, you can specify the integration steps should use equal pressure change or equal pressure ratio. For equal pressure change, you can specify the number of intervals. For equal pressure ratio, you can specify the ratio for each step and a different ratio for the last step.

Compr Setup Integration Parameters Sheet
See Also

Setup Form Help

Integration Method

Use this sheet to specify the integration method and integration parameters when the Polytropic using piecewise integration or the Positive displacement using piecewise integration compressor type is selected on the Specifications sheet.

For either integration method, you can specify the integration steps should use equal pressure change or equal pressure ratio. For equal pressure change, you can specify the number of intervals. For equal pressure ratio, you can specify the ratio for each step and a different ratio for the last step.

Compr Performance Curves Form
See Also

Working with Compr

Use this form to enter performance curves information. You must select Use performance curves to determine discharge conditions on the Setup | Specifications sheet or check Use performance curves to determine shaft speed on the Setup | Calculation Options sheet to enable the sheets on this form.

Use this sheet

To identify

Design

Off-design correction options, design conditions, and options for handling of performance curves

Performance curves

Variables and data for performance curves

Surge

Surge data for performance curves

Operating Specs

Operating parameters, curve scaling factors and Fan law exponents for performance curves

Offsets

Offset values for performance curves

Compr Performance Curves Design Sheet
See Also

Performance Curves Form Help

Corrected Flow Curves

Quasi-Dimensionless Curves

Performance Curves

Use this sheet to select off-design correction options, to specify design conditions, and to specify certain options related to the performance curves.

Off design correction options

You can select from the following options for off-design corrections:

No Adjustment

Use corrected flow for performance curves based on inlet T and P

Use dimensionless performance curves

Use Dimensionless Performance Curves is only allowed when the Performance variable on the Performance curve sheet is either Power or Pressure Ratio. Two types of quasi-dimensionless curves can be used :

Quasi-dimensionless

Quasi-dimensionless with gas constant R

If you select Use Corrected Flow for Performance Curves, you must enter the independent variable in the performance curves as  and specify the Inlet Pressure Units and Inlet Temperature Units. If you select Use Dimensionless Performance Curves, you must specify the units used in quasi-dimensionless curves. Inlet temperature must be a positive number in its units for both of these cases, so inlet temperature units cannot be set to C or F if doing so makes the inlet temperature negative or zero.

Options

Interpolation method for tabular data: When you specify tabular data, the Compr model uses spline fitting to fit the data to a cubic polynomial. The methods are the same ones available for assay analysis. The Hermite method, which enforces monotonicity between points, is the default.

Regression for tabular data: When you specify tabular data, you can choose to fit either the polynomial or extended polynomial expression to the given data instead of using the spline interpolation method.

Extrapolate beyond surge/stonewall: If you turn off this option, Compr clamps the performance variable values at surge or stonewall even if the flow rate goes beyond surge or stonewall.

Specify speed using Mach number: Only available when specifying multiple curves at different speeds on the Performance curves sheet. If you enable this option, when you specify curve speeds on the enter them as the Mach number at the rotor tip. Otherwise, shaft speed in rotational units is used.

Extrapolation method for tabular data: The Default method uses the selected spline interpolation method. You can instead choose the Endpoint method to extrapolate using the tangent to the curve at its end. This is primarily used in cases when you must extrapolate far beyond the given data and the spline methods give poor results (such as trending in the wrong direction).

Compr Performance Curves Performance curves Sheet
See Also

Performance Curves Form Help

Surge and Stonewall

EO Usage Notes

Performance Curves

Use this sheet to specify the number, type, and data for performance curves.

Choose options related to the curve format and how Compr interpolates or extrapolates on the Design sheet. Enter scalar parameters related to performance curves on the Operating Specs sheet.

Curve format

Choose one of these formats for the curve data:

Tabular data: For tables of performance vs. flow data. The end points of each curve are taken as surge and stonewall.

Polynomials: For performance given as a third-order polynomial in flow. Surge flow and optional stonewall flow can also be entered.

Extended polynomials: For performance as a function of volumetric flow rate, shaft speed, and their ratio in the format shown in the Curves data section.

User subroutine: Use a Fortran subroutine to specify performance. Use the User Subroutine form to specify the subroutine.

Performance and flow variables

Choose the variables related by the curves.

The Performance variable can be any of: Head, Head coefficient, Power, Discharge pressure, Pressure ratio, Pressure change. For Extended polynomials, only Head is allowed.

The Actual flow variable can be Volume flow rate or Mass flow rate, either at suction conditions, except when the Performance variable is Head Coefficient, in which case you can choose from Specific volumetric flow rate and Flow coefficient. For Extended polynomials, only Volume flow rate is allowed.

You may specify either Efficiency or Power curve as the optional curve. Power curve is only allowed when the performance variable is Head; in this case efficiency will be calculated.

Number of curves and Curve speeds or Mach No.

You may specify number of performance maps, and choose any of the following options for specifying curves for each stage or wheel (the same type for all stages or wheels):

A single curve at operating speed. This option is not recommended with a dynamic compressor, where any manipulations change the work applied to the compressor or turbine. Because this option does not apply any effects of changing the shaft speed to the performance curves, the result will not be realistic. In these cases, instead use a single curve at reference speed and specify the speed as reference speed instead.

A single curve at reference speed. When using a single curve at reference speed, fan laws are used to translate the data between the operating speed and reference speed. Specify the Reference shaft speed on the Operating Specs sheet.

Multiple curves at different speeds. For this option, in the Curve speeds section, specify the shaft speed for each curve, or if Specify speed using Mach number is selected on the Design sheet, in the Mach No. section enter the speed of the rotor tip as Mach number for each curve.

Curves data

Enter the data or coefficients for the curves in the format specified in the sections above. You can specify both performance curves and optional efficiency or power curve. The optional curve uses the same format and flow variable as the performance curve except the value is efficiency or power instead of the selected performance variable. You can also specify units for each curve when appropriate.

Options specified on the Design sheet can affect how this data is interpreted or used.

If you are entering multiple curves, the total number of curves entered must exactly equal the number of curves specified in the Curve speeds section.

If you are entering performance curve data in tabular format, a minimum of four data points are required for each curve.

If Performance variable is Pressure Ratio, you can define the pressure ratio in either of these ways:

Pressure Ratio = (Outlet Pressure) / (Inlet Pressure)

Pressure Ratio = (Inlet Pressure) / (Outlet Pressure)

Compr Performance Curves Surge Sheet
See Also

Performance Curves Form Help

Surge and Stonewall

Performance Curves

Use this sheet to enter surge volumetric flow rate for the performance curves.

Surge curves may only be entered if Extended Polynomial and Volume flow are selected on the Performance curves sheet and performance curve data has already been entered.

Compr Performance Curves Operating Specs Sheet
See Also

Performance Curves Form Help

Scaling Factors and Offsets

Specifying Work Streams

Fan Laws

Performance Curves

Use this sheet to specify operating parameters, curve scaling factors, and Fan law exponents for performance curves.

Gear ratio is the ratio between compressor speed and driver speed. The driver speed is determined from the inlet work stream. If speed is available in the inlet work stream and Operating shaft speed is specified, Gear ratio will be calculated.

Compr Performance Curves Offsets Sheet
See Also

Performance Curves Form Help

Scaling Factors and Offsets

Performance Curves

Use this sheet to enter offset values for head, efficiency, and surge volumetric flow rate.

Compr User Subroutine Form
See Also

Working with Compr

Use the Subroutine Specification Sheet on this form to enter user subroutine parameters.

Compr User Subroutine Specification Sheet
See Also

User Subroutine Form Help

Use this sheet to specify the user subroutine parameters, only when Curve format is User subroutine on the Performance Curve | Curve Setup sheet.

Type specifies the type of curve the subroutine will calculate, and is equivalent to Performance on the Performance Curve | Curve Setup sheet for curves entered on the Performance Curve form.

Also enter the subroutine name. You can also specify the number of integer and real parameters for the subroutine and the values for those parameters, and the length of the integer and real work arrays.

Compr Results Form
See Also

Working with Compr

Use this form to view Compr results.

Use this sheet

To view

Summary

Basic block results

Balance

Material and energy balance around the block

Parameters

Extract block results

Performance

Performance curves related results

Regression

Performance tabular data regression results

Utility Usage

Utility usage for this block

Status

View the convergence status and warning or error messages generated by an object

Compr Results Summary Sheet
See Also

Results Form Help

Use this sheet to view these basic block results:

Variable

Description

Compressor model

Compressor model used in the block

Phase calculations

Phase equilibrium type for flash calculation

Indicated horsepower

Indicated horsepower (IHP) is the total enthalpy change in the stream, defined as:

IHP = Fdh

Where:

F

=

Molar flow rate

dh

=

Enthalpy change per mole

Brake horsepower

The brake horsepower (BHP) requirement or total work is indicated horsepower (IHP) corrected for mechanical efficiency (Meff).



Net work required

Difference between the sum of inlet work streams and brake horsepower required by the compressor; if there is no user-specified work stream, the net work is the brake horsepower

Efficiency

For Polytropic and Positive Displacement compressors: polytropic efficiency
For Isentropic compressors: isentropic efficiency

Outlet pressure

Specified or calculated pressure at the compressor outlet

Outlet temperature

Specified or calculated temperature at the compressor outlet

Isentropic outlet temperature

Temperature for which the compressor outlet stream (at discharge pressure) has the same entropy as the inlet stream, at suction pressure and temperature

Vapor fraction

Molar vapor fraction of the compressor outlet stream

Displacement

Displacement (Dis) required for positive displacement compressors is calculated as:



Where:

V1

=

Inlet molar volume

F

=

Molar flow rate

Veff

=

Volumetric efficiency

Volumetric Efficiency

The volumetric efficiency (Veff) is computed as:



Where:

Cf

=

Clearance fraction

Pi, Po

=

Inlet and outlet pressures

Vi, Vo

=

Inlet and outlet molar volumes

Compr Results Parameters Sheet
See Also

Results Form Help

Use this sheet to view extra results of a Compr block.

Field

Description

Head developed

Head developed.

Isentropic power requirement

Isentropic brake horsepower requirement, for which the compressor outlet stream (at discharge pressure) has the same entropy as the inlet stream, at suction pressure and temperature

Inlet heat capacity ratio

Inlet heat capacity ratio (Cp/Cv)

This is always based on a rigorously computed Cp. Cv is rigorously computed by default, but may be approximated by Cv = Cp - R if this option is specified on the Setup | Calculation Options sheet.

Inlet volumetric flow rate

Inlet volumetric flow rate

Outlet volumetric flow rate

Outlet volumetric flow rate

Inlet compressibility ratio

Inlet compressibility ratio

Outlet compressibility ratio

Outlet compressibility ratio

Average isentropic volume exponent

Calculated average isentropic volume exponent, ns, is defined as:



Average actual volume exponent

Calculated average actual volume exponent, n, is defined as:



Average isentropic temperature exponent

Calculated average isentropic temperature exponent, ms, is defined as:



Average actual temperature exponent

Calculated average actual temperature exponent, m, is defined as:



Where:

Po

=

Outlet pressure

Pi

=

Inlet pressure

Fv

=

Inlet volumetric flow rate

Fvs

=

Isentropic volumetric flow rate

Fvo

=

Outlet volumetric flow rate

Ti

=

Inlet temperature

To

=

Outlet temperature

Tos

=

Isentropic temperature

Compr Results Performance Sheet
See Also

Results Form Help

Use this sheet to view performance curves related results of a Compr block.

Field

Description

Percent above surge

Percentage above surge is defined as:
(actual suction volumetric flowrate - suction volumetric flowrate at surge) / suction volumetric flowrate at surge

Percent below stonewall

Percentage below stonewall is defined as:
(suction volumetric flowrate at stonewall - actual suction volumetric flowrate) / suction volumetric flowrate at stonewall

Surge volume flow rate

Suction volumetric flowrate at surge

Stonewall volume flow rate

Suction volumetric flowrate at stonewall

Surge head	Head at surge. For tabular head and head coefficient curves, this is the head value corresponding to the minimum flow end of the data in the table. For polynomial curves, it is exactly the value from the polynomial at surge flow, without correction for head coefficient or reference speed.
Stonewall head	Head at surge. For tabular head and head coefficient curves, this is the head value corresponding to the maximum flow end of the data in the table. For polynomial curves, it is exactly the value from the polynomial at surge flow, without correction for head coefficient or reference speed.
Shaft speed

Speed of compressor shaft

Specific speed

Specific speed of compressor shaft

Suction sonic velocity

Velocity of sound in process gas at suction conditions

Rotor tip Mach number

Rotor tip Mach number is defined as the ratio of rotor tip velocity and suction sonic velocity of process gas

Inlet Mach number

Inlet Mach number is defined as ratio of suction linear velocity of process gas and suction sonic velocity of process gas

Specific diameter

Specific diameter of the compressor impeller

Head coefficient

Head coefficient for the compressor

Flow coefficient

Flow coefficient for the compressor

Gear ratio

Driver gear ratio, the ratio between compressor speed and driver speed

Compr Results Regression Sheet
See Also

Results Form Help

Use this sheet to view the data regression results for tabular data.

Working with Calculator
See Also

Working with Flowsheeting Options

EO Usage Notes

Fortran Statement Restrictions

Disabling Syntax Checking

Retaining Variables Between Iterations and Blocks

About the Interpreter

Accessing Flowsheet Variables

Use Calculator blocks to insert your own Fortran statements or spreadsheet calculations into the flowsheet computations.

For example, you can use Calculator blocks to:

Calculate and set input variables before they are used (feed forward control). Doing this creates convergence loops.

Calculate additional results based on your simulation.

Write information to the Control Panel, the Aspen Plus report file, or any external file (Fortran only)

Read input from a file (Fortran only)

Use this form

To do this

Input

Define a Calculator block

Block Options

Override defaults for properties, diagnostics, and EO options

Results

View run status

EO Variables

Specify equation-oriented variable attribute changes for the current run only, or view all equation-oriented variable attributes for the block

EO Input

Specify equation-oriented variables

Calculator Input Form
See Also

Working with Calculator

EO Usage Notes

Search the Knowledge Center for information on:

Flowsheeting Options: Unlock Efficiency with Tips and Tricks

Use the sheets on the Calculator Input form to define a Calculator block.

Use this sheet

To do this

Define

Specify the flowsheet variables that the block samples or manipulates

Calculate

Choose Fortran, Spreadsheet, or Excel, and enter Fortran statements or edit the spreadsheet

Sequence

Specify when the Calculator block is executed

Tears

Specify tear variables to be converged

Stream Flash

Enter optional flash specifications for streams accessed by the block

Comments

View or specify the description and comments for an object

Calculator Input Define Sheet
See Also

Input Form Help

Accessing Flowsheet Variables

Troubleshooting Accessed Variables

EO Usage Notes

Use this sheet to identify the flowsheet variables to be used in the Calculator block.

In the Variable column of the Sampled variables grid, enter a name to identify each variable on other Calculator sheets. This name must be a valid Fortran variable name, with additional naming restrictions. See Using the Define Sheet to Identify Flowsheet Variables for details.

Tip: If you open two windows, you can drag and drop variables from other forms directly into the Sampled variables grid. Aspen Plus will choose a name for these variables, but you can click the name in the Variable column and type a new name to rename them. You can also copy and paste variables from other variable definition sheets. Some variables cannot be accessed by calculated and you will get a message saying they cannot be pasted if you attempt to add them in this way. See also Variables Which Cannot Be Accessed.

Select a variable's name to define it or modify its definition in the Edit selected variable section.

You can use the buttons below the grid to interact with the defined variables: Create a New variable (enter its name in the popup window), Delete the selected variable, Copy the selected variable and Paste copied variables, or move the selected variable up or down in the list. Click View Variables to see the entire table of variables in a grid; in Neural Network calculators this shows how the variables are mapped to other blocks.

If you select Neural Network on the Calculate sheet, you cannot modify the variables in the block in these ways. Only the variables defined in the neural network are available. In these Calculator blocks you can click Go To Training Environment to open the AI Training forms for the model.

Note: It is possible that dragging and dropping variables into a Neural Network Calculator may add the variables to the form, but this will not actually add them to the block. Do not attempt to do so.

ClosedEdit selected variable
When using both total flow and component flows of the same stream, define the component flow variables before the total flow variable. Use the Move Up and Move Down buttons to reorder variables.

You can sample any number of flowsheet variables.

Flowsheet variables are in the units specified in the Edit selected variable section and in the Definition column of the Sampled variables grid. When a new variable is specified, these units are selected from the global units set. Changing the global units or the units in the referenced block afterward does not affect these units, to ensure that calculations involving the variable remain valid.

You can clear the Active checkbox to temporarily remove this Calculator from the problem without permanently deleting it.

Note: Variables manipulated in a Calculator will remain at their final values at the start of the next run if you do not reinitialize the problem. If you modify the problem so that these variables are no longer manipulated, the old manipulated variables will retain their last values from the Calculator (rather than values previously specified on other forms) until otherwise changed or reinitialized.

Note: When using any restricted databases, you cannot access any physical property parameters.

Aspen Plus Command Bar
This command bar is available inside Excel spreadsheets used with Excel Calculator blocks.

Connect Cell Combo Box

Use this Combo Box to attach the current cell on the Excel spreadsheet to a Defined Variable. If the Defined Variable chosen is already connected to another cell, the link between that cell and the Defined Variable is broken.

Define Button

Click the Define Button to create a new Defined Variable or to edit an existing one. If this cell is already connected to a Defined Variable, clicking on this button will allow you to edit it. If this cell is not connected to a Defined Variable, clicking on this button will create a new Defined Variable.

Unlink Button

Click the Unlink Button to remove the link between a cell and a Defined Variable. Clicking on this button does not delete the Defined Variable.

Delete Button

Click the Delete Button to remove the link between a cell and a Defined variable and delete the Defined Variable.

Refresh Button

Click the Refresh Button to refresh the list of Defined Variables in the Connect Cell Combo Box. You should click this button if you have changed the list of Defined Variables by making changes on the Calculator Define sheet.

Changed Button

Click the Changed Button to set the "Input Changed" flag of this Calculator block. This will cause the Calculator to be re-executed the next time you run the simulation. You should click this button if, after the calculator block is executed, you make changes to the Excel spreadsheet without making any changes on the Calculator block forms.

Fortran Declarations Dialog Box
See Also

Input Form Help

Fortran Statement Restrictions

Use this dialog box to include Fortran declarations statements, such as COMMON definitions, DIMENSION declarations, EQUIVALENCE declarations, dimension statements and variable type declarations (such as INTEGER, REAL, and CHARACTER). Do not declare any variables on this sheet if you defined them on the Define sheet. The various type and dimension of variables defined on the Define sheet are determined by the object they reference.

If a Fortran variable meets one of these criteria, place it in a COMMON block:

If it is also used by another Calculator block

If its value must be retained from one iteration of a Calculator block to another

Do not declare Fortran variables on the Declarations sheet that you defined on the Define sheet.

Calculator Input Sequence Sheet
See Also

Input Form Help

Fortran Convergence Loops

EO Usage Notes

Use this sheet to specify when the Calculator block is to be executed in the sequential-modular simulation. You can select one of the following options:

If you choose this option

The block is executed

First

At the beginning of a simulation

If you specify to run the block First (or Last), this runs it before (or after) flowsheet manipulations such as Sensitivity. This means that it will only run once per complete run (not once per case) with these options. Use one of the other options if you need it to run once per case. Use Import/Export Variables is recommended.

Last

At the end of a simulation

Before

Immediately before the specified block

After

Immediately after the specified block

Report

While the report is being generated

If you specify to run the block during the Report, flowsheet variables, including Parameter and Local Parameter variables, have already reached their final values, and cannot be updated. Thus, you cannot effectively use Export variables with this option. Use this option only for writing additional results to the report file.

Based on order in sequence

As specified on the Convergence Sequence form Specifications sheet

Use Import/Export variables

Automatically based on Import variables and Export variables; allows Aspen Plus to place the Calculator block in the execution sequence.

Import variables are variables whose value is read by Calculator. Aspen Plus sequences the block to run after the block or stream containing the variable is run. Values written by Calculator for these variables are not saved into the referenced block or stream.

Export variables are ones whose value is written by Calculator. Aspen Plus sequences the block to run before blocks which need to read this value as input

Note: You can specify Import Variables and Export Variables even if you choose one of the other options for sequencing. You must specify at least one variable as an Import Variable or Export Variable if you want the Calculator block to run in EO mode. In EO, Aspen Plus will examine user Fortran statements to determine whether unspecified variables are assigned a value. Variables assigned a value will be treated as Export Variables; other variables will be treated as Import Variables. Aspen Plus also performs this check in SM if you specify only Export Variables or only Import Variables.

Note: Using execute-time specifications other than Use Import/Export Variables may prevent other SM sequencing mechanisms from working, such as specifying a convergence block to converge Calculator tear variables from this block.

Note: In Excel Calculator blocks, all variables must be specified as Import or Export, whether or not you use automatic sequencing.

Calculator Input Tears Sheet
See Also

Input Form Help

Fortran Convergence Loops

Use this sheet to specify tear variables to be converged, and convergence parameters for these variables.

Calculator Input Stream Flash Sheet
See Also

Input Form Help

EO Usage Notes

Free Water and Dirty Water Calculations

Use this sheet to specify the thermodynamic condition or suppress automatic flash calculations for streams accessed by a Calculator block. For each stream, choose a flash type and enter optional specifications for the chosen variables among temperature, pressure, and vapor fraction. You can enter estimates for temperature or pressure when one of these variables is not specified. You can also use this sheet to specify the valid phases the flash calculation considers and, optionally, the maximum iterations and error tolerance for the flash calculation.

Aspen Plus flashes an accessed stream automatically, unless one of the following is true:

All accessed stream variables are declared only as import variables

The only accessed variables are total flow, enthalpy, entropy, or density

If you do not choose a flash type, Aspen Plus performs flash calculations using the flash options established either on the Streams | Input form for process feeds, or by the source block of other streams.

If you do not enter flash specifications, Aspen Plus performs flash calculations using the temperature, pressure, and/or vapor fraction values (depending on the type of flash performed) present in the stream.

Calculator Block Options Form
See Also

Working with Calculator

EO Usage Notes

Use the Block Options form to override global values for physical properties, diagnostic message levels, and equation-oriented options. Specifications made on this form apply to this block only.

This form contains the following sheets:

Use this sheet

To do this

Properties

Property options and electrolytes calculation options for stream flash as well as any flash or property monitor calls made within the Fortran code

Diagnostics

Diagnostic message levels

EO Options

Options for equation-oriented solution

Calculator Block Options Diagnostics Sheet
See Also

Calculator Block Options Form

Use this sheet to specify the message levels for simulation and variable diagnostics. Use the top side of each slider to specify the level of messages displayed in the control panel, and the bottom side to specify the level of messages in the history file.

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

Defined Variables

Level

Description

0-4

Nothing is listed.

5

Values for all accessed variables before block execution are listed.

6

Level 5 messages and values for all accessed variables after block execution are listed.

Property (for stream flash)

Level

Description

0

Only physical property calculation terminal error messages are listed.

1

Level 0 and physical property calculation severe error messages are listed

2

Level 1 and physical property calculation error messages are listed

3

Level 2 and physical property calculation warnings are listed

4

Level 3 and physical property calculation brief diagnostic information are listed

5

Level 4 and additional physical property calculation diagnostics for analyzing convergence and simulation problems are listed. The amount of information listed increases with each increasing level.

Note: Stream level 8 prints both inlets and outlets of a block (as opposed to only outlets) only when the Simulation level is 4 or more. This ensures that the block name header appears to distinguish the outlets of one block from the inlets of another.

Calculator Block Options EO Options Sheet
See Also

Calculator Block Options Form

EO Usage Notes

Use this sheet to specify the following equation-oriented options for this block:

Component group of active components

Script method used

Keyword input not included in the user interface

Any options specified here take precedence over any other options specified in other EO Options sheets, for this block.

Calculator Results Form
See Also

Working with Calculator

Use this form to view the results of the block.

Use this sheet

To view

Summary

Status of the block

Define Variable

Results of defined variables

Status

View the convergence status and warning or error messages generated by an object

Calculator Results Summary Sheet
See Also

Calculator Results Form

Use this sheet to view the status of the block.

Calculator Results Define Variable Sheet
See Also

Calculator Results Form

Use this sheet to view these results for each sampled variable in this block:

Variable name

Value read from the variable

Value written to the variable

Units of the variable values

The results are shown for the last time the block was executed. If the block is inside a loop, these are the values read and written for the last execution of the block within that loop, not for the whole simulation.

How to Write Fortran Expressions
Not sure how to use Fortran? This topic explains the basics of writing code to perform simple calculations in Fortran. For a complete example of specifying a Calculator block and writing the Fortran code for it, see Defining a Calculator Block in the Modeling Coal Combustion example.

Fortran used in Aspen Plus is limited to Fortran 77 syntax, which the following sections describe. Fortran variable names and function names are not case sensitive; PRES, Pres, and pres all refer to the same variable.

No Fortran Compiler Necessary

All of the syntax described on this page can be interpreted, which means that you do not need to have a Fortran compiler installed to use it. Some other Fortran statements can also be interpreted; for a full list, see About the Interpreter.

Assignments and Arithmetic Operators

The most commonly used Fortran statements are assignment statements, which have the form

     variable = Fortran expression

The variable can be one you have defined as a variable in a Calculator block, or one defined in a declaration statement. The Fortran expression can be a number, another variable, a function call, or an arithmetic operation combining two or more expressions of these types. The value resulting from evaluating the Fortran expression is assigned to the variable when this statement is executed. In some cases in Aspen Plus, such as the Spec, Target, and Tolerance of a Design-Spec and the limits on manipulated variables, you will enter only a Fortran expression. In this case, there is an implicit assignment to the indicated attribute (in the same way that you would simply enter a number in most fields), but the expression is evaluated each time the value of the attribute is required.

The basic arithmetic operators are:

Addition

The + sign is used for addition. The following statement adds 1 to the value of B and assigns the result to A:

      A = B + 1

Subtraction

The - sign (ASCII hyphen, not an em dash or en dash character) is used for subtraction. The following statement subtracts 1 from the value of B and assigns the result to A:

      A = B - 1

Multiplication

The * character (asterisk) is used to represent multiplication. The following statement multiplies the value of B by 2 and assigns the result to A:

      A = B * 2

Division

The / character (slash) is used to represent division. The following statement divides the value of B by 2 and assigns the result to A.

      A = B / 2

Note: Division of one integer-type variable by another is integer division: the numbers are divided, the whole part of the result is kept (as an integer-type value), and the remainder is ignored. See Variable Types and Declarations, below.
Exponentiation

Two asterisks ( ** ) are used to represent exponentiation. Keep in mind the standard mathematical restrictions on exponentiation. The following statement squares the value of B and assigns the result to A:

      A = B ** 2

Order of Operations

You can combine multiple arithmetic operations into a single expression. When you do so, Fortran has a specific order in which it performs the operations:

Exponentiations are performed first, right to left.
Multiplications and divisions are performed next, left to right.
Addition and subtraction is performed last, left to right.
For example, 2+5*3 evaluates to 17 because the product 5*3 is calculated first, and then 2 is added to it.

You can group expressions in parentheses to specify a different order of calculations. Everything in parentheses is evaluated before anything outside the parentheses. If parentheses are nested, operations inside the inner parentheses are performed before those in the outer parentheses. For example, (2+5)*3 evaluates to 21.

Comments, Line Numbers, Continuation, and Indentation

You may notice how the examples in this topic are all indented. In Fortran statements, the first 6 columns are special.

A comment line, which is ignored during calculations, can be indicated by placing a C or c in the first column.
In standard Fortran, line numbers can be indicated by writing the numbers into the first five columns. In inline Fortran in Aspen Plus (such as in Calculator blocks), the first two columns are reserved and line numbers can only appear in columns 3 through 5. These can be used in certain kinds of statements to refer to another line. In lines which are neither comments nor numbered, you should leave the first five columns blank (spaces).
The sixth column is used only for the continuation character, to indicate that the line is a continuation of the previous line when expressions are very long. Fortran lines must not be longer than 72 characters, including the initial 6 spaces. Any character other than a space in the sixth column will make the line a continuation, but it is traditional to use a plus sign or to use digits (2 for the second line, 3 for the third line, and so forth).
The built-in editor in the Calculator | Input | Calculate sheet automatically leaves 6 blank spaces at the start of each line. If you need to make comments, line numbers, or continuations, you can delete these spaces.

Variable Types and Declarations

Fortran variables have explicit types indicating the kind of data they can hold. The most common variable types found in Fortran used within Aspen Plus are:

Integer: A variable that holds a whole number such as 0, 1, or -2. Integers are stored in 8 bytes or 64 bits, one of which is used to store the sign, so they can hold values between 263 and -(263), or about 9,000,000,000,000,000,000 and -9,000,000,000,000,000,000. Note, though, that you cannot enter commas when writing large numbers into your Fortran program; just write 10000 instead of 10,000.
Real*8: A real variable which can hold a whole or fractional (decimal) value. The *8 indicates that the variable uses 8 bytes or 64 bits. This kind of variable (also called double precision) can store about 14 digits of accuracy and can store numbers up to about 10308 or as small as 10-308, as well as the negatives of this range. When you enter decimal numbers directly into your Fortran program, be sure to use a period or full-stop ( . ) as the decimal separator, even if Aspen Plus is configured to use a comma for the decimal separator elsewhere. For example, 1.5 is the correct way to write the number one-and-a-half.
Two less commonly used types are:

Character*n: A character variable can store a string of text. The n indicates the maximum length of the string which the variable can hold.
Logical: A variable which can store a true or false value. If you want to write literal true and false values in your Fortran program, they have to be enclosed in period or full-stop characters (.TRUE. or .FALSE.). You can also generate Logical data as the result of using comparison operators.
When you perform arithmetic operations on two numbers, the result is the same type as the numbers you are operating on. If one number is real*8 and the other is integer, the result will be real*8. If the numbers are literal constants, their types are determined by the way they are written:

Numbers without a decimal point or scientific notation indicator are interpreted as integers. For example, 42, -9, and 1234567890 are integers.

Caution: Be careful when multiplying or dividing integers. If the result of a multiplication overflows the limit 263, it will wrap around without warning. If a division leads to a fractional result, the fraction is lost. Dividing by zero generates an error; be careful to avoid doing so.

If you are writing a user model in Excel rather than in Fortran, this does not apply. Excel automatically converts large integers to real numbers and all values read from Excel back into Aspen Plus are taken as real numbers.

Numbers with a decimal point but without a scientific notation indicator are taken as real numbers. Check your compiler documentation on the size of the real for such numbers; they are typically taken as single-precision real numbers which have about 7 digits of accuracy and support a range of numbers approximately from 10-38 to 10308 as well as their negatives.
Numbers with a scientific notation indicator (an E or D in the number) are taken as single-precision real numbers if they include an E, and double-precision if they include a D. The number after the E or D indicates that the number to its left is multiplied by this power of ten. For instance, 10, 1.0E1, 1.0D1, and 10D0 are all ways to write the number ten, but the first is an integer, the second is a single-precision real number, and the last two are double-precision real numbers.

Note: If a real number calculation overflows the limit, it becomes infinity, which will lead to anomalous results and perhaps errors when the number is used subsequently. If it underflows the 10-38 or 10-308 limit, it becomes zero without warning. Division by zero may lead to infinity or NaN (not a number) which will impede further calculations and perhaps cause errors.

Variables you define with a reference to an Aspen Plus variable are automatically declared with the type appropriate to the Aspen Plus variable. This is usually Real*8, but countable items such as stage numbers are of type Integer. If you want to make intermediate variables used during calculations, enter declarations for these variables in the Fortran Declarations dialog box of a Calculator block, or at the start of an external Fortran subroutine. Declarations consist of the variable type followed by the variable, separated by a space. You can declare multiple variables of the same type by separating them with commas. To declare an array variable, enter the dimensions in parentheses, with multiple dimensions separated by commas, after the variable name in a declaration. Example declarations:

      INTEGER I,J(2)

      REAL*8 TIME,VOLUME,PRES(7,10)

      LOGICAL C

      CHARACTER*10 NAME

See Using the Define Sheet to Identify Flowsheet Variables for limitations on Fortran variable names that apply to Fortran code used in Aspen Plus.

Conditions and Branching

You can write IF statements to perform certain operations only in certain conditions. The format of an IF statement is:

      IF (logical expression) THEN

        conditional code

      END IF

The logical expression can be a logical variable or the result of a comparison or logical operator. The parentheses around the logical expression are required. If the logical expression evaluates to true, then the conditional code is executed, and otherwise it is skipped.

Comparison Operators

Comparison operators can be used in decision statements, or to store a value in a logical variable which may be used in a decision statement later. The comparison operators in Fortran are:

Operator	Meaning
.LT.	Less than
.GT.	Greater than
.EQ.	Equal
.LE.	Less than or equal
.GE.	Greater than or equal
.NE.	Not equal
For example, the expression B .LT. 3 is true if B is less than 3.

Logical Operators

For complicated logical expressions you can use logical operators to combine multiple logical expressions. The logical operators in Fortran are:

Operator	Meaning
.AND.	And (true only if both expressions are true)
.OR.	Or (true if either or both expressions are true)
.NOT.	Not (reverses result of following logical expression)
For example, the expression A.EQ.3 .OR. B.LT.2 is true whenever A equals 3, B is less than 2, or both.

You can use parentheses to group parts of expressions involving comparison and logical operators. All arithmetic operations are performed first, then comparisons, and logical operators are last, with .NOT. evaluated before .AND., then .OR. is evaluated last.

Function Calls

You can call functions by typing the function name followed by its arguments in parentheses. If the function takes more than one argument, separate the arguments with commas ( , ).

Most commonly you will call the following built-in Fortran functions (the ones beginning with D return a double precision or real*8 result, while the others return an integer result):

Function	Meaning
DABS(X), IABS(J)	Absolute value
DSIN(X), DCOS(X), DTAN(X)	Sine, cosine, and tangent functions of X in radians.
DASIN(X), DACOS(X), DATAN(X)	Inverse sine, cosine, and tangent functions, with the result returned in radians.
DEXP(X)	Exponential function (ex)
DLOG(X)	Natural logarithm of X
DLOG10(X)	Base 10 logarithm of X
DSQRT(X)	Square root of X
DMIN1(X1,X2,...), DMAX1(...)	Minimum and maximum of the arguments (two or more real*8 arguments)
MIN0(J1,J2,...), MAX0(...)	Minimum and maximum of the arguments (two or more integer arguments)
DFLOAT(J)	Converts an integer value to a real*8 value
IDINT(X)	Converts a real value to an integer, truncating the fractional part. IDINT(1.3)=1; IDINT(-2.7)=-2.