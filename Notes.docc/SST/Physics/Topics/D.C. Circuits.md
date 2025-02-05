# D.C. Circuits

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

When electrons vroom through pieces of metal in a loop

## Overview

- Circuit diagrams
- Series and parallel circuits
- Action and use of circuit components

## Circuit Diagrams

> Definition: Circuit Diagram: A diagram that uses symbols to represent the components of a circuit and their connections.

@Image(source: "Example_Circuit Symbols", alt: "Common circuit symbols")

Circuits consists of electrical components with wires connecting them together. Within the physics syllabus, there will always be
- A battery (or cell), represented by a long line with a shorter line at one end (or possibly multiple stacked together)
- A resistor, represented by a rectangle with lines extending from the short ends
    - IMPORTANT: The line does NOT go through the rectangle, because that would represent a fuse.

> Assume that the resistance of connecting wires and the power sources (e.g. cell, battery, d.c. supply or a.c. supply) are negligible.

## Series Circuits

> Definition: Series Circuit: A circuit in which the components are connected end-to-end so that the current flows through each component in turn.

In a series circuit, there is
- Only one path for the current to flow
- At **every point in the circuit**, the **amount of charge** passing through it (the current) is the SAME
    - The **current** is the same at every point in the circuit
- A fault at any point of the circuit will break the flow of current

Mathematically, for ammeters placed anywhere in the circuit:
```math
I = I_1 = I_2 = I_3 = \ldots
```

### Potential Dividers

Potential dividers, also known as voltage dividers, are a series of resistors connected in series. The voltage across each resistor is proportional
to the resistance of the resistor.

@Image(source: "Diagram_Potential Divider", alt: "Diagram of a Potential Divider")

The relationship between the voltages across the resistors is given by:
```math
V = V_1 + V_2 \quad \textrm{And so on for any more resistors}
V_n = V * \frac{R_n}{R_{\textrm{eff}}}
```
where Reff is the <doc:Resistors#Effective-Resistance> of the resistors in series.

In the special case where all resistors are the same resistance, the voltage across each resistor is the same, and equal to the total voltage divided 
by the number of resistors.

@Image(source: "Diagram_Open Circuit", alt: "Open Circuit")

In the case of an open circuit, the open switch can be treated as a resistor with infinite resistance, as no current can pass through an open switch.
By potential divider rules, the voltage across the open switch is equal to the total voltage.
```math
V_{\textrm{open}} = V * \frac{R_{\infty}}{R_{eff}} = V
```

## Parallel Circuits

> Definition: Parallel Circuit: A circuit in which the components are connected side-by-side so that the current is split between the components.

In a parallel circuit, there is
- More than one path for the current to flow
- The **voltage** across each component is the SAME
- The **current** is split between the components
- A fault at one "branch" of the circuit will not break the flow of current

@Image(source: "Diagram_Parallel Circuit", alt: "Diagram of a Parallel Circuit")

Mathematically, for ammeter I placed outside the parallel circuit and I1, I2, I3, ... placed on each branch of the parallel circuit:
```math
I = I_1 + I_2 + I_3 + \ldots
```
For voltage V across the parallel circuit and voltage V1, V2, V3, ... across each branch:
```math
V = V_1 = V_2 = V_3 = \ldots
```

To calculate the effective resistance of resistors in parallel, see <doc:Resistors#Effective-Resistance>.

## Input Transducers

> Definition: Input Transducer: A device that converts a non-electrical quantity into an electrical signal.

### Variable Potential Divider

A variable potential divider is a potential divider where one of the resistors may vary in resistance. This resistor may be
- A variable resistor (potentiometer)
- A light-dependent resistor (LDR)
- A thermistor
- etc

@Image(source: "Diagram_Variable Potential Divider", alt: "Diagram of a Variable Potential Divider")

@Row {
    @Column {
        - A variable resistor, rheostat R1, is used
        - The rheostat is connected at two terminals
        - To obtain a larger output voltage, resistance R1 should be decreased

        > In such circuits, Vout looks like a parallel circuit with R2. However, the resistance of Vout is treated as infinity, so it
        doesn't affect the total resistance and hence doesn't affect the calculations for potential divider.
    }

    @Column {
        - A variable resistor, potentiometer R, is used
        - The potentiometer is connected at three terminals, A, B, and C
        - Contact C slides along the resistor. 
            - The position of slider contact C determines the ratio of the resistance of AC to CB
            - The closer it is to the top, the lower the resistance across BC and higher across CA
            - Contact C moved towards A:
                - Resistance across AC decreases, output voltage across AC decreases.
            - Contact C moved towards B:
                - Resistance across AC increases, output voltage across AC increases.
    }
}

### Transducers

We'll be dealing with two specific input transducers:
- Thermistors
- Light-dependent resistors (LDRs)

Both of them operate on negative coefficents, meaning that as the temperature or light intensity increases, the resistance decreases.