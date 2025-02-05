# Basic logic gates

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

The very basics of boolean algebra and logic gates

## Overview
- Basic logic gates (see <doc:Computer-Architecture#Logic-Gates> for a brief intro)
- Universal gates
- Integrated Circuits (ICs)

## Boolean Notation

Boolean algebra is a mathematical system for manipulating logical values. Note that this should ONLY
be used for electronics, and not computing. For future readers taking the O levels in 2025 or beyond,
I believe you can use the proper syntax (this) for both.

```math
\text{AND}
A \cdot B \quad \text{or} \quad AB

\text{OR}
A + B

\text{NOT}
\overline{A}

\text{NAND}
\overline{AB}

\text{NOR}
\overline{A + B}
```

The normal order of operations applies.

See <doc:Computer-Architecture#Constructing-Logical-Statements> for details on truth tables.

## Basic Logic Gates

### NOT Gate

The NOT gate is the simplest of all gates. It inverts the input.

| Input A | Output X |
|---------|----------|
| 0       | 1        |
| 1       | 0        |

### AND Gate

The AND gate outputs 1 only when both inputs are 1.

| A | B | X |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

### OR Gate

The OR gate outputs 1 when either input is 1.

| A | B | X |
|---|---|---|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

### NAND Gate

The NAND gate is the inverse of the AND gate.

| A | B | X |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

### NOR Gate

The NOR gate is the inverse of the OR gate.

| A | B | X |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 0 |

## Timing Diagram

A timing diagram is a graphical representation of a digital signal's state over time.

Usually, they have a row for each input. The input is varied every "tick", the next input is
varied every two ticks, the third every fourth, and so on. There will be a total of n^2 ticks
for n inputs.

@Image(source: "Diagram_Timing_AND", alt: "Timing diagram for the AND gate")

## Universal Gates

NAND and NOR are considered universal gates because they can be used to construct any other gate.

@Row {
    @Column {
        @Image(source: "Diagram_Universal_NAND", alt: "NAND gate as a universal gate")
    }

    @Column {
        @Image(source: "Diagram_Universal_NOR", alt: "NOR gate as a universal gate")
    }
}

To convert a circuit into using universal gates, just convert each gate individually into the
universal representation, then simplify the circuit by cancelling out the gates.

Theres actually a way to do it using boolean algebra, but I tried that during S3 EOY 2023 and lost
four marks even though I got a better answer. Don't repeat my mistake.

## Integrated Circuits
Integrated circuits are a collection of gates in a single package. They are used to simplify
circuit design and reduce the number of components needed.

ICs usually have:
- A part number, which is used to identify the IC
- A spec sheet, which contains information on the IC's operation
- A notch or dot, which indicates the orientation of the IC

Pin 1 of an IC is ALWAYS to the left of the notch/dot, looking with notch/dot up

They'll usually (but not always) contain:
- GND, which is the last pin on the side of Pin 1
- Vcc, which is usually the pin opposite to Pin 1
