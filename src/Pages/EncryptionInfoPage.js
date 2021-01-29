import React from "react";
import { Container, ListGroup } from "react-bootstrap";

function EncryptionInfoPage() {
  return (
    <Container>
      <h2 className="d-flex justify-content-center ">WHY ENCRYPTION?</h2>
      <p>
        As you know, when we talk about the Security-of-Security, we're talking
        about securing all aspects of your physical security system-including
        communications, servers, and data. You should be able to keep your
        entire system safe from cyber-threats and attacks as well as illegal or
        unauthorized access.
      </p>
      <p>
        Business solutions have three tools at their disposal to ensure complete
        security - encryption, authentication, and authorization.
      </p>
      <h4>Your first tool: Encryption</h4>
      <p>
        Encryption is the process through which data is encoded so that it
        remains hidden from or inaccessible to unauthorized users. It helps
        protect private information, sensitive data, and can enhance the
        security of communication between client apps and servers. In essence,
        when your data is encrypted, even if an unauthorized person or entity
        gains access to it, they will not be able to read it.
      </p>
      <h4>How to encrypt data</h4>
      <p>
        The process itself is fairly straightforward. To encrypt data, an
        encryption key uses an encryption algorithm to translate (encode)
        plaintext or readable data into unreadable data or ciphertext. Only the
        corresponding decryption key can decode the scrambled ciphertext back
        into readable plaintext. How the encryption is done and what type of
        encryption is used gets much more complex.
      </p>
      <h4>Symmetric and asymmetric encryption</h4>
      <p>
        There are two types of encryption algorithms: symmetric and asymmetric.
        With a symmetric algorithm, both encryption and decryption keys are the
        same, so the same key must be used to enable secure communication.
        Symmetric algorithm encryptions are commonly used for bulk data
        encryption and are fast and easily implemented by hardware. The downside
        is that anyone with that decryption key can decrypt your data even if it
        is not intended for them.
      </p>
      <p>
        In asymmetric algorithm encryption, two separate but mathematically
        linked encryption keys are used. A public key is used to encrypt the
        data and can be distributed while the private key is used to decrypt the
        data and, therefore, is kept private.
      </p>
      <p>
        Through the use of a private key, asymmetric encryption eliminates the
        preliminary exchange of secret keys, allows for public keys to be shared
        with anyone, and provides an underlying architecture for digital
        certificates, digital signatures, and a Public Key Infrastructure (PKI).
        The disadvantages are that it is slower than symmetric algorithm
        encryption and that it requires greater computation power.{" "}
      </p>

      <h3 className="d-flex justify-content-center ">Recommended Services</h3>

      <ListGroup variant="flush">
        <ListGroup.Item style={{ padding: "0", border: "0" }}>
          <h5>
            <strong>
              <a
                style={{ display: "table-cell" }}
                href="https://chrome.google.com/webstore/detail/disconnect/jeoacafpbcihiomhlakheieifhpjdfeo/related?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Disconnect
              </a>
            </strong>
          </h5>
          <p>
            Disconnect lets you visualize and block the invisible websites that
            track you. Load the pages you go to 44% faster. Stop tracking by
            thousands of third-party sites.
          </p>
        </ListGroup.Item>
        <ListGroup.Item style={{ padding: "0", border: "0" }}>
          <h5>
            <strong>
              <a
                style={{ display: "table-cell" }}
                href="https://chrome.google.com/webstore/detail/touch-vpn-secure-and-unli/bihmplhobchoageeokmgbdihknkjbknd?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Touch VPN - Secure and unlimited VPN proxy
              </a>
            </strong>
          </h5>
          <p>
            Unable to access some websites? Worried about unprotected Wi-Fi
            hotspots? Want to be protected from surveillance? Get the best free
            VPN for chrome today!
          </p>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default EncryptionInfoPage;
