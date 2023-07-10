'use client';
import { useTheme } from "next-themes";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Link from "next/link";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const imageWidth = '300';
    const imageHeight = '400';

    return(
        <>
            <div className="page-navbar">
                {
                    (theme == 'dark') 
                    ?
                        <Image
                            src="/logo-light.svg"
                            width={imageWidth}
                            height={imageHeight}
                            alt="Carson Bergen"
                        />
                    :
                        <Image
                            src="/logo-dark.svg"
                            width={imageWidth}
                            height={imageHeight}
                            alt="Carson Bergen"
                        />
                }
                
                <Sidebar>
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
    )
}