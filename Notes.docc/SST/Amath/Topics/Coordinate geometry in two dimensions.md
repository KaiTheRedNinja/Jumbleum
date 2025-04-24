# Coordinate geometry in two dimensions

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Lines, squares, circles, your waifu. All examples of things that exist on flat planes.

## Overview
- Condition for two lines to be parallel or perpendicular
- Midpoint of line segment
- Area of rectilinear figure
- Coordinate geometry of circles
- Transformation of given relationships to linear form to determine the unknown constants from a straight line graph

## Straight Lines

Lines have two useful forms: the slope-intercept form, and the gradient-point form.

Slope-intercept form:
```math
y = mx + c
```

Gradient-point form:
```math
\text{Given a point } (x_1, y_1) \text{ and a gradient } m

y - y_1 = m(x - x_1)
```

Where:
- `$m$` is the slope of the line
- `$c$` is the y-intercept of the line
- `(x_1, y_1)` is a point on the line

### Parallel and Perpendicular Lines

Two lines are parallel if and only if their gradients are equal. In mathematical terms,
```math
m_1 = m_2
```
where
- `m_1` is the gradient of the first line
- `m_2` is the gradient of the second line

Two lines are perpendicular if and only if the product of their gradients is equal to -1. In mathematical terms,
```math
m_1 \cdot m_2 = -1
```
where
- `m_1` is the gradient of the first line
- `m_2` is the gradient of the second line

## Line Segments

Line segments are lines defined by two points, where the line only technically exists between the two points.

You can obtain the equation of a line segment of two points:
```math
\text{Given two points } (x_1, y_1) \text{ and } (x_2, y_2)

m = \frac{y_2 - y_1}{x_2 - x_1}

y - y_1 = m(x - x_1)
```

### Division of Line Segments

The midpoint of a line segment is the point that divides the line segment into two equal parts. The midpoint of 
a line segment with endpoints `(x_1, y_1)` and `(x_2, y_2)` is
```math
M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)
```

### Collinearity

Three points are collinear if they lie on the same straight line. You can determine if three points are collinear by
obtaining the line equation of two points and checking if the third point lies on the line.

### Perpendicular Bisector

The perpendicular bisector of a line segment is a line that is perpendicular to the line segment and passes through
the midpoint of the line segment.

1. Find midpoint
2. Find gradient of line segment
3. Find gradient of perpendicular bisector
4. Use gradient-point form to find equation of perpendicular bisector

### Perpendicular Distance

The perpendicular distance between a point and a line is the shortest distance between the point and the line.

```math
\text{Given a line } Ax + By + C = 0 \text{ and a point } (x_1, y_1)

\text{Perpendicular distance} = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}
```

## Rectilinear Figures

To prove that a quadrilateral ABCD is a parallelogram, you can prove using one of the following:
1. Opposite sides are parallel
    - Gradient of AB = Gradient of CD
    - Gradient of BC = Gradient of AD
2. Opposite sides are equal in length
    - AB = CD
    - BC = AD
3. Diagonals bisect each other
    - Midpoint of AC = Midpoint of BD

Theres other things for other shapes but I'm too lazy to write them out. Rectangles have four right angles, things like that.

## Shoelace Formula

The shoelace formula is a formula used to calculate the area of a polygon given the coordinates of its vertices.

```math
\text{Given a polygon with vertices } (x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)

\text{Area} = \frac{1}{2} \left| \sum_{i=1}^{n-1} x_i y_{i+1} + x_n y_1 - \sum_{i=1}^{n-1} x_{i+1} y_i - x_1 y_n \right|
```

Sorry for the LaTeX jargon, I can't get it to render the way I want it to.

To use the shoelace formula,
1. Write down the coordinates of the vertices in order, with the first vertex repeated at the end. Go anti-clockwise.
2. Multiply the x-coordinate of each vertex by the y-coordinate of the next vertex.
3. Multiply the y-coordinate of each vertex by the x-coordinate of the next vertex.
4. Subtract the second sum from the first sum.
5. Divide the result by 2, take the absolute value of the result.

## Circles

There are two forms of circles: the standard form and the general form.

Standard form:
```math
(x - a)^2 + (y - b)^2 = r^2
```

General form:
```math
x^2 + y^2 + 2px + 2qy + c = 0
```

Where:
- `(a, b)` is the center of the circle
- `$r$` is the radius of the circle
- `$p$` = `-a`
- `$q$` = `-b`
- `$c$` = `a^2 + b^2 - r^2`
- `$r$` = `sqrt(p^2 + q^2 - c)`

There are certain properties about the circle that you can determine quite easily.

| Condition | Property |
|-----------|----------|
| abs(a) = r | Circle touches the Y axis |
| abs(b) = r | Circle touches the X axis |
| a = b | Circle lies on the line y = x |

## Transformation of Relationships

AKA linear law, basically turn a relationship into a straight line graph in the format of
```math
y = mx + c
```
where y and x may be replaced with other variables. m and c tend to be constants.