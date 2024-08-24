# Electromagnetism

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

When magnets and electricity kiss and have a baby called force

## Overview

- Magnetic effect of a current
- Force on a current-carrying conductor
- The d.c. motor

## Magnetic Effect of a Current

Current produces a magnetic field around it. This is the basis of electromagnetism.

### Magnetic Field Around a Wire

@Image(source: "Diagram_Magnetic Field Around Wire", alt: "Magnetic field around a wire")

This diagram shows how the magnetic field around a wire is circular. The direction of the magnetic field can be determined using the right-hand grip rule.

To easily remember the dot and cross notation for the magnetic field, remember that 
- ⊙ the dot represents the tail of an arrow
- ⊗ the cross represents the head of an arrow

Magnetic fields of a long, straight current-carrying conductor are represented by concentric circles which are centered at the conductor itself. The closer 
the field lines, the greater, the magnetic field strength (or the stronger the magnetic field). In the diagram, you can see that the magnetic field lines are
closer together near the wire, and further apart as you move away from the wire.

Note that a solenoid is basically this effect compounded many times. Use the right hand rule, as lined out in <doc:Magnetism#Magnetisation-of-Magnetic-Materials>.

### Factors Affecting a Solenoid's Magnetic Field

The magnetic field can be increased by:
- Increasing the current (increase the magnetic field strength per coil)
- Increasing the number of turns in the coil (increase the number of compounding magnetic fields)
- Inserting a soft iron core (focus the magnetic fields, increasing the magnetic field strength)

### Applications in Real Life

One underrated thing about electronics that make them so overpowered is that it has _no moving parts_. Unlike pre-electricity machines, which had to rely on
mechanical parts to move and do things, electronics use electrons and fancy science.

To convert between the stationary electronics and actual force, we use electromagnetism. This is the basis of many things, such as:

#### Electric Bell

@Image(source: "Diagram_Electric Bell", alt: "Electric Bell")

1. When the switch is pushed, the circuit is completed, and current flows through the coil.
2. Current flows through the coils
3. The soft iron core becomes magnetised
4. The soft iron armature is attracted to the core, and the hammer strikes the bell
5. The circuit is broken by the movement of the soft iron armatur
6. Hence, the soft iron core is no longer magnetised, and the soft iron armature returns to its original position
6. The circuit is completed again, and the process repeats

#### Circuit Breakers

Circuit breakers work because normal amounts of current flowing through the solenoid is not enough to produce a strong enough magnetic field
to attract the soft iron latch.

@Row {
    @Column {
        @Image(source: "Diagram_Breaker_Normal", alt: "Circuit Breaker under normal operation")

        - When the current is within the limit, the magnetic field is not strong enough to attract the soft iron latch
        - The circuit remains closed, and the current flows as per normal
    }

    @Column {
        @Image(source: "Diagram_Breaker_Tripped", alt: "Circuit Breaker under overload")

        - Current surge occurs
        - The larger current produces a stronger magnetic field
        - The magnetic field is strong enough to attract the soft iron latch
        - The latch releases the spring, which causes the safety bar to move outwards
        - The circuit is broken, and the current stops flowing
        - It can be reset by pushing the safety bar back in
    }
}

## Force on a Current Carrying Conductor

When current flows perpendicular to a magnetic field, a force is exerted on the conductor in the direction perpendicular to both the current and 
the magnetic field. This force is known as the Lorentz force.

### Lorentz Force

@Row {
    @Column {
        @Image(source: "Example_Lorentz Force", alt: "Lorentz Force")
    }

    @Column {
        In this example, the current is flowing from front to back, and the magnetic field is from top to bottom. The default direction of force is to the left 
        (see <doc:#Fleming's-Left-Hand-Rule> below).

        | Cases | Change |
        |-------|--------|
        | Reduce spacing between magnets | Increase in force |
        | Increase current | Increase in force |
        | Increase magnetic field strength | Increase in force |
        | Reverse direction of current | Reverse direction of force |
        | Reverse direction of magnetic field | Reverse direction of force |
    }
}

The reason why the force is induced is quite complex and is not tested, but for your curiosity this is how it works.

@Image(source: "Diagram_Lorentz Force", alt: "Lorentz Force")

- The diagram shows how the magnetic fields, produced by a current-carrying wire and a pair of magnets, interact with each other.
- There is a stronger magnetic field on one side of the wire at A. All the magnetic field lines at A act in the same direction.
- There is a weaker magnetic field on one side of the wire at B. The magnetic field lines of the current carrying conductor act in the opposite direction
of that of the magnet.
- The interaction between the current flowing in the conductor and the external magnetic field produced a force acting on the conductor.
- The direction of the force acting on the conductor can be determined by Fleming’s left hand rule.

### Fleming's Left Hand Rule

Fleming’s left-hand rule is used to find the direction of force when the direction of magnetic field and conventional current are known.

@Image(source: "Diagram_Fleming's Left Hand Rule", alt: "Fleming's Left Hand Rule")

The first three fingers are positioned at right angles (90˚) to each other.

- Thumb: Force on conductor
- Pointer finger: Field (magnetic field)
- Middle finger: Conventional Current

### Force on a Moving Charge in a Magnetic Field

Fleming’s left-hand rule can be applied to all moving charges. Remember that it follows the direction of current, not the direction of electron flow. If the charged particle
is an electron, the direction of the current is opposite to the direction of the electron flow.

@Image(source: "Diagram_Circular Force", alt: "Force makes the charge move in a circle")

While an electric force is always exerted on a charge within an electric field, a magnetic force is only exerted on a charge within a magnetic field if it is moving.
- For a stationary charge within a magnetic field experiences zero magnetic force.
- For a moving charge, the direction of the force acting on the charge is perpendicular to the direction of travel.
- The moving particle is deflected in a circular path towards the centre of the circle.
- The smaller the mass of the particle, the tighter the circle (note that the magnetic force is the same for electrons and protons, but the mass of the electron is much 
smaller than that of the proton so the circle is much tighter).

#### Calculating Magnetic Force

> Note: This is out of syllabus and not tested

**Force on a Moving Charge**

@Row {
    @Column {
        - When a charge moves through a magnetic field at an angle, it will experience a magnetic force.
        - The magnitude of the force F on a charge q moving at a speed v in a magnetic field of strength B is given by

        ```math
        F = B * q * v * \sin \theta
        ```

        where:
        - F is the force (N)
        - B is the magnetic field strength (T)
        - q is the charge (C)
        - v is the velocity of the charge (m/s)
        - θ is the angle between the velocity of the charge and the magnetic field (°)
    }

    @Column {
        @Image(source: "Diagram_Moving Charge", alt: "Magnetic Force on a moving charge")
    }
}

**Force on a Current-Carrying Conductor**

@Row {
    @Column {
        - When a current carrying conductor is placed in a magnetic field at an angle, it will experience a magnetic force.
        - The magnitude of the force F on conductor of length L carrying a current I in a magnetic field of strength B is given by

        ```math
        F = B * I * l * \sin \theta
        ```

        where:
        - F is the force (N)
        - B is the magnetic field strength (T)
        - I is the current (A)
        - l is the length of the conductor (m)
        - θ is the angle between the current and the magnetic field (°)
    }

    @Column {
        @Image(source: "Diagram_Current Conductor", alt: "Magnetic Force on a current-carrying conductor")
    }
}

## DC Motors

A d.c. motor converts **electrical energy** into **mechanical energy**. It consists of the following components:
1. Rectangular coil connected in series to a battery and rheostat
2. Permanent magnets
3. Spilt-ring commutator
    - The ends of the coil are fixed to the split-ring commutator (X and Y).
    - The commutator rotates with the coil.
4. Two carbon brushes
    - The carbon brushes rub against the commutator and keep the coil connected to the battery.

@Image(source: "Diagram_DC Motor Components", alt: "DC Motor")

5. When the switch is closed, current will flow through the (rectangular) conducting coil.
6. The sides of the coil lie in between two permanent magnet.
7. Forces are produced on the current-carrying wires of the coil by the magnetic field (apply Fleming’s left-hand rule), which cause the 
coil to rotate about its axle (along dotted line).
8. The ends of the rotating coil are connected to two halves of a copper ring (XY) known as the split ring commutator and they rotate
together with the coil.
9. Electric current is passed from the circuit to the two halves of the copper ring via two separate carbon brushes.
10. The rheostat is used to control the amount of current in the coil, which affects the strength of magnetic forces produced on the sides 
of the coil, the amount of the moment of these forces about PQ and hence the rotational speed of the coil.

@Image(source: "Diagram_DC Motor Forces", alt: "Forces on a DC Motor")

11. When an electric current flows through the coil ABCD, a downward force is produced on side AB and an upward force on side CD (using 
Fleming’s left-hand rule). This causes the coil to rotate anticlockwise about axis PQ.

@Row {
    @Column {
        @Image(source: "Diagram_DC Motor Split Ring", alt: "Split Ring")
    }

    @Column {
        12. But when the rotating coil reaches vertical position, the split ring commutator (X and Y) loses contact with the carbon 
        brushes, causing the current to be cut off and the forces to disappear.
        13. However, the inertia of the rotating coil keeps it rotating and the commutator to make contact with the brushes again 
        but in the reverse manner.
    }
}

14. This reverses the current direction in the coil, and consequently side AB now gets an upward force while CD gets a downward force.
15. This allows the coil to continue rotating in the same anticlockwise direction.

### Factors Affecting the Speed of a DC Motor

The speed of a d.c. motor can be increased by:
- Increasing the current in the coil
- Increasing the number of turns in the coil
- Increasing the strength of the magnetic field
- Inserting a soft iron core into the coil