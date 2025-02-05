# Combinational Logic Circuits

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Logic circuits dont work alone

## Overview
- Sum-of-Products Boolean expression
- Boolean Algebra & Karnaugh Map
- Applications of combinational logic

## Representing Logic Circuits

@Image(source: "Diagram_Logic Gate Intermediates", alt: "Logic circuit with intermediates")

Logic gates will usually have intermediate values. These can be represented with boolean algebra.

For the example above, the output is given by:

```math
D = A + B
X = DC = (A+B)*C
```

You can determine how to implement this circuit using logic gates by expanding the boolean algebra.

## Sum-of-Products Boolean Expression

Sum-of-product is exactly what it sounds like. It is a way of creating a boolean expression from
a truth table.

1. Determine all the rows where the output is 1
2. For each row, create a product term by ANDing all the inputs. For example, if the input is A=0, B=1, 
C=1, the product term would be `A̅BC`
3. Finally, sum all the product terms together, by ORing them.

Use brackets where nescessary to improve readability.

Using SOP, you can determine the boolean expression for any truth table, and from that determine how
to implement it using logic gates.

## Simplifying Logic Circuits

There are two ways to simplify logic circuits: boolean algebra and Karnaugh maps.

### Boolean Algebra

There are also a ton of rules that you can use to simplify boolean expressions. I'm frankly not bothered
to type them all out, so heres a screenshot:

@Image(source: "Diagram_Boolean Algebra Laws", alt: "Boolean algebra laws")

For example,
```math
X = \overline{A}\overline{B}\overline{C} + \overline{A}\overline{B}C + A\overline{B}\overline{C}
\text{Apply distributive law}
= \overline{A}\overline{B}(\overline{C}+C) + A\overline{B}\overline{C}
\text{Apply C + inverse C = 1}
= \overline{A}\overline{B} + A\overline{B}\overline{C}
\text{Apply distributive law}
= \overline{B}(\overline{A} + A\overline{C})
\text{Apply absorption law}
= \overline{B}(\overline{A}\overline{C})
\text{Apply distributive law}
= \overline{A}\overline{B} + \overline{B}\overline{C}
```

#### DeMorgan's Theorem

This is one of the most useful rules in boolean algebra. It states that:

```math
\overline{A+B} = \overline{A} \cdot \overline{B}
\overline{A \cdot B} = \overline{A} + \overline{B}
```

#### State Counting

I discovered this during electronics class, but I have no doubt that it already exists under some other name. 
I've just not been able to find that name. Basically, state counting sorta follows the "once you eleminate the 
impossible,  whatever remains, no matter how improbable, must be the truth" logic. More solidly,
```math
AB + A\overline{B} + \overline{A}B = \overline{AB}
AB + \overline{A}B + \overline{A}\overline{B} = \overline{A\overline{B}}
AB + A\overline{B} + \overline{A}\overline{B} = \overline{\overline{A}B}
A\overline{B} + \overline{A}B + \overline{A}\overline{B} = \overline{AB}
```

It comes in more useful than you might think, especially with three input gates.

### Karnaugh Maps

Karnaugh maps are a way of simplifying boolean expressions. They are a grid of all possible inputs,
with the output of the function in each cell.

You can then group together cells with the same output in groups of 1, 2, or 4 in a rectangle. You can
then simplify the expression by doing a sum-of-product on those groups.

@Image(source: "Diagram_KMap Groupings", alt: "Karnaugh map with groupings")

Note that sometimes, you will have to overlap groups to get the most simplified expression. It is better
to have two groups of 2 that overlap than one group of 2 and one group of 1, and it is better to have one
group of 4 than two groups of 2.