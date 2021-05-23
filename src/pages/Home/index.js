import React from "react";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Designed from "../../components/Designed";
import "./styles.scss";
import State from "../../components/State";
import Free from "../../components/Free";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <>
      <div className="home">
        <div className="bg-intro">
          <img src="./assets/images/bg-pattern-intro.svg" alt="bg-intro" />
        </div>
        <Navbar />
        <Hero />
      </div>
      <Designed />
      <State />
      <Free />
      <Footer />
    </>
  );
}

<div className="bg-intro"></div>;
