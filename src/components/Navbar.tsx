import React from "react";

import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";


function Navbar() {
    return (
        <div className="navbarParent">
            <div className="w-[60rem]">
                <div className="navbar">
                    <div className="flex-1">
                        <Link className="homeButton" to="/">Carson Bergen</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/game_dev_corner">Game Development Corner</Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-auto">
                <div className="navbar">
                    <DarkModeToggle></DarkModeToggle>
                </div>
            </div>
            
        </div>
    );
}

export default Navbar;