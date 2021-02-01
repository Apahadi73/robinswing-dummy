import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useParams, Link } from "react-router-dom";
import posts from "../dummyData/posts";

function PostDetailPage() {
  let { id } = useParams();
  const [post, setPost] = useState({});
  const [filteredPosts, setFilteredPosts] = useState([]);
  console.log(id);

  useEffect(() => {
    const fetchedPost = posts.filter((post) => post.id === Number(id))[0];
    const postList = posts.filter((post) => post.id !== Number(id));
    setFilteredPosts(postList);
    setPost(fetchedPost);
  }, [id]);

  return (
    <Container>
      <LinkContainer to="/posts">
        <Link>
          <i className="fas fa-caret-left mx-2"></i>See all Posts
        </Link>
      </LinkContainer>
      <Row className="py-3">
        <Col sm={12} lg={9} className="my-2 " key={post.id}>
          <Card
            border="light"
            style={{
              padding: "1.5rem",
            }}
          >
            <Card.Title>
              <h3>{post.title}</h3>
            </Card.Title>
            <Card.Img variant="top" src={post.imageUrl} />
            <Card.Text style={{ color: "grey" }}>{post.date}</Card.Text>

            <Card.Text>{post.description}</Card.Text>
          </Card>
        </Col>
        <Col sm={6} lg={3} key={post.id}>
          <h3 className="mt-3">Recent Posts</h3>
          {filteredPosts.map((post) => {
            return (
              <Row className="m-1 mb-3" key={post.id}>
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
                    onClick={() => {
                      id = post.id;
                    }}
                    to="#"
                  >
                    Learn More
                  </Link>
                </Card>
              </Row>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default PostDetailPage;
