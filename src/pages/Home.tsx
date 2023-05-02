import React from "react";
import { Link } from "react-router-dom";
import "./../css/Main.css";

const info_text = `Hello! My name is Carson Bergen and I am currently obtaining a Bachelor of Science with a major in Computer Science at the University of Calgary.

Below are a few useful links to things such as:
- my GitHub
- my itch.io page
`

function Home() {
  return(
    <>
      <div>
        <div className="page-paragraph">
          { info_text }
        </div>
      </div>
    </>
  );
}

export default Home;