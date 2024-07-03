# Bipolar Junction Transistors

@Metadata {
    @PageImage(purpose: icon, source: "In Progress", alt: "In Progress")
}

Transistors, which are like electronically controlled switches

## Overview
Bipolar Junction Transistors are basically an electronically controlled switch. It generally has three pins:
- Base
- Collector
- Emitter
Where **current** at the base will control the current flow between the collector and emitter.

For a transistor to activate, two conditions must be met:
1. There must be at least 0.7V of potential difference between Base and Emitter (ie, V_BE > 0.7V)
2. There must be current at the base

## Current and Voltage across a BJT

Terminology:
- **Base-Emitter Voltage** (V_BE) is the voltage between the base and emitter
- **Collector-Emitter Voltage** (V_CE) is the voltage between the collector and emitter
- **Base Current** (I_B) is the current at the base
- **Collector Current** (I_C) is the current at the collector
- **Emitter Current** (I_E) is the current at the emitter
- **Beta** (β) is the current gain of the transistor, which is the ratio of I_C to I_B

They are connected by these equations. You can always use KVL and KCL (see <doc:Circuit-Theories>) to calculate
them given other values.
```math
I_E = I_B + I_C

V_{CE} = V_{BE} + V_{BC}

I_C = \beta I_B
```

The resistance of a model transistor is generally given by:
```math
R = \begin{cases} \infty & V_{BE} < 0.7V \\ 0 & V_{BE} \geq 0.7V \end{cases}
```

Following a reverse L shaped graph.

## Operation Regions

@Image(source: "Graph_BJT_VCE_IC", alt: "Graph of V_CE against I_C")

- **Cut-off Region**: No current flows between the collector and emitter
- **Saturation Region**: Some current flows between the collector and emitter
- **Active Region**: A lot of current flows between the collector and emitter

## Solving
@Image(source: "Example_BJT", alt: "Circuit making use of a BJT transistor")

Note: I think the transistor might be the wrong type. I'm not bothered to find the right one rn.

In this example, given that you have `V_BE`, you can determine the following:
- `V_B`, as a voltage divider between R2 and R1
- `V_RC`, as a voltage divider between RC and R2, where `V_net = Vcc - V_BE`
- `I_E`, using V=IR with `V_RC` and `RC`
- `I_C`, which is equal to `I_E`
- `V_C`, using V=IR with `I_C` and `R_E`
- `V_E`, using V=IR with `I_E` and `R_C`
- `V_CE`, as `V_C - V_E`

Remember that in this case, assume that there is **no current** flowing into base. Ie, `I_E = 0`.
Ignore the beta value, its not useful here.

## Different uses of BJT
TODO: Elaborate on these

### Amplifier
Used with AC, to increase the amplitude of a signal

### Driver
Used to drive a high-current load, like a motor

#### Darlington Pair
Two transistors connected in series, to increase the current gain