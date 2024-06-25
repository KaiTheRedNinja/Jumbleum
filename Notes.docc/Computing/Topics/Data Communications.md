# Data Communications

@Metadata {
    @PageImage(purpose: icon, source: "Checkmark", alt: "Checkmark")
}

Networks and the way computers talk to each other

## Overview

- Network hardware
- Wired vs Wireless
- Components in a simple home network
- Client-server vs Peer-to-peer
- Parity and checksums

## Computer Networks
- Computer network 
    - A system of 2+ computers/devices that are connected together by a transmission medium for the exchange of data.
- Transmission medium 
    - A means of connecting 2+ computers together so that they may exchange data and interact with each other, such as via:
        - Copper cables
        - Radio waves (wifi/bluetooth) 
        - Light pulses (optical fibres)

## Advantages of deploying a computer network in organisations and businesses
- Shared resources
    - A network allows a group of computers to make use of shared resources.
    - Examples of shared resources are scanners, printers, and files
- Shared Internet access:
    - Depending on the network’s configuration, every user who logs onto the network may have access to the internet.
- Shared software:
    - Can be stored on the central server of a network and deployed to other computers over a network.
    - Most of the time, the shared software is cloud-based. 
    - Example: Microsoft Office
- Shared storage:
    - Data files can be stored on a central server for ease of access and backup purposes.
- Communication:
    - Computers in the same network are often able to share instant messages and emails for communication.

## Disadvantages of deploying a computer network in organisations and businesses
- Initial costs:
    - Installing a network could be costly due to the high setup and equipment costs.
- Maintenance costs:
    - There are subsequent costs associated with administering and maintaining the network.
- Security risks:
    - As files are shared through a network, there is the risk of virus/worm attacks spreading throughout the 
    network, even with just one computer infected.
- Risk of data loss:
    - Data may become lost or corrupted due to hardware failures or errors. Using a network means regular data backups are required.
- Server outages (for client-server networks):
    - If the server fails, the network will not be able to function, thus affecting work.

## Types of Computer Networks

@TabNavigator {
    @Tab("Local Area Network (LAN)") { 
        - A network of computing devices connected within a small geographical area, typically within the same building, such as a home, school, or office.
        - LANs typically provide faster data transfer than other networks, due to the small number of connections supported and close proximity of devices.
    }

    @Tab("Metropolitan Area Network (MAN)") {
        - A network of computing devices that typically spans across 2+ buildings within the same town or city.
        - A MAN is typically owned and operated by a large organisation such as a business or government body.
    }

    @Tab("Wide Area Network (WAN)") {
        - A network of computing devices covering a large-scale geographical area, typically across multiple geographical locations.
        - A WAN generally consists of multiple smaller networks such as LANs or MANs.
        - A WAN is not limited to a single geographical location and can span long distances via long-range transmission 
        media such as telephone lines, fibre optic cables or satellite links.
        - WANs can either be private or public. Private WANs are built and maintained by large multinational companies and 
        government organisations. The Internet is an example of a public WAN. WANs use more expensive and high-speed technology than LANs.
    }
}

## Factors Affecting Choice of Transmission Medium
Networks can be classified according to their transmission medium, such as cables or electromagnetic waves.


### Wired Networks
A network of devices connected by a physical medium, such as cables.

Data transfer is typically faster and more secure in a wired network.

However, as the number of devices and distance between devices increase, the cost of setting up the network increases as well.

Computers in a network communicate using a set of network protocols. The Ethernet is the most widely used wired 
network protocol in LANs and MANs.
- Network protocol - A set of standards and rules that govern how 2+ devices communicate over a network.
- Ethernet - The most commonly used wired network protocol for LANs and MANs.

### Wireless networks
A network of devices in which signals are transmitted without the use of a physical medium.

The transmission is in the form of electromagnetic waves, such as radio waves and microwaves.

Users can be connected to a wireless network as long as they are within range of the network coverage.

The most common wireless network protocol is Wi-Fi, which uses radio waves to transmit data.
- Wireless access point (WAP) - Network hardware that provides a connection between wireless devices up to 100m 
away and can connect to wired networks.

Obstacles such as walls or metal frames can reduce the strength of Wi-Fi signals. Radio signals such as those 
from microwave ovens can also interfere with Wi-Fi signals.

Wireless networks are becoming increasingly popular in homes and businesses as they are becoming lower in cost 
and area easy to configure and manage.

### Comparison of Wired and Wireless Networks

| Factor | Wired | Wireless |
|--------|-------|----------|
| Cost   | Initially cheaper, becomes more expensive as network grows in size due to the cost of cables. | Initially expensive due to cost of wireless networking equipment but becomes more cost-effective as network grows in size. |
| Bandwidth (Speed of transmission) | Faster and higher bandwidth as cables provide dedicated connection. | Generally slower and lower bandwidth due to possible interference from radio waves or microwaves; varies according to user location in relation to network. |
| Reliability | More reliable as data transmission is unaffected by interference. | Less reliable due to potential interference from radio waves and microwaves or blockage from physical obstructions. |
| Security | More secure as the network is less susceptible to interception and hacking. | Less secure due to possible intrusion by hackers. |
| User mobility | Lesser as network connections are fixed at specific spots and users cannot move to other locations. | Greater as users can move about freely within the range of the wireless network. |
| Scalability | More cumbersome to add new devices to the network as physical constraints and the running of cables need to be considered. | Easier to add new devices to the network as the router can be easily configured. |
| Physical organisation | Tends to look more disorganised due to cables running across floors. | More organised without cables. |

## Organisation of Computer Networks

### Types of organisations of networks
Computers in a network are generally classified as either clients or servers.
- Client 
    - A computer than initiates a connection to a server to request for resources and services to perform operations.
    - Employees in offices or students in schools would normally use client computers to do their work.
- Server 
    - A computer that shares resources and responds to requests from devices and other servers on the network.
    - They usually have higher capacity and are more powerful than a client as it needs to manage resources and services. These might include:
        - Providing central storage of files 
        - Sharing hardware such as printers 
        - Controlling logins and network access

Although any computer can function as a server, computers that are designed specifically for use as servers are built to be 
reliable and less prone to failure. This means that they may be much more expensive than normal computers.

Computers can be organised in either a **client-server** or **peer-to-peer** network.
- Client-server network
    - A computer network where higher-capacity computers acts as servers while the remaining computers are clients.
    - Each server contains data and other resources to be shared with clients. This server also fulfills requests from clients.
- Peer-to-peer (P2P) 
    - A computer network where all computers are considered as equals and the load is distributed among all computers.
    - Each computer in the network is able to act as both a client and a server, communicating directly with other computers.
    - Users are able to share files and resources located on their computers as well as access shared resources found on other computers in the network.

### Comparison of Client-Server and Peer-to-Peer Networks

Advantages of client-server networks:
- Centralised control of data and resources.
- Easy to schedule backups of all shared files at regular intervals.
- Security may be enhanced with the use of specialised software or operating system features that are designed for servers.
Disadvantages of client-server networks:
- Higher initial cost due to the need for a server.
- Administrative costs needed for the maintenance of server and clients.
Advantages of P2P networks:
- Cheaper to set up as there is no cost related to dedicated servers.
- Easy to set up as no specialised software or operating system features are needed.
Disadvantages of P2P networks:
- More effort is required to access and backup resources as they are stored locally within each computer instead of centrally in a server.
- Security is an issue as access rights are not administered by a central server.

| Feature | Client-Server | Peer-to-Peer |
|---------|---------------|--------------|
| Function | Data and resources are shared using 1+ dedicated servers; each computer has a distinct role (client or server) | Data and resources are shared directly between computers; each computer acts as both a client and server. |
| Organisation of hardware | Each client is connected to 1+ dedicated servers. | Each computer in a network can server as a client and server at the same time. |
| Bandwidth | Typically high but limited by the capability of the server. | Varies depending on how data needs to be transmitted; bandwidth may be reduced if a single computer must handle a large request, but may be increased if a large request can be divided into smaller requests that are handled by multiple computers simultaneously. |
| Security | High as access rights can be controlled centrally at a server. | Low as security is handled by each computer and not by a central server. |
| Setup cost | High as the use of specialised high-performance servers would be needed. | Low as basic computers can act as servers to share resources. |
| Storage | Centralised and carried out only at the server; usually managed by a network administrator. | Decentralised and can be carried out by individual users at each computer. |
| Application | Found in businesses or organisations with a large number of users. | Found in homes or small businesses where |

## Network Identifiers

Networks typically have many computers and programs using them at any given time. In order to identify the different networks, computers and programs, they need to be given names and describe their functions.

- Network address translation
    - A method of mapping multiple private addresses inside a local network to a public IP address before transferring the information onto the internet.
- Port numbers
    - A number that is used together with an IP address to uniquely identify a program that is running on a network.
    - Each program that is active on the network must be identifiable by one or more unique combinations of an IP address and a port number. 
    Both clients and servers can run programs that use port numbers to identify themselves.
    - A computing device can run multiple programs at the same time. For example, a single computer can run both a web server program with port 
    number 80 and a mail server program with port number 143. All port numbers are assigned in a range from 0 to 65,535.
- Service Set Identifiers (SSID)
    - A 32-byte string that identifies a wireless access point and all devices connected to it.
    - All wireless devices connected to the same WAP must use the same SSID.

## Network Hardware
- Network interface controller 
    - A hardware component that provides the hardware interface to enable the transfer of data between a device and a network.
    - A NIC may connect to a network physically or wirelessly.
    - Most devices are equipped with a built-in NIC.
    - Each NIC has a unique 48-bit MAC address that can be used to uniquely identify the particular computer or device.
- Network hub 
    - The simplest way to connect multiple devices to the same network.
    - When a hub receives a packet, the packet is transmitted to all devices that are connected to the hub.
    - Likewise, when a device responds, the response is sent to every device that is connected to the hub.
    - A hub acts like a loudspeaker as it broadcasts the data to all its connected devices without limiting the 
    data to only the specific device it was intended for.
- Packet 
    - A unit of broken-up data containing a header with information about the source and destination addresses 
    that are needed for transmission.
- Network switch
    - A device that constructs a single network by connecting multiple similar networks together.
    - Switches are typically used to connect multiple LANs that use the same protocol so that the connected network 
    can cover a larger physical area.
    - Unlike a hub that simple repeats all data to all connected devices, a switch uses MAC addresses to keep track 
    of the devices connected to it. This lets the switch intelligently decide whether it should drop or forward the 
    packets it receives.
- Router 
    - A device that forwards packets between separate networks.
    - While a switch combines multiple similar networks that use the same protocol into a single network, a router 
    keeps the connected networks (which may use fundamentally different protocols) separate and forwards packets 
    between them using Internet protocols.
    - In order for a router to forward packets between different networks using Internet protocols, both the device 
    sending the packet and the device receiving the packet must be identified using IP addresses.
    - Switches forward packets based on MAC addresses, routers forward packets based on IP addresses, which may change 
    dynamically. Each network will share the same public IP address. Other networks will only be able to see your 
    public IP address.
    - When data meant for you is sent from another network to yours, it will be sent to your public IP address (the 
    router’s IP address)
- Modem (modulator-demodulator)
    - A device that is responsible for modulation and demodulation.
    - Ethernet cables are not suitable for connecting over long distances, as the number of transmission errors 
    increases with cable length. ISPs typically use special protocols and long-range transmission media such as telephone 
    lines or fibre optic cables.
    - Long-range transmission media are not designed for transferring digital data that is used by computers. (Example: 
    Telephone lines use analogue electrical pulses to transmit sound). It is necessary to convert digital data into a 
    form suitable for the transmission medium before it can be transmitted.
    - Modulation – The process of converting digital data into a form suitable for transmission.
    - Demodulation – The reverse process of modulation.
    - When setting up Internet access in a home network, an ISP will typically provide a modem that sets up a long-distance 
    connection to the ISP’s network.

## Network Topologies

> Definition: Topology - A term that describes the physical layout of a network. Understanding the topology is essential to 
designing a network.

### Bus Topology
A common cable or backbone known as the bus connects all devices.

The bus is a medium that allows the transmission of data, and allows devices to communicate with the server, with each other, 
and with devices such as a shared printer.

A sender transmits data along the bus and all devices connected to the bus can detect that data is being transmitted. Only 
the intended recipient will accept and process the data.

Advantages:
- Easy and cheap to install, uses less cabling that other network designs.
- Scalable as new computers can be easily added.
- Can continue to operate even when one computer breaks down.
- Works well for small networks.

Disadvantages:
- A break anywhere along the bus may disable the entire network.
- Size of the network is limited by capacity and length of the bus.
- A single bus is unsuitable for networks with many computers, performance slows down as number of computers increases.

### Ring Topology
In the ring topology, each computer is connected to 2 other computers in a ring formation.
All the data is passed around in the same direction (like a circle).
If a failure occurs in the cable or if a computer breaks down, the entire network will fail to function.

Advantages:
- Can operate over larger distances and handle more data that a bus topology.
- Data packets that are sent between two computers will pass through intermediate computers, hence a central 
server is not required to manage the network.

Disadvantages:
- If a computer or cable in the network fails, the entire network may fail as the data cannot be passed on.
- Adding a new computer to the ring network would mean that the whole communication ring needs to be temporarily interrupted.

### Star Topology
In the star topology, network hardware such as a hub or switch is at the centre of the network with connections to all the other computers.

The computers will send data to the central network hardware and the hardware forwards the data to the intended destination.

Advantages:
- The load on each section of cabling is reduced as each computer uses a separate cable from the rest.
- If a fault occurs at a computer or cable, it is easy to isolate the fault and do a replacement without affecting the rest of the network.
Disadvantages:
- Uses more cabling than other topologies, hence more expensive.
- If the central network hardware fails, the entire network fails.

## Error Checking

Data can become lost or corrupted during transmission. Since data is rarely sent in a single stream and instead is 
broken up and sent in smaller packets, this allows us to focus on detecting transmission errors one packet at a time.
There are 2 basic-error checking methods to ensure that the data received at the destination is the same as that at 
the source:
- Parity check
- Checksum

### Parity Check

- **Parity check** 
    - An error checking technique which uses a parity bit to detect errors.
    - This is the simplest method of error detection.
- Parity bit 
    - An additional bit, that is either appended or prepended to a string of binary data before transmission.
    - The parity bit is either 0 or 1, depending on whether an odd/even parity system is used.
- Odd parity system 
    - A type of parity check system in which the sum of 1-bits in each packet (including the parity bit) is odd.
- Even parity system 
    - A type of parity check system in which the sum of 1-bits in each packet (including the parity bit) is even.

Take the following 7-bit packet: 1010001.
There are 3 1-bits in the data string. In an even parity system, the parity bit 1 would be added (11010001), and 
in an odd parity system, the parity bit 0 would be added (01010001).

There a some limitations to parity checks.
- Cannot determine where the error occurred.
- Cannot detect serious errors where multiple bits are changed.
- If an even number of bits get corrupted within the same packet, they effectively cancel each other out and results in a false negative.

### Checksum
- Checksum 
    - A calculated value that is used to determine the integrity of transmitted data.

It serves as a unique identifier for the data and is sent together with the data.
Before transmission, the checksum for the data is calculated. Assuming the checksum is 1 byte in length, it can be 
calculated in 2 ways. Let s be the sum of all the bytes in the data, and C be the checksum value:

```math
C = \begin{cases} s & s < 256 \\ s \bmod 256 & s \geq 256 \end{cases}
```

In other words, if the sum of bytes in data is less than 256, the sum is the checksum. Otherwise, take the modulus of 256.
The data and checksum are sent together. At the destination, the checksum is recalculated and compared to the sent checksum 
value. If they match, data was transmitted correctly.