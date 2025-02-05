# Trig functions identities and equations

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Manipulating curves in ways that are unholy

## Overview
- Six trigonometric functions for angles of any magnitude (in degrees or
radians)
- Principal values of inverse sin, cos, tan
- Exact values of the trigonometric functions for special angles
- Amplitude, periodicity and symmetries related to sine and cosine
functions
- Graphs of y = a sin (bx) + c, y = sin (x/b) + c, etc
- Use of:
  - standard trig identities
  - the expansions of trig operations on A+B and A-B
  - the formulae for sin2A , cos2A and tan2A
  - the R formula
- Simplification of trigonometric expressions
- Solution of simple trigonometric equations in a given interval (excluding general solution)
- Proofs of simple trigonometric identities
- Using trigonometric functions as model

## Special angles
| θ in deg | 0 | 30 | 45 | 60 | 90 |
|----------|---|----|----|----|----|
| θ in rad | 0 | π/6 | π/4 | π/3 | π/2 |
| sin θ | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos θ | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan θ | 0 | 1/√3 | 1 | √3 | undefined |

Or, in an easier to remember way:

| θ in deg | 0 | 30 | 45 | 60 | 90 |
|----------|---|----|----|----|----|
| θ in rad | 0 | π/6 | π/4 | π/3 | π/2 |
| sin θ | √0/2 | √1/2 | √2/2 | √3/2 | √4/2 |
| cos θ | √4/2 | √3/2 | √2/2 | √1/2 | √0/2 |
| tan θ | 0 | 1/√3 | 1 | √3 | undefined |

## Useful Relationships
Negative angles
```math
\sin(-\theta) = -\sin(\theta)
\cos(-\theta) = +\cos(\theta)
\tan(-\theta) = -\tan(\theta)
```

Complementary angles:
```math
\sin(90 - \theta) = +\cos(\theta)
\cos(90 - \theta) = +\sin(\theta)
\tan(90 - \theta) = +\cot(\theta)
```

Obtuse angles:
```math
\sin(90 + \theta) = +\cos(\theta)
\cos(90 + \theta) = -\sin(\theta)
\tan(90 + \theta) = -\cot(\theta)

\sin(180 - \theta) = +\sin(\theta)
\cos(180 - \theta) = -\cos(\theta)
\tan(180 - \theta) = -\tan(\theta)
```

Reflex angles:
```math
\sin(180 - \theta) = -\sin(\theta)
\cos(180 - \theta) = -\cos(\theta)
\tan(180 - \theta) = +\tan(\theta)

\sin(270 - \theta) = -\cos(\theta)
\cos(270 - \theta) = -\sin(\theta)
\tan(270 - \theta) = +\cot(\theta)
```

Where tan theta != 0

## Identities
Quotient identity:
```math
\tan(\theta) \equiv \frac{sin(\theta)}{cos(\theta)}
```

Reciprocal identities:
```math
\cosec(\theta) \equiv \frac{1}{\sin(\theta)}
\sec(\theta) \equiv \frac{1}{\cos(\theta)}
\cot(\theta) \equiv \frac{1}{\tan(\theta)}
```

Pythagoras identity:
```math
\sin^2(\theta) + \cos^2(\theta) \equiv 1
\tan^2(\theta) + 1 \equiv \sec^2(\theta)
1 + \cot^2(\theta) \equiv \cosec^2(\theta)
```

Addition formulae:
```math
\sin(A \pm B) = \sin(A)\cos(B) \pm \cos(A)\sin(B)
\cos(A \pm B) = \cos(A)\cos(B) \mp \sin(A)\sin(B)

\tan(A \pm B) = \frac{\tan(A) \pm \tan(B)}{1 \mp \tan(A)\tan(B)}
```

Double angle formulae:
```math
\sin(2A) = 2 \sin(A)\cos(A)
\cos(2A) = \cos^2(A) - \sin^2(A) 
\quad = 2\cos^2(A) - 1 
\quad = 1 - 2\sin^2(A)

\tan(2A) = \frac{2\tan(A)}{1 - \tan^2(A)}
```

Triple angle formulae:
```math
\cos3A = 4 \cos^3 A - 3\cos A
\sin 3A = 3\sin A - 4\sin^3 A

\tan3A = \dfrac{3\tan A - 3\cos A}{1-3\tan^2 A}
```

## R Formula

The R formula *IS NOT* provided in the formula sheet.

Generally, the R formula is defined as
```math
a\cos(\theta) + b\sin(\theta) = R\sin(\theta + \alpha)
```

Where
```math
R = \sqrt{a^2 + b^2}

\tan(\alpha) = \frac{b}{a}
```

However, we're not allowed to use this in exams. We need to explain it to them. We do
this by:

```math
\textrm{State the R formula}
a\cos(\theta) + b\sin(\theta) = R\sin(\theta + \alpha)

\textrm{Expand it}
= R(\cos(\theta)\cos(\alpha) - \sin(\theta)\sin(\alpha))
= R\cos(\theta)\cos(\alpha) - R\sin(\theta)\sin(\alpha)

\textrm{Match the coefficients}
R\sin(\alpha) = b
R\cos(\alpha) = a

\textrm{Determine } tan(\alpha)
\frac{R\sin(\alpha)}{R\cos(\alpha)} = \frac{\sin(\alpha)}{\cos(\alpha)} = \frac{b}{a}

\textrm{Determine } R
R^2 \times \sin^2(\alpha) + R^2 \times \cos^2(\alpha) = a^2 + b^2
R^2 = a^2 + b^2
R = \sqrt{a^2 + b^2}

\textrm{State the final formula}
a\cos(\theta) + b\sin(\theta) = \sqrt{a^2 + b^2}\sin(\theta + \tan^{-1}(\frac{b}{a}))
```

## Sine Rule & Cosine Rule
These are provided in the formula sheet so they aren't as important. 
### Cosine Rule

```math
a^2 = b^2 + c^2 - 2bc \cos(A)
```

### Sine Rule

```math
\dfrac{a}{\sin(A)} = \dfrac{b}{\sin(B)} = \dfrac{c}{\sin(C)} 
```

## Solving Trigonometric Equations

Literally just keep on spamming identities until you convert it to a form that you can solve.

In general, you can only solve a trig equation when it only consists of ONE trig function.