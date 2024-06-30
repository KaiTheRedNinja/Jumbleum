# Problem Analysis

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Problem Analysis is solving problems by decomposing/generalising them

## Overview
- Input and output requirements
- Solving problems by decomposing them
- Generalising across similar problems

To understand a problem, we need to specify its:
- Inputs and requirements for valid inputs
- Outputs and requirements for correct outputs.

A solution is defined as an algorithm that solves the given problem by always giving correct outputs when some 
valid inputs are provided.

To specify inputs, include only the important data that can affect when we require for the output and 
exclude any irrelevant details and state the range of valid or acceptable values for these inputs.

You can give each input a name because it’s good practice (I said so)

To specify outputs correctly, include all the important features that the output is required to have. Any 
details that are not mentioned are assumed to be unimportant or irrelevant.

## Examples
@Row {
    @Column {
        Example: A 4 year old walks up to you and asks you to teach him how to add numbers. Since you are not a teacher nor his parent, and this kid looks like his mind will implode if you tell him there are numbers less than 0, you need to write a program that will do basic addition of 2 numbers so you can get away from this weird kid as fast as possible.

        Inputs: a, a positive integer and b, a positive integer

        Output: The sum of x and y
    }

    @Column {
        Example: You are a minimum-wage teacher who has to get the mean score of a class test before Monday, if not you’re fired. You must write a program to find the mean score (there are 30 kids in your class, no pens or paper, and all the calculator apps online are down due to an unrelated cyberattack). 

        Inputs: Scores, a list of 30 rounded percentage scores for the test, each being a positive integer between 0 and 100 inclusive.

        Output: The mean score of the test, rounded to the nearest integer.
    }
}

## Problem Solving Techniques (or Computational Thinking)
### Decomposition
Don’t know how to get started? Use **decomposition**!

Decomposition is the technique of breaking down a complex problem or process into smaller and more manageable 
parts, known as sub-problems.

A sub-problem is a problem whose solution contributes to the solution of a bigger problem.

There are two common approaches to decomposition (decomposing decomposition real?)
- Incremental approach: Identify the quantitative features of the input/output making the problem too large to 
handle. The solution to a smaller version of the problem may be found and extended to larger versions of the 
problem. Each extension of the solution is a sub-problem.
- Modular approach: Solve simple examples of the problem manually and identify tasks that are of different natures. 
Usually, they can be separated from each other to become distinct sub-problems.

### Pattern Recognition
Don’t know how to continue? Do pattern recognition!

Identify similarities among two or more items. Then if you know the solution for one of those items, you should be 
able to modify that solution to solve the other problems.

### Generalisation
How about generalisation?
Generalisation is the technique of replacing two or more similar items with a single, more general item. Can be 
done with both problems and solutions. Useful since you can solve many problems with just a single solution.
