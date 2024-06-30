# Computer Architecture

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

How a computer is designed and built to function, including how the parts of the computer are designed, organised and connected

## Bits and bytes

Data is represented as numbers, the smallest unit is called a “bit”.
1 byte is 8 bits.

SI units:

| SI Unit       | Value       |
|---------------|-------------|
| Kilobyte (kB) | 1000 bytes  |
| Megabyte (MB) | 10002 bytes |
| Gigabyte (GB) | 10003 bytes |
| Terabyte (TB) | 10004 bytes |

Units (powers of 2)

| Unit           | Value       |
|----------------|-------------|
| Kibibyte (kiB) | 1024 bytes  |
| Mebibyte (MiB) | 10242 bytes |
| Gibibyte (GiB) | 10243 bytes |
| Tebibyte (TiB) | 10244 bytes |


For conversion just convert all to bytes, then to the desired unit. Depending on the units it might just be adding or removing zeroes.

## Computer Components

| Role  | Description | Example |
|------|----------|----------|
| Processor | Processes data and follows instructions; consists of an arithmetic logic unit and a control unit | CPU |
| Memory    | Stores data, instructions and the results of processing for immediate use | RAM, ROM |
| Secondary storage | Stores large amounts of data that will not be lost when power supply is interrupted | Optical disk drive, solid state drive, hard disk drive |
| Data bus  | Transports data between memory and processor. Bidirectional (operates in both directions) |  |
| Address bus | Transports required memory location from processor to memory. Unidirectional (only operates from processor to memory) | |
| Input | Data or instructions that the computer receives | Microphone, scanner, keyboard, mouse |
| Output | Intermediate or final results produced by the computer, usually in the form of processed data | Speakers, monitors, printers |

### Processor
This part processes data and follows instructions. There are 3 parts:

> Definition: **Arithmetic logic unit (ALU)** - Performs basic arithmetic and logical operations. 
Performs the actual work of transforming data and doing calculations.

> Definition: **Control unit (CU)** - Follows instructions and decides where data should be stored, 
received or transmitted by different parts of the computer. Makes sure that data is transported to 
where it needs to be and is processed in the correct order.

> Definition: **Processor registers** - Quickly accessible storage spaces available to the processor, 
consisting of a small amount of fast storage. Data stored here is used directly by the ALU and CU. 
Number and size of processor registers cannot be changed unless the processor itself is changed.

A series of instructions is called a program or software.

Processor speed is described by the number of instructions that the processor can perform in one second.
Example: 1 MHz (megahertz) processor performs 1 million instructions per second.

### Memory
> Definition: **Memory** - Device that is used to store data for immediate use in a computer.
> Definition: **Address** - Number that is used to locate a byte in memory.
> Definition: **Volatile** - Lost when the power supply is interrupted.

There are 4 types of memory employed, depending on how the data inside is meant to be used:

Processor registers - See “Processors” for further information.

> Definition: **Random access memory (RAM)** - Data and instructions are stored temporarily so they can 
be quickly accessed by the processor when needed. Applications may load instructions into RAM when launched 
for example. Volatile memory and data is easily changed. Also known as “Main memory”

> Definition: **Read-only memory (ROM)** - Data and instructions that rarely need to be changed or 
required for a computer to start up are stored here. Cannot be easily changed and is non-volatile. Hence 
it is ideal for storing instructions that are needed before data can be loaded into RAM.

> Definition: **Secondary storage** - Large amounts of data are stored that are not accessed as often as 
RAM. Data can be changed unlike ROM, and is non-volatile.

### Data and Address Buses
A bus is a collection of wires for transporting data from one part of a computer to another. Can either 
be physical wires or conductive lines printed on a circuit board.

There are 3 buses we are concerned about:

> Definition: **Data bus** - Transports data to be processed to the processor and processed data from the 
processor to memory. This is bi-directional because data can be sent in both directions.

> Definition: **Address bus** - Specifies memory access information. When the processor reads from or writes 
to memory, the relevant address information is provided on the address bus. It is uni-directional because 
address information is only sent in one direction.

> Definition: **Control bus** - A bus that transports instructions from the processor’s control unit to 
other devices within the computer.

To read data from memory, the processor requests the data, the address bus transports the requested data’s 
address to RAM, a copy of the requested data is then sent from the RAM back to the processor via the data bus.

To write data to memory, the processor uses both the data bus and address bus at the same time to transport 
the data for writing as well as the destination address to RAM. RAM then sets the switches at the destination 
address according to the data received via the data bus.

### Input and Output
> Definition: **Input** - Data or instructions that the computer receives for processing. (words entered on a 
keyboard, images 
scanned on a scanner)
> Definition: **Output** - Any intermediate or final results produced by the computer in the form of processed 
data. (Images displayed on a screen, sounds played on a speaker)

In case you haven’t figured out yet, hardware is the physical part of a computer.

Input devices are hardware devices that allow users to enter data and instructions into a computer.
An output device is a hardware device used to display, project or print processed data from a computer so it 
can be used or understood by people using the computer.

If you don’t know any examples of either then idk what to say

### Secondary storage
A way of storing large amounts of data that will not be lost when power supply is interrupted.

It is cheaper than RAM and can store more data. It is ideal for physically transporting data from one computer 
to another. However, it is usually much slower in speed compared to RAM (unless you RAM really sucks, in that 
case you should get new RAM)

The processor usually does not access data in secondary storage directly. Instead, any data in secondary storage that the processor needs might be copied to RAM first.

The factors for choosing storage media are as follows:

| Factor | Explanation |
|--------|-------------|
| Capacity | How much data do I need to store? |
| Speed | Must the data be accessed quickly |
| Portability | Does the data need to be physically transported frequently? |
| Durability | How long is the storage device expected to last? |
| Cost | How much does the storage device cost? |


The types of storage media and their advantages and disadvantages are as follows:

@TabNavigator {
    @Tab("Magnetic") {
        Data is stored on magnetic material that can be read or written to by a magnetic head.

        Example: Hard disk, tape drive, floppy disk
        
        Good:
        - Large storage capacity (we talking terabytes of data)
        - Relatively cheaper than alternatives

        Bad:
        - Easily damaged and will degrade over time.
        - Much slower than solid-state storage media.
    }

    @Tab("Optical") {
        Data is stored as very small pits or indentations that can be read or written by a laser

        Example: DVD

        Good:
        - Large storage capacity (we talking gigabytes of data)
        
        Bad:
        - Data can only be written once for some non-rewritable formats.
        - Lower maximum storage capacity than magnetic storage media.
        - Vulnerable to scratches and fingerprints.
    }

    @Tab("Solid State") {
        Data is stored in electronic circuits called flash memory that have no moving parts.

        Example: Memory cards, USB flash drives

        Good:
        - Much faster than alternatives.
        - Not as vulnerable to drops, mechanical shocks, scratches, fingerprints or other damage.
        - Smaller in size, lighter in weight.
        - Uses very little power and produces no noise

        Bad:
        - Good lord this is hella expensive

    }
}

## Logic Gates
All data is represented in binary, which is essentially a boolean. We do logic on these booleans 
using logic gates.

Theres 7 main types of logic gates

@Image(source: "Example_Logic Gate", alt: "The 7 main types of logic gates")

- `NOT` - Inverts input (0 to 1, 1 to 0)
- `AND` - Outputs 1 if both inputs are 1
- `OR` - Outputs 1 if at least one input is 1
- `NAND` - AND, but inverted
- `NOR` - OR, but inverted

Not in syllabus:
- `XOR` - Exclusive or, the same as OR but outputs 0 if both inputs are 1. Pronounced "zore"
- `XNOR` - XOR, but inverted. Pronounced "snore"

### Constructing Logical Statements
There are three forms of logical statements:
- Logic Gate Diagrams
- Truth Tables
- Boolean Algebra

To convert a logic gate diagram to a truth table, follow these steps:
1. Write down the inputs, intermidate values (results of logic gates that aren't the outputs), 
and outputs of the logic gate.
2. Write down all possible combinations of inputs.
3. Fill in the intermediate values and outputs based on the logic gate diagram.

To convert a truth table to a logic gate diagram, just try and look and see if anything
seems to match a logic gate, rinse and repeat. Or, you could apply Sum of Product
- Determine the combinations which result in an output of 1
- Create an AND term for each condition that results in an output of 1
- OR the AND terms together

### Boolean Algebra
Boolean algebra is explained more in-depth in Electronics, at <doc:Basic-logic-gates> and 
<doc:Combinational-Logic-Circuits>. Note that the format for boolean algebra in computing is
slightly different:
- For NOT, instead of an overline, use the word NOT
- For AND, instead of an asterisk, use the word AND
- For OR, instead of a plus sign, use the word OR
- Use () to group terms, as it is not always clear what is being ANDed or ORed