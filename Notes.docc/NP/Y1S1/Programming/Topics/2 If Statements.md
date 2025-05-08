# If Statements

I am groot. (Branches... get it???)

## Overview

This document contains the entirety of chapter 2, because they're all so short it doesn't make sense to split them up.

2.1 If statements:
- Describe Sequential and Selection structure
- Describe the operation of if statement
- Explain the difference between = and ==
- Write programs that use if statement to solve simple problems

2.2 If-else statements:
- Practice proper indentation in programming
- Explain if-else statement
- Write programs that use if-else statement to solve simple problems

2.3 Logical operators:
- Explain the function of each logical operator
- Write programs that use logical operators to solve simple problems

## If Statement Syntax

```c
// If statement
if (/* condition */) {
    // code to execute if condition is true
}

// If-else statement
if (/* condition */) {
    // code to execute if condition is true
} else {
    // code to execute if condition is false
}

// If-else if statement
if (/* condition 1 */) {
    // code to execute if condition 1 is true
} else if (/* condition 2 */) {
    // code to execute if condition 1 is false, but condition 2 is true
} else { // you can have as many else if statements as you want
    // code to execute if all conditions are false
}
```

The condition must be a boolean expression, which evaluates to either true or false. Remember to wrap the condition in parentheses.

Usually, single-flow programs (ie. no branches or loops) are _sequential_, meaning each instruction is executed in order, 
one after the other. If statements introduce a _selection_ structure, where the program can take different paths based on 
the value of a condition.

Note that `else` cannot exist without a preceding `if`. You can have an `if` without an `else`, but not the other way around.

Do not use `elif`, this is not Python.

## Operators

### Comparison Operators
Basically just follow math.

```c
1 < 2 // true
1 > 2 // false
1 <= 2 // true
1 >= 2 // false
1 == 1 // true
1 != 1 // false
```

Note that to compare two values, you use `==`, not `=`. The latter is an assignment operator, which assigns the value on 
the right to the variable on the left.

### Math Operators
| Operator | Function |
|----------|----------|
| `+`      | Addition |
| `-`      | Subtraction |
| `*`      | Multiplication |
| `/`      | Division |
| `%`      | Modulus (remainder) |

### Logical Operators

| Operator | Function |
|----------|----------|
| `&&`     | Logical AND |
| `\|\|`     | Logical OR  |
| `!`      | Logical NOT |

### Precedence

Certain operators have higher precedence, meaning they are evaluated first. From highest to lowest precedence:

| Family | Operators |
|--------|-----------|
| Parentheses | `()` |
| Unary (mutates a single value) | `!` `-` |
| Arithmetic (Multiplicative) | `*` `/` `%` |
| Arithmetic (Additive) | `+` `-` |
| Relational (inequality) | `<` `<=` `>` `>=` |
| Relational (equality) | `==` `!=` |
| Logical AND | `&&` |
| Logical OR | `\|\|` |

Within a single family, operators are evaluated from left to right. Use brackets to change the order of evaluation,
just like in math.

## Indentation

Whenever you have a block of code within a function, branch (if), or loop (for, while), you should indent the code inside 
the block. This makes it easier to read and understand the structure of your code.

```c
// this code is not indented
if (/* condition */) {
    // code to execute if condition is true
    // this code is indented
} else {
    // code to execute if condition is false
    // this code is also indented
    if (/* condition */) {
        // this code is double indented
    } else {
        // this code is double indented
    }
}
// this code is not indented
```


