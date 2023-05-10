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

function Logo() {
  return <h1 className={styles.logo}> Luxury Condo Management </h1>;
}

function NavDrop() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Logo />
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

function Masthead() {
  return (
    <>
      <h1 className={`${styles.floorplanMasthead} ${styles.guideBorder}`}>
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
            {" "}
            <Image src="/assets/photos/photo19.jpg" alt="First slide" fluid />
          </Col>
          <Col xs="6" md="4">
            {" "}
            <Image src="/assets/photos/photo20.jpg" alt="First slide" fluid />
          </Col>

          <Col xs="12" md="4">
            {" "}
            <Image src="/assets/photos/photo21.jpg" alt="First slide" fluid />
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="4">
            {" "}
            <Image src="/assets/photos/photo22.jpg" alt="First slide" fluid />
          </Col>
          <Col xs="6" md="4">
            {" "}
            <Image src="/assets/photos/photo23.jpg" alt="First slide" fluid />
          </Col>
          <Col xs="12" md="4">
            {" "}
            <Image src="/assets/photos/photo24.jpg" alt="First slide" fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
}

//Once "Apply" Button of is clicked, this OAuth Component will pop up for the user to login. Only OAuth used in this App for now.
function LoginPopUp() {
  return (
    <>
      <h3> OAuth Comp Here against a dimmed background </h3>
    </>
  );
}
//will put forms here for firebase
function InquiryForm() {
  return (
    <div className={styles.guideBorder}>
      <Container className={`${styles.maintanenceContactFormStyle} `}>
        <span>
          <p>
            Please fill out the form below to get on our waiting list and tell
            us about yourself!
          </p>
        </span>
      </Container>
      <br />
      <br />

      <Container className={`${styles.firstName} ${styles.guideBorder}`}>
        {" "}
        First Name{" "}
      </Container>
      <br />
      <br />
      <br />
      <Container className={`${styles.lastName} ${styles.guideBorder}`}>
        {" "}
        Last Name{" "}
      </Container>
      <br />
      <br />
      <br />

      <Container className={`${styles.email} ${styles.guideBorder}`}>
        {" "}
        Email{" "}
      </Container>
      <br />
      <br />
      <br />
      <Container
        className={`${styles.contactMessageForm} ${styles.guideBorder}`}
      >
        {" "}
        <span> (optional) </span>
        <br />
        <br />
        <span> Any questions ? </span>
      </Container>
    </div>
  );
}

// 👇️ named exports
export {
  NavDrop,
  Footer,
  Masthead,
  AvailableUnitGrid,
  LoginPopUp,
  InquiryForm,
};
