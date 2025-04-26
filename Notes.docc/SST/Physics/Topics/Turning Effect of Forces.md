# Turning Effect of Forces

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

How forces act when they're turning something

## Overview

- Moments
- Equilibrium
- Centre of gravity and stability

## Moment of a Force

> Layman Definition: Moment of a force: The turning effect of a force around a pivot is called 
its **moment**, or torque. It is measured in newton-metres (Nm), and is a vector quantity.

A force about a pivot can produce one of the following:
- A clockwise moment
- An anticlockwise moment
- No moment

> Scientific Definition: The moment of a force about a pivot is the product of the force F and the
perpendicular distance d⟂ from the pivot to the line of action of the force.

```math
\text{Moment} = F \times d⟂
```

where
- `$F$` is the force in newtons (N)
- `$d\perp$` is the perpendicular distance in metres (m)

Note that the unit for moments, Nm, can also be used to describe energy and work done. However, it
is used in a different context here. In moments, the `m` component is the distance from the pivot
to the line of action of the force, while in energy and work done, the `m` component is the distance
moved by the force.

@Image(source: "Diagram_Perpendicular Distance", alt: "Examples of perpendicular distance")

The perpendicular distance is the shortest distance between the pivot and the line of action of the 
force. In the examples above, that would be the 15m line and the 4m line respectively.

The geometry of the object that connects the force to the pivot DOES NOT AFFECT the moment of the force. A
force acting on the end of a 1mm vs 1km rod will have the same moment if their forces are both along the 
same line of action.

## Centre of Gravity

> Definition: The centre of gravity of an object is an imaginary point where the entire weight of
the object seems to act.

For an object of regular shape and uniform density in a uniform gravitational field, the 
centre of gravity is located at its geometric centre.

@Image(source: "Example_CG", alt: "Centre of Gravity of a Regular Object")

The center of gravity of an object may sometimes lie outside the object itself. For example, the
centre of gravity of a ring is at its center, while the centre of gravity of a crescent is outside
the object.

### Finding
To find the centre of gravity of an irregular object, you can use the plumb line method. Hang the
object from a pivot and let it come to rest. The plumb line's string will intersect the centre of
gravity of the object. Repeat this for at least 3 distinct points on the object to find the centre
of gravity, which is the point where the strings intersect.

## Principle of Moments

When an object is in equilibrium, 
- the resultant force acting on it is zero (translational equilibrium), and
- the resultant moment acting on it is zero (rotational equilibrium).

> Definition: The principle of moments states that when a body is in equilibrium, the sum of
clockwise moments about a pivot is equal to the sum of anticlockwise moments about the same pivot.

```math
\text{Sum of clockwise moments} = \text{Sum of anticlockwise moments}
```

Some common misconceptions:
- The pivot is not always at the centre or end of the object
- When an object is in rotational equilibrium, it does not mean that it is translationally in equilibrium
- When an object is in rotational equilibrium, it does not mean that it has no moments (just that net 
moments is zero)
- When an object is in translational equilibrium, it does not mean that it is rotationally in equilibrium
- When an object is in translational equilibrium, it does not mean that it has no forces (just that net
forces is zero)

### Examples

Not gonna put any, just know that this is the rough steps to solving a moment problem:
1. Choose a pivot
2. Equate the CW and ACW moments using the principle of moments
3. Solve for the unknown

Pivots can technically be chosen nearly anywhere, you'll get the same answer, but it's best to 
choose a pivot where the line of action of one of the forces passes through it (such as NCF or weight), 
as that force will produce no moment and simplify calculations.

## Stability

@Row {
    @Column {
        @Image(source: "Diagram_CG_A", alt: "CG within the base")
        
        - The block is rotated slightly clockwise
        - CG is above the base (line of action of weight passes through the base)
        - The perpendicular distance between the pivot and the line of action of the weight is NOT ZERO
        - The weight produces an ACW moment (opposite the clockwise direction the block is rotated by),
        returning the block to its original position
    }

    @Column {
        @Image(source: "Diagram_CG_B", alt: "CG on pivot")
        
        - The block is rotated such that the CG is vertically above the pivot
        - CG is vertically above the pivot
        - Perpendicular distance between the pivot and the line of action of the weight is ZERO
        - Weight produces no moment, and the block remains in its new position at equilibrium
    }

    @Column {
        @Image(source: "Diagram_CG_C", alt: "CG outside the base")

        - Block is rotated further clockwise
        - CG is outside the base
        - Perpendicular distance between the pivot and the line of action of the weight is NOT ZERO
        - Weight produces a CW moment (same as the clockwise direction of the block's rotation), causing 
        the block to fall over
    }
}

Note that in all the examples, the normal contact force by the ground on the pivot produces no moment,
as the line of action of the NCF intersects the pivot.

### Factors affecting stability

There are two factors that affect the stability of an object:
- The height of the centre of gravity
- The base area of the object

Objects with low CGs and large bases are the most stable, and vice versa.

@Image(source: "Diagram_Stability", alt: "Factors affecting stability")

A higher CG or a smaller base area means that, for the same rotation, the perpendicular distance between 
the pivot and the line of action of the weight is larger, producing a larger moment.