import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./home.css";
import MissionButton from "../missionbutton/MissionButton";
import oneDot from "../../assets/oneDot.png";

function Home() {
  return (
    <Container className="home" fluid>
      <Row>
        <Col></Col>
      </Row>
      <Row>
        <Col><h1>Juan Andres Gutierrez Herrera</h1> 
        <h3> Personal Info</h3>
        </Col>
        <Col><Image height={158} width={128} src={oneDot}/></Col>
        <Col><h1>Background Information.</h1></Col>
      </Row>
      <Row>
        <Col><h1>Values</h1></Col>
        <Col><h1>Mission</h1></Col>
      </Row>

    </Container>
  );
}

export default Home;


{/* <Row></Row>
      <Container className="core-information" fluid>
        <Card>
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
      </Container> */}