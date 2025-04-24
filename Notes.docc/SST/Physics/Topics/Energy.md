# Energy

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Energy and the different ways it can be stored and transferred.

## Overview
- Energy stores and transfers
- Work, power and efficiency
- Energy resources

## Types of Energy Store
- Energy is required for things to work
- The SI unit for energy is the Joule, J

| Store | Description | Tested | Calculatable (at our level) |
| --- | --- | --- | --- |
| Kinetic Store | Energy stored in moving objects | ⬆️ Extensively | ✅ Yes |
| Gravitational Potential Store | Energy stored in objects raised above the ground | ⬆️ Extensively | ✅ Yes |
| Internal (thermal) Store | Energy stored by the particles of an object, usually interpreted as heat | 🫤 Somewhat | ❌ No |
| Nuclear Store | Energy stored in the nucleus of an atom | 👎 Barely | ❌ No |
| Chemical Store | Energy stored in chemical bonds | 👎 Barely | ❌ No |

Note that all these are actually calculatable, but the last three are not tested at the level of 
writing (the O levels). See <doc:Thermal-Properties-of-Matter#Internal-Energy> for more information on 
the internal store.

These are called "stores" due to issues with "gravitational energy" or "kinetic energy" not exactly
being "energy" in the traditional sense, because Einstein. Just remember where you would use a term
like "kinetic energy", use "energy in the kinetic store" instead.

## Transfer of Energy Between Stores

Energy can be transferred between stores. For example, when a ball is thrown upwards, energy is
transferred from the kinetic store to the gravitational potential store. When the ball falls back
down, the energy is transferred back to the kinetic store.

Transfer of energy can be represented by LOL diagrams, which show how energy is transferred due to
a single process. It consists of three parts:
- The left "L"
- The center "O"
- The right "L"

The "L"s are bar charts that show the amount of energy as "units" of energy, under their respective
columns, such as a KE bar or GPE bar. On the left, it represents energy that the cart ALREADY has, and
on the right, it represents energy that the cart has AT THE END. The "O" will have an arrow pointing
in (gains energy) and/or out (loses energy), with an appropriate number of "energy units" to show
how much energy is transferred.

I dislike these diagrams.

### Energy Transfer Examples

- A small block of solid butter at room temperature is placed on a pan that is on an electric
stove. When the electric stove is on, the butter melts after some time.
    - Initially, the butter has energy in the internal store. When the stove is on, energy is
    transferred from the internal store of the heated pan to the internal store of the butter.
- A sound is heard each time a boy hits two cymbals together.
    - Initially, the boy's ears have zero energy in KE. When the cymbals are hit, energy from
    the sound waves through air is transferred to the KE store of the boy's ears.
- When the switch of an electric circuit is initially open, the bulb does not light up. When the
switch is closed, the bulb lights up. The temperature of the bulb also increases.
    - Initially, the bulb has energy in the internal store. When the switch is closed, energy is
    transferred electrically from the chemical store of the battery to the internal store of 
    the bulb, and to light/head energy to the surroundings.

## Conservation of Energy

> Definition: Principle of Conservation of Energy: Energy cannot be created or destroyed but can 
be transferred from one store to another. The total energy in an isolated system is constant.

This means that the total energy in a system is always the same, no matter how it is transferred
between stores. When calculating, remember to account for all the energy stores in the system,
even ones that are not obvious, such as IE of the environment (aka heat loss)

## Calculating Energy in a Store

### Kinetic Store
When an object moves, the energy store of the object by virtue of its motion is known as
kinetic store. If a force moves the object, work is done by the force (see <doc:#Work-Done> below).
```math
KE = \frac{1}{2} m v^2
```
where
- `KE` is the kinetic energy in Joules (J)
- `$m$` is the mass of the object in kilograms (kg)
- `$v$` is the velocity of the object in meters per second (m/s)

Note that because v is squared, velocity has a much larger effect on kinetic energy than mass.
This also means that to double the velocity, you need four times the energy.

### Gravitational Potential Store
When an object is held above the ground, the energy of the object by virtue of its position
above the ground is known as gravitational potential store. For objects near the surface of the 
Earth, the energy in the gravitational potential store can be calculated by:

```math
GPE = m g h
```
where
- `GPE` is the gravitational potential energy in Joules (J)
- `$m$` is the mass of the object in kilograms (kg)
- `$g$` is the acceleration due to gravity in meters per second squared (m/s²)
- `$h$` is the height of the object above the ground in meters (m)

The reason why the object must be close to the Earth's surface is because the acceleration due to
gravity is not constant throughout the Earth, especially at high altitudes like at the ISS.

### Work Done
Work done is _technically_ not a store, but it is the energy transferred from one store to another.
For example:
- Work done to move water up a mountain, transfers energy from the chemical store of the muscles to
the gravitational potential store of the water.
- Work done to move a car across a road transfers energy from the chemical store of the fuel to the
kinetic store of the car.

Work done can be calculated by:
```math
WD = F d
```
where
- `WD` is the work done in Joules (J)
- `$F$` is the force applied in Newtons (N)
- `$d$` is the distance moved in meters (m)

A common example of WD in questions is friction, such as if the question requires you to calculate
the final velocity of a block given the initial velocity, distance, and frictional force.

If no distance is covered, there is no work done. For example, if you push a wall, you do no work
because the wall does not move.

Note that even though the unit _looks_ like Newton-meters, they are NOT the same. Work done is a
scalar quantity of energy, while torque (Nm) is a vector quantity of force.

## Power

> Definition: Power: Work done or energy transferred per unit time

The SI unit for power is the Watt, W, which is equivalent to one Joule per second. See <doc:#Current-of-Electricity>
and <doc:Practical-Electricity> for more information on power.

Power can be calculated by:
```math
P = \frac{E}{t} = \frac{WD}{t}
```
where
- `$P$` is the power in Watts (W)
- `$E$` is the energy transferred in Joules (J)
- `WD` is the work done in Joules (J)
- `$t$` is the time taken in seconds (s)

### Efficiency

In reality, energy output is ALWAYS less than the energy input, due to energy being lost to the
environment as heat, sound, etc. Efficiency is a measure of how much energy is transferred to the
desired store compared to the total energy input.

By the principle of conservation of energy,
```math
E_{input} = E_{output} + E_{wasted}
```

And efficiency is calculated by:
```math
\text{Efficiency} = \frac{E_{output}}{E_{input}} \times 100\%
```

## Energy Resources

The Energy Trilemma is a concept that states that energy resources for Singapore must satisfy
the following requirements:
| Requirement | Description |
| --- | --- |
| Environmental sustainability | Having energy resources that are renewable and have minimum impact on the environment, e.g. solar power |
| Energy reliability | Having diversified energy resources to ensure that the energy supply will not be disrupted |
| Cost | Providing affordable energy prices |

Advantages and disadvantages:
| Resource | Advantages | Disadvantages |
| --- | --- | --- |
| Fossil fuels | Reliable, Cheap | Non-renewable, Produces greenhouse gases |
| Nuclear | Reliable, No greenhouse gases | Expensive, Nuclear waste |
| Biofuels | Renewable, Widely available, Cheap | Produces carbon |
| Wind | Renewable, No greenhouse gases | Unreliable, Noise pollution, Loss of wildlife habitat |
| Tides (KE of water) | Renewable, No greenhouse gases | Expensive, Affects marine life |
| Hydropower (GPE of water) | Renewable, No greenhouse gases | Expensive, Affects environment |
| Geothermal | Renewable, No greenhouse gases | Limited to volcanic areas, Releases poisonous gasses |
| Solar | Renewable, No greenhouse gases | Unreliable, Requires large areas |