# Electromagnetic Induction
<!-- @Metadata {
    @PageImage(purpose: icon, source: "In Progress", alt: "In Progress")
} -->

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

## Overview
Topics:
- Faraday's Law
- Lenz's Law
- AC Generators
- Faraday's Induction Ring Experiment
- Transformers

## Magnetic Flux Linkage

`Magnetic Flux Linkage` is the product of the magnetic flux and the number of turns in a coil. It is given by the formula:

```math
\phi = N B A \cos \theta
```

where: 
- N - number of turns of the solenoid
- B - magnetic field strength (`T`/Tesla)
- A - Area of the flat surface (Square Metres/`m²`)
- θ - the angle between the direction of the magnetic field and the normal of the surface (degrees/°)

## Faradays & Lenz's Law

> Faraday's Law: The magnitude of the emf induced in a **closed circuit** is directly proportional to the rate of change of the `magnetic flux linkage` through the conductor. 

> Lenz's Law: The direction of the induced emf (and hence the direction of induced current) is such that its magnetic effect opposes the direction of motion that produces it.

Sample Explanation:
1. When there is a change in magnetic flux linkage (Δφ) through the conductor
2. By Faraday's Law, there will be an induced emf. in the conductor. 
3. As the Conductor is a closed loop, there will be an induced current and an induced Magnetic field.
4. By Lenz's Law, the induced magnetic field opposes the change in magnetic flux linkage through the conductor. 
5. There will be an induced [pole closest to the conductor]-pole on the side closest to the magnet. 
6. Therefore since like poles repel, the conductor will slow down as it approaches the magnet.

> Important: always state Faraday's Law **before** Lenz's Law when explaining. 
>
> This is because Faraday's Law is a prerequisite for Lenz's Law to take effect. (induced magnetic field)

### Fleming's Right Hand Rule
@Image(source: "Diagram_EMI_Flemings_RH_Rule", alt: "Fleming's Right Hand Rule")
> Important: 
> **Fleming's Right Hand Rule** - is used to determine the direction of the induced **current** in a conductor.
>
> **Fleming's Left Hand Rule** - is used to determine the direction of the **force** on a current-carrying conductor in a magnetic field.

### Faraday's Induction Ring Experiment
@Image(source: "Diagram_EMI_Faradays_Induction_Ring", alt: "Faraday's Induction Ring Experiment")

> Observation: When the switch is closed, the compass needle deflects monetarily, and then returns to its original orientation. 

Explanation:
1. Just after the switch is closed, the current through the primary coil increases from zero to its maximum value. 
2. The strength of the magnetic field produced by the primary coil increases from zero to its maximum value.
3. The soft iron ring redirects the magnetic field produced by the primary coil toward the secondary coil. 
4. By Faraday’s law of electromagnetic induction, the changing magnetic flux linkage through the secondary coil induces an emf. in the secondary coil.
5. Since the secondary coil is part of a closed circuit, the induced e.m.f. produces an induced current through the secondary coil. 
6. By Lenz’s law, the induced current through the secondary coil produces a magnetic field that opposes the strengthening of the magnetic field produced by the primary coil. 
7. When this induced current through the secondary coil flows through wire PQ, it produces a magnetic field that momentarily defects the compass needle.

> Observation: When the switch is opened, the compass needle deflects monetarily in the opposite direction, and then returns to its original orientation. 

Explanation: 
1. Just after the switch is opened, the current through the primary coil decreases from its maximum value to zero. 
2. The strength of the magnetic field produced by the primary coil decreases from its maximum value to zero. 
3. The soft iron ring redirects the magnetic field produced by the primary coil toward the secondary coil.
4.  By Faraday’s law of electromagnetic induction, the changing magnetic flux linkage through the secondary coil induces an e.m.f. in the secondary coil in the opposite direction.
5. Since the secondary coil is part of a closed circuit, the induced e.m.f. produces an induced current through the secondary coil in the opposite direction. 
6. By Lenz’s law, the induced current through the secondary coil produces a magnetic field that opposes the weakening of the magnetic field produced by the primary coil. 
7. When this induced current through the secondary coil flows through wire PQ, it produces a magnetic field that momentarily defects the compass needle in the opposite direction.

> Observation: When the switch remains closed or opened, the compass needle is remains undeflected. 

Explanation: 
1. When the switch remains closed or open, the current through the primary coil remains either constant or zero. 
2. The strength of the magnetic field produced by the primary coil remains either constant or zero. 
3. The soft iron ring redirects the magnetic field produced by the primary coil toward the secondary coil. 
4. Since the magnetic flux linkage through the secondary coil is constant, no e.m.f. and no current are induced in the secondary coil. 
5. Since wire PQ produces no magnetic field, the compass needle remains undeflected.


## AC Generators
@Image(source: "Diagram_EMI_AC_Generator", alt: "AC Generators")

**Explanation:**
1. The coil is rotated by turning the handle.
2. As the coil rotates between the two magnets, the magnetic flux linkage through the coil changes at a non-uniform rate. (The coil cuts the magnetic field lines at a non-uniform rate.) 
3. By Faraday’s law of electromagnetic induction, an e.m.f. is induced in the rotating coil. Fleming’s right hand rule tells us the direction of the induced e.m.f. in sides AD and BC.
4. In the closed circuit, the induced alternating current flows through the coil, the 2 slip rings, the carbon brushes and the bulb. 

Function of the 2 slip rings The 2 slip rings maintain continuous electrical contact between the rotating coil and the external circuit via the carbon brushes, so that the induced current flows through the closed circuit.

@Image(source: "Graph_EMI_AC_Generator", alt: "AC Generator Graph")

The maximum induced e.m.f. of an a.c. generator can be increased by increasing the rate at which the coil cuts the magnetic field lines, e.g. by:

- increasing the number of turns of the coil
- increasing the magnetic field strength (e.g. stronger magnets)
- increasing the speed of rotation of the coil
- winding the coil on a soft iron core (to strengthen the magnetic field through the coil)

The maximum induced current can be increased by increasing the induced e.m.f. or by decreasing the resistance of the coil.

## Transformers

A transformer is a device that can change a large alternating voltage (with a small current) to a small alternating voltage (at large current), and vice versa. 

> A transformer does not work on direct current (d.c.) because a changing magnetic field is required to induce an e.m.f. in the secondary coil.

1. The alternating input voltage `V_P` produces an alternating current `I_P` through the primary coil. Current `I_P` produces an alternating magnetic field (which alternately increases and decreases in strength).
2. The laminated soft iron core **redirects** the alternating magnetic field produced by the primary coil toward the secondary coil.
3. By Faraday’s law of electromagnetic induction, the changing magnetic flux linkage through the secondary coil induces an alternating output voltage `V_S` in the secondary coil. 
4. Since the secondary coil is part of a closed circuit, the alternating output voltage `V_S` produces an alternating current `I_S` through the secondary coil and the load.

@Image(source: "Diagram_EMI_Laminated_Iron_Core", alt: "Laminated Soft Iron Core")

> Laminated Soft Iron Core: many thin sheets of iron stacked together 
> 
> Redirects the eddy currents induced in an iron core and reduced unwanted wasted energy

### Power Transmission

The transformer allows the alternating input voltage, V_P, and the alternating output voltage V_S to differ, by having a different number of turns in the primary and secondary coils.

```math
\frac{V_P}{V_S} = \frac{N_P}{N_S}

\text{Step Up Transformer: }\frac{V_P}{V_S} = \frac{N_P}{N_S} > 1
\text{Step Down Transformer: }\frac{V_P}{V_S} = \frac{N_P}{N_S} < 1
```

where:
- `V_P` is the voltage in the primary coil
- `V_S` is the voltage in the secondary coil
- `N_P` is the number of turns in the primary coil
- `N_S` is the number of turns in the secondary coil

### Efficiency of a Transformer

The efficiency of a transformer is given by the formula:

```math
\text{Efficiency} = \frac{\text{Output Power}}{\text{Input Power}} \times 100\%

\text{AND}

\text{Efficiency} = \frac{V_S I_S}{V_P I_P} \times 100\%
```

where:
- `Output Power` is the power output of the secondary coil
- `Input Power` is the power input to the primary coil
- `V_P` is the voltage in the primary coil
- `V_S` is the voltage in the secondary coil
- `I_P` is the current in the primary coil
- `I_S` is the current in the secondary coil

> The efficiency of a transformer is always less than 100% because some energy is lost as non-useful forms. 


Energy is wasted due to:
- energy being transferred to the internal stores of the coils when current flows through them, since the coils have some resistance.
- energy being transferred to the internal store of the core when eddy current flows through core, since the core has some resistance.
- leakage of magnetic field lines between the primary and secondary coils.
- hysteresis loss caused by the flipping of the magnetic domains in the core due to the alternating magnetic field produced by the primary coil. Energy is transferred to the internal store of the core.