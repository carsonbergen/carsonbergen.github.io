import { Link } from "react-router-dom";

import ImageCarousel from "../components/ImageCarousel";
import CarouselImage from "../components/CarouselImage";
import Warning from "../components/Warning";

function GameDevCorner() {
  return(
    <>
      <div className="page">
        <div className="flex flex-col space-y-4 items-center">
            <div className="pageCard w-[72rem] max-w-6xl px-4 pt-4 pb-4 flex flex-col space-y-4">
              <h1 className="pageCardTitle">Game jam games</h1>
              {/* Inked out */}
              <div className="pageCard w-[45rem] max-w-6xl bg-base-100 self-start">
                <div className="hero rounded-box">
                  <div className="hero-content flex-col lg:flex-row">
                    <img src="src/assets/images/inked_out.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                      <h1 className="text-5xl font-bold">Inked Out!</h1>
                      <p className="py-6">
                        This is a small game that I made for Mini Jam 111: Colors². 
                        Your goal is avoid puddles of your own colour, and of course the actual enemies themselves.
                        Aside from your own colour, various other puddles of different colours reap their own rewards.
                      </p>
                      <Link to="https://carsonbergen.itch.io/inked-out" target='_blank' rel='noopener noreferrer'>
                        <button className="visitPageButton">Check it out!</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bottled up */}
              <div className="pageCard w-[45rem] max-w-6xl bg-base-100 self-end">
                <div className="hero rounded-box">
                  <div className="hero-content flex-col lg:flex-row">
                    <img src="src/assets/images/bottled_up.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                      <h1 className="text-5xl font-bold">Bottled up</h1>
                      <p className="py-6">
                        Another small game that I made for Hardcore Punk Jam #3.
                        The idea is that you, the character, are struggling with an alcohol addiction.
                        You're stuck in some sort of ethereal dream, in which there is no escape. Sadly,
                        you're bound to 'die' in this game. Recently, I've heavily considered remaking this game
                        with better optimizations for the AI, along with overall better code and graphics.
                      </p>
                      <Link to="https://carsonbergen.itch.io/bottled-up" target='_blank' rel='noopener noreferrer'>
                        <button className="visitPageButton">Check it out!</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*Unfinished projects*/}
              <h1 className="pageCardTitle">Unfinished projects</h1>
              <p className="py-6 ml-12 mr-12 text-[1.1rem]">
                Like most devs, there is quite a few games that I have started, but not finished. Currently
                these projects are on indefinite hiatus, but (like always) they could be picked up at any time.
              </p>
              {/* Zoopocalypse */}
              <div className="pageCard w-[45rem] max-w-6xl bg-base-100 self-start">
                <div className="hero rounded-box">
                  <div className="hero-content flex-col lg:flex-row">
                    <ImageCarousel className='w-[50%]'>
                      <CarouselImage id="slide1" src="src/assets/gifs/zoopocalypse1.gif" prevId="#slide4" nextId="#slide2"></CarouselImage>
                      <CarouselImage id="slide2" src="src/assets/gifs/zoopocalypse2.gif" prevId="#slide1" nextId="#slide3"></CarouselImage>
                      <CarouselImage id="slide3" src="src/assets/gifs/zoopocalypse3.gif" prevId="#slide2" nextId="#slide4"></CarouselImage>
                      <CarouselImage id="slide4" src="src/assets/gifs/zoopocalypse4.gif" prevId="#slide3" nextId="#slide1"></CarouselImage>
                    </ImageCarousel>
                    <div>
                      <h1 className="text-5xl font-bold">Zoopocalypse</h1>
                      <p className="py-6">
                        The game was supposed to be about just anthropomorphic animals in the style of early video game mascots (think Crash Bandicoot, etc).
                        Obviously, the game didn't end up being released on any platform, but I learned quite a bit about texture painting in Blender, which is sure
                        to help me in future endeavours.  
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default GameDevCorner;