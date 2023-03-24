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
    <Nav>
      <Link href="undefined">
        <span> Home </span>
      </Link>

      <Link href="undefined">
        <span> About Us </span>
      </Link>

      <Link href="undefined">
        <span> Our Wedding Photographers </span>
      </Link>

      <Link href="undefined">
        <span>BOOK FOR YOUR WEDDING</span>
      </Link>
    </Nav>
  );
}

function Logo() {
  return <h1> Wedding Photographs, LLC </h1>;
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
