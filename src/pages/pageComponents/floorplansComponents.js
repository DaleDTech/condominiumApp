import Head from "next/head";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import Router from "next/router";
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
} from "react-bootstrap";

function NavDrop() {
  return (
    <Nav>
      <Link href="undefined">
        <span> Home </span>
      </Link>

      <Link href="undefined">
        <span> About Us </span>
      </Link>

      <Link href="undefined">
        <span> Our Wedding Photographers </span>
      </Link>

      <Link href="undefined">
        <span>BOOK FOR YOUR WEDDING</span>
      </Link>
    </Nav>
  );
}

function Logo() {
  return <h1> Luxury Condo, LLC </h1>;
}

function Footer() {
  return (
    <footer>
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
      <h1> Your Oasis Awaits (curasive )</h1>
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
      <Container fluid>
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
