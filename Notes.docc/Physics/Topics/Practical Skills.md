# Practical Skills

Practicals are the only paper that you can't revise for :(

## Overview

> Definition: Measured quantity: Measured using an instrument.
> Definition: Calculated quantity: Derived from measured quantities.

## Planning

Follow this structure for planning:

1. Identify the Independent Variable (IV), Dependent Variable (DV), and two Control Variables (CV). They should all be 
MEASURABLE quantities (eg. no "use the same rubber band" as a control variable, use "elasticity of rubber band" instead).
    - If it is an equation, make sure that you can linearise it as y=mx+c, where y is the DV, x is the IV, m is the
    gradient, and c is the y-intercept. Planning questions will always have a linear relationship.
    - Treat any other values in the equation as constants, but not control variables as you may still need to change 
    them.
2. Write a detailed procedure
    - "Set up the apparatus like Fig X in the prelude", or reference your own figure
    - "Measure and record the IV using instrument Y"
    - "Measure and record the DV using instrument Z"
    - Any other calculations, if y is not exactly DV or x is not exactly IV
    - "Repeat steps X through Y for four other values of IV, such as ...."
3. Draw a table
    - "Record your values in a table like this:"
    - Sketch the table headings and one EMPTY row. It should have the IV, DV, and any calculated values, along with 
    their units.
4. Draw a graph
    - "Plot a graph of y against x"
    - "Draw a line of best fit"
    - "If your relationship is correct, you should expect a linear relationship" (optionally add "passing through the 
    origin" if the equation supports it)
    - Sketch your own graph satisfying the above conditions
5. Unknown constant (if asked for by the qn)
    - Usually found in gradient or intercept
6. Precautions (if asked for by the qn)
    - 

## Experimental Errors
See <doc:Physical-Quantities-Units-and-Measurement#Errors> for information on errors

Example:
- Error: Wire may have kinks, thus the cross sectional area, A, may not be uniform.
- Effect: Resistance calculated will not be accurate
- Solution: Take different measurements at different points along the wire, and average them.
- Effect: Resistance calculated will be more accurate

DO NOT:
- Mention parallax error unless the experiment involves measuring round surfaces, eg ball radius
- Mention "human error". Instead, mention the specific error, eg. "human _reaction time_ error"
- 

## Plotting

Plotting consists of tables, graphs, and gradients.

### Tables

This is the four things that they mark for in tables:
- Measured values (see <doc:#Measurement-and-Calculation-Accuracy>)
- Calculated values (see <doc:#Measurement-and-Calculation-Accuracy>)
- Range (number of sets)
    - 5 for straight line graph
    - 8 for curve graph

Make sure to include EVERY calculated value in the table, even if you don't use it in the graph. The headers should 
contain both the name of the variable and the unit, in the same format as the graph axis (see below)

### Graphs

This is the four things that they mark for in graphs:
- Axis
    - Label axis values every 2.0cm on the graph
    - Label axis as `quantity`/`unit` (idk why slash, because it means something, but its what Cambridge wants)
    - E.g. x^2/cm^2
    - "To plot y against x" means y is the vertical axis and x is the horizontal axis.
- Scale
    - The points should use up more than half of the grid, horizontally and vertically
    - Each square should be 1, 2, or 5 x10^n
    - You do not need to start at 0 if your data's range is smaller than its minimum value
    - Use scale ratios of 1:1, 1:2, 1:5 and 1:10. Avoid scale ratios like 1:3, 1:4, 1:6, 5:6 or other awkward scales.
- Points
    - Use small cross “X” to mark data points on the table, smaller than the smallest square (usually ~1mm)
    - Use a dot for gradient coordinates
- Line
    - Circle outliers
    - Equal number of points above line vs below line (+/- 1 point is okay)
    - Don’t force your line through any specific data point or the origin
    - Rotate line if needed to bring it closer to the data points
    - Types of lines:
        - Line of best fit: Draw a straight line that best fits the points.
        - Curve of best fit: Draw a curve that best fits the points.
        - No mention of line: Draw the line that best fits the shape of the points, be it straight or curved

### Gradient

If they ask for the gradient, you must:
1. Choose two points on the line of best fit that are easy to read, and are near or beyond the range of the data points.
2. Draw a gradient triangle, with the base parallel to the x-axis, and the height parallel to the y-axis.
3. Measure the base and height
4. Calculate the gradient using the formula `gradient = height / base`. Obey SF and DP rules.

## Measurement and Calculation Accuracy
Note that even though rulers have a 0.05cm accuracy, you must ONLY use 0.1cm accuracy. This is because you need to take 
two readings, one for zero, one for the actual measurement. The zero reading is always 0.05cm, so the actual measurement 
has an inaccuracy of 0.05*2 = 0.1cm.

Certain instruments do not have this "doubling" issue, because they have well defined zero points. For example, a 
measuring cyllinder has a well defined zero point, so you can use the smallest division, or half of it if its >= 1mm. 
Same with a voltmeter, thermometer, or similar instruments.

Remember the SF and DP rules when it comes to calculations:
- Multiplication and division: Use lowest SF
- Addition and subtraction: Use lowest DP
- Anything to do with constants (eg. pi or integers): Ignore the DP or SF of the constant
- Average: Lowest DP (because its addition, and the division is against a constant)

> Important: Obey the SF and DP rules, even during working. They will penalize you if you don't.
