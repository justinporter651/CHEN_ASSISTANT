What's New in Aspen Plus V15
See Also

What's New in Aspen Plus V14.5 and V14 CP1

Compatibility Notes for Aspen Plus V15

Aspen Plus V15 includes new features in the following areas:

Electrolyzer
BatchOp and RCSTR
RadFrac
HeatX
Workflow and Usability Improvements
User Models and Automation
Safety Analysis
Energy Analysis
Plant Data
Databanks
Properties
Electrolyzer

For rigorous Electrolyzers:

In the Alkaline water Electrolyzer, hydrogen and oxygen diffusivity through the membrane can be calculated from a correlation based on a reference diffusivity.

Electrolyzer now calculates vapor holdup.

For both shortcut and rigorous Electrolyzers:

The PEM electrolyzer can accept a cathode feed. This can be via a stack inlet (with anode to feed ratio) or separate anode and cathode feeds.

Other new Electrolyzer features were added in V14.5 and V14 CP1.

BatchOp and RCSTR

The forms for specifying heat transfer equipment in BatchOp and RCSTR have been reorganized.

RCSTR and BatchOp now support an option to calculate mass-transfer coefficients using user-defined correlations based on fluid properties, reactor geometry, and operating conditions.

RadFrac

Composition profiles of solid components are available in RadFrac.

In the Hydraulic Plots form for Column Analysis, you can change the axes from linear to log scales. There are also two new options for the vapor flow basis displayed on the Y axis. For packing, you can choose the superficial F-factor Fs. For trays, you can choose Fs based on column cross-sectional area.

In RadFrac blocks with Column Analysis, there is an additional parameter Interfacial bottom stage area factor on the Rate-based Setup | Sections sheet. The Interfacial area factor now applies to the top stage and the value of the factor is linearly interpolated between these values for stages between the top and bottom. If you intend to set a constant value for the section, be sure to set both parameters to the same value.

Several new packings from vendor RVT have been added:

Hiflow plastic random packings of sizes 15-7, 25-7, 38-1, 50-0, 50-6, and 90-7

Hiflow metal random packings of sizes 25-4, 40-4, and 50-4

RMXR metal random packings of sizes #2 and #4

RMP SP metal structured packings of sizes 250 and 350

RPP SP metal structured packings of sizes 200 and 250

Other new RadFrac features were added in V14.5 and V14 CP1.

HeatX

HeatX blocks using EDR Plate now show the setting plan and profile plots from EDR on the EDR Plate Results sheet.

Pyrolysis Reactions

The polymer pyrolysis reaction type introduced in V14 has been expanded and improved.

The H-shift reaction has been modified from a single reaction to a set of reactions representing the explicit (x,x) H-shifts that result in the formation of specific radical positions along with the associated production of specific low-molecular-weight products

Key parameters such as the Flory-Schulz parameter are calculated from theory rather than from fixed, user-specified values

Several parameters are exposed to tune fundamental energetic differences and liquid/vapor phase reactivity

New reactions have been added to represent cyclodepolymerization and coking

The reaction routine applies to reactions in both liquid and vapor phases

Limits on the “mer” specification have been removed

Due to these changes, reaction sets defined in V14.x versions may not work directly. It is recommended to create a new pyrolysis reaction set to use the improvements.

Workflow and Usability Improvements

A new built-in spreadsheet option is now available in Calculator blocks as an alternative to the Excel Calculator, which will be discontinued in the next version. This spreadsheet supports most features you would have used in an Excel Calculator blocks; in addition, the calculations are handled within Aspen Plus code and so are faster, and you can drag and drop variables from forms directly into the flowsheet to define variables. See Compatibility Notes for limitations.

New command-line options allow you to optionally save extra log files which can be useful in debugging crashes. For details, see Command Line Options.

New Repair File feature helps recover certain corrupted backup files by removing the ADS and/or shell settings sections.

On the Setup | Calculation Options | Check Results sheet you can specify a phase stability check. This check looks for missed liquid phases in all flash results, by comparing the fugacity of each component in its phase with its pure-liquid fugacities to check for additional liquid phases.

For smoother integration with other products, you can now export an Aspen Properties Input file (*.aprinp) from the Properties environment of Aspen Plus.

Print and Print Preview commands now appear in the Quick Access Toolbar and in content menus in the flowsheet and plots.

You can save and load sets of options from the File | Options command as files.

A new template, Heat transfer fluids, was added. This contains settings designed for use with heat transfer fluid components, typically used on the service side of heat exchangers, and some popular heating fluid components are preconfigured in the component list.

RPlug and RCSTR are now available to be used on batch flowsheets as continuous operations.

A number of issues with saving and updating plots have been fixed:

If you change the settings on a plot and then Switch Screen Layout from the View tab of the ribbon, the plot will retain its modified settings.

If you change the settings on T-XY plots from binary analysis, the settings are retained after saving or re-running the model.

BatchOp filtration and custom plots created in V15 update after re-running the model.

The distance unit mu is now called micron. This unit will be converted in models from earlier versions when they are opened in V15.

Other workflow and usability features were added in V14.5 and V14 CP1.

User Models and Automation

When you export a DFMS file using the option on the Setup | Report Options | Property sheet, this file now includes any CAS numbers included in your model. If you build a custom databank using this file and use it in other models, having CAS numbers will allow the compounds to work with NIST TDE (if it has any data for them).

You can now access variables previously inaccessible via Happ automation in two ways:

The SharedData property of IHNode objects representing blocks and streams allows you to access ADS results.

A new automation system, CXS, is available with additional capabilities over Happ. It can access ADS results.

When importing hybrid models from Aspen AI Model Builder, you can now use models in the .XLP format in addition to the .ATHM format used in previous versions.

Other new features associated with using ACM models in Aspen Plus were added in V14.5.

Safety Analysis Improvements

Sound Power Level (SPL) calculations have been added. Options for how the SPL is calculated are available in the Line Sizing tab of the Preferences Manager. You can choose to calculate SPL based on the vapor portion of mixed phase releases, based on the total flow of mixed phase releases when the vapor part is within a specified limit, or ignore all mixed phase releases.

Additional vessel configurations for emergency fire scenarios were added. You can now specify the bottom/left and top/right head types separately for horizontal and vertical vessels, and which heads are exposed to fire. You can also enter additional fixed vessel area that is exposed to fire.

Previously, the line sizing calculation for rho-v2 reported the larger value from either at the PSV flange or the other end of the pipe for both the inlet and outlet lines. This was reported as "Average rho-v2" in the line sizing results. This has now been updated to Flange rho-v2 which just reports at the PSV flange, and Max Line rho-v2 which reports the maximum from within the piping system. Accordingly, warning limits for both of these results can be added on the Line Sizing tab of the Preferences Manager.

You can now specify inlet pressure loss for PSVs. Additionally, for pilot-operated PSVs, you can now set them to be remote-sensing pilot-operated valves.

After disconnecting from an ABE server, the server URL will now be remembered, so you will be able to reconnect to the server without having to reenter the URL. The connection state will also be remembered upon saving and closing the case, so if you are not connected to a server when you save and close the case, the case will not reconnect the next time it is opened. However, the last server URL that was used will still be remembered within the case.

You can now apply the Center for Chemical Process Safety (CCPS) volume correction for wetted (API) fire calculations. This option can be enabled on the General Setup tab of the Preferences Manager.

Starting in V14.5, the differences between NFPA 30, API 2000, and API 521 wetted fire calculations have been clarified. More information has been added on heat input calculations.

Energy Analysis

In the Energy Analysis environment:

When you specify the scope, there is now a button in the header of the table to select or deselect all models.

The Design Changes sheet displays the emissions cost savings for each design change suggested, if emissions costs are configured.

MHeatX blocks can now be exported from the Aspen Plus flowsheet when enabling Energy on the Activation dashboard. This multi-stream heat exchanger is converted into a heat exchanger network diagram within Aspen Energy Analyzer which may contain up to (number of hot streams) × (number of cold streams) heat exchangers, but the algorithm looks for a smaller number of exchangers when possible.

Starting in V14.5, composite curves, grand composite curves, and utility composite curves can now be viewed within Energy Analysis, under the new Composite Curves tab. The curves will be shown in tabular and graphical format. You can specify the minimum temperature approach.

Activated Economics

User-Defined Equipment Weight for Process Equipment in Activated Economics: A new Specified Equip. Dry Weight field is available in Activated Economics for process equipment, allowing you to specify a custom total dry weight override. For equipment items that do not report a system weight, this weight is used for bookkeeping purposes only. For the full list of these items and additional details regarding how the custom weight is used in calculations, please see the Aspen Economic Evaluation Help.

Plant Data

Plant Data now uses SQLite as the back-end database. SQL Server Express is no longer needed. When you open an Aspen Plus file from earlier versions, if that file contains Plant Data, the previous database files are automatically migrated to SQLite.

Data is now stored in a database instead of a collection of .txt files. This will result in noticeable performance improvements when opening/closing a model, conditioning data, cleaning up a model, and saving a model.

The file selector used in certain places, such as for selecting the files to copy while publishing a project to Aspen OnLine, has been updated to a hierarchical one using checkboxes to mark the selected files.

Other new features associated with Plant Data were added in V14.5.

Databanks

The minimum SQL server version for APED is now 2016.

There is a new command within APED Manager to display the IP Address of your machine.

You can create custom databanks containing bio-feedstock components.

The new PURE41 databank is available. The following 58 new compounds were added, 57 of them due to additions in the DIPPR databank and one new heating fluid DOWHT.

Alias	Name	CAS Number
C3H3CLF4	HCFC-244BB	421-73-8
C3H6O2	1,3-DIOXOLANE	646-06-0
C3H8CL4SI2	BIS-METHYLDICHLOROSILYL-METHANE	4519-03-3
C4H6F2O2-D1	2,2-DIFLUOROETHYL-ACETATE	1550-44-3
C4H6N2	1-METHYLIMIDAZOLE	616-47-7
C4H6N2O2	2,5-PIPERAZINEDIONE	106-57-0
C4H10O3-N4	2,4,6-TRIOXAHEPTANE	628-90-0
C5H8O-N12	TRANS-3-PENTEN-2-ONE	3102-33-8
C5H10-N1	1-METHYLCYCLOBUTANE	598-61-8
C5H10O	CYCLOPENTANOL	96-41-3
C5H10O2-N5	4-HYDROXY-2-PENTANONE	4161-60-8
C5H11NO-N3	2-PENTANONE-OXIME	623-40-5
C5H12O2-D8	1,3-DIMETHOXYPROPANE	17081-21-9
C5H12O4-N3	2,4,6,8-TETRAOXANONANE	13353-03-2
C5H12S-N9	ETHYL-ISOPROPYL-SULFIDE	5145-99-3
C5H14CL2SI2	BIS-DIMETHYLCHLOROSILYL-METHANE	5357-38-0
C6H14O3-N1	1,2,6-TRIHYDROXYHEXANE	106-69-4
C6H14O5	2,4,6,8,10-PENTAOXAUNDECANE	13352-75-5
C6H14S-N2	N-BUTYL-ETHYL-SULFIDE	638-46-0
C6H14S-N13	PROPYL-ISOPROPYL-SULFIDE	5008-73-1
C7H12-N7	1-METHYL-1-CYCLOHEXENE	591-49-1
C7H16O6	2,4,6,8,10,12-HEXAOXATRIDECANE	13352-76-6
C8H6O	BENZOFURAN	271-89-6
C8H14-N42	1,7-OCTADIENE	3710-30-3
C8H16-N23	METHYL-TRANS-3-ETHYLCYCLOPENTANE	2613-65-2
C8H16-N24	CIS-1-ETHYL-3-METHYLCYCLOPENTANE	2613-66-3
C8H17N-N14	N,N-DIMETHYLCYCLOHEXYLAMINE	98-94-2
C8H20N2O3	THEED	60487-26-5
C9H12O-N1	2-ISOPROPYLPHENOL	88-69-7
C9H18-E1	1,1-DIETHYLCYCLOPENTANE	2721-38-2
C9H18-E2	ISOBUTYLCYCLOPENTANE	3788-32-7
C9H20-N1	3,4-DIMETHYLHEPTANE	922-28-1
C9H20-N13	2,3,3-TRIMETHYLHEXANE	16747-28-7
C10H20-E1	1-METHYL-4-ISOPROPYLCYCLOHEXANE	99-82-1
C10H20-E2	N-PENTYLCYCLOPENTANE	3741-00-2
C10H20-N1	CYCLODECANE	293-96-9
C10H21NO	N,N-DIMETHYLOCTANAMIDE	1118-92-9
C11H14-N21	1-ETHYLINDAN	4830-99-3
C11H14-N22	1,1-DIMETHYLINDAN	4912-92-9
C11H16-N1	4-TERT-BUTYLTOLUENE	98-51-1
C12H16-D6	2,6-DIMETHYLTETRALIN	7524-63-2
C12H16-N11	1,4-DIMETHYLTETRALIN	4175-54-6
C12H18-N1	5-TERT-BUTYL-M-XYLENE	98-19-1
C12H24-N10	N-HEXYLCYCLOHEXANE	4292-75-5
C13H20-E1	2,4-DIISOPROPYLTOLUENE	1460-98-6
C13H20-E2	2,6-DIISOPROPYLTOLUENE	17821-02-2
C13H20-E3	2,5-DIISOPROPYLTOLUENE	58502-85-5
C14H28-N2	1-CYCLOHEXYLOCTANE	1795-15-9
C16H18O-D1	2-TERT-BUTYL-6-PHENYL-PHENOL	2416-98-0
C16H28O4-N2	DIISOBUTYL-HEXAHYDROPHTHALATE	70969-58-3
C16H32O2-N7	METHYL-PENTADECANOATE	7132-64-1
C18H18O5	DIETHYLENE-GLYCOL-DIBENZOATE	120-55-8
C18H36O2-N4	METHYL-MARGARATE	1731-92-6
C18H36O2-N8	ISOOCTADECANOIC-ACID	2724-58-5
C20H22O5	DIPROPYLENE-GLYCOL-DIBENZOATE	27138-31-4
C20H22O6	TRIETHYLENE-GLYCOL-DIBENZOATE	120-56-9
C30H52O26	MALTOPENTAOSE	34620-76-3
DOWHT	DOWTHERM-HT	–
The NIST-TRC databank was updated, adding 718 new compounds. In addition, all parameters removed from NIST-TRC since V10 has been restored in this version, resolving some issues with data NIST has removed in recent versions. Parameter DCPLS has been added to NIST-TRC for components for which it can be calculated from other parameters.

The AP-ASC databank was added, providing parameters for some components using the Association NRTL model.

There is a version of Aspen Properties Enterprise Database which uses PostgreSQL rather than SQL Server. Select the option to install it under Aspen Properties in an Aspen Engineering installation to enable this feature. You can use the PostgreSQL version without any version of Microsoft SQL Server installed. However, user creation of custom databases is not supported under PostgreSQL, and Aspen Batch Process Developer does not support the PostgreSQL version. Use the Database Configuration Tool installed with this feature to switch between the SQL Server and PostgreSQL versions.

Properties

From the Home tab of the ribbon in the Properties environment, you can directly access Processium e-thermo (added in V14.5) and Mol-Instincts by ChemEssen (new in V15) to download property data and insert it into your simulation.

In the Find Compounds dialog box, you can now perform a blank search (with no name or qualifiers selected) if none of the large databanks are searched.

When searching for data using the NIST ThermoData Engine (TDE), it is now possible to retrieve solid-liquid equilibrium (SLE) data. Search for a binary or ternary mixture using a solid solute component of Conventional type and the solvent. For more information, see Using TDE Results.

Many simulations benefit from having a tighter flash tolerance, but this can lead to flash failures in some systems not able to reach such tolerances, including some electrolyte and polymer systems. In order to allow the default flash tolerances to work better with a wider variety of models, the Aspen Physical Property System now includes a two-step flash tolerance. Once the main flash Error tolerance is met, additional flash iterations try to reach a tighter tolerance. If the tighter tolerance cannot be met, the flash is still considered converged. Options on the Setup | Calculation Options | Flash Convergence sheet allow you to control the tighter tolerance and the number of additional iterations.

Two new models were added for the density of biocomponents used in fermentation reactions. They are part of the BIOIDEAL method, so no changes in simulations are necessary to use them. They greatly improve the predictions of liquid and solid biocomponent density.

The UNIFAC Matrix Completion Method was added as an activity coefficient model and property method. This method uses relationships among the binary group parameters to solve for the entire set of parameters at once, even for pairs without data. Parameters for all pairs among the first 50 main groups and the NCO, imidazole, and BTI groups are provided. The NCO, imidazole, and BTI groups have also been added to standard UNIFAC.

The ANRTL method using the Association NRTL property model has been added. This provides a version of the NRTL property model capable of handling associating components.

The PSRK method has been changed to use transport property models commonly used by activity coefficient methods, which generate more accurate predictions at pressures where PSRK is commonly used. The PSRK-HP method has been added, using the transport property models PSRK formerly used, which continue to be the most accurate at very high pressures.

New property set properties VOLBODMX and VOLCODMX have been added for biological oxygen demand and biochemical oxygen demand of a mixture, measured as mass of oxygen per volume of substance.

In the V11 compatibility notes, we included this change: "When entering data for property regression, TXX, PXX, TPXX, or TPXXY data which is missing X1 or X2 is no longer permitted, and the forms containing them will be marked incomplete." This change was partially reverted starting in V14. For TXX or TPXX data for a binary system, if either X1 or X2 is missing for a point, Data Regression either searches for or estimates the missing value by interpolation among all data points for the current dataset, and all binary data involving this binary in the current regression. A warning is issued.

We thoroughly reviewed the limits for property parameter values and changed several limits, with the intent of making the warnings for violating the limits more meaningful and more likely to indicate a real data problem when they appear. We also changed a few databank values and data values in example files which were incorrect which we discovered during this review. For details on the changes, see the Compatibility Notes.

CPAKIJ parameters were added for the Cubic-Plus-Association model for 22 more pairs:

Component 1	Alias 1	Component 2	Alias 2
CARBON-DIOXIDE	CO2	OXYGEN	O2
CARBON-DIOXIDE	CO2	ARGON	AR
CARBON-DIOXIDE	CO2	NITRIC-OXIDE	NO
CARBON-DIOXIDE	CO2	NITROGEN-TETROXIDE	N2O4
CARBON-DIOXIDE	CO2	SULFUR-DIOXIDE	O2S
CARBON-MONOXIDE	CO	ARGON	AR
CARBON-MONOXIDE	CO	NITRIC-OXIDE	NO
NITROGEN	N2	NITRIC-OXIDE	NO
OXYGEN	O2	PROPANE	C3H8
OXYGEN	O2	SULFUR-DIOXIDE	O2S
OXYGEN	O2	WATER	H2O
HYDROGEN	H2	ARGON	AR
ARGON	AR	NITRIC-OXIDE	NO
ARGON	AR	ETHANE	C2H6
ARGON	AR	WATER	H2O
METHANE	CH4	NITRIC-OXIDE	NO
NITRIC-OXIDE	NO	SULFUR-DIOXIDE	O2S
ETHANE	C2H6	NITROUS-OXIDE	N2O
PROPANE	C3H8	SULFUR-DIOXIDE	O2S
PROPANE	C3H8	NITROUS-OXIDE	N2O
SULFUR-DIOXIDE	O2S	WATER	H2O
NITROUS-OXIDE	N2O	WATER	H2O

What's New in Aspen Plus V14.5 and V14 CP1
See Also

Compatibility Notes for Aspen Plus V14.5

Aspen Plus V14.5 includes new features in the following areas:

Workflow and Usability

Properties

Electrolyzer

RadFrac

Custom Modeling

Plant Data

Safety Analysis

Energy Analysis

Aspen Plus V14 CP1 includes new features in the following areas:

Electrolyzer

Workflow and Usability

RadFrac

Workflow and Usability (V14.5)

Many new sustainability examples have been added to the example library:

Under Biofuel and Biochemicals: two models for bio-based feedstock (anaerobic digestion and hydrothermal liquefaction) and two models for producing sustainable aviation fuel via the alcohol-to-jet and fermentation pathways

Under Carbon Capture: models for capturing CO2 from flue gas using CESAR1 solvent , capturing it from hydrogen using a membrane, removing impurities from CO2 and compressing or liquefying it, and reducing CO2 to CO in a solid-oxide electrolysis cell for use in fuel and chemical production

Under Hydrogen: models of an industrial scale alkaline electrolyzer using the Aspen Plus Electrolyzer block, methane pyrolysis for hydrogen production, a methane-fueled solid-oxide fuel cell with combined heat, hydrogen, and power, offshore hydrogen production via electrolysis, and a PEM fuel cell

Under Metals and Minerals: Three models related to lithium-ion batteries, for manufacturing cathode active material, drying cathodes and recovering NMP solvent, and recycling lithium-ion batteries

Under Natural Resource Efficiency: A model for desalinization of saltwater using reverse osmosis in a spiral-wound membrane

Properties (V14.5)

From the Home tab of the ribbon in the Properties environment, you can directly access Processium e-thermo to download property data and insert it into your simulation.

Electrolyzer (V14.5)

For rigorous Electrolyzers:

For the PEM Electrolyzer you can now specify the membrane equivalent weight on the Equipment | Membrane sheet.

The hydrogen crossover model is improved to consider diffusion, using the mass-transfer coefficient for hydrogen specified on the Equipment | Membrane sheet. For Alkaline water only, it also considers pressure-driven permeation, using the pore diameter specified on the Equipment | Membrane sheet.

For Electrolyzers based on performance curves:

You can specify multiple active performance curves. Electrolyzer will interpolate based on the operating temperature or pressure.

For both shortcut and rigorous Electrolyzers:

Thermoneutral voltage is now reported on the Results | Summary sheet.

The electrolyzer block now supports true species electrolyte calculations.

There are new input options available to specify current density or hydrogen production rate as alternatives to specifying the current or power.

The inputs on the Specifications form have been rearranged in a more intuitive manner which makes it easier to understand how the inputs interact.

The hydrogen in oxygen (HTO) % is reported.

RadFrac (V14.5)

On the Setup | Calculation Options | Model Options sheet, under RadFrac, you can clear the checkbox Generate hydraulic plots for column internals after an engine run to skip hydraulic plot calculations for Column Analysis. These hydraulic plot calculations will always be run for any RadFrac block for which you open the Hydraulic Plots form.

Custom Modeling (V14.5)

There are now templates available for creating Aspen Custom Modeler (ACM) models within Aspen Plus. You can also save your existing models as templates to use for creating additional models.

The model assistant for creating ACM models within Aspen Plus now includes features letting you create variable and parameter types and insert language constructs like conditional blocks and loops.

When you save an Aspen Plus simulation as an APWZ file, only the ACM models used in the simulation are included in the file. Both deployed and edited undeployed versions are included, if they exist. Only models used in the simulation are loaded onto your computer when you open an APWZ file containing ACM models.

Plant Data (V14.5)

Plant Data now supports Aspen Plus models containing hybrid sensor and hybrid equipment models from Aspen AI Model Builder.

New units of measure added in recent versions for fermentation reactions and electrical operations are now supported in Plant Data.

Safety Analysis (V14.5)

The differences between NFPA 30, API 2000, and API 521 wetted fire calculations have been clarified. More information has been added on heat input calculations.

Energy Analysis (V14.5)

Composite curves, grand composite curves, and utility composite curves can now be viewed within Energy Analysis, under the new Composite Curves tab. The curves will be shown in tabular and graphical format.

Electrolyzer (CP1)

The Electrolyzer block now supports the PEM (proton exchange membrane) electrolyzer with both rigorous and shortcut models.

For the shortcut electrolyzer, there is now a model to estimate crossover of water and hydrogen. This model is used both for the alkaline water electrolyzer and PEM.

The geometry specifications for Electrolyzer were rearranged on their input forms to a more intuitive order, and some geometry parameters were simplified. See the Compatibility Notes for details on how the changes affect existing files.

For the rigorous Electrolyzer model, there are new parameters to account for electrical losses and voltage increases associated with aging of the stack.

Workflow and Usability (CP1)

When you open a local example from the File | Open command, PDF documents are shown. You cannot open these with Aspen Plus, but showing them makes you aware that many of these examples have accompanying documentation.

There is now an option to completely disable CO2 emission calculations on the Setup | Emission Options | Input sheet. The toggle on the Activation Dashboard panel for Greenhouse Gas Emissions controls the same option.

RadFrac (CP1)

In the Hydraulic Plots form for Column Analysis, you can change the axes from linear to log scales. There are also two new options for the vapor flow basis displayed on the Y axis. For packing, you can choose the superficial F-factor Fs. For trays, you can choose Fs based on column cross-sectional area.

In RadFrac blocks with lattice downcomers you can now set the number of downcomers to 2.

What's New in Aspen Plus V14
See Also

Compatibility Notes for Aspen Plus V14

Aspen Plus V14 includes new features in the following areas:

AI Training
Plant Data
Aspen AI Model Builder
Activated Economics Integration with Aspen OptiPlant 3D Layout

Biocomponents
Reactors
Electrical Operations
Polymer Reactions
Greenhouse Gas Emissions
Safety Analysis
Workflow and Usability Improvements
Properties
AI Training

These new features are available in AI Training objects:

When importing data from Excel, the Import Wizard now provides options for data not strictly in the template format, provided that the data has timestamps as row labels.
On the Analyze Data form, you can now view Trendlines on scatter plots.

On the Analyze Data form, you can now view Distribution Plots (box plots) for further data analysis.

On the Build Model form:

You can now choose which independent variables you want to use as inputs to the neural network. You can also choose which independent and dependent variables you want to use as inputs to the hybrid model. Note that independent variables used as inputs to the neural network are automatically used as inputs to the hybrid model.

You can now choose to include or exclude trained variables in the model.

The number of variables included in training, excluded variables, independent variables, dependent variables, and total variables is now reported.

You can specify the Weight for each dependent variable. This allows some variables to have more or less impact on the trained model.

The Variable importance calculation checkbox allows you to specify whether additional calculations are performed at the end of training to determine the relative importance of each variable in the neural network model.

The estimated training time and a progress bar has been added under the AI Training Progress plot.

On the Analyze Results form, you can modify the limits used in color-coding R2 values.

The scale for charts features broader ranges, and plots have grids to improve usability.

You can now save plots, after opening them in a separate window. A new Plots object manager has been added to store the saved plots, and can be accessed via the navigation tree under the AI folder.

Performance has improved for cases with a large number of data points (for example, more than 5000) even when loading cases or moving between tabs. Adding variables is also faster than in V12.1.

When entering formula tags, in the Tag Specifications View dialog box you can click Validate to check the syntax of the formula.

Plant Data

Aspen Plus V14 features the following improvements for Plant Data:

A new Linear Interpolation option is available for the If not good drop-down list on the Data Validation tab of the Tag Manager form. This option linearly interpolates the conditioned value from the last previous good point and the first subsequent good point.

When entering formula tags, in the Tag Specifications View dialog box you can click Validate to check the syntax of the formula.

FlexCel is now supported. By default, Excel files will now be imported via FlexCel. Accordingly, a new Options button has been added to the Plant Data | Advanced ribbon that allows you to switch between using Microsoft Excel and FlexCel.

On the Selected Variables | General sheet, you can see the specification type of each variable in the model displayed. Warnings are shown if a source tag is mapped to a variable which is output-only in the model.

You can now use Aspen Connect instead of Aspen CIM-IO & Process Data:

Aspen Cloud Connect V14 is required. It may be installed on any server which your computer can connect to and which can reach the historian.

If you use Aspen Connect instead of Aspen CIM-IO & Process Data, you do not need to install Process Data and ADSA.

To connect with Aspen IP.21, Aspen Connect uses IP.21's gRPC Server. If you are using Aspen IP.21 V14, no special steps are needed. If you are using an older version of Aspen IP.21, see requirements in the Aspen Engineering V14 Installation Guide.

For information about the supported data sources and how to configure them, see Adding End Points in the Aspen Connect help.

See Compatibility Notes for restrictions when using Aspen Connect.

Aspen AI Model Builder

A new button in the Home tab of the ribbon lets you open Aspen AI Model Builder sessions licensed with tokens from your local license manager.

Activated Economics Integration with Aspen OptiPlant 3D Layout

A new button, Send to OptiPlant 3D, has been added to the Aspen Plus Economics ribbon. This allows you to export equipment data to an Excel file, once it has been mapped, sized, and evaluated. The Excel file can then be directly imported into Aspen OptiPlant 3D Layout, a 3D conceptual design tool.

Biocomponents

Aspen Plus now supports biocomponents, representing biological compounds which may have complex or inexact formulas. You can represent them by atom ratios.

The FERMENT databank contains a selection of biocomponents used in fermentation reactions. They are assigned the new compound class BIOCOMPONENTS, which you can use to help search for them. The BIOFEED databank contains biocomponents with data about conventional components they convert to in biomass conversion processes. You can also define your own biocomponents.

When you add a component of compound class BIOCOMPONENTS to the simulation, either using the Find Compounds window or by typing its component ID, the Type on the Components | Specifications | Selection sheet is set to Biocomponent, and data for it is filled in on the Biocomponents form. In addition, if the biocomponent is from the BIOFEED databank, the Biomass Lookup button becomes available on the sheet. Clicking this adds to the simulation conventional components that any biocomponents in the simulation convert to.

You can specify fermentation reactions involving a biocomponent.

A new property method filter BIOCONV is available. This filters the methods to ones expected to work well with the conventional components which biocomponents convert to.

A new template for a biomass conversion process is available. It preselects the BIOFEED databank.

Reactors

BatchOp and RCSTR now support fermentation reactions.

BatchOp and RCSTR also support mass transfer limitations within the pot using a constant kLa value for each component. There is a new mass transfer profile with concentrations in the liquid, and a preset plot for these in the plot wizard for BatchOp.

RBatch now has the Retain some vapor during venting which BatchOp had already, available when Specify reactor pressure is selected and there is a vent stream.

Electrical Operations

There is a new Electrolyzer unit operation to model the electrolysis of water to generate hydrogen. There are also electrical power streams to specify the power input into such operations. Power streams are not supported in EO.

Polymer Reactions

The new Pyrolysis polymer reaction type models the breakdown of polymers into small hydrocarbon molecules.

Greenhouse Gas Emissions

There is a new Greenhouse Gas Emissions panel on the activation dashboard.

The options for how Aspen Plus calculates greenhouse gas emissions are moved from the Calculation Options form to a new Emission Options form directly below it in the Setup folder.

Reporting for greenhouse gas emissions uses industry standard terms scope 1 (process emissions) and scope 2 (fuel emissions, used in Aspen Plus for emissions from Utility blocks). You can set a Utility block to be reported under scope 1 for situations where that is more appropriate.

You can set the CO2 adjustment factor in a Utility block to report only a fraction of the calculated CO2 emissions to account for the use of green energy.

The IPCC's AR5 and AR6 are now supported as a standard for scope 1 emissions. The U.S. EPA standard for scope 2 emissions is updated.

Safety Analysis Improvements

Entrance Fittings Available for Line Sizing

In V14, you can now select entrance fittings for inlet pipes in line sizing (in Rating mode) to account for movement from the vessel into the inlet line. The following fittings are provided:

Fitting Type

K

Data Source

Entrance: Sharp-Edged	0.5	Crane TP 410, page A-29
Entrance: Rounded, r/d 0.02	0.28	Crane TP 410, page A-29
Entrance: Rounded, r/d 0.04	0.24	Crane TP 410, page A-29
Entrance: Rounded, r/d 0.06	0.15	Crane TP 410, page A-29
Entrance: Rounded, r/d 0.10	0.09	Crane TP 410, page A-29
Entrance: Well-Rounded	0.04	Crane TP 410, page A-29
Entrance: Inward-Projecting	0.78	Crane TP 410, page A-29
Support for Additional Properties in Safety Datasheets

The following additional fluid properties are now available within custom datasheets for two-phase calculations:

Molecular weight for both phases

Dynamic viscosity for both phases

Customized Discharge Coefficients for Custom Orifices

You can now customize the discharge coefficients for custom orifices using the Orifice Manager. You can modify the Vapor Kd, Liquid Kd, and/or Mixed-Phase Kd values.

New User Specified Fitting Type

For the Rating line sizing method, a new User Specified fitting type is available. Selecting this option allows you to edit the K, L/D, and Source fields.

Calculated K Value Reported for Swages and Tees

For line sizing, the calculated K value for swages and tees is now reported.

New Wetted (NFPA-30) Fire Method

For Fire scenarios, a new Wetted (NFPA-30) Fire calculation method is now available. Wetted (NFPA 30) Fire calculations use the NFPA 30: Flammable and Combustible Liquids Code. NFPA 30 calculations are similar to API 2000 calculations. The primary difference is how wetted area is calculated. For wetted area calculations, for horizontal and spherical vessels, as with API 2000, there is a minimum area of 55% of spherical and 75% of horizontal vessels (imposed regardless of liquid level or flame height). Aspen Plus takes the greater of the following two values:

Wetted area to flame height

55% for spherical vessels / 75% for horizontal vessels

Vertical vessels function the same as for API 2000, just with the different default maximum flame height for Wetted (NFPA 30) Fire, which is 9.14 m / 30 ft.

Direct Integration (HEM) Orifice Sizing is now Allowed for Semi-Dynamic Fire Scenarios

For Fire scenarios using the Semi-Dynamic Flash calculation method, the Direct Integration (HEM) method for orifice sizing is now allowed and can be selected from the Relieving Phase - Method drop-down list.

Recalculation Enhancement

Previously, upon entering the Safety Analysis environment all systems were recalculated completely regardless of whether the inputs were changed since the previous entry. This had a significant performance impact on entry when there were a lot of calculations to re-run. Now line sizing results are preserved, and calculations will only re-run when changes have been made to corresponding reference streams.

Note: A file from an older version will always be fully recalculated upon the first entry to the Safety Analysis environment.
Workflow and Usability Improvements

You can now create ACM models directly within Aspen Plus, rather than creating them in Aspen Custom Modeler and exporting to Aspen Plus. For more information, see Creating ACM Models in Aspen Plus.

In BatchOp and RBatch reactors, in previous versions if the reactor volume was not specified, then the cumulative duty profile was not calculated. Now this result is calculated for all cases.

Batch plots now have an option to display a vertical "tracker" bar across the plot which moves with the mouse. Plot values along the tracker bar are displayed.

When specifying equilibrium constant for chemistry, it's now possible to use mole fraction for the concentration basis.

New examples for ammonium phosphates production and ammonia cracking.

A new Aspen eLearning button on the Resources tab of the ribbon provides convenient access to online, self-paced training courses.

A new Global parameter initialization option on the Setup | Calculation Options | Calculations sheet provides a default initial value for any global parameters which do not have an Initial value specified in any block where they are referenced.

A new Makeup unit operation model is available. Makeup provides a way to balance the circulating material flow in recycle loops. Makeup adjusts the flow rate of its inlet makeup streams, and purges a portion of the feed flow, as necessary, in order to maintain specifications.

Properties

A new hydrogen package has been added, supporting H2, H2-ORTHO, H2-PARA, He, Ne, N2, Ar, CH4, and CO2. The package is based on the HYSPR method and the AP-EOS databank has been extended to include the parameters necessary to use this method with these components.

The ELECCOND property set for electrical conductivity, which previously could only be calculated by the OLI property method using Aspen OLI, can now be calculated by the Aspen Physical Property System for H2O-KOH systems only. Other systems still require the OLI method.

There are new property sets for elemental analysis: FCOMP for mole flow, WCOMP for mass flow, XCOMP for mole fraction, and WXCOMP for mass fraction. These properties reference a component, and compute the flow or fraction of all atoms which appear in that component. The fraction properties can be configured to use percent or ppm units.

The Power-Law Mixing Rule for Polymer Mixture Viscosity has been added as a new model to uniquely account for the effects of pressure on polymer viscosity. This model is not part of any method. To use it, you must add it to another method which provides the pure-component viscosities. For instructions on how to do so, see the help for the model.

In Aspen Properties Database Manager, you can export all the compounds in a databank to Excel by right-clicking the top left corner of the Compounds grid.

You can now search PubChem from the Find Components dialog box to access millions more components if the ones you want are not in our databases. This will import the molecular structure and run PCES estimation to estimate parameters.

Two refrigerant compounds available in the REFPROP model published by NIST but not available in Aspen Physical Property System databanks when we last updated REFPROP are present in NISTV140 and are now supported in the REFPROP property method. They are:

Alias	CAS Number	Name
C3HCLF4-N1	111512-60-8	HCFO-1224YD(Z)
C3H2CLF3-N1	102687-65-0	R1233ZD
The PURE40 databank has been added, based on the 2021 DIPPR public release. The following 18 compounds have been added to those in PURE39:

Alias	CAS Number	Name
C2H6O2-N1	690-02-8	DIMETHYL-PEROXIDE
C4H4O2-N4	497-23-4	2(5H)-FURANONE
C4H6O-D6	78-94-4	2-BUTEN-3-ONE
C5H8F4-D1	86154-51-0	2,2,4,4-TETRAFLUOROPENTANE
C5H8O2-D8	51933-10-9	3-METHOXY-3-BUTEN-2-ONE
C6HF13	355-37-3	1H-PERFLUORO-N-HEXANE
C6H8O-N1	625-86-5	2,5-DIMETHYLOXOLE
C7H16O3-D2	74338-98-0	1-tert-BUTYL-GLYCERIN
C10H12O2-D2	5932-68-3	TRANS-ISOEUGENOL
C12H11N-N1	90-41-5	2-AMINOBIPHENYL
C13H10O3-N1	118-55-8	PHENYL-SALYCILATE
C18H36O	143-28-2	9-OCTADECEN-1-OL,-(Z)-
C19H36O3	141-24-2	METHYL-RICINOLEATE
C19H38O4	542-44-9	1-MONOPALMITIN
C35H68O5-D1	502-52-3	GLYCEROL-1,3-DIPALMITATE
H8Si3	7783-26-8	TRISILANE
H10Si4	7783-29-1	n-TETRASILANE
H12Si5	14868-53-2	n-PENTASILANE
The APESV140 database is unrestricted starting in V14. Three new databanks, FERMENT, BIOFEED, and FLARE, are added to APESV140.

Sulfide and disulfide groups have been added to UNIFAC (Dortmund Modified) and interaction parameters for these groups and sulfones with a variety of other groups have been added.

Some search improvements have been made:

It's now possible to search for compounds using only compound class and optionally other qualifiers such as molecular weight without specifying a part of the name.

You can search for new component classes Biocomponents and Solids.

What's New in Aspen Plus V12.1
See Also

Compatibility Notes for Aspen Plus V12.1

Aspen Plus V12.1 includes new features in the following areas:

AI Training

Aspen Multi-Case

Plant Data

New Sustainability Examples

Engineering Enhancements

Physical Properties

Databanks

AI Training

You can now create AI models directly within Aspen Plus to improve the accuracy of one or more models from the model library. Exposed parameters such as distillation column efficiencies, heat and mass transfer coefficients, and drying rates can be calculated to match your data rather than having to be set to constants or regressed to simple models. Click AI Training on the Home tab of the ribbon to get started.

Improved Integration with Aspen Multi-Case

Aspen Plus V12.1 offers the following improvements to integration with Aspen Multi-Case:

You can easily create an Aspen Multi-Case scenario based on the configuration of a corresponding Aspen Plus Sensitivity Analysis. All independent and dependent variables included in the Sensitivity Analysis are imported, and the new scenario is ready to run. To export the Aspen Plus Sensitivity Analysis for use in Aspen Multi-Case, on the Sensitivity Input | Vary sheet, click Send to Aspen Multi-Case.

You can quickly import multiple variables from Aspen Plus to Aspen Multi-Case. Custom Tables in Aspen Plus now include a Send to Aspen Multi-Case button. This button allows you to create a .json file that you can use to transfer all the variables from the table to Aspen Multi-Case. In Aspen Multi-Case, you can click Import Variables from JSON within a scenario to import this .json file.

Plant Data Improvements

Aspen Plus V12.1 features the following improvements for Plant Data:

You can now filter results on the Compare Result Sets form.

When plotting results, you can now plot tag results in addition to variable results.

If the quality of the Source tag is not strictly good (for example, bad, clamped, exceeding limits, or overridden) for a Critical variable, the model will not be run; this is indicated in the Status window.

Performance has been improved in cases with a large number of tags and variables. Plant Data information involving up to 50,000 tags and variables is supported, and you can open the relevant model from within the offline model without encountering performance issues.

Plant Data now lets you edit groups of tags at once in Excel and merge the updated data using the Paste from Excel button. This button appears on the Tag Manager and Selected Variables forms.

The Excel template has additional features that make it easier to load data into the template.

Pre-Averaged Data Mode is more flexible; it can work with data that is not uniform (by turning off averaging), and you can exit pre-averaged data mode by deleting all the imported data.

New Sustainability Examples

AspenTech is focused on helping our customers improve the sustainability of the process industries. Aspen Plus V12.1 includes seven new sample files to facilitate this objective. The new samples can be found by clicking Examples on the Resources ribbon tab, or by navigating to the examples folder C:\Program Files\AspenTech\Aspen Plus V12.1\GUI\Examples. A PDF file is included with each example to document the model source, assumptions, and intent, and they are listed in the help covering all example files (search for "New in V12.1"). The examples include

Four new carbon capture examples in the Carbon Capture\Industrial Scale subfolder. Each of the new carbon capture models include the absorber and solvent regeneration columns as well as the heat recovery and trim exchangers operating in a closed loop. Rate-based distillation methods and rigorous column hydraulics are applied for accuracy. The new MEA models use the ENRTL-RK property method (electrolyte NRTL with RKS equation of state) together with equilibrium chemistry and rate-based reaction kinetics in the columns. Several key model parameters are drawn from AspenTech’s proprietary ACIDGAS unary and binary databases.

Two new biofuels examples. Focus on the circular economy continues to spur research related to biofuel and biochemical application. These new examples provide resources demonstrating modeling techniques to characterize biomass and thermal conversion of biomass to bio-oil.

A new alkaline electrolysis model for production of green hydrogen. Governments, research agencies, and major corporations are spending billions of dollars developing and scaling up new technologies to decarbonize the economy. One key technology is the production of “green hydrogen”, produced by electrolysis of water using electricity from renewable sources such as wind and solar power. This set of example files includes a rigorous custom model of an alkaline electrolysis cell and an Aspen Plus process model covering the ancillary equipment supporting the electrolysis unit.

Engineering Enhancements

New options on the Setup | Calculation Options | Check Results sheet check the solid-liquid and solid-vapor equilibrium results obtained during simulation calculations.

In RCSTR blocks, you can now specify the minimum and maximum temperatures on the Convergence | Parameters sheet. Use these to constrain the solution in problems with multiple steady-state solutions (which happens in some problems with exothermic reactions). The maximum temperature step, which used to default to 50 K, now defaults to 10% of (max-min temperature) if this is less than 50 K.

Physical Properties

The Copolymer PC-SAFT and Cubic-Plus-Association models were updated to include terms for cross-association and solvation, including self-association. This includes the new parameters PCSEIJ, PCSVIJ, and PCSAIJ for PC-SAFT and parameters CPAEIJ, CPAVIJ, and CPAAIJ for CPA. For more information, see Copolymer PC-SAFT EOS Model Parameters and Cubic-Plus-Association. These features were added in V12 but inadvertently omitted from the What's New for V12.

Databanks

The PURE39 databank is still based on the 2019 public DIPPR release. The contents from DIPPR in PURE39 are the same ones as in PURE38; only parameters from AspenTech are updated, including UNIFAC group-count information and Rackett, COSTALD, and DCPLS parameters.

The new version of NIST-TRC in the NISTV121 database is still based on the same xml files for NIST-TRC in the NISTV120 database, but is created with a new NIST data converter for parsing components and parameters more efficiently. The new converter also eliminates some duplicated components and fixes identities for some components, noticeably two spin isomers of hydrogen, parahydrogen (PARA-HYDROGEN) and orthohydrogen (ORTHO-HYDROGEN).

In V11 and earlier versions, the results for ideal gas heat capacity (CPIG) in NIST-TRC were calculated with the NIST Aly-Lee equation (CPIALEE) and the NIST ThermoML Polynomial equation (CPITMLPO). In NISTV120, NIST introduced the NIST Wilhoit equation (CPIWEOS) which was not supported in Aspen Plus. The new version of NIST-TRC in the NISTV121 database has eliminated the NIST Wilhoit equation and restored NIST Aly-Lee equation as the primary equation for the ideal gas heat capacity.

Updated NIST TDE version 10.4 and Database version 10.16 are deployed. Updates include eliminating the NIST Wilhoit equation (CPIWEOS) and restoring the NIST Aly-Lee equation (CPIALEE) for the ideal gas heat capacity.

What's New in Aspen Plus V12
See Also

Compatibility Notes for Aspen Plus V12

Aspen Plus V12 includes new features in the following areas:

Aspen Multi-Case
Aspen Knowledge In-Context
Plant Data
General usability
Engineering improvements
Safety Analysis
Physical properties
Aspen Multi-Case

Aspen Multi-Case is a new product that provides multi-core and high-performance computing capabilities for Aspen HYSYS and Aspen Plus, allowing you to run multiple simulations simultaneously and visualize results. Aspen Multi-Case serves as a single platform that allows you to seamlessly transition between setting up cases, configuring runs, concurrently running simulations, and analyzing results. By leveraging the parallelization capabilities for Aspen HYSYS and Aspen Plus, Aspen Multi-Case enables you to run a large number of simulations quickly and easily.

You can create projects that are associated with HYSYS and Aspen Plus case files ("base cases") and define scenarios for comparison and visualization. The project types available in Aspen Multi-Case support the following key workflows:

Case Study projects offer an improved version of the HYSYS Case Study / Aspen Plus Sensitivity Analysis due to easier configuration and high-performance computing.
Multi-File Analysis projects support multiple files and flowsheet topologies in order to help you analyze multiple design configurations and operating conditions for a large number of scenarios.
Reduced Order Model projects allow you to generate data that can be used in the AI Model Builder.
Aspen Multi-Case offers the following benefits:

Seamless case configuration without the need to open Aspen Plus or Aspen HYSYS.
Provides advanced data analysis and visualization capabilities.
Allows analysis of complex design problems involving multiple files and flowsheet topologies.
Results in an improved simulation workflow when optimizing across several design scenarios.
Eliminates the need to transfer data to Excel for analysis and visualization.
Aspen Multi-Case supports distributed deployment, enabling you to leverage multi-core machines on-premises or in the cloud and run the simulations in parallel. For multi-user machines (such as Windows Server), Aspen Multi-Case allows multiple users to work on the same machine and ensures that other users are prevented from editing your projects.

Interactive visualization helps you analyze results and analyze results across multiple cases. Results visualization options include plots (both two-dimensional and three-dimensional), tables (including aggregation and filtering capabilities), and matrices.

For further information regarding Aspen Multi-Case, see the Aspen Multi-Case Help.

You can create an Aspen Multi-Case project linked to your current simulator case from within Aspen HYSYS and Aspen Plus. To do so, on the Home ribbon tab | Multi-Case group, click Project. A new Aspen Multi-Case project is automatically created and appears in your web browser. The new Aspen Multi-Case project will be a Case Study project with the current simulator case attached as a base case. See Creating an Aspen Multi-Case Project.

Aspen Knowledge In-Context

Aspen Plus V12 features Aspen Knowledge In-Context, which delivers curated, featured content that is seamlessly integrated within the Aspen Plus flowsheet. This tool allows you to access relevant Aspen Knowledge material within Aspen Plus, providing relevant information that reflects your specific flowsheet topology and interactions with the process model. For example, content regarding Aspen Exchanger Design & Rating appears when you are working with an Activated Heat Exchanger. As a result, you can easily obtain the information needed to complete your current workflow.

You can access targeted information from our database, including literature, training, eLearning content, Knowledge Base articles, content from the HTFS Research Network, and videos.

Aspen Knowledge In-Context provides the following benefits:

Aids you in solving complex asset optimization challenges in an easy-to-use interface.
Facilitates improved search and discovery and successful knowledge delivery.
Makes it easier for you to locate the necessary information to troubleshoot convergence or modeling errors.
Provides best practices guidance and model building assistance.
Provides convenient access to eLearning content.
Allows you to share feedback with AspenTech to facilitate improved content delivery.
The  icon is used to indicate that Aspen Knowledge In-Context recommendations are available for the current Aspen Plus form. Aspen Knowledge In-Context recommendations are available for forms with context-sensitive help within Aspen HYSYS and Aspen Plus.

Plant Data

Plant Data now includes seamless transition with Aspen OnLine, including an option to publish a model originally developed in Plant Data to Aspen OnLine. If you open the model file from Aspen OnLine's Offline or Online folder, you can make changes within Plant Data which are stored in the Aspen OnLine project. You can also edit features, such as scheduling, which are only relevant when the project is open in Aspen OnLine. You can perform Offline-to-Online within Plant Data and, if there are no model changes, use the variable list in Aspen OnLine without having to regenerate it.

Data Conditioning includes new features for identifying data to exclude from runs. You can mark slices manually as bad, or mark a pattern as bad and let AI methods mark all similar slices as bad. Outlier detection helps identify data sets as outliers that you want to exclude. And smart sampling lets you pick a representative sample of the data to run if you have too many cases to run all of them.

Pre-Averaged Data Mode allows you to work more simply with data that has already been averaged. This mode works only with a single data import from Excel or a historian of a set of data points which are equally spaced in time. For more information, see Pre-Averaged Data Mode.

Many grids in Plant Data now have filtering options similar to those in other Aspen Plus and Aspen HYSYS forms. You can filter the items displayed in the grid by the contents of any column. Time ranges can be filtered to a specific interval. In some tables you can customize the columns displayed with the Table Layouts feature.

When you create model snapshots, the default names are now based on the run sequence names. This makes it easier to identify which snapshot comes from which run sequence.

General Usability Improvements

The plot configuration for parity plots (such as Estimated vs. Experimental) has been re-ordered. Now you pick the variable first, and then the data groups to plot from a list which only includes data groups containing that variable. This lets you generate parity plots with multiple data groups, using a different symbol for each group.

Plots you create in BatchSep can now be saved under the Plots folder of the BatchSep block and restored from this form and edited in ways already available for batch flowsheet plots. This only applies to new plots created in version V12; plots created in earlier versions cannot be saved in this way.

In custom reaction kinetics, many new variables are available, mainly specialized ones which require specific types of reactor, stream, or phase, such as number average and volume average particle diameter (based on particle size distribution) and the time (in batch reactors). Property sets are also available. These variables support the specification of rates for heterogeneous catalyst reactions, reactions involving electrolytes, mass-transfer-limited reactions, decay equations, calculations of ratios like flow/holdup which may allow scaling rules, and reactions involving polymer and non-conventional components.

In BatchOp, when you calculate pressure and specify the volume, you can now specify the pot geometry rather than specifying the volume directly. The options include horizontal and vertical vessels and various head types as in BatchSep.

More blocks now have animated flowsheet diagrams. These include:

BatchOp, on the Setup | Specifications sheet
You can pause the run during the integration step of a BatchSep block using a Pause button on that BatchSep block's animated diagram. During the pause, you can examine results (including the Time Profiles of the BatchSep block) but you cannot edit input or interact with most other controls. You can stop the entire flowsheet run from the ribbon or resume the run from the BatchSep animated diagram.

When you export binary data sets from TDE to Data Set forms, Aspen Plus now writes a description into the Data Set describing the components and range of data, similar to what was already done for pure component data sets.

The Regression | Input | Setup sheet now has a Run button that lets you run just that regression. The Regression | Results | Parameters sheet now has an Update Parameters button that lets you copy results from regressions to parameter input forms if you have not selected the option to automatically copy them. The Setup sheet also has an option to run an analysis using the regression results immediately after finishing the regression, and the plot wizard can plot these analysis results. This allows you to quickly detect inconsistencies between the model conditions and regression conditions which might lead to poor fits.

The Pitzer electrolyte ternary parameters GMPTPS, GMPTP1, GMPTP2, GMPTP3, and GMPTP4 have been converted into electrolyte pair parameters. This allows them to be stored in the Aspen Properties Enterprise Database. No such parameters are in the delivered database, but if you make a custom database with a PITZER databank containing these parameters, the model can now use them without you defining them in every model. Instead of using the Electrolyte Ternary form to enter the parameters, you now enter them on the Electrolyte Pair form. When you load files with data for these parameters from past versions, they will automatically be converted to use the new format. These changes do not affect model results. For more information, including instructions for building a custom databank with Pitzer parameters entered into your simulations, see the help for the Pitzer model.

In the Find Compounds dialog box, you can now search for compounds by CAS number if you enter digits and a hyphen (to match at least one whole section of the number).

Engineering Improvements

Aspen Plus can now make use of hybrid equipment and sensor models created in Aspen AI Model Builder. These models are installed on your computer in the same way as exported ACM models and become available in the Hybrid Models and Hybrid Sensors tabs of the Model Palette.

Custom reaction kinetics in a General reaction set is now supported in equation-oriented (EO) modeling, in the reactors RCSTR and RPlug. All custom kinetics variables from V11 are supported, as are true component concentration and pH (when the block is in true approach), mass/molar/volume flowrate and volume holdup (for liquid and vapor phase only), active cross-sectional area for RPlug, and catalyst mass. No solid phase variables are supported. Reactors using unsupported custom variables will run in the perturbation layer.

Reaction kinetics are now reported in individual RCSTR, RPlug, RBatch, and BatchOp blocks. An option in the Block Options form of each block controls whether this report is generated. The reports include rates and the terms in the rate expression for power law, LHHW, and general reactions, and the variables and terms of custom reactions.

Crystallization reactions now include an option to model the kinetics of agglomeration of crystals. The crystal agglomeration model uses the same general form and size-dependent kernels as the mixed agglomeration model from the Granulator block, but uses a time-dependent kernel specific to crystallization.

You can now connect Aspen Plus heat streams to energy ports of CAPE-OPEN unit operation models. The duty of an inlet heat stream is provided to the block as an input. The duty of an outlet heat stream is set by the block.

When you specify pad gas for the initial contents of an initially empty BatchOp block, you can now specify the initial temperature of the pad gas. This allows the pad gas option to be used when the vessel is initially empty. When there is some charge but pad gas is added to a specified pressure, the pad gas has the same temperature as the initial charge, as in past versions.

In addition to the other types of fittings, you can now specify globe valves in Pipe.

A new packing correlation from Sulzer is included in V12. This includes new packing types, materials, and dimensions:

NexRing #0.6, #0.7, #1, #1.2, #1.5, #2, #3 (new type and dimensions)

AYPlus DC standard (new type and dimension)

CYPlus standard (new type and dimension)

MellapakPlus 202.Y 352.Y 602.Y (new dimensions only)

Mellagrid 40AF (new dimensions only)

Mellapak plastic 125X (new material and dimensions)

MellapakPlus plastic 252.Y (new material and dimensions)

Other previously available Sulzer packings are also supported by the new correlation, except I-Ring, Kerapak, and Nutter ring #1.75. The old correlation will be used for those. When you open a file from earlier versions which contains a Sulzer packing supported by the new correlation, you will be prompted whether to upgrade to the new correlation.

Starting in V12 RadFrac can compute load streams in problems configured for two liquid phases (including free-water and dirty-water).

It's now possible to use version 7 of SPYRO from Technip, with both Kinetic Scheme KS9306 and 7, in Aspen Plus. If you were previously using version 6, some changes in the configuration file are necessary. For details, see Using SPYRO.

Physical Property Improvements

The Copolymer PC-SAFT and Cubic-Plus-Association models were updated to include terms for cross-association and solvation, including self-association. This includes the new parameters PCSEIJ, PCSVIJ, and PCSAIJ for PC-SAFT and parameters CPAEIJ, CPAVIJ, and CPAAIJ for CPA. For more information, see Copolymer PC-SAFT EOS Model Parameters and Cubic-Plus-Association.

HCOMB is a new property-set property for the heat of combustion of nonconventional components.

You can now click BIP Completeness on the parameter input sheets for binary interaction T-dependent parameters to see a grid displaying the completeness of binary interaction parameters entered on that sheet. The components are listed in rows and columns, and for each pair of parameters, a white cell indicates there is no data, and a colored cell and a single-letter abbreviation indicates the source of data in use for that parameter. See the help on these sheets for the key identifying the source types.

In data regressions, a new plot of deviation of any property vs. temperature is now available.

In pure component analysis, a new equation-of-state alpha function test is available. This lets you confirm the parameters for your alpha function (for one of the Peng-Robinson or Redlich-Kwong-Soave variations which support alpha functions) are thermodynamically consistent over the temperature range of interest. For more information, see Pure Component Properties.

Ternary data is now available from NIST TDE and can be added to Data forms in your project. Other updates from NIST include a new database version with updated data and 512 new compounds, and an updated version of REFPROP.

In Aspen Properties Database Manager, there is new a command which streamlines the process for switching from LocalDB to a SQL server on the local computer. See Configuring Windows to Not Use LocalDB for details. There is also now a For cloud deployment checkbox available when registering databases on a SQL server on the local computer which stores the database name as localhost rather than the computer name. This makes the local configuration suitable for use as a base image for a cloud deployment.

You can now export assays characterized in Aspen Assay Management to input (.inp) files which can be opened within Aspen Plus. The generated input files are compatible with Aspen Plus V10 and later versions. When you open the exported .inp file in Aspen Plus, the following information is specified within the Assay/Blend object manager in the Properties environment based on your specifications in Aspen Assay Management:

Distillation yield curve data (on the Basic Data | Dist Curve sheet)
Property curve data (on the Property Curves form)
The PURE38 databank is based on the 2019 public DIPPR release. The DIPPR compounds in the database are the same ones as in PURE37, but these additional heating fluids have been added:

Alias	Name
THERM59	Therminol 59
THERM62	Therminol 62
THERM72	Therminol 72
THERM75	Therminol 75
THERMD12	Therminol D-12
THERMLT	Therminol LT
THERMVLT	Therminol VLT
THERMVP3	Therminol VP-3
THERMXP	Therminol XP
In addition, the data for Therminol 55 (THERM55) and Therminol VP-1 (THERMVP1) has been updated based on the latest Eastman Chemical technical bulletins.

Safety Analysis Improvements

Improved Datasheets Workflow

The workflow for creating ABE datasheets in order to document PRD calculations has been improved and streamlined in Aspen Plus V12, including the following changes:

The new Safety Datasheets ribbon tab makes necessary commands more easily accessible (such as connecting to a workspace or closing the connection).
You can use the new Live Link option to automatically transfer all data for mapped objects to Aspen Basic. Changes in the simulation are automatically transferred to applicable datasheets. As a result, you no longer need to return to the Mapper view and click Refresh to transfer data.
When the Live Link is option is selected, you can use the contextual Datasheet button to view or create datasheets related to the Safety form. When you click the Datasheet button, a drop-down appears, displaying relevant Safety datasheet templates based on the current form and Safety calculations. This list includes both existing datasheets and those available for creation. This option eliminates the need to perform mapping if you only need to document a single system or calculation.
Fire Disengagement Calculations

Optionally, you can enable prediction of two-phase relief flow for Wetted (API) fire scenarios using the Calculate Vapor/Liquid Disengagement drop-down list. Vapor/liquid disengagement is calculated using DIERS methods to predict whether a period of two-phase relief will occur. Aspen Plus predicts the initial liquid level at which two-phase flow begins and ends, as well as the required orifice area needed for adequate protection during the period where two-phase flow occurs.

Support for API 520 Part 1 10e (2020) for Sizing Calculations

The Safety Preferences Manager now allows you to select API 520 Part 1 10e (2020) as the API 520 Part 1 Edition for Sizing Calculations. The 10th edition includes updates to the liquid viscosity correction factor equation and steam superheat correction factor tables. As a result, selecting this option leads to differences in results for the Capacity-Certified Liquid, Non-Capacity-Certified Liquid, and Steam relieving methods.

Ability to Perform Line Sizing Calculations for Non-Sizing Cases

Previously, line sizing calculations were only performed for the scenario designated as the Sizing Case on the Scenarios tab.

In V12, the Current Scenario drop-down list on the Line Sizing tab allows you to select the desired scenario, and then click Run Line Sizing to perform line sizing calculations. The Run For All Scenarios button performs line sizing calculations for all specified scenarios.

Safety Analysis Enhancements

Hydraulics Tee calculations are fully supported. The settings specified in the Tee Settings group on the Calculation Settings view are now applied correctly. Static Pressure, Total Pressure Balance, Miller Charts, Gardel, and Simple fitting loss methods are available. Additionally, the Fixed k value option allows you to use the V11 method, where Tees are implemented as a combination of a bleed and flow resistance.
The maximum Number of Vessels for Unwetted (API) and Wetted (API) Fire scenarios was increased from 3 to 9.
The Molecular Weight and Compressibility Factor Z values are now reported in the Relieving Properties group of the Fluid Properties tab.
The new Relief Composition tab allows you to view the relief composition for relieving load calculations for the scenario. It contains a table that lists the fraction represented by each component from the selected component list.
For the Semi-Dynamic Flash calculation method, when you select the Store per-step compositions for semi-dynamic fire calculations check box on the Scenarios tab of the Preferences Manager, a new tab on the Stepwise Flash Data dialog box displays the stream composition on a step-by-step basis. A column appears for each component in the stream. The row selected for relief is highlighted in the composition table.

What's New in Aspen Plus V11
See Also

Compatibility Notes for Aspen Plus V11

Aspen Plus V11 includes new features in the following areas:

Batch flowsheet enhancements
BatchOp enhancements
BatchSep enhancements
Column Analysis enhancements
Reactor modeling enhancements
Other engineering enhancements
Physical property enhancements
Workflow and usability enhancements
Batch Flowsheet Enhancements

A visual representation of a batch operating schedule is available. In the Unit Procedures object manager, the Configure sheet of each unit procedure, and the Configure sheet of each operation within a unit procedure, there is a diagram showing a visual representation of the batch schedule, based on input specifications. You can click this diagram to jump to the form for each operation, and tooltips display summaries of the operations. A similar diagram, based on the results and updated live during the run is the Unit Procedure Operating Schedule, available by clicking Operating Schedule in the Batch tab of the ribbon.

In the Results Summary | Streams form for batch hierarchies (and at the top level if it is set to batch) there is a Batch sheet which reports cumulative mass, mole, and energy for the streams in the batch flowsheet. BatchOp has a similar sheet in its Stream Results form reporting on its feed and product streams, as does the Results form for each stream in a batch flowsheet. These cumulative flow results will also appear in the report file.

Controllers in batch flowsheets now have built-in strip chart plots in the plot gallery on the Home tab of the ribbon. These include all controller models (set point, process variables, and controller outputs are plotted as appropriate to each model). You can now access the variables of the PID controller in unit procedures as well. In the PID controller, the Gain is now reported in the results.

Sensitivity blocks are now supported in batch flowsheets. RadFrac is also supported as a continuous unit operation, but please see Creating a Batch Flowsheet for guidelines on using it effectively, as well on for limitations in the variables accessible in unit procedures and strip charts.

The Dryer block now has a Batch mode which allows it to be used in batch flowsheets. In this mode you specify the drying time directly, rather than the residence time in the dryer determining the drying time. Only convective dryers can be modeled in this mode, and certain other options are not available.

BatchOp Enhancements

You can now specify classification for solids leaving the tank in condensed phase draw streams. You can choose to have all solids remain in the tank or preferentially remove fine or coarse solids, specifying the separation sharpness and offset of fines. If there are two liquid phases, you can also choose which liquid phase to draw from.

BatchOp now also offers the ability to model filtration and deliquoring of solids, using the general filtration model and the Nicolaou or Schubert deliquoring model, as used in the Filter block.

You can now choose to have the tank start empty, and not connect a batch charge stream to the block.

In the BatchOp | Results | Balance sheet, cumulative mass and energy balance results are shown including the initial and final contents of the pot. Component-based balance results are also displayed. These results also appear in the report file.

In the BatchOp | Profiles | Overall sheet, when Vessel results are displayed, the vapor mass fraction has been supplemented with the phase fractions for all phases on mass and mole basis. Cumulative draw mass is also displayed.

In the BatchOp | Results | Crystallization and BatchOp | Profiles | Crystallization sheets, new results available include D10 and D90 (particle sizes larger than 10% and 90% of the particle mass), magma density, nucleation rate and growth rates (for substreams with single salts precipitating), and super-saturation of each solute. There are also new strip chart plots in the plot gallery for magma density and super-saturation, and all the new results are available in the custom strip charts.

In the BatchOp | Profiles | Composition sheet, a greater variety of profiles is now available. You can choose combinations of vessel or vent profiles, on mole or mass basis, and as composition or accumulated amount. For vessel profiles, you can choose which substream to show, and for vessel profiles of the MIXED substream, you can choose to show results for a specific phase.

BatchSep Enhancements

The pot-only configuration is supported. You can select Pot or Batch distillation column under Configuration on the Setup | Configuration sheet.

Vendor trays and vendor packing are now supported. This feature has been updated (compared to previous versions of standalone Aspen Batch Modeler) to use the tray and packing types and input method from Column Analysis in RadFrac. Only rating calculations are supported, and these features from RadFrac Column Analysis are not supported: hydraulic plots, user subroutines, active area under downcomer, swept-back weirs, downcomer balancing, export to vendor, Montz packing, MD trays, generic or custom trays. When specifying vendor packing, setting the section packed height does not update the input for HETP, though the value will be reflected in the results.

Multiple batches are now supported. On the Operating Steps form, the Multiple Batches sheet lets you configure the run to consist of multiple batches. On the Initial Conditions form, the Receiver Recycle sheet lets you specify which distillate receivers and side draw receivers are recycled into the initial charge for subsequent batches, and the Distillate Receivers and Side Draw Receivers sheets lets you specify that any material remaining in the receivers at the end of one batch cycle is used for the initial condition of the next batch. The Final Conditions form lets you specify that the final column contents remain in place and are recycled to the next batch.

BatchSep now has a custom strip chart available in the plot gallery. This lets you select any combination of BatchSep variables to plot over time.

The Aspen Batch Modeler (ABM) to BatchSep converter is now delivered with Aspen Plus, and updated to support the features listed above in Aspen Batch Modeler files from older versions. To use the converter:

In the GUI\Xeq folder of the Aspen Plus installation, run ConvBspfToBkp.exe.
Under Aspen Batch Modeler File, click Browse and select an Aspen Batch Modeler file. The converter can convert ABM files that use the column or pot-only configuration. ABM files using fitting cases or experiments are not supported.
Under Aspen Plus File Directory, click Browse and select the location where the converter should write the Aspen Plus file.
The Aspen Plus File Name defaults to the ABM file name with the .bkp extension, but you can change it.
Click Convert, and the message window at the bottom will alert you to any issues with the conversion.
If the conversion is successful, the messages will end with Conversion finished. Then you can click Open converted file in Aspen Plus V11, or import the file into another Aspen Plus file from within Aspen Plus.
Column Analysis

RadFrac with Column Analysis now supports trays with lattice downcomers. This modern style of tray allows greater liquid load than conventional trays, and up to 12 downcomers per tray. In these trays, the downcomers on each tray are rotated 90 degrees from the downcomers on adjacent trays, so the overall grid of downcomers looks like a lattice. Only portions of the bottom of each downcomer are open, allowing them to distribute the liquid as well as avoiding dropping liquid too close to the downcomers on the tray below.

All downcomers on lattice trays must have the same width and the same height.
Lattice trays are only supported for sieve trays in rating calculations. The sizing mode is not supported, nor are valve or bubble cap trays.
RadFrac with Column Analysis also supports custom trays for rating calculations only. You can use custom trays to model innovative or unusual tray designs not covered by the specific tray types available in Column Analysis. For these trays, you specify key parameters such as the fraction of active area, fraction of hole area, fraction of downcomer area, and the diameter. Aspen Plus calculates the results as for other trays; only average or total downcomer properties are available since details about individual downcomers are not specified.

In RadFrac with the Interactive Sizing mode of Column Analysis you can choose to use equal bubbling area rather than equal flow path length to design columns with 3 or more tray passes.

Column Analysis now includes 3 sizes of Montz structured packings, and two sizes of Raschig Super-Ring Plus random packing. In addition, the latest version of the packing database includes updated data for Raschig Super-Pack, Tri-Packs, and Jaeger-Ring.

Reactor Modeling Enhancements

RCSTR now supports crystallization reactions. You can enable either or both of chemical reactions and crystallization reactions on the RCSTR | Setup | Kinetics sheet. You can also choose to run RCSTR without reactions. In this case, it merely mixes inlets and assigns phases to designated outlet streams. It has the same set of crystallization results as BatchOp available based on the steady-state values.

Crystallization reactions have been enhanced to allow the consideration of diffusion limitations and Gibbs free energy of crystal formation.

In RStoic and RYield blocks, you can now use separate outlet streams to hold the vapor and liquid products, in addition to the existing option to have a separate water decant stream. All streams are connected to the same Products port on the flowsheet; use the Setup | Streams sheet to define which phases go into each outlet stream.

Safety Analysis Improvements

Preparing Documentation using ABE Datasheets

Starting in V11, within the Safety Analysis environment, you can use Aspen Basic Engineering (ABE) Datasheets to prepare documentation of the design basis for any PSVs, rupture disks, and storage tanks. The Safety Analysis environment provides standardized relief systems calculations and data consistency across the final report deliverables, making it faster and easier to complete a pressure relief analysis.

ABE Datasheets offers a light-weight, single-user experience to create datasheets quickly and easily. The technology also offers a server-based, multi-user experience so that companies can have a centralized repository of their relief systems design documentation. To get started, from the Safety Analysis environment, on the Home ribbon tab, click Datasheets. The Datasheets button is only available when Aspen Basic Engineering is installed on your machine.

A number of Safety datasheet templates are available for selection. When creating datasheets, you can use the filters to view only Safety-related items. To view the available Safety datasheet templates, expand the list below.

ClosedSafety Datasheet Templates
Improved Accuracy for Line Sizing Calculations Based on Aspen HYSYS Hydraulics

Starting in V11, Safety Analysis environment line sizing calculations use Aspen HYSYS Hydraulics, the same rigorous technology available in Aspen HYSYS. This technology supports both single phase and multi-phase pressure drop calculations for high and low velocity flows.

You can switch between the Design and Rating methods. Both methods use Aspen HYSYS Hydraulics calculations, which are performed using the property package associated with the sizing case’s Selected Stream.

You can use the new Edit Pipes & Fittings view to describe the line in detail on a fitting-by-fitting basis. The initial configuration consists of three items, in the following order:

1) Pipe to represent the inlet flange to the PSV

2) PSV (choke diameter)

3) Pipe to represent the outlet flange from the PSV

You can use the Calculation Settings view to configure settings for individual line sizing calculations. These calculation settings are based on Aspen Hydraulics piping selections.

When you open an Aspen Plus case containing relief valve line sizing calculations performed prior to V11, you can either upgrade to the current line sizing methods or continue to use the legacy line sizing calculation methods.

We recommend that you upgrade to the current line sizing methods to take advantage of the more accurate Aspen Hydraulics calculations.

New Non-Capacity-Certified Liquid Orifice Sizing Option

Aspen Plus V11 offers a Non-Capacity-Certified Liquid orifice sizing option. This method is used for liquid relief through a valve not requiring capacity certification. This option is recommended for valves built for older API standards or valves that are not certified for liquid relief but may encounter scenarios in which they must pass an all-liquid stream.

Ability to Choose Rigorous Two-Phase Method for Control Valve Scenarios

In Aspen Plus V11, Control Valve Failure scenarios include a new Handle multi-phase flow rigorously check box. When this check box is selected, the control valve uses a rigorous calculation method to obtain more accurate flow rates and pressure drop for both vapor and liquid flow.

Restricted Lift for Relief Valves

In Aspen Plus V11, you can opt to model restricted lift relief valves. You can select the Restricted Lift Valve check box on the PRD Data tab to transform your PSV into a restricted-lift PSV in accordance with API 526, allowing you to reduce the rated flow into the disposal system in order to meet the pressure loss criteria on the outlet line. You can specify the fraction lift (relative to the full lift).

Cubical Expansion Coefficient Calculated for Thermal Expansion Scenarios

For Thermal Expansion scenarios, Aspen Plus can now calculate the cubical expansion coefficient. When you select the API 521 6e (2014) Equation (4) option, the cubical expansion coefficient is calculated based on the thermodynamic properties of the selected stream.

Ability to Select Preferred Version of API 526 for Relief Valve Selection

On the General Setup tab of the Preferences Manager, you can now choose between API 526 7e (2017) and API 526 5e (2002) as the preferred edition of the API 526 standard for relief valve selection. For new PSVs, API 526 7e (2017) is the default selection.

Ability to Edit Wetted Area Exponent for Fire Scenarios

Supercritical, Wetted (API), and Semi-Dynamic Flash Fire scenarios now allow you to edit the wetted area exponent for fire calculations involving partial confinement.

Usability Enhancements

A new Safety Messages List panel allows you to view all Safety-related errors, warnings, and messages for your current case. This view is automatically updated when you add or edit PRDs.

The summary table on the Scenarios tab was simplified and improved.

The Reference Stream behavior was improved.

You can now select a valve from the Selected Orifice drop-down list even when the orifice has not yet been calculated. After selecting an orifice, if you want to clear your selection, you can now select the <empty> option.

Other Engineering Enhancements

Aspen Plus is now a 64-bit program and requires a 64-bit version of Windows. Large simulations which exceeded the memory limitations of 32-bit programs can now run, provided sufficient memory is available on the computer.

Compr now reports results for head at surge and stonewall.

Resizing Options Available for Quoted Equipment in Activated Economics

The Quoted equipment tab of the Economic Equipment Data Summary grid features a new Allow Resize drop-down list.

Yes | Allow Resizing is the default selection. When Yes is selected, the quoted item details are changed after the evaluation is updated based on changes in the simulation. In some cases, data may be removed.
When No | No Resizing is selected, the quoted item details remain unchanged from one evaluation to the next and is not impacted by changes in the simulation. Keep in mind that if simulation conditions change, the quoted item details may no longer be accurate.
Physical Property Enhancements

A new method, the density marching method (Venkatarathnam, 2014) is available for use in computing P-T Envelope analysis. This method uses density rather than pressure or temperature as the independent variable, which removes computational difficulties the standard method encounters around the critical point. The new method also supports vapor-liquid-liquid systems.

A new option on the Setup | Calculation Options | Flash Convergence sheet lets you use the RefProp flash algorithm instead of the ones built into Aspen Plus when using one of the RefProp methods (RefProp, GERG2008, or IAPWS-95). By default, the Aspen flash algorithm selected for Flash convergence algorithm on that sheet is used with these methods. It is faster, but in some cases this may lead to incorrect phase behavior.

Binary analysis includes new types Txx, Txxy, and Pxxy which compute liquid-liquid equilibrium in addition to or instead of vapor-liquid equilibrium. With the new types you can generate Txy and Pxy plots which include the liquid-liquid behavior as well as the vapor-liquid behavior.

Within the Aspen Properties Database Manager, you can now export data to Excel from the grids of compounds in the Find Compounds dialog box and the Selected Compounds form.

New property set properties are now available for variations on heat capacity ratio CPCV:

CPCP-R and CPCP-RMX provide the heat capacity ratio CP/(CP-R) for pure components and mixtures, respectively.
CPCVIG and CPCVIGMX provide the ideal gas heat capacity ratio CP/CV for pure components and mixtures, respectively.
There is also the new property set property SC, Schmidt number, which is the ratio of kinetic viscosity to diffusivity.

The PURE37 databank has been added with the latest data from DIPPR. This release does not include any new components or parameters, but it includes updated data for many parameters. See compatibility notes.

The NIST database is based on version 10.12 of NIST's data. The NIST TDE engine has been updated to version 10.2.

The NIST-TRC databank now has PC-SAFT parameters for 1042 compounds. These parameters were not previously available in NIST-TRC. The compounds include aromatic and nonaromatic hydrocarbons up to C19 and many compounds containing oxygen, nitrogen, sulfur, and halogen atoms.

A new ACIDGAS databank is available with components likely to occur in acid gas processing and parameters for suitable property methods.

The PPR78 method, implementing the Predictive Peng-Robinson equation-of-state model, is now available. It combines the 1978 Peng-Robinson model with classical Van der Waals mixing rules involving a temperature-dependent binary interaction parameter predicted by PPR78 from the chemical structures of molecules within the mixture.

The Modified Rackett liquid molar volume is now available as a pure component model VL0MRK you can use in conjunction with the mixture model to ensure consistency.

The REFPROP model from NIST has been updated to version 10.1. This version includes 25 new fluids:

Alias	Name	CAS Number
C16H34

N-HEXADECANE	544-76-3
C22H46	N-DOCOSANE	629-97-0
C6F14	PERFLUORO-N-HEXANE	355-42-0
C6H5CL	CHLOROBENZENE	108-90-7
CL2	CHLORINE	7782-50-5
C2H4O-2	ETHYLENE-OXIDE	75-21-8
C2HF3	TRIFLUOROETHYLENE	359-11-5
C3H2F4-N2	C3H2F4-N2	29118-25-0
C3H3F3	3,3,3-TRIFLUOROPROPENE	677-21-4
C2H4CL2-2	1,2-DICHLOROETHANE	107-06-2
C2H3CL	VINYL-CHLORIDE	75-01-4
C4H2F6	C4H2F6	692-49-9
C4H6-4	1,3-BUTADIENE	106-99-0
C4H6-1	1-BUTYNE	107-00-6
C5H10-2	1-PENTENE	109-67-1
C6H14-4	2,2-DIMETHYL-BUTANE	75-83-2
C6H14-5	2,3-DIMETHYL-BUTANE	79-29-8
C6H14-3	3-METHYL-PENTANE	96-14-0
C2H2	ACETYLENE	74-86-2
C4H6	CYCLOBUTENE	822-35-5
C3H4-1	PROPADIENE	463-49-0
C3H6O-4	PROPYLENE-OXIDE	75-56-9
C2H6O2	ETHYLENE-GLYCOL	107-21-1
C2H7NO	MONOETHANOLAMINE	141-43-5
C4H11NO2-1	DIETHANOLAMINE	111-42-2
Workflow and Usability Enhancements

You can now hide components with zero flow in the stream summary. To do so, when the stream summary is displayed, click Select Properties in the ribbon, then click the Scope tab of the Edit Stream Summary Template dialog box, then check the box Hide Components with zero flow.

You can now save the results plots from Plant Data by entering a name for the plot and clicking Save. They appear under the Results plots folder.

The Molecular Structure form has several workflow enhancements. The Structure sheet is now integrated into the left side of the Functional Groups sheet, allowing you to reference this picture when specifying functional groups. Also, when selecting functional groups:

You can filter the list of groups by type.
In the list beside each group number is a text description of the group.
To the right is a large image of the structure the selected group represents.
The table of functional groups has been enhanced to show these images and descriptions in each row.

When copying property parameters to input from the Retrieve Parameter Results dialog box, starting in V11 they are now tagged as source USER-databankname, allowing you to distinguish them from data you entered. New options in this dialog box and in Clean Property Parameters allow you to overwrite or remove this data without affecting data you entered.

OOMF now provides ENCRYPT and DECRYPT commands. You can encrypt EBS script files with a password and distribute them without those files being able to be read or modified. Encrypted files can be invoked without the password.

The Datasheets functionality (available through the Datasheets ribbon tab) features substantial improvements in V11.

Usability was enhanced significantly. Icons were updated to be more intuitive, and the workflow is now quicker and easier.

General performance and speed were improved.

The mapping and data transfer processes were simplified. Mapping is now performed automatically performed. To create datasheets, confirm the mapping and transfer the simulation data to the workspace.

What's New in Aspen Plus V10
See Also

Compatibility Notes for Aspen Plus V10

Aspen Plus V10 includes new features in the following areas:

Engineering enhancements
Physical property enhancements
Workflow and usability enhancements
Engineering Enhancements

Batch Flowsheeting

Aspen Plus V10 includes the ability to create batch flowsheets. You can either designate the main flowsheet as Batch to model a single batch process, or you can designate one or more Hierarchy blocks as Batch to model a process containing a mixture of continuous and batch operations.

Runs of batch flowsheets are dynamic in that the results evolve as a function of time. You can view the evolution of key results with time using tables and strip charts.

A new unit operation called BatchOp, which supports batch reaction and crystallization, is now available in the batch flowsheet model palette. A number of instantaneous unit operations such as Valve, Pump, Compr, Heater, HeatX, Flash2, Flash3, Sep, Sep2, and Decanter can be used along with the BatchOp unit operation to create a batch flowsheet to model common scenarios such as a batch reactor with a knock-back condenser.

Note: Batch runs have been renamed to background runs to avoid confusion. Batch flowsheets do not support being run in the background.

On-Line Modeling

The Plant Data feature allows you to access the power of Aspen OnLine directly within your Aspen Plus model. You can connect your model to plant data and perform runs using the plant data as inputs. You can plot the results of multiple runs and view how model variables change over time or with respect to another variable. Use the Plant Data tab of the ribbon to access these features. There is a new example model showing the use of Plant Data.

Dynamic Simulation

When a flowsheet containing Valves is exported to Aspen Plus Dynamics as a pressure-driven simulation, a flow controller is created automatically if the inlet to Valve is an external feed stream. Creation of this flow controller can be disabled from the Dynamics form of the Valve.

Reaction Modeling

General reactions now include the custom reaction class. These reactions are similar to power law reactions, but with an additional custom term which multiplies the rate expression. This custom term can involve any expression involving constants, temperature, pressure, saturation pressure of a component, and the measures of the concentration of a component which other reaction types allow. Due to this extensibility, these reactions cannot be defined as reversible.

Activated Energy Analysis

Activated Energy Analysis and the Energy Analysis environment now support MHeatX blocks.

Safety Analysis

In the Safety Analysis environment, the new Ideal Cp/Cv option in the Preferences Manager allows you to use the ideal gas Cp when calculating the heat capacity ratio Cp/Cv.

Solvers

The DMO and LSSQP solvers for equation-oriented models now allow the use of a filter method as an alternative to the penalty function which has traditionally been used with the line search. See Using the Filter Method for more information.

User Models

It is now possible to create a user flash subroutine to take the place of the built-in Aspen Plus flash. Select User for Flash convergence algorithm on the Setup | Calculation Options | Flash Convergence sheet to activate it and write the subroutine FLASHU as described in chapter 2 of Aspen Plus User Models.

Column Analysis

Aspen Plus V10 features a new downcomer choke flood correlation for trayed columns. Downcomer choke flood is a problem in high liquid rate applications in trayed columns, occurring when the downcomer top area is not large enough to handle the froth flow, and vapor cannot disengage properly from the liquid. Choke flooding on certain trays reduces the capacity and efficiency of the trays and other trays in the immediate vicinity, which can sometimes lead to serious operability issues for the entire column.

The Geometry tab | Design Parameters page allows you to specify a combined Percent Jet Flood and Downcomer Choke Flood.

The Results tab | Summary page lists the Maximum % Downcomer Choke Flood (%), which is the highest calculated downcomer choke flood and the tray and location in which it occurs.

The Downcomer Choke Flood [%] is reported for each tray on the Results tab | By Tray page.

A new Downcomer Loading Relative to Choke Flood diagram on the Hydraulic Plots form shows a bar chart of the Downcomer Loading value (left axis) mapped against the Downcomer Choke Flood Percent (right axis).

In the initial version of Column Analysis, some of the limits on the side downcomer width were too restrictive and did not allow some actual columns to be modeled. The new limits on side downcomer width, where D is the diameter of the column, are:

1-pass trays: 0.025D to 0.4D
2-pass and 3-pass trays: 0.025D to 0.25D
4-pass trays: 0.025D to 0.2D
Physical Property Enhancements

Databanks

The PURE36 databank has been added, with the latest data from DIPPR. In the past two releases, DIPPR has inadvertently given us a data file including compounds whose data was not yet intended for publication. As a result, there are actually no new compounds in PURE36, but there are over 100 compounds which first appeared in PURE32 or PURE35 which were not previously announced and which are still included in PURE36.

ClosedList of previously unannounced compounds added in PURE32 or PURE35
The NIST-TRC databank has been updated with 2016 data from NIST. In addition, all compounds removed from NIST-TRC since V8.4 and their parameters have been restored in this version, resolving the issues with removed compounds in recent versions.

The NISTV100 database includes a new NIST-EOS binary databank which includes the parameter PRKBV used in the PENG-ROB and PR-BM equation-of-state property methods. The data included covers 926 compounds and 4102 pairs. This is a very significant expansion of coverage for these property methods.

The PC-SAFT binary parameter PCSKIJ has been regressed for hydrogen with ethane, ethene, propane, and propene based on data from NIST. These parameters are included in the PC-SAFT databank.

The parameter DCPLS (difference between solid and liquid Cp at triple or freeze point) has been added to NIST-TRC for compounds with available data. This addition allows freeze out and solubility modeling to be carried out using components from the NIST database.

Solubility Modeling

Solubility analysis is now available from the Home tab of the ribbon in the Properties environment. This analysis computes and plots the solubility of specified solute components in a fluid mixture.

The SFE Assistant on the Components | Specifications | Selection sheet allows you to quickly set up chemistry defining the salt reactions when dealing with dissolving solids.

The solubility index property set SOLINDEX can now be calculated by OLI when using the Aspen OLI Interface and OLI is the selected property method. In past versions, in such a configuration the Aspen method was used instead and a message was printed to indicate this.

Property Models

The IAPWS Industrial Formulation 1997 steam table is now available as the IF97 property method. This is a fast version of the IAPWS-95 steam table which uses polynomial models instead of the complex Helmholtz equation of state, while providing comparable accuracy in the range of application.

The GPSWAT property method for gas treating and sour water systems, based on the method by the same name published by the Gas Processors Association in 1990, is now available.

The Solid Antoine vapor pressure model has been extended with terms that support DIPPR equations 101 and 115. The new model uses a longer PSXANT vector with additional coefficients for the new terms, so no thermo switch (THRSWT) is necessary to distinguish the equation forms. All data in APV100 has been converted to the PSXANT form; for compatibility with user-entered data, the model checks for and uses PSANT before it looks for PSXANT. To switch to the new form, copy elements 1-3 of PSANT to elements 1-3 of PSXANT and elements 4-5 of PSANT to elements 8-9 of PSXANT.

DIPPR data in the forms of equation 101 and 115 has been added in the PSXANT form to solid-forming species in PURE36, except for compounds which already have solid Antoine data in the SOLIDS databank, for which that data is retained for compatibility. These compounds are: AG, C2H3NAO2, H3PO2, H3PO3, H3PO4, HG, I2, K, KBR, KCL, KOH, K2CO3, LI, LIH2PO4, MGO, NA, NABH4, NACL, NACLO3, NAF, NAHCO3, NAHSO4, NAH2PO4, NANH2, NANO3, NAOH, NA2CO3, NA2SO4, NA2S2O4, NA4P2O7, P-W, P4O10, S, SI, SIO2, TIO2, ZN, ZNO, ZNSO4. In addition, the solid heat of formation and Gibbs free energy (DHSFRM, DGSFRM) from DIPPR have also been added to PURE36, except for the above compounds.

In addition, solid vapor pressure may be computed by Barin or two NIST models. These are existing models which are invoked using the same thermo switch used for liquid vapor pressure. This calculation is now documented.

The PSRK, RKSWS, and RKSMHV2 property methods have been enhanced with the volume translation feature recently made available in Volume-Translated Peng-Robinson (VTPR). In these cases, the feature was added to the existing models but must be activated by setting option code 2 of the relevant models to 1 (volume translation for liquid only) or 2 (volume translation for liquid and vapor).

Property Sets

Several new property sets have been added.

DHVLMX and DHVLMXMS are the heat of vaporization for a mixture, on mole and mass basis, respectively, based on vaporizing 1% more of the liquid.

For solids with particle size distributions: MAGDEN is the magma density of a slurry. MOMENT0 through MOMENT4 are the zeroth through fourth moments of the particle size distribution. And for each of the D## property sets (D10, D20, etc.) which give the particle diameter which is larger than that percent of the solids mass, there is now a Q0D## property set which is the particle diameter larger than that percent by particle number.

The existing property SSOLUB (mole fraction equilibrium solubility of a solid solute) has been complemented with the same solubility measured in other ways:

Mole Basis	Mass Basis	Equilibrium solubility on this basis
SOLUB	SOLUBW	Amount of solute per amount of solute-free solution
SOLUBC	SOLUBWC	Amount of solute per volume of solute-free solution
SOLUBM	–	Molality: Moles solute per kg solute-free solution
SSOLUB	SSOLUBW	Fraction: amount of solute per amount of solution
SSOLUBC	SSOLUBWC	Concentration: amount of solute per volume of solution
Properties Usability Enhancements

In Aspen Properties Database Manager, when data is displayed on the Pure | View, Binary | View, or Pair | View sheets, you can right-click the top left cell in the grid and click Export to Excel to open a new Excel workbook and write all the data from the table to it.

The Aspen Properties Enterprise Database now supports SQL Server 2016.

Component Groups can now be specified in the Properties environment and in Aspen Properties. This allows them to be used in Property Sets defined in the Properties environment.

In the Methods | Parameters forms in the Properties environment for temperature-dependent pure and binary parameters, the form has been transposed to show each component or component pair in a row rather than in a column. This allows you to more easily navigate the sheet when there is a lot of data, and to sort the sheet by a column. In the form for pure component parameters, there is now also a Source column which displays the source when you switch between multiple sources of data for the same parameter; the form for binary parameters already had this feature.

The Retrieve Parameter Results dialog box now allows you to save all the retrieved parameters with the model. This allows you to preserve the values of those parameters with the model for upward compatibility, so that those values will be used even if the databanks change. However, doing so marks those parameters as user input, and you will not be able to distinguish them from parameters you entered yourself after doing this. The Methods | Parameters | Results | Pure Component forms also allow you to save retrieved parameters in this way.

Workflow and Usability Enhancements

The Control Panel now has a feature called Convergence Monitor which allows you to plot the progress of convergence in various ways.

From the results of sensitivity blocks with at least two varied variables, you can generate 3-D plots showing the way one tabulated variable varies with two varied variables. Click 3-D Surface Plot in the plot gallery while you have these results open and select the variables to plot. You can then manipulate the plot from the controls in the ribbon or by clicking and dragging to rotate the plot. Consider this as an alternative to a parametric plot which shows the same data as a set of lines.



When you save a compound file, the file type for the simulation stored inside the compound file is now a .bkp file by default. This can be changed in File | Options on the Files tab.

You can now easily import property sets specified on the Report Options form (for the stream summary in version V8.8 and earlier) into the new stream summary. While viewing the stream summary, click Select Properties in the ribbon, then click Add Report Prop-Set.

Aspen Version Comparison Assistant (AVCA) is now available from the File menu. AVCA lets you validate new versions of AspenTech products. It compares models from an older version with models from a newer version and identifies differences in the selected variables.

Heater, Mixer, Decanter, Flash2, and Flash3 now include the calculated pressure drop on their Results | Summary sheets and Pump includes calculated outlet temperature. The new variables are all accessible by Calculators and similar operations. Flash2 and Flash3 now also show the vapor fraction in both mole and mass basis in their results.

The internal design specifications and varied variables in RadFrac blocks now have individual descriptions, displayed and editable on their Specifications sheets and the Specification Summary. If you do not enter a specification, RadFrac creates one.

The azeotrope search report from Aspen Distillation Synthesis can now be saved as an Acrobat file (*.PDF) in addition to the text and HTML formats.

There is now a common block accessible by user models in FluidBed which can access the properties of the current cell being processed within the reactor. See Aspen Plus User Models for information about this common block.

On plot axes, there is now a Scale Multiplier - 10^ option which lets you adjust all the values by a power of 10. This allows you to eliminate scientific notation when the numbers plotted are very small or very large, or to match data used in some industries which adjusts values by a certain power of 10.

The default working folder is now in the Documents folder in your profile in AspenTech\Aspen Plus <version>.

What's New in Aspen Plus V9
See Also

Compatibility Notes for Aspen Plus V9

Aspen Plus V9 includes new features in the following areas:

Engineering enhancements
Physical property enhancements
Workflow and usability enhancements
Physical Property Enhancements

The Volume-Translation Peng-Robinson (VTPR) property model is now available. As PSRK did for SRK, this model improves the classic cubic Peng-Robinson equation of state with a volume-translation term and the residual term from the UNIFAC group contribution method. Use this method for gas processing and high-pressure chemical systems where you would have used PSRK but are getting unsatisfactory property calculations from it (in particular for enthalpy and infinite dilution activity coefficient).

The RefProp engine has been updated to version 9.1102. This is a minor bug-fix release over the version used in recent releases and there are no new features in it. NIST TDE has been updated to version 10.0.

The PURE35 database, based on 2015 DIPPR databanks, is now available. The NIST-TRC databank now includes new data published by NIST in 2015. The NIST-TRC databank is also now one of the databanks selected by default for new simulations. The PURE35 databank has the following added compounds:

Alias

Name

CAS Number

C3H2CLF3-N1	R1233ZD	102687-65-0
C3H4O2	PYRUVIC-ALDEHYDE	78-98-8
C6F12O-N1	NOVEC649	756-13-8
C6H5NAO	SODIUM-PHENATE	139-02-6
C13H10O3	DIPHENYL-CARBONATE	102-09-0
C20H36O4-D1	DI-2-ETHYLHEXYL-MALEATE	142-16-5
CL6OSI2	HEXACHLORODISILOXANE	14986-21-1
NIST-TRC has these added compounds:

Alias

Name

CAS Number

C9H22O3SSI	3-MERCAPTOPROPYL-TRIETHOXYSILANE	14814-09-6
C37H44N5O13	ERGOTAMINE-TARTRATE-DIHYDRATE	1-01-4
C7H4CLF3	P-CHLOROBENZOTRIFLUORIDE	98-56-6
C6H15O3P	TRIETHYL-ESTER-PHOSPHOROUS-ACID	122-52-1
Pure-component Rackett and COSTALD density parameters for many components in PURE35 were corrected or added where they were missing, based on new regressions. Some other specific binary parameters were added or updated; see the Compatibility Notes for details.

New pseudo-binary option in binary analysis lets you specify an entrainer at a fixed composition while the compositions of the two primary components vary.

CAPE-OPEN Property Packages using the version 1.1 standard can now be imported and exported.

Users without administrative privileges on their computer can now use CAPE-OPEN Property Packages. Exporting and registering CAPE-OPEN Property Packages no longer uses cotappm.exe. Now exported packages are automatically written to the %LOCALAPPDATA%\AspenTech\CAPE-OPEN Property Packages <version> folder. %LOCALAPPDATA% is normally C:\Users\(username)\AppData\Local but it could be elsewhere depending on Windows installation. To install CAPE-OPEN Property Packages from old versions or other computers, add them to this folder.

The new Aspen Properties Excel Add-in installs automatically, and uses a ribbon tab to make it easier to find its features.

The RTOMXB, RTOSRK, and RTOSTM property methods have been re-introduced to provide upward compatibility for RT-Opt projects. These methods omit many enhancements which have been made to the property models over the years but make it easier to use those models in legacy projects. New projects use the MXBONNEL, SRK, and STMNBS2 or other steam table method of choice instead of these methods.

Property-Set Properties

All property-set properties now have only one physical type. In past versions, some properties allowed two or more of mole-based, mass-based, and flow units, such as enthalpy in kJ/kmol, kJ/kg, and kJ/s. Starting in V9, these properties have all been separated into different properties with different names. This will make it clearer what a given property represents and also make it clearer which unit conversions can be performed within results.

For each affected property, the old property name is used for the mole-based property and new property names apply to the other versions. Some properties underwent this separation of units in past versions; the following list only shows the ones where the change occurred in V9.

For compatibility, the mole-based property sets still support other kinds of units, but we recommend you choose the correct property for the desired unit type. There are limitations in using molar property sets with non-molar units with the new Stream Summary.

In addition, new properties for liquid 1 phase fraction and liquid 2 phase fraction are available, L1FRAC and L2FRAC as mole fractions and MASSL1FR and MASSL2FR as mass fractions.

Pure-component properties:

Mole basis	Mass basis	Flow
AVAIL	AVAIL-M *	AVAIL-FL *
CP	CP-M *	 
CPIG	CPIG-M *	 
CV	CV-M *	 
DG	DG-M *	DG-FL *
DGPC	DGPC-M *	DGPC-FL *
DH	DH-M *	DH-FL *
DHPC	DHPC-M *	DHPC-FL *
DHVL	DHVL-M *	DHVL-FL *
DS	DS-M *	 
G	G-M *	G-FL *
GIG	GIG-M *	GIG-FL *
H	H-M *	H-FL *
HIG	HIG-M *	HIG-FL *
S	S-M *	 
SIG	SIG-M *	 
U	U-M *	U-FL *
V	V-M *	V-FL *
Properties of components in mixtures:

Mole basis	Mass basis	Flow
CHEMPOTE	MCHEMPOT *	CHEMPOTF *
VLSTD	MVLSTD	VLSTD-FL *
VVSTD	MVVSTD	VVSTD-FL *
Mixture properties:

Mole basis	Mass basis	Flow
AVAILMX	MAVAILMX *	AVAILMFL *
CPIGMX	CPIGMX-M *	 
CVMX	CVMX-M *	 
DGMIX	DGMIX-M *	DGMIX-FL *
DGMX	DGMX-M *	DGMX-FL *
DHMX	DHMX-M *	DHMX-FL *
DHVLMX	DHVLMXMS	 
DSMX	DSMX-M *	 
GIGMX	GIGMX-M *	GIGMX-FL *
GMX	MASSGMX *	GMX-FL *
GXS	GXS-M *	GXS-FL *
HIGMX	HIGMX-M *	HIGMX-FL *
HXS	HXS-M *	HXS-FL *
L1FRAC *	MASSL1FR *	 
L2FRAC *	MASSL2FR *	 
RHOLSTD	MRHOLSTD *	 
SIGMX	SIGMX-M *	 
UMX	UMX-M *	UMX-FL *
VLSTDMX	MVLSTDMX	VLSTDMFL *
VMX	MASSVMX *	VOLFLMX *
VVSTDMX	MVVSTDMX	VVSTDMFL *
* New property name in V9.

Aspen Properties Enterprise Database

APED now uses SQL Server Shared Management Objects (SMO) to manage LocalDB and SQL Server. This allows APED to use recent versions of SQL Server such as 2012 and 2014 with Windows authentication as well as SQL Server authentication. The minimum SQL Server version for installation is still 2008 R2 SP1, and APED can still read existing databases on instances of SQL Server 2005 SP3 or SP4.

Installing aspenONE requires Windows administrative privilege. When installing products on Windows 7, 8, or 10, LocalDB is installed by default and no pre-requisite SQL Server is required. When installing on Windows Server operating systems, a pre-installed SQL Server instance is required. The installer also requires the sysadmin privilege of the SQL Server instance in order to restore Aspen system databases during installation. The SQL server authentication mode of the SQL server is no longer required.

The clone database, update database, and download database features are no longer supported. These functions can all be accomplished using the backup database and restore database features.

Creating, backing up, restoring, and deleting databases can only be done locally, on the computer where the database is installed. Registering databases can be done locally as well as using a remote SQL Server instance.

When APED uses SQL authentication mode on SQL Server, it now supports server roles and database roles to provide fine-grained access control to the databases. See Authentication Options for details.

Engineering Enhancements

Column Analysis provides a greatly improved workflow, new options, and new ways of visualizing results for trays and packing in RadFrac columns. Geometry data is now specified on diagrams which make it clear exactly what each specification applies to. It's now possible to specify trays with picketed or swept-back weirs, and to export column data to vendor programs. The new hydraulic plots let you quickly and easily identify the problematic areas within a column. When you load an Aspen Plus file from an earlier version which contains sizing and/or rating results, you will be asked whether you want to upgrade to this new capability. Read more on column analysis.

It is now much easier to use Aspen Custom Modeler models inside Aspen Plus, and these models have additional features. Creating and exporting a model no longer requires Visual Studio to be installed. Installing an exported model for use in Aspen Plus no longer requires administrative rights. Model authors can include help content with their models. 2D and 3D plots associated with the model are now exported and available in Aspen Plus. Convergence parameters for the model are now easily accessible in Aspen Plus. Read more about Custom Modeling.

In past versions, Crystallizer was using an incorrect implementation of McCabe's Law of Growth which did not keep the number of particles constant. To maintain compatibility, this method is still available. But when you choose to keep the number of particles constant (now labeled Calculate PSD from particle growth model), there are several other options available for allocating the change in mass to the particles. These options are also available in the reactors (where a different constant number of particles calculation was performed, which is one of the new options) and in Flash2, where the choice to maintain the number of particles is new. See Particle Growth Models for details.

In the solid separation models Classifier, Screen, FabFl, Cyclone, and HyCyc, when you specify data for a separation efficiency curve, you can now specify the interpolation method used for calculating separation efficiency values between the entered data points. Previously, linear interpolation was always used. Now you can select spline fitting (based on the data itself or the RRSB exponential transformation) or a fit to one of several separation efficiency models. These new models often generate better results when limited separation efficiency data is available.

The Mixer block can now combine heat streams and/or load streams into a single load stream. For this to work, the duties must all have the same sign and all heat streams must have start and end temperatures.

In the Qtvec block, if you specify Tbegin and the inlet load stream already has a 0 duty point, then rather than ignoring the specification, Qtvec adjusts the start temperature of the stream to the specified value. If this value is beyond some of the intermediate points, Qtvec discards those points.

It is now possible to specify dynamics for the Pump model. The options are similar to those for the dynamic Compr model.

The BOBYQA solver is now available for solving constrained optimization problems without tear streams. This solver provides better robustness than the other optimization solvers in problems with noisy derivatives.

User and User2 models can now set a warning status by setting USER_LERRPT (in COMMON /PPEXEC_USER/) to 1 while setting USER_ICONVG to a value -3 to -21, or -24, indicating the type of warning using the same options available for indicating errors.

Safety Analysis

In the Safety Analysis environment, all defaults can now be set using the Preferences Manager, and you can save and load sets of default values.

You can copy and paste relief devices from the navigation pane.

When performing line sizing for PSVs, there are now three options for the Flow Rate Method, similar to options available for rupture disks. You can choose to use the Required flow from the scenario, use the Rated flow based on the selected and required orifice area from the scenario, or Manually type in a value use to calculate the pressure drop and other line parameters.

Workflow and Usability Enhancements

The Stream Summary and Custom Stream Summary have been unified into a single new stream summary which combines the best features of both and provides many new features. When a material stream summary is open, the Stream Summary tab appears in the ribbon, providing easy access to all options for customizing the display of the stream report, and allowing you to export the report to Excel or Aspen Simulation Workbook. Watch the video about New Stream Summary Workflows in the Knowledge Center.

The Find Object dialog box has been enhanced. Now you can find all kinds of objects, not just blocks and streams. The search automatically searches for objects matching the typed substring, without the need for using wildcards, and the search results update as you type. For objects not on the flowsheet, it opens the form for the object. It is also now available in the Properties environment. See video: How to Use the V9 Find Tool in Aspen Plus in the Knowledge Center.

Object managers have additional features, such as Reconcile, and you can now type over names to rename objects.

Forms associated with EO variables have been improved to initially display only the most commonly used attributes, provide quick access to common filters in the EO Variables dialog box used to select variables, and make it possible to display Spec Groups side-by-side to facilitate comparing them and copying variables from one Spec Group to another.

In Sensitivity blocks and in property analyses, in addition to the options to specify a list of values or a range of equally spaced values, you can specify a logarithmic range (where consecutive points have the same ratio).

The Flowsheet | Modify tab of the ribbon now has boxes allowing you to show mass flow, mole flow, and volume flow of streams on the flowsheet.

To make it easier to find, the Information sheet, which is most often used for writing comments, has been renamed to the Comments sheet throughout all forms where it appears. In blocks with editable names, the block name appearing at the top of this sheet is now editable.

When the history file size limit (introduced in V8.6) is reached, now the simulation pauses and lets you change the limit and possibly decrease diagnostics. This helps you avoid losing results and having to restart from the beginning when a long run reaches this limit.

In the Operating Cost Summary sheet of the Results | Operating Costs form, electric utilities are now excluded from the total heating and cooling duty, net duty, and associated costs. There are new results for electric power, electric power cost, and total utility cost (heating, cooling, and electricity).

In V7.3.2, the pressure drop correlation parameter, which was formerly calculated but not used by MHeatX, was dropped in order to make the model more robust. Although the model was not using it, some users were using it, so we have added an option to once again calculate this parameter.

In addition to these changes, you may also wish to browse the lists of features added in versions V8.8, V8.6, V8.4, V8.2, V8.0, V7.3.2, and V7.3.

Column Analysis in Aspen Plus V9
The Column Hydraulic Analysis capability in Aspen Plus V9 represents a major upgrade to the Tray and Packing sizing and rating functionality available in previous versions. The workflow as well as the underlying calculations have been improved significantly. The improvements include:

Detailed hydraulic plots for trays and packing





Auto-sectioning of column based on feed/draw/pumparound locations
Interactive calculation of column diameter and downcomer dimensions/locations from column vapor-liquid traffic
Easier geometry input. For example, downcomer width or weir length can be entered
Support for picketed and swept-back weirs
Updated calculations for valve trays that account for leg length, valve material, and valve thickness
Support for high capacity tray modification: Area under downcomers can be treated as active area.
Downcomer relative froth density in used in backup calculations
Weeping and dumping calculations
Liquid entrainment calculations
Weir loading calculations
Pressure drop reported in conventional units or as equivalent liquid head
Support for rebalancing of downcomers
Detailed reporting of hydraulic results including approach to flood, aerated/unaerated height over weir, aerated/unaerated downcomer backup, FS, CS based on net or active area, and downcomer velocities
Updated correlations for Raschig packings
New Billet and Schultes (1999) correlation for some generic packings
Support for some additional packings (Jaegerring, Intalox Ultra A, Raschig Pak)
Support for import and export of templates containing predefined geometry and design parameters
Convenient export of simulation results to KG-Tower, SulCol and FRI-DRP

Using Custom Models in Aspen Plus V9
It is now much easier to use Aspen Custom Modeler (ACM) models inside Aspen Plus, and these models have additional features:

Custom models and structures created in ACM are now exported without the need for Visual Studio to be installed (except for custom reactions, which still need the Visual Studio compiler in V9).

Exported ACM models and reactions are packaged in the new ATMLZ file type which can now be installed on the model user’s system without administrative rights.

Profile plots created in ACM for the exported models, including 3D plots, are now viewable in Aspen Plus and are accessible from the plot gallery in the ribbon.







Sparse solver settings for ACM models are exported from ACM and editable in Aspen Plus.

ACM models on an Aspen Plus flowsheet will have a visible Degrees of Freedom error/warning indicator when the model is under- or over-specified or incomplete.

Custom Help for an ACM model can be created in ACM and is viewable in both Aspen Plus and Aspen HYSYS. Custom help can be created using Microsoft Word or an HTML editor.

ACM models exported from V9 are saved in the Aspen Plus and Aspen HYSYS compound case files (.apwz & .hscz) and are automatically installed when the case is opened on another user’s system.

ACM models exported from earlier releases are fully supported (without the new features) and work alongside the new V9 models.

Compatibility Notes for Aspen Plus V9
This section describes the differences that you might encounter between Aspen Plus V9 and Aspen Plus V8.8. In most cases, previous Aspen Plus input files and backup files are completely compatible with Aspen Plus V9.

When you open a file from a previous version, Aspen Plus displays the Upward Compatibility dialog box. If you select Maintain Upward Compatibility for Features Listed Below then Aspen Plus ignores the new features in all the areas mentioned on the dialog box (which may include new pure component databanks, property methods, built-in parameters, ADA/PCS procedures, calculated molecular weights obtained from formulas, and checking of user-specified sequence, depending on the version of Aspen Plus used to create the file).

Costing results from Exchanger Design & Rating or Economic Evaluation may change from one version to the next due to updated cost data.

New features in other areas, as noted below, may still cause different results in the new version. These changes may have greater impact in flowsheets with loose tolerances due to convergence paths being different. AspenTech makes every effort to avoid making changes that result in incompatibilities with previous versions. The changes discussed in this section were necessary to correct problems (such as wrong results), to implement new features, or to improve ease-of-use.

The most important areas where you might encounter differences between Aspen Plus V9 and earlier versions are:

Fortran Compiler

Aspen Plus V9 was compiled with the Intel Fortran compiler 2013 SP1 and Microsoft Visual Studio 2013 Update 3. User Fortran models compiled with different compilers or compiler versions may not work, or may run but not be able to write to the history file, report file, and control panel. See Chapter 1 of Aspen Plus User Models for more details. Search the Knowledge Center for this document.

Hot Fluid Side in HeatX

When using the EDR rigorous models with HeatX, in past versions the Hot fluid side was not transferred between Aspen Plus and EDR. If this was set differently in Aspen Plus and the EDR file, the heat exchanger would produce different results in Aspen Plus from those run in EDR standalone. Now the hot fluid side specified in or selected by EDR is always passed back to Aspen Plus. When sizing a HeatX block for Shell&Tube or Thermosiphon, if the Hot fluid side was previously specified in Aspen Plus, this specification will be sent to EDR.

HeatX with Nonstandard Pipe Sizes

The total pressure drop and inlet/outlet velocity for exchangers using Shell&Tube may change due to changes in Aspen Shell&Tube Exchanger regarding handling of non-standard pipe sizes.

Pipe and Pipeline Heat Duty

The heat duty reported by Pipe and Pipeline in the results form and as Q on the flowsheet (if so configured) now excludes changes in enthalpy associated with changes in elevation. This ensures that an adiabatic pipe actually shows duty 0.

In the report file, this variable was previously reported as change in enthalpy for Pipeline, so in its case, a new variable for heat duty was created and both of these are reported.

Pipe and Pipeline Angle

In previous versions, if you specified an inclination angle greater than 90 degrees or less than -90 degrees, for some calculations the angle may have been interpreted incorrectly. Now this is correctly handled. Results for flow regime and results for some of the two-phase correlations are affected.

MCompr Cooler Pressure Drop

If the pressure drop in a stage cooler in MCompr is greater than or equal to the pressure in the outlet of the preceding stage, the cooler will run with 0 pressure drop and an error will be generated. In previous versions, an erroneous pressure result was produced in this case, without indication of the error.

Design Spec Results with EO

In previous versions, Design Spec reported the results of varied variables from the last sequential modular (SM) run, even if there was a more recent equation oriented (EO) run. Now it correctly reports the value from the most recent run.

Qtvec

In previous versions, if Qtvec's feed stream already had a 0 duty point, Qtvec would ignore the specification of a Tbegin. Now it adjusts the start temperature to match the specification, discarding some intermediate points if their temperatures no longer make sense.

Murphree Efficiency from Rate-Based Distillation

The Murphree efficiencies back-calculated from Rate-Based Distillation results on the Efficiencies and HETP | Component Efficiency sheet now use K-values from bulk liquid conditions instead of interface conditions. This produces results which better match those from the equilibrium-based model in RadFrac. These efficiencies are not used in Rate-Based Distillation, only reported, so while these efficiencies may change from those reported by earlier versions, no other results should change.

Key Components with True-Species Electrolytes

A problem in past versions could cause the assignments of the liquid 1 and liquid 2 outlets to not follow the specified key components when true-species electrolytes are present. This is fixed; results will differ (by having these phases swapped) in simulations previously suffering from this problem. In particular, in Decanter the outlet streams will be swapped.

Plug and Film Flow Dewatering Model for Pusher Centrifuge

There was an error in the implementation of the Plug and Film Flow dewatering model for the Pusher centrifuge in the CFuge block. The hydraulic diameter was calculated incorrectly. This will affect the results to a degree depending on the porosity. If you have previously fit this model to data, reducing the bulk flow resistance by an order of magnitude or so should move the results back to values similar to past versions.

Heat Streams

A new check has been added to help you ensure you specify duty with the correct sign in heat streams. If you enter start and end temperatures for the heat stream, if the temperature increases, the duty must be negative or zero. If the temperature decreases, the duty must be positive or zero. Simulations which violate this rule will load with the conflicting stream(s) marked incomplete.

Report File

The option Simulation in the Report dialog box (from the ribbon Home tab | Report) has been renamed to All, and is now the default report type. In addition, the table of contents for the report, which was missing from the simulation report previously, is now included. The Apply and Cancel buttons in this dialog box were superfluous and have been removed.

Safety Analysis

When loading cases from previous versions:

The Flow Rate Method is chosen based on the line sizing specifications in the previous version:
If the line sizing method was Leung Omega, then the flow method is set to required.

If the line sizing flow is equal to the rated flow to four significant digits, then Rated (area) is selected.

If the line sizing flow is equal to the required flow to four significant digits, then Required is selected.

If a line sizing flow is stored and it is not equal to either the required or rated flow, then Manual is selected.

If no line sizing flow is stored (or if required and rated flow are roughly equal), then for fire, liquid, or Mixed (C) cases, Required is selected, otherwise Rated (area) is selected.

Some defaults have changed. These will be set to the values from the previous version when the case is loaded, but any new devices or scenarios will use the new defaults.
Due to a minor correction to maintain consistency with the API calculation method, your required relief load results for Unwetted Fire scenarios will be more accurate than in previous versions.
Multiple valve cases may have had different relief pressure for rating calculations and scenario calculations. When these cases are loaded, the rating pressure will override the scenario overpressure in cases where they were different.
The calculation for flow area for tank vents was corrected. Different areas for normal and emergency inbreathing and outbreathing will be observed.
In Aspen Plus V8.8, wetted fire scenarios used the Kc value specified in the RD Combination (Kc) field, regardless of whether or not the PSV + Rupture Disk check box was selected. All other fire scenarios used a Kc of 1, regardless of whether or not another value was specified in the RD Combination (Kc) field and/or the PSV + Rupture Disk check box was selected.

In Aspen Plus V9, the behavior for all fire scenarios is as follows:

If the PSV + Rupture Disk check box is cleared, then a Kc of 1 is always used.
If the PSV + Rupture Disk check box is cleared, then the value specified in the RD Combination (Kc) field is always used.
In Aspen Plus V8.8, the second Enlargement and Contraction table on the Line Sizing tab featured several fields that have been renamed and re-ordered in V9. In V9, To diameter (In line) now appears as From Diameter 1 to Inlet Line (Contraction), and To diameter (Out line) now appears as From Outlet Line to Diameter 2 (Enlargement). Additionally, if you specified a value for # Pieces PSV Inlet Line for To diameter (Out line) or a value for # Pieces PSV Outlet Line for To diameter (In line), these values are updated to 0 in Aspen Plus V9, since these fields are now obsolete. If you specified a value greater than 1 in any of the rows in the second Enlargement and Contraction table, Aspen Plus updates these values to 1 in V9.

Physical Properties

The water viscosity parameters in ASPENPCD have been updated. Ordinarily we do not change old pure component databanks so that you can use them to maintain compatibility with previous results, but this particular case causes problems for many users. When the Electrolyte Wizard is used, it moves ASPENPCD to the top of the databank list because binary parameters used by the electrolyte models were regressed based on other parameters in ASPENPCD, to ensure the validity of those binary parameters. As a side effect, the ASPENPCD parameters for water viscosity are used, which yield inaccurate results in many cases. To address this problem, the water viscosity parameters for water in ASPENPCD have been updated to the latest, most accurate values. Other properties besides the viscosity of water and solutions containing water are not affected. However, you should re-run any regressions of parameters in systems involving water in which viscosity is directly or indirectly involved, since those parameters may be used in a model based on this water viscosity. As a result of the viscosity changes, the Reynolds, Schmidt, and Prandtl numbers of these systems may be different, and results in some unit operation models, such as heat exchangers and rate-based RadFrac, may be different.

The binary parameters for CPA, PC-SAFT, and Peng-Robinson were added or updated for these pairs, which may lead to different simulation results:

Methyl mercaptan with ethane, propane, butane, and isobutane
Ethyl mercaptan with ethane, propane, and butane
Carbonyl sulfide with ethane, propane, and butane
Carbon disulfide with ethane, propane, and butane
NRTL binary parameters were added for these pairs, which may lead to different simulation results:

Methanol with methyl acrylate
Methyl acrylate with water
Water with toluene
Water with 2,3-butanediol
NRTL binary parameters were changed for acetaldehyde (C2H4O-1) with trans-crotonaldehyde (C4H6O-D1). This is a near-ideal system and the parameters published were erroneous. The best fit was found to be setting τij and τji to zero.

The UNIQUAC and WILSON binary parameters for water with 2,3-butanediol were changed in the APV90 VLE-IG, APV90 VLE-RK, and APV90-VLE-HOC databanks.

The HYSPR parameters for water with phenol in the APV90 HYSYS databank have been changed to better fir the VLE data (preferentially over LLE).

The HENRY parameter for H2 in NH3 in the HENRY-AP databank was updated. The original value was regressed using incorrectly reported literature data in the Dortmund Database which has been corrected. You will see different results for systems in which hydrogen is modeled as a Henry component when dissolved in liquid ammonia.

Peng-Robinson parameters for COS were slightly modified to improve vapor pressure predictions. This may lead to different results in simulations using COS with Peng-Robinson based equation-of-state models.

Pure-component Rackett and COSTALD density parameters for many components in PURE35 were corrected or added where they were missing, based on new regressions. Results may change, but they should be more accurate especially in the calculation of density/volume.

The K-SALT parameters for hydrates of CaCl2 were updated. This should lead to better predictions of the precipitation of these hydrates, but results may differ from previous versions.

The value of element 1 of parameter CIGTC used by the original IGT correlation in the General Coal Enthalpy Model was corrected from 178.11 to 198.11. This error led to wrong enthalpy for coal in past versions if you were using this option, which is now corrected.

The way EXERGYFL (exergy flow property set) was calculated was incorrect for some systems with chemistry. This has been fixed and you will see differences in this property set for these systems.

The way CPMX and CPMX-M are calculated in systems with true-species chemistry was improved. The heat capacity depends on composition and the true-species composition can vary significantly with temperature, making a meaningful impact on the heat capacity, but the Aspen Physical Property System calculated this heat capacity as the temperature derivative of heat capacity, ignoring the composition effect. This only affected reporting of heat capacity; enthalpy has always been calculated from an appropriate composition. In V7.3.2 this was fixed for apparent approach only. Starting in V9, when heat capacity is calculated for true-species chemistry systems, the temperature is perturbed and the system is flashed at different temperatures to get an approximation of the effect on heat capacity due to composition. Due to the approximation implicit in this approach, heat capacity values reported will still not agree between true and apparent approach, but they will be closer than in past versions and the true-species heat capacities will be more correct.

Some property sets were previously calculated from the parameter NATOM, which reports the number of atoms of certain elements in a compound. NATOM has long been replaced with NOATOM and ATOMNO, which together let you report the presence of any elements. Those property sets are now calculated from NOATOM and ATOMNO. This will affect the results of certain property sets in simulations in which you modified NOATOM and ATOMNO during the simulation, for example, with a calculator block, but did not modify NATOM. These property sets will now show the correct results based on these modifications.

When the Barin equations are used under conditions beyond the relevant temperature ranges for their parameters, the extrapolation for Gibbs energy was previously using extrapolated enthalpy and entropy, and this has been changed to extrapolate from the Gibbs energy equation directly. This should produce better results for some species with respect to phase behavior. This will also cause differences in the liquid mixture entropy in cases where it is calculated from enthalpy and Gibbs energy.

In past versions, the inside-out flash method may choose the wrong precipitating hydrate when there is chemistry with multiple hydrates of one or more salts. This problem has been fixed in V9.

Column Analysis

The new Column Analysis feature is optional. When you open cases from past versions containing tray and/or packing rating and/or sizing specifications in RadFrac, you will be given the option whether to upgrade to Column Analysis. The new Column Analysis features apply only to RadFrac; PetroFrac and MultiFrac continue to use the older system. If you do not upgrade, all results stay the same, with one exception:

The parameters and correlations used for Raschig packings have been updated.
If you upgrade:

Specifications from your old Tray Rating, Tray Sizing, Pack Rating, and Pack Sizing sections are moved into the Column Internals form. Each tray or packing section from the old forms becomes a section in the new forms. These sections are combined into column configurations as follows:

All Rating sections (both Packing and Tray) with pressure update checked (if any) are combined into one configuration. This option was not allowed for overlapping sections, so this configuration should not contain overlaps.
All Rating sections without pressure update are put into another configuration, except that if overlaps are detected, multiple configurations may be created.
All Sizing sections are put into another configuration, or multiple if necessary to avoid overlaps.
The first of these configurations will be made active.
Depending on the sections that existed in the old case, this may result in some incomplete configurations. Based on the way those sections were meant to be used, you may want to copy sections from one configuration to another.

Specifications from the Rate-based forms of Tray Rating and Pack Rating sections are moved into the Rate-Based Modeling | Rate-based Setup form. If there are multiple column configurations, all will be viewable from these forms, but only those associated with the active configuration can be modified.
Specifying the number of valves in each panel of multi-pass valve trays is not supported in Column Analysis. These specifications will be converted to the equivalent valves-per-active-area specifications.
Multiple weir heights for different panels of multi-pass trays is not supported in Column Analysis.
Glitsch and Fair jet flood calculation methods for sieve trays have been removed since they are obsolete. These will be switched to Glitsch6 and Fair72, respectively.
Packings from vendors Koch and Glitsch will now list Koch-Glitsch as the vendor. Packings from vendors Nutter and Sulzer will now list Sulzer-Nutter as the vendor.
Packing pressure drop correlations Norton GPDC, Prahl GPDC, and Tsai GPDC, and all vendor correlations other than those from Raschig and Sulzer are obsolete. Sections using these models will be switched to Wallis.
When using GPDC-85 and SLE in column analysis, a correction is applied to the calculated pressure drop based on the ratio of the density of the liquid phase to the density of water.
The film resistance options in Rate-Based Distillation have been renamed to use meaningful English names instead of abbreviations.
User-specified discretization points are no longer supported. The number of discretization points will be kept but now the built-in Aspen Plus method of locating those points will be used.
A few things will be moved even if you do not upgrade:

The specifications on the Rate-based Setup | Advanced Convergence sheet have been moved to the Convergence sheet.
The specifications on the Rate-based Setup | Diagnostics sheet have been moved to the Block Options | Diagnostics sheet.
Retired Features

The legacy databank system is no longer available; the Aspen Properties Enterprise Databank is now required for all calculations. The source files for custom legacy databanks can be used to build custom databanks in the Aspen Properties Enterprise Database. If you run an input file from earlier versions which contains legacy databank specifications, a warning will be issued and those databanks will be searched for in the latest database.

The original stream summary and the Custom Stream Summary are both retired. TFF files you used to customize the original stream summary are converted to a stream group and a stream summary template for the new stream summary when you open a file referencing them. When you open a file using Custom Stream Summary templates, they can be converted to new stream summary templates in the Manage Templates dialog box.

The Unplace Blocks command is no longer available. This feature was a rarely used way to effectively move several blocks to new locations at once. The related option Automatically place blocks when importing in the Flowsheet tab of Aspen Plus Options has also been removed. Whenever blocks are unplaced after an import or being created on forms, they will be placed automatically.

Process Tools and the Intranet version of Process Manual are no longer delivered. The Internet version of Process Manual remains available through aspenONE Exchange and links in the help. With this version, no local server is required, but users need to register for an AspenTech Support account and have internet access to view content in Process Manual.

The Excel interfaces for the Aspen Plus refinery reactor models (Aspen Plus Hydrocracker, Aspen Plus Hydrotreater, Aspen Plus Reformer, and Aspen Plus CatCracker) are no longer delivered. Any Aspen Plus files you have containing these models will continue to work, but the Excel interface for calibrating the models is not available.

Aspen Online Deployment has been discontinued. You can import Aspen Online Deployment projects into Aspen OnLine to continue using them.

This is the last version for which summary files will be generated by default.

Mapping of Commands to the Ribbon
See Also

What's New in Aspen Plus V7.3.2

The sections below (click headings to expand them) show where you can find commands in the ribbon, arranged by their location in menus and toolbars in version V7.3, the last version before the ribbon was introduced.

OpenFile Menu
Old Command

New Command

New

File | New

Open

File | Open

Save

File | Save

Save As

File | Save As

Import

File | Import | File

Export

File | Export | File

Search

Search Exchange

Import EO Variables

File | Import | EO Variables

Export EO Variables

File | Export | EO Variables

Edit Compound File

File | Edit Compound File

Page Setup

File | Page Setup

Print Preview

File | Print Preview

Print

File | Print

Print Setup

File | Page Setup

Send To | Aspen Plus Dynamics - Flow Driven

File | Export | Aspen Plus Dynamics - Flow Driven

Send To | Aspen Plus Dynamics - Pressure Driven

File | Export | Aspen Plus Dynamics - Pressure Driven

Send To | Aspen Process Economic Analyzer

Economics | Send To APEA

Send To | Aspen Energy Analysis

Home | Analysis | Energy Analyzer

Send To | Aspen Exchanger Design and Rating

Home | Analysis | Heat Exchanger

(recent files)

File | recent files listed in the second column of the menu

Exit

X in top right corner of main window

OpenEdit Menu
Old Command

New Command

Undo

Undo in the Quick Access Toolbar

Redo

Redo in the Quick Access Toolbar

Copy

Home | Clipboard | Copy | Copy

Selected Copy *

Home | Clipboard | Copy | Copy Special

Copy with Format **

Home | Clipboard | Copy | Copy

Paste

Home | Clipboard | Paste

Paste Special **

Not available (Pasting OLE links has been discontinued)

Clear Field **

Right-click the field to be cleared | Clear

Clear Form **

Right-click form in Navigation Pane | Clear

Delete

Right-click object to be deleted | Delete

For items on the flowsheet:

Right-click object to be deleted | Cut

Rename

Right-click object to be renamed | Rename

In the flowsheet, you can double-click the name.

Select All

Right-click | Select All

Insert | New Object

Not available (Embedding arbitrary objects on the flowsheet has been discontinued)
Insert | Time Stamp *

Flowsheet Format | Shapes | Time Stamp

Links

Not available (Pasting OLE links has been discontinued)

Insert Row, Insert Column, Delete Row, Delete Column **

Right-click in a grid and select these commands

Add Text ***

Format | Font | Add Text

Insert Time Stamp ***

Not available (discontinued)

Hide Variable ***

Format | Display | Variable lines

Show Legend ***

Format | Display | Legend

Live Plot ***

Format | Plot | Auto update

Properties ***

Format tab of the ribbon

* Command only available in previous versions when the flowsheet was active

** Command only available in previous versions when the Data Browser was active

*** Command only available in previous versions when a plot was active

OpenView Menu
Old Command

New Command

Toolbar

Not available (toolbars replaced with ribbon)

Status Bar

Not available (status messages from Data Browser status bar now appear as tooltips in the Navigation Pane)

Model Library

View | Show | Model Palette

Control Panel

Home | Run | Control Panel

Zoom | Zoom In

View | Zoom | Zoom In

Zoom | Zoom Out

View | Zoom | Zoom Out

Zoom | Zoom Full

View | Zoom | Zoom to Fit

Zoom | Center View

Press CTRL+HOME

Zoom | Pan

Right-click in flowsheet | Pan

Zoom | Bookmarks

View | Flowsheet Views | Recall

Page Break Preview

View | Show | Page Breaks

Reset Page Breaks

View | Show | Reset Page Breaks

Current Section Only

Flowsheet Modify | Section | Show All

Global Data

Flowsheet Modify | Display Options | Global Data

Annotation

Flowsheet Modify | Display Options | Annotation

OLE Objects

Flowsheet Modify | Display Options | OLE Objects

Connections

Flowsheet Modify | Display Options | Calculator Connections, Measurement Connections, and Other Connections

EO Sync Errors

Equation Oriented | Reports | EO Sync Errors

Measurements

Flowsheet Modify | Display Options | Measurement Blocks

Input Summary

Home | Summary | Input

History

Home | Summary | History

Report

Home | Summary | Report

Solver Reports | EO Solver Report

Equation Oriented | Reports | Solver Report

Solver Reports | DMO Active Bounds Report

Equation Oriented | Reports | Active Bounds

Start Page

View | Show | Start Page

Browser Toolbar **

Not available (toolbar incorporated into ribbon)

Prompts **

View | Show | Message Panel

** Command only available in previous versions when the Data Browser was active

OpenData Menu
Old Command

New Command

Setup

Navigation Pane | Setup

Components

Properties environment | Navigation Pane | Components

Properties

Properties environment | Navigation Pane | Methods

Flowsheet

Navigation Pane | Flowsheet

Streams

Navigation Pane | Streams

Blocks

Navigation Pane | Blocks

Utilities

Navigation Pane | Utilities

Reactions | Chemistry

Properties environment | Navigation Pane | Chemistry

Reactions | Reactions

Navigation Pane | Reactions

Convergence | EO Options

Equation Oriented | Run Controls | Solver Settings

Convergence | other destinations

Navigation Pane | Convergence | destination

Flowsheeting Options | Measurements

Equation Oriented | EO Configuration | Measurements

Flowsheeting Options | Pres Relief

Home | Analysis | Pressure Relief

Flowsheeting Options | other destinations

Navigation Pane | Flowsheeting Options | destination

Model Analysis Tools | Sensitivity

Home | Analysis | Sensivitity

Model Analysis Tools | Data Fit

Home | Analysis | Data Fitting

Model Analysis Tools | other destinations

Navigation Pane | Model Analysis Tools | destination

EO Configuration | EO Variables

Equation Oriented | Variables | EO Variables

EO Configuration | EO Input

Equation Oriented | EO Configuration | EO Input

EO Configuration | Objective

Equation Oriented | EO Configuration | Objective

EO Configuration | Spec Groups

Equation Oriented | EO Configuration | Spec Groups

EO Configuration | Connection

Equation Oriented | EO Configuration | Connections

EO Configuration | Ports

Navigation Pane | EO Configuration | Ports

EO Configuration | Local Scripts

Equation Oriented | EO Configuration | Scripts | Local Scripts

EO Configuration | Global Scripts

Equation Oriented | EO Configuration | Scripts | Global Scripts

EO Configuration | Script Methods

Equation Oriented | EO Configuration | Scripts | Assign Scripts

EO Configuration | EO Sensitivity

Equation Oriented | EO Analysis | EO Sensitivity

EO Configuration | other destinations

Navigation Pane | EO Configuration | destination

Results Summary | Run Status

Status Bar | Check Status

Results Summary | Streams

Home | Summary | Stream Summary | Stream Summary

Results Summary | Model Summary

Home | Summary | Model Summary

Results Summary | Equipment Summary

Economics | Integrated Economics | View Equipment

Results Summary | other destinations

Navigation Pane | Results Summary | destination

Dynamic Configuration

Navigation Pane | Dynamic Configuration

Expand

Navigation Pane |  next to folders

Input

Navigation Pane

Results

Status Bar | Check Status

Custom Stream Results

Home | Summary | Stream Summary
Stream Results

right-click Stream | Results | Results

Data Browser

Navigation Pane

OpenTools Menu
Old Command

New Command

Analysis | Property | analysis types

Properties environment | Home | Analysis | analysis types

Analysis | Stream | analysis types

Home | Analysis | Stream Analysis | analysis types

Analysis | Pressure Checker

Dynamics | Dynamic Simulation | Pressure Checker

NIST Thermo Data Engine (TDE)

Properties environment | Home | Data Source | NIST

Molecule Drawing

Properties environment | Home | Tools | Draw Structure

Retrieve Parameter Results

Properties environment | Home | Tools | Retrieve Parameters

Clean Property Parameters

Properties environment | Home | Tools | Clean Parameters

Property Method Selection Assistant

Properties environment | Home | Tools | Methods Assistant

Conceptual Design | Azeotrope Search

Home | Analysis | Azeotrope Search

Conceptual Design | Ternary Maps

Home | Analysis | Distillation Synthesis

Conceptual Design | Energy Analysis

Home | Analysis | Energy Analyzer

Conceptual Design | Flare Analysis

Home | Analysis | Flare System

Import CAPE-OPEN Package

Properties Environment | Navigation Pane | Customize | CAPE-OPEN Packages | Import

Export CAPE-OPEN Package

File | Export | CAPE-OPEN Package

Variable Explorer

Customize | Settings | Variable Explorer

Next

Home | Run | Next Input

Options

File | Options (See Specifying Default Options for details about this command)

OpenRun Menu
Old Command

New Command

Settings

Home | Run | 

Run

Home | Run | Run

Batch | commands

Home | Run | 

Step

Home | Run | Step

Reinitialize

Home | Run | Reset
Stop Points

Right-click any item in the sequence pane of the Control Panel | Stop Points Manager

Move To

Right-click in the Sequence pane of the Control Panel

Reset EO Variables

Home | Run |  | Options | Restart

Recover EO State

Home | Run |  | Options | Restart

Check Results

Status Bar | Check Status

Load Results

Home | Run |  | Options | Load

Reconcile Streams and Blocks

Home | Run | 

Reconcile Streams

Home | Run | 

Connect to Engine

Not available (remote server no longer supported)

To reset the connection after problems with the engine, click Home | Run |  | Options | Restart.

OpenFlowsheet Menu
Old Command

New Command

Flowsheet Sections

Navigation Pane | Flowsheet

Expand *

Select Hierarchy block in flowsheet, then Flowsheet Modify | Hierarchy | View Child

Input *

Right-click block or stream in flowsheet | Input

Results *

Right-click block in flowsheet | Results

Right-click stream in flowsheet | Results | Results

Stream Results *

Right-click block in flowsheet | Stream Results | Stream Results

Custom Stream Results *

Right-click block or stream in flowsheet | Stream Results

Model Summary *

Home | Model Summary

Reconcile *

Right-click block or stream in flowsheet | Reconcile

Change Section *

Right-click block in flowsheet | Change Section

Add to Model Library *

Customize | Model Library | Add Selected

Move Selection *

Flowsheet Modify | Hierarchy | Move Selection

Import *

Right-click Hierarchy block in flowsheet | Import

Export *

Right-click Hierarchy block in flowsheet | Export

Analysis *

Right-click stream in flowsheet | Analysis

Change Stream Class *

Right-click stream in flowsheet | Change Stream Class

Deactivate, SM Deactivate *

Right-click block or stream in flowsheet | Deactivate

EO Exclude *

Right-click block in flowsheet | EO Exclude

SM Solution Method *

Right-click Hierarchy block in flowsheet | SM Solution Method

Calculate *

Right-click Hierarchy block in flowsheet | Calculate

Convert to *

Right-click block in flowsheet | Convert

Revert *

Right-click block in flowsheet | Revert

Break Stream *

Right-click stream in flowsheet | Break Stream

Insert Block *

Right-click stream in flowsheet | Insert Block

Reconnect Sources

Flowsheet Modify | Flowsheet | Reconnect | Reconnect Source

Reconnect Destinations

Flowsheet Modify | Flowsheet | Reconnect | Reconnect Destination

Exchange Icons

Right-click icon in flowsheet | Exchange Icon

Align Blocks

Flowsheet Modify | Flowsheet | Align

Reroute Streams

Flowsheet Modify | Flowsheet | Reroute Stream

Hide | ID

Right-click block in flowsheet | Hide | ID

Hide | Global Data

Right-click block in flowsheet | Hide | Global Data

Hide | Annotation

Right-click block in flowsheet | Hide | Annotation

Unplace Blocks

Discontinued.

Group

Right-click drawing objects | Group

Find Object

Flowsheet Modify | Flowsheet | Find Object

Lock

Flowsheet Modify | Section | Lock Flowsheet

* These commands only available when a block, stream, and/or hierarchy is selected.

OpenPlot Menu
Old Command

New Command

Plot Type

Design | Selected

X-Axis Variable

Home | Plot | Custom or Parametric

Y-Axis Variable

Home | Plot | Custom or Parametric

Parametric Variable

Home | Plot | Parametric

Display Plot

Home | Plot | select from gallery of plot types

Add New Curve

Home | Plot | Add Curve

Plot Wizard

Home | Plot | select from gallery of plot types

OpenLibrary Menu
Old Command

New Command

References

Customize | Model Library | Manage Libraries

Palette Categories

Customize | Model Library | Palette Categories

Add Block

Customize | Model Library | Add Selected

Add Problem

Customize | Model Library | Add Case

Built-In | View

Customize | Model Library | Manage Libraries

(library name) | Edit, Writable, or Save

Customize | Model Library | Manage Libraries

New

Customize | Model Library | Manage Libraries | New

Save Default

Save a template file (File | Save As | Template) to allow new simulations to start with a set of libraries enabled.

Save Icons

done automatically

OpenFortran Menu
This menu appears only when using the User Model Configuration Editor for a User2 or User3 block in a User Model Library. The Import and Export commands in it are now available as buttons in the User Model Configuration Editor window. See session 3 of Getting Started Customizing Unit Operation Models for more information.

OpenCategory Menu, Model Menu
These menus appear only when a Model Library Editor window is active.

For all commands in these menus, first edit the model library using Customize| Model Library | Manage Libraries | Edit. Then commands on the Category menu are available by right-clicking empty space in the Model Library Editor, and commands from the Model menu are available by right-clicking a model in the library.

OpenCosting Menu
Old Command

New Command

Costing Options

Economics | Prepare | Cost Options

Stream Price

Economics | Prepare | Stream Price

Model Summary Grid

Home | Summary | Model Summary

Activate/Deactivate

Economics | Economics Solver | Economics Active

Load Simulation Data

performed automatically when you Activate

Map

Economics | Integrated Economics | Map

Size

Economics | Integrated Economics | Size

Evaluate

Economics | Integrated Economics | Evaluate

Equipment Summary

Economics | Integrated Economics | View Equipment

Deactivate and Clear

Economics | Economics Solver | Delete Scenario

Open Economics Report

Economics | Integrated Economics | Investment Analysis

OpenWindow Menu
Old Command

New Command

Cascade, Tile, Arrange Icons, Normal, Workbook, Flowsheet as Wallpaper

See Viewing Multiple Windows for similar features.

Close Current Form

Right-click tab | Close

Close Open Forms

Right-click tab | Close All but This

(window list)

View | Window | Switch to Another Screen

OpenHelp Menu
Old Command

New Command

Help Topics



What's This?

F1 key

What's New?

Resources | Get up to Speed | What's New

Troubleshooting

, then click Troubleshooting

Product Support on the Web

Resources | Support | Support Center

Training

Resources | Training

Support Live Chat

Resources | Support | Live Chat

Join the Aspen Plus LinkedIn Group

Resources | Community

View Update Readme

Resources | Help | Check for Updates

About Aspen Plus

File | About Aspen Plus

OpenStandard Toolbar
Old Command

New Command

New

File | New

Open

File | Open

Save

File | Save

Print

File | Print

Print Preview

File | Print Preview

Copy Selection

Home | Clipboard | Copy | Copy

Paste

Home | Clipboard | Paste

Help

F1 key

OpenData Browser Toolbar
This was a toolbar of shortcuts to Data Browser forms, located with most of the toolbars. See also Browser Toolbar.

Old Command

New Command

Setup

Navigation Pane | Setup

Components

Properties environment | Navigation Pane | Components

Physical Properties

Properties environment | Navigation Pane | Methods

Streams

Navigation Pane | Streams

Blocks

Navigation Pane | Blocks

Data Browser

Navigation Pane

Next

Home | Run | Next Input

OpenSimulation Run Toolbar
Old Command

New Command

Run Control Panel

Home | Run | Control Panel

Start

Control Panel | Run

Step

Control Panel | Step

Reinitialize

Control Panel | Reset

Stop

Control Panel | Stop

Purge Messages

Control Panel | Clear Messages

Check Results

Control Panel | Check Status

Troubleshooting

, then click Troubleshooting in the help contents

Normal Run

Control Panel | Run Settings | Options | Auto-Run mode (cleared)

On Demand Run

Control Panel | Run Settings | Options | Auto-Run mode (cleared), and File | Options | Simulation | clear Allow run only when input is complete

Automatic Run

Control Panel | Run Settings | Options | Auto-Run mode (checked)

OpenProcess Flowsheet Toolbar
Old Command

New Command

Scale

View | Display Aids | Scale

Grid

View | Display Aids | Grid

Snap to Grid

View | Display Aids | Snap

(grid size list)

View | Display Aids | (grid size list)

Rotate Left

Right-click block icon in flowsheet | Rotate | Rotate Left

For streams, Flowsheet Modify | Flowsheet | Flip Horizontal or Flip Vertical

Rotate Right

Flowsheet Modify | Flowsheet | Rotate

Flip Left/Right

Flowsheet Modify | Flowsheet | Flip Horizontal

Flip Up/Down

Flowsheet Modify | Flowsheet | Flip Vertical

Select Mode

Model Palette | Cancel insert mode

Undo

Quick Access Toolbar | Undo

Redo

Quick Access Toolbar | Redo

OpenDraw Toolbar
Old Command

New Command

Text, Line, etc.

Flowsheet Modify | Shapes

(color list)

Flowsheet Format | Styles | Line

(line type list)

Flowsheet Format | Styles | Line | Weight and Style

(font list)

Flowsheet Format | Font | (font list)

(font size list)

Flowsheet Format | Font | (font size list)

Bold

Flowsheet Format | Font | Bold

Italic

Flowsheet Format | Font | Italic

Underline

Flowsheet Format | Font | Underline

Left Justify

Flowsheet Format | Font | Align Text Left

Center Text

Flowsheet Format | Font | Center

Right Justify

Flowsheet Format | Font | Align Text Right

OpenDynamic Toolbar
Old Command

New Command

Dynamic

Dynamics | Dynamic Simulation | Dynamics

Pressure Checker

Dynamics | Dynamic Simulation | Pressure Checker

Send to Aspen Plus Dynamics (Flow driven)

Dynamics | Dynamic Simulation | Flow Driven

Send to Aspen Plus Dynamics (Pressure driven)

Dynamics | Dynamic Simulation | Pressure Driven

Update Aspen Plus Dynamics (Flow driven)

Dynamics | Dynamic Simulation | Update Flow Driven

Update Aspen Plus Dynamics (Pressure driven)

Dynamics | Dynamic Simulation | Update Pressure Driven

OpenDetherm Toolbar
Old Command

New Command

Detherm Internet

Properties environment | Home | Data Source | DECHEMA

OpenSection Toolbar
Old Command

New Command

(section list)

Flowsheet Modify | Section | (section list)

Current flowsheet section

Flowsheet Modify | Section | Show All

Flowsheet Sections

Navigation Pane | Flowsheet

Lock Flowsheet

Flowsheet Modify | Section | Lock Flowsheet

OpenEO Shortcuts Toolbar
Old Command

New Command

Export EO Variables

Equation Oriented | Variables | Export Variables

Import EO Variables

Equation Oriented | Variables | Import Variables

Key Variables

Equation Oriented | Variables | EO Variables

Execute Sensitivity Analysis

Equation Oriented | EO Analysis | EO Sensitivity

Execute Global Script

Equation Oriented | Run Controls | Global Script

Solver Settings

Equation Oriented | Run Controls | Solver Settings

OpenCAPE-OPEN Toolbar
Old Command

New Command

Import CAPE-OPEN Property Packages

Properties Environment | Navigation Pane | Customize | CAPE-OPEN Packages | Import

Export as CAPE-OPEN Property Package

File | Export | CAPE-OPEN Package

OpenTDE Toolbar
Old Command

New Command

NIST Thermo Data Engine

Properties environment | Home | Data Source | NIST

OpenMolecule Drawing Toolbar
Old Command

New Command

Molecule drawing

Properties environment | Home | Tools | Draw Structure

OpenCosting Toolbar
Old Command

New Command

Costing Options

Economics | Prepare | Cost Options

Stream Price

Economics | Prepare | Stream Price

Model Summary Grid

Home | Summary | Model Summary

(costing status indicator)

Economics | Status

Activate/Deactivate

Economics | Economics Solver | Economics Active

Load Simulation Data

performed automatically when you Activate

Map

Economics | Integrated Economics | Map

Size

Economics | Integrated Economics | Size

Evaluate

Economics | Integrated Economics | Evaluate

Equipment Summary

Economics | Integrated Economics | View Equipment

Deactivate Costing and Remove Costing Files

Economics | Economics Solver | Delete Scenario

Open Economics Report

Economics | Integrated Economics | Investment Analysis

OpenAnalysis Toolbar
Old Command

New Command

Energy Analysis

Home | Analysis | Energy Analyzer

Flare Analysis

Home | Analysis | Flare System

Find Azeotropes

Home | Analysis | Azeotrope Search

Heat Exchanger Design

Home | Analysis | Heat Exchanger

Distillation Conceptual Design

Home | Analysis | Distillation Synthesis

Fitting

Home | Analysis | Data Fitting

Sensitivity

Home | Analysis | Sensitivity

OpenBrowser Toolbar
This was the toolbar inside the Data Browser window. See also Data Browser Toolbar.

Old Command

New Command

Go to a Different Folder

Navigation pane | click desired folder

Up One Level

Navigation pane | click parent folder

Folder List

at top of navigation pane

Units

Home | Units | Global Units selector

In certain objects containing variables with complex units, an object-level unit set can be specified on the Comments sheet.

Go Back

View | Window | Navigate back

Go Forward

View | Window | Navigate forward

Previous form

No longer supported

Current View

Navigation pane | (view filter above tree of forms)

Next form

No longer supported

Comments

Comments sheet at end of first form for each object

Status

Status sheet for first results form for each object

Resource Link Tool

In-Context Guidance button

Next

Home | Run | Next

Add new view

Not applicable; import or apply stream summary templates

Edit selected view

Stream Summary ribbon tab

Delete selected view

Not applicable
Plot Wizard

Home | Plot | select from gallery of plot types

OpenControl Panel Toolbar
Old Command

New Command

Start

Control Panel | Run

Step

Control Panel | Step

Reinitialize

Control Panel | Reset

Stop

Control Panel | Stop

Purge Messages

Control Panel | Clear Messages

SM Solution Strategy

Equation Oriented | Run Controls | Initialization

Check Results

Control Panel | Check Status

OpenControl Panel Toolbar (with More)
Old Command

New Command

Export EO Variables

Equation Oriented | Variables | Export Variables

Import EO Variables

Equation Oriented | Variables | Import Variables

Key Variables

Equation Oriented | Variables | EO Variables

Execute Sensitivity Analysis

Equation Oriented | EO Analysis | EO Sensitivity

Execute Global Script

Equation Oriented | Run Controls | Global Script

Solver Settings

Equation Oriented | Run Controls | Solver Settings

Solution Strategy

Equation Oriented | Run Controls | Method

Current Scope

Equation Oriented | Run Controls | Scope

EO Solution Mode

Equation Oriented | Run Controls | Run Mode

Objective Function

Equation Oriented | Run Controls | Objective

The additional items located at the bottom of the Control Panel after clicking More are still there, though the button is now called Show EO Controls.

For a mapping of Aspen Plus options from previous versions, see Mapping of Options from Previous Versions.

For details on the commands in the ribbon, see Ribbon Tabs.

What's New in Aspen Plus V8.8
See Also

Compatibility Notes for Aspen Plus V8.8

Aspen Plus V8.8 includes new features in the following areas:

Improved Activated Analysis, including Activated Economics, Activated Energy, and Activated Exchanger Design & Rating
Polymer Solids Modeling
Improvements to Relief Sizing, including design code updates
Improved Help and In-Product Training
aspenONE Drive
Property Enhancements
Workflow and Usability Enhancements
Other Engineering Enhancements
Improvements to Activated Analysis

Activated Economics, Activated Energy, and Activated Exchanger Design have all undergone significant improvements to speed, performance, and usability. Initially introduced in Aspen Plus V8.0, Activated Analysis allows you to optimize your process design while considering energy efficiency and emissions, capital and operating costs, and exchanger design feasibility and operability. With V8.8, we've made it easier to optimize by improving workflows and overall performance.





Activated Economics

New Partial Flowsheet Costing: You can now quickly evaluate the cost of a single unit operation or a selected group of unit operations to perform a faster relative cost analysis.
New Unit Operation Tab: View the cost of unit operations as a sum of the corresponding equipment.
Enhanced Speed & Performance: The speed of Activated Economics has been greatly improved—up to a 2x improvement, especially when using Activated Economics with a large flowsheet. We've also improved the speed and responsiveness for the Equipment Form.
Enhanced Equipment Nomenclature: The Equipment tabs in Activated Economics have been renamed to eliminate confusing nomenclature.
Activated Energy

Simulation Environment Energy Analysis Form: A new form has been added to the simulation environment to summarize key utility and carbon emission saving potentials, preview energy-saving design changes and set appropriate utilities for unit operations based on recommendations after the energy analysis.
Enhanced Export Summary to Excel: The saving summary (energy, carbon emission, cost) can now be exported to Excel for easier analysis documentation or comparison with other cases.
Run with Warnings: Energy Analyses can now be performed when warnings with non-process calculations are flagged in Aspen Plus. Warnings in areas such as Sensitivity will not affect the energy analysis.
Performance Improvements: The speed of Activated Energy has been greatly improved over Aspen Plus V8.6 and previous versions. The latest version is up to five times faster, depending on the size of the flowsheet.
Activated Exchanger Design & Rating

New User Interface: Activated Exchanger Design & Rating (EDR) incorporates the new user interface for Aspen Exchanger Design and Rating (EDR). The completely redesigned UI simplifies common user actions like specifying geometry for rating tasks or geometry constraints for design tasks. This will make designing or rating a rigorous model much easier within Aspen Plus.
New Simplified Exchanger Rating: The workflow for rating of rigorous exchangers has been simplified to enable specifying geometries or importing ready-made Aspen EDR model files.
Polymer Solids Modeling

Solid Polymers: Polymer Modeling in Aspen Plus has been extended so that polymers and oligomers can be recognized as particulate solids, enabling optimization of many more common processes. Aspen Polymers has always calculated properties for polymers below their melting point properly, but now the solid-handling unit operations can also treat them as solids. See Polymers in Solid-Handling Models in the Aspen Polymers help for more information.

Improvements to Relief Sizing

The calculations for storage tanks used by Relief Sizing in the Safety Analysis environment now allow the choice between three different versions of the API 2000 standard: 6th Ed., 7th Ed., and 7th Ed. Annex A. Each of these has some differences in the calculations of normal and thermal breathing requirements.

The workflows for the fire, exchanger tube rupture, and control valve failure scenarios in the Safety Analysis environment have also been improved.

The calculations for Pressure-Relief blocks in the Simulation environment now follow the guidelines of the Center for Chemical Process Safety in calculating the area for vertical vessels engulfed in fire. The top plate is not included for NFPA-30 and API-2000 standards, even if it falls below 30 feet above grade.

Improved Help and In-Product Training

The help system has been given a fresh, modern look. In addition:

Help is now integrated with other types of training material, with context-sensitive links added in appropriate places throughout the help. This includes videos and computer-based training, jump-start guides, webinars, and material from Aspen Process Manual and Aspen HTFS Research Network.
Help is integrated with aspenONE Exchange. Help topics are now included in Exchange search results and you can launch these help topics from the search results.
The Getting Started Guides have been integrated into the help.
aspenONE Exchange includes the following new features:

E-Learning groups for Aspen Plus content that group results as Learn About or Related Features. Related Features provide an overview of features available in AspenTech products that are related to your search. Learn About provides additional content that highlights the best models and training available for the content you selected.

Improved search displays that provide descriptions and contextual highlighting of search terms for easier browsing of results.

Search results for Aspen Plus that include HTFS reports, Handbooks, and Design Reports, and Aspen Process Manual

Access to Aspen HTFS Research Network

Aspen HTFS Research Network provides access to source information on the models and correlations used in the Aspen Exchanger Design & Rating suite of products. It is an extensive archive dating back to the 1970s. It derives from proprietary research conducted with guidance from many industry experts. With V8.8, the Aspen HTFS Research Network is available to all Aspen Plus users without a separate license and from within the Aspen Plus user interface.

The Aspen HTFS Research Network includes

More than 1200 Research Reports
Over 50 Design Reports (extensive multi-part documents)
More than 470 documents in the Handbook (concise multi-page documents)
The Aspen HTFS Research Network is delivered via aspenONE Exchange inside Aspen Plus. To access the Aspen HTFS Research Network, enter aspenONE Exchange from the Resources ribbon, then use the Literature filter.

Access to Aspen Process Manual

Aspen Process Manual provides access to a comprehensive knowledge base for the chemical and process industries. The main focus is on solids processing and separation technology. Material has been consolidated from over 150 leading authors from industry and academia, produced over the last 30 years by SPS (Separation Processes Service), WSHP (Wet Solids Handling Project), and EPC (Effluent Processing Club). It covers nine technical areas, mainly in solids processing and separation technology. This body of documents is now available directly from the product.

The Aspen Process Manual includes 10 technical chapters:

Applied Rheology
Bulk Solids Handling
Crystallization
Drying
Gas Cleaning
Slurry Handling
Solid/Liquid Separation
Solvent Extraction
Waste Water Treatment
Mini-Manuals (includes comminution, granulation, classification, adsorption, etc.)
Aspen Process Manual is delivered via aspenONE Exchange or as a standalone product. Use the All Content button on the Resources ribbon to launch Exchange. Use the Literature filter in the contextual ribbon to access Aspen Process Manual documents.

aspenONE Drive

aspenONE Drive is a new feature in Aspen Plus and Aspen HYSYS V8.8 that allows model authors to upload and access their models and those shared by other users from any device on the company network. Model authors can keep models private or share with specific colleagues by entering their email address. Shared users receive an email from the system containing a link to the model on aspenONE Drive where both model authors and shared users can search for models, download models to their desktop, or view and run models on the web. Access the aspenONE drive through the File Menu.

Property Enhancements

The new Cubic-Plus-Association (CPA) equation of state is available. It uses the Soave-Redlich-Kwong (SRK) cubic equation of state combined with the association term for SAFT for all thermodynamic properties. The model includes extensive built-in pure component and binary interaction parameters. These parameters were obtained from the literature as well as regressed from experimental data. The CPA model can be used for a wide range of compound classes including non-polar, polar and associating compounds. In this release, emphasis was given to binary mixtures related to methanol, water, hydrocarbons, H2S, and CO2.

It is now possible to specify equilibrium reactions from Chemistry to be included in regression calculations. Specify them on the Constraint sheet of the Data block.

New databases created with APED V8.8 use FIPS 140-2 compliant encryption methods. When running on Windows with FIPS security enabled, only new databases with this security can be used; you will need to create new versions of custom databases to use them under FIPS. With standard Windows settings (without FIPS), your old databases can be used as usual. New versions of the APLDB containing FIPS-compliant versions of retired databanks are available on AspenTech Support. For details, see Maintaining Access to Retired Databanks.

In V8.6, 3208 components in NIST-TRC which had limited data were removed by NIST. The NISTV88 version of NIST-TRC includes all these components as well as any removed by NIST since V8.6.

Two compounds in APV88 have changed aliases. In previous versions of the properties database in Aspen Plus, these aliases were longer than 12 characters, rendering them unusable in the software. These compounds were C21H8F28O8-B1 and C3H4CL2F2O-B1, and they have been renamed to C21H8F28O8-1 and C3H4CL2F2O-1, respectively. In addition, 206 compounds in the NIST-TRC databank which were previously unusable for this reason have new shorter aliases in NISTV88. If you created models in earlier versions which used these compounds (but could not be run because of the long aliases), they will automatically be replaced by the new names when you open the file in V8.8.

ClosedNIST-TRC Compounds Affected by This Change
In NISTV88, the CAS Number for ethyl methyl carbonate (C4H8O3-N5) has been updated from 999924-56-0 to 623-53-0.

Workflow and Usability Enhancements

When customizing variable lines on plots, you can now choose from a greater variety of line styles and weights, and you can choose the style and weight independently.

The start-up performance of Aspen Plus V8.8 has been improved. Files will open several seconds faster compared to V8.6 and older V8 versions. There is also a new Turbo Start feature available. To enable it, check the box at the top of the Files tab of Aspen Plus options. Turbo Start pre-loads part of Aspen Plus. When you run Aspen Plus, having it pre-loaded allows Aspen Plus to start very quickly. The pre-loaded version of Aspen Plus does not consume tokens, but it does consume some memory resources.

Other Engineering Enhancements

In MCompr blocks with fixed discharge pressure from the last stage, you can now choose to determine the discharge from each intermediate stage so as to have equal pressure ratio or equal head among the stages. When you select the equal head option, there are convergence parameters for the head calculation available on the Convergence sheet.

HeatX blocks using the rigorous method AirCooled now display results for the number of fans and fan bays and the power required for the fans. In addition, you can specify an electricity utility to operate the fans.

In Compr blocks using performance curves based on corrected flow, it has previously been assumed that entered flow values are adjusted for temperature and pressure. However, when what is available is the measured flow and the temperature and pressure at which it was measured, which is common, it can be time-consuming to convert the data. Now there is an option on the Curve Data sheet to allow you to specify whether entered flow data is corrected. If it is not, you can enter the design pressure and temperature at which the flow data was measured, and enter the measured flow data into the table, and Aspen Plus will convert appropriately.

Also in Compr blocks, the polytropic calculation method and the GPSA, ASME, and piecewise integration methods are now available for turbines. Previously, turbines could only be isentropic and could only use the Mollier-based method.

Extract blocks can now show profiles on the Profiles | TPFQ sheet and the Profiles | Composition sheet in mass basis. Previously, only mole basis was available.

In Utility blocks of types Water and Steam, you can change the free-water property method specified on the Properties sheet (which is used to calculate properties for these utility types).

In the solid separator models (Cyclone, VScrub, CFuge, Filter, CFFilter, Hycyc, FabFl, and ESP), you can now specify flash convergence parameters and valid phases for all rigorous models, not just for the solid separator model as in past versions.

Additional convergence parameters are available in Fluidbed for solving the reaction calculations. These are similar to convergence parameters which exist in RCSTR.

RPlug no longer requires a user kinetic subroutine when using the option to keep fluid and solid substreams at different temperatures. When using this option without a subroutine, RPlug treats reactions which contain components from both solid and fluid substreams as occurring in the solid substream, so they occur at the temperature of the solid and heat of reaction affects the enthalpy of the solid. You can still supply a user kinetic subroutine, in which case the subroutine determines where these reactions occur.

In addition to these changes, you may also wish to browse the lists of features added in versions V8.6, V8.4, V8.2, V8.0, V7.3.2, and V7.3.

What's New in Aspen Plus V8.6
Aspen Plus V8.6 includes new features in the following areas:

Pressure Relief

A new Safety Analysis environment has been added. The Safety Analysis environment lets you analyze overpressure scenarios, determine which contingencies will require pressure-relieving devices (PRDs), size these devices according to appropriate standards, and generate appropriate documentation for the analysis. The Safety Analysis environment streamlines the workflow in overpressure protection by saving up to 70% of the man-hours per project. Equipment available for design within the Safety Analysis environment includes pressure safety valves (PSVs), rupture disks, inlet and outlet pipe lines, and storage tanks.

The full power of steady state and dynamic simulations can be used to obtain relieving fluid flow rates and fluid properties for overpressure scenarios, ranging from simple ones such as positive displacement pumps to the most complicated ones such as general power failure in distillation columns. PRD sizing and line sizing are performed for mixed and single-phase systems. The sizing data is reused to automatically generate appropriate documentation for pressure relieving devices and the discharge system.

The Safety Analysis environment uses standard equations to perform its calculations including:

API RP 520 8e for sizing pressure relief devices

API 521 for fire calculations

Design temperature and valve material checks according to API 526

Normal and emergency venting requirements based on the latest API 2000 code.

The Safety Analysis environment is independent of the Pres-Relief feature of Aspen Plus. Pres-Relief remains unchanged, except that BS&B has been added as a manufacturer for rupture disks, with three disk models at a variety of sizes.

Solids Modeling Improvements

Several improvements have been made in the area of solids handling:

Contact Dryer: The Dryer model has a new option, contact dryer, for modeling dryers where moisture is evaporated by applying heat at a constant rate (indirect heating) or heat through contact with a heated surface. The convective dryer can have additional heat provided through one of these methods.

Reactors with PSD: All the reactor models (RBatch, RCSTR, REquil, RGibbs, RPlug, RStoic, and RYield) now support the same flexible specifications for outlet particle size distribution (PSD) as FluidBed. You can specify to retain the inlet PSD, retain the number of particles from the inlet, or specify a PSD overall or separately for each substream using weight fractions or a distribution function or a weighted average of two or more such PSDs. RCSTR retains the additional option to calculate outlet PSD from rates specified by a user subroutine for user reactions. Existing PSD specifications in the reactors which previously supported them (RCSTR, RStoic, RYield) will be retained.

Crusher Mechanical Efficiency: You can now specify the mechanical efficiency for crusher. This specifies the fraction of the power requirement which contributes to crushing solids. The remainder is converted to heat and added to the outlet stream.

Dryer Solids in MIXED Substream: All the models of Dryer except for the Shortcut model now support solids in the MIXED substream.

RadFrac Salt Precipitation: There is a new option for checking for salt precipitation RadFrac. Ignore-Flash behaves like Ignore-Check in ignoring the salts during stage-by-stage calculations. But instead of just computing each salt's solubility index at the end of the run to check for precipitation, with this option RadFrac flashes each phase rigorously, allowing salts to participate in the chemistry, and issues a warning if any salt precipitation actually occurs. Use this option if you have complex chemistry with multiple hydrates, where Ignore-Check may generate false warnings about salt precipitation. Specify this option in Salt Precipitation Handling on the RadFrac | Convergence | Convergence | Basic sheet.

Usability Improvements

Product Updates are now available in aspenONE Exchange. These updates include both patches and new releases of AspenTech products.

aspenONE Exchange now has E-Learning Groups. These groups organize sets of content from aspenONE Exchange into courses of related material.

The Aspen Community is now integrated with aspenONE Exchange. Now events from the community event calendar are available through aspenONE Exchange. You can also search the community blogs from within aspenONE Exchange. You can also view the community directly by clicking its button on the Resources tab of the ribbon to view topical discussions with other thought leaders, read blogs from AspenTech experts and guest contributors, access the resource library, and view schedules of upcoming events.

The Resources tab of the ribbon includes new buttons to access the new features of aspenONE Exchange: E-Learning Groups, Events, and Product Updates.

Engineering Improvements

Mixer to Heater: It is now possible to convert Mixer blocks to Heater blocks on the flowsheet. Right-click the block and select Convert To. This type of change is commonly made to add a temperature or duty specification to the block, and can now be done without changing stream connections.

Heater to HeatX:  It is now possible to convert some Heater blocks to HeatX blocks from the flowsheet, making it easy to switch to the more rigorous model without changing stream connections. Right-click the block and select Convert To. See Specifying Heater in the help for more information.

HeatX Temperature-Duty Plots: HeatX now calculates temperature-duty curves and makes it easy to plot these curves. HeatX always reported temperature crossings based on the inlet and outlet temperatures but this allows HeatX to determine internal temperature crossings and show you where they are occurring.

Free-Radical Reactions: The workflow for filling in reactions and rate constants for free-radical reactions from the databank has changed. Instead of this being an option you can switch on and off, now there is a button to generate the reactions or get the rate constants. This also fixes a problem which could cause rate constants from the databanks to be lost when a saved file is reopened.

Plots: Several kinds of plots have been improved:

Parity plots (experimental vs. calculated) for data regressions now default to a square plot with a diagonal (x=y) line.

The default format for particle size distribution plots can now be specified in the Plots tab of Aspen Plus Options.

The standard convergence history plot now shows the error term on a logarithmic scale (specifically, as Log10(abs(maximum_error/tolerance))). In this plot the log error reaches 0 when convergence is achieved. This form tends to show convergence behavior much better then a linear scale on the error, especially when the initial guess is far from the solution.

Convergence Results: There are new options for displaying convergence results. In Convergence | Options | Tear Convergence there is a new option to display in the iteration history just the variables with Wegstein acceleration. In the Results | Tear Variables sheet of each convergence block, there are new options for choosing which results to display.

User Models: User and User2 blocks can now set USER_ICONVG to -24 to print a custom block error message into the report file instead of one of the predefined messages. The message, of up to 64 characters, is written into USER_ERRMSG (in COMMON PPEXEC_USER).

History File Limit: There is a new option on the Setup | Calculation Options | Limits sheet to limit the size of the history file. This is a rough limit, checked about once a minute, intended to avoid letting the history file get so large on out-of-control simulations that it fills the disk. The default is 500 MB.

Physical Properties

Two new property sets related to solid freezing points have been added. TSOL is the temperature at which any component just begins to freeze out of a mixture. This differs from existing property set TFREEZ in that TFREEZ is for a specific component while TSOL is the highest freezing temperature for any component. PSOL is the pressure (at constant temperature) at which any component begins to freeze out of a mixture.

Additional options have been made available in the Binary, Mixture, and Generic analysis types, as well as in Stream Property analysis:

The flash convergence algorithm (Inside-out or Gibbs) can now be specified

You can specify whether to use flash retention to save the results of one flash as initial estimates for the next one

In Mixture and Generic analysis, you can now choose valid-phases Vapor-only or Liquid-only (only when true-species chemistry is present) or Liquid-Liquid (rigorous two-liquid calculations with no vapor phase)

The Gibbs flash is now capable of handling salts with multiple hydrates when the approximate hydrate-check method is used. Previously, this was only possible when the rigorous method was used.

The PURE32 databank was created, based on the May 2013 public DIPPR release. This databank is similar to the PURE28 databank, except that many parameters for a large number of components have been updated. The following 40 components were added:

Alias

Name

CAS Number

C2H6N2O

N-NITROSODIMETHYLAMINE

62-75-9

C3H3CL5-N1

1,1,1,3,3-PENTACHLOROPROPANE

23153-23-3

C3H6BR2

1,2-DIBROMOPROPANE

78-75-1

C3H6BR2-N1

1,3-DIBROMOPROPANE

109-64-8

C4H6O-N1

DIMETHYLKETENE

598-26-5

C4H6O2-N1

DIACETYL

431-03-8

C4H6O3-N1

3-HYDROXYBUTYROLACTONE

7331-52-4

C4H10N2O3

N-NITROSODIETHANOLAMINE

1116-54-7

C4H10O2-N2

ISOBUTYLENE-GLYCOL

558-43-0

C5H2F10

2,3-DIHYDROPERFLUOROPENTANE

138495-42-8

C6H3N3O7

PICRIC-ACID

88-89-1

C6H4N2O5

DINITROPHENOL

51-28-5

C6H4N2O5-N3

2,6-DINITROPHENOL

573-56-8

C6H6O3-D1

MALTOL

118-71-8

C6H10O-N13

3-METHYLCYCLOPENTANONE

1757-42-2

C6H10O4-D5

ISOSORBIDE

652-67-5

C6H12O-N13

2,5-DIMETHYLTETRAHYDROFURAN

1003-38-9

C6H12O6-N1

D-FRUCTOSE

57-48-7

C7H12O4-N9

DIMETHYL-GLUTARATE

1119-40-0

C8H8O4

VANILLIC-ACID

121-34-6

C8H10O2-N2

4-METHYL-2-METHOXYPHENOL

93-51-6 

C8H14O-N7

1-CYCLOHEXYLETHANONE

823-76-7

C9H10O4-D1

SYRINGALDEHYDE

134-96-3

C10H10O5

ETHYLENE-TEREPHTHALATE

1137-99-1

C10H12-N1

1-METHYLINDAN

767-58-8

C10H12-N7

5-METHYLINDAN

874-35-1

C11H12O5

HYDROXYETHYLMETHYLTEREPHTHALAT

3645-00-9

C11H14-N32

1,6-DIMETHYLINDAN

17059-48-2

C11H24-N45

3-METHYLDECANE

13151-34-3

C12H16-N44

1,1,5-TRIMETHYLINDAN

40650-41-7

C12H18O

2-CYCLOHEXENYL-CYCLOHEXANONE

1502-22-3

C13H20-N8

3,5-DIISOPROPYL-TOLUENE

3055-14-9

C13H28-N9

3-METHYLDODECANE

17312-57-1

C14H30-N7

3-METHYLTRIDECANE

6418-41-3

C15H22O2-N1

2-ETHYLHEXYL-BENZOATE

5444-75-7

C16H22O4-N2

DIBUTYL-TEREPHTHALATE

1962-75-0

C18H22-N10

4,4--DIISOPROPYLBIPHENYL

18970-30-4

C24H18-N3

METAQUATERPHENYL

1166-18-3

C57H92O6

TRILINOLENIN

14465-68-0

C69H128O6

TRIERUCIN

2752-99-0

Databanks PURE11, PURE12, and PURE13 are no longer delivered. These databanks are from Aspen Plus versions more than ten years old, and their removal saves installation and database space. See Compatibility Notes for information about handling any files you have which still use these databanks.

What's New in Aspen Plus V8.4
See Also

Compatibility Notes for Aspen Plus V8.4

Aspen Plus V8.4 includes new features in the following areas:

Activated Analysis

Usability improvements

Solids modeling

Physical properties

General engineering improvements

Activated Analysis Improvements in V8.4
See Also

What's New in Aspen Plus V8.4

Search the Knowledge Center for information on:

Activated Exchanger Design & Rating in Aspen Plus V8.4

Activated Economics in Aspen Plus V8.4

What is New in Economic Evaluation V8.4

Energy Analysis

Activated Energy Analysis now allows you to create multiple projects in which you can specify different global options such as the scope of heat integration or the minimum approach temperature. You can also investigate the impact of process changes on the energy usage and saving potentials by comparing the results of different projects. Note that this is different from scenarios, which test different heat exchanger changes under the same global options. The Heat Exchanger Details table on the Saving Potentials form has been improved to show more data and to provide options for how the overall heat transfer coefficient is calculated. There is also a new example file to illustrate this feature in Examples/Activated Energy Analysis.

Economic Analysis

When using Activated Economic Analysis, the Equipment Summary grid will load faster than in previous versions. Columns in the grid automatically expand to show their full contents and retain size changes on subsequent loads, and names of equipment on the Equipment tab are now hyperlinks to the tabs for the corresponding equipment types. Unit operations with errors in costing are marked with an error icon. On the Equipment tab, the reason for the error appears in the Sizing Errors or Equipment Errors column, while on the tabs for equipment types, the reason for the error appears as a tooltip on the icon.

When Economics is open in the Activated Analysis Panel, the Utility Cost section now has a tooltip displaying the costs for the three utilities with the highest cost. This panel also contains three new buttons at the left which open tables of equipment capital cost and utility cost, and overlay circles around the unit operations with the highest costs; tooltips on these unit operations display a summary of their costs. The bar on the bottom of the panel opens the Investment Metrics table, displaying operating profit, payout period, and return on investment.

The Map Preview form has been updated. Columns in the grid automatically expand to show their full contents and retain size changes on subsequent loads. The column configuration sketches have been redesigned to better depict actual columns, and you can click them to open a larger view in a separate window.

The Model Summary grid has a new tab, UnitOps Chart, which displays a summary of the utility costs for all unit operations.

Exchanger Analysis

There is a new Activated Exchanger Analysis makes it easier to convert simple heat exchanger models to rigorous EDR models with fully defined exchanger geometry, accurate pressure drop, and heat transfer calculations in just one click.

The Exchanger panel in Activated Analysis displays a summary of the rigorous status and risk status of all exchangers in the model.

The Activated Summary Table, opened by clicking the drop-down arrow below the Exchanger panel, displays the name, location, EDR model type, and operation risk status for all exchangers in your flowsheet. You can click the colored circle in the last column of this table for rigorous exchangers to view specific operation risks detected in EDR. Click the Convert buttons to size the simple models using EDR, converting them to rigorous.

Flowsheet highlights can be turned on by clicking the pie charts in the Exchanger panel. The Model Status highlights reveal information about the heat exchanger size and configuration, and the Operational Risk highlights indicate heat exchangers that contain a risk such as vibration, erosion, and excessive operating temperature and pressure.

Usability Improvements in V8.4
See Also

What's New in Aspen Plus V8.4

Defining Variables

You can now drag and drop or copy and paste variables from where they appear on input or results forms to define variables. This eliminates the need to look up these variables in the list of variables associated with each block or make multiple selections to define each variable. This feature is available in Design Specification, Calculator, Sensitivity, Transfer, Optimization, Constraint, Measurement, and Point-Data data sets for Data Fit. In the properties environment, you can also drag and drop or copy and paste Methods | Parameters variables into the Regression | Input | Parameters sheet. You can also copy and paste variables between variable definition sheets.

If you choose to use the original method of defining variables, on the above forms you no longer use a dialog box to define them. Now the variable definition is performed within a section of the same sheet listing the defined variables/spec groups. This makes it possible to access other windows while defining variables.

Each Design Specification, Calculator, and Sensitivity has an Active checkbox on its first sheet. You can clear this checkbox to temporarily deactivate the item without permanently deleting it.

EO Spec Groups

The Spec Groups form also has eliminated the dialog box for defining variables, and lets you define them right on the sheet, instead.

The Spec Groups form now allows you to specify the initial value, bounds, physical type, and units of the variables in each spec group. This allows you to make specifications (equivalent to using the EO Input form) at the same time you are changing a variable's specification.

The physical type and units on the EO Input and Spec Groups forms are now required for each variable where initial value or bounds are set. This ensures that the specifications are interpreted correctly if the global unit set is changed.

Control Panel and Home Tab Run Group

The Run group of the Home tab of the ribbon now focuses on the most frequently used commands, which appear with large buttons, while other commands are moved to more appropriate places:

A toolbar has been added at the top of the Control Panel with the most commonly used run commands. Some commands can be found both here and in the ribbon, for convenience.

The Purge Messages button has been moved from the ribbon to the Control Panel, and is now labeled Clear Messages.

The Check Results command is now more accurately labeled Check Status. It has been moved from the ribbon to the Control Panel and to the Status Bar at the bottom of the main window.

The Auto-Run on/off buttons in the ribbon have been replaced by a checkbox for Auto-Run mode in the Options tab of the Run Settings dialog box.

The Troubleshooting command has been removed. Click  on the ribbon to open help, then click Troubleshooting in the help contents.

Better Workflow to Diagnose Defects

In the Results Summary | Run Status | Status sheet, when errors or warnings are reported, the block names are now links that will take you to the Status sheet for that block, where you can see the error or warnings messages.

Window tabs for forms within blocks, streams, and objects in the Flowsheeting Options and Model Analysis Tools folders of Hierarchy blocks now display the full hierarchical name of the object.

Improved Startup

Aspen Plus now starts up more quickly with the Start Using Aspen Plus screen, which lets you quickly get started by opening an existing file from the list of recently used files or the file browser, or by starting a new run from a blank simulation or a template.

The aspenONE Exchange page and the news page are no longer opened by default when starting Aspen Plus. You can open them from the Resources tab of the ribbon. These changes make Aspen Plus start up more quickly, and avoid problems when you do not have a connection to the Internet.

The file browser used for selecting a file to open or import has been redesigned to take advantage of features available in Windows 7, including the Favorites and other file locations listed at the left side of the window, and a search box.

Ribbon Changes

There are several usability improvements on the file menu:

You can now close the open case without closing Aspen Plus using File | Close or clicking the X at the right end of the ribbon tab bar.

You can now re-open the currently open case to revert to the last saved version. Before reverting, Aspen Plus saves the file that was open with a new name including the word Modified and a unique, sequential number.

You can open model library (*.apm) files from the File | Open command to add them to the available libraries.

The Get Started tab of the ribbon has been renamed Resources, and it has some changes as well:

The Ribbon Mapping command has been removed. You can still find the mapping of commands from older versions of Aspen Plus to the current version in the help.

The Troubleshooting command has been removed. Click  on the ribbon to open help, then click Troubleshooting in the help contents.

The Search command has been renamed aspenONE Search to distinguish these searches through files within your enterprise from aspenONE Exchange searches.

The Documentation and Training commands have been replaced with the Training command in the aspenONE Exchange group. The documentation and training content is now found within aspenONE Exchange, providing improved capabilities for searching and locating it.

The Models command lets you search aspenONE Exchange for sample files and other models. The All Content command lets you search all materials on aspenONE Exchange.

The News button opens the Product News page (previously called the Start page), displaying the latest product news (including patches and new releases), tips and tricks, and events.

In addition, the New Object and Time Stamp commands on the Flowsheet Format tab of the ribbon were moved out of the Insert submenu and into the Shapes group to make them easier to find.

Context Menu Changes

The context menus accessed by right-clicking blocks and streams on the flowsheet were very long. They have been streamlined to make it easier to find the most commonly used commands. The changes include:

The Input and Results commands now show status indicators for input completeness and results status.

Delete Stream and Delete Block were removed; use Cut for the same functionality plus the ability to paste the stream or block afterward, or press the Delete key.

The Results and Custom Stream Results commands for streams and the Stream Results and Custom Stream Results commands for blocks were combined into a submenu.

Rotate Icon was removed from the context menu for streams; use the rotate/flip buttons in the Flowsheet Modify tab of the ribbon.

Send to Back and Bring to Front were removed from the context menu for streams. They are now found in the Flowsheet Format tab of the ribbon.

Center View was removed. Press CTRL+U to access this feature.

The Summary command for blocks was removed. Bring up the block's forms with Input or Results, then click Summary for that block in the navigation pane.

Add to Model Library was removed. Use the Customize | Hierarchy | Add Selected command in the ribbon instead.

EO Exclude, Convert To, and Revert are now only shown when such an action is possible.

Resize Icon was removed. Click and drag the handles on the corner of the selected block to resize icons.

aspenONE Exchange

The command for opening aspenONE Exchange on the Resources tab of the ribbon has been split into three separate commands to help you more quickly find what you need. Models opens Exchange with a filter already set to only search for models. Training opens Exchange with a filter already set to only search for training and documentation files. And All Content lets you search everything.

There is also now a search box at the right end of the ribbon bar which lets you enter queries directly into aspenONE Exchange.

Once aspenONE Exchange is open, there is now a ribbon tab that appears with commands specific to it.

Aspen Community

The Community button on the Resources tab of the ribbon opens your default browser to AspenTech's new online community page. Here you can find:

Lively topical discussions with other thought leaders

Blogs from AspenTech experts and guest contributors

Access to the resource library

Schedules for upcoming events

Solids Modeling Improvements in V8.4
See Also

What's New in Aspen Plus V8.4

The Dryer model now includes a model for cocurrent spray dryers using hollow cone nozzles, two-fluid nozzles, or rotary atomizers. You can also specify the droplet size distribution in place of an atomizer model. Shortcut Dryer models will now normalize the particle size distribution to sum to 1.

FluidBed can now handle any reactions you could specify for typical reactors like RCSTR. If you specify reactions, you can also specify how the particle size distribution (PSD) of each substream is calculated, or specify an overall PSD for all the solids. You can specify the PSD directly (as size intervals and fractions in each interval) or by using a distribution function.

Also in FluidBed, you can now adjust the coefficients in any of the elutriation models. The former user-specified model has been renamed to Extended Geldart et al.

Crusher, Crystallizer, Granulator, and Flash2 now have options for specifying the outlet PSD similar to the new user-specified PSD option in FluidBed. In Granulator and Crusher, these options are merged into the Specifications sheet (as they represent alternatives to the granulation and crushing models). Crystallizer now also offers McCabe's law of growth as an option for calculating the PSD (all particles increase their diameter at the same rate).

In Flash2, you can specify solid entrainment from the MIXED substream. This was already available for other solid substreams but now is available for solids in the MIXED substream.

The Cyclone, VScrub, CFuge, and ESP models now feature the Solids separator feature, similar to other solids models. These and other models have had high-level options renamed for consistency: Model refers to the solids separator model or a model for a particular kind of equipment. Mode refers to simulation or design. Calculation method refers to a specific technique for calculating results, often named for the researcher who first designed the method, such as the Yung, Altmann, and Brownell methods in VScrub, CFFilter, and CFuge, respectively.

Dryer now can use a utility to provide heat when there is not an inlet gas and outlet exhaust stream. Crusher and ESP now support electric utilities.

Classifier now supports an optional second inlet stream for the sifter gas used in sifter models.

There are many new examples for solids processing in the Examples/Solids Processing folder.
Physical Properties Improvements in V8.4
See Also

What's New in Aspen Plus V8.4

Stream Property Analysis

Stream Property analysis, available under the Home | Analysis | Stream Analysis command in the ribbon or the Analysis command on the context menu when a stream is selected, is a streamlined version of Generic analysis where the composition is always specified using a stream. In this analysis you can specify a manipulated variable, displayed on the X axis, and a parametric variable, displayed as separately colored and labeled curves.

Mixture Analysis

Mixture analysis, available as Home | Analysis | Mixture in the ribbon in the Properties environment, provides a similarly streamlined version of the other form of Generic analysis, where the composition is specified directly on the form.

PC-SAFT

The speed of the PC-SAFT model has been improved when there are associating components. You will notice the most improvement when there are many associating components or at very low temperatures.

REFPROP Update

REFPROP has been updated to version 9.1. This version supports three-phase (VLLE) calculations and includes the following new components:

Compound

CAS Number

undecane  

1120-21-4

diethyl ether  

60-29-7

ethylbenzene  

100-41-4

hydrogen chloride  

7647-01-0

isooctane  

540-84-1

m-xylene

108-38-3

Novec649 (Dodecafluoro-2-methylpentan-3-one)

756-13-8

o-xylene

95-47-6

p-xylene

106-42-3

R-E143a (methyl trifluoromethyl ether)

421-14-7

R-40 (methyl chloride)

74-87-3

R-1216 (hexafluoropropene)

116-15-4

R-E245cb2 (methyl-pentafluoroethyl-ether)

22410-44-2

R-E245fa2 (2,2,2-trifluoroethyl-difluoromethyl-ether)

1885-48-9

R-E347mcc (methyl-heptafluoropropyl-ether)

375-03-1

Component Databank Changes

These components, some of them derivatives of piperazine (PZ), diisopropanolamine (DIPA), or triethanolamine (TEA), were added to the AQUEOUS databank to improve predictions of carbon capture for activated amines:

PZH+

PZH+2

HPZCOO

PZCOO-

PZCOO-2

DIPAH+

DIPACOO-

TEAH+

CH3S-

C2H5S-

CO2SH-

CS2OH-

Binary interaction parameters for some systems for NRTL, UNIQUAC, and Wilson models were modified. See compatibility notes for details.

General Engineering Improvements in V8.4
See Also

What's New in Aspen Plus V8.4

Custom Tables

You can now export Custom Tables to Microsoft Excel documents.

Utilities

Decanters in RadFrac now support utilities to provide cooling. Decanters associated with the condenser will use the utility specified for the condenser, while for other decanters you can select the utility on the Specifications sheet of the decanter.

Dryer now can use a utility to provide heat when there is not an inlet gas and outlet exhaust stream. Crusher and ESP now support electric utilities.

Utility usage results within individual blocks now show the ID of the utility used, in addition to the other results. The ID was already shown in columns, where multiple utilities may be used, but now it is shown in other blocks as well.

Initialization of Aspen Rate-Based Distillation

Because the equilibrium-based calculations RadFrac performs for initialization of the rate-based problem may represent a significantly different problem, sometimes these initialization calculations generate errors or warnings that are irrelevant for the actual rate-based problem. Starting in V8.4, errors and warnings during initialization of rate-based calculations which are unlikely to affect the rate-based problem are suppressed, and certain other errors are reduced to warnings.

Design Specifications in EO Mixed Mode

In previous versions, it was not possible to use Design Specifications in the Equation-Oriented portion of Mixed Mode runs. The design specifications would always report errors and you would not be able to view their results. Now these problems are fixed and you can use design specifications in Mixed Mode.

User Models

There is a new utility routine, FLSH_RFLASH, to support flash calculations with reactions occurring. This can be called from User2 models. The User2 subroutine has two additional arguments needed to support reactions. User2 blocks also now have a Reactions sheet where you can specify reactions to be carried out by the user subroutine.

Saving Files

When you save a .bkp or .apw file to a new name or new location, Aspen Plus will now save a copy of any associated costing files with the new name/location even if costing is not currently active. This saves your costing information if you reactivate costing later.

When you save a compound file (.apwz file) with a new name, Aspen Plus now saves the files inside the compound file with the same new name, as if you had saved them individually with the new name.

Compatibility Notes for Aspen Plus V8.4
See Also

What's New in Aspen Plus V8.4

Mapping of Commands to the Ribbon

This section describes the differences that you might encounter between Aspen Plus V8.4 and Aspen Plus V8.2. In most cases, previous Aspen Plus input files and backup files are completely compatible with Aspen Plus V8.4.

When you open a file from a previous version, Aspen Plus displays the Upward Compatibility dialog box. If you select Maintain Upward Compatibility for Features Listed Below then Aspen Plus ignores the new features in all the areas mentioned on the dialog box (which may include new pure component databanks, property methods, built-in parameters, ADA/PCS procedures, calculated molecular weights obtained from formulas, and checking of user-specified sequence, depending on the version of Aspen Plus used to create the file).

Costing results from Exchanger Design & Rating or Economic Evaluation may change from one version to the next due to updated cost data.

New features in other areas, as noted below, may still cause different results in the new version. These changes may have greater impact in flowsheets with loose tolerances due to convergence paths being different. AspenTech makes every effort to avoid making changes that result in incompatibilities with previous versions. The changes discussed in this section were necessary to correct problems (such as wrong results), to implement new features, or to improve ease-of-use.

The most important areas where you might encounter differences between Aspen Plus V8.4 and earlier versions are:

Fortran Compiler

Aspen Plus V8.4 was compiled with the Intel Fortran compiler XE 2011 (version 12) and Microsoft Visual Studio 2010. User Fortran models compiled with different compilers or compiler versions may not work, or may run but not be able to write to the Aspen Plus history file, report file, and control panel. See Chapter 1 of Aspen Plus User Models for more details. Search the Knowledge Center for this document.

Local Units for Tabpoly

An error in versions V8.0 and V8.2 caused the local unit specification to be lost on Methods | Tabpoly forms when loading files from V7.3.2 or earlier. This could cause these parameters to be interpreted incorrectly when the local units on these forms differ from the global units, leading to wrong results. This is now fixed and those files will load correctly in V8.4. However, if you have files saved in version V8.0 or V8.2 which were created from earlier files, the units may have been lost. These files can be fixed by going to the Information sheet of the Tabpoly form and selecting the correct unit set.

Reversible Reactions in General Reaction Sets

General reaction sets offer the ability to calculate the reverse reaction rate from the forward rate and the equilibrium constant via the principle of microscopic reversibility. In V8.0 and earlier, this reverse reaction rate was not calculated correctly if the rate constant was specified with a different concentration basis than the equilibrium constant. In V8.2, this feature was not allowed when the bases were different. Now the basis is properly converted when the reverse reaction rate is calculated in this way and the bases are different. You will generally see different results in these cases from V8.0 and earlier.

RadFrac Decanters in the Condenser

Decanters in RadFrac now support utilities to provide the duty needed for subcooled temperature or degrees subcooled specifications. When this decanter is in the condenser, it will use the utility specified for the condenser. This will produce different utility results than in previous versions.

If both the decanter in the condenser and the condenser itself have such duties, the utility will have different EO variables representing the changed form of the EO problem in V8.4. Specifically, the COND_HDUTY variables from previous versions will become TCOND_HDUTY, and they will now be connected to the TCOND_HDUTY variables in RadFrac, representing the total of the two duties and resulting utility usage.

Holdup Basis in Rate-Based Distillation

Aspen Rate-Based Distillation now computes holdup differently in cases where a holdup estimate was provided for some but not all stages. The difference is related to how the holdup basis is determined. Previously, the holdup basis was always taken as molar on stages without a holdup estimate. Now, if there is a holdup basis for a lower-numbered stage, that basis is used for the stages with no holdup estimate. Since the units for the reaction rate constant depend on the holdup basis, this can mean very different results for reaction rates. The new method is more consistent; if the holdup was specified with the right basis corresponding to the reaction rate constant, and the same reactions are used on stages without holdup specified, then the right basis will now be applied to those stages.

EO Input Units

The EO Input form now requires physical type and units to be specified for each variable. This ensures that the value and bounds specifications are interpreted correctly if the global unit set is changed. It was always possible to specify these units, but it was not required, so simulations from previous versions may load with incomplete status on this form.

Simulation Engine and Customization Windows

The Aspen Plus Simulation Engine window and Aspen Plus User Interface Customization window have been combined into a single command under Aspen Plus, called Customize Aspen Plus. From here you can do tasks formerly performed in the Aspen Plus Simulation Engine window. To perform user interface customization tasks, change to the customization folder in this window before running commands like mmcustom or custinst.

Binary Interaction Parameters

Binary interaction parameters for NRTL, UNIQUAC, and Wilson models were added or changed for the following binary pairs:

ethanol/n-decane

1-propanol/n-decane

dodecanol/n-decane

1-nonanol/1-octanol

ethanol/n-octane

chloroform/benzene

1-propanol/n-hexane

Retired Features

This will be the last version to include the pure component databanks PURE11, PURE12, and PURE13. These databanks correspond to Aspen Plus 2006 and earlier versions. Because most users have updated their simulations to more recent databank versions, these databanks are being dropped to reduce the size of the delivered database. If you think you will still need them, see Maintaining Access to Retired Databanks in the Aspen Properties Enterprise Database help for instructions on preserving a copy of these databanks.

Legacy databanks (using DFMS) are still included, but they will eventually be removed. (This happened in V9.) You should take steps now to migrate custom databanks into Aspen Properties Enterprise Database.

What's New in Aspen Plus V8.2
See Also

Compatibility Notes for Aspen Plus V8.2

Solids Unit Operation Models

Crystallizer now has an option to specify solubility data as coefficients for a solubility function.

Classifier has been updated to include additional models specifically for modeling sifters.

FabFl has been updated to add more models for filtering time, pressure drop, and separation efficiency.

HyCyc has been updated to add the Plitt, Nageswararao, and Braun calculation models, and the Bradley and Rietema hydrocyclone designs. You can also now specify round or rectangular inlet.

Pipe and Pipeline are now able to calculate pressure drop for solids in the pipe using the dilute phase conveying or dense phase conveying models.

A new unit operation model, FluidBed, allows you to model the behavior of fluidized bed units. Equilibrium vapor phase reactions are available in this block via Chemistry.

Filter has been updated to include models of disc and belt filter units in addition to the drum model previously available. Three new models (General, Holdich, Alles) are available for modeling each of these types.

A new unit operation model, CFFilter, allows you to model the cross-flow filter unit designed to concentrate the solids in a slurry rather than separate them completely.

VScrub, in design mode for Venturi scrubbers with Yung's model, now calculates throat length. This ensures that the design calculation always includes all parameters necessary to simulate the unit.

Solid-handling models are now able to operate on solids in the mixed substream, and do not require a separate solid substream. However, many of these models require particle size distributions. In order for those models to process solids in the mixed substream, you must add a particle size distribution to the MIXED substream on the Setup | Solids | Substreams sheet.

Most solid separation models have a shortcut mode that allows you to specify the outlets in terms of fractions of solid or liquid to a particular outlet and/or loading. This mode is now consistently labeled Solids Separator.

When ClChng maps a substream with a particle size distribution (PSD) into another substream with a PSD, it now maps the inlet PSD into the outlet PSD. This is similar to the mapping performed by feed streams specified with a different PSD mesh than that for their stream class. It can generate warnings or errors if not all of the inlet solids fit into the outlet PSD mesh.

In the Separation Efficiency results of solids models and in the Solids tab of Stream Results when more than one solid substream with PSD is present, if the substreams use the same PSD mesh, a combined substream called $TOTAL is now available. This shows overall results for all substreams. In stream results this is available even when the substreams have different PSD meshes, and a combined PSD mesh is generated for the $TOTAL substream.

When you specify the particle size distribution of a stream with a distribution function, now if there is a problem generating the fractions, you are offered the choice of normalizing the result. Also, whether or not normalization was necessary, a plot is generated showing the function and the size fractions generated from it. This plot can help you understand why a particular distirbution function does not work with a particular mesh.

aspenONE Exchange

Now you can import performance curves from aspenONE Exchange for pumps, compressors, and turbines directly in Pump and Compr forms, and valve parameters in Valve forms. Look for the  button where you specify this data. [In later versions aspenONE Exchange was replaced with the Aspen Knowledge Center.]

Economic Evaluation

Most solids models are now included in Integrated Cost Estimation and the limitations on costing solids models are now documented in the help.

Economic Evaluation has a new Safety Instrumented Systems feature to calculate the costs of extra safety equipment required in the upstream oil sector. To use this feature you must create a costing template with this option selected and specify it in Setup | Costing Options to use this feature. See the What's New for Economic Evaluation for more information.

Reactors

RCSTR has been updated to add Vapor Fraction as an allowed specification in place of Temperature or Heat Duty. This is useful for modeling two-phase systems where the reacting phase is present in a small amount, to avoid convergence problems that can occur when the solution path enters conditions where the reacting phase disappears entirely.

It's now possible to fit Property Set property profiles for RPlug reactors in Data Fit, as has already been possible for RBatch. On the Data Set | Define sheet, select Prop-Value as the variable and then select the Property Set ID.

MCompr

MCompr now supports 3-phase calculations in the compressor, including free-water, dirty-water, and rigorous 3-phase options.

Equation-Oriented Modeling

A new EO option was added for RStoic only, directly on the Block Options | EO Options sheet, called Conversion calculation. Normally, the EO model for RStoic calculates conversion variables for each reaction in terms of each reactant. This calculation can cause problems when the flow rate of a reactant in the feed becomes zero and the conversion becomes undefined. Setting this option to No excludes the calculation of conversion from RStoic except for cases where the reaction has a specified conversion, helping to avoid this problem.

Flowsheet Convergence

In certain problems with true-species approach and recycle loops, the convergence method can drive the flow of a tear stream to be out of charge balance. Usually the flows stay in balance, but certain problems can reach a false solution in which an entire recycle loop is out of charge balance. Insert the new Chargebal block (from the Manipulators tab of the Model Palette) into such a loop to enforce electroneutrality within the loop in these cases.

Property Sets

D95 and D100 have been added to calculate the particle size larger than 95% and 99.9% of the solids mass, respectively.

CHEMPOTE has been added for chemical potential, and OSMOPH2O for osmotic pressure with water as solvent.

FUG and FUGMX have been added to calculate pure component fugacity and component fugacity in a mixture. These work similar to PHI and PHIMX for fugacity coefficients but they provide the fugacity in pressure units.

TLIQ2 and PLIQ2 provide the temperature (at a given pressure) or pressure (at a given temperature) at which a second liquid phase begins to form in a condensing system, considering vapor-liquid-liquid behavior. TCLOUD and PCLOUD provide the cloud point temperature and pressure, which provide the boundary between one-liquid and two-liquid systems, considering only liquid behavior. Some systems may have an enclosed two-phase region with one-phase behavior above and below the temperatures and/or pressures at which two-phase behavior occurs. For these systems, use TCLOUDL or PCLOUDL to access the lower transition temperature or pressure, and TCLOUDU or PCLOUDU to access the upper transition temperature or pressure.

Physical Properties

The Onsager-Samaras liquid surface tension model now has two option codes which apply to the way it calculates the solvent mixture surface tension from the pure component surface tensions of individual solvents. One specifies the exponent in the mixing rule, and one determines whether Henry components are included along with solvents in this calculation.

The NIST/TDE engine has been updated to version 7.1, and the NIST database has been updated to version 7.3.

Chemistry

Now you can specify partial pressure as the basis for equilibrium constants of equilibrium reactions in chemistry, for reactions not involving ions. Previously, only the mole fraction and molality bases (equivalent to mole gamma and molal gamma in reactions) were available. In addition, you can specify different equilibrium constant basis for different reactions, so that you can have partial-pressure-based reactions and ionic reactions as part of the same chemistry. This makes it easier to specify vapor-phase chemistry.

In addition, chemistry now applies more generally to the vapor phase. In previous versions, chemistry only applied to the vapor phase when a flash was specified as vapor-only and the chemistry contained only equilibrium, non-electrolyte reactions. Now, the equilibrium, non-electrolyte reactions in chemistry are always calculated for the vapor phase when present.

Usability Improvements

For binary analysis and residue curve analysis, the default valid phases are now Vapor-Liquid-Liquid. For other types of analysis, the valid phases still default the global default.

The Conv Options, Conv Order, and Attr-Scaling forms under Convergence have been renamed to Options, Nesting Order, and Scaling, respectively.

The Attr-Comps form under Components (in the Properties environment) has been renamed to Component Attributes.

System administrators can now create additional folders under GUI\Templates and these folders and the templates in them will be available when you create a new run.

Component Databank Changes

The PURE28 databank was created, based on the January 2012 public DIPPR release. This database is similar to the PURE26 and PURE27 databanks, except that many parameters for a large number of components have been updated. 7 components were added:

Alias

Name

CAS Number

C7H12O-N10

CYCLOHEXANECARBOXALDEHYDE

2043-61-0

C9H20O2

3,3-BIS-HYDROXYMETHYL-HEPTANE

115-84-4

C5H10O-N3

TETRAHYDROPYRAN

142-68-7

C21H42O2-N1

METHYL-ARACHIDATE

1120-28-1

C6H8S-D3

3,4-DIMETHYLTHIOPHENE

632-15-5

C6H14S2-N1

DISULFIDE,-TERT-BUTYL-ETHYL

4151-69-3

H2S2O3

THIOSULFURIC-ACID

13686-28-7

In the SOLIDS databank, new component SODIUM-THIOCYANATE, alias NASCN, CAS number 540-72-7 was added.

In the AQUEOUS databank, the CAS number 463-56-9 was added for HSCN.

Aspen Properties Enterprise Database

When restoring the databases into the LocalDB at first run of a product using Aspen Properties Enterprise Database on Windows 7 or Windows 8, you can add custom databases to be restored at the same time as the system databases.

 What's New in Aspen Plus V8.0
See Also

Compatibility Notes for Aspen Plus V8.0

Search the Knowledge Center for information on:

Improved Exchanger Design and Rating Workflow

Activated Economic Analysis

Modeling Processes with Solids

Activated Engineering in Aspen Plus

Custom Tables

Viewing any Stream Property on the Process Flowsheet

Plant View

Integrated Analysis

Aspen Plus now has the ability to automatically perform costing with each run. This can be controlled with a new checkbox Auto-Evaluate on the Economics tab of the ribbon.

It is now easier to perform energy and economic analysis on Aspen Plus models. The Activated Analysis panel, accessible from the Home tab of the ribbon, lets you run each analysis with a single click and displays a summary of results. The analyses are automatically updated after each run. The energy analysis allows you to study possible energy-saving changes in your plant interactively in the Energy Analysis environment.

The Plant View feature allows you to view measured plant data beside simulation results, when a model is connected to a source of plant data. Click Plant View on the View tab of the ribbon to open this view.

Example Files

aspenONE Exchange now lets you access many additional model files and documentation via the Internet. Start it from the Get Started tab of the ribbon.

There are several additional example files delivered with Aspen Plus in the Examples folder and its subfolders:

Several new CO2 removal using amines and the unsymmetric electrolyte NRTL model in the Amines_ENRTL-RK subfolder

A new model for the caustic evaporation process

A new model for urea synthesis and granulation, which extends the existing urea synthesis model to include the solids processing operations, in the Urea subfolder

A new example for the crystallization and drying of sodium chloride

Solids Unit Operation Models

A new unit operation model, Granulator, has been added. This can be used to model granulation and agglomeration processes, those in which small particles are made larger by granulating or coating processes.

A new unit operation model, Classifier, allows you to model gravity-based solid classification units such as elutriators.

Screen has been updated with new capabilities from the SolidSim Screening model. This includes 5 new types of selection function, offset of fines, additional methods for specifying the entrainment of fluid phases entering the screen, the ability to specify multiple-deck screens in a single Screen block, and additional results.

Crusher has been updated with new capabilities from several SolidSim mill and crusher models. There are additional breakage and selection functions, as well as an alternative mechanism for specifying outlet particle size distribution based on distribution functions.

Dryer has been updated with detailed models of convective dryers. The original, shortcut dryer has some additional capabilities as well. The results are now much more detailed. The convective dryer model requires explicit solid and gas feed streams, so the old multi-stream input port has been split into two single-stream inlet ports. See Compatibility Notes.

Cyclone has been updated to add a number of additional built-in cyclone configurations, and the Muschelknautz efficiency correlation from SolidSim, along with its different design mode (in Design mode with Muschelknautz, specify number of cyclones and pressure drop to have Cyclone select the best-performing cyclone configuration).

VScrub has been updated. In addition to Yung's model for the venturi scrubber, now Calvert's model is also available. In addition to modeling venturi scrubbers, there is also now an option to model spray towers.

Crystallizer has a new option to calculate the outlet particle size distribution from a distribution function.

CFuge has been updated. In addition to the perforated basket centrifuge offered in previous versions, there are now models added for the decanting centrifuge, pusher centrifuge, and disc separator.

ESP has been updated. There are new models for the parallel plate electrostatic precipitator, as well as an option to model wire-in-tube precipitators.

ClChng now copies data between different substreams of the same type. In previous versions, it could only copy between substreams with the same ID. Now it allows you to copy, for instance, the CISOLID substream to the CIPSD substream, creating an empty PSD (with missing values) as it does so.

The Substreams and Moisture Comps forms under the Setup folder have been merged into a new Solids form, with a new object manager for specifying particle size distribution (PSD) meshes (the lists of size intervals).

If you define multiple PSD meshes, you can now specify which mesh to use for specifying data for each stream directly in the CI Solid or NC Solid sheet for that stream. If you use a mesh other than the default for the stream class, the data you enter will be mapped into the size intervals for the stream class, possibly generating a warning if the particle size range for the stream class does not cover all non-zero intervals in the specified data, or an error if the fractions do not add to 1 (within a tolerance) after mapping.

You can also choose to use a distribution function to specify the PSD for a stream, and Aspen Plus will calculate the PSD fractions to match the distribution.

The Stream Results form in each block, stream, and the Results Summary now contains a Solids sheet showing particle size distributions of streams, when available. There is now a built-in plot for particle size distributions, as well.

Data on the Flowsheet

You can now define up to 6 properties to be shown directly on the flowsheet in the same manner as temperature, pressure, and other global data are now shown.

You can also define Custom Tables of data by copying and pasting variables from other forms, and display these on the flowsheet as a live table or as an icon.

Descriptions for streams and unit operation models are now displayed as long names in tooltips on their icons in the flowsheet, on their names in the navigation pane, and other places.

Tracker on Plots

A new feature on plots, the Tracker, provides crosshairs that move along the curve as you move the mouse, showing the X-Y coordinates of the point at the crosshairs. To enable it, in the Plot Format tab of the ribbon, in the Display group, check the box for Tracker.

Distillation Models

On RadFrac's Setup form, the Thermosiphon Config. and Reboiler sheets have been merged. The Report | Pseudo Streams sheet has been merged into the Setup | Streams sheet with other stream specifications. A new Specification Summary form allows you to view and edit the operating specifications, design specifications, and varied variables all in one place.

The forms for RadFrac have been reorganized into a set of folders, grouping related forms together. The EO-related forms have been similarly grouped for other blocks.

The Glitsch tray sizing procedure used in RadFrac, MultiFrac, and PetroFrac has been improved. Previously the Glitsch shortcut method was used; now the rigorous method is used. This now provides several additional sizing results, sufficient to reproduce the results in a rating calculation.

The HanleyStruc (2010) mass transfer and interfacial area correlation for sheet metal structured packings in Aspen Rate-Based Distillation has been extended to include another version of this correlation that applies to metal gauze packings.

HeatX

HeatX now allows phase splitting into 2 or 3 outlet streams from each side of the exchanger, and the new Setup | Streams sheet allows you to assign which phases go into each stream. This replaces the old mechanism that just allowed a second stream for free water decant.

The interface between HeatX and Aspen Exchanger Design and Rating programs has been improved. You can now Size Shell&Tube or Size AirCooled from the Setup | Specifications sheet to perform sizing calculations. For this sizing calculation, you can use EDR defaults or a template you select to supply geometric options. You can then update the Aspen Plus model to use this EDR result or just save it as a separate EDR file. Also, the setting plan, tube layout, and profile plots from EDR are now available on the EDR Shell&Tube Results and EDR AirCooled Results forms.

Rigorous HeatX design now allows you to use an EDR template file (*.edt) to define the initial configuration. A *.edr file may also be used as the template; if you do so, the predefined parameters in this file are ignored.

Flash Specifications

In many unit operation models, the flash specifications have been redesigned so that each possible specification has a dedicated field, and you can select which specifications are active. This allows you to switch between different specifications while retaining the values for the ones not currently in use.

Utilities

The Utilities object manager has a new option to require utilities specifications for all utility exchangers. When this is checked, blocks which support utilities are marked incomplete if they have heating or cooling without a utility specified.

There is now a Utilities Library which contains preconfigured utility blocks. When you create a new utility block (either on the Utilities object manager or in a block's utilities specifications), you can use one from the library instead of a blank one. It is possible to add your own preconfigured utilities by editing the Utilities Library's XML file.

The Model Summary grid now allows you to customize the grid, save customized versions as templates, and export the grid to Excel. The Excel report can be activated as a live Aspen Simulation Workbook interface to your model.

Property Sets

EXERGYML and EXERGYMS are new property set properties for exergy, calculated on a mole basis and a mass basis, respectively. EXERGYFL is exergy flow rate. These properties use a reference temperature and pressure specified on the Setup | Calculation Options | Calculations sheet.

A number of new property set properties related to solid particles have been added:

D10, D20, D25, D50, D63 (63.2%), D75, D80, and D90 are the particle diameter greater than X% of the solids mass for solids with particle size distribution.

D25:D75 is the ratio D25/D75, a measure of the width of the particle size distribution.

D1_0, D2_0, D2_1, D3_0, D3_2, and D4_3 are ASTM derived diameters D[1,0], D[2,0], D[2,1], D[3,0], D[3,2], and D[4,3].

VSSA is specific surface area and SMD is Sauter mean diameter.

Equation-Oriented Modeling

Two new commands have been added to the EO Analysis group on the Equation Oriented tab of the ribbon. Block Stats displays statistics for all blocks. Model Stats displays information about the size of the problem and the number of degrees of freedom. This information appears in the Control Panel for both commands.

User Models

A new Fortran compiler option was added to compilers.cfg to support the latest release of Intel Fortran 12 which comes bundled with Microsoft Visual Studio 2010 as linker. (The previous release used Microsoft Visual Studio 2008.)

The CALUPP property monitor (accessible from Fortran user models) can now access user properties (from the Customize | User Properties form in the Properties environment) in addition to built-in Property Set properties.

PPEXEC_USER now contains a new flag you can set to disable the mass balance check. Use this if you create a user model like Mult or a distillation column with pseudostreams which intentionally does not maintain mass balances.

Physical Property Models

Mixture diffusivity models Wilke-Chang (DL1WCA) and Nernst-Hartley (DL1NST) now have a second option code which specifies which liquid mixture viscosity model is used to provide the mixture viscosity: Andrade (0, default), quadratic mixing rule (1), or Aspen (2).

The Mathias-Copeman and Schwartzentruber-Renon-Watanasiri alpha functions, which have previously been available for certain equation-of-state models, are now available for all Peng-Robinson (PR) and Soave-Redlich-Kwong (SRK) based models via an option code. See Soave Alpha Functions or Peng-Robinson Alpha Functions for information about these functions.

Aspen Properties Enterprise Database

On Windows Vista and Windows 7, the new SQL LocalDB feature is now supported and used by default. This greatly simplifies the installation procedure for the typical case where you are not sharing custom databanks with anybody else.

The LocalDB runs as a standard program, not a service, so there is no service to configure. Aside from simplifying configuration, this is compatible with site policies that prohibit SQL Server.

The LocalDB is not accessible over the network. No other computer can access any custom databanks you install or create on your computer in LocalDB.

Databases in LocalDB cannot be cloned, nor can you clone databases from elsewhere into LocalDB. Other mechanisms for copying data work.

Other than the above exceptions, LocalDB provides the same features as SQL Express. All features of Aspen Properties Enterprise Database (APED) other than network access are supported with LocalDB.

The first time you start Aspen Plus in a LocalDB-enabled version, the Aspen system databases will be loaded into the LocalDB. A message box will be displayed while this happens.

Microsoft does not support LocalDB on Windows XP. Also, LocalDB is not supported on server versions of Windows since LocalDB is designed to support a single user. On these versions of Windows, SQL Express will continue to be used by default, as in previous versions.

You can configure APED to use an installed SQL Server on any version of Windows. This option works the same as in previous versions, except that to configure APED to use SQL Server you must clear the Use LocalDB checkbox on the configuration dialog box.

User Databanks

In previous versions, it was possible to create databanks using legacy databank files which contained component aliases longer than 12 characters or component names longer than 32 characters, but when you attempted to use those compounds in a simulation, Aspen Plus would crash. Now APED enforces the 12 character limit on aliases and informs you if it finds overly long names when building a databank. The 32-character limit on component names has been removed, and you should be able to use the longer names in simulations, with two exceptions:

In report and history files, only the first 32 characters of the name will be printed.

In the input file, extremely long component names will be truncated to maintain the 74-character line length limit. If you use the option (in File | Options | Properties Basis) to identify compounds by alias (the default), then this will not affect you. However, if you use the option to identify compounds by component name, you will not be able to use components with such long names.

Ribbon Commands

Some commands have been moved, renamed, or added to the ribbon for ease of use. These include:

Home tab: A new Activated Analysis command has been added to show the Activated Analysis panel. This replaces the Energy Analysis command that was present previously.

Economics tab:

The Operation Cost group has been renamed Prepare, and the Cost Options command has been moved into it.

Material Cost has been renamed to Stream Price.

A new group Economics Solver has been added. The Activate Economics command is now a checkbox named Economics Active in this group, and Delete Scenario has also been moved into the group. The new command Auto-Evaluate appears in this group.

The Model Summary command (which also appears on the Home tab) has been removed from the Economics tab.

The Status indicator has been expanded to show the Mapping, Sizing, and Evaluation statuses separately.

Equation-Oriented tab:

Block Stats and Model Stats commands have been added in the EO Analysis group.

The shortcuts to the Global Scripts, Local Scripts, and Assign Scripts forms have been combined under a Scripts button to save space.

The shortcut to the EO Configuration | Ports form and the History File command have been removed. (You can still access the history file from the Home tab.)

View tab: The Model Palette button has been moved from the Flowsheet Modify tab to the View tab.

Developer tab:

This tab has been renamed to Customize.

New command added for Custom Tables.

Flowsheet Modify tab:

Model Palette command has been moved to the View tab.

Find Object command added.

What's New in Aspen Plus V7.3.2
See Also

Mapping of Commands to the Ribbon

Compatibility Notes for Aspen Plus V7.3.2

Search the Knowledge Center for information on:

Navigation and Forms

The major change for Aspen Plus version V7.3.2 is a long-needed update to the user interface. This includes a reorganization of commands to arrange them more logically and to make them easier to find, using a ribbon. There are many other usability enhancements as well. These features are described in the following sections.

The ribbon

Tabbed windows and the navigation pane

Properties and Simulation environments

Status messages and prompts

Color coding for fields

Grids

Forms

Plots

User Model Libraries

Other usability enhancements

Other enhancements

The Ribbon (V7.3.2 Enhancements)
See Also

What's New in Aspen Plus V7.3.2



The menus and toolbars have been replaced with a ribbon interface. The File menu still contains the familiar commands for opening and saving files. Other commands have been relocated onto a set of ribbon tabs, with the most frequently used commands together on the Home tab. To find the current location of any of the commands from previous versions, see Mapping of Commands to the Ribbon.

Click any of the tabs on the ribbon to access a set of related commands. These commands are split into named groups, such as Clipboard which is highlighted above.

Some groups have a small button, the dialog box launcher , located at the bottom right corner of the group. Clicking this button opens a dialog box with related commands.

The Quick Access Toolbar appears at the left side of the title bar. The Undo, Redo, and Next commands are located here. You can customize the Quick Access Toolbar to add other commands you frequently use; these commands are always available, no matter which tab of the ribbon is active.

You can navigate the ribbon using the keyboard.

Press the Alt key, and badges appear, showing letter and number keys you can press to access commands in the Quick Access Toolbar, File menu, and ribbon tabs.

Press one of these keys.

If you press a key for a Quick Access Toolbar command, that command is executed.

If you press a key for the File menu or a ribbon tab, the menu or tab opens and a new set of badges appears, showing the additional key or keys you need to press to execute each command in it.

The traditional shortcut keys (based on key combinations involving Ctrl and/or special keys such as F1 through F12) still exist, and as much as possible are unchanged from previous versions. In the tooltips for ribbon commands, these shortcuts are shown wherever they exist. See Using the Keyboard for a list of these shortcuts.

Some ribbon tabs are contextual. These tabs are only shown when the commands they contain are relevant. For instance, the Flowsheet Modify and Flowsheet Format tabs are only visible when the flowsheet is the active window. In the Properties environment, only the relevant ribbon tabs and commands appear.

Tabbed Windows and the Navigation Pane (V7.3.2 Enhancements)
See Also

What's New in Aspen Plus V7.3.2



The Data Browser has been integrated into a tabbed window interface with a shared navigation pane. Forms, the flowsheet, Control Panel, plots, and other windows appear with separate tabs. The + button next to the window tabs lets you create a new tab to open forms into while retaining all existing open forms.

The navigation pane applies to all open forms, and updates to show the currently open form when you move to a new form or switch tabs to a previously opened one.

The tabbed interface is more flexible than Workbook mode in previous versions. You can click and drag tabs to one side of the workspace to display them side by side, or drag them out of the Aspen Plus window entirely (even to a second monitor, on a computer so equipped). You can save different layouts of windows and switch between them; these saved layouts and the current layout are saved with the simulation. See Viewing Multiple Windows for details.

There is now a Zoom slider and related controls at the bottom of the main window.

Properties and Simulation Environments (V7.3.2 Enhancements)
See Also

What's New in Aspen Plus V7.3.2

Aspen Plus is now divided into separate Properties and Simulation environments. The environment buttons below the navigation pane let you switch between these environments. The Properties environment appears identically in Aspen Properties and in other applications which use Aspen Properties.

The Chemistry form, forms previously found under the Components and Properties folders, and some forms that apply to both environments appear in the Properties environment. The forms which apply to both environments also appear in the Simulation environment; input is shared between both versions of these forms.

When switching between the two environments, the state of each is preserved, including the active ribbon tab and any forms, plots, and other windows that may be open.

Some of the forms and folders in the Properties environment have been reorganized for easier access:

Properties | Molecular Structure is moved under Components since it is used to help define components.

Properties is renamed to Methods and the Property Methods form under it is renamed to Selected Methods.

The Advanced folder under Properties is removed; Routes, NC Props, and Tabpoly now appear directly under Methods (after Parameters).

Chemistry is moved from the Reactions form into a top-level folder in the Properties environment, after Methods.

Property Sets, Data, Estimation, Regression, and Analysis appear as top-level folders after Chemistry. (Property Sets also appears on the Simulation environment between Setup and Blocks.)

A new top-level folder, Customize, appears after all of the above. It contains User Parameters and User Properties (formerly under Properties | Advanced), Add Input (formerly a top-level form in Aspen Properties and under Flowsheeting Options in Aspen Plus), and CAPE-OPEN Packages (formerly under Properties). Add-Input is still available under the Flowsheeting Options form in the Simulation environment.

The Comp-Groups, Comp-Lists, and Moisture Comps forms, which are only used is specifying sets of components for features in the Simulation environment, have been moved from the Components folder into the Setup folder in the Simulation environment.

The Attr-Scaling form (from Aspen Polymers), which only affects flowsheet convergence, has been moved from the Components folder to the Convergence form in the Simulation environment.

Since all the run modes besides Flowsheet are properties-specific, the run mode is no longer specified in the Setup form and the Options dialog box. To run in Flowsheet mode, run from the Simulation environment. For other run types, click Regression, Estimation, or Analysis mode in the Home tab of the ribbon in the Properties environment, then run in that environment.

For a Property Estimation run use Estimation mode.

For a Data Regression run use Regression mode.

For a Property Analysis, Assay Data Analysis, or Properties Plus run, use Analysis mode.

Note: Some ADA-only runs from previous versions may load as incomplete now, requiring a property method to be specified. The special handling of properties in ADA runs is no longer available.

Status Messages and Prompts (V7.3.2 Enhancements)
See Also

What's New in Aspen Plus V7.3.2

The main status message (such as Flowsheet Complete or Results Available) is still shown at the bottom of the main window, but object-level status messages are now shown as tooltips in the navigation pane, where they are more clearly attached to the objects to which they apply. Icons for EO synchronization status and Unreconciled status (which were easily missed in the old interface) have been replaced with text included in these tooltips as well. In addition, in the Equation Oriented solution method, synchronization failures are marked with the error icon. (In Sequential Modular they are ignored.)

The main status message Required Input Complete applies to each environment separately, so it has been updated to read, for instance, Required Properties Input Complete.

Prompts are now shown as tooltips for the fields where they apply. In fields where there are limits to the values that may be entered, these limits are also shown in the tooltip.

Color Coding for Fields (V7.3.2 Enhancements)
See Also

What's New in Aspen Plus V7.3.2

Values are now displayed in one of several color schemes to indicate their status:

 Italic blue values are default values in input fields where you have not entered a value.

 Bold blue values are values you have specified.

 A bright blue outline indicates the field you are currently editing.

 Black values are results or non-editable values.

 Gray values on a light gray background are disabled because of other specifications.

In grids, a yellow outline appears around the selected cell; the row and column labels of the selected cell show yellow backgrounds.


In grids, if you select a region consisting of multiple cells then all selected cells have a yellow background or outline and the row and column labels for the region have yellow backgrounds.

Additional colorings and symbols may be shown for other conditions. See the help on Entering Data on Forms and Sheets for details.

Grids (V7.3.2 Enhancements)
See Also

What's New in Aspen Plus V7.3.2

Grids with many columns (such as RadFrac | Profiles | TPFQ) and a selector to switch between different sets of columns now allow you to select a custom set and ordering of columns.

The RadFrac | Results | Summary sheet now has two separate grids for condenser and reboiler results, instead of making you switch back and forth with a selector.

Where it makes sense to do so, it is now possible to sort the values in a grid by any column and reorder the columns.

When you click the upper left corner of a grid (the intersection of the index row and column), this now just selects the entire grid, as in spreadsheet applications. You can then copy it using any copy command.

The Flowsheet form has been redesigned with collapsible sections for each block.

Forms (V7.3.2 Enhancements)
See Also

What's New in Aspen Plus V7.3.2

Now Aspen Plus displays most values with 6 significant figures. You can click a value to see the full precision available, and values copied from Aspen Plus use the full precision. The Custom Stream Summary has an option to control the significant figures displayed, and numbers in the traditional stream summary are still controlled by TFF files.

The Comments and Status dialog boxes (formerly accessed by buttons on the toolbar in the Data Browser) are now sheets added to the first input form and first results form, respectively, in each object where they are available. Comments is renamed to Information.

Input for solids in material streams has been reorganized. Now the first sheet is used only for the Mixed Phase, while Conventional Solids and Nonconventional Solids are specified on their own sheets. The PSD and component attribute data is specified on the new sheets for each substream where they apply.

In the input forms for material streams, Flash2, and Flash3, where one or two specifications (among temperature, pressure, vapor fraction, and duty) are available, now all specifications are shown as separate fields, and a selector above these specifications lets you choose which ones are used as input.

Units of Measure

There is now a global Units of Measure field in the ribbon. When you change the global unit set, all values are updated to the new units and converted appropriately. In previous versions, the global units specifications only applied to new forms you had not previously opened. This conversion does not occur in the following forms: Calculator, Design-Spec, Optimization, Constraint, Data-Fit, Sensitivity, Parameters, Data, Tabpoly, Generic property analysis, Estimation, and Pres-Relief.

Also in previous versions, there was an object-level units field in the toolbar in the Data Browser; the global units feature replaces this. Certain fields (in the objects listed above) cannot have units specified directly; for the objects containing them, the object-level units field is retained, but now appears on the Information sheet for the object.

These changes make it possible to modify previously defined units sets. The default units sets and units sets which are in use cannot be modified, but this change makes it easy to change to a different units set temporarily while you modify the definition of your units set.

Plots (V7.3.2 Enhancements)
See Also

What's New in Aspen Plus V7.3.2

Search the Knowledge Center for information on:

Creating and Editing Plots

The Plot Wizard has been incorporated into the ribbon. Now the pre-defined plot types from the Plot Wizard are available as selections from a menu on the Plot group on the Home tab of the ribbon, and the plot appears immediately after you select it, if possible (or after a prompt for component(s) to plot, etc. when necessary). Tools in the ribbon can be used to customize the axes, line types, etc.

Ad-hoc plots (generated by selecting columns from a grid to plot against one another) can also be created from the Plot group on the Home tab of the ribbon.

There is a new mechanism for selecting line widths and styles which provides more options. This is available in plots, the drawing objects for the process flowsheet, and in the Icon Editor for user model libraries.

User Model Libraries (V7.3.2 Enhancements)
See Also

What's New in Aspen Plus V7.3.2

The Model Library you select models from to add them to the flowsheet is renamed Model Palette to distinguish it from the files for customizing the models displayed within it. The files are still called model libraries.

You can now double-click an .apm file to add it to your configured libraries for Aspen Plus. When you open a compound file which contains one or more .apm files, those will be added to your configuration and any models used from them will be fully preserved.

The mechanism for editing user model libraries is now more intuitive. The Manage Libraries button on the ribbon contains all the controls for selecting and editing libraries. As with the main window, the model library editor now has a + tab you can use to create new tabs.

The Icon Editor now uses the ribbon interface. Because the Icon Editor makes changes with effects across the model library and flowsheet, you still cannot edit any other part of the model while the Icon Editor is open.

ConSep is now a native model, and does not require enabling any extra libraries to access. ConSep blocks from previous versions will be converted to the built-in model when loaded in Aspen Plus V7.3.2.

Other Usability Enhancements (V7.3.2)
See Also

What's New in Aspen Plus V7.3.2

The Start Page has been merged with the Aspen Plus Startup dialog box. The features of both of these are now available in one window. Starting a new simulation from a template has been merged into the New command, and the templates are now categorized within the New dialog box for easier access. Also, the New screen initially shows recently used templates.

Now you can use Aspen Search from the Get Started tab of the ribbon if your company has installed the Aspen Search server.

New K$ and M$ currency units (thousands and millions of US dollars) are now included.

You can now rename streams and blocks from the flowsheet by double-clicking their names. To open the forms for a block or stream, double-click any other part of the block or stream.

The new interface will be internationalized, with the whole user interface (not just prompts) able to be displayed in local languages.

When you add a Steam or Water type utility and water is not in the component list, instead of making the Properties environment suddenly incomplete, Aspen Plus offers to add water to the component list for you. If you decline, then the Properties environment will be incomplete.

During the run of a simulation, the stop cursor (indicating automatically stopping the run upon a click) is no longer used. You can stop the simulation with the Stop button in the ribbon or Quick Access Toolbar.

If the engine fails, Aspen Plus now attempts to restart it instead of forcing you to restart the whole program.

To help you resolve atom balance warnings produced by RYield, there is now a nice table of in and out flows for the atoms printed on the Control Panel if you set the diagnostic level to 5 or higher.

The ConSep block from Aspen Distillation Synthesis has been converted into a built-in block and updated with a new user interface. Now the Design mode is always used; the Material Balance mode, which acted like a Sep2 block, has been eliminated; use a Sep2 block for the calculations formerly possible in this mode. The property and convergence specifications have been merged into the Block Options form. The interactive mode now is activated manually at the end of the run to allow ConSep to be used without interrupting the run.

Other Enhancements (V7.3.2)
See Also

What's New in Aspen Plus V7.3.2

Load Button Removed from Economic Ribbon

In the new interface, the Load button for integrated costing and sizing has been removed. Data is loaded automatically when you request another function that requires it.

Model Summary for MultiFrac

Because the Model Summary grid does not support vector variables, in past versions it could not display anything useful for MultiFrac since MultiFrac consists of a collection of columns and interconnecting streams. But the first two columns are guaranteed to exist, so now it displays information for the first two columns.

HeatX pressure drop from duty profile

Normally when Aspen Plus calculates pressure from geometry, it uses the temperature profile along the tube to calculate tube pressure drop. It can use the duty profile instead and does so for single-component fluids and when there are temperature crosses (including hot side temperature increase or cold temperature decrease). You can now override this default by selecting Temperature or Duty in State variable for pdrop calculations. If HeatX fails to converge a pressure drop calculation from geometry, try specifying the calculation based on duty profile. Generally using duty is more reliable but takes more time.

PVT Experiments Examples

A new set of example files showing how to perform model tuning for various types of experiments have been added in the Examples\PVT Experiments folder.

EO Pressure Option

The EO Option Pressure Drop Switch now has an additional choice and the names have been made clearer. This option determines the block pressure used in EO when there are multiple inlet streams. YES is now called Block Pressure, NO is now called Minimum Pressure, and the new option First Pressure always uses the pressure of the first connected stream. You can reconnect streams if necessary to get the desired stream to be connected first.

Windows Authentication for Enterprise Database

Aspen Properties Enterprise Database can now use Windows authentication instead of SQL authentication. The operations that require you to log into the server now have an option to user either authentication mechanism. When using Windows authentication, the credentials of the currently logged in user are used. Administrators need to ensure the SQL server is configured to accept appropriate user accounts in order to allow the use of this feature.

NIST/TDE

The NIST/TDE tool for estimating pure component parameters and retrieving binary data has been improved in several ways:

The version number of TDE and its database are shown in the result windows.

Azeotropic data now appears as special VLE data.

Additional information (data point, year, type) is shown on the dialog box for saving binary data and in the consistency test results.

Two new consistency tests are added, the EOS and Endpoint consistency tests, and plots are added for the Van Ness and EOS tests.

When certain consistency tests are not applicable to certain data sets, the reason is shown in the details for that test.

Consistency tests now run in the background, updating the results as they are completed.

REFPROP

The REFPROP method has been updated to the last version (9.0) from NIST. This version adds 21 additional components for a total of 105 components:

The HFCs: HFO-1234yf, trans-1,3,3,3-tetrafluoropropene, and ethyl fluoride

The FAMES (fatty acid methyl esters, i.e., biodiesel constituents): methyl linoleate, methyl linolenate, methyl oleate, methyl palmitate, and methyl stearate

The siloxanes: hexamethyldisiloxane, octamethylcyclotetrasiloxane, octamethyltrisiloxane, decamethylcyclopentasiloxane, decamethyltetrasiloxane, dodecamethylcyclehexasiloxane, dodecamethylpentasiloxane, and tetradecamethylhexasiloxane

Additional components methylcyclohexane, n-propylcyclohexane, cyclopentane, dimethyl carbonate, and orthohydrogen

In addition, the number of binary mixtures with interaction parameters has increased from 303 to 639, including many mixtures of ethylene, propylene, methanol, ethanol, toluene, benzene, cyclohexane, sulfur dioxide, ammonia, dodecane, acetone, and butylene.

Aspen OLI Interface

The Aspen OLI Interface now supports the following properties: vapor phase viscosity, vapor and liquid thermal conductivity, surface tension, vapor and liquid binary diffusion coefficients, pH, and pOH. These will now be calculated by OLI when using the OLI property method; in previous versions they were computed by Aspen Physical Property System models.

New Pure Component Databank

The PURE26 databank was created, based on the January 2011 public DIPPR release. This database is similar to the PURE25 databank, except that many parameters for a large number of components have been updated. 14 components were added and three (marked with a * in the table below) formerly based on data from ASPENPCD are now based on data from DIPPR.

Alias

Name

CAS Number

CH3CL3GE

METHYLGERMANIUM-TRICHLORIDE

993-10-2

C5FEO5

IRON-PENTACARBONYL

13463-40-6

C6H13NO2-N7

N-.BETA.-HYDROXYETHYLMORPHOLINE

622-40-2

C7H15NO2-D1

4-2-METHOXYETHYL-MORPHOLINE

10220-23-2

C8H16-9 *

1,1,2-TRIMETHYLCYCLOPENTANE

4259-00-1

C8H16-10 *

1,1,3-TRIMETHYLCYCLOPENTANE

4516-69-2

C8H16-11 *

CIS,CIS,TRANS-1,2,4-TRIMETHYLCYC

4850-28-6

C8H16-N53

1CIS-2-TRANS-3-TRIMETHYLCYCLOC5

15890-40-1

C10H10-N1

1,4-DIETHENYLBENZENE

105-06-6

C10H10S-D3

3-ETHYLBENZO[B]THIOPHENE

31283-14-4

C10H10S-D4

3,5-DIMETHYLBENZO[B]THIOPHENE

1964-45-0

C11H14-N7

.ALPHA.-METHYLTETRALIN

1559-81-5

C12H16-N20

1-ETHYLTETRALIN

13556-58-6

C12H22O4-N3

1,10-DECANEDICARBOXYLIC-ACID

693-23-2

C12H24-N22

T2,2,4,6,6-PENTAMETHYL3-HEPTENE

27656-49-1

C14H26O4-N4

TETRADECANEDIOIC-ACID

821-38-5

CL4GE

GERMANIUM-TETRACHLORIDE

10038-98-9

Binary Parameter Updates

VLE and LLE binary parameters for water with many acetates and alcohols, for the NRTL and UNIQUAC models, have been updated:

Name 1

Name 2

Alias 1

Alias 2

VLE/LLE

1-PENTANOL

Water

C5H12O-1

H2O

VLE, LLE

1-HEXANOL

Water

C6H14O-1

H2O

VLE, LLE

1-HEPTANOL

Water

C7H16O

H2O

LLE

1-OCTANOL

Water

C8H18O-1

H2O

VLE, LLE

1-NONANOL

Water

C9H20O-D2

H2O

LLE

1-DECANOL

Water

C10H22O

H2O

LLE

1-UNDECANOL

Water

C11H24O

H2O

LLE

DODECANOL

Water

C12H26O-2

H2O

LLE

N-PROPYL-ACETATE

Water

C5H10O2-3

H2O

VLE, LLE

ISOPROPYL-ACETATE

Water

C5H10O2-D2

H2O

LLE

N-BUTYL-ACETATE

Water

C6H12O2-1

H2O

VLE, LLE

ISOBUTYL-ACETATE

Water

C6H12O2-2

H2O

LLE

N-PENTYL-ACETATE

Water

C7H14O2-D5

H2O

LLE

ISOPENTYL-ACETATE

Water

C7H14O2-D4

H2O

LLE

N-HEXYL-ACETATE

Water

C8H16O2-D4

H2O

LLE

N-HEPTYL-ACETATE

Water

C9H18O2-D3

H2O

LLE

N-OCTYL-ACETATE

Water

C10H20O2-D4

H2O

LLE

HYSYS Alpha Function for Standard Peng-Robinson

The Standard Peng-Robinson property model (used in the PENG-ROB property method) now provides as an option the HYSYS alpha function by setting the first option code to 5. This is the same as the standard Peng-Robinson alpha function for low values of the acentric factor, but modified to improve the behavior for acentric factor > 0.49.

Regression

It is now possible to regress scalar parameter TREFHL.

User Model Break Utility

A new utility function is available for user Fortran models to call. This function checks whether the break key has been pressed, allowing long-running user models to be interrupted at a desired point. See Aspen Plus User Models for details. Search the Knowledge Center for this document.

Compatibility Notes for Aspen Plus V7.3.2
This section describes the differences that you might encounter between Aspen Plus V7.3.2 and Aspen Plus V7.3. In most cases, previous Aspen Plus input files and backup files are completely compatible with Aspen Plus V7.3.2.

When you open a file from a previous version, Aspen Plus displays the Upward Compatibility dialog box. If you select Maintain Upward Compatibility for Features Listed Below then Aspen Plus ignores the new features in all the areas mentioned on the dialog box (which may include new pure component databanks, property methods, built-in parameters, ADA/PCS procedures, calculated molecular weights obtained from formulas, and checking of user-specified sequence, depending on the version of Aspen Plus used to create the file).

Costing results from Exchanger Design & Rating or Economic Evaluation may change from one version to the next due to updated cost data.

New features in other areas, as noted below, may still cause different results in the new version. These changes may have greater impact in flowsheets with loose tolerances due to convergence paths being different. AspenTech makes every effort to avoid making changes that result in incompatibilities with previous versions. The changes discussed in this section were necessary to correct problems (such as wrong results), to implement new features, or to improve ease-of-use.

The most important areas where you might encounter differences between Aspen Plus V7.3.2 and earlier versions are:

Fortran Compiler

Aspen Plus V7.3.2 was compiled with the Intel Fortran compiler XE 2011 (version 12) and Microsoft Visual Studio 2010. User Fortran models compiled with different compilers or compiler versions may not work, or may run but not be able to write to the Aspen Plus history file, report file, and control panel. See Chapter 1 of Aspen Plus User Models for more details. Search the Knowledge Center for this document.

Aspen Plus V7.3.2 checks more thoroughly for Fortran exceptions (floating point, divide by zero, and invalid operation errors) than previous versions. As a result, when running some simulations, more of these exceptions may be reported than were reported by previous versions. The exceptions reported were actually occurring in previous versions, but Aspen Plus did not detect them. In extreme cases when many of these exceptions occur, it may lead to simulations terminating due to reaching the limit on number of Fortran errors. In most circumstances, such Fortran exceptions are errors that may occur during intermediate calculations (such as initialization), and do not impact final results.

Units of Measure

Some values on input sheets for simulations loaded from previous versions are permanently converted into different units when the files are opened in version V7.3.2. This happens when the local units set (formerly on the toolbar of the Data Browser) was different than the global units set. The values will be converted to the global units set. This may cause minor differences in results, usually only on the scale of convergence tolerances, though some simulations which are highly sensitive to particular inputs may show larger differences. This conversion does not occur in the following forms: Calculator, Design-Spec, Optimization, Constraint, Data-Fit, Sensitivity, Parameters, Data, Tabpoly, Generic property analysis, Estimation, and Pres-Relief.

Units on results sheets for simulations loaded from previous versions will not respect the global units specified in the ribbon until you run the simulation in version V7.3.2.

Some errors were found in our units conversion database. If you were using the following units in previous versions, you may have had wrong results. The units conversions have been fixed. The units affected are: Gcal/kmol-K, cm/gm, kcal/cum-K, 1/atm, kcal/cum, lbmol/hr-ft, lbmol/sec-ft, lbmol/day-ft. In addition, some unit conversion factors and some calculations using those factors were being handled using single precision math (7-8 significant digits). All conversion factors and calculations are now carried out in double precision (approx. 15 significant digits). You may notice some very small differences as a result of this, particularly in calculations with tight tolerances, but they should be more accurate now.

In previous versions, it was sometimes possible to specify a value in gauge or vacuum pressure units which corresponds to negative absolute pressure (i.e, -1.5 atmg). This was interpreted as a pressure drop specification (as negative absolute pressure normally is interpreted), but the non-intuitive specification was not intended to be allowed. Now this is not allowed, and when a file containing such a specification is loaded into V7.3.2, the value is removed and an out of range error is reported.

In previous versions, when a Calculator block had a local units set in which pressure is specified in a gauge or vacuum unit, and it read a block pressure variable which is actually a pressure drop specification (negative value), the value was incorrectly treated as pressure and converted to gauge or vacuum units. Now Calculator recognizes this condition and converts the value to the correct pressure drop unit (i.e. atm, not atmg). The Variable Definition dialog box still shows the gauge or vacuum unit for this variable since it is not known until the value is read whether it will be a pressure drop, but Calculator results will show the correct unit.

Databank Updates

The PURE26 databank contains the latest data from DIPPR, including new data for many components. Three components, C8H16-9 (1,1,2-TRIMETHYLCYCLOPENTANE, CAS 4259-00-1); C8H16-10 (1,1,3-TRIMETHYLCYCLOPENTANE, CAS 4516-69-2); and C8H16-11 (CIS,CIS,TRANS-1,2,4-TRIMETHYLCYC, CAS 4850-28-6) were formerly obtained from ASPENPCD but are now based on DIPPR.

The SQL account used with Aspen Properties Enterprise Database is now called apeduser2.

The NRTL and UNIQUAC binary parameters for many acetates and alcohols with water (for VLE and LLE) were incorrect and have been updated based on regression of new data. See the What's New for a list. You may see different results in problems using methods based on these models with these components.

Aspen OLI Interface

The Aspen OLI Interface now supports the following properties: vapor phase viscosity, vapor and liquid thermal conductivity, surface tension, vapor and liquid binary diffusion coefficients, pH, and pOH. Results for these properties for models using the OLI property method may be different than in previous versions, but they should be more consistent with other properties now.

Property Regression

The V7.3 fix for the evaluation feature of the standard Data Regression (Regression | Input | Setup sheet in the Properties environment, option Evaluation) has been extended to binary VLE and to regressions that use the pre-Release 8 regression algorithm (Algorithm sheet). Now a flash is performed to ensure results will be consistent with results obtained by other methods. The results of this evaluation will be different than in past versions for these cases, but they should be more accurate. The flash type depends on the data type. For isobaric data, a PVfrac flash with Vfrac=0 is performed. Otherwise a TVfrac flash with Vfrac=0 is performed.

Pump/Compr/MCompr

Backup files from previous versions containing Pump, Compr, or MCompr models which use user performance curve subroutines will load without any data entered for the real and integer arrays on the User Subroutine | Specification sheet. You must re-enter the data. This change was necessary to make these arrays accessible by operations such as Calculator.

In addition, for MCompr, when a user subroutine is used, the total work required and brake horsepower profile have been corrected. Also, efficiency profile results have been added for MCompr in all cases (with or without the user subroutine).

Heater/HeatX/MHeatX

The pressure drop correlation parameter is no longer calculated by default in Heater and HeatX, or at all for MHeatX. An option on the Heater | Input | Flash Options sheet or HeatX | Setup | Pressure Drop sheet allows you to force it to be calculated. No option is provided for MHeatX because MHeatX does not use the pressure drop correlation parameter; however, it was formerly being calculated. The EO variable for the parameter will no longer be calculated unless this option is checked or the pressure drop correlation parameter is specified.

Not calculating this parameter allows models which pass through conditions of negative flow to still be able to converge.

Exchanger Design and Rating Results

In previous versions, when the outlet stream of a HeatX block using EDR is at a condition near a phase change, it was possible for Aspen Plus to calculate a different temperture for the stream than EDR did. This happens because EDR uses approximate properties based on interpolating or extrapolating property curves Aspen Plus generates. When the calculated outlet condition is actually in a two-phase region but EDR only has property curves for the single-phase region, the extrapolation is poor. When Aspen Plus reads the results from EDR, it calculates rigorous properties for the outlet stream based on the pressure and enthalpy of the stream (determined from calculated duty of the exchanger).

Now when Aspen Plus calculates these property curves, if the condition is near such a phase change, Aspen Plus extends the temperature range into the two-phase region. This provides EDR with better property estimates, and as a result the temperature of the stream in Aspen Plus should more closely match the EDR results. As a result of this change, some simulations may have slightly different results, both in EDR and Aspen Plus.

Control Panel Output

In simulations that generate very long control panel output, the control panel output is now truncated after 200,000 bytes to reduce delay. If you need to see such long output (for instance, when detailed diagnostics are needed), use the History File rather than the control panel to see this output. The History File is more easily searchable and better able to handle such long output.

Equation-Oriented Modeling

From version 2006.5 to version V7.3, a heat or work variable of a heat or work stream accessed by a Calculator or Design-Spec was assigned the EO variable name blkid.BLK.strid__INFO-VAR where blkid is the ID of the Calculator or Design-Spec, with two consecutive underscores before "INFO-VAR". In previous versions, it was assigned the name blkid.BLK.strid_INFO-VAR with one underscore. This change was not intentional and V7.3.2 has reverted to the version of this name with one underscore. This is only likely to cause issues if you reference the EO variable name in your model or you use EO variable files to export and import data.

In models which mix multiple inlet streams, the lowest pressure among these streams is taken as the mixed inlet. In previous versions, a zero-flow stream was ignored in SM but considered in EO for determining this inlet pressure. Now EO also ignores the zero-flow stream. Simulations which encounter this situation will have different EO results than in previous versions (but the base case will match the SM results).

General Reactions and EO

In previous versions, it was possible to define two reactions in the same General reaction object with the same name. This worked fine in SM but caused problems in EO since some of the variables created for the reaction would have identical names. Now the General reaction object will not allow you to define two reactions with the same name. If you open a simulation from a previous version which has this problem, an error will be reported about the duplicate names during EO synchronization.

Solids in the Mixed Substream

Since V7.3 Aspen Plus supports solids in the Mixed substream. If you have defined components of type Solid present in the Mixed substream in simulations imported from earlier versions, these would have been treated as either vapor or liquid state, depending on various factors, but will now be treated as solids. This will lead to different enthalpy and possibly other different results compared with the earlier version.

Data-Fit

Data-Fit now generates an error if you attempt to reconcile a non-manipulatable variable like a component fraction of a stream (use component flows instead) or a stream property. In previous versions, it was possible to make such specifications, but since the solver could not set these variables, they had little or no impact on the results. If you have saved files with such specifications, consider deleting these variables. If you believe these variables should impact your results, reformulate the problem and re-regress.

BWRS Volume Search

The initialization of the volume search for the BWRS model is improved, using critical volume data. Some problems may see different results using this model than in past versions.

Gross Heating Value

Previous versions computed the gross heating value property set, QVALGRS, incorrectly for some components containing chlorine and/or fluorine. This has been fixed. In addition, since gross heating value is defined as producing HCl and HF, the value may be misleading when hydrogen is not present in sufficient quantity. When QVALGRS is computed for certain components where Cl and/or F outnumber H, an information message is generated.

Retired Features: User Models

The Uncategorized tab in the model library editor has been removed. This was used in previous versions to show models whose tabs have been deleted. Now if you delete a tab, the models on it are removed as well. If you have user model libraries with uncategorized models, add them to a tab in your old version before you upgrade.

Compaq Visual Fortran 6.6 runtime libraries are no longer delivered. This compiler has not been available for many years and for several versions, the Fortran portions of Aspen Plus have been based on the Intel Fortran compiler. This change will mean that if you build user models with the Compaq compiler and distribute them to other computers which do not have the compiler installed, you will also need to distribute the Compaq runtime libraries. See the documentation for the Compaq compiler for more information.

Custom forms for custom unit operation models are not supported.

The standalone version of the User Model Configuration Editor for User2 and User3 models is no longer available. You can still use this tool by right-clicking User2 and User3 models in the Model Library Editor and selecting Edit User Configuration.

The user model library formerly delivered Aspen Polymers is no longer supported has not been supported since the release of version V7.2, and now its DLL is no longer delivered and these models will not work.

The in-process server HappIP in the automation interface is no longer supported. Please use the out-of-process server HappLS. The process used by this server is now called AspenPlus.exe. UIDisable in the automation interface (which was based on the old menu-based command hierarchy) has been removed.

Retired Features: Unit Operation Models

The Feedbl unit operation has been removed from the Model Library. This model was used with RT-Opt version 10.0 to create material feed streams. It is not necessary in Aspen Plus, but was provided to maintain compatibility.

The converters for HeatX blocks using TASC, Hetran, and Aerotran have been removed. If you still have models using these programs, convert them in the previous version before upgrading to V7.3.2.

In previous versions, we announced that the option to specify performance curves in actual head for Compr and MCompr had been removed in version 2004.1 and the variable associated with it was removed in version 2006, making backup files from previous versions with the option selected load with errors. In fact we removed the variable but left the checkbox present in MCompr, which from that point forward did nothing. Starting in this version the non-functional checkbox in MCompr has also been removed.

ConSep has been converted to a built-in model. The new ConSep supports only the Design mode of the original; the Material Balance mode has been removed. For material balance operations, use a Sep2 block instead. ConSep blocks from previous versions which were configured for material balance mode will be converted to Design mode and will need additional specifications.

Retired Features: General

The OLE Paste Link feature is no longer supported. This feature caused problems with copying and pasting large amounts of data into programs such as Excel which supported it, since in addition to the large amount of data, there was several times as much meta-data used to link the copied values to Aspen Plus. Other techniques, such as OLE automation and Aspen Simulation Workbook, remain available for linking Aspen Plus models to Excel and other applications. It is also no longer possible to select multiple fields at once, except in grids.

The Copy with Format feature is no longer supported. This feature formerly allowed you to copy some combination of the label, basis, value, and units for copied scalar values. Now whichever item you select is copied.

The object-level units of measure specifier has been removed, and units specified this way in previous versions will be applied to the individual fields. Exception: In Calculator, Design-Spec, Optimization, Constraint, Data-Fit, Sensitivity, Tabpoly, Generic property analysis, Estimation, and Pres-Relief, to handle those fields where units cannot be specified directly, this object-level units specification can be found on the Information sheet.

Export of the flowsheet drawing as a DXF file or PFS file has been removed. Import of DXF files into the Icon Editor has been removed.

Client-server configurations (where the Aspen Plus engine is run on a remote server) are no longer available. These were configurable but not supported in recent versions.

The conversion of Pro/II input files is now handled by an external conversion program instead of by opening the file in Aspen Plus. This provides more flexibility in performing the conversion.

Context menu options in Windows Explorer for converting between different file formats are no longer included, to reduce clutter in the context menu. You can still perform all these conversions by opening files in the user interface.

The command line command for Aspen Plus is now aspenplus.exe and some older command line options have been removed.

The use of the letter D when entering numbers in scientific notation is no longer supported. Use E instead, which works and has previously worked in the same way.

The calculation sequence in the Control Panel no longer uses lines between the icons to illustrate the hierarchy of blocks and loops. The indentation used to show this hierarchy still appears the same as in previous versions.

The Next form and Previous form buttons (formerly found on the toolbar inside the Data Browser) are no longer provided. You can still use the Navigate forward and Navigate back buttons and other methods to change which form is displayed in a given window.

The Add to Favorites button the File | Open dialog box is no longer provided. The nature of the Favorites folder being located within the Aspen Plus installation folder meant that the feature only ever worked for users with Administrator rights. Such users can still add folders to Favorites by making shortcuts in the Aspen Plus <version>\Favorites folder.

The Default template directory option (which determined the tab displayed first when you start a new run from a template) is no longer available. Now the default tab is the one which shows the blank simulation and recently used templates, which should allow you to more easily access your favorite templates without needing to even set an option.

Features to be Retired

This will be the last version to include the Aspen Properties Web Interface. Aspen Mobile Properties replaces this feature.

 What's New in Aspen Plus V7.3
See Also

Compatibility Notes

Aspen Plus V7.3 includes a number of important new features:

You can extract experimental physical property data for thousands of binary mixtures using the NIST ThermoData Engine (TDE).

Integrated Economic Analysis now allows user-defined custom sizing and estimating methods through a new costing templates feature.

You can now view a greenhouse gas summary that reports the carbon equivalents produced directly in the process or indirectly by consumption of process utilities.

Aspen Plus simulation cases can be sent directly to Aspen Energy Analyzer to evaluate and optimize process heating and cooling.

Conventional solid components can now be included in the mixed substream with certain limitations, making it much easier to simulate processes with solids.

See the sections below for a complete list of new and improved features.

Workflow and Usability

The new Start Page provides easy access to AspenTech news. You can set the My News tab to display any RSS feed or disable the Start Page on the Start Page tab of the Tools | Options dialog box.

New Analysis toolbar provides easy access to features such as Aspen Distillation Synthesis, Aspen Energy Analyzer, Aspen Flare System Analyzer, and Aspen Exchanger Design & Rating.

The Pro/II converter has been enhanced and now supports a number of features which were previously not supported or not converted correctly. See the Compatibility Notes for a list.

There are now commands on the View menu to enable or disable the display of Connection Streams and Measurements. These perform the same functions as the checkboxes on the Flowsheet tab of the Tools | Options dialog box but are more easily accessible. These also have shortcut keys Ctrl+Alt+C and Ctrl+Alt+M.

Some shortcut keys and mouse controls used for navigating around the flowsheet have been changed or added for ease of use and consistency with HYSYS. In particular, the mouse wheel and Page Up and Page Down keys can be used to zoom in/out by small increments, while Shift+Page Up, Shift+Page Down, and Home can be used for Zoom In, Zoom Out, and Zoom Full. See the compatibility notes for the full list of these changes.

The Find Object command has been enhanced to allow you to search in a specific Hierarchy level and to allow you to search for blocks or streams using wildcards.

The Model Summary form now also appears in each supported block, allowing you to view and modify all scalar block variables for the block in one place.

When you open a file and then save it, now the default save type is the type of the original file. The default save type in Tools | Options is used only for new models, and this is initially set to the more convenient compound file (*.apwz) type. The default Aspen Plus file type stored inside the compound file is now Aspen Plus Document (*.apw).

New option on the Setup | Simulation Options | Calculations sheet to automatically generate an XML results file when running an input file or batch run.

Now when you rename or delete streams after EO synchronization, a new dialog box lets you update/delete corresponding EO variable names entered as specifications on various forms. In previous versions, these names could not be updated automatically, leading to various problems.

You can now specify descriptions for EO variables on the EO Input | Configure sheet which will be saved with your model. This can be used to document complex or custom EO models.

The installer now has an option to install without the SQL database for Aspen Properties Enterprise Database. With this option, the database must be installed on another machine and the Database Manager must be used to configure the database connection. There is also an option in the Server installation option to just install the database without any of the products that use it.

Integrated Economic Analysis

Material costs for raw materials and products are now passed from Aspen Plus to Aspen Process Economic Analyzer. Their totals, along with annualized capital cost, total utilities cost, total product sales, desired rate of return, and pay out period are now reported on the Summary tab on the Equipment Summary grid.

Aspen Plus can now use costing templates with Aspen Process Economic Analyzer to specify the location of the project, units set, lifetime of the project, and other parameters.

The costing template is specified on the Setup | Costing Options | Costing Options sheet. Key parameters can also be changed here. You can create custom templates in Aspen Process Economic Analyzer to specify custom sizing and mapping options. This removes the need to specify these options each time you perform integrated sizing and costing.

The Costing toolbar now also has buttons linked to the Costing Options and Stream Price forms.

Equipment weight and total installed weight are now reported for each piece of equipment in the Equipment Summary grid.

Engineering Enhancements

Aspen Plus now reports CO2 equivalents for greenhouse gases produced by each unit operation block, those emitted by utilities used, and totals for the overall process, as well as the carbon fee/tax for emissions. See Greenhouse Gas Emissions in the help for details about this feature.

It is now possible to use Utilities in HeatX blocks with the Rigorous methods, only in Design and Rating calculation types.

Three new mass transfer and interfacial area correlations for packings have been added for use in Aspen Rate-Based Distillation. HanleyPall (2010) models Pall rings, HanleyIMTP (2010) models IMTP, CMR, and β-ETA rings, and HanleyStruc (2010) models sheet metal structured packings.

RadFrac, PetroFrac, and MultiFrac will now allow you to specify a column diameter in rating calculations as small as 0.01 m. Previously the minimum was 0.1 m. This will allow you to more easily model laboratory-scale columns.

Pressure relief calculations have been improved to make them more accurate (see Compatibility Notes for details).

It is now possible to use an RPlug model without reactions (for instance, to model heat flux in detail).

In RPlug reactors with solids, you can now specify a solid holdup profile when you specify the liquid holdup profile. In this case the reaction rates in vapor, liquid, and solid phases are all affected by the portion of the reactor occupied by those phases.

The Dryer model can now remove water from NC substreams in which it is specified via the Moisture specification of the PROXANAL attribute, when water is specified as a moisture component. It does not operate on any other moisture components in NC substreams.

The Pump model now has options for its vapor check in the same way the Compr model does for its liquid check. See the Pump | Setup | Calculation Options sheet configure these options.

Common RXN_RCSTRR now contains catalyst data. This allows you to access such data in user subroutines written for RCSTR blocks. See Aspen Plus User Models for details. Search the Knowledge Center for this document.

Solids

It is now possible to use conventional inert solid components (specified as Solid on the Components form) in the MIXED substream. This allows you to perform simple solid modeling without the complication of using multiple substreams.

Solid components with a particle size distribution still need to be used with one of the substreams that contain a PSD attribute.

EO formulations of Mixer, Flash2, Flash3, Decanter, Pump, FSplit, SSplit, Mult, Dupl, Selector and Streams support solids in the MIXED substream. Other models in EO do not support solids in the MIXED substream, and will issue a warning if they are found. (Depending on the properties available for these components, they may lead to errors in the EO models which do not support them, or may run but lead to inaccurate results.)

The SFRAC property represents the solid fraction within the MIXED substream. Previously, this solid fraction consisted only of salts, but now it may also include conventional inert solids.

The new CISOLID-COMPS paragraph in input language specifies which components are declared as solids. It is required only if you use components of type Solid in the MIXED substream.

Properly-specified backup files from previous versions (including those embedded into .apw or .apwz files) will continue to work as they always did, with all their solids in CISOLID substreams.

You can choose to put some of these solids into the MIXED substream and some in the CISOLID substream. When you do so:

For most blocks, solids will remain in the substream in which they were specified.

RStoic can be used to move solid components between the MIXED and CISOLID substreams.

Solid products of REquil and RGibbs will be placed in the CISOLID substream if it is present in the outlet stream, or the MIXED substream otherwise.

NIST TDE with Binary Data

The NIST TDE feature has been significantly enhanced to include experimental data for binary mixtures. The available data include VLE, LLE, heat of mixing, density, viscosity, thermal conductivity, surface tension, and others. These data can be used to perform data regression using the existing Data Regression capability. These data constitute virtually all available experimental binary data known to date. The retrieved data can be viewed, plotted and saved to forms for further use in data regression.

For binary VLE data, TDE includes the capability to perform thermodynamic consistency tests. The tests include a quantitative measure of the data quality (quality factor), which will be useful in helping you select appropriate data sets to use.

This feature also includes a new workflow that allows you to perform data regression or evaluation directly, thus enhancing ease of use.

The NIST TDE engine has been updated to version 5.0. The NIST-TRC databank has been updated based on the June 2010 NIST SOURCE data archive and version 5.0 of TDE; over 4000 more compounds have been added.

Data Regression Enhancements

The evaluation feature of the standard Data Regression (Properties | Regression | Input | Setup sheet, option Evaluation) has been improved for VLE with 3 or more components and for LLE. Now a flash is performed to ensure results will be consistent with results obtained by other methods.

Experimental binary data available in TDE can be used to populate the Data form directly (Properties | Data | Mixture | Data sheet). When you define a Data set containing two components, you can retrieve the experimental data from TDE instead of entering them manually.

Databank Updates

New APV73 database was created, containing new PURE25 databank based on the January 2010 release of the DIPPR database. This databank is similar to the PURE24 databank, but many parameters for a large number of components have been updated, and 42 components have been added.

Alias

Name

CAS Number

C22H44-D1

1-DOCOSENE

1599-67-3

C24H48-D1

1-TETRACOSENE

10192-32-2

C26H52-N10

1-HEXACOSENE

18835-33-1

C28H56-N2

1-OCTACOSENE

18835-34-2

C12H16-D4

5-O-TOLYL-2-PENTENE

6047-69-4

C7H12-N3

BICYCLO-2-2-1-HEPTANE

279-23-2

C8H14-N3

BICYCLO-2-2-2-OCTANE

280-33-1

C18H24-N6

TRIAMANTANE

13349-10-5

C22H28-D1

TETRAMANTANE

27745-90-0

C10H10O-D1

3,5-DIMETHYLBENZOFURAN

10410-35-2

C14H14O4

DIALLYL-PHTHALATE

131-17-9

C19H38O2-N1

METHYL-STEARATE

112-61-8

C15H30O2-N1

METHYL-MYRISTATE

124-10-7

C17H34O2-N1

METHYL-PALMITATE

112-39-0

C10H12O2-N5

ETHYL-PHENYLETHANOATE

101-97-3

C8H18N2O2-D1

4-2-2-AMINOETHOXYETHYLMORPHOLINE

20207-13-0

C8H17NO3

BETA-MORPHOLINOETHOXYETHANOL

3603-45-0

C10H9N-N5

8-METHYLQUINOLINE

611-32-5

C4H9NO-N1

2-BUTANONE-OXIME

96-29-7

C6H14S-N1

ISOPROPYL-SULFIDE

625-80-9

C6H8S

2,3-DIMETHYLTHIOPHENE

632-16-6

C6H15CLO3SI

3-CHLOROPROPYL-TRIMETHOXY-SILANE

2530-87-2

C9H20O5SI

GLYCIDOXYPROPYLTRIMETHOXYSILANE

2530-83-8

CLF3

CHLORINE-TRIFLUORIDE

7790-91-2

C6H15O3P

TRIETHYL-ESTER-PHOSPHOROUS-ACID

122-52-1

F3P

PHOSPHORUS-TRIFLUORIDE

7783-55-3

C8H4CL2O2-D1

TEREPHTHALOYL-CHLORIDE

100-20-9

C3H8N2O

1,3-DIMETHYL-UREA

96-31-1

C2H6N2O-N1

MONOMETHYLUREA

598-50-5

C4H12N2O-D1

BIS-2-AMINOETHYL-ETHER

2752-17-2

C6H14N2O-D2

4-2-AMINOETHYL-MORPHOLINE

2038-03-1

C6H13NO-N1

N-ETHYLMORPHOLINE

100-74-3

C11H16O2-D1

PG-ALPHA-METHOXYBENZYL-ETHER

871518-84-2

C11H16O2-D2

2-ALPHA-METHOXYBENZYL-1-PROPANOL

857237-25-3

C4H8O2S-D1

METHYL-3-MERCAPTOPROPIONATE

2935-90-2

C4H3F7O-N1

HEPTAFLUOROPROPYL-METHYL-ETHER

375-03-1

C9H8O4-N2

MONOMETHYL-TEREPHTHALATE

1679-64-7

C7H12O3-D1

ETHYL-LEVULINATE

539-88-8

C10H10MG

BIS(CYCLOPENTADIENYL)MAGNESIUM

1284-72-6

C40H62O19

SUCROSE-ACETATE-ISOBUTYRATE

126-13-6

C5H10O-N1

2-METHYLOXOLANE

96-47-9

SIH3CL

MONO-CHLOROSILANE

13465-78-6

APV73 also contains the new BIODIESEL databank containing 461 components including triglycerides, diglycerides, and monoglycerides which appear in biodiesel production processes.

Binary parameters have been added for the water-vinyl chloride system for NRTL and UNIQUAC models, and for THF-methyl acetate for NRTL, UNIQUAC, WILSON, and their -HOC and -RK variations.

The NRTL binary parameters for water/2-ethylhexanol in the LLE-ASPEN databank were incorrect and have been updated based on regression of new data.

Binary parameters for water with ketones have been updated:

Name 1

Name 2

Alias 1

Alias 2

Models

METHYL-ACETATE

Water

C3H6O2-3

H2O

NRTL, UNIQUAC, Wilson

DIETHYL-KETONE

Water

C5H10O-4

H2O

NRTL, UNIQUAC

METHYL-N-PROPYL-KETONE

Water

C5H10O-2

H2O

NRTL, UNIQUAC

DIISOPROPYL-KETONE

Water

C7H14O

H2O

NRTL, UNIQUAC

2-HEXANONE

Water

C6H12O-D3

H2O

NRTL, UNIQUAC

2-HEPTANONE

Water

C7H14O-D2

H2O

NRTL, UNIQUAC

2-OCTANONE

Water

C8H16O-E2

H2O

NRTL, UNIQUAC

2-NONANONE

Water

C9H18O-E1

H2O

NRTL, UNIQUAC

3-HEPTANONE

Water

C7H14O-E1

H2O

NRTL, UNIQUAC

3-OCTANONE

Water

C8H16O-D2

H2O

NRTL, UNIQUAC

3-NONANONE

Water

C9H18O-D3

H2O

NRTL, UNIQUAC

4-HEPTANONE

Water

C7H14O-E2

H2O

NRTL, UNIQUAC

5-NONANONE

Water

C9H18O-E2

H2O

NRTL, UNIQUAC

DIISOBUTYL-KETONE

Water

C9H18O-D1

H2O

NRTL, UNIQUAC

5-METHYL-2-HEXANONE

Water

C7H14O-D10

H2O

NRTL, UNIQUAC

Physical Property Methods

New property methods have been added based on Aspen HYSYS property packages: HYSGLYCO, HYSPR, HYSSRK. The HYSYS databank containing parameters used in these methods has also been added. This is a very significant enhancement to Aspen Plus in that it brings the three most commonly used methods in Aspen HYSYS to the Aspen Plus product family.  These methods provide additional industry-proven methods for oil & gas and gas-processing applications.

New user routine PCHSLU for hydrocarbon solubility of pseudocomponents. Hydrocarbon solubility is needed when the dirty water approach to water handling is used. To use this subroutine, write a subroutine that calculates the parameters of the Hydrocarbon Solubility model from average boiling point, API gravity, specific gravity, and/or average molecular weight of the petroleum fraction, using the argument list from Chapter 25 of Aspen Plus User Models, then specify User Routine PCHSLU for Hydrocarbon Solubility in a petroleum property method on the Components | Petro Characterization | Property Methods form and use this method on the Components | Petro Characterization | Generation form.

The Liquid Constant Liquid Molar Volume model has been enhanced to use the General Pure Component Liquid Molar Volume model when parameters are available for it and no molar volume VLCONS has been entered. This model is used in the Solids Handling Property Method used for systems where the solid properties are most important. It should now provide better liquid properties when VLCONS is not entered.

New option codes have been added to ENRTL-RK, ENRTL-SR, and NRTL-SAC for calculating the dielectric constant and density of water. For STMNBS2, there is a new choice in the fugacity and enthalpy option code.

The REFPROP property method has been updated to use the latest version (8.1c) from NIST.

New liquid thermal conductivity model based on the API procedure 12A3.2-1 has been added. This is the current recommended API procedure and should provide more accurate results for petroleum fractions.

Chemistry

In Chemistry blocks you can now specify the equilibrium constants for reactions based on a version of the van 't Hoff equation instead of the expression which has been available in past versions. Additionally, there is now a term for modeling the pressure dependence of the equilibrium constant which can be used with either expression.

In Chemistry blocks you can now specify the reactive or inert components instead of specifying reactions, and let the Aspen Physical Property System use Gibbs energy minimization to compute the expected products from among these components. With this option you do not specify any reactions or equilibrium constants.

The activity coefficient basis for ionic components is now specified within each Chemistry block rather than at the global level. This basis can also be specified on the first screen of the Electrolyte Wizard.

Property Set Properties

New Property Set properties ISENEX, ISENEXMX (isentropic exponent or isentropic coefficient) have been added.

