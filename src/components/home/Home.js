import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./home.css";
import MissionButton from "../missionbutton/MissionButton";

function Home() {
  return (
    <Container className="home" fluid>
      <Container className="core-information" fluid>
        <Card>
          <img src={""} />
          <Card.Body>
            <Card.Header>
              <h1>Juan Andres Gutierrez Herrera</h1>
            </Card.Header>
            <Card.Title>
              <h2 className="profession">Software Engineer </h2>
            </Card.Title>
            <MissionButton />
          </Card.Body>
          <Container className="story-section" fluid>
            <h1>story section</h1>
            <h2>background</h2>
            <h2>passion</h2>
            <h2>Values</h2>
          </Container>
          <Container fluid>
            <h3>
              Unique Selling Proposition
              <p>what makes me different from others in your field?</p>
            </h3>
          </Container>
        </Card>
      </Container>
    </Container>
  );
}

export default Home;
