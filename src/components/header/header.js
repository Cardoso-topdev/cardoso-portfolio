import React, { Fragment } from "react";
import "./header.css";
import Particles from "react-particles-js";
import ParticlesConfig from "./config.json";

const Header = () => {
  return (
    <Fragment>
      <Particles id="particles-js" params={ParticlesConfig} />
      <div className="navegacion">
        <div className="container">
          <h1>Oscar</h1>
          <nav>
            <a href="#">About me</a>
            <a href="#">Skills</a>
            <a href="#">Portfolio</a>
          </nav>
        </div>
      </div>
      <div className="contenido">
        <div className="container hero">
          <h1>I'm Oscar Cardoso</h1>
          <p>I am from Mexico and I am FullStack developer</p>
          <a className="btn">Contact me!</a>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
