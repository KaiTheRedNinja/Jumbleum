# Data Management

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Managing data using MS Excel

## Overview
- Excel data types
- Excel formulas
- Goal seek
- Conditionals, eg COUNTIF, IF, AND, NOT, OR
- Conditional formatting
- HLOOKUP and VLOOKUP

> Definition: **Cell**: Space for data in a particular column and row of a spreadsheet
> Definition: **Field**: Column of data in a spreadsheet
> Definition: **Column heading/ Field name**: Description of the data stored in a particular column/ field
> Definition: **Record**: Set of related data that describes a person or thing; usually refers to a row of data in a spreadsheet

## Data Types
Here are some data types for Excel you should know:
- **General** (unspecified value. Almost never an acceptable answer.)
- **Number** (used for numbers, does not distinguish between integers and fractions)
- **Currency** (used for money)
- **Date** (used for dates)
- **Text** (for strings)
- **Logical** value (TRUE or FALSE)
- **Percentage** (used for rates, ratios and proportions)

## Excel Functions
Yes, you MUST memorise these.

Note: Function ≠ Formula

Counting:
- `COUNT` - Counts the number of cells with numbers in them
- `COUNTA` - Counts the number of non-empty cells
- `COUNTBLANK` - Counts the number of empty cells
- `COUNTIF(range, condition)` - Counts the number of cells that meet a condition

Text:
- `TODAY` - Gets the date of today
- `LEFT(text, number of chars)` - Retrieve characters in text from the left to right
- `LEN` - Gets the number of characters in a cell or a range of cells(including space)
- `MID(text, start index, number of chars)` - Gets a number of characters from any position in the text 
- `RIGHT(text, number of chars)` - Retrieve characters in text from the right to left

Logic:
- `AND(condition1, condition2, …)` - Returns TRUE or FALSE depending on if condition is met
- `IF(condition, resultiftrue, resultiffalse)` - If statement
- `IFS(condition1, resultiftrue, condition2, resultiftrue, …)` - Multiple if statements
- `NOT(thingie)` - it negates the value returned through a function or a value from another logical function. Basically, NOT true = false
- `OR(condition1, condition2)` - Returns true if one or more arguments are true

Math:
- `CEILING`.MATH - rounds number up to integer
- `FLOOR`.MATH - rounds number down to integer
- `MOD(dividend, divisor)` - get the remainder
- `POWER(number, power)` - exponentiation function
- `QUOTIENT(dividend, divisor)` - get the quotient
- `RAND` - random number between 0 (inclusive) and 1 (exclusive)
- `RANDBETWEEN(number, number)` - random number between boundaries
- `ROUND(number, number of digits)` - rounds a number to the second parameter
- `SQRT` - gets the square root

Sequence:
- `SUM` - Gets the sum of a range of cells
- `SUMIF(range, condition)` - gets the sum of a range of cells if they meet a condition
- `AVERAGE(range)` - gets the mean of a range
- `LARGE(range, k)` - returns the kth largest value in a range
- `MAX` - returns the largest value in a range
- `MEDIAN` - returns the median of a range
- `MIN` - returns the smallest value in a range
- `MODE`.SNGL - returns the mode of a range
- `SMALL(range, k)` - returns the kth smallest value in a range 

### Lookups
- `HLOOKUP`: Search for a specific value in a single row 
    - Value to search. It will search in the first row of the range
    - Range to search
    - Index of the row containing the value to be returned, 0 indexed
    - return an Approximate or Exact match – indicated as 1/TRUE, or 0/FALSE
- `VLOOKUP`: Search for a specific value in a single column
    - Value to search. It will search in the first column of the range
    - Range to search
    - Index of the column containing the value to be returned, 0 indexed
    - return an Approximate or Exact match – indicated as 1/TRUE, or 0/FALSE