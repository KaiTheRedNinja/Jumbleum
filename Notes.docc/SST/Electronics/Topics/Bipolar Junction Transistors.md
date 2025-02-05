# Bipolar Junction Transistors

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Transistors, which are like electronically controlled switches

## Overview
Bipolar Junction Transistors are basically an electronically controlled switch. It generally has three pins:
- Base
- Collector
- Emitter

Where **current** at the base will control the current flow between the collector and emitter.

For a transistor to activate, two conditions must be met:
1. There must be at least `0.7V` of potential difference between Base and Emitter (ie, `V_BE > 0.7V`)
    - this is a default value that is used in calculations when `V_BE` is not given
2. There must be current at the base (ie, `I_B > 0`)

## Current and Voltage across a BJT

Terminology:
- **Base-Emitter Voltage** (V_BE) is the voltage between the base and emitter
- **Base Activation Voltage** (V_BE) is the **minimum** voltage at which the transistor activates
- **Base Current** (I_B) is the current at the base
- **Base Voltage** (V_B) is the voltage at the base
- **Base Resistance** (V_RB) is the resistance at the base
- **Collector-Emitter Voltage** (V_CE) is the voltage between the collector and emitter
- **Collector Current** (I_C) is the current at the collector
- **Emitter Current** (I_E) is the current at the emitter
- **Beta** (β_dc) is the current gain of the transistor, which is the ratio of `I_C` to `I_B`

¹ this is a pretty long list but its quite easy to derive

They are connected by these equations. You can always use KVL and KCL (see <doc:Circuit-Theories>) to calculate
them given other values.

```math
I_E = I_B + I_C

V_{CE} = V_{BE} + V_{BC}

I_C = \beta I_B

\text{OR}

\beta = \frac{I_C}{I_B}
```

¹ Remember that gain(β) is is a ratio, so it has no units!

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
- **DC Load Line**: The line that connects the saturation and cutoff point (P_max), where the transistor operates

> Saturation Region: is mainly controlled by `V_RB`, where `V_RB` is the resistor at the Base. 
> `V_RB = V_CC - V_BE`

<!-- ## Solving -->
<!-- @Image(source: "Example_BJT", alt: "Circuit making use of a BJT transistor") -->

<!-- Note: I think the transistor might be the wrong type. I'm not bothered to find the right one rn. -->

<!-- In this example, given that you have `V_BE`, you can determine the following:
- `V_B`, as a voltage divider between R2 and R1
- `V_RC`, as a voltage divider between RC and R2, where `V_net = Vcc - V_BE`
- `I_E`, using V=IR with `V_RC` and `RC`
- `I_C`, which is equal to `I_E`
- `V_C`, using V=IR with `I_C` and `R_E`
- `V_E`, using V=IR with `I_E` and `R_C`
- `V_CE`, as `V_C - V_E` -->

<!-- Remember that in this case, assume that there is **no current** flowing into base. Ie, `I_E = 0`.
Ignore the beta value, its not useful here. -->

## Uses of BJT's
Common tested uses: 
- Common-Emitter Amplifier
- Single NPN Transistor as Driver
- Darlington Pairs

### Amplifier
@Image(source: "Diagram_BJT_Amplifier", alt: "BJT Amplifier")

Used with AC Signals, such as those from a microphone, to increase the amplitude of a signal
There are 3 kinds of Amplifiers: 
- common-emitter
- common-base
- common-collector

In our syllabus, its only necessary to do calculations for the `common-emitter` amplifier. 
And usually only with NPN transistors, not PNP transistors. 

> Remember: In this case, assume that there is **no current** flowing into base.
> 
> Ie, `I_B ≈ 0`, `∴ I_E ≈ I_C` where `I_B` is negligible. 
> This is because there is no resistor connected to the base, so negligible current flows to `I_B`
> Ignore the beta value, its not useful here.


Coupling Capacitors: (the caps at `V_in` and `V_out`)
- Used to block DC signals from entering the transistor
- Only allows AC signals to pass through

This is to ensure that the transistor is only amplifying the AC signal, to prevent the bias of the BJT from being affected. 

Voltage gain:

```math
A_v = \dfrac{V_{out}}{V_{in}} = -\dfrac{R_C}{R_E}
\text{OR}
|A_v| = \dfrac{V_{out}}{V_{in}} = \dfrac{R_C}{R_E}
``` 

### Driver
@Image(source: "Diagram_BJT_NPN_driver", alt: "BJT Driver")


Used to drive a high-current load, like a motor
NPN Transistors: The load is connected to VCC and the Collector 
PNP Transistors: The load is connected to the Emitter and GND

Conventions state that the load is connected to the collector of an NPN transistor and the emitter of a PNP transistor.
This is to keep the current flowing through the load consistent (basically don't screw up calculatinons) 

#### Darlington Pair
@Image(source: "Diagram_BJT_Darlington_Pairs", alt: "BJT Darlington Pair")


Two transistors connected in series, to increase the total current gain

**BUT** there will be a larger voltage drop across the transistors, as there are two `V_BE` values to overcome

**THEREFORE** if one BJT works well enough, **DON'T** use a Darlington Pair (ie. when the BJT is in saturation)

Gain of darlington pair:
```math
β_{total} = (β_1 \times β_2)
V_{BE} = V_{BE1} + V_{BE2}
```

> Darlington pairs can be `treated` as a single transistor, with a single β value

> Warning: If a single transistor can be driven into saturation, a darlington Pair should not be use. 
> Darlington pairs have a larger voltage drop across them, this in turn may reduce the total power dissipated by the load. 

<!-- @Image(source: "Example_BJT_Darlington_Pair", alt: "Example of a Darlington Pair") -->



#### Explanation question structure for BJT's
- state what happens to/from the source
- then by [some law or equation] 
- [if else statement] on what happens

## Configurations
@Image(source: "Diagram_BJT_Configurations", alt: "BJT Configurations")
> Learning Outcomes: 
> - know how to identify them, not the specific calculations. 
> - know the benefits and drawbacks of each kind


- CE - Common Emitter (most common)
- CB - Common Base
- CC - Common Collector

|Configuration|Input|Output|
|---|---|---|
|CE|base|collector|
|CB|emitter|collector|
|CC (also known as emitter follower)|base|emitter|

@Image(source: "Diagram_2_Stage_Amplifier", alt: "2 Stage Amplifier")

|Configuration|Good|Poor|
|---|---|---|
|CE|Good Voltage Gain                       |Loads with low resistance (eg. Loudspeakers)   |
|  |Good Current Gain                       |                                               |
|CC|Good at driving low-resistance loads    |Voltage Gain is close to 1                     |

CE amplifiers are the most commonly used amplifiers as they can provide **good voltage** and **current gain**. However, CE amplifiers are not good at driving loads with low resistance such as loudspeakers. If an 8 Q loudspeaker is connected across the output terminal of a CE amplifier, the voltage gain is likely to drop significantly and we will not be able to obtain the amplification needed.
On the other hand, the voltage gain of CC amplifiers is close to 1 (i.e., no voltage gain) but they are very good at driving low-resistance loads.

We can tap on the strengths of both amplifiers by building a two-stage amplifier as shown in Figure 9.29. The first stage consists of a CE amplifier which provides good voltage gain.
The second stage uses a CC amplifier to drive a low-resistance load such as a loudspeaker.

¹ I don't really understand the configurations in detail, but this is all I could find in the textbook