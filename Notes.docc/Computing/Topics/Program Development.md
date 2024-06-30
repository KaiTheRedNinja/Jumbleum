# Program Development

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

## Overview
- Stages of developing a program
- Sequence, selection, iteration constructs
- Variables, constants, lists
- Different data types and built in functions
- Common programming solutions
- User-defined functions

## Stages of developing a program

### Gather requirements
What is the nature of the problem, why is a program needed and what is it expected to do? Some 
tasks involved include interviewing the intended audience of the program to understand the 
problem and their expectations. Specify the complete sets of inputs necessary for the problem and 
how the inputs can be supplied to the program being developed. Specify the complete set of 
outputs that is necessary for the problem and the format for the output.

### Plan solutions
Consider the options available before writing any code, and choose an algorithm based on the 
resources of the problem and generalising the steps needed to produce the required output. Can 
write algorithms using flowcharts or pseudocode. Manually solve different simplified examples of 
the problem and generalise the steps needed to produce the required output.
### Write code
Duh. The reason we don’t do this until the 3rd step is to avoid producing code based on 
incomplete requirements or inefficient algorithms that eventually need to be discarded. Insert 
relevant xkcd here

Write the code that performs the algorithm as planned in the previous stage as efficiently as 
possible.

### Test and refine code
After the initial code is written, it is probably a buggy mess with the time complexity of the 
tetration of n to itself. Test the code to reveal how much you need to fix, then refine the code 
by fixing all those bugs, optimising it and all that jazz.

Uncover imperfections/errors in the code and correct them so that the program works as intended.

### Deploy code
Your code functions properly? You can now roll it out for use to its intended audience. You can 
train users to use the program, transition from an old program or system to this new program, and 
evaluate the effectiveness of the program in solving the problem and considering any changes that 
might increase its usability or effectiveness.

## Programming

> Definition: **Programming language**: Language designed for humans to communicate instructions 
to computers.
> Definition: **Source code**: Instructions written in a programming language that both humans 
and computers can understand.
> Definition; ***Syntax***: the rules that determine how the words and symbols in a valid 
instruction are arranged.
> Definition: **Machine code**: A programming language consisting of binary or hexadecimal 
instructions which a computer can respond to directly.

### Compiler vs Interpreter
> Definition: **Compiler**: Code translator program that translates source code into machine code 
completely before running the compiled program.
> Definition: **Interpreter**: Code translator program that translates source code into machine 
code while the interpreted program is running

@Row {
    @Column {
        **Compiler**

        Advantages:
        - Syntax errors detected before the program is run
        - The compiler is not needed to run the program after compilation is complete
        - The resulting program runs at a faster speed because all the translation has been done 
        beforehand.

        Disadvantages:
        - Any changes to the source code require recompilation before taking effect
        - Compilers usually do not offer an interaction mode

        Examples:
        - C, C++, Java, Swift
    }

    @Column {
        **Interpreter**

        Advantages:
        - Changes to source code take effect immediately
        - Interpreters usually offer an interactive mode to facilitate learning and experimentation

        Disadvantages:
        - Syntax errors may interrupt the running of a program
        - The resulting program runs at a slower speed because translation occurs while the program 
        is running
        - The interpret needs to be run every time the program is running

        Examples:
        - Python and Javascript
    }
}

This chart is also why when doing AIO, or other dynamic programming-related stuff, you have to worry about actually optimising your code in Python, whereas in C++ that’s less of an issue unless you screwed up really badly

## Python Syntax

I'm not bothered to write a full python tutorial, go search it up yourself. This is the theory
that is relevant to the topic.


The first character of an identifier (or variable) cannot be any of the digits “0” to “9".

10 is always evaluated as the Boolean value True.

Initialising variable: <variable> = <value>

Typecasting variable: str(var), int(var), float(var), etc

Mathematical operations: +, -, *, /, ** (exponentiation), % (modulo, getting remainder)

For doing an operation to a variable by itself, do var += <value to add> (insert any operator)

Lists have this format: [ ]

Lists start from 0

To get a value in a list, do <ListVariable>[index]

To add or remove something to a list, do <ListVariable>.append(value) or <ListVariable>.remove(value)

To add something to a specific index, do <ListVariable>.index(index, value)

For loops have this format: “for i in range(startingvalue, endingvalue, stepvalue): “(endingvalue is exclusive)

For while loops: “while <condition>:”

To stop a loop or skip to the next iteration, use “break” and “continue” respectively

If statements: “If <condition>”

Supplementary conditions are “elif” and “else”

Dictionaries have this format: { }

To add to a dictionary, use <Dictionary>[key] = value

If the key already exists, this value will overwrite the preexisting value assigned to the key.

Key-value pairs are like this: {“Brand”: “McDonalds”}

To concatenate strings, use “+”. Make sure to typecast non-string values using str()

Some good-to-know methods for dictionaries are .keys() for a list of all keys, .values() for a list of all values, and .pop() to delete a specific key-value pair using the key name

You can also delete a key-value pair using “del dictionary[key]”

To get the value of a specific key, use “.get()”

min() and max() for minimum and maximum values out of a list or dictionary

abs() for the absolute value

round() to round to the nearest integer. You may use a second parameter to indicate the number of decimal places to round it to.

If you need any other math functions use the math module by using “import math”. Useful examples being math.ceil() and math.floor()

You can also “import random” to use the random module.

If you type the module name followed by a zero, wait a while and the list of available functions will come up.

To check if a value is in a list or a key is in a dictionary, do “if value in list:” or other stuff.

To find a specific character in a string, use <String>[index]

To slice a string, use <String>[StartIndex:EndIndex:Step]. EndIndex is not included. The number of characters retrieved is EndIndex - StartIndex

Useful string methods are .isalnum(), .isalpha(), .isdigit(), .isspace(), .islower(), .isupper(), .lower(), .upper() and .split(), which checks if a string is alphanumeric, alphabetical, numeric, only made up of spaces, is lowercase, is uppercase, converts to lowercase, converts to uppercase and splits the string into different parts based on the parameter (by default it is “ “) respectively.

Use len() to find the length of a string, tuple, list or dictionary