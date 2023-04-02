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
My main hobbies included:
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
            <div className="pageCardBody">
              <span className="pageCardTitle">
                Welcome!
              </span>
              <p className="whitespace-pre-wrap">{ welcome_info_text }</p>
              <Link className="visitPageButton" to='/projects'>Check out my projects!</Link>
            </div>
            <div className="pageCardBackground" />
          </div>
            <div className="divider"></div> 
            <div className="flex flex-row">
              <div className="pageCard w-auto">
                <div className="pageCardBody">
                  <h2 className="card-title">Hobbies:</h2>
                  <p className="whitespace-pre-wrap">{ hobbies_info_text }</p>
                </div>
                <div className="pageCardBackground" />
              </div>
              <div className="pageCard w-auto text-primary-content ml-4">
                <div className="pageCardBody">
                  <h2 className="card-title">Game Development</h2>
                  <p className="whitespace-pre-wrap">{ game_dev_info_text }</p>
                  <Link className="visitPageButton" to='/blog'>Check out my blog!</Link>
                  <Link className="visitPageButton" to='/game_dev_corner'>Check out my game development corner!</Link>
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