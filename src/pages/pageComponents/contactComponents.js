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

function NavBar() {
  return (
    <Nav className={`${styles.header} ${styles.guideBorder}`}>
      <Link href="undefined">
        <span className={navLinks}> Home </span>
      </Link>

      <Link href="undefined">
        <span className={navLinks}> About Us </span>
      </Link>

      <Link href="undefined">
        <span className={navLinks}> Our Wedding Photographers </span>
      </Link>

      <Link href="undefined">
        <span className={navLinks}>BOOK FOR YOUR WEDDING</span>
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

function contactForm() {
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
export { NavBar, Logo, EmailForm, Footer, contactForm };
