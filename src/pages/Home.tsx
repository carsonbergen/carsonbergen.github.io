import React from "react";
import { Link } from "react-router-dom";
import "./../css/Main.css";


const website_information = (
    <>
        {/* Welcome text */}
        <div>
            <h1 className="page-header">
                Welcome!
            </h1>
            <p className="page-paragraph">
                Hello! This is my personal website. If you are at all interested in what I'm doing, I recommend checking out 
                my <Link className="inline-link" to="https://github.com/carsonbergen" target='_blank' rel='noopener noreferrer'>GitHub</Link> or 
                my <Link className="inline-link" to="https://carsonbergen.itch.io/" target='_blank' rel='noopener noreferrer'>itch.io</Link>! 
                I'll also be posting updates on my projects <Link className="inline-link" to="/projects">here</Link>, 
                and I'll be posting more general posts on my <Link className="inline-link" to="/blog/">blog</Link>.
            </p>
            <p className='page-paragraph'>
                In addition to that, and because game development is such a big part of my life, I also have 
                my "<Link className="inline-link" to="game_development_corner">Game Development Corner</Link>". 
                This is where I'll be posting links to my games, and other game dev related things!
            </p>
        </div>
        {/* About me */}
        <div>
            <h1 className="page-header">
                About me.
            </h1>
            <div className=""></div>
            <p className="page-paragraph">
                I'm currently a university student obtaining a Bachelor of Science degree with a major in Computer Science.
                When I'm not programming or working on assignments, I normally am learning a new language, playing games, making music, 
                or doing anything I find creative/interesting.
            </p>
        </div>
    </>
);

function Home() {
    return (
        <>
            <div className="page-body">
                {website_information}
            </div>
        </>
    );
}

export default Home;