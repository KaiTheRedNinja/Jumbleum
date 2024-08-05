# Comparator, Timer and Counter Circuits

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Common integrated circuits used for digital and analog electronics

## Overview

- LM 311 voltage comparator IC and its applications
- 555 timer IC and its applications
- 74390 4-bit decade counter IC and its applications

## Comparator
Compares two voltages and outputs a digital signal based on the comparison

@Row {
    @Column {
        @Image(source: "Example_Comparator", alt: "Example Comparator Circuit")
    }
    @Column {
        @Image(source: "Diagram_Comparator", alt: "Comparator Circuit Diagram")
    }
}

The comparator has five pins:
- **Power** (pin 8): 5 Volts, for example
- **Ground** (pin 1 and 4): 0 Volts. May also be negative sometimes? But not usually.
- **V1** aka **Vref** aka **Vin+** aka **V+** (pin 2): Reference voltage, the voltage to compare against
- **V2** aka **Vin** aka **Vin-** aka **V-** (pin 3): Input voltage, the voltage to compare
- **Output** aka **Vout** (pin 7): Digital output, high or low. High if V2 > V1, low otherwise.

Note that there are two other pins 5 and 6. Just connect them together and forget about it, because its out of
syllabus.

When Vin+ is greater than Vin-, the output is high. When Vin- is greater than Vin+, the output is low. Mathematically,
```math
V_{out} = Vin+ > Vin-
```

Use a voltage divider (see <doc:Circuit-Theories>) for Vref to fix it at a certain voltage. Usually, you only
need to vary V2, by connecting it to a potentiometer or thermistor some other variable voltage source.

Note that voltage comparators operate on **open collector**, meaning that the output can't be considered simply
"high" or "low". When it is "low", it acts as normal and connects to ground. However, when it is "high", it
disconnects from the circuit entirely. You need to **connect a pull-up resistor** to the output to ensure that it
is "high" when the comparator is not outputting a signal.

In the arrangement as seen in the image, if you imagine an LED at R, an OFF (0V) would turn it on, and an ON (floating)
would turn it off, because the Vout acts as ground for the LED. If you need the opposite behaviour, use a transistor
(see <doc:Bipolar-Junction-Transistors>) to invert the signal.

## Timer
Has two modes: monostable and astable. They're very different so they're explained separately.

The 555 timer IC is a common timer IC. It has 8 pins:
- **Power** (pin 8): 5 Volts, for example
- **Ground** (pin 1): 0 Volts
- **Trigger** (pin 2): Input to trigger the timer
- **Output** (pin 3): Output of the timer
- **Reset** (pin 4): Reset the timer
- **Control Voltage** (pin 5): Not used, connect to ground. Optionally connect a filtering capacitor.
- **Threshold** (pin 6): Threshold voltage
- **Discharge** (pin 7): Discharge pin

### Monostable
Outputs a pulse of a fixed duration when triggered.

@Image(source: "Diagram_Monostable_Timer", alt: "Monostable Timer Circuit")

The timer has two resistors and a capacitor connected to it. The duration of the pulse is given by the formula:
```math
T = 1.1 * R1 * C1
```
where 
- `T` is the duration of the pulse, 
- `R1` is the resistance of the resistor connected to the timer, and 
- `C1` is the capacitance of the capacitor connected to the timer. This formula is given in the test paper.

The timer is triggered by a low signal on the trigger pin. The output pin goes high for the duration of the pulse, then goes low.

Process:
1. The trigger pin drops from high (above 2/3 Vcc) to a low (below 1/3 Vcc).
2. IC connects pin 7 (discharge) to ground, immediately discharging the capacitor.
3. The output pin goes high.
4. The capacitor charges up. The speed of charging is inversely related to the resistance and capacitance.
5. The capacitor is charged to 2/3 Vcc. It is detected by pin 6 (threshold).
6. Output pin goes low
7. Capacitor discharges immediately, ready for the next trigger.


### Astable
Outputs a continuous stream of pulses

@Image(source: "Diagram_Astable_Timer", alt: "Astable Timer Circuit")

The timer has two resistors and a capacitor connected to it. The frequency of the pulses is given by the formula:
```math
T = \frac{(R_1 + 2R_2) * C_1}{1.44}

T_{on} = 0.693 * R_2 * C_1

T_{off} = 0.693 * (R_1 + R_2) * C_1
```
Where 
- `T` is the period of the pulse, 
- `T_on` is the duration of the high state, 
- `T_off` is the duration of the low state, 
- `R1` is the resistance of the resistor connected to the timer, and 
- `C1` is the capacitance of the capacitor connected to the timer. This formula is given in the test paper.

The timer outputs a continuous stream of pulses. The output pin goes high for a certain duration, then goes low for a certain 
duration. The duration of the high and low states is determined by the resistors and capacitor connected to the timer.

Process:
1. The capacitor charges up through R1 and R2. The speed of charging is inversely related to the resistance and capacitance.
2. The capacitor is charged to 2/3 Vcc. It is detected by pin 6 (threshold).
3. Output pin goes low
4. The capacitor discharges through ONLY R2, because it shorts to ground after R2. The speed of discharging is inversely 
related to the resistance and capacitance.
5. The capacitor is discharged to 1/3 Vcc. It is detected by pin 6 (threshold).
6. Output pin goes high

Repeats forever.

Note that it is mathematically impossible to achieve a < 50% duty cycle with the 555 timer. The duty cycle is given by the formula:
```math
D = \frac{R_2}{R_1 + 2R_2}
```

When drawing the waveform, make sure to draw AT LEAST TWO CYCLES. You only need to label `T_on` and `T` once.

## Counter
Counts the number of pulses in a digital signal. We use the 74LS390 counter.

@Image(source: "Example_Counter", alt: "Counter Circuit")

The counter has 16 pins:
- **Power** (pin 16): 5 Volts, for example
- **Ground** (pin 8): 0 Volts
- **1CKA** (pin 1): Input to count the pulses
- **1CLR** (pin 2): Clear the counter
- **1QA** to **1QD** (pins 3 to 6): Output pins for the first counter
- The above 3 but with a `2` instead of `1` (pins 9 to 12): Input and output pins for the second counter.

Note special exception for pin 4 and 12 (`1CKB` and `2CKB`): These enable decade mode, and you connect them to `QA` of the 
relevant  counter if you want it to go to 0 (aka 0000b) right after 9 (aka 1001b) instead of going to 10 (aka 1010b or 0xA).

Note that the CLK inputs activate on falling edge. If you want to count to 99 instead of 9, you can use BCD (basically
using a binary number for each digit instead of the number as a whole), and connect 1QD to 2CKA.