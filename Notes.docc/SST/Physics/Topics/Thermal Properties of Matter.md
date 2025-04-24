# Thermal Properties of Matter

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

How temperature, energy, and state of matter are related.

## Overview
- Internal energy
- Specific heat capacity
- Melting, boiling and evaporation
- Specific latent heat

## Internal Energy

> Definition: Internal Energy: The total energy posessed by the particles of the object

Internal energy consists of two components:
- Internal kinetic energy: Energy due to the motion of particles. Not to be confused with energy in the
<doc:Energy#Kinetic-Store> of the object (which is energy due to the object's motion).
- Internal potential energy: Energy due to the forces between particles. Closer particles have higher
potential energy.
    - Note something interesting: Internal potential energy is actually always negative. This is because 
    we treat the PE as 0 when the particles are infinitely far apart. Because you need to _add_ energy 
    to move particles away from each other (ie, break intermolecular bonds), the starting potential energy
    is actually negative.

For example, consider two beakers.

| Lower energy 📉 | Higher energy 📈 |
| --- | --- |
| Cold water | Hot water |
| Smaller volume | Larger volume |

There is a very important distinction between temperature and internal energy. Temperature ONLY consists
of the internal kinetic energy of the particles, however IE consists of both internal kinetic and 
potential energy.

## Heat Capacity

> Definition: Heat capacity: The internal energy per unit change in temperature

It is represented by the symbol uppercase `C`, and its unit is J/K (joules per kelvin). It is 
mathematically defined as:
```math
Q=C\Delta \theta
```
where
- `$Q$` is the energy transferred to the object
- `$C$` is the heat capacity
- `Δθ` is the change in temperature

Note that heat capacity refers to an OBJECT, not a material. It is a measure of how much energy is
required to change the temperature of an object by 1K. Objects with more mass will have a higher heat
capacity, even if they are made of the same material.

### Specific Heat Capacity

Heat capacity depends on both mass and material of an object. Specific heat capacity is a measure of
how much energy is required to change the temperature of 1kg of a material by 1K, or heat capacity per
kg.

> Definition: Specific heat capacity: The internal energy per unit change in temperature per unit mass

It is represented by the symbol lowercase `c`, and its unit is J/kgK (joules per kilogram per kelvin).
It is mathematically defined as:
```math
Q=mc\Delta \theta
```
where
- `$Q$` is the energy transferred to the object
- `$m$` is the mass of the object
- `$c$` is the specific heat capacity
- `Δθ` is the change in temperature

## Change of State

@Row {
    @Column {
        @Image(source: "Diagram_State of Matter", alt: "Diagram showing the processes of changing state")
    }

    @Column {
        Energy gained by substance:
        - Melting: Solid to liquid
        - Boiling: Liquid to gas
        - Sublimation: Solid to gas

        Energy lost by substance:
        - Freezing: Liquid to solid
        - Condensation: Gas to liquid
        - Deposition: Gas to solid
    }
}

I don't think I need to explain to you which processes take place where. You should know this.

During state changes, temperature stays CONSTANT, but internal energy INCREASES. This is because the 
energy is used to break the bonds between particles, not to increase the internal kinetic energy of the 
particles.

@Image(source: "Graph_State of Matter", alt: "Graph showing the temperature of a substance over time as it changes state")

Some note about the vocabulary to use here. Use the right terms.
- When melting, energy is being ABSORBED to **WEAKEN**  attractive forces between particles. 
- When boiling, energy is being ABSORBED to **BREAK** attractive forces between particles.

## Latent Heat

> Definition: Latent heat: The energy required to change the state of a substance without changing its 
temperature

Objects have different latent heats for different state changes, but changing between two states will
always have the same latent heat. They also have fun names:
- Melting/freezing: Latent heat of fusion
- Boiling/condensation: Latent heat of vaporization

It is represented by the symbol uppercase `L`, and its unit is J. It is mathematically defined as:

### Specific Latent Heat

> Definition: Specific latent heat: The energy required to change the state of 1kg of a substance
without changing its temperature

It is represented by the symbol lowercase `l`, and its unit is J/kg. It is mathematically defined as:
```math
Q=ml
```
where
- `$Q$` is the energy transferred to the object
- `$m$` is the mass of the object
- `$l$` is the specific latent heat

## Boiling vs Evaporation

Evaporation is similar to boiling because it is a change of state from liquid to gas. However, there
are some key differences:

| Factor | Boiling | Evaporation |
| --- | --- | --- |
| Temperature requirement | Boiling point | Any |
| Location | Throughout the liquid | At the surface |
| Bubbles | Yes | No |
| Temperature change | None | Decrease (Cooling) |
| Energy requirement | External energy required | Energy supplied passively by surroundings |

Evaporation is a cooling process because the particles with the highest kinetic energy are the ones 
that evaporate, leaving the cooler particles behind. This is why you feel cold when you come out of the 
shower.

Factors that affect rate are:
- Temperature of evaporating liquid
- Surface area of liquid
- Movement of air
- Humidity of air
- Atmospheric pressure
- Boiling point of liquid