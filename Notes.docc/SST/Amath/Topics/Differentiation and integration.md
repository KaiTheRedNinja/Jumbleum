# Differentiation and integration

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Differentiation is the process of finding the function of the gradient of a function, integration is the process 
of finding a function given the gradient of said function. Funception.

## Overview

Differentiation and integration are basic calculus. Common uses include

- Integration:
    - Area under graph
    - Converting acceleration into velocity and velocity into distance
- Differentiation:
    - Finding the gradient of a function
    - Converting distance into velocity and velocity into acceleration

## Differentiation

Differentiation is the process of finding the gradient of a function. The gradient of a function is the rate of 
change of the function at a given point.

It can be expressed in several different ways mathematically, though most commonly:
```math
f\prime(x) = \frac{d}{dx} f(x)

y\prime = \frac{dy}{dx}
```

Note that dy/dx looks like a fraction. It basically is.

### Differentiation Rules
There are different rules that you can apply when differentiating a function:
- Sum rule (Differentiate each term separately)
```math
y = u + v
y\prime = u\prime + v\prime
```
- Power rule (Bring power down, reduce power by 1)
```math
y = x^n
y\prime = nx^{n-1}

y = ax
y\prime = a

y = a
y\prime = 0
```
- Product rule (Baby shark dududududududu)
```math
y = uv
y\prime = u\frac{dv}{dx} + v\frac{du}{dx}
```
- Quotient rule (aka haidilao, because you low d-high minus high d-low over low low)
```math
y = \frac{u}{v}

y\prime = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}
```
- Chain rule (differentiate the function, then differentiate the inside function)
```math
y = f(g(x))
y\prime = f\prime(g(x)) \cdot g\prime(x)
```
- trig (just remember sin, cos, tan. The rest can be derived.)
```math
\frac{d}{dx} sin(x) = cos(x)

\frac{d}{dx} cos(x) = -sin(x)

\frac{d}{dx} tan(x) = sec^2(x)

\frac{d}{dx} sec(x) = sec(x)tan(x)

\frac{d}{dx} cosec(x) = -cosec(x)cot(x)

\frac{d}{dx} cot(x) = -cosec^2(x)
```
- Exponentials (remember that exes never change, no matter how different(iated) they are)
```math
\frac{d}{dx} e^x = e^x

\frac{d}{dx} a^x = a^xln(a)
```
- Logarithms (invert the lawn. Turn other logs into ln)
```math
\frac{d}{dx} ln(x) = \frac{1}{x}

\frac{d}{dx} log_a(x) = \frac{1}{xln(a)}
```

### Applications of Derivatives

#### Related Rate of change
1. Chain rule is defined as:
```math
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
```
2. Form an equation of the diagram/object. Ensure there are only TWO variables. For example, where we 
have dA/dt and want dr/dt, we use the equation for the area of a circle:
```math
y = \pi r^2
```
3. Find the first derivative of the equation. For example, dA/dr
4. Form Chain Rule based on **subject of the formula**, NOT what you want to get. For example,
```math
\frac{dA}{dt} = \frac{dA}{dr} \cdot \frac{dr}{dt}

NOT

\frac{dr}{dt} = \frac{dA}{dt} \cdot \frac{dr}{dA}
```
5. Solve the equation to obtain the rate of change you want, dr/dt

Say that you have an equation in these terms:
```math
\frac{dV}{dh} = g(x)
```

You can "flip" it by just taking the reciprocal of the function, like:
```math
\frac{dh}{dV} = \frac{1}{g(x)}
```

#### Stationary points
1. Find the first derivative of the function
2. Find the stationary points by setting the first derivative to 0 and solving for x
3. Find the nature of the stationary points by either:
    - Finding the second derivative and substituting the stationary points, then checking the sign of the
    second derivative.
        - -ve: Local Maximum
        - +ve: Local Minimum
        - 0: Point of inflection
    - Using the first derivative test, by checking the sign of the first derivative slightly before and after
    the stationary point.
        - -ve to +ve: Local Minimum
        - +ve to -ve: Local Maximum
        - +ve to +ve or -ve to -ve: Point of inflection

#### Increasing and decreasing functions

In the case where the first derivative is a quadratic, follow these steps:
1. Prove that f'(x) has no roots
2. State that "Since the coefficient of x^2 is [positive or negative], f(x) is always [positive or negative]"
3. State that since the derivative is [positive or negative], the function is [increasing or decreasing]

Basically use the conditions to prove COMPLETELY that the function is increasing or decreasing.

## Integration

Integration is the process of finding the function given the gradient of said function. It is the reverse of
differentiation.

It can be expressed in several different ways mathematically, though most commonly:
```math
\int f(x) dx = F(x) + C
```
where `C` is the constant of integration. Because we saw in the Power Rule that constants disappear when
differentiating, we need to add a constant to account for the loss of information.

### Integration Rules
I'm not going to bother with explaining them all because they're the same as the differentiation rules, but in reverse.

- Sum rule (Integrate each term separately)
```math
\int (u + v) dx = \int u dx + \int v dx
```
- Power rule (Bring power up, increase power by 1)
```math
\int x^n dx = \frac{x^{n+1}}{n+1} + C
```
- Chain rule (integrate the function, then integrate the inside function)
```math
\int f(g(x)) dx = \int f(u) du \quad \textrm{where} \quad u = g(x)
```

One thing that you'll find particularly useful is that when integrating, REMOVE CONSTANTS. Makes the equation easier.
```math
\int 3x dx = 3 \int x dx = 3 \cdot \frac{x^2}{2} = \frac{3x^2}{2} + C
```

### Definite Integrals
Definite integrals are integrals that have limits. They are used to find the area under a curve between two points.
```math
\int_a^b f(x) dx = F(b) - F(a)
```
where `F(x)` is the antiderivative (integral) of `f(x)`.

Note that:
- The `+C` goes away, because they cancel out when subtracting.
- `$a$` is usually larger than `b`, aka further along the x-axis. Inverting this may result in a negative area.
- This measures area "under" the graph. When the graph is below the x-axis, the area is negative.
- A definite integral of 0 does not mean the function is 0. It means the area under the curve is 0, which could
mean the function is symmetrical, such as `y = sin(x)`.

If part of the function goes negative but you need to find the area under the curve, you need to do the following:
1. Determine the point(s) at which the function goes negative
2. Split the integral into multiple parts, for the positive parts and the negative parts
3. Integrate each part separately
4. Sum the absolute values (your calculator shows this as `|x|`) of the integrals

### Area between curves
To find the area between two curves, you need to find the difference between the two curves. This is done by
subtracting the lower curve from the upper curve, then integrating the result.

This can be more easily visualised as finding the area under the upper curve, then subtracting the area under the
lower curve. Sum rule go brrrr
```math
\int_a^b (f(x) - g(x)) dx

= \int_a^b f(x) dx - \int_a^b g(x) dx
```

Note that if the curves intersect, you will have to account for that like in <doc:#Definite-Integrals>