# Dynamics

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

The study of the motion of objects and the forces that cause them to move.

## Overview
- Types of forces
- Mass, weight and gravitational field
- Newton’s laws of motion
- Effects of resistive forces on motion

Dynamics entails both <doc:Kinematics> and Kinetics. Kinetics is concerned the 
effect of forces and torques on the motion of bodies that have mass.

## Common types of forces
Forces can be classified into two categories: contact forces and non-contact forces. Contact
forces are forces that act on an object through direct contact with it. Non-contact forces are
forces that act on an object without direct contact with it.

### Contact Forces
- Normal Contact Force
    - The push force exerted by a surface on an object in contact with it
    - NOT the action-reaction pair of weight
- Friction
    - Opposes relative motion between two objects in contact with each other
- Tension
    - Pulls on ends of a taut string or rope
- Drag
    - The resistance felt by an object moving through a fluid

### Non Contact Forces
- Weight / Gravitational force
    - The force of gravity acting on an object
- Electric force (see <doc:Electromagnetic-Induction>)
    - The push/pull force between charged objects
- Magnetic force
    - The push/pull force between magnetic objects

### Mass vs Weight
Mass is a measure of how much matter is in an object. It is a scalar quantity and is measured in 
kilograms (kg). Weight is the force of gravity acting on an object. It is a vector quantity and 
is measured in newtons (N).

Weight is a force that is dependent on the gravitational field strength of the planet the object is on.
For example, on the moon, your mass would be the same but your weight would be different due to the
weaker gravitational field strength.

To measure mass, you need to *compare* it with another known mass, such as on a balance. To measure weight,
you need to use a spring balance or a newton meter.

### Gravitational field and Gravitational field strength
A gravitational field is a region in which a mass experiences a force due to gravitational
attraction.

The gravitational field strength, g, is the gravitational force acting per unit mass on an object.
```math
W = mg
\textrm{Thus, } g=\frac{W}{m}
```

There is a gravitational field surrounding all objects that have mass (e.g. planets).
- The gravitational field of a planet is directed toward the center of mass.
- Another mass, m2, in the gravitational field of the planet will experience an
attractive force toward the centre of the planet.
- The larger the mass of the planet, m1, the stronger the gravitational field
surrounding the planet, and the **greater** the magnitude of the gravitational force
the planet exerts on mass m2.
- Notice that the gravitational field lines are spaced further apart further from the
planet. The distance away a location is from the surface of the planet, the
**weaker** the gravitational field at that location, and the **smaller** the gravitational
force the planet exerts on another mass (m2) at that location.

## Scalar and vector addition
Scalars can be added algebraically, just like 1+1=2. Vectors, however, have both magnitude and direction.
They need to be treated more carefully.

The sum of several vectors is a resultant vector.

A special case is the vector sum of all forces on one object. This is called the net force, or `F_net`,
usually denoted with a two-headed arrow `↠`.

Adding vectors in one-dimension is easy, its just as if you were adding positive and negative scalars.
I'm not going to write too much about this because its not difficult.

### 2D Force Resolution
Note: This is not the method taught in mainstream, however it is far more effective and accurate.

@Image(source: "Diagram_Vector addition", alt: "vector addition")

If the sum of force A and force B equals resultant force R, i.e.
```math
A + B = R
```
then the sum x-components of A and B equals the x-component of R
```math
Ax + Bx = Rx
```
and the sum y-components of A and B equals the y-component of R
```math
Ay + By = Ry
```

To determine the horizontal and vertical components of a vector, use trigonometry.
```math
Ax = A \cos(\theta)
Ay = A \sin(\theta)
```

See <doc:Kinematics#Vector-Resolution> for more information on vector resolution.

## Free-body diagrams
Free-body diagrams are sketches that help us visualize the forces acting on
one object at a particular instant.

An object may be represented by a point (particle) or a simple geometrical shape. (e.g.
circle or rectangle)
> Recommendation: If we are not interested in the rotational motion of the object, represent 
it by a point.

Include all forces acting on the object in its free-body diagram.
- A force is represented by a straight arrow.
    - The larger magnitude of the force, the longer the arrow.
    - The direction of the force is the same as the direction of the arrow.
- If the object is not represented by a point, each arrow is drawn from the location
of the force applied.
    - Weight: Arrow is drawn from the centre of gravity.
    - Normal contact force: Arrow is drawn from the contact surface and is
    perpendicular to it.
    - Tension: Arrow is drawn from the point where the string is attached to the
    object and points parallel to the string.
    - Friction: Arrow drawn from the contact surface and is parallel to it.
- If the object is in equilibrium, the sum of the forces acting on it is zero.

- A free-body diagram of an object should not include
    - The net force acting on an object, as it is technically not a force
    - Forces exerted on other objects
    - Forces acting by the object (on other objects)
    - Internal forces
    - Velocity or acceleration vectors (if you want to include them, they should be
    drawn beside the free-body diagram, rather than on it)

## Newton's 3 Laws of Motion

Newton's 3 laws govern how objects move in the presence of forces.

A net force, Fnet, on an object can have the following effects on the motion of the object:
- Move a stationary object, e.g. pushing a trolley from rest
- Stop the object, e.g. friction slowing down the box to a stop
- Increase the speed of the object, e.g. continuing pushing the trolley in the same
direction
- Decrease the speed of the object, e.g. friction slowing down a sliding box
- Change the direction of motion of the object, e.g. hitting a shuttlecock with a
badminton racket.

### Newton's First Law
> Definition: **Newton's First Law**: An object will remain at rest or in uniform motion 
in a straight line unless acted upon by an external force.

In equation form,
```math
\textrm{given } F_{net} = 0N
\textrm{then } v = \textrm{constant}
```

Inertia is the tendency of an object to resist changes in its motion. The more mass an object has,
the more inertia it has.

For example, a person in a car that suddenly stops will continue moving forward due to inertia.
This is why seat belts are important.

### Newton's Second Law
> Definition: **Newton's Second Law**: The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.

In equation form,
```math
F_{net} = ma
```

Newton's first law applies when forces are **balanced**. It is technically a special case of Newton's second law.

Steps for solving problems related to Newton’s first and second laws.
1. Draw a free-body diagram of the object of interest.
2. Beside the free-body diagram, indicate the direction of the acceleration with a
double arrow (↠).
3. Apply “Fnet = m a”.
4. Below “Fnet”, express Fnet in terms of the forces in the free-body diagram. Complete the equation with “= m a”.
    - e.g. “normal contact force – weight = m a”, or more simply, “N – W = m a”.
5. Substitute all known values. Leave any unknown as an algebraic variable. (When forces are balanced, Newton’s 
first law applies, and a = 0 m/s2.”)
6. Usually, there should be one unknown algebraic variable to solve for. Solve for it by making it the 
subject of the equation.

### Newton's Third Law
> Definition: **Newton's Third Law**: For every action, there is an equal and opposite reaction.

If one object (A) exerts a force (F by A on B) on a second object (B), the second
object (B) exerts a force (F by B on A) on the first object (A). These two forces have
equal magnitudes and opposite directions.

In equation form,
```math
F_{A on B} = -F_{B on A}
```

One common misconception is that normal contact force is the action-reaction pair of weight. This is not true.
The normal contact force is the action-reaction pair of the force applied by the object on the surface, which
can be different from its weight due to things like acceleration (eg. NCF would be greater than weight in an
upward accelerating elevator).

### Friction
Friction is a force that opposes the relative motion between two objects in contact with each other.

It is caused due to the irregularities in the surfaces of the objects in contact. Smoother objects
have less friction.

@Row {
    @Column {
        **Positive Effects**
        - Prevents food from slipping when gripping food between chopsticks
        - Friction by the brake pads on bicycle tyres decreases the speed of a bicycle
        - Friction between rubber tires and tar roads allows car to grip the roads properly.
            - To enhance this positive effect, car tyres have grooves that channel water under 
            the tyre away. This helps prevent skidding.

        - Rock climbers use chalk powder that absorbs sweat on their palms. This improves their 
        grip of the rock surface.
        - Rubbing of hands during cold weather or rubbing two pieces of wood to start a fire.

        **Negative Effects**
        - When engines operate, friction
        causes some input energy to be
        converted into sound or thermal
        energy. The useful output energy is
        less than the total input energy.
        Overheating may be dangerous.
        - Causes wear and tear of moving
        parts of shoes, engines, motors and
        machines
    }

    @Column {
        **Reducing negative effects**
        - Polishing surfaces to make them smooth reduces friction, e.g. the pistons and cylinders of an 
        engine are made of highly polished steel or aluminium
        - Lubricants like oil or grease are applied to moving parts to prevent wear and tear. 
        They help smooth over surface irregularities.
        - Ball bearings placed between two moving parts ensure the machines do not rub against each 
        other. They can be found in the wheels of car, bicycles, skates.
        - The layer of air in an air cushion between moving surfaces reduces friction, e.g. hovercrafts 
        and magnetic levitation (Maglev) trains float slightly above the surface so that they can move 
        faster.
    }
}

### Air resistance and terminal velocity
See <doc:Kinematics#Free-fall> for more information on free fall. 

Air resistance is generally proportional to the square of the velocity of the 
object. This means that as the object speeds up, the air resistance acting on it
increases.

Eventually, the air resistance will be equal to the weight of the object, and the
object will no longer accelerate. This is called terminal velocity.

Objects with larger surface area will reach terminal velocity faster than objects
with smaller surface area. Denser air (eg. closer to sea level) will also cause
objects to reach terminal velocity faster.

For example, Ball P and Ball Q have the same size, but Ball Q has a larger mass.
Both balls fall through the air.

@Image(source: "Graph_Air resistance", alt: "a graph of velocity over time")

Initially, the only force experienced by each ball is their weight, each ball initially 
accelerates downwards at 10 m/s2. Both graphs have the same initial gradient of 10 m/s2.

Since a greater air resistance is needed to balance its larger weight, the terminal
velocity of ball Q is greater. Since ball Q has a larger weight, it takes
a longer time for air resistance to balance the weight of Ball Q. Ball Q takes a longer
time to reach terminal velocity.