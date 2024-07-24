# Semiconductor Diodes

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

I allow current one way, but I am very prejudiced against the other... only death will stop me

## Overview
- Structure and working principles
- Half-wave and full-wave rectification
- Light-emitting diode (LED)
- 7-segment display
- Zener diode and its applications

## Structure and Working Principles

> Definition: Semiconductor: A material that has a conductivity between that of a conductor and an insulator.

There are two types of semiconductors: P and N type. They are created by "doping" a pure semiconductor (usually
silicon).

Doping silicon with a pentavalent element (like phosphorus) creates an N-type semiconductor, while doping it with a
trivalent element (like boron) creates a P-type semiconductor.

- N type -> Extra electrons, Negative
- P type -> Extra holes, Positive

When a P-type and N-type semiconductor are joined, it forms a PN junction.
1. At the junction, n-type material with more electrons diffuse into p-type material
2. As electrons in n-type material diffuse, it becomes more positively charged
3. As holes in the p-type material diffuse, it becomes more negatively charged
4. Movement of holes and electrons will stop after a while due to PD across the junction
5. This junction is called the deplection layer, because it is depleted of charge carriers

The potential difference across a silicon diode is 0.7V, and 0.3V for a germanium diode. The anode (positive) is
connected to the P-type end, while the cathode (negative) is connected to the N-type end. Current can only flow
from the anode (+) to the cathode (-).

Usually, there is a white band on the cathode indicating the direction of current flow.

## Bias

@Image(source: "Diagram_Diode_Forward Bias", alt: "Diode in forward bias")

1. In fig a, an external voltage is applied
2. In fig b, the potential barrier electric field and applied electric field are in opposite directions
3. In fig c, when the applied voltage is greater than the potential barrier (0.7V), the diode is forward biased
and resistance across the depletion region becomes negligible
4. Below the potential barrier, the diode is reverse biased and there is considerable resistance. Above 0.6V, this
resistance is negligible.

@Image(source: "Diagram_Diode_Reverse Bias", alt: "Diode in reverse bias")

1. If the external voltage is applied in the other direction, the potential barrier electric field and applied
electric field are in the same direction
2. This results in the depletion region becoming wider, and the resistance across it increases
3. When the applied reverse voltage increases, the resistance becomes so high that current becomes zero.

## Diode Models

@Image(source: "Graph_Diode_characteristics", alt: "Diode Characteristic Graphs")

There are three models of diodes.
1. Ideal model, which allows infinite current in the forward direction and zero current in the reverse direction.
Shown on the left on the image above.
    - The vertical part of the graph shows the diode in forward bias, acting like a closed switch
    - The horizontal part of the graph shows the diode in reverse bias, acting like an open switch
2. Simplified model, which is like the ideal model but only allows infinite current at V_k of 0.7V. Not shown.
3. Practical model, which is the most realistic, with accurate curves for forward and reverse bias. Shown on the right.
    - Region a: Voltage is higher than knee voltage, Vk. Diode is in forward bias and behaves like a closed switch
    - Region b: When applied voltage is from 0 to Vk, the diode still has substantial resistance. At 0.7V, the diode
    allows a small amount of current to flow
    - Region c: The diode is in reverse bias. The junction has very high resistance and next to no current flows.
    - Region d: When the applied voltage is higher than the breakdown voltage Vbr, the diode is in breakdown and allows
    a large amount of current to flow.

ALWAYS attach a resistor in series with a diode to limit the current. This is called a current limiting resistor.

## Rectifier

Rectifiers are used to convert AC to DC. They are made of diodes and can be half-wave or full-wave.

Rectifiers usually use capacitors to "smoothen" the output. This is called filtering.

### Half-wave Rectifier

@Row {
    @Column {
        @Image(source: "Diagram_Half Wave Rectifier", alt: "Half-wave Rectifier circuit")
    }

    @Column {
        @Image(source: "Graph_Half Wave Rectifier", alt: "Half-wave Rectifier graph")
    }
}

The half wave rectifier makes use of one diode, which "chops off" the bottom half of the AC wave. The output is
a pulsating DC wave, with a maximum voltage 0.7V lower than the peak voltage of the AC wave. When the AC wave is
lower than 0.7V, no current flows.

### Full-wave Rectifier

@Row {
    @Column {
        @Image(source: "Diagram_Full Wave Rectifier", alt: "Full-wave Rectifier circuit")
    }

    @Column {
        @Image(source: "Graph_Full Wave Rectifier", alt: "Full-wave Rectifier graph")
    }
}

@Image(source: "Diagram_Full Wave Rectifier_Negative", alt: "Current flow through the full wave rectifier in positive mode")

@Image(source: "Diagram_Full Wave Rectifier_Positive", alt: "Current flow through the full wave rectifier in negative mode")

The full wave rectifier uses four diodes to convert the entire AC wave into DC. The output is a pulsating DC wave.

Note that because current has to flow through TWO diodes in the full wave rectifier, the voltage drop is 1.4V.

### Smoothing

The output of a full-wave rectifier is a pulsating DC wave. To smoothen it, a capacitor is connected in parallel to the
load. The capacitor charges when the voltage is high and discharges when the voltage is low, reducing the ripple.

@Row {
    @Column {
        @Image(source: "Diagram_Full Wave Rectifier_Smooth", alt: "Full-wave Rectifier with smoothing capacitor")
    }

    @Column {
        @Image(source: "Graph_Full Wave Rectifier_Smooth", alt: "Full-wave Rectifier with smoothing capacitor graph")
    }
}

## Light Emitting Diode

LEDs are diodes that emit light when current flows through them. They are used in displays, indicators, and lighting.

The are generally more energy efficient than incandescent bulbs, and have a longer lifespan. The are drawn as a diode
with two arrows pointing away from it.

The longer leg of the LED is the anode, while the shorter leg is the cathode. The anode is connected to the positive
terminal of the power source. An LED acts identical to a diode in forward bias, and will not light up in reverse bias.

## 7-Segment Display

7-segment displays are displays with 7 LEDs arranged in a pattern that can display numbers 0-9. They are used in
calculators, digital clocks, and other devices. Some contain an 8th LED, used to display a decimal place.

@Row {
    @Column {
        @Image(source: "Diagram_7-Segment", alt: "7 segment display")
    }

    @Column {
        Common anode: All anodes are connected to a common positive terminal. To light up a segment, the cathode is
        connected to the negative terminal. To turn off a segment, the cathode is connected to the positive terminal.

        Common cathode: All cathodes are connected to a common negative terminal. To light up a segment, the anode is
        connected to the positive terminal. To turn off a segment, the anode is connected to the negative terminal.
    }
}

Note that the LEDs should be connected to current limiting resistors, which can either be put on the common anode/cathode
or on each individual LED.

See <doc:Comparator-timer-and-counter-circuits#Counter> for more details on how a 7-segment display can be used with
a counter.

## Zener Diode

Zener diodes have the privilege of
- Having a fancy name
- Not breaking when reverse biased

Zener diodes follow the same characteristic graph of a practical diode, except instead of V_br it has V_z, which is
the zener voltage. When the reverse voltage is greater than V_z, the diode is in breakdown and allows current to flow.
Importantly, the diode doesn't actually _break_ like a normal diode would, which allows the zener diode to be used to
regulate voltage (ensure that it doesn't exceed a value)

Zener diodes tend to mess up calculations because they make voltage go all weird, so generally to solve for 
current/voltage/resistance in a circuit with a zener diode,
1. Calculate the voltage across the load parallel to the zener diode
2. If it exceeds the zener voltage, treat the voltage across the load to be Vz
3. Calculate the current through the load

@Image(source: "Diagram_Full Wave Rectifier_Zener", alt: "Zener diode used to regulate voltage in a full wave rectifier")

Zener diodes can be used in full wave rectifiers to "chop off" the uneven top of the signal, resulting in a nice DC
signal. This is called voltage regulation.