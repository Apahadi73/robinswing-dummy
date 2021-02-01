import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import posts from "../dummyData/posts";

function AllBlogs() {
  return (
    <Container>
      <h3 className="d-flex justify-content-center text-left ">All Posts</h3>

      <Row>
        {posts.map((post) => {
          return (
            <Col sm={12} md={6} lg={4} xl={4} className="my-2" key={post.id}>
              <div data-aos="zoom-in-up">
                <Card
                  border="light"
                  style={{
                    padding: "0.5rem",
                  }}
                >
                  <Card.Img variant="top" src={post.imageUrl} />
                  <Card.Text style={{ color: "grey" }}>{post.date}</Card.Text>
                  <Card.Title>
                    <h5>{post.title}</h5>
                  </Card.Title>
                  <Link
                    to={`/posts/${post.id}`}
                    style={{
                      width: "25%",
                    }}
                  >
                    Learn More
                  </Link>
                </Card>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default AllBlogs;
