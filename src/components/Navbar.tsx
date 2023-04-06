import React from "react";
import { GoHome, GoBook, GoRepo } from "react-icons/go";
import { IoLogoGameControllerA } from "react-icons/io";

import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";


function Navbar() {
    return (
        <>
            <div className="navbarParent">
                <div className="navbar">
                    <div className="flex flex-col">
                        <ul className="navbarMenu">
                            <div className="flex flex-col">
                                <Link className="homeButton" to="/">Carson Bergen</Link>
                            </div>
                            <li>
                                <Link className="regularButton" to="/">
                                    <GoHome className="min-w-[3rem] min-h-[1.5rem]"/>
                                    <span className="invisible lg:visible">Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="regularButton" to="/blog">
                                    <GoBook className="min-w-[3rem] min-h-[1.5rem]"/> 
                                    <span className="invisible lg:visible">Blog</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="regularButton" to="/projects">
                                    <GoRepo className="min-w-[3rem] min-h-[1.5rem]"/> 
                                    <span className="invisible lg:visible">Projects</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="regularButton" to="/game_dev_corner">
                                    <IoLogoGameControllerA className="min-w-[3rem] min-h-[1.5rem]"/>
                                    <span className="invisible lg:visible">Game Development Corner</span>
                                </Link>
                            </li>
                            <DarkModeToggle/>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;