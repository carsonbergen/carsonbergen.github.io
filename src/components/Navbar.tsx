import React from "react";
import { GoHome, GoBook, GoRepo } from "react-icons/go";
import { IoLogoGameControllerA } from "react-icons/io";

import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Sidebar from "./Sidebar";


function Navbar() {
    return (
        <>
            <div className="page-navbar">
                <h1 className="page-header justify-self-start">
                    Carson Bergen
                </h1>
                {/* <DarkModeToggle/> */}
                <Sidebar className="page-dropdown justify-self-end">
                </Sidebar>
            </div>
            {/* Divider */}
            <div className="page-dotted-divider" />
        </>
    );
}

export default Navbar;