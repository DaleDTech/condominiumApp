import Head from "next/head";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import Router from "next/router";

import styles from "@/styles/Home.module.css";
import {
  Image,
  Button,
  Form,
  Carousel,
  Card,
  Row,
  Col,
  Jumbotron,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";

function NavDrop() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav
      className={`${styles.header} ${styles.guideBorder}`}
      variant="pills"
      activeKey="1"
      onSelect={handleSelect}
    >
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="condos">
          Available Condos
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" title="Contact">
          Contact
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Mission Statement</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Tenant Login</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">
          Neighboor + Nightlife
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">SPECIAL OFFER</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

function Logo() {
  return <h1> Luxury Condo, LLC </h1>;
}

function Footer() {
  return (
    // https://stackoverflow.com/questions/33949469/using-css-modules-how-do-i-define-more-than-one-style-name
    <footer className={`${styles.footer} ${styles.guideBorder}`}>
      <Container>
        <Row>
          <Col>
            {" "}
            Copyrights © Photography Studio 2021 West Coast Wedding
            Photographers
          </Col>
        </Row>
        <Row>
          <Col>
            <Image src="/assets/socialMediaBar/igFav.png" />
            <Image src="/assets/socialMediaBar/ttFav.png" />
            <Image src="/assets/socialMediaBar/liFav.png" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
function Masthead() {
  return (
    <>
      <h1 className={`${styles.floorplanGrid} ${styles.guideBorder}`}>
        {" "}
        Your Oasis Awaits (curasive )
      </h1>
      <p>
        This is will be a styled card with a shadow Mauris pellentesque lacus
        sit amet urna hendrerit, a ornare nisl facilisis. Aliquam erat volutpat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in
        nulla sapien
      </p>
    </>
  );
}

function AvailableUnits() {
  return (
    <>
      {/* gallery component */}
      <Container
        className={`${styles.floorplanMasthead} ${styles.guideBorder}`}
        fluid
      >
        //need to credit authors
        <Row>
          <Col xs="6" md="4">
            <Image src="/assets/images/photo1.jpg" fluid />
          </Col>
          <Col xs="6" md="4">
            <Image src="/assets/images/photo2.jpg" fluid />
          </Col>

          <Col xs="12" md="4">
            <Image src="/assets/images/photo6.jpg" fluid />
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="4">
            <Image src="/assets/images/photo3.jpg" fluid />
          </Col>
          <Col xs="6" md="4">
            <Image
              src="/assets/images/photo4.jpg"
              // className={styles.imageBorder}
              fluid
            />
          </Col>
          <Col xs="12" md="4">
            <Image
              src="/assets/images/photo5.jpg"
              // className={styles.imageBorder}
              fluid
            />
          </Col>
        </Row>
      </Container>
    </>
  );
} // 👇️ named exports
export { NavDrop, Logo, Footer, Masthead, AvailableUnits };
