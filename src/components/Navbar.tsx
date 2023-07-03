'use client';
import { useTheme } from "next-themes";
import Sidebar from "./Sidebar";
import Link from "next/link";

function Navbar() {
    const { theme, setTheme } = useTheme();
    return (
        <>
            <div className="page-navbar place-items-center">
                <object
                    data="logo.svg"
                    width="250"
                >
                    Carson Bergen
                </object>
                <Sidebar className="fixed">
                    <Link className="page-link" href="/">Home</Link>
                    <Link className="page-link" href="/blog">Blog</Link>
                    <Link className="page-link" href="/projects">Projects</Link>
                    <Link className="page-link" href="/game-dev-corner">Game development corner</Link>
                    <button 
                        className="page-basic-button" 
                        onClick={
                            () => {theme === "dark" ? setTheme("light") : setTheme("dark")}
                        }
                    >
                        Toggle dark mode
                    </button>
                </Sidebar>
            </div>
        </>
    );
}

export default Navbar;