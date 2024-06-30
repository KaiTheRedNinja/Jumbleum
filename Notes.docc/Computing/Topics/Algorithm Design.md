# Algorithm Design

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Set of step-by-step instructions for solving a problem (textbook definition)

## Overview

It involves the development of a set of instructions or rules (example: Sequence to solve a Rubik’s cube)

- Determining the purpose/output via dry run
- Trace tables
- Error analysis
- Flowcharts
- Pseudocode

## Trace Tables
A dry run is a process of running through a set of steps manually.
A trace table is a tabulation of the change in variables as well as the output of an algorithm 
when performing a dry run.

Uhh just practise some papers it's really self explanatory when all the trace table questions are 
literally the same. Generally, follow these rules:
1. Whenever a variable changes, write down the new value in the next row.
2. If multiple variables change in the same step, write down all the new values in the same next 
row.
3. Ensure that you are absolutely sure that comparisons are correct (eg. `<` vs `<=`)

To determine an algorithm’s purpose, look at the code (idk)

## Flowcharts
This is a visual way of presenting an algorithm, and may be easier to understand than a long 
series of steps. Each step is represented by a symbol, the order is shown using flow lines 
(arrows)

There are 4 standard flowchart symbols.
- Terminator
    - Not to be confused with The Terminator, 1984
    - Pill shaped. Or a rectangle with rounded corners. Someone paste images here please
    - Either consists of the START or STOP command.
    - Self-explanatory
- Data
    - Parallelogram-shaped.
    - It’s the step where input data is received or output data is outputted.
    - Format: INPUT/OUTPUT <value>
- Decision
    - Diamond shaped.
    - There should be 2 outgoing arrows representing possible outcomes, either YES or NO.
    - Normally used to compare values, use “==” for equality, “!=” for not equals, and those 
    greater than or less than for inequalities. You may use words for other things, such as “Is 
    time before 7 a.m.?”
    - Format: Is <condition>?
- Process
    - Rectangle shaped.
    - Represents a step involving an action or operation.
    - Can either be changing the value of a variable or a more complex action, like
        - x = x + 1
        - Activate nuclear reactor

### Structuring Flowcharts
You should stick to these guidelines if you don’t want to get an F9:
- Flowchart must start with only 1 terminator symbol
- Flowchart may stop with 1 or more terminator symbols
- Each flowchart symbol must have exactly 1 entry and exit point
    - Exceptions include the terminator (only 1 entry/exit point) and decision (two exit points, 
labelled yes or no)
- Flow lines should not cross one another. No, they don’t care if you “indicate” which arrow is 
which. Just learn to organise arrows correctly.

## Pseudocode
It’s a description of an algorithm using natural language, mixed with sequence, selection and 
iteration constructs. In other words, imagine the most generic possible form of a programming language.

There are a few commands and syntax to note:
- Instead of `=` to initialise a variable, use arrow, `←`
- Use `≠` OR `not(x == 5)`
- `==` can be used to check for equality
- `INPUT` = Used to get an input for a variable. Variable need not be initialised beforehand (e.g: INPUT x)
- `OUTPUT` = Produces a result from algorithm (e.g: OUTPUT “Hello”)
- `IF…ELSEIF…ELSE…ENDIF` = If statement condition format. When using IF or ELSEIF, add THEN after the 
condition (e.g: IF text == “” THEN)
- `WHILE…ENDWHILE` = While loop format. No need to put anything after the while conditional
- `FOR…NEXT` = For loop format. After FOR should be a counter, e.g: FOR x = 1 to 5 (this is inclusive, it 
goes from 1, 2, 3, 4, 5) rmb to end with `NEXT x` where x is the variable you used! 
- For any other additional functions you need, such as breaking a loop, continuing a loop, choosing a random 
number, just write it in plain English (e.g: BREAK WHILE LOOP, PICK RANDOM INTEGER BETWEEN 1 AND 10 INCLUSIVE) 
(caps lock not required)
- +, −, * or ×, ÷ can be used
- Use modulus; e.g. 5 modulo 2, NOT 5 % 2
- ⌊x⌋ and ⌈x⌉ are allowed for floor and ceiling division respectively because they are mathematical symbols
    - Else, you can use x = floor division of 5 by 2
