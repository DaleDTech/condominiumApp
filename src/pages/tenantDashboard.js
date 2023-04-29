import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Row, Col, Container, Carousel, Card, Nav } from "react-bootstrap";
//button in dropdown wrapper
import { Twirl as Hamburger } from "hamburger-react";

import {
  NavDrop,
  Footer,
  LoginCard,
} from "./pageComponents/tenantComponents.js";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Luxury Condo Management, LLC</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
          integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
          crossorigin="anonymous"
        />
      </Head>

      <main>
        <NavDrop />

        <LoginCard />
      </main>

      <Footer />
    </>
  );
}