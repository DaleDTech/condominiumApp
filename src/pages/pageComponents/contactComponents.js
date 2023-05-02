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

function Logo() {
  return <h1 className={`${styles.logo}`}> Wedding Photographs, LLC </h1>;
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

// https://react-bootstrap.github.io/forms/form-control/
function ContactForm() {
  return (
    <Form className={`${styles.contactConctactForm} ${styles.guideBorder}`}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        {/* how to create a text area with space */}
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

// 👇️ named exports
export { NavDrop, Logo, Footer, ContactForm };
