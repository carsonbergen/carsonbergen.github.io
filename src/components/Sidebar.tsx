import { useState } from 'react';
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2';

function Sidebar(props: {children: any, className?:string}) {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <div className={`page-sidebar ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
                <div className='pt-6 flex flex-col w-full h-screen z-50'>
                    { props.children }
                </div>
            </div>
            <label 
                className='sidebar-button fixed swap swap-rotate z-50'
                tabIndex={0}>
                <input 
                    type='checkbox'
                    aria-label='open sidebar'
                    onClick={ () => setIsOpen(!isOpen) }
                />
                <div className='swap-off'>
                    { <HiBars3BottomRight className='page-dropdown-button w-8 h-8 text-secondary border-secondary rounded-none bg-primary dark:bg-secondary'/> }
                </div>
                <div className='swap-on'>
                    { <HiXMark className='page-dropdown-button w-8 h-8 text-secondary border-secondary rounded-full bg-yellow dark:bg-purple'/> }
                </div>
            </label>
        </>
    );
}

export default Sidebar;