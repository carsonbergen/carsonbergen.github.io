import React from "react";
import { Link } from "react-router-dom";

const info_text = `
Welcome to my personal website. 

My name is Carson Bergen, and I’m currently studying computer science at the University of Calgary.

I have quite a few interests, but at the moment I’m focusing on:
  - Web development
      - React, and TypeScript
  - Game development
      - 3D modelling
      - Procedural animation

Feel free to check out my blog, my projects, or my “Game dev corner” (where I post anything game development related).
`

function Home() {
  return(
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl font-bold">Welcome!</h1>
            <p className="py-6 whitespace-pre">{ info_text }</p>
            <button className="btn btn-primary">
              <Link to="/projects">Check out my projects!</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;