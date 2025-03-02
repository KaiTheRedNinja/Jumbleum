# SAT Math

SAT Mathematics

## Overview

SAT Mathematics questions can either be multiple choice, with 4 options to choose from, or (slightly) open 
ended, where you enter your final answer in a box.

SAT Math tests mainly test the following
- Averages and Statistics
    - What is the average/mean/median/mode/range of the following numbers
    - How does the addition/removal of a number(s) affect the average/mean/median/mode/range
    - Which frequency table correctly represents the data listed
- Probability
    - What is the probability of XXX
    - (context). Based on these results, what is the total number/percentage of XXX that YYY
- Real-world Contexts
    - (context). Which equation best represents the situation
    - (equation). What is the best interpretation of the XXX of the YYY
    - (equation). How much more XXX is AAA than BBB
    - (graph). Which equation defines the graph
    - (table). Which equation best represents the data
    - Sales tax, discounts, and markups
- Geometry
    - Angle/length within a polygon/figure
    - Value of cos/sin/tan of an angle
    - Area/volume of a figure
    - Ratio of lengths/areas/volumes of figures
    - Radius/center of circle given equation
    - ⭐ Basic trigonometry
- Equation Solving
    - What is the solution to the equation XXX
    - How many solutions does the equation XXX have
    - What is the X/Y intercept of the graph
    - At how many points do the graphs of the equations intersect
    - If lines are parallel, what is the value of XXX
    - Which expression is equal to XXX
    - Rearrange the equation to express XXX
    - What is the value of XXX in the system of equations (usually has other unknowns)
    - ⭐ The graph is translated up/down/left/right XXX units, (another equatino solving question)
- Quadratics
    - For what value of x does f(x) reach zero/min/max
    - Value of constant in line-parabola intersection
    - ⭐ Transfer between vertex and standard form
    - ⭐ In the given equation, XXX are constants, the (sum/product) of the solutions is YYY (some function of the constants). What is YYY
    - ⭐ Polynomials

## Desmos

Desmos is a graphing calculator. Any linear inequality can be solved trivially using Desmos. 
If you can use desmos, use desmos.

### Equation from points

Assuming you have a Desmos table of points, the column of X values being `x1` and y being `y1`, you can use `~` instead of `=` to
use linear regression to determine some unknowns. Remember that it takes two points for a line, and three points for
a quadratic.

```math
\text{Linear} \rightarrow y_1 ~ mx_1 + b
\text{Quadratic} \rightarrow y_1 ~ ax_1^2 + bx_1 + c
```

### Domain restriction

You can limit which part of the graph is shown by adding a restriction to the equation. For example, to only show the graph
of `y = x^2` for `x > 0`, you can use `y = x^2 \cdot \{x > 0\}`.

## Basic Trigonometry

Other than the basics of what sin, cos, tan each mean, the SAT will sometimes test the following identity. Watch out
for it whenever you see things like sin(something) - cos(something else).

```math
sin(x) = cos(90 - x)
```

## Translation

There are two kinds of translation, horizontal and vertical. Assuming a top-right positive coordinate system, a function
`f(x)` could be translated as follows. 

> Warning: PAY CLOSE ATTENTION TO THE SIGNS, ESPECIALLY FOR HORIZONTAL TRANSLATION. You can think of it like a point being
a "preview" of a point a certain distance `-h` away.

```math
h\text{ units right} \rightarrow f(x-h)
h\text{ units up} \rightarrow f(x) + h
```

## Quadratic Properties

The most advanced SAT questions will be about mostly unknown quadratic properties, eg. sum or product of roots, vertex form, etc.

For reference, the standar form is:

```math
y = ax^2 + bx + c
```

### Vertex Form

> Important: MEMORISE THESE. It will be worth your time.

The vertex form is:

```math
y = a(x-h)^2 + k
```

To convert from standard form to vertex form, you need to complete the square.  See <doc:Quadratic-functions#Different-forms> for how to do that. In summary,

```math
y = a(x^2 + \frac{b}{2a}x) + (- a(\frac{b}{2a})^2 + c)

\text{Where}

h = -\frac{b}{2a}
k = -a(\frac{b}{2a})^2 + c
```

To convert from vertex form to standard form (needed when the question gives you a line of symmetry or vertex), you can expand the square and simplify.

```math
y = ax^2 + 2ahx + (ah^2 + k)

\text{Where}

b = 2ah
c = ah^2 + k
```

### Sum/Product of Roots

```math
\text{Sum of roots} = -\frac{b}{a}

\text{Product of roots} = \frac{c}{a}
```

These can be derived from the quadratic formula. Note that the sum of roots is just double the
line of symmetry.

```math
\text{Sum of roots} = \frac{-b + \sqrt{b^2 - 4ac}}{2a} + \frac{-b - \sqrt{b^2 - 4ac}}{2a}

= \frac{-b + \sqrt{b^2 - 4ac} - b - \sqrt{b^2 - 4ac}}{2a}

= \frac{-2b}{2a} = -\frac{b}{a}


\text{Product of roots} = \frac{-b + \sqrt{b^2 - 4ac}}{2a} \cdot \frac{-b - \sqrt{b^2 - 4ac}}{2a}

= \frac{b^2 - (b^2 - 4ac)}{4a^2}

= \frac{4ac}{4a^2} = \frac{c}{a}
```

## Polynomials

You don't really need to know much. Just know that for a point
```math
(x-a)^n
```
If n is even, the graph only touches the x-axis. If n is odd, the graph crosses the x-axis.