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

// https://react-bootstrap.github.io/components/navs/

function NavDrop() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <span> LUXURY CONDO LOGO </span>
        </Link>
      </div>

      <br />

      <Nav className={styles.navBar}>
        <Link href="./floorplans">
          <span className={styles.navLinks}> Availability </span>
        </Link>

        <Link href="./tenantDashboard">
          <span className={styles.navLinks}> Tenant Login </span>
        </Link>

        <Link href="./aboutUs">
          <span className={styles.navLinks}> About Us </span>
        </Link>
      </Nav>
    </div>
  );
}

function PhotoCarousel() {
  return (
    <Container className={`${styles.indexCarousel} ${styles.guideBorder}`}>
      <Row>
        <Col>
          <Carousel fluid>
            <Carousel.Item>
              <Image src="/assets/photos/photo3.jpg" alt="First slide" fluid />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image src="/assets/photos/photo1.jpg" alt="First slide" fluid />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src="/assets/photos/photo2.jpg" alt="First slide" fluid />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

function CardOne() {
  return (
    <Card className={`${styles.indexCards} ${styles.guideBorder}`}>
      <Container>
        <Row>
          <Col>
            {" "}
            <Image src="/assets/photos/photo17.jpg" alt="First slide" fluid />
          </Col>

          <Col>
            s ac. Diam quam nulla porttitor massa. A lacus vestibulum sed arcu.
            Felis donec et odio pellentesque diam volutpat commodo. Sem et
            tortor consequat id porta nibh venenatis cras. Diam volutpat commodo
            sed egestas. Varius sit amet mattis vulputate enim nulla aliquet.
            Nisl suscipit adipiscing bibendum est ultricies. Eros in cursus
            turpis massa tincidunt dui. Dolor sit amet consectetur adipiscing
            elit.
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

function CardTwo() {
  return (
    <Card className={`${styles.indexCards} ${styles.guideBorder}`}>
      <Container>
        <Row>
          <Col>
            Ut enim blandit volutpat maecenas volutpat blandit. Enim diam
            vulputate ut pharetra sit. Diam donec adipiscing tristique risus nec
            feugiat in fermentum. Bibendum neque egestas congue quisque egestas
            diam in arcu. Ante metus dictum at tempor commodo ullamcorper a
            lacus.
          </Col>

          <Col>
            {" "}
            <Image src="/assets/photos/photo15.jpg" alt="First slide" fluid />
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

// function Logo() {
//   return (
//     <h1 className={`${styles.logo} ${styles.guideBorder}`}>
//       {" "}
//       Luxury Condo Management{" "}
//     </h1>
//   );
// }

function Footer() {
  return (
    <footer className={`${styles.footer} ${styles.guideBorder}`}>
      <Container>
        <Row>
          <Col> Copyright 2023 Luxury Condo, LLC </Col>
        </Row>
      </Container>
    </footer>
  );
}

// 👇️ named exports
export { NavDrop, Footer, PhotoCarousel, CardOne, CardTwo };
