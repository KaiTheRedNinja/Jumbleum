# Static Electricity

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

The thing that happens when you get a shock from a doorknob

## Overview
- Electric charge
- Electric field
- Dangers and applications of electrostatic charging

## Electric Charge

> Definition: Electric charge: A property of matter that can be either positive or negative.

There are two types of electric charge: positive and negative. In atoms, protons have a positive charge, 
electrons have a negative charge, and neutrons have no charge. The charge of an electron is equal and 
opposite to the charge of a proton, ie an atom with the same number of electrons and protons is neutral.

Charge is measured in coulombs (C). The amount of charge on an electron is approximately
```math
1.6 \times 10^{-19} C
```

From a neutral state,

| Item | Action | Change in charge |
|------|--------|------------------|
| Electron | Added | Negative |
| Electron | Removed | Positive |
| Proton | Added | Positive |
| Proton | Removed | Negative |
| Neutron | Any | No change |

> Definition: Net charge: The algebraic sum of all the charges in a system.

Since charge is technically a form of energy, it follows the laws of conservation of energy. This means that
the net charge of a closed system is constant.

### Interaction between charges

- Like charges repel
- Unlike charges attract

Thats basically it.

## Electrical Insulators and Conductors

Objects can be classified into two broad categories, as insulators or conductors, based on their ability to 
conduct electricity.

| Factor | Insulators | Conductors |
|--------|------------|------------|
| Motion of charged particles | Charged particles (electrons) are NOT free to move about | Charged particles are free to move about |
| Conductivity | Low | High |
| Method of charging | By friction (eg. rubbing) | By induction |
| Examples | Rubber, glass, plastic | Metals, saltwater, graphite |

## Electrostatic Charging

> Definition: Electrostatics: The study of static electric charges

A material can become **electrostatically charged** when it gains or loses electrons. This can happen through
friction or induction.

### Charging through friction

Some materials, such as silk and glass, gain static charges when they are rubbed together

Example:
- When a glass rod and silk cloth are rubbed together, electrons move from the glass rod to the silk cloth
- The glass rod loses electrons, becoming positively charged
- The silk cloth gains electrons, becoming negatively charged

@Image(source: "Example_Charging by Friction", alt: "Charging by Friction")

Note that the electrons are NOT able to move freely in the silk cloth, and remain at the surface where the 
cloth was rubbed. Only insulators can be charged by friction, by rubbing with another insulator.

The following table shows common interactions, where the first material is rubbed against the second material,
and the first material gains charge (positive), and the second material loses charge (negative).

| Rubbing | With |
|---------|------|
| Glass | Silk |
| Fur | Ebonite rod |
| Perspex rod | Wool |
| Wool | Polythene |
| Hair | Balloon |

### Charging by induction

Conductors cannot be charged by friction because mobile electrons can easily be transferred to and away 
from conductors

Metallic conductors can be charged by induction, where a charged object is brought near (but not touching) a 
conductor, causing the electrons in the conductor to move.

There are generally TWO ways to charge via induction:
- Multiple objects, by conduction and then separating them
- One object, by earthing

One important thing to consider about charges is that charges do not, strictly speaking, "flow". Positive
charges do not actually exist, and the movement of charges is actually the movement of electrons. Make sure
that you refer to the movement of electrons, not charges.

#### Multiple objects

@Row {
    @Column {
        @Image(source: "Diagram_Induction_Multiple_1", alt: "Induction by Conduction method 1 step 1")
    }

    @Column {
        1. Two metal spheres (conductors) are placed on insulating stands, side by side
        2. Move them such that they touch
    }
}

@Row {
    @Column {
        @Image(source: "Diagram_Induction_Multiple_2", alt: "Induction by Conduction method 1 step 2")
    }

    @Column {
        3. A negatively charged rod is brought near (but not touching) the spheres
        4. Like charges repel. Electrons in both spheres are repelled towards the far end of B
        5. Sphere A has excess positive charges
        6. Sphere B has excess negative charges
    }
}

@Row {
    @Column {
        @Image(source: "Diagram_Induction_Multiple_3", alt: "Induction by Conduction method 1 step 3")
    }

    @Column {
        7. While holding the rod in place, move sphere B away from sphere A
        8. Remove the charging rod
    }
}

@Row {
    @Column {
        @Image(source: "Diagram_Induction_Multiple_4", alt: "Induction by Conduction method 1 step 4")
    }

    @Column {
        9. Sphere A is now positively charged
        10. Sphere B is now negatively charged
        11. Spheres A and B have equal charge, but opposite in sign
    }
}

#### One object

@Row {
    @Column {
        @Image(source: "Diagram_Induction_Single_1", alt: "Induction by Earthing")
    }

    @Column {
        1. A positively charged rod is brought near (but not touching) a metal conductor
        on an insulating stand
        2. Unlike charges attract. The electrons (negative charges) in the conductor are attracted towards the end 
        closer the rod
    }
}

@Row {
    @Column {
        @Image(source: "Diagram_Induction_Single_2", alt: "Induction by Earthing step 2")
    }

    @Column {
        3. The sphere is earthed by touching it with a finger
        4. Free electrons move from the earth to the conductor through the person
        5. This neutralises the positive charges on that side of the conductor
    }
}

@Row {
    @Column {
        @Image(source: "Diagram_Induction_Single_3", alt: "Induction by Earthing step 3")
    }

    @Column {
        6. The person's hand is removed
        7. Earthing stops
    }
}

@Row {
    @Column {
        @Image(source: "Diagram_Induction_Single_4", alt: "Induction by Earthing step 4")
    }

    @Column {
        8. The rod is removed
        9. The negative charges in the conductor redistribute themselves evenly
        10. The conductor is now negatively charged
    }
}

## Discharging

> Definition: Discharging: The process of removing excess charge from an object

Discharging is also known as neutralising, as it removes the net charge from an object.

For insulators, there are two ways to discharge:
- Heating
    - Heat from flame ionises surrounding air
    - For a positively-charged insulator, the ions neutralise the excess positive charges
- Humid conditions
    - Water is an electrical conductor
    - For a negatively-charged insulator, excess negative charges are transferred to the water

For conductors, discharging is much simpler. All you need to do is give it a path to discharge 
through, aka earthing.
- When we earth a conductor, we provide a path of low resistance for the charges to flow to or from the
ground
- Excess electrons flow away from the conductor to the ground if it is negatively charged
- Electrons flow from the ground to the conductor if it is positively charged

## Electroscope
> Definition: Electroscope: A device used to detect the presence of electric charges

- In an uncharged electroscope, the leaves hang straight down, parallel to each other
- In a charged electroscope, the leaves repel each other, diverging at an angle

@Image(source: "Diagram_Electroscope", alt: "Electroscope")

1. When a positively charged rod is brought near the electroscope, the electrons in the electroscope are 
attracted towards the cap
2. The leaves are therefore positively charged, and repel each other

Same with negative charges, except the leaves are negatively charged. Like charges repel, so polarity
doesn't matter

## Electric Field

Whenever a force acts without physical contact, we say that a field is present. These forces are 
experienced _without_ the charges touching each other, through the application of an electric field.

> Definition: Electric field: A region where an electric charge experiences an electric force.
> Definition: Electric force: The attractive or repulsive force that charges exert on each other.

### Representing electric fields

Electric fields are represented by field lines.

The direction of the electric field (and by extension the field lines) is the direction of the 
force that a positive charge would experience if placed in the field.

@Image(source: "Diagram_Electric Field_Direction", alt: "Electric Field direction")

The strength of an electric field is represented by the density of the field lines. The closer the lines,
the stronger the field.

@Image(source: "Diagram_Electric Field_Strength", alt: "Electric Field strength")

If the charges are not equal, the field lines will be denser on the side with the higher charge.

When the electric fields are parallel plates, the field lines are straight and evenly spaced. At the edges,
they "bulge" outwards.

## Hazards of Static Electricity

1. Lightning
    - Clouds are charged by friction between water in the clouds and air in the atmosphere
    - Negative charges accululate at the bottom of the cloud
    - These repel electrons in the ground, leaving a positive charge on the earth's ruface
    - When the accumulation of charges is large, air particles are ionised
    - The ionised air conducts electricity, forming a conducting path for electrons in the cloud to reach earth
    - A lightning bolt is formed by electrons travelling down the ionised path
2. Electrostatic discharge (ESD)
    - The sudden flow of electricity between two electrically charged objects
    - Can damage electronic components
    - Can be prevented by grounding objects
3. Vehicles
    - Charges can accumulate on vehicles due to:
        - Friction between tyres and road
        - Friction between vehicle and air
    - When a sudden discharge occurs, it can cause sparks and ignite flammable items
    - Gas tankers use a metal chain at the rear touching the ground to ground the vehicle
    - During refuelling, the vehicle usually also has a ground connection
