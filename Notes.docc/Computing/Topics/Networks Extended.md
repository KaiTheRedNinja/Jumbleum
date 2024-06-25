# Networks Extended

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Extra knowledge on networks, extending on basics covered in Data Communications.

> Remember: A network protocol is a set of standards and rules that govern how 2+ devices communicate 
over a network (a standardised way of doing certain actions and formatting data).

## OSI

OSI stands for Open Systems Interconnection. It is a conceptual model created by the International 
Organization of Standardization and enables di- verse communication systems to communicate using standard protocols.

The OSI model does not perform any functions in the networking process, it just divides network 
communication into 7 abstraction layers, so it is seen as a universal language for computer networking.

The layers, going from lowest to highest are:
1. Physical
2. Data Link
3. Network
4. Transport
5. Session
6. Presentation
7. Application

In the OSI model, layers 1-4 are considered the lower layers, and mostly concern themselves 
with moving data around. Layers 5-7 are considered the upper layers, containing application-level data.

### Physical Layer
The lowest layer of the OSI model, concerned with electrically/optically transmitting raw unstructured 
data bits across the network from the physical layer of the sending device to the physical layer of
the receiving device.

It can include specifications such as voltages, pin layout, cabling, and radio frequencies.

Physical resources, such as network hubs, cabling, repeaters, network adapters or modems; like RS-232 and 
RJ45, 100ASE-TX reside in this layer.

### Data Link Layer
At the data link layer, directly connected nodes are used to perform node-to-node data transfer where
data is packaged into frames. It also corrects errors that may have occurred at the physical layer.

The data link layer encompasses two sub-layers of its own.

The first is media access control (MAC), which provides flow control and multiplexing for device 
transmissions over a network.

The second sub-layer is local link control (LLC), which provides flow and error control over the physical 
medium as well as identifies link proto- cols, like Ethernet, 802.11, Wifi 7, Fibre Channel, Frame Relay, 
and Token Ring.

### Network Layer
The network layer is responsible for receiving frames from the data link layer, and delivering them to 
their intended destinations based on the addresses contaiend inside the frame.

It finds the destination using logical addresses, such as internet protocol. Routers are a crucial 
component used to quite literally route information where it needs to go between networks.

IP, ARP, IPsec, ICMP, IGMP, OSPF all reside here

### Transport Layer
This layer manages the delivery and error checking of data packets, regulating the size, sequencing 
and ultimately, the transfer of data between systems and hosts.

Examples of the transport layer include TCP, aka **Transmission Control Protocol**; UDP, SCTP, SSL, and TLS.

#### Internet Protocol Suite
Transmission Control Protocol/Internet Protocol, aka Internet Protocol Suite, is the set of protocols 
used over the internet.

It organises how data packets are communicated and makes sure packets have the following information:
- Source - Which computer the message came from
- Destination - Where should the message go
- Packet sequence - The order the message data should be re-assembled
- Data - Self explanatory much?
- Error check - The check to verify the message has been transmitted correctly.

TCP/IP Protocol includes:
- HTTP (Hypertext Transfer Protocol) 
    - Transfers web pages from web servers to client.
    - All webpage addresses start with http, and a https address is a secure web address which has 
    been encrypted. The latter is used for sites holding secure information, like bank details.
- FTP (File Transfer Protocol) 
    - A way to download, upload, and transfer files from one location to another on the Internet 
    and between computer systems. Often used for organising files on a web server for a website.
    - You can have private access to an area on an FTP server where you can upload your files. You 
    can then give another user access to download the documents that you have shared.
- UDP (User Datagram Protocol) 
    - A communications protocol pri- marily used to establish low-latency and loss-tolerating connections 
    between applications on the internet.
    - Similar to TCP, but messages are sent as chunks instead of packets, it is often faster, allowing 
    for gaming/video calls over the internet.
    - Although transfers are faster, they are not guaranteed.
    - Consider the following: TCP and UDB are required to put a baby (data) into a crib (destination). 
    TCP slowly, but carefully places the baby into the crib, whereas UDP dropkicks the baby through a 
    field goal, through the window, into the crib, which has a larger chance of the baby getting a severe 
    concussion (data corruption).
- SMTP (Simple Mail Transfer Protocol) 
    - An Internet standard communication protocol for electronic mail transmission over a network to a mail server.
- IMAP/POP3 (Internet Message Access Protocol, Post Office Protocol) 
    - governs retrieving emails from email servers.
    - IMAP is an Internet standard protocol used by email clients to retrieve email messages from a mail 
    server over a TCP/IP connection.
    - POP3 is an older protocol that was originally designed to be used on only one computer. Unlike modern 
    protocols that use two-way syn- chronization, POP3 only supports one-way email synchronization, only 
    allowing users to download emails from a server to a client.
    - Advantages of IMAP include access on multiple devices, synchro- nisation, ability to download parts, 
    and this is because mail is stored in the server.
    - Disadvantages of IMAP include computational overhead, privacy and performance.
    - The advantages of POP3 are the disadvantages of IMAP, and vice versa. POP3 downloads mail from the server 
    to the client and deletes the mail from the server.
- VOIP (Voice over Internet Protocol, aka IP telephony) 
    - A method and group of technologies for voice calls for the delivery of voice communication sessions 
    over IP networks, such as the Internet.
    - Advantages include lower costs, completely portable, advanced fea- tures and are more scalable than 
    telephone lines.

### Session Layer
The session layer controls the conversations between different computers.

A session or connection between machines is set up, managed, and terminated at layer 5.

Session layer services also include authentication and reconnections. E.g. Session establishment in TCP, SIP, RTP.

### Presentation Layer
This layer formats/translates data for the application layer based on the syn- tax or semantics 
that the application accepts.

Hence, it is also called the syntax layer. It also handles encryption and decryption required by the 
application layer, such as HTML, DOC, JPEG, MP3, M4V, and Sockets.

### Application Layer
At this layer, both the end user and application layer interact directly with the software application.

This layer sees network services provided to end-user applications such as a web browser or Office 365.

The application layer identifies communication partners, resource availability, and synchronizes 
communication. E.g. DNS, WWW/HTTP. P2P EMAIL/POP, SMTO, Telnet FTP