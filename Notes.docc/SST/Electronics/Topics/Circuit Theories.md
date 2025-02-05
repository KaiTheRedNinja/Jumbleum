# Circuit Theories

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

## Overview

See <doc:D.C.-Circuits> under physics for the following topics:
- Circuit diagrams
- Series and parallel circuits
- Action and use of circuit components
- Voltage and current dividers

This document only covers Kirchoff's Laws.

## Kirchoff's Laws

@Image(source: "Diagram_Kirchhoff", alt: "Kirchoff's Laws")

### Kirchoff's Current Law

> Definition: Kirchoff's Current Law (KCL): The sum of currents entering a junction is equal to the sum of currents leaving the junction.

Mathematically,
```math
\sum I_{\text{in}} = \sum I_{\text{out}}
```

For example, when a current splits at a parallel circuit, the sum of the currents entering the forks of the circuit is equal to the current
entering the parallel circuit.

### Kirchoff's Voltage Law

> Definition: Kirchoff's Voltage Law (KVL): The sum of the potential differences around a closed loop is zero.

Mathematically,
```math
\sum V_{\text{loop}} = 0
```

For example, in a series circuit, the sum of the potential differences across each component is equal to the emf of the battery. This also
works regardless of which path you take, so long as it is a closed loop, because the PD across the forks of a parallel circuit is the same.