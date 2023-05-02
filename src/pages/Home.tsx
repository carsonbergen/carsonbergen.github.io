import React from "react";
import { Link } from "react-router-dom";
import "./../css/Main.css";

const website_information = (
    <>
        <p className="page-paragraph max-w-3xl">
            Hello! This is my personal werbsite, where I'll be posting some blogs, updates on personal projects, and various other things. If you are at all interested in what I'm doing, I recommend checking out my <Link className="inline-link" to="https://github.com/carsonbergen">GitHub</Link> or my <Link className="inline-link" to="https://carsonbergen.itch.io/">itch.io</Link>! I'll also be posting updates on my projects <Link className="inline-link" to="/projects">here</Link>, and I'll be posting more general posts on my <Link className="inline-link" to="/blog/">blog</Link>.
        </p>
        <p className="page-paragraph max-w-3xl">
            In addition to that, and because game development is such a big part of my life, I also have my "<Link className="inline-link" to="game_development_corner">Game Development Corner</Link>". This is where I'll be posting links to my games, and other game dev related things!
        </p>
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