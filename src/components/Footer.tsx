import { Link } from "react-router-dom";
import { FaItchIo, FaReact, FaGithub } from 'react-icons/fa' ;
import { SiVite, SiDaisyui, SiTailwindcss } from 'react-icons/si';

function Footer() {
    return (
        <footer className="pageFooter grid items-center">
            <div className="flex flex-row items-center gap-4 place-self-center md:place-self-start place-content-center self-center">
                <Link to="/">
                    <img className="icon" src="public/logo.png" width="36px" height="36px"></img>
                </Link>
                <label className="regularText">Carson Bergen</label>
            </div>
            <div className="flex flex-row gap-4 place-self-center place-content-center items-center">
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
            <div className="flex flex-row gap-4 place-self-center place-content-center md:justify-self-end">
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