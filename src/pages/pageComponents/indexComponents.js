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
  NavDropdown,
} from "react-bootstrap";

// https://react-bootstrap.github.io/components/navs/
function NavDrop() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
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
function PhotoCarousel() {
  return (
    <Container>
      <Row>
        <Col>
          <Carousel fluid>
            <Carousel.Item>
              <Image
                // src="/assets/HomepageCarousel/holdingHands.jpg"
                alt="First slide"
                fluid
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Image
                // src="/assets/HomepageCarousel/placeSetting.jpg"
                alt="First slide"
                fluid
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image
                // src="/assets/HomepageCarousel/weddingShoes.jpg"
                alt="First slide"
                fluid
              />

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

// function NavBar() {
//   return (
//     <Nav>
//       <Link href="undefined">
//         <span> Home </span>
//       </Link>

//       <Link href="undefined">
//         <span> About Us </span>
//       </Link>

//       <Link href="undefined">
//         <span> Our Wedding Photographers </span>
//       </Link>

//       <Link href="undefined">
//         <span>BOOK FOR YOUR WEDDING</span>
//       </Link>
//     </Nav>
//   );
// }

function Logo() {
  return <h1> Luxury Condo Management </h1>;
}

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col> Copyrights © Luxury Condo Sales + Rentals 2023</Col>
        </Row>
        <Row>
          {/* social media links */}
          {/* <Col>
            <Image src="/assets/socialMediaBar/igFav.png" />
            <Image src="/assets/socialMediaBar/ttFav.png" />
            <Image src="/assets/socialMediaBar/liFav.png" />
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
}

// 👇️ named exports
export { NavDrop, Logo, Footer, PhotoCarousel };
