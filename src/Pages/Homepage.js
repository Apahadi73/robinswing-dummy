import React from "react";
import {
  Button,
  Container,
  Image,
  Jumbotron,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import holdingHands from "../images/hero.png";
import team from "../images/team.svg";
import love from "../images/love.svg";
import target from "../images/target.svg";
import Carousel from "../components/UIElements/Carousel";

function Homepage() {
  return (
    <Container>
      <Jumbotron style={{ padding: "1rem" }}>
        <Image src={holdingHands} fluid />
        <h5 className="d-flex justify-content-center p-2">
          WHERE PRIVACY MEETS DEMOCRACY.
        </h5>
        <p className="d-flex justify-content-center text-left  px-2">
          An anonymized application software where students, voters, and
          Americans don't have to worry about their data being stolen.
        </p>
      </Jumbotron>
      <div className="d-flex justify-content-center">
        <Button variant="primary">Chat with Us</Button>
      </div>
      <Row className="my-4">
        <Col sm={12} md={6} lg={4} xl={4} className="my-2">
          <Card border="light">
            <Card.Img
              variant="top"
              src={team}
              style={{
                width: "30%",
                margin: "10px auto",
              }}
            />
            <Card.Body>
              <Card.Title variant="center">Our Team</Card.Title>
              <Card.Text>
                Diverse opinions amongst diverse people make for an equitable
                democracy. We are a small team based in Los Angeles looking to
                strengthen our community.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={4} className="my-2">
          <Card border="light">
            <Card.Img
              variant="top"
              src={love}
              style={{
                width: "30%",
                margin: "10px auto",
              }}
            />
            <Card.Body>
              <Card.Title variant="center">Our History</Card.Title>
              <Card.Text>
                Boxes are for votes, not for people. We started Robinswing with
                a vision of a refined platform where anyone can chat about and
                research props, candidates, and laws.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={4} className="my-2">
          <Card border="light">
            <Card.Img
              variant="top"
              src={target}
              style={{
                width: "30%",
                margin: "10px auto",
              }}
            />
            <Card.Body>
              <Card.Title variant="center">Our Mission</Card.Title>
              <Card.Text>
                We focus on making the maximum positive effort for our
                community. Our mission is privacy within a democracy, and this
                nonprofit platform is a reflection of our mission.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Carousel />
    </Container>
  );
}

export default Homepage;
