import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import toggleDarkMode from "../scripts/DarkModeToggle";

function Navbar() {
    return (
        <>
            <div className="page-navbar place-items-center">
                {/* <h1 className="page-header relative text-yellow dark:text-purple font-acidic text-4xl justify-self-start z-50">
                    <h1 className="page-header absolute text-secondary dark:text-primary font-acidic text-4xl justify-self-start blur-[2px] z-0">
                        Carson Bergen
                    </h1>
                    Carson Bergen
                </h1> */}
                <object
                    data="logo.svg"
                    width="250"
                />
                <Sidebar>
                    <Link className="page-link" to="/">Home</Link>
                    <Link className="page-link" to="/blog">Blog</Link>
                    <Link className="page-link" to="/projects">Projects</Link>
                    <Link className="page-link" to="/game_dev_corner">Game development corner</Link>
                    <button className="page-basic-button" onClick={toggleDarkMode}>Toggle dark mode</button>
                </Sidebar>
            </div>
            {/* Divider */}
            <div className="page-dotted-divider" />
        </>
    );
}

export default Navbar;