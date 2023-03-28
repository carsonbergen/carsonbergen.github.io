import { Link } from "react-router-dom";
import { FaItchIo, FaReact, FaGithub } from 'react-icons/fa' ;
import { SiVite, SiDaisyui } from 'react-icons/si';

function Footer() {
    return (
        <footer className="pageFooter">
            <label className="items-center grid-flow-col text-lg">Carson Bergen</label>
            <div className="grid-flow-col gap-4 md:place-self-center place-content-center absolute">
                <span className='text-lg'>
                    Made with
                </span>
                <Link to="https://vitejs.dev/" target='_blank' rel='noopener noreferrer'>
                    <SiVite size='32px' />
                </Link>
                <Link to="https://react.dev/" target='_blank' rel='noopener noreferrer'>
                    <FaReact size='32px' />
                </Link>
                <Link to="https://daisyui.com/" target='_blank' rel='noopener noreferrer'>
                    <SiDaisyui size='32px' />
                </Link>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <Link to="https://carsonbergen.itch.io/" target='_blank' rel='noopener noreferrer'>
                    <FaItchIo size='32px' />
                </Link>
                <Link to="https://github.com/carsonbergen" target='_blank' rel='noopener noreferrer'>
                    <FaGithub size='32px' />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;