import React from "react";
import { Link } from "react-router-dom";
import { Prism } from '@mantine/prism';

const welcome_info_text = `
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

const hobbies_info_text = `
My main hobbies included:
  - Learning languages (currently working on becoming fluent in Russian, and intermediate in Spanish)
  - Game development
  - 3D modelling
`
const game_dev_info_text = (
  <article className="prose-stone">
    I'm currently working on developing a FPS game in Godot.
  </article>
)

function Home() {
  return(
    <>
      <div className="flex flex-col space-y-4 items-center">
        <div className="card w-[72rem] max-w-6xl bg-gray-700 text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Welcome!</h2>
              <p className="whitespace-pre-wrap">{ welcome_info_text }</p>
              <Link to='/projects'>Check out my projects!</Link>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="card w-[27rem] bg-gray-700 text-primary-content">
              <div className="card-body">
                <h2 className="card-title">Hobbies:</h2>
                <p className="whitespace-pre-wrap">{ hobbies_info_text }</p>
                <Link to='https://carsonbergen.itch.io/'>Check out my itch.io page!</Link>
              </div>
            </div>
            <div className="card w-[44rem] bg-gray-700 text-primary-content ml-4">
              <div className="card-body">
                <h2 className="card-title">Game Development</h2>
                <p className="whitespace-pre-wrap">{ game_dev_info_text }</p>
                <Link to='/game_dev_corner'>Check out my game development corner!</Link>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Home;