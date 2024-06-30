# Program Testing

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Testing a program to ensure it does what is expected

## Overview

- Data validation techniques
- Validating input data
- Designing test cases for normal, error, and boundary conditions
- Understanding different types of errors
- Translators, interpreters and compilers
- Debugging techniques

## Validating input data

Did you know that we need to validate input data? This is because some people are idiots for not inputting data correctly.
Or maybe because you are an idiot for not explicitly telling them what to input correctly. To stop pointing fingers and 
preventing that program from crashing, we have validation checks to make everyone happy.

> Definition: **Length check** - Check that the number of characters in a value meets certain requirements (example: 
Wordle requires inputs to have 5 characters, along with other things)

> Definition: **Range check** - Limits the input to a particular range of values (common among numerical values) 
(example: Inputting test score into a computer, the score should be between 0 and 100 inclusive)

> Definition: **Presence check** - Some inputs may be optional. The program should perform this check to ensure that 
all the required inputs are provided. Also useful to check if a value even exists at all. When it comes to inputs, check 
if it does not equal to “” (empty string).

> Definition: **Format check** - Some inputs are required to satisfy additional complex requirements such as following a 
particular pattern. This can be the datatype, or how data should be entered (example: a date format should comprise of 2 
digits, followed by a colon, followed by another 2 digits)

To validate, use a while loop and if statements/try except to validate. If it works, break the while loop. If it doesn’t, 
then give an appropriate message (such as “Please input only numerical digits.”) and iterate. You may use “continue” if 
validation fails and there’s no point in trying to test other checks.

## Check Digits
Check digit - An additional digit or letter added to the end of a sequence of digits that is intended to be read by or 
entered into a computer manually.

The check digit is mathematically related to the original sequence of digits so that simple input errors, such as 
accidentally swapping two digits or wrongly entering a digit, would break this mathematical relationship and hence be 
detected.

Check digit algorithms are generally designed to capture human transcription errors.

After the digits have been manually entered, the system will calculate (using an algorithm) whether the expected 
mathematical relationship is true. If the relationship is still true, it is likely that the numbers were entered 
correctly. Otherwise, the computer can ask for the numbers to be re-entered and checked again.

If the check digit is a letter, it would usually need to be converted to a number so that it can be used in the 
algorithm to check the sequence.

Check digit examples (the final digit in these codes):
- UPC (Universal Product Code, tracks trade items)
- EAN (International Article Number, 
- GLN (Global Location Number)
- GTIN (Global Trade Item Number, tracks shipment)
- Numbers administered by GS1
- ISBN 10 / ISBN 13 (International Standard Book Number)

Notable algorithms:
- Luhn algorithm (1954) by IBM scientist Hans Peter Luhn
    - Credit card number
    - Canadian, Greek, Israeli, South African and Swedish ID
- Verhoeff algorithm (1969) by Dutch mathematician Jacobus Verhoeff
    - The first decimal check digit algorithm which detects all single-digit errors, and all transposition errors 
    involving two adjacent digits.
    - Uses 3 tables, a multiplication table d, an inverse table inv, and a permutation table p.
- Damm algorithm (2004) by H. Michael Damm (PhD dissertation)
    - Similar to the Verhoeff algorithm
    - Does not have the dedicatedly constructed permutations and its position-specific powers of the Verhoeff scheme.

## Program Errors

Here is a table of the types of errors one may encounter:

| Error | Type of bug | When is it detected | What caused them |
|-------|-------------|---------------------|------------------|
| Syntax | Incorrect source code that does not follow the rules of the language | When the compiler or interpreter tries to translate the source code to machine code | Incorrect spelling or sequence of symbols in source code. |
| Runtime | Errors detected while a program is running | While the program is being run. Usually causes the program to crash or hang. | Incorrect use of commands, input data that has not been properly validated or conditions occurring outside of the program’s control, such as running out of memory. |
| Logic | The program  | While the program is being run | Algorithm is incomplete or incorrect |

> Definition: **Crash** - Sudden stop of a program due to an error
> Definition: **Hang** - Unresponsiveness of a program due to an error

Example of syntax error: Forgetting to indent a line in a while loop

Example of runtime error: Dividing by zero, performing string operations on integers

Example of logic error: (insert example that your code works, but your algorithm sucks so it does the wrong thing)

> Definition: Bugs - Defects in a program that causes it to behave in an unintended manner
> Definition: Debugging - The act of identifying and removing defects from a program

## Common debugging techniques
### Using intermittent print statements

Printing certain variables at different locations to figure out where the code crashes, and if variables were in the 
correct format or were being processed correctly by the program. Tracking the progress of 

### Testing the program in small chunks or by parts
Separating the code into different sections and testing each section separately to determine the location of the 
error.

Done by commenting out sections of code

## Conditions for Test Cases
There are 3 types of conditions for when testing a program:
- Normal Condition - Input data is what is expected (example: Jimmy buys 3 watermelons from the watermelon shop)
- Boundary Condition - Input data is at the limit of what the program is designed for, or where special handling of the 
input data is required (example: Jimmy buys 9223372036854775807 watermelons from the watermelon shop)
- Error Condition - Input data is not what the program is designed for, and should normally be rejected
(example: Jimmy buys −1 lead pipes from the watermelon shop)

## Algorith Efficiency
In computer science, the Big O notation is used to classify functions (algorithms) according to their time and space 
complexity based on a growing input size.

It is used in the analysis of an algorithm by classifying them based on:
- Time complexity (amount of time required to run the algorithm)
- Space complexity (the amount of RAM or HDD space required to run the algorithm) as the input size grows.

Big O usually only provides the upper bounds of the growth rate of an algorithm.

The following is a very generalised method of obtaining Big O of a function (there are methods that are a lot more mathematically rigorous)

### Big O Example
We have this function to get the sum of numbers in an array

```python
def func1(arr):
    total = 0
    for i in arr:
        total += i
    return total
```

Assume the compiler executes each similar statement in a constant time, so a statement “a=3” would take the same amount of 
time (microseconds) regardless of where it appears in the entire code)

Assume initializing the total takes constant time A
Adding to total is B
Returning the value is C

func1 takes a time of (A+B*(number of elements in array)+C)

Now, we must ABSTRACT the growing expression

**Step 1: PURGE THE CONSTANTS**

Now we have (number of elements in array*B)

**Step 2: PURGE THE COEFFICIENTS**

Now we have (number of elements in array)

Since input size is universally denoted as n in Big O notation, the Big O of func1 is O(n), which has a linear growth rate.

Example O functions:

| Notation | Name | Example |
|----------|------|---------|
| O(1) | Constant | Constant lookup table |
| O(log(n)) | Logarithmic | Binary search |
| O((log(n))^c), c > 1 | Polylogarithmic | Matrix chain ordering (effectively multiplying matricesnig) |
| O(n) | Linear | Finding an item in an unsorted array |
| O(nlog(n)) | Linearithmic | Heap and merge sort |
| O(n^2) | Quadratic | Bubble and insertion sort |
| O(n^c), c > 2 | Polynomial | Maximum matching of bipartite graphs |
| O(c^n), c > 1 | Exponential | Travelling Salesman Problem using dynamic programming |
| O(n!) | Factorial | TSP using brute force (listing out all combinations) |

