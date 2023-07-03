import Sidebar from "./Sidebar";
import Link from "next/link";
// import toggleDarkMode from "../scripts/DarkModeToggle";

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
                    <Link className="page-link" href="/">Home</Link>
                    <Link className="page-link" href="/blog">Blog</Link>
                    <Link className="page-link" href="/projects">Projects</Link>
                    <Link className="page-link" href="/game-dev-corner">Game development corner</Link>
                    {/* <button className="page-basic-button" onClick={toggleDarkMode}>Toggle dark mode</button> */}
                </Sidebar>
            </div>
        </>
    );
}

export default Navbar;