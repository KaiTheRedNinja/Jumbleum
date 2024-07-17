# Capacitors

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

A capacitor is like a bucket that stores charge

## Overview

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

## Behaviour
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

## Types of Capacitors
