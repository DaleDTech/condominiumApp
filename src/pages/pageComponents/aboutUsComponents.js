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
    <Nav className={styles.header}>
      <Link href="undefined">
        <span className={styles.navLinks}> Home </span>
      </Link>

      <Link href="undefined">
        <span className={styles.navLinks}> Floorplans </span>
      </Link>

      <Link href="undefined">
        <span className={styles.navLinks}> Tenant Login </span>
      </Link>

      <Link href="undefined">
        <span className={styles.navLinks}> About Us </span>
      </Link>

      <Link href="undefined">
        <span className={styles.navLinks}> LUXURY CONDO LOGO </span>
      </Link>
    </Nav>
  );
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

// https://react-bootstrap.github.io/forms/form-control/
function AboutUsSummary() {
  return (
    <>
      <Container className={`${styles.aboutUs} ${styles.guideBorder}`}>
        <h1> ABOUT US (cursive )</h1>
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
export { NavDrop, Footer, AboutUsSummary };
