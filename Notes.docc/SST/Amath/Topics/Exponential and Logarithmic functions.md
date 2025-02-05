# Exponential and Logarithmic functions

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Powers and logarithms.

## Overview
Powers are repeated multiplication and logarithms are the inverse of powers. They are used to solve equations and 
model growth and decay.

- Exponential and logarithmic functions ax, ex, log_a(x), In(x) and their graphs, including
  - laws of logarithms
  - equivalence of y=ax and log_a(x) = y
  - change of base of logarithms
- Simplifying expressions and solving simple equations involving exponential and logarithmic functions

## Basic Logarithm Laws
Exponential-log relationship
```math
y=a^x \Leftrightarrow x=log_a{y}
```

Product law
```math
log_a{x \cdot y} = log_a{x} + log_a{y}
```

Quotient law
```math
log_a{\frac{x}{y}} = log_a{x} - log_a{y}
```

Power law
```math
log_a{x^y} = y \cdot log_a{x}
```

Change of Base law
```math
log_a{b} = \frac{log_x{b}}{log_x{a}}
```

Log of 1 to any base
```math
log_a{1} = 0
```

Log of a number to same base as the number
```math
log_a{a} = 1
```

Inverting base and argument
```math
log_a{x} = \frac{1}{log_x{a}}
```

## Basic Indices Laws

Rules for same base
```math
a^m * a^n = a^{m+n}
a^m / a^n = a^{m-n}
```

Rule for power
```math
(a^m)^n = a^{m \cdot n}
```

Rule for zero index
```math
a^0 = 1
```

Rule for negative index
```math
a^{-n} = \frac{1}{a^n}

(\frac{a}{b})^{-n} = (\frac{b}{a})^n
```

Rule for fractional index
```math
a^{1/n} = \sqrt[n]{a}
a^{m/n} = \sqrt[n]{a^m}
```

## Tips on solving Exponential Equations
- If it can be simplified to the same base, then equate the exponents
- If it cannot be simplified to the same base, then take the log of both sides and solve for the variable
- Reduce it to a quadratic equation by letting y = a^x and solve for y

## Examples

Solving by quadratic
```math
3(4^{x+1}) = 3(2^{x+3}) + 2^3

3(2^{2x+2}) = 3(2^{x+3}) + 2^3

3(2^{2x})(2^2) = 3(2^x)(2^3) + 2^3

12(2^{2x}) = 3(8)(2^x) + 8

12(2^{x})^2 - 24(2^x) - 8 = 0

\textrm{Let } y = 2^x

12y^2 - 24y - 8 = 0

\textrm{Use quadratic formula and solve}
```

Proving divisibility
```math
\textrm{Show that } 9^n + 5(9^{n-1})-3^{2n-1}

= 9^n + \frac{5}{9}(9^n) - 9^{n-\frac{1}{2}}
= 9^n + \frac{5}{9}(9^n) - \frac{1/3}9^n
= (1+\frac{5}{9}-1/3)9^n
= \frac{11}{9}(9^n)
= 11(9^{n-1})
```