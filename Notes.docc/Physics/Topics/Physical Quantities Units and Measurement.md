# Physical Quantities Units and Measurement

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

How physical quantities are measured and represented

## Overview

- Physical quantities and SI units
- Measurement
- Scalars and vectors

## SI Units

The International System of Units (French: Système International d'unités; abbreviated as SI) is 
the modern form of the metric system and is the most widely used system of measurement.

### Base Units

Base units are units that cannot be derived from other units. The SI base units are:

| Quantity | SI Unit | Symbol |
| --- | --- | --- |
| Length | metre | m |
| Mass | kilogram | kg |
| Time | second | s |
| Electric current | ampere | A |
| Temperature | kelvin | K |
| Amount of substance (not in syllabus) | mole | mol |
| Luminous intensity (not in syllabus) | candela | cd |

### Compound Units

All other units are compound units, as they are derived from the base units. For example, 
the unit of speed is m/s, which is derived from the base units of length and time.

Other compound units may have special names, such as the newton (N) for force, or the Amperes (A) for current.

Certain compound units may also have several equivalent representations. For example,
gravitational field strength can be represented as `N/kg` or `m/s²`.

## Prefixes and Magnitude

SI units can be combined with prefixes to represent multiples or fractions of the base unit. These
are powers of ten, and are used to simplify the representation of very large or very small quantities.

| Prefix | Order of Magnitude (10^n) | Symbol |
| --- | --- | --- |
| tera | 10^12 | T |
| giga | 10^9 | G |
| mega | 10^6 | M |
| kilo | 10^3 | k |
| deci | 10^-1 | d |
| centi | 10^-2 | c |
| milli | 10^-3 | m |
| micro | 10^-6 | μ |
| nano | 10^-9 | n |

The easiest way to convert between different prefixes is to represent them in the base unit in standard
form, and then convert to the desired prefix.

## Accuracy and Precision

@Row {
    @Column {
        **Accuracy of measurement**
        - Accuracy refers to the closeness of a measured value to a standard or known value.
        - Example: You obtain a mass measurement of 3.2 kg for a given substance, but the actual (known) 
        mass is 10 kg, then your measurement is not accurate.
    }

    @Column {
        **Precision of measurement**
        - Precision refers to the closeness of two or more measurements to each other.
        - Example: If you measure the mass of a given substance five times, and get 3.2 kg each time, 
        then your measurement is very precise.
    }
}

The two are independent of each other. A measurement can be accurate but not precise, or precise but not accurate.

@Image(source: "Diagram_Accuracy Precision", alt: "Targets showing different Accuracy and Precision")

## Errors

Errors in measurement can be classified into two types: random errors and systematic errors.

@Row {
    @Column {
        **Random Errors**
        - It occurs in all measurements.
        - It occurs when an observer estimates the last figure of a reading on an instrument.
        - Causes:
            - human reaction time
            - background noise
            - mechanical vibrations
        - It cannot be predicted.
        - It can be reduced by taking a **large number** of readings and **averaging them**.
    }

    @Column {
        **Systematic Errors**
        - It is not random but constant. 
        - It may cause an observer to consistently underestimate or overestimate a reading.
        - Causes:
            - zero error of an instrument: any indication that a measuring system gives a false 
            reading when the true value of a measured quantity is zero
        - It can be  **eliminated** if we know the **sources of the errors**.
    }
}

## Measuring
Note: This topic is taught in <doc:Kinematics>, however I feel it is more appropriate to include it here.

### Precision

When we measure things, there may be a precision requirement. Different tools have different levels of precision,
and it is important (read: TESTED) which tool to use to obtain a given precision, and vice versa.

The precision of an instrument is the smallest change in the measured quantity that gives an observable 
change in the output of the instrument.
- If you measure the length of an A4 page using a metre-rule, your reading is only
reliable to the nearest 0.1 cm (1 d.p.).
- Given the limitations of the instrument (its divisions are not infinitely closely
spaced), you should not say that the length of an A4 page is 29.70000 m.
- Instead, the length should be reported as “29.7 cm” (1 d.p., same number of d.p.
as the precision of the instrument).

### Measurement of Length

| Instrument | Measuring range | Smallest division / Precision |
| --- | --- | --- |
| measuring tape | 0 m to several metres | 0.1 cm |
| metre rule | 0 cm to 100 cm | 0.1 cm |
| digital calipers | 0 mm to 150 mm | 0.01 mm |
| digital micrometer screw gauge | 0 mm to 25 mm | 0.001 mm |

@TabNavigator {
    @Tab("Meter Rule") {
        If the zero mark has worn off, start measuring from the 1.0-cm mark instead. Then,
        subtract 1.0-cm from the observed reading.

        To reduce parallax error when using a metre rule, position your eye such that
        your line of sight is perpendicular to the rule.

        @Image(source: "Example_Meter Rule", alt: "a Meter Ruler")
    }

    @Tab("Digital Calipers") {
        Digital calipers are used to measure the internal and external dimensions of objects. They are
        digitalised versions and successors to the vernier calipers, which have been taken out of the syllabus.

        - Inside Jaws - Used to measure the internal diameter of an object.
        - Outside Jaws - Used to measure the external diameter of an object.
        - Depth Blade - Used to measure the depth of an object.
    }

    @Tab("Digital Micrometer Screw Gauge") {
        A micrometer screw gauge is used to measure the diameter of thin wires, the thickness of a sheet of metal, etc.

        Turn only the ratchet, not the thimble. Stop turning when a clicking sound is heard. This ensures 
        that you do not squeeze the object when gripping it to measure its length.

        Before use, close the jaws and tare / zero the instrument.
    }
}

### Measurement of Time
Within syllabus, time can only be measured using a stopwatch. The smallest division of a stopwatch is 0.01 s.

## Scalar vs Vector
> Definition: **Scalar**: Scalar quantities are physical quantities that only have magnitude, e.g. a mass of 20 kg
(“Magnitude” means “how much” or “how big”.)
> Definition: **Vector**: Vector quantities are physical quantities that have magnitude and direction. e.g. a 
velocity of 20 m/s eastward

Common scalar quantities include 
- Time
- Mass
- Temperature
Common vector quantities include 
- Displacement
- Velocity
- Acceleration

Note that by "direction", we mean a specific direction in space, not just "positive" or "negative".