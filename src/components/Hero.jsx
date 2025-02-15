import styled from "styled-components";
import Row from "../ui/Row";
import { useState } from "react";
import BackgroundMusic from "./BackgroundMusic";
import StyleBar from "../ui/StyleBar";

const Section = styled.div`
  height: 100dvh;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Timer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
`;

const Para = styled.p`
  font-size: 3rem;
  letter-spacing: 3px;
`;

function Hero() {
  return (
    <>
      <Section>
        <Content>
          <Row dir="col">
            <img
              src="./images/hero-img01.png"
              alt="hero image showing squid loan version 01"
              style={{ width: "70rem", marginTop: "2rem" }}
            />
            <img
              src="./images/logo3.png"
              alt="additional image for design"
              style={{ width: "25rem", opacity: "50%" }}
            />
          </Row>
        </Content>

        <Timer>
          <Row>
            <img
              src="./images/time.png"
              alt="sandbox timer"
              style={{ width: "4rem" }}
            />
            <Para>Get loan in Minutes!</Para>
          </Row>
        </Timer>
        <StyleBar />
      </Section>
    </>
  );
}

export default Hero;
