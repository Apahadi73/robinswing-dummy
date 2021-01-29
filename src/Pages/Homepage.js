import React from "react";
import {
  Button,
  Container,
  Image,
  Jumbotron,
  Row,
  Col,
  Card,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import holdingHands from "../images/hero.png";
import team from "../images/team.svg";
import love from "../images/love.svg";
import target from "../images/target.svg";
import CarouselCard from "../components/UIElements/CarouselCard";
import FormContainer from "../components/UIElements/FormContainer";

function Homepage() {
  const infos = [
    {
      title: "Our Team",
      description:
        "Diverse opinions amongst diverse people make for an equitable democracy. We are a small team based in Los Angeles looking to strengthen our community.",
      imageUrl: team,
    },
    {
      title: "Our History",
      description:
        "Boxes are for votes, not for people. We started Robinswing with a vision of a refined platform where anyone can chat about and research props, candidates, and laws.",
      imageUrl: love,
    },
    {
      title: "Our Mission",
      description:
        "We focus on making the maximum positive effort for our community. Our mission is privacy within a democracy, and this nonprofit",
      imageUrl: target,
    },
  ];
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
        {infos.map((info) => {
          return (
            <Col sm={12} md={6} lg={4} xl={4} className="my-2">
              <Card border="light">
                <Card.Img
                  variant="top"
                  src={info.imageUrl}
                  style={{
                    width: "30%",
                    margin: "10px auto",
                  }}
                />
                <Card.Body>
                  <Card.Title variant="center">{info.title}</Card.Title>
                  <Card.Text>{info.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <CarouselCard />
      <h3 className="d-flex justify-content-center text-left  pt-3">
        Stay in Touch
      </h3>
      <h4 className="d-flex justify-content-center text-left ">
        Sign up for our newsletter!
      </h4>
      <FormContainer>
        <InputGroup className="mb-3">
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
    </Container>
  );
}

export default Homepage;
