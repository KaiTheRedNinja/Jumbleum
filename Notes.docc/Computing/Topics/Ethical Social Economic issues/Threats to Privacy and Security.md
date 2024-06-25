# Threats to Privacy and Security

Things that can threaten privacy and security, and how to defend against them

## General Threats

@TabNavigator {
    @Tab("Cookie") {
        - A small file used by websites to store personal infor- mation on a user’s web browser.
        - Not malicious by nature, can be misused to collect personal information about users.
        - These little brats appear on every single website since at least 2015.
    }
    @Tab("Pharming") {
        - The interception of requests sent from a computer to a legitimate website and redirection to a 
        fake website to steal personal data.
        - Stolen data can then be used for unauthorised access to even more of the victim’s data.
        - Harder to detect than phishing as the fake website uses the same address as the real website.
    }
    @Tab("Spamming") {
        - Mass distribution of unwanted messages or adver- tising to email addresses which are collected from 
        sources such as public mailing lists, social media sites, company websites and personal blogs.
    }
    @Tab("Spyware") {
        - A hidden program that secretly collects personal in- formation about its users and transmits this information 
        to attackers without the users’ knowledge or consent.
        - The collected data can then be used for unautho- rised access to even more of the victim’s data.
        - Examples include literally any product a big tech company has produced in the last decade. They know your 
        most embarrassing secrets. Be afraid.
    }
    @Tab("Trojan Horse") {
        - A computer program that pretends to be a harmless file or useful application.
        - Onceitisrun,itdoessomethingharmfulsuchasgiv- ing intruders unauthorised access to the computer instead.
    }
    @Tab("Unauthorised access") {
        - The use of data owned by someone else without per- mission.
        - Arises as a result of privacy and security threats that bypass authentication and authorisation by exploiting 
        software bugs or tricking the user into perform- ing harmful actions.
        - Unauthorised access to passwords or private infor- mation can lead to identity theft, stolen money, or public 
        embarrassment like your search history.
    }
    @Tab("Virus") {
        - A computer program that attaches itself to a nor- mally harmless program and modifies it.
        - When the modified program is run by a user, the virus attaches copies of itself to any other programs it can 
        find, “infecting” them.
    }
    @Tab("Worm") {
        - A computer program that runs automatically and at- tempts to spread by sending copies of itself to other 
        computers.
        - Unlike a virus, a worm need not attach itself to an existing program.
    }
}


## Defensive Measures
Loss of privacy and security is really bad, so we must adopt countermeasures to avoid becoming victims.

### Install anti-virus and anti-spyware programs
> Definition: Anti-spyware - Software to detect, remove, and stop spyware and
other malware from running.

> Definition: Anti-virus - Software to detect,remove and stop viruses and other malware from running.

Counters viruses, worms, spyware and Trojan horses, since they need to run on a user’s computer in 
order to perform their respective attacks.

These programs can be used to scan a user’s storage and email to detect and remove malware. If a 
program has been infected by a virus, it may also try to restore the original program.

Although powerful, most rely on a list of signatures, unique evidence used to detect a known version of 
some malicious software. This list has to be updated regularly to ensure protection provided continues 
to be effective against new malware. Most programs update the list automatically through the Internet.

Some especially devious Trojan horses appear to be anti-virus and anti-spyware programs, but they are 
SUS!!! Only trust programs provided by reputable companies or websites, or as part of the computer’s 
**operating system**

### Update Software Regularly
Most malware require human interaction to activate, but worms can run automatically by exploiting bugs 
in otherwise legitimate programs already running on a computer.

For example, a flawed web browser may have a bug that allows websites to run malicious programs without 
the user’s knowledge.

To prevent this, update software regularly so bugs that were discovered since the last update can be 
fixed. This is especially important for software used to interact with public networks like the Internet, 
as data from public networks is more likely to be malicious and designed to take advantage of known bugs.

### Identify phishing
Phishing emails should be ignored and deleted. There are several telltale signs to identify phishing emails.
- Claims to be from a company/bank asking for confidential information. Most companies and banks never ask 
for such information via email. If in doubt, call the company or bank to verify.
- Generic greeting such as ”Dear User”, it is a sign that the email was sent automatically and not by a person.
- Inaccurate logos and grammatical or spelling errors.
- Sender’s address or contact does not match the suppose source of email.
- Email has hyperlinks with destinations that do not match what the hyperlink text says or is otherwise 
unexpected. Place mouse cursor over the hyperlink and its destination should appear as a popup or on the status bar.
- Excessively urgent or threatening tone, a scare tactic to make victims act before they can think through 
their actions properly.
- Email promises offers that are too good to be true, tempting victims into revealing personal information.

### Identify pharming
Pharming is like phishing V2. The attacker attempts to intercept requests sent from a computer to a legitimate 
website and redirects the user to a fake website to steal personal data.

For example, a victim of pharming may log into their bank account, and are presented with a website that looks 
like the bank, but ISN’T. It’s an IMPOS- TOR. Now when you log in, the attacker can use these details to access 
your bank account on the actual website, and has now STOLEN YOUR MONEY.

For pharming to be successful, the attacker must either have malware run- ning on the victim’s computer or has 
taken control of a network device such as a router or server. This can occur as the software that runs on such 
devices is also susceptible to bugs.

It is harder to detect as everything seems to be normal while the attack takes place. Measures include:
- Ensure encryption is used when submitting sensitive information via the internet. Check if there’s a padlock 
icon at the address bar.
- Regularly check bank, debit/credit card and other statements to ensure all transactions are legitimate.
- Regularly update web browsers and the software running on the net- work hardware so that all known bugs are fixed.
- Enable 2FA for all bank transactions. This means even if the attacker is able to access the bank account, no 
unauthorised transactions can occur as the attacker would not be able to provide the required OTP.

### Manage spam
- Avoid giving your email to unfamiliar contacts or untrusted websites. If you really need to provide one, use 
a temporary email generator like 10minutemail. Or, set up a secondary email address dedicated to unimportant emails.
- Read and understand the privacy policy of any website, trusted or untrusted, that requests an email address 
before providing it. Some websites share email addresses with advertisers who spam.
- Look for options to disable email update or participation in mailing
lists when signing up or changing online account settings.
- Most email services have a filter feature that allow users to block specific senders or to only allow emails 
from specific senders through. Some filtering systems have advanced spam detection algorithms that can be trained by 
having the user identify examples of spam the filter is not yet able to detect. This lets the filter become more 
effective in detecting spam over time.

### Manage Cookies
Cookies are small pieces of data stored by the web browser when a user visits a website. Each time a user visits a 
website that uses cookies, the browser checks whether it has a relevant cookie and if so, it sends the information 
contained in that cookie back to the website.

The website is thus aware that the user has visited before and sometimes customises what appears on the page for the 
user. If no relevant cookie is found, the website may request for a new cookie to be created.

They are generally not malicious and are needed to keep track of authen- tication information to identify which user 
is currently logged in. However, they can be used to keep track of user movements and preferences within the website, 
such as which pages were most recently visited. Advertising companies with advertisements on multiple websites can 
also use cookies to keep track of users as they move from one website to another.

Most browsers have settings that allow users to manually delete or prevent cookies from being created by untrusted 
websites. These settings can also be configured to disable cookies or allow only selected websites to use cookies.