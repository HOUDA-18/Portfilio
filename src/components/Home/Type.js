import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
           "DevOps & Full Stack Engineer in Training",
           "3rd Year Engineering Student at ESPRIT",
           "Passionate about CI/CD & Cloud",
           "Web  Developer",
          "AI & Data Science Enthusiast"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
