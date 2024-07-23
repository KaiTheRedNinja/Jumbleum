# Pressure

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Force exerted over area

## Overview

- Pressure
- Density and fluid pressure

## Pressure

> Definition: Pressure is defined as the **force acting per unit area**

Pressure is a scalar quantity, and is measured in pascals (Pa). It is given by the formula:

```math
\text{p} = \frac{F}{A}
```

where
- `p` is the pressure in pascals (Pa)
- `F` is the force in newtons (N)
- `A` is the area in square metres (m²)

1 Pa = 1 N/m²

Small note about action-reaction pairs when it comes to weight and normal contact force:
- Weight and NCF are NOT action-reaction pairs, as they act on the same object
- CF by the surface and CF on the surface are action-reaction pairs.

## Pressure in Hydraulic Systems

> Definition: Pascal’s principle: When pressure is applied to an enclosed incompressible
liquid, the pressure is transmitted equally to all other parts of the liquid.

@Image(source: "Diagram_Pressure_Hydraulics", alt: "Pressure in a hydraulic system")

- The force Fx is exerted on piston 1. The pressure exerted is defined by:
```math
p_x = \frac{F_x}{A_x}
```
- This pressure is transmitted equally to every part of the liquid, including to point Y.
- A force, FY, is applied onto the base of piston 2.
- Thus,
```math
p_x = p_y

\frac{F_x}{A_x} = \frac{F_y}{A_y}

\frac{F_x}{F_y} = \frac{A_x}{A_y}
```

Since liquid is incompressible, the volume of liquid displaced by piston 1 is equal to the 
volume of liquid displaced by piston 2. Thus,
```math
V_x = V_y
A_x \cdot d_x = A_y \cdot d_y
```

By conservation of energy, the work done on piston 1 is equal to the work done by piston 2.
```math
WD_x = WD_y
F_x \cdot d_x = F_y \cdot d_y
```

In summary,
```math
\frac{F_x}{F_y} = \frac{A_x}{A_y} = \frac{d_y}{d_x}
```

## Liquid Pressure

> Definition: Liquid pressure is the pressure exerted by a liquid at a certain depth.

@Image(source: "Diagram_Pressure_Liquid", alt: "Liquid pressure")

The pressure exerted by a liquid is given by:
```math
p = \rho g h
```

where
- `p` is the pressure in pascals (Pa)
- `ρ` is the density of the liquid in kg/m³
- `g` is the acceleration due to gravity in m/s²

What this means is that pressure exerted at a constant depth and density of liquid is:
- Independent of the shape of the container (even if it goes sideways or whatever)
- Independent of the area of the container

## Atmospheric Pressure

Atmospheric pressure is the pressure exerted by the atmosphere. At sea level, it is 
approximately 101 kPa, or 1 atm.

Note that when calculating pressure, you MUST account for air pressure, especially if 
the container is open. For example, ten meters underwater is not 10m of water pressure,
its 10m of water pressure PLUS 1 atm of air pressure. A general rule of thumb is that
10m of water is approximately 1 atm of pressure.

Air pressure is not linear, so you cannot use the liquid pressure formula to calculate
air pressure.

## Measuring Pressure

### Barometer
A barometer is a device used to measure atmospheric pressure. It works by balancing the
pressure of the atmosphere with the pressure of a column of mercury. 

Pressure can be measured in terms of the height of the mercury column, in mmHg. It can
be converted to pascals by using the liquid pressure formula:
```math
p = \rho g
```
where `ρ` is the density of mercury (aproxx 13600 kg/m³, usually provided by the question) 
and `g` is the acceleration due to gravity.

### Barometer

Similar to a manometer, except that it measures the pressure of a gas in a container
relative to atmospheric pressure. It works by balancing the pressure of the gas with the
pressure of a column of mercury.

@Image(source: "Diagram_Pressure_Manometer", alt: "Manometer")

p0 is the atmospheric pressure
