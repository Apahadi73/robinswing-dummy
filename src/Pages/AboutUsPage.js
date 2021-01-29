import React from "react";
import YouTube from "react-youtube";
import { Card, Col, Container, Button, Row } from "react-bootstrap";
import team from "../images/team.svg";

function AboutUsPage() {
  const infos = [
    {
      name: "Name",
      position: "Position",
      imageUrl: team,
    },
    {
      name: "Name",
      position: "Position",
      imageUrl: team,
    },
    {
      name: "Name",
      position: "Position",
      imageUrl: team,
    },
    {
      name: "Name",
      position: "Position",
      imageUrl: team,
    },
    {
      name: "Name",
      position: "Position",
      imageUrl: team,
    },
    {
      name: "Name",
      position: "Position",
      imageUrl: team,
    },
  ];
  // options for youtube
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <Container>
      <h3 className="d-flex justify-content-center ">Message from the CEO</h3>
      <div className="d-flex justify-content-center">
        <YouTube
          id="pitch-video"
          videoId="MwP7z42S4pA"
          opts={opts}
          onReady={_onReady}
        />
      </div>

      <p className="d-flex justify-content-center px-4">
        A nonprofit is as strong as the community that holds it up. Together, we
        can do more than we can do alone. Our goal with Robinswing is to
        catalyze voter turnout to affect real change. There are many ways to
        support our mission. Contact us to find out more about volunteer
        opportunities and ways that you can get our message to your community.
      </p>

      <h3 className="d-flex justify-content-center pt-4 ">Meet Our Team</h3>

      <Row className="my-4">
        {infos.map((info) => {
          return (
            <Col sm={12} md={6} lg={4} className="my-2" key={info.name}>
              <Card border="light">
                <Card.Img
                  variant="top"
                  src={info.imageUrl}
                  style={{
                    width: "30%",
                    margin: "10px auto",
                  }}
                />
                <Card.Body
                  className="d-flex-column"
                  style={{ textAlign: "center" }}
                >
                  <Card.Title>
                    <h4 className="mx-auto">{info.name}</h4>
                  </Card.Title>

                  <Card.Text>{info.position}</Card.Text>
                  <Button>Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default AboutUsPage;
