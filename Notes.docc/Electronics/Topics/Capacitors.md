# Capacitors

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

A capacitor is like a bucket that stores charge

## Overview

- Structure and working principle
- Capacitance
- Capacitors in series and parallel
- Charging and discharging a capacitor

## Working Principle

Capacitors can kinda be thought of as a "bucket" for charge, where it "fills" up with charge, and releases
them when the supply is removed.

A capacitor consists of two metal plates separated by an insulator (the dielectric). As a voltage is applied
across the plates, electrons are pulled from the plate by the positive terminal of the abbetry, and an equal 
number are deposited on the bottom metal plate. No electrons move through the dielectric, and an electric field
is created between the plates.

## Types of Capacitors

There are two types of capacitors, polarised and unpolarised.

Polarised capacitors are generally larger in size, and have a higher capacitance. They have a positive and negative
terminal, where the negative terminal is labelled with a - sign on the side of the capacitor, and a shorter lead.
The symbol for a polarised capacitor has a + on the positive side, and a concave line on the negative side.

| Factor | Nonpolarised | Polarised |
| ------ | ------------ | --------- |
| Polarity | No | Yes |
| Capacitance | Low | High |
| Size | Small | Large |

Nonpolarised capacitors are usually flat-ish circles with either a two or three digit number.
- Two digits: The number is the capacitance in pF, which is 10^-12 F.
- Three digits: The first two digits are the first two digits of the capacitance in pF, and the third digit is the number of zeros to add to the end.

For a polarised capacitor, just read it directly.

## Capacitance 

Capacitors are measured in Farads (F). A Farad is a very large unit, so capacitors are usually measured in 
microfarads (μF, 10^-6), nanofarads (nF, 10^-9), or picofarads (pF, 10^-12).

The formula for capacitance is:
```math
C = \frac{Q}{V}
```
Where:
- `C` is the capacitance in Farads
- `Q` is the charge in Coulombs
- `V` is the voltage in Volts

Note that because C is usually very small, Q is similarly small.

### Capacitors in Series or Parallel

The behaviour of the capacitance in series or parallel is similar to that of resistors, just that the formulas
for series and parallel are inverted.

For capacitors in series:
```math
\frac{1}{C_{total}} = \frac{1}{C_1} + \frac{1}{C_2} + \ldots
```
For capacitors in parallel:
```math
C_{total} = C_1 + C_2 + \ldots
```

This is because when capacitors are in series, the same charge passes through each capacitor, but the voltage
across each capacitor decreases. The total capacitance is therefore lower.

When capacitors are in parallel, the voltage across each capacitor is the same, but the charge is split between
the capacitors. The total capacitance is therefore higher.

## Charging Behaviour
When a capacitor is uncharged, voltage V across the capacitor is zero, and the current I through the capacitor 
is maximum, acting like a short circuit.

When a capacitor is fully charged, the voltage V across the capacitor is maximum, and the current I through the
capacitor is zero, acting like an open circuit.

@Image(source: "Graph_Capacitor", alt: "Charge discharge graph of a capacitor")

The constant T is the time constant of the capacitor, and is given by:
```math
T = R * C
```
Where:
- `T` is the time constant in seconds
- `R` is the resistance in Ohms
- `C` is the capacitance in Farads

When charging, the capacitor is at 2/3 Vcc at time T, and effectively at Vcc at time 5T.

When discharging, the capacitor is at 1/3 Vcc at time T, and effectively at 0V at time 5T.

This charge-discharge timing property of capacitors is used in Timer circuits (see <doc:Comparator-timer-and-counter-circuits#Timer>).
