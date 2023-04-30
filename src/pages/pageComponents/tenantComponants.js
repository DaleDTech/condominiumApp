import Head from "next/head";
import { React, Component } from "react";
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

function NavDrop() {
  return (
    <Nav className={styles.header}>
      <Link href="/">
        <span className={styles.navLinks}> LUXURY CONDO LOGO </span>
      </Link>

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
  );
}

function Logo() {
  return <h1 className={`${styles.logo}`}> Wedding Photographs, LLC </h1>;
}

function Footer() {
  return (
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

function LoginCard() {
  return (
    <>
      <h3> OAuth Comp Here against a dimmed background </h3>
    </>
  );
}

// 👇️ named exports
export { NavDrop, Logo, Footer, LoginCard };
