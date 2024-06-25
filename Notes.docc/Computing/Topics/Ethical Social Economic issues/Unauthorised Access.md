# Unauthorised Access

A situation where data owned by someone is used by someone else without permission. 

## Cases of Unauthorised Access
It can occur due to the following:
- Poor authentication
- Poor access control/authorisation
- Poor understanding of privacy policies.

## Authentication

Authentication is the process of verifying the identity of a user. It requires the user to prove their identity by 
providing evidence from one or more of the following categories:
- Something the user knows (password)
- Something the user owns (mobile phone)
- Something the user is (thumbprint)

Each category of evidence used for authentication is called an authentication factor

@TabNavigator {
    @Tab("Knows: Passwords") {
        Passwords are the most common form of authentication. Some passwords are entered together with a username that 
        identifies who the user claims to be.

        They can be a poor form of authentication if they are chosen poorly or not well-kept as a secret. Avoid using 
        birthdates, surnames and other things that can be easily guessed.

        Use hard to guess passwords that are a mixture of lowercase, uppercase letters, numbers and symbols.

        Avoid re-using passwords or leaving them unchanged for a long time as it makes it easier for an intruder to guess 
        the password. Use unique passwords for each computer and account, and update them at least once every 90 days.
    }

    @Tab("Owns: Security Tokens") {
        Some authentication systems require evidence from more than 1 authentication factor. Banks typically issue a device 
        called a security token to users who wish to access their accounts online.

        A **security token** is a device used specifically for authentication purposes, such as mobile phones and one-time 
        passwords (OTPs).

        The type of authentication that uses evidence from both something a user knows and owns is called **2-factor authentication**.

        2FA is stronger than a singular password as it is more difficult for an intruder to both guess a password and steal 
        the user’s security token. Hence, it is important to keep the security token in a secure location at all times and to 
        report a missing security token as soon as possible.

        If an OTP is sent wirelessly to a user’s mobile phone, it may be intercepted and used by an intruder during the 
        transmission process. If the secret algorithm used to generate OTPs is poorly chosen or accidentally revealed, an 
        intruder may find out how to generate OTPs without needing the security token at all.

        There is not much a user can do about this type of intrusion attempt.
    }

    @Tab("Is: Biometrics") {
        **Biometrics** is a type of authentication that is based on the measurement of human physical characteristics.

        For example, biometrics is used to identify a user by fingerprint or voice. Other characteristics used include the face, 
        iris, retina, and DNA.

        The use of biometric identification is more secure as the physical characteristics measured are typically unique to the
        individual and cannot be easily replicated. Thus, it helps prevent attempts to establish fraudulent identities and identity theft.

        However, biometric identification cannot be changed and is permenantly compromised if the biometric data is stolen.

        Identity theft is the impersonation of another person to steal personal details such as name and identity number for fraudulent purposes.
    }
}
