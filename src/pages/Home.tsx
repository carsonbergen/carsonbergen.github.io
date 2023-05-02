import React from "react";
import { Link } from "react-router-dom";
import "./../css/Main.css";

const info_text = `Hello! My name is Carson Bergen and I am currently obtaining a Bachelor of Science with a major in Computer Science at the University of Calgary.

Below are a few links to different pages on this website, but also links to things such as my Github, itch.io, and so on.

On the right-hand side there is also a convenient dropdown in the event that you become lost on this website! This website is currently undergoing development, so I'm sorry in advance, if there are any missing pages.
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