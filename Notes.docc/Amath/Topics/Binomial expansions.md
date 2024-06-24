# Binomial expansions

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Binomial expansions help expand expressions of the form `(a+b)^n` where `n` is a positive integer

## Overview
- Use of the Binomial Theorem
- Use of the notations n! and nCr
- Use of the general term of binomials

Binomial Theorem is a formula that allows us to expand expressions of the form `(a+b)^n` where `n` is a 
positive integer. The formula is as follows, and is provided in O level papers:
```math
(a+b)^n = \binom{n}{0}a^n b^0 + \binom{n}{1}a^{n-1} b^1 ... \binom{n}{n}a^0 b^n
```

For example, in the expansion of `(a+b)^3`, the terms are:
```math
\binom{3}{0}a^3 b^0 + \binom{3}{1}a^2 b^1 + \binom{3}{2}a^1 b^2 + \binom{3}{3}a^0 b^3

= a^3 + 3a^2 b + 3ab^2 + b^3
```

Generally, for an equation of power `n`, it will produce `n+1` terms in the expansion. The coefficients of the terms are
calculated using the binomial coefficient formula, where `r` is the term number from `0` to `n`. The `r+1`th term is defined as:
```math
T_{r+1} = \binom{n}{r} (a)^{n-r} (b)^r
```

## Notations
- `n!` is the factorial of `n`, which is the product of all positive integers less than or equal to `n`.
- `\binom{n}{r}`, aka `nCr`, is the binomial coefficient, which is the number of ways to choose `r` items from `n` items.
```math
\binom{n}{r} = \frac{n!}{r!(n-r)!}
```

## Pascal's Triangle
Pascal's Triangle is a triangular array of binomial coefficients. The `n`th row of the triangle contains the coefficients of the
expansion of `(a+b)^n`. The triangle is constructed by adding the two numbers above a number to get the number below it.
```
n=0:      1
n=1:     1 1
n=2:    1 2 1
n=3:   1 3 3 1
n=4:  1 4 6 4 1
```

The term `nCr` is the number at the `r+1`th position in the `n`th row of Pascal's Triangle. This is key for binomial expansion.

Note that terms increase in magnitude from the left to the middle, and then decrease in magnitude from the middle to the right.

## Using your calculator
Most scientific calculators have a built-in function to calculate binomial coefficients, labelled as `nCr`. To quickly evaluate
an entire binomial expression, first enter `0 -> x` (`->` is usually called `sto`). Then, enter this, where `n` is the power of the
binomial and `a` and `b` are the coefficients:
```math
nCx * a^{n-x} * b^r \quad : \quad x+1 \rightarrow x
```

This evaluates one term, then increases x by one (the : is used to separate the two commands). Repeat this command `n+1` times to
evaluate the entire expansion.

## Examples

Given that *k* is a constant and the coefficient of the x^4 term in the expansion of (2x+k)^6 is 2160, find the value of k
```math
\binom{6}{r}(k)^{6-r}(2)^rx^r = 2160x^4

\binom{6}{4}(k)^{2}(2)^4 = 2160

15k^2*16 = 2160

k^2 = 9

k = 3
```