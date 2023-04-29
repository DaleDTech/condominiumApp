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
  return (
    <Nav className={styles.header}>
      <Link href="undefined">
        <span className={styles.navLinks}> LUXURY CONDO LOGO </span>
      </Link>

      <Link href="undefined">
        <span className={styles.navLinks}> Availability</span>
      </Link>

      <Link href="undefined">
        <span className={styles.navLinks}> Tenant Login </span>
      </Link>

      <Link href="undefined">
        <span className={styles.navLinks}> About Us </span>
      </Link>
    </Nav>
  );
}

// function Logo() {
//   return <h1> Luxury Condo, LLC </h1>;
// }

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
        Your Oasis Awaits (curasive and centered)
      </h1>
      <p>
        This is will be a styled card with a dropshadow with selling points
        about the owners. Mauris pellentesque lacus sit amet urna hendrerit, a
        ornare nisl facilisis. Aliquam erat volutpat. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Vivamus in nulla sapien
      </p>
    </>
  );
}

/**

Ultimately, a full-fleged component with 
dropdown menus to filter options

For now, just a clickable search bar that accepts a number and
returns console.log or component/page that returns true




*/

function SearchBar() {
  return console.log("Found") || console.log("Not Found");
}

function AvailableUnitCard() {
  // Image: Pic of Unit
  // Specs: Beds, Bathroom, Unique Amenities, Number Available
  // Price: Monthly Price (Based off of current market, design an algo for that?)
  // Deposit: Fixed Deposit Price
  // Apply Button
  // https://www.wilshiremargot.com/floorplans
  // Card with rounded edges, dropshadow,

  return 0;
}

function AvailableUnitGrid() {
  return (
    <>
      {/* gallery component */}
      <Container
        className={`${styles.floorplanMasthead} ${styles.guideBorder}`}
        fluid
      >
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
export { NavDrop, Footer, Masthead, AvailableUnitGrid };
