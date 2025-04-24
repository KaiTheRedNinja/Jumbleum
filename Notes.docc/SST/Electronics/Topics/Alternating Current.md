# Alternating Current

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

The current that goes weird.

## Overview

- Characteristics of alternating current/voltage
- Types of AC waveforms

For converting from AC to DC, refer to <doc:Semiconductor-Diodes>. DC to AC conversion is outside of the syllabus.

## Nature of AC

> Definition: Alternating Current (AC): A type of current where the direction of the flow of charge changes periodically.

Direct current, DC, only flows in ONE direction. Even if its a sine wave, so long as it has no negative component, it is DC.

Alternating current, AC, flows in both directions. For more details about how AC is generated and used, refer to 
<doc:Electromagnetic-Induction>.

| Factor | DC | AC |
| ------ | -- | -- |
| Current direction | Does not change | Reverses periodically |
| Polarity of voltage | Does not change | Changes periodically |
| Source | Batteries | AC generators |

AC, like all waves, follows the same rules of waves. It has a frequency, amplitude, and wavelength. For those properties,
refer to <doc:General-Properties-of-Waves>.

However, AC signals have two extra properties:
- DC level, which is the average value of the signal. Usually this is depicted as 0, but it can technically be any value of
smaller magnitude than the amplitude.
- Peak-to-peak voltage, which is the difference between the maximum and minimum voltage of the signal. Typically equal to
double the amplitude.

@Image(source: "Graph_AC_Components", alt: "AC Components")

### Waveforms

AC just needs to have positive and negative components, it doesn't need to be the sine wave that we're used to.

@Image(source: "Graph_AC_Waveform", alt: "AC Waveform")

The four common types of AC waveforms are:
- Sinusoidal
- Rectangular
- Square (special case of rectangular where duty cycle is 50%)
- Triangle

AC can be non-periodic, meaning that it doesn't repeat. Most signals from sensors will be non-periodic.

#### Duty Cycle

@Image(source: "Graph_Duty Cycle", alt: "Duty Cycle")

Rectangular waves have one extra property that other AC waves don't define very well (but still do have): duty cycle. This is
the ratio of the time the signal is high to the total time period. It is usually expressed as a percentage.

```math
D = \frac{t_{on}}{T} * 100\%
```

Where:
- `$D$` is the duty cycle
- `t_on` is the time the signal is high
- `$T$` is the total time period

The effective voltage of a rectangular wave is the average voltage of the signal. This is calculated by multiplying the duty
cycle by the amplitude.

```math
V_{eff} = D * V_{max}
```

## Function Generators

Function generators are used to produce periodic AC signals. It is used in conjunction with a digital oscilloscope to measure
the waveform.

@Image(source: "Graph_Oscilloscope", alt: "Waveform on an Oscilloscope")

Oscilloscopes have a grid. The horizontal axis is time, and the vertical axis is voltage. The gridlines are used to measure the
period and amplitude of the waveform.