import React from "react";
import "./App.css";
import { MDBContainer, MDBRow, MDBIcon, MDBCol } from "mdbreact";
import logo from "./assets/logo.png";
import gif from "./assets/giphy.gif";

function App() {
  return (
    <MDBContainer fluid className="disaster-page-container">
      <MDBRow className="up-row">
        <img className="logo" src={logo} alt="logo"></img>
      </MDBRow>
      <MDBRow className="info">
        <p className="info-content">
          Atsiprašome, šiuo metu vyksta tinklapio atnaujinimo darbai.
          Susisiekime!
        </p>
      </MDBRow>
      <MDBRow className="links">
        <MDBCol className="my-col px-0" size="6">
          <div>
            <p>
              <MDBIcon className="mr-2" size="3x" fab icon="facebook-f" />
              <a
                href="https://www.facebook.com/jostaproductions/"
                target="blank"
              >
                Facebook'e
              </a>
            </p>
            <p>
              <MDBIcon className="mr-2" size="3x" fab icon="instagram" />
              <a
                href="https://www.instagram.com/josta_productions/"
                target="blank"
              >
                Instagram'e
              </a>
            </p>
          </div>
        </MDBCol>
        <MDBCol className="my-col px-0" size="6">
          <div>
            <p>
              <MDBIcon className="mr-2" size="3x" icon="at" />
              El. paštu: info@josta.lt
            </p>
            <p>
              <MDBIcon className="mr-2" size="3x" icon="phone-volume" />
              Telefonu: +37065166196
            </p>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow className="content">
        <img className="img-fluid" src={gif} alt="maintenance"></img>
      </MDBRow>
      <MDBRow className="bottom-row">
        <p>
          © Visos teisės saugomos. „Josta" - Filmavimo paslaugos visoje
          Lietuvoje
        </p>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
