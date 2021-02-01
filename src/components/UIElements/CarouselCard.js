import React from "react";
import { Carousel } from "react-bootstrap";
import item1 from "../../images/carousel-item1.jpeg";
import item2 from "../../images/carousel-item2.jpeg";
import item3 from "../../images/carousel-item3.jpeg";
import item4 from "../../images/carousel-item4.jpeg";
import item5 from "../../images/carousel-item5.jpeg";

const ProductCarousel = () => {
  const photos = [
    {
      name: "item1",
      url: item1,
      description: "Robinswing promises privacy for its users",
    },
    {
      name: "item2",
      url: item2,
      description:
        "Just as a nation united is a nation prospering, a team united is a team prospering. Robinswing encourages unity and teamwork.",
    },
    {
      name: "item3",
      url: item3,
      description:
        "Working as a team for a nonprofit startup makes Robinswing's foundation",
    },
    {
      name: "item4",
      url: item4,
      description:
        "We are a nation of resilience; we at Robinswing believe it is important to persevere in the face of adversity.",
    },
    {
      name: "item5",
      url: item5,
      description:
        "Equal justice means equal opportunity; we are proud to establish a nonpartisan platform that encourages all citizens to participate.",
    },
  ];
  return (
    <Carousel pause="hover" className="bg-light">
      {photos.map((slide) => {
        return (
          <Carousel.Item key={slide.name} as="div">
            <img
              className="d-block w-100"
              src={slide.url}
              alt={slide.name}
              style={{
                display: "block",
                marginBottom: "4.5rem",
              }}
            />
            <Carousel.Caption
              style={{
                paddingTop: "0",
                paddingBottom: "1rem",
                justifyContent: "start",
              }}
            >
              <p style={{ color: "black" }}>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default ProductCarousel;
