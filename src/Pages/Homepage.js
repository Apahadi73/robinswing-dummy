import React from "react";
import {
  Button,
  Container,
  Image,
  Jumbotron,
  Row,
  Col,
  InputGroup,
  FormControl,
  Card,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import hero from "../images/hero.jpg";
import touchvpn from "../images/touchvpn.jpg";
import brave from "../images/brave.png";
import disconnect from "../images/disconnect.jpg";
import unity from "../images/unity.png";
import equality from "../images/equality.svg";
import security from "../images/security.svg";
import privacy from "../images/privacy.png";
import teamWork from "../images/team-work.png";
import teamResilient from "../images/team-resilient.png";

import FormContainer from "../components/UIElements/FormContainer";
import "./HomePage.css";

function Homepage() {
  const companyValues = [
    {
      url: privacy,
      name: "item1",
      description: "Robinswing promises privacy for its users",
    },
    {
      url: teamWork,
      name: "item3",
      description:
        "Working as a team for a nonprofit startup makes Robinswing's foundation",
    },
    {
      url: teamResilient,
      name: "item4",
      description:
        "We are a nation of resilience; we at Robinswing believe it is important to persevere in the face of adversity.",
    },
    {
      name: "item2",
      url: unity,
      description:
        "Just as a nation united is a nation prospering, a team united is a team prospering. Robinswing encourages unity and teamwork.",
    },
    {
      url: equality,
      name: "item5",
      description:
        "Equal justice means equal opportunity; we are proud to establish a nonpartisan platform that encourages all citizens to participate.",
    },
  ];

  const recommendedServices = [
    {
      image: disconnect,
      url:
        "https://chrome.google.com/webstore/detail/disconnect/jeoacafpbcihiomhlakheieifhpjdfeo/related?hl=en",
      name: "Disconnect",
      description: `Disconnect lets you visualize and block the invisible websites that
            track you. Load the pages you go to 44% faster. Stop tracking by
            thousands of third-party sites.`,
    },
    {
      image: touchvpn,
      name: "Touch VPN ",
      description: `  Unable to access some websites? Worried about unprotected Wi-Fi
            hotspots? Want to be protected from surveillance? Get the best free
            VPN for chrome today!`,
      url:
        "https://chrome.google.com/webstore/detail/touch-vpn-secure-and-unli/bihmplhobchoageeokmgbdihknkjbknd?hl=en",
    },
    {
      image: brave,
      name: "Brave Browser",
      description: `  Brave offers automatic HTTPS upgrades to add encryption to your Internet connections whenever possible. Brave also uses Google Safe Browsing to identify known security threats. Brave Shields blocks trackers and prevents fingerprinting, helpful for keeping you safe and your browsing anonymous.`,
      url: "https://brave.com/",
    },
  ];
  return (
    <Container className="parent">
      <Row className="py-3">
        <Col sm={12} lg={6}>
          <h3 className="hero-side ">WHERE PRIVACY MEETS DEMOCRACY.</h3>
          <Button>Install Robinswing</Button>
          <p className="sub-heading-grey py-2">
            An anonymized application software where students, voters, and
            Americans don't have to worry about their data being stolen.
          </p>
        </Col>
        <Col sm={12} lg={6} className="my-2 ">
          <div data-aos="fade-left">
            <Image src={hero} className="hero-image" />
          </div>
        </Col>
      </Row>

      <h3 className="d-flex justify-content-center text-left  pt-3">
        OUR VALUES
      </h3>

      <Row>
        {companyValues.map((value) => {
          return (
            <Col sm={12} md={6} lg={4} xl={4} className="my-2">
              <div data-aos="fade-up">
                <Card style={{ border: "none" }}>
                  <Card.Img
                    variant="top"
                    src={value.url}
                    style={{
                      width: "30%",
                      margin: "10px auto",
                    }}
                  />
                  <Card.Body>
                    <Card.Title variant="center">{value.title}</Card.Title>
                    <Card.Text>{value.description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>

      <Row className="py-3">
        <div data-aos="fade-right">
          <Col sm={12} lg={6} className="my-3 px-1 ">
            <Image src={security} className="hero-image" />
          </Col>
        </div>
        <Col sm={12} lg={6}>
          <h3 className="hero-side ">Why Encryption?</h3>
          <p>
            The storing and sharing of sensitive data, whether it’s social
            security numbers or personal financial figures, can be risky
            business. Far too many businesses fall victim to hackers who take
            advantage of easily accessible usernames and passwords. What you
            think of as a “hard to crack” password, hackers think of it as “like
            taking candy from a baby.” Encryption will help eliminate this
            issues, as it protects individuals and organizations from the
            security nightmares of identity theft, cyber-fraud and the hefty
            price of data being lost or stolen or ransomed off.
          </p>
          <p className=" py-2">
            Encryption is the act of encoding data to render it unintelligible
            to someone who doesn’t have the authorization to access the data.
            Once data is encrypted, only authorized parties who have a “key” can
            read it or use it. That is, if the encryption method is effective,
            it should completely protect data from unauthorized access.
          </p>
        </Col>
      </Row>

      <h3 className="d-flex justify-content-center mt-5">
        Recommended Services
      </h3>

      <Row>
        {recommendedServices.map((service) => {
          return (
            <Col sm={12} md={6} lg={4} xl={4} className="my-2">
              <div data-aos="zoom-in">
                <Card style={{ border: "none" }}>
                  <Card.Img
                    variant="top"
                    src={service.image}
                    style={{
                      width: "30%",
                      margin: "10px auto",
                    }}
                  />
                  <Card.Body>
                    <a
                      style={{ display: "table-cell" }}
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card.Title>
                        <h4>{service.name} </h4>
                      </Card.Title>
                    </a>
                    <Card.Text className="mx-auto">
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>

      <h3 className="d-flex justify-content-center mt-5">
        Sign up for our newsletter!
      </h3>
      <FormContainer>
        <InputGroup className="my-3">
          <FormControl
            placeholder="Email Address"
            aria-label="Email Address"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-primary">SIGN UP</Button>
          </InputGroup.Append>
        </InputGroup>
      </FormContainer>
      <div className="fab">
        <img src="https://img.icons8.com/cute-clipart/64/000000/chat.png" />
      </div>
    </Container>
  );
}

export default Homepage;
