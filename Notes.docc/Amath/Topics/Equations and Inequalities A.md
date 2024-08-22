# Equations and Inequalities A

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

## Overview

- Conditions for a quadratic equation to have:
  - two real roots
  - two equal roots
  - no real roots
- Related conditions for a given line to:
  - intersect a given curve
  - be a tangent to a given curve
  - not intersect a given curve
- Solving simultaneous equations in two variables by substitution, with one of the equations being a linear equation
- Solving quadratic inequalities, and representing the solution on the number line

## Quadratic Roots

See <doc:Quadratic-functions#Discriminant> for information on how to identify the number of roots a quadratic equation has.

## Curve and Line Intersections

For a curve defined as:
```math
y = ax^2 + bx + c
```

And a line defined as:
```math
y = mx + d
```

We can equate the two equations to find the x-values of the points of intersection:
```math
ax^2 + bx + c = mx + d

ax^2 + (b - m)x + (c - d) = 0
```

Simply solve the above equation to get the value(s) of x, then use the x-values to find the corresponding y-values.

### Intersection Behaviours

For a curve-line intersection defined as
```math
ax^2 + (b - m)x + (c - d) = 0
```

If the discriminant is:
- Exactly zero, the line is a tangent to the curve.
- Positive, the line intersects the curve at two distinct points.
- Negative, the line does not intersect the curve.

## Solving Simultaneous Equations

Its literally just
1. Convert each equation into an expression of the same variable, ie `y = something`
2. Equate the two expressions
3. Solve them as an intersection between a line and a curve
4. Substitute the x-value back into one of the original equations to find the y-value

## Quadratic Inequalities

Quadratic inequalities are very funky because they can sometimes result in disjoint solutions, such as
```math
\textrm{Disjoint solution}
x < -3 \textrm{or} x > 2

\textrm{Continuous solution}
-3 < x < 2
```
Where the solution is not a continuous range of values.

To solve quadratic inequalities, we first find the roots of the quadratic equation, then test the sign of the quadratic expression to determine whether
it is a disjoint solution or a continuous range of values.

In general, for an equation in the form of
```math
a(x - p)(x - q) > 0
\textrm{or}
a(x - p)(x - q) < 0
```
where p is smaller than q

| Sign of `a` | Comparator | Solution |
|-------------|------------|----------|
| Positive    | `>`        | Disjoint, `x < p or x > q` |
| Positive    | `<`        | Continuous, `p < x < q` |
| Negative    | `>`        | Continuous, `p < x < q` |
| Negative    | `<`        | Disjoint, `x < p or x > q` |

If its `>=` or `<=`, just add the equality sign to the `>` or `<` comparator.