import React from "react";
import Items from "../skills-items/items";

const About = () => {
  return (
    <div className="bg">
      <div className="section-about container">
        <h2>About</h2>

        <div className="about">
          <div>
            <h3>More about me</h3>
            <p>Text here</p>
          </div>
          <div className="skills">
              <Items />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
