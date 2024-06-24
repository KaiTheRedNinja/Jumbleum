# Data Representation

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Data representation is the way data is stored and processed in a computer system. Data can be represented in different 
ways, such as numbers, text, images, audio, and video. Each type of data has its own representation format, which determines 
how it is stored and processed by the computer.

## Bases

In everyday life, we mostly use the Base-10 number system, also known as decimal, or denary.

However, computers store data using bits, and cannot use decimal directly. Instead, they use Base-2, or binary, which 
uses 0 and 1 as the only digits.

Another number system often used when working with computers is Base-16, or hexadecimal. It has 16 distinct digits, 0-9 
and A-F. A-F represents the numbers 10-15.

These are not the only numerical bases, you can theoretically have any num- ber system with any number. The examples 
below are not tested, and are here for enrichment.

Base-8, octal, is used to represent Unix File Permissions (and was used in the early days of computing).

Base-60, sexagesimal, is used in measuring time, angles (in degrees), bear- ings, and geographic coordinates.

## Applications of Number Systems

### RGB Colour Codes
RBG is an abbreviation of red, green, and blue, which are the primary colours of light and can be combined with varying 
intensities to create other colours.

The intensity of each colour component is stored as a number, and each value is stored in a single byte, corresponding 
to 000000002 to 111111112, 0016 to FF16, and 0 to 255 in binary, hexadecimal, and decimal respectively.

When all 3 colour intensities are 0, the result is black. If all intensities are at their maximum, the result is white.

RGB colour codes are displayed in the form of #RRGGBB, where RR, GG and BB are 2-digit hexadecimal numbers that represent 
each component of the colour. These codes are used to represent colours in websites, typically written in HTML and CCS.

### Network Addresses
For computers to communicate/exchange data over a network, they must be able to locate each other so that transmitted 
data cn be directed to the correct destination.

This is done by giving each computer a unique name in the form of a se- quence of bytes called a network address.

The Internet is an example of a computer network, each computer on the Internet has an IP address, serving as its network 
address on the internet.

IP (internet protocol) is a standard system of rules used by computers on the Internet to communicate with each other. 
There are 2 versions of IP used today, IP version 4 and IP version 6.

- IPv4 
    - An internet protocol that is made up of 4 bytes (32 bits). Usually shown as a sequence of 4 denary 
    numbers, one for each byte of the address, separated by dots.
    - Since the value of a byte can only vary from 0 to 255, none of the 4 denary numbers can fall out of this range.
    - The maximum number of IPv4 addresses is 232, or 4.3 billion. With the rapid growth of the Internet in the 80s and 
    90s, the number of IPv4 addresses is insufficient.
- IPv6 
    - An internet protocol that is made up of 16 bytes (128 bits). Usually shown as a sequence of 8 hexadecimal numbers, each
    number being 16 bits. Each group uses 4 hexadecimal digits.
    - Hexadecimal is used for representation as using decimal would take up a maximum of 3 × 16 = 48 digits, which is inconvenient.

### MAC Address
Media Access Control (MAC) address – A sequence of bytes (usu- ally permanent in nature) that is used to identify a particular 
network interface controller.

It is a permanent way to locate or identify a specific computer or device, as the IP address of a computer may change each time 
it connects to the internet.

It is made up of 6 bytes (48 bits), and is shown as a sequence of 6 hexadecimal numbers, one for each byte of the address. They 
are separated either by colons or hyphens.

The format for a MAC address is NN-NN-NN-DD-DD-DD, where NN-NN-NN is the manufacturer’s identity number; and DD-DD-DD is the 
device’s serial number.

### ASCII and Unicode
ASCII is a standard that defines how numbers are used to represent com- mon characters that can be typed using a keyboard, 
such as uppercase and lowercase letters. Only 128 distinct characters can be represented as ASCII codes are defined to be 
exactly 7 bits long.

The first 32 ASCII codes (0-31) represent non-printing characters that are not written symbols or the space character. They 
are used to control devices or represent special input such as the backspace and escape keys on a keyboard.

The last ASCII code, 127, is used to represent the special input of typing the delete key.

Hexadecimal digits are often used to express these codes as only 2 digits are needed, which is more compact than 3 decimal digits 
or 7 binary digits.

An expanded standard called Unicode is used to represent other charac- ters, such as Mandarin characters. It uses numbers to 
represent characters like ASCII, but are not as restrictive in the number of bits they must be defined as. The number of bits 
used to represent each character can range from 8-32 bits, allowing over a million unique characters from many different written 
languages all over the world, making it preferable over ASCII.
