# Practical Electricity

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Unfortunately, we can't stay in theory-land forever. Electricity needs to be useful somehow.

## Overview

- Electrical working, power and energy
- Dangers of electricity
- Safe use of electricity in the home

## Heating

> Definition: Heating Effect of Electric Current: The heating effect of an electric current is the production of heat in a conductor when a current flows through it.

When a current flows through a conductor, the electrons collide with the atoms in the conductor. This causes the atoms to vibrate more, which is felt as heat.

Usually, heating elements are made of nichrome because it is highly resistant to heat and has a high melting point.

## Electrical Power Consumption

Electrical components have several ratings that are important to know when using them. These include:
- Voltage rating, which is the voltage it is designed to operate at (it will usually start to fail above this rating)
- Power rating, which is the power the component draws at its operational voltage
- AC frequency, which is used by high-power components. You don't need to calculate anything related to AC frequency.

For more on power, see <doc:Current-of-Electricity#Power>.

There are some other formulas which are of particular use when calculating power consumption:
```math
\textrm{Voltage is the work done to move a unit charge from one point to another}
V = W/Q
```
where
- `$V$` is the voltage in volts (V)
- `$W$` is the energy in joules (J)
- `$Q$` is the charge in coulombs (C)

```math
\textrm{Work done is the product of work done, current, and time}
W = V \times I \times t
```
where
- `$W$` is the energy in joules (J)
- `$V$` is the voltage in volts (V)
- `$I$` is the current in amperes (A)
- `$t$` is the time in seconds (s)

```math
\textrm{The work done by the electric current is the electrical energy delivered}
E = W
```
where
- `$E$` is the electrical energy in joules (J)

## Calculating Electrical Cost

- Each month, every household is billed for the amount of electrical energy they consume throughout the month
- An electricity meter measures the amount of electrical energy consumed in kilowatt-hours (kWh)
- The cost of electricity is based on the energy unit of kilowatt-hours (kWh)

```math
1 \textrm{ kWh} = 1000 \textrm{ W} \times 3600 \textrm{ s} = 3.6 \times 10^6 \textrm{ J} = 3.6 \textrm{ MJ}
```

One kilowatt-hour is the energy consumed by a 1 kW appliance in one hour.

Electricity is sold at a rate, in dollars per kilowatt-hour ($/kWh). Its usually equal to something between $0.12 and $0.25.
The cost of electricity can be calculated using the formula:
```math
\textrm{Cost} = E \times \textrm{Cost per kWh}
```

## Dangers of Electricity

Electricity can kill human beings (or really any living being) directly:
- The human body can withstand a current of about 50mA (current is the one that kills. Higher voltage just means more current.)
- Large amount of current can cause burns or damage organs
- Electric current can cause involuntary muscle contractions. If this happens to the heart, it may cause it to stop.

It can also kill indirectly through fires.

These hazards occur in three ways:
- Damaged insulation
- Overloading of cables
- Damp conditions

### Damaged Insulation

- Insulation is used to prevent electric current from flowing through the wrong path
- If insulation is damaged (such as through fraying), the uninsulated wires may be exposed
- Current from the wires may flow through the wrong path, causing
    - A short circuit, which can cause fires
    - Electric shock

### Overloading of Cables

- Cables have a maximum current they can carry
- A large amount of current may pass through wires or plugs when too many components are connected together
- This can cause the cables to overheat, which can cause fires

### Damp Conditions

- Impure or contaminated water is a good conductor of electricity
- When water gets into electrical appliances, the water conducts electricity from the electrical element to the human body
- This can cause electric shock

## Safe Use of Electricity in the Home

There are several ways to ensure that electricity is used safely in the home:
| Device | Details |
| --- | --- |
| 3-pin plug | fuse, earth wire, cable grip, double insulation |
| Fuses in devices and 3-pin plugs | breaks the circuit when there is excessive current flowing in the device or 3-pin plugs |
| Earthing of metal casings of devices | provides a very low resistance path for sudden surge of current (when casing becomes live) |
| Double insulation of devices | prevents casing from coming into contact with live wire in the event of electrical faults |
| Placement of switch on live wire | always positioned at the live wire to cut off the appliance from high voltage mains effectively |
| Circuit Breakers | Mini-circuit breakers, Earth-leakage circuit breakers |
| Household main electrical wiring system | circuit breakers - breaks the circuit when there is excessive current flowing in circuit |

### 3 Pin Plug

The 3-pin plug has three pins: live, neutral, and earth
- Live: Carries the current to the appliance
- Neutral: Completes the circuit
- Earth: Provides a path for the current to flow to the ground if the live wire comes into contact with the casing

It also includes a fuse, which breaks the circuit if the current is too high.

### Fuses

Fuses are used to break the circuit when there is excessive current flowing in the device or 3-pin plugs. They are made of a thin wire
that melts when the current is too high. This breaks the circuit and prevents the device from being damaged.

Fuses have a current rating. Generally, the current rating of the fuse should be slightly higher than the current that the device
draws. This is to prevent the fuse from breaking when the device is turned on, where it might draw slightly higher current than usual.

The fuse is connected to the LIVE wire, so that the current is cut off before it reaches the appliance. Same logic applies to switches.

### Earthing of Metal Casings of Devices

When appliances have metal bodies, they are at risk of becoming live if the live wire comes into contact with the casing. This can
cause electric shock if someone touches the casing.

Earthing provides a very low resistance path for the sudden surge of current, which prevents the casing from becoming live. This is usually
achieved by an earth wire that is connected to the casing.

### Circuit Breakers

> Definition: Circuit Breaker: A device that automatically breaks the circuit when there is excessive current flowing in the circuit

There are two types of circuit breakers:
- Earth Leakage Circuit Breakers (ELCB): Detects current leakage to the earth and breaks the circuit
- Miniature Circuit Breakers (MCB): Detects excessive current and breaks the circuit

@Row {
    @Column {
        #### Miniature Circuit Breakers

        - Prevents excessive current flow through a circuit by breaking or tripping it.
        - Usually, it is set at 10 A, 15 A or 20 A.
        - When the MCB trips, it means that there is an overloading of devices.
        - It is recommended that some devices are switched off before turning the MCB back on again.
    }

    @Column {
        #### Earth Leakage Circuit Breakers

        - It monitors the current leakage (difference in current between the live and the neutral wire).
            - In normal operation, the current in the live and neutral wire should be the same. A disparity implies that some current is leaking to the earth.
        - When this difference in current is greater than 30 mA, the circuit breaker is tripped.
        - When the ELCB trips, it means that there is a leakage of current through a faulty device.
        - Identify the faulty device and get it repaired or stop using it.
    }
}