'use client';
import { useTheme } from "next-themes";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [ mounted, setMounted ] = useState(false);
    const { theme, setTheme } = useTheme();
    const imageWidth = '300';
    const imageHeight = '400';

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <>
                <div className="page-navbar">
                    <h1 className="text-secondary dark:text-primary">
                        Loading...
                    </h1>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="page-navbar">
                {
                    (theme === 'dark') ?
                        <img
                            src="/images/logo-light.svg"
                            width={imageWidth}
                            height={imageHeight}
                            alt="Carson Bergen"
                        />
                    :
                        <img
                            src="/images/logo-dark.svg"
                            width={imageWidth}
                            height={imageHeight}
                            alt="Carson Bergen"
                        />
                }
                
                <Sidebar>
                    <Link className="page-link" href="/">Home</Link>
                    <Link className="page-link" href="/blog">Blog</Link>
                    <Link className="page-link" href="/projects">Projects</Link>
                    <Link className="page-link" href="/music">Music</Link>
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