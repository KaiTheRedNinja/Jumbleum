# Introduction to Digital Electronics

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

On off on off on off and on again

## Overview
- Analogue and digital signals
- Pull up/down resistors
- 7-segment display module

## Analog and Digital Signals

Digital signals only have discrete HIGH and LOW states, which are usually Vcc and 0V. See 
<doc:Electronic-Systems#Different-Types-of-Signal> for more details.

Data is converted from digital to analog using a DAC (digital-analog converter), and from analog to digital 
using an ADC (guess what that stands for).

## Pull Up/Down Resistors

If you keep a pin "floating", aka unconnected, what value do you think it is? Most think its just LOW, but in
reality its undefined and can be either HIGH or LOW. That means when we have inputs via things like switches
or buttons, we need to use pull-up or pull-down circuits to ensure that when the switch or button is open, there
is still a well-defined signal.

@Image(source: "Diagram_Pull Up", alt: "Pull-up circuit")

In a pull up circuit, the resistor is connected to Vcc, and the switch is connected to ground. When the switch is
closed, the input is LOW, and when the switch is open, the input is HIGH.

@Image(source: "Diagram_Pull Down", alt: "Pull-down circuit")

In a pull down circuit, the resistor is connected to ground, and the switch is connected to Vcc. When the switch is
closed, the input is HIGH, and when the switch is open, the input is LOW.

Note that R must be very high, such as 10kΩ, to ensure that the input is not shorted to ground or Vcc when the 
switch is closed.

The resistor and switch are ALWAYS opposite each other, never on the same side.

## Numeric Representation

See <doc:Data-Representation> for an introduction to number systems.

In electronics, we use binary to represent logic. However, there is a special system called BCD (binary coded decimal)
that we use to represent numbers in decimal form. In BCD, each digit is represented by a 4-bit binary number.

| Denary | Binary | BCD |
|--------|--------|-----|
| 0      | 0000   | 0000|
| 7      | 0111   | 0111|
| 11     | 1011   | 0001 0001|
| 42     | 101010 | 0100 0010|

### 7 Segment Decoder

See <doc:Semiconductor-Diodes#7-Segment-Display> for more details on 7-segment displays.

We use a BCD to 7-segment decoder IC, such as the 7447, to convert BCD to a signal that can be displayed on a 7-segment
display. The 7447 has 4 inputs, A-D, and 7 outputs, a-g. The outputs are connected to the 7-segment display, and the
inputs are connected to the BCD output of the microcontroller.
