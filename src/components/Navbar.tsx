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
                <h1 className="page-header relative text-purple font-acidic text-4xl justify-self-start z-50">
                    <h1 className="page-header absolute text-secondary font-acidic text-4xl justify-self-start blur-[2px] z-0">
                        Carson Bergen
                    </h1>
                    Carson Bergen
                </h1>

                {/* <DarkModeToggle/> */}
                <Sidebar>
                    <h1 className="z-50 text-primary">Hello</h1>
                </Sidebar>
            </div>
            {/* Divider */}
            <div className="page-dotted-divider" />
        </>
    );
}

export default Navbar;