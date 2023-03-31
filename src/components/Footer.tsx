import { Link } from "react-router-dom";
import { FaItchIo, FaReact, FaGithub } from 'react-icons/fa' ;
import { SiVite, SiDaisyui, SiTailwindcss } from 'react-icons/si';

function Footer() {
    return (
        <footer className="pageFooter">
            <div className="grid-flow-col items-center gap-4 md:place-self-left place-content-center absolute">
                <Link to="/">
                    <img className="icon" src="public/logo.png" width="36px" height="36px"></img>
                </Link>
                <label className="grid-flow-col text-lg text-white font-bold">Carson Bergen</label>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center place-content-center absolute items-center">
                <span className='text-lg font-bold'>
                    Made with
                </span>
                <Link to="https://vitejs.dev/" target='_blank' rel='noopener noreferrer'>
                    <SiVite className="icon" size='32px' />
                </Link>
                <Link to="https://react.dev/" target='_blank' rel='noopener noreferrer'>
                    <FaReact className="icon" size='32px' />
                </Link>
                <Link to="https://tailwindcss.com/" target='_blank' rel='noopener noreferrer'>
                    <SiTailwindcss className="icon" size='32px' />
                </Link>
                <Link to="https://daisyui.com/" target='_blank' rel='noopener noreferrer'>
                    <SiDaisyui className="icon" size='32px' />
                </Link>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <Link to="https://carsonbergen.itch.io/" target='_blank' rel='noopener noreferrer'>
                    <FaItchIo className="icon" size='32px' />
                </Link>
                <Link to="https://github.com/carsonbergen" target='_blank' rel='noopener noreferrer'>
                    <FaGithub className="icon" size='32px' />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;