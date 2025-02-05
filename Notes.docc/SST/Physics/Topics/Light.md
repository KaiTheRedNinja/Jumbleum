# Light

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Whoever told you light travels in a straight line is a LIAR. Well, sorta.

## Overview
- Reflection of light
- Refraction of light
- Thin converging lenses

## Light

- Light is a form of energy
- Light travels in straight lines
- The path that light travels is called a ray
- Light travels at the speed of light, which is 3.0 x 10^8 m/s, in a vacuum
- Light can be reflected and refracted
- Light is part of the <doc:Electromagnetic-Spectrum>
- Rays of light are reversable. If a ray of light can travel from point A to point B, then a ray of light can 
travel from point B to point A.

## Reflection of Light

> Definition: Reflection: The bouncing back of light rays from a surface.

All surfaces reflect some light.

There are certain terms that are used when discussing reflection of light:

> Definition: Incident ray: The ray of light that strikes a surface.
> Definition: Reflected ray: The ray of light that bounces off a surface.
> Definition: Plame mirror: A mirror that has a flat surface.
> Definition: Normal: A line that is perpendicular to the plane mirror

The Point of Incidence, usually marked with a "P", is the point where the incident ray strikes the surface, and
the incident ray, reflected ray, plane mirror, and normal all meet.

There are two laws that govern reflection:
- First law: The incident ray, reflected ray, and normal all lie in the same plane.
- Second law: The angle of incidence i is equal to the angle of reflection r.

In a plane mirror, the image formed is:
- Laterally inverted
- Same shape, same size
- Upright
- Virtual
    - Cannot be formed on a screen
- Image distance to mirror is the SAME as object distance from mirror

### Reflection Ray Diagram

Reflection ray diagrams are diagrams that show the path of light rays as they reflect off a surface.

This is how you draw them:

@Row {
    @Column {
        @Image(source: "Diagram_Ray_Step 1", alt: "Step 1 of drawing a ray diagram")
    }

    @Column {
        1. Draw a dotted line from object O, perpendicular to the mirror. Extend the mirror if nescessary.
        2. Label image I, such that object distance = image distance.
    }
}

@Row {
    @Column {
        @Image(source: "Diagram_Ray_Step 2", alt: "Step 2 of drawing a ray diagram")
    }

    @Column {
        3. Using a dotted line, draw the virtual ray from image I to the point of incidence
        4. Using a solid line with an arrowhead, draw the reflected ray from the point of incidence to the eye
    }
}

@Row {
    @Column {
        @Image(source: "Diagram_Ray_Step 3", alt: "Step 3 of drawing a ray diagram")
    }

    @Column {
        5. Using a solid line with an arrowhead, draw the incident ray from object O to the point of incidence
        6. Verify that angle of incidence = angle of reflection
    }
}

Very importantly MAKE SURE that arrows are going FROM object O, TO the eyes, not from eyes to the object.

If the object is a point, draw TWO RAYS from the object to the top and bottom of the eye. If the object is anything
more than a point (a line or a 2d object), draw TWO RAYS from the top and bottom of the object to the PUPIL of 
the eye. There should ALWAYS be two rays drawn.

### Types of Reflection

There are two types of reflection: Regular and irregular. The same laws of reflection apply to both types of
reflection.

Regular reflection:
- On smooth surfaces
- Parallel incident rays have parallel reflected rays
- Reflected rays travel in the same direction

Irregular reflection:
- On rough surfaces
- The normal at different points on the surface are not parallel to each other
- Parallel incident rays do not have parallel reflected rays
- Reflected rays travel in different directions
- Overall image is diffused

## Refraction

> Definition: Refraction: The bending of light rays as they pass from one optical medium to another with a 
different refractive index

When light passes from one medium to another, it changes speed. This causes the light to bend. The amount of bending
depends on the speed of light in the two media, which is defined by the refractive index of the media.

@Image(source: "Diagram_Refraction", alt: "Refraction of light")

The terms here are identical to those in reflection, except that the laws are different.

### Refractive Index

> Definition: Refractive Index: the ratio of speed of light in vacuum to the speed of light in the medium

```math
n = \frac{c}{v}
```

Where:
- `n` is the refractive index
- `c` is the speed of light in a vacuum
- `v` is the speed of light in the medium

n is always >= 1. Common examples include:

| Medium | Refractive Index |
|--------|------------------|
| Vacuum | 1.0000           |
| Air    | 1.0003           |
| Water  | 1.333            |
| Glass  | 1.5              |
| Diamond| 2.42             |

### Snell's Law of Reflection

> Definition: Snell's Law: For any two given media, the ratio of the sine of the angle of incidence i to the sine
of the angle of refraction r is a constant.

```math
\frac{\sin i}{\sin r} = \frac{v_r}{v_i} = \frac{n_i}{n_r}

sin{i}n_i = sin{r}n_r
```

Where:
- `i` is the angle of incidence
- `r` is the angle of refraction
- `v_i` is the speed of light in the first medium
- `v_r` is the speed of light in the second medium
- `n_i` is the refractive index of the first medium
- `n_r` is the refractive index of the second medium

Special cases:
- When the angle of incidence is 0, the angle of refraction is also 0. The refractive index cannot be 
determined due to divide by 0 error

### Effects of Refraction

Objects can appear "bent" when viewed through glass or water

Depth can also appear shallower than it actually is, as defined by the formula:

```math
n = \frac{\text{apparent depth}}{\text{real depth}}
```

This is because light bends away from the normal when exiting an optically dense medium into air, causing
the object to look more shallow than it really is

Light can also be dispersed (imagine the rainbow prism in your head), because different colors of light
refracts differently. Red, with the lowest amount of energy, refracts the least, while violet, with the highest
amount of energy, refracts the most.

### Total Internal Reflection

> Definition: Total Internal Reflection: The complete reflection of a light ray in an optically denser 
medium at the boundary of an optically less dense medium

> Definition: Critical Angle: The angle of incidence that results in an angle of refraction of 90 degrees

When the angle of incidence is greater than the critical angle, total internal reflection occurs, as if the
boundary is a mirror.

The critical angle can be derived by this equation:
```math
n = 1/sin{c}
```

Where:
- `n` is the refractive index of the optically denser medium, assuming the less dense medium is air or vacuum
- `c` is the critical angle

### Optical Fibre

Optical fibre is used to transmit data via light or infrared radiation.

@Image(source: "Diagram_Optical Fibre", alt: "Optical Fibre")

- To prevent light rays from escaping the sides of the glass core, the core is surrounded by a cladding.
- This cladding has a lower refractive index
- Each light ray reaches the foundary at an angle > critical angle, causing total internal reflection
- Each ray entering the fibre at one end will leave the fibre at the other end, even if the fibre bends

Compared to copper, they can:
- Carry information faster
- Lose less information
- Be resistant to electromagnetic interference
- Be cheaper

## Thin Converging Lens

Note that thin lenses are assumed to be thin enough that the thickness of the lens can be ignored. We study
only converging lenses in the O level syllabus.

@Image(source: "Diagram_Converging Lens_Parallel Rays", alt: "Thin converging lens")

A lens has six important components:
1. Principal axis: The line passing through the optical center and the center of curvature
2. Optical center: The point where the principal axis intersects the lens
3. Focal point: The point where rays parallel to the principal axis converge
4. Focal length: The distance between the optical center and the focal point
5. Object distance: The distance between the object and the optical center
6. Image distance: The distance between the image and the optical center

### Converging Ray Diagram

This is how you draw them:

@Row {
    @Column {
        @Image(source: "Diagram_Converging Lens Rays_Step 1", alt: "Step 1 of drawing a ray diagram")
    }

    @Column {
        1. An incident ray parallel to the principal axis passes through the focal point
    }
}

@Row {
    @Column {
        @Image(source: "Diagram_Converging Lens Rays_Step 2", alt: "Step 2 of drawing a ray diagram")
    }

    @Column {
        2. An incident ray passing through the optical center continues in a straight line
    }
}

@Row {
    @Column {
        @Image(source: "Diagram_Converging Lens Rays_Step 3", alt: "Step 3 of drawing a ray diagram")
    }

    @Column {
        3. An incident ray passing through the focal point emerges parallel to the principal axis
    }
}

Use two rays to draw the image. The image is where the two rays intersect.

If the rays do not intersect on the opposite side, use dotted lines to extend the rays until they intersect
on the same side as the object. If they don't meet at all... welp

### Image Characteristics

| Distance | Image Position | Image Size | Image Orientation | Image Type | Example Use |
|----------|----------------|------------|-------------------|-----------| ------- |
| infinity | F              | Tiny       | Inverted          | Real      | Telescope |
| > 2F     | Between F and 2F | Small     | Inverted          | Real      | Microscope |
| Exactly 2F | 2F             | Same size  | Inverted          | Real      | Camera |
| 2F to F  | Beyond 2F      | Larger     | Inverted          | Real      | Projector |
| F        | At F           | Way larger   | Upright          | Virtual | Nothing |
| < F      | Between F and lens | Larger  | Upright          | Virtual | Magnifying glass |

