Defining the Flowsheet
See Also

Getting Started Building and Running a Process Model

For help on defining a flowsheet, see one of the following topics:

Creating a process flowsheet

Using heat, work, and power streams

Using pseudoproduct streams

Creating a batch flowsheet
Viewing a process flowsheet

Checking flowsheet completeness

Modifying a process flowsheet

Using flowsheet sections

Printing

For descriptions and information about the user interface, click the relevant topic:

Main window

Main Flowsheet window

Model Palette

Navigation pane and form windows

Creating a Process Flowsheet
See Also

What the Different Mouse Pointer Shapes Mean

To define a process flowsheet:

Select the unit operation blocks and place them in the Main Flowsheet window.

Connect the streams to the blocks.

After placing blocks and streams, you can:

Delete blocks and streams

Rename the blocks and streams

Change stream connections

You can also improve the appearance of your flowsheet in many different ways. For more information, see Modifying the Flowsheet.

When you are done building the flowsheet, you can lock the flowsheet to prevent accidental changes.

Mouse Pointer Shapes
When you are defining your flowsheet, the shape of the mouse pointer changes, indicating the particular mode Aspen Plus is in:

Pointer Shape

Function

Use

image\help0048.gif

Select mode

Click an object to select it.

Click and hold an object to enter Move mode.

Click and drag to select a region or to move or resize a region (The pointer changes to the Resize shape).

image\help0049_wmf.gif

Insert mode

Click to place a model of the type selected in the Model Palette.
Note After placing each block, you remain in Insert Mode until you click the Select Mode button image\help0050.gif in the upper left corner of the Model Palette.

image\help0058.gif

Single Block Insert mode

Click to place a model of the type selected in the Model Palette. After placing the block, you return to Select mode.

image\help0051.gif

Connect mode

Click a port to connect the stream to it.
Click a blank area of the flowsheet to place a feed or product.

image\help0052.gif

Move mode

Click and hold to move the object to a desired location.

image\help0053.gif image\help0054.gif

Port move mode

Click and hold to move the port to a desired location.
Drag the port away from the model to enter Disconnect mode.

image\help0055.gif

Disconnect mode

Click and hold on a stream while dragging it away from a block to disconnect it. Release the mouse button to enter Connect mode.

image\help0056.gif image\help0057.gif

Resize mode

Click and drag to resize a model or region.



Pin mode

Click the pin icon to pin or unpin a stream corner.

Use the Model Palette to select unit operation models to be used in the simulation.

Placing Blocks
See Also

Placing Multiple Blocks

To place a unit operation block in a simulation flowsheet:

Click a model category tab in the Model Palette to display a list of models in that category.

In the Model Palette, select the unit operation model that you want to place in your flowsheet. To choose a different icon for the model, click the down arrow, and click an icon to select it. The icon you select will remain the default icon when placing that model, until you change the icon.

Click and hold down the mouse button on the unit operation model, and drag it to the Main Flowsheet window.

The mouse pointer is in the shape of a box with an arrow, image\help0058.gif which indicates that only one block will be placed.

In the Main Flowsheet window, release the mouse button where you want to place the block.

If you have switched off Automatically Assign Block Names, you are prompted to enter the Block ID. For more information on IDs, see Options for Naming Blocks and Streams. The icon that you selected appears on the flowsheet.

Continue creating your flowsheet. To place another block repeat steps 1 through 5.

When you place or move blocks, the center of the block icon snaps to a grid location if Snap to Grid is enabled in Flowsheet Display Options.

Placing Multiple Blocks
To place multiple blocks of the same type in the flowsheet:

Click a model category tab in the Model Palette to display a list of models in that category.

In the Model Palette, select the unit operation model that you want to place in your flowsheet. To choose a different icon for the model, click the down arrow, and click an icon to select it. The icon you select will remain the default icon when placing that model, until you change the icon.

Click the unit operation model (click the icon then release the mouse button.)

The pointer appears in the shape of a crosshair, representing Insert mode.

In the Main Flowsheet window, click where you want to place the block. The icon that you selected appears on the flowsheet.

If you have switched off Automatically Assign Block Names, you are prompted to enter the Block ID. For more information on IDs, see Options for Naming Blocks and Streams. The icon that you selected appears on the flowsheet.

Continue creating your flowsheet.

If you want to

Do this

Place another block for the same model

Click in a new location on the flowsheet.

Place a block for a different model

Repeat steps 1 to 4.

Stop placing blocks

Click the Select Mode button image\help0059.gif in the upper left corner of the Model Palette. This turns off insert mode. A green border indicates the type of block you are currently inserting, or indicates select mode.

When you place or move blocks, the center of the block icon snaps to a grid location if Snap to Grid is enabled in Flowsheet Display Options.

Placing Streams and Connecting Blocks
See Also

Placing Streams and Connecting Blocks Using Drag and Drop

Using Heat, Work, and Power Streams

Using PseudoProduct Streams

To place a stream:

Click the stream icon on the left side of the Model Palette.

If you want to select a different stream type (Material, Heat, Work, or Power), click the down arrow next to the icon and choose a different type.

image\help0063.gif

Move the mouse pointer to the Main Flowsheet window. For each block in the Main Flowsheet window, all ports that are compatible with that stream type are highlighted. See example.

image\help0064.gif

Ports that must have at least one stream connected are shown in red. Other optional ports are shown in blue. If you position the mouse over a displayed port, the arrow is highlighted and a tooltip with the description of the port appears.

image\help0065.gif
Click a highlighted port to make the connection.

If the port is not at the location you want it, click and hold the mouse button on the port. When the mouse pointer changes to the port move shape (image\help0060.gif image\help0061.gif) drag to relocate the port on the icon.

Note: Hierarchy blocks and some user models have universal ports, possibly in addition to some specific stream ports. A universal port represents multiple ports inside the block which the stream can connect to. When you connect to a universal port, select the port to connect to. If you select NEW_IN$, NEW_OUT$, NEW_WSI$, NEW_WSO$, NEW_HSI$, or NEW_HSO$, this creates a new port of the type (material, work, heat) and connection (in or out) indicated:

Material

Work

Heat

In

NEW_IN$

NEW_WSI$

NEW_HSI$

Out

NEW_OUT$

NEW_WSO$

NEW_HSO$

Repeat step 3 to connect the other end of the stream.

Only those ports that you can connect the other end of the stream to remain highlighted. For example, if you connect a stream to an outlet port, inlet ports remain highlighted but outlet ports are no longer highlighted.

If you have switched off Automatically Assign Stream Names, then you will be prompted for a Stream ID.

To place one end of the stream as either a process flowsheet feed or product, click a blank part of the Main Flowsheet window.

If the stream's source is already connected, then a product will be placed. If the stream's destination is already connected, then a feed will be placed. By default, if you click a blank part of the window before connecting either stream end, a feed is placed.

To stop placing streams click the Select Mode button image\help0062.gif in the upper left corner of the Model Palette:

To cancel connecting the stream at any time, press ESC or click the right mouse button.

To place another stream of the same type, repeat steps 3 through 6.

To place a stream of a different type, repeat steps 2 through 6.

Placing Streams and Connecting Blocks Using Drag and Drop
You can also use drag and drop to connect streams. The procedure is similar to the one described above.

Select the stream type you want, by clicking the Material Stream icon in the Model Palette or using the down arrow next to the icon to select a Heat, Work, or Power stream.

Click and hold down the mouse button on the stream icon.

Tip: Hold down the CTRL key during drag and drop to remain in Insert mode after completing connections for the first stream.

Move the cursor to the Main Flowsheet Window.

The compatible ports are highlighted.

Release the mouse button on:

A port to make a connection

A blank part of the flowsheet to place a feed

Move the mouse and click:

Another highlighted port to connect the other end of the stream

A blank part of the flowsheet to place a product

Using Heat, Work, and Power Streams
You can define heat streams, work streams, and power streams to transfer heat and power between blocks, or for duty and power specifications. Examples:

Heat streams transfer duty. You can use a heat stream to specify the duty for a one-sided heat exchanger block or for heating or cooling duty applied to another kind of block.

Work streams represent physical work, such as transferring power from a turbine to a compressor.

Power streams represent electrical power. You can use a power stream to specify the electrical input to an Electrolyzer block.

When creating a heat, work, or power stream:

Select the heat, work, or power icon from the Model Palette.

Use a port labeled Heat Stream(s), Work Streams(s), or Power Stream(s).

Heat, work, and power streams appear as dashed lines in the flowsheet.

Note: Heat streams report beginning and end temperatures for the heat duty of the source block. Heat streams do not check the temperature at their destination. It is your responsibility to ensure the heat flow with a heat stream is feasible.

Using PseudoProduct Streams
You can define pseudoproduct streams to represent column internal flows, compositions, thermodynamic conditions streams for some unit operations models.

Pseudoproduct streams from one block may be an inlet to another block. Using a pseudo stream as a block inlet results in an imbalance in the overall flowsheet material and energy balance report.

To define a pseudoproduct stream:

When creating the stream select a port labeled Pseudo Streams.

Options for Naming Blocks and Streams
By default, Aspen Plus automatically assigns IDs to blocks and streams. You can either:

Supply prefixes for the automatic naming

Turn off the automatic naming and be prompted for a name for each block and stream as you place it

To specify the naming options:

From the File menu, click Options.

Click the Flowsheet tab.

Select the Automatically Assign Block Name with Prefix and/or Automatically Assign Stream Name with Prefix check box(es).

If desired, you can also type a prefix in the field. A sequential number is added to the prefix. If no prefix is supplied, the names for blocks or streams are purely numeric.

For more information on flowsheeting options, see Using the Flowsheet Tab.

Note: You cannot use the names TOP and DATA for streams or blocks. These names are reserved for internal Aspen Plus objects.

Creating a Batch Flowsheet
See Also

Running Batch Flowsheets

Creating Batch Plots

Search the Knowledge Center for information on:

Batch Flowsheets: Build Integrated Processes

Batch Reactors: Master Design and Recipes

You can change the top-level flowsheet or the flowsheet from any Hierarchy block into a batch flowsheet. With the flowsheet open, click the Batch tab of the ribbon, and in the Process Type group click Batch. You can also change back to a continuous flowsheet by clicking Continuous in this group. If the flowsheet contains operations incompatible with batch flowsheets (or incompatible with continuous flowsheets, if changing to continuous), the process type will not be changed and a dialog box will appear describing the incompatibilities.

You can also create a new simulation with a batch top-level flowsheet by selecting New Batch Process in the New screen when creating the new simulation, or by selecting one of the templates with Batch in its name.

Unit Operations

Only certain unit operations are compatible with batch flowsheets. These are blocks whose behavior is unchanged in batch operation and those which inherently support batch operation. These are:

Model Palette Tab	Blocks
Mixers/Splitters	Mixer, FSplit
Separators	Flash2, Flash3, Decanter, Sep, Sep2
Exchangers	Heater, HeatX
Columns	RadFrac
Reactors	RStoic, RGibbs, RPlug, RCSTR
Pressure Changers	Pump, Compr, Valve
Manipulators	Mult, Dupl, Calculator, Transfer
Solids	Crusher, Classifier, Dryer
Controllers	PID, Comparator, Multiply, Ratio, SplitRange, DeadTime, Lag
Batch Models	BatchOp
User Models	Hierarchy
ACM Models	Any installed ACM models
Place these unit operations onto batch flowsheets in the same way you place operations onto continuous flowsheets, by clicking the model in the Model Palette and then clicking the flowsheet, or by drag-and-drop.

Using RadFrac in a Batch Flowsheet

All features of RadFrac are currently supported in the batch flowsheet. RadFrac can be used to model a batch distillation column for certain for certain systems such as polymers that are not supported in BatchSep which is the built-in batch distillation model available in Aspen Plus. However, certain limitations need to be kept in mind in order to use RADFRAC to model a batch distillation column:

RadFrac is an instantaneous column model and does not model the dynamic effects associated with holdups in the reboiler, stages, or the reflux drum.
An effective way to use RadFrac to model batch distillation is to use the Reboiler=None option and use a BatchOp block to model the pot. Connect the BatchOp vent stream to a RadFrac bottom stage feed, and connect the RadFrac bottoms stream to the BatchOp continuous feed.



If the dynamic effects in the overhead condenser/drum can be ignored, using a RadFrac with a condenser will lead to more robust convergence behavior.
If the dynamic effects in the overhead condenser/drum are important, use the Condenser=None option, a Flash2 or Flash3 block to model the condenser, and a BatchOp block to model the reflux drum. This option is also recommended if the charge contains a significant amount of non-condensibles.
Other Unit Operations

BatchOp is a model designed to support batch reaction and crystallization within the batch flowsheet environment. It is only permitted in batch flowsheets.

Dryer has a Batch operation mode which is usable only in batch flowsheets. This mode supports only convective dryers.

The controllers are only permitted in batch flowsheets.

Model Analysis Tools

Data Fit and Sensitivity can be used in batch flowsheets, but the other model analysis tools cannot. The sequential-modular convergence blocks like Secant and BOBYQA are not available in batch flowsheets; the batch flowsheet uses its own convergence strategy with options available under Convergence | Batch Options.

Streams

Connect batch unit operations with material streams as you normally do. Streams connected to ports labeled as Charge indicate one-off batch charge streams. Streams connected to other ports are treated as continuous, but may be manipulated by operations of a unit procedure. There is a built-in stream group for Charge streams. You can configure it on the Setup | Stream-Groups form to specify the appearance of charge streams, in order to distinguish them from other streams.

Some batch operations use Control Signal connections. These connections are established within the forms of each controller model using the Find Variables dialog box. Control signals provide direct connections between a variable in one model and a variable in another model. They appear on the flowsheet using the options specified for Connections in File | Options | Flowsheet Display Options, but unlike connections, control signals cannot be hidden.

Limitations of Batch Flowsheets

Batch flowsheets cannot contain unit operations other than those listed above, nor can they contain Hierarchy blocks with continuous flowsheets. A batch flowsheet can have nested Hierarchies with batch flowsheets and these will be solved together with the parent batch flowsheet.

Copy and paste operations work as usual between flowsheets of the same type. Between flowsheets of different types, the paste is only permitted if all items work in the destination flowsheet. Hierarchy blocks cannot be pasted between batch and continuous parent flowsheets. The Move Selection command has the same restrictions as copying and pasting; in addition, if you move an object referenced by a controller out of scope (to anywhere other than the hierarchy containing the controller or a child hierarchy), those variable links will be broken.

Exported flowsheets can only be imported into a Hierarchy of the same flowsheet type as the original.

Batch flowsheets cannot be used with the Activated Analysis features on the Activation Dashboard, nor in the Safety Analysis environment, nor with equation-oriented modeling.

Unit Procedures

Within a batch flowsheet, you can create unit procedures.

Click Unit Procedures on the Batch tab of the ribbon to open the Unit Procedures object manager.
Click Add New Unit Procedure to create a unit procedure.
Within the unit procedure, specify a Start Criterion. The unit procedure can either begin at a specified time after the start of the batch, or when a process variable reaches a specified value from above or from below.
Click Add New Operation to create an operation.
Within the form for the operation, specify one or more Operating Changes. Each operating change sets a flowsheet variable to a particular value, possibly with a Ramp Time in which it is changed linearly from the previous value to the new value.
Also on the form for the operation, specify a Stop Criterion. The operation can end a specified time after it starts, or a specified time after the start of the batch, or when a process variable reaches a specified value from above or from below.
Return to the form for the unit procedure. You can specify additional operations. You can also specify to Terminate batch at the end of the unit procedure.
Operations within a unit procedure run sequentially; the first one starts when the unit operation starts, and subsequent ones start when the previous one ends. You can use the arrows next to the table of operations to reorder the operations. Unit procedures by default run in parallel. However, you can specify different behavior using the Start Criterion.

Note: You cannot select a variable from a controller other than PID.

Not all variables in RadFrac are available for use in unit procedures. The variables available for operating changes include these input variables:

Specified flow rate of a product stream, total distillate, or bottoms, on mole, mass, or standard volume basis
Specified reflux ratio, boilup ratio, distillate-to-feed ratio, and bottoms-to-feed ratio on mole, mass, or standard volume basis
Specified pressure of any stage, pressure drop per stage, or pressure drop for the entire column
Specified condenser temperature or heat duty
Specified reflux temperature or degrees subcooling for subcooled reflux
The variables available for specifying start/stop criteria include these calculated variables:

Condenser duty, reboiler duty, subcooled reflux duty, subcooled temperature
Reflux ratio, or boilup ratio on mole, mass, or standard volume basis, or molar free-water reflux ratio
Flow rate of total distillate, free-water distillate, bottoms, reflux, or boilup on mole, mass, or standard volume basis
Pressure drop per stage, for any specific stage, for the condenser, or for the entire column
Heat loss for the column
Distillate vapor fraction on molar, mass, or standard volume basis
Temperature, pressure, or heat duty for any stage
Molar flow rate of total liquid, 1st liquid, 2nd liquid, or vapor from any stage
Mass or volume flow of liquid from or vapor to any stage
Mole or mass fraction of a component in the total liquid, 1st liquid, 2nd liquid, or vapor phase on a stage
Jet flood (trays) or capacity with constant L/V (packing) in percentage for each stage
Downcomer choke flood in percentage, for any panel, or for lattice downcomers for the longest, shortest, and median downcomer.
In the batch dryer, these input variables are available for use in operating changes (when input options make them available). Dryer has many other variables not related to batch modeling, so in the Find Variables dialog box, be sure to look for the ones with the all-caps names given below in parentheses:

Sherwood number (SH-NUMBER), mass transfer coefficient (BETAG), (mass transfer coefficient)*(surface area) (BETAGA), or NTU (NTU)
Exponent N (LEWIS-N) and heat transfer coefficient scale factor for calculating heat transfer coefficient from Lewis number (HTC-FACTOR)
Heat transfer coefficient (ALPHAG)
Indirect heat input (INDIRECTHEAT) and fraction of heat input to solids (INDHEATSFRAC)
Heat transfer coefficient between wall and gas (INDHTRANSWG), heat transfer coefficient between wall and solids (INDHTRANSWS), heat transfer area for indirect heating (IINDHEATAREA), wall temperature for indirect heating (INDHEATTEMP)
These output variables in batch dryer are available for specifying start/stop criteria:

Heat transfer coefficient (CALCHTC)
Lewis number (CALCLEWISNO)
Exhaust gas temperature (EXGASTEMP)
Outlet solids temperature (EXSOLSTEMP)
Overall evaporation rate (SOLEVAPRATE)
Outlet solids and vapor moisture content (SOLMCONTOUT and VAPMCONTOUT)
Vapor temperature and moisture content at adiabatic saturation (TVAPADSAT and TVAPADMCONT)
The Unit Procedures Diagram

At the bottom of the Unit Procedures object manager, the Configure sheet of every unit procedure, and the Configure sheet of each operation is a diagram showing a visual representation of the batch schedule, as described in the input. This diagram shows when each procedure runs relative to all other procedures. Initially, this diagram is displayed in a collapsed state, where all the operations in each unit procedure are displayed in one line:



If you click the triangle icon to the left of each unit procedure, it expands to show the operations within it:



The rectangles represent operations which take a specified time and the length of each rectangle is in proportion with this time. The diamond icon represents an operation whose duration depends on a process variable and thus is determined during the run.

Note: This diagram represents the input times. When there are triggered operations, some operations may not appear at their correct times relative to operations in other unit procedures. A similar diagram showing the results (and therefore having the actual timing for each operation) is the Unit Procedure Operating Schedule available by clicking Operating Schedule in the Batch tab of the ribbon.

If the unit procedure does not start at time 0, a shaded rectangle (for a specified delay) or diamond (for a delay based on a process variable) appears:



When you hover the mouse over the name of a unit procedure, the description of that procedure (if provided) is shown. If you hover over the name or one of the rectangle or diamond icons, a summary of the operation or delay it represents is shown. You can click each rectangle and diamond icon corresponding to an operation to jump to the form for that operation.

When you are ready, you can run the batch flowsheet.

Find Variables Dialog Box
Use this dialog box to locate variables within a stream or unit operation within the batch flowsheet.

Use the leftmost box to choose the type of object to select variables from, such as blocks or streams. The objects of the selected type appear in the second box. If you check Search in Hierarchies then the list includes variables from nested levels of hierarchy.

Note: You cannot select a variable from a controller for plots, and only from PID for unit procedures.

Click a block, stream, etc. in the second box. In large flowsheets you may want to filter the list using the Search box at the top. Only items of the selected type whose names contain the text you type are shown. The variables in the selected object appear in the third box.
Under Variables, you can choose to filter the displayed variables to show only input variables, or based on a specified Physical Type. Above the list of variables you can enter text to filter the variables by name. Click one or more variables in the list, and click  to add them to the list of selected variables. You can click the selected variables and click  to deselect them.
Click Done.

Move Conflict Resolution Failures Dialog Box
This dialog box appears when you move a block or stream referenced by a controller out of the scope accessible to the controller, for instance, if you move it into a parent level of hierarchy or another hierarchy which resides within the parent level. (Controllers can access variables from child levels of hierarchy.)

It lists all variable-controller links which will be broken by the move. If you proceed with the move, those controllers will become incomplete.

Click OK to proceed with the move, or Cancel to leave the block(s) and/or stream(s) where they were.

Viewing The Flowsheet
To open the Main Flowsheet window, in the View tab of the ribbon click Flowsheet.

If your flowsheet contains more than a few blocks, your workspace will soon be full.

Sometimes block and stream IDs appear off the screen, so it is difficult to locate a particular block or stream.

To display a block that is off the screen or a specific part of the flowsheet, you can use the:

Zoom level

Scrollbars

Navigation Pane

Find Object command

Bookmarks

Pan

Adjusting the Zoom Level
To change your view of the flowsheet by zooming in any of these ways:

From the View tab of the ribbon, in the Zoom group, click the command you require.

Position the mouse pointer in an empty area of the Main Flowsheet window and click the right mouse button, then click a command.

Roll the mouse wheel.

At the lower right corner of the main window, click the zoom value or click and drag the zoom slider.



Command

Description

Zoom, or click the Zoom value

Lets you choose the zoom level from a set of common values, or enter a custom value.

Zoom In

Magnify the flowsheet by the Zoom scale factor.

Zoom Out

Shrink the flowsheet by the Zoom scale factor.

Zoom to Fit

Show the full flowsheet.

Roll mouse wheel up or click + next to the zoom slider

Magnify the flowsheet by a small amount.

Roll mouse wheel down, or click - next to the zoom slider

Shrink the flowsheet by a small amount.

Click and drag the zoom slider

Quickly adjust the zoom to a desired size.

With the view zoomed in, you can display a specific part of the flowsheet by using the scrollbars.

Adjust the effect of Zoom In and Zoom Out by changing the value of the Zoom Scale Factor in Flowsheet Display Options.

Using the Scrollbars
If you are working in a large flowsheet, the block you want to connect to may be off the screen. You can use the scrollbars to display:

A block that is off the screen

A specific part of the flowsheet

To use the Flowsheet scrollbars:

Click a scrollbar arrow.

The amount that this moves the view is determined by the Scroll Step Size in Flowsheet Display Options.

– or –

Click between the slider and an arrow.

This moves the view by a set amount.

Using the Navigation Pane to Find Blocks in a Large Flowsheet
If you are working in a large flowsheet, it may be difficult to locate a particular block. You can use the navigation pane to find a block:

In the navigation pane, expand the Blocks folder.

Select the block that you want to find.

Return to the Main Flowsheet window, without clicking within it. You could click its tab, or have the flowsheet and form open side by side.

The block you selected is highlighted.

Press CTRL+HOME to center the view on that block.

Click an empty part of the flowsheet and click with the right mouse button, and from the menu that appears, click Zoom In if you want a closer view.

Using Find Object
See Also

Search the Knowledge Center for information on:

How to Use the Find Tool in Aspen Plus

If you are working in a large model, it may be difficult to locate a particular block, stream, or other object. You can use the Find Object command to help find an object:

Right-click a blank area of the flowsheet and then click Find Object. The Find Object window appears.

Initially, the search is set to Plant, the top level of hierarchy encompassing the entire project. You can limit the search by selecting a hierarchy or a folder representing a specific kind of object from the tree at the left. If you want to limit the search to only the selected hierarchy, clear the Search in Hierarchies box; with the box checked, the search also looks inside deeper hierarchy levels.

Type a name or partial name in the search box at the top. As you type, objects whose names contain the string typed so far as listed in the box below, along with their types and full hierarchical names.

Move the mouse over any search result. A tooltip will appear containing the description and status of the object.
Click the short name in any of these search results to jump to that object in the flowsheet, or open the default form for objects not displayed on the flowsheet.

The search includes most named objects in the current environment. In addition to blocks and streams, you can find Calculators, Design Specs, Reaction blocks, etc. AI Training and some other objects not accessible via automation are not accessible here. Find Object is also available in the Properties environment where it is limited to the kinds of objects available in that environment.

Managing Flowsheet Views
See Also

Creating a Flowsheet View

Accessing a Saved Flowsheet View

If you are working in a large flowsheet, there may be sections that you want to look at frequently. Use the Flowsheet Views group of the View tab of the ribbon to save these views.

Creating a Flowsheet View
To create a view for later use:

While in Select mode, click and drag to select an area of the flowsheet.

In the View tab of the ribbon, in the Flowsheet Views group, click Add.

Type a name for the view in the Name box, then click OK to add it to this list.

Tip: You can also press F3 to access the Manage Views dialog box. Here, type the name of the desired view, then click Add. You can also use this dialog box to delete any unwanted view previously saved.

Accessing a Saved Flowsheet View
To go to a view previously saved:

In the View tab of the ribbon, in the Flowsheet Views group, click Recall.

From the menu that appears, click the name of the desired view.

The flowsheet zooms and/or scrolls to the selected view.

Tip: You can also press F3 to access the Manage Views dialog box. Here, click the name of the desired view, then click Go To. You can also use this dialog box to delete any unwanted view previously saved.

Using Pan
Use Pan to select a view of the flowsheet at the current zoom level.

In the an empty area of the flowsheet, click the right mouse button.

From the menu that appears, click Pan.

A full view of the flowsheet appears and a dashed rectangle appears around the mouse pointer.

Move the rectangle to an area that you wish to show, and click the left mouse button.

To cancel pan, click the right mouse button.

Checking Flowsheet Completeness
See Also

Completion Status for the Flowsheet

To check completeness for the entire flowsheet, look at the status indicator in the bottom right of the main window.

If the status is Flowsheet Not Complete, then flowsheet connectivity is incomplete because:

Additional streams must be connected to one or more blocks in the flowsheet.

Streams have been disconnected but not reconnected.

No blocks have been defined.

To find out why the connectivity is incomplete:

Click image\help0067.gif on the Quick Access Toolbar.

A Flowsheet Not Complete window indicates what is required to complete the flowsheet definition.

If any other status message appears, then flowsheet connectivity is complete. All required streams are connected to flowsheet blocks.

Modifying the Flowsheet
You can modify the flowsheet (whenever it is not locked) to:

Change its connectivity

Improve the appearance

Copy blocks and streams

Paste blocks and streams

Note: If the flowsheet is locked, you cannot do any of these things. When the flowsheet is locked, a green cross-hatched border appears around the edge of the Main Flowsheet window.

Changing Flowsheet Connectivity
To change the flowsheet connectivity, you can:

Delete blocks and streams

Copy and paste blocks and streams

Rename blocks and streams

Change stream connections

Insert a block into a stream

Break and join streams

Note: If the flowsheet is locked, you cannot change flowsheet connectivity. When the flowsheet is locked, a green cross-hatched border appears around the edge of the Main Flowsheet window.

Deleting Blocks and Streams
To delete a block or stream:

Click the block or stream to select it.

Click with the right mouse button on the block or stream.

From the popup menu that appears, click Cut.

When prompted, click OK.

Tip: You can also select the block or stream, then press Delete on the keyboard.

Note: If the flowsheet is locked, you cannot delete blocks and streams. When the flowsheet is locked, a green cross-hatched border appears around the edge of the Main Flowsheet window.

Note: If you select all blocks and streams with the command or CTRL+A shortcut, this only selects visible objects. Any Design-Spec, Calculator, Transfer, and Measurement blocks not shown on the flowsheet because of Flowsheet Options will not be selected for deletion.

Copying Blocks and Streams
See Also

Pasting Blocks and Streams

To copy a block or stream:

In the flowsheet, select the block or stream you want to copy by clicking on it.

Click the right mouse button on the block or stream.

From the menu that appears, click Copy.

Tip: In the flowsheet, you can also copy a selected block or stream by pressing CTRL + C on the keyboard, or use the Copy command from the Clipboard group of the Home tab of the ribbon.

Note: Cut works the same way as Copy, except that it also deletes the object(s) you cut.

All information containing in the object is copied with the object.

You can copy and paste between different simulations open simultaneously, provided that they are running in the same version of Aspen Plus.

You can also copy and paste many kinds of objects, including blocks and streams, from the object manager.

Note: In the ribbon, you can also open a menu at the right side of the Copy command from which you can select Copy Special. This command opens a dialog box allowing you to select other objects to copy in addition to the one(s) initially selected.

Note: If you select all blocks and streams with the command or CTRL+A shortcut, this only selects visible objects. Any Design-Spec, Calculator, Transfer, and Measurement blocks not shown on the flowsheet because of Flowsheet Options will not be selected for copying.

Pasting Blocks and Streams
See Also

Copying Blocks and Streams

To paste a copied block or stream:

In the flowsheet, click the right mouse button on a blank area and click Paste from the menu.

Tip: In the flowsheet, you can also Paste a copied block or stream by pressing CTRL + V on the keyboard.

If there are no conflicts with the existing objects, the block or stream is immediately pasted into the flowsheet. But if there is any conflicting name, the Resolve ID Conflicts dialog box appears.

Select the object ID in conflict.

Click the Edit ID button.

Enter a new ID in the Enter ID field. Click OK to close the Object Name dialog box.

In the Resolve ID Conflicts dialog box, click OK to accept the new ID.

The block or stream is pasted into the flowsheet.

You can copy and paste between different simulations open simultaneously, provided that they are running in the same version of Aspen Plus.

You can also copy and paste many kinds of objects, including blocks and streams, from the object manager.

Note: If the flowsheet is locked, you cannot paste blocks and streams. When the flowsheet is locked, a green cross-hatched border appears around the edge of the Main Flowsheet window.

Renaming Blocks and Streams
See Also

Options for Naming Blocks and Streams

To rename a block or stream from the flowsheet:

Select the block or stream you want to rename.

Click the right mouse button on the block or stream.

From the menu that appears, click Rename Block or Rename Stream.

When prompted, enter the new name and click OK.

You can also rename blocks and streams using the object manager.

Tip: You can also rename blocks or streams more quickly by double-clicking the label containing the name. The name becomes highlighted like this:

Type the new name, replacing the existing one, then press Enter.

Note: If the flowsheet is locked, you cannot rename blocks and streams. When the flowsheet is locked, a green cross-hatched border appears around the edge of the Main Flowsheet window.

Note: You cannot use the names TOP and DATA for streams or blocks. These names are reserved for internal Aspen Plus objects.

Changing Stream Connections
You can disconnect the end of a stream from a unit operation block and then connect it to another port on the same or a different block.

Important: When you disconnect a stream from a block, you may lose data you have specified related to that connection. For instance, disconnecting a stream from RadFrac loses information about the connection of that stream to a stage. This data is lost immediately upon disconnecting the stream. Reconnecting the stream to the block or undoing the disconnection will not restore the data.

To change the port that a stream is connected to:

Click the stream.

Click the right mouse button.

From the menu that appears, click:

Reconnect Source to disconnect the source end of the stream

Reconnect Destination to disconnect the output end of the stream

For each block all available ports are highlighted. For example, for a feed stream, the outlet ports are highlighted. The ID of the stream appears in a text box by the end that is being reconnected. Ports that must have at least one stream connected are shown in red. Others are shown in blue.

image\help0068.gif

Continue as you would for a new stream. Click the port to which you want to connect the stream end, or click a blank part of the flowsheet to place a feed or product.

If the stream end you want to connect is currently unconnected, simply double-click the feed or product icon. Immediately the ports the stream could be connected to are highlighted, and you can click one of them to connect the stream.

Note: If the flowsheet is locked, you cannot change stream connections. When the flowsheet is locked, a green cross-hatched border appears around the edge of the Main Flowsheet window.

Inserting a Block into a Stream
To insert a block into a stream:

Select the material stream on the flowsheet into which you want to insert a block.

Right-click the block and select Insert Block.

Choose the type of block to insert. By default, a short list of blocks commonly used with this command is available, but you can select from all available block types by selecting All Types.

The block is inserted, and the old stream is split into two streams. The streams connected to this block use the first inlet and outlet material ports for the block; for some blocks this is not enough to complete the flowsheet connectivity for the block.

If Insert Block does not do what you want, use this method:

Place the new block on the flowsheet by selecting a unit operation model from the Model Palette and dragging it to the flowsheet. For more information, see Placing Blocks.

Select the desired stream and click the right mouse button on the stream.

From the menu that appears, click Reconnect Source or Reconnect Destination.

Click a port on the new block to reconnect the stream to it.

Connect a new stream from the new block to the original source or destination, by clicking the STREAMS icon and clicking the inlet or outlet port. For more information, see Placing Blocks.

Breaking and Joining Streams
It is sometimes useful to break a stream connecting two blocks into a product stream and a feed stream, such as when you are having difficulty converging a recycle loop. To do so, right-click the stream and select Break Stream. If results exist for this stream and are unreconciled, Aspen Plus will ask you whether to reconcile the results first. If there are reconciled results or directly entered estimates for this stream, they will be applied as specifications in the feed stream, which will retain the same stream number, etc. as the previous stream. The product stream will be assigned a new number.

Likewise, you can join a product and a feed stream into a stream connecting two blocks. First select exactly two streams on the flowsheet (hold down shift or control after selecting the first one to make the multiple selection). Then right-click one of the streams and select Join Streams. The feed stream then connects the two blocks and any specifications for that stream become estimates.

Note: Joining streams is only possible when the stream resulting from the join would normally be allowed. You cannot join streams of different types or streams connected to the same block.

Improving the Appearance of the Flowsheet
You can change the flowsheet layout at any time to improve the appearance of your drawing. You can move:

Blocks

Multiple blocks and streams at once

Block IDs

Stream segments

Stream corners

Stream IDs

Stream connection locations

You can also:

Hide block and stream IDs

Reroute streams

Change color and style of streams

Pin a stream corner

Align blocks

Change icons

Resize icons

Rotate icons

Use Undo

Use Redo

Many commands and actions can apply to multiple blocks or streams as well as to an individual one. See Selecting Multiple Blocks and Streams.

Note: If the flowsheet is locked, you cannot do any of these things. When the flowsheet is locked, a green cross-hatched border appears around the edge of the Main Flowsheet window.

Note: Normally, the result of any operation should cause the flowsheet to be redrawn in its new state. If this doesn't happen and the flowsheet appears to be incompletely drawn on screen, right-click any blank area of the flowsheet and select Redraw to force it to be redrawn.

Selecting Multiple Blocks and Streams
See Also

Moving Multiple Objects at Once

To select all blocks and streams:

In the Main Flowsheet window, click the right mouse button.

From the menu that appears, click Select All.

To select multiple blocks and streams:

Click and hold the mouse button while dragging the mouse over a region. All blocks and streams lying entirely inside the region will be selected.

– or –

Hold down the Ctrl key while clicking on blocks or streams to add (or remove) them to the selection.

Moving Multiple Objects at Once
To move multiple objects at once:

Select the objects you want to move.

Hold down the mouse button on any object within the region.

The mouse pointer changes to the move shape (image\help0069.gif).

Drag the objects to the location you want, and release the mouse button.

Tip: You can also select multiple objects and then use the arrow keys to move them to the new location.

Moving a Block
To move a block:

Press and hold down the mouse button on the unit operation block (but not on the block ID) that you want to move.

The outline of the block is highlighted and the mouse pointer changes to the move shape . Also a tooltip may appear showing information about the block, including name, section and status of the block.

image\help0070.gif

Drag the block to the location you want and release the mouse button.

When you place or move blocks, the center of the block icon snaps to a grid location if Snap to Grid is enabled. For information on changing the grid options, see Using the Grid/Scale Tab.

Tip: You can also select the block and then use the arrow keys to make minor adjustments to the position of the block.

Moving a Block ID
See Also

Hiding Block IDs

To move a Block ID:

Press and hold down the mouse button on the block ID.

The mouse pointer changes to the move shape (image\help0071.gif).

Drag the block to the location you want and release the mouse button.

Tip: You can also select the block ID and then use the arrow keys to move the block ID.

If you later move the block, the ID maintains its position relative to the block.

Hiding a Block or Stream ID
See Also

Moving a Block ID

Moving a Stream ID

There are several ways to hide a block or stream ID. If any of the following hide mechanisms applies to a particular stream or block, its ID will be hidden.

You can hide the ID for a specific block or stream:

Right-click the block or stream in the flowsheet.

Point to Hide and then ensure ID is checked.

To hide the block IDs for all subsequent blocks or streams created, clear the Display Block Name or Display Stream Name checkbox in the Flowsheet Display Options dialog box. You can unhide the IDs on these blocks and streams using the mechanism above.

It is also possible to hide all block and stream IDs by clearing Display Options | ID on the Flowsheet Modify tab of the ribbon. This global option overrides all others to hide IDs when it is cleared. This option applies separately to each level of hierarchy in a hierarchical flowsheet.

You can also hide all the block and stream IDs by right-clicking an empty section of the flowsheet and checking Hide Labels. This feature allows you to change the zoom threshold at which labels are hidden automatically when you zoom out (regardless of the other settings for showing labels). By default, this is 60%, and you cannot set the threshold higher than this, but you can set it lower. To do so, check Hide Labels, then zoom out to the smallest size where you want the labels to appear, and then uncheck Hide Labels. Now the labels will appear down to this level of zoom (or down to 60%, if the current zoom is larger), and disappear when the zoom level is smaller.

Finally, at any zoom level, if a stream line is very short and there isn't enough room to display the box for the stream ID, it will not appear.

Changing the Icon
To change an icon:

Click the block whose icon you wish to change.

Click with the right mouse button on the block.

From the popup menu that appears, click Exchange Icon.

The icon for the block changes to the next icon in the list for the model.

Tip: You can also change the icon by clicking the block, then pressing the letter n to change to the next icon available for the block, or p to change to the previous available icon.

Rotating Icons
To rotate an icon:

Click the block whose icon you wish to rotate.

Click with the right mouse button on the block.

From the menu that appears, click Rotate Icon.

A submenu appears, allowing you to rotate the icon to the right (clockwise) or left, or flip the icon around either axis (for example, to reverse flow direction).

Tip: You can also use the buttons  in the Flowsheet group of the Flowsheet Modify tab of the ribbon to rotate and flip an icon.

Resizing Icons
To resize an icon:

Click the block whose icon you wish to resize.

Position the mouse pointer over one of the corners of the block icon until the resize mode pointer shape  or  appears. Drag the mouse pointer until the icon until it is the desired size.

Aligning Blocks
To align two blocks:

Click the stream between the two blocks.

Click with the right mouse button on the stream.

From the menu that appears, click Align Blocks.

Note: Blocks attached to selected streams are aligned on a grid if Snap to Grid is enabled in Flowsheet Display Options.

Tip: You can also select one or more streams and press CTRL + B.

Moving Stream Connection Locations
To move the point where a stream connects to a unit operation block without changing the stream's connection to its current port on the icon:

Click the stream that you want to move or click the block to which it is connected. The stream is selected.

image\help0075.gif

Position the mouse pointer where the end of the stream connects to the block.

The arrow is highlighted and a text box with the descriptions of the port appears.

Hold down the left mouse button. The mouse pointer changes to the port move shape image\help0054.gif or image\help0053.gif.

Drag the stream end to the preferred point on the block and release the mouse button.

Moving the stream end does not move the port to which the stream is connected. Consequently, the point where the stream end is now attached to the block is not a port and may not be used to directly connect further streams.

To display the location of the port, click the stream end.

image\help0076_wmf.gif

Tip: You can also move any part of the stream by selecting it and dragging the part of the stream you want to move to its new location.
If you pin a stream corner it will stay in place when you move other stream parts besides the corners and segments adjacent to it.

Moving a Stream Segment
To move a stream segment:

Press and hold down the mouse button on the segment of the stream you wish to move (but not on the stream ID).

The mouse pointer changes to the move shape.

Drag the segment of the stream to the location you want and release the
mouse button.

Tip: You can also select the stream and then use the arrow keys to make minor adjustments to the position of the stream.
If you pin a stream corner it will stay in place when you move stream segments besides the ones adjacent to it.

Moving a Stream Corner
To move a stream corner:

Press and hold down the mouse button on the corner of the stream (but not on the stream ID).

The mouse pointer changes to the move shape .

Drag the corner of the stream to the location you want and release the
mouse button.

Tip: You can also select the stream and then use the arrow keys to make minor adjustments to the position of the stream.
If you pin a stream corner it will stay in place when you move other stream corners besides that one and ones adjacent to it.

Pinning a Stream Corner
You can pin a stream corner to prevent that corner from moving when a stream is rerouted, or when other stream corners, segments, or blocks connected to the stream are moved. The pinned corner may still move if you move one of the segments containing it or an adjacent corner.

To pin a stream corner:

Click the stream to select it. Small gray pin icons appear at each stream corner.

Click the pin icon on the corner you want to pin. The pin turns red.

This image shows the pin icons, including one red pinned corner:

image\streampin.gif

To unpin the stream corner, click the red pin. It turns gray again.

Moving a Stream ID
See Also

Viewing and Hiding Stream IDs

You cannot move a stream ID off a stream but you can move a stream ID along a stream. To do this:

Press and hold down the mouse button on the stream ID, until the mouse pointer changes to the move shape (image\help0073.gif).

Drag the ID to the location you want and release the mouse button.

Rerouting Streams
To reroute a stream automatically:

Click the stream you wish to reroute.

Click the right mouse button on the stream.

From the menu that appears, click Reroute Stream. The stream is redrawn.

Tip: You can also select one or more streams and then press CTRL + J to reroute them.
If you pin a stream corner it will stay in place when you reroute the stream.

About Flowsheet Sections
See Also

Creating a Flowsheet Section

Specifying the Current Section

Moving Blocks to a New Section

Specifying a Property Method for a Flowsheet Section

Specifying the Stream Class for a Section

Viewing the Current Section

Printing a Flowsheet

Search the Knowledge Center for information on:

Flowsheeting: Learn the Essentials for Creating, Viewing, and Modifying Flowsheets

A flowsheet section is a group of blocks and streams within the flowsheet. Use flowsheet sections to:

Enhance clarity

Simplify viewing and printing large flowsheets

Simplify assignments of physical property specifications or stream classes

A stream belongs to a flowsheet section if it is an outlet of a block in the section. A process feed stream belongs to a section if it is an inlet to a block in the section.

To see which section a block or stream belongs to, select the block or stream and a text box with the information will be displayed while the pointer is over the selected item.

Aspen Plus predefines a default section GLOBAL for your convenience. It assigns all blocks to GLOBAL unless you create additional sections.

Use the Methods | Specifications | Flowsheet Sections sheet in the Properties environment to specify physical property options for sections.

Creating a Flowsheet Section
To create a new flowsheet section:

In the navigation pane, click Flowsheet.

On the Flowsheet Section object manager, click New.

Enter an ID or accept the default ID then click OK.

Click the section in the list in the object manager and click Make Current to make it the current section. Any additional blocks you create are assigned to this section, until you select a new current section.

Note: If the flowsheet is locked, you cannot create new sections. When the flowsheet is locked, a green cross-hatched border appears around the edge of the Main Flowsheet window.

Specifying the Current Section
The current section is shown in the Section group of the Flowsheet Modify tab of the ribbon. All new blocks defined using graphics are assigned to the current section.

image\help0078.gif

To change the current section, click this list and select the desired section from the list.

The section you selected becomes the current section. Any additional blocks you create are assigned to this section, until you select a new current section.

You can also change the current section from the Flowsheet object manager. Click the section, then click Make Current.

Moving Blocks to a New Section
To move blocks from one section to another:

In the Flowsheet window, select one or more blocks.

Click the right mouse button on a selected block and from the menu that appears, click Change Section.

To move the block or blocks to a different section, select the Move to section option and select a section from the list.

– or –

To create a new section, select the Create new section option and enter a section ID or accept the default ID.

Click OK to close the Change Section dialog box.

The selected block or blocks are moved to the section you selected or created.

Note: If the flowsheet is locked, you cannot move blocks to a new section. When the flowsheet is locked, a green cross-hatched border appears around the edge of the Main Flowsheet window.

Specifying the Stream Class for a Section
The stream class assigned to section GLOBAL is the default stream class. By default, Aspen Plus assigns the stream class for section GLOBAL to any new sections you create.

To assign a different stream class to a section:

If the stream class you want to assign to the section does not contain the appropriate substreams, use the Setup | Stream Class | Stream Class sheet to modify it. For more information, see About Global Information.

Open the Setup | Stream Class | Flowsheet sheet.

Find the section you want to change in the Section column.

In the Stream Class column in this row, select the stream class to assign to streams in this section.

Viewing the Current Section
To view only the current section, open the Flowsheet Modify tab of the ribbon. In the Section group, clear the checkbox Show All.

Only the blocks and streams in the current section appear on the screen. Streams to and from other sections are terminated by icons containing the ID of the other sections.

To specify what is the current section see Specifying the Current Section.

To view all sections, check this checkbox again.

Annotating Process Flowsheets
For help on annotating Process Flowsheets, see one of the following topics:

Adding annotations

Displaying global data

Grouping objects

Printing

Adding Annotations
See Also

Adding Tables

Adding Graphics Objects

Adding Text Objects

Hiding Annotations

Search the Knowledge Center for information on:

Flowsheeting: Learn the Essentials for Creating, Viewing, and Modifying Flowsheets

Additional text, graphics, tables, and embedded OLE objects can be added to your flowsheets. In the Flowsheet Modify tab of the ribbon, in the Display Options group, the Annotation command can be used to enable or disable display of the text and graphics.

For example, this illustration shows annotation turned on to show a title and a table of stream results.

image\help0186.gif

Adding Tables
You can add two kinds of tables to the flowsheet:

A table of stream results for one or more streams, generated using the default format or a format specified as a stream summary template.

A custom table containing a collection of any variables, copied and pasted from other forms.

Adding Stream Tables
You can add stream tables to your flowsheets to display stream properties in a grid.

To generate a stream table in your flowsheet:

Ensure that the flowsheet has results available. If results are not available, run the simulation.

In the Flowsheet Modify tab of the ribbon, in the Display Options group, ensure Custom Tables is selected.

Display the Results Summary | Streams | Material sheet. To do this, in the navigation pane, open Results Summary, then click Streams.

Results for all of the streams are displayed. If you only want selected streams to be displayed, in the list in the Stream Group group of the Stream Summary tab of the ribbon:

Select Streams instead of All Streams, then select the desired stream from the list at the top cell of each column, or

Select one of the other options or a stream group to display that set of streams. You can still modify the streams displayed using the list at the top of each column.
In the Template group, select the template you want, and/or use the other controls in the Stream Summary tab of the ribbon to customize the appearance of the stream report.

Click Send to Flowsheet.

Aspen Plus adds the stream table to your flowsheet. Switch to the Main Flowsheet window to see it.

The table is scaled for printing, so if you cannot read its contents on screen, you can zoom in on it, or resize it.

Aspen Plus asks if you want to synchronize streams and/or the template. If you synchronize streams, Aspen Plus creates a stream group containing the currently selected streams, and lets you name it. If you synchronize the template, Aspen Plus lets you name a template based on the currently selected properties, and optionally add a description.

Move the table to the position you want, using the keyboard or mouse.

You can attach the table to a block or stream. Right-click the table, then click Attach. See also Attaching Objects to the Flowsheet.

Once you place the grid on the flowsheet, you cannot edit it from the flowsheet, though you can open and close sections from the + and - icons, and the data in the grid will update when you run the simulation. If you synchronized streams and/or the template, you can update the stream table as follows:

Return to the stream summary, selecting the group and/or template you defined earlier.

Add and/or remove streams and/or properties.

Click Save in the Stream Group group of the ribbon to save the streams, and/or click Save in the Template group of the ribbon to save the properties.

Click Send to Flowsheet.

Check the boxes to keep the streams and/or template synchronized.

Aspen Plus updates the stream table with the new streams and/or properties.

Resizing Stream Tables
You can resize stream tables by changing the font size. To do this:

Click on the stream table to select it.

Click and drag one of the black boxes that appear at the edges and corners of the stream table.

The stream table resizes accordingly. The whole table resizes proportionally.

Adding Custom Tables
See Also

Modifying Custom Tables

Exporting Custom Tables to Excel

To create a custom table:

In the navigation pane, open Flowsheet, then click Custom Tables.

Click New.

Enter a name for the table or accept the default name, and click OK.

Copy and paste variables from other forms onto this form.

Tip: You may want to open extra form windows and perhaps view multiple windows at once to make this copying and pasting easier.

Note: You cannot copy EO variables into the custom table, except for EO Input variables. Instead, copy the underlying SM variable into the custom table.

Note: For some variables, such as Calculator results, you can copy the name and value of the variable separately. Be sure to copy the value if you want to display the value. See more information about Calculator results in custom tables.

Click Place table on flowsheet to show this table on the flowsheet.

The table on the flowsheet will automatically update for changes in specifications, results, or the configuration for the table specified on this form.

If you put specified variables on the form, you can edit their values here and they will be updated elsewhere. You can also edit these values on the table on the flowsheet after right-clicking it and selecting Edit. If your table has multiple tabs, this also allows you to switch which one is shown on the flowsheet.

Custom tables can get large, so you can right-click the table on the flowsheet and click Show as Icon or Show as Table to switch between the full table display and a small icon which indicates that a table is available.

Displaying Calculator Results in Custom Tables
See Also

Using Parameter Variables

Adding Custom Tables

Calculator results can be displayed in custom tables, but there are some things to keep in mind:

You must run the model once to generate the Calculator result variables before you can add them to the custom table. Then you can copy and paste from the Calculator block's Define Variables sheet.

The variable name, value read, value written, and units are separate results variables for each defined variable. To display one of the values, be sure to copy/paste or drag that value (not the name or units) into the custom table. If you copy one of the values into the custom table, the name and units are displayed with it, but the units cannot be changed. If you want to display both values, you need to copy and paste each one into the custom table.

Once the variable is in the custom table, you can edit the name to whatever name you would like to call the variable, just as with any other variable.

If you want to display intermediate variables (ones defined in Fortran statements, not representing Aspen Plus variables), add a Parameter variable on the Define sheet with the name of that Fortran variable.

To manipulate the initial value of a Parameter, copy its Initial value field from the Define sheet into the custom table. This will become an editable value in the custom table. The units, if any, are not shown. If you do not intend to manipulate the initial value, it is better to copy a value from the Results form.

If you are only interested in the final calculated value, and the result is available in the results of the stream or block where the variable is set, then it may be more useful to add the stream or block result variable instead of the Calculator variable. This adds a variable to the table with editable units, as with most other variables. However, this doesn't work for input variables, where the original value specified in the stream or block form remains in place, rather than the value manipulated by the Calculator.

Modifying Custom Tables
You can change the configuration of a custom table by editing its form under the Flowsheet folder in the navigation pane.

You can add variables to a custom table in any of these ways:

Copy the variables from the form where they are found and paste them into the custom table.

Drag and drop the variables from the form where they are found into the custom table.

Right-click the table and click Find Variables, and browse the model for variables to add.

To delete variables in a custom table, right-click the row selector  at the left of the variable, then click Delete Row.

To reorder the variables in a custom table:

Click the row selector  at the left of the variable you want to reorder, and hold down the mouse button.

Drag to the position between the rows where you want to insert the variable, and then release the mouse button.

To change the labels in a custom table, click in the cell containing the label and type the new label.

To insert a blank row in a custom table, right-click the table and select Insert Row. The blank row will be inserted above the selected row. This row can be used as a spacer. It does not contain a variable but you may specify a label for it.

To change the displayed columns:

Right-click the table and click Choose Columns.

Clear the checkboxes for columns you want to hide, or check them for columns you want to show.

Tip: You can reorder and resize the displayed columns in the same way as for other grids.

To create additional tables, right-click the tab at the top of any table, then click New.

To delete tables, right-click the tab at the top of the table, then click Delete. If there is only one table you cannot delete it.

To rename tables:

Right-click the tab at the top of the table, then click Rename.

Enter the new name and click OK.

Exporting Custom Tables to Excel
See Also

Adding Custom Tables

You can export a custom table to Microsoft Excel in two ways, either as a static table or as a live table linked to the simulation using Aspen Simulation Workbook.

Create the custom table, then click Send to Excel in the Custom Tables form for the table.

In the Tables to Export list, click the checkboxes to select which tabs within the table should be exported.

In the Table locations and format group, choose whether to export each table to a separate worksheet within the Excel file, or to put all of them on the same Excel worksheet.

Optionally, you can specify options for how to format the Excel tables. If you export multiple tables to the same Excel worksheet, you can choose whether to arrange the tables vertically or horizontally, and the spacing between tables. You can also choose where the first table on each worksheet begins, whether to autosize the table cells, and a table style to apply to the exported table cells.

In the Export Options frame, click the checkbox Export variable link information with tables to enable live links using Aspen Simulation Workbook if you want the exported table to have a live connection to Aspen Plus. Otherwise, the Excel table will just be a static copy of the custom table data at the time you export it.

If you want to add the tables to an existing Excel file, click the Add tables to existing workbook checkbox, click Browse, and select an Excel document to add the tables to. They will be added to new worksheet(s) within the file. Otherwise, the tables will be exported to a new Excel document.

Click Export tables to Excel. If you are exporting tables to a new Excel file, you will be prompted for a file name for the Excel file.

When the export is complete, the Export Custom Tables dialog box appears. You can choose whether to open the folder containing the Excel file and whether to open the Excel file. Click OK after making your selections.

Note: If you choose to open the Excel file after making live links, Aspen Simulation Workbook (ASW) will prompt you about connecting to the simulation after the Excel file opens. See the ASW help for more information about using ASW.

Adding Graphics Objects
To add lines, circles, or boxes to a flowsheet:

In the Flowsheet Modify tab of the ribbon, in the Display Options group, ensure Annotation is selected.

In the Flowsheet Format tab of the ribbon, in the Styles group, select line style and color that you want.

In the Flowsheet Format tab of the ribbon, in the Shapes group, click the type of object you want to add.

Move the cursor to where you want to place the object.

Click and hold down the mouse button.

Drag the cursor to create the object in the size you want, then release the mouse button.

Note: For polygon and polyline objects, instead of clicking and dragging, click to place each vertex, and right-click to place the final vertex.

To fill in the graphics object, select the object and click Fill in the Drawing group of the Flowsheet tab of the ribbon.

You can change the attributes of an object after you place it. Select the object, then select the line style or color from the Styles group of the Flowsheet Format tab of the ribbon.

Use the mouse or keyboard to move and resize graphics objects. You can attach the graphics object to a block or stream by clicking the object with the right mouse button and from the popup menu that appears, clicking Attach, then clicking the block or stream. You can also use the Send to Back command (in the Flowsheet Format tab of the ribbon) to put objects in a lower layer where they will go behind objects in the upper layer. You can use the Bring to Front command on lowered objects to bring them back to the upper layer.

It is helpful to show the grid and use grid options when placing, moving, and resizing graphics objects. For more information see Aligning Objects in Flowsheets.

Adding Text Objects
See Also

Specifying Text Attributes

Editing Text Objects

To add text annotations to a flowsheet:

In the Flowsheet Modify tab of the ribbon, in the Display Options group, ensure Annotation is selected.

In the Flowsheet Format tab of the ribbon, in the Shapes group, click image\help0187.gif.

Move the cursor to where you want to place the text and click the mouse button.

Type the text in the small box that appears.

Click anywhere outside the box to finish entering the text.

Use the mouse or keyboard to move and resize text you have placed.

You can also attach the object to a block or stream. To do this, click the object with the right mouse button and from the popup menu that appears, click Attach. Then click the block or stream.

You can also use the Send to Back command (in the Flowsheet Format tab of the ribbon) to put text objects in a lower layer where they will go behind objects in the upper layer. You can use the Bring to Front command on lowered objects to bring them back to the upper layer.

It is helpful to show the grid and use grid options when placing, moving, and resizing text. For more information see Aligning Objects in Flowsheets.

Specifying Text Attributes
You can change the appearance of text objects after you place them in your flowsheet by selecting the text object then using the Font group in the Flowsheet Format tab of the ribbon to specify the attributes.

To specify the default text attributes for all subsequent text that you add:

Ensure no text objects are selected in the drawing.

In the Font group in the Flowsheet Format tab of the ribbon, specify the attributes you want.

Editing Text Objects
In a flowsheet, you can edit a text object.

To edit a text string:

Select the text string and click the right mouse button.

From the popup menu that appears, click Edit.

Hiding Annotations
See Also

Adding Annotations

Sometimes you may want to temporarily hide annotations you have created to give a clearer view of the flowsheet, without deleting them.

To hide graphics and text objects for the whole flowsheet, in the Flowsheet Modify tab of the ribbon, in the Display Options group, clear Annotations.

To hide graphics and text objects attached to a block or stream, right-click the block or stream and select Hide | Annotations.

To hide stream tables, in the Flowsheet Modify tab of the ribbon, in the Display Options group, clear Global Data.

To hide stream tables attached to a block or stream, right-click the block or stream and select Hide | Global Data.

To hide OLE objects, in the Flowsheet Modify tab of the ribbon, in the Display Options group, clear OLE Objects.

The ribbon options for Annotations, Global Data, and OLE Objects apply separately to the flowsheet for each level of hierarchy. When these options are cleared, all objects of these types are hidden, even if they are not hidden in the individual blocks and streams.

Grouping Objects
See Also

Creating Temporary Groups

Creating Permanent Groups

Aligning Objects in Flowsheets

Attaching Objects to the Flowsheet

You can create temporary or permanent groups of text and graphics objects in your flowsheet.

See this example of a temporary group that includes the text "Methylcyclohexane Recovery Column" and the Unit Operation Icon for the column:

image\help0192.gif

You can select a region containing both the objects and flowsheet blocks and streams. You can move the selected text, graphics, and flowsheet objects as a unit. But you must perform all other operations separately for the different groups in the region.

When you select a temporary group, you can move or change attributes of all objects in the group together.

A permanent group becomes a single object in the drawing. You can select, move, resize, rotate, or change the attributes of all objects in the group together. Permanent groups may only contain text and graphic objects added to the flowsheet from the Shapes group of the Flowsheet Format tab of the ribbon, but you can attach the entire group to a flowsheet block or stream. For more information, see Attaching Objects to the Flowsheet.

Creating Permanent Groups
See Also

Making Permanent Groups into Temporary Groups

To create a permanent group:

Select a temporary group.

Click with the right mouse button on an object in the group.

From the menu that appears, click Group.

Note: A permanent group may only contain text and graphical objects, not blocks or streams, but you can attach a permanent group to a flowsheet block or stream. For more information, see Attaching Objects to the Flowsheet.

Making Permanent Groups into Temporary Groups
To convert a permanent group to a temporary group:

Click the right mouse button on the group.

From the menu that appears, click Ungroup.

Aligning Objects in Flowsheets
If the Snap to Grid option is on, any text or graphics objects that you add or move align to a grid.

To display the grid:

In the View tab of the ribbon, in the Display Aids group, click Grid.

You may need to position or size objects more precisely than the default grid allows. To do this, you can:

Turn off the Snap to Grid option

Reduce the grid size

Display a ruler

Turning off Snap to Grid
To turn off the Snap to Grid option:

In the View tab of the ribbon, in the Display Aids group, click Snap.

Changing the Grid Size
To change the grid size:

In the View tab of the ribbon, in the Display Aids group, select the grid size from the box next to Grid.

Displaying a Ruler
You can display a ruler to help you see where you are within the overall drawing grid:

In the View tab of the ribbon, in the Display Aids group, click Scale.

When precisely aligning text and graphics, it is helpful to zoom in on the area of the flowsheet where you are working.

Attaching Objects to the Flowsheet
You can attach stream tables, permanent groups (including single graphics and text objects), and OLE objects to flowsheet blocks or stream IDs. Attached objects move with the parent block or stream ID.

To attach an object to a flowsheet:

Click the object to select it.

Click the right mouse button on the object.

From the menu that appears, click Attach.

The mouse changes to the connect pointer.

Click the block or stream to which you want the object connected.

Move the object where you want it, relative to the parent block or stream ID.

When you select an attached object, small boxes indicate the parent block or stream.

To unattach an object:

Right-click the object and click Attach again. The check mark next to Attach will be removed and the object will no longer be attached.

Specifying Streams
Streams connect unit operation blocks in a flowsheet and carry material and energy flow from one block to another. Streams can be:

Feed streams to the flowsheet

Internal (interconnecting) streams within the flowsheet

Product streams from the flowsheet

Pseudo product streams representing flows internal to a block

Use the Streams forms to enter data for the feed streams and to give initial estimates for any internal streams that are tear (recycle) streams.

For help on specifying streams, see one of the following topics:

Specifying material streams

Analyzing stream properties interactively

Specifying stream classes and substreams

About particle size distributions

Accessing stream libraries

Specifying heat streams

Specifying work streams

Specifying power streams

Using pseudoproduct streams

Using stream reconciliation

Clearing streams
Viewing stream results

Specifying Material Streams
See Also

Entering Specifications for Streams

Possible Stream Thermodynamic Condition Specifications

Mass-Balance-Only Calculations

For all material process feed streams, you must specify:

Flow rate

Composition

Thermodynamic condition

You can provide initial guesses of these variables for tear (recycle) streams.

Entering Specifications for Streams
To enter specifications for a stream:

Double-click the stream in the flowsheet.

– or –

In the navigation pane, click Streams. In the Streams Object Manager, select the stream and click Edit.

On the Mixed sheet, in the Flash Type fields, select which two of the three state variables will define the thermodynamic condition of your stream, and then specify values for these variables in the fields below. For the available options, see Possible Stream Thermodynamic Condition Specifications.

Specify the stream composition using flow rates or flow fractions or flow concentrations of each component in the Composition frame. See Entering Stream Composition.

Perform Steps 4 through 8 only if the stream contains solids substreams.

Note: Only moisture components and components of type Solid can appear in CI Solid substreams. Only components of type Nonconventional can appear in NC Solid substreams.
If you need to specify non-solid components in CI Solid substreams, specify them as Moisture Components on the top-level Setup | Solids | Solid Characterization sheet.

Switch to the CI Solid or NC Solid sheet, depending on the kind of solids you have.

Use the Substream name field to display different substreams.

Specify temperature, pressure, and composition for each solids substream. You must specify the same pressure for each substream.

If any components in the stream have component attributes, or any substreams have particle size distributions, you must specify values for them. To specify water content and other details of nonconventional components, use component attributes. For more information, see Specifying Component Attribute Values and Specifying Particle Size Distribution.

Possible Stream Thermodynamic Condition Specifications
This table describes possible stream thermodynamic condition specifications:

Phases

Free Water

State Specification

Stream Properties Calculated by

Vapor only

No

Temperature, Pressure

Vapor phase thermodynamic calculations

Solid only

No

Temperature, Pressure

Solid phase thermodynamic calculations

Liquid only

No

Temperature, Pressure

Liquid phase thermodynamic calculations

Liquid-freewater

Yes

Temperature, Pressure

Liquid phase thermodynamic calculations with free water considered

Vapor-liquid or vapor-liquid-liquid

No

Temperature, Pressure

TP flash

Vapor-liquid or vapor-liquid-liquid

No

Temperature, Molar Vapor fraction

TV flash

Vapor-liquid or vapor-liquid-liquid

No

Pressure, Molar Vapor fraction

PV flash

Vapor-liquid-freewater

Yes

Temperature, Pressure

TP flash with free water considered

Vapor-liquid-freewater

Yes

Temperature, Molar Vapor fraction

TV flash with free water considered

Vapor-liquid-freewater

Yes

Pressure, Molar Vapor fraction

PV flash with free water considered

Aspen Plus calculates unspecified temperature, pressure, or molar vapor fraction, as well as the stream enthalpy, entropy, and density.

Entering Stream Composition
See Also

Using Standard Liquid Volume

Search the Knowledge Center for information on:

Getting Started with Physical Properties

You can specify the stream composition in terms of component flows, fractions, or concentrations.

For

Enter values on this basis

Component flows or fractions

Mole, mass, or standard liquid volume (Stdvol)

For nonconventional components, you can enter only mass flows and fractions.

Concentrations

Mole or mass

If you specify component fractions, you must specify the total mole, mass, volume or standard liquid volume flow. If component fractions do not sum to 1.0, they will be normalized, with a warning.

Note: Volume (as opposed to standard volume) flow is provided as a convenience for some users. If you specify total volume flow, this is converted to a mole flow specification at the start of the simulation using the other specifications for this stream. Changes you make to stream specifications during the run (such as via a Design Spec or Sensitivity block) cannot manipulate the volume flow because it does not exist as part of the stream structure. And changes that affect other stream variables may cause the volume flow to deviate from the specified value.

Note: Stdvol is standard liquid volume. To enter standard vapor volume flow, select mole basis and use units based on scf (standard cubic feet) or scm (standard cubic meters). See Aspen Plus Units Abbreviations for detailed definitions of these units.

You can enter both component flows and total flow. Aspen Plus normalizes the component flows to match the total flow.

If you specify component concentrations, you must enter a component ID for the solvent and the total flow. The stream must be single phase. You can select Vapor-Only or Liquid-Only in the Valid Phases list on the Stream | Input | Flash Options sheet, and temperature and pressure as state variables on the Stream | Input | Mixed sheet. Or you can specify the stream at its bubble point (Vapor Fraction is 0).

You can specify compositions for conventional and nonconventional solid substreams on the CI Solid and NC Solid sheets in the same way, but the types of specifications are limited to ones that make sense for these substreams.

Using Standard Liquid Volume
See Also

Example for Specifying a Process Feed Stream

Example for Specifying a Stream with Two Liquid Phases

If you use the standard liquid volume (Stdvol) basis for component flows, fractions or total stream flow, you need to enter the standard liquid volume of a component (VLSTD) on the Methods | Parameters | Pure Component | Input form, if this parameter is not available in databanks for your components.

Note: Stdvol is always standard liquid volume in Aspen Plus. To enter standard vapor volume, select the mole basis and use units based on scf or scm. See Aspen Plus Units Abbreviations for more information.

The standard liquid volume flow (Stdvol-Flow) can be very different from the volumetric flow rate of a stream. The standard liquid volume is defined at approximately 60ºF and 1 atm. The difference increases as the conditions diverge from 60ºF and 1 atm. If the stream is a vapor or has a significant amount of vapor, the volumetric flow rate of a stream is extremely different from the standard liquid volume flow. You can enter standard vapor volume flows as mole-flow. Select the appropriate units.

Standard liquid specifications are converted to mass based on the standard liquid volume (VLSTD) parameter, which is a constant for each component. VLSTD can come from a variety of sources (API Technical Databook or DIPPR databank, for example). This value may differ from the liquid molar volume calculated by the property method you specify. Thus, the calculated volumetric flow rate differ from the specified standard volume flow, even if the stream is at standard conditions.

To report the Standard Liquid Volume Flow or Standard Liquid Volume Fraction in the stream report, select the appropriate options on the Setup | Report Options | Stream sheet. You can also calculate these Property Sets:

VLSTDMX (standard liquid volume of a mixture)

VLSTD (standard liquid volume of a component)

StdVol-Flow and StdVol-Frac are accessible variables that can be used in design specifications and Calculator blocks.

The Stream | Input | Mixed sheet displays the total of the component flows, fractions, or concentrations entered for the stream. Use this value to check your input.

Example for Specifying a Process Feed Stream
A process feed stream (FEED) contains 2 lbmol/hr of hydrogen (H2) and 3 lbmol/hr of methane (C1), at 100F and 14.7 psia. Aspen Plus performs a two phase flash to determine stream properties and phase conditions.

image\help0116.gif

image\help0116.gif

Example for Specifying a Stream with Two Liquid Phases
A process feed stream contains 5 lbmol/hr of C1, 5 lbmol/hr of C2, and 10 lbmol/hr of H2O. Two partially miscible liquid phases are anticipated. The vapor-liquid-liquid equilibrium is treated rigorously. Aspen Plus performs a three phase flash to determine phase condition.

image\help0117.gif

image\help0118.gif

Specifying Component Attribute Values
See Also

Example of Specifying the GENANAL Component Attributes for a Nonconventional Substream

Use the Stream | Input | CI Solid and NC Solid sheets to specify values of component attributes. You must specify values for each attribute defined on the Components | Component Attributes selection sheet or Calculation Methods | NC Props | Property Methods sheet (see Global Information for Calculations ).

To specify values of component attributes for a stream:

On the Stream | Input form, click the CI Solid or NC Solid sheet.

Click Component Attribute.

Enter values for each attribute listed.

Example of Specifying the GENANAL Component Attributes for a Nonconventional Substream
On the Methods | NC Props form, the GENANAL component attribute is defined as required for the selected Nonconventional Component Property models.

image\help0119.gif

On the Streams | Input | NC Solid sheet, first specify the composition, including a flow for nonconventional component POLYMER in the NC substream. Then click Component Attribute, and specify the elements of the GENANAL component attribute.

image\help0120.gif

About Stream Property Analysis
See Also

Stream Analysis Types

Analyzing Stream Properties

You can calculate and display stream properties interactively as you create your simulation model. You do not have to complete the flowsheet definition or input specifications first.

For example, you can flash a feed stream as soon as you define it, to check your property model. As you develop a flowsheet model interactively, you can check the phase behavior of intermediate streams to help you determine feasible specifications.

Stream Analysis Types
The following table shows the types of stream analysis you can perform:

Type

Description

Stream Properties *

Tables and plots of Property Set properties.

Point

Stream properties for the total stream and each of the phases present. Properties include temperature, pressure, phase fractions, flow rate, heat capacity, density, and transport properties.

Component Flow

Component flow rates for the total stream and each of the phases present. Mole, mass, and standard volume fractions are available.

Composition

Component fractions for the total stream and each of the phases present. Mole, mass, and standard volume fractions are available. Partial pressure is also available.

Petroleum

Point properties, plus API gravity, specific gravity, Watson K factor, and kinematic viscosity

Distillation *

Petroleum distillation curves (TBP, D86, D160, and vacuum)

Bubble and Dew Point *

Bubble point temperature and dew point temperature versus pressure curves

PV Curve *

Vapor fraction versus pressure curves at stream temperature

TV Curve *

Vapor fraction versus temperature curves at stream pressure

PT-Envelope *

Pressure temperature envelope curves. sFor more information, see Generating PT-Envelopes.

* These types of stream analysis can be plotted.

You can also perform stream property analyses using property tables. The Analysis commands automate many of the steps required to generate a property table, and define built in plots appropriate for the analysis.

Use the Property Table forms when you need flexibility not provided by the Analysis commands.

Stream Analysis Bubble/Dew Dialog Box
See Also

Bubble/Dew Results Dialog Box Help

Stream Analysis Types

About Stream Property Analysis

Use this analysis option to generate pressure-versus-temperature curves. You can request

Bubble point curve (Vfrac=0)

Dew point curve (Vfrac=1)

Curves for any additional Vfrac(s)

You can specify the pressure range for the curves. By default, the curves are generated over the pressure range: atmospheric pressure to 10 atmospheres.

You can also specify the number of points on the curves.

Stream Analysis Bubble/Dew Results Dialog Box
See Also

Bubble/Dew Dialog Box Help

Stream Analysis Types

About Stream Property Analysis

Given a range of pressure, this analysis calculates

Bubble point temperatures

Dew point temperatures

Saturation temperatures for any vapor fraction

The results are described below.

Variable

Description

VFRAC

Vapor fraction (0 for bubble point, 1 for dew point)

PRES

Pressure

TEMP

Temperature

Stream Analysis Component Flow Dialog Box
See Also

Component Flow Results Dialog Box Help

Stream Analysis Types

About Stream Property Analysis

Use this analysis option to generate component flows for a stream. Component flows are generated for the total stream, the vapor phase, and the liquid phase. You can request flow rates on mole, mass, and standard liquid-volume bases.

Flow Basis is defaulted to the Flow Basis on the Setup Specifications Global sheet. When you change the Flow Basis on the Stream Component Flow dialog box, Aspen Plus saves the dialog box settings.

Stream Analysis Component Flow Results Dialog Box
See Also

Component Flow Dialog Box Help

Stream Analysis Types

About Stream Property Analysis

This analysis calculates component and total flow rates for the total stream, and the vapor and liquid phases. The results are described below.

Variable

Description

MOLEFLOW

Component flow rate on a molar basis

MASSFLOW

Component flow rate on a mass basis

VLSTD

Component flow rate on a standard liquid volume basis (60°F, atmospheric pressure)

MOLEFLMX

Total molar flow rate

MASSFLMX

Total mass flow rate

VLSTDMX

Total standard liquid-volume flow rate

Stream Analysis Component Flow Results Dialog Box
See Also

Component Flow Dialog Box Help

Stream Analysis Types

About Stream Property Analysis

This analysis calculates component and total flow rates for the total stream, and the vapor and liquid phases. The results are described below.

Variable

Description

MOLEFLOW

Component flow rate on a molar basis

MASSFLOW

Component flow rate on a mass basis

VLSTD

Component flow rate on a standard liquid volume basis (60°F, atmospheric pressure)

MOLEFLMX

Total molar flow rate

MASSFLMX

Total mass flow rate

VLSTDMX

Total standard liquid-volume flow rate

Stream Analysis Composition Dialog Box
See Also

Composition Results Dialog Box Help

Stream Analysis Types

About Stream Property Analysis

Use this analysis option to generate compositions for a stream. Compositions are generated for the total stream, the vapor phase, and the liquid phase.

You can request compositions on the following bases:

Mole

Mass

Standard liquid volume

Partial pressure

Flow Basis is defaulted to the Flow Basis on the Setup Specifications Global sheet. When you change the Flow Basis on the Stream Composition dialog box, Aspen Plus saves the dialog box settings.

Stream Analysis Composition Results Dialog Box
See Also

Composition Dialog Box Help

Stream Analysis Types

This analysis calculates composition for the total stream, and the vapor and liquid phases. The results are described below.

Variable

Description

MOLEFRAC

Component fraction on a molar basis

MASSFRAC

Component fraction on a mass basis

VLSTDFR

Component fraction on a standard liquid volume basis (60 °F, atmospheric pressure)

PPMX

Component partial vapor pressure

Stream Analysis Dist-Curve Dialog Box
See Also

Dist-Curve Results Dialog Box Help

Stream Analysis Types

About Stream Property Analysis

Use this analysis option to generate distillation curves for a petroleum stream. The following distillation curves are generated:

True boiling point (liquid volume basis)

ASTM D86

ASTM D1160

Vacuum (liquid volume basis, 10 mmHg)

Stream Analysis Dist-Curve Results Dialog Box
See Also

Dist-Curve Dialog Box Help

Stream Analysis Types

About Stream Property Analysis

This analysis calculates distillation curves for a petroleum stream. The distillation curves are:

Curve

Description

TBPCRV

True boiling point distillation curve on liquid volume basis

D86CRV

ASTM D86 distillation curve

D1160CRV

ASTM D1160 distillation curve at 10 mmHg

VACCRV

Vacuum distillation curve on a liquid volume basis at 10 mmHg

Stream Analysis Petroleum Dialog Box
See Also

Petroleum Results Dialog Box Help

Stream Analysis Types

About Stream Property Analysis

Use this analysis option to generate properties for a petroleum stream at the stream condition. Properties are generated for the total stream, the vapor phase, and the liquid phase. Properties include the state variables, enthalpy, heat capacity, API gravity, Watson K factor, and flow rates.

You can request flow rates on mole, mass, and volume bases. You can also request transport properties.

Flow Basis is defaulted to the Flow Basis on the Setup Specifications Global sheet. When you change the Flow Basis on the Stream Petroleum Properties dialog box, Aspen Plus saves the dialog box settings.

Stream Analysis Petroleum Results Dialog Box
See Also

Petroleum Dialog Box Help

Stream Analysis Types

About Stream Property Analysis

This analysis calculates properties for a petroleum stream. Properties are calculated for the total stream, and the vapor and liquid phases. The results are described below.

Variable

Description

TEMP

Temperature

PRES

Pressure

MOLEFLMX

Molar flow rate

MASSFLMX

Mass flow rate

VOLFLMX

Volumetric flow rate at the stream condition

VLSTDMX

Standard liquid-volume flow rate (60°F, atmospheric pressure)

APISTD

API gravity

SGSTD

Specific gravity

WAT

Watson UOP K-factor

MWMX

Molecular weight

HMX

Enthalpy

SMX

Entropy

CPMX

Heat capacity

RHOMX

Density

RHOLSTD

Standard liquid density (60°F, atmospheric pressure)

VVSTDMX

Standard vapor-volume flow (stream condition, ideal gas)

MUMX

Viscosity

KMX

Thermal conductivity

KINVISC

Kinematic viscosity

SIGMAMX

Surface tension

Stream Analysis Point Dialog Box
See Also

Point Results Dialog Box Help

Stream Analysis Types

About Stream Property Analysis

Use this analysis option to generate properties at the stream condition. Properties are generated for the total stream, the vapor phase, and the liquid phase.

Properties include the state variables, enthalpy, heat capacity, density, and flow rates. You can request flow rates on mole, mass, and volume bases. You can also request transport properties.

Flow Basis is defaulted to the Flow Basis on the Setup Specifications Global sheet. When you change the Flow Basis on the Stream Point Properties dialog box, Aspen Plus saves the dialog box settings.

Stream Analysis Point Results Dialog Box
See Also

Point Dialog Box Help

Stream Analysis Types

About Stream Property Analysis

This analysis calculates point properties for the total stream, and the vapor and liquid phases. The results are described below.

Variable

Description

TEMP

Temperature

PRES

Pressure

VFRAC

Vapor fraction

MOLEFLMX

Molar flow rate

MASSFLMX

Mass flow rate

VOLFLMX

Volume flow rate at stream condition

VLSTDMX

Standard liquid-volume flow rate (60 °F, atmospheric pressure)

MWMX

Molecular weight

HMX

Enthalpy

SMX

Entropy

CPMX

Heat capacity

RHOLMX

Density

RHOLSTD

Standard liquid density (60 °F, atmospheric pressure)

MUMX

Viscosity

KMX

Thermal conductivity

SIGMAMX

Surface tension

Stream Analysis PT Envelope Dialog Box
See Also

PT Envelope Results Dialog Box

Stream Analysis Types

About Stream Property Analysis

Use this analysis option to generate a pressure-temperature phase envelope for a stream. You can request the dew point/bubble point branches, and branches for any additional vapor fractions.

Note: PT Envelope analysis is only designed to work with vapor-liquid systems. The phase envelope algorithm is not designed to detect two liquid phases. For two-liquid systems, use another analysis type such as Generic.

When you specify a vapor fraction (Vfrac), the PT-Envelope algorithm does the following:

Automatically selects a starting point at a low temperature and pressure

Generates points for the specified Vfrac branch, and marches toward the mixture critical point

Generates the complimentary branch (1-Vfrac) when the mixture critical point is reached, by marching away from the mixture critical point

Generally works best by starting with the branch having the higher Vfrac value

For example, if you specify Vfrac=0.8, the Vfrac=0.8 branch is generated first, followed by the Vfrac=0.2 branch.

You must use a property method based on an equation of state to achieve a complete phase envelope. If you use a non-equation-of-state property method (for example, NRTL), the generated phase envelope will not close in the critical region because of inconsistencies between the vapor- and liquid-phase fugacity models.

You cannot generate phase envelopes for electrolyte systems.

Stream Analysis PT Envelope Results Dialog Box
See Also

PT Envelope Dialog Box Help

Stream Analysis Types

About Stream Property Analysis

This analysis generates a pressure-temperature phase envelope for a stream. You can specify the branches to be included, as follows:

Bubble/dew point branches

Branch for any vapor fraction

When you specify a vapor fraction (Vfrac), the branch corresponding to the complimentary vapor fraction (1-Vfrac) is also generated. For example, if you specify Vfrac=0.8, the branch for Vfrac=0.2 is also generated.

Note: PT Envelope analysis is only designed to work with vapor-liquid systems. For two-liquid systems, use another analysis type such as Generic.

If you are using an equation-of-state property method (for example, PENG-ROB), the branches of the phase envelope should close at the critical point.

If you are using a non-equation-of-state property method (for example, NRTL), the branches will not close because of inconsistencies in the vapor- and liquid-phase fugacity models.

The results are described below.

Variable

Description

VFRAC

Vapor fraction

TEMP

Temperature

PRES

Pressure

Stream Analysis PV Curve Dialog Box
See Also

PV Curve Dialog Results Box Help

Stream Analysis Types

About Stream Property Analysis

Use this analysis option to generate a vapor-fraction-versus-pressure curve for a stream.

You can specify a pressure range for the curve. By default, the curve is generated over the pressure range: atmospheric pressure to 10 atmospheres.

You can also specify the number of points on the curve.

Stream Analysis PV Curve Results Dialog Box
See Also

PV Curve Dialog Box Help

Stream Analysis Types

About Stream Property Analysis

This analysis calculates vapor fraction as a function of pressure at the stream temperature. The results are described below.

Variable

Description

PRES

Pressure

VFRAC

Temperature

Stream Analysis TV Curve Dialog Box
See Also

TV Curve Results Dialog Box Help

Stream Analysis Types

About Stream Property Analysis

Use this analysis option to generate a vapor-fraction-versus-temperature curve for a stream. You must specify a temperature range for the curve.

You can also specify the number of points on the curve.

Stream Analysis TV Curve Results Dialog Box
See Also

TV Curve Dialog Box Help

Stream Analysis Types

About Stream Property Analysis

This analysis calculates vapor fraction as a function of temperature at the stream pressure. The results are described below.

Variable 

Description

TEMP

Temperature

VFRAC

Vapor fraction

Analyzing Stream Properties
See Also

Example of Generating Point Analysis of a Stream

Example of Generating PV Curve

To calculate and display stream properties interactively:

Make sure your Properties environment specifications are complete. Then return to the Simulation environment.

Make sure the specifications or results for the stream you want to analyze are complete. Either the Stream | Input | Mixed sheet for the stream must be complete or the stream must have results that were calculated in the current session. If both stream input and results are available, as in the case of a tear stream you may have initialized, the results are used.

Click the stream to select it.

On the Home tab of the menu, in the Analysis group, click Stream Analysis, then choose the type of calculation you want to perform.

This command will be inactive if the conditions in Steps 1 and 2 are not satisfied.

Tip: You can also start the analysis by right-clicking a stream, clicking Analysis, and then choosing the type of calculation.

Make any selections and specifications you want in the dialog box.

If you selected Bubble and Dew Point or PV Curve, you must specify a pressure range. If you selected TV Curve, you must specify a temperature range.

If you selected PT Envelope, an Analysis | PT Envelope form will be opened instead of the dialog box. Follow the instructions for Pressure-Temperature Envelopes to complete this analysis.

Click Go.

Stream analysis results appear in a form window. For some analysis types, a plot of the results also appears. Print or view these results and plots as you would with simulation results.

Close the form and plot when you are sure you are finished with the results. The results are not saved. You must redo the calculations if you want to look at them again, once you close the form.

Example of Generating Point Analysis of a Stream
Stream S1 is a 50-50 mixture of ethane and heptane.

image\help0121.gif

image\help0122.gif

Example of Generating PV Curve
Stream S1 is a 50-50 mixture of ethane and heptane.

Stream Temperature is 50 F.

image\help0123.gif

image\help0124.gif

Generating PT-Envelopes
See Also

Creating a PT-Envelope from a Stream

Pressure temperature (PT) envelopes are generated by following curves of constant vapor fraction, through the critical point and back out the complementary branch. These plots are parametric, consisting of one curve for each vapor fraction and its complementary branch.

You can generate PT-Envelopes from any property method, except electrolyte property methods. But PT Envelopes generated from activity coefficient based and other non-equation-of-state property methods will not pass through the critical point. Instead there will be separate curves for each vapor fraction and its complementary branch.

Creating a PT-Envelope from a Stream
See Also

Example of Creating a PT Envelope

To create a PT-Envelope from a stream:

Make sure your Properties environment specifications are complete. Then return to the Simulation environment.

Make sure the specifications or results for the stream you want to analyze are complete. Either the Stream | Input | Mixed Phase sheet for the stream must be complete or the stream must have results that were calculated in the current session.

Click the stream to select it.

On the Home tab of the ribbon, in the Analysis group, click Stream Analysis. This command will be inactive if the conditions in Steps 1 and 2 are not satisfied.

Choose PT-Envelope.

Select the vapor fraction branches.

The Dew/Bubble point curves correspond to vapor fractions of 0 and 1.0. Additional vapor fractions can be specified. The complementary vapor fraction is automatically calculated for each vapor fraction specified.

Click Run analysis to create the PT-Envelope table and plot. For more information on customizing the plot, see Working with Plots.

Close the form and plot when you are sure you are finished with the results. The results are not saved. You must redo the calculations if you want to look at them again, once you close the form.

Example of Creating a PT Envelope
For example, a table of values and a plot for a P-T envelope is generated for vapor fractions of 0.0, 0.2, 0.4, 0.6, 0.8, and 1.0 for a 50-50 mixture of ethane and heptane in stream S1.

image\help0125.gif

image\help0126.gif

image\help0127.gif

About Stream Classes
You do not need to specify stream classes if your simulation does not involve solids, or the only solids are electrolytes salts defined using Chemistry forms or the Electrolyte Wizard.

Stream classes define structures for simulation streams when solids are present. Solids are carried in substreams, are characterized as either conventional or nonconventional components, and may have a particle size distribution (PSD).

A stream class defines a stream structure in terms of:

Number of substreams (each substream represents one type of solid particles with a uniform composition, though they may have different sizes)

Type of component carried in each substream (conventional or nonconventional)

Whether the substream carries particle size distribution information

Use the Setup | Stream Class form to enter information about stream classes.

Use this sheet

To

Flowsheet

Assign a new Stream Class to a flowsheet section

Streams

Assign streams to a stream class

Stream Class

Define the substreams in a stream class

Load Streams

Define which heat streams are load streams (see Working with Load Streams)

Use the Stream | Input | Solid or Nonconventional Solid sheet to define the particle size distribution weight fractions for a substream.

For help on using stream classes, see one of the following topics:

Use predefined stream classes

Create your own stream classes

Assign stream classes globally

Assign stream classes to flowsheet sections

Assign stream classes to individual streams

Using Predefined Stream Classes
These stream classes are predefined in Aspen Plus and should be sufficient for most applications:

Use this stream class

When

CONVEN

The simulation does not involve solids, or the only solids are electrolytes salts.

MIXCISLD

Conventional solids are present, but there is no particle size distribution.

MIXNC

Nonconventional solids are present, but there is no particle size distribution.

MIXCINC

Both conventional and nonconventional solids are present, but there is no particle size distribution.

MIXCIPSD

Conventional solids are present, with a particle size distribution.

MIXNCPSD

Nonconventional solids are present, with a particle size distribution.

MCINCPSD	Conventional and nonconventional solids are both present, with a particle size distribution
All unit operation models, except Extract, can handle stream classes with solid substreams, with these additional limitations:

These models

Require

All except Mixer and ClChng

All inlet and outlet streams belonging to the same stream class

CFuge, Filter, SWash, CCD, Dryer

At least one solids substream

Crusher, Screen, FabFl, Cyclone, VScrub, ESP, HyCyc

At least one solids substream with a particle size distribution

Crystallizer

At least one solids substream with a particle size distribution, if particle sizes are calculated

Creating or Modifying Stream Classes
See Also

How to Create or Modify Stream Classes

You need to create or modify a stream class to:

Add new substreams to a stream class

Create a stream class with PSD attributes for both CISOLID and NC type substreams

Use two or more particle size distribution definitions in a simulation

The number and types of substreams, together with their attributes, define a stream class. A stream class can have any number of substreams but the first substream for each Stream Class must be of type MIXED.

Each substream:

Must be assigned a type (MIXED, CISOLID, or NC)

Can be assigned a particle size distribution (PSD)

You can create a new stream class by listing all its substreams, or you can modify the substreams in an existing stream class. You cannot modify a MIXED type substream.

Use the Setup | Stream Class | Stream Class sheet to assign a new stream class to the structure of a stream by listing its constituent substreams or to modify the substreams in an existing stream class.

How to Create or Modify Stream Classes
To create or modify a substream:

In the navigation pane, open Setup, then click Stream Class.

Click the Stream Class sheet.

Select <new> from the list in the Stream Class field.

–or–

Use the list in the Stream Class field to select the name of the stream class to be modified.

Select the substreams to include in the stream class from the Available substreams list and use the right arrow button to move them into the Selected substreams list. The left arrow can be used to remove substreams from the Selected substreams list. The double arrow can be used to move all of the substreams in a list at one time.

Use the up and down arrow buttons to rearrange the list. Note that the first substream must be of type MIXED.

When finished, on the Define Stream Class dialog box, click Close.

Specifying a Global Stream Class
You can specify the default stream class globally for all streams in a simulation. You can override the global default for a flowsheet section or for an individual stream.

The default stream class is the stream class for flowsheet section GLOBAL. The default stream class is established by the Application Type you choose when creating a new run. You can change this default on the Setup Specifications Global sheet.

To specify the default stream class using the Setup Specifications Global sheet:

In the navigation pane, click Setup.

On the Global sheet, select a stream class in the Stream Class field.

Specifying Stream Classes for Flowsheet Sections
When using more than one stream class in a simulation, divide the flowsheet into sections and specify a stream class for each section.

A stream that connects blocks from different sections keeps the stream class of the section where it originates.

For example, a flowsheet might have an upstream section that involves solids and a downstream section that does not (after all solids have been removed). You can assign stream class MIXCISLD to the upstream section and CONVEN to the downstream section.

You must use the Mixer and ClChng models to transition between flowsheet sections that are assigned different stream classes.

To assign a Stream Class to a flowsheet section:

In the navigation pane, open Setup, then click Stream Class.

Click the Flowsheet sheet.

Use the list to select the name of the stream class associated with each flowsheet section.

Specifying Stream Classes for Individual Streams
You can override the global or section stream class by specifying a stream class for one or more individual streams. To do this, use the Stream Class | Streams sheet.

To assign streams to a Stream Class:

In the navigation pane, open Setup, then click Stream Class.

Click the Streams sheet.

Select the streams to include in the stream class from the Available streams list and use the right arrow button to move them into the Selected streams list.

Use the left arrow button to remove streams from the stream class. Use the double arrow button to move all of the streams in a list at one time.

Streams that are left in the Available streams list will have the stream class for the flowsheet section (from the Flowsheet sheet).

Specifying Heat Streams
See Also

Example of a Heat Stream to the Reboiler of a Column

Working With Load Streams

In Aspen Plus, material and energy balance reports consider only energy flows represented by streams. Any duty or power not represented by a heat or work stream appears on the report as an imbalance.

Any model that

Can have

Calculates heat duty

Outlet heat streams

Allows duty input specifications

Inlet heat streams

Duties, whether or not associated with heat streams, follow the convention:

If the heat duty is

Then heat is

Positive

Supplied to the block

Negative

Removed from the block

This is true of both duty specifications and duty results. Duties labeled global duty, heating duty, and cooling duty all follow the convention. Cooling duties are normally negative as a result of this convention, and if they are positive, it indicates heating is occurring instead.

Note: If you enter start and end temperatures in a heat stream, if the end temperature is higher than the start temperature, the duty must be zero or negative. If the end temperature is lower, the duty must be zero or positive. If you do not specify these temperatures, heat streams do not perform this check and it is your responsibility to ensure the heat flow with such a heat stream is feasible. Aspen Plus also does not check that the heat flow remains feasible if the final results of the connected blocks differ from these temperatures.

You can use an inlet heat stream to supply a heat duty specification to a unit operation block:

Double-click the stream in the flowsheet to select it. The Specifications sheet for the heat stream appears.

On the Specifications sheet, specify the heat duty.

In the destination block of the heat stream, leave the corresponding duty field blank. If you specify both an inlet heat stream and the heat duty in the destination block, the block specification is used.

Optionally, you can specifying the starting and ending temperatures corresponding to the source of the heat, for use in heat transfer calculations and load streams.

Example of a Heat Stream to the Reboiler of a Column
Stream QREB supplies 1 MMBtu/hr of external heat duty to a RADFRAC block.

image\help0128.gif

image\help0129.gif

Working with Load Streams
See Also

Specifying Heat Streams

Working with Qtvec

Load streams are heat streams which have a temperature and duty profile associated with them. The presence of a temperature profile ensures that infeasible heat transfer (from the cold to the hot streams) does not occur. Heat transfer from a load stream to a material stream or to other load streams can be modeled using the MHeatX unit operation model.

A load stream can be used to encapsulate the temperature and duty information of a material stream as it passes through one or more unit operation models losing or gaining heat as it moves from inlet to outlet.

To understand the physical significance of a load stream, consider a material stream with temperature Tin which passes through a series of Heater blocks H1, H2, H3, and H4. Suppose the stream loses a duty of Q1, Q2, Q3, and Q4 in these blocks and emerges with temperatures T1, T2, T3, and T4, respectively. The representative load stream vector will then contain the following:



Note that since the corresponding material stream is losing heat,
Tin > T1 > T2> T3 > T4, and Q1, Q2, Q3, and Q4 are positive. This load stream can be used on the hot side of an MHeatX block.

If the material stream was gaining heat, then the opposite would be true:
Tin < T1 < T2 < T3 < T4, and Q1, Q2, Q3, and Q4 are negative. This load stream can be used on the cold side of an MHeatX block.

A load stream coming out of a unit operation block encapsulates the Temperature and Duty information of a stream as it moves from inlet to outlet. The number of points in the outlet load stream vector can be specified on the Setup Stream Class Load Streams sheet. Also use this sheet to specify which heat streams are load streams.

The following blocks are capable of computing outlet load streams: MHeatX, RadFrac, MultiFrac, Heater, Flash2, Flash3, Mixer, and Qtvec. For RadFrac and MultiFrac, it is possible to have a load stream for each stage or a cumulative load stream for a specified number of stages.

If load streams are used as inlets to blocks other than MHeatX, Mixer, or Qtvec, or as outlets of blocks that do not support load streams, they will be treated as simple heat streams.

The load stream manipulator Qtvec can be used to combine multiple heat streams into a load stream or to manipulate the temperature profile of a load stream. Mixer can also combine multiple heat and/or load streams into a load stream.

Specifying Work Streams
In Aspen Plus, material and energy balance reports consider only energy flows represented by streams. Any duty or power not represented by a heat or work stream appears on the report as an imbalance.

Any model that

Can have

Allows power input specifications

Inlet work streams

Calculates power requirements

Outlet work streams

Work streams represent physical power such as a rotating shaft. To use an inlet work stream to supply a power specification to a pump or compressor block:

Double-click the stream in the flowsheet to select it.

On the Specifications sheet, specify the power.

If the power is

Then work is

Negative

Supplied to a block

Positive

Removed from a block

In the destination block of the work stream, leave the corresponding power field blank. If you specify both an inlet work stream and the power in the destination block, the block specification is used.

Optionally, you can specifying the driver speed corresponding to the source of the work, for use in work transfer calculations for Compressor models.

Specifying Power Streams
Use power streams to specify electrical power.

You can use a power stream to represent the power input to an Electrolyzer block. Connect the destination of the stream to the Power stream port of the block.

Using PseudoProduct Streams
You can define pseudoproduct streams to represent column internal flows, compositions, and thermodynamic conditions for these unit operations models:

PetroFrac

RadFrac

MultiFrac

Extract

CCD

You can use pseudoproduct streams to represent interconnecting streams in:

PetroFrac

MultiFrac

The stream report includes pseudoproduct streams. Mass balance calculations for the block do not include the flow rates associated with pseudo streams. The presence of pseudo streams does not affect block results.

Pseudoproduct streams from one block may be an inlet to another block. Using a pseudo stream as a block inlet results in an imbalance in the overall flowsheet material and energy balance report.

To define a pseudoproduct stream:

When creating the stream select a port labeled Pseudo Streams.

For each block that is connected to a pseudostream, complete the Pseudo Stream sheet(s) when specifying the block.

About Stream Libraries
See Also

Accessing Stream Libraries

Creating Stream Libraries

Stream libraries store information about the composition and condition of material streams. If a stream is defined in a library, you can retrieve information from the library instead of entering data on the Streams forms. You must specify the stream library in the Run Settings dialog box before you run the simulation.

Use stream libraries to:

Retrieve feed streams used frequently

Transfer stream information from a previous simulation

Initialize tear streams

A stream library can contain multiple cases. Each case usually represents the results of a previous simulation. When you retrieve results from a stream library, you specify the:

Case(s) from which to retrieve results

Streams in the current run that the stream library will fill in

Substreams and components to be retrieved

Component name translation, when the component IDs in the simulation are different from those in the library

Note: Stream libraries do not work with simulations containing hierarchies. Either remove the hierarchies or use another method for entering or retrieving stream data.

Accessing Stream Libraries
Note: Stream libraries do not work with simulations containing hierarchies. Either remove the hierarchies or use another method for entering or retrieving stream data.

To specify that a run retrieves information about stream composition and conditions from a stream library:

In the navigation pane, open Flowsheeting Options, then click Stream Library.

Select a case number from the Case No. field, or select <New> to add a new one.

On the Specifications sheet, specify the Case name for the streams you want to retrieve.

If you are retrieving information for a single stream, enter the name of the stream from the library in the Lib-ID box.

If you specified the Lib-ID in Step 4, select the Include Stream option and enter the name of the stream in the current simulation. Otherwise select one of these options:

Option

To retrieve all streams

All Streams

In library

Include Streams

Matching an ID from a list you specify

In the Substream and Components fields, specify the substreams and components you want to retrieve from the streams library.

– or –

Retrieve all substreams and components by leaving the fields blank.

In the State Variables field, specify the stream state variables that you want to retrieve from the stream library.

In the Component mapping for current case section of the form, specify the mapping between the component ID in the current simulation and the component ID in the stream library. In the column on the left, enter the component ID from the current simulation. In the column on the right, enter the corresponding component IDs in the stream library.

– or –

On the Defaults sheet, define a default component mapping. Aspen Plus uses this mapping as the default for all cases.

Repeat steps 2 through 8 for each case.

Using Stream Reconciliation
See Also

Reconciling Block Input

Reconciling Streams with Assay Data

You can use stream reconciliation to copy stream results for tear streams onto the input forms for those streams. This allows them to be used as initial estimates for subsequent runs, reducing convergence time for recycle loops if conditions are similar.

Streams that have not been reconciled will have Unreconciled in their status tooltip in the navigation pane. There is nothing wrong with a stream being unreconciled. Only tear streams should be reconciled to improve convergence time. There are several ways to identify tear streams:

The beginning of the control panel output has messages indicating the convergence blocks defined in the problem. Tear streams are converged by default using the WEGSTEIN method. There will be a message similar to the following (in this example, indicating stream 3 is a tear stream): Block $OLVER02 (Method: WEGSTEIN) has been defined to converge streams: 3

In the Results Summary | Streams | Material sheet, choose to display only tear streams.

The reconciled data stays the same even if there are changes in the initial conditions (feed streams and block inputs). If the initial conditions are going to be varied drastically, the reconciled stream data can cause convergence problems.

There are a number of ways to reconcile variables:

From the Home tab of the ribbon, in the Run group, click . An option available when using this command lets you only reconcile the tear streams.

You can right-click on a block or stream on the flowsheet and select Reconcile to reconcile its variables.

You can click a block or stream in the object manager, then click Reconcile.
You can right-click on the Blocks or Streams folder in the navigation pane and select Reconcile to reconcile all blocks or streams in a simulation or in a hierarchy level.

When you reconcile stream variables, the Copy stream results to input specifications dialog box appears. This dialog box allows you to control which streams and which variables are reconciled. If you are not just reconciling a single stream, you can choose to reconcile feed streams, tear streams, other streams with input (such as estimates), and/or other streams not included in these groups (not recommended - this will add reconciled input to all streams without input specifications).

You can choose to reconcile only those variables which already have input specifications, or you can choose which variables (two state variables and some form of composition variables) should be reconciled.

Note: You cannot reconcile immediately after loading a backup file containing results. You must run the problem first. Also, you can only reconcile individual streams and blocks if you use the Interactively Load Results feature (in Simulation Run Options) and some results are not loaded (select Load Results on the Home | Run |  | Options tab to load all results). When using Interactively Load Results, the results you want to reconcile must be loaded (typically by opening the results form) before you can reconcile them. If you want to reconcile all results you should turn off Interactively Load Results.

Reconciling Streams with Assay Data
There are some limitations for reconciling streams containing assay data.

In streams with no user-specified data, if pseudocomponents have not been generated for each assay, reconciliation may not be accurate because the flow of the assay cannot be reconciled into the stream. In this case, Aspen Plus will provide a warning and allow reconciliation to be canceled.

In streams with user-specified flows for assays with defined pseudocomponents, you must clear the input data from the stream before reconciling it. If you did not do so, you would end up with both the assay flow and the flows of the individual pseudocomponents in the stream.

In all other cases, stream data (including assays) can be reconciled.

Clearing Streams
You can clear all data entered for a stream by selecting it in the Streams Object Manager and then clicking the Clear button.

You can clear multiple streams at once by right-clicking the Streams folder in the navigation pane, then clicking Clear. In the dialog box that appears, choose which type of streams to clear (all streams, all but feed streams, or only product streams) and then click OK.

Note: Use this feature with care. Data you clear from a stream cannot be restored.

Viewing Stream Results
Each stream has a Results form. There is also the Streams form in the top-level Results Summary form and in the Results Summary form in each Hierarchy block. These forms work in similar ways, but the Results form in each stream omits irrelevant sheets based on the stream type.

Heat and work streams have simple results mainly just showing the heat/work rate. Load streams, which are heat streams that carry information about the temperatures at which the heat was obtained, have an extra sheet showing this information.

Material streams have detailed results split over several sheets. The Material sheet has the main results. When this sheet is active, the Stream Summary contextual ribbon tab is available; this allows great customization of the results displayed. You can also export the stream report to Excel or Aspen Simulation Workbook or display it on the flowsheet.

The other sheets for material streams show properties relevant to specific streams. Vol. % Curves, Wt. % Curves, and Petroleum show curves of petroleum property sets for streams containing petroleum components including pseudocomponents. The Polymer tab displays data about polymers, if present. The Solids tab displays particle size distributions for streams containing solids which are characterized in this way.

Unit Operation Models
See Also

Search the Knowledge Center for information on:

Unit Operations: Familiarize Yourself with the Models Available

The unit operation models are used to represent actual pieces of equipment, such as distillation columns or heat exchangers, commonly found in processing plants. To run a flowsheet simulation you must specify at least one unit operation model.

You choose unit operation models for flowsheet blocks when you define your simulation flowsheet.

Aspen Plus has a wide range of unit operation models to choose from. See one of the following topics for more information:

Select the right unit operation model

Enter model specifications

Override global specifications at the block level

Request heating/cooling curve calculations

Choosing the Right Unit Operation Model
Select appropriate unit operation models from the following table:

Type

Model

Description

Mixers/Splitters

Mixer

FSplit

SSplit

Stream mixer

Stream splitter

Substream splitter

Separators

Flash2

Flash3

Decanter

Sep

Sep2

Two-outlet flash

Three-outlet flash

Liquid-liquid decanter

Multi outlet component separator

Two-outlet component separator

Heat Exchangers

Heater

HeatX

MheatX

HXFlux

Heater/cooler

Two-stream heat exchanger, including interfaces to EDR programs*

Multistream heat exchanger

Heat transfer between a heat source and a heat sink

Columns

DSTWU

Distl

RadFrac
Extract

MultiFrac

SCFrac

PetroFrac

ConSep

Shortcut distillation design

Shortcut distillation rating

Rigorous distillation, including Aspen Rate-Based Distillation*

Rigorous liquid-liquid extractor

Rigorous distillation for complex columns

Shortcut distillation for petroleum

Rigorous distillation for petroleum

Conceptual distillation design

Reactors

RStoic

RYield

REquil

RGibbs

RCSTR

RPlug

RBatch

Stoichiometric reactor

Yield reactor

Equilibrium reactor

Equilibrium reactor

Continuous-stirred tank reactor

Plug flow reactor

Batch reactor

Pressure Changers

Pump

Compr

MCompr

Valve

Pipe

Pipeline

Pump/hydraulic turbine

Compressor/turbine

Multistage compressor/turbine

Rigorous valve pressure drop

Single segment pipeline pressure drop

Multi segment pipeline pressure drop

Manipulators

Mult

Dupl

ClChng

Analyzer

Selector

Qtvec

Measurement

Chargebal

 

Measurement

Design-Spec

Calculator

Transfer

Stream multiplier

Stream duplicator

Stream class changer

Stream calculator

Stream selector

Load stream manipulator

Plant to model connector

Enforce electroneutrality in recycle loops in processes modeled

with true-species electrolytes

Define plant measurements for data reconciliation purposes

Vary a specified variable to reach some target

Insert Fortran or Excel calculations into the model

Transfer the values of flowsheet variables from one place to another

Solids

Crystallizer

Crusher

Screen

SWash

CCD

Dryer

Granulator

Classifier

Fluidbed

Mixed-suspension mixed product removal crystallizer

Solids crusher

Solids separator

Single-stage solids washer

Counter-current decanter

Solids dryer

Granulators and agglomerators

Gravity-based separators like elutriators and sifters

Fluidized bed separator and reactor

Solids separators	
Cyclone

VScrub

CFuge

Filter

CfFilter

HyCyc

FabFl

ESP

Cyclone separator

Venturi scrubber

Centrifuge filter

Rotary vacuum filter

Cross-flow filter

Hydrocyclone

Fabric filter

Electrostatic precipitator

Batch models	
BatchProcess

BatchSep

Batch reactions and other batch operations

Batch distillation

User models

User, User2

User3
 

Excel Spreadsheets

Aspen Modeler packages

CAPE-OPEN unit operation

Hierarchy

User-supplied Fortran unit operation models

Accesses subroutines (such as R3HTUA, supplied with Aspen Plus) and Aspen EO

Excel spreadsheets interfaced through User2
 

Model packages exported from Aspen Custom Modeler

 

COM unit operations developed on VB or C++
 

Hierarchical structure

* Aspen Rate-Based Distillation and the EDR programs require a separate license and can be used only by customers who have purchased the right to use them through specific license agreements with Aspen Technology, Inc.

Mixers and Splitters
The unit operation models for mixing and splitting streams are:

Model

Description

Mixer

Stream mixer. Combines material, heat, or work streams.

FSplit

Stream splitter. Divides feed based on splits specified for the outlet streams.

SSplit

Substream splitter. Divides feed based on splits specified for each substream.

See The Model Palette for information on how to place unit operation models on the flowsheet.

The Mixer unit operation model combines streams. FSplit and SSplit combine feed streams and then split the resulting stream, based on your specifications.

Mixer
See Also

Mixer help

Mixer combines material streams (or heat streams or work streams) into one outlet stream. If material streams are mixed, you can use an optional water decant stream to decant free water from the outlet. You can specify an outlet pressure or pressure drop for material streams. The mixer model determines the combined outlet stream temperature and phase condition by performing an adiabatic phase equilibrium flash calculation on the composite feed streams.

Mixer can be used to model mixing tees, or other types of stream mixing operations.

FSplit
See Also

FSplit help

FSplit combines material streams (or heat streams or work streams) and divides the resulting stream into two or more outlet streams. All outlets have the same composition and properties.

Use FSplit to model flow splitters and purges or vents. You must provide specifications for all but one outlet stream. FSplit calculates the flowrate of the unspecified stream.

SSplit
See Also

SSplit help

SSplit combines material streams and divides the resulting stream into two or more outlet streams. SSplit allows specification of streams with various substreams.

You must specify the splits of each substream, for all but one outlet stream. SSplit calculates the flowrate of each substream in the unspecified outlet stream. For more information about substreams, see Defining New Substreams.

For example, you can use SSplit to perfectly separate a stream containing both liquid and solid phases into two streams each containing only one pure phase. You can also use SSplit to model other solid stream splitters, bleed valves, purges or vents.

Separators
The unit operation models for component separators, liquid-liquid separators, and flashes are:

Model

Description

Flash2

Two-outlet flash. Models flash drums, evaporators, and so forth, using rigorous Vapor-Liquid or Vapor-Liquid-Liquid equilibrium.

Flash3

Three-outlet flash. Models flash drums, decanters, and so forth, using rigorous Vapor-Liquid-Liquid equilibrium.

Decanter

Two-phase liquid-liquid decanter. Models decanters, and single stage separators with two liquid phases and no vapor phase.

Sep

Component separator. Separates components into multiple outlet streams based on specified flows or split fractions.

Sep2

Two outlet component separator. Separates components into two outlet streams based on specified flows, split fractions, or purities.

See The Model Palette for information on how to place unit operation models on the flowsheet.

The Separator Blocks, Sep and Sep2, combine feed streams and then split the resulting stream, based on your specifications. When the details of the separation are unknown or unimportant, you can use Sep and Sep2 instead of rigorous separation models (such as distillation or absorption models) to save computational time.

The flash models, Flash2 and Flash3, determine the thermal and phase conditions of a mixture with one or more inlet streams. You can generate heating or cooling curve tables for these models.

The flash models represent single stage separators such as knock-out drums. They perform a phase equilibrium flash calculation based on your specifications. Adiabatic, isothermal and isobaric flashes, and dew or bubble points, are among the calculations these models perform.

In general, to fix the thermodynamic condition of inlet streams, you must specify a combination of any two of:

Temperature

Pressure

Heat duty

Molar vapor fraction

This table shows you what to set the molar vapor fraction as:

To Determine

Set the Molar Vapor Fraction

The dew point of a mixture

1

The bubble point of a mixture

0

The combination of heat duty and molar vapor fraction is not allowed in the flash models.

Flash2
See Also

Flash2 help

Flash2 performs rigorous 2 (vapor liquid) or 3 (vapor liquid liquid) phase equilibrium calculations. Flash2 produces one vapor outlet stream, one liquid outlet stream, and an optional water decant stream.

You can use Flash2 to model flashes, evaporators, knock out drums, and any other single stage separators, with sufficient vapor disengagement space. Optionally, you can specify a percentage of the liquid phase to be entrained in the vapor stream.

Flash3
See Also

Flash3 help

Flash3 performs rigorous 3 phase vapor liquid liquid equilibrium calculations, to produce one vapor outlet stream and two liquid outlet streams.

You can use Flash3 to model any single stage separator with sufficient vapor-liquid disengagement space as well as two liquid phase settling space. You can specify entrainment of each liquid phase in the vapor stream.

The vapor outlet stream can have a flow rate of zero for a decanter with no vapor-liquid disengagement. If you do not know whether there is a vapor phase, use the Flash3 model instead of the Decanter model.

Decanter
See Also

Decanter help

Decanter models knock out drums, decanters, and other single stage separators with sufficient residence time for separation of two liquid phases but without a vapor phase.

Decanter determines the thermal and phase conditions of a mixture with one or more inlet streams, at the specified temperature or heat duty.

Decanter can calculate liquid liquid distribution coefficients from:

Physical property method

User supplied distribution correlation

User supplied Fortran subroutine

For information about writing Fortran subroutines, see Aspen Plus User Models. Search for this document in the Knowledge Center.

Since the Decanter model assumes implicitly that there is no vapor phase formation, use Flash3 if you suspect any vapor phase formation.

Sep
See Also

Sep help

Sep combines inlet streams and separates the resulting stream into two or more streams, according to splits you specify for each component. You can specify the splits for each component in each substream.

You can use the Sep model to represent component separation operations such as a distillation column when fractionation achieved or desired by the column is known but the details of the column energy balance are unknown or unimportant.

Sep2
See Also

Sep2 help

Sep2 combines inlet streams and separates the resulting stream into two outlet streams. Sep2 is similar to Sep, but offers a wider variety of specifications, such as component purity or recovery. These specifications make it even easier to represent component separation operations such as a distillation column when fractionation achieved or desired by the column is known but the details of the separation are unknown or unimportant.

Heat Exchangers
The unit operation models for heat exchangers and heaters (and coolers), and for interfacing to the EDR heat exchanger programs are:

Model

Description

Heater

Thermal and phase state changer. Models heaters, coolers, condensers, and so forth.

HeatX

Two-stream heat exchanger. Models co-current and counter-current shell and tube heat exchangers. In rigorous mode, can also mode air-cooled and plate exchangers using Aspen Exchanger Design and Rating.

MHeatX

Multistream heat exchanger. Models LNG exchangers, cold boxes, and so forth, and performs zone analysis.

HXFlux

Heat transfer calculation model. Models convective heat transfer between a heat sink and a heat source.

See The Model Palette for information on how to place unit operation models on the flowsheet.

All heat exchangers determine the thermal and phase conditions of a mixture with one or more inlet streams. The heat exchanger models simulate the performance of heaters or two or multi stream heat exchangers. You can generate heating or cooling curve tables for all models described in this topic.

Heater
See Also

Heater help

Heater performs these types of single phase or multiphase calculations:

Bubble or dew point calculations

Add or remove any amount of user specified heat duty

Match degrees of superheating or subcooling

Determine heating or cooling duty required to achieve a certain vapor fraction

Heater produces one outlet stream, with an optional water decant stream. The heat duty specification may be provided by a heat stream from another block.

You can use Heater to model:

Heaters or coolers (one side of a heat exchanger)

Valves when you know the pressure drop

Pumps and compressors whenever you do not need work related results

You can also use Heater to set or change the thermodynamic condition of a stream.

HeatX
See Also

HeatX help

Shortcut Method for HeatX

Example of Specification for a Shell and Tube Heat Exchanger

Rigorous Method for HeatX (Shell and Tube)

Rigorous Method for HeatX (Air Cooled)

Rigorous Method for HeatX (Plate)

Search the Knowledge Center for information on:

Full Process Model: Leverage Heat Exchanger Models within Aspen Plus

HeatX can perform these types of calculations:

Shortcut design or simulation

Detailed rating or simulation for most types of two stream heat exchangers (only supported for compatibility with older files; new exchangers should use Rigorous instead).

Rigorous design, rating, or simulation by interfacing with the Aspen Exchanger Design and Rating (EDR) programs: Shell&Tube, AirCooled, or Plate. Kettle Reboiler and Thermosyphon reboilers use the same rigorous calculations using Shell&Tube while interfacing with a column.

The main difference among the calculation methods is the procedure for the calculation of the overall heat transfer coefficient.

The shortcut method always uses a user specified (or default) value for the overall heat transfer coefficient.

The Rigorous methods use EDR models for film coefficients and combines the resistances due to films on each side of the wall with the wall resistance, to calculate the overall heat transfer coefficient. There are several different methods for different EDR programs. You need to specify the name of the input file for this program.

You must specify the hot and cold inlet streams and one of these performance specifications for your heat exchanger:

Outlet temperature or temperature change of the hot or cold stream

Molar vapor fraction of the hot or cold stream

Degree of superheating (subcooling) of cold (hot) stream

Heat exchanger duty

Surface heat transfer area

UA as an optional if heat transfer area is missing

Temperature approach at the hot or cold stream outlet

Shortcut Method for HeatX
For the shortcut method you may specify a pressure drop for each side of the heat exchanger. The HeatX model determines the outlet stream conditions based on heat and material balances and uses a constant value for the heat transfer coefficient to estimate the surface area requirement. You may also provide phase specific heat transfer coefficients.

Rigorous Method for HeatX (Air Cooled)
HeatX can also perform detailed design, rating, or simulation calculations by using an Aspen AirCooled model, which has more variety of cross flow heat exchanger types than the detailed method, including:

Air-cooled heat exchangers

Hot gas heat recuperators

Fired heater convection sections

Gas-cooled heat exchangers

HeatX can:

Perform design, rating, or simulation calculations

Estimate maximum fouling

Display setting plan and tubesheet layout drawing

To use this rigorous method:

Specify the appropriate program as the Calculation method.

Specify the name of the input file for that exchanger.

Specify optional parameters on the EDR Options form.

Information related to the heat exchanger configuration and geometry for AirCooled are entered through the EDR Browser form. The exchanger specification is then saved in the input file.

Rigorous Method for HeatX (Plate)
HeatX can also perform detailed design, rating, or simulation calculations by using an Aspen Plate model, which has cab simulate plate & frame heat exchangers:

HeatX can:

Perform design, rating, or simulation calculations

Estimate maximum fouling

To use this rigorous method:

Specify the appropriate program as the Calculation method.

Specify the name of the input file for that exchanger.

Specify optional parameters on the EDR Options form.

Information related to the heat exchanger configuration and geometry for Plate are entered through the EDR Browser form. The exchanger specification is then saved in the input file.

Example of Specification for a Shell and Tube Heat Exchanger
Use the detailed calculation type to predict the performance of countercurrent shell and tube heat exchanger, where the hot fluid is on the shell side.

On the Setup | Specifications sheet, specify Type Simulation, Calculation Detailed, and Hot fluid on the Shell side. Click Next.

On the Geometry | Shell sheet, specify TEMA shell type F - Two pass shell, and Inside shell diameter 2.624672 ft. Click Next.

On the Geometry | Tubes sheet, specify the tube layout: Total number 652, Length 89.76378 in, Pattern Rot-triangle, Pitch 0.8188956 in.

Specify the tube size: Inner diameter 0.5511804 in, Outer diameter 0.6299208 in. Click Next.

On the Geometry | Baffles sheet, specify Rod baffle, and specify the following:

Field

Value

No. of baffles, all passes

8

Inside diameter of ring

22.28346 in

Outside diameter of ring

23.07086 in

Support rod diameter

0.23622 in

Total length of support rods per baffle

129.252 in

Click Next.

Specify all the nozzle diameters to be 5.984251 in.

 MHeatX
See Also

MHeatX help

MHeatX represents heat transfer between multiple hot and cold streams, as in an LNG exchanger. It can also model two stream heat exchangers. You can decant free water from any outlet stream. An MHeatX block is divided into multiple heaters connected by heat streams. This configuration usually leads to faster flowsheet convergence.

MHeatX does not use or calculate heat transfer coefficients, but it can calculate the overall UA for the exchanger and perform a detailed zone analysis.

HXFlux
See Also

HXFlux help

HXFlux is used to perform heat transfer calculations between a heat sink and a heat source, using convective heat transfer. The driving force for the convective heat transfer is calculated as a function of log-mean temperature difference or LMTD.

You can specify variables among the inlet and outlet stream temperatures, duty, heat transfer coefficient, and heat transfer area. HXFlux calculates the unknown variable and determines the log mean temperature differences, using either the rigorous or the approximate method.

About the Heat Exchanger Design Program Interface
You can use the heat exchanger design program interface (HTXINT) to select heating/cooling curve data from an Aspen Plus run and transfer it to a file in a format that can be read by these heat exchanger design programs:

Aspen Hetran

AspenTech's TASC, ACOL, and APLE

HTRI's ST, CST, ACE, PHE, and RKH

You can extend the default data produced by the heating/cooling curves to include all of the properties each design program needs.

Note: The TASC interface is limited to using single heating/cooling curves in Aspen Plus blocks that use HCurves.

Run HTXINT after completing an Aspen Plus run and before starting the design program. HTXINT guides you through a series of prompts. Select the heating/cooling curves for the design program.

HTXINT is an application written using the Aspen Plus summary file toolkit.

Generating Property Data in a Simulation
See Also

Specifying the Property Set

Specifying the Number of Heating/Cooling Curve Points

Specifying Pressure Drops

HTXINT uses property data from heating/cooling curves that can be generated by many Aspen Plus unit operation models. To use HTXINT, you must first use Aspen Plus to generate the required heating/cooling curves. Create one or more heating/cooling curves for each block of interest. For details on specifying heating and cooling curves, see Requesting Heating/Cooling Curve Calculations. On the Hcurve form for the block:

Specify HXDESIGN in the Property Sets field.

Select the required number of points. See Specifying the Number of Heating/Cooling Curve Points.

Specify the pressure drop.

The following sections describe each step.

Specifying the Property Set
To generate the property data required for all supported heat exchanger program interfaces, select the built in property set HXDESIGN on the Hcurve forms.

Specifying the Number of Heating/Cooling Curve Points
The Aspen Plus default of ten intermediate points is generally acceptable. You can increase or decrease this number. If the number of points exceeds the maximum number that the heat exchanger program accepts, HTXINT selects the points to include the end points and any dew or bubble points in the heating/cooling curve. Since Aspen Plus adds extra points for dew or bubble points, more points may be generated than you request.

Specifying Pressure Drops
Hetran is the only design program that accepts non-isobaric property curves. A heating/cooling curve with a pressure drop cannot be copied to the interface files for the other programs.

HTRI programs accept up to 12 curves per side at different pressures. TASC, ACOL, and APLE are limited to a single heating/cooling curve on each side, and Hetran accepts 3 on each side. For maximum accuracy, define heating/cooling curves for:

Inlet pressure

Outlet pressure

Intermediate pressure where phase change occurs

Note: The start and end temperatures of the first heating/cooling curve are treated as process temperatures. In Aspen Plus, these temperatures are obtained by flashing the stream at constant enthalpy and pressure (PH flash) where enthalpy is linearized from inlet to outlet. Only when the pressure is set to the process pressure will the temperature match the process temperature. So, for Hetran, one of the Linear pressure options is recommended in generating these heating curves. For other heat exchanger models, the non-isobaric curve is not allowed. To make heating/cooling curve temperature most closely match both start and end temperatures in this case, choosing pressure profile option Mid-Point is recommended.

RadFrac
See Also

RadFrac help

Rating Mode

Design Mode

Example of Specifying a Reactive 3-phase Distillation Column

RadFrac is a rigorous model for simulating all types of multistage vapor liquid fractionation operations. In addition to ordinary distillation, it can simulate:

Absorption

Reboiled absorption

Stripping

Reboiled stripping

Extractive and azeotropic distillation

RadFrac is suitable for:

Three phase systems

Narrow boiling and wide boiling systems

Systems exhibiting strong liquid phase nonideality

RadFrac can detect and handle a free water phase or other second liquid phase anywhere in the column. You can decant free water from the condenser.

RadFrac can handle solids on every stage.

RadFrac can model columns where chemical reactions are occurring. Reactions can have fixed conversions, or they can be:

Equilibrium

Rate controlled

Electrolytic

RadFrac can model columns where two liquid phases exist and different chemical reactions occur in the two liquid phases. RadFrac can also model salt precipitation.

RadFrac can operate in rating mode or design mode.

With the separately-licensed Aspen Rate-Based Distillation feature, RadFrac can perform rate-based distillation calculations.

Rating Mode
See Also

RadFrac rating mode help

In rating mode RadFrac calculates:

Temperature

Flow rate

Mole fraction profiles

These profiles are based on specified column parameters, such as reflux ratio, product rates, and heat duties.

All rating mode flow specifications can be in mole, mass, or standard liquid volume units.

You can specify component or stage efficiencies.

RadFrac accepts both Murphree and vaporization efficiencies. You can manipulate Murphree efficiencies to match plant performance.

Design Mode
See Also

RadFrac design mode help

In design mode, you can specify temperatures, flow rates, purities, recoveries, or stream properties anywhere in the column. Examples of stream properties are volume flow and viscosity. You can specify all flow, flow ratio, composition, and recovery specifications in mole, mass, or standard liquid volume units.

RadFrac has extensive capabilities for sizing and rating trays and packings. You can choose from several common tray types, and random and structured packings.

Example of Specifying a Reactive 3-phase Distillation Column
The following example shows the specifications for a reactive 3-phase distillation column without a bottoms product and a reflux ratio of 45. The column has 18 equilibrium stages and a total condenser and a kettle reboiler.

image\help0135.gif

All stages from the condenser (stage 1) through stage 18 are checked for presence of an aqueous second liquid phase.

image\help0136.gif

A liquid decanter is specified on equilibrium stage 10 which returns 30% of total liquid flow.

image\help0137.gif

The reactions occur only in the reboiler. The reaction rate and stoichiometry are referenced from a Reaction ID defined in the Reactions folder.

image\help0138.gif

The total liquid holdup (reaction volume) is 1 m3.

image\help0139.gif

Aspen Rate-Based Distillation
Aspen Rate-Based Distillation is an extension to RadFrac which performs rate-based, non-equilibrium separation. It simulates actual tray and packed columns, rather than idealized representations.

Aspen Rate-Based Distillation:

Explicitly accounts for the interphase mass and heat transfer processes.

Simulates columns involving vapor liquid fractionation operations such as absorption, distillation, and stripping.

Use Aspen Rate-Based Distillation for

Systems with both a vapor and a liquid phase. Aspen Rate-Based Distillation can detect a free water phase only in the condenser.

Nonreactive systems

Reactive systems

Electrolyte systems

Aspen Rate-Based Distillation does not use empirical factors, such as efficiencies and the Height Equivalent of a Theoretical Plate (HETP). Aspen Rate-Based Distillation treats separation as a mass and heat transfer rate process, instead of an equilibrium process. The degree of separation achieved between the contacting phases depends on the extent of mass and heat transfer between phases. The transfer rates between phases are strongly affected by the extent to which the phases are not in equilibrium. Aspen Rate-Based Distillation assumes that thermodynamic equilibrium prevails only at the vapor liquid interface separating the contacting phases.

RPlug
See Also

RPlug help

RPlug rigorously models plug flow reactors. A thermal fluid stream around the reactor is optional. You can use RPlug to model reactors with cocurrent and countercurrent thermal fluid streams. RPlug handles rate-based kinetic reactions only.

Working with RPlug
See Also

Flowsheet Connectivity

Specifying RPlug

EO Usage Notes for RPlug

RPlug is a rigorous model for plug flow reactors. RPlug assumes that perfect mixing occurs in the radial direction and that no mixing occurs in the axial direction. RPlug can model one-, two-, or three-phase reactors. You can also use RPlug to model reactors with thermal fluid streams (co-current or counter-current).

RPlug handles kinetic reactions, including reactions involving solids. You must know the reaction kinetics when you use RPlug to model a reactor. You can provide the reaction kinetics through the built-in Reactions models or through a user-defined Fortran subroutine.

Use the following forms to enter specifications and view results for RPlug:

Use this form

To do this

Setup

Specify operating conditions and reactor configuration, select reaction sets to be included, and specify pressure drops

Convergence

Specify flash convergence parameters, calculation options and parameters for the integrator

Report

Specify block-specific report options

User Subroutine

Specify user subroutine parameters for kinetics, heat transfer, pressure drop, and list user variables to be included in the profile report

Dynamic

Specify parameters for dynamic simulations

Block Options

Override global values for property methods, simulation options, diagnostic levels, and report options for this block

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

View summary of operating results and mass and energy balances for the block

Profiles

View profiles versus reactor length for process stream conditions, thermal fluid stream conditions, properties, component attributes, PSD, and user variables

Stream Results

View stream results

Summary

View and edit all scalar variables for this block.

 Specifying RPlug
See Also

Solution Method

Integration Error

Reactions

Solids

Pressure Drop

Liquid Holdup

Use the Setup | Configuration sheet to specify reactor tube length and diameter. If the reactor consists of multiple tubes, you can also specify the number of tubes. You can specify the pressure drop across the reactor on the Setup Pressure sheet. Additional required input for RPlug depends on the reactor type.

When you use this Reactor Type

And solid phase is

And fluid and solid phase temperatures are

Specify

Reactor with specified temperature

-

-

Reactor temperature, or temperature profile

Adiabatic reactor

Not present

-

No required specifications

 

Present

Same

No required specifications

 

Present

Different

U (fluid phase - solids phase)

Reactor with constant thermal fluid temperature

Not present

-

Thermal fluid temperature, and
U (thermal fluid - process stream)

 

Present

Same

Thermal fluid temperature, and
U (thermal fluid - process stream)

 

Present

Different

Thermal fluid temperature,
U (thermal fluid - fluid phase),
U (thermal fluid - solids phase), and
U (fluid phase - solids phase)

Reactor with co-current thermal fluid

Not present

-

U (thermal fluid - process stream)

 

Present

Same

U (thermal fluid - process stream)

 

Present

Different

U (thermal fluid - fluid phase),
U (thermal fluid - solids phase), and
U (fluid phase - solids phase)

Reactor with counter-current thermal fluid

Not present

-

Thermal fluid outlet temperature or molar vapor fraction, and
U (thermal fluid - process stream)

 

Present

Same

Thermal fluid outlet temperature or molar vapor fraction, and
U (thermal fluid - process stream)

 

Present

Different

Thermal fluid outlet temperature or molar vapor fraction,
U (thermal fluid - fluid phase),
U (thermal fluid - solids phase), and
U (fluid phase - solids phase)

For reactors with countercurrent external thermal fluid, RPlug calculates the thermal fluid inlet temperature. The result overrides your specified inlet thermal fluid temperature. You can use a design specification that manipulates the thermal fluid exit temperature or vapor fraction to achieve a specified thermal fluid inlet temperature.

For reactors with an external thermal fluid stream, you can use different physical property methods and options (Block Options | Properties sheet) for the process stream and the thermal fluid stream.

RPlug Solution Method
See Also

Integration Error

RPlug Scaling Factors

RPlug Corrector Method

RPlug integrates ordinary differential equations where the independent variable is the position z along the reactor length. Those equations have the general form:

d(flow)/dz = generation

The initial conditions are defined by the process inlet stream variables.

For the material balance, there's one equation per component (flow × mole fraction, or partial molar flow rate). The generation term is calculated by the reaction kinetics.

The heat balance considers transfer from thermal fluid to process fluid. The differential equation is:

d(F·h)/dz = Q

Where:

F = flow (kg/s)

h = enthalpy (J/kg)

Q = heat input (W/m)

The following expression is used for Q:

Q = U × (Tprocess – Tthermal) × π × D

Where:

U = heat transfer coefficient (thermal fluid to process stream) (W/m2/K)

Tthermal = temperature of thermal fluid (K)

Tprocess = temperature of process side (K)

D = tube internal diameter at location z in reactor (m)

Q = heat transfer (W/m)

The heat transfer coefficient is relative to the tube wall perimeter (which leads to tube wall area as this equation is integrated over the tube length).

When the Operating condition for Fluid-solid phase heat transfer is set to Temperatures may be different, then two differential equations are used to evaluate the fluid (process) and solid (process) temperature profiles.

d(Fm·hm)/dz = Qm

Where Fm, hm, and Qm represent the flow and enthalpy of the mixed substream and the heat transferred to it, and

d(Fs·hs)/dz = Qs

Where the s subscript indicates the same quantities for the solid substream.

Qm = Ucm × (Tthermal – Tprocess) × π × D + Usm × (Tsolid – Tprocess) × π × D

Qs = Ucs × (Tthermal – Tsolid) × π × D - Usm× (Tsolid – Tprocess) × π × D

Ucm = heat transfer coefficient thermal fluid to fluid phase (W/m2/K)

Usm = heat transfer coefficient solid to fluid phase (W/m2/K)

Ucs = heat transfer coefficient thermal fluid to solid (W/m2/K)

Note: It assumed that all heat transfer coefficients U are based on the tube wall area. You will have to correct the heat transfer coefficient if you wish to use a different area e.g., for the heat transfer between the mixed and the solid substream.

Heat of reaction is accounted for by the change in the reference state due to the change in composition.

RPlug integrates these variables while keeping the integration error below a specified tolerance. The integration error is applied to scaled variables to keep all error relative to the magnitude of the variable.

RPlug uses a variable-step-size Gear algorithm during this integration to solve the differential form of the conservation equations. Each equation is solved for in each element using a trial-and-error method. The Convergence method on the Convergence | Integration Loop sheet is used correct each wrong guess to a new value. Integration convergence tolerance on the Convergence | Integration Loop sheet determines how tightly these equations are solved. Tight (small) tolerances result in small steps, long run times, and increased model accuracy.

Solution is most difficult when:

Rates of change are high

Range of variables covers several orders of magnitude

There are many components (and thus many variables to solve)

Variables (compositions, temperature, reaction rates) are interrelated and highly sensitive to each other

Integration Error
See Also

Working with RPlug

The integrator scales errors based on your selection for Error Scaling Method. There are three available methods:

Static Scaling: The scale factors are set to constant values based on the value of the variable in the feed to the reactor. If the initial value of the variable is very low, the scale factor will be set to a nominal value based on the specified minimum and heuristic rules built into the reactor model.

Dynamic Scaling: The scale factors for all variables are updated at each integration step based on the value of the variable at the previous convergence step. Dynamic scaling is recommended when the magnitude of some of the integrated variables changes by several orders of magnitude.

Hybrid Scaling: This method uses static scaling for all variables except those related to enthalpy and reactor duty. These variables are scaled dynamically. With this option, you can manipulate the ratio of the energy balance tolerance to the integration tolerance. In some situations, the reactor performance can be dramatically improved by increasing this ratio (which loosens the tolerance of the energy balance equations in the model).

If you select the Dynamic method and the value of the variable is approaching zero (for instance, when the variable is the flow of a depleted reactant), the error contribution of this variable increases because of the dynamic scaling. As a result, the RPlug integration algorithm proceeds incrementally during the integration. You can specify Minimum scale factor to avoid this problem. The magnitude of the minimum scale factor value should correspond to the level of accuracy desired for any trace species.

Integration References

RPlug uses the EPISODE integration package (Experimental Package for Integration of Systems of Ordinary Differential Equations).

   dy/dt = f(y,t),  y = (y(1),y(2),...,y(n)) transpose, given the initial value of y.

This package has been modified extensively by Aspen Technology.

G. D. Byrne and A. C. Hindmarsh, A Polyalgorithm for the Numerical Solution of Ordinary Differential Equations, UCRL-75652, Lawrence Livermore Laboratory, P. O. Box 808, Livermore, CA 94550, April 1974. Also in ACM Transactions on Mathematical Software, 1 (1975), pp. 71-96.

A. C. Hindmarsh and G. D. Byrne, EPISODE.. An Experimental Package for the Integration of Systems of Ordinary Differential Equations, UCID-30112, L.L.L., May, 1975.

A. C. Hindmarsh, GEAR.. Ordinary Differential Equation System Solver, UCID-30001, Rev. 3, L.L.L., December, 1974.

Reactions in RPlug
See Also

Working with RPlug

You must specify reaction kinetics on the Setup | Reactions sheet, by referring to Reaction IDs that you select. You can specify one-, two-, or three-phase calculations. Specify the reaction phases on the Reactions forms.

RPlug can handle kinetic and equilibrium reactions, but adding equilibrium reactions increases the difficulty of integration convergence. Alternative ways of specifying equilibrium reactions without making the system harder to solve include specifying them as reversible kinetic reactions using General reaction sets and specifying them in Chemistry, but note the limitations on using RPlug in electrolyte systems.

Solids in RPlug
Reactions can involve solids. Solids can be:

At the same temperature as the fluid phases

At a different temperature from the fluid phases (only for Reactor Types other than the Reactor with Specified Temperature or Reactor with Specified External Heat Flux Profile)

In the latter case, you must specify the heat transfer coefficients on the Setup | Specifications sheet. The effect on the heat transfer equations is shown in RPlug Solution Method.

Reactions in RPlug must have at least one component in the mixed substream. To model plug-flow reactions occurring entirely in a solid substream, try using a series of RGibbs reactors instead.

Use the Setup | PSD sheet to specify the particle size distribution of outlet solids, if your stream class has a PSD attribute.

If you specify the substreams are at different temperatures and you do not supply a user kinetic subroutine, RPlug assumes all reactions which involve both solid substream and MIXED substream components occur in the solid phase. This means that the reactions occur at the temperature of the solid substream(s) and any heat of reaction affects the enthalpy of the solid substream(s). If you do specify a kinetic subroutine, the subroutine determines where the reactions occur and sets FLUXM and FLUXS and the reaction rates appropriately. See chapter 11 of Aspen Plus User Models for more information about the kinetic subroutine. Search the Knowledge Center for this document.

Note: Any unit operations that perform a flash will equalize the substream temperatures. Many blocks will flash the inlet streams, outlet streams, or both. If you mean to maintain the solids at a different temperature than the fluid phases, you should separate the substreams into separate streams in an SSplit block before feeding the stream through any block that performs a flash.

Pressure Drop in RPlug
RPlug can use a specified pressure drop, one calculated by a Fortran subroutine, or by using frictional correlations. These correlations are available:

Beggs-Brill

Dukler

Orkiszewski

Angel-Welchon-Ros

Lockhart-Martinelli

Hagedorn-Brown

Darcy's Law

Ergun's equation

Ergun's Equation
Ergun's equation is suitable for computing the pressure drop across packed-bed reactors in RPlug and packed-bed pipes in Pipe and is given by:



Where:

U

=

Superficial velocity

ε

=

Bed voidage

μ

=

Fluid viscosity

Dp

=

Particle diameter. It's recommended to use the Sauter mean diameter here, 6V/A, where V is the volume of a particle and A is its area.

ϕs	
=

Particle shape factor. Use this factor to account for the non-spherical shape of particles if using another diameter measure, such as a screen size for screened particles.

ρ

=

Fluid density

When there are two or three phases, the fluid properties are calculated as weighted averages of the phase properties, weighted by the phase fractions, and this equation is used with the average properties.

Liquid Holdup
RPlug can use a specified liquid holdup profile (and solid holdup profile, if solids are present) along the length of the reactor, assume no slip between phases, or use a two-phase correlation to calculate the liquid holdup (not intended for use with solids). These correlations are available:

Beggs-Brill

Flanigan

Eaton

Hoogendorn

Hughmark

Slack

Orkiszewski

Angel-Welchon-Ros

Lockhart-Martinelli

Hagedorn-Brown

Mixer Reference
See Also

Flowsheet Connectivity for Mixer

Specifying Mixer

EO Usage Notes

Use Mixer to combine streams into one stream. Mixer models mixing tees and other types of mixing operations.

Mixer combines streams of one type (material, heat, work, or power streams) into one stream. Optionally, select the Heat (Q) and Work (W) Mixer icons from the Model Palette for mixers that only allow heat and work streams, respectively. A single Mixer block cannot mix streams of different types.

Flowsheet Connectivity for Mixer
image\flowconn_mixer_m_wmf.gif

Flowsheet for Mixing Material Streams

Material Streams

Inlet
At least two material streams

Outlet
One material stream
 One water decant stream (optional)

image\flowconn_mixer_h_wmf.gif

Flowsheet for Adding Heat Streams

Heat Streams

Inlet
At least two heat streams, which may be load streams

Outlet
One heat stream, which will be a load stream if possible

image\flowconn_mixer_w_wmf.gif

Flowsheet for Adding Work Streams

Work Streams

Inlet
At least two work streams

Outlet
One work stream

image\flowconn_mixer_w_wmf.gif

Flowsheet for Adding Power Streams

Power Streams

Inlet
At least two power streams

Outlet
One power stream

Specifying Mixer
Use the Mixer | Input | Flash Options sheet to specify operating conditions.

When mixing heat, work, or power streams, Mixer does not require any specifications. If possible, when mixing heat streams, Mixer produces a load stream.

When mixing material streams, you can specify either the outlet pressure or pressure drop. If you specify pressure drop, Mixer determines the minimum of the inlet stream pressures, and applies the pressure drop to the minimum inlet stream pressure to compute the outlet pressure. If you do not specify the outlet pressure or pressure drop, Mixer uses the minimum pressure from the inlet streams for the outlet pressure.

You can select the following valid phases:

Valid Phase

Solids?

Number of phases?

Free Water?

Phase?

Vapor-Only

Yes or no

1

No

V

Liquid-Only

Yes or no

1

No

L

Vapor-Liquid

Yes or no

2

No

–

Vapor-Liquid-Liquid

Yes or no

3

No

–

Liquid Free-Water †

Yes or no

1

Yes

–

Vapor-Liquid Free-Water †

Yes or no

2

Yes

–

Liquid Dirty-Water †

Yes or no

2

No

–

Vapor-Liquid Dirty-Water †

Yes or no

3

No

–

Solid-Only

Yes

1

No

S

† Select Yes (for free water) or select Dirty water in the Free Water field on the Setup | Specifications | Global sheet.

An optional water decant stream can be used when free-water calculations are performed.

Mixer performs an adiabatic calculation on the product to determine the outlet temperature, unless Mass Balance Only Calculations is specified on the Mixer | Block Options | Simulation Options sheet or the Setup | Calculation Options | Calculations sheet.

Convert to Heater

You can right-click a Mixer block on the flowsheet and select Convert to, to convert it to a Heater. Doing so allows you to add a temperature or duty spec to the block. When you do this:

The Heater block gets the same name the Mixer had and preserves all its stream connections.

The Heater block appears in the same location on the flowsheet (based on the location of the material stream inlet port).

The pressure specification from the Mixer is copied to the Heater, and a Duty of 0 is set in the Heater.

Input specifications in Flash Options, and the Properties, Simulation Options, and Diagnostics sheets of Block Options are copied to the Heater.

Only Mixer blocks mixing material streams can be converted in this way.

Making Load Streams with Mixer
See Also

Working with Load Streams

When Mixer mixes two or more heat streams and/or load streams, Mixer will make a load stream if the following are true:

All inlet heat streams have start and end temperatures.
All duties have the same sign.
If these conditions are not both true, then Mixer just makes a heat stream in the outlet, with no temperature-duty profile.

When the conditions are true, Mixer generates a combined temperature-duty profile for the outlet load stream. Load streams have a limit of 20 temperature-duty points. If the total of all temperatures specified in load streams and start and end temperatures of heat streams is more than 20 different temperatures, Mixer removes some of the intermediate points.

FSplit Reference
See Also

Flowsheet Connectivity

Specifying FSplit

EO Usage Notes

FSplit combines streams of the same type (material, heat, work, or power streams) and divides the resulting stream into two or more streams of the same type. All outlet streams have the same composition and conditions as the mixed inlet. Select the Heat (Q) and Work (W) FSplit icons from the Model Palette for FSplit blocks that only accept heat and work streams, respectively. Use FSplit to model flow splitters, such as bleed valves.

FSplit cannot split a stream into different types. For example, FSplit cannot split a material stream into a heat stream and a material stream.

To model a splitter where the amount of each substream sent to each outlet can differ, use an SSplit block. To model a splitter where the composition and properties of the output streams can differ, use a Sep block or a Sep2 block.

Flowsheet Connectivity for FSplit
image\flowconn_fsplit_m_wmf.gif

Flowsheet for Splitting Material Streams

Material Streams

Inlet
At least one material stream

Outlet
At least two material streams

image\flowconn_fsplit_h_wmf.gif

Flowsheet for Splitting Heat Streams

Heat Streams

Inlet
At least one heat stream

Outlet
At least two heat streams

image\flowconn_fsplit_w_wmf.gif

Flowsheet for Splitting Work Streams

Work Streams

Inlet
At least one work stream

Outlet
At least two work streams

image\flowconn_fsplit_w_wmf.gif

Flowsheet for Splitting Power Streams

Power Streams

Inlet
At least one power stream

Outlet
At least two power streams

Specifying FSplit
See Also

EO Usage Notes

To split material streams, give one of the following specifications for each outlet stream except one:

Fraction of the combined inlet flow

Flow rate (on a mole, mass, or standard liquid volume basis) for the entire stream, or for a subset of key components in the stream

Actual volume flow rate

Limit or cumulative limit flow rate (on a mole, mass, or standard liquid volume basis, or actual volume flow)

Fraction of the residue remaining after other specifications are satisfied

To split heat, work, or power streams, specify one of the following for each outlet stream except one:

Fraction of the combined inlet heat, work, or power

Power or duty value for the stream

FSplit puts any remaining flow, heat, work, or power in the unspecified outlet stream to satisfy the balance.

Material flow rate specifications can be made on a normal basis, as a limit flow, or as a cumulative limit flow.

When you specify normal flow rates and/or split fractions, if there is insufficient flow in the inlet stream to meet the specifications, and you did not specify Stream Order, the calculated split fractions are normalized, and a warning will be issued. Each stream with a specification will receive flow, but less than what was specified; all flows are divided by the same factor to satisfy the mass balance. This also applies when there is insufficient work or heat for power or duty specifications.

When you specify limit flows, outlet streams are assigned flow in the priority specified in the Stream Order field. The stream with highest priority (Stream Order = 1) is filled first, up to the specified limit. If there is enough flow in the inlet, then the second priority stream will be filled, and so on. If there is inadequate flow to meet all specifications, then some outlet streams will be empty and the last priority stream to receive flow may receive less than the limit.

Cumulative limit flows are similar to limit flows, but the value specified is the total amount of flow assigned to this stream and the ones before it in the Stream Order. For example, if you assign stream S1 a limit flow of 50 and Stream Order 1, and stream S2 a cumulative limit flow of 75 and Stream Order 2, then stream S2 will receive a flow rate of 25 (if there is sufficient flow in the inlet stream).

If you specify a residual fraction, the flows are processed in Stream Order and the specified fraction of the remaining inlet flow (after earlier streams have been assigned flow) is given to the stream with the residual fraction specification.

If you do not specify Stream Order with limit flows, cumulative limit flows, and/or residual fractions, then the normal flows and split fractions are processed first (normalized if necessary), then the limit flows and specified limit flows are processed, and the residual fractions are processed last.

Note: If you make limit flow and/or split fraction specifications, and you specify Stream Order, the specifications are processed according to the Stream Order. Normal flows and split fractions will be converted to limit flow specifications if the flow is inadequate, and a warning will be issued.

To specify the flow rate of a component or group of components in an outlet stream, specify a group of key components and the total flow rate for the group (the sum of the component flow rates) on the Input | Specifications sheet, and define the key components in the group on the Input | Key Components sheet. You can only make this type of specification with normal flow rate specifications.

Outlet streams have the same composition as the mixed inlet stream. For this reason, when you specify the flow rate of a key component, the total flow rate of the outlet stream is greater than the flow rate you specify.

When a material FSplit has more than one inlet, you can do one of the following:

Enter the outlet pressure on the FSplit | Input | Flash Options sheet

Let the outlet pressure default to the minimum pressure of the inlet streams

Note: When there is Chemistry active, the outlet flash may change the resulting molar flows away from the specified flows.

SSplit Reference
See Also

Flowsheet Connectivity

Specifying SSplit

SSplit combines material streams and divides the resulting stream into two or more streams. Use SSplit to model a splitter where the split of each substream among the outlet streams can differ.

Substreams in the outlet streams have the same composition, temperature, and pressure as the corresponding substreams in the mixed inlet stream. Only the substream flow rates differ. To model a splitter in which the composition and properties of the substreams in the output streams can differ, use a Sep block or a Sep2 block.

Flowsheet Connectivity for SSplit
image\flowconn_ssplit_wmf.gif

Material Streams

Inlet
At least one material stream

Outlet
At least two material streams

Specifying SSplit
For each substream, specify one of the following for all but one outlet stream:

Fraction of the inlet substream

Mole flow rate

Mass flow rate

Standard liquid volume flow rate

SSplit puts any remaining flow for each substream in the unspecified stream. You cannot specify standard liquid volume flow rate when the substream is of type CISOLID, and mole and standard liquid volume flow rates when the substream is of type NC.

You can specify mole or mass flow rate for one of the following:

The entire substream

A subset of components in the substream

You can specify the flow rate of a component in a substream of an outlet stream. To do this, define a key component and specify the flow rate for the key component. Similarly, you can specify the flow rate for a group of components in a substream of an outlet stream. To do this, define a key group of components and specify the total flow rate for the group (the sum of the component flow rates).

Substreams in outlet streams have the same composition as the corresponding substream in the mixed inlet stream. For this reason, when you specify the flow rate of a key, the total flow rate of the substream in the outlet stream is greater than the flow rate you specify.

When SSplit has more than one inlet, you can do one of the following:

Enter the outlet pressure on the Input | Flash Options sheet.

Let the outlet pressure default to the minimum pressure of the inlet streams.

The composition, temperature, pressure, and other substream variables for all outlet streams have the same values as the mixed inlet. Only the substream flow rates differ.

If there is not enough flow to satisfy the specifications (typically when there is at least one flow specification) then the unspecified stream gets no flow and the values specified for the other streams are normalized (divided by the same factor to satisfy the mass balance).

Note: When there is Chemistry active, the outlet flash may change the resulting molar flows away from the specified flows.

Flash2 Reference
See Also

Flowsheet Connectivity for Flash2

Specifying Flash2

EO Usage Notes

Use Flash2 to model flashes, evaporators, knock-out drums, and other single-stage separators. Flash2 performs vapor-liquid or vapor-liquid-liquid equilibrium calculations. When you specify the outlet conditions, Flash2 determines the thermal and phase conditions of a mixture of one or more inlet streams.

Flowsheet Connectivity for Flash2
image\flowconn_flash2_wmf.gif

Material Streams

Inlet
At least one material stream

Outlet
One material stream for the vapor phase
 One material stream for the liquid phase. (If three phases exist, the liquid outlet contains both liquid phases.)
 One water decant stream (optional)

You can specify liquid and/or solid entrainment in the vapor stream.

Heat Streams

Inlet
Any number of heat streams (optional)

Outlet
One heat stream (optional)

If you give only one specification (temperature or pressure) on the Input | Specifications sheet, Flash2 uses the sum of the inlet heat streams as a duty specification. Otherwise, Flash2 uses the inlet heat stream only to calculate the net heat duty. The net heat duty is the sum of the inlet heat streams minus the actual (calculated) heat duty.

You can use an optional outlet heat stream for the net heat duty.

Specifying Flash2
See Also

Solids

EO Usage Notes

Use the Input | Specifications sheet for all required specifications and valid phases. For valid phases you can choose the following options:

You can choose the following options

Solids?

Number of phases?

Free Water?

Vapor-Liquid

Yes or no

2

No

Vapor-Liquid-Liquid

Yes or no

3

No

Vapor-Liquid-FreeWater

Yes or no

2

Yes

Vapor-Liquid-DirtyWater

Yes or no

3

No

Use the Input | Flash Options sheet to specify temperature and pressure estimates and flash convergence parameters.

Use the Input | Entrainment sheet to specify liquid and solid entrainment in the vapor phase.

Use the Hcurves form to specify optional heating or cooling curves.

Flash3 Reference
See Also

Flowsheet Connectivity for Flash3

Specifying Flash3

Use Flash3 to model flashes, evaporators, knock-out drums, decanters, and other single-stage separators in which two liquid outlet streams are produced. Flash3 performs vapor-liquid-liquid equilibrium calculations. When you specify outlet conditions, Flash3 determines the thermal and phase conditions of a mixture of one or more inlet streams.

Flowsheet Connectivity for Flash3
image\flowconn_flash3_wmf.gif

Material Streams

Inlet
At least one material stream

Outlet
One material stream for the vapor phase
 One material stream for the first liquid phase
 One material stream for the second liquid phase

You can specify liquid entrainment of each liquid phase in the vapor stream. You can also specify entrainment for each solid substream in the vapor and first liquid phase.

Heat Streams

Inlet
Any number of heat streams (optional)

Outlet
One heat stream (optional)

If you give only one specification on the Input | Specifications sheet (temperature or pressure), Flash3 uses the sum of the inlet heat streams as a duty specification. Otherwise, Flash3 uses the inlet heat stream only to calculate the net heat duty. The net heat duty is the sum of the inlet heat streams minus the actual (calculated) heat duty.

You can use an optional outlet heat stream for the net heat duty.

Specifying Flash3
See Also

Solids

Use the Input | Specifications sheet for all required specifications.

Use the Input | Entrainment sheet to specify solid entrainment.

To specify optional heating or cooling curves, use the Hcurves form.

Decanter Reference
See Also

Flowsheet Connectivity

Specifying Decanter

EO Usage Notes

Decanter simulates decanters and other single stage separators without a vapor phase. Decanter can perform:

Liquid-liquid equilibrium calculations

Liquid-free-water calculations

Use Decanter to model knock-out drums, decanters, and other single-stage separators without a vapor phase. When you specify outlet conditions, Decanter determines the thermal and phase conditions of a mixture of one or more inlet streams.

Decanter can calculate liquid-liquid distribution coefficients using:

An activity coefficient model

An equation of state capable of representing two liquid phases

A user-specified Fortran subroutine

A built-in correlation with user-specified coefficients

You can enter component separation efficiencies, assuming equilibrium stage is present.

Use Flash3 if you suspect any vapor phase formation.

Flowsheet Connectivity for Decanter
image\flowconn_decanter_wmf.gif

Material Streams

Inlet
At least one material stream

Outlet
One material stream for the first liquid phase
 One material stream for the second liquid phase

You can specify entrainment for each solid substream in the first liquid phase.

Heat Streams

Inlet
Any number of heat streams (optional)

Outlet
One heat stream (optional)

If you specify only pressure on the Input | Specifications sheet, Decanter uses the sum of the inlet heat streams as a duty specification. Otherwise, Decanter uses the inlet heat stream only to calculate the net heat duty. The net heat duty is the sum of the inlet heat streams minus the actual (calculated) heat duty.

You can use an optional outlet heat stream for the net heat duty.

Specifying Decanter
See Also

Defining the Second Liquid Phase

Efficiency

Solids Entrainment

EO Usage Notes

You can operate Decanter in one of the following ways:

Adiabatically

With specified duty

At a specified temperature

Use the Input | Specifications sheet to enter:

Pressure

Temperature or duty

Defining the Second Liquid Phase
See Also

Methods for Calculating the Liquid-Liquid Distribution Coefficients (KLL)

Phase Splitting

If two liquid phases are present at the decanter operating condition, Decanter treats the phase with higher density as the second phase, by default.

When only one liquid phase exists and you want to avoid ambiguities, you can override the default by:

Specifying key components for identifying the second liquid phase on the Input | Specifications sheet

Optionally specifying the threshold key component mole fraction on the Input Specifications sheet

When

Decanter treats the

Two liquid phases are present

Phase with the higher mole fraction of key components as the second liquid phase

One liquid phase is present

Liquid phase as the first liquid phase, unless the mole fraction of key components exceeds the threshold value

Methods for Calculating the Liquid-Liquid Distribution Coefficients (KLL)
When calculating liquid-liquid distribution coefficients (KLL), by default Decanter uses the physical property method specified for the block on the Properties | Phase Property sheet or the Block Options | Properties sheet.

On the Input | Calculation Options sheet, you can override the default by doing one of the following:

Specify separate property methods for the two liquid phases using the Properties | Phase Property sheet

Use a built-in KLL correlation. Enter correlation coefficients on the Properties | KLL Correlation sheet.

Use a Fortran subroutine that you specify on the Properties | KLL Subroutine sheet

See Aspen Plus User Models for more information about writing Fortran subroutines. Search the Knowledge Center for this document.

Phase Splitting
Decanter has two methods for solving liquid-liquid phase split calculations:

Equating fugacities of two liquid phases

Minimizing Gibbs free energy of the system

You can select a method on the Input | Calculation Options sheet.

If you select Minimizing Gibbs free energy of the system, the following must be thermodynamically consistent:

Physical property models

Block property method

You cannot use the Minimizing Gibbs free energy of the system method when:

You specify

On this sheet

Separate property methods for the two liquid phases

Properties | Phase Property

The built-in correlation for liquid-liquid distribution coefficient (KLL) calculations

Input | Calculation Options

A user subroutine for liquid-liquid distribution coefficient (KLL) calculations

Input | Calculation Options

Equating fugacities of two liquid phases is not restricted by physical property specifications. However, Decanter can calculate solutions that do not minimize Gibbs free energy.

Efficiency
Decanter outlet streams are normally at equilibrium. However, you can specify separation efficiencies on the Input Efficiency sheet to account for departure from equilibrium. If you select Liquid-FreeWater for Valid Phases on the Input | Calculation Options sheet, or if you choose the Gibbs energy minimization method of determining phase split, you cannot specify separation efficiencies.

Efficiencies are defined as follows:



Where x1 and x2 are the mole fractions of component i in liquid phase 1 and in liquid phase 2, respectively. K is the equilibrium constant and E is the specified efficiency.

When efficiency is not specified, it defaults to 1. Specifying the efficiency allows you to adjust decanter results (which by default assume complete equilibrium between the phases) to match experimental data. Note that changing the efficiency of one component can have effects throughout the system.

Solids Entrainment in Decanter
If solids substreams are present, they do not participate in phase equilibrium calculations, but they do participate in enthalpy balance. You can use the Input | Entrainment sheet to specify solids entrainment in the first liquid outlet stream. Decanter places any remaining solids in the second liquid outlet stream.

HeatX Reference
See Also

Flowsheet Connectivity

Specifying HeatX

EO Usage Notes

Search the Knowledge Center for information on:

Getting Started with Heat Exchangers

HeatX can model a wide variety of shell and tube heat exchanger types including:

Countercurrent and co-current

Segmental baffle TEMA E, F, G, H, J, and X shells

Rod baffle TEMA E and F shells

Bare and low-finned tubes

HeatX can perform a full zone analysis with heat transfer coefficient and pressure drop estimation for single- and two-phase streams. For rigorous heat transfer and pressure drop calculations, you must supply the exchanger geometry.

If exchanger geometry is unknown or unimportant, HeatX can perform simplified shortcut rating calculations. For example, you may want to perform only heat and material balance calculations.

HeatX has correlations to estimate sensible heat, nucleate boiling, and condensation film coefficients.

HeatX can

Perform design calculations

Perform mechanical vibration analysis

Estimate fouling factors

HeatX uses a rigorous heat exchanger program such as Shell&Tube or AirCooled to perform these calculations.

Flowsheet Connectivity for HeatX
image\flowconn_heatx_wmf.gif

Material Streams

Inlet
One hot inlet
 One cold inlet

Outlet
One to three hot outlets
 One to three cold outlets

If there are multiple outlet streams on either side of the exchanger, the phases are separated and you can choose which phase(s) to place in each outlet stream.

The inlet and outlet streams on either the hot side or the cold side of the exchanger may be replaced by a utility.

Specifying HeatX
See Also

Film Coefficients

Model Correlations

Flash Specifications

Physical Properties

Solids

Temperature Crossings

Zone Analysis

Search the Knowledge Center for information on:

Full Process Model: Leverage Heat Exchanger Models within Aspen Plus

Consider these questions when specifying HeatX:

Should rating calculations be simple (shortcut) or rigorous?

What specification should the block have?

How should the log-mean temperature difference correction factor be calculated?

How should the heat transfer coefficient be calculated?

How should the pressure drops be calculated?

What equipment specifications and geometry information are available?

The answers to these questions determine the amount of information required to complete the block input. You must provide one of the following specifications:

Heat exchanger area or geometry

Exchanger heat duty

Outlet temperature of the hot or cold stream

Temperature approach at either end of the exchanger

Degrees of superheating/subcooling for the hot or cold stream

Vapor fraction of the hot or cold stream

Temperature change of the hot or cold stream

Shortcut Versus Rigorous Rating Calculations
See Also

Search the Knowledge Center for information on:

Accuracy of Simpler Methods of Rating Evaporative Coolers

HeatX has these calculation methods: shortcut, detailed (only for handling models set to detailed in earlier versions), and rigorous methods for several Aspen EDR heat exchanger programs. Use the Calculation frame on the Setup | Specifications sheet to specify the appropriate calculation method.

When you switch from shortcut to rigorous, the default hot fluid side is used, in the tubes for AirCooled and in the shell for Shell&Tube and Thermosyphon. You can change this on the HeatX | Setup | Specifications sheet (except for Kettle Reboiler, which always has the hot fluid in the tubes).

With the shortcut calculation method you can simulate a heat exchanger block with the minimum amount of required input. The shortcut calculation does not require exchanger configuration or geometry data.

With the detailed calculation method, you can use exchanger geometry to estimate:

Film coefficients

Pressure drops

Log-mean temperature difference correction factor

The detailed calculation method provides more specification options for HeatX, but it also requires more input.

The detailed calculation method provides defaults for many options. You can change the defaults to gain complete control over the calculations. The following table lists these options with valid values. The values are described in the following sections.

The rigorous methods allow you to rate or simulate the performance of existing equipment. Some of them also allow the design of new equipment and cost estimation. In addition to the more rigorous heat transfer and hydraulic analyses, the program will also determine possible operational problems such as vibration or excessive velocities. The modules used in the rigorous methods are the same as those used in the Aspen EDR standalone product for shell and tube heat exchanger analysis.

 

 

Method Availability

Variable

Calculation Method

Shortcut

Detailed

EDR rigorous

LMTD Correction Factor

Constant
Geometry
User subroutine
Calculated

Single tube pass †
No
No
Multiple tube pass †

Yes
Default
Yes
No

No
No
No
No

Heat Transfer Coefficient

Constant value
Phase-specific values
Power law for flow rate
Film coefficients
Exchanger geometry
User subroutine

Yes
Default
Yes
No
No
No

Yes
Yes
Yes
Yes
Default
Yes

No
No
No
No
No
No

Film Coefficient

Constant value
Phase-specific values
Power law for flow rate
Calculate from geometry

No
No
No
No

Yes
Yes
Yes
Default

No
No
No
No

Pressure Drop

Outlet pressure
Calculate from geometry

Default
No

Yes
Default

No
No

† In shortcut mode, a constant LMTD must be supplied for exchangers with a single tube pass. For exchangers with multiple tube passes, the LMTD correction factor will be calculated.

Calculating the Log-Mean Temperature Difference Correction Factor
See Also

Search the Knowledge Center for information on:

Cross Flow Correction Factors for Temperature Difference

Mean Temperature Difference in Cross Flow Air-Cooled Heat Exchangers

The standard equation for a heat exchanger is:

Q=U×A×LMTD

where LMTD is the log-mean temperature difference. This equation applies for exchangers with pure countercurrent flow.

The more general equation is:

Q=U×A×F×LMTD

where the LMTD correction factor, F, accounts for deviation from countercurrent flow.

Use the LMTD Correction Factor field on the Setup | LMTD sheet to enter the LMTD correction factor.

In shortcut rating mode, the LMTD correction factor is constant for a cocurrent or countercurrent exchanger. For a multipass exchanger, HeatX will calculate the correction factor. See Shortcut Model of a System of Multiple Tube Pass Exchangers in Series, for more information.

In rigorous rating mode, use the LMTD Correction Method field on the Setup | LMTD sheet to specify how HeatX calculates the LMTD correction factor. You can choose from the following calculation options:

If LMTD Correction Method is

Then

Constant

The LMTD correction factor you enter is constant.

Geometry

HeatX calculates the LMTD correction factor using the exchanger specification and stream properties

User subroutine

You supply a user subroutine to calculate the LMTD correction factor.

Calculating the Heat Transfer Coefficient
See Also

Search the Knowledge Center for information on:

Calculation of Mean Temperature Differences and Mean Heat Transfer Coefficient

Heat Transfer Coefficients for Uniform Channels

Heat Transfer Coefficients in Agitated Vessels

To determine how the heat transfer coefficient is calculated, set the Calculation Method on the Setup | U Methods sheet. You can use these options in shortcut or detailed rating mode:

If Calculation Method is

HeatX uses

And you specify

Constant value

A constant value for the heat transfer coefficient

The constant value

Phase-specific values

A different heat transfer coefficient for each heat transfer zone of the exchanger, indexed by the phase for the hot and cold streams

A constant value for each zone

Power law for flow rate

An empirical power law expression for the heat transfer coefficient as a function of one or both of the stream flow rates. This allows you to specify a constant reference value for the overall heat transfer coefficient, but vary that value based on the flow rates. The reference value is multiplied by  for whichever side you specify as the Flow variable. If you specify both sides, then the reference value is multiplied by two terms like this, one for each side.

Constants for the power law expression

In detailed rating mode, three additional values are allowed. Only in this mode does Aspen Plus have enough information to perform the rigorous calculation based on film coefficients.

If Calculation Method is

Then

Exchanger geometry

HeatX calculates the heat transfer coefficient using exchanger geometry and stream properties to estimate film coefficients.

Film coefficients

HeatX calculates the heat transfer coefficients using the film coefficients. You can use any option on the Setup Film Coefficients sheet to calculate the film coefficients.

User subroutine

You supply a user subroutine to calculate the heat transfer coefficient.

Film Coefficients
HeatX does not calculate film coefficients in shortcut rating mode. In rigorous rating mode, if you use film coefficients or exchanger geometry for the heat transfer coefficient calculation method, HeatX calculates the overall heat transfer coefficient using the formula below:



Where:

Ucorr

=

Heat transfer coefficient correction factor (from Setup | U Methods sheet. Default = 1)

fs

=

Shellside fouling factor

hs	
=

Shellside film coefficient

ηs	
=

Fin efficiency

Ar	
=

Tube outside/inside area ratio

ft

=

Tubeside fouling factor

ht	
=

Tubeside film coefficient

Rtw

=

Tube wall resistance

When you select the Silver-Ghaly method on the Options | Convergence sheet, HeatX uses the Silver-Ghaly correction to calculate film coefficients for condensing fluids with some non-condensable components. This method should only be used when there are large amounts of non-condensable components in the mixture. The Silver-Ghaly film coefficient h for each side is calculated as follows:



Where:

Hc

=

Heat transfer coefficient for condensing components

Hv

=

Total vapor phase heat transfer coefficient

Ze

=

Ratio of gas side heat flux Qg to total heat flux Qt

To choose an option for calculating film coefficients, set the Calculation Method on the Setup | Film Coefficients sheet. The following are available:

If Calculation Method is

HeatX uses

And you specify

Constant value

A constant value for the film coefficient

A constant value to be used throughout the exchanger

Phase-specific values

A different film coefficient for each heat transfer zone (phase) of the exchanger, indexed by the phase of the stream

A constant value for each phase

Power law for flow rate

A power law expression for the film coefficient as a function of the stream flow rate

Constants for the power law expression

Calculate from geometry

The exchanger geometry and stream properties to calculate the film coefficient

 

The hot stream and cold stream film coefficient calculation methods are independent of each other. You can use any combination that is appropriate for your exchanger.

Pressure Drop Calculations in HeatX
See Also

Pressure in Thermosiphon Reboilers

Search the Knowledge Center for information on:

Technical Description

Test Examples and Program Output Description

Pressure Drop Calculations in Baffled Shell-and-Tube Heat Exchangers

You can choose how pressure drops are calculated by setting the pressure options on the Setup | Pressure Drop sheet. The following pressure drop options are available:

If Pressure Option is

Then

Outlet Pressure

You must enter the constant value for outlet pressure or pressure drop for the stream.

Calculate from geometry

HeatX calculates the pressure drop using the geometry of the baffles, tubes, and nozzles, and from stream properties, using the Pipeline model to calculate tube-side pressure drop. You can set the correlations for pressure drop and liquid holdup that the Pipeline model uses on the Setup Pressure Drop sheet.

This method is not available in the Shortcut calculation.

Flow-dependent correlation

You must specify the correlation parameter k.

The flow-dependent correlation used to calculate pressure drop ΔP is based on rho-V2 pressure loss, and the area needed to convert the flow rate to velocity is incorporated into k, which thus has units of m-4 (it is always specified in SI units) The correlation is:



Where:

W

=

Mass flow rate

ρin

=

Inlet density

ρout	
=

Outlet density

If mole flow does not change, this is equivalent to:



Where:

F

=

Mole flow rate

M

=

Molecular weight

Vin	
=

Inlet molar volume

Vout	
=

Outlet molar volume

Normally when Aspen Plus calculates pressure from geometry, it uses the temperature profile along the tube to calculate tube pressure drop. It can use the duty profile instead and does so for single-component fluids and when there are temperature crosses (including hot side temperature increase or cold temperature decrease). You can override this default by selecting Temperature or Duty in State variable for pdrop calculations. If HeatX fails to converge a pressure drop calculation from geometry, try specifying the calculation based on duty profile. Generally using duty is more reliable but takes more time.

When using the thermosiphon option with Shell&Tube, the pressures of the thermosiphon streams in Aspen Plus will differ from the pressures in EDR shown in the EDR Browser. This is because an elevation change in these streams is included in the calculation. See Pressure in Thermosiphon Reboilers in the RadFrac Reference for details.

Exchanger Configuration
See Also

Baffle Geometry

Tube Geometry

Nozzle Geometry

Search the Knowledge Center for information on:

HTFS Method for Sizing Crossflow Condensers with a Single Tube Pass

HTFS Method for Sizing Crossflow Condensers with 2 Tube Passes and with Interpass Mixing of the Coolant

HTFS Method for Sizing Crossflow Condensers with 4 or more Tube Passes

Exchanger configuration refers to the overall patterns of flow in the heat exchanger. If you choose Calculate From Geometry for any of the heat transfer coefficients, film coefficients, or pressure drop calculation methods, you may be required to enter some information about the exchanger configuration on the Geometry Shell sheet. This sheet includes fields for:

TEMA shell type (see the next figure, TEMA Shell Types)

Number of tube passes

Exchanger orientation

Tubes in baffle window

Number of sealing strips

Tube flow for vertical exchangers

image\tema_shell_types_wmf.gif

TEMA Shell Types

The Geometry Shell sheet also contains two important dimensions for the shell:

Inside shell diameter

Shell to bundle clearance

The next figure shows the shell dimensions.

image\shell_dimensions_wmf.gif

Shell Dimensions

Baffle Geometry
See Also

Search the Knowledge Center for information on:

Baffled Shell Side Condensers

Shell-and-Tube Heat Exchanger Shells, Headers, and Baffles

Calculation of shell-side film coefficient and pressure drop require information about the baffle geometry within the shell. Enter baffle geometry on the Geometry Baffles sheet.

HeatX can calculate shell-side values for both segmental baffle shells and rod baffle shells. Other required information depends on the baffle type. For segmental baffles, required information includes:

Baffle cut

Baffle spacing

Baffle clearances

For rod baffles, required information includes:

Ring dimensions

Support rod geometry

The next two figures show the baffle dimensions. The Baffle Cut in the Dimensions for Segmental Baffles figure is a fraction of the shell diameter. All clearances are diametric.

image\dimen_segmental_baffles_wmf.gif

Dimensions for Segmental Baffles

image\dimen_rod_baffles_wmf.gif

Dimensions for Rod Baffles

Tube Geometry
See Also

Search the Knowledge Center for information on:

Optimisation of Tube Counts in Heat Exchangers

Calculation of the Tube Nest Arrangement and Number of Tubes in a Condenser

Calculation of the tube-side film coefficient and pressure drop require information about the geometry of the tubebank. HeatX also uses this information to calculate the heat transfer coefficient from the film coefficients. Enter tube geometry on the Geometry Tubes sheet.

You can select a heat exchanger with either bare or low-finned tubes. The sheet also includes fields for:

Total number of tubes

Tube length

Tube diameters

Tube layout

Tube material of construction

The next two figures show tube layout patterns and fin dimensions.

image\tube_layout_patterns_wmf.gif

Tube Layout Patterns

image\fin_dimensions_wmf.gif

Fin Dimensions

Nozzle Geometry
Calculations for pressure drop include the calculation of pressure drop in the exchanger nozzles. Enter nozzle geometry on the Geometry | Nozzles sheet.

Model Correlations
See Also

Search the Knowledge Center for information on:

Comparison of the HTFS Pressure Drop and Void Fraction Correlations with Data for Boiling and Condensing Flows

Comparison of the Predictive Accuracy of Some Two Phase Friction Pressure Drop Correlations

An Assessment of Correlations for Crossflow Pressure Drop in Tube Bundles

HeatX uses open literature correlations for calculating film coefficients and pressure drops. The next four tables list the model correlations.

Tube-side Heat Transfer Coefficient Correlations

Mechanism

Flow Regime

Correlation

References

Single-phase

Laminar
Turbulent

Schlunder
Gnielinski

[1]
[1]

Boiling - vertical tubes

 

Steiner/Taborek

[2]

Boiling - horizontal tubes

 

Shah

[3, 4]

Condensation - vertical tubes

Laminar
Laminar wavy
Turbulent
Shear-dominated

Nusselt
Kutateladze
Labuntsov
Rohsenow

[5]
[6]
[7]
[8]

Condensation - horizontal tubes

Annular
Stratifying

Rohsenow
Jaster/Kosky method

[8]
[9]

Shell-side Heat Transfer Coefficient Correlations

Mechanism

Flow Regime

Correlation

References

Single-phase segmental

 

Bell-Delaware

[10, 11]

Single-phase rod

 

Gentry

[12]

Boiling

 

Jensen

[13]

Condensation - vertical

Laminar
Laminar wavy
Turbulent
Shear-dominated

Nusselt
Kutateladze
Labuntsov
Rohsenow

[5]
[6]
[7]
[8]

Condensation - horizontal

 

Kern

[9]

Tube-side Pressure Drop Correlations

Mechanism

Correlation

Single-phase

Darcy's Law

Two-phase

See Pipeline Two-Phase Correlations

Shell-side Pressure Drop Correlations

Mechanism

Correlation

References

Single-phase segmental

Bell-Delaware

[10, 11]

Single-phase ROD

Gentry

[12]

Two-phase segmental

Bell-Delaware method with Grant's correction for two-phase flow

[10, 11], [14]

Two-phase ROD

Gentry

[12]

References

Gnielinski, V., "Forced Convection in Ducts." In: Heat Exchanger Design Handbook. New York: Hemisphere Publishing Corporation, 1983.
Steiner, D. and Taborek, J., "Flow Boiling Heat Transfer in Vertical Tubes Correlated by an Asymptotic Model." In: Heat Transfer Engineering, 13(2):43-69, 1992.

Shah, M.M., "A New Correlation for Heat Transfer During Boiling Flow Through Pipes." In: ASHRAE Transactions, 82(2):66-86, 1976.

Shah, M.M., "Chart Correlation for Saturated Boiling Heat Transfer: Equations and Further Study." In: ASHRAE Transactions, 87(1):185-196, 1981.

Nusselt, W., "Surface Condensation of Water Vapor." Z. Ver. Dtsch, Ing., 60(27):541-546, 1916.
Kutateladze, S.S., Fundamentals of Heat Transfer. New York: Academic Press, 1963.

Labuntsov, D.A., "Heat Transfer in Film Condensation of Pure Steam on Vertical Surfaces and Horizontal Tubes." In: Teploenergetika, 4(7):72-80, 1957.

Rohsenow, W.M., Webber, J.H., and Ling, A.T., "Effect of Vapor Velocity on Laminar and Turbulent Film Condensation." In: Transactions of the ASME, 78:1637-1643, 1956.
Jaster, H. and Kosky, P.G., "Condensation Heat Transfer in a Mixed Flow Regime." In: International Journal of Heat and Mass Transfer, 19:95-99, 1976.

Taborek, J., "Shell-and-Tube Heat Exchangers: Single Phase Flow." In: Heat Exchanger Design Handbook. New York: Hemisphere Publishing Corporation, 1983.

Bell, K.J., "Delaware Method for Shell Side Design." In: Kakac, S., Bergles, A.E., and Mayinger, F., editors, Heat Exchangers: Thermal-Hydraulic Fundamentals and Design. New York: Hemisphere Publishing Corporation, 1981.

Gentry, C.C., "RODBaffle Heat Exchanger Technology." In: Chemical Engineering Progress 86(7):48-57, July 1990.
Jensen, M.K. and Hsu, J.T., "A Parametric Study of Boiling Heat Transfer in a Tube Bundle." In: 1987 ASME-JSME Thermal Engineering Joint Conference, pages 133-140, Honolulu, Hawaii, 1987.

Grant, I.D.R. and Chisholm, D., "Two-Phase Flow on the Shell Side of a Segmentally Baffled Shell-and-Tube Heat Exchanger." In: Journal of Heat Transfer, 101(1):38-42, 1979.

Flash Specifications
Use the Options | Flash Options sheet to enter flash specifications.

If you want to perform
these calculations


Solids?


Set Valid Phases to

Vapor phase

Yes or no

Vapor-only

Liquid phase

Yes or no

Liquid-only

2-fluid flash phase

Yes or no

Vapor-Liquid

3-fluid flash phase

Yes or no

Vapor-Liquid-Liquid

3-fluid phase free-water flash

Yes or no

Vapor-Liquid-FreeWater

3-fluid phase dirty-water flash

Yes or no

Vapor-Liquid-DirtyWater

Solids only

Yes

Solid-only

Physical Properties (HeatX)
See Also

Search the Knowledge Center for information on:

Sensitivity of Heat Exchanger Calculations to Uncertainties in the Physical Properties of the Process Fluids

To override global or flowsheet section property specifications, use the Block Options | Properties sheet. You can use different physical property options for the hot side and cold side of the heat exchanger. If you supply only one set of property specifications, HeatX uses that set for both hot and cold side calculations.

Aspen Exchanger Design & Rating (EDR) programs used in rigorous modes use property tables built by the Aspen Physical Property System, and interpolate between entries in the table as needed. This method generates approximate (but good and fast) results, and can use any property method available in the Aspen Physical Property System including OLI, polymer methods, etc. The pressure at the top of the liquid surface in the sump is used as an estimate when generating these property curves.

Solids in HeatX
See Also

Search the Knowledge Center for information on:

Radiative Properties of Solid Particles in Flames

Deposition of Liquid or Solid Dispersions from Turbulent Gas Streams: A Stochastic Model

Mixture Effect Correction for Falling Film Evaporation of Solutions Containing Dissolved Solids

All phases are in thermal equilibrium. Solids leave at the same temperature as the fluid phases.

HeatX can simulate fluid phases with solids when the stream contains solid substreams, or when you request electrolyte chemistry calculations.

Solid Substreams: Materials in solid substreams do not participate in phase equilibrium calculations.

Electrolyte Chemistry Calculations: You can request these on the Methods | Specifications | Global sheet or the HeatX | Block Options | Properties sheet. Solid salts participate in liquid-solid phase equilibrium and thermal equilibrium calculations. The salts are in the MIXED substream.

Shortcut Model of a System of Multiple Tube Pass Exchangers in Series
See Also

Search the Knowledge Center for information on:

HTFS Method for Sizing Crossflow Condensers with a Single Tube Pass

HTFS Method for Sizing Crossflow Condensers with 2 Tube Passes and with Interpass Mixing of the Coolant

HTFS Method for Sizing Crossflow Condensers with 4 or more Tube Passes

HeatX can perform a shortcut calculation of a system of multiple tube pass heat exchangers in series. The following restrictions apply:

All units in series are identical

Each unit in series has one shell pass and an even number of tube passes

The overall heat transfer coefficient is the same for each unit

To do this, on the Setup | Specifications sheet:

Select the Shortcut calculation type

Select Multiple passes for flow direction.

In the No. shells in series field, enter the number of units in series.

When this option is chosen, Aspen Plus will calculate the LMTD correction factor (Dodd, 1980).

You can also choose to specify a minimum value for the calculated LMTD correction factor. HeatX will issue a warning if the calculated value is less than this value.

The LMTD correction factor is calculated as follows:

If R, the ratio of heat capacities, is not equal to 1, then:



If R = 1, then:



Where:

F

=

LMTD correction factor

R

=

Ratio of heat capacities: (WCp)cold/(WCp)hot

P*

=

Thermal effectiveness of each unit, calculated by the Bowman transformation

The Bowman transformation gives the thermal effectiveness of each unit based on the overall thermal effectiveness. If R≠1, then:



If R=1, then:



Where:

P

=

Thermal effectiveness for the overall heat exchanger:
(temp. increase of cold fluid)/(inlet T hot fluid – inlet T cold fluid)

N

=

Number of shells in series

Reference

Dodd, R., "Mean Temperature Difference and Temperature Efficiency for Shell and Tube Heat Exchangers Connected in Series with Two Tube Passes per Shell Pass." In: Trans. IChemE, Vol. 58, 1980.

Temperature Crossings
HeatX always checks for temperature crossings at the inlets and outlets of the exchanger. But it can also generate TQ Curves to check for internal temperature crossings. These are profiles of temperature, pressure, and vapor fraction with respect to duty transferred within the exchanger.

Use the TQ Curves | TQ Curves Setup sheet to specify options for generating TQ Curves.

The Calculate TQ curves box must be checked for HeatX to generate TQ Curves. It is checked by default. You can disable TQ Curve generation if you need to do so to improve performance or if HeatX cannot perform flash calculations at all conditions within your exchanger.

The Number of points specifies the number of points generated, including the inlet and outlet points.  The duty is divided into equal intervals to determine these points. If the bubble and dew points of either or both streams occur within the exchanger, additional points will be added at these points.

The Pressure profile determines the pressure(s) HeatX uses for calculating the profiles. Each curve is generated at a constant pressure, but you can choose to use the inlet pressure, outlet pressure, curves at both inlet and outlet pressure, or you can specify the pressures to use for any number of TQ curves.

HeatX automatically calculates TQ curves based on these specifications when the simulation is run. Use the TQ Curves | TQ Profiles sheet to view the profiles of temperature, pressure, and vapor fraction for each stream. In the Plot section of the ribbon, click TQ Curves to generate a plot of temperatures of both streams vs. duty. If there are multiple sets of curves you can choose which ones to display.

If TQ curves cross, HeatX will generate an error: "Heat exchanger block <name> is infeasible. The temperature/duty curves cross at <temperature> degrees <unit>."

Note: TQ curves will not be generated for HeatX blocks using a utility for which flash calculations cannot be performed (for example, General utility type with temperature and heating/cooling value specified).

Zone Analysis in HeatX
For zone analysis, the HeatX model computes a flash table for each side of the exchanger. The flash table is defined for a set of evenly spaced duties. When phase transitions are present, the dew/bubble point replaces the closest point in the table.

For the heat exchange, intervals are defined at evenly spaced duties plus extra points for any phase transitions. For each interval, the hot and cold temperatures are linearly interpolated from the flash tables. With this arrangement, phase-specific heat transfer coefficients are easily supported.

Consider the following example where the hot side undergoes two phase transitions and the cold side does not:



For this arrangement, there are three regions, defined as the locations between phase transitions. Each region may use its own heat transfer coefficient if the phase-specific option is chosen.

The flash table for each side follows:

   FLASH TABLE FOR HOT SIDE

   PT     CUMULATIVE DUTY        TEMP          VFRAC        PRESSURE

               CAL/SEC            C                           BAR    

   1               0.00         120.00         1.0000           5.000

   2            4793.19          85.37         1.0000           4.983

   3            8166.32          59.46         1.0000           4.972

   4           14379.56          53.38         0.7845           4.950

   5           19172.75          47.96         0.6174           4.933

   6           23965.93          42.08         0.4471           4.917

   7           28759.12          36.03         0.2709           4.900

   8           35678.74          27.88         0.0000           4.876

   9           38345.49          11.51         0.0000           4.867

  10           43138.68         -20.00         0.0000           4.850

   FLASH TABLE FOR COLD SIDE

   PT     CUMULATIVE DUTY        TEMP          VFRAC        PRESSURE

               CAL/SEC            C                           BAR    

   1               0.00         -50.00         0.0000           1.000

   2            4793.19         -46.51         0.0000           1.000

   3            9586.37         -43.05         0.0000           1.000

   4           14379.56         -39.61         0.0000           1.000

   5           19172.75         -36.20         0.0000           1.000

   6           23965.93         -32.81         0.0000           1.000

   7           28759.12         -29.44         0.0000           1.000

   8           33552.31         -26.10         0.0000           1.000

   9           38345.49         -22.79         0.0000           1.000

  10           43138.68         -19.50         0.0000           1.000

Note that points 3 and 8 are different for each table since this is where the phase transitions occur for the hot side.

For the heat exchange, the number of zones is the number of flash points (as used above) plus any phase transition points.

    ZONE       DUTY

              CAL/SEC

   1          4793.2

   2          3373.1     Hot side dew point

   3          1420.1

   4          4793.2

   5          4793.2

   6          4793.2

   7          4793.2

   8          4793.2

   9          2126.4     Hot side bubble point

  10          2666.8

  11          4793.2

The required temperatures for each zone are determined via linear interpolation of the flash tables. The closed model further divides each zone into intervals to compute the heat exchange (for this example there are a total of 102 intervals). However, since the temperatures are linearly interpolated for each of these intervals, there is no improvement in accuracy for doing so.

Phase-Specific Heat Transfer Coefficients in HeatX

When phase-specific heat transfer coefficients are selected without zone analysis, the HeatX model computes a flash table for each side of the exchanger. The points in the flash table are defined for each phase transition.

For the heat exchange, intervals are defined for each phase transition. For each interval, the hot and cold temperatures are linearly interpolated from the flash tables.

Consider again the above example. A flash table is constructed for the hot side with each interior point corresponding to the phase transition.

   FLASH TABLE FOR HOT SIDE

   PT     CUMULATIVE DUTY        TEMP          VFRAC        PRESSURE

               CAL/SEC            C                           BAR    

   1               0.00         120.00         1.0000           5.000

   2            8166.32          59.46         1.0000           4.972

   3           35678.74          27.88         0.0000           4.876

   4           43138.68         -20.00         0.0000           4.850

The cold side flash table is computed at the same duties, correcting for counter-current flow.

   FLASH TABLE FOR COLD SIDE

   PT     CUMULATIVE DUTY        TEMP          VFRAC        PRESSURE

               CAL/SEC            C                           BAR    

   1               0.00         -50.00         0.0000           1.000

   2            7459.9          -44.59         0.0000           1.000

   3           34972.0          -25.12         0.0000           1.000

   4           43138.68         -19.50         0.0000           1.000

The heat exchange takes place over the three regions.

   ZONE          DUTY

               CAL/SEC   

   1            8166.3

   2           27512.0

   3            7459.9

Each region uses its appropriate heat transfer coefficient.

RadFrac Reference
See Also

Flowsheet Connectivity

Specifying RadFrac

Free-Water and Rigorous Three-Phase Calculations

Efficiencies

Algorithms

Rating Mode

Design Mode

Reactive Distillation

Solution Strategies

Physical Properties

Solids Handling

Sizing and Rating of Trays and Packings

EO Usage Notes

Troubleshooting RadFrac

Rate-Based Distillation

Getting Started with Aspen Rate-Based Distillation

Exchanger Integration

RadFrac is a rigorous model for simulating all types of multistage vapor-liquid fractionation operations. These operations include:

Ordinary distillation

Absorption

Reboiled absorption

Stripping

Reboiled stripping

Extractive and azeotropic distillation

RadFrac is suitable for:

Two-phase systems

Three-phase systems (only in equilibrium mode)

Narrow and wide-boiling systems

Systems exhibiting strong liquid phase nonideality

RadFrac can detect and handle a free-water phase or other second liquid phase anywhere in the column. RadFrac can handle solids on every stage.

RadFrac can handle pumparounds leaving any stage and returning to the same stage or to a different stage.

RadFrac can model columns in which chemical reactions are occurring. Reactions can have fixed conversions, or they can be:

Equilibrium

Rate-controlled

Electrolytic

RadFrac (in equilibrium mode) can also model columns in which two liquid phases and chemical reactions occur simultaneously, using different reaction kinetics for the two liquid phases. In addition, RadFrac (in equilibrium mode) can model salt precipitation.

In equilibrium mode, RadFrac assumes equilibrium stages, but you can specify either Murphree or vaporization efficiencies. You can manipulate Murphree efficiencies to match plant performance. In rate-based mode, RadFrac uses rate-based non-equilibrium calculations to model actual tray and packed columns, based on the underlying mass and heat transfer processes, and does not use empirical factors such as efficiencies and the Height Equivalent to a Theoretical Plate (HETP).

You can use RadFrac to size and rate columns consisting of trays and/or packings. RadFrac can model both random and structured packings.

Flowsheet Connectivity for RadFrac
See Also

Feed Stream Conventions

Columns Without Condensers or Reboilers

Reboiler Handling

Specifying RadFrac

image\radf0049.gif

RadFrac can have any number of:

Stages (See Stage Numbering)

Interstage heaters/coolers

Decanters

Pumparounds

Material Streams

Inlet
At least one inlet material stream

Outlet
One vapor or liquid distillate product stream, or both
One water distillate product stream (optional)
One bottoms liquid product stream
Up to three side product streams per stage (optional)
Any number of pseudo-product streams (optional)

Each stage can have:

Any number of inlet streams

Up to three outlet streams (one vapor and two liquid). For two-phase calculations (including all rate-based mode calculations) the limit is two outlet streams per phase.

Outlet streams can be partial or total drawoffs of the stage flows.

Decanter outlet streams can return to the stage immediately below. Or they can be split into any number of streams, each returning to a different user-specified stage. Pumparounds can go between any two stages, or to the same stage.

Any number of pseudoproduct streams can represent column internal flows, pumparound flows, and thermosiphon reboiler flows. A pseudoproduct stream does not affect column results.

Heat Streams

Inlet
One inlet heat stream per stage (optional)
One heat stream per pumparound (optional)

Outlet
One outlet heat stream per stage (optional)
One heat stream per pumparound (optional)

RadFrac uses an inlet heat stream as a duty specification for all stages except the condenser, reboiler, and pumparounds. If you select condenser duty or reboiler duty as a specification on the Setup | Configuration sheet but do not enter a value for it, then a heat stream into the condenser or reboiler, respectively, is used as a specification for that duty. If you do not give two specifications on the Pumparounds Specifications sheet, RadFrac uses a heat stream as a specification for pumparounds.

If you give two specifications (with values) on the Setup | Configuration sheet or Pumparounds | Specifications sheet, RadFrac does not use the inlet heat stream to the condenser, reboiler, or pumparound as a specification. In this case, the inlet heat stream provides the heating or cooling, and you must specify an outlet heat stream which will be set to the value of the net heat duty.

Use optional outlet streams for the net heat duty of the condenser, reboiler, and pumparounds. The value of the outlet heat stream equals the value of the inlet heat stream (if any) minus the actual (calculated) heat duty.

Stage Numbering
RadFrac numbers stages from the top down, starting with the condenser (or starting with the top stage if there is no condenser).

Feed Stream Conventions in RadFrac
See Also

Stage Numbering

Use the Setup | Streams sheet to specify the feed and product stages.

RadFrac provides five conventions for handling feed streams:

Above-Stage

On-Stage

On-Stage-Liquid

On-Stage-Vapor

Decanter (for three phase calculations only)

For most realistic column scenarios, Above-Stage should be used. For a visual representation of these different conventions, see the following figures, RadFrac Feed Convention Above-Stage and RadFrac Feed Convention On-Stage.

ClosedAbove-Stage
ClosedOn-Stage
ClosedOn-Stage-Liquid and On-Stage-Vapor
ClosedDecanter

Columns Without Condensers or Reboilers
See Also

Stage Numbering

Reboiler Handling

You can specify the column configuration on the Setup | Configuration sheet.

If the column has no

Then specify

On sheet

Condenser

None for Condenser

Setup | Configuration

Reboiler

None for Reboiler

Setup | Configuration

Reboiler Handling
See Also

Stage Numbering

Columns Without Condensers or Reboilers

Exchanger Integration

RadFrac can model two reboiler types:

Kettle

Thermosiphon

A kettle reboiler is modeled as the last stage in the column. On the Setup | Configuration sheet, select Kettle for Reboiler. By default, RadFrac uses a kettle reboiler. You can enter Reboiler Duty as one of the operating specifications on the Setup | Configuration sheet or leave it as a calculated value.

A thermosiphon reboiler is modeled as a pumparound with a heater, from and to the bottom stage. Select Thermosiphon for Reboiler on the Setup | Configuration sheet. Enter all other thermosiphon reboiler specifications on the Setup | Reboiler sheet. Alternatively, a thermosiphon reboiler can be rigorously modeled using HeatX and Flash2 blocks. See Exchanger Integration.

image\radf0052_wmf.gif

Thermosiphon Reboiler

This figure shows the thermosiphon reboiler configuration. By default, RadFrac returns the reboiler outlet to the last stage using the Above-Stage feed convention. You can also use the Reboiler return feed convention on the Reboiler sheet to specify Above-Stage. This directs the vapor portion of the reboiler outlet to Stage= the number of equilibrium stages - 1.

The thermosiphon reboiler model has five related variables:

Outlet pressure

Flow rate

Temperature

Temperature change

Vapor fraction

You must specify one of the following:

Temperature

Temperature change

Vapor fraction

Flow rate

Flow rate and temperature

Flow rate and temperature change

Flow rate and vapor fraction

If you choose an option consisting of two variables, you must specify the reboiler heat duty on the Setup | Configuration sheet. RadFrac treats the value you enter for the reboiler heat duty as an initial estimate.

The reboiler outlet pressure is optional. If you do not enter a value, RadFrac uses the bottom stage pressure. The specified outlet pressure is the pressure at which the equilibrium calculation inside the thermosiphon reboiler is performed.

Heater and Cooler Specifications
See Also

Stage Numbering

Rating Mode

Design Mode

You can specify interstage heaters and coolers in one of two ways:

Specifying the duty directly on the Heaters and Coolers | Side Duties sheet

Requesting UA calculations on the Heaters and Coolers | Utility Exchangers sheet

If you specify the duty directly on the Heaters and Coolers | Side Duties sheet, enter a positive duty for heating and a negative duty for cooling.

If you request UA calculations on the Heaters and Coolers | Utility Exchangers sheet, RadFrac calculates the duty and outlet temperature of the heating/cooling fluid simultaneously with the column. The UA calculations:

Assume the stage temperature is constant

Use an arithmetic average temperature difference

Assume the heating or cooling fluid does not experience any phase change

To request UA calculations, specify the:

UA

Heating or cooling fluid component

Flow and inlet temperature of the fluid

You can specify the heat capacity of the fluid directly on the Heaters and Coolers | Utility Exchangers sheet or RadFrac can compute it from a property method. If RadFrac computes the heat capacity, you must also enter the pressure and phase of the heating or cooling fluid. By default, RadFrac calculates the heat capacity using the block property method. But you can also use a different property method.

You can also specify the heat loss for sections of the column on the Heaters and Coolers | Heat Loss sheet.

Decanters
See Also

Free-Water and Rigorous Three-Phase Calculations

Rating Mode

For three-phase calculations (Valid Phases=Vapor-Liquid-Liquid or Vapor-Liquid-DirtyWaterAnyStage on the Setup | Configuration sheet), you can define any number of decanters. Enter decanter specifications on the Decanters form.

For the decanter on the top stage, you must enter the return fraction of one of the two liquid phases on the Decanters | Specifications sheet. For decanters on other stages, you must always specify both Fraction of 1st Liquid Returned and Fraction of 2nd Liquid Returned.

You can enter Temperature and Degrees Subcooling on the Decanters | Options sheet to model subcooled decanters. If you do not specify Temperature and Degrees Subcooling, the decanter is operated at the temperature of the stage to which the decanter is attached. If side product streams are decanter products, you cannot specify their flow rates. RadFrac calculates their flow rates from the Fraction of 1st Liquid Returned and Fraction of 2nd Liquid Returned.

By default RadFrac returns decanter streams to the stage immediately below. You can return the decanter streams to any other stage by entering a different Return Stage number on the Decanters | Specifications sheet. You can split a return stream into any number of streams by giving a split fraction (Split Fraction of Total Return for the 1st Liquid and 2nd Liquid). Each resulting stream may go to a different return stage.

When return streams do not go to the next stage, a feed or pumparound must go to the next stage. This prevents dry stages.

Pumparounds in RadFrac
See Also

Stage Numbering

Pumparound Return Types

RadFrac can handle pumparounds from any stage to the same or any other stage. Use the Pumparounds form to enter all pumparound specifications.

You must enter the source and destination stage locations for pumparounds. A pumparound can be either a partial or total drawoff of the:

Stage liquid

First liquid phase

Second liquid phase

Vapor phase

You can associate a heater or cooler with a pumparound. If the pumparound is a partial drawoff of the stage flow, you must enter two of the following specifications:

Flow rate

Temperature

Temperature change

Vapor fraction

Heat Duty

If the pumparound is a total drawoff, you must enter one of the following specifications:

Temperature

Temperature change

Vapor fraction

Heat Duty

Vapor fraction is allowed only when Valid Phases=Vapor-Liquid, Vapor-Liquid-Liquid, Vapor-Liquid-DirtyWaterCondenser, or Vapor-Liquid-DirtyWaterAnyStage.

Use the Pumparounds | Specifications sheet to enter these operating specifications.

Pressure specification is optional. The default pumparound pressure is the same as the source stage pressure. RadFrac assumes that the pumparound at the heater/cooler outlet has the same phase condition as the pumparound at the inlet. You can override the phase condition using the Valid phases field on the Pumparounds | Specifications sheet.

RadFrac can return the pumparound to a stage using either the:

On-stage option

Above-stage option (returns the pumparound to the column between two stages)

In three-phase columns, RadFrac can also return the pumparound to a decanter associated with a stage. You can select the return option using the Returnoption field.

RadFrac assumes the pumparound at the heater/cooler outlet has the same phase condition as the inlet.

You can use Return Phase on the Pumparounds | Specifications sheet to assign a different phase at the heater/cooler outlet. Or you can specify Valid Phases=Vapor-Liquid, Vapor-Liquid-Liquid, Vapor-Liquid-DirtyWaterCondenser, or Vapor-Liquid-DirtyWaterAnyStage and let RadFrac determine the return phase condition from the heater/cooler specifications.

Pumparound Return Types
The pumparound return types are:

Return Type

Description

On-stage

RadFrac returns the pumparound to the specified stage. The pumparound is not flashed at the return stage pressure.

Above-stage

The pumparound is flashed at the specified return stage pressure. RadFrac returns the liquid portion to the specified return stage, and the vapor portion to the stage above.

Decanter

RadFrac returns the pumparound to the decanter associated with the specified return stage. This option is valid only for three-phase columns.

Specifying RadFrac
See Also

Flowsheet Connectivity for RadFrac

Free-Water and Rigorous Three-Phase Calculations

Algorithms

Rating Mode

Design Mode

Solution Strategies

Sizing and Rating of Trays and Packings

Search the Knowledge Center for information on:

Rigorous Modeling: Learn the Advanced Capabilities of RadFrac

This section describes the following topics on RadFrac column configuration:

Efficiencies
Reactive Distillation
Physical Properties
Solids Handling

Efficiencies
See Also

Specifying RadFrac

In equilibrium mode, you can specify one of two types of efficiencies:

Vaporization

Murphree

Vaporization efficiency is defined as:



Murphree efficiency is defined as:



Where:

K

=

Equilibrium K value

x

=

Liquid mole fraction

y

=

Vapor mole fraction

Eff v	
=

Vaporization efficiency

Eff M	
=

Murphree efficiency

i

=

Component index

j

=

Stage index

Aspen Plus provides the flexibility of entering vaporization or Murphree efficiencies, for stages or for column sections. Component efficiencies can also be entered for specific components on a stage.

To specify vaporization or Murphree efficiencies, enter the number of actual stages on the Setup | Configuration sheet. Then use the Efficiencies form to enter the efficiencies.

Enter actual values of efficiencies, not percentages. For example a value of 1 corresponds to 100% efficiency. If no efficiency is entered, it defaults to 1. Values for stages between those specified are linearly interpolated. Values for stages above or below all those specified are set to the values for the first or last stage specified.

Notes:

Murphree efficiencies will not work well in reactive systems because the mass transfer due to kinetic or equilibrium reactions is not related to the phase equilibrium driving force, and should not be used in such systems.
Murphree efficiencies can be used in apparent approach electrolyte systems where the only reactions are handled by the apparent approach and the column is only modeling phase equilibrium between apparent components.
Murphree efficiencies are only meaningful on the last stage if there is an on-stage feed containing vapor entering that stage, as is typical of absorber columns. The vapor can come from a feed stream or an internal stream such as a pumparound. If Murphree efficiency is defined to be other than 1 on the last stage and there is no vapor feed, a warning will be issued.
Some stage efficiency specifications on the last stage when a reboiler is present (even if there is a small vapor feed also) and some stage efficiency specifications on other stages with feeds can result in a problem which has no valid solution. We advise against using stage efficiency specifications in such situations; use them only with care that they lead to sensible solutions.
For three-phase calculations, the vaporization and Murphree efficiencies you enter apply equally to the following equilibria by default:

Vapor-liquid1 (VL1E)

Vapor-liquid2 (VL2E)

You can use the Efficiencies form to enter separate efficiencies for VL1E and VL2E. You cannot enter separate efficiencies for VL1E and VL2E when you specify equilibrium reactions or when using Murphree efficiencies.

You can use any of these efficiencies to account for departure from equilibrium. However, the meanings of vaporization and Murphree efficiencies are quite different and you cannot use one for the other. Magnitudes of the efficiencies can be quite different.

Stage efficiencies or component efficiencies can be adjusted to match a given set of column operating data. You can adjust the Murphree efficiency to match column operating data when:

Efficiency is unknown

Actual column operating data are available

Note: Adjusted efficiencies are not predictive and will not necessarily give good results if column operating conditions change.

When manipulating the Murphree efficiency, use design specifications on the Design Specifications and Vary forms.

Application Considerations for Vaporization and Murphree Efficiencies

Use of vaporization and Murphree efficiencies has certain limitations and implications. Non-judicious specification of these efficiency values can lead to unrealistic column results. They should be used with care. Whenever possible, efficiency values should be calibrated against plant data. The following implications should be considered:

Vaporization efficiency effectively changes the K-values for vapor-liquid equilibrium which are calculated by property models, altering the volatility of components. This changes the equilibrium condition so that the calculated vapor and liquid phases may not be at saturation. The liquid and vapor phases leaving a stage are assumed to be at the same temperature and pressure.
When stage Murphree efficiencies are specified, the liquid and vapor phases leaving a stage are assumed to be at the same temperature and pressure. The calculated vapor phase may not be at saturation.
When component Murphree efficiencies are specified, both the calculated vapor and liquid phases may not be at saturation. If there are only two components in the column, the Murphree efficiencies for components on the same stage must be equal.
When stage efficiencies are specified (either vaporization or Murphree), all components on the same stage have the same efficiency.
When section efficiencies are specified (either vaporization or Murphree), all components on all stages in the section have the same efficiency.
As an alternative to using vaporization and Murphree efficiencies with the equilibrium modeling approach, RadFrac also provides a rigorous rate-based modeling option that avoids the limitations associated with the efficiency approach. If the results from the efficiency approach are not satisfactory, the rate-based modeling option is strongly recommended.

Details on using and estimating efficiencies are described by Holland, Fundamentals of Multi-Component Distillation, McGraw-Hill Book Company, 1981.

Calculation of Murphree Efficiencies in Rate-Based Mode

In rate-based mode, RadFrac back-calculates Murphree efficiencies for each component as the fractional approach to equilibrium of the vapor stream leaving each stage. For each section of packed columns in rate-based mode, RadFrac calculates the fractional approach to equilibrium using the same definition as used for Murphree efficiency, and reports the height of packing required to achieve equilibrium as the Height Equivalent to a Theoretical Plate (HETP) for that section.

Reactive Distillation
See Also

Specifying RadFrac

RadFrac can handle chemical reactions. These reactions can occur in the liquid and/or vapor phase. The details about the reactions are entered on a generic Reactions form outside RadFrac. RadFrac allows two different reaction model types: REAC-DIST or USER. RadFrac can model the following types of reactions:

Equilibrium-controlled

Rate-controlled

Conversion (in equilibrium mode)

Electrolytic

RadFrac can also model salt precipitation, especially in the case of electrolytic systems. You can request reaction calculations for the entire column, or you can restrict reactions to a certain column segment (for example, to model the presence of catalyst). For three-phase calculations, you can restrict reactions to one of the two liquid phases, or use separate reaction kinetics for the two liquid phases.

To include reactions in RadFrac you must enter the following information on the Reactions | Specifications sheet:

Reaction type and Reaction/Chemistry ID

Column section in which the reactions occur

Depending on the reaction type, you must enter equilibrium constant, kinetic, or conversion parameters on the generic Reactions form outside RadFrac. For electrolytic reactions, you can also enter the reaction data on the Chemistry form outside RadFrac. To consider salt precipitation, enter the salt precipitation parameters on the Reactions | Salt sheet or the Chemistry form outside RadFrac.

To associate reactions and salt precipitation with a column segment, enter the corresponding Reactions ID (or Chemistry ID) on the Reactions Specifications sheet.

For rate-controlled reactions, you must enter holdup or residence time data in the phase where the reactions occur. Use the Reactions | Holdups or Residence Times sheets. For conversion reactions, use the Reactions | Conversion sheet to override the conversion parameters specified on the Reactions | Conversion form. RadFrac also supports User Reaction Subroutines. The name and other details of the reaction subroutine are entered on the User Subroutines form.

The holdup basis specified on the Reactions | Holdups sheet determines the units of the pre-exponential factor (on the Reactions | Reactive Distillation | Kinetic sheet) of reactions in this column. Holdup basis is determined separately for each stage, where the basis for any stages with unspecified holdups is taken to be in a mole basis.

Important: Incorrect specification of the holdup basis will lead to incorrect interpretation of the pre-exponential factor units and thus incorrect results. See Holdup for Rate-Controlled Reactions for more information.

It is possible to specify both conversion reactions and equilibrium or kinetic reactions in the same reaction set, but if those reactions involve any of the same components, it is not generally possible to satisfy all of the reaction specifications at the same time. In such a case, the equilibrium and/or kinetic reactions are resolved first, and then the conversion reactions are processed, with their extent being determined based on the compositions present after the other reactions are processed.

Reactive Distillation with Aspen Rate-Based Distillation

In the rate-based mode, RadFrac can handle kinetic and equilibrium reactions, but any reactions specified for the Liquid 1 or Liquid 2 phases will be treated as involving the single Liquid phase.

Kinetic reactions: For homogeneous reactions, the kinetic equations are used to calculate the reaction rates per unit volume, and the holdup in the segment is used to calculate the total reaction rates. Heterogeneous reactions are treated as pseudo-homogeneous reactions; the kinetic equations are used to calculate the reaction rates per unit mass of catalyst, and the catalyst weight in the segment is used to calculate the total reaction rates.

Important: The holdup is determined by correlations or value specified on the Rate-Based | Holdups sheet of the Tray Rating or Packing Rating section, but the holdup basis is determined by the specifications on the Reactions | Holdups sheet just as for equilibrium mode.

Equilibrium reactions: the reaction rates are computed such that the equilibrium condition is satisfied. Reactions in both the liquid and vapor phases are considered, as well as reactions in the film regions when applicable.

Physical Properties (RadFrac)
See Also

Specifying RadFrac

To override the global physical property method, use the Properties | Property Sections sheet. You can specify different physical properties for different parts of the column.

For three-phase calculations, you can specify separate calculation methods for Vapor-Liquid1 Equilibrium (VL1E) and Liquid1-Liquid2 Equilibrium (LLE). Use one of the following methods:

Associate separate property methods with VL1E and LLE using the Phase Equilibrium list box

Calculate VL1E using a property method. Specify LLE using liquid-liquid distribution (KLL) coefficients

You can use the Properties | KLL Sections sheet to enter the KLL coefficients using a built-in temperature polynomial, and associate the coefficients with one or more column segments. Or you can use the Properties | KLL Correlations sheet to associate a user-KLL subroutine with one or more column segments.

Solids Handling in RadFrac
See Also

Specifying RadFrac

RadFrac has two methods for handling inert solids:

Overall-balance

Stage-by-stage

Use the Solids handling option on the Convergence | Basic sheet to select either an overall balance or stage-by-stage. The two methods differ in how they treat solids in the mass and energy balances. Neither method considers inert solids in the phase equilibrium calculations. However, salts formed by salt precipitation reactions (see Reactive Distillation) are considered in phase equilibrium calculations.

Note RadFrac handles inert solids only in equilibrium mode. In rate-based mode RadFrac cannot handle inert solids.

The overall-balance method:

Temporarily removes all solids from inlet streams

Performs column calculations without solids

Adiabatically mixes solids removed from inlet streams with liquid product from the bottom stage. This means the stream exiting the bottom of the column will differ from the bottoms stream calculated by RadFrac.

The overall-balance method maintains an overall mass and energy balance around the column. But it does not satisfy individual stage balances. This is the default method.

The stage-by-stage method treats solids rigorously in all stage mass and energy balances. The ratio of liquids to solids on a stage is maintained in the product streams withdrawn from that stage. The specified product flow is the total flow rate of the stream, including the solids. If a nonconventional (NC) solids substream is present in the column feeds, you must give all column flow and flow ratio specifications on a mass basis.

When you specify a decanter, RadFrac can decant the solids partially or totally. By default, RadFrac decants the solids partially along with the second liquid phase. RadFrac uses the return fraction you specify for the second liquid phase (Fraction of 2nd Liquid Returned on the Decanters | Specifications sheet) to decant the solids. If there is no second liquid phase in the decanter, RadFrac decants the solids partially along with the first liquid phase. RadFrac uses the return fraction you specify for the first liquid phase (Fraction of 1st Liquid Returned on the Decanters | Specifications sheet) in this case. You can request complete decanting of the solids by selecting Decant Solids Totally on the Decanters | Options sheet.

Free-Water and Rigorous Three-Phase Calculations
See Also

Flowsheet Connectivity for RadFrac

Specifying RadFrac

Valid Phases Descriptions

Liquid-Liquid Phase Split Algorithms

Solids Handling

Sizing and Rating of Trays and Packings

RadFrac can perform both free-water and rigorous three-phase calculations. (See Aspen Plus Physical Property Methods and Models.) These calculations are controlled by options you specify on the Setup Configuration sheet.

You can select from three types of calculations:

Free water in the condenser only

Free water on any or all stages

Rigorous three-phase calculations

Note: Free-water does not work when the organic phase does not exist, such as in a stream that is almost pure water. For problems that have this condition in a column with two liquid phases elsewhere, use RadFrac with vapor-liquid-liquid calculations.

Note: In rate-based mode, RadFrac can only handle free water calculations in the condenser and cannot perform rigorous three-phase calculations.

Note: For Column Analysis, if there are two liquid phases in a column, the total liquid flow rate (light and heavy liquids) is used in calculations. The transport properties are weighted averages of the light and heavy liquids for each liquid phase.

Specify one of the following on the Setup Configuration sheet:

Valid Phases=

For

Vapor-Liquid-FreeWaterCondenser

Free water in the condenser only

Vapor-Liquid-FreeWaterAnyStage

Free water on all stages

Vapor-Liquid-Liquid

Rigorous three-phase calculations

Vapor-Liquid-DirtyWaterCondenser

Three-phase calculation based on water and hydrocarbon solubility in the condenser only

Vapor-Liquid-DirtyWaterAnyStage

Three-phase calculation based on water and hydrocarbon solubility on all stages

For RadFrac calculations, you must also specify which stages to test for two liquid phases on the Setup 3-Phase sheet.

When you choose completely rigorous three-phase calculations on all stages selected, RadFrac makes no assumptions about the nature of the two liquid phases. You can associate a decanter with any stage. You cannot use Sum-Rates for the Overall Loop convergence method.

Decanting Free Water

When you specify Vapor-Liquid-FreeWaterCondenser for valid phases, Aspen Plus automatically adds a decanter to the condenser. In this case, you can specify the Free water reflux ratio for this decanter, the ratio of . The default is 0, so all water in the condenser goes into the distillate.

The extra decanter which performs this operation is only added for this phase specification. If you want this type of decanting with Vapor-Liquid-FreeWaterAnyStage or another phase specification, you must add it explicitly on the Decanters form by specifying a decanter for stage 1 (or another stage) and specifying the fractions of 1st and 2nd liquid returned on the Decanters | Specifications sheet.

Valid Phases Descriptions
In all phases, the RadFrac column model consists of a liquid stream and a vapor stream leaving each stage.

Phase

Description

Vapor-Liquid

The liquid phase does not split. Reactions may be associated with each phase.

Vapor-Liquid-Liquid

The liquid phase on each stage further splits into two liquid phases because of phase instability. Reactions may be associated with each phase. Equilibrium mode only.

Vapor-Liquid-FreeWater Condenser

The liquid stream from the condenser splits into a free-water phase and a nonaqueous phase. Phase splitting does not occur on any other stage. RadFrac adjusts the fugacity of the nonaqueous phase for the solubility of water. RadFrac decants water from the condenser based on the free water reflux ratio.

Vapor-Liquid-FreeWater Any Stage

The liquid phase on each stage splits into a free-water phase and a nonaqueous phase. RadFrac adjusts the fugacity of the nonaqueous phase for the solubility of water. Equilibrium mode only.

Vapor-Liquid-DirtyWater Condenser

The liquid stream from the condenser splits into a water-rich phase and a nonaqueous phase. Phase splitting does not occur on any other stage. RadFrac adjusts the fugacity of the phases for the solubility of water in hydrocarbons and hydrocarbons in water.

Vapor-Liquid-DirtyWater Any Stage

The liquid phase on each stage splits into a water-rich phase and a nonaqueous phase. RadFrac adjusts the fugacity of the phases for the solubility of water in hydrocarbons and hydrocarbons in water. Equilibrium mode only.

Liquid-Liquid Phase Split Algorithms
RadFrac provides three liquid-liquid phase split algorithms:

This algorithm

Solves liquid-liquid equilibrium by

Gibbs

Minimizing Gibbs free energy. It is the preferred method. This method requires you to use a property method that is thermodynamically consistent. The Van Laar-based methods do not satisfy this condition. If you use these methods for three-phase calculations, select the Eq-solve method.

Eq-solve

Equating the component fugacities of two liquid phases. This method is efficient, but can potentially return a wrong solution that does not minimize the Gibbs free energy.

Hybrid

Combining Gibbs free energy minimization and equation solving. Several Gibbs-free energy minimization techniques are used, including tangent plane analysis. The component fugacity equating method is used to initialize the calculations. This method requires you to use a property method that is thermodynamically consistent. The Van Laar-based methods do not satisfy this condition. If you use these methods for three-phase calculations, select the Eq-solve method.

Algorithms
See Also

Specifying RadFrac

Solution Strategies

Search the Knowledge Center for information on:

Rigorous Modeling: Learn the Advanced Capabilities of RadFrac

You can select an algorithm and/or initialization option for column simulation on the Convergence | Basic sheet. The default standard algorithm and standard initialization option are appropriate for most applications. You can improve convergence behavior for the following applications using the guidelines described in this section:

Petroleum and Petrochemical Applications

Highly Nonideal Systems

Azeotropic Distillation

Absorbers and Strippers

Cryogenic Applications

In order to change the algorithm and initialization option on the Convergence | Basic sheet, you must first choose Custom as the option in the Convergence field on the Setup | Configuration sheet.

Petroleum and Petrochemical Applications
See Also

Free-Water and Rigorous Three-Phase Calculations

Solution Strategies

In petroleum and petrochemical applications involving extremely wide-boiling mixtures and/or many components and design specifications, you can improve the convergence efficiency and reliability by choosing Sum-Rates in the Algorithm field on the Convergence | Basic sheet.

Highly Nonideal Systems
See Also

Free-Water and Rigorous Three-Phase Calculations

Solution Strategies

When liquid phase nonidealities are exceptionally strong, choose Nonideal in the Algorithm field on the Convergence | Basic sheet to improve the convergence behavior. Use this algorithm only when the number of outside loop iterations (using the standard algorithm) exceeds 25.

You can also use the Newton algorithm for highly nonideal systems. Newton is better for columns with highly sensitive specifications. But it is usually slower, especially for columns with many stages and components.

Azeotropic Distillation
See Also

Free-Water and Rigorous Three-Phase Calculations

Solution Strategies

For azeotropic distillation applications where an entraining agent separates an azeotropic mixture, specify the following on the Convergence | Basic sheet:

Algorithm: Newton

Initialization method: Azeotropic

A classic example of azeotropic distillation is ethanol dehydration using benzene.

Absorbers and Strippers
See Also

Free-Water and Rigorous Three-Phase Calculations

Solution Strategies

To model absorbers and strippers specify Condenser=None and Reboiler=None on the Setup | Configuration sheet. The heat duty is zero for adiabatic operation. For extremely wide-boiling mixtures, specify one of the following:

Algorithm: Sum-Rates on the Convergence | Basic sheet

Convergence: Standard on the Setup | Configuration sheet and choose Absorber=Yes on the Convergence | Advanced sheet

Cryogenic Applications
See Also

Free-Water and Rigorous Three-Phase Calculations

Solution Strategies

For cryogenic applications such as air separation, the standard algorithm is recommended. To invoke a special initialization procedure designed for cryogenic systems, specify Cryogenic for Initialization on the Convergence | Basic sheet.

Rating Mode in RadFrac
See Also

Flowsheet Connectivity for RadFrac

Specifying RadFrac

Design Mode

RadFrac allows the column to be operated in a rating mode or a design mode. Rating mode requires different column specifications for two- and three-phase calculations.

For two-phase calculations, you must enter the following on the Setup form:

Valid Phases=Vapor-Liquid, or Vapor-Liquid-FreeWaterCondenser or Vapor-Liquid-DirtyWaterCondenser for handling the water phase in the condenser

A Total, Subcooled, or Partial-Vapor condenser

Two additional column operating variables

If the condenser or reflux is subcooled, you can also specify the degrees subcooling or the subcooled temperature.

For three-phase calculations, you must specify Valid Phases= Vapor-Liquid-Liquid, Vapor-Liquid-FreeWaterAnyStage (for free water calculations), or Vapor-Liquid-DirtyWaterAnyStage on the Setup | Configuration sheet. The required specifications depend on what you specify for the return fractions of the two liquid phases (Fraction of 1st Liquid Returned and Fraction of 2nd Liquid Returned) in the top stage decanter. The following table lists the three specification options:

If you specified this on Decanters | Specifications

Enter on Setup Configuration

Fraction of 1st Liquid Returned or Fraction of 2nd Liquid Returned, or no top decanter

A Total, Subcooled, or Partial-Vapor condenser and two operating specifications

Fraction of 1st Liquid Returned and Fraction of 2nd Liquid Returned

A Total, Subcooled, or Partial-Vapor condenser and one operating specification

Fraction of 1st Liquid Returned and Fraction of 2nd Liquid Returned

Two operating specifications, and an estimate for the amount of vapor in the distillate on the Estimates | Vapor Composition sheet. RadFrac assumes a partial condenser with both vapor and liquid distillates.

Operating Specifications Descriptions
The operating specifications for RadFrac are:

Operating Specification

Description

Distillate rate

Total distillate flow rate on a mole, mass, or standard liquid volume basis. If you choose Vapor-Liquid-FreeWaterCondenser under Valid phases, distillate flow rate excludes free-water distillate flow rate. If you choose Vapor-Liquid-FreeWaterAllStage under Valid phases, distillate flow rate includes free-water distillate flow rate.

Bottoms rate

Flow rate of liquid bottoms product on a mole, mass, or standard liquid volume basis. RadFrac assumes there is always a liquid bottoms product. If a liquid bottoms product is not present in the column, set the bottoms flow rate to zero.

Reflux ratio

Ratio of liquid reflux from stage 1 (condenser) to the distillate rate. If you choose Vapor-Liquid-FreeWaterCondenser under Valid phases, reflux flow rate excludes the free-water reflux flow rate. If you choose Vapor-Liquid-FreeWaterAnyStage, the reflux flow rate includes the free-water reflux flow rate.

Reflux rate

Reflux flow rate from stage 1 or condenser. If you choose Vapor-Liquid-FreeWaterCondenser under Valid phases, the reflux flow rate excludes the free-water reflux flow rate. If you choose Vapor-Liquid-FreeWaterAnyStage, the reflux flow rate includes the free-water reflux flow rate.

Boilup rate

Vapor flow rate from bottom stage or the reboiler.

Boilup ratio

Ratio of vapor flow rate from bottom stage to liquid bottoms product rate.

Distillate to feed ratio

This ratio is defined as:



Where:
D = Molar flow rate of the product distillate
f = Component molar flow rate of the feed(s)
i = Feed component index
j = Feed stream index

Bottom to feed ratio

This ratio is defined as:



Where:
B = Molar flow rate of the liquid bottoms product
f = Component molar flow rate of the feed(s)
i = Feed component index
j = Feed stream index

Condenser duty

Condenser duty. Specify a negative value for cooling and a positive value for heating. You can use an inlet heat stream to the top stage to specify the condenser duty by selecting Condenser Duty as an operating specification but leaving the value blank. You can specify a utility heat exchanger for the condenser by specifying one for the bottom stage on  the Heaters Coolers | Utility Exchangers sheet. If Condenser Type=None, heat duty is set to zero.

Reboiler duty

Duty to the last stage. Specify a negative value for cooling and a positive value for heating. You can use an inlet heat stream to the bottom stage to specify the reboiler duty by selecting Reboiler Duty as an operating specification but leaving the value blank. You can specify a utility heat exchanger for the reboiler by specifying one for the bottom stage on the Heaters Coolers | Utility Exchangers sheet. If Reboiler Type=None, heat duty is set to zero.

Design Mode in RadFrac
See Also

Specifying RadFrac

Rating Mode

Search the Knowledge Center for information on:

Rigorous Modeling: Learn the Advanced Capabilities of RadFrac

RadFrac allows the column to be operated in rating mode or design mode. In design mode, use the Design Specifications form to specify column performance parameters (such as purity or recovery). You must indicate which variables to manipulate to achieve these specifications. You can manipulate any variables that are allowed in rating mode, except:

Number of stages

Pressure profile

Vaporization efficiency

Subcooled reflux temperature

Degrees of subcooling

Decanter temperature and pressure

Locations of feeds, products, heaters, pumparounds, and decanters

Pressures of thermosiphon reboiler and pumparounds

UA specifications for heaters

The flow rates of inlet material streams and the duties of inlet heat streams can also be manipulated variables.

These are the design specifications.

You can specify

For any

Purity

Stream including internal streams

Express the purity as the sum of mole, mass, or standard liquid volume fractions of any group of components relative to any other group of components.

Recovery of any component groups

Set of product streams, including sidestreams

Express recovery as a fraction of the same components in any set of feed streams.

Flow rate of any component groups

Internal stream or set of product streams

Temperature

Stage

Value of any Property Set property

Internal or product stream

Ratio or difference of any pair of Property Set properties

Single or paired internal or product streams

Flow ratio of any components groups to any other component groups

Internal streams to any other internal streams, or to any set of feed or product streams

Component Flow Ratio Equation
The component flow ratio for RadFrac is calculated by:

RATIO

=

(Base Stage specified) or

RATIO

=

(Base Streams specified or defaulted)

Where:

i

=

Component in the Comps list

j

=

Component in the Base Comps list

k

=

Stream in the Base Streams list

fi1

=

Component i flow rate in an internal stream specified by Stage and Phase

fj2	
=

Component j flow rate in an internal stream specified by Base-Stage and Base-Phase

fjk

=

Component j flow rate in a feed or product stream in the Base Streams list. (The Base-Streams list cannot mix feed and product streams.)

The default for Comps and Base Comps is all components. The default for Base Streams is all feed streams.

Solution Strategies
See Also

Specifying RadFrac

Overall Convergence Method Descriptions

Convergence Weighting Options

Design Mode Convergence

Miscellaneous Convergence Parameters

Search the Knowledge Center for information on:

Rigorous Modeling: Learn the Advanced Capabilities of RadFrac

Distillation: Troubleshooting Column Models

RadFrac uses two general approaches for column convergence:

Inside-out

Newton (Naphtali-Sandholm approach)

The standard, sum-rates, and nonideal algorithms are variants of the inside-out approach. The MultiFrac, PetroFrac, and Extract models also use this approach. The Newton algorithm uses the classical Naphtali-Sandholm approach. Use the Convergence form to select the algorithm and specify the associated parameters.

Overall Convergence Method Descriptions
See Also

Troubleshooting RadFrac Convergence Methods

On the Setup | Configuration sheet, select one of the following overall convergence methods for use in RadFrac. Except for the Custom method, each of these methods sets the Algorithm and Initialization method on the Convergence form to specific methods.

This method

Is recommended for

Algorithm

Initialization method

Standard

Most two- and three-phase columns. Can be used to perform free-water calculations in the condenser or the entire column.

Standard

Standard

Petroleum/
wide-boiling

Petroleum/petrochemical applications involving wide-boiling mixtures and many components/design specifications. RadFrac can perform free-water calculations only in the condenser.

Sum-Rates

Standard

Strongly
nonideal liquid

Highly nonideal systems when RadFrac encounters slow or difficult convergence using the standard algorithm.

Nonideal

Standard

Azeotropic

Highly nonideal azeotropic separations, for example, ethanol dehydration using benzene as an entrainer.

Newton

Azeotropic

Cryogenic

Cryogenic applications, such as air separation.

Standard

Cryogenic

Custom

Choose the algorithm method and initialization method independently on the Convergence | Basic sheet.

User-selected

User-selected

Convergence Algorithm Descriptions
See Also

Inside-Out Algorithms

Newton Algorithm

Troubleshooting RadFrac Convergence Methods

The convergence algorithms for RadFrac are:

Convergence Method

Description

Standard

The standard inside-out method of Boston and Britt. Recommended for common two- and three-phase distillation calculations.

Sum-Rates

A variation of the inside-out method. Recommended for petroleum/petrochemical applications involving wide-boiling mixtures with many components or design specifications. Use only for two-phase distillation calculations. Can also handle free-water in condenser.

Nonideal

A variation of the inside-out method of Boston and Britt. Recommended for highly nonideal two- and three-phase distillation calculations which result in slow or nonconvergence using the standard inside-out method.

Newton

Recommended for highly nonideal three-phase distillation calculations, such as azeotropic distillation. Slower than all other inside-out algorithms.

Initialization Method Descriptions
See Also

Troubleshooting RadFrac Convergence Methods

The initialization methods for RadFrac are:

Initialization Method

Description

Standard

Standard initialization of column profiles recommended for most common applications

Crude

Special initialization of column profiles recommended for wide boiling and multidraw columns

Chemical

Special initialization of column profiles recommended for narrow-boiling and highly nonideal chemical systems

Azeotropic

Special initialization of column profiles recommended for azeotropic systems (for example, dehydration of ethanol using benzene as an entrainer)

Cryogenic

Special initialization of column profiles recommended for cryogenic applications (for example, air separation)

Convergence Weighting Options
RadFrac provides three convergence weighting options for the local average K value model:

When you select this option


RadFrac uses

X

Liquid mole fractions as weighting factors

Y

Vapor mole fractions as weighting factors

K

The following weighting factor for each component:

W = Y / (1+K)

Where:

W = Weighting factor

Y = Vapor mole fraction

K = K value

Inside-Out Algorithms
See Also

Algorithms

Newton Algorithm

Design Mode Convergence

Troubleshooting RadFrac Convergence Methods

The inside-out algorithms consist of two nested iteration loops.

The K-value and enthalpy models you specify are evaluated only in the outside loop to determine parameters of simplified local models. When using nonideal, algorithm RadFrac introduces a composition dependence into the local models. The local model parameters are the outside loop iteration variables. The outside loop is converged when the changes of the outside loop iteration variables are sufficiently small from one iteration to the next. Convergence uses a combination of the bounded Wegstein method and the Broyden quasi-Newton method for selected variables.

In the inside loop, the basic describing equations (component mass balances, total mass balance, enthalpy balance, and phase equilibrium) are expressed in terms of the local physical property models. RadFrac solves these equations to obtain updated temperature and composition profiles. Convergence uses one of the following methods, as specified by parameter Ilmeth (See Inside-Loop Convergence Methods):

Bounded Wegstein

Broyden quasi-Newton

Schubert quasi-Newton

Newton

RadFrac adjusts the inside loop convergence tolerance with each outside loop iteration. The tolerance becomes tighter as the outside loop converges. The tolerance and its adjustments are controlled by parameters Tolil0, Tolilfac, and Tolilmin.

When the nested design specification convergence method is used, there is additionally a middle loop in which the design specifications are converged. See Design Mode Convergence and Nested Design Specification Convergence.

Parameters

The following parameters on the Convergence | Advanced sheet affect the inside-out algorithms:

When using nested methods, Extra-ML specifies the number of additional middle loop iterations to perform if, after the outside loop is converged, Tolml is not satisfied.

Flash-Tolil specifies the tolerance for the composite feed flash performed for the inside loop when reactions are specified.

Hmodel1 specifies the basis for the local enthalpy model from the dropdown list when using inside-out methods. RadFrac automatically selects this option based on column specifications. The local enthalpy model can be based on the mole fractions, mass fractions, or internally generated pseudo-mass fractions of the components.

Hmodel2 specifies the temperature dependency handling option for the local enthalpy model when using inside-out methods. RadFrac automatically selects an option based on column specifications. The temperature dependency can be excluded (No-Temp, adequate for most applications), calculated initially and kept constant during convergence (Temp, recommended for wide-boiling systems and for absorbers and strippers), or updated at each outside loop iteration (Update, recommended for extremely wide-boiling and highly nonideal systems).

Ilmeth specifies which of the inside-loop convergence methods is used.

Kbbmax specifies the maximum allowable slope for the reciprocal temperature in the local K value model, used to represent the temperature derivatives of K values in the inside loop. RadFrac determines a composite derivative from the temperature derivatives of K values of all components using some weighting factors. If the component vapor pressure has a strong temperature dependence, you can increase the slope to reduce the number of outside loop iterations. Increasing the slope increases the step size on temperature, and may lead to convergence instability.

Kmodel specifies the weighting option for the local K value model. RadFrac determines the default based on the type of distillation calculations. See Convergence Weighting Options.

Max-Broy specifies the maximum number of outside loop variables converged by the Broyden method. Increasing this value reduces the number of iterations, but increases the time per iteration and memory requirement. Do not increase this value beyond 500.

Maxil specifies the maximum number of inside loop iterations per outside loop iteration for inside-out methods. Increase this value if the maximum number is reached consistently, or successive middle loop errors remain constant in design mode. The default is 10.

Maxip specifies the maximum number of profile refinement iterations in the initialization phase for the Sum-Rates algorithm only. RadFrac selects the default value based on the feed and column specifications. A typical value is 3. You can set this value to 1 to suppress the profile refinement iterations.

Maxml specifies the maximum number of middle loop iterations per outside loop.

Maxol specifies the maximum number of outside loop iterations allowed for convergence.

Qmaxbwil specifies the maximum value of the bounded Wegstein acceleration parameter for the inside loop.

Qmaxbwol specifies the maximum value of the bounded Wegstein acceleration parameter for the outside loop.

Qminbwil specifies the minimum value of the bounded Wegstein acceleration parameter for the inside loop. If excessive oscillation occurs in the inside loop RMS error while Wegstein is used for inside loop convergence, increase this value.

Qminbwol specifies the minimum value of the bounded Wegstein acceleration parameter for the outside loop. If excessive oscillation occurs in the outside loop RMS error while Wegstein is used for outside loop convergence, increase this value. Increase the Start value by specifying Qminbwol=0.5 (or up to 0.9 as necessary). When Qminbwol exceeds 0.5, you must also increase Qmaxbwol for consistency. You may also have to increase the maximum number of iterations for convergence.

Rmsol0 specifies a threshold value of the outside loop RMS error. The RMS error must reach the threshold before RadFrac performs design specification iterations. If this value is zero, it is ignored. Reduce the value if little or no progress is made in reducing middle loop error (design specification error) between successive outside loops.

Rmsol1 specifies a threshold value of the outside loop RMS error. Below this threshold, RadFrac uses the Broyden method for selected variables. If excessive oscillation occurs once the outside loop RMS error falls below the default value, reduce the threshold.

Tolil0 specifies the initial inside loop tolerance. RadFrac begins with the inside loop tolerance set to Tolil0, and adjusts it using Tolilfac based on the outside loop convergence. Thus, the column-describing equations are converged more tightly in the inside loop as the outside loop converges. Tolilmin limits the adjusted inside loop tolerance and the convergence tolerance for Newton's method.

Tolilfac specifies the ratio of inside loop tolerance to outside loop RMS error. When not specified, RadFrac calculates this value based on column specifications.

Tolilmin specifies the minimum value for the inside loop tolerance when RadFrac adjusts it.

Tolml specifies the middle loop tolerance for design specifications. When using the Nested iteration for design specifications, this tolerance applies to the middle loop error. It corresponds to the root-mean-square value of the differences between calculated and specified values of design specification variables. Tolml is not checked during middle loop calculations, which simply try to minimize design spec error, but once the outside loop is converged, this tolerance is checked.

Tolol specifies the convergence tolerance for outside loop convergence.

Inside-Loop Convergence Methods
The inside-loop convergence methods (used with Inside-Out Algorithms) for RadFrac are:

Method

Description

Broyden

Fast and reliable for most applications. This is the default for all calculations except for Algorithm=Sum-Rates, reactive distillation, nonideal three-phase distillation, and pumparounds.

Wegstein

Generally slower than Broyden, but requires less memory. Use this method if the number of stages exceeds 500.

Newton

Has excellent convergence characteristics but is generally slower than other methods, especially when the number of components exceeds 15. RadFrac uses this method for calculations involving reactive distillation, nonideal three-phase distillation, and pumparounds.

Schubert

The default method for Algorithm=Sum-Rates.

Parameters

Ilmeth on the Convergence | Advanced sheet specifies which of these methods is used.

When the Newton method is used for the inside loop, the same parameters which apply to the Newton Algorithm control it.

Newton Algorithm
See Also

Algorithms

Inside-Out Algorithms

Design Mode Convergence

Troubleshooting RadFrac Convergence Methods

The Newton algorithm solves column-describing equations simultaneously, using Newton's method. The convergence is stabilized using either the dogleg strategy of Powell or a line search, as specified by Stable-Meth. The algorithm uses the Naphtali-Sandholm formulation of the distillation problem (Perry's Handbook). Design specifications may be solved either simultaneously with the column-describing equations or in an outer loop.

Parameters

The following parameters on the Convergence | Advanced sheet affect the Newton algorithm:

Dtmax is the maximum step size for temperature. RadFrac determines a default value for Dtmax based on the type of distillation problem and the algorithm used.

Maxol specifies the maximum number of Newton iterations allowed for convergence.

Pheqm-Form specifies the phase equilibrium calculation method used in Newton-based calculations. The Standard method uses component liquid flow as stage variables and includes all composition derivatives (Default in SM if there are fewer than 20 components). The Total method uses component liquid flow and total flow as variables and includes all composition derivatives (Default in EO). The Ideal method uses component liquid flow and total flow as variables and ignores all composition derivatives. (Default in SM if there are more than 20 components).

Prop-Deriv specifies the method to calculate physical property derivatives for Newton-based calculations. You can select analytical derivatives or numerical derivatives. The numerical derivatives are computed by finite differences.

Radius-Frac specifies the radius of the initial trust region as a fraction of variable two-norm when using the Dogleg strategy to stabilize Newton-based calculations.

Stable-Iter specifies the initial number of stabilization iterations when using either the dogleg strategy or line search.

Stable-Meth specifies the stabilization method for Newton-based calculations. The Dogleg method uses Powell's dogleg strategy (Powell, 1970) in a trust region approach to combine Newton and steepest descent directions. The Line Search method uses a one dimensional search along the Newton direction to find a fraction of the step size to implement.

Tolol and Tolilmin determine the convergence tolerance. This tolerance is 1.d-3 times the specified value of Tolol, but not less than Tolilmin. Note that the same tolerances also apply differently to the inside-out algorithms.

Var-Trans specifies transformations of the liquid and vapor flow variables RadFrac uses to aid in convergence. These transformations change the variables to which Newton's method is applied. This can make convergence easier in some cases. The liquid and vapor flow transformations use the following definitions, where x is the variable and F(i,j) is the flow of component i in the phase being transformed (liquid or vapor) on stage j. For Linear, x = F(i,j) (no transformation). For Square x = square root of F(i,j). For Exponential, x = exp(F(i,j)). For the final calculation, the linear transformation is always used. During iterations, the transformation is specified by Var-Trans, or is linear by default. In the Rate-Based calculation, variables on the RadFrac | Rate-based Setup | Advanced Convergence sheet control this transformation similarly.

References

Robert H. Perry and Don Green, eds., Perry's Chemical Engineers' Handbook, 6th edition, McGraw-Hill, 1984, pp. 13-51 to 13-53.

Powell, M.J.D., "A Fortran Subroutine for Solving Systems of Nonlinear Algebraic Equations," Numerical Methods for Nonlinear Algebraic Equations, (P. Rabinowitz, ed.), Ch.7, 1970.

Design Mode Convergence in RadFrac
See Also

Algorithms

Inside-Out Algorithms

Newton Algorithm

RadFrac provides two methods for handling design specification convergence:

Nested Design Specification Convergence (for all algorithms except SUM-RATES)

Simultaneous Design Specification Convergence (for Algorithm=SUM-RATES, NEWTON)

When Newton's method is used, option Dsmeth on the Convergence | Advanced sheet specifies which of these two methods is used to converge design specifications.

Nested Design Specification Convergence (for all algorithms except SUM-RATES)
See Also

Algorithms

Inside-Out Algorithms

Newton Algorithm

Design Mode Convergence

Simultaneous Design Specification Convergence (for Algorithm=SUM-RATES, NEWTON)

The Nested Middle Loop convergence method attempts to satisfy the design specifications by determining the values of the manipulated variables (within their bounds) that minimize the weighted sum of squares function:



Where:

m

=

Design specification number



=

Calculated value

G

=

Desired value

G*

=

Scaling factor

w

=

Weighting factor

The algorithm that manipulates the variables to minimize Φ does not depend on matching particular variables with corresponding design specifications. You should carefully select the manipulated variables and design specifications. Make sure that each manipulated variable has a significant effect on at least one design specification.

The number of design specifications must be equal to or greater than the number of manipulated variables. If there are more design specifications than manipulated variables, assign weighting factors to reflect the relative importance of the specifications. The larger the weighting factor, the more nearly a specification will be satisfied. Scale factors normalize the errors, so that different specification types are compared on a consistent basis.

When a value of a manipulated variable reaches a bound, that bound is active. If a problem has no active bounds and the same number of manipulated variables as design specifications, then Φ will approach zero (within some tolerance) when all specifications are satisfied.

If there are active bounds or more design specifications than manipulated variables, RadFrac minimizes Φ. The weighting factors determine the relative degree to which the design specifications are satisfied.

This mode is not supported with rate-based distillation calculations.

Simultaneous Design Specification Convergence (for Algorithm=SUM-RATES, NEWTON)
See Also

Algorithms

Inside-Out Algorithms

Newton Algorithm

Design Mode Convergence

Nested Design Specification Convergence (for all algorithms except SUM-RATES)

The Simultaneous Middle Loop convergence method algorithm solves the design specification functions simultaneously with the column-describing equations:



Because the Simultaneous Middle Loop convergence method uses an equation-solving approach, there must be an equal number of design specifications and manipulated variables. In the nested method, no coupling is assumed between design specifications and manipulated variables. However, each design specification must be significantly affected by at least one manipulated variable. Bounds and weighting factors are not used. In general, the Simultaneous method gives better performance if all the specifications are feasible.

Miscellaneous Convergence Parameters
The following parameters on the Convergence | Advanced sheet affect other aspects of RadFrac convergence as described below.

Algorithm options

Absorber=Yes invokes an algorithm option for absorber/stripper calculations. Absorber=Yes is allowed for RadFrac only when there is no condenser, condenser and reboiler duties are specified, and Standard algorithm is used for the simulation.

Ll-Meth specifies a liquid-liquid phase split algorithm. See Liquid-Liquid Phase Split Algorithms.

Smooth-Tol is used in the smoothing technique used to handle phase disappearance in the thermosiphon reboiler configuration, and in 2 or 3 phase pumparounds without a vapor fraction specification.

Flash options

Eff-Flash specifies whether RadFrac performs flash calculations to determine the equilibrium temperature of outlet streams when you specify efficiency on the Efficiencies form. By default, outlet streams are not flashed when using efficiencies. If Eff-Flash=Yes, RadFrac performs a PQ flash to determine the temperature and vapor fraction of an outlet stream from a stage that has efficiency less than 1.

Flash-Maxit specifies the maximum number of feed flash iterations.

Flash-Tol specifies the feed flash tolerance. By default, this tolerance is set to the value given in Block-options or Global Sim-options. Block-options take precedence over Global Sim-options.

Prod-Flash specifies the type of flash calculations performed on product streams. PV uses bubble/dew point flashes for product streams, depending on the stage from which the product is drawn and the product phase (Default). TP uses temperature-pressure flashes for product streams, and is preferred for applications in the retrograde region when multiple bubble/dew points are possible.

Limit options

Fminfac specifies the lower limit for stage flow as a fraction of the total feed flow. If the flow on any stage goes below this value, that stage is considered to have dried up. The default is 1e-5.

Max-Salt-Sat specifies the salt concentration/salt solubility limit on an activity basis. A warning is issued if the calculated salt concentration/salt solubility ratio exceeds this value for any salt. Temperature is held constant for this calculation. Default value = 1.0. Used only when Salt Precipitation Handling is set to Ignore-Check on the Basic sheet.

NQ curve options

NQ-Fopt-Meth specifies the algorithm for feed tray optimization for NQ-Curves. Choose Case study, QP search (one-dimensional quadratic search), or Hybrid (QP search on the first case and case study for subsequent cases).

NQ-Prof-Max specifies the maximum number of NQ profiles stored for analysis (default = original number of stages * number of NQ-curves).

NQ-Tolol specifies the outside loop tolerance used during NQ-curve generation.

NQ-Tolobj specifies the objective function tolerance for terminating NQ curve generation. Generation is terminated when the variance in objective function caused by increasing the number of stages by 1 falls below this relative tolerance. The feed stage optimization uses one tenth of this tolerance.

Reaction options

Eqrxn-form specifies the formulation for equilibrium reactions. Choose from standard, logarithmic, or product formulations. The default is standard, which chooses automatically between the logarithmic and product formulations. Changing this option is recommended only if columns with chemistry fail to converge with small Err/Tol due to changing compositions of trace components.

Flash-Vfrac specifies the vapor fraction specification for reactive flash calculations. By default, RadFrac determines the vapor fraction from the column specifications.

Tray and packing options

Flexi-Meth specifies the Koch Bulletin number for tray flooding calculations.

Float-Meth specifies the calculations method for Nutter trays (using the 1990 or 1996 edition of the Nutter manual).

Rate-Based Distillation
See Also

Mathematical Basis

Calculation Methods

Specifying a Rate-Based Column

Built-In Correlations

Troubleshooting Rate-Based Convergence Failures

Getting Started with Aspen Rate-Based Distillation

The traditional approach for solving distillation columns uses the concept of equilibrium or theoretical stages. This concept assumes the vapor and liquid phases leaving any stage are in thermodynamic equilibrium with each other. In practice, this equilibrium only truly holds at the interfaces separating vapor and liquid phases. Efficiencies are used to try to account for deviations from equilibrium, but these empirical factors are very limited and prediction methods are often unreliable. In packed columns, HETP is often used in place of the equilibrium stage, but this too can be difficult to predict accurately.

In contrast, rate-based distillation is a fundamental, rigorous approach which avoids the approximations of efficiency and HETP entirely. Rate-based distillation calculations directly account for the mass and heat transfer rate processes in the system of equations representing the separation unit.

Aspen Rate-Based Distillation, the rate-based mode of RadFrac, models the simultaneous mass and heat transfer rate phenomena, and accounts for the multicomponent interactions between simultaneously diffusing species.

For non-reacting systems, rate-based calculations include:

Mass and heat balances around vapor and liquid phases

Mass and heat transfer rate models to determine interphase transfer rates

Vapor-liquid equilibrium relations applied at the interface

Correlations to estimate mass and heat transfer coefficients and interfacial areas

In reacting systems, there are additional equations to account for the influence of chemical reactions on heat and mass transfer processes. For equilibrium reactions, RadFrac includes equations representing the chemical equilibrium conditions.

In systems with electrolytes, there are additional equations to enforce electronegativity conditions.

Aspen Rate-Based Distillation must solve many more equations for a given model than in equilibrium mode. Computing times for rate-based mode are greater than for equilibrium mode, particularly for problems involving many components. Aspen Rate-Based Distillation uses an efficient, Newton-based simultaneous correction approach. Solution times increase with the square of the number of components. Solution times can be an order of magnitude greater than equilibrium mode calculations for the same problems.

Mathematical Basis
See Also

Built-In Correlations

Nomenclature

Calculation Methods

The mathematical model behind the rate-based calculations in Aspen Rate-Based Distillation consists of material balances, energy balances, mass transfer, energy transfer, phase equilibrium, and summation equations. The model is based on a stage (a tray or a section of packing) as shown in the diagram below. In the equations and variables, subscript j refers to the stage number. Stages are numbered from the top down.

image\ebx_1959841024.gif

The equations related to this stage are:

Material balance for bulk liquid



Material balance for bulk vapor



Material balance for liquid film



Material balance for vapor film



Energy balance for bulk liquid



Energy balance for bulk vapor



Energy balance for liquid film



Energy balance for vapor film



Phase equilibrium at the interface



Summations



These equations below for flux demonstrate the Mixed flow model where outlet conditions are used for the bulk properties in each phase. When using other flow models, the average of inlet and outlet conditions may be substituted for some bulk properties. See Flow Models for details.

Mass flux for liquid film



Where:



where the symbol Σ means fixing the mole fractions of all other components except the nth while evaluating the differentiation.





Mass flux for vapor film



Where:



where the symbol Σ means fixing the mole fractions of all other components except the nth while evaluating the differentiation.





Heat flux for liquid film



Heat flux for vapor film

Nomenclature for Rate-Based Distillation
The following symbols are used in the equations for the basis of rate-based distillation or in the correlations in Aspen Rate-Based Distillation:

Variable

Description

Ab

Total active bubbling area on the tray [m2]

Ah

Total area of the holes [m2]

At

Cross-sectional area of the column [m2]

a

Interfacial area per unit bubbling area for trays [-]

, a'

Total interfacial area per unit volume of liquid, vapor [m2/m3]

ae

Effective surface area per unit volume of the column [m2/m3]

aI

Interfacial area for mass transfer [m2]

ap

Specific area of the packing [m2/m3]

aw

Wetted surface area per unit volume of the column [m2/m3]

Β

Base width of a corrugation [m] (in Bravo, Rocha, and Fair correlations)

CE

Correction factor for surface renewal [-]

CP

Specific molar heat capacity [J/kmol K]

D

Diffusivity [m2/s]

d

Characteristic length [m]

deq	
Equivalent diameter [m]

dh

Hydraulic diameter [m]

dp

Nominal packing size [m]

F

Feed molar flow rate [kmol/s]

Ff

Fractional approach to flooding [-]

Fs

Superficial F-factor []

Fse

Factor for surface enhancement

Ft

Correction factor for total holdup due to effective wetted area [-]

FP

Flow parameter [-]

g

Gravitational constant [m/s2]

geff	
Effective gravity [m/s2]

H

Enthalpy [J/kmol]



Partial enthalpy [J/kmol]

h

Heat transfer coefficient [J/m2 K s]

h

Height of a corrugation [m] (in Bravo, Rocha, and Fair correlations)

hcl	
Clear liquid height [m]

hf	
Froth height [m]

hL	
Volumetric liquid holdup [m3]

h'L

Liquid height [m]

hp

Height of a packed section [m]

ht

Fractional holdup [-]

hw

Average weir height (per liquid pass) [m]

k

Mass transfer coefficient [m/s]

L

Liquid molar flow rate [kmol/s]

lw

Average weir length (per liquid pass) [m]

Μ

Molecular weight

N

Mass transfer rate [kmol/s]

Np	
Number of liquid flow passes [-]

nc

Number of components [-]

P

Pressure [Pa]

P

Perimeter per unit cross-sectional area [1/m] (in Bravo, Rocha, and Fair correlations)

p

Sieve tray hole pitch [m]

Q

Heat input to a stage [J/s]

QL, QV

Total volumetric flow rate for the liquid, vapor [m3/s]

q

Heat transfer rate [J/s]

R

Inverse of the mass transfer coefficient matrix [s/kmol]

r

Reaction rate [kmol/s]

S

Slant height of a corrugation [m] (in Bravo, Rocha, and Fair correlations)

t

Residence time [s]

T

Temperature [K]

u

Flow velocity [m/s]

uLe, uVe

Effective velocity through the channel for liquid, vapor [m/s]

UsL, UsV

Superficial velocity for the liquid, vapor [m/s]

usfV

Superficial vapor velocity at flooding [m/s]

V

Vapor molar flow rate [kmol/s]

x

Bulk liquid mole fraction [-]

y

Bulk vapor mole fraction [-]

Z

Average flow path length on a tray (per pass) [m]

z

Electric charge number [-]

Dimensionless groups:

Variable

Description

Ca

Capillary number

Fr

Froude number

Nu

Nusselt number

Pr

Prandtl number

Re

Reynolds number

Sc

Schmidt number

Sh

Sherwood number

St

Stanton number

StH

Stanton number for heat transfer

We

Weber number

Greek symbols:

Variable

Description

α

Relative froth density [-]

α

Dispersion density [-] (Stichlmair, 1978)

ΔϕE

Driving force caused by electric potential [-]

Γ

Matrix of thermodynamic factors [-]

Γ

Liquid flow per unit length of perimeter [kg/m s]

γ

Contact angle between solid and liquid film [deg]

ΔP

Pressure drop

ΔP/ΔZ	
Pressure drop per unit height of packing

δi,k

Kronecker delta: 1 if i=k, 0 otherwise

ε

Void fraction of packing

θ

Angle with horizontal of falling film or corrugation channel [deg]

λ

Thermal conductivity

ρt	
Mass density [kg/m3]



Molar density [kmol/m3]

σ

Liquid surface tension [N/m]

σc

Critical surface tension of packing [N/m]

φ

Fugacity coefficient [-]

ϕ

Fractional hole area per unit bubbling area [-]

Superscripts:

Variable

Description

F

Feed

f

film

I

Interface

L

Liquid

V

Vapor

Subscripts:

Variable

Description

d

Dry basis

flood

At flooding

i

Component

j

Stage

k

Component

L

Liquid

m

Component

n

Last component

t

Total

V

Vapor

A bar over a variable, where not otherwise specified, indicates an average quantity.

Calculation Methods
See Also

Flow Models

Film Reactions

Calculations with Electrolytes

Nonvolatile and Noncondensable Components

In Aspen Rate-Based Distillation, the full set of equations is solved using Newton's method, using the solution from the equilibrium-based mode as the initial guess. A simple continuation/homotopy method is also used to allow smoother switching from equilibrium to rate-based solution.

It is not practical to have binary diffusivity and mass transfer coefficients as independent variables as there are simply too many variables (4*c*c variables per stage, where c is the number of components). For a column with 50 components and 100 stages, there would be 10 million variables even in the absence of reactions.

Derivatives for some properties (diffusivities, partial molar enthalpies, and composition derivatives of activity or fugacity coefficients) are not available for the property monitors as they involve derivatives of matrices or derivatives of derivatives. Thus, these derivatives are computed numerically.

To reduce the size of the Jacobian, the mass transfer coefficients are written in the form:



where kjo is a function of flow, temperature, composition, and many properties, but is independent of the components i and k. The kjo and αj are the independent variables, one per stage, rather than the binary diffusivity and mass transfer coefficients, and these are the variables which user subroutines must return; Aspen Rate-Based distillation calculates the binary mass transfer coefficients when needed without including each one separately in the problem matrix. This reduces the size of the Jacobian drastically when there are a large number of components in the system.

The evaluation of the fluxes and reaction rates are treated differently depending on the flow model specified.

Flow Models
See Also

Mathematical Basis

Aspen Rate-Based Distillation allows you to specify different flow models to determine the bulk properties used to evaluate the mass and energy fluxes and reaction rates. These models are all based on this model of a stage, with different bulk properties. The ? subscript on the variables inside the bulk liquid and bulk vapor boxes indicates the different values possible here based on flow model. Depending on the flow model, the ? variables can be taken to be the same as the outlet values (?=j) or the average of the inlet and outlet values (?=avg).

image\ebx_768411918.gif

The Flow Models

Important: Using any model other than Mixed can lead to convergence failures due to the over-estimation of fast reaction rates. See Troubleshooting.

image\ebx_-1407326202.gif

In the Mixed flow model, as is the case on equilibrium stages, the bulk properties for each phase are assumed to be the same as the outlet conditions for that phase leaving that stage (?=j). This is the default flow model and is recommended for trays.

image\ebx_196943741.gif

In the Countercurrent flow model, the bulk properties for each phase are an average of the inlet and outlet properties (?=avg). For example, .

This method gives more accurate results for packing, but is more computationally intensive. However, when the packing sections are too large, this model will overestimate the material transfer rates, leading to convergence problems. See Troubleshooting.

image\ebx_-668788171.gif

In the VPlug flow model, outlet conditions are used for the liquid and average conditions are used for the vapor. The outlet pressure is used.

This model is recommended for both columns with trays and those with packing. However, in some cases it can lead to the same problems seen in Countercurrent. In those cases you should choose the Mixed flow model.

image\ebx_-1221524180.gif

In the VPlugP flow model, outlet conditions are used for the liquid and average conditions are used for the vapor. The average pressure is used.

In some cases this can lead to the same problems seen in Countercurrent. In those cases you should choose the Mixed flow model.



In the LPlug flow model, outlet conditions are used for the vapor and average conditions are used for the liquid. The outlet pressure is used.

In some cases this can lead to the same problems seen in Countercurrent. In those cases you should choose the Mixed flow model.

Note that the liquid and vapor flow rates that apply to these flow models are used in calculations of mass transfer and heat transfer, and in properties required for those calculations. In calculations of liquid holdup, pressure drop, or flooding, the mixed flow model is always used; that is, the liquid flow and vapor flow leaving the stage are used.

On the Rate-Based | Rate-Based sheet of the Tray Rating or Packing Rating form for a section you can specify the flow model to be used for that section.

On the Rate-based Modeling | Rate-based Setup | Specifications sheet you can specify parameters that modify these flow models near the top and bottom of the column and on feed stages.

Calculations with Electrolytes
When electrolytes are present in Aspen Rate-Based Distillation, there is a driving force  caused by the electric potential in each film region. This driving force is adjusted such that the electroneutrality conditions are satisfied at the right boundary of the film region.

Exchanger Integration
See Also

Reboiler Configurations

Pressure in Thermosiphon Reboilers

Troubleshooting RadFrac Exchanger Integration

The reboiler in RadFrac can be modeled rigorously using a HeatX block (configured to use Aspen Shell & Tube Exchanger) and a Flash2 block. It is also possible to model it somewhat less rigorously using the shortcut mode of HeatX. Several configurations are available.

You may use either Reboiler type Thermosiphon or Kettle on the Setup | Configuration sheet. For the Thermosiphon reboiler, choose one of the configurations for the reboiler on the Thermosiphon Config. sheet. This determines the configuration, flow rate, and/or condition of fluid through the unit operations which make up the reboiler.

For Rating and Design modes of the heat exchanger, you may specify the column as you normally would. The calculated duty is passed to HeatX, which rates or designs the heat exchanger.

In Simulation mode of the heat exchanger, the exchanger updates at least one column specification (as described below) for which you have entered a value. You must enter a value for at least one specification to be updated.

For the Kettle reboiler, this specification can only be Reboiler Duty, which you must select as one of the two Operating Specifications on the Configuration sheet.

For the Thermosiphon reboiler, Reboiler Duty, the thermosiphon Flow rate, and/or Outlet condition can be updated by the exchanger, as follows:

When Flow rate is entered on the Reboiler sheet, if the Circulation type option on the Reboiler Wizard is Calculated, then the heat exchanger updates the flow rate. The Calculated option is only available when the exchanger type (Type in the Reboiler Wizard) is Shell&Tube; the shortcut calculation cannot calculate flow rate.

When Outlet condition is entered on the Reboiler sheet, it will be updated by the exchanger.

When both Flow rate and Outlet condition are specified, you need to enter an estimate for Reboiler Duty on the Configuration sheet. In other cases, if Reboiler Duty is entered on the Configuration sheet, it is a specification and will be updated by the heat exchanger integration.

Note: If one of these column specifications is entered but is manipulated by another operation such as a Vary, it is no longer a specification, and cannot be properly updated by the heat exchanger integration.

If this operation is a Vary within the column, the property is treated as if unspecified.

If the operation is outside the column, the Reboiler Wizard cannot detect it. The outside operation will take precedence over the integration, making it not work as intended. You should avoid using such external operations with heat exchanger integration.

Once you have completed these specifications, click Reboiler Wizard. Choose the HeatX and Flash2 blocks to be used (or enter new IDs to create new blocks), enter the Shell&Tube input file name for the HeatX block, and names for the streams and Calculator blocks used. You can also specify the calculation mode (Design, Rating, or Simulation) for the heat exchanger, and when applicable, whether the flow rate is fixed or calculated. Optionally, if you have an empty hierarchy block on the flowsheet, you can select it and move the entire assembly into the hierarchy.

Once you have selected the blocks to be used for the exchanger integration, you cannot switch them, nor can you change certain inputs in the blocks which are set by the Calculator blocks. But you can return to the Reboiler Wizard to change the calculation mode.

Reboiler Configurations
The following reboiler configurations are available with the reboiler wizard in RadFrac. Each configuration is shown both as an approximation of the way it might be arranged in an actual column and in detail showing how it is represented using heat exchangers, flash drums, mixers, and splitters. In these diagrams, NT represents the number of trays (stages) as specified in Aspen Plus.

Once-through

 

This configuration is available when using the kettle reboiler. The liquid coming from the stage above the reboiler passes through the reboiler once and is returned to the bottom of the column as a mixture of liquid (which goes into the sump, to be drawn as bottom product) and vapor (which goes up to the stage above).

Circulation without baffle

 

The liquid coming from the stage above the reboiler enters the sump, from which the bottoms and the reboiler feed are both drawn (with the same composition). The reboiler product is returned above the sump. Vapor may also be produced when the hot liquid return from the reboiler contacts the liquid in the sump.

Circulation with baffle

 

The sump is divided into two sections with different compositions. The liquid from above the reboiler enters one section, from which the reboiler feed is drawn. The reboiler liquid product enters the other section, from which the bottoms stream is drawn. Excess reboiler liquid return (above the flow rate of the bottoms stream) overflows into the first section. Vapor from the first section (along with that from the reboiler product) passes up to the stage above.

In this configuration, the liquid flow leaving the thermosiphon reboiler must be at least as much as the bottom product, or else the section from which this flow is drawn will dry up and the column will not converge.

Circulation with auxiliary baffle



The sump is divided into three sections by a main baffle and an auxiliary baffle. Liquid from the tray above enters the section from which the reboiler feed is drawn. Reboiler return enters above the middle section, overflowing over the main baffle into the section from which the bottoms stream is drawn. Liquid can flow under the auxiliary baffle into or out of the middle section, depending on flow rates. The composition of the middle section is the same as one of the other two sections, depending on the direction of flow.

In this configuration, the sump is modeled as two stages, representing the different compositions of the reboiler feed and the bottoms stream.



Because the flow under the baffle is reversible, the effective flowsheet pattern depends on the direction of this flow. This diagram shows both possible configurations, with the dashed lines representing one configuration and the dash-dot lines representing the other.

In Aspen Plus, in the case when the liquid is flowing upward in the middle section, this overflowing liquid mixes with the reboiler return liquid and both of these enter stage NT. In this case, vapor may be produced by the mixing of these two streams (the vapor stream shown leaving the sump middle section). Since the sump's middle section is not an Aspen Plus stage in and of itself, this vapor stream is reported as a vapor flow from stage NT. Since such a flow would normally go to stage NT-1 but in this case goes to stage NT-2, it is treated as a total vapor draw from stage NT returned above stage NT-1 (so that it enters stage NT-2), and this appears as a vapor product and vapor feed in the column results.

 

These two diagrams show the separate configurations for the different directions of the reversible middle section flow. Note that only two vapor streams enter stage NT-2, one from the reboiler return and one from the meeting of cold sump and hot sump liquid, but the location for the meeting of this liquid varies; at the other point liquid is meeting liquid flowing away from it and assumed to be at the same conditions as the entering liquid.

The switch between the two configurations is handled via a smoothing equation with tolerance specified by Smooth-Tol on the RadFrac | Convergence | Advanced sheet. Though only one of the two vapor streams from stage NT-1 or from stage NT-2 actually exist, a trace amount of vapor may be seen in the other stream due to this smoothing method.

The flow in the middle section is reported on the RadFrac | Results | Reboiler sheet as Cold sump to hot sump flow or Hot sump to cold sump flow, as appropriate.

Pressure in Thermosiphon Reboilers
When using a HeatX block with Shell&Tube as a thermosiphon reboiler for a RadFrac column, in Aspen Plus, both streams between the column and the reboiler (the inlet and outlet of HeatX on the cold side) will have the pressure specified for the bottom stage of RadFrac. This is necessary because RadFrac only supports a single pressure for the stage and the entire reboiler is considered to be part of this stage. The pressure specified represents the pressure at the top of the liquid in the column sump. The pressure for the outlet stream of HeatX is set by the Pressure of liquid level in column on the HeatX | EDR Options | Analysis Parameters sheet, but the Reboiler Wizard will normally set this to match the pressure specified for the bottom stage.

Shell&Tube internally calculates different pressures for inlet and outlet, as can be seen on the Results | Result Summary | TEMA Sheet in the EDR Browser. These pressures also appear as the Calculated Thermosiphon cold side inlet pressure and outlet pressure on the HeatX | EDR Shell&Tube Results | Overall sheet. These represent the pressures at the inlet and outlet of the thermosiphon heat exchanger. They will be different than the pressures of the streams due to elevational pressure change (head). The amount of elevation change at inlet and outlet can be seen on the Input | Exchanger Geometry | Thermosiphon Piping sheet in the EDR Browser. The outlet pressure can be estimated on the HeatX | EDR Options | Analysis Parameters sheet as Estimated outlet pressure; a negative value here represents the pressure drop across the exchanger.

When sizing the thermosiphon, the Pressure at liquid surface in column field in EDR is set to the pressure of the inlet cold stream. This pressure is also used as an estimate of the inlet pressure for the cold stream in the exchanger, for the purpose of generating property curves.

Pump Reference
See Also

Flowsheet Connectivity

Specifying Pump

Use Pump to model a pump or a hydraulic turbine.

Pump is designed to handle a single liquid phase. For special cases, you can specify two- or three-phase calculations to determine the outlet stream conditions and to compute the fluid density used in the pump equations. The accuracy of the results depends on a number of factors, such as the relative amounts of the phases present, the compressibility of the fluid, and the efficiency specified.

Use Pump to change pressure when the power requirement is needed or known. For pressure change only, you can use other models such as Heater.

Pump can model pumps and hydraulic turbines.

Use the Pump block to rate a pump or a turbine by specifying scalar parameters or by specifying the related performance curves. To use the performance curves, you can specify either:

Dimensional curves such as head versus flow or power versus flow

Dimensionless curves such as head coefficient versus flow coefficient

Pump Reference
See Also

Flowsheet Connectivity

Specifying Pump

Use Pump to model a pump or a hydraulic turbine.

Pump is designed to handle a single liquid phase. For special cases, you can specify two- or three-phase calculations to determine the outlet stream conditions and to compute the fluid density used in the pump equations. The accuracy of the results depends on a number of factors, such as the relative amounts of the phases present, the compressibility of the fluid, and the efficiency specified.

Use Pump to change pressure when the power requirement is needed or known. For pressure change only, you can use other models such as Heater.

Pump can model pumps and hydraulic turbines.

Use the Pump block to rate a pump or a turbine by specifying scalar parameters or by specifying the related performance curves. To use the performance curves, you can specify either:

Dimensional curves such as head versus flow or power versus flow

Dimensionless curves such as head coefficient versus flow coefficient

Specifying Pump
See Also

Performance Curves

NPSH Available

NPSH Required

Scaling Factors

Fluid Power

EO Usage Notes

Use the Setup | Specifications sheet for Pump specifications.

If you specify

Pump calculates

Discharge pressure

Power required or produced

Pressure increase (for a pump) or decrease (for a turbine)

Power required or produced

Pressure ratio (outlet pressure to inlet pressure)

Power required or produced

Power required (for a pump) or produced (for a turbine)

Discharge pressure

Curves of head, discharge pressure, pressure ratio, pressure change, or head coefficient

Power required or produced

Power curve

Discharge pressure

You can supply a Fortran subroutine to calculate performance curves in Pump. See Aspen Plus User Models for more information. Search the Knowledge Center for this document.

Performance Curves
The performance curves can be entered in one of the following curve formats:

Tabular data

Polynomials

User subroutine

You can select one of the following performance curves (the dependent variable) for the pump type you specified on the Pump | Setup | Specifications sheet:

Performance Curve Type

Data for a pump

Data for a turbine

Head

Head required

Head produced

Head-Coeff

Head coefficient

Head coefficient

Power

Power required

Power produced

Dis-Pressure

Outlet pressure

Outlet pressure

Pres-Ratio

Pressure ratio

Pressure ratio

Pres-Change

Pressure increase

Pressure decrease

The flow variable (the independent variable) can be one of the following:

Volume flow rate at suction conditions

Mass flow rate at suction conditions

Specific volumetric flow rate (for head coefficient only)

Flow coefficient (for head coefficient only)

You can select one of the following options for specifying curves:

A single curve at the operating shaft speed

A single curve; use affinity laws to scale the performance from a reference speed

Multiple curves at multiple shaft speeds

NPSH Available
The Net Positive Suction Head (NPSH) available for a pump is defined as:



Where:

NPSHA = Net Positive Suction Head Available

Pin = Inlet pressure

Pvapor = Vapor pressure of the liquid at inlet conditions

Hv = Velocity head = u2/2g where u is the velocity and g is the gravitation constant. If the suction area is not specified, this term is ignored and assumed to be zero.

Hs = Hydraulic static head corrected to the pump centerline

The NPSH available has to be greater than the NPSH required (NPSHR) to avoid cavitation. NPSH required is a function of pump design.

NPSH Required
See Also

NPSH Available

Specific Speed

The Net Positive Suction Head (NPSH) required can be considered the suction pressure required by the pump for safe, reliable operation. The NPSHR can be specified using the performance curves on the Performance Curves | NPSHR sheet, or calculated from the following empirical equation by specifying suction specific speed (Nss) on the Setup | Calculation Options sheet.



Where:

NPSHR

=

Net Positive Suction Head Required

N

=

Pump shaft speed (rpm)

Q

=

Volumetric flow rate at the suction conditions

Nss	
=

Suction specific speed

The units for Q and NPSHR are:

US:

Q in gal/min and NPSHR in feet

Metric:

Q in cum/hr and NPSHR in meters

Specific Speed in Pump
See Also

Suction Specific Speed

Specific speed and suction specific speed are two important parameters that define the suitability of a pump design for its intended conditions. The pump specific speed is defined as:



Where:

Head

=

Head developed across the pump

Ns

=

Specific speed

N

=

Pump shaft speed (rpm)

Q

=

Volumetric flow rate at the suction conditions

The units for Qand Head are:

US:

Head in feet, Q in gal/min

Metric:

Head in meters, Q in m3/hr

The choice between US and Metric speed units is made on the Setup | Calculation Options sheet.

In general, pumps with a low specific speed are termed low capacity and those with a high specific speed are termed high capacity. For a turbine, the specific speed is defined as follows:



Where:

Ns	
=

Specific speed

BHP

=

Developed horsepower

Head

=

Total dynamic head across turbine

Suction Specific Speed
See Also

NPSH Available

NPSH Required

Performance Curves

Suction specific speed (Nss) is an index number for a centrifugal pump and is used to define its suction characteristic. It is defined as follows:



Where:

NPSHR

=

Net positive suction head required for a pump or net positive discharge head required for a turbine

Nss

=

Suction specific speed

N

=

Pump shaft speed (rpm)

Q

=

Volumetric flow rate at the suction conditions

The units for Q and NPSHR are:

US:

Q in gal/min and NPSHR in feet

Metric:

Q in cum/hr and NPSHR in meters

Suction specific speed is a criterion of a pump's performance with regard to cavitation. For a pump of normal design, values of Nss vary from 6,000 to 12,000 in US units. A typical value is 8,500.

Head Coefficient
Head coefficient is defined as follows:

Headc = Head/u2

Where:

Headc

=

Head coefficient

Head

=

Head developed across the pump

u

=

Impeller tip speed

Fluid Power
The fluid horsepower (FHP) is defined as follows:

FHP = w × g × dH

dH = dP / ρg

Where:

dH

=

head generated

w

=

mass flow rate

g

=

gravitational acceleration

dP

=

the pressure difference across the pump

ρ

=

fluid mass density

Scaling Factors
The scaling factors are used to adjust the performance curve data. For example, for head developed, the adjusted value of head developed is:

 HEAD_ADJUSTED = HEAD × FACTOR

Where:

HEAD

=

Head developed across the pump

FACTOR

=

Scaling factor

If you specify multiple performance curves, the scaling factors apply to all curves.

Flow Coefficient
Flow coefficient is the ratio of discharge throat velocity to impeller tip speed. It is defined as:

Flowc = Q / A1 u

A1 = πd12/4

Where:

Flowc

=

Flow coefficient

Q

=

Volumetric flow rate

A1	
=

Cross-sectional area of discharge throat

d1	
=

Diameter of discharge throat

u

=

Impeller tip speed

The diameter of throat and diameter of impeller are related by the following empirical equation:

Ns = 5500 d1/Diam

Where:

Ns	
=

Specific speed at the best efficiency point

Diam

=

Diameter of impeller

You can specify Specific Speed (Ns) on the Setup | Calculation Options sheet.

Compr Reference
See Also

Flowsheet Connectivity

Specifying Compr

EO Usage Notes

Use Compr to model a compressor or turbine. The following types are available:

A polytropic centrifugal compressor or turbine

A polytropic positive displacement compressor

An isentropic compressor or turbine

Use Compr to change stream pressure when energy-related information, such as power requirement, is needed or known.

Compr can handle single-phase as well as two- and three-phase calculations.

You can use Compr to rate a single stage of a compressor or a single wheel of a compressor, by specifying the related performance curves. Compr allows you to specify either:

Dimensional curves, such as head versus flow or power versus flow

Dimensionless curves, such as head coefficient versus flow coefficient

Compr can also account for deviation from design condition if performance curves are used and design conditions are specified.

Compr can also calculate compressor shaft speed.

Flowsheet Connectivity for Compr
image\flowconn_compr_wmf.gif

Material Streams

Inlet
At least one material stream

Outlet
One material stream
 One water decant stream (optional)

Work Streams

Inlet
Any number of work streams (optional)

Outlet
One work stream for net work load (optional)

If you do not specify either power or pressure on the Compr | Setup | Specifications sheet, Compr uses the sum of the inlet work streams as a power specification. Otherwise, Compr uses the inlet work stream(s) only to calculate the net work load. The net work load is the sum of the inlet work streams minus the actual (calculated) work load.

You can use an optional outlet work stream for the net work load.

You can also specify speed in the inlet work streams. If Gear Ratio is specified on the Performance Curves | Operating Specs sheet, the operating shaft speed will be determined based on the gear ratio and the speed from the inlet work stream. If there is an outlet work stream connected, the shaft speed will be available in the outlet work stream.

Specifying Compr
See Also

Compressor Background

Calculation Methods

Performance Curves

Specific Speed

Specific Diameter

Scaling Factors and Offsets

Corrected Flow

Quasi-Dimensionless Curves

If you specify

Compr calculates

Discharge pressure

Power required or produced

Power required (for a compressor) or produced (for a turbine)

Discharge pressure

Curves of head, power, discharge pressure, pressure ratio, pressure change, or head coefficient

Power required and discharge pressure

Discharge pressure and curves of head or power or head coefficient

Power required, discharge pressure, and shaft speed

Power required and curves of discharge pressure, pressure ratio, or pressure change

Discharge pressure, and shaft speed

When you use performance curves, you can specify either a scalar value of efficiency or efficiency curves. You can supply a Fortran subroutine to calculate performance curves in Compr. See Aspen Plus User Models for more information. Search the Knowledge Center for this document.

A pressure ratio specification is always outlet pressure divided by inlet pressure. This should be greater than 1 for a compressor and less than 1 for a turbine.

Some required specifications depend on the compressor type. Specify the compressor type on the Setup | Specifications sheet.

You can model a polytropic compressor using the GPSA or ASME method or piecewise integration (exception: positive displacement compressors cannot be modeled by the ASME method). You can model an isentropic compressor using either the GPSA, ASME, or Mollier-based methods.

The GPSA method can be based on either:

Suction conditions

Average of suction and discharge conditions

The ASME method is more rigorous than the GPSA method for polytropic or isentropic compressor calculations. The Mollier method is the most rigorous for isentropic calculations.

Aspen Plus does not scale performance curves by molecular weight. But you can use the head scaling factor to achieve this correction. See the example.

Compressor Background
See Also

Isentropic Compression

Polytropic Compression

Positive Displacement

The head developed for a compressor to change the pressure of a stream from the inlet pressure P1 to the outlet pressure P2 is given by:



where V is the molar volume and subscripts 1 and 2 refer to inlet and outlet conditions, respectively.

To use this equation, the integral must be evaluated, which requires information on the path followed by the fluid from inlet to outlet. In a polytropic compression process, the relationship of P and V is given by PVn= C where n is the polytropic exponent and C is a constant. For an isothermal process, n=1, while for an isentropic process, n=k, the ratio of the heat capacities Cp/Cv.

This equation is only correct for perfect gases. The actual enthalpy change per mole of gas for a compression process is calculated using an efficiency factor:



or



Where η is the isentropic or polytropic efficiency. The efficiency is assumed constant along the integration path.

The indicated horsepower is defined as the total enthalpy change in the stream:



where F is the molar flow rate.

The brake horsepower (or total work) is the indicated horsepower corrected for mechanical efficiency or power loss:



Thus, given the outlet pressure, the indicated horsepower, brake horsepower, and head developed can be computed. On the other hand, if total work or the head developed is given (through performance curves), the enthalpy change and indicated horsepower can be calculated, and from this the outlet pressure p2 can be solved.

For an expansion process, these equations become:



where ηs is the isentropic efficiency, since only the isentropic model is supported for expansion.

The net work required or produced, Wnet, is calculated by:

Wnet = BHP + Win

where Win is the power from inlet work streams. Net work is positive if power is required and negative if power is produced. The sign for the work stream is the opposite; power supplied from the work stream is negative and power removed from the system is positive.

The pressure loss at the suction nozzle is given by:



where ρ1 is the density at the suction condition, K is the K-Factor for the suction nozzle, and Dn is the nozzle diameter for the suction nozzle. If this pressure loss is taken into account, the inlet pressure becomes p1-ΔPs instead of p1.

When the rotational speed is not a constant, compressor dynamics must be modeled by taking into account inertial effects. In Aspen Dynamics, the power to accelerate a rotating mass is added when computing brake horsepower:



where IR is the total moment of inertia, N is the shaft speed, and is the time derivative of shaft speed. In Aspen Dynamics, the actual shaft speed and the driver speed Ndr are related by the driver gear ratio Rdr:

N = Ndr Rdr

Isentropic Compression
For isentropic compression, the head developed may be obtained by applying PVk=constant to the head integral, assuming k = Cp/Cv to be constant along the path:



The enthalpy change and head are related by:



where in this case η is the isentropic efficiency. The enthalpy change can also be obtained from the enthalpy hs at isentropic condition and the isentropic efficiency ηs using the Mollier-based method.

Polytropic Compression
For polytropic compression, the head developed may be obtained by applying PVn=constant to the head integral, assuming n to be constant along the path:



The enthalpy change and head are related by:



where in this case η is the polytropic efficiency.

Positive Displacement
For a positive displacement compressor, the volumetric efficiency is computed as:



where CF is the clearance fraction. The displacement is then defined as:

DIS = V1F / ηv

The larger the clearance fraction, the smaller the volumetric efficiency of the compressor. Consequently, more volumetric displacement is required to achieve the specified compression effect on the feed stream. This typically requires a longer stroke or faster reciprocation speed of the compressor.

Calculation Methods
The calculation methods available for each compressor model type are listed in the following table:

Model Type

Mollier-based

GPSA

ASME

Integration

Isentropic

Yes

Yes

Yes

 

Polytropic

 

Yes

Yes

Yes

Positive displacement

 

Yes

 

Yes

The Mollier-based method is the most rigorous for isentropic calculations. The GPSA method can be based on either suction or average conditions. The ASME method is more rigorous than the GPSA method for modeling either polytropic or isentropic compressor calculations. Isentropic calculations with the Mollier-based method are recommended for most turbines. The piecewise integration method integrates the head integral using either the direct method or n-method. All calculation methods are available for turbines (though the positive displacement model is not).

In addition, Compr can use performance curves, fan laws, and scaling factors and offsets.

References

GPSA Engineering Data Book, 1979, Chapter 4, pp 5-6 to 5-10.

ASME Power Test Code 10, 1965, pp 31-32.

Mollier-Based Method
The Mollier-based method is equivalent to using Mollier charts and moving along an isentrope from suction pressure to discharge pressure and then to outlet enthalpy. When a Mollier diagram is available, it is the fastst and most accurate method of determining compressore horsepower and discharge temperature for an isentropic process.

Instead of computing enthalpy change from head and efficiency, the enthalpy change per mole in the stream can be calculated by:

Δh = h2 - h1 = (hs- h1) / ηs

where ηs is the enthalpy calculated for isentropic conditions at p2. In the same way, for isentropic expansion:

Δh = h2 - h1 = (hs- h1) ηs

The constant entropy flash type can be either iterative or direct. The direct PS flash method is not allowed for three-phase systems or when chemistry with true species simulation approach is used.

GPSA Method
The GPSA method performs the calculation based on either the suction condition or an average between suction and discharge conditions. When the properties are evaluated at the suction condition, the head and enthalpy change equations for isentropic compression or polytropic compression are used directly and no iteration is required. When properties are calculated at average condition, the average values of compressibility factor Z and heat capacity ratio k are used.

The compressibility factor is used in the gas law PV = ZRT. The average Z between suction and discharge conditions is defined as:



Using the gas law, this becomes:



The average k value is:



Combining this with the head integral and the assumption that PVk is constant for an isentropic process yields:



Similarly, average n can be used to obtain the head equation for a polytropic process:



The average n and average k are related by an equation similar to the polytropic compression ratio:

ASME Method
For a real gas, a correction factor known as the polytropic head (or work) factor is introduced into the isentropic compression equation:



where f is the polytropic head factor and ns is the isentropic volume exponent. For a real gas, the value of ns is not the same as k and is not constant. An average ns can be found by:



The correction factor adjusts HEADs for a varying ns. The correction factor is defined as follows:



In effect, the correction factor f corrects for the application of a constant ns using the isentropic case as a reference point. Similarly, for a polytropic process, the head developed becomes:



The average polytropic volume exponent n is defined as:



Again, variation of n affects HEADp just as varying ns affects HEADs. The same head correction factor is used.

This model also calculates useful average temperature exponents. For isentropic processes:



and for polytropic processes:

Piecewise Integration Method
The head developed for a compressor to change the pressure of a stream from the inlet pressure P1 to the outlet pressure P2 is given by:



where V is the molar volume and subscripts 1 and 2 refer to inlet and outlet conditions, respectively. Two integration methods are provided for the polytropic and positive displacement model calculations using piecewise integration:

Direct method

Applying the gas law PV = ZRT and using the average point for each interval, given the number of intervals between P1 and P2, subpath i for head developed can be written as:



The total polytropic head is the sum of the subpath heads:



n-Method

In a polytropic compression process, the relation of pressure P to volume V is expressed by the following equation:

 

where n is the polytropic exponent. Since the polytropic exponent n varies, the n-method is to integrate the head equation over a small interval such that a constant n is assumed. For subpath i, the head developed can be written as:



The integration steps can be either equal pressure change or equal pressure ratio. For equal pressure change, the default is to use 5 intervals. For equal pressure ratio, the default is to use a ratio of 1.25 for each integration step and 1.375 for the last step.

 Performance Curves
See Also

Corrected Flow

Quasi-Dimensionless Curves

In addition to specifying the outlet conditions and efficiency as constant values, you can specify them from performance curves in terms of a flow variable. The performance curves can be of any of these types:

Head

Head coefficient

Power

Discharge pressure

Pressure ratio

Pressure change

The flow variable can be one of the following:

Volume flow rate at suction conditions

Mass flow rate at suction conditions

Specific volumetric flow rate (for head coefficient only)

Flow coefficient (for head coefficient only)

The specific volumetric flow rate is the actual fluid volumetric flow rate at suction conditions per shaft speed.

The following curve formats are available for curve data input:

Tabular data

Polynomials

Extended polynomials

User subroutine

Tabular Data

When tabular data are specified, the model uses spline fitting to fit the data for a performance curve to a cubic polynomial. At least four tabular data points are required. If multiple performance curves with different shaft speeds are specified, the above spline fit is performed using the nearest two shaft speeds and the result for the operating speed is linearly interpolated (or extrapolated) between those results.

Note: This technique does not guarantee that the results will be monotonic (performance vs. flow) at any given speed. Better results will be obtained with more data and smoother data.

An alternative to this extrapolation technique is to regress an extended polynomial fit to your data and then use that polynomial instead of the curve data. This can yield smoother results. To do so:

Select Extended Polynomial for the Regression of Tabular Data on the Compr | Performance Curves | Design sheet.

Run the problem.

Change the curve format to Extended Polynomials (on the Performance curves sheet).

Copy the resulting polynomial from the Compr | Results | Regression sheet into the Compr | Performance Curves | Performance curves sheet.

When using multiple curves, if the shaft speed is below the minimum shaft speed or above the maximum shaft speed among the specified performance curve data, a warning will be issued. The extrapolation performed in these cases can lead to erroneous results since the performance of the compressor beyond the shaft speed limits may not continue the same trend. Also, you may wish to disable extrapolation beyond surge or stonewall (Compr | Performance Curves | Curve Setup sheet). If this is disabled, then the flow variable is clamped to surge/stonewall for the performance curve calculation when it is above it.

Polynomials

The polynomial format for correlation is expressed as follows:



where y is the performance curve variable and x is the flow variable. This equation applies to all performance curves, including efficiency.

Extended Polynomials

The extended polynomial is a general correlation for head and efficiency:



where y is head or efficiency, Q is volumetric flow rate, and N is shaft speed.

The correlation for surge volume flow rate is:



The correlation for power losses is:



The power loss correlation can be used independently of performance curves to replace the mechanical efficiency.

Fan Laws
Fan laws are useful in rating compressors that are being considered for reapplication. The reference shaft speed is required in these calculations. The performance of the centrifugal compressor at speeds other than design will vary based on the following relationships:

Variable	Fan Law
Head	
Head coefficient	
Power	
Efficiency	
where Exph, Expp, and Expe are the fan law exponents, and N is shaft speed. The default values of 2 for Exph, 3 for Expp, and 1 for Expe are based ideal behavior well established in the engineering literature for the changes in compressor behavior when shaft speed changes. These relationships are usually quite close to observed behavior for small changes in speed. For larger changes it is better to obtain multiple performance curves at different speeds covering the entire range of operation and interpolate as needed.

In addition, the following correlations for fan law calculations are available in Aspen Plus equation-oriented calculations:

For head:



where μ is head coefficient obtained from the following correlation:



where Q is volumetric flow rate.

For polytropic efficiency:



For surge volume:

Scaling Factors and Offsets
The scaling factors and offset values are used to adjust the performance curve data. For example, for head developed, the adjusted value of head developed is:

 HEAD_ADJUSTED = HEAD x FACTOR + OFFSET

Where:

HEAD

=

Head developed across the compressor

FACTOR

=

Scaling factor

OFFSET

=

Offset value

If you specify multiple performance curves, the scaling factors apply to all curves.

Polytropic Efficiency in Compr
The polytropic efficiency ηp is used in the equation for the polytropic compression ratio:



The basic compressor relation is:



Where:

n

=

Polytropic coefficient

k

=

Heat capacity ratio Cp/Cv

ηp

=

Polytropic efficiency

Δh

=

Enthalpy change per mole

P

=

Pressure

V

=

Molar volume

Isentropic Efficiency
There are two equations for the isentropic efficiency ηs

For compression:



For expansion:



Where:

h

=

Molar enthalpy



=

Outlet molar enthalpy assuming isentropic compression or expansion to the specified outlet pressure

Mechanical Efficiency
See Also

Power Loss

Mechanical efficiency ηm is used to calculate the brake horsepower:



Where:

IHP

=

Indicated horsepower

F

=

Mole flow rate

Δh

=

Enthalpy change per mole

BHP

=

Brake horsepower

ηm	
=

Mechanical efficiency

Power Loss
Power loss can be used to calculate the brake horsepower, in place of the mechanical efficiency specification on the Setup | Specifications sheet.

For compression process:

 BHP = (IHP) + PLOSS

and for expansion process:

 BHP = (IHP) – PLOSS

Where:

BHP

=

Brake horsepower

IHP

=

Indicated horsepower

PLOSS

=

Power loss

Specific Speed in Compr
Specific speed is defined as:



Where:

ShSpd

=

Shaft speed

VflIn

=

Suction volumetric flowrate

Head

=

Head developed

Specific Diameter in Compr
Specific diameter is defined as:



Where:

ImpDiam

=

Impeller diameter of compressor wheel

Head

=

Head developed

VflIn

=

Volumetric flowrate at suction conditions

Head Coefficient
Head coefficient is defined as:



Where:

Head

=

Head developed

π

=

3.1416

ShSpd

=

Shaft speed

ImpDiam

=

Impeller diameter of compressor wheel

Flow Coefficient
Flow coefficient is defined as:



Where:

VflIn

=

Volumetric flowrate at suction conditions

ShSpd

=

Shaft speed

ImpDiam

=

Impeller diameter of compressor wheel

Corrected Flow Curves
See Also

Performance Curves

When using corrected flow for performance curves, the flow is corrected by a factor of .

Where :

Pin

=

Pressure at inlet conditions

Tin

=

Temperature at inlet conditions

On the Performance curves sheet, you can enter measured compressor data either using corrected or actual flow. Use the Design sheet to specify which type of data is used. When using corrected flow, the independent variable you enter in the table of performance data is:



Aspen Plus computes:



And looks this up in the table to find the corresponding value of the performance variable, such as head or pressure ratio.

When entering actual flow (Flow corrected = No), you enter measured flow in the table of performance data. In this case, Aspen Plus computes:



And looks this up in the table to find the performance variable.

Quasi-Dimensionless Curves
The quasi-dimensionless groups are derived from dimensionless groups that exclude constant terms, such as gas constant or equipment sizes. The quasi-dimensionless curves are expressed in the following form:



If the gas constant R is included, the quasi-dimensionless curves become:



Where :

Pin

=

Pressure at inlet conditions

Tin	
=

Temperature at inlet conditions

R

=

Gas constant

Surge and Stonewall
Surge and stonewall are the minimum and maximum flow rates between which a compressor must be operated.

In Compr, if you specify tabular data, the end points are taken as surge and stonewall. If you specify polynomial curves, a surge point is required for each curve, specified after the four coefficients on the Curve Data sheet; stonewall is optionally specified here also. For extended polynomial curves, specify the surge curve on the Surge sheet; no stonewall is allowed in this case. If you specify performance curves via a user subroutine, the subroutine also provides percentage above surge and below stonewall.

Valve Reference
See Also

Flowsheet Connectivity for Valve

Specifying Valve

Valve models control valves and pressure changers. Valve relates the pressure drop across a valve to the valve flow coefficient. Valve assumes the flow is adiabatic, and determines the thermal and phase condition of the stream at the valve outlet. Valve can perform one-, two-, or three-phase calculations.

Flowsheet Connectivity for Valve
image\valv0001_wmf.gif

Material Streams

Inlet
One material stream

Outlet
One material stream

Specifying Valve
See Also

Pressure Drop Ratio Factor

Pressure Recovery Factor

Piping Geometry Factor

EO Usage Notes

Use the Input | Operation sheet to select the calculation type.

If you select the Pressure changer option or the Design option for the calculation type, you must specify, on the same sheet, one of the following:

Outlet pressure

Pressure drop

If you select the Pressure changer option, the specification is complete and Valve performs an adiabatic flash to calculate the thermal and phase condition of the outlet stream.

If you select the Rating option for the calculation type, you must specify, on the same sheet, one of the following:

Flow coefficient at operating valve position

Valve operating position (% Opening)

If you specify the valve operating position, you must also specify one of the following on the Input | Valve Parameters sheet:

Characteristic equation type and flow coefficient at maximum valve opening

Data for flow coefficient (Cv) versus valve opening in the Valve Parameters Table (at least four points; a zero point is automatically added if omitted)

A valve from the built-in library based on valve type, manufacturer, series/style, and size

On the Input | Calculation Options sheet, you can specify that Valve:

Check for choked flow

Calculate cavitation index

For vapor-containing streams, you must specify the pressure drop ratio factor (Xt) for the valve. For liquid-containing streams, if you specify that Valve check for choked flow, you must also specify the pressure recovery factor (Fl) for the valve. You can specify the pressure drop ratio factor and the pressure recovery factor for the valve in one of the following ways on the Input | Valve Parameters sheet:

Specify

Value at the operating valve position (Pres Drop Ratio Factor, Pres Recovery Factor)

Data for pressure drop ratio factor (Xt) and for pressure recovery factor (Fl) versus valve opening (% Opening) in the Valve Parameters Table

A valve from the built-in library based on Valve Type, Manufacturer, Series/Style, and Size

If you want to include the effect of head loss from pipe fittings on the valve flow capacity, you must specify the diameters of the valve and pipe fittings on the Input | Pipe Fittings sheet. Valve uses the valve and pipe diameters, and estimates the piping geometry factor to account for the reduction in flow capacity.

Pressure Drop Ratio Factor
The pressure drop ratio factor (Xt) accounts for the effect of the internal geometry of the valve on the change in fluid density as it passes through the valve.

The pressure drop ratio factor is the limiting value (under choked conditions) of the pressure drop ratio and is given by:

  (1)

Where:

dPch	
=

Pressure drop for choked vapor flow

Fk	
=

Ratio of specific heats factor = k/1.4, where k is the ratio of specific heats

Pin	
=

Inlet pressure

You can specify the pressure drop ratio factor on the Input | Valve Parameters sheet in one of the following ways:

Choose a Library Valve

Enter data for Xt and % Opening in the Valve Parameters Table

Specify the value at the operating valve position in Valve Factors

If you know the ratio of the gas sizing coefficient (Cg) to the liquid sizing coefficient (Cv), as defined in Fisher Controls Company Control Valve Handbook, you can calculate the pressure drop ratio factor (with the assumption Fk= 1) by either:

Using valve manufacturer's data for (dPch/Pin) versus Cg/Cv in equation (1)

Using the expression


This relationship is based on equating the choked flow calculated (in US units of measure) with:

Universal Gas Sizing Equation



ISA Standard Valve Sizing Equation



Where:

Wch

=

Mass flow rate (choked flow)

r

=

Mass density of inlet stream

Y

=

Expansion factor (= 0.667 for choked flow)

N6

=

Numerical constant (= 63.3 for US units of measure)

If you specify the pressure drop ratio factor by choosing a valve from the built-in library or by entering data in the Valve Parameters Table on the Input | Valve Parameters sheet, Valve uses cubic splines to interpolate the value of the pressure drop ratio factor at the operating valve position.

Valve uses the pressure drop ratio factor only when both of the following are true:

Vapor is present in the inlet stream

The Design or Rating option is selected for Calculation Type on the Input | Operation sheet

Pressure Recovery Factor
The pressure recovery factor (Fl)accounts for the effect of the internal geometry of the valve on its liquid flow capacity under choked conditions.

The pressure recovery factor is defined as:



Where:

dPch	
=

Pressure drop for choked liquid flow

Pin	
=

Inlet pressure

Pvc	
=

Pressure at the vena contracta in the valve

 

 

FfPv
Pv	
=

Vapor pressure of inlet liquid stream

Ff	
=

Liquid critical pressure ratio factor

You can specify the pressure recovery factor on the Input | Valve Parameters sheet in one of the following ways:

Choose a Library Valve

Enter data for Fl and % Opening in the Valve Parameters Table

Specify the value at the operating valve position in Valve Factors

The pressure recovery factor is equivalent to the valve recovery coefficient Km, as defined in Fisher Controls Company Control Valve Handbook.

You can use the valve recovery coefficient to calculate the pressure recovery factor as:



If you specify the pressure recovery factor by choosing a valve from the built-in library or by entering tabular data in the Valve Parameters Table on the Input | Valve Parameters sheet, Valve uses cubic splines to interpolate the value of the pressure recovery factor at the operating valve position.

The pressure recovery factor is used in the Valve model calculations only when all of the following are true:

Liquid is present in the inlet stream

The Check for Choked Flow box is checked or the Set Equal to Choked Outlet Pressure option is selected on the Input | Calculation Options sheet

The Design or Rating option is selected for Calculation Type on the Input | Operation sheet.

Valve Flow Coefficient
The valve flow coefficient (Cv) measures the flow capacity of the valve. The flow coefficient is defined as the number of US gallons per minute of water (at 60°F) that will pass through the valve with a pressure drop of 1 psi.

You can specify the flow coefficient in one of the following ways:

Use Flow Coef on the Input | Operation sheet to specify the value at the operating valve position

Choose a Library Valve on the Input | Valve Parameters sheet

Enter data for Cv and % Opening in the Valve Parameters Table on the Input | Valve Parameters sheet

Specify Valve Characteristics in the Input | Valve Parameters sheet

If you specify the flow coefficient by choosing a valve from the built-in library or by entering data in the Valve Parameters Table, Valve uses cubic splines to interpolate the value of the flow coefficient at the operating valve position.

The valve flow coefficient relates the pressure drop across the valve to the flow rate as (Instrument Society of America, 1985):

Liquid



Vapor or Vapor-Liquid mixtures



Where:

W

=

Mass flow rate

N6

=

Numerical constant (based on the units of measure)

Fp

=

Piping geometry factor

Cv

=

Valve flow coefficient

Y

=

Expansion factor

Pin

=

Inlet pressure

Pout

=

Outlet pressure

r

=

Mass density of inlet stream

Fk

=

Ratio of specific heats factor

Xt

=

Pressure drop ratio factor

The expansion factor Y accounts for the change in density of the vapor as it passes from the valve inlet to the vena contracta and for the change in area of the vena contracta as the pressure drop is varied (contraction coefficient). Theoretically, the expansion factor is affected by:

The ratio of port area to body inlet area

The internal geometry of the valve

The pressure drop ratio

The fluid Reynolds number

The ratio of the specific heats.

The influence of 1, 2, and 3 are defined by the valve pressure drop ratio factorXt (or XTP for valves with fittings; see Choked Flow). The expansion factor is then taken as a linear function of the ratio of pressure drop to inlet pressure:



For all practical purposes, the effects of Reynolds number may be disregarded. (J. W. Hutchinson, "ISA Handbook of Control Valves," 2nd ed., ISA, 1976; "Flow Equations for Sizing Control Valves," ISA-S75.01, 1985.)

These valve sizing calculations presented by the ISA are based on single phase vapor or liquid flows. The ISA recommend avoiding using control valves for mixed (two- and three-phase) service if at all possible, hence formal sizing equations are not presented for these cases. in Valve, multi-phase situations are handled in an approximate manner. The expansion factor is applied in a phase-weighted manner to approximate the density change effect. A consequence of this approach is that discontinuities may be seen in the model as a result of phase change.

Reference

Flow Equations for Sizing Control Valves, ISA-S75.01-1985, Instrument Society of America, 1985.

Characteristic Equation Type
The characteristic equation for the valve relates the flow coefficient to the valve opening. Use the Input Valve Parameters sheet to specify the characteristic equation type. The six built-in characteristic equations are:

Type

Equation

Linear



Parabolic



Square Root



Quick Opening



Equal Percentage



Hyperbolic



Where:

P = Valve opening as a percentage of maximum opening

V = Flow coefficient as a percentage of flow coefficient at maximum opening

Characteristic Equation Type
The characteristic equation for the valve relates the flow coefficient to the valve opening. Use the Input Valve Parameters sheet to specify the characteristic equation type. The six built-in characteristic equations are:

Type

Equation

Linear



Parabolic



Square Root



Quick Opening



Equal Percentage



Hyperbolic



Where:

P = Valve opening as a percentage of maximum opening

V = Flow coefficient as a percentage of flow coefficient at maximum opening

Piping Geometry Factor
The piping geometry factor is defined as:

Fp=Cvp/Cv

Where:

Cvp

=

Flow coefficient of the valve with attached fittings

Cv	
=

Flow coefficient of the valve installed in a straight pipe of the same size

The piping geometry factor accounts for the reduction in the flow capacity of a valve due to the head loss from the pipe fittings. The piping geometry factor has a default value of 1.0 if the valve and pipe fittings have the same diameter.

Aspen Plus calculates the piping geometry factor as (Instrument Society of America, 1985):



with ΣK = K1+K2+KB1-KB2

Where:



and:

Fp	
=

Piping geometry factor

Cv	
=

Valve flow coefficient

N2	
=

Numerical constant (based on the units of measure)

d

=

Valve diameter

D1	
=

Resistance coefficients of the inlet and outlet fittings

KB1, KB2	
=

Bernoulli coefficients for the inlet and outlet fittings

D1

=

Inlet pipe diameter

D2	
=

Outlet pipe diameter

If the valve and pipe fittings diameters are different and you wish to include the effect of the additional head loss on the valve flow capacity, you must specify the valve and pipe diameters on the Input | Pipe Fittings sheet.

Reference

Flow Equations for Sizing Control Valves, ISA-S75.01-1985, Instrument Society of America, 1985.

Choked Flow
Choked flow is a limiting (maximum) flow rate. For fixed inlet (upstream) conditions, choked flow is manifested by the failure of decreasing the downstream pressure to increase the flow rate. Under choked flow conditions, the effective pressure drop across the valve is limited to the choked pressure drop.

In the Aspen Plus Valve model in design mode, the choked pressure drop is calculated but not used. A warning is issued if the calculated pressure drop exceeds the choked pressure drop. In rating mode, you can specify the minimum outlet pressure as the lower limit for simulation, the calculated choked outlet pressure, or a user-specified value; in the latter two cases an error is issued if the calculated pressure drop exceeds the limit and the outlet stream pressure is set equal to the minimum outlet pressure.

In the Aspen Dynamics Valve model in flow-driven simulations the choked pressure drop is calculated but not used. In pressure-driven simulations the choked pressure drop is respected and the total pressure drop can never exceed the choked pressure drop. In all cases, appropriate warnings are issued when exporting Aspen Plus flowsheets to Aspen Dynamics if modeling assumptions will lead to different behavior between the two tools.

Aspen Plus calculates the limiting pressure drop for choked flow conditions using (Instrument Society of America, 1985):

Liquid



Vapor



with



Where:

FL

=

Pressure recovery factor

Ff

=

Liquid critical pressure ratio factor

Fk

=

Ratio of specific heats factor

XT

=

Pressure drop ratio factor

Pin

=

Inlet pressure

Pv

=

Vapor pressure at inlet

Pc

=

Critical pressure at inlet

dPlc

=

Limiting pressure drop, liquid phase

dPvc

=

Limiting pressure drop, vapor phase

When the valve is installed with reducers or other fittings, the head loss must be accounted for in the pressure recovery factor and pressure drop ratio factor. Only the head loss on the inlet side is accounted for, since if the flow is choked at the vena contracta of the valve the outlet side has no influence. The head loss coefficient for the inlet side only is represented by Ki= K1 + KB1. See Piping Geometry Factor for more details on this calculation.

For the liquid:



For the vapor, XT is replaced with XTP calculated as follows:



For multi-phase streams, Valve takes the limiting pressure drop for choked flow to be the smaller of dPlc and dPvc. Flow in the valve is choked when the pressure drop exceeds this limiting pressure drop. Valve displays the choking status of the valve if you check the Check for Choking box on the Input | Calculation Options sheet.

These calculations may not be reliable for supercritical fluids, but except in the case of single-component streams, Valve cannot reliably predict when these will occur. For single-component streams, if the stream is supercritical then Valve issues a warning when choked flow calculations are used.

Reference

Flow Equations for Sizing Control Valves, ISA-S75.01-1985, Instrument Society of America, 1985.

Cavitation Index
The likelihood of cavitation in a valve is measured by the cavitation index. Aspen Plus calculates the cavitation index as (Instrument Society of America, 1985):



Where:

Kc	
=

Cavitation index

Pin	
=

Inlet pressure

Pout	
=

Outlet pressure

Pv	
=

Vapor pressure at inlet

The cavitation index definition is valid only for all-liquid streams. Valve calculates the cavitation index if you check the Calculate Cavitation Index box on the Input | Calculation Options sheet.

Reference

Flow Equations for Sizing Control Valves, ISA-S75.01-1985, Instrument Society of America, 1985.