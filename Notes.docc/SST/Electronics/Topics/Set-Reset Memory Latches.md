# Set-Reset Memory Latches

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Set-Reset memory latches, otherwise known as SR latches, are used primarily to cope with imperfect switch contacts.

## Overview

SR latches are made of two cross-coupled NAND gates, each gate's output connected to the other gate's input. The two 
inputs are labeled "S" (Set) and "R" (Reset). When the S input is energized, the latch "sets" (Q goes high and not-Q 
goes low). When the R input is energized, the latch "resets" (Q goes low and not-Q goes high).

## Truth Table
| S | R | Q | not-Q |
|---|---|---|-------|
| 0 | 0 | No Change | No Change |
| 0 | 1 | 0 | 1     |
| 1 | 0 | 1 | 0     |
| 1 | 1 | Invalid | Invalid |

Note that in a timing diagram, if S and R are both 0 at the start, the state is UNDEFINED. Otherwise, the latch will
hold its state until S or R changes.

## Use Case
SR latches are used in applications where a momentary switch is used to toggle a circuit between two states.