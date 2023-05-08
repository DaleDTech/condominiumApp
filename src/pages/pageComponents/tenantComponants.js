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

function LoginCard() {
  return (
    <>
      <h3> OAuth Comp Here against a dimmed background </h3>
    </>
  );
}

// 👇️ named exports
export { NavDrop, Logo, Footer, LoginCard };
