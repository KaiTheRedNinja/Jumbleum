# Kinetic Particle Model of Matter

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Everything big is just a bunch of tiny tiny tiny little things whizzing around.

## Overview
- States of matter
- Brownian motion
- Kinetic Particle Model

## States of Matter

| Factor | Solid | Liquid | Gas |
|--------|-------|--------|-----|
| Shape | Fixed | No fixed shape, takes shape of container | No fixed shape, takes shape of container |
| Volume | Fixed | Fixed | No fixed volume, takes volume of container |
| Compressibility | Incompressible | Incompressible | Highly compressible |
| Density | High | High | Low |
| Intermolecular forces | Very strong | Strong | Very weak |
| Separation of particles | Very close | Close | Far apart |
| Arrangement of particles | Regular | Random | Random |
| Motion of particles | Vibrate about fixed positions | Move around each other | Move randomly at high speeds |

TL;DR,
- Solids have fixed shape and volume, and particles are close together and vibrate about fixed positions.
- Liquids have fixed volume but no fixed shape, and particles are close together and move around each other.
- Gases have no fixed shape or volume, and particles are far apart and move randomly at high speeds.

## Brownian Motion
The kinetic model of matter states that all matter is made up of a large number of small
particles (e.g. atoms, molecules, ions) which are in continuous and random motion.

> Definition: Continuous: Particles are always moving, even if you can't see it.
> Definition: Random: Particles move in all directions and at different speeds.

Brownian motion is the random motion of particles in a fluid (liquid or gas) due to collisions
with other particles.

Brownian motion involves two types of particles:
1. The suspended particles (e.g. smoke particles) and
2. The fluid particles (e.g. air molecules, water molecules).

It occurs because:
1. The fluid is made of small, invisible particles that undergo continuous random motion.
2. The fluid particles collide with the suspended particles continuously in random directions, causing
them to move randomly and continuously.
3. This results in brownian motion.

Brownian motion is proportional to the temperature of the fluid. The higher the temperature, the
faster the particles move, and the more collisions occur. Same with lower.

## Pressure in Gas

See <doc:Pressure> for an introduction to pressure.

Pressure is exerted by a gas because:
1. Gas particles are in continuous random motion.
2. Gas particles collide with the walls of the container.
3. The force exerted by the gas particles on the walls of the container is pressure.

Connecting to <doc:Dynamics>:
1. When a gas particle collides with an inner wall of the container, its  velocity changes. Thus, 
during the collision, its acceleration is non-zero.
2. Thus, Newton’s second law suggests that the gas particle experiences a force, F2, by
the inner wall during the collision.
3. Newton’s third law suggests that during the collision, the inner wall experiences a force, F1, 
by the gas particle. F1 and F2 have equal magnitudes and opposite directions.
4. If F is the average of the sum of the forces by all the gas particles on this inner wall, and
A is the area of the inner wall, then the gas pressure, p = F/A

The average KE of particles is directly proportional to the temperature of the gas in Kelvin.
```math
KE_{av, particles} \propto T
```

Gas pressure depends on these two factors:
1. The average force per collision by the gas particles on the inner walls of the container. The 
greater this average force per collision, the greater the pressure. As the absolute temperature 
increases, the average force per collision increases.
2. The frequency of collisions by the gas particles per unit area of the inner walls of the container. 
The greater this frequency of collisions, the greater the pressure.

Note: Each factor individually is not correlated with frequency of collisions, as when one factor
increases, the other may change as well.

## Gas Laws
An extension of the kinetic particle model is the gas laws, which describe the behavior of gases.

The gas laws are:
```math
\textrm{Boyle's Law:}
pV = k

\textrm{Charles' Law:}
\frac{V}{T} = k

\textrm{Avogadro's Law:}
\frac{V}{n} = k
```

The ideal gas law is a combination of Boyle's, Charles', and Avogadro's laws:
```math
pV = nRT
```

where
- `p` is the pressure of the gas in Pascals (Pa)
- `V` is the volume of the gas in cubic meters (m³)
- `T` is the temperature of the gas in Kelvin (K)
- `n` is the number of moles of the gas
- `R` is the ideal gas constant, 8.31 J mol⁻¹ K⁻¹

Basically, when no other factors are changed:
```math
\textrm{Pressure is proportional to temperature}
p \propto T

\textrm{Pressure is inversely proportional to volume}
p \propto \frac{1}{V}

\textrm{Volume is proportional to temperature}
V \propto T
```

You will sometimes need to explain WHY certain things change when other factors are varied. Here
are some example explanations:
- V-T relationship:
    1. As the temperature increases, the average kinetic energy of the gas particles increases.
    2. The average force per collision by the gas particles on the inner walls of the container 
    increases
    3. The walls of the container move apart
    4. As the volume increases, the number of gas particles per unit volume decreases
    5. Gas particles take a longer time to collide with the walls of the container (i.e. the frequency
    of collisions decreases), and collide less frequently
    6. These two counteracting factors ensure a *constant pressure* is maintained