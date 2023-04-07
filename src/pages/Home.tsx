import React from "react";
import { Link } from "react-router-dom";
import { Prism } from '@mantine/prism';
import './../App.css';
import ThreeDModelViewer from "../components/ThreeDModelViewer";
import Model from "../components/Model";

const welcome_info_text = `
My name is Carson Bergen, and I’m currently studying computer science at the University of Calgary.

I have quite a few interests, but at the moment I’m focusing on:
  - Web development
      - React, and TypeScript
  - Game development
      - 3D modelling
      - Procedural animation

Feel free to check out my blog, my projects, or my “Game Development Corner” (where I post anything game development related).
`

const hobbies_info_text = `
My main hobbies include:
  - Learning languages (currently working on becoming fluent in Russian, and intermediate in Spanish)
  - Game development
  - 3D modelling
`
const game_dev_info_text = `
I'm currently working on developing a FPS game in Godot, but the next project I'm likely to release is a remake of a game jam game I made awhile ago called Bottled Up. If you want to see progress reports on the game, consider checking out my blog.
`

function Home() {
  return(
    <>
      <div className="page">
        <div className="mainPageCard">
          <div className="pageCard">
            <div className="pageCardBody hero rounded-box flex flex-rows">
              <div className="hero-content flex-col lg:flex-row">
                <div>
                  <h1 className="textTitle">Welcome!</h1>
                    <p className="py-6">
                      { welcome_info_text }
                    </p>
                </div>
              </div>
            </div>
            <div className="pageCardBackground" />
          </div>
          <div className="divider"></div>
          <div className="grid grid-flow-row lg:grid-flow-col space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 items-center">
            <div className="pageCard">
              <div className="pageCardBody hero rounded-box flex flex-rows">
                <div className="hero-content flex-col lg:flex-row">
                  <div>
                    <h1 className="textTitle">Hobbies</h1>
                      <p className="py-6 max-w-md whitespace-pre-wrap">
                        { hobbies_info_text }
                      </p>
                  </div>
                </div>
              </div>
              <div className="pageCardBackground" />
            </div>
            <div className="pageCard">
              <div className="pageCardBody hero rounded-box flex flex-rows">
                <div className="hero-content flex-col lg:flex-row">
                  <div>
                    <h1 className="textTitle">Game development</h1>
                      <p className="py-6 max-w-md whitespace-pre-wrap">
                        { game_dev_info_text }
                      </p>
                      <Link to="/game_dev_corner">
                        <button className="visitPageButton">Check out my game development corner</button>
                      </Link>
                  </div>
                </div>
              </div>
              <div className="pageCardBackground" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;