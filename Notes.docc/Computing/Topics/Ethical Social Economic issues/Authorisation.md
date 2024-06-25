# Authorisation

Once the user is authenticated, the ability of a computer to control the access of data and resources by that user is 
called access control/authorisation

## File Permissions
Most operating systems have settings to control the ability of users to view or make changes to specific files or 
folders. These settings are called **permissions**.

An application of file permissions is when a teacher may set a presentation file to be read-only for students, so 
they do not accidentally (or intentionally) change its contents.

Typically, users can only change the permissions for any file or folder they own. However, most OSs allow for a 
special user called an **administrator**, who can override the permissions for almost any file or folder.

A normal user may also be given special **administrator rights** that al- low them to override the permissions for certain 
files or folders, just like an administrator.

Managing permissions and administrative rights can be a complex task, and it is possible to accidentally grant access 
to a file or administrative rights to an unauthorised user. Such a user can then make use of such mistakes to gain 
unauthorised access to data and resources.

Authentication for the administrator must be especially strong, as an in- truder that successfully claims to be the 
administrator can bypass file per- missions entirely.

File permissions do not prevent an intruder with physical access to a storage device from accessing files or folders 
directly without going through the op- erating system. To prevent such unauthorised access, it is necessary to use encryption.

File permissions can be used as access control for both computers connected to a network and computers that are not 
connected to a network, but are shared by multiple users.

## Firewalls

Computers connected to a network are naturally more susceptible to intru- sion as unauthorised access can occur 
without the physical presence of an intruder.

Hence, computers connected to a network usually require another layer of access control called a **firewall**.

A firewall is a device/program that prevents unauthorised access to or from a private network. It works by 
monitoring each piece of data transmitted through a network. It then either blocks or allows data to pass based 
on a set of rules configured by an administrator.

When properly configured, a firewall can protect computers within a network from unauthorised access. They can 
be configured to block the transmission of data (aka **traffic**) between unauthorised senders and receivers, especially 
requests for data from anonymous users on the Internet. This prevents in- truders from gaining access to the 
computers within a network.

Since firewalls can also block traffic based on the type of application that is transmitting the data, it can 
also stop certain harmful programs from sending copies of themselves to other computers through the network.

Configuring a firewall correctly can be complex and a misconfigured firewall may have security vulnerabilities 
that allows intruders to gain unauthorised access.

A properly configured firewall allows for a private network (aka **intranet**) to be set up such that all external 
traffic is blocked and only authenticated and authorised users are able to access it. Since the users on a private 
network are generally trusted and expected to keep information on the network con- fidential, there are usually 
fewer concerns about unauthorised access when sharing data on a private network.

Conversely, a public network such as the Internet allows anyone to connect to it and share data. Since public 
networks have little-to-no restrictions, users need to be wary of possible security and privacy risks when accessing it.

## Encryption

Encryption is the process of encoding data so that a secret key is required to read the data. Like passwords, the 
secret key is usually provided as a sequence of bytes.

Before the encrypted data is decoded using the secret key, it appears as random and meaningless data.

Encryption is often used to protect data from unauthorised access by allowing only authorised users to have the 
secret key. It can be used in combination with file permissions so an unauthorised user who bypasses file permissions 
would still be unable to use the accessed data without knowing the secret key.

Fun fact: A website uses encryption if its address starts with ”https://” and a padlock icon appears next to its address.

##f Understanding of Privacy Policies

Unauthorised access can occur indirectly due to the actions of 3rd-party users or services.

For example, a user alters file permissions to let a classmate access some private files. That classmate in turn 
shares those files with others without the original user’s knowledge.

> Definition: Privacy - The ability to keep specific data or resources from being known by others.

In many countries, organisations are required by law to public or make available a privacy policy about the rules 
and practices they follow regarding the collection, protection and use of personal or private data provided by users.

> Example: Organisations in Singapore are required by the Personal Data Protection Act (PDPA) to make their privacy 
policies available upon request.

An increasing number of users share personal information such as photos and location data using online services, 
many of them are unfamiliar with the relevant privacy policies or how such sharing habits may indirectly result 
in unauthorised access. A poor understanding of the privacy policies of these services can often result in unauthorised 
access.

## Social Networking Sites

Social networking sites such as Twitter, Instagram and TikTok allow users to share photographs and information quickly 
with their families and friends. They can also be used to promote businesses or raise awareness of campaigns or causes 
and spread disinformation to clueless people

However, these sites can pose many privacy concerns because most users do not read or consider the repercussions of the 
privacy policies used by these sites regarding personal information such as status updates, notes, photographs and 
location data.2

The privacy policies for many social networking sites do not guarantee that personal data collected will never be exposed
to unauthorised users and may even require that your personal data be shared with advertisers in order to use their 
sites. Hence, personal data can potentially be harvested for spam and other threats to privacy that users did not 
authorise directly.

Remember: Once data is digitised and uploaded to a public network such as the Internet, it can potentially remain there 
forever (Wayback Machine go brr), since it can be easily copied and republished in ways no longer under the control of 
the original uploader.

Oh, and also some privacy policies for some social networking sites don’t guarantee that their personal data will be 
deleted from the site completely or immediately even after their account is closed, deleted, or has all personal data 
removed from it.

Personal data is sensitive and should not be shared publicly. Some companies may reject candidates after reviewing 
the information and photographs posted on their social networking accounts, even if this was posted while they were 
still at school. This is especially important since SST students are, you know, SST students.

To prevent unauthorised access when using social networking sites:
- Read and fully understand the privacy policy of the social networking site.3
- Set sharing settings to ”private” so only people you know in real life can read your posts.4
- Think twice before posting personal photographs or information that you may feel uncomfortable sharing.
- Accept friend requests wisely. Make sure you know everyone in your friends list.
- If you want to continue shitposting on the internet for whatever reason, I’d advise to create an account that has 
little-to-no correlation or evidence about your identity.