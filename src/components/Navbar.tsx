import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import toggleDarkMode from "../scripts/DarkModeToggle";

function Navbar() {
    return (
        <>
            <div className="page-navbar place-items-center">
                <object
                    data="logo.svg"
                    width="250"
                >
                    Carson Bergen
                </object>
                <Sidebar>
                    <Link className="page-link" to="/">Home</Link>
                    <Link className="page-link" to="/blog">Blog</Link>
                    <Link className="page-link" to="/projects">Projects</Link>
                    <Link className="page-link" to="/game_dev_corner">Game development corner</Link>
                    <button className="page-basic-button" onClick={toggleDarkMode}>Toggle dark mode</button>
                </Sidebar>
            </div>
        </>
    );
}

export default Navbar;