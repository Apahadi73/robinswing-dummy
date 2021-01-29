import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import posts from "../dummyData/posts";

function YearlyPropositionPage() {
  return (
    <Container>
      <h3 className="d-flex justify-content-center text-left ">
        Yearly Proposition
      </h3>

      <Row>
        {posts.map((post) => {
          return (
            <Col sm={12} md={6} lg={4} xl={4} className="my-2" key={post.id}>
              <Card
                border="light"
                style={{
                  padding: "0.5rem",
                }}
              >
                <Card.Img variant="top" src={post.imageUrl} />
                <Card.Text style={{ color: "grey" }}>{post.date}</Card.Text>
                <Card.Title>{post.title}</Card.Title>
                <Link
                  to={`/proposition-page/posts/${post.id}`}
                  style={{
                    width: "50%",
                  }}
                >
                  Learn More
                </Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default YearlyPropositionPage;
