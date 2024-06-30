# Kinematics

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

The study of the movement of objects without considering the forces that cause the motion.

## Overview
- Speed, velocity and acceleration
- Graphical analysis of motion
- Free-fall

## Distance and Displacement
> Definition: **Distance**: The total length covered by a moving object along its path,
regardless of the direction of motion. It is scalar, represented by `d`, and measured in metres (m).
> Definition: **Displacement**: is the distance measured in a straight line in a specified 
direction, namely from a reference point (e.g. the origin) to the object. It is a vector 
quantity, represented by `s`, and measured in metres (m).

To describe the motion of an object moving along a straight line, we choose a
convenient reference point along the line (e.g. the origin, the initial position of the
object.)

One direction along the line is chosen to be the positive direction.
The other direction is the negative direction.
This choice is known as the sign convention.

When solving problems, specify the direction of motion whenever it may be unclear. For example,
the direction of force exerted by gravity is sometimes taken to be positive, and sometimes negative.

| Type of Motion | +ve direction | -ve direction |
| --- | --- | --- |
| Horizontal | Rightward/Forward | Leftward/Backward |
| Vertical | Upward | Downward |
| East-West | Eastward | Westward |
| North-South | Northward | Southward |
| Other 1D motion | Along initial motion | Opposite to initial motion |

## Vectors in 2 dimensions
A vector is expressed in terms of **perpendicular components**, eg an x and y component
or a horizontal and vertical component.

Alternatively, it can also be expressed in terms of **magnitude and direction**.

### Vector Resolution
> Definition: **Vector Resolution**: The process of breaking a vector into its perpendicular components.

Mnemonic: If the vector lies along the hypotenuse, “close – cos, space – sin”.

@Image(source: "Graph_Vector Resolution", alt: "Vector Resolution")

| If you know | and want to calculate | Method |
| --- | --- | --- |
| vector components x and y | magnitude and direction of vector s | magnitude of s = sqrt(x2 + y2), Use tan-1 to find the direction |
| magnitude |s̰| and direction of vector s̰ | vector components x and y | Vector resolution using `s cos θ` and `s sin θ` |

## Aspects of Motion
Motion is generally described in terms of speed, velocity, and acceleration.

### Speed and Velocity

@Row {
    @Column {
        Speed is the distance travelled per unit time. (“X per unit Y” means X/Y.)
        - Unit: metre per second (m/s OR m s-1)
        - Since distance and time are scalars, speed is also a scalar.
        
        Formula for an object with a constant speed:
        ```math
        v = \frac{d}{t}
        ```

        where v represents speed (do not use s for speed; s already represents
        displacement)
    }

    @Column {
        Velocity is the rate of change of displacement with respect to time.
        - Unit: metre per second (m/s OR m s-1)
        - Vector / scalar = vector. Thus, velocity is a vector
        - The magnitude of the instantaneous velocity is the instantaneous speed.
        - The direction of the instantaneous velocity of an object is its direction of
        motion.
        
        Formula for an object with a constant velocity:

        ```math
        v = \frac{s}{t}
        ```

        where v̰ represents velocity
    }
}

### Acceleration
Acceleration (noun) is the rate of change of velocity with respect to time.
- Symbol: a (Acceleration is a vector quantity.)
- Unit: metre per second squared OR metre per second per second (m/s2 OR m s-2)
- The acceleration of an object is nonzero when
    - its speed changes (eg. speeding up or slowing down),
    - its direction of motion changes (eg. turning), or
    - when both its speed and direction of motion change.

Formula for an object with a constant acceleration:

```math
acceleration = \frac{change in velocity}{time taken}

acceleration = \frac{final velocity - initial velocity}{time taken}

a = \frac{v - u}{t}
```

## Graphs
Movement can be represented graphically using displacement-time, velocity-time, and acceleration-time graphs.

See <doc:Differentiation-and-integration> for more details on how they relate to each other.

Simply speaking,
- A flatline on a DT graph means no motion.
- A flatline on a VT graph means constant velocity, which would be a straight line on a DT graph.
- A flatline on an AT graph means constant acceleration, which would be a straight line on a VT graph, and a curved line on a DT graph.

### Displacement-time graphs
> Definition: **Displacement-time graph**: A graph of displacement against time.

The gradient of a displacement-time graph of an object equals its velocity.

For an object with constant velocity,
```math
v = \frac{s}{t} = \frac{s_f - s_i}{t_f - t_i}
```

@Image(source: "Graph_DT", alt: "Displacement-time graph")

- For an object with a non-constant velocity, to find the instantaneous velocity, find
the gradient of the tangent line.
- The sign of the gradient (+ve ╱ or −ve ╲) represents the direction of motion
(i.e. the sign of the velocity).
- For 1-dimensional motion, the magnitude of the gradient (i.e. the steepness of
the graph) represents the speed (i.e. the magnitude of the velocity).

### Velocity-time graphs
> Definition: **Velocity-time graph**: A graph of velocity against time.

The gradient of a velocity-time graph of an object equals its acceleration.

The area “under” the velocity-time graph of an object equals the change in
displacement (displacement travelled).
- This refers to the area between the of a velocity-time graph of an object and the
time-axis.
- If the velocity-time graph is below the time-axis, the area is considered negative,
i.e. displacement decreases.

For an object with constant acceleration,
```math
a = \frac{v - u}{t} = \frac{v - u}{t_f - t_i}
```

@Image(source: "Graph_VT", alt: "Velocity-time graph")

- For an object with a non-constant acceleration, to find the instantaneous velocity,
find the gradient of the tangent line.

- The sign of the gradient (+ve ╱ or −ve ╲) represents the sign / direction of
the acceleration.

### SUVAT equations for constant acceleration
There are 4 equations that can be used to solve problems involving motion with constant acceleration.
Two of them deal with displacement, the other two with velocity. They assume that acceleration is
constant.

Use the correct SUVAT equation based on the information given in the question, the information you
do not have, and the information you need to find.

@Image(source: "Graph_SUVAT", alt: "SUVAT graph")

Obtaining displacement from initial velocity, acceleration, and time (final velocity not needed):
```math
s = ut + \frac{1}{2}at^2
```

Obtaining displacement from initial velocity, final velocity, and time (acceleration not needed):
```math
s = \frac{1}{2}(u + v)t
```

Obtaining final velocity from initial velocity, acceleration, and time (displacement not needed):
```math
v = u + at
```

Obtaining final velocity from initial velocity, acceleration, and displacement (time not needed):
```math
v^2 = u^2 + 2as
```

## Free fall
If the only force acting on an object is its weight, it is said to be undergoing free fall
(regardless of its direction of motion).

Near to Earth, an object undergoing free fall experiences a downward acceleration of
the same magnitude as the gravitational field strength, g, i.e. `ax = 0 m/s2` and `ay = −10m/s2`.

@Image(source: "Graph_Free fall", alt: "Free fall graph")

Note that, in the image, object C goes up then down, but ALWAYS has a negative acceleration. When
V = 0, the object is at the peak of its motion and is instantaneously at rest.

## Projectile motion in 2 dimensions
Projectile motion is the motion of an object (a projectile) after it is launched in a
gravitational field.

In the simplest case, the only force that the projectile experiences after launch is its
own weight, i.e. air resistance is negligible.

The horizontal velocity and vertical velocity of the projectile are independent of one
another.

Generally, the steps to solving projectile motion problems are:
1. Determine the time of flight. This can be obtained from the vertical motion, as the
time taken for the projectile to reach the peak of its motion is equal to the time taken
for the projectile to fall back to the same height. Solve it as a quadratic equation for `t`.
```math
s_y = u_yt + \frac{1}{2}a_yt^2
```
2. Determine the horizontal range. This can be obtained from the horizontal motion, as
the horizontal range is equal to the horizontal velocity multiplied by the time of flight.
```math
s_x = u_xt
```
3. Solve for whatever they ask for.