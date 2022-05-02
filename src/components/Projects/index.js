import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap/Container";
import { Row } from "react-bootstrap/Row";
import { Col } from "react-bootstrap/Col";

function Projects() {
  const [projects] = useState([
    {
      name: "Run Buddy",
    },
    {
      name: "Tenantive.ly",
    },
  ]);

  return (
    <div className="container">
      <div className="row">
        <div class="col-6">
          {projects.map((image, i) => (
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={require(`../../assets/project-img/${i}.png`)}
              />
              <Card.Body>
                <Card.Title>{image.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
