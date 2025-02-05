# General Properties of Waves

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Waves transfer energy without transferring matter

## Overview
- Describing wave motion
- Wave properties
- Sound

This is a chonky chapter so get ready

## Waves
> Definition: Wave: a disturbance that propagates through space, transferring energy with it, but not 
matter.

A wave is made up of a **periodic** motion, one that repeats at regular intervals.

One way to represent most waves is with a sine curve. The amplitude of the wave is the maximum 
displacement from the equilibrium. By adding multiple waves, we can create a complex wave.

There are generally three types of waves:
1. Electromagnetic waves (eg. light)
2. Mechanical transverse waves (eg. rope)
3. Mechanical longitudinal waves (eg. sound)

## Wave Motion

Waves have two types of motion.
> Definition: Transverse wave: A wave in which the particles of the medium move perpendicular to the
direction of the wave.
> Definition: Longitudinal wave: A wave in which the particles of the medium move parallel to the 
direction of the wave.

@Image(source: "Diagram_Wave Motion", alt: "Wave Motion")

## Wave Terms

MEMORISE these:

| Term | Description |
| --- | --- |
| Crest | Highest point of a transverse wave |
| Trough | Lowest point of a transverse wave |
| Equilibrium | Position of no displacement, aka rest position |
| Compressions and Rarefactions | High and low pressure regions in a longitudinal wave |
| Amplitude | Maximum displacement from the equilibrium |
| Wavelength | Distance between two adjacent points in phase |
| Displacement | Distance from the equilibrium |
| Phase | Position in the wave cycle |
| Period | Time taken for one complete cycle, 1/F |
| Frequency | Number of cycles per second, 1/T |
| Waveform | Shape of the wave |
| Wavefront | An imaginary line connecting all points in phase |

## Representations

Waves can only be represented completely with both:
- Displacement-Displacement graph (wavelength)
- Displacement-Time graph (period and frequency)

Both provide the amplitude of the wave. Note that when measuring wavelength or period, measure the wave
from points AT THE SAME PHASE on the wave. Points with the same displacement may not be in phase. If in
doubt, measure from peak to peak.

@Image(source: "Graph_Rarefaction Compression_DT", alt: "Displacement-Time Graph of sound wave")

It is a common misconception that the peaks and troughs correspond to the compressions and rarefactions
of a sound wave. This is incorrect. In actuality, the intersections with the equilibrium correspond to 
the compressions and rarefactions. This is best explained mathematically:
```math
\text{At } s = 0 \text{ and } \frac{ds}{dt} > 0 \text{ means displacement has been increasing, aka compression}

\text{At } s = 0 \text{ and } \frac{ds}{dt} < 0 \text{ means displacement has been decreasing, aka rarefaction}
```

## Speed of Waves

In the time of 1 period, T, the crest of a wave moves 1 wavelength, λ. Therefore, the speed of a wave is
given by:
```math
v = \frac{\lambda}{T} = \lambda f
```
where
- v is the speed of the wave
- λ is the wavelength
- T is the period
- f is the frequency

## Wave Reflection and Refraction

When a fluid wave hits a boundary, it can be reflected. The angle of incidence is equal to the angle of 
reflection. This is identical to the law of reflection for light.

@Image(source: "Diagram_Wave Reflection", alt: "Wave Reflection")

When a wave passes from one medium to another, it can be refracted. The angle of incidence is not equal
to the angle of refraction. Also identical to the law of refraction for light.

@Image(source: "Diagram_Wave Refraction", alt: "Wave Refraction")

- Waves travel at a higher speed in deep water, so `v` decreases as the wave enters shallower water.
- Frequency, f, remains constant as it is determined by the source.
- Wavelength, λ, decreases. Wavefronts are more closely spaced.
- The wave bends **towards** the normal. The angle of refraction, r, is less than the angle of 
incidence, i.
- The wavefronts are CONNECTED at the boundary.

## Sound

> Definition: Sound: A longitudinal wave travelling in the air, caused by a vibrating source.

Sound waves are propagated by:
1. Layers of air are undisturbed
2. When the sound source vibrates, a region of compressions and rarefactions are produced
3. The compressions and rarefactions travel through the air
4. The compressions and rarefactions are detected by the ear

Sound travels at different speeds, and is aproximately proportional to the density of the medium. This
is because in denser mediums (usually solids), particles are much closer together, and can transfer
KE faster.

| Medium | Speed of Sound (m/s) |
| --- | --- |
| Air | 300 |
| Water | 1500 |
| Glass | 4540 |
| Iron | 5000 |
| Aluminium | 6320 |

> Definition: Pitch: The frequency of a sound wave, measured in Hz.

> Definition: Loudness: The amplitude of a sound wave, measured in dB.

Human audiable range is 20Hz to 20,000Hz. Below 20Hz is infrasound, above 20,000Hz is ultrasound.

### Echoes and their uses

> Definition: Echo: The repitition of a sound caused by the reflection of a sound

Echoes are caused by the reflection of sound waves. The time taken for an echo to return is given by:
```math
t = \frac{2d}{v}
```
where
- t is the time taken for the echo to return
- d is the distance between the source and the reflecting surface
- v is the speed of sound

The reason why we use 2d is because the sound has to travel to the reflecting surface and back.

Echoes can be used to measure distances, as well as to locate objects. The time taken for the echo to
return can be used to calculate the distance between the source and the reflecting surface.

Applications include:
- Sonar: Used to measure the depth of the ocean
- Baby imaging: Used to create images of the baby in the womb