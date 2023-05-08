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

import styles from "@/styles/Home.module.css";

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

function HistoryGrid() {
  return (
    <Container>
      {/* horizontal images */}
      <Row>
        <Col> </Col> <Col> </Col> <Col> </Col>
      </Row>

      {/* Verical images */}

      <Row>
        <Col> </Col>

        <Col> </Col>
      </Row>

      {/* horizontal images */}
      <Row>
        <Col> </Col> <Col> </Col> <Col> </Col>
      </Row>
    </Container>
  );
}
// https://react-bootstrap.github.io/forms/form-control/
//
function AboutUsSummary() {
  return (
    <>
      <Container
        className={`${styles.floorplanMasthead} ${styles.guideBorder}`}
      >
        <h1> ABOUT US </h1>
      </Container>

      <Container className={`${styles.aboutUs} ${styles.guideBorder}`}>
        <span>
          <p>
            Morbi dapibus placerat lorem, vitae interdum justo lobortis vel.
            Mauris tincidunt placerat nisl, a pulvinar velit bibendum congue.
            Suspendisse dignissim nunc eu consequat consectetur. Duis et
            pharetra tortor, quis pharetra purus. Quisque id lobortis nisi.
            Mauris sit amet nibh eget justo ultrices maximus. Aenean nec est a
            leo tempor fermentum. Praesent et viverra urna.
          </p>
        </span>
      </Container>
    </>
  );
}

// 👇️ named exports
export { NavDrop, Footer, AboutUsSummary, HistoryGrid };
