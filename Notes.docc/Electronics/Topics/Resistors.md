# Resistors

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Resistance is futile, except in electronics. You sorta need them to prevent your components from frying themselves.

## Overview
- Resistivity
- Types of resistors
- Colour code
- Effective resistance

## Resistivity

The resistance of a material can be calculated using the formula:
```math
R = \rho \frac{l}{A}
```
where:
- `R` is the resistance
- `ρ` is the resistivity of the material, measured in ohm-metres (Ωm)
- `l` is the length of the material
- `A` is the cross-sectional area of the material

This formula results in some interesting properties, namely:
- Doubling the length of a material doubles the resistance
- Doubling the cross-sectional area of a material halves the resistance
- Doubling the diameter of a wire quadruples the cross-sectional area, and thus resistance decreases to a quarter 
of its original value

## Types of Resistors
There are generally two types of resistors: Fixed and variable.

Fixed resistors have a fixed resistance value, and are used in most circuits. They come in various shapes and sizes,
and are usually colour-coded to indicate their resistance value.

Variable resistors, on the other hand, have a resistance value that can be adjusted. They are used in applications
where the resistance needs to be changed, such as volume controls on radios. Variable resistors can be either 
human-operated (trim pots and rheostats) or automatic (thermistors and LDRs).

Variable resistors are usually used in voltage dividers to control an output voltage. See <doc:D.C.-Circuits> for more
information on voltage dividers.

## Reading Resistor Values
Resistors are usually colour-coded to indicate their resistance value. Most resistors have four bands, with one band being
further apart from the others. They are read this way, with the far band being the percentage tolerance:

| 1st digit | 2nd digit | Multiplier | Tolerance |
|-----------|-----------|------------|-----------|
| 0 ⬛ Black | 0 ⬛ Black | 1 ⬛ Black | 1% 🟫 Brown |
| 1 🟫 Brown | 1 🟫 Brown | 10 🟫 Brown | 2% 🟥 Red |
| 2 🟥 Red | 2 🟥 Red | 100 🟥 Red | 5% ⭐ Gold |
| 3 🟧 Orange | 3 🟧 Orange | 1k 🟧 Orange | 10% 🩶 Silver |
| 4 🟨 Yellow | 4 🟨 Yellow | 10k 🟨 Yellow |  |
| 5 🟩 Green | 5 🟩 Green | 100k 🟩 Green |  |
| 6 🟦 Blue | 6 🟦 Blue | 1M 🟦 Blue |  |
| 7 🟪 Violet | 7 🟪 Violet | 10M 🟪 Violet |  |
| 8 ⬜ Gray | 8 ⬜ Gray | 0.01 🩶 Silver |  |
| 9 ⬜︎ White | 9 ⬜︎ White | 0.1 ⭐ Gold |  |

For example, a resistor with the colours Red, Red, Brown, Gold would have a resistance of 220Ω with a tolerance of 5%.

To calculate the resistance of a resistor, use the following formula:
```math
R = ((10 \times \text{1st digit}) + \text{2nd digit}) \times \text{Multiplier}
```

To calculate the minimum and maximum resistance of a resistor with a tolerance, use the following formula:
```math
R_{min} = R \times (1 - \text{Tolerance})
R_{max} = R \times (1 + \text{Tolerance})
```

## Effective Resistance

Resistors can be connected in two ways: Series and parallel.

@Image(source: "Diagram_Effective Resistance", alt: "Resistors in series and parallel")

Resistors in series are connected end-to-end, and the total resistance is the sum of the individual resistances:
```math
R_{eff} = R_1 + R_2 + R_3 + \ldots
```

Resistors in parallel are connected side-by-side, and the total resistance is the reciprocal of the sum of the 
reciprocals of the individual resistances:
```math
\frac{1}{R_{eff}} = \frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \ldots

R_{eff} = \frac{1}{\frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \ldots}
```

In parallel, the total resistance is ALWAYS less than the smallest resistor in the circuit. In special cases where
all resistors in parallel are the same resistance, the effective resistance is:
```math
R_{eff} = \frac{R}{n}
```
where `n` is the number of resistors in parallel.