# Quadratic functions

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Quadratic functions are polynomials with an x^2 term. Why they're called quadratic (quad = 4) and not bidratic is beyond me.

## Overview

- Finding the maximum or minimum value of a quadratic function using the method of completing the square
- Conditions for quadratic equation to be always positive (or always negative)
- Using quadratic functions as models

## Different forms

Quadratic equations can be represented in three primary forms:
- Standard form: 
```math
y = ax^2 + bx + c
```

- Vertex form (aka complete-the-square form):
```math
y = a(x-h)^2 + k
```

- Factored form:
```math
y = a(x-r_1)(x-r_2)
```

Where
- `a` is the coefficient of the x^2 term, which defines steepness and direction. If it is negative, its n shaped, 
else u shaped.
- `b` is the coefficient of the x term, which defines which way the slope tends towards. A negative value makes it move to the right, and a positive value makes it move to the left.
- `c` is the constant term. It defines the y-intercept.
- `h` is the x-coordinate of the vertex. It defines the horizontal shift, aka line of symmetry.
- `k` is the y-coordinate of the vertex. It defines the vertical shift, aka the minimum or maximum value of the function.
- `r_1` and `r_2` are the roots of the equation, aka the x-intercepts.

## Completing the square

Completing the square converted quadratic expression from standard form to vertex form.

Given a quadratic equation in standard form:
```math
y = ax^2 + bx + c
```

To convert it to vertex form, we need to complete the square. The steps are as follows:
1. Factor out the coefficient of x^2 from the first two terms:
```math
y = a(x^2 + \frac{b}{a}x) + c
```
2. Add and subtract the square of half of the coefficient of x:
```math
y = a(x^2 + \frac{b}{a}x + (\frac{b}{2a})^2 - (\frac{b}{2a})^2) + c
```
3. Turn it into a square minus a square:
```math
y = a(x + \frac{b}{2a})^2 - a(\frac{b}{2a})^2 + c
```
4. Simplify the part outside a (with actual numbers, when you have them)

### Maximum and minimum values

The direction that the quadratic function "bends" is based on the coefficient of the x^2 term

| Sign of `a` | Shape | Maximum or minimum value |
|-------------|-------|--------------------------|
| Positive    | U     | Minimum                  |
| Negative    | n     | Maximum                  |

The maximum or minimum value of a quadratic function can be found using the vertex form of the equation, where "vertex"
refers to the min/max point of the curve. The vertex form is:
```math
y = a(x-h)^2 + k
```
where
- `h` is the x-coordinate of the vertex, also known as the line of symmetry
- `k` is the y-coordinate of the vertex, also known as the maximum or minimum value of the function
- (h, k) is the maximum point of the parabola

## Conditions for always positive or always negative

### Discriminant

Discriminants are based on the quadratic formula. Basically, if the square root part of the quadratic formula:
- Has a positive value: the quadratic function has two real roots
- Has a zero value: the quadratic function has one real root
- Has a negative value: the quadratic function has no real roots, and is either always positive or always negative

The discriminant is defined as:
```math
\Delta = b^2 - 4ac
```

### Conditions

For a quadratic function to be always positive, the discriminant must be less than zero and the coefficient of the x^2 term must be positive:
```math
\Delta < 0
a > 0
```

For a quadratic function to be always negative, the discriminant must be less than zero and the coefficient of the x^2 term must be negative:
```math
\Delta < 0
a < 0
```
