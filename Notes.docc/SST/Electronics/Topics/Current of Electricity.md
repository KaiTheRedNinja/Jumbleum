# Current of Electricity

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

How electricity flows through a circuit

## Overview
- SI units (fundamental and derived)
- Standard scientific notation and prefix form
- Conventional current and electron flow
- Charge, e.m.f. and potential difference
- Resistance and Ohm's law
- Measurement of voltage, current and resistance
- Electrical energy and power

My unified equation of all current of electricity is:
```
E . W P
 W Q V I
P T I R
```
Where if you take any upright triangle such as P, V, and I, it is a valid equation. My mnemonic for this is
"Edward Wanted Prince William, Queen Victoria In Prison To Incite Riot".

See <doc:Physical-Quantities-Units-and-Measurement#Prefixes-and-Magnitude> for information about the SI prefixes.

## Current

> Definition: The rate of flow of charge

Mathematically, charge, time, and current are connected by
```math
I = \frac{Q}{t}
```
where
- `$I$` is the current in amperes (A)
- `$Q$` is the charge in coulombs (C)
- `$t$` is the time in seconds (s)

Current, measured in Ampere, is an SI base unit.

### Conventional Flow

> Definition: Conventional current: The flow of positive charges

Conventional current is technically not the way that electricity flows, since electrons are negatively charged. 
However, it is used in circuit diagrams and calculations for historical reasons and also because it is easier to work with.

Conventional flow goes from the positive terminal of a battery (the longer line) to the negative terminal (the shorter line).

Electron flow goes from the negative terminal to the positive terminal.

Note that in questions, they may ask you to indicate which way current is flowing. Make sure to pay attention to whether they
are asking for electron or conventional flow.

Current can be measured by an ammeter, which is connected in series with the circuit. Galvonometers are similar to ammeters, 
but are more sensitive and are used to measure small currents in either positive or negative directions.

## Voltage

> Definition: Voltage: Otherwise known as electromotive force (e.m.f.) and potential difference (PD) is the energy per 
unit charge that is given to the charge to move it through the circuit.

Mathematically, voltage, energy, and charge are connected by
```math
V = \frac{W}{Q}
```
where
- `$V$` is the voltage in volts (V)
- `$W$` is the energy in joules (J)
- `$Q$` is the charge in coulombs (C)

1 volt is equal to 1 joule per coulomb.

> Definition: Electromotive force (e.m.f.): The energy per unit charge that is given to the charge to move it through the
ENTIRE circuit.

For example, if a battery has a voltage of 12V, it means that 12 joules of energy are spent to move 1 coulomb of charge 
through the circuit.

Battery cells can be connected in series or parallel. Just remember:
- Series: emf is the sum of the emf of each cell. The circuit lasts the same amount of time as an individual cell.
- Parallel: emf is the same as the emf of each cell. The circuit lasts n times longer than an individual cell, where n is the
number of cells.

Note that cells in parallel MUST be the same voltage, or else the cell with the highest voltage will discharge into the cell
with the lowest voltage and cause all sorts of problems.

> Definition: Potential difference (PD): The energy per unit charge that is given to the charge to move it through a
PART of the circuit.

The potential difference across the battery is the same as the emf of the battery. The potential difference across a resistor
is the energy per unit charge that is lost as the charge moves through the resistor.

Mathematically,
```math
V = \frac{W}{Q}
```
where
- `$V$` is the potential difference in volts (V)
- `$W$` is the energy in joules (J)
- `$Q$` is the charge in coulombs (C)

A voltmeter is used to measure potential difference. It is connected in parallel with the component that you want to measure
the potential difference across. Voltmeters have a very high resistance so that they do not affect the circuit, and ideally
has an infinite resistance.

@Image(source: "Diagram_Potential Difference", alt: "Potential Difference")

You can imagine PD like a slope, where a battery increases the altitude and a resistor decreases the altitude.

## Resistance

> Definition: Resistance: The opposition an electric current experiences when it flows through a component

Resistance is defined as the ratio of PD across it to the current flowing through it. Mathematically,
```math
R = \frac{V}{I}
```
where
- `$R$` is the resistance in ohms (Ω)
- `$V$` is the potential difference in volts (V)
- `$I$` is the current in amperes (A)

1 ohm is equal to 1 volt per ampere.

See <doc:Resistors> for more information on resistors. Resistance cannot be measured directly, but can be calculated using
the formula above.

### Ohm's Law

> Definition: Ohm's Law: The current flowing through a conductor is directly proportional to the potential difference across
it, provided that the temperature remains constant.

This means that the resistance of a conductor is constant. Ohmic conductors are conductors that obey Ohm's Law,
meaning that their resistance stays constant. Non-ohmic conductors are conductors that do not obey Ohm's Law.

Most ohmic conductors have a certain point where they become non-ohmic, because they melt. However, within their rated
voltage and current, they are ohmic.

Examples of non-ohmic conductors include:
- Filament lamps: The resistance increases as the temperature increases, because the filament gets hotter and the resistance
increases.
- Diodes: The resistance is very high in one direction and very low in the other direction.

One way to tell if a conductor is ohmic is to plot a graph of V against I. If the graph is a straight line that passes through
the origin, then the conductor is ohmic. If the graph is not a straight line or does not pass through the origin, then the 
conductor is non-ohmic.

A steeper gradient means a higher resistance.

## Power

> Definition: Power: The rate at which energy is transferred by an electrical circuit

Power has many many MANY formulas within electronics. Most generally, power is defined as the rate of energy transfer, or
the rate of doing work. Mathematically,
```math
P = \frac{W}{t}
```
where
- `$P$` is the power in watts (W)
- `$W$` is the energy in joules (J)
- `$t$` is the time in seconds (s)

For information about energy efficiency, see <doc:Energy#Efficiency> in Physics.

However, it can also be defined as the product of voltage and current. Because voltage = current * resistance, power has three
equations:
```math
P = IV

P = I^2 R

P = \frac{V^2}{R}
```
where
- `$P$` is the power in watts (W)
- `$I$` is the current in amperes (A)
- `$V$` is the voltage in volts (V)
- `$R$` is the resistance in ohms (Ω)

### Power Rating

> Definition: Power rating: The maximum power that a device can be used without being damaged

Resistors usually have standard ratings of 1/8, 1/4, 1/2, 1 and 2 Watts. When choosing a resistor, choose one with a power
rating that is double or more than the power that will be dissipated in the resistor, to ensure good tolerance.

High-power devices include things like heaters, kettles, and ovens. Low-power devices include things like LED lights. For
more information on how power is used, see <doc:Practical-Electricity>.