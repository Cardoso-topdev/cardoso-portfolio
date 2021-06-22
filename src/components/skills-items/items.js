import React, { Fragment } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaAngular,
  FaVuejs,
  FaPhp
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const Items = () => {
  return (
    <Fragment>
      <div className="skill-item">
        <FaHtml5 />
        <p>HTML 5</p>
      </div>
      <div className="skill-item">
        <FaCss3Alt />
        <p>CSS3</p>
      </div>
      <div className="skill-item">
        <SiJavascript />
        <p>JavaScript</p>
      </div>
      <div className="skill-item">
        <FaNodeJs />
        <p>Node JS</p>
      </div>
      <div className="skill-item">
        <FaReact />
        <p>React JS</p>
      </div>
      <div className="skill-item">
        <FaAngular />
        <p>Angular</p>
      </div>
      <div className="skill-item">
        <FaVuejs />
        <p>Vue JS</p>
      </div>
      <div className="skill-item">
        <FaPhp />
        <p>PHP</p>
      </div>
      <div className="skill-item">
        <FaNodeJs />
        <p>Node JS</p>
      </div>
    </Fragment>
  );
};

export default Items;
