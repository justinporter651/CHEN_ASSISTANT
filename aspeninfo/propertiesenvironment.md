Using the Properties Environment:

Specifying Components
See Also

Search the Knowledge Center for information on:

Physical Properties: Learn the Basics

For help on specifying components, see one of the following topics:

Forms for specifying component information

Specifying databank and non databank components

Adding, deleting, and renaming components

Generating electrolyte components and reactions

Identifying solid components

Assigning attributes for conventional and nonconventional components

Specifying supercritical (HENRY) components

Specifying UNIFAC groups

Defining component groups

Forms for Specifying Component Information
Use these forms under the Components folder in the Properties environment to specify component information:

Form

Sheet

What is Specified

Specifications

Selection

Petroleum

Nonconventional

Databanks

All components used in a simulation

Assays, blends, and pseudocomponents

Nonconventional components

Pure component databanks to search for property parameters

Assay/Blend

Petro Characterization

–

Assays and blends.

Pseudocomponent characterization

Pseudocomponents

–

Pseudocomponents data

Component Attributes

Selection

Component attributes assigned to conventional components

Henry Comps

Selection

Sets of supercritical components for which Henry's law is used in activity coefficient property methods

UNIFAC Groups

Selection

UNIFAC functional groups

About Databanks
Aspen Plus stores physical property parameters for a large number of components in several databanks. In addition to the standard Aspen Plus databanks, custom databanks may be available at your site.

To see the available pure component databanks, and to see or change which databanks are active for a simulation:

In the navigation pane, click Components.

On the Specifications form, click the SQL Server Database sheet.

Aspen Plus searches the databanks in the order listed in the Selected Databanks list on this sheet. The default order is appropriate for most simulations.

To change the search order for databanks in this simulation, click a databank in the Selected Databanks list, and then click the up and down arrow keys to move the databank higher or lower in the list.

See Changing Databanks Search Order for information about changing search order globally.

You can choose additional databanks from the Available Databanks list and add them to the Selected Databanks list using the right arrow button.

To remove a databank from the search, in the Selected Databanks list, click a databank then click the left arrow button to move it to the Available Databanks list.

See Retrieving Parameters from Databanks for more information on retrieving built-in components from databanks.

Specifying Components from a Databank
See Also

Example of Specifying Components

You must:

Ensure your simulation contains at least one component.

Provide Aspen Plus with a list of all the components in the simulation

Assign a component ID to each component. This ID will refer to the component on all subsequent input forms, results forms, and reports.

To specify the components:

From the Properties environment, in the navigation pane, click Components.

In the Component ID box of the Selection sheet, type an ID for the component you want to add. Every component must have a Component ID. Then:

If

Then Aspen Plus

An exact match is found in a databank

Fills in the Alias and Component name. Omit the remaining steps.

If the component shown is not the one you intent, delete the alias or component name with the backspace key, and proceed as if no match was found.

No exact match is found in a databank

Requires you to enter the alias or component name, if you want to retrieve data from the databank.

To specify the Alias or Component Name yourself, go to Step 3.

To use Find, click the Find button and go to Step 4.

When no match is found, enter the Alias or Component Name to identify the component. Then:

If you enter a(n)

And an exact match is

Then Aspen Plus

Alias

Found

Fills in the Component Name. You need to specify the Component ID if it has not already been done. Omit the remaining steps.

Alias

Not found

Displays the Find dialog box with any partial match results displayed. See Step 4 for using the Find dialog box. Omit the remaining steps.

Component name

Found

Fills in the Alias. You need to specify the Component ID if it has not already been done.

Component name

Not found

Displays the Find dialog box with any partial match results displayed. See Step 4 for using the Find dialog box.

Use the Find dialog box to enter search criteria for your component.

There are two sheets labeled Compounds and Databanks. Using the Compounds sheet, any combination of the items below can be entered and used to search for a component. The Databanks sheet lets you specify which databanks to search. You must enter at least one of the items below unless you choose only small databanks to search.

If you enter a

Then Aspen Plus searches for

Component name, alias, or CAS number

Any components that include the string in the component name, alias, or Chemical Abstracts Service registry number (CAS search only available when using the enterprise database)

Use the buttons to the left of this field to choose where in the name/alias/number to look for a matching string:

Begins with: Only at the beginning

Contains: Anywhere within the name

Equals: Only an exact match to the whole name

Component class

A component that is in the component class category.

Molecular weight

Components in that molecular weight range.

Boiling Point

Components in that boiling point range.

Click the Find now button to display all of the components with your find criteria. Then, select a component from the list and click Add or Add selected components to add it to the components list. See Example of Using the Find Dialog Box.

When you finish searching for components, click Close to return to the Selection sheet.

You can return to the Components | Specifications | Selection sheet at any time while building your simulation, to add or delete components.

Specifying Non-Databank Components
See Also

Physical property data requirements

Estimating property parameters

Regressing property parameters

Using the User-Defined Component Wizard

To define a component that is not in the databanks:

From the Properties environment, in the navigation pane, click Components.

On the Components | Specifications | Selection sheet, enter only the Component ID.

If Aspen Plus finds a match in a databank for the ID you enter, delete the Alias or Component Name. Aspen Plus then recognizes the component as a non databank component.

You must supply all required property parameters for non databank components. You can supply the parameters yourself using the Data and Methods | Parameters forms.

– or –

Combine user-input parameters and data with one or both of the following:

Property Estimation to estimate the required parameters using the Estimation forms

Data Regression to regress data to obtain the parameters using the Regression forms

Tip: Use the User-Defined Component Wizard to help you enter some of the commonly available data, such as normal boiling point and vapor pressure data.

Note: Advanced Aspen Plus users sometimes define non-databank components on the Components | Specifications | Selection sheet by entering the Alias of a databank component which behaves similarly to the component of interest, and then modifying parameters for the property method to match their data on the actual component. When you do this, if you do not specify all parameters for all property methods used in the simulation, some parameters for the databank component may be used for the non-databank component.

This strategy is not recommended when the databank component chosen also appears separately in the component list as another component. While they will be treated as separate components, this can cause problems when any model treats a particular component specially (for instance, water in several models, H+ and H3O+ in electrolyte models, HF in the HF equation of state, and O2 in combustion reactions) In most cases, the component defined first in the component list is treated as the component of interest. (See Reordering the Component List.) Water is treated differently in this regard; the first component with alias H2O and non-zero flow is treated as water. In different areas of the flowsheet this may lead to different components being regarded as water.

Do not use this technique (or choose a different databank component to base your non-databank component upon) if you use any model that treats one or more components specially and you do not want your non-databank component to be treated as that model treats the databank component.

Inserting a Component
To insert a component:

From the Properties environment, in the navigation pane, click Components.

On the Specifications | Selection sheet, move to the row where you want the new component inserted.

Click the right mouse button and from the menu that appears, click Insert Row.

Enter a Component ID, Component Name or Alias in the new row.

Renaming a Component
To rename an existing component:

From the Properties environment, in the navigation pane, click Components.

On the Specifications | Selection sheet, move to the Component ID box for the component you want to rename.

Type over the existing ID.

Aspen Plus prompts you to either delete or rename the existing component.

Select Rename.

The component is renamed on this form and on all other forms where it appears. No data is lost.

If you select Delete, both the Component ID and references to it are deleted.

Note:Propertydata for deleted components is not automatically deleted, to avoid data loss. Use the Purge incomplete property parameters and empty records option on the Clean Property Parameters dialog box to delete this data.

What Is a Property Method?
A property method is a collection of methods and models that Aspen Plus uses to compute thermodynamic and transport properties.

The thermodynamic properties are:

Fugacity coefficient (K values)

Enthalpy

Entropy

Gibbs free energy

Volume

The transport properties are:

Viscosity

Thermal conductivity

Diffusion coefficient

Surface tension

Aspen Plus includes a large number of built-in property methods that are sufficient for most applications. However, you can create new property methods to suit your simulation needs.

Creating New Property Methods
To create a new property method:

Choose an existing property method that closely matches your desired new method.

Alter it according to the instructions in Modifying Property Methods.

Or

Import a CAPE-OPEN Property Package by following the instructions in Importing a CAPE-OPEN Property Package.

Available Property Methods
You must select one or more Property Methods to model the properties of specific systems in your flowsheet. Each property method has a unique approach to representing K values.

See Property Method Descriptions for a list all of the property methods available in Aspen Plus.

You can modify these existing methods or create new methods. For more information, see Modifying Property Methods.

Recommended Property Methods for Different Applications
See the following topics to see a table showing the recommended property methods for a simulation of that type.

Oil and gas production
Refinery
Gas processing
Petrochemicals
Chemicals
Coal processing
Power generation
Synthetic fuel
Environmental
Water and steam
Mineral and metallurgical processes

Oil and Gas Production
Application

Recommended Property Methods

Reservoir systems

PR-BM, RKS-BM

Platform separation

PR-BM, RKS-BM

Transportation of oil and gas by pipeline

PR-BM, RKS-BM

Refinery
Application

Recommended Property Methods

Low pressure applications
(up to several atm)
 Vacuum tower
 atmospheric crude tower

BK10, CHAO-SEA, GRAYSON

Medium pressure applications
(up to several tens of atm)
 Coker main fractionator,
 FCC main fractionator

CHAO-SEA, GRAYSON, PENG-ROB, RK-SOAVE

Hydrogen rich applications
 Reformer, Hydrofiner

GRAYSON, PENG-ROB, RK-SOAVE

Lube oil unit, De asphalting unit

PENG-ROB, RK-SOAVE

Gas Processing
Application

Recommended Property Methods

Hydrocarbon separations
 Demethanizer
 C3 splitter

PR-BM, RKS-BM, PENG-ROB, RK-SOAVE

Cryogenic gas processing
 Air separation

PR-BM, RKS-BM, PENG-ROB, RK-SOAVE

Gas dehydration with glycols

PRWS, RKSWS, PRMHV2, RKSMHV2, PSRK, SR-POLAR

Acid gas absorption with
 Methanol (RECTISOL)
 NMP (PURISOL)

PRWS, RKSWS, PRMHV2, RKSMHV2, PSRK, SR-POLAR

Acid gas absorption with
 Water
 Ammonia
 Amines
 Amines + methanol (AMISOL)
 Caustic
 Lime
 Hot carbonate

ELECNRTL

Claus process

PRWS, RKSWS, PRMHV2, RKSMHV2, PSRK, SR-POLAR

Petrochemicals
Application

Recommended Property Methods

Ethylene plant
 Primary fractionator

 Light hydrocarbons
 Separation train
 Quench tower

CHAO-SEA, GRAYSON

PENG-ROB, RK-SOAVE

Aromatics
 BTX extraction

WILSON, NRTL, UNIQUAC and their variants

Substituted hydrocarbons
 VCM plant
 Acrylonitrile plant

PENG-ROB, RK-SOAVE

Ether production
 MTBE, ETBE, TAME

WILSON, NRTL, UNIQUAC and their variants

Ethylbenzene and styrene plants

PENG-ROB, RK-SOAVE
–or–
WILSON, NRTL, UNIQUAC and their variants

Terephthalic acid

WILSON, NRTL, UNIQUAC and their variants
(with dimerization in acetic acid section)

See Guidelines for Choosing a Property Method for Polar Non-Electrolyte Systems to see diagrams for recommendations based on pressure and vapor phase association.

Chemicals
Application

Recommended Property Methods

Azeotropic separations
 Alcohol separation

WILSON, NRTL, UNIQUAC and their variants

Carboxylic acids
 Acetic acid plant

WILS-HOC, NRTL-HOC, UNIQ-HOC

Phenol plant

WILSON, NRTL, UNIQUAC and their variants

Liquid phase reactions
 Esterification

WILSON, NRTL, UNIQUAC and their variants

Ammonia plant

PENG-ROB, RK-SOAVE

Fluorochemicals

WILS-HF

Inorganic Chemicals
 Caustic
 Acids
 Phosphoric acid
 Sulphuric acid
 Nitric acid
 Hydrochloric acid

ELECNRTL

Hydrofluoric acid

ENRTL-HF

See Guidelines for Choosing a Property Method to see recommendations based on pressure and vapor phase association.

Coal Processing
Application

Recommended Property Methods

Size reduction crushing, grinding

SOLIDS

Separation and cleaning sieving,

cyclones, precipitation, washing

SOLIDS

Combustion

PR-BM, RKS-BM (combustion databank)

Acid gas absorption with
 Methanol (RECTISOL)
 NMP (PURISOL)

PRWS, RKSWS, PRMHV2, RKSMHV2, PSRK, SR-POLAR

Acid gas absorption with
 Water
 Ammonia
 Amines
 Amines + methanol (AMISOL)
 Caustic
 Lime
 Hot carbonate

ELECNRTL

Coal gasification and liquefaction

See Synthetic Fuels table.

Power Generation
Application

Recommended Property Methods

Combustion
 Coal
 Oil

PR-BM, RKS-BM (combustion databank)

Steam cycles
 Compressors
 Turbines

STEAMNBS, STEAM-TA

Acid gas absorption

See gas processing.

Synthetic Fuel
Application

Recommended Property Methods

Synthesis gas

PR-BM, RKS-BM

Coal gasification

PR-BM, RKS-BM

Coal liquefaction

PR-BM, RKS-BM, BWR-LS

Environmental
Application

Recommended Property Methods

Solvent recovery

WILSON, NRTL, UNIQUAC and their variants

(Substituted) hydrocarbon stripping

WILSON, NRTL, UNIQUAC and their variants

Acid gas stripping from
 Methanol (RECTISOL)
 NMP (PURISOL)

PRWS, RKSWS, PRMHV2, RKSMHV2, PSRK, SR-POLAR

Acid gas stripping from:
 Water
 Ammonia
 Amines
 Amines + methanol (AMISOL)
 Caustic
 Lime
 Hot carbonate

ELECNRTL

Acids
 Stripping
  Neutralization

ELECNRTL

See Guidelines for Choosing a Property Method for Polar Non-Electrolyte Systems to see diagrams for recommendations based on pressure and vapor phase association.

Water and Steam
Application

Recommended Property Methods

Steam systems
 Coolant

STEAMNBS, STEAM–TA

Mineral and Metallurgical Processes
Application

Recommended Property Methods

Mechanical processing:
 Crushing
 Grinding
 Sieving
 Washing

SOLIDS

Hydrometallurgy
 Mineral leaching

ELECNRTL

Pyrometallurgy
 Smelter
 Converter

SOLIDS

Specifying the Global Property Method
Aspen Plus uses the global property method for all property calculations, unless you specify a different property method for a specific flowsheet section, unit operation block, or property analysis.

To specify the global property method:

From the Properties environment, in the navigation pane, click Methods.

On the Global sheet, in the Method name list, specify the property method.

You can also use the Method filter list box to help you select an appropriate property method. In the Method filter list box, select the category of process or property method you are considering. Each Method filter has a list of recommended property methods.

In the Base Method list box, select a base property method.

If you are using an activity coefficient property method and want to use Henry's law for supercritical components, specify the Henry component list ID in the Henry Components list box.

If you have a petroleum application that requires free water calculations, specify the property method for the free water phase in the Free-water method list box and water solubility option in the Water solubility list box.

For electrolyte applications, you must select an electrolytic property method, then select the chemistry ID in the Chemistry ID list box. You can also specify the electrolyte computation method in the Use true components check box.

Specifying a Property Method for a Flowsheet Section
Use flowsheet sections to simplify the assignment of property methods when you are using more than one property method in a simulation. For example, you could divide a flowsheet into high pressure and low pressure sections, and assign an appropriate property method to each section.

To specify a property method for a flowsheet section:

From the Properties environment, in the navigation pane, click Methods.

On the Flowsheet Sections sheet, select a flowsheet section from the Flowsheet section ID box.

Specify the property method in the Base Method box.

You can also use the Method filter list to help you select an appropriate property method. In this box, select the type of process you want to model or type of method you are looking for. The property methods.

If you are using an activity coefficient property method and want to use Henry's Law for supercritical components, specify the Henry component list ID in the Henry components box. See Defining Supercritical Components.

For petroleum applications, you may want free water calculations. Specify the free water property method in the Free-water method box and water solubility option in the Water solubility box. See Using Free Water Calculations.

For electrolyte applications, you must select an electrolytic property method, then select the Chemistry ID in the Chemistry ID box. You can also specify the electrolyte computation method in the Use true components check box.

Specifying a Local Property Method
You can override the global property method by specifying a local property method on:

The Block Options| Properties sheet, for a unit operation block

The Properties sheet, for a Property Analysis

The Setup sheet of a regression case

The specifications you enter on these sheets apply only to that unit operation block, property analysis, or regression.

For the following unit operation models, you can specify different property methods for streams or sections in the block:

Model

Sheet

Allows you to specify property methods for

Decanter

Decanter | Properties | Phase Property

Liquid1 and liquid2 phases

RadFrac

RadFrac | Properties | Property Sections

Column segments, decanters,
thermosiphon reboiler

RGibbs

RGibbs | Setup | Products

Each phase

MultiFrac

MultiFrac | Properties | Property Sections

Column segments

PetroFrac

PetroFrac | Properties | Property Sections
PetroFrac | Stripper | Properties | Property Sections

Column segments for main column
Column segments for stripper

HeatX

HeatX | Block Options | Properties

Hot and cold sides of the exchanger

MHeatX

MHeatX | Block Options | Properties

Each stream in the exchanger

RPlug

RPlug | Block Options | Properties

Reactant and external thermal fluid streams

Use the Methods | Specifications | Referenced sheet to enter additional property methods for use in the unit operation blocks or in property analysis calculations.

When performing an interactive property analysis, you can select any property method that has been specified on the Methods | Specifications | Referenced sheets.

Defining Supercritical Components
Activity coefficient property methods handle supercritical components present in the liquid phase by the asymmetric convention for activity coefficient normalization (Henry's law).

To use Henry's law for supercritical components:

Select an appropriate property method. These property methods allow Henry's law:

B-PITZER

NRTL-2

UNIQUAC

VANL-2

IDEAL

PITZER

UNIQ-HOC

WILSON

ELECNRTL

PITZ-HG

UNIQ-NTH

WILS-HF

ENRTL-HF

SOLIDS

UNIQ-RK

WILS-HOC

ENRTL-HG

UNIFAC

UNIQ-2

WILS-NTH

NRTL

UNIF-DMD

VANLAAR

WILS-RK

NRTL-HOC

UNIF-HOC

VANL-HOC

WILS-2

NRTL-NTH

UNIF-LBY

VANL-NTH

WILS-GLR

NRTL-RK

UNIF-LL

VANL-RK

WILS-LR

Define a Henry's component group using the Henry Comps forms.

Enter the ID of the Henry's component group on the Methods | Specifications | Global sheet (Use the Flowsheet Sections sheet for flowsheet sections specifications) or Block Options | Properties sheet (local specification for unit operation models).

For more information on Henry's law, see Aspen Plus Physical Property Methods.

Equation of state property methods do not require special treatment for supercritical components.

About Property Sets
A property set is a collection of thermodynamic, transport, and other properties that you can use in physical property tables and analysis. You can also use it in applications such as Aspen Plus for:

Heating and cooling curve reports

Distillation column stage property reports and performance specifications

Reactor profile reports

Design specifications and constraints

Calculator blocks

Sensitivity blocks

Optimization

Stream reports and report scaling

To use property sets in another application, you must include them in a property package you create.

Aspen Plus and Aspen Properties have several built-in property sets that are sufficient for many applications. The list of built-in property sets is determined by the Template you choose when creating a new run. For more information on Templates, see About the Templates. You can use a built-in property set and modify it to fit your needs, or you can create your own property sets. To see the built-in sets available or select one, use the drop-down list on any property set list box. The list prompts describe the contents of each built-in property set.

Using the Find Properties Dialog Box
See Also

Example of Using Search to Find Properties

If you want to search for a property by its common name, click the Search button on the Property Sets | Properties sheet. A dialog box appears where you can type the name or a fragment of the name of the property you want. To add a property to your property set, click the check box next to the property you desire. Once you have added all the properties you want, click OK to add them to the Property Sets form.

Specifying Phase Qualifiers
The default for phase is Total. If a property cannot accept Total phase as a qualifier, you must enter an appropriate alternative (Liquid, Vapor, 1st liquid, 2nd liquid, or Solid).

The phases you select should be consistent with the type of calculation desired. For example, 1st liquid and 2nd liquid options should be used when two liquid phases are present in the system.

Analyzing Properties
After you complete property specifications, you should analyze the properties predicted by your model to ensure correct results. You can do this using the Property Analysis feature. Property Analysis generates tables of physical property values, which can be plotted to visualize and better understand the behavior of properties as predicted by your property specifications.

Use the Analysis folder in the Properties environment to create property analyses. There are also buttons on the Home tab of the ribbon which allow you to quickly create the most common types of analyses.

You can also use Aspen Distillation Synthesis™ (a separately-licensed product of the Aspen Engineering Suite) to perform azeotrope searches and to construct ternary maps.

This section discusses using the Property Analysis features.

Topics include:

About Property Analysis

Generating Property Analyses

Property Method Specifications for Property Analysis

Examining Analysis Results

About Property Analysis
See Also

Search the Knowledge Center for information on:

Getting Started with Physical Properties

Property Analysis: Understand Your System's Chemical and Physical Interactions

The Property Analysis feature generates tables of properties from variations in:

Temperature

Pressure

Vapor fraction

Heat duty

Composition

The tables include property values that are defined using Property Sets, and can consist of thermodynamic, transport, and other derived properties.

In Aspen Plus, you can use Property Analysis:

On a standalone basis, by selecting the Analysis run type on the Home tab of the ribbon in the Properties environment

In a Regression run, by selecting the Regression run type on the Home tab of the ribbon in the Properties environment

In a Flowsheet run, by running from the Simulation environment

Generating Property Analyses
See Also

Creating a Property Analysis

Pure Component Properties

Properties for Binary Systems

Mixture and Stream Property Analysis

This topic describes how to generate many common analyses, using the Analysis commands from the ribbon or the forms in the Analysis folder.

You can use the Analysis commands at any time after you complete the Methods specifications.

You can create the following types of analyses under the Analysis folder in the Properties environment. When you create analyses in this way, you must run the calculation to get results.

Property Analysis Type

For

PT-Envelope

Pressure-temperature envelopes and properties along a constant vapor fraction line

Residue

Generating residue curve maps which plot the composition trajectories of a ternary mixture undergoing distillation at total reflux

Ternary

Data for plotting ternary diagrams showing the phase envelope, tie lines, and azeotropes of a ternary mixture.

You can also create the above types of analyses using the interactive commands in the Home tab of the ribbon, as well as the following types of analysis which are only available in this way:

Property Analysis Type

For

Pure

Evaluation of pure component properties as a function of temperature and pressure

Binary

Generating common phase diagrams for binary systems, such as Txy, Pxy, Txx, Txxy, Pxxy or Gibbs energy of mixing curves

Mixture

Property evaluations for multi-phase mixtures from flash calculations, or single-phase mixtures without flash calculations

Solubility	Evaluation of solubility of solids and other properties in solid-liquid equilibrium systems
Note: You cannot create these analyses using forms, but you can modify them on forms after they are created.

Generic analysis is an older form of Mixture analysis which also allows you to use a stream composition (in Aspen Plus) rather than specifying composition, as in Stream Property analysis.

You can also calculate stream properties. To generate stream properties, you must define at least one material stream.

Pure Component Properties
See Also

Example of Examining Component Vapor Pressures

Search the Knowledge Center for information on:

Property Analysis: Understand Your System's Chemical and Physical Interactions

Use pure component analysis to calculate and display pure component properties as a function of temperature to:

Check pure component data and parameter values

Compare properties for components that belong to the same family. Family plots can reveal incorrect trends.

Determine whether the property is extrapolated correctly when temperatures are outside correlation limits

To generate pure component properties as a function of temperature:

Ensure your Setup, Components, and Methods specifications are complete.

In the Properties environment, in the Home tab of the ribbon, in the Analysis group, click Pure.

The Analysis | Pure | Input form opens to the Pure Component sheet. Most of the required information is set to defaults, including:

Item

Information

Property method

The global property method is used, as specified on the Methods Specifications Global sheet. You can select any Property Method that appears on the Methods Specifications form.

Temperature

The default is a temperature range from 0 to 25°C. You can enter a new range by modifying the lower and upper temperatures, or you can change from a temperature range to a temperature list, and specify a list of discrete temperature values.

No. points

The default is 51 points. You can change the number of points, or enter a temperature increment

Pressure

The default is 1 atm. You must change the default for vapor properties, for liquid properties near the critical point., and properties generated from EOS property methods

From the Property list, select the property to be tabulated.

The Property list displays properties of the type shown in the Property type list. To focus your search for a property, you can change the property type to Thermodynamic or Transport. To see a list of all available properties, change the property type to All. You can also select the EoS Alpha function test, in which case you do not select a property.

As you move the mouse over the properties in the Property list, a description of each one appears in a tooltip.

Optionally you can specify the units for the selected property in the Units list. If you do not specify the units, they will be determined by the default unit set.

Select the phase(s) for which you want the property to be reported, by clicking one or more of the Phase checkboxes: Vapor, Liquid, and/or Solid. Liquid is the default. Not all phases are valid for all properties. For a list of valid phases for each property, see Physical Property Data.

Choose components by selecting one or more from the Available components list, and clicking > to move them to the Selected components list.

When finished, click Run Analysis to generate the results.

– or –

With the Run Mode in the ribbon set to Analysis, click  in the ribbon.

The Aspen Physical Property System calculates the property at the temperature values you specify. Results appear in a form window. The Property window allows you to select which components to plot.

Note: Pure component property analysis uses the property method you specify to calculate properties for the components you specify in the phases you specify at the conditions you specify, even if those conditions are unrealistic, for example, liquid at temperatures far above the boiling point.

Equation of State Alpha Function Consistency Test

If you select EoS Alpha function test as the Property type, then the analysis calculates the values of the alpha function and its first three derivatives to ensure that the alpha function, with its specified parameters, behaves in a thermodynamically consistent way.

In order to use this test, the Property method must be one of the Peng-Robinson or Redlich-Kwong-Soave variations which support alpha functions. You do not select a property. You specify a temperature range and one component to run this test on.

The result of this analysis will be a plot of this alpha function and its derivatives for the specified component over the specified temperature range.



To pass this test, the alpha function should have a positive value over its entire range. Locate 0 on the Y axis and confirm that the curve for ALPHA lies entirely above it. Additionally, and with decreasing degrees of importance, the derivative of alpha (DALPHA) should have a negative value, the second derivative (D2ALPHA) should have a positive value, and the third derivative (D3ALPHA) should have a negative value over this entire range.

Example of Examining Component Vapor Pressures
Calculate and display the vapor pressures of CCL4, CH2CL2, and CHCL3, between 50 and 200°F, using the WILSON Property Method. To do this:

In the Properties environment, in the Home tab of the ribbon, in the Analysis group, click Pure.

The Analysis | PURE-1 | Input | Pure Component sheet appears.

image\help0217.gif

When you have finished choosing your components, click Run analysis to generate the results. When Property window appears, Select all components to plot.

Tabular results form:

image\help0218.gif

Plotted Results:

image\help0219.gif

image\help0218.gif

Properties for Binary Systems
See Also

Completing the Specifications for Txy, Txx, and Txxy Binary Analysis

Completing the Specifications for Pxy and Pxxy Binary Analysis

Completing the Specifications for Gibbs Energy of Mixing

Search the Knowledge Center for information on:

Property Analysis: Understand Your System's Chemical and Physical Interactions

You can generate common phase diagrams for binary systems to:

Check the validity of data and parameter values

Assess the degree of nonideality

Check for existence of azeotropes

Check for existence of two liquid phases

Check quality of extrapolation of the model

To generate properties for binary systems use the Analysis Binary commands. To do this:

Ensure your Setup, Components, and Methods specifications are complete.

In the Properties environment, from the Home tab of the ribbon, in the Analysis group, click Binary.

On the Binary Analysis dialog box, choose the type of analysis in the Analysis Type list box:

Use analysis type

To tabulate

Txy

Temperature (T) versus liquid (x) and vapor (y) compositions at given pressures

Pxy

Pressure (P) versus liquid (x) and vapor (y) compositions at given temperatures

Txx	Temperature (T) versus liquid (x1 and x2) compositions at given pressures for two-liquid systems
Txxy	Temperature (T) versus vapor-liquid (y and x) and liquid-liquid (x1 and x2) compositions at given pressures for two-liquid systems
Pxxy	Pressure (P) versus vapor-liquid (y and x) and liquid-liquid (x1 and x2) compositions at given temperatures for two-liquid systems
Gibbs energy of mixing

Gibbs energy of mixing versus liquid compositions at given temperatures and pressures. Used to detect the formation of two liquid phases.

For all types of Binary Analysis (except as noted), you can accept the default settings or specify the following information:

Item

Information

Components

Two are required. Use the Component 1 and Component 2 lists to choose the pair of components you wish to study. Only conventional components that are not solids or ions are allowed. Defaults are the first two conventional components listed on the Components Specifications Selection sheet.

Composition Basis

Mole fraction or mass fraction. The default is mole fraction.

Composition component (Vary)

This designates which component's composition is varied to generate the results. The default is the component selected as Component 1. For Txx, this choice is not available and results are always plotted against the composition of component 1.

Composition values

To determine at what compositions the Aspen Physical Property System will perform its calculations, you can specify an equidistant or logarithmic composition range or a composition list. The default is the full equidistant composition range between pure component 1 and pure component 2 (0 to 1). For both kinds of ranges, specify the end points of the range. For the list of values, specify each value to be used. For Txx this option is not available.

Tip: For highly immiscible systems, vary mass fraction on a logarithmic scale from 10-6 to 1 to get good results for the temperatures matching vapor compositions.

Number of points to generate

For equidistant and logarithmic ranges, specify the number of intervals to divide the range into (the number of points is one more), or the increment between points for equidistant ranges, or the factor between points for logarithmic ranges. The default is 50 intervals. For Txx this option is not available.

Pseudo-binary system	If you check Pseudo-binary system, the analysis will calculate results for a ternary system in which a specified Entrainer component is kept at a constant composition (on the same basis as the other compositions) while the other compositions are varied. You can specify more than one value for the entrainer fraction, and data will be generated at each value.
Property Method, Henry Components, Chemistry ID, Calculation approach

Defaults are obtained from the Methods | Specifications | Global sheet. For electrolyte systems, you should use the apparent components approach so that the system, such as water/HCl, can truly be binary. If you choose true approach, Aspen Plus switches to apparent approach for the analysis and issues a warning:

WARNING WHILE GENERATING PROP-TABLE: "$MMTXY"

THE BINARY ANALYSIS IS USING CHEMISTRY. CALCULATIONS WILL BE PERFORMED

WITH THE APPARENT INSTEAD OF THE TRUE APPROACH.

Maximum iterations, Error tolerance

Defaults are obtained from the Setup | Calculation Options | Flash Convergence sheet.

Flash convergence algorithm

The default is Inside-out except for three-phase true species problems with Chemistry. See Flash Convergence Algorithms for details.

Use flash retention

Default Yes. Flash retention means that the solution for one flash is kept as the initial estimate for the next flash.

The remaining specifications for an interactive Binary Analysis depend on the Analysis type.

Completing the Specifications for Txy, Txx, and Txxy Binary Analysis
See Also

Displaying Plots from Txy Analysis

Example of Generating Txy Curves

To complete the specifications for a Txy type Binary Analysis, you can either modify the following specifications or accept the defaults.

For

You can specify

The default is

Valid Phases

Rigorous Vapor-Liquid, Vapor-Liquid-Liquid, or Vapor-Liquid-FreeWater calculations (or Liquid-Liquid for Txx only)

Vapor-Liquid-Liquid

Pressure(s)

You may specify a single pressure, or multiple pressures by entering a list of values, or by giving a range of values. If you choose to specify a range of values, you must enter number of points or an increment.

A single pressure of 1 atm

Lower temperature	For Txx and Txxy analysis, specify a lower temperature limit for the liquid-liquid equilibrium calculations.	None (you must specify a value)
Upper temperature	For Txx analysis, specify an upper temperature limit for the liquid-liquid equilibrium calculations. (For Txxy analysis, the calculation extends to the top of the two-liquid region).	None (you must specify a value)
Number of intervals or increment	For Txx and Txxy analysis, the number of intervals or increment for the liquid-liquid equilibrium calculations. This is similar to the equidistant range of values for the vapor-liquid calculations, but is specified separately.	20 intervals
When finished, click the Run analysis button to generate the Txy diagram.

The Aspen Physical Property System displays the results in tabular form in a form window, from which you can plot them. In addition to the Txy diagram, you can display other plots from the Txy analysis results. The following plots are available:

Type of Plot

Description

TXY

Temperature versus liquid and vapor composition

TX

Temperature versus liquid composition

YX

Vapor versus liquid composition

Gamma

Liquid activity coefficients of both components versus liquid composition

KVL

K-values of both components versus liquid composition

For Txx analysis, only the Tx and Gamma plots are available. Plots from Txx and Txxy analysis show both liquid phases (though for Gamma and KVL plots only the first liquid phase is shown by default).

Displaying Plots from Txy, Txx, and Txxy Analysis
See Also

Example of Generating Txy Curves

To display these plots:

Open the Binary Analysis Results form.

In the Home tab of the ribbon, in the Plot group, click T-xy (or T-x for Txx analysis).

You can use the Format tab of the ribbon to modify the defaults for plot title, axis titles, display options, grid or line type.

Example of Generating Txy Curves
Generate Txy curves at 1 atm for a mixture of HNO3 and water, using the ELECNRTL property method and GLOBAL solution chemistry.

image\help0220.gif



Tabular results form:

image\help0221.gif

Plotted results:

image\help0222.gif

Example of Generating Txxy Curves
Generate Txxy curves at 1 atm for a mixture of water and butanol, using the CPA property method.



Tabular results:



Plot:

Mixture and Stream Property Analysis
You can use mixture and stream property analysis to generate tables and plots of properties for multi-component mixtures. Any properties available in Property Sets can be plotted. To do so:

Create a new Mixture analysis from the Analysis group in the Home tab of the ribbon in the Properties environment (or in Aspen Properties), or create a new Stream Property analysis from the Stream Analysis group in the Home tab of the ribbon in the Simulation environment in Aspen Plus.

Define the property or properties in one or more Property Sets. The Property Sets used may have one or multiple properties, and more than one Property Set may be used in a single analysis. Select these Property Sets in the analysis by highlighting them and then clicking > to move them into the Selected Properties list.

Define the composition. In Mixture analysis, select one or more components and the basis, and specify a fraction in the composition for each component. In Stream Property analysis, select a flowsheet stream. The composition of that stream is used in the analysis.

Select the manipulated variable. This variable will be plotted along the X axis of the resulting plot. This may be a state variable, heat duty (for stream property analysis only), or a component flow rate or fraction. If you select a component flow or fraction, specify the component (and in Stream Property analysis, the substream).

Specify values for the manipulated variable. You can specify a range of values and either an increment or number of values, or you can specify a list of specific values.

Specify the parametric variable. One curve will be generated on the plot for each value of this variable. This must be a state variable and not the same as the manipulated variable.

Specify values for the parametric variable.

If you selected a component flow or fraction as the manipulated variable, specify another fixed state variable:

In Mixture analysis, the Fixed state variable is specified in the Parametric variable frame.

In Stream property analysis, select the two fixed variables for the flash. One of these must be the parametric variable. The other will be the fixed state variable.

For Mixture analysis only, specify valid phases for the flash calculation. You can also choose not to perform flash calculations. In this case, properties are calculated for a single-phase mixture. Be sure that any Property Set properties are set to be calculated for appropriate phases if you do not perform flash calculations, because the analysis will attempt to calculate them for every phase they apply to if you do not specify phases. This can result in property errors for missing parameters, etc., if inappropriate phases are selected (i.e. solid phase for vapor-liquid components). For Stream property analysis, the valid phases applied to the stream are used.

You can also optionally specify the property method, Henry components, Chemistry, true or apparent component approach, and the maximum iterations, error tolerance, convergence algorithm, and retention option used in flashes. These default to the global property settings if you do not set them. See Flash Convergence Algorithms for more information about the converge algorithms.

Click Run Analysis. A plot will appear in a new window. The tabulated results will appear on the Results sheet for this analysis.

 Generic Analysis
See Also

Example of Using a Generic Property Analysis to Study Rigorous 3-Phase Flash Behavior

Use the Analysis | Generic form to generate tables of properties of either:

Multi-phase mixtures (for example, vapor and liquid) resulting from flash calculations

Liquid-only mixtures with chemistry which can be evaluated in flash calculations

Single-phase mixtures without flash calculations

The generic type of Property Analysis is the most flexible.

To generate a generic Property Analysis:

On the Analysis Object Manager, click New, and in the Select Type field, choose GENERIC, then click OK.

On the System sheet of the Analysis | Generic | Input form, click one of the options in the Generate frame to specify whether you want to generate properties at points along a flash curve for a multi-phase mixture resulting from flash calculations, or at points for single-phase mixtures without flash calculations.

Click either Points along a flash curve or Point(s) without flash.

In Aspen Plus, if results are present, choose either to Specify Component Flow or Reference Flowsheet Stream. If there are no results, you can only specify component flow.

To specify component flow, enter the flowrates of your system. You can enter the component flow rates in the mole, mass or standard liquid volume basis. To exclude a component from the calculation, leave the Flow field blank for that component.

To reference a flowsheet stream, enter the Stream ID.

If you choose to generate points along a flash curve:

When referencing a flowsheet stream, you can optionally specify the type of flash for the flowsheet stream, in the Flash Type list (see Notes in step 6.)

When specifying component flow, specify the valid phases for flash calculations in the Valid Phases list. Choices are Vapor-Liquid, Vapor-Liquid-Liquid, Vapor-Liquid-FreeWater, or Vapor-Liquid-DirtyWater. The default is Vapor-Liquid.

Optionally set the maximum iterations, error tolerance, convergence algorithm, and retention option used in flashes. See Flash Convergence Algorithms for more information about the converge algorithms.

Click the Variable sheet.

On the Variable sheet, specify the independent variables and their values to be used in calculations.

Notes:

If a stream is referenced on the System sheet, you must either:

Vary two of temperature, pressure, vapor fraction, and duty
– or –

Specify Flash Type on the System sheet

If Flash Type is specified, any varied state variable must be consistent with that specification. Unspecified state variables default to the stream values. The number of valid phases is determined by the type of calculation performed to generate the referenced stream.

If a stream is not referenced, you must either vary or specify on this form two of temperature, pressure, and vapor fraction.

You can define values for a varied variable by specifying either:

A list of values
– or –

Upper and lower limits for the variable and either the number of points or the increment size.

If a mole, mass, or standard volume fraction is varied, no other type of composition variable can be varied. For example, if a mole fraction is varied, a mass fraction cannot also be varied.

Click the Tabulate sheet.

On the Tabulate sheet, specify the Property Set(s) that contain properties you want to tabulate. To add a Property Set to the Selected Property Sets list, select it from the Available Property Sets list, and click >. To select all available Property Sets, click >>. Click < or << to remove items from the Selected Property Sets list. To create a new Property Set, click New. Optionally you can click Table specifications to enter a heading, change the precision of the results, or specify the width of the tables generated in the report file.

Further optional specifications include:

Using the Properties sheet to change default property methods used to generate the generic Property Analysis.

Using the Diagnostics sheet to set how much information you receive about warnings and errors from calculations.

Results for the generic Analysis can be viewed on the Analysis | Generic | Results form. For more information on Analysis results see Examining Property Analysis Results.

Example of Using a Generic Property Analysis to Study Rigorous 3-Phase Flash Behavior
Generate a table of properties at four pressures, using rigorous isothermal three phase flash calculations. Tabulate vapor fraction, liquid-liquid ratio (beta), component mass fractions, and component flows for each of the three phases separately, and for the combined liquid phases.

image\help0232.gif

image\help0233.gif

image\help0234.gif

image\help0235.gif

The following two screens shows the property set, LIST-4, that defines the properties to be tabulated.

image\help0236.gif

image\help0237.gif

Tabular results:

image\help0238.gif

To generate a plot of these results, use the Plot group on the Home tab of the ribbon to specify the x-axis and y-axis variables and display the plot.

Pressure-Temperature Envelopes
See Also

Example of Using Forms to Generate a Pressure-Temperature Envelope

Use the PT-Envelope Property Analysis type to generate pressure-temperature envelopes. These tables are parametric, consisting of one curve for each vapor fraction, through the critical point, and its complementary vapor fraction. For example, the complementary branch for a vapor fraction of 0.75 is 0.25.

You can generate PT-Envelopes using any property method except electrolyte property methods such as ELECNRTL, but equation-of-state methods are recommended. PT-Envelopes generated from activity coefficient-based and other non-equation-of-state property methods will not pass through the critical point. Instead there will be separate curves for each vapor fraction and its complementary branch.

To generate a PT-Envelope using forms:

In the Analysis object manager, click New. In the Select Type field, choose type PTENVELOPE and click OK.

On the Analysis | PTEnvelope | Input | System sheet, choose either to Specify Component Flow or Reference Flowsheet Stream. In Aspen Properties, or if you generate the analysis from the Properties environment of Aspen Plus, you can only specify component flow.

To specify component flow, enter the flow rates of your system on the System sheet.

To reference a flowsheet stream, enter the Stream ID.

Specify the vapor fractions for which tables will be generated. By default, the Aspen Physical Property System generates the dew and bubble point curves (vapor fraction = 1 and 0, respectively.) You can specify additional vapor fractions. The Aspen Physical Property System generates one curve for each vapor fraction, through the critical point, and its complementary vapor fraction. For example, if you specify a vapor fraction of 0.25, the Aspen Physical Property System will generate one curve for the 0.25 and 0.75 vapor fraction branches

You can also specify these options:

Valid phases (vapor-liquid or vapor-liquid-liquid)
Method (standard or density marching method)
Maximum number of points (if you get incomplete curves, try increasing the number of points)

Temperature or pressure of the first point (if the flash at this condition fails, a lower temperature or higher pressure may be used)

Maximum density step (for the density marching method)
Optional termination criteria, which apply after the curve passes through the mixture critical point. For the standard method, this is the reduced temperature (temperature divided by critical pressure). For the density marching method, you can specify minimum and maximum temperature and pressure limits.

Further optional specifications include:

Using the Tabulate sheet to specify properties to calculate in addition to the default temperature and pressure tabulations. Specify any additional properties by adding Property Set IDs to the Selected Property Sets list. To add a Property Set to the Selected Property Sets list, select it from the Available Property Sets list, and click >. To select all available Property Sets, click >>. Click < or << to remove items from the Selected Property Sets list. To create a new Property Set, click New. You can also click Table specifications to enter a heading, change the precision of the results, or specify the width of the tables generated in the Report file.

Using the Properties sheet to change default property methods used to generate the PT envelope.

Using the Diagnostics sheet to set how much information you receive about warnings and errors from calculations.

Results for the PT-Envelope can be viewed on the Analysis | PTEnvelope | Results form. For more information on Analysis results see Examining Property Analysis Results.

PTEnvelope Methods
There are two methods available for PTEnvelope analysis.

The standard method starts calculations from a low pressure and moves up to the critical point marching along a constant vapor fraction branch (dew, bubble, or intermediate vapor fraction). This method supports only vapor-liquid calculations and may fail to close the phase envelope when approaching the critical point, in particular with systems which exhibit multiple stationary points.

The density marching method (Venkatarathnam, 2014) makes use of the density of one phase as the independent variable along which it computes the saturation point, and thus the temperature and pressure. This method can march from low density (vapor) through the critical point to high density (liquid), covering the whole PT space without the computational difficulties around the critical point which the standard method may encounter. However, this method may require more points than the standard method to draw the entire curves,

Reference

G. Venkatarathnam, “Density Marching Method for Calculating Phase Envelopes”, Ind. Eng. Chem. Res. 2014, 53, 3723−3730.

Residue Curves
See Also

Generating Residue Curves

Search the Knowledge Center for information on:

Residue Curves: Understand Two Component Separations

Residue Curves (or maps) plot the composition trajectories of a ternary mixture undergoing distillation at total reflux. You can use them to visualize the presence of azeotropes and the constraints azeotropes impose on the degree of separation. Use Residue Curves to predict feasible splits, select entrainers, and analyze potential column operability problems (Doherty, 1978 and Wahnschaft, 1992).

Use Residue Curves to predict feasible splits, select entrainers, and analyze potential column operability problems.

Use Residue Curves with nonideal chemical systems, and property methods that represent such systems. Examples are activity-coefficient-based property methods, such as NRTL, Wilson, UNIQUAC, and UNIFAC.

Warning: Do not use electrolyte property methods.

Example of Generating a Residue Map
Generate a residue map for the ternary system ethanol-water-ethyl acetate, at 1 atm, using the NRTL property method.

image\help0226.gif

Tabular results form:

image\help0227.gif

Plotted results:

image\help0228.gif

image\help0227.gif

Ternary Analysis
Ternary diagrams plot the phase envelope and azeotropes of a three-component system on a triangular graph. To generate a ternary diagram using the interactive Analysis Ternary command:

Ensure that the components and property method you want to use for the analysis have been selected on the Components and Properties forms.

In the Properties environment, in the navigation pane, click Analysis.

Click New and select type TERNARY.

On the Ternary Map sheet, specify which components and property method you want to use for the analysis. Optionally you can specify temperature, pressure, valid phases, and number of tie lines.

Click Run Analysis. A ternary plot appears. You can also visit the Results form to see the data plotted.

Note: Ternary analysis is only for two-liquid systems. If no liquid-liquid split is detected then an error will be reported instead of the plot.

Note: Ternary analysis is not designed to work with polymer components (polymer, oligomer, and segment component types).

Estimating Property Parameters
See Also

Required Information for Parameter Estimation

Using Estimated Parameters

Search the Knowledge Center for information on:

Property Estimation: Estimate Missing Parameters

The Aspen Physical Property System stores physical property parameters in databanks for a large number of components. If a required parameter is not in any Aspen Physical Property System databank, it can be:

Entered directly

Estimated using Property Estimation

Regressed from experimental data using Data Regression

Estimated using the NIST Thermo Data Engine (TDE)

About Property Estimation
See Also

Defining molecular structure

Estimating parameters

Using experimental data to improve estimated parameters

Comparing estimated parameters for components

Examining parameter estimation results

Search the Knowledge Center for information on:

Property Estimation: Estimate Missing Parameters

You can perform property estimation on a standalone basis or in conjunction with other calculations. When other calculations are performed, the Aspen Physical Property System estimates properties first. See these tables for a list of the properties it can estimate.

Using Property Estimation in Aspen Plus

In Aspen Plus you can perform property estimation on a standalone basis by clicking Estimation in the Run Mode group of the Home tab of the ribbon in the Properties environment, and running in that environment.

Using Values Estimated by Property Estimation

When performing property estimation in conjunction with other calculations, it is important to understand which parameters will be used if a parameter is available from multiple sources.

If you select Estimate All Missing Parameters on the Estimation | Input form, the Aspen Physical Property System will estimate and use all missing parameters that are required in the calculations. Parameters that are estimated, but are not missing, will not be used in the calculations.

If you selectively specify the estimation of an individual parameter that is required by the calculation, this estimated parameter will be used regardless of whether another value is available in a databank or on a Methods | Parameters input form.

Using the NIST ThermoData Engine (TDE)

NIST TDE provides more powerful estimation capabilities. See its help for more information.

What Property Parameters Can the Aspen Physical Property System Estimate?
Property Estimation in the Aspen Physical Property System can estimate many of the property parameters required by physical property models, including:

Pure component thermodynamic and transport property model parameters

Binary parameters for the Wilson, NRTL, and UNIQUAC activity coefficient models

The following tables list the property parameters the Aspen Physical Property System can estimate.

Property Names and Estimation Methods for Pure Component Constants

Structure indicates that molecular structure or functional groups must be defined using the Components | Molecular Structure forms. When another parameter is required, such as TB, it can come from a databank or from another estimation method. Or you can enter it on a Methods | Parameters form.

Description

Parameter

Method

Information Required

Molecular weight

MW

FORMULA

Structure

Normal boiling point

TB

JOBACK
OGATA-TSUCHIDA
GANI
MANI

Structure
Structure
Structure
TC, PC, Vapor pressure data

Critical temperature

TC

JOBACK
LYDERSEN
FEDORS
AMBROSE
SIMPLE
GANI
MANI

Structure, TB
Structure, TB
Structure
Structure, TB
MW, TB
Structure
Vapor pressure data

Critical pressure

PC

JOBACK
LYDERSEN
AMBROSE
GANI

Structure
Structure, MW
Structure, MW
Structure

Critical volume

VC

JOBACK
LYDERSEN
AMBROSE
RIEDEL
FEDORS
GANI

Structure
Structure
Structure
TB, TC, PC
Structure
Structure

Critical compressibility factor

ZC

DEFINITION

TC, PC, VC

Ideal gas heat of formation at 298.15 K

DHFORM

BENSON
JOBACK
BENSONR8
GANI

Structure
Structure
Structure
Structure

Ideal gas Gibbs free energy of formation at 298.15 K

DGFORM

JOBACK
BENSON
GANI

Structure
Structure
Structure

Acentric factor

OMEGA

DEFINITION
LEE-KESLER

TC, PC, PL
TB, TC, PC

Solubility parameter

DELTA

DEFINITION

TB, TC, PC, DHVL, VL

UNIQUAC R

UNIQUAC R

BONDI

Structure

UNIQUAC Q

UNIQUAC Q

BONDI

Structure

Parachor

PARC

PARACHOR

Structure

Solid enthalpy of formation at 298.15 K

DHSFRM

MOSTAFA

Structure

Solid Gibbs energy of formation at 298.15 K

DGSFRM

MOSTAFA

Structure

Aqueous infinite dilution Gibbs energy of formation for the Helgeson model

DGAQHG

AQU-DATA
THERMO
AQU-EST1
AQU-EST2

DGAQFM
DGAQFM, S025C
DGAQFM
S025C

Aqueous infinite dilution enthalpy of formation for the Helgeson model

DHAQHG

AQU-DATA
THERMO
AQU-EST1
AQU-EST2

DGAQFM
DGAQFM, S025C
DGAQFM
S025C

Entropy at 298.15 K for the Helgeson model

S25HG

AQU-DATA
THERMO
AQU-EST1
AQU-EST2

S025C
DGAQFM, DHAQFM
DGAQFM
DHAQFM

Helgeson OMEGA heat capacity coefficient

OMEGHG

HELGESON

S25HG, CHARGE

Property Names and Estimation Methods for Temperature-Dependent Properties

Structure indicates that molecular structure or functional groups must be defined using the Components | Molecular Structure forms. Data indicates that correlation parameters are determined directly from experimental data you enter on Data | Pure-Comp forms. When another parameter is required, such as TB, it can come from a databank or from another estimation method. Or you can enter it on a Methods | Parameters form.

Description

Parameter

Method

Information Required

Ideal gas heat capacity

CPIG

DATA
BENSON
JOBACK
BENSONR8

Ideal gas heat capacity data
Structure
Structure
Structure

Vapor pressure

PL

DATA
RIEDEL
LI-MA
MANI

Vapor pressure data
TB, TC, PC
Structure, TB
TC, PC, Vapor pressure data

Enthalpy of vaporization

DHVL

DATA
DEFINITION
VETERE
GANI
DUCROS
LI-MA

Heat of vaporization data
TC, PC, PL
MW, TB
Structure
Structure
Structure, TB

Liquid molar volume

VL

DATA
GUNN-YAMADA
LEBAS

Liquid molar volume data
TC, PC, OMEGA
Structure

Liquid viscosity

MUL

DATA
ORRICK-ERBAR
LETSOU-STIEL

Liquid viscosity data
Structure, MW, VL, TC, PC
MW, TC, PC, OMEGA

Vapor viscosity

MUV

DATA
REICHENBERG

Vapor viscosity data
Structure, MW, TC, PC

Liquid thermal conductivity

KL

DATA
SATO-RIEDEL

Liquid thermal conductivity data
MW, TB, TC

Vapor thermal conductivity

KV

DATA

Vapor thermal conductivity data

Surface tension

SIGMA

DATA
BROCK-BIRD
MCLEOD-SUGDEN

Surface tension data
TB, TC, PC
TB, TC, PC, VL, PARC

Solid heat capacity

CPS

DATA
MOSTAFA

Solid heat capacity data
Structure

Helgeson C heat capacity coefficient

CHGPAR

HG-AQU
HG-CRIS
HG-EST

OMEGHG, CPAQ0
OMEGHG, S25HG, CHARGE, IONTYP
OMEGHG, S25HG

Liquid heat capacity

CPL

DATA
RUZICKA

Liquid heat capacity data
Structure

Property Names and Estimation Methods for Binary Parameters

Except in a standalone Aspen Plus Property Estimation run, the Aspen Physical Property System estimates missing binary parameters only if you request them on the Estimation | Input | Binary sheet. If infinite dilution activity coefficients are estimated or supplied on the Properties Data Mixture form at only one temperature, then the parameters in brackets [ ] are set to zero.

Structure indicates that molecular structure or functional groups must be defined using the Components | Molecular Structure forms. Data indicates that correlation parameters are determined directly from experimental data you enter on Data | Mixture forms. When another parameter is required, such as GMUQR, it can come from a databank or from another estimation method. Or you can enter it on a Methods | Parameters form.

Description

Parameter

Method

Information Required

Wilson parameters

WILSON/2
[WILSON/1]

DATA
UNIFAC
UNIF-LL
UNIF- LBY
UNIF- DMD

Infinite dilution activity coefficient data
Structure
Structure
Structure
Structure

NRTL parameters

NRTL/2
[NRTL/1]

DATA
UNIFAC
UNIF-LL
UNIF- LBY
UNIF- DMD

Infinite dilution activity coefficient data
Structure
Structure
Structure
Structure

UNIQUAC parameters

UNIQ/2
[UNIQ/1]

DATA
UNIFAC
UNIF-LL
UNIF- LBY
UNIF- DMD

Infinite dilution activity coefficient data
Structure, GMUQR, GMUQQ
Structure, GMUQR, GMUQQ
Structure, GMUQR, GMUQQ
Structure, GMUQR, GMUQQ

SRK, SRKKD parameters

SRKKIJ/1
[SRKKIJ/2]

DATA
UNIFAC
UNIF-LL
UNIF-LBY
UNIF-DMD
ASPEN

Data
Structure
Structure
Structure
Structure
Vc, and only light gases and hydrocarbons are present in system

Property Names and Estimation Methods for UNIFAC Group Parameters

Structure indicates that molecular structure or functional groups must be defined using the Components | Molecular Structure | Functional Group sheet. Use only the method indicated.

Description

Parameter

Method

Information Required

UNIFAC R

UNIFACR

BONDI

Structure

UNIFAC Q

UNIFACQ

BONDI

Structure

Lyngby UNIFAC R

UNIFLR

BONDI

Structure

Lyngby UNIFAC Q

UNIFLQ

BONDI

Structure

Dortmund UNIFAC R

UNIFDR

BONDI

Structure

Dortmund UNIFAC Q

UNIFDQ

BONDI

Structure

Required Information for Parameter Estimation
The minimum information required for parameter estimation is:

Normal boiling point temperature (TB)

Molecular weight (MW)

Molecular structure, preferably using the general method or by drawing the structure

Property Estimation uses normal boiling point and molecular weight to estimate many parameters. You can greatly reduce the propagation of errors in estimating other parameters by using the experimental value of TB. If you do not supply TB and MW but you enter the general molecular structure, Property Estimation can estimate TB and MW.

Note: Entering the segment composition for oligomer components is not adequate; you must still enter the molecular structure on the Components | Molecular Structure forms.

To obtain the best possible estimates for all parameters, enter all the experimental data that is available.

You can enter molecular structure in any of three ways:

By the general method (entering atoms and their bonds on the General sheet)

By specifying functional groups (choosing a functional group method and listing the functional groups on the Functional Group sheet)

By drawing the structure using the Structure sheet

Setting Up a Regression
To set up a Data Regression:

Start Aspen Plus or Aspen Properties and create a new run from a template.

On the Home tab of the ribbon, in the Run Mode group, click Regression.

Define components on the Components | Specifications | Selection sheet.

Select a property method on the Methods | Specifications | Global sheet.

Enter or estimate any supplemental property parameters on the Methods | Parameters and Estimation forms.

Enter experimental data on the Data forms.

Specify the regression case on the Regression | Input form. See Formulating a Regression Case.

Selecting a Property Method
You must select a property method that uses the property model for which you want to determine parameters.

For example, to fit UNIQUAC binary parameters, choose one of the following property methods:

UNIQUAC

UNIQ-HOC

UNIQ-NTH

UNIQ-RK

Choose the same property method you plan to use in property calculations or in the property package. For example, if you want to use UNIQUAC with the Hayden-O'Connell vapor phase association property method (UNIQ-HOC) in your subsequent calculations, you must also use the UNIQ-HOC property method in performing your data regression.

Note: You cannot regress parameters such as WATSOL and HCSOL associated with the free-water and dirty-water flash options. These flash options are not available in data regression.

There is one important exception. Do not use property methods ending in -2 in Data Regression, even when fitting LLE data. For example, to determine parameters to use with the UNIQ-2 property method, use the UNIQUAC property method during data regression. The resultant UNIQUAC binary parameters can be used in the UNIQ-2 property method.

Entering Supplemental Parameters
If any component being regressed is not in the Aspen Physical Property System databank, do one of the following:

Enter the required parameters on Methods | Parameters forms

Estimate the parameters using the Estimation forms

For example, suppose you are regressing binary VLE data using the WILSON property method and a component is not in the databank. You must enter or estimate the following parameters: Molecular weight(MW), critical temperature(Tc), critical pressure(Pc), critical compressibility factor(Zc), heat of vaporization(DHVLWT), Vapor pressure(PLXANT), and ideal gas heat capacity(CPIG).

You can also enter values of the parameters to be determined on a Methods | Parameters form. Data Regression will use these values as initial guesses.

Fitting Pure Component Data
To fit pure component temperature-dependent property data, such as vapor pressure data:

Use the Data | PURE-COMP form to enter the experimental data as a function of temperature.

Use the Regression | Input form to specify the property method, experimental data, and parameters to be regressed.

Entering Pure Component Data
Use the Data | PURE-COMP form to enter experimental data for pure component properties as a function of temperature. For example, you can enter vapor pressure versus temperature data.

To enter pure component data:

In the navigation pane, click Data.

To create a new Data ID, click New on the Data Object Manager. In the Create New ID dialog box, enter an ID or accept the default. Choose PURE-COMP in the Select Type list box, and click OK.

To edit an existing ID, select the Data ID from the Object Manager, and click Edit.

On the Setup sheet, select the type of property data in the Property list. Prompts describe each property. You can limit the types of property data under the Property list by selecting a property category in the Category list. The default category is All.

In the Component list, specify the component for which you have experimental data.

In the Temperature and Pressure fields, if active, specify a constant temperature or pressure. A value entered in these fields applies to all data points on the Data sheet, and simplifies the task of entering isothermal or isobaric data.

Click the Data tab.

On the Data sheet, enter the experimental data in the appropriate columns.

Enter standard deviation values for the property data if available or accept the system defaults.

If you have another type of data to enter, return to step 2 and create another Data ID for it. You can regress multiple types of data in the same regression.

If you want the Aspen Physical Property System to ignore some data or standard deviations that have already been entered, in the Usage column on the row, select IGNORE. The Aspen Physical Property System will not use the data point in any subsequent regressions.

Fitting Phase Equilibrium and Mixture Data
To fit phase equilibrium and mixture data, such as vapor-liquid equilibrium and mixture density data:

Use the Data | MIXTURE form to enter experimental data.

Use the Regression | Input form to specify the property method, experimental data, and the binary or pair parameters to be regressed. See Formulating a Regression Case.

Entering Phase Equilibrium and Mixture Data
See Also

Data Types

Entering TPZ and TPF Data

Use the Data | MIXTURE form to enter experimental data for phase equilibrium and mixture properties as a function of temperature, pressure, and composition. For example, you can enter Txy vapor-liquid equilibrium data for two components.

The procedure for TPZ or TPF data is slightly different.

To enter phase equilibrium and mixture data:

In the navigation pane, click Data.

To create a new Data ID, click New on the Data Object Manager. In the Create New ID dialog box, enter an ID or accept the default. Choose MIXTURE in the Select Type field, and click OK.

To edit an existing ID, select the Data ID from the Object Manager, and click Edit.

On the Setup sheet, choose the type of property data in the Data Type field, from the choices in these tables. You can limit the types of property data under the Data Type field by selecting a property category in the Category field. The default category is All.

Select the components from the Available Components list, and use the right arrow button to move them to the Selected Components list.

In the Temperature and Pressure fields, if active, specify a constant temperature or pressure. A value entered in these fields applies to all data points.

In the Basis list, specify the basis of the composition data. You can enter composition data as mole fraction, mass fraction, mole percent, or mass percent. Mole fraction is the default.

Click the Data tab.

On the Data sheet, enter the experimental data in the appropriate columns.

Note: When you enter data for mixtures of 3 or more components, do not enter points where one or more components have zero composition. The regression system is able to handle these better when they are entered in a separate data set (a separate Data ID as created in step 2 above) listing only the non-zero components. You can enter the endpoints on binary curves in the same data set as the binary data, though. This may mean that for a ternary system A-B-C, you enter one data set for A-B-C data and three binary sets for A-B, A-C, and B-C data, provided you have such data. You can include all the data sets in one regression.

Note: When you enter data for liquid-liquid equilibrium (TXX, PXX, TPXX, and TPXXY data types), do not enter data points with values for only one of the two liquid phases. Data regression requires values for both liquid phases. If there really is a second liquid phase, estimate its composition; you can use a larger standard deviation for the estimates to reflect the greater uncertainty of this data. If there is not a second liquid phase, use a separate data set of a different type (such as TPXY) for this data.

Enter standard deviations for the property data or accept the system defaults.

If you have another type of data to enter, return to step 2 and create another Data ID for it. You can regress multiple types of data in the same regression.

If you want the Aspen Physical Property System to ignore some data or standard deviations that have already been entered, go to the Usage field, click on the row, and select Ignore. The Aspen Physical Property System will not use the data point in any subsequent regressions.

Entering TPZ and TPF Data
Use the Data | MIXTURE form to enter experimental TPZ and TPF data. These data types are generated by differential ebulliometry and differential static-cell apparatus.

TPZ data consists of temperature T, pressure P, and total composition (mole fraction or mass fraction) Z for each component in the equilibrium mixture. TPF data consists of temperature T, pressure P, and total charge (moles or mass) F for each component in the equilibrium mixture.

TPZ data is generated by differential ebulliometry and TPF data by ebulliometry or static-cell apparatus. Provided that vapor and liquid hold-ups in the system are rigorously accounted for, only T, P, and total composition of the equilibrium mixture need to be measured. The compositions of the individual phases do not need to be measured. This data, combined with a characterization parameter for the equipment, can be used with an equation for excess Gibbs energy to derive the liquid and vapor compositions.

To enter TPZ or TPF data:

In the navigation pane, click Data.

To create a new Data ID, click New on the Data Object Manager. In the Create New ID dialog box, enter an ID or accept the default. Choose MIXTURE in the Select Type field, and click OK.

To edit an existing ID, select the Data ID from the Object Manager, and click Edit.

On the Setup sheet, choose the data type TPZ or TPF in the Data Type field. You can limit the types of property data under the Data Type field by selecting Phase Equilibrium category in the Category field.

Select the components from the Available Components list, and use the right arrow button to move them to the Selected Components list.

In the Basis field, specify the basis of the composition data.

For TPZ data you can enter composition data of the feed charge to the equilibrium cell as mole fraction, mass fraction, mole percent, or mass percent. Mole fraction is the default.

For TPF data you can enter composition data of the feed charge to the equilibrium cell on the mole or mass basis. Mole basis is the default. You should also specify the unit of the total charge data (such as kmol) in the Units field. The default unit is the global unit set.

Click the Data tab.

On the Data sheet, enter the experimental data in the appropriate columns.

Enter standard deviations for the property data or accept the system defaults.

Click the Measurement Method sheet.

In the Measurement Method field, specify the measurement method (Ebulliometry method or Static method). For TPF, only the Static method is available.

Enter the value of one equipment characterization parameter for the equilibrium cell in the Equipment Constant area.

For Ebulliometry method, enter either Coefficient of evaporation or Ebulliometer constant.

For Static method, enter Static-cell constant for TPZ data or Static-cell volume for TPF data.

If you have another type of data to enter, return to step 2 and create another Data ID for it. You can regress multiple types of data in the same regression.

References

Olson, Fluid Phase Equilibria, Volume 52, pp. 209-218 (1989).

Rogalski and Malanowski, Fluid Phase Equilibria, Volume 5, pp. 97-112 (1980).

Dohnal and Novotná, Coll. Czech. Chem. Commun., Volume 51, pp. 1393-1402 (1986).

Vrbka and Dohnal, Fluid Phase Equilibria, Volume 78, pp. 229-237 (1992).

J. D. Raal, Characterization of Differential Ebulliometers for Measuring Activity Coefficients, AIChE J., 46, 210-220 (2000).

J. D. Raal and D. Ramjugernath, Rigorous Characterization of Static and Dynamic Apparatus for Measuring Limiting Activity Coefficients, Fluid Phase Equilibria, 187-188, 473-487 (2001).

Gillespie, Cunningham and Wilson, AIChE Symposium Series, Phase Equlibrium Measurements(DIPPR), No. 244, Vol. 81, pp. 27-40.

Data Types for Regression of Mixtures
Vapor-Liquid Equilibrium(VLE) Data

Select

For this type of data

TXY

Isobaric VLE

PXY

Isothermal VLE

TPXY

T-P-x-y VLE

ALPHA

Relative volatility. Defined with respect to the first component listed on the Setup sheet. Alpha is defined as



If an x or y value is missing in the data, it is computed to match the specified alpha.

TPZ

T-P-combined all-phase mole/mass fraction VLE. Used with ebulliometry and static-cell apparatus.

TPF

T-P-combined all-phase mole/mass VLE. Used with static-cell apparatus.

x denotes liquid composition; y denotes vapor composition.

Liquid-Liquid Equilibrium(LLE) Data

Select

For this type of data

TXX

T-x-x

PXX

P-x-x

TPXX

T-P-x-x

TPXXY

T-P-x-x-y

Use these data types with property methods that can accurately represent two liquid phases, such as the NRTL or UNIQUAC-based property methods; the ELECNRTL property method; or SR-POLAR, PRWS, PRMHV2, RKSWS, RKSMHV2, and PSRK equation-of-state property methods.

TPXXY is vapor-liquid-liquid equilibrium data.

Mixture Property Data

Select

For this type of data

CPLMX

Liquid heat capacity

CPVMX

Vapor heat capacity

CPSMX

Solid heat capacity

GLXS

Excess liquid Gibbs free energy

HLMX

Liquid enthalpy

HLXS

Excess liquid enthalpy

HVMX

Vapor enthalpy

HSMX

Solid enthalpy

KLMX

Liquid thermal conductivity

KVMX

Vapor thermal conductivity

KSMX

Solid thermal conductivity

MULMX

Liquid viscosity

MUVMX

Vapor viscosity

RHOLMX

Liquid mass density

RHOVMX

Vapor mass density

RHOSMX

Solid mass density

SIGLMX

Liquid surface tension

USER-X

User property versus liquid composition

USER-Y

User property versus vapor composition

VLMX

Liquid molar volume

VVMX

Vapor molar volume

VSMX

Solid molar volume

Partial Property Data (Data for Components in a Mixture)

Select

For this type of data

DLMX

Liquid diffusion coefficients

DVMX

Vapor diffusion coefficients

GAMMA

Liquid activity coefficients

GAMMAS

Solid activity coefficients

HENRY

Henry's constants

KLL

Liquid-liquid distribution coefficients (X2/X1)

KVL

Vapor-liquid K-values (Y/X)

USERI-X

User partial property versus liquid composition

USERI-Y

User partial property versus vapor composition

KLL data allows similar specifications to TPXX data, and KVL is similar to TPXY. However, these data types allow you to explicitly enter K-values in addition to liquid composition. The regression will try to minimize the difference between experimental and calculated K-values in addition to matching the compositions.

Data Types for Electrolyte Systems

Select

For this type of data

To

GAMMAM

Mean ionic activity coefficient †

Determine parameters for the electrolyte activity coefficient model

HLMX

Liquid molar enthalpy

Determine the temperature dependency of binary or pair parameters for the activity coefficient model ††

OSMOT

Osmotic coefficient

Determine parameters for the electrolyte activity coefficient model

PH

pH

Determine chemical equilibrium constants (use only the apparent component approach)

TPX, or TX

Salt solubility †††

Regress parameters for the electrolyte activity coefficient model and chemical equilibrium constants for precipitating salts. Obtain electrolyte-electrolyte pair parameters for the electrolyte NRTL model

TXY, PXY, or TPXY

Vapor liquid equilibrium

Regress electrolyte activity coefficient model parameters, Henry's constants, and chemical equilibrium constants

TXX, TPXX, or TPXXY

Liquid liquid equilibrium

Regress electrolyte activity coefficient model parameters and chemical equilibrium constants

VLMX

Liquid molar volume

Determine parameters for the Clarke density model

† You can enter only the molality scale mean ionic activity coefficient data of single electrolyte systems.

†† Use data at several temperatures to ensure accurate representation of heat of mixing.

††† Enter at saturation, for single or mixed electrolyte solutions. You must specify the salt precipitation reactions on the Chemistry form.

Example of Regressing Pitzer Ternary Parameters
The ternary parameters such as GMPTPS used with the Pitzer model cannot be entered normally on the Regression forms. It is still possible to regress them, but you must use Add-Input to configure them.

First, set up other aspects of the model, including the components and the data set on the Data form.

Create the Regression form, specify the PITZER method, the data set, and choose calculation type Evaluation. This allows the form to be considered complete even with no parameters specified.



From the Home tab of the ribbon, click Input. In the generated input, look for the CASE paragraph corresponding to your regression, such as the following for the example above:

CASE DR-1

    PROPERTIES PITZER TRUE-COMPS=YES

    DATA-GROUPS D-1

    CASE-OPTION REGRESSION=NO ANALYSIS=YES ANAL-RANGE=LIMIT

Copy this input and paste it into the Customize | Add-Input form.

Before the pasted input on the Add-Input form, add:

PARAMETERS

    BIPARAMETER <number> GMPTPS <cid1> <cid2> <cindex3>

Where:

number is the smallest positive parameter number not already used to identify a BIPARAMETER in the input file.

cid1 and cid2 are the IDs of the first two components identifying the parameter to be regressed.

cindex3 is the index, from the Components | Specification | Selection sheet, for the third component identifying the parameter to be regressed.

In the CASE paragraph on the Add-Input form, change REGRESSION=NO to REGRESSION=YES.

Insert a new line into the CASE paragraph reading:

    PARAMETERS BINARY=<number>

Where number is the same number used to identify the parameter in the BIPARAMETER sentence.

If everything else is correctly specified, input should be considered complete and you can run the regression. If you check the input for the final problem, you will see the original version of CASE DR-1 where you found it originally, and the following at the end of the input (if no other parameters are being regressed; the GMPTPS parameter to be regressed is for CL-, NA+, and K+; and K+ is the third component on the Components | Specification | Selection sheet):

PARAMETERS

    BIPARAMETER 1 GMPTPS CL- NA+ 3

 

CASE DR-1

    PROPERTIES PITZER TRUE-COMPS=YES

    DATA-GROUPS D-1

    PARAMETERS BINARY=1

    CASE-OPTION REGRESSION=YES ANALYSIS=YES ANAL-RANGE=LIMIT

    Generating Binary VLE and LLE Data
You can generate VLE and LLE data for a two-component system, using a specified property method. The Aspen Physical Property System can then use the generated data to regress parameters for another property method. With this feature you can convert parameters between different property models.

For example, you can generate VLE data using the UNIFAC predictive property method and use the generated data to determine the binary parameters for the WILSON property method.

To specify generation of binary VLE and LLE data:

In the navigation pane, click Data. The Data object manager appears.

To create a new Data ID, click New. In the Create New ID dialog box, enter an ID or accept the default. Choose MIXTURE in the Select Type list box, and click OK.

To edit an existing ID, select the Data ID from the object manager, and click Edit.

On the Setup sheet, choose the type of property data in the Data Type list box:

Select

To generate this data

TXY, PXY, or TPXY

VLE

TXX or TPXX

LLE

Note: Do not select the GEN-TPXY or GEN-TPXX data type

Select the components from the Available Components list and click the right arrow button to move them to the Selected Components list.

In the Temperature and Pressure fields, if active, specify a constant temperature or pressure at which the data will be generated.

Click the Data tab.

On the Data sheet, click the Generate Data button.

In the Generate Binary VLE or LLE Data dialog box, select a property method, and a Henry's Components ID and Chemistry ID, if applicable.

Click the Generate button.

The Data sheet displays the liquid phase compositions for which data are to be generated for the regression. When you run the regression, these parameters will be generated and displayed on the Regression | Results | Profiles sheet.

Formulating a Regression Case
See Also

Specifying Parameters to be Regressed

Regression Algorithm Options

Search the Knowledge Center for information on:

Property Regression: Match Your Model to Experimental or Plant Data

Use the Regression forms to formulate a regression case.

A regression case requires:

Experimental data

Parameters for regression

To formulate a regression case:

In the Properties environment, in the navigation pane, click Regression. If the Regression folder is not available, on the Home tab of the ribbon, in the Run Mode group, click Regression to make it available.

To create a new Regression ID, click New on the Regression Object Manager. In the Create New ID dialog box, enter an ID or accept the default, and click OK.

To edit an existing ID, select the Regression ID from the Object Manager, and click Edit.

In the Property options frame of the Regression | Input | Setup sheet, specify property Method, Henry components ID, Chemistry ID, and whether to Use true components. The global properties specifications you entered on the Methods | Specifications | Global sheet are the defaults. You can select any property method already entered on the Methods | Specifications form.

At the bottom of the Setup sheet, use the Data set column to enter the Data set IDs for the experimental data to be regressed. To assign more weight to data sets, enter a value greater than 1 in the Weight column.

For each binary VLE data set referenced, you can choose whether you want a thermodynamic consistency test performed, using the Consistency check box. If you choose to perform a consistency test, you can use the Test Method list box to choose the type of consistency test. Also select whether you want to reject data sets that fail the consistency test, using the Reject data check box.

Click the Parameters tab.

Enter the Parameters to be regressed, according to the procedure in Specifying Parameters to be Regressed.

In many cases the Aspen Physical Property System will automatically complete the Regression | Input form based on the property method and Data sets you have specified. For example, suppose you select the NRTL property method and enter Txy data for a binary system. The Aspen Physical Property System completes the Regression Input form by:

Filling in the Data Set field

Specifying that the NRTL binary parameters are to be regressed

Specifying Parameters to be Regressed
In cases where the parameters to be regressed are not specified automatically, or when you want to modify the default parameters or add additional parameters, you can use the Regression Input Parameters sheet.

To specify parameters to be regressed:

In the Type field of the Regression | Input | Parameters sheet, select one:

Option

For

Parameter

Pure component parameter

Binary parameter

Binary parameter

Group parameter

UNIFAC group parameter

Group binary parameter

UNIFAC group binary parameter

Pair parameter

Electrolyte NRTL model pair parameter

Chemistry

Equilibrium constants for electrolyte chemistry

In the Name/Element list box, select the parameter names.

The prompt identifies parameters.

Enter the element number of the parameter in the field just to the right of the parameter name.

Enter the component(s) or UNIFAC group IDs in the Component/Group list boxes.

Note: When regressing GMELCN for an ion pair and a molecular component, specify the ion pair in the first box and the molecule in the second.

For each parameter, use the Usage list box to:

Specify

If you want the parameter to be

Regress

Used in the current regression case. Regress is the default.

Exclude

Excluded from the current regression case. The value in the Initial Value field is ignored. If the parameter is in the databank or has been entered on the Methods | Parameters forms, the Aspen Physical Property System uses this value in the property calculation during the regression.

Fix

Set to the fixed value given in the Initial Value field. You can fix a parameter to a given value in one case, then set it to another value in another case to study the effect on the fit. For example, you can fix the third element of the NRTL binary parameter (the nonrandomness factor) in another run to see which value gives the best results.

You can enter Initial Value, Lower Bound, Upper Bound, and Scale Factor for the parameter. Scale factors are used to normalize the parameters being regressed if they are of very different magnitudes. The scale factors should be set approximately inversely proportional to the values of the parameters.

Note: Data regression runs can only manipulate the first data set. Property methods which are set to use data sets other than the first cannot be used in data regression. You can copy parameters obtained through data regression into any other data set and then use that data set during simulation runs.

Regression Algorithm Options
The Regression | Input | Algorithm sheet provides several options for the manner in which the regression is calculated, including several different types of objective function.

The default objective function is the Maximum likelihood objective function. Maximum likelihood is a generalization of the least-squares method. In least-squares, the independent variables are assumed to be error-free. Errors in the dependent parameters are minimized by adjusting one or more model parameters.

Real-life problems are often not as neat as this. For example, in an experiment measuring phase equilibrium, the governing equation is:



T, P, x, and y are all measured and there can be measurement errors in all variables. In the maximum likelihood objective function, errors in all variables are considered. For the phase equilibrium example, the maximum likelihood objective function is:



Where:

Q

=

The objective function to be minimized by data regression

NDG

=

The number of data groups in the regression case

wn

=

The weight of data group n

NP

=

The number of points in data group n

NC

=

The number of components present in the data group

T, P, x, y

=

Temperature, pressure, liquid and vapor mole fractions

e

=

Estimated data

m

=

Measured data

i

=

Data for data point i

j

=

Fraction data for component j

σ	
=

Standard deviation of the indicated data. Note that if σ=0, the point is not included in the objective function, and the estimated value is set equal to the measured value. Different data points can have different standard deviation values.

The objective function is minimized by manipulating the physical property parameters identified in the regression case and manipulating the estimated value corresponding to each measurement. Minimization of Q is subject to the constraints of phase equilibrium:

Constraint	Status


Actual constraint, one per component at this data point.



Implicit constraint, will never be violated.



Implicit constraint, will never be violated.



Implicit constraint, will never be violated.

Liquid mole fractions sum to 1

Implicit constraint, will never be violated.

Vapor mole fractions sum to 1

Implicit constraint, will never be violated.

Occasionally, data regression will converge, but will report that the phase equilibrium constraints are not tightly converged. (The convergence tolerance can be adjusted on the Algorithm sheet.) Actual constraint values can be reported to the history file by setting the simulation diagnostic level to 6 or higher on the Diagnostics sheet or on the top-level Setup | Specifications | Diagnostics form. If the absolute constraint values are on the order of 10-5 or smaller, the results should be acceptable. Higher constraint values indicate that the regression results should not be trusted. Taking one or more of the following actions may lead to a better regression result:

Setting different initial guesses and limits for the regressed parameters

Evaluating the data for inconsistencies in data points with high constraint values

Confirming that the standard deviations are appropriate for data points with high constraint values

Adding additional parameters to be regressed

Other objective functions are available for different purposes:

This objective function

Is formed by

Maximum likelihood

All measured variables

Ordinary least squares

Pressure and vapor compositions for isothermal VLE data. Temperature and vapor compositions for isobaric VLE data

Barker's method

Pressure only

Modified Barker

Pressure and vapor compositions

Activity coefficients

Activity coefficients

Equilibrium constants

Equilibrium constants (K-values)

Relative volatility

Relative volatility defined relative to the first component

Transformations

In order to make different kinds of variables comparable for the purposes of data regression, some variables are transformed and the transformed variable values, rather than the original values, are used in the objective function. These transformations are proprietary.

Reference

J.A. Barker, "Determination of Activity Coefficients from Total Pressure Measurements," Aust. J. Chem., 6, p. 207-210, 1953.

Example of Specifying Parameters to be Regressed
In this example, you are trying to regress binary vapor pressure parameters for propane-propylene for the PR-BM property method using the Mathias-Copeman alpha function. You have PXY data (compositions of vapor and liquid phases in equilibrium at different pressures and the same temperature). However, this data appears shifted, and does not match the pure component vapor pressures. You want to use this to regress the binary parameter, to capture the mixture behavior, but keep the values you already have for the unary parameter in the alpha function which determines the pure component vapor pressures.

On the Components | Specifications | Selection sheet, specify the two components: PROPY-01 (PROPYLENE) and PROPANE (PROPANE).
On the Methods | Specifications | Global sheet, specify PR-BM as the Base method.

Review the help for Peng-Robinson Alpha Functions. The models we are using, ESPR and ESPR0, need to have the first option code specified as 6 to use the Mathias-Copeman alpha function. On the Methods | Selected Methods | PR-BM | Models sheet, with PR-BM selected as the Base property method at the top, click any of the instances of ESPR in the model name column, then click Option Codes, and change the first option code to 6. Click Close. Scroll down the list of models a bit to find ESPR0, click it, click Option Codes, and also set the first option code to 6 for this model.



Go to the Methods | Parameters | Pure Components | PRMCP-1 form (if necessary, create the form by going to the Methods | Parameters | Pure Components object manager, clicking New, clicking T-dependent correlation at the top, and opening Alpha functions for equations of state, then clicking PRMCP-1). Enter values for the first element of PRMCP: 0.56 for PROPY-01 and value 0.62 for PROPANE. (These values are only intended to demonstrate that you can regress these parameters without overwriting the existing USER values.)
On the top-level Data form, create a new data set of type MIXTURE.



On the Setup sheet, for Data Type choose PXY, click >> to move both components into Selected components, and specify 30 C as the constant Temperature.



Specify data as shown below:



On the Constraints sheet, specify that Vapor-Liquid phases are in equilibrium, and specify the two components.



Click the Regression folder in the navigation pane and create a new regression case. On the Setup form for that case, choose the data set you just created. The Method is already set to PR-BM if you have set it as the global property method, and the Calculation type defaults to Regression.



Specify the parameters to be regressed. These should be parameters which affect the calculations of properties which appear in the data set(s). See the help for the model(s) in the chosen property method if necessary. In this example, we choose to regress PRKBV, the binary parameter used in the standard quadratic mixing term of the Peng-Robinson model used in PR-BM. In addition, we want to regress PRMCP, the unary parameter used in the alpha function, since this parameter affects how the vapor pressure of the pure components is calculated, and the mixture calculation is based on these pure-component calculations. We are interested in regressing the first element of each parameter, which is the main one, ignoring the other parameters which implement a temperature dependency to the parameter since we have data only at one temperature. Click the Parameters sheet, and specify these parameters as shown below:



Specify the properties to be reported. In this case, we want to see the bubble point pressure in the report. Click the Report sheet, click PBUB, and click > to move it into the Selected properties box.



You are now ready to run the regression. In the Home tab of the ribbon, click Run. The Data Regression Run Selection dialog box appears. Make sure the regression case you created is in the Run box, then click OK.

This dialog box will appear at the end of the run for each regressed parameter for which you already had a value. If you click Yes (or Yes to All) then the regressed values will become active for other calculations. Otherwise, the values will be available for you to select on the Methods | Parameters forms where they are specified but your original values will remain active. In this case, to keep our pure component vapor pressures we want to click No for both PRMCP values. If you also had a value for PRKBV for the propane-propylene binary, this dialog box will also appear for that parameter and you should click Yes on that one. If you did not already have a value for PRKBV, then the value from the regression is placed on the input form for PRKBV without asking you.



You can confirm this did not change the values for PRMCP and did change the value for PRKBV by visiting their forms under Methods | Parameters and confirming the values.
Click the Results form under the regression. This shows you the results of the regression, including how well the data fit the regression model, expressed using the standard deviation.



You can click the other tabs on the Results form to see additional data about the results. The Residual sheet shows you the errors in each data point; you can click the arrows at the top to switch between different data sets and/or properties. The Profiles sheet shows you the experimental and estimated values of each property in the regression, including the extra properties you selected on the Report sheet.

 About the NIST ThermoData Engine (TDE)
See Also

NIST TDE vs. NIST-TRC Databank

Using the NIST ThermoData Engine

NIST TDE Data Evaluation

The ThermoData Engine (TDE) is a thermodynamic data correlation, evaluation, and prediction tool provided with Aspen Plus and Aspen Properties through a long-term collaboration agreement with the National Institute of Standards and Technology (NIST).

The purpose of the ThermoData Engine software is to provide critically evaluated thermodynamic and transport property data based on the principles of dynamic data evaluation.

Critical evaluation is based on:

Published experimental data stored in a program database

Predicted values based on molecular structure and corresponding-states methods

User supplied data, if any

The primary focus of the current version is pure organic compounds comprised of the elements: C, H, N, O, F, Cl, Br, I, S, and P. The principles upon which the ThermoData Engine software are based are fully discussed in two articles.1,2 The first article describes the foundations of TDE while the second describes the extension of TDE for dynamic equation-of-state evaluation and online updating. Online updating is not available in Aspen Plus.

ThermoData Engine is the first software fully implementing all major principles of the concept of dynamic data evaluation formulated at NIST Thermodynamic Research Center (TRC). This concept requires the development of large electronic databases capable of storing essentially all raw experimental data known to date with detailed descriptions of relevant metadata and uncertainties. The combination of these databases with expert software designed primarily to generate recommended data based on available raw experimental data and their uncertainties leads to the possibility of producing data compilations automatically to order, forming a dynamic data infrastructure. The NIST TRC SOURCE data archival system currently containing more than 3 million experimental data points is used in conjunction with ThermoData Engine as a comprehensive storage facility for experimental thermophysical and thermochemical property data.  The SOURCE database is continually updated and is the source for the experimental database used with TDE.

The ThermoData Engine software incorporates all major stages of the concept implementation, including data retrieval, grouping, normalization, sorting, consistency enforcement, fitting, and prediction. The ThermoData Engine emphasizes enforcement of consistency between related properties (including those obtained from predictions), and incorporates a large variety of models for fitting properties. Predicted values are provided using the following set of Prediction Methods

The experimental database containing raw property data for a very large number of components (many thousands of compounds) is included automatically with Aspen Plus/Aspen Properties.  Results of the TDE evaluations – model parameters – can be saved to the Aspen Plus simulation and used in process calculations.  Experimental data can also be saved to the simulation and used with the Aspen Plus Data Regression System, if needed, for example, to fit other property models, or to fit data over limited temperature ranges that correspond to the process conditions of interest.

Note: AspenTech has provided the regression results for much of this data in the NIST-TRC databank. You can use this databank to gain most of the advantage of NIST without spending the time to run TDE dynamically. The models linked below (used in many property methods) provide access to these properties when the NIST-TRC databank is used. See NIST TDE vs. NIST-TRC Databank for more information.

Note: NIST TDE is a complementary technology of the existing Property Estimation System of Aspen Plus.  The two features work independently of each other and will co-exist. However, we anticipate that if new or improved estimation methods are added, they will be added in TDE in preference to the Property Estimation System.

The Aspen Plus - TDE interface covers the following properties of pure molecular compounds. Most of them can be estimated for new compounds based on molecular structure, using the methods listed below. Where multiple methods are listed for a property, they are ranked for accuracy for each compound class based on the data in the experimental database, and the highest-ranked one for the given structure is automatically selected.

For more information about TDE and its estimation methods, see the User Guide for TDE.

Single-Valued Properties

Property

Group Contribution Methods

Normal Boiling Point, K

Modified Joback3, Constantinou-Gani4, Marrero-Pardillo5, Nannoolal et al.16

Critical Temperature, K

Modified Joback3, Constantinou-Gani4, Marrero-Pardillo5, Wilson-Jasperson6, NIST/TRC QSPR method15

Critical Pressure, kPa

Modified Joback3, Constantinou-Gani4, Marrero-Pardillo5, Wilson-Jasperson6, NIST/TRC QSPR method15

Critical Density, kg m-3

Modified Joback3, Constantinou-Gani4, Marrero-Pardillo5

Triple-point Temperature, K (crystal-liquid-gas type transitions)

N/A

Enthalpy of formation, kJ mol-1

Benson10 (ideal gas), N/A (solid)

Gibbs free energy of formation, kJ mol-1

Benson10 (ideal gas), N/A (solid)

Temperature-Dependent Properties

Property

Corresponding States Methods

Vapor Pressure, kPa

Ambrose-Walton7

Density (saturated liquid and gas), kg m-3

Modified Rackett8, Riedel9 (liquid), N/A (gas)

Enthalpy of Vaporization, kJ mol-1

N/A

Heat Capacity (saturated liquid and gas), J K-1 mol-1

Modified Bondi10 (liquid), Modified Joback3 (gas)

Surface Tension, N/m

N/A

Viscosity (saturated liquid), Pa s

Sastri-Rao11 (combined corresponding states & group contribution method)

Thermal Conductivity (saturated liquid), W m-1 K-1

Chung-198412

Ideal-Gas Heat Capacity, J K-1 mol-1

Joback3  

Viscosity (gas), Pa s

Lucas13

Thermal Conductivity (gas), W m-1 K-1

Chung-198414

References

ThermoData Engine (TDE): Software Implementation of the Dynamic Data Evaluation Concept, J. Chem. Inf. Model., 45 (4), 816 -838, 2005. http://trc.nist.gov/TDEarticle.pdf

ThermoData Engine (TDE): Software Implementation of the Dynamic Data Evaluation Concept. 2. Equations of State on Demand and Dynamic Updates over the Web, J. Chem. Inf. Model., 47, 1713-1754, 2007. http://trc.nist.gov/TDEarticle2.pdf

K. G. Joback, R. C. Reid. Estimation of Pure-Component Properties from Group-Contributions. Chem. Eng. Comm.1987, 57, 233-243.

L. Constantinou, R. Gani. New Group-Contribution Method for Estimating Properties of Pure Compounds. AIChE J.1994, 40, 1697-1710.

J. Marrero-Morejon, E. Pardillo-Fontdevila. Estimation of Pure Compound Properties Using Group-Interaction Contributions. AIChE J.1999, 45, 615-621.

G. M. Wilson, L. V. Jasperson. Critical Constants Tc, Pc. Estimation Based on Zero, First, Second-Order Methods. AIChE Meeting, New Orleans, LA, 1996.

D. Ambrose, J. Walton. Vapor-Pressures up to Their Critical-Temperatures of Normal Alkanes and Alkanols. Pure Appl. Chem.1989, 61, 1395-1403.

T. Yamada, R. D. Gunn. Saturated Liquid Molar Volumes. The Rackett Equation. J. Chem. Eng. Data1973, 18, 234-236.

L. Riedel. Chem.-Ing.-Tech.1954, 26, 259-264. As modified in: J. L. Hales, R. Townsend. J. Chem. Thermodyn.1972, 4, 763-772.

B. E. Poling, J. M. Prausnitz, J. P. O'Connell. The Properties of Gases and Liquids, 5th ed.; McGraw-Hill: New York, 2001.

S. R. S. Sastri, K. K. Rao. A New Group Contribution Method for Predicting Viscosity of Organic Liquids. Chem. Eng. J. Bio. Eng. J.1992, 50, 9-25.

T. H. Chung, M. Ajlan, L. L. Lee, K. E. Starling, Generalized Multiparameter Correlation for Nonpolar and Polar Fluid Transport-Properties. Ind. Eng. Chem. Res.1988, 27, 671-679.

B. E. Poling, J. M. Prausnitz, J. P. O'Connell. The properties of Gases and Liquids, 5th ed.; McGraw-Hill: New York, 2001 (page 9.9 for low-pressure gas and page 9.35 Lucas model for high-pressure).

T. H. Chung, L. L. Lee, K. E. Starling. Applications of Kinetic Gas Theories and Multiparameter Correlation for Prediction of Dilute Gas Viscosity and Thermal-Conductivity. Ind. Eng. Chem. Fund.1984, 23, 8-13.

A. Kazakov, C.D. Muzny, V. Diky, R.D. Chirico, M. Frenkel. Predictive correlations based on large experimental datasets: Critical constants for pure compounds. Fluid Phase Equilib. 2010, 298, 131-142.
Y. Nannoolal, J. Rarey, D. Ramjugernath, W. Cordes. Estimation of pure component properties. Part 1. Estimation of the normal boiling point of non-electrolyte organic compounds via group contributions and group interactions. Fluid Phase Equilib. 2004, 226, 45-63.

 

 

 

 

 

 

 

 NIST TDE vs. NIST-TRC Databank
In addition to the raw property data available with NIST TDE, the Aspen Physical Property System includes the NIST-TRC databank, which contains parameters regressed with TDE for compounds for which a significant amount of data was available. NIST-TRC and associated property models available in Aspen Plus provide all that most users need to use property data from NIST in their simulations.

NIST TDE provides additional capabilities for users who need them:

You can perform dynamic data evaluation using the raw property database delivered with Aspen Physical Property System.

You can trace back to the original data sources.

You can save the data into Aspen Plus to perform additional data regressions beyond those automated by TDE, such as fitting to a different property model or fitting data over a different temperature range which corresponds to the process conditions of interest.

 Using the NIST Thermo Data Engine (TDE)
See Also

About the NIST ThermoData Engine (TDE)

User Defined Component Wizard

NIST TDE Data Evaluation Methodology

NIST TDE vs. NIST-TRC Databank

Using TDE Results

Search the Knowledge Center for information on:

Property Estimation: Estimate Missing Parameters

You can use the ThermoData Engine (TDE) from the National Institute of Standards and Technology (NIST) to estimate property parameters for any component or pair of components given one of the following for each component:

CAS number

Molecular structure. TDE can only use molecular structure saved in an MDL file (*.mol) or specified using the drawing tool in the User Defined Component Wizard. It cannot use molecular structure specified by atom and connectivity.

Note: Only MDL files of version V2000 are supported. The version V3000 files, sometimes called Extended MDL files, are not supported.

TDE has a variety of group contribution methods available to estimate pure component property parameters based on molecular structure. Based on TDE's large database of experimental data, these methods have been ranked for accuracy for different compound classes. For each pure component parameter estimated, the best method for which data is available is automatically selected.

To run TDE:

Specify the component(s) on the Components | Specifications | Selection sheet.

On the Home tab of the ribbon, in the Data Source group, click NIST. The NIST ThermoData Engine dialog box appears.

Choose Pure, Binary mixture, or Ternary mixture.

Select the component from the list in the dialog box. For binary mixture select a second component from the second list and for ternary mixture select a third component from the third list.

If the CAS number or molecular structure is specified for each component, then the Evaluate Now button (for pure component properties) or Retrieve Data button (for binary or ternary mixture properties) is enabled. Click it to estimate property parameters and retrieve experimental data.

Note: TDE takes a couple minutes to run on a typical computer.

OR

For pure component parameters, if neither CAS number nor molecular structure is specified, click Enter Additional Data. The User Defined Component Wizard appears, allowing you to specify the molecular structure and optionally other data about the component. You will be given the option to run TDE to estimate parameters after specifying data.

The following data can be sent to TDE:

Vapor pressure data

Liquid density

Ideal gas heat capacity

Normal boiling point

Molecular structure (if specified using a version V2000 MDL file or using the drawing tool in the User Defined Component Wizard)

Note: Data which you specify is combined with any data in NIST's experimental database, and dynamic data evaluation is applied to the complete set of data. This can result in data you enter being rejected as erroneous if it is too far from the data in NIST's database.

When TDE is finished, the results will appear in the TDE Pure, TDE Binary, or TDE Ternary window.

 
Using TDE Results
See Also

NIST TDE Data Evaluation

Pure component results

On the left side of the TDE Pure Results window under Properties for component ID is a list of the property parameters available, with All at the top. Selecting All displays a summary of the parameter results. For T-dependent parameters, a + is displayed; you can click this to open the display of the estimated values for each element of these parameters. Some properties may be available for multiple phases, with the phases for each property shown in parentheses after the property name. Properties indicated as applying to Liquid vs. gas, or Crystal 1 vs. gas, etc. apply to the first phase at its equilibrium with the second.

Selecting any parameter displays details about that parameter on a multi-tab display, including any experimental data and estimated property values. In the display of experimental data, one column indicates which data points were used in regression and which were rejected as outliers.

With the Experimental Data, Predicted Values, or Evaluated Results tab of any T-dependent parameter open, in the Home tab of the ribbon, in the Plot group, you can click Prop-T in the ribbon to generate a plot of that data vs. temperature. The plot displays all available experimental data and predicted values along with the curve of evaluated values.

If you want to save this data as part of your simulation, you must click Save Parameters to save it on Parameters and Data forms. See Saving data to forms, below.

Binary mixture results

On the left side of the TDE Binary Results window is a list of the property parameters available, with Data for ID (1) and ID (2) at the top. Clicking Data for ID (1) and ID (2) displays a summary of the parameter results. The retrieved parameters appear in a tree at the left; selecting categories in the tree displays a summary of the data available under that category. Selecting the individual numbered results displays the experimental data. Double-clicking a row in any of the summary views also displays its experimental data.

With any experimental data set open, in the Home tab of the ribbon, the Plot group displays buttons for ways you can plot that data.

If you want to save this data as part of your simulation, you must click Save Data to save it on Data forms. See Saving results to forms, below.

Once you have saved some results to forms, you can click Data Regression to create a data regression case with this data. See NIST TDE Data Evaluation/Regression.

Click the Consistency Test tab to run consistency tests on the VLE data. See NIST TDE VLE Consistency Test for details.

Ternary mixture results

Ternary mixture results report experimental data available only. On the left side of the TDE Ternary Results window is a list of the property data available, with Data for ID (1), ID (2) and ID (3) at the top. Clicking Data for ID (1), ID (2) and ID (3) displays a summary of the experimental data results. The retrieved data appear in a tree at the left; selecting categories in the tree displays a summary of the data available under that category. Selecting the individual numbered results displays the experimental data. Double-clicking a row in any of the summary views also displays its experimental data.

If you want to save this data as part of your simulation, you must click Save Data to save it on Data forms. See below.

Saving results to forms

Click Save Parameters or Save Dava to save any of the pure component TDE results and most categories of pure component or binary experimental data in forms in your current Aspen Plus or Aspen Properties run. A dialog box appears, allowing you to select which parameters you want to save data for. For pure component experimental data, a checkbox (selected by default) lets you specify to save only accepted data; if this is selected then experimental data points which were rejected by TDE are not saved to forms. For binary and ternary data, a checkbox allows you to save both the data and its uncertainty. The data is saved to:

Methods | Parameters | Pure Component | TDE-1 form (scalar parameter values)

Methods | Parameters | Pure Component |Parameter Name forms (T-dependent parameter values)

Data | Pure-Comp forms (pure component experimental data)

Data | Mixture forms (binary or ternary experimental data)

Note: TDE results are only saved if you use Save Data. Otherwise, they are discarded when you close the window. Values are saved in SI units. These are treated as user-entered parameters.

Using Solid-Liquid Equilibrium (SLE) results

TDE can provide solid-liquid equilibrium data when searching for binary and ternary mixtures when you include a solid solute (Conventional type) component in a binary or ternary mixture search. When SLE data sets are saved to forms as above, they are saved as TPX data if pressure is provided for all points in the data set, or TX data otherwise.

To use these data sets for Data Regression, you must define a salt component with type Solid that is linked to the solute component from the search via Chemistry. Creating the salt via the Electrolyte Wizard or SFE Assistant will do this. In addition, you must specify the salt on the Constraints sheet of the data set, as shown in this example for sodium chloride:


NIST TDE VLE Consistency Test
See Also

About the VLE Consistency Tests

From the TDE Binary Results window click the Consistency Test tab. Initially Data for ID (1) and ID (2) will be selected at the top of the left pane. When this is selected, you can click Run Consistency Tests in the right pane to perform the tests.

Since the consistency test is run for all VLE data sets, it may take up to a couple minutes to complete for pairs with much data. When it is complete, you can view results in two different ways:

Overall results

Click the summary node for any type of VLE data set to view the overall data quality assessment.



The Overall data quality (QVLE) gives a rating (from 0: bad to 1: good) for each VLE data set. For information about how QVLE is computed, see About the VLE Consistency Tests. The following columns provide information about each of the tests that can be run on a given data set. See below for details about the consistency tests.

Individual data set results

Click any data set in the tree, or double-click a data set in one of the grids of summary results to see the consistency test results for that data set.



For each test the mathematical details are shown and compared with the criteria for success. The reason why the test succeeded or failed is also given. Double-click any of the tests to see the detailed results of that test below the grid. For any test that was run, you can click its name in the Plot group of the Home tab of the ribbon to see a plot corresponding to that test.

About the VLE Consistency Tests
See Also

NIST TDE VLE Consistency Test

A VLE data set must satisfy the constraint given by the Gibbs-Duhem equation:



Where M is a molar thermodynamic property, M is a partial molar property, T is temperature, p is pressure, x is liquid composition, and i is an index over the components in the system. When M is the excess Gibbs energy GE divided by the gas constant R and temperature:



Where γ is an activity coefficient, VE is the excess volume, and HE is the excess enthalpy. These equations are the foundation for TDE's consistency tests.

Each of the tests TDE applies determines the consistency of the data on a pass-fail basis. TDE also determines quality factors for each test in the range of 0.1 to 1. The quality factor for a passed test is 1. These are combined as follows to determine the overall data quality:



Where N is the number of consistency tests that can be applied. If none of the consistency tests can be applied, the overall data quality is:



TDE only applies the EOS test and endpoint test for high-pressure data sets (P > 500 kPa) because the other tests may not be accurate in such conditions.

Herington test

The Herington test indicates compliance with the Gibbs-Duhem equation over the entire composition range.

Integrating the equation



over composition x1 at constant T or p gives:



Where



The integration term containing e can usually be neglected for isothermal systems, since it is typically less than 3x10-5, but for isobaric systems it may be as large as 4x10-2 and must be considered. But availability and reliability of HE data sets causes this calculation for isobaric systems to be difficult. So an estimate (Wisniak's modification of Herington's estimate) is used instead:



Where A is the area above the zero line on the plot of ln(γ1/γ2) vs. x, and B is the area below the zero line on this plot.

If |A*|<3 the test is passed. Otherwise, for an isothermal data set, if D<5 the test is passed, and for an isobaric data set, if D-J<10 the test is passed. For integration of the experimental data, a polynomial equation with order between 2 and 6, inclusive, is selected, based on the correlation coefficient of a fit to the data.

When the test fails, the value of D or D-J is used to determine the quality factor. For isothermal sets, Ftest1=0.25 x 5/D with D limited between 5 and 50. For isobaric sets, Ftest1=10/(D-J) with D-J limited between 10 and 100.

Van Ness test

This modeling capability test shows how a mathematical activity coefficient model can accurately reproduce the experimental data. In TDE, the 5-parameter NRTL model is used to predict the bubble pressure for a given temperature and liquid composition:



Where



For isothermal data sets, binary interaction parameters are considered to be composition-dependent: Aji=AAji+ABji(xi-xj).

For isobaric data sets, they are considered temperature-dependent: Aji=AAji+ABji/T.

For a complete T-p-x-y data set, five parameters are determined: AA12, AB12, AA21, AB21, α12.

The competed fit is subjected to these criteria:



Where N is the number of property values, exp indicates experimental data, and cal indicates values calculated with the NRTL equation. If Δp and Δy are less than 1, the data set passes the test. The quality factor is calculated as Ftest2=2/(Δp + Δy) with Δp and Δy limited between 1 and 10.

Point test

For the point test, an overall percentage deviation δ is calculated from the deviations of individual points:



Where ε is defined as for the Herington test. As noted for the Herington text, the value of ε cannot be neglected for isobaric data sets; to avoid these complications, the Point test is not applied to isobaric data sets.

The values of γ1 and γ2 are calculated experimental T-p-x-y data. The calculated values of GE/RT=x1 ln γ1 + x2 ln γ2 are fitted with a Pade approximation for the activity coefficient:



TDE uses M=1 and N=3. Then δ*k is determined from the slope of this fit and calculated values of ln(γ1/γ2).

If δ<5, the VLE data set passes the test. The quality factor is calculated as Ftest3=5/δ with δ limited between 5 and 50.

Infinite dilution test

The infinite dilution test tests the consistency of the limiting behavior of GE/(x1x2RT) and the activity coefficients γ1 and γ2. The percentage deviations in both limits are calculated:



If both I1<30 and I2<30, the data set passes the test. GE/(x1x2RT) is regressed with the Pade approximation as is used in the Point test. The quality factor is calculated as Ftest4=0.25 x 60/(I1 + I2) with I1 and I2 limited between 30 and 300.

EOS (Equation of State) Test

The EOS test uses the Universal Mixing Rule (UMR) described by Voutsas et al., which incorporates an activity coefficient model in a cubic equation of state. In TDE, the UNIQUAC activity coefficient model is used with the Peng-Robinson EOS.

This test is applied automatically only to P-T-x-y data sets with pressures > 1 MPa. Numerical criteria are calculated as for the Van Ness test. The key difference is that deviations in the critical region are not considered because the model is known to not represent the data well in this region.

After completion of the fitting process, the following criteria are applied:



where N is the number of properties values, the superscript exp indicates experimental data, and the superscript cal indicates values calculated with the NRTL equation. If Δp and Δy are less than 1, the data set passes the test.

The quality factor for the EOS Test is calculated as follows:

Ftest5 = 2/(Δp + Δy) with the limits 1≤ Δp ≤10, 1≤ Δy ≤10.

Endpoint Consistency Test

In addition to the requirements related to the Gibbs-Duhem equation described above, consistency is checked between the endpoints of the VLE curve (i.e., mole fraction composition approaching 0 or 1) and the pure-component vapor pressures. The check is made for both the liquid-phase compositions x and gas-phase compositions y.

Two sets of equations can be used for this test:



For T-p-x-y data, these equations are equivalent. For T-p-x data the first set is used, and for T-p-y data the second set is used.

If no experimental values are reported at composition x1=0 or 1, extrapolated vapor pressures are obtained from the 3-parameter NRTL model. The two vapor pressures and three NRTL parameters (five parameters in all) are fitted to experimental VLE values with the following conditions:

The data set is isothermal.

At least 8 experimental data values are available.

There is at least one experimental value with x1<0.2 to allow estimation of the vapor pressure for component 2.

There is at least one experimental value with x1>0.8 to allow estimation of the vapor pressure for component 1.

For each of the two vapor pressures, a quality factor is calculated by dividing the absolute value of the residual in the equation by the pure component vapor pressure, such as:



If the data set is isobaric or any of these conditions are not met, this value is replaced by the average deviation in bubble or dew pressure calculated with the 3-parameter NRTL model fit based on pure component vapor pressures.

Limits of 0.01 to 0.1 are applied to these factors. If the calculated vapor pressure agrees with the pure component vapor pressure within 1% for both components, the factor for this test is 1. Otherwise it is smaller, down to 0.1 at the minimum, and calculated by:



Reference

Voutsas, E.; Vasiliki, L.; Boukouvalas, C.; Magoulas, K.; Tassios, D. Thermodynamic property calculations with the universal mixing rule for EoS/GE models: Results with the Peng-Robinson EoS and a UNIFAC model. Fluid Phase Equilib. 2006, 241, 216-228.
 
 NIST TDE Data Evaluation Methodology
See Also

About the NIST ThermoData Engine (TDE)

The NIST ThermoData Engine (TDE) uses dynamic data evaluation to determine the data to be used in regressing property parameters from the collected raw experimental data in NIST's database. The data evaluation is broken into several phases.

The data are broken into four blocks:

Phase diagram: triple point, critical temperature, phase boundary pressure

Volumetric: critical density, saturated & single phase density, volumetric coefficients

Energetic: energy differences, energy derivatives, speed of sound

Other: transport properties, surface tension, refraction

The blocks are first processed individually. The following thermodynamic consistency tests are performed within the phase diagram, volumetric, and energetic data:

Vapor pressures of phases must be equal at triple points, and slope/enthalpy change must be consistent

Condensed phase boundaries must converge to the triple point

Gas and liquid saturation density curves must converge at the critical temperature

First derivative of saturated density must trend toward infinity at the critical temperature

Single-phase densities must converge to saturated densities

Then, the vapor pressure, saturated density, and enthalpy of vaporization are checked for consistency, and the other data is processed.

Copyright protection on this compilation of data has been secured by the U.S. Department of Commerce in the United States and in other countries that are parties to the Universal Copyright Convention, pursuant to Section 290(e) of Title 15 of the United States Code. NIST Standard Reference Data (SRD); © Copyright ©2025 by the U.S. Secretary of Commerce on behalf of the United States of America. All rights reserved.

 NIST TDE Data Evaluation/Regression
To set up a Data Evaluation or Data Regression case for NIST TDE binary mixture results:

Run a NIST TDE property evaluation for a binary mixture.

In the TDE Binary Results window, save the results you want to evaluate or regress to forms.

In the TDE Binary Results window, click Data Regression. The Specify Data Evaluation/Regression Case window appears.


Select either Evaluation or Regression. If you select Evaluation, a data evaluation case will be created to compare calculated results from selected model with experimental data. If you select Regression, a data regression case will be created to fit parameters of selected model.

Enter a name for the Case ID of 8 characters or less, or accept the default ID.

Select the Property method to be used in the regression. If a global property method has been specified, it will be the default.

Click the boxes in front of binary data sets to include or exclude them. The box at the top can be used to include or exclude all data sets. Only the data sets which have been saved to the Data form will be shown.

Click OK. A dialog box will appear informing you that the Run type on the Setup | Specifications form has been changed to Data Regression. This is required in order to perform data regression.

Click OK. The Data Regression case will be generated and you will be taken automatically to the form. The data sets and property method that you have specified will appear on the case form. If the data regression settings Select data set and Select default binary parameters on the Properties Basis tab of the File | Options dialog box are set, the appropriate binary parameters will be automatically selected so that the case is complete.  Otherwise, you will have to complete the specifications.


You can modify the parameters specifications as needed, and when complete, click  to start your regression.

 

 

 

 

 

 

 

 

 

 

 

 

 

 