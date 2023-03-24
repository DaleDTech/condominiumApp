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

unction NavBar() {
  return (
    <Nav className={navStyle}>
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
  return <h1 className={logoStyle}> Wedding Photographs, LLC </h1>;
}



function Footer() {
  return (
    <footer className={footerStyle}>
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

// 👇️ named exports
export { NavBar, Logo, EmailForm, Footer };
