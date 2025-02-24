# Polymomials and partial fractions

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Poly wants a ~~cracker~~ partial fraction

## Overview

- Multiplication and division of polynomials
- Use of remainder and factor theorems, including factorising polynomials and solving cubic equations
- Use of cubic identities for a3 +- b3
- Partial fractions

## Polynomials

Polynomials are expressions with one or more terms, where each term is a product of a constant and one or more variables raised 
to a non-negative integer power. Quadratics and cubics are examples of polynomials.

In general, a polynomial can be represented as:
```math
P(x) = a_nx^n + a_{n-1}x^{n-1} + ... + a_1x + a_0
```

Where:
- `a_n`, `a_n-1`, etc, are the coefficients of the x^n, x^{n-1}, etc terms
- `n` is the degree of the polynomial
- `a_0` is the constant term, because x^0 = 1

### Multiplication of Polynomials

To multiply two polynomials, we use the distributive property. For example, to multiply:
```math
(x + 2)(x - 3)
```

We expand the expression by multiplying each term in the first polynomial by each term in the second polynomial:
```math
(x + 2)(x - 3) = x(x) + x(-3) + 2(x) + 2(-3)
              = x^2 - 3x + 2x - 6
              = x^2 - x - 6
```

### Division of Polynomials

To divide two polynomials, we use long division or synthetic division. For example, to divide:
```math
\frac{x^2 + 2x - 3}{x - 1}
```

We divide the first term of the numerator by the first term of the denominator to get the first term of the quotient:
```
              x  + 3
      ___________________
x - 1 | x^2 + 2x - 3
        x^2 - x
        -------
              3x - 3
              3x - 3
              ------
                    0
```
Making our solution
```math
\frac{x^2 + 2x - 3}{x - 1} = x + 3

\textrm{or}

x^2 + 2x - 3 = (x - 1)(x + 3)
```

### Remainder and Factor Theorems

The remainder theorem states that if a polynomial `P(x)` is divided by `(x - a)`, the remainder is `P(a)`. Mathematcially:
```math
P(x) = (x - a)Q(x) + P(a)
```

The factor theorem states that if `P(a) = 0`, then `(x - a)` is a factor of `P(x)`. Mathematically:
```math
P(a) = 0 \Rightarrow P(x) = (x - a)Q(x)
```

For a function `f(x)` where `f(a) = Q(x)+p` and `f(b) = Q(x)+q` and A and B are constants, then `f(x)` can be expressed as:
```math
f(x) = (x - a)(x - b)Q(x) + A*x + B

\textrm{By remainder theorem}
f(a) = A*a + B = p
f(b) = A*b + B = q
```

Usually, you'd use the factor and remainder theorems to factorise polynomials, or to build a polynomial from its factors.

To factorise a polynomial,
1. Use your calculator to find the roots. Pick one and say you "brute forced" it.
2. Long division the polynomial by `(x - root)`
3. If its quadratic, use the quadratic formula to find the other roots. Else, repeat step 1 and 2.

### Cubic Identites

Basically these two:
```math
a^3 + b^3 = (a + b)(a^2 - ab + b^2)
a^3 - b^3 = (a - b)(a^2 + ab + b^2)
```

## Polynomial Fractions

Polynomials are often expressed as fractions. For example:
```math
\frac{2x^2 + 3x - 5}{x^2 - 4}
```

### Improper Fractions

An improper fraction is a fraction where the degree of the numerator is greater than or equal to the degree of the denominator. Mathematically, an
equation where
```math
\frac{ax^n ...}{bx^{n-m} ...}
```
where `m >= 0` is an improper fraction.

To simplify an improper fraction, we divide the numerator by the denominator using long division or synthetic division. It will produce a quotient and a remainder.
The remainder is a proper fraction, and can be broken up further as a partial fraction.

### Partial Fractions

Partial fractions are used to simplify rational functions. A rational function is a fraction where the numerator and denominator are polynomials.

A rational function can be expressed as a sum of partial fractions:
```math
\frac{P(x)}{Q(x)} = \frac{A}{x - a} + \frac{B}{x - b} + ...
```

But in our case, there are only a few types of partial fractions we need to know (because the others arent tested):
```math
\textrm{Distinct linear factors}
\frac{px+q}{(ax+b)(cx+d)} = \frac{A}{cx+d} + \frac{B}{ax+b}

\textrm{Repeated linear factors}
\frac{px+q}{(ax+b)(cx+d)^2} = \frac{A}{ax+b} + \frac{B}{cx+d} + \frac{C}{(cx+d)^2}

\textrm{Unfactorisable quadratic factor}
\frac{px+q}{(x^2+a^2)(cx+d)} = \frac{A}{cx+d} + \frac{Bx+C}{x^2+a^2}
```

To solve for the constants, we multiply both sides by the denominator and simplify. For each case, this "flat" equation looks like:
```math
\textrm{Distinct linear factors}
px + q = A(ax+b) + B(cx+d)

\textrm{Repeated linear factors}
px + q = A(cx+d)^2 + B(ax+b)(cx+d) + C(ax+b)

\textrm{Unfactorisable quadratic factor}
px + q = A(x^2+a^2) + (Bx+C)(cx+d)
```

To solve, follow these steps:
1. Set x to `-d/c` to solve for A
2. Set x to 0 to solve for C (or B in case 1)
3. Set x to some other random value that ISNT a root to solve for the remaining constant
