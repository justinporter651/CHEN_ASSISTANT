Troubleshooting Aspen Plus
If you are having problems with Aspen Plus, click the link below which best describes your problems:

Convergence

Convergence or other problems in equation-oriented (EO) runs

Convergence problems with sequential-modular (SM) flowsheet operations: Optimization, Design Specs, tear streams, Data-fit, Calculator, Transfer

Convergence or other problems in specific blocks: ACMUser3, BatchSep, CAPE-OPEN unit operations, Granulator, HeatX, Pipe, Pres-Relief, Qtvec, RadFrac, RBatch, RCSTR, RGibbs, RPlug, RYield

Flowsheet convergence problems with recycle loops

Specific errors or warnings related to flowsheet convergence

Inconsistent or erratic vapor fraction calculation in systems with few components

Aspen Plus won't re-run a convergence block after changing its tolerance
Properties

Physical property errors or warnings, including chemistry

Problems calculating physical properties

Aspen Properties Enterprise Database problems

Incomplete property forms after deleting components

Invalid component IDs in problems with pseudocomponents

Issues related to polymers
Solids

Problems with solids and PSD meshes

Using streams with substreams at different temperatures

Activated Analysis

Problems with the flowsheet overlays from Activated Economic or Exchanger Analysis
Other problems using Activated Economics
Other problems using Activated Exchanger Analysis
Problems using Activated Energy Analysis
Other areas

Too many messages! I cannot find the messages I want to see.

Problems loading or running Excel Calculator blocks

Problems compiling, linking, and running Fortran

Problems using integrated cost analysis

Problems using "standard" volume units

Strange errors appear when running Aspen Plus via Citrix

Results not appearing for specific streams

Memory errors

Report generation takes too long

Importing a file makes reactors incomplete

Control Panel messages disappear

Display issues with certain Windows themes

Input is incomplete, but I can't find any incomplete forms

Features requiring Command Prompt access

Cannot open Aspen Plus File

Aspen Plus crashes at startup

Problems with the online help system

 Troubleshooting Flowsheet Convergence
See Also

Troubleshooting Aspen Plus

Problem

The recycle loops in the flowsheet do not converge.

General Strategies

Look for error and warning messages, especially concerning block convergence, zero flow rates, and temperature crossovers.

Provide reasonable initial estimates. Look for unusual results, extreme temperatures, unexpected separations in columns, and step changes in profile results.

Review physical property parameters and methods.

Evaluate tear stream choice. Choose streams that remain relatively constant, or streams with fewer variables (such as heat streams or all-vapor streams in electrolyte simulations).

Simplify or restate the problem. If appropriate, use Mixer to reduce the number of tear streams. Consider using component groups in areas of a simulation. Consider whether the problem can be reformulated (for example, a TP specification in RGibbs is more stable than PQ).

Additional control over the simulation increases stability. Add design specs to enforce design goals and establish performance criteria for plant sections. Internal RadFrac specifications will improve stability. Prevent rigorous blocks (rigorous HeatX, tough separations) from entering infeasible operating conditions.

Confirm the calculation sequence.

Cause 1

A component builds up in the loop because it has no way to exit. This will often show the symptom of flow rate increasing by the same amount after each direct substitution.

Solution 1

Ensure each component (including reaction products) has a way out of the system.

Cause 2

Changing flow rates cause problems with specifications.

Solution 2

Specify blocks in ways that are independent of flow rate. For instance, specify split fraction instead of flow rate. Specify D:F instead of D in RadFrac blocks.

Add a few well-placed Calculator blocks, for instance to calculate makeup and purge rates. Calculator blocks can increase stability by acting as feedforward controllers.

Cause 3

Loose tolerances on blocks inside the loop prevent the loop from converging. This often causes Err/Tol to get down to 10 or so and then fail to make further progress.

Solution 3

Blocks inside the loop must be converged to tighter (smaller) tolerances than the recycle loop, which defaults to 10-4. Specify a tighter global flash Error Tolerance on the Setup | Calculation Options | Flash Convergence sheet. For RadFrac blocks within the loop, specify a tighter Error Tolerance on the RadFrac | Convergence | Basic sheet. Relax the convergence block tolerance only as a last resort.

If loops appear inside other loops, the tolerances on inner loops and the blocks within them may needed to be tightened.

Cause 4

Models which are highly pressure-sensitive may run into unexpected conditions from which they cannot converge.

Solution 4

If the process is so sensitive to pressure, the pressure is probably controlled. Try setting the pressure explicitly in affected blocks instead of allowing pressure drop 0 (a default specification in some blocks).

Cause 5

All blocks in a recycle loop have pressure drop specifications (possibly some of them 0) with no pressure specifications. This means the tear stream cannot converge because its pressure is continuously decreasing.

Solution 5

Ensure the pressure, not pressure drop, is set in at least one block in a recycle loop where pressure drops are set.

Flowsheet Errors or Warnings
See Also

Troubleshooting Aspen Plus

Help is available for the following errors and warnings you may get associated with the flowsheet:

Zero feed

Block: (id) Model: (name) 

* WARNING 

ZERO FEED TO THE BLOCK. BLOCK BYPASSED 

Or:

Block: (id) Model: MIXER 

* WARNING 

ZERO FEED TO BLOCK. 

Maximal Cyclic Subsystem errors

ERROR DURING FLOWSHEET ANALYSIS

CONVERGENCE BLOCK (name) CONTAINS THE FOLLOWING

DESIGN SPECS FROM ANOTHER MAXIMAL CYCLIC SUBSYSTEM.

(name)

THEREFORE IT CANNOT BE USED. IT WILL BE IGNORED.

Information tears will not be converged

WARNING DURING FLOWSHEET ANALYSIS

1 INFORMATION TEAR(S) IN SUBSYSTEM #1 WILL NOT BE CONVERGED

BY CONVERGENCE BLOCK WHICH MIGHT CAUSE CONVERGENCE PROBLEM.

PLEASE TRY THE NEW TEAR-VAR OPTION IN CONV-OPTIONS.

STREAM (name) FROM (source) TO (destination) 

Streams crossing the loop are not in mass balance

WARNING WHILE IN SEQUENCE MONITOR

STREAMS CROSSING THE LOOP CONVERGED BY <block> ARE NOT IN MASS BALANCE:

MASS INLET FLOW = <value>, MASS OUTLET FLOW = <value>

RELATIVE DIFFERENCE = <value>

IMBALANCE MAY BE DUE TO A LARGE RECYCLE FLOW, AND A

RELATIVELY LOOSE TEAR STREAM TOLERANCE.

Block is not in mass balance, stream flow may have been changed

ERROR

BLOCK (name) IS NOT IN MASS BALANCE:

MASS INLET FLOW = (value), MASS OUTLET FLOW = (value)

ABSOLUTE DIFFERENCE = (value)

A STREAM FLOW MAY HAVE BEEN CHANGED BY A FORTRAN, TRANSFER,

OR BALANCE BLOCK AFTER THE BLOCK HAD BEEN EXECUTED.

Convergence block never executed

      CONVERGENCE BLOCK <name> WAS NEVER EXECUTED

      Troubleshooting: Inconsistent or Erratic Vapor Fraction
Problem

In a system with two phases and one major component, or with three phases and two major components, different vapor fraction calculations on the same stream may give different vapor fractions.

Cause

When temperature and pressure are specified for such a system, the system is underspecified and there really are multiple solutions.

Solution

Instead of specifying temperature and pressure, change one specification to vapor fraction, duty, or another value which determines the system properly. This problem may occur anywhere temperature and pressure are specified and the system is composed entirely of one or two components, including streams and various unit operation models. Choose appropriate specifications depending on the situation.

Flowsheet Zero Feed
See Also

Troubleshooting Aspen Plus

Problem

Warnings such as the following appear:

Block: (id) Model: (name) 

* WARNING 

ZERO FEED TO THE BLOCK. BLOCK BYPASSED 

Or:

Block: (id) Model: MIXER 

* WARNING 

ZERO FEED TO BLOCK. 

Cause 1

Streams in recycle loops have zero flow initially.

Solution 1

If these streams are updated during the loop and the warnings only appear at the first iteration, there may not be any problem. Some blocks cannot run without some flow in the feed, so they are bypassed as shown by the first variation of the warning, and run later when the feed is present.

If the warnings appear only at the start, but the recycle loop does not converge, or converges to an undesired solution, or if the warnings persist beyond the first iteration, you may need to supply initial estimates for the streams on the Stream forms. See the troubleshooting for flowsheet convergence problems for more details.

Cause 2

Errors in unit operation models or bad specifications cause blocks to produce empty (zero flow) outlet streams.

Solution 2

Examine the block(s) that produced the zero flow stream(s). In some cases you may have to trace the problem upstream through multiple blocks to find the source of the zero flow. The Results Summary | Streams | Material sheet is useful for this.

Check for errors or warnings from the unit operation model(s) that produced the zero flow. Also look for problems such as Flash blocks with only one phase and Decanter blocks with only one liquid phase.

Check for specification errors, such as FSplit blocks with all flow assigned to some streams and none left for the unspecified stream, and FSplit blocks with specifications based on flow rate rather than fractions, which can lead to zero flow streams when the inlet flow becomes too small.

Flowsheet Maximal Cyclic Subsystem Errors
See Also

Troubleshooting Aspen Plus

Problem

Errors such as the following occur:

ERROR DURING FLOWSHEET ANALYSIS

CONVERGENCE BLOCK (name) CONTAINS THE FOLLOWING

DESIGN SPECS FROM ANOTHER MAXIMAL CYCLIC SUBSYSTEM.

(name)

THEREFORE IT CANNOT BE USED. IT WILL BE IGNORED.

Cause

The sequencing algorithm considers the material (stream) and information (calculator, design spec, etc.) connections in the flowsheet, and partitions the flowsheet into an ordered set of subsystems which can be solved separately, called maximal cyclic subsystems (MCS). These subsystems may contain unit operation blocks as well as objects such as design specs, tear streams, etc. The flowsheet is solved by solving these subsystems one at a time. The sequence algorithm does not allow a convergence block to include tear streams and/or design specs from more than one MCS because that would require that they be solved together.

When you enter a partial or total sequence, or convergence blocks, the sequencing algorithm checks them to ensure that there are no convergence blocks containing objects from more than one MCS. If it finds any, it issues this error message.

Solution

Remove the named flowsheet object from the named convergence block.

Flowsheet Information Tears Warning
See Also

Troubleshooting Aspen Plus

Problem

The following warning occurs:

WARNING DURING FLOWSHEET ANALYSIS

1 INFORMATION TEAR(S) IN SUBSYSTEM #1 WILL NOT BE CONVERGED

BY CONVERGENCE BLOCK WHICH MIGHT CAUSE CONVERGENCE PROBLEM.

PLEASE TRY THE NEW TEAR-VAR OPTION IN CONV-OPTIONS.

STREAM (name) FROM (source) TO (destination) 

Cause

Information tears occur when Calculator blocks perform feedback operations. These blocks were originally designed as feedforward controllers. When they are used in feedback mode, to maintain compatibility with older files which had no mechanism to detect these information tears, they are not automatically converged, but the warning is issued.

Solution

On the Convergence | Options | Defaults | Sequencing sheet, select the checkbox Tear Calculator export variables. Also be sure to set the Information flow for each variable on the Calculator | Input | Define sheet to Import or Export. You can also set a Calculator variable to be a Tear variable at this point; this is equivalent to declaring it as an Export variable, plus it is automatically used as a tear variable similar to streams explicitly specified as tears on the Convergence | Tear form.

Flowsheet Warning: Streams Crossing the Loop are not in Mass Balance
Problem

This warning appears:

WARNING WHILE IN SEQUENCE MONITOR

STREAMS CROSSING THE LOOP CONVERGED BY <block> ARE NOT IN MASS BALANCE:

MASS INLET FLOW = <value>, MASS OUTLET FLOW = <value>

RELATIVE DIFFERENCE = <value>

IMBALANCE MAY BE DUE TO A LARGE RECYCLE FLOW, AND A

RELATIVELY LOOSE TEAR STREAM TOLERANCE.

The <block> is a convergence block and is often one defined by Aspen Plus with a name such as $OLVER01.

Cause 1

Aspen Plus checks the mass balance around the envelope of each recycle loop, just as it checks mass balance around individual blocks. Loops containing blocks which do not maintain mass balance, such as Dupl, loops containing blocks which have already failed their mass balance check, and loops whose tear streams did not converge are not checked.

As the message indicates, this can be caused when the recycle flow is much larger than the flows in and out of the loop. In this case, the tear stream may be converged to its relative tolerance, but the absolute error is magnified when applied to the much smaller flows in and out of the loop.

Solution 1

Locate the tear streams in the recycle loop affected by this message. On the Convergence | Tear | Specifications sheet, specify tolerances tighter than the default of 0.0001 for these streams. This will cause the loops to be closed more tightly to avoid this problem.

Cause 2

This may also be caused by user-specified manipulations to the convergence sequence and/or EO manipulations typically performed by advanced users, which purposefully violate mass balance in the loop.

Solution 2

You may ignore the warning if you are certain it is not a problem, or you may disable the check on the Setup | Calculation Options | Check Results sheet, where it is controlled by the same option and tolerance which checks mass balance error around blocks.

Error: Block is Not in Mass Balance
Problem

This error occurs:

ERROR

BLOCK (name) IS NOT IN MASS BALANCE:

MASS INLET FLOW = (value), MASS OUTLET FLOW = (value)

ABSOLUTE DIFFERENCE = (value)

A STREAM FLOW MAY HAVE BEEN CHANGED BY A FORTRAN, TRANSFER,

OR BALANCE BLOCK AFTER THE BLOCK HAD BEEN EXECUTED.

Cause

As suggested, some sort of flowsheet manipulation may have changed the flow after the block was executed. This can happen with a Design Spec, Calculator, Transfer, Sensitivity, Optimization, or Regression.

Solution

Usually, the automatic flowsheet sequencing algorithm will generate a sequence which ensures blocks are properly re-run after such manipulations. If you have specified a sequence, ensure that all blocks which can be affected by the manipulation are in the loop after that manipulation. If a property parameter is manipulated, it can affect any block with a relevant component and property method, potentially the entire flowsheet.

Error: Convergence Block Never Executed
Problem

The following error appears after running a simulation:

**  ERROR
      CONVERGENCE BLOCK <name> WAS NEVER EXECUTED

Where <name> is a convergence block name such as $OLVER01.

Cause

This is almost always caused by Initialization being set to Single Pass or Single Pass: Changed. Look for a message shortly before the above saying:

Simulation calculations completed using single pass option ...

In these single pass modes, intended for initializing the flowsheet for an equation-oriented (EO) calculation, each block is only executed once, so there is no need for convergence blocks and they are not executed.

Solution

If you did not intend to use a single pass mode, on the Equation Oriented tab of the ribbon, change the Initialization field to Solve.

Troubleshooting: Changing a Convergence Block Tolerance
Problem

When re-running a problem after making changes to the specifications of a convergence block (such as tightening the tolerance), but not making any other changes, Aspen Plus doesn't do any calculations and just declares the block converged immediately.

Cause

Use affected block logic is set in the Control Panel. This option causes Aspen Plus to apply logical inferences about whether the solution to a block has changed based on whether any of its specs or feed streams have (or could have) changed as a result of the changed input. In most cases, this is a good way of reducing the amount of calculations that need to be performed when input is changed after a flowsheet has been converged. But in this case, the solution to every block is still the same, but the desired result is re-running the blocks anyway to converge the overall flowsheet to a tighter tolerance.

Solution

Turn off the option Use affected block logic before running the problem after only changing convergence parameters.

Clearing incomplete property forms
When you delete a component, the property data for the component is not removed, to avoid data loss. You may reuse that data after respecifying the component, or delete it.

To clear all such parameters, in the Properties environment, on the Home tab of the ribbon, click Clear Parameters, then select the Purge incomplete property parameters and empty records option.

Troubleshooting Pseudocomponent IDs
Problem

Engine reports component IDs for pseudocomponents are not valid when attempting to run the problem. Errors such as the following appear:

  *** SEVERE ERROR IN THE "STREAM" PARAGRAPH WHICH BEGINS ON LINE 108
     STREAM NAME: 1     SKW: MOLE-FLOW     TKW: CID
     "PC0F" HAS NOT BEEN DEFINED AS A VALID
     COMPONENT OR ASSAY ID.  PROBABLE SPELLING ERROR.
     PARAGRAPH IGNORED.

Cause 1

Pseudocomponent IDs were generated for an assay based on one set of cut points and then the cut points were changed without updating the generated IDs.

Solution 1

Open the Components | Petro Characterization | Generation | <ID> | Naming Options sheet for the pseudocomponent generation ID which defines these components, and clear, then re-check Generate component IDs. See Pseudocomponent Naming Options.

Cause 2

ACM Models need special handling to ensure they receive the correct list of pseudocomponent IDs.

Solution 2

See solution for Problem 4 in Troubleshooting ACM Models.

Troubleshooting: Too Many Messages
Problem

There are so many messages produced by my simulation, I cannot find the ones I am interested in

Cause

Large flowsheets with complicated recycle loops and blocks such as distillation columns which produce a lot of output can lead to this problem.

Solution

There are multiple ways of handling this sort of information overload, and the best solution depends on your specific circumstances:

View the Status sheet on the first result form of the block of interest to see messages related to that block.

In the Home tab of the ribbon, click Report to see results of specific blocks you are interested in or History to search the entire output for specific messages.

Split the problem into multiple flowsheets and just run the one of interest. This may not help diagnose the problem if the flowsheet is highly integrated or the trouble is related to blocks (especially distillation columns) whose convergence behavior depends greatly on initial conditions.

Adjust the diagnostic message levels on the Setup | Specifications | Diagnostics sheet and/or the Block Options | Diagnostics sheets of individual blocks to reduce the output from blocks you are less interested in while preserving that from blocks you are interested in.

Caution: Reducing diagnostic message levels can hide problems that exist in the blocks whose messages are reduced. Be sure to restore blocks back to the default diagnostic level of 4 when you are done.

Problems Compiling, Linking, and Running Fortran
Problem 1

I cannot compile Fortran subroutines. (See also problem 4, below.)

Cause 1

Fortran compiler or linker is not installed or configured properly.

Solution 1

Ensure that both Intel Fortran 9.0 or later and some (free or paid) Microsoft Visual Studio package are installed. Only certain versions of Visual Studio are supported with each Intel Fortran version.

Ensure Aspen Plus is configured to use the compiler by running Start | All Programs | AspenTech | Aspen Plus V15 | Set Compiler for V15 and selecting the correct compiler/linker version. This command is also available from a Customize Aspen Plus window as ApSetComp. When you run it, it will list the supported compiler/linker combinations , with either ERROR or OK in the State column for each one, depending on whether it detected the registry entries and paths necessary for this compiler.

Cause 1a

When running Citrix, this can also be caused by running into a limit on the number of files accessible via a Citrix shared drive.

Solution 1a

See Strange Errors using Citrix.

Problem 2

I can compile but not link Fortran subroutines.

Cause 2

Linker is not installed or configured properly.

Solution 2

The Intel Fortran compiler does not include a linker; it depends on some version of Visual Studio for a linking code. Ensure Visual Studio is installed.

Microsoft has released a free development tool Visual C++ Express Edition which includes a linker which will work. It is recommended that you install the Service Pack for this product. The Microsoft Platform SDK is not required for Aspen Plus usage.

Starting with the 2012 Express version, there are separate editions for different purposes. For linking your Aspen Plus Fortran models, you need the Desktop version. (For example, for Visual Studio 2015, this is called Express for Desktop.) Information about Visual C++ Express Edition and service pack can be found at http://msdn.microsoft.com/vstudio/express/downloads/default.aspx

Ensure Aspen Plus is configured to use the linker by running Start | All Programs | AspenTech | Aspen Plus V15 | Set Compiler for V15 and selecting the correct linker version.

Cause 2a

When running Citrix, this can also be caused by running into a limit on the number of files accessible via a Citrix shared drive.

Solution 2a

See Strange Errors using Citrix.

Problem 3

ApSetComp does not detect my compiler or linker version.

Cause 3a

You have a compiler and/or linker version released after your version of Aspen Plus.

Solution 3a

If ApSetComp does not list your compiler and/or linker version, search https://support.aspentech.com/ for a new version of Compilers.cfg. This file is installed in the APrSystem V15.0\Engine\Xeq folder, and contains the information ApSetComp uses to locate and configure compilers and linkers. Newer versions of this file can provide support for compilers and linkers released after this version of Aspen Plus.

Cause 3b

Your compiler and/or linker is not installed correctly, or you have a version which is somehow different from the supported version.

Solution 3b

If ApSetComp reports the compiler/linker combination you have installed as an error, you can get more information about what it is doing with this command:

ApSetComp -outenv -sect=IVF14_VS12 -debug=2 >nul

This generates a quick report of registry errors using the compiler/linker option specified after -sect= (the name is found after Begin in the Compilers.cfg file and under Section when ApSetComp lists all the compiler/linker options).

Problem 4

I cannot compile Fortran subroutines on the server in client-server runs. One of the following error messages may appear:

****TERMINAL ERROR

COULD NOT SPAWN SUBPROCESS FOR COMPILE AND LINK

or

Error: A license for FCompW could not be obtained (-1,359,2).

Is your license file in the right place and readable?

The location of your license file should be specified via

the $INTEL_LICENSE_FILE environment variable.

License file(s) used were (in this order):

1. C:\PROGRA~1\Intel\Compiler\Fortran\9.1\IA32\bin\*.lic

Intel Fortran is installed on the server and the INTEL_LICENSE_FILE environment variable is set as a system variable. Fortran compiles work correctly when directly logged into the server.

Note: Client-server configurations are no longer supported. Some features are known not to work in client-server. If you encounter problems, we will not help you with them, but the following advice remains.

Cause 4

The INTEL_LICENSE_FILE variable is not being correctly set for the remote session on the server.

Solution 4

Copy the license file(s) (*.lic) from the folder specified by the INTEL_LICENSE_FILE variable on the server into the bin folder containing ifort.exe in the Intel Fortran installation. The Fortran compiler always checks this location.

Problem 5

WRITE statements in Fortran write to fort.## (where ## is a number) files instead of the history file, report file, etc.

OR

Runs with user Fortran code run at first pass, but crash after a second run, or you see the following message:

**************************************************************
* Some fort.* files in the working directory are still open. *
* This is likely due to incompatible I/O of Compaq/Intel     *
* Fortran runtime libraries and MAY cause A+ to hang or      *
* crash.  See topic "Problems Compiling, Linking, and        *
* Running Fortran" for how to resolve I/O incompatibility.   *
**************************************************************

Cause 5

Both of these problems have the same cause. When using a different Fortran compiler version than Aspen Plus was compiled with, WRITE statements attempting to write to files opened by Aspen Plus may fail to write to the files because the I/O libraries between the two compilers are not compatible. Fortran writes to fort.## files in the current working directory in these situations. The crash occurs when the compiler tries to reopen a fort.## file which is still open from a previous run.

Solution 5

Ideally, upgrade to the latest version of the Intel Fortran compiler.

If this is not possible, the writes can still be accomplished by calling functions in Aspen Plus to perform the writes. To do so:

Include the following (beginning in column 1):

#include "ppexec_user.cmn"

Define a character string as a buffer to write the message to (for this example, a two-line message):

      CHARACTER*256 BUFFER(2)

Use a Fortran internal write to write the message to the buffer:

  200 FORMAT ("LINE 1",/,"LINE 2")

     WRITE (BUFFER, 200)

Call DMS_WRTALN to write one line at a time to the History File.

      CALL DMS_WRTALN(USER_NHSTRY,BUFFER(1))

     CALL DMS_WRTALN(USER_NHSTRY,BUFFER(2))

Note: Use USER_NRPT rather than USER_NHSTRY to write to the Report File.

Problem 6

Models using DLLs compiled in previous releases fail to run. The following errors appear:

Error loading module: <filename>.dll

Error 127: The specified procedure could not be found.

 

*** SEVERE ERROR                                       (FPLDDL.6)

    COULD NOT LOAD DLOPT-SPECIFIED SHARED LOBRARIES OR DLLS:

    <filename>.dll

Cause 6

Code refactoring in V15 caused certain functions supplied by Aspen Plus to be moved from one built-in DLL to another. This causes references in the DLLs compiled with previous versions to fail to resolve. These are the functions affected in this way:

DMS_BLAPRU

DMS_BNDOPT

DMS_BNDOPT2

DMS_CHKBND

DMS_INTEDT

DMS_OPTLIC

DMS_QUIT

DMS_ROYFAC

DMS_INTNEW

DMS_CHKCOMPNAME

DMS_ISCAT

DMS_ISINI

DMS_ISSEG

DMS_LMBYE

Solution 6

Recompile the DLLs using the Customize Aspen Plus V15 window and the aspcomp and asplink commands as described in Aspen Plus User Models.

Troubleshooting: Problems with Solids or PSD Meshes
Problem 1

The following error occurs in any solid operation, often one where a distribution function is used to specify the outlet PSD, such as Granulator:

  **  ERROR WHILE EXECUTING UNIT OPERATIONS BLOCK: "<id>" (MODEL: "<name>")
                                                              (DISPRP.13)
      CALCULATED PSD DOES NOT FIT INTO THE DEFINED MESH.
      THE PSD FRACTIONS DO NOT SUM UP TO UNITY (0).

Cause 1

There are too few intervals in the particle size distribution (PSD) mesh. This can occur because there are particles of sizes outside the range of the PSD mesh, or because the mesh is too coarse to accurately represent the distribution.

Solution 1

First, check that there are not particles finer or coarser than the limits of the PSD for this block's outlet stream. If necessary, extend the mesh to include those sizes.

If that is not the issue, try adding more intervals within the same size range. When a normal distribution function is used, the PSD intervals near D50 should be smaller than the standard deviation of the distribution.

Problem 2

The following error occurs in any solid operation:

**  ERROR WHILE CHECKING INPUT SPECIFICATIONS                               
      BLOCK NAME: <id>    MODEL NAME: <solids model>             (PSDMESH.1)
      STREAMS CONTAIN MULTIPLE SOLID SUBSTREAMS WITH DIFFERENT PSD MESH.    
      THIS IS NOT SUPPORTED BY THE CALCULATION METHOD SELECTED. YOU HAVE TO 
      USE THE SAME PSD MESH FOR ALL SOLIDS SUBSTREAMS.                       

Cause 2

The models added from SolidSim (any of the solid enhancements in V8.0) only support a single PSD mesh. If multiple solid substreams are used, they must all use the same PSD mesh.

Solution 2

Use the same PSD mesh with all solid substreams that will interact in the same model. If necessary, you may create a new mesh with a combination of size intervals suitable for all parts of your process.

Troubleshooting: Substreams at Different Temperatures
Problem

The following message appears:

   Block: <id>       Model: <solid unit operation name>

      INFORMATION

      SUBSTREAMS ARE AT DIFFERENT TEMPERATURES.

      THERMODYNAMIC EQUILIBRIUM WILL BE ASSUMED FOR FURTHER CALCULATIONS.

      INLET STREAMS WILL BE PQ-FLASHED.

It may occur for CFFilter, CFuge, Classifier, Crusher, Cyclone, ESP, FabFl, Filter, FluidBed, Granulator, HyCyc, Pipe, Pipeline, Screen, or VScrub.

Cause

Most of the new solids features added in V8.0 or later do not support inlet streams where the substreams are at different temperatures.

Solution

No action is required, but be aware that when this message appears, the inlet temperature of the stream is recalculated before the stream enters the unit operation. The calculation is the equivalent of inserting a Heater block before the solid model with specified pressure drop 0 and duty 0.

Troubleshooting: Standard Volume Units
See Also

Aspen Plus Units Abbreviations

Using Standard Liquid Volume

Problem

The standard volume units I am looking for are not available, or I selected them but the results are wrong.

Cause

Usually, you are looking at units from a different standard. There are three different sets of units with the word "standard" in their names used in various industries which are available in Aspen Plus, with different reference conditions:

Standard vapor volume in standard cubic feet (ideal gas at 14.696 psia and 60°F)

Standard vapor volume in standard cubic meters (ideal gas at 1 atm and 0°C), also called normal cubic meters

Standard liquid volume in various volume units (approximately 60ºF and 1 atm, but the exact conversion is determined by the property VLSTD for each component, which provides an equivalent mass of the component)

Solution

To specify standard vapor volume, choose Mole in the basis field, then select units such as MMscfd or MMscmh in the units field.

To specify standard liquid volume, choose Stdvol in the basis field, then select the appropriate volume unit. These units do not have an "s" for "standard" in the volume unit abbreviation; units such as cuft/day (cubic feet per day), cum/hr (cubic meters per hour), and gal/min (gallons per minute) are available.

Strange Errors using Citrix
Problem

Various unexpected errors occur when you are using Aspen Plus through Citrix and accessing files on your local PC via a Citrix Mapped Drive (CMD). This mostly likely appears when trying to compile and link Fortran subroutines; Aspen Plus may complain it can't find some file in the working directory even though the file is there.

Cause

Citrix has a built-in limit on the number of files on a CMD which can be open at one time. By default, this limit is 20. Because Aspen Plus may have other files open on the CMD, and the Fortran compiler opens a number of files during each compile and link, this limit may be reached with considerably fewer than 20 Fortran files, perhaps even with only one.

Solution

Citrix provides a registry key to control this 20 file limit. On your local PC, change it to 50 or a larger number as needed to avoid the problem.

From the Start menu, click Run.

Enter regedit and click OK. The Registry Editor appears.

In the tree at the left, navigate to HKEY_LOCAL_MACHINE\SOFTWARE\Citrix\ICA Client\Engine\Configuration\Advanced\Modules\ClientDrive . Click this folder to see its contents at the right.

If MaxOpenContext does not appear, create it by right-clicking anywhere on the right page other than one of the names, and selecting New | String Value and entering the name MaxOpenContext for the new item.

Right-click MaxOpenContext and select Modify.

Enter 50 or a larger number, as needed, and click OK.

Close the Registry Editor.

You may have to close and reopen Citrix Program Neighborhood for this change to take effect.

Results not Appearing for Specific Streams
Problem

Results appear for some streams, but not others, or perhaps for no streams at all, though the simulation seems to run.

Cause

The stream is the outlet of a block which was not executed because it has no flow in its inlets.

Solution

This is accompanied by Zero Flow messages indicating the blocks which were bypassed. Fix the problems that caused the inlet streams to have zero flow first.

Troubleshooting: How to Speed Up Report Generation
Problem

After a simulation completes, the report generation takes a very long time which is not interruptible by the stop button.

Cause

The stop button only aborts between major steps (such as SM blocks and EO iterations; the report phase is a single one of these steps).

Solution

To avoid the problem you should fix the issues which cause long report generation times. For example:

Do not report bubble and dew points in Aspen Rate-Based Distillation (rate-based RadFrac columns).

Do not have many open result forms and/or plots that must be refreshed with new results.

Use the Interactively Load Results option (on the File | Options dialog box, Simulation tab); this is enabled by default, but if turned off it forces Aspen Plus to load all the results at the end of the simulation.

Use the Express Run option (on the Run Settings dialog box, Options tab) for maximum simulation speed.

 Troubleshooting: Importing a File Causes Reactors to Become Incomplete
See Also

About Stream Classes

Problem

After importing a file into a simulation, reactors which were formerly complete are now marked incomplete.

Cause

The default stream class was changed by the import to CONVEN, which lacks solid substreams, but the original model has specifications for reactions using components in solid substreams.

Solution

Change the default stream class back to its previous value. You may want to set the stream class for imported streams to CONVEN, or define a flowsheet section for those streams.

Troubleshooting: Control Panel Messages Disappear
Problem

After EO synchronization, or some other time, all the messages in the Control Panel unexpectedly disappear.

Solution

When you reinitialize a simulation, the Control Panel messages are cleared intentionally since the old messages no longer apply. When you click the Purge Messages button, the messages in the Control Panel are cleared.

In certain rare cases, the Control Panel may appear to blank out during a run. If this happens, closing and re-opening the Control Panel should restore the missing messages.

Note: The Control Panel is limited to 200,000 bytes of output from a run to avoid delays when running simulations that generate a lot of output. You can use the History File if you need to see detailed diagnostic messages which exceed this limit.

Troubleshooting: Display Issues with Certain Windows Themes
Problem

Text appears black on a black background or other unreadable combinations.

Cause

Certain Windows themes may specify text or background colors that only come through on certain elements. As a result, unpredictable combinations of colors may occur, some of which may not be readable.

Solution

On Windows 7, use only the Windows 7 Aero, Windows 7 Basic, or Classic themes; the high contrast themes are known to cause problems. On earlier Windows versions, use only the standard or classic theme.

Troubleshooting: Input Incomplete, but I Can't Find Any Incomplete Forms
Problem

Aspen Plus reports input is incomplete, but I cannot find any forms marked as incomplete.

Cause

Deactivated items display the icon indicating they are deactivated, rather than the icon indicating they are incomplete. However, deactivated items must still have complete input, even though they are skipped during the run.

Solution

Click Next to have Aspen Plus move to the next form requiring input. This works even if the form is deactivated.

Features Requiring Command Prompt Access
Certain features of Aspen Plus require access to the Windows Command Prompt. If this is disabled by the administrator, then these features will not be usable:

Customize Aspen Plus window and customizations depending on it

All APED .bat utilities installed under C:\ProgramData\AspenTech\APED V15.0 and some configuration of the LocalDB which depends on them.

The PRO/II converter

Calculator blocks with Fortran code if the code must be compiled. Interpreted code will work.

Plant Data

AI Training

Troubleshooting: Cannot Open Aspen Plus File
Problem 1

When opening an Aspen Plus file (typically one saved on another computer), or when trying to save the file, you get the message:

Invalid Filename

This file cannot be opened or saved because it uses characters not supported on the current

system locale. Please rename the file using the character set built into this locale, or

switch your locale to one consistent with the language used to name the file.

Followed by a sequence of unsupported characters and the current system locale.

Cause 1

As stated, the characters are not supported on the current system locale.

Solution 1

If you were trying to open the file, rename the file or change the system locale as suggested by the message.

If you were saving the file, choose a name using only characters within the current system locale.

Problem 2

Possibly after renaming a file as in solution 1, if the file is an .apwz file, when opening the file you get the message Failed to open document.

Cause 2

Other files inside the document also have names including local characters.

Solution 2

Change the system locale as suggested by the message in Problem 1.

Problem 3

Aspen Plus crashes when opening a backup file, or the file loads incorrectly.

Cause 3

Corrupted file

Solution 3

The Repair File tool can fix some kinds of corruption in backup files by removing the ADS and/or shell settings sections.

Aspen Plus Crashes
Problem 1

When starting Aspen Plus, it crashes. "An unexpected error has occurred" is displayed along with a location for an error log.

In the error log, you find a reference to mso20win32client.dll

Cause 1

The Microsoft Office library mso20win32client.dll is missing or out of date.

Solution 1

Install updates from Microsoft. This should install the latest version of the library. Aspen Plus should start normally after it is updated.

Problem 2

Aspen Plus crashes in other circumstances

Cause 2

Unknown

Solution 2

If the crash occurred when opening a backup file, the Repair File tool may be able to remove corrupted sections of the file.

Use Command Line Options to run Aspen Plus with extra debugging logs enabled. These logs can provide information to AspenTech when submitting support cases about the crashes to help us identify and fix the issues causing crashes.

Problems with Online Help
See Also

Troubleshooting Aspen Plus

In some instances you may experience problems with the online help. Most often these occur when you install and use multiple versions of the help, such as when you have installed multiple versions of Aspen Plus. In general, multiple versions of the help should still work and links should go to the correct version of the help file, but links across different help systems may go to the most recently installed version, and you may encounter problems in some rare cases.

Errors and issues you may encounter:

Pressing F1 opens the welcome page

Generally, pressing F1 should open the help to a topic relevant to the item which currently has input focus. All input forms, the flowsheet, model library, and most dialog boxes should have appropriate help. The welcome page appears when no other help is available or when a help topic is missing. If you believe there is missing help, please report it to AspenTech, including the specific item you requested help on, so that we can fix it.

Videos do not play

Most videos use Flash Player to display animated content. When you launch videos, Internet Explorer will display a message and the yellow Information Bar at the top of the screen advising about blocked content. Right-click the bar and select Allowed blocked content to see the video.

Fonts display strangely over remote connections

This issue is caused when Font smoothing is turned off in the properties of the remote desktop connection. The default settings of the remote desktop connection are to adjust settings automatically based on the apparent speed of the connection. You can change the settings by clicking Show Options on the initial window for establishing a remote desktop connection, then clicking the Experience tab.

Overview of Designing Models
These guidelines will help you to design effective process models.

A well thought out process model:

Avoids costly mistakes

Can be easily re-used

Reflects the business objectives of the application

Although there is no direct business value in a model, value is derived from the application that is developed based on one or more models configured in a flowsheet.

For example, a model that is not rigorous enough may not deliver what the application needs, but an overly rigorous or detailed model will cost more to develop and may miss performance targets. In a safety study, you may need detail in crucial areas, whereas in a control study, simple qualitative models may suffice.

Therefore, to produce models which are fit for their purpose, you need both insight into the processes being modeled and an appreciation of cause and effect. From a knowledge of the application goals, you can derive the requirements of the models you need to create and this ultimately guides the design of your models and their implementation.

Use these guidelines as a starting point and develop them to meet your needs:

Defining your requirements

Producing the external design for your model

Designing the model and its equations

Implementing the model

Testing the model

Documenting your work

Defining Your Requirements
Before starting work, write down your requirements. Defining your requirements provides a framework that ensures the work is targeted correctly and your customers or managers will not be disappointed.

For example, you may be producing:

A flowsheet from a selection of models to carry out a set of case studies

A library of models for an application

A model in a focused study

To write a new model, you need to understand very clearly how it will fit into your application. To help you to write a good set of requirements for the model as it is viewed by the application, use these sets of questions:

Application goals, customers and suppliers

Model rigor

Data and results

You may want to group the resulting requirements under simple headings such as Firm Requirements, Secondary Requirements, Risks and Unknowns, and Dependencies.

Above all, consider the risks and unknowns and manage them. This may mean managing expectations and making sure your suppliers are supportive.

Application Goals, Customers and Suppliers
Use these questions about application goals, customers, and suppliers to help you to produce a good set of requirements for a new model:

Are you the only user of the model or will others use your model? Who are your customers?

Do you know exactly what your end-customers want and expect?

Will your model:

Save money?

Improve safety?

Improve controllability?

Reduce downtime?

Reduce commissioning time?

Reduce off-spec product?

Reduce environmental emissions or penalties?

Try to quantify the benefit. Your customers should know and be willing to tell you. This will help justify the work and gain visibility for the work. It will act as the main guiding principle during your modeling work, especially in arriving at the right set of assumptions you will use.

Do you have an itemized list of what you expect from other people and departments?

Model Rigor
Use these questions about model rigor to help you to produce a good set of requirements for a new model:

Must the model be thermodynamically rigorous? Are there areas where you can trade off rigor for performance?

What are the key scenarios the model must work with?

How important is the physical geometry of the equipment in a dynamic model? How might this affect the results?

Is real-time performance important to you? Is it ultimately more important than accuracy? There is no point producing the best model in the world if it runs slower than real time and your customer expects it to run twice as fast as real time!

Does your customer have sufficiently specified hardware to run the model if you need to deliver your model?

Must the model be suitable for simulation in different run modes? What are they?

Are there unusual flow patterns which need to be considered?

Does information from the plant lead to particular phenomena which are of prime importance?

Data and Results
Use these questions about data and results to help you to produce a good set of requirements for a new model:

What units of measurement do people expect to use when presenting results or inputting data?

Do the dynamic results need to be accurate or qualitative?

Do the results need to be verified against experiment, pilot plant, or actual plant data? Do you have a source for the data and a commitment to deliver this data?

How might your model be compromised if good data is not available? Does it make sense to develop a high fidelity model in the absence of good data?

Does the model need customized forms to hide the standard tables and grids used to set values and specifications?

Does the model need a customized front-end developed in a desktop package? Is this important to either achieve the business benefit, visibility, or further work?

Producing the External Design
See Also

Designing to Meet the Technical Objectives

Defining the Model Scope

Designing to Meet the Complete Deliverable

The external design defines the assumptions about how the model will be used and how it will appear. It needs to define:

Top-level models:

How many are needed?

Their overall purpose

Their names

Whether simple stream and variable connections are sufficient

The function and purpose of any Stream Types you need to create

For each model or stream type, you then need to include in the external design:

Technical objectives

Scope

Complete deliverable

After you have produced the external design, you will understand more precisely the scope and cost of the work involved. You may even feel that you wish to change the requirements you set up earlier. This may need some negotiation with customers or management, or perhaps some phasing of the work.

Designing to Meet the Technical Objectives
Ensure your design defines the scenarios under which the model must work. This is very important, and should be the basis of your thinking, your test plan, and test work. These scenarios should help prove acceptability against your requirements.

When defining the scenarios:

Define the nature of each task required in a dynamic simulation, at least from a high level view

Ensure you include scenarios which will prove the model under extreme conditions such as zero flow, points of flow reversal, phase transition, incipient fluidization, or other model discontinuities.

However, you do not need to consider extreme conditions if you are studying only dynamic responses close to a steady-state condition. You need to consider how you will verify the model under different combinations of configuration parameters.

Name and list all component lists. Anticipate data requirements for physical properties and rate phenomena.

Defining the Model Scope
Ensure your design states your assumptions about the model scope. Use these questions as a starting point:

Is perfect mixing a valid assumption?

Can you neglect fast dynamics?

Must you account for true internal energy in your dynamic heat balances, especially in high pressure applications?

Can you neglect some costs in an optimization simulation?

Are simple hydrodynamics sufficient?

Can you simplify complex physical behavior such as multiphase flow using some simple correlation?

Try to make accurate assumptions to prevent later reworking.

Ensure your design also includes the following information about the model scope:

Critical effects which must be modeled and why

Performance metrics or constraints

Expected model size under various configurations. This may help guide a performance/rigor trade-off.

Configuration parameters and their valid values

Control inputs and outputs, including:

A sketch of the model from a flowsheeting standpoint

A list of all ports

Which variables are input or output for control or other purposes

Preferred solution methods. Choose the most appropriate method for performance, rigor and reliability. State any special convergence criteria that need to be specified.

Designing to Meet the Complete Deliverable
Ensure your design includes all aspects of the final deliverable:

Design any icons to be built into the model:

Are standards applicable?

How many do you need?

Place ports logically

Avoid later rework

Design results displays to be built into the model:

Determine how many customized tables you need and the logic behind their contents.

List the plots that you need to build into the model, together with the variables to be grouped in each one.

Check whether customized Visual Basic forms  are needed. Design them carefully and check out any controls you intend to embed in your form. Consider configuration forms and key results displays. Which controls, such as plots and tabbed dialog boxes, are applicable?

Describe how you want to use variable descriptions in your forms.

State any naming conventions for variables, sub-models, procedures, and ports.

Design any external application that must be developed to stage a 'canned' flowsheet. Ideally, you should produce a separate design for this part of your project. Ease of use may be critical here if it is to used, for example, as an off-line tool by plant staff.

State what documentation is to be delivered.

Designing the Model and its Equations
See Also

Early Design Work

Designing the Model Structure

Designing the Local Variables

Designing the Equations

Throughout the model design process, your growing understanding of the work involved will improve your cost estimates to complete the work and help you to avoid later rework due to forgotten details or flaws.

The product of the design process is design documentation. This will:

Help you produce a model which meets the requirements

Serve as a detailed reference for subsequent projects

Early Design Work
See Also

Variable Types

Procedures

Port Types

The Aspen Custom Modeler library contains a set of pre-built procedures, port types, and variable types which you can use for many applications. Make use of these to save time. You can copy these and refine them to meet the needs of your application. For example, refining values and restricting bounds is guaranteed to help the convergence properties of your model and application.

Before starting on the model design, first design:

Variable types

Procedures

Port types

These types underpin all your work. Changing them can be simple but can also cause a lot of rework. For example, adding a variable to a port definition may affect more than one model. You need to consider carefully what variables should be written into a port to minimize the variables equated across port boundaries. At the same time, you may need to include variables so that they are accessible when you double-click a stream in a flowsheet.

Variable Types
Well-designed variable types are fundamentally important to the success of your work. To design useful variable types, remember the following points:

Ensure the variable types are helpful to the success of your simulation.

Assign sensible values in variable types. If necessary, you can refine these in your model.

Bounds are important. Ensure that the range of variables types:

Prevent solution methods searching in infeasible regions, thus improving performance and robustness

Are physically meaningful

Are appropriate for the application

Define your base units of measurement as these are used during the solution process. Ideally, variable values in the application should be near 1 where this is practical. Avoid types which give rise to particularly small or very large values. Consider scale factors if needed.

State what flexibility you intend to include for units of measure.

Consider the effects of inheritance on type checking in various situations. For example, you can use more generic procedures which return in a base type. In the models your write, you can return actual variables derived from variable types, which are derived from this base type. This gives flexibility and reduces both the number of procedures you need to write, and the amount of code you might need to write.

Tip: The Aspen Custom Modeler library contains a set of pre-built variable types which you can copy and refine to meet the needs of your application.

Procedures
When designing procedures, bear in mind the following points:

What are the applicable options, for example, language, workspace?

Do you want to place part of the model in a procedure? If you do, consider analytical derivatives. Analytical derivatives increase performance and robustness at the cost of additional implementation time.

Carry out code design of the procedure code.

State how you are going to test the procedure code.

For physical properties and their procedures, investigate the available features of the Aspen Properties® interface, if applicable.

Tip: The Aspen Custom Modeler library contains a set of pre-built procedures which you can copy and refine to meet the needs of your application.

Port Types
When designing port types, bear in mind the following points:

Consider carefully any inheritance strategy you want to use with ports and variables. Remember the connectivity rules.

List the variables to be contained in your ports. Use only the variables you absolutely need.

Use short meaningful names for ports to help model readability. Remember port names pop up as tooltips when routing streams in the flowsheet.

Only use the same name for variables in different ports if they really are derived from the same base variable type.

Tip: The Aspen Custom Modeler library contains a set of pre-built port types which you can copy and refine to meet the needs of your application.

Designing the Model Structure
See Also

Model Hierarchy

Model Inheritance

Implied Flowsheet Considerations

The model structure is a fundamental part of your model design, and can cause large amounts of rework if you decide to make changes later on. Leaving aside the equations which describe the behavior of the process, you must decide upon a data structure for your variables. To help you do this:

Sketch out the model hierarchy. If you are familiar with Object Oriented Design, you could also add the inheritance to your diagram.

Produce a check list of all the objects which offer some interface to the outside world. A table or spreadsheet might be a convenient form to present the information.

For ports, give names, types, direction and other properties like minimum and maximum numbers of possible connections. Indicate whether they are simple ports or multiports, or arrays of these. You could add them to your diagram using different symbols.

List the configuration parameters and their type and purpose, giving bounds or valid sets of values.

Indicate the global variables and component lists which the model references.

Name the icons needed referring back to the earlier design documentation.

Name the forms needed indicating the main purpose of each form, referring back to earlier design documentation.

This gives an external view of the model. It does not say anything about the behavior of the model. That comes next.

Model Hierarchy
Decide whether to use a model hierarchy.

For example, in a stage-wise process, do you model component compositions as a multidimensional array, or do you model each stage in a sub-model?

This immediately changes the way in which variables are addressed and how large each model will be.

Model Inheritance
You can use inheritance to:

Simplify a model by hiding complexity in the parent model

Use an abstract model which cannot be used directly in a flowsheet

A simple abstract model, contains, for example, variables and ports and, perhaps, parameters. Such a model is essentially a data model. You could inherit this model and add different equations in different child models.

The other form of model which you might inherit is a fully working model.

Note: You can add objects to a child model, but you cannot remove objects declared in the inherited parent model. You cannot change the structure of a child model. For example, you cannot change the number of connections inside a child model.

Keep inheritance simple until you fully understand the consequences and potential of the feature.

Implied Flowsheet Considerations
Ensure you take account of the following:

How you intend to handle pressure-flow relationships in dynamic simulations. Do you intend to calculate pressure drops in a stream model or in the upstream block, leaving your streams simple?

Does the model effectively determine pressure, or flow, or both?

Depending on these overall considerations you may be setting up implied rules as to which model can logically be connected to another. Some flowsheets focus on the concepts of 'pressure setters' and 'flow setters' where a flow setter must separate pressure setters. You could envisage a stream as being a flow setter.

Do you want a single stream model which can act as a feed (no upstream model) and as a connection stream between blocks? Alternatively, will you create Feed models or Feed streams?

Tip: You can use the IsConnected port property in streams to write the general stream model. Note that if you do, you may create inactive variables in many streams, which occupy memory in the GUI client.

Note that blocks derived from highly parameterized, flexible models will occupy up to 50% more memory in the GUI client than models which are structurally rigid. This may be an important consideration if you are dealing with a large application.

Designing the Local Variables
Model ports and model parameters define the external variables of the model. You now need to turn to the internal variables. You may choose to build these up during implementation. However, first consider:

Variable descriptions

As needed for tables and plots

To help make the model self-documenting

Variable default values and bounds. You could:

Refine default values and bounds

Assign a pressure profile, for example

Use the Size function to compute realistic default mole fractions using the size of component lists

Write a script to help initialization.

Refining bounds for sensitive variables in a particular model might help convergence. For example, the variable type may have a zero lower bound, but you know that, in this model, the variable can never be zero. Setting a non-zero lower bound may help convergence by preventing numerical singularities, making the way equations are formulated less critical.

Variable default specifications

Crucial to ease of use when flowsheeting

Can your model be made 'ever square'? No matter how it is connected, the model should always be well specified. Is this one of your objectives?

Building in the specification will enable you to fully exploit the fix and unfix facilities in the Status window. This also saves many assignments of the 'fixed' property in tables or scripts.

Perhaps the best case for setting up a default specification is the 'rating' case. This is the natural specification in dynamic simulation. This is where you consider all inputs are known, all the state variables are known (in a dynamic model), and you need to fix some local variables to completely determine the remaining local variables and output variables

Ensure defaults for configuration parameters are sensible. Where applicable make the defaults the most used value.

Is the variable hidden?

Hidden variables are not recorded through time and cannot be viewed in plots and tables. Hidden variables are essentially 'private' and all others 'public'.

Making some variables hidden saves disk space if you are recording all variables in dynamic simulations.

UseUOMOf

Do some variables need to acquire their units of measurement from other variables? To see how this function can be put to good use, look at the PID control model in the Modeler library.

Avoid general variable types

Do not write models which use general variable types for variables which are fundamentally different. Fully exploit the types available and reconsider your variable types if you do not have something you need. Do not use a type with an arbitrary default and wide bounds.

Designing the Equations
You can now draw up the equations. As with the local variables, you may prefer to develop these during implementation.

It is useful to have a check list of the equations perhaps recording key relationships such as correlations, reaction schemes, or rate expressions. In particular, provide references to standard or corporate sources.

This check list will act as a reference for you or for other users of your work. You may simply wish to state an equation naming convention and list the categories of equations to be added, such as:

Material balances

Heat balance

Momentum balance

Equilibrium or rate expressions

Flow-pressure drop/head relationships

Rates of reaction

Heats of adsorption

Numerical schemes when handling Partial Differential Equations

Physical geometry and its relationship to hold-up/head or pressure

Physical properties used

Heat transfer to the environment or equipment heat capacity

Flooding or extreme flow patterns such as tray weeping, reverse flow, sonic flow, emergency relief of material, and so on.

Implementing the Model
See Also

Basic Working Practices

Starting Simple

Developing the Model

To implement your model successfully, you need to follow basic good working practices, start with a simple model, and build up to greater complexity.

Basic Working Practices
See Also

Using Helpful Comments and Naming Conventions

Procedure Testing and Error Trapping

Using a Standalone Test Program for Procedure Code

Use all the following practices in your modeling work. Do not ignore these basic principles.

Using Helpful Comments and Naming Conventions
Document your work thoroughly to simplify later use of the model:

Always include enough comments to make the model self-documenting. You are likely to use the model again, perhaps much later.

Use a naming convention which gives variable names that are meaningful and not too long. Use capitalization in the name to help legibility, for example, TShell, TTube.

Use blank lines and indentation to help legibility.

Always keep copies of your models in language form (.acmf) as you develop them. Put comments at the top of the file to help recognize the work later.

Place revision comments in the model. This is important if you are incrementally changing a model and other people are using the same model. This will help as well if you return to the work after a long break.

Implement procedures using module names you know will be unique. Prefix the module names (or other 'symbols' the linker may see) with a short sequence of characters which is unlikely to be used elsewhere.

Procedure Testing and Error Trapping
Test and check your work thoroughly, and make sure errors are easy to locate:

Test all procedures thoroughly over a range of inputs to ensure correct operation:

Outputs are as expected

Derivatives are accurate (if selected).

Good precision is demonstrated. Check results are truly double precision (no mistakes made with declaring variables). Check results are to within any internal tolerances.

Always return error codes. In early procedure usage, check dimensions are realistic in your code. Check that incoming variable values are realistic by comparing them against bounds coded into the procedure. Code defensively. This can trap faulty argument lists or argument typing.

Double-check argument lists to ensure they are consistent with the procedure definition and correctly typed.

Double-check any variable that must be initialized is initialized.

Declare every variable in the code. In Fortran, use the statement IMPLICIT NONE. A very large number of modeling problems arise from faulty procedures. A modeling environment is not a good means of debugging Fortran or C++.

Using a Standalone Test Program for Procedure Code
Write a standalone test program for your code and stress test your code, remembering the following points:

The solution algorithm might try variable values which you do not expect, especially during steady-state, initialization, or optimization runs. Your procedure code needs to be 'bullet proof'.

Make repeat calls to the procedure with identical input arguments to ensure results are reproducible using the test program. Non-reproducible results may indicate an uninitialized variable, misuse of workspace, or some value which is stored in memory and is picked up again erroneously in a subsequent call.

Ensure procedure input arguments are not altered by calling the procedure using the test program. Make copies of the input arguments and compare them to the input arguments after calling the procedure.

Finally, check the performance of CPU-intensive procedure code by making a large number of calls and dividing by the number of calls. This cost per call may flag problems or ensure the code is suitable for use in a real-time application.

Starting Simple
If you start simple and build up your model, you will increase your insight into the model and ensure your success. Use these guidelines:

Start implementing your model with the fundamental element in a complex model, such as a stage model.

You may want to make your very first model a simple material balance. Remember, variables will be inactive if you do not use them. You may want to prove you can make a simple cascade of these models in the flowsheet graphics.

Keep the early model as linear as possible. Many equations in models are either linear (for example, constant1*x = constant2*y), or 'bi-linear' (for example, a*x = b*y), or have terms of either sort. These types of equations normally provide little challenge during numerical solution because the derivatives of the equations are either constant or analytically derived as a simple variable.

Keeping the model linear will help prove the degrees of freedom of the model and reveal structural problems in the equations without complication. Try solving this model with different specifications. Ensure there are no surprises with convergence, and tackle these problems if they are encountered.

Avoid adding highly non-linear features to your model at this stage, such as non-linear flow relationships, reaction kinetics, or discontinuous equations. Non-linear features may hide problems associated with, for example, zero flow in your material balances, or holdup-flow relationships. These features often cause many variables to be added which may also confuse setting up the default specification.

For dynamic models, follow the solution path through the equations, assuming the rating specification.

You should be able to see a path which leads to the solution of the entire model. The decomposition of the model into groups should follow your path through the equations.

This will provide the best decomposition of the problem and enables you to trace the solution path through your equations.

You may wish to use rigorous physical properties because it is not always convenient to set up simplified properties. If you can, use the most ideal model initially.

Save your work once you have a working simple model. You may want it later to generate some values to initialize some variables.

Keep a snapshot archive handy.

Give these files meaningful names.

Developing the Model
You can now begin to develop the model by adding the necessary degree of rigor.

Add features one at a time and check the convergence behavior of your model at each step to check for regression.

Run the key test scenarios, particularly those which cause extreme conditions or discontinuities to switch.

When you replace, for example, a linear flow relationship with a more complex non-linear expression, you may need to add default specifications. Each step should not change the degrees of freedom of your model. The basic specification should have been resolved while working with the early simple form of the model.

Creating a Test Plan for the Model
Produce a test plan based upon the requirements of your modeling work. Apply this test plan at various stages during the work.

The test plan should demonstrate reliable solution with the correct degree of rigor and the right performance characteristics to meet the model requirements. Use the scenarios that were produced during the planning/requirements analysis to help scope the tests.

You can write scripts into the flowsheet which specify and run these scenarios. You can write a master script which runs each in turn if this is useful.

Keep records in a test matrix or similar format. For example, you can use a spreadsheet to list the names of each test in the first column and, each time you test, add a dated column. Note in each cell the outcome of the test. You can add numbers in the cells to characterize the types of failure, using different colors to indicate success or failure.

Having a history of the tests will help show regression. This will help you to identify cause and effect.

Ideas for the sorts of things you might need to test can be divided into three groups:

Robustness

Rigor

Performance

Robustness
Verify solution behavior for robustness:

Verify solution behavior in all appropriate run modes, for example:

Zero flow, or in dynamics, flows starting from zero and increasing or decreasing towards zero, for example, start-up and shut-down

Static solution close to, and either side of, model discontinuities

Dynamic solution up to a discontinuous point

Dynamic solution through discontinuities, whether produced by IF or SWITCH statements

Static or dynamic solution through phase transitions in either direction, for example, from single phase to two-phase or vice versa. Do not assume because the model works well in one direction it will work well in another.

Solve from a range of initial conditions. Keep snapshots or scripts to show that the model can solve from a reasonably wide range of start points. This applies to all run modes.

Given a steady-state or initialization solution, repeat the run as a steady-state or initialization run. Make sure that all non-linear blocks do not iterate (unless using variable convergence where one iteration is necessary to get an error estimate). If non-linear blocks iterate, there may be a problem in procedure code. This may be because the output values of the procedures cannot be produced again from their input values.

Apply simultaneous changes to fixed variable values in dynamic simulations using Tasks. You may need to test with more than one load at once to show the model is robust through all operating scenarios.

Are there limits to how large a step change can be?

Must ramps be applied to some load changes?

How fast can the ramps be?

These constraints may be acceptable and it is important to note and record them.

Test with the absence of one or more components, or with these components in very small quantities. This may reveal potential problems with your model.

Does your model handle components that are inert or non-transferring? Is this scenario likely?

Test to extreme flow, composition, temperature, and pressure conditions within the remit of the requirements. This may reveal bound problems or some unexpected modeling problem.

Test with different configuration parameters. Remember that adding flexibility to models adds to the dimensions of your testing. This can double, or triple the time needed to test the model, or even make testing for total rigor very difficult and time-consuming.

Rigor
Verify the engineering realism and accuracy:

Tighten all relevant tolerances to demonstrate the solution you have is accurate to the desired precision.

Decrease the integration step size to demonstrate there is no significant change in a dynamic solution.

Verify the results against the available data. Double-check steady-state data is steady-state. Given point data, can you confirm a material balance or heat balance? Double-check to see if there were any unusual events during the time data was collected.

Vary fixed variables within their nominal error limits. Remember that some of them are likely to be inaccurate. If you notice a mismatch with data, move these parameters outside of their limits to see if a bad fixed value might explain the poor correspondence with data. Check the source of suspect input data. Have you overlooked some phenomena in your model which might explain the difference you are seeing?

Consult with peers, supervisors, and customers to get their opinion on results. They may spot something you may have missed. They may not be able to comment on how you have produced your model but they may know what to expect in terms of results. It is better to do this early, to get valuable feedback that can lead to real improvements in your work. Talk with plant operators if appropriate.

Do changes in fixed variable values give what you and your peers consider to be reasonable results using best engineering judgement?

Do you get specific dynamic responses with the right trends after the right intervals of time?

Does your optimization contradict practical experience or does experience suggest a better optimal solution?

Verify optimal points are feasible. Have you missed an inequality constraint?

Performance
Verify solution performance meets the application objectives:

Ensure performance tests are reproducible. This means you must ensure that all factors which can affect performance are held constant.

Ensure you are the only user of the computer during the test. Check no-one is accesses the hard-drive across the network. Standalone testing is ideal.

Measure either elapsed time, CPU time, or both as needed. Stating the obvious, record elapsed times if that is needed and not CPU time and vice versa. Lack of clarity on this simple point can lead to a surprising degree of confusion.

Verify performance with the expected degree of disk, GUI interaction, IO and interaction through Automation. Note that Automation and IO has a profound effect on elapsed and CPU time performance. Disk and Window IO must be reproducible. This means making sure:

Communication intervals are at the maximum allowed by the application.

Message/print levels are no more than is needed for the application. The Simulation Messages window carries out a lot of string processing which uses significant machine resources.

Only the variables that need to be saved over time are saved.

Only necessary plots and tables are displayed.

Before testing, ensure all Solver Options are at optimal settings for performance critical applications.

Tidy and Document Your Work
Remember that one of the goals of good modeling is to achieve reuse of models. If you use good housekeeping practices, you will be able to:

Return to a model later and generalize it further to be applicable to a wider range of applications

Avoid missing information on models, or worst still, missing entire models

To achieve the necessary good-housekeeping:

Keep versions of your models and simulations archived for later reference and ensure language files are well commented. A few extra minutes spent doing this may save hours or days of work later.

Keep important snapshots files or produce scripts of important initial points or steady-states using the Variable Find tool. Double-check you can reproduce results from the files you plan to archive.

Keep related files together, including relevant procedure code and Aspen Properties files. You may want to use different working directories for different versions of models or simulations as your work evolves.

Remember that, by keeping the files, you are assuming you will return to the work later. This may be much later when you will have long forgotten what the differences are between the models and simulations you have saved.

Keep a Readme file in the directory, tabulating the contents of the directory and the version number of Aspen Custom Modeler last used with the files. You will see Aspen Custom Modeler writes this into language files produced when saving simulations.

Record the versions of other tools and products used to produce the simulation results.

Overview of Improving Your Equations
Click the following links to display guidelines to help you write equations which perform well and improve model robustness.

Background on writing equations

Use procedures effectively

Improve your pressure-flow equations

Avoid division

Avoid unnecessary variables and equations

Scale your variables

Scale your equations

Avoid intermediate variables

Use IF and SWITCH statements effectively

Name your equations

Note: If your model does not always exhibit rapid, trouble-free convergence, you may need to improve your equations. This applies especially when the starting point for convergence is near to the actual solution.

For good performance where fast convergence is necessary:

The solvers must be able to converge at their optimum: this means quadratic convergence or superlinear convergence in solving sets of algebraic equations. Remember, all solvers need to solve some form of linear or non-linear equations.

The equations must be near ideal, with good continuity in their functions and, wherever possible, their derivatives.

If the equations move the numerical solvers away from the ideal, they have to work harder to solve. They may possibly invoke heuristics to help convergence, take more time to solve, and possibly exhibit slow convergence, or even convergence failure.

Caution: If you try experimenting with solver options to help convergence, you are trying to adjust the solver onto a better convergence path. This may lead to mixed results because the problem usually lies in the equations. Changing the solver options may help a particular non-linear problem with one set of specifications, but it may also cause poor performance or difficulties elsewhere.

Background on Writing Equations
Note these key points when writing equations:

Equations are rearranged into groups of residual equations where the residual is zero or near to zero at the point of solution. Residuals must not be too big at the onset of solution.

All solvers use equation derivatives that are arranged in a matrix usually containing many zeros and few non-zeros. Each row of the matrix corresponds to an equation. Along each row are the partial derivatives of that equation with respect to each variable appearing in the equation.

This matrix is technically known as the Jacobian matrix, and is usually sparse.

Equation derivatives must be accurate for robust and fast convergence. Analytical differentiation is used to produce accurate derivative values.

Some derivatives cannot be produced analytically, almost always due to procedures. Numerical differentiation is used to calculate procedure derivatives unless the procedure returns its own derivatives.

Because numerical derivatives are always subject to some error, you must manage them effectively. Procedures are a major source of numerical derivatives.

Some solvers use sensitivity derivatives. Factors that affect equation derivatives also affect sensitivity derivatives.

Variables and equations are solved by iteration in non-linear problems using equation residuals, derivatives, and a starting point for variable values. Successful solution requires reasonable variable default values or helpful assigned values, good variable scaling and relevant variable bounds.

Convergence criteria and tolerance values define when a solution is valid. Meeting these criteria depends on how many orders of magnitude of improvement in convergence measures are needed. You can write models that make this possible, difficult, or impossible.

Using Procedures Effectively
See Also

Difficulties with Procedures

Note the following points when using procedures:

Procedures are a convenient way to hide equations from the numerical solvers where the equations can lead to poor convergence. For example, you can make a procedure appear as a smooth function and manage all kinds of decisions and non-linearity in the code.

Where you know specialist solution techniques and heuristics are needed to get a solution, you can solve part of the model in a procedure.

Note: You cannot write heuristics into model equations. The solution methods contain general heuristics to help convergence.

You can apply precisely targeted rules and decisions in procedure code. Physical property calculations are classic examples of this type, where attention to detail is needed around phase transitions and other areas of complexity.

You can use procedures to calculate analytic derivatives for equations which use functions that will otherwise have numerical components. Not all in-built functions have analytic derivatives: MIN, MAX, and DELAY functions have numerical derivatives. For an example, see Improve Your Pressure-Flow Equations. Often, you can provide these derivatives because you know about the behavior of your equation.

When you use procedures, pay particular attention to the points made in Testing and Error-Trapping and in Difficulties with Procedures.

Difficulties with Procedures
To avoid problems with procedures, note the points made in Testing and Error-Trapping.

Some difficulties with procedures include:

Faults in procedure code

Loose tolerances

Not returning derivatives

Faults in Procedure Code
If you have faulty procedure code, your simulation will not converge or will show erratic convergence behavior. Symptoms of this problem include:

Steady convergence to a point, then no subsequent improvement in the solution.

Check the precision of your procedure outputs.

Steady convergence to a point, then the convergence suddenly deteriorates.

A switch may have occurred in the code which suddenly changes the outputs of the procedure, perhaps exposing a fault.

Generally erratic convergence can be attributed to lack of precision or badly declared variables or arguments. In Fortran, use IMPLICIT NONE, declare all your variables, and check obvious errors such as writing statements beyond column 72.

Test the procedure thoroughly.

Integration progresses smoothly with a variable step integrator, then it appears not to progress, with steps being cut back ever smaller.

This could be a procedure fault. It means the solver cannot solve the next step even if the next point of solution is brought ever closer to the current point. (This is highly unusual as it is like making the next point similar to the current point to an extremely fine degree, yet the next point cannot be solved.)

Loose Tolerances
Your procedure code may contain its own numerical convergence loops. Ensure the tolerances are several orders of magnitude 'tighter' than the set tolerances.

By default, outputs should be accurate to within 10-8. Remember that the outputs will be used to judge convergence to small degrees of precision, usually to within 10-5.

Also, the outputs might be used to approximate the derivative of the output with respect to the procedure inputs. This derivative will be of poor quality if your tolerances are too loose. This can lead to erratic convergence behavior.

Not Returning Derivatives
Returning derivatives from your procedures takes extra effort and careful coding. When you do not provide derivatives, they are automatically approximated numerically by perturbing the procedure inputs. These are some of the consequences:

You are relying on the size and sometimes the direction of the perturbation to give sensible derivatives. The built-in perturbations are generally applicable as they are tuned to work best with other convergence options.

Consider what happens when an input is zero. Perturbation will mean the derivatives are approximated by determining the procedure outputs at zero and at a perturbed point. You may know perhaps that the derivatives must also be zero but the perturbed results will not be. The zero derivatives at an input value of zero may be crucial for the stability of convergence near zero inputs.

Numerical derivatives contain more error when your outputs do not have sufficient accuracy due to internal convergence loops. For information, see Loose Tolerances.

Improve Your Pressure-Flow Equations
Pressure-flow relationships are some of the most problematic equations in modeling process equipment. There are several reasons for this:

They are non-linear

Flow can reverse, carrying with it a fundamental change in material balances

They are problematic at zero flow when not modeled correctly

Convergence can be sensitive to poor initial values

For good convergence, pressure-flow relationships demand a degree of rigor. You need to write:

Flow = f(ΔP)

As a gross simplification, you could write:

Flow = k×ΔP

This is fine as the linear equation poses no convergence problem. It may help expose problems elsewhere in the models.

You may then immediately want a better representation to capture some of the non-linearity:



This is still a simplification of reality. It will prevent good convergence around zero flow and will fail outright when the pressure drop is negative and the square root of a negative number is attempted.

You can correct the square root problem by rewriting the equation so that the correct sign for flow is determined by the sign of pressure drop.

k2ΔP = Abs(Flow) × Flow

But the above equation is still flawed. At zero flow, you will find convergence very poor because of sharply changing derivatives of the function with respect to the variables.

This is a case where the equation is too simple. In fact, you have left behind something valuable in the simple linear equation. Remember, the square root of pressure drop equation is not valid physically for small flow rates when flow becomes laminar. In this case, the equation is linear near zero flow. You need to write:

k2ΔP = Flow × Abs(Flow + δ)

Near zero flow, we have a linear relationship of pressure drop versus flow, controlled by the factor δ. This helps solution enormously near zero flow.

You have to decide if reverse flow is possible, or if it is to be modeled. If it is, the equation above is valuable. If not, you need to take further action. You might be tempted to write:

k2ΔP = Flow × (Flow + δ)

You may have some success with this, but still have occasional problems especially if ΔP is not bounded to be non-negative. Take control and express the pressure-flow relationship:

k2ΔPclipped = Flow × (Flow + δ)

ΔPclipped = Max(ΔPactual, 0.0)

Put the clipped-actual pressure drop equation in a procedure which can also return analytic derivatives, otherwise the Max function will generate numerical derivatives. You can always work out the derivative in this case.

In this way, you ensure the pressure drop used in the flow equation is non-negative and the equations are well posed.

Avoid Division
Instead of dividing by variables, move them to the other side of the equation and multiply. By doing this, you prevent division by zero when there is a risk of the variable becoming zero. Make sure you never divide by a variable which can be zero or is bounded at zero.

You may help convergence by bounding variables to a small positive number instead of zero when this is acceptable. You can always bound the variable specifically in particular models by reassigning the lower bound of the variable.

Alternatively, you can assign specific bounds for individual block variables in variables tables. This is not as attractive as ensuring that the variable types and models are set up well. It places more emphasis on the flowsheet user to understand what needs to be done.

Avoid Unnecessary Variables and Equations
Do not add extra detail or variables to the model unnecessarily. Each free variable requires a balancing equation.

Adding unnecessary variables and equations increases the size of the problem to be solved and may expose additional degrees of non-linearity to the solvers.

When something goes wrong, smaller simulations and models are easier to diagnose because:

You have less information to review

The simulation is often faster with fewer variables, as there are smaller or fewer numbers of solution groups

Less memory is used to store simulation information

Remember, simple equalities of the form A=B are eliminated during the solution process.

For more information, see Avoid Intermediate Variables.

Scale Your Variables
You can scale your variables naturally by choosing units of measurement which give variable values around 1.0. This applies to the base units of measurement that the solvers use.

A good example is energy flow (power), which normally requires attention. Typically, GJ/hr or MW will give a reasonable scale. Other variables may not need any special attention. However, if you do not think GJ/hr is suitable for presenting results or providing data, you can:

Define your own units of measurement for this purpose, separate from the base units used for solution.

Provide individual scale factors for variables. You can give these as defaults in the variable type itself.

Check the Scale property of a variable. This additional step is guaranteed to help, because simulations are converged according to a convergence criterion. This either applies to changes in variable values, or changes in equation residual values or both.

Scaling your variables helps to:

Give good equation scaling. For more information on this, see Scale Your Equations.

Make variable convergence a realistic objective. Variable convergence is used by all the integrators as the criterion for error control of their integration steps and internal step convergence. You can also optionally enable it when algebraic groups of equations are converged.

Variable convergence is both absolute and relative. The relative component is active when variable values are small. The shift in a variable from iteration to iteration must always be less than the absolute tolerance for convergence. This may be impossible for large variables values. For example, if may be impossible to converge a set of equations, or accept an integration step when variables are more than 8 orders of magnitude greater than the absolute variable tolerance.

Scale Your Equations
See Also

Recognizing Poor Equation Scaling

Manual Equation Scaling

Automatic Equation Scaling

Consider a simple heat balance where terms are heat flow. In this case, the terms might be individual heat rates or they may be products of specific enthalpy and molar flow. Keeping enthalpy in GJ/hr or comparably scaled units of measurement means that initial unconverged equations have residual values of similar order of magnitude for typical values of heat flow. These must then be converged to within the residual tolerance with equation convergence.

Equation convergence is the default when solving sets of non-linear algebraic equations. These occur in all simulation runs involving all types of solver.

With equation terms normally between 1.0 and 1000.0, you are asking for between 5 and 8 orders of magnitude improvement in the convergence of the equation, assuming a residual tolerance of 0.00001. If procedure outputs are of high quality, 5 to 8 orders of magnitude is reasonable.

You may not always be able to give initial equation residuals between, for example, 1 to 1000, due to the combination of variables appearing together in equations. Changing the base units of measurement for one variable might affect other equations or variable convergence. However, you should be concerned with norms above 1000.

Recognizing Poor Equation Scaling
Consider what happens when you use kJ/hr or kW with normal values around 1E6. Here, you are asking for eleven orders of magnitude improvement in the error of the equation. It is unlikely the solvers will ever solve equations like this using double precision arithmetic. Double precision arithmetic gives around 16 significant figures of accuracy, but round-off will affect the result.

Other inaccuracies will also affect the solution process, such as procedure outputs which themselves might be the product of internal solution, or numerical differentiation which, by definition, is only approximate.

You may see a group of equations solving satisfactorily, followed by a sudden large increase in the group function norm. This may be because an IF equation switched from one branch to another between iterations. The equation on one branch may have a very different scale and you may not notice this until the IF switches. It is thus important to test your models thoroughly.

This type of behavior with IFs can also cause convergence difficulties, especially where the solution is close to the discontinuity.

 Manual Equation Scaling
The solution to problems with equation scaling is to scale the equations directly by multiplying both sides of the equation by a constant of the same value. This is sometimes referred to as manual equation scaling.

However, if variables are well-scaled, few equations need this kind of attention.

Automatic Equation Scaling
In addition to using manual equation scaling, you can also use automatic equation scaling.

Automatic equation scaling uses the initial residuals of the equations to decide on the equation scales needed to improve the performance of the solvers. The scaling that is applied depends on the initial values of the variables in the equations. When using automatic equation scaling, note the following points:

Different scales can be applied in different runs, or with different specifications.

Converged solutions might be slightly different, but still within tolerance, depending on your initial point.

The solvers are doing more work in transforming the problem being solved.

You have less control than when you use manual scaling.

Avoid Intermediate Variables
Intermediate variables are variables that you introduce to split up equations. Using these variables can cause problems, as explained in Avoid Unnecessary Variables and Equations.

Intermediate variables can also adversely affect the robustness of your models because often you cannot give a physical significance to the variable. It may even have some odd units of measurement or a high typical value. You may not be able to easily define the base units of measurement for the type. This means variable values cannot be converted. You may not have a suitable variable type to use and find it too awkward to create one.

This can encourage you to use a type arbitrarily, resulting in a variable with an ill-defined initial value and possibly very broad bounds. The default value for the type used might lead to high initial equations norms. For more information, see Scale Your Equations

If you really need to create intermediate variables, try to create them using a suitable variable type. Consider this aspect of modeling in your early design work.

Use IF and SWITCH Statements Effectively
See Also

Wrong Branches Using Gear

Unlocked Branches

Scale Branches

Keep Equations Analytical

Keep Some Continuity

Pair Equations in Block IFs and SWITCH Statements

The IF statement and the related SWITCH statement provide the flexibility to model processes that undergo changes in the relationships governing process behavior.

To write good equations, it is important to describe discontinuities in a way that helps convergence. This section advises you on how to do this.

Note: To keep explanations short, only IF statements and branches of IF statements are used as examples unless SWITCH introduces an important difference.

Wrong Branches Using Gear
Gear locks onto branches during the integration step. It detects discontinuities at the end of each integration step. Gear locates the point when the change occurred, interpolates back to that point, reinitializes, locks onto new branches, and then continues to integrate.

The result can be that a branch is evaluated when another branch should be active. To avoid problems, ensure all equations can be evaluated without arithmetic faults, irrespective of the branch in which they appear. For example, avoid square roots of variables which can be negative in ALL branches.

Unlocked Branches
All solvers use unlocked branches, including Gear initialization and reinitialization. Gear also uses locked branches.

When unlocked, an IF statement behaves procedurally, as it would in a programming language.

This means that an IF statement can switch branches between iterations when solving a set of equations. Solution is helped when an IF can move from one branch to another and not switch back on the next iteration. Repeated switching may indicate:

A scaling problem

A problem with numerical derivatives

The equations on one side or either side of a discontinuity exhibit some difficult non-linearity close to the transition.

To solve the problem, try the following suggestions:

Check that the equations are valid near the point of transition, for example, when modeling pressure-flow relationships.

Try to model with IF equations as close to the ideal as possible, and try to:

Achieve some continuity in variables and derivatives

Keep derivatives monotonic, meaning they do not suddenly switch sign over the transition

Check convergence behavior when starting values place the initial solution close to either side of the discontinuity. Prove the model will move away from the discontinuity or transition smoothly. Check convergence where the answer lies close to one side of the discontinuity or the other.

Remember, integrators may need to solve when variables are very close to points of discontinuity.

Scale Branches
Do not forget to scale the equations in each branch of an equation. This minimizes the effect of residuals suddenly jumping when a transition occurs.

Keep Equations Analytical
Derivatives of IF equations are produced analytically. This means derivatives are accurate right up to the point of discontinuity and on either side of the discontinuity.

Derivatives of IF branch equations can be produced numerically if you use the MIN, MAX, or DELAY functions in the branch. Derivatives of the branch equation are also numerical if it is a Procedure equation, unless the Procedure returns analytical derivatives.

Numerical derivatives may cause problems when very close to the point of discontinuity. This is because convergence very close to the transition may depend on accurate derivatives. For example, the transition may occur at a zero value of a variable when the derivative of the equation must be zero. Numerical differentiation will produce a non-zero derivative and may possibly produce a large derivative. This may also occur if the equation is very non-linear near the transition, or has a high or infinite derivative. Check whether your model is physically valid near the transition, as well as far away from the transition.

Keep Some Continuity
Note the following points to help you achieve a faster and more robust solution:

Scale the equations on the branches if needed, so residuals are similar around the point of transition.

Try to write equations that have continuous derivatives across the discontinuity.

Try not to oversimplify your model so that equations create step changes in variable values at the discontinuity. In dynamic simulation, this sometimes arises when you assume an event takes place in an instant and not over some finite time.

You may need to add an extra level of detail or rigor to help discontinuous equations work well.

By following these guidelines, you will make your discontinuous equations behave more like ideal or normal equations.

Remember that all numerical solvers ideally need continuous functions and derivatives to work well. You will help the solvers avoid remedial action and heuristics by writing well posed equations. For example, when solving non-linear equations, repeated iterations from one side of an IF to another can cause the solver to bring in restrictions in an attempt to stabilize the iterations. This will slow down the solution.

Remember, adjusting solver options may help, but problems may re-emerge unexpectedly unless you pay attention to the equations.

Pair Equations in Block IFs and SWITCH Statements
Grouping equations onto branches saves writing many IF or SWITCH statements with the same decisions.

Remember that during solution there must be the same number of equations on each branch (counting all elements of an array equation and procedure outputs).

Make sure each equation or vector equation has a matching equation on the other branch. Pair these and keep the two blocks in the same logical order. Do not arbitrarily shuffle the equations in the branches.

The reasons for doing this are:

The equation-handling will pair the equations, one by one down the list of equations appearing on the branches

For an equation pair, the occurrence of variables in an IF equation is the union of all the variables appearing in the two branch equations. If you shuffle the equation pairing you will find the equations will have far more variables in them than is necessary. This will slow the simulation.

Shuffling and lack of correspondence between equations will destroy continuity across transitions and will harm convergence.

Name Your Equations
Naming equations only takes a moment yet all too often you may be tempted not to do it.

Important: Always name your equations. This is as important as having the correct term in an equation. If you do not name your equations, you will waste simulation time by having to edit your models to add equations names.

The reason for this is that all diagnostic and group decomposition information relates to equations in terms of equation names. General names are invented for you if you omit them. This makes understanding feedback from the solution process difficult.

For example, the full name of a mole fraction of Pentane in a stage block within a block representing a column might be:

Depentanizer.stage(23).x("Pentane")

This variable might appear in the equilibrium relationship for the stage. Using an equation name such as "Equilibrium", the equation appears as:

Depentanizer.stage(23).Equilibrium("Pentane")

It is easy to see which equation is being referred to. However, if you do not name your equations, the same equation would appear as:

Depentanizer.stage(23).AM_Eqn123("Pentane")

Now the only means of identifying the equation is to work it out from either the variables appearing in the equation or to find it in the Explorer under the decomposition tree. Having found it, you need to reveal the full equation text by clicking on the equation with the right mouse button and selecting Properties.

 Overview of Using Procedures and Functions
See Also

About Procedures and Parameters

Aspen Modeler products can make calls to the Fortran routines that you write, such as procedures and functions. To find out more, click one of the following links:

Deciding when to use procedures and functions

Preparing to use procedures and functions

Writing procedure and function Fortran

Rules for writing procedures

Testing subroutines and procedures

Creating double precision variables

Conventions for calling external procedures

For information on defining procedures, see Defining External Procedures.

You need to have a compiler for the language you use in writing procedures. .

About Procedures and Parameters
Parameters are not allowed as procedure outputs. It follows that you cannot normally change the values of parameters with procedures. However, there are occasions where it is convenient to circumvent this restriction, for example, to set up data that will be constant for the run, possibly from some external data source. It is also the only way that strings and integers can be set programmatically at run time.

Parameters are allowed as procedure inputs, and procedures may modify the values of their inputs. To do this, you specify the CHANGESINPUTS keyword as one of the options in the procedure definition, and include the parameter type in the list of input types. It is usually best to specify the PRECALL option as well, and set the values of the parameters in the pre-call. You must specify at least one output; if necessary, you can use a dummy RealVariable.

Note:  As only the first 39 characters of string/stringparameter are passed to the procedure, string parameters should not be longer than 40 characters (39 + a null string terminator); otherwise a crash may occur.

Warning: The parameters that are changed by procedures in this way must not be structural. The effect of changing structural parameters during the run is not defined.

For Example:

This procedure definition is set up to ‘return’ different sets of coefficients as specified by an integer input (the selector).

Procedure ParamProc1

Library:  "ParamProc1.dll";

  Call:  PARAM_PROC_1;  

  Implementation: Subroutine "Param_Proc.f"; 

  Language: FORTRAN; 

  Options: PreCall, ChangesInputs; 

  Inputs:  Integer, // Selector 

     RealParameter(*); // The coefficients

  Outputs:  RealVariable; // a dummy 

End

Running the ParamProc1 Example
This example is a simple illustration of how to manipulate non-structural parameters at run-time.

Open Aspen Custom Modeler.

In the simulation explorer, open Custom Modeling | Procedures. Click Add Procedure, and specify the name ParamProc1. Insert the following text:

Procedure ParamProc1

Library: "ParamProc1.dll";  

Call: PARAM_PROC_1;  

Implementation: Subroutine "Param_Proc.f"; 

Compatibility: "ACM13"; 

Language: FORTRAN; 

Options: PreCall, ChangesInputs; 

Inputs: Selector as Integer, 

   Coeffs as RealParameter(*);

Outputs: Dummy as RealVariable; 

End

This is a simple procedure that uses PRECALL and CHANGESINPUTS to ‘return’ an array of parameters whose values depend on the value of the integer input Selector. Selector can have the values 1 or 2. Note the use of the Name AS Type syntax – this will help to make the generated FORTRAN more understandable. Compile and save this procedure definition.

In the simulation explorer, open Custom Modeling | Models and click the Add Model icon. Specify the name TestParamProc1, and insert the following text:

Model TestParamProc1

// Declarations 

Selector as IntegerParameter(1); 

Indices as IntegerSet([1:3]); 

Coeffs(Indices) as RealParameter; 

Dummy,X,Y as RealVariable; 

// Equations 

// set up values in COEFFS on precall 

Call (DUMMY) = ParamProc1(Selector,Coeffs); 

// A simple quadratic equation 

Y = Coeffs(1)*X*X + Coeffs(2)*X + Coeffs(3); 

X = time;// make simulation dynamic 

End

The model is designed to call our procedure, and use the returned coefficients in a simple quadratic equation in X, which, for the purposes of this example, is equated to the simulation time. Compile this model and save it. Save the simulation to a scratch folder (for example, \ParamProc1) as ParamExample1.acmf.

Note: It is good practice to save the simulation after each step in this description.

Go back to the procedures folder of Custom Modeling, and right-click the ParamProc1 icon. Select Generate Code. Set the working directory to your scratch folder (\ParamProc1), and ensure that all check boxes are selected EXCEPT Execute, then click OK.

This will create the wrapper function and makefile in your scratch folder. It will also create a procedure template (Param_Proc.f), which you will need to edit. Add the code lines shown in blue to Param_Proc.f:

C Code for Procedure Definition ParamProc1

C Template generated by ACM 13.1, based on definition

C Edit only where indicated by 'TODO:' markers

C

SUBROUTINE PARAM_PROC_1(ICALL, 

& Selector, 

& Coeffs, CoeffsDim1, 

& Dummy, 

& IFAIL) 

:

:

C Output Variables

DOUBLE PRECISION Dummy 

C

C Internal Data Table

 DOUBLE PRECISION MyData(3,2)

C

C Array indexing variables

INTEGER I1 

C

:

:

C

C

 DATA MyData / 1.0, 2.0, 3.0 ,

+  -2.0, 3.5, 4.0 /

C----+--------------------------------------------------------------+

:

:

C

C Code Sections

C Input validation

 IF (CoeffsDim1.NE.3 .OR. SELECTOR.LT.1 .OR. SELECTOR.GT.2) THEN

Ifail = IFATAL

C Dialog issued by returning IFATAL

  CALL ACM_Print(0,'PARAM_PROC_1: Input error',0,0,0,0,0)

  CALL ACM_Print(0,'PARAM_PROC_1: NumCoeffs=%d, Selector=%d',

+ CoeffsDim1,Selector,0,0,0)

GOTO 999

 ENDIF

C

IF (ICALL.EQ.IOutputs .OR. ICALL. EQ.IBoth) THEN 

C Call for Outputs

*********************** BEGIN USER CODE

  DUMMY = 0

Ifail = IOK

*********************** END USER CODE

GOTO 999 

ENDIF ! Outputs 

C

IF (ICALL.EQ.IPreCall) THEN 

C Call On New Run (PRECALL)

*********************** BEGIN USER CODE

  DO I1=1, CoeffsDim1

   COEFFS(I1) = MyData(I1,SELECTOR)

  ENDDO

  DUMMY = 1

  Ifail = IOK

*********************** END USER CODE

GOTO 999 

ENDIF ! PreCall 

C

C

999 CONTINUE

:

:

C End PARAM_PROC_1

Open the Generate Code dialog box again, and this time use it to execute the makefile, which will compile and link the dll ParamProc1.dll. Note that, as the template FORTRAN now exists, leaving the ‘Templates’ checkbox enabled is not a problem – your code will not be overwritten. The wrapper code and makefile will be overwritten, however.

Drag two copies of the TestParamProc model onto the flowsheet. One will be called B1, and the other will be B2. Double click on B2 and change the value of Selector from 1 to 2.

Change the run Mode to Dynamic, and set a pause time of 10 and a communication interval of 0.1.

Create a flowsheet plot ‘Quadratic’. Add the variables B1.Y and B2.Y to it, and then click Run. The plot should show two curves like this:

Note: If you open the All Variables tables for B1 and B2, you will see that the values of the coefficients are different. However, if you Restart the simulation, change the value of B2.Selector to 1, and then run again, you will see that the values of the coefficients for B2 do not change. If you examine the Simulation Messages window, and the source of the procedure in \ParamProc1\Param_Proc.f, it is not difficult to see why. One simple way around this is to store the current value of the Selector input in a procedure workspace, and reload the coefficients when the selector changes. It is left as an exercise for the user to do this.

Deciding When To Use Procedures
See Also

When To Use Equations instead of Procedures

Examples

You can use procedures to interface to existing programs.

You can use procedures instead of equations in the following circumstances:

Use procedures when

For example

The equations have limiting cases that are undefined in computer arithmetic (such as zero divided by zero)

Evaluating the logarithmic mean temperature difference of a heat exchanger, when the end temperature differences are equal

Calculations in solving the equations are known to cause errors

In equilibrium flash calculations, where you have devised special-purpose procedures and do not want to reprogram them in the modeling language

You do not want to reformulate a model that already exists in a successful Fortran routine

Steady-state distillation routines

When To Use Equations instead of Procedures
Example

As a general rule, do not use procedures when the procedures' inputs are determined from their outputs, because this can result in poor convergence characteristics. Note this limitation when you are using library models that use procedures.

Note: You can use a procedure in the reverse direction of its intended use. However, you should do this only when no other acceptable alternative is available.

Preparing to Use Procedures and Functions
See Also

Defining The Input and Output Lists

Requesting a Workspace Array

Entering Code between TEXT and ENDTEXT Keywords

Debugging Subroutine Source Code

This section describes how to prepare to use procedures and functions.

Before writing any code, you need to decide:

What the inputs and outputs are to be

Whether you will be calculating and returning partial derivatives for the procedure call or whether you wish them to be determined numerically

Whether the procedure requires workspace (in which case it may require the PRECALL option setting to initialize it)

Whether the procedure needs to initialize itself (PRECALL option) and or finalize itself (POSTCALL option)

The language in which the procedure is to be implemented (Fortran is the default)

Where the DLL is to be stored (LIBRARY statement)

Where the source for the implementation is to be found (IMPLEMENTATION statement)

Tip: When you first generate the wrapper and template code, have PRECALL, POSTCALL and DERIVATIVES specified in the Options part of the procedure definition, if you intend to use them eventually. Having generated the code, you can comment them out in the definition (so that the procedure will not be Precalled, Postcalled, or asked for derivatives) until you are ready to write and test the relevant sections of your procedure.

The next steps are:

On the Tools menu, click Generate Code and use the Flowsheet Code Generation dialog box to create the template for your implementation, the wrapper and the makefile to build your DLL.

Edit the template file generated to add your code to perform the calculations of outputs (and possibly derivatives).

Build the DLL.

Debug and test the procedure.

Make the source of the implementation available by extracting it from the implementation file and putting it between the TEXT and ENDTEXT keywords

Important:

For a detailed description of the procedure and function definitions, see Defining External Procedures.

For information on generating DLLs, see Generate a DLL File for Procedures.

Defining The Input and Output Lists
Example

To define the inputs and outputs lists:

Look at the variables used as inputs and outputs in the procedure call in model.

List the types of the input and output variables in the Input and Output sections. (Do not list the variable names because the procedure section you are writing can be called from many models, where the variable names may differ).

To indicate that an input or output is an array, follow the argument type with parentheses (), and inside the parentheses put a list of comma separated asterisks, for example, for an array of RealVariables with 2 dimensions: RealVariable(*,*)

Note: All the variables that appear in calls to the same procedure in all models must have a related type. For example, in all models where the Enth procedure is called, the type of the variable being returned must be related to Enthalpy.

This mechanism avoids errors when you pass variables from a model to a subroutine. By checking the order, size, and type of variables being passed, the variables are checked for consistency with your subroutine call list.

Requesting a Workspace Array
If your procedure needs storage space that is preserved between procedure evaluations, you can request a workspace array of any size (depending on the memory of your computer), to be reserved for your code.

Entering Code between TEXT and ENDTEXT Keywords
If you want to include the code in the text definition, rather than compiling the code externally, enter it between the keywords TEXT and ENDTEXT.

Whether you include code within the TEXT and ENDTEXT keywords, or compile it outside Aspen Custom Modeler, the code is identical.

Example

The following example shows how to include code within the TEXT and ENDTEXT keywords:

IMPLEMENTATION: SUBROUTINE TEXT C This is the first line of the implementation, the C is the first character

C This is the last line of the implementation

ENDTEXT

Writing Procedure and Function Fortran
See Also

Run time Errors in User Procedures and Functions

Aspen Custom Modeler uses the compiler of the computer system on which you are running your simulation, so you can use any standard Fortran statements in your code.

When you write Fortran for use with Aspen Custom Modeler, note the following rules:

You can use any existing Microsoft-compatible Fortran package that can be invoked by subroutine calls.

When you are interfacing with existing packages, make sure that all common block data can be initialized.

Note: Normally, you should initialize common blocks by using executable code rather than BLOCK DATA routines. You can use the function DLLINITIALIZE for this purpose. For more information on using DLLINITIALIZE, see Defining External Procedures in the Modeling Language Reference.

The subroutine or function that is your entry point from Aspen Custom Modeler may call any number of other functions or subroutines as long as the object code for each is linked into your DLL.

The Fortran you want to use does not have to exist as source code, as long as a compiled version exists in the form of a Fortran object for which you have built a wrapper.

You may READ from or WRITE to files (including an output file or the screen) in the normal manner. All OPEN, CLOSE, READ, and WRITE statements must include either ERR or IOSTAT options so that errors do not cause the server to abort. Output to the screen (using PRINT or WRITE statements) will not be visible unless you have selected Visible Console. (To do this, from the Tools menu, click Server Settings.) Avoid input from the console.

All Fortran should be defensively coded to avoid causing run-time errors. Run-time errors may cause the simulation server to abort (which will in turn cause a Severe Communications Error dialog to be displayed) or they may raise an exception, which will be handled by ACM. In the latter case, you will get a dialog informing you which exception was raised, which procedure was being called, and the name of the dll. For information on how to ascertain what is causing Fortran run-time errors, see Runtime Errors in User Procedures and Functions.

To avoid confusion with Aspen Custom Modeler files, you must number file units from 110 upwards.

Ensure that all variables passed between your procedure (or function) and Aspen Custom Modeler are of the type double precision in your subroutine or function Fortran, except where you have given the type for the arguments in the Aspen Custom Modeler procedure definition as string or integer. For an integer, use INTEGER*4, and for a string, use either CHARACTER*(*) or CHARACTER*40.

For further details on generating DLLs for procedures, see Generate a DLL File for Procedures.

Runtime Errors in User Procedures and Functions
Run time errors in user procedures and functions, and in user code called by Simulation Access eXtensions, almost always result in the simulation server aborting. Even when the simulation console window is visible, you may not be able to read any error messages because the console will be closed as a side-effect of the abort. Write your code defensively, to avoid the possibility of causing run-time errors.

If you need to see the messages immediately before the abort, to determine the cause, you can set up visibility using the “Debug Output” console:

On the Tools menu, click Settings.

Click Debug; then  select the Show "Debug Output" console check box.

Click Apply | OK.

Restart your application.

Messages that would have gone to the simulation server's console are diverted to the GUI's console. This is not closed as a result of the server aborting, so you are able to see the messages.

Rules for Writing Procedures
Aspen Custom Modeler procedures are implemented as calls to Fortran subroutines. To supply your own procedures, you need some knowledge of Fortran coding and conventions. To help you produce an error-free implementation, you can create a template. For information on how to do this, see Create New External Code.

Note: Aspen Custom Modeler uses the following rules to generate calls to Fortran subroutines that represent procedures. When you write your own procedures, you must follow these rules, because Aspen Custom Modeler does not check your Fortran and errors can be difficult to trace.

The subroutine name is the procedure's Fortran name or the truncated procedure name. If the named subroutine is absent, or the name incorrect, the error appears as a missing subroutine during link-editing.

Make sure that the name of your subroutine is unique. For a list of subroutine names used by Aspen Custom Modeler, see the Physical Properties Reference.

If the argument is an array, follow it immediately by the integer size. Remember that a Fortran variable name may appear only once in a subroutine argument list—if you are passing a number of arrays with the same dimensions, receive the dimensions as different variables.

The subroutine may be called iteratively during the simulation, and should be as efficient as possible. For example, if you are using a procedure to solve a distillation column, use the WorkSpace option and initialize each call of the subroutine from the results of the previous one.

Do not modify the value of any input parameters in your subroutine. As Aspen Custom Modeler is unable to detect changes made to input parameters, at best the numerical methods will be unable to converge the system; at worst an invalid solution may result. If, and only if, the procedure is always torn, you may disregard this rule, but you must then specify ChangeInputs in the procedure definition options.

Ensure that the values returned by your Fortran are continuous and repeatable. That is, the routine must return the same result for a given set of input values. There must not be any form of hysteresis in the results. The outputs must also not depend on data from any source other than the procedure's arguments, such as may be passed from other procedures through COMMON blocks, or obtained by calling ACM_RQST or similar routines. If, and only if, the procedure is always torn, you must then specify AlwaysCall in the procedure definition options.

Also take care that the output values do not change infinitely quickly for a small change in an input value.

The procedure must return a status code. See Status return codes for user defined procedures.

For information on how Aspen Custom Modeler handles exceptions in user defined procedures, see Exceptions in user defined procedures.

Status return codes for user defined procedures
User-defined procedures must return a status code, in an argument conventionally called IFAIL. This must be a value between 1 and 4. Values not in this range are treated as if they were 4.

Value

Meaning

1

The procedure call was successful.

2

The procedure call was successful, but issued messages or warnings. Aspen Custom Modeler will name the procedure and equation to assist in the diagnosis of problems.

3

The procedure encountered one or more non-fatal errors, which mean that some or all of the outputs or derivatives could not be computed. Aspen Custom Modeler will name the procedure and equation to assist in the diagnosis of the error. The run will continue, but the integrator or solver may attempt to perturb the solution or cut its step to get around the error, which may result in the procedure being called again with different values for some or all of the inputs. If the error persists, the run will eventually be stopped.

4

The procedure encountered a fatal error. Aspen Custom Modeler will put up a dialog and stop the run. Procedures should only return a fatal error when the error cannot be resolved by adjusting the inputs; for example, if a necessary data file could not be found, or two arrays which should be the same size are not, or a control input parameter has an illegal value.

The procedure code generator will seed template code with PARAMETER variables in FORTRAN, or pre-processor defines in C/C++, with the above values.

Exceptions in user defined procedures
Aspen Custom Modeler normally calls user defined procedures with an exception handler installed. This means that any exception thrown or raised in a user procedure will be caught, so that a dialog, indicating the procedure at fault, can be issued, and the run stopped. For this reason, Aspen Custom Modeler always enables exceptions in the floating point processor, and user procedures that handle exceptions should always reset the floating point control register to its state on entry to the procedure, before returning from the procedure. Users should read and understand the documentation (in MSDN, for example) on exceptions and exception handling, and on the floating point control register, before attempting to handle them in their code.

If you need to debug your procedure code to investigate the cause of exceptions, you can stop the installation of the exception handler by selecting Debug User Code on the Debug tab of the Settings dialog box. You will need to exit and restart Aspen Custom Modeler for this to take effect.

Testing Subroutines and Procedures
See Also

Testing the Standalone Subroutines

Testing Procedures

Debugging Subroutines Source Code

Before you include a subroutine as an Aspen Custom Modeler procedure, you must test it thoroughly as a standalone subroutine.

After you have testing the standalone subroutine, you can then check that it works correctly as a procedure in Aspen Custom Modeler.

Testing the Standalone Subroutines
To test a subroutine, write it exactly as it will appear when called from Aspen Custom Modeler, and call it directly from another Fortran routine, which simply passes likely values to the subroutine and prints out the results returned from the subroutine.

Remember that Aspen Custom Modeler may run through a wide range of variable values during the search for a solution. Your subroutine must be able to handle all the variable values—particularly where denominators are zero or very small values; or where arguments to logarithmic functions, for example, become zero or negative.

Testing Procedures
When you incorporate procedures into a simulation, make sure you follow these guidelines:

Create the Procedure definition. Procedure definitions may exist on the database without being used, though when the procedure becomes part of the simulation, it must be error-free and consistent with other Aspen Custom Modeler input.

Check the names, types, and order of variables in the input and output variables lists against the input and output variable lists of the procedure calls in models (or other sections, in the case of functions).

Use variable upper and lower bounds in the Aspen Custom Modeler variable type definition, or when specifying variable values, to protect your procedure against infeasible input variable values (those that will cause denominators to be zero, for instance).

Debugging Subroutine Source Code
If your code is not behaving as you think it should, you can debug its execution as follows.

Build the DLL with debug compilation and linking options. (This is done automatically if you select the  Generate Debug code check box on Tools | Generate Procedure Code.)

Start Aspen Custom Modeler; then click Tools | Settings.

On the Debug tab, select Debug User Code. This will disable the installation of the ACM exception handler for procedures.

Close Aspen Custom Modeler. (This is required to have the setting change above to take effect.)

Start Aspen Custom Modeler and load your problem. Do not run it yet .

Start MS-Dev Studio.

In MS-Dev Studio, click Build->[Start Debug]->[Attach to process]; then select sim_server as the process to debug.

Start your run on the Aspen Custom Modeler window. The MS-Dev Studio window will be active as soon as the execution hits a breakpoint in your DLL code.

You can now start debugging it as you wish.

Creating Double Precision Variables
Most FORTRAN compilers use 4 byte (32 bit) REALS by default. This is generally insufficient for the accuracy required with normal Aspen Custom Modeler tolerances, and for this reason Aspen Custom Modeler works with double precision variables.

This means that all the REAL variables in your procedures and functions must be double precision. To do this, insert the following statement at the head of your routine:

IMPLICIT NONE

This statement means that you will declare all variables explicitly (which is good practice) and the compiler will treat undeclared variables as an error.

Make sure that you declare individual variables not as REAL, but as DOUBLE PRECISION variables. You will also have to declare all INTEGER and CHARACTER variables explicitly.

You must also specify functions as double precision on the function statement, as in the following example:

DOUBLE PRECISION FUNCTION PH (CONC, IFL)

For further general recommendations, see Writing Procedure and Function Fortran.

External Procedure Calling Conventions
You can interface any external language file for use in your simulations. You need to have a compiler for the language you use in writing procedures.

To ensure that the interface communicates data properly, you must adhere to a defined argument list and set of naming conventions. This allows the simulator to find your procedures by name in your DLL. The argument list for all procedures is always the same: in C, you will have to provide code to ‘unpack’ the procedure’s true arguments. In Fortran, this unpacking is done by a ‘wrapper’ subroutine that Aspen Custom Modeler can generate for you. Aspen Custom Modeler can also generate a template for the procedure itself, which you can fill out with the code you require. See Create New External Code for how to create and compile wrappers and templates for your procedures.

There are two different argument lists that can be used. These are selected using the COMPATIBILITY property in the procedure definition. The ACM2004 version has been designed to allow procedures to return Jacobian (derivative) information in a sparse format. To use the old format, use COMPATIBILITY: "ACM12". This is the default.

You can use two different naming conventions. Use the LANGUAGE property to define which of the two conventions you use in the external code.

The two conventions are:

Fortran

C

Note: The above links relate to the ACM 2004 and later format. For information about the ACM12 format, see:

Conventions for Fortran Procedure Calls (compatible with ACM12)
Conventions for C Procedure Calls (compatible with ACM12)

Conventions for Fortran Procedure Calls (compatible with ACM12)
See Also

Arguments needed by ACM 12 Compatible FORTRAN Procedures or Functions

When Fortran is used as the language for implementing an external procedure, two Fortran subroutines are required:

The first subroutine is a "wrapper" that takes a fixed number of arguments. This subroutine is called by Aspen Custom Modeler. For information on how the wrapper is created, see Create New External Code.

The second subroutine is the implementation of the external procedure. It takes a variable number of arguments. This subroutine is called by the wrapper with the required argument list. The following example shows the complete list of possible arguments and the definitions of the arguments for this second subroutine.

Example of Procedure Fortran

Procedure ABC

LIBRARY: "mydll";

IMPLEMENTATION: SUBROUTINE "abc";

LANGUAGE: "FORTRAN";

INPUTS : Temperature, Pressure, Molefraction(*);

OUTPUTS : Enth_mass;

OPTIONS: Derivatives,Precall,Properties;

COMPATIBILITY: "ACM12";

WORKSPACE: 100;

END

The generated template for the above definition is:

C Code for Procedure Definition ABC

C

SUBROUTINE ABC( 

& InArg1, 

& InArg2, 

& InArg3, InArg3Dim1, 

& OutArg1, 

& Ifail 

& ,PropsId 

& ,Workspace, WSsize 

& ,Derivs, NOut, NIn 

& ,ICall 

& ) 

IMPLICIT NONE 

C

C Declaration of input arguments

DOUBLE PRECISION InArg1 

DOUBLE PRECISION InArg2 

INTEGER InArg3Dim1 

DOUBLE PRECISION InArg3(InArg3Dim1) 

C

C Declaration of output arguments

DOUBLE PRECISION OutArg1 

C

INTEGER Ifail, IOK, IWARN, ISEVERE, IFATAL 

C Possible values for Ifail return flag

PARAMETER(IOK=1,IWARN=2,ISEVERE=3,IFATAL=4) 

INTEGER PropsId 

INTEGER WSsize 

DOUBLE PRECISION Workspace(WSsize) 

INTEGER NOut,NIn 

DOUBLE PRECISION Derivs(NOut,NIn) 

INTEGER ICall, IOutputs, IPreCall, IPostCall 

C Values for ICall:

PARAMETER (IOutputs=0, IPreCall=1, IPostCall=2) 

INTEGER IDerivs, IBoth 

PARAMETER(IDerivs=3, IBoth=4) 

C *******************************************************************

C WARNING: Do not attempt to access Derivs array unless ICall = IDerivs or IBoth

C It may not have been allocated by the caller when derivatives are not requested

C *******************************************************************

C

C ************** Put your FORTRAN code here **************

C

IF ( ICALL .EQ. IPreCall ) THEN 

C TODO: Put your PreCall code here

C Remember to change IFATAL to IOK

Ifail = IFATAL 

ENDIF 

C

IF ( ICALL .EQ. IOutputs .OR. ICALL .EQ. IBoth) THEN 

C TODO: Put your code to calculate output value(s) here

C Remember to change IFATAL to IOK

Ifail = IFATAL 

ENDIF 

C

IF ( ICALL .EQ. IDerivs .OR. ICALL .EQ. IBoth) THEN 

C TODO: Put your code to calculate derivative value(s) here

C Remember to change IFATAL to IOK

Ifail = IFATAL 

ENDIF 

C

C *************** End of User FORTRAN Code ***************

RETURN 

END 

The arguments you use for the procedure call depends on the input and output variables, whether there are array variables passed, and what options you choose for the procedure definition.

Arguments needed by ACM12 Compatible FORTRAN Procedures or Functions
Argument

Needed when

InArgn

One for every scalar input

InArgn, InArgnDim1…

One for every array input, followed by one sizing integer for each dimension of the array.

OutArgn

One for every scalar output

OutArgn, OutArgnDim1…

One for every array output, followed by one sizing integer for each dimension of the array

IFail

Always unless IMPLEMENTATION: Function

PropsId

Only when PROPERTIES option specified

WorkSpace, WSize

Only when WORKSPACE specified

Derivs, NOut, NIn

Only when DERIVATIVES option specified

ICall

Only if DERIVATIVES, PRECALL or POSTCALL options specified.

Note: It is possible for a procedure to have no inputs. A function has a single scalar ‘output’, the returned value.

Conventions for Fortran Procedure Calls (compatible with ACM2004)
When Fortran is used as the language for implementing an external procedure, two Fortran subroutines are required:

The first subroutine is a "wrapper" that takes a fixed number of arguments. This subroutine is called by Aspen Custom Modeler. For information on how the wrapper is created, see Create New External Code.

The second subroutine is the implementation of the external procedure. It takes a variable number of arguments. This subroutine is called by the wrapper with the required argument list. The following example shows the complete list of possible arguments and the definitions of the arguments for this second subroutine.

Example of Procedure Fortran

Procedure ABC

LIBRARY: "mydll";

IMPLEMENTATION: SUBROUTINE "abc";

LANGUAGE: "FORTRAN";

INPUTS : T AS Temperature, P AS Pressure, X AS Molefraction(NCOMP);

OUTPUTS : H as Enth_mass;

OPTIONS: Derivatives,Precall,Properties;

COMPATIBILITY: "ACM2004";

WORKSPACE: 100;

END

The generated template for the above definition is:

C Code for Procedure Definition ABC

C Template generated by ACM 2004, based on definition

C Edit only where indicated by 'TODO:' markers

C

SUBROUTINE ABC(ICALL, 

& T, 

& P, 

& X, NCOMP, 

& H, 

& IPROPS, 

& Workspace, WorkSize, 

& NonZeros, ROWS, COLS, DERIVS, 

& IFAIL) 

C

IMPLICIT NONE 

C

C Variable Declarations

C

C Input Variables

DOUBLE PRECISION T 

DOUBLE PRECISION P 

INTEGER NCOMP  

DOUBLE PRECISION X(NCOMP) 

C Output Variables

DOUBLE PRECISION H 

C Properties ID code

INTEGER IPROPS 

C Work Space

INTEGER WorkSize 

DOUBLE PRECISION Workspace(WorkSize) 

C Derivatives handling

INTEGER I, NonZeros, ROW, COL 

INTEGER ROWS(NonZeros), COLS(NonZeros) 

DOUBLE PRECISION DERIVS(NonZeros) 

C

C Array indexing variables

INTEGER I1 

C

C Parameter values for ICALL

INTEGER ICALL, IOutputs, IPreCall, IPostCall 

PARAMETER (IOutputs=0, IPreCall=1, IPostCall=2) 

INTEGER IDerivs, IBoth 

PARAMETER(IDerivs=3, IBoth=4) 

C

C Parameter values for IFAIL return code

INTEGER IFAIL, IOK, IWARN, ISEVERE, IFATAL 

PARAMETER(IOK=1, IWARN=2, ISEVERE=3, IFATAL=4) 

C

C Statement Functions

C Column numbers of Input variables

INTEGER T_Col 

T_Col() = 1 

INTEGER P_Col 

P_Col() =T_Col() + 1 

INTEGER X_First, X_Last 

X_First() =P_Col() + 1 

X_Last() =P_Col() + NCOMP 

INTEGER NCols 

NCols() = X_Last() 

C

C Row numbers of output variables

INTEGER H_Row 

H_Row() = 1 

INTEGER NRows 

NRows() = H_Row() 

C

C

C----+----------------------------------------------------------------+

C

C Make sure we always set IFAIL (to IFATAL by default)

IFAIL = IFATAL 

C

C Code Sections

C

IF (ICALL.EQ.IOutputs .OR. ICALL. EQ.IBoth) THEN 

C Call for Outputs

*********************** BEGIN USER CODE

C TODO: Insert your code to compute H here

H = 0 ! TODO 

C TODO: Remember to change IFATAL to IOK

IFAIL = IFATAL 

*********************** END USER CODE

IF (ICALL.NE.IBoth) GOTO 999 

ENDIF ! Outputs 

C

IF (ICALL.EQ.IDerivs .OR. ICALL.EQ.IBoth) THEN 

C Call for Derivatives

DO I=1,NonZeros 

ROW = ROWS(I) 

COL = COLS(I) 

IF (ROW.EQ.H_Row()) THEN 

IF (COL.EQ.T_Col()) THEN 

*********************** BEGIN USER CODE

C TODO: Derivative of H wrt T

DERIVS(I) = 0.0 

*********************** END USER CODE

ELSE IF (COL.EQ.P_Col()) THEN 

*********************** BEGIN USER CODE

C TODO: Derivative of H wrt P

DERIVS(I) = 0.0 

*********************** END USER CODE

ELSE IF (COL.GE.X_First() .AND. COL.LE.X_Last()) THEN 

*********************** BEGIN USER CODE

C TODO: Derivative of H wrt X(*)

DERIVS(I) = 0.0 

*********************** END USER CODE

ENDIF ! COL 

C

ENDIF ! ROW 

C

ENDDO 

C TODO: Remember to change IFATAL to IOK

IFAIL = IFATAL 

GOTO 999 

ENDIF ! Derivatives 

C

IF (ICALL.EQ.IPreCall) THEN 

C Call On New Run (PRECALL)

*********************** BEGIN USER CODE

C TODO: Insert your precall code here

C TODO: Remember to change IFATAL to IOK

IFAIL=IFATAL 

*********************** END USER CODE

GOTO 999 

ENDIF ! PreCall 

C

C

999 CONTINUE

RETURN 

END 

C End ABC

Arguments needed by ACM2004 Compatible Fortran Procedures or Functions
Argument

Needed when

ICall

Always.

InArgn

One for every scalar input

InArgn, InArgnDim1…

One for every array input, followed by one sizing integer for each dimension of the array.

OutArgn

One for every scalar output

OutArgn, OutArgnDim1…

One for every array output, followed by one sizing integer for each dimension of the array

IProps

Only when PROPERTIES option specified

WorkSpace, WSize

Only when WORKSPACE specified

NonZeros, Rows, Cols, Derivs

Only when DERIVATIVES option specified

IFail

Always.

Note: It is possible for a procedure to have no inputs. A function has a single scalar ‘output’, the returned value. The input and output arguments, and array sizing integers, may have names specified by the user in the procedure definition.

Annotated FORTRAN generated code for ACM2004 compatible procedure
This is an annotated version of FORTRAN template for the definition below, generated with the ‘Generate Debug Code’ box unchecked. The annotations are in italics.

Procedure Definition:

Procedure SCALE_SUM

LIBRARY: "mydll";

IMPLEMENTATION: SUBROUTINE "SCALE_SUM";

LANGUAGE: "FORTRAN";

INPUTS : Factor AS Real,

X as RealVariable(NX); 

OUTPUTS :Y as RealVariable(NY),

Sum as RealVariable; 

OPTIONS: Derivatives,Precall,Properties;

COMPATIBILITY: "ACM2004";

WORKSPACE: 100;

END

Template Code:

C Code for Procedure Definition SCALE_SUM

C Template generated by ACM 2004, based on definition

C Edit only where indicated by 'TODO:' markers

C

SUBROUTINE SCALE_SUM(ICALL,  

The ICALL argument is always present, and indicates the type of call.

& Factor, 

& X, NX,  

Factor and X are names specified by the user for the first two inputs. X is an array input – the user has supplied a name for the dimension, NX

& Y, NY, 

& Sum, 

Y is the name given in the definition for the array output, and NY is its size. Sum is a scalar output.

& IPROPS, 

PROPERTIES was specified as an option. IPROPS identifies the component list. This argument would be omitted if PROPERTIES was not specified.

& Workspace, WorkSize, 

User’s Workspace – omitted if there’s no WORKSPACE specified in the definition.

& NonZeros, ROWS, COLS, DERIVS, 

Derivative data – NonZeros is the number or non-zeros, ROWS and COLS give the row and column numbers of the derivatives requested. DERIVS will be used to return the derivative values. All of these would be omitted if DERIVATIVES is not given as an option.

& IFAIL) 

IFAIL is the return code from the procedure and is always present.

C

IMPLICIT NONE 

Specifying this means that all variables must be declared. This is good practice.

C

C Variable Declarations

C

C Input Variables

DOUBLE PRECISION Factor 

INTEGER NX 

DOUBLE PRECISION X(NX)  

Note that NX is not allowed to be zero here – a run-time error would result if it were (and ACM would report ‘Empty array’ errors).

C Output Variables

INTEGER NY 

DOUBLE PRECISION Y(NY) 

DOUBLE PRECISION Sum  

C Properties ID code

INTEGER IPROPS 

C Work Space

INTEGER WorkSize 

DOUBLE PRECISION Workspace(WorkSize) 

C Derivatives handling

INTEGER I, NonZeros, ROW, COL 

INTEGER ROWS(NonZeros), COLS(NonZeros) 

DOUBLE PRECISION DERIVS(NonZeros) 

These three arrays are all sized by NonZeros, the non-zero count, which is at most the number of inputs multiplied by the number of outputs. ROWS and COLS form a sparsity pattern. DERIVS(I) is the derivative of output variable ROWS(I) with respect to input variable COLS(I). The row and column numbers both start from 1.

C

C Array indexing variables

INTEGER I1 

C

C Parameter values for ICALL

INTEGER ICALL, IOutputs, IPreCall, IPostCall 

PARAMETER (IOutputs=0, IPreCall=1, IPostCall=2) 

INTEGER IDerivs, IBoth 

PARAMETER(IDerivs=3, IBoth=4) 

C

C Parameter values for IFAIL return code

INTEGER IFAIL, IOK, IWARN, ISEVERE, IFATAL 

PARAMETER(IOK=1, IWARN=2, ISEVERE=3, IFATAL=4) 

C

In order to make the code more readable, the column numbers of the input variables, and the row numbers of the output variables, are coded into statement functions.

C Statement Functions

C Column numbers of Input variables

INTEGER Factor_Col 

Factor_Col() = 1 

Factor is a scalar, occupying 1 column – the first.

INTEGER X_First, X_Last 

X_First() =Factor_Col() + 1 

X_Last() =Factor_Col() + NX  

X is an array, and we need to know the column numbers of its first and last elements. The first element is in the column after Factor.

INTEGER NCols 

NCols() = X_Last() 

C

C Row numbers of output variables

INTEGER Y_First, Y_Last 

Y_First() = 1 

Y_Last() = NY 

INTEGER Sum_Row 

Sum_Row() =Y_Last() + 1 

INTEGER NRows 

NRows() = Sum_Row() 

Note: It is often the case that some or all of the above statement functions are redundant, and can be commented out.

C

C

C----+----------------------------------------------------------------+

C

C Make sure we always set IFAIL (to IFATAL by default)

IFAIL = IFATAL 

Good practice – but you can remove this line from the final version of the code, provided you are sure that IFAIL is always set.

C

C Code Sections

C

IF (ICALL.EQ.IOutputs .OR. ICALL. EQ.IBoth) THEN 

C Call for Outputs

*********************** BEGIN USER CODE

C TODO: Insert your code to compute Y(*) here

DO I1=1,NY 

Y(I1)= 0 ! TODO 

ENDDO ! I1 

C

C TODO: Insert your code to compute Sum here

Sum = 0 ! TODO 

C TODO: Remember to change IFATAL to IOK

IFAIL = IFATAL 

The above could become:

Sum = 0.0

DO I1=1,NY

Y(I1) = Factor * X(I1)

Sum = Sum + X(I1)

ENDDO ! I1

IFAIL = IOK 

*********************** END USER CODE

IF (ICALL.NE.IBoth) GOTO 999 

If the call is for outputs only, we’re done. Otherwise we must be asking for outputs AND derivatives – so we fall through to the next segment.

ENDIF ! Outputs 

C

IF (ICALL.EQ.IDerivs .OR. ICALL.EQ.IBoth) THEN 

C Call for Derivatives

DO I=1,NonZeros 

ROW = ROWS(I) 

COL = COLS(I) 

ROW and COL tell us which derivative is to be returned in DERIVS(I). Note we don’t compute a derivative unless its asked for – we do not assume that all of them will be needed. Also, because the DERIVS array is zeroed out before each call for derivatives, there’s no need to do anything for derivatives that must be zero: such as for outputs with respect to inputs that must be fixed (parameters, for example).

IF (COL.EQ.Factor_Col()) THEN 

*********************** BEGIN USER CODE

C TODO: Derivative of Y(*) wrt Factor

DERIVS(I) = 0.0 

The derivative here is X(j) because Y(j) = X(j) * Factor, hence we could write:

   I1 = ROW – Y_First() + 1

  DERIVS(I) = X(I1)

*********************** END USER CODE

ELSE IF (COL.GE.X_First() .AND. COL.LE.X_Last()) THEN 

*********************** BEGIN USER CODE

C TODO: Derivative of Y(*) wrt X(*)

DERIVS(I) = 0.0 

Here, Y(i) only depends on X(j) if i and j are the same (this is quite a common situation), so we could write:

   IF ( COL-X_First() .EQ. ROW-Y_First()) THEN

   DERIVS(I) = Factor

   ENDIF

*********************** END USER CODE

ENDIF ! COL 

C

ELSE IF (ROW.EQ.Sum_Row()) THEN 

Here, we know SUM does not depend on FACTOR, so the derivative is always zero, thus we can simply remove the following block (up to and including the ELSE at the start of the next line). This is allowed because the caller will set all the elements of DERIVS to zero before calling us.

IF (COL.EQ.Factor_Col()) THEN 

*********************** BEGIN USER CODE

C TODO: Derivative of Sum wrt Factor

DERIVS(I) = 0.0 

*********************** END USER CODE

ELSE IF (COL.GE.X_First() .AND. COL.LE.X_Last()) THEN 

*********************** BEGIN USER CODE

C TODO: Derivative of Sum wrt X(*)

DERIVS(I) = 0.0 

Here, all the derivatives are all unity, as SUM = X(1) + X(2) .....

*********************** END USER CODE

ENDIF ! COL 

C

ENDIF ! ROW 

C

ENDDO 

C TODO: Remember to change IFATAL to IOK

IFAIL = IFATAL 

If you forget to replace IFATAL with IOK, the run will stop as soon as your procedure gets called

GOTO 999 

ENDIF ! Derivatives 

C

IF (ICALL.EQ.IPreCall) THEN 

C Call On New Run (PRECALL)

*********************** BEGIN USER CODE

C TODO: Insert your precall code here

Most likely, you need to initialise your workspace, set up the properties…

It is also good practice to validate the input values. Here, we need NX and NY to be equal (we save time by only checking in the precall), so we could write:

 IF (NX.NE.NY) THEN

C Issue dialog (first argument -1)

  CALL ACM_Print(-1,’SUM: The arrays are not the same size’)

  IFAIL = IFATAL

  GOTO 999

 ENDIF

C TODO: Remember to change IFATAL to IOK

IFAIL=IFATAL 

*********************** END USER CODE

GOTO 999 

ENDIF ! PreCall 

C

C

999 CONTINUE

RETURN 

END 

C End SCALE_SUM

Conventions for C Procedure Calls (compatible with ACM12)
When C is used to implement an external procedure, one procedure is required. This subroutine takes a fixed number of arguments but the arguments need to be unpacked for your use. For information on using Aspen Custom Modeler to generate the necessary files, see Create New External Code.

Given the following procedure definition:

Procedure ABC

LIBRARY: "mydll";

IMPLEMENTATION: SUBROUTINE "abc";

LANGUAGE: "C";

INPUTS : Temperature, Pressure, Molefraction(*);

OUTPUTS : Enth_mass;

OPTIONS: Derivatives,Precall,Properties;

COMPATIBILITY: "ACM12";

WORKSPACE: 100;

END

The following template code will be generated (with a different path in the include statement):

/*** Code for Procedure Definition ABC ***/

#include "E:\ACM\Examples\abc.h"

EXT_C_AS_C(void) ACM_Print(int status, char *_Zform, ...);

EXT_C_AS_C(int) ACM_Rqst(int *option, int *iinfo, double *xinfo, char **sinfo );

/* Values for ICALL */

#define OUTPUTS 0

#define PRECALL 1

#define POSTCALL 2

#define DERIVS 3

#define BOTH 4

/* Values for pIFail return code */

#define OK 1

#define WARN 2

#define SEVERE 3

#define FATAL 4

DLL_C_AS_F(void) ABC_C(

double *pInputs,int *pInSizes, 

double *pOutputs,int *pOutSizes, 

int *pInOffs,int *pOutOffs,int *pIfail, 

int *pPropsId,double *pWork,int *pWSize, 

double *pDeriv,int *pNOut,int *pNIn, 

int *pICall) 

{

/* Isolate local integers from FORTRAN-style interface */ 

int PropsId=*pPropsId, Wsize=*pWSize, NOut=*pNOut,NIn=*pNIn,ICall=*pICall; 

/* Note: NIn is number of input ELEMENTS (size of pInputs) */ 

/* NOut is number of output ELEMENTS (size of pOutputs) */ 

/* Derivatives at pDeriv, NOut outputs by NIn inputs */ 

/* Ifail status flag in *pIfail */ 

/* Properties identified by PropsId */ 

/* Workspace at pWork, size Wsize */ 

/* ICall flag in ICall */ 

/* Procedure input/output arguments access */ 

double IArg1 = pInputs[pInOffs[0]]; 

double IArg2 = pInputs[pInOffs[1]]; 

double *pIArg3 = (double *)(&pInputs[pInOffs[2]]); 

int IArg3Dims = 1;  

int IArg3DimsSizes[1] = {pInSizes[0]}; 

double *pOArg1 = (double *)(&pOutputs[pOutOffs[0]]); 

/************** Put your C code here **************/ 

if (ICall==PRECALL) { 

/* TODO: Put your PreCall code here */ 

*pIfail=FATAL;/*FATAL error (no code yet!)*/ 

} 

if (ICall==OUTPUTS || ICall==BOTH) { 

/* TODO: Put your code to calculate output value(s) here */ 

*pIfail=FATAL;/*FATAL error (no code yet!)*/ 

} 

if (ICall==DERIVS || ICall==BOTH) { 

/* TODO: Put your code to calculate derivative value(s) here */ 

*pIfail=FATAL;/*FATAL error (no code yet!)*/ 

} 

/*************** End of User C Code ***************/ 

}

Conventions for C Procedure Calls (compatible with ACM2004)
When C is used to implement an external procedure, one procedure is required. This subroutine takes a fixed number of arguments but the arguments need to be unpacked for your use. For information on using Aspen Custom Modeler to generate the necessary files, see Create New External Code.

Given the following procedure definition:

Procedure ABC

LIBRARY: "mydll";

IMPLEMENTATION: SUBROUTINE "abc";

LANGUAGE: "C";

INPUTS : T AS Temperature, P AS Pressure, X AS Molefraction(*);

OUTPUTS : H as Enth_mass;

OPTIONS: Derivatives,Precall,Properties;

COMPATIBILITY: "ACM2004";

WORKSPACE: 100;

END

The following template code will be generated (with a different path in the include statement):

/*

* Code for Procedure Definition ABC 

* Generated by ACM 2004 

*/ 

#include "E:\ACM\Examples\abc.h"

#include "atdll.h"

/* include any additional header files here */

/* Values for ICALL */

#define ICALL_OUTPUTS 0

#define ICALL_PRECALL 1

#define ICALL_POSTCALL 2

#define ICALL_DERIVS 3

#define ICALL_BOTH 4

/* Values for pIFail return code */

#define IFAIL_OK 1

#define IFAIL_WARN 2

#define IFAIL_SEVERE 3

#define IFAIL_FATAL 4

/*

* This function is EXPORTED from the DLL. 

* Do not change its name or signature. 

*/ 

DLL_C_AS_F(void) ABC_C(

int *pICall, 

double *pInputs,int *pInSizes, 

double *pOutputs,int *pOutSizes, 

int *pInOffs,int *pOutOffs, 

int *pPropsId,double *pWork,int *pWSize, 

int *pNonZeros, int *pRows, int *pCols, int *pUnused, double *pDerivs, 

int *pIfail) 

{

/* Variables used for array accessing */

int iDim1; 

/* Protect arguments from accidental change */

const int ICall = *pICall; /* type of call */ 

const int PropsId = *pPropsId; /* Properties Id */ 

const int WSize = *pWSize; /* Workspace size */ 

int NonZeros = *pNonZeros; /* non-zero count */ 

/* Input arguments */

const double T = pInputs[pInOffs[0]]; 

#define T_COL (pInOffs[0] + 1)

const double P = pInputs[pInOffs[1]]; 

#define P_COL (pInOffs[1] + 1)

double *pX = (double *)(&pInputs[pInOffs[2]]); 

#define X_FIRST (pInOffs[2] + 1)

#define XDims 1

int XDimsSizes[XDims] = {pInSizes[0]}; 

/* Output arguments */

double *pH = (double *)(&pOutputs[pOutOffs[0]]); 

#define H_ROW (pOutOffs[0] + 1)

/* Now the actual code of the procedure */

switch (ICall) 

{ 

case ICALL_OUTPUTS: 

case ICALL_BOTH: 

{ 

/* TODO: Put your code to compute outputs here */ 

/* pH is a scalar */ 

*pH = 0.0; 

*pIfail = IFAIL_FATAL; /* TODO: change to IFAIL_OK */ 

} /* end dealing with outputs */ 

if (ICALL_OUTPUTS==ICall) break; 

/* Fall through when ICall == ICALL_BOTH */ 

case ICALL_DERIVS: 

{ 

int i; 

/* TODO: Put your code to compute derivatives here */ 

for (i=0;i<NonZeros;i++) 

{ 

int iRow = pRows[i],iCol = pCols[i]; 

/* Note:

* It simplifies the code to deal with the arguments 

* in reverse order. 

*/ 

if (H_ROW == iRow) 

{ 

/* TODO: Disable this block if derivative of H wrt X is not active */

#if 1

if (X_FIRST <= iCol) 

{ 

pDerivs[i] = 0.0; /* TODO: Compute deriv of H wrt X here */ 

} /* end H wrt X */ 

#endif

/* TODO: Disable this block if derivative of H wrt P is not active */

#if 1

else if (P_COL == iCol) 

{ 

pDerivs[i] = 0.0; /* TODO: Compute deriv of H wrt P here */ 

} /* end H wrt P */ 

#endif

/* TODO: Disable this block if derivative of H wrt T is not active */

#if 1

else if (T_COL == iCol) 

{ 

pDerivs[i] = 0.0; /* TODO: Compute deriv of H wrt T here */ 

} /* end H wrt T */ 

#endif

} /* end H */ 

} /* end for i */ 

*pIfail = IFAIL_FATAL; /* TODO: change to IFAIL_OK */ 

} /* end dealing with derivatives */ 

break; 

case ICALL_PRECALL: 

{ 

/* TODO: Put your code to handle precall here */ 

*pIfail = IFAIL_FATAL; /* TODO: change to IFAIL_OK */ 

} /* end dealing with precall */ 

break; 

default: 

{ 

ACM_Print(-1,"ABC was called with ICall=%d, which was not handled", 

&ICall); 

*pIfail = IFAIL_FATAL; 

} 

break; 

} /* end switch ICall */ 

} /* end ABC_C */

Annotated C generated code for ACM2004 compatible procedure
This is an annotated version of C or C++ template for the procedure definition below. The template code is always C-compatible, even if the language specified is C++. (The language setting can affect the compiler options in the makefile, and the default file type - .c or .cpp - used by the code generator). The annotations are in italics.

Procedure Definition:

Procedure SUM_SCALE

LIBRARY: "mydll";

IMPLEMENTATION: SUBROUTINE "sum_scale";

LANGUAGE: "C";

INPUTS : Factor AS Real,

X as RealVariable(NX); 

OUTPUTS :Y as RealVariable(NY),

Sum as RealVariable; 

OPTIONS: Derivatives,Precall,Properties;

COMPATIBILITY: "ACM2004";

WORKSPACE: 100;

END

/*

* Code for Procedure Definition SUM_SCALE 

* Generated by ACM 2004 

*/ 

#include "E:\ACM\Examples\ sum_scale.h

The path in this include will of course vary.

#include "atdll.h"

/* include any additional header files here */

The following defines should be self-explanatory

/* Values for ICALL */

#define ICALL_OUTPUTS 0

#define ICALL_PRECALL 1

#define ICALL_POSTCALL 2

#define ICALL_DERIVS 3

#define ICALL_BOTH 4

/* Values for pIFail return code */

#define IFAIL_OK 1

#define IFAIL_WARN 2

#define IFAIL_SEVERE 3

#define IFAIL_FATAL 4

/*

* This function is EXPORTED from the DLL. 

* Do not change its name or signature. 

*/ 

DLL_C_AS_F(void) SUM_SCALE_C (

This is a C function pretending to be a FORTRAN one (so that it is simpler to find it), and it is exported from the DLL.

int *pICall, 

This argument is the ICALL value. Note that it is passed as a pointer, so that the signature of the function looks the same as the equivalent FORTRAN subroutine.

double *pInputs,int *pInSizes, 

Packed input data and array sizing information. Will need unpacking before use.

double *pOutputs,int *pOutSizes, 

Packed output data and array sizing information.

int *pInOffs,int *pOutOffs, 

Offsets to input and output variables.

int *pPropsId,double *pWork,int *pWSize, 

These are always passed in. However, they may not be used, depending on the procedure definition. pPropsId may be NULL, and pWork will be NULL if *pWSize is zero (that is, if there’s no WORKSPACE specified in the definition).

int *pNonZeros, int *pRows, int *pCols, int *pUnused, double *pDerivs, 

Derivative information. pRows, pCols and pDerivs may be NULL if derivatives are not required for the current call or if the definition does not specify DERIVATIVES. pDerivs[i] should be set (by the procedure) to the derivative of output variable pRows[i], with respect to input variable pCols[i]. pRows and pCols together represent a sparsity pattern. Row and column numbers start from 1. All these arrays are of size *pNonZeros, and are parallel.

pUnused is reserved.

int *pIfail) 

The returned status code – always present. It is passed as a pointer so it can be changed in the procedure.

{

/* Variables used for array accessing */

int iDim1; 

/* Protect arguments from accidental change */

const int ICall = *pICall; /* type of call */ 

const int PropsId = *pPropsId; /* Properties Id */ 

const int WSize = *pWSize; /* Workspace size */ 

int NonZeros = *pNonZeros; /* non-zero count */ 

This is done to prevent accidents. The first 3 should not be changed by the call, and so are declared const. NonZeros should not be changed by ACM2004 compatible procedures.

/* Input arguments */

const double Factor = pInputs[pInOffs[0]]; 

#define Factor_COL (pInOffs[0] + 1)

Factor is a scalar input and cannot be modified by the procedure (CHANGESINPUTS is not present in the definition), hence it is declared as const. The indices into pInOffs are constant and determined from the definition. The macro Factor_COL tells us which column Factor is in, which is 1 more than the offset to it.

double *pX = (double *)(&pInputs[pInOffs[1]]); 

pX points at the first element of X in the input array.

#define X_FIRST (pInOffs[1] + 1)

X_FIRST is the column number of the first element of X

#define XDims 1

XDims is the number of dimensions for X, which is fixed from the definition.

int XDimsSizes[XDims] = {pInSizes[0]}; 

XDimsSizes is a local array containing the sizing information for X. The passed-in array pInSizes contains the dimension information for the arrays in the input list, in order. X is the first array, and its first (and only) dimension is in pInSizes[0]. A second dimension, or the size of the first dimension of a second array, would be in pInSizes[1].

/* Output arguments */

double *pY = (double *)(&pOutputs[pOutOffs[0]]); 

#define Y_FIRST (pOutOffs[0] + 1)

#define YDims 1

int YDimsSizes[YDims] = {pOutSizes[0]}; 

Y is an output array, handled in much the same manner as the input array X.

double *pSum = (double *)(&pOutputs[pOutOffs[1]]); 

#define Sum_ROW (pOutOffs[1] + 1)

Sum is scalar and is handled much as for the input Factor. However, as its an output returned from the procedure, it cannot be const.

Note: It is usually easier to let the code generator write the array unpacking code for you, but remember that it will not overwrite an existing template.

/* Now the actual code of the procedure */

switch (ICall) 

{ 

case ICALL_OUTPUTS: 

case ICALL_BOTH: 

{ 

/* TODO: Put your code to compute outputs here */ 

/* pY is a 1-dimensional array */ 

for (iDim1=0;iDim1<YDimsSizes[0];iDim1++) 

{ 

pY[iDim1]=0.0; 

} 

/* pSum is a scalar */ 

*pSum = 0.0; 

*pIfail = IFAIL_FATAL; /* TODO: change to IFAIL_OK */ 

} /* end dealing with outputs */ 

The default here sets the returned values to zero, and returns a failure status. You need to replace this with the code that computes Y and Sum from Factor and X, and change the returned status to a success. We could replace the above with:

/* pY is a 1-dimensional array */

/* pSum is a scalar */

*pSum = 0.0;

for (iDim1=0;iDim1<YDimsSizes[0];iDim1++)

{

pY[iDim1]=Factor * pX[iDim1];

*pSum += pX[iDim1];

}

*pIfail = IFAIL_OK;

If we’ve only been asked for the outputs, break out of the switch and exit from the function.

if (ICALL_OUTPUTS==ICall) break; 

You may also wish to break here if you’ve set a failure return code.

/* Fall through when ICall == ICALL_BOTH */ 

case ICALL_DERIVS: 

{ 

int i; 

/* TODO: Put your code to compute derivatives here */ 

Note we only return the derivatives that the caller has asked for, and we don’t make assumptions about the order of the rows and columns.

for (i=0;i<NonZeros;i++) 

{ 

int iRow = pRows[i],iCol = pCols[i]; 

This gives us the row and column of the particular derivative the caller requires.

/* Note:

* It simplifies the code to deal with the arguments 

* in reverse order. 

Because then we only need to check for the first row or column in the tests

*/ 

if (Sum_ROW == iRow) 

{ 

/* TODO: Disable this block if derivative of Sum wrt X is not active */

#if 1

if (X_FIRST <= iCol) 

{ 

pDerivs[i] = 0.0; /* TODO: Compute deriv of Sum wrt X here */ 

In this case, the derivative is 1.0, as Sum = X[0] + X[1] ...

} /* end Sum wrt X */ 

#endif

/* TODO: Disable this block if derivative of Sum wrt Factor is not active */

In this case, Factor does not affect Sum, so we could either change #if 1 to #if 0, or we could remove the block completely. Either way, we are relying on the fact that the caller initialised the pDerivs array to zero before calling us.

#if 1

else if (Factor_COL == iCol) 

{ 

pDerivs[i] = 0.0; /* TODO: Compute deriv of Sum wrt Factor here */ 

} /* end Sum wrt Factor */ 

#endif

} /* end Sum */ 

{ 

/* TODO: Disable this block if derivative of Y wrt X is not active */

#if 1

if (X_FIRST <= iCol) 

{ 

pDerivs[i] = 0.0; /* TODO: Compute deriv of Y wrt X here */ 

Here, the derivative of Y[i] wrt X[j] is active only if i == j, and its value is Factor. Hence we could write:

if (iCol-X_FIRST == iRow-Y_FIRST)

pDerivs[i] = Factor;

} /* end Y wrt X */ 

#endif

/* TODO: Disable this block if derivative of Y wrt Factor is not active */

#if 1

else if (Factor_COL == iCol) 

{ 

pDerivs[i] = 0.0; /* TODO: Compute deriv of Y wrt Factor here */ 

The derivative of Y[j] wrt Factor is X[j], where j = iRow-YFIRST, so we write:

pDerivs[i] = pX[iRow-Y_FIRST];

} /* end Y wrt Factor */ 

#endif

} /* end Y */ 

} /* end for i */ 

*pIfail = IFAIL_FATAL; /* TODO: change to IFAIL_OK */ 

Don’t forget to set a proper return code when your derivative code is complete.

} /* end dealing with derivatives */ 

break; 

case ICALL_PRECALL: 

{ 

/* TODO: Put your code to handle precall here */ 

*pIfail = IFAIL_FATAL; /* TODO: change to IFAIL_OK */ 

For example, initialise your workspace, properties etc. Don’t forget to change the return code to success! Also, it is good practice to validate the inputs, and it often saves time to do most of this in the precall. In this case, we require the sizes of X and Y to be the same, so we could write:

  if (XDimsSizes[0] != YDimsSizes[0])

{

ACM_Print(-1, " SUM_SCALE was called with differently sized arrays");

*pIfail = IFAIL_FATAL;

}

} /* end dealing with precall */ 

break; 

default: 

{ 

You should never get into this segment, unless, for example, you added POSTCALL to the options in the definition and forgot to extend the code here. The -1 as the first argument causes the message to come up in a dialog.

ACM_Print(-1," SUM_SCALE was called with ICall=%d, which was not handled", 

&ICall);

*pIfail = IFAIL_FATAL; 

} 

break; 

} /* end switch ICall */ 

} /* end SUM_SCALE_C */